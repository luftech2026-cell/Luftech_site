"use client";

import { useEffect, useId, useRef, useState } from "react";
import SiteLink from "./site-link";

export default function PrivacyCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="privacy-center-trigger"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        Privacy
      </button>

      {isOpen ? (
        <div className="privacy-center-backdrop" role="presentation">
          <section
            ref={dialogRef}
            className="privacy-center-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="privacy-center-close"
              onClick={() => setIsOpen(false)}
              aria-label="Chiudi centro privacy"
            >
              ×
            </button>
            <span className="privacy-center-eyebrow">Centro privacy</span>
            <h2 id={titleId}>Nessun cookie opzionale attivo</h2>
            <p>
              Lufcore non utilizza cookie di analytics, profilazione o marketing.
              Font, immagini e componenti grafici sono serviti localmente senza
              contattare fornitori esterni durante la navigazione.
            </p>
            <div className="privacy-center-status">
              <span aria-hidden="true" />
              <div>
                <strong>Tecnologie necessarie</strong>
                <p>Attive solo per sicurezza, consegna e funzionamento del sito.</p>
              </div>
            </div>
            <p className="privacy-center-note">
              WhatsApp e Instagram vengono contattati soltanto dopo un tuo click
              sui rispettivi collegamenti.
            </p>
            <div className="privacy-center-links">
              <SiteLink href="/privacy">Privacy Policy</SiteLink>
              <SiteLink href="/cookie">Cookie Policy</SiteLink>
              <button type="button" onClick={() => setIsOpen(false)}>
                Chiudi
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
