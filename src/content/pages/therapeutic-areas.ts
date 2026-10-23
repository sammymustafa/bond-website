import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/therapeutic-areas",
  category: "hub",
  title: "Therapeutic areas: how eligibility and screening differ",
  description:
    "Eligibility criteria, screen failure drivers and chart evidence for oncology, obesity, cardiology, neurology, dermatology, pain, GI and psychiatry trials.",
  keywords: ["clinical trial recruitment by therapeutic area", "oncology trial screening", "Alzheimer's trial screen failure"],
  eyebrow: "Therapeutic areas",
  h1: "Eligibility is different in every therapeutic area",
  intro:
    "Eligibility differs by therapeutic area because the deciding criteria sit in different parts of the chart: an ejection fraction in a cardiology echo report, a biomarker in an oncology molecular pathology PDF, a rating scale a psychiatrist typed into a note. Each page below explains how eligibility works in that area, what usually causes screen failure, and what Bond reads in the chart to find it.",
  summary: "Eight pages on eligibility, screen failure and chart evidence by therapeutic area.",
  lastUpdated: "2026-10-23",
  sections: [
    {
      id: "areas",
      heading: "Which therapeutic areas are covered?",
      blocks: [{ type: "pageList", category: "therapeutic" }],
    },
    {
      id: "not-listed",
      heading: "What if my area is not listed?",
      blocks: [
        {
          type: "p",
          text: "Bond's screening is not limited to these areas. The pages cover the areas where sites most often ask us how criteria map to the chart. For anything else, [book a demo](https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true) with a protocol and we will walk through it live, or read how [Identify](/identify) handles criteria in general.",
        },
      ],
    },
  ],
  sources: [],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How criteria are read against structured data and notes." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Causes, benchmarks and fixes." },
  ],
};

export default page;
