import LegalPage from "../../components/legal-page";
import { privacyDocument } from "../../lib/site-content";

export const metadata = {
  title: "Privacy Policy | Lufcore",
  description:
    "Informativa privacy di Lufcore: dati trattati, finalita, basi giuridiche, destinatari e diritti dell'interessato.",
};

export default function PrivacyPage() {
  return <LegalPage document={privacyDocument} />;
}
