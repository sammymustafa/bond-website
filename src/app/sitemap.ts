import type { MetadataRoute } from "next";
import { pages } from "@/content/registry";
import { glossary } from "@/content/glossary";
import { SITE_URL } from "@/content/seo";

// Last content change for pages built by hand outside the content registry.
// Update the date when you edit one of these pages.
const HAND_BUILT_UPDATED: Record<string, string> = {
  "/": "2026-09-24",
  "/book-a-demo": "2026-09-23",
  "/newsletter": "2026-09-23",
  "/careers": "2026-09-23",
  "/privacy-policy": "2026-07-19",
  "/terms-of-service": "2026-07-19",
};

const newest = (dates: string[]): string => dates.reduce((a, b) => (b > a ? b : a), "2026-01-01");

export default function sitemap(): MetadataRoute.Sitemap {
  // Index pages change whenever an entry in them changes.
  const blogUpdated = newest(pages.filter((p) => p.category === "blog").map((p) => p.lastUpdated));
  const glossaryUpdated = newest(glossary.map((t) => t.lastUpdated));

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: HAND_BUILT_UPDATED["/"], changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/book-a-demo`, lastModified: HAND_BUILT_UPDATED["/book-a-demo"], changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: blogUpdated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/glossary`, lastModified: glossaryUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/newsletter`, lastModified: HAND_BUILT_UPDATED["/newsletter"], changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/careers`, lastModified: HAND_BUILT_UPDATED["/careers"], changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: HAND_BUILT_UPDATED["/privacy-policy"], changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`, lastModified: HAND_BUILT_UPDATED["/terms-of-service"], changeFrequency: "monthly", priority: 0.3 },
  ];

  const priorityFor = (category: string): number => {
    switch (category) {
      case "product":
        return 0.9;
      case "comparison":
      case "audience":
      case "therapeutic":
      case "integration":
        return 0.8;
      case "guide":
      case "template":
      case "geography":
        return 0.7;
      case "hub":
      case "faq":
      case "report":
        return 0.6;
      default:
        return 0.5;
    }
  };

  const contentRoutes: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: p.lastUpdated,
    changeFrequency: p.category === "geography" || p.category === "comparison" ? "monthly" : "yearly",
    priority: priorityFor(p.category),
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = glossary.map((t) => ({
    url: `${SITE_URL}/glossary/${t.slug}`,
    lastModified: t.lastUpdated,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...contentRoutes, ...glossaryRoutes];
}
