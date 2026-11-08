import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/calculators",
  category: "hub",
  title: "Clinical trial recruitment calculators",
  description:
    "Free calculators for research sites and sponsors: screen failure rate, enrollment rate in patients per site per month, and cost per randomized patient.",
  keywords: ["clinical trial calculators", "screen failure rate calculator", "enrollment rate calculator", "cost per randomized patient calculator"],
  eyebrow: "Calculators",
  h1: "Recruitment calculators",
  intro:
    "Three calculators for the numbers sponsors ask about in feasibility calls and site reviews: screen failure rate, enrollment rate and cost per randomized patient. Each one shows its formula, works in your browser and explains what belongs in each input.",
  summary: "Calculators for screen failure rate, enrollment rate and cost per randomized patient.",
  lastUpdated: "2026-11-08",
  sections: [
    {
      id: "calculators",
      heading: "Which calculators are available?",
      blocks: [{ type: "pageList", category: "calculator" }],
    },
    {
      id: "more",
      heading: "Where else can I look?",
      blocks: [
        {
          type: "p",
          text: "The [glossary](/glossary) defines the terms behind each calculator, including [screen failure rate](/glossary/screen-failure-rate) and [enrollment rate](/glossary/enrollment-rate). The [guides](/guides) cover how to move each number, starting with [reducing screen failure](/guides/reduce-screen-failure).",
        },
      ],
    },
  ],
  sources: [],
  related: [
    { label: "Guides", href: "/guides", description: "Operational, regulatory and cost questions behind enrollment." },
    { label: "Templates", href: "/templates", description: "Editable documents for feasibility, outreach and chart review." },
  ],
};

export default page;
