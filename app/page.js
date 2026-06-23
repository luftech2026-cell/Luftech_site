import BrandLogo from "../components/brand-logo";
import SiteLink from "../components/site-link";
import SplineScene from "../components/spline-scene";
import {
  companyAddress,
  companyDetails,
  companyStatusNote,
  contactChannels,
  footerColumns,
  instagramProfile,
  responseCommitments,
  services,
  siteIdentity,
  whatsappLink,
} from "../lib/site-content";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const vatNumber = companyDetails.find((detail) => detail.label === "P. IVA")?.value;

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
                    <li className="scroll-to-section mobile-nav-hidden">
                      <a href="#top" className="active">
                        Home
                      </a>
                    </li>
                    <li className="scroll-to-section mobile-nav-hidden">
                      <a href="#about">Chi siamo</a>
                    </li>
                    <li className="scroll-to-section mobile-nav-hidden">
                      <a href="#services">Tecnologia</a>
                    </li>
                    <li className="scroll-to-section mobile-nav-visible">
                      <a href="#contact-us">Contatti</a>
                    </li>
                    <li className="scroll-to-section header-cta-item mobile-nav-visible">
                      <a href={whatsappLink} target="_blank" rel="noreferrer">
                        Contatta Lufcore
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

            <div className="hero-spline-frame">
              <div className="hero-spline-shell">
                <div className="hero-spline-shell__fallback" />
                <div className="hero-spline-label" aria-hidden="true">
                  <span>Lufcore</span>
                  <strong>Intelligenza operativa per ecosistemi digitali reali</strong>
                </div>
                <SplineScene
                  scene="/spline/hero.splinecode"
                  className="hero-spline-shell__viewer"
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
                Contatta Lufcore
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
                  <h2>Lufcore costruisce sistemi digitali dove tecnologia e operativita si incontrano.</h2>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-text">
                  <p>
                    Lufcore nasce per progettare e governare soluzioni digitali
                    orientate all'efficienza reale: automazioni, piattaforme
                    verticali, processi interni e strumenti tecnologici pensati
                    per ridurre attrito operativo.
                  </p>
                  <p>
                    Il focus non e produrre software generico, ma creare sistemi
                    capaci di sostenere asset concreti, misurabili e scalabili,
                    con una base tecnica ordinata e una direzione operativa chiara.
                  </p>
                  <p className="about-text__note">
                    Infissi360 rappresenta oggi il primo asset operativo gestito
                    da Lufcore: un progetto verticale dove tecnologia, processo
                    commerciale e automazione convergono in un unico ecosistema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section luftech-showcase" id="progetti">
          <div className="container">
            <article className="showcase-card">
              <div className="showcase-card__copy">
                <div className="section-heading">
                  <h6>Asset operativo</h6>
                  <h2>Infissi360 e il primo ecosistema verticale gestito da Lufcore.</h2>
                </div>
                <p>
                  Infissi360 opera nel settore serramenti ed e coordinato da
                  Lufcore come ambiente reale di evoluzione digitale: presenza
                  online, acquisizione, gestione contatti, flussi operativi e
                  automazioni vengono integrati in una struttura progressiva.
                </p>
                <p>
                  Il progetto permette di validare sul campo soluzioni applicate
                  a marketing operativo, organizzazione dei dati, controllo dei
                  processi e miglioramento continuo dell'esperienza.
                </p>
              </div>

              <div className="showcase-card__actions">
                <span className="showcase-card__label">Asset online</span>
                <a
                  href="https://www.infissi360.com"
                  className="showcase-card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.infissi360.com
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section luftech-services" id="services">
          <div className="container">
            <div className="section-heading section-center">
              <h6>Capacita tecnologiche</h6>
              <h2>Le aree su cui Lufcore costruisce e governa sistemi digitali</h2>
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
                        Apri capacita
                      </SiteLink>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="services-inline-link">
              <SiteLink href="/servizi">
                Apri la panoramica delle capacita operative
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
                  <h2>Canali ufficiali Lufcore.</h2>
                </div>

                <p className="contact-intro">
                  Per comunicazioni operative, amministrative o richieste
                  relative ai progetti gestiti da Lufcore, puoi utilizzare i
                  canali ufficiali indicati.
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
                      Contatta Lufcore <i className="fa fa-arrow-right" />
                    </a>
                    <a href="tel:+393793547052" className="main-button-icon ghost-action">
                      Chiama ora
                    </a>
                  </div>

                  <div className="contact-socials">
                    <a
                      href={instagramProfile.href}
                      className="contact-socials__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram" />
                      <span>{instagramProfile.label}</span>
                    </a>
                  </div>

                  <p className="contact-legal-note">
                    Prima di inviare dati personali consulta la{" "}
                    <SiteLink href="/privacy">Privacy Policy</SiteLink>. Il sito
                    non utilizza cookie di analytics o marketing: maggiori
                    informazioni nella <SiteLink href="/cookie">Cookie Policy</SiteLink>.
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
                  Lufcore sviluppa e governa progetti digitali, automazioni e
                  infrastrutture operative. Oggi coordina l'evoluzione
                  tecnologica di Infissi360.
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
                  <h4>Comunicazioni ufficiali</h4>
                  <p>Telefono, email operative, amministrazione e assistenza sempre visibili.</p>
                </div>

                <div className="contact-tab__panel">
                  <span className="contact-tab__panel-label">Sede</span>
                  <strong>{companyAddress}</strong>
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
                  {vatNumber ? (
                    <span className="contact-tab__copyright-meta">
                      P. IVA {vatNumber}
                    </span>
                  ) : null}
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
      <a
        href={whatsappLink}
        className="floating-whatsapp-button"
        target="_blank"
        rel="noreferrer"
        aria-label="Contatta Lufcore su WhatsApp"
      >
        <i className="fa fa-whatsapp" />
      </a>
    </main>
  );
}
