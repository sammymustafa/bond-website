/**
 * Content model for Bond Health's SEO pages.
 *
 * Every page under src/content/pages is a `SeoPage`. Pages are rendered by
 * src/components/seo/SeoArticle.tsx through the catch-all route in
 * src/app/[...slug]/page.tsx. The model exists so that site-wide rules can be
 * enforced by scripts/validate-content.ts instead of by review:
 *
 *  - every H2 (`Section.heading`) is a question
 *  - every number cites a source with a `{{cite:id}}` token
 *  - comparison and pricing pages contain a table
 *  - data pages carry a last-updated date
 *  - internal links resolve
 *
 * Inline text (`Inline`) supports a tiny markdown subset:
 *   **bold**, `code`, [label](href), and {{cite:source-id}} or {{cite:a,b}}.
 */

export type PageCategory =
  | "product"
  | "hub"
  | "comparison"
  | "audience"
  | "therapeutic"
  | "integration"
  | "geography"
  | "template"
  | "guide"
  | "blog"
  | "faq"
  | "newsletter"
  | "report"
  | "glossary";

/** A string that may contain **bold**, `code`, [label](href) and {{cite:id}} tokens. */
export type Inline = string;

export type Tone = "info" | "warning" | "success" | "bond";

export type Block =
  | { type: "p"; text: Inline }
  | { type: "h3"; text: string }
  | { type: "ul"; items: Inline[] }
  | { type: "ol"; items: Inline[] }
  | { type: "checklist"; items: Inline[] }
  | {
      type: "table";
      caption?: string;
      columns: string[];
      rows: Inline[][];
      note?: Inline;
    }
  | { type: "callout"; tone?: Tone; title?: string; text: Inline }
  | { type: "stats"; items: { value: string; label: string; cite: string }[] }
  | { type: "steps"; items: { title: string; text: Inline }[] }
  | { type: "quote"; text: Inline; attribution?: string }
  | {
      type: "cta";
      label: string;
      href: string;
      text?: Inline;
      secondaryLabel?: string;
      secondaryHref?: string;
    }
  | { type: "download"; label: string; href: string; format: string; note?: Inline }
  /** A dialogue script, e.g. a pre-screening call. */
  | { type: "script"; lines: { speaker: string; text: string }[] }
  /** A fillable form rendered as a template, e.g. a feasibility questionnaire. */
  | {
      type: "form";
      title?: string;
      fields: {
        label: string;
        hint?: string;
        kind?: "text" | "textarea" | "number" | "checkbox" | "select";
        options?: string[];
      }[];
    }
  /** Lists every page in one or more categories (used by hub pages). */
  | { type: "pageList"; category: PageCategory | PageCategory[]; exclude?: string[] }
  /** Recruiting-trial counts for a geography key from src/content/data/ctgov-geo.json. */
  | { type: "trialCounts"; geo: string; cite: string }
  /** Example recruiting trials for a geography and condition key from the same file. */
  | { type: "trials"; geo: string; condition: string; cite: string }
  /** A simple horizontal bar chart. */
  | {
      type: "chart";
      title: string;
      unit?: string;
      data: { label: string; value: number }[];
      cite: string;
    };

export interface Section {
  /** Anchor id, kebab-case. */
  id: string;
  /** Written as a question. Rendered as an H2. */
  heading: string;
  blocks: Block[];
}

export interface Source {
  /** Referenced by {{cite:id}} tokens. kebab-case. */
  id: string;
  title: string;
  publisher: string;
  /** Required unless the id starts with "bond-" (internal material). */
  url?: string;
  year?: string;
  note?: string;
}

export interface FaqItem {
  q: string;
  a: Inline;
}

export interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface SeoPage {
  /** Route path, e.g. "/compare/bond-vs-trially". */
  path: string;
  category: PageCategory;
  /** <title> without the " | Bond Health" suffix. Aim for <= 60 characters. */
  title: string;
  /** Meta description, 70 to 160 characters. */
  description: string;
  keywords?: string[];
  /** Small label above the H1, e.g. "Comparison". */
  eyebrow: string;
  h1: string;
  /** Lead paragraph under the H1. */
  intro: Inline;
  /** One line used on hub listings and cards. */
  summary: string;
  /** ISO date, YYYY-MM-DD. */
  lastUpdated: string;
  /** Defaults by category; set explicitly to override. */
  showLastUpdated?: boolean;
  heroCta?: { label: string; href: string; secondaryLabel?: string; secondaryHref?: string };
  sections: Section[];
  faq?: FaqItem[];
  sources: Source[];
  related: RelatedLink[];
  blog?: { date: string; author: string; readingMinutes?: number };
}

export interface GlossaryTerm {
  /** URL slug under /glossary/. */
  slug: string;
  term: string;
  /** One or two sentences. Shown on the index and used as the meta description. */
  short: string;
  /** Longer explanation; usually two or three paragraphs plus a list. */
  body: Block[];
  sources: Source[];
  related: RelatedLink[];
  lastUpdated: string;
}
