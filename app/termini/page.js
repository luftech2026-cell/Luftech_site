import LegalPage from "../../components/legal-page";
import { termsDocument } from "../../lib/site-content";

export const metadata = {
  title: "Termini di utilizzo | Lufcore",
  description:
    "Termini di utilizzo del sito Lufcore: natura dei contenuti, richieste commerciali, proprieta intellettuale e limiti di responsabilita.",
};

export default function TermsPage() {
  return <LegalPage document={termsDocument} />;
}
