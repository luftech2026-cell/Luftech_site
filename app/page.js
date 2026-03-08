import BrandLogo from "../components/brand-logo";
import SiteLink from "../components/site-link";
import {
  companyDetails,
  companyStatusNote,
  contactChannels,
  footerColumns,
  responseCommitments,
  services,
  siteIdentity,
  whatsappLink,
} from "../lib/site-content";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="luftech-page">
      <div className="luftech-content">
        <header className="header-area header-sticky background-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <a href="#top" className="logo">
                    <BrandLogo variant="header" priority />
                  </a>

                  <ul className="nav">
                    <li className="scroll-to-section">
                      <a href="#top" className="active">
                        Home
                      </a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#about">Chi siamo</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#services">Servizi</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#contact-us">Contatti</a>
                    </li>
                    <li className="scroll-to-section header-cta-item">
                      <a href={whatsappLink} target="_blank" rel="noreferrer">
                        WhatsApp
                      </a>
                    </li>
                  </ul>

                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <section className="luftech-hero" id="top">
          <div className="container">
            <div className="hero-copy-block">
              <div className="hero-heading">
                <h6>{siteIdentity.heroEyebrow}</h6>
                <h2>
                  {siteIdentity.heroTitle}{" "}
                  <span className="hero-heading__accent">
                    {siteIdentity.heroTitleAccent}
                  </span>
                </h2>
              </div>
              <p className="hero-copy-text">{siteIdentity.heroIntro}</p>
            </div>

            <div className="hero-spline-frame" aria-hidden="true">
              <div className="hero-spline-shell">
                <div className="hero-spline-shell__fallback" />
                <spline-viewer
                  className="hero-spline-shell__viewer"
                  url={siteIdentity.heroScene}
                  loading="eager"
                />
              </div>
            </div>

            <div className="hero-actions">
              <a
                href={whatsappLink}
                className="main-filled-button"
                target="_blank"
                rel="noreferrer"
              >
                Scrivici su WhatsApp
              </a>
              <a href="#contact-us" className="main-stroked-button dark-button">
                Contatti
              </a>
            </div>
          </div>
        </section>

        <section className="section luftech-about" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="section-heading">
                  <h6>Chi siamo</h6>
                  <h2>Creiamo strumenti digitali semplici, ordinati e utili.</h2>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-text">
                  <p>
                    Sviluppiamo siti web, gestionali e web app su misura per chi
                    cerca una soluzione concreta e non qualcosa di generico.
                  </p>
                  <p>
                    Lavoriamo con un obiettivo chiaro: rendere il tuo progetto
                    piu forte online e il tuo lavoro piu fluido ogni giorno.
                  </p>
                  <p className="about-text__note">
                    Ogni progetto parte da un caso reale: capire il flusso,
                    togliere attrito, costruire solo quello che serve davvero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section luftech-services" id="services">
          <div className="container">
            <div className="section-heading section-center">
              <h6>Servizi</h6>
              <h2>Cosa possiamo sviluppare per te</h2>
            </div>

            <div className="row">
              {services.map((service) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={service.title}>
                  <article className="service-box">
                    <div className="service-box__icon">
                      <i className={`fa ${service.icon}`} />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.shortDescription}</p>
                    <ul className="service-box__list">
                      {service.cardPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="service-box__footer">
                      <span>{service.idealFor}</span>
                      <SiteLink href={`/servizi/${service.slug}`}>
                        Approfondisci
                      </SiteLink>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="services-inline-link">
              <SiteLink href="/servizi">
                Apri la panoramica completa dei servizi
              </SiteLink>
            </div>
          </div>
        </section>

        <section className="section luftech-contact" id="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="section-heading">
                  <h6>Contatti</h6>
                  <h2>Scrivici o chiamaci direttamente.</h2>
                </div>

                <p className="contact-intro">
                  Se hai bisogno di un sito, un gestionale o una web app, puoi
                  contattarci subito qui.
                </p>

                <div className="contact-commitments">
                  {responseCommitments.map((item) => (
                    <div className="contact-commitments__item" key={item}>
                      <span className="contact-commitments__dot" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="contact-panel">
                  <div className="contact-grid">
                    {contactChannels.map((contact) => (
                      <a className="contact-card" href={contact.href} key={contact.value}>
                        <span className="contact-card__icon">
                          <i className={`fa ${contact.icon}`} />
                        </span>
                        <span className="contact-card__label">{contact.label}</span>
                        <strong>{contact.value}</strong>
                      </a>
                    ))}
                  </div>

                  <div className="contact-actions">
                    <a
                      href={whatsappLink}
                      className="main-button-icon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Scrivici su WhatsApp <i className="fa fa-arrow-right" />
                    </a>
                    <a href="tel:+393793547052" className="main-button-icon ghost-action">
                      Chiama ora
                    </a>
                  </div>

                  <p className="contact-legal-note">
                    Contattandoci confermi di aver letto la{" "}
                    <SiteLink href="/privacy">Privacy Policy</SiteLink>, la{" "}
                    <SiteLink href="/cookie">Cookie Policy</SiteLink> e i{" "}
                    <SiteLink href="/termini">Termini di utilizzo</SiteLink>.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-tab">
              <div className="contact-tab__brand">
                <div className="contact-tab__brand-logo">
                  <BrandLogo variant="section" />
                </div>
                <p>
                  Siti web, gestionali e web app sviluppati per aziende,
                  professionisti e attivita che cercano una soluzione concreta.
                </p>
                <p className="contact-tab__status-note">{companyStatusNote}</p>

                <div className="contact-tab__meta">
                  {companyDetails.map((detail) => (
                    <div className="contact-tab__meta-item" key={detail.label}>
                      <span>{detail.label}</span>
                      <strong>{detail.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-tab__directory">
                <div className="contact-tab__panel">
                  <span className="contact-tab__panel-label">Contatti</span>
                  <h4>Supporto rapido</h4>
                  <p>Telefono, email operative e sede base sempre visibili.</p>
                </div>

                <div className="contact-tab__panel">
                  <span className="contact-tab__panel-label">Sede</span>
                  <strong>Italia</strong>
                </div>

                <div className="contact-tab__panel">
                  <span className="contact-tab__panel-label">Telefono</span>
                  <a href="tel:+393793547052">+39 379 354 7052</a>
                </div>

                <div className="contact-tab__panel">
                  <span className="contact-tab__panel-label">Email</span>
                  <div className="contact-tab__emails">
                    <a href="mailto:info@lufcore.it">info@lufcore.it</a>
                    <a href="mailto:amministrazione@lufcore.it">
                      amministrazione@lufcore.it
                    </a>
                    <a href="mailto:assistenza@lufcore.it">
                      assistenza@lufcore.it
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-tab__footer" id="footer-links">
                {footerColumns.map((column) => (
                  <div className="contact-tab__footer-column" key={column.title}>
                    <span className="contact-tab__footer-title">{column.title}</span>
                    <div className="contact-tab__footer-links">
                      {column.links.map((link) => (
                        <SiteLink href={link.href} key={link.label}>
                          {link.label}
                        </SiteLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-tab__bottom">
                <span className="contact-tab__copyright">
                  <strong>{siteIdentity.siteLabel}</strong>
                  <span>&copy; {currentYear}</span>
                </span>
                <div className="contact-tab__bottom-links">
                  <SiteLink href="/privacy">Privacy</SiteLink>
                  <SiteLink href="/cookie">Cookie</SiteLink>
                  <SiteLink href="/termini">Termini</SiteLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
