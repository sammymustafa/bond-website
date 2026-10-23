import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides",
  category: "hub",
  title: "Guides for research sites and sponsors",
  description:
    "Practical guides on screen failure, EHR-based recruitment, site selection, IRB and HIPAA outreach rules, consent form cost, and pre-screening vs screening.",
  keywords: ["clinical trial recruitment guide", "reduce screen failure", "how sponsors choose sites"],
  eyebrow: "Guides",
  h1: "Guides",
  intro:
    "Bond Health's guides answer the operational, regulatory and cost questions research sites and sponsors face in feasibility calls and IRB meetings: how to reduce screen failure, how sponsors choose sites, what HIPAA and IRB rules allow in patient outreach, and what recruitment software costs. Each guide states the rule or the number, cites where it comes from, and ends with what to do differently on Monday.",
  summary: "Guides on the operational, regulatory and cost questions behind enrollment.",
  lastUpdated: "2026-10-23",
  sections: [
    {
      id: "guides",
      heading: "Which guides are available?",
      blocks: [{ type: "pageList", category: "guide" }],
    },
    {
      id: "more",
      heading: "Where else can I look?",
      blocks: [
        {
          type: "p",
          text: "The [glossary](/glossary) defines the terms these guides use. The [templates](/templates) turn several of them into documents you can fill in. The [blog](/blog) covers narrower topics as they come up.",
        },
      ],
    },
  ],
  sources: [],
  related: [
    { label: "Templates", href: "/templates", description: "Editable documents for feasibility, outreach and chart review." },
    { label: "Glossary", href: "/glossary", description: "30 recruitment terms, defined with sources." },
  ],
};

export default page;
