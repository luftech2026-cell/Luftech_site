import SiteLink from "../../components/site-link";
import SubpageShell from "../../components/subpage-shell";
import {
  serviceOverviewStats,
  serviceProcess,
  services,
} from "../../lib/site-content";

export const metadata = {
  title: "Capacita tecnologiche | Lufcore",
  description:
    "Capacita operative Lufcore: AI applicata, automazioni, dati, ecosistemi digitali, piattaforme e integrazioni.",
};

export default function ServicesPage() {
  return (
    <SubpageShell
      eyebrow="Capacita tecnologiche"
      title="Le aree operative su cui Lufcore costruisce sistemi digitali"
      intro="Lufcore lavora su ecosistemi digitali, automazioni, piattaforme, dati e integrazioni con una logica precisa: leggere il processo reale, aumentare controllo e trasformare la tecnologia in vantaggio operativo."
      summary="Questa sezione descrive le capacita tecniche che sostengono gli asset gestiti da Lufcore, incluso Infissi360."
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
              <SiteLink href={`/servizi/${service.slug}`}>Apri capacita</SiteLink>
            </article>
          ))}
        </section>

        <section className="services-overview__process">
          <h2>Metodo operativo</h2>
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
