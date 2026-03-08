import LegalPage from "../../components/legal-page";
import { cookieDocument } from "../../lib/site-content";

export const metadata = {
  title: "Cookie Policy | Lufcore",
  description:
    "Cookie policy di Lufcore con panoramica sulle tecnologie tecniche attive e sui fornitori esterni attualmente rilevati.",
};

export default function CookiePage() {
  return <LegalPage document={cookieDocument} />;
}
