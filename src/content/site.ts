import { pages } from "./registry";
import { glossary } from "./glossary";
import {
  audienceLinks,
  compareLinks,
  geographyLinks,
  integrationLinks,
  productLinks,
  resourceLinks,
  therapeuticLinks,
} from "./nav";
import type { PageCategory, SeoPage } from "./types";

const byPath = new Map<string, SeoPage>(pages.map((p) => [p.path, p]));

export function getPage(path: string): SeoPage | undefined {
  return byPath.get(path);
}

const navOrder = new Map<string, number>(
  [
    ...productLinks,
    ...audienceLinks,
    ...therapeuticLinks,
    ...geographyLinks,
    ...integrationLinks,
    ...compareLinks,
    ...resourceLinks,
  ].map((l, i) => [l.href, i]),
);

export function pagesInCategory(category: PageCategory | PageCategory[], exclude: string[] = []): SeoPage[] {
  const cats = Array.isArray(category) ? category : [category];
  return pages
    .filter((p) => cats.includes(p.category) && !exclude.includes(p.path))
    .sort((a, b) => {
      const ai = navOrder.get(a.path);
      const bi = navOrder.get(b.path);
      if (ai !== undefined && bi !== undefined) return ai - bi;
      if (ai !== undefined) return -1;
      if (bi !== undefined) return 1;
      return a.h1.localeCompare(b.h1);
    });
}

export function blogPosts(): SeoPage[] {
  return pages
    .filter((p) => p.category === "blog" && p.blog)
    .sort((a, b) => (a.blog!.date < b.blog!.date ? 1 : -1));
}

/** Static routes that exist outside the content registry. */
export const STATIC_ROUTES = [
  "/",
  "/careers",
  "/privacy-policy",
  "/terms-of-service",
  "/book-a-demo",
  "/blog",
  "/glossary",
  "/newsletter",
];

/** Every internal route the site serves, used by the sitemap and the validator. */
export function allRoutes(): string[] {
  return [...STATIC_ROUTES, ...pages.map((p) => p.path), ...glossary.map((t) => `/glossary/${t.slug}`)];
}
