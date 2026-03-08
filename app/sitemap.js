import { siteIdentity, services } from "../lib/site-content";

export default function sitemap() {
  const staticPages = [
    "/",
    "/servizi",
    "/privacy",
    "/cookie",
    "/termini",
  ].map((path) => ({
    url: `${siteIdentity.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((service) => ({
    url: `${siteIdentity.siteUrl}/servizi/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages];
}
