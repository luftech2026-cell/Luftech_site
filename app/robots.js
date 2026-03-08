import { siteIdentity } from "../lib/site-content";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteIdentity.siteUrl}/sitemap.xml`,
  };
}
