"use client";

import { useEffect, useId, useState } from "react";

const SPLINE_ENABLE_EVENT = "lufcore:spline-enable";

export default function SplineScene({
  scene,
  className,
  label = "sfondo 3D",
  showControl = false,
}) {
  const statusId = useId();
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [SplineComponent, setSplineComponent] = useState(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);
    const enableSpline = () => {
      if (!motionQuery.matches) {
        setEnabled(true);
      }
    };

    updateMotionPreference();
    window.addEventListener(SPLINE_ENABLE_EVENT, enableSpline);
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      window.removeEventListener(SPLINE_ENABLE_EVENT, enableSpline);
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const activateSpline = () => {
    if (reducedMotion) {
      return;
    }

    window.dispatchEvent(new Event(SPLINE_ENABLE_EVENT));
  };

  useEffect(() => {
    let cancelled = false;

    if (!enabled || reducedMotion || failed || SplineComponent) {
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
  }, [enabled, failed, reducedMotion, SplineComponent]);

  return (
    <>
      {enabled && SplineComponent && !failed ? (
        <div className={className} data-spline-status={loaded ? "loaded" : "loading"}>
          <SplineComponent
            scene={scene}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        </div>
      ) : null}

      {showControl ? (
        <div className="spline-consent-panel">
          <p id={statusId}>
            {reducedMotion
              ? "Animazione 3D disattivata per la tua preferenza di movimento ridotto."
              : failed
                ? "Sfondo 3D non disponibile: resta attivo il fallback statico."
                : enabled
                  ? loaded
                    ? "Sfondo 3D locale attivo."
                    : "Caricamento dello sfondo 3D locale..."
                  : "Fallback statico attivo. Lo sfondo 3D viene caricato solo dopo il tuo click."}
          </p>
          {!enabled && !failed && !reducedMotion ? (
            <button
              type="button"
              className="spline-consent-button"
              onClick={activateSpline}
              aria-describedby={statusId}
            >
              Attiva sfondo 3D
            </button>
          ) : null}
          <span className="spline-consent-panel__meta">
            Asset self-hosted: {label}
          </span>
        </div>
      ) : null}
    </>
  );
}
