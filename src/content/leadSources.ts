/**
 * Answers to "How did you hear about us?" on the contact form (DemoModal). The label is what the
 * visitor sees and what lands in the submission, so lead notifications read without a lookup.
 * The Cal.com demo event asks the same question with the same option text, so both sources of
 * leads report alike: change both together.
 *
 * Both sources of leads also carry `page`, `first_page` and `referrer`, recorded by the site rather than
 * asked (src/components/leadSource.ts): Formspree fields on the contact form, and `metadata[page]`,
 * `metadata[first_page]` and `metadata[referrer]` on Cal.com booking links.
 */
export const leadSources = [
  "Google or other search",
  "An AI assistant (ChatGPT, Claude, Perplexity, Gemini)",
  "LinkedIn",
  "A colleague or another research site",
  "A conference or event",
  "CRIO or another partner",
  "Email from Bond",
  "A podcast, webinar or article",
] as const;

/** The last option. Choosing it shows a short text field for the details. */
export const OTHER_LEAD_SOURCE = "Other";
