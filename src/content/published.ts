import { pages } from "./registry";
import type { SeoPage } from "./types";

/**
 * Scheduled publishing for blog posts. A post whose `blog.date` is after the
 * build date is left out of routes, listings and the sitemap until a later
 * build. .github/workflows/scheduled-publish.yml triggers a daily rebuild so
 * each post goes live on its date. Dates are compared in UTC.
 */
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

export function isPublished(page: SeoPage, on: string = BUILD_DATE): boolean {
  return page.category !== "blog" || !page.blog || page.blog.date <= on;
}

export const publishedPages: SeoPage[] = pages.filter((p) => isPublished(p));
