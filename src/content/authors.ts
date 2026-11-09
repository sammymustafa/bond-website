import type { PageCategory, SeoPage } from "./types";

/**
 * Who writes and reviews the site's guides and comparisons. Shown under the H1 and in the
 * Article / WebPage JSON-LD (author, reviewedBy), so search engines and AI assistants can see a
 * named person behind each page. Change a title here and every page follows.
 */
export interface Person {
  name: string;
  /** Short role for the byline, e.g. "CEO". */
  role: string;
  /** Full title for structured data. */
  jobTitle: string;
}

export const AUTHOR: Person = {
  name: "Rishabh Goel",
  role: "CEO",
  jobTitle: "CEO, Bond Health",
};

export const REVIEWER: Person = {
  name: "Steven Tan",
  role: "Security Lead",
  jobTitle: "Security Lead and Lead Full-Stack Engineer, Bond Health",
};

/** Page types that carry the written-by and reviewed-by line. Blog posts keep their own `blog.author`. */
const BYLINE_CATEGORIES: PageCategory[] = ["guide", "comparison"];

export function bylineFor(page: SeoPage): { author: Person; reviewer: Person } | null {
  return BYLINE_CATEGORIES.includes(page.category) ? { author: AUTHOR, reviewer: REVIEWER } : null;
}

/** The person behind a blog post's `author` string, when it is someone listed here. */
export function personNamed(name: string): Person | undefined {
  return [AUTHOR, REVIEWER].find((p) => p.name === name);
}
