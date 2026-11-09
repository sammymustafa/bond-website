import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/topics",
  category: "hub",
  title: "Clinical trial recruitment topics",
  description:
    "Bond Health's guides, research, templates and calculators grouped by topic: EHR screening, recruitment compliance and enrollment metrics.",
  keywords: ["clinical trial recruitment topics", "clinical trial recruitment resources"],
  eyebrow: "Topics",
  h1: "Topics",
  intro:
    "Each topic gathers the guides, research summaries, templates, calculators and comparisons on one part of recruitment, so you can read them in order instead of hunting through the blog.",
  summary: "Guides, research and tools grouped by topic.",
  lastUpdated: "2026-11-08",
  sections: [
    {
      id: "topics",
      heading: "Which topics are covered?",
      blocks: [{ type: "pageCards", paths: ["/topics/ehr-screening", "/topics/recruitment-compliance", "/topics/enrollment-metrics"] }],
    },
    {
      id: "more",
      heading: "Where else can I look?",
      blocks: [
        {
          type: "p",
          text: "The [guides](/guides) list every long-form guide, the [blog](/blog) covers narrower questions as they come up, and the [glossary](/glossary) defines the terms.",
        },
      ],
    },
  ],
  sources: [],
  related: [
    { label: "Guides", href: "/guides", description: "Every long-form guide." },
    { label: "Templates", href: "/templates", description: "Editable documents for feasibility, outreach and chart review." },
  ],
};

export default page;
