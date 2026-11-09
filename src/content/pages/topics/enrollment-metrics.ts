import type { SeoPage } from "../../types";

/** Topic hub: measuring recruitment from first lead to randomization, with the calculators and benchmarks. */
const page: SeoPage = {
  path: "/topics/enrollment-metrics",
  category: "hub",
  title: "Clinical trial enrollment metrics and calculators",
  description:
    "How to measure trial recruitment: funnel metrics, screen failure and enrollment rate calculators, cost per randomized patient, speed to lead and no-shows.",
  keywords: [
    "clinical trial enrollment metrics",
    "recruitment funnel metrics",
    "screen failure rate",
    "enrollment rate calculator",
    "cost per randomized patient",
  ],
  eyebrow: "Topic",
  h1: "Clinical trial enrollment metrics",
  intro:
    "Enrollment is a funnel: leads and chart matches become contacted patients, then pre-screened patients, booked visits, screened patients and finally randomized participants who stay to the end. This hub collects Bond Health's calculators, benchmarks and guides for measuring each step and fixing the one that leaks most.",
  summary: "Funnel metrics, calculators and benchmarks for trial recruitment, from speed to lead to retention.",
  lastUpdated: "2026-11-08",
  sections: [
    {
      id: "which-metrics",
      heading: "Which recruitment metrics matter most?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Time to first contact:** how long a new lead or chart match waits before someone calls or texts. See [how fast to contact a trial ad lead](/blog/speed-to-lead-trial-ad-leads).",
            "**Contact and show rates:** the share of patients reached, and the share of booked patients who arrive for the screening visit. See [screening visit no-shows](/blog/screening-visit-no-shows).",
            "**Screen failure rate:** screen failures divided by patients screened. Use the [screen failure rate calculator](/calculators/screen-failure-rate).",
            "**Enrollment rate:** patients enrolled per site per month. Use the [enrollment rate calculator](/calculators/enrollment-rate).",
            "**Cost per randomized patient:** everything spent on recruitment divided by patients randomized. Use the [cost per randomized patient calculator](/calculators/cost-per-randomized-patient).",
            "**Retention:** the share of randomized participants who complete the study. See the [retention guide](/guides/participant-retention).",
          ],
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
            "/blog/recruitment-funnel-metrics",
            "/calculators/screen-failure-rate",
            "/calculators/enrollment-rate",
            "/calculators/cost-per-randomized-patient",
          ],
        },
      ],
    },
    {
      id: "lead-to-visit",
      heading: "Why do leads drop out before the screening visit?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/blog/why-trial-leads-never-book",
            "/blog/speed-to-lead-trial-ad-leads",
            "/blog/follow-up-attempts-trial-leads",
            "/blog/screening-visit-no-shows",
          ],
        },
      ],
    },
    {
      id: "screen-failure-retention",
      heading: "How do you cut screen failures and dropouts?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/guides/reduce-screen-failure",
            "/guides/pre-screening-vs-screening",
            "/guides/participant-retention",
            "/blog/trial-dropout-rates-retention",
          ],
        },
      ],
    },
    {
      id: "plan-budget",
      heading: "How do you plan and budget enrollment?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/guides/site-feasibility",
            "/blog/enrollment-forecasting-feasibility",
            "/blog/activation-to-first-patient-in",
            "/templates/recruitment-plan",
            "/blog/recruitment-line-items-site-budget",
            "/blog/screen-failure-reimbursement-budgets",
            "/guides/clinical-trial-recruitment-software-cost",
            "/report",
          ],
        },
      ],
    },
    {
      id: "how-bond-reports",
      heading: "How does Bond report enrollment?",
      blocks: [
        {
          type: "p",
          text: "Bond reports patients matched, contacted, pre-screened, consented and randomized, plus time to enrollment, matching accuracy and screen-failure signals, in real-time dashboards and regular reports for sites, CROs and sponsors.{{cite:bond-site}} Its voice and text agents contact every new ad lead immediately and keep following up with every lead who has not responded, then book pre-screened patients straight into the site's calendar.{{cite:bond-product}} See [Engage](/engage) and [pricing](/pricing).",
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
    { label: "EHR screening", href: "/topics/ehr-screening", description: "Finding eligible patients in the EHR." },
    { label: "Recruitment compliance", href: "/topics/recruitment-compliance", description: "HIPAA, IRB, TCPA and AI disclosure rules for outreach." },
    { label: "Calculators", href: "/calculators", description: "Screen failure, enrollment rate and cost per patient." },
  ],
};

export default page;
