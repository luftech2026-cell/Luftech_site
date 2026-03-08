import BrandLogo from "./brand-logo";
import SiteLink from "./site-link";
import {
  footerColumns,
  legalQuickLinks,
  siteIdentity,
  whatsappLink,
} from "../lib/site-content";

export default function SubpageShell({
  eyebrow,
  title,
  intro,
  summary,
  children,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <main className="luftech-subpage">
      <div className="luftech-subpage__inner">
        <header className="subpage-topbar">
          <div className="subpage-topbar__brand">
            <SiteLink href="/" className="subpage-topbar__logo">
              <BrandLogo variant="header" priority />
            </SiteLink>
          </div>

          <nav className="subpage-topbar__nav" aria-label="Navigazione secondaria">
            {legalQuickLinks.map((item) => (
              <SiteLink key={item.href} href={item.href}>
                {item.label}
              </SiteLink>
            ))}
            <SiteLink href="/#contact-us">Contatti</SiteLink>
          </nav>
        </header>

        <section className="subpage-hero">
          <p className="subpage-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="subpage-hero__intro">{intro}</p>
          {summary ? <p className="subpage-hero__summary">{summary}</p> : null}
        </section>

        <div className="subpage-card">{children}</div>

        <footer className="subpage-footer">
          <div className="subpage-footer__cta">
            <div>
              <p className="subpage-footer__eyebrow">{siteIdentity.siteLabel}</p>
              <h2>Se vuoi, il prossimo passo e parlarne con noi.</h2>
              <p>
                Scrivici per un confronto iniziale, una stima orientativa o una
                proposta di lavoro piu precisa.
              </p>
            </div>

            <div className="subpage-footer__actions">
              <SiteLink
                href={whatsappLink}
                className="main-filled-button"
                target="_blank"
                rel="noreferrer"
              >
                Scrivici su WhatsApp
              </SiteLink>
              <SiteLink href="/#contact-us" className="main-stroked-button dark-button">
                Vai ai contatti
              </SiteLink>
            </div>
          </div>

          <div className="subpage-footer__grid">
            {footerColumns.map((column) => (
              <div className="subpage-footer__column" key={column.title}>
                <span>{column.title}</span>
                <div className="subpage-footer__links">
                  {column.links.map((link) => (
                    <SiteLink href={link.href} key={link.label}>
                      {link.label}
                    </SiteLink>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="subpage-footer__bottom">
            <span>
              {siteIdentity.siteLabel} &copy; {currentYear}
            </span>
            <div className="subpage-footer__legal">
              <SiteLink href="/privacy">Privacy</SiteLink>
              <SiteLink href="/cookie">Cookie</SiteLink>
              <SiteLink href="/termini">Termini</SiteLink>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
