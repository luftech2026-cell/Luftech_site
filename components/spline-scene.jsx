"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

function isValidSplineScene(scene) {
  return /^(https:\/\/prod\.spline\.design\/.+\/scene\.splinecode|\/.+\.splinecode)$/i.test(
    scene
  );
}

export default function SplineScene({
  scene,
  className = "",
  loaderClassName = "",
  loaderLabel = "Caricamento scena 3D",
  decorative = false,
  fallbackTitle = "Contenuto 3D in arrivo",
  fallbackText = "Inserisci un link Spline valido per visualizzare questa scena.",
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsLoaded(false);
  }, [scene]);

  if (!isValidSplineScene(scene)) {
    return (
      <div className={`spline-fallback ${className}`}>
        <span className="fallback-pill">Spline</span>
        <h3>{fallbackTitle}</h3>
        <p>{fallbackText}</p>
      </div>
    );
  }

  return (
    <div
      className={`spline-host ${className} ${isLoaded ? "is-ready" : "is-loading"}`}
      aria-hidden={decorative ? "true" : undefined}
    >
      <div className={`spline-loader ${loaderClassName}`} aria-hidden="true">
        <span>{loaderLabel}</span>
      </div>

      {isMounted ? (
        <Spline
          scene={scene}
          renderOnDemand={false}
          onLoad={() => setIsLoaded(true)}
        />
      ) : null}
    </div>
  );
}
