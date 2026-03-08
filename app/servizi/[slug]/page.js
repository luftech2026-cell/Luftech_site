import { notFound } from "next/navigation";
import ServicePage from "../../../components/service-page";
import { getServiceBySlug, services } from "../../../lib/site-content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Servizio | Lufcore",
    };
  }

  return {
    title: `${service.title} | Lufcore`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
