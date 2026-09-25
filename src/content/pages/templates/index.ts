import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/templates",
  category: "hub",
  title: "Templates and downloads for research sites",
  description:
    "Free editable templates for sites: feasibility questionnaire, pre-screening script, outreach SMS, AI vendor checklist, IRB language and a chart review checklist.",
  keywords: ["feasibility questionnaire template", "pre-screening call script", "IRB recruitment language template"],
  eyebrow: "Templates",
  h1: "Templates you can use this week",
  intro:
    "Each template is shown in full on its page and available as an editable Word document. They are written for coordinators and site directors, not lawyers, and every one that touches patient contact says where IRB approval is required.",
  summary: "Six editable templates for feasibility, pre-screening, outreach, vendor evaluation, IRB language and chart review.",
  lastUpdated: "2026-09-21",
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
