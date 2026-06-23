"use client";

import { useEffect, useId, useState } from "react";

function disableSplineWatermark(splineApp) {
  const pipeline = splineApp?._renderer?.pipeline;

  if (!pipeline) {
    return;
  }

  if (typeof pipeline.setWatermark === "function") {
    pipeline.setWatermark(null);
  }

  if (pipeline.logoOverlayPass) {
    pipeline.logoOverlayPass.enabled = false;
  }

  splineApp.requestRender?.();
}

export default function SplineScene({ scene, className }) {
  const statusId = useId();
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [SplineComponent, setSplineComponent] = useState(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);
    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (reducedMotion || failed || SplineComponent) {
      return () => {
        cancelled = true;
      };
    }

    import("@splinetool/react-spline")
      .then((module) => {
        if (!cancelled) {
          setSplineComponent(() => module.default);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFailed(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [failed, reducedMotion, SplineComponent]);

  return (
    <>
      {SplineComponent && !failed ? (
        <div
          className={className}
          data-spline-status={loaded ? "loaded" : "loading"}
          aria-hidden="true"
        >
          <SplineComponent
            scene={scene}
            onLoad={(splineApp) => {
              disableSplineWatermark(splineApp);
              window.requestAnimationFrame(() => disableSplineWatermark(splineApp));
              window.setTimeout(() => disableSplineWatermark(splineApp), 250);
              setLoaded(true);
            }}
            onError={() => setFailed(true)}
          />
        </div>
      ) : null}
      <span id={statusId} className="visually-hidden">
        {reducedMotion || failed
          ? "Sfondo decorativo statico attivo."
          : "Sfondo decorativo 3D caricato da asset locali."}
      </span>
    </>
  );
}
