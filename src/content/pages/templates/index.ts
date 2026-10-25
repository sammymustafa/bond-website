import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/templates",
  category: "hub",
  title: "Templates and downloads for research sites",
  description:
    "Free editable templates for sites: feasibility questionnaire, recruitment plan, pre-screening script, outreach SMS, vendor checklist, IRB language, chart review.",
  keywords: ["feasibility questionnaire template", "clinical trial recruitment plan template", "pre-screening call script", "IRB recruitment language template"],
  eyebrow: "Templates",
  h1: "Templates you can use this week",
  intro:
    "These are free, editable templates for research sites: a feasibility questionnaire, a recruitment and retention plan, a pre-screening call script, patient outreach text messages, an AI recruitment vendor evaluation checklist, IRB submission language for AI outreach and a coordinator chart review checklist. Each is shown in full on its page and available as a Word document. They are written for coordinators and site directors, not lawyers, and every one that touches patient contact says where IRB approval is required.",
  summary: "Seven editable templates for feasibility, recruitment planning, pre-screening, outreach, vendor evaluation, IRB language and chart review.",
  lastUpdated: "2026-10-25",
  sections: [
    {
      id: "templates",
      heading: "Which templates are available?",
      blocks: [{ type: "pageList", category: "template" }],
    },
    {
      id: "use",
      heading: "How should I adapt them?",
      blocks: [
        {
          type: "ul",
          items: [
            "Replace bracketed placeholders with your site, study and contact details.",
            "Anything a patient will see or hear, including call scripts and text messages, goes to your IRB with the protocol before use.",
            "Keep a dated copy of the version you use; sponsors and monitors ask for it.",
          ],
        },
      ],
    },
  ],
  sources: [],
  related: [
    { label: "Guides", href: "/guides", description: "Longer reads on screen failure, EHR recruitment and IRB rules." },
    { label: "Engage: voice and SMS agents", href: "/engage", description: "How Bond runs the scripts in these templates." },
  ],
};

export default page;
