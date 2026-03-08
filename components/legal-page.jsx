import { companyDetails, siteIdentity } from "../lib/site-content";
import SubpageShell from "./subpage-shell";

export default function LegalPage({ document }) {
  return (
    <SubpageShell
      eyebrow={document.eyebrow}
      title={document.title}
      intro={document.intro}
      summary={document.summary}
    >
      <article className="legal-document">
        <div className="legal-document__meta">
          <div>
            <span>Ultimo aggiornamento</span>
            <strong>{siteIdentity.updatedAt}</strong>
          </div>
          {companyDetails.map((detail) => (
            <div key={detail.label}>
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </div>
          ))}
        </div>

        <div className="legal-document__sections">
          {document.sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list?.length ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </SubpageShell>
  );
}
