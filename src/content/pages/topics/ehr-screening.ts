import type { SeoPage } from "../../types";

/**
 * Topic hub: everything on the site about finding trial patients in the EHR, grouped the way
 * vanta.com groups its /collection pages. The cards come from each page's own h1 and summary,
 * and blog posts appear on their publish date.
 */
const page: SeoPage = {
  path: "/topics/ehr-screening",
  category: "hub",
  title: "EHR screening for clinical trials: guides and tools",
  description:
    "Everything on finding clinical trial patients in the EHR: structured data vs notes, LLM screening research, chart review, accuracy checks and tools compared.",
  keywords: [
    "EHR screening clinical trials",
    "EHR clinical trial recruitment",
    "clinical trial patient identification",
    "AI EHR pre-screening",
    "clinical trial eligibility screening",
  ],
  eyebrow: "Topic",
  h1: "EHR screening for clinical trials",
  intro:
    "EHR screening means reading a site's own patient records against a study's inclusion and exclusion criteria to find the patients who may qualify. This hub collects Bond Health's guides, research summaries, templates and comparisons on doing it well: what structured data can and cannot tell you, why clinical notes matter, how to check a tool's accuracy, and what has to happen after the match.",
  summary: "Guides, research and tools for finding eligible trial patients in the EHR, from structured queries to LLM screening.",
  lastUpdated: "2026-11-08",
  sections: [
    {
      id: "what-it-is",
      heading: "What is EHR screening for clinical trials?",
      blocks: [
        {
          type: "p",
          text: "A coordinator or a tool compares each patient's chart with a protocol's criteria. Some criteria sit in structured fields such as diagnoses, medications and lab results; others, such as disease stage, prior treatment or symptom history, often appear only in clinical notes and reports. The study team then reviews the matches and decides who is eligible.",
        },
        {
          type: "p",
          text: "Before anyone is contacted, the site needs a HIPAA path for using the records and IRB approval for the outreach. The [EHR recruitment guide](/guides/ehr-for-recruitment) walks through both, and [HIPAA and IRB rules for outreach](/guides/irb-hipaa-patient-outreach) covers what comes after the match.",
        },
      ],
    },
    {
      id: "start-here",
      heading: "Where should I start?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/guides/ehr-for-recruitment",
            "/blog/unstructured-data-eligibility-evidence",
            "/blog/llm-trial-matching-research",
            "/templates/coordinator-chart-review-checklist",
          ],
        },
      ],
    },
    {
      id: "research",
      heading: "What does the research say about EHR screening?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/blog/ehr-problem-list-accuracy",
            "/blog/ehr-alerts-trial-referrals",
            "/blog/patient-portal-trial-invitations",
            "/blog/oncology-biomarker-trial-matching",
            "/blog/validating-eligibility-logic-before-go-live",
          ],
        },
      ],
    },
    {
      id: "tools",
      heading: "How do EHR screening tools compare?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/compare/ehr-patient-matching-software",
            "/compare/bond-vs-tempus-deep-6",
            "/compare/bond-vs-trinetx",
            "/compare/bond-vs-tempus-vs-trinetx",
            "/compare/bond-vs-manual-chart-review",
          ],
        },
      ],
    },
    {
      id: "how-bond-does-it",
      heading: "How does Bond screen the EHR?",
      blocks: [
        {
          type: "p",
          text: "[Identify](/identify) reads structured fields and clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, and returns ranked matches with the evidence behind every criterion decision.{{cite:bond-site,bond-product}} Bond's voice and text agents then contact, pre-screen and book the matched patients, and Bond connects to Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and the other major EHRs ([integrations](/integrations)).{{cite:bond-site,bond-product}}",
        },
      ],
    },
  ],
  sources: [
    {
      id: "bond-site",
      title: "Bond Health: platform overview, FAQ and pricing",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
    },
    {
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, pricing and compliance status described by Bond Health, October 2026.",
    },
  ],
  related: [
    { label: "Recruitment compliance", href: "/topics/recruitment-compliance", description: "HIPAA, IRB, TCPA and AI disclosure rules for outreach." },
    { label: "Enrollment metrics", href: "/topics/enrollment-metrics", description: "Funnel metrics, calculators and benchmarks." },
    { label: "Identify", href: "/identify", description: "Bond's LLM-based EHR screening." },
  ],
};

export default page;
