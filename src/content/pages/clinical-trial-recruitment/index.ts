import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/clinical-trial-recruitment",
  category: "hub",
  title: "Clinical trial recruitment by state and region",
  description:
    "Recruiting-trial counts from ClinicalTrials.gov, research hubs and outreach rules for Texas, Florida, Arizona, Nevada, Utah, the Southeast and the Midwest.",
  keywords: ["clinical trial recruitment Texas", "clinical trial recruitment Florida", "research sites by state"],
  eyebrow: "By location",
  h1: "Recruitment, state by state",
  intro:
    "As of September 21, 2026, 22,041 studies on ClinicalTrials.gov were recruiting at one or more United States locations.{{cite:ctgov-api}} Where those studies sit, which health systems hold the patients, and which state laws govern a text message to a patient all vary. Each page below pulls the registry counts for its area and describes the research landscape around them.",
  summary: "Seven location pages with registry counts, research hubs and local outreach rules.",
  lastUpdated: "2026-09-24",
  showLastUpdated: true,
  sections: [
    {
      id: "locations",
      heading: "Which locations are covered?",
      blocks: [{ type: "pageList", category: "geography" }],
    },
    {
      id: "counts",
      heading: "Where do the trial counts come from?",
      blocks: [
        {
          type: "p",
          text: "Counts are queried from the ClinicalTrials.gov API for studies with an overall status of Recruiting and at least one location in the state.{{cite:ctgov-api}} Therapeutic-area counts use keyword searches on the study's condition field, so a study can appear in more than one area. Regional pages sum their member states, which can count a multi-state study more than once. The query date is shown on every table.",
        },
      ],
    },
  ],
  sources: [
    {
      id: "ctgov-api",
      title: "ClinicalTrials.gov API v2",
      publisher: "U.S. National Library of Medicine",
      url: "https://clinicaltrials.gov/data-api/api",
      year: "2026",
      note: "Queried September 21, 2026.",
    },
  ],
  related: [
    { label: "Who Bond is for", href: "/for", description: "Sites, networks, physician groups, FQHCs, CROs and sponsors." },
    { label: "Implementation", href: "/implementation", description: "What a deployment involves, step by step." },
  ],
};

export default page;
