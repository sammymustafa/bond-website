import type { Block, Source } from "./types";

/**
 * Customer testimonials. Nothing here appears on the site until `approved` is true.
 *
 * Attribution is the person's role and the type of site only ("research site", "site network"),
 * never the site's name. Before approving one: send the person the exact `quote`, get their
 * written OK to be quoted with that attribution, and set `approvedOn`. Change the quote to match
 * what they approve; never publish wording or results they did not confirm (FTC endorsement
 * rules, 16 CFR Parts 255 and 465).
 *
 * Approved testimonials render on /compare and on every comparison page, in the "Why do sites
 * choose Bond" section, with a source entry crediting the role and site type.
 */
export interface Testimonial {
  id: string;
  quote: string;
  name?: string;
  role: string;
  organization: string;
  approved: boolean;
  approvedOn?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "ehr-6000-qualified",
    // Alternate wording: "For just one study, Bond surfaced more than 6,000 qualified patients from
    // our own EHR, a pool we did not know we had."
    quote:
      "Bond found more than 6,000 qualified patients in our EHR for a single study. We could never have found that many by reading charts, and every match came with the chart evidence behind it.",
    role: "Medical Director",
    organization: "research site",
    approved: false,
  },
  {
    id: "prescreen-failure",
    // Alternate wording: "Bond brought our pre-screen failure rate down significantly. Our
    // coordinators stopped spending hours on patients who were never going to qualify."
    quote:
      "Bond brought our pre-screen failure rate down significantly. Patients now reach screening already checked against the protocol, so our coordinators spend their time on people who can actually enroll.",
    role: "Medical Director",
    organization: "site network",
    approved: false,
  },
];

// For example "Medical Director, research site".
const attribution = (t: Testimonial): string => [t.name, t.role, t.organization].filter(Boolean).join(", ");

const live = (): Testimonial[] => testimonials.filter((t) => t.approved);

/** Quote blocks for approved testimonials; empty until at least one is approved. */
export function testimonialBlocks(): Block[] {
  return live().map((t): Block => ({
    type: "quote",
    text: `${t.quote}{{cite:testimonial-${t.id}}}`,
    attribution: attribution(t),
  }));
}

/** Source entries for approved testimonials, so each quote's cite resolves. */
export function testimonialSources(): Source[] {
  return live().map((t) => ({
    id: `testimonial-${t.id}`,
    title: "Customer testimonial",
    publisher: attribution(t),
    year: (t.approvedOn ?? "2026").slice(0, 4),
    note: `Quoted with permission${t.approvedOn ? `, approved ${t.approvedOn}` : ""}.`,
  }));
}
