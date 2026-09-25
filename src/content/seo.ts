import type { Metadata } from "next";
import type { GlossaryTerm, PageCategory, SeoPage } from "./types";

export const SITE_URL = "https://bondtrials.com";
export const BRAND = "Bond Health";
export const ORG_ID = `${SITE_URL}/#organization`;

export function buildCiteIndex(page: Pick<SeoPage, "sources">): Map<string, number> {
  return new Map(page.sources.map((s, i) => [s.id, i + 1]));
}

export function buildMetadata(page: SeoPage): Metadata {
  const url = `${SITE_URL}${page.path}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} | ${BRAND}`,
      description: page.description,
      url,
      siteName: BRAND,
      locale: "en_US",
      type: page.category === "blog" ? "article" : "website",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${BRAND}`,
      description: page.description,
      images: ["/images/og-image.png"],
    },
  };
}

/** Full metadata for hand-built pages outside the content registry. */
export function staticPageMetadata(opts: { path: string; title: string; description: string; ogTitle?: string }): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  const ogTitle = opts.ogTitle ?? `${opts.title} | ${BRAND}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url,
      siteName: BRAND,
      locale: "en_US",
      type: "website",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description,
      images: ["/images/og-image.png"],
    },
  };
}

interface Crumb {
  label: string;
  href: string;
}

const HUB_SEGMENTS: Record<string, Crumb> = {
  compare: { label: "Compare", href: "/compare" },
  for: { label: "Solutions", href: "/for" },
  integrations: { label: "Integrations", href: "/integrations" },
  "clinical-trial-recruitment": { label: "By location", href: "/clinical-trial-recruitment" },
  templates: { label: "Templates", href: "/templates" },
  guides: { label: "Guides", href: "/guides" },
  blog: { label: "Blog", href: "/blog" },
  glossary: { label: "Glossary", href: "/glossary" },
};

const CATEGORY_PARENT: Partial<Record<PageCategory, Crumb>> = {
  therapeutic: { label: "Therapeutic areas", href: "/therapeutic-areas" },
};

export function breadcrumbsFor(page: Pick<SeoPage, "path" | "category" | "h1">): Crumb[] {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }];
  const segments = page.path.replace(/^\//, "").split("/");
  if (segments.length > 1) {
    const hub = HUB_SEGMENTS[segments[0]];
    if (hub && hub.href !== page.path) crumbs.push(hub);
  } else {
    const parent = CATEGORY_PARENT[page.category];
    if (parent) crumbs.push(parent);
  }
  crumbs.push({ label: page.h1, href: page.path });
  return crumbs;
}

export function categoryLabel(category: PageCategory): string {
  const labels: Record<PageCategory, string> = {
    product: "Product",
    hub: "Overview",
    comparison: "Comparison",
    audience: "Solutions",
    therapeutic: "Therapeutic area",
    integration: "Integration",
    geography: "By location",
    template: "Template",
    guide: "Guide",
    blog: "Blog",
    faq: "FAQ",
    newsletter: "Newsletter",
    report: "Report",
    glossary: "Glossary",
  };
  return labels[category];
}

export function showsLastUpdated(page: SeoPage): boolean {
  if (page.showLastUpdated !== undefined) return page.showLastUpdated;
  return page.category !== "hub";
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

export function jsonLdFor(page: SeoPage): Record<string, unknown>[] {
  const url = `${SITE_URL}${page.path}`;
  const crumbs = breadcrumbsFor(page);
  const graph: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: `${SITE_URL}${c.href}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": page.category === "blog" ? "BlogPosting" : "Article",
      "@id": `${url}#article`,
      headline: page.h1,
      description: page.description,
      url,
      mainEntityOfPage: url,
      datePublished: page.blog?.date ?? page.lastUpdated,
      dateModified: page.lastUpdated,
      author: page.blog?.author
        ? { "@type": "Person", name: page.blog.author, worksFor: { "@id": ORG_ID } }
        : { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
      citation: page.sources.filter((s) => s.url).map((s) => s.url),
    },
  ];
  if (page.faq && page.faq.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: stripInline(f.a) },
      })),
    });
  }
  return graph;
}

/** Removes inline markup so text can be used in JSON-LD and meta tags. */
export function stripInline(text: string): string {
  return text
    .replace(/\{\{cite:[^}]+\}\}/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Presents a glossary term as a page so it can share the article renderer. */
export function glossaryTermToPage(term: GlossaryTerm): SeoPage {
  return {
    path: `/glossary/${term.slug}`,
    category: "glossary",
    title: `${term.term}: definition`,
    description: term.short.length > 160 ? `${term.short.slice(0, 157)}...` : term.short,
    eyebrow: "Glossary",
    h1: term.term,
    intro: term.short,
    summary: term.short,
    lastUpdated: term.lastUpdated,
    sections: [{ id: "definition", heading: `What does ${term.term} mean in clinical research?`, blocks: term.body }],
    sources: term.sources,
    related: term.related,
  };
}
