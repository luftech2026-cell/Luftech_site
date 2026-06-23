import {
  services,
  siteIdentity,
  whatsappLink,
} from "../lib/site-content";
import SiteLink from "./site-link";
import SubpageShell from "./subpage-shell";

export default function ServicePage({ service }) {
  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <SubpageShell
      eyebrow="Capacita operativa"
      title={service.title}
      intro={service.shortDescription}
      summary={service.idealFor}
    >
      <article className="service-document">
        <section className="service-document__summary">
          <div className="service-highlight-card">
            <span>Per chi e pensato</span>
            <strong>{service.idealFor}</strong>
          </div>
          <div className="service-highlight-card">
            <span>Cosa include</span>
            <strong>{service.deliverables.length} elementi principali</strong>
          </div>
          <div className="service-highlight-card">
            <span>Primo riscontro</span>
            <strong>{siteIdentity.responseWindow}</strong>
          </div>
        </section>

        <section className="service-document__grid">
          <div className="service-document__panel">
            <h2>Cosa viene impostato</h2>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-document__panel">
            <h2>Come lavoriamo</h2>
            <ol>
              {service.workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-document__faq">
          <h2>Domande frequenti</h2>
          <div className="service-document__faq-grid">
            {service.faqs.map((faq) => (
              <article className="service-faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-document__cta">
          <div>
            <span>Governare prima di costruire</span>
            <h2>La tecnologia viene progettata intorno al processo, non intorno a soluzioni generiche.</h2>
            <p>
              Lufcore valuta contesto, dati, vincoli e priorita operative prima
              di introdurre nuove automazioni, interfacce o moduli digitali.
            </p>
          </div>

          <div className="service-document__actions">
            <SiteLink
              href={whatsappLink}
              className="main-filled-button"
              target="_blank"
              rel="noreferrer"
            >
              Contatta Lufcore
            </SiteLink>
            <SiteLink href="/#contact-us" className="main-stroked-button dark-button">
              Contatti
            </SiteLink>
          </div>
        </section>

        <section className="service-document__related">
          <h2>Altre capacita collegate</h2>
          <div className="service-document__related-grid">
            {relatedServices.map((item) => (
              <article className="service-related-card" key={item.slug}>
                <span>{item.title}</span>
                <p>{item.shortDescription}</p>
                <SiteLink href={`/servizi/${item.slug}`}>Apri capacita</SiteLink>
              </article>
            ))}
          </div>
        </section>
      </article>
    </SubpageShell>
  );
}
