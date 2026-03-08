import SiteLink from "../../components/site-link";
import SubpageShell from "../../components/subpage-shell";
import {
  serviceOverviewStats,
  serviceProcess,
  services,
} from "../../lib/site-content";

export const metadata = {
  title: "Servizi | Lufcore",
  description:
    "Panoramica dei servizi Lufcore: siti web, gestionali e web app costruiti intorno al lavoro reale.",
};

export default function ServicesPage() {
  return (
    <SubpageShell
      eyebrow="Servizi"
      title="Cosa possiamo costruire per te"
      intro="Lavoriamo su siti web, gestionali, web app, automazioni e integrazioni con una logica semplice: capire il flusso reale, ridurre attrito e consegnare strumenti usabili."
      summary="Qui trovi una panoramica dei servizi principali e del metodo con cui li sviluppiamo."
    >
      <article className="services-overview">
        <section className="services-overview__stats">
          {serviceOverviewStats.map((stat) => (
            <div className="service-highlight-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </section>

        <section className="services-overview__grid">
          {services.map((service) => (
            <article className="services-overview__card" key={service.slug}>
              <div className="service-box__icon">
                <i className={`fa ${service.icon}`} />
              </div>
              <h2>{service.title}</h2>
              <p>{service.shortDescription}</p>
              <ul>
                {service.cardPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <SiteLink href={`/servizi/${service.slug}`}>Apri servizio</SiteLink>
            </article>
          ))}
        </section>

        <section className="services-overview__process">
          <h2>Metodo di lavoro</h2>
          <div className="services-overview__process-grid">
            {serviceProcess.map((step) => (
              <article className="service-process-card" key={step.title}>
                <span>{step.title}</span>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </article>
    </SubpageShell>
  );
}
