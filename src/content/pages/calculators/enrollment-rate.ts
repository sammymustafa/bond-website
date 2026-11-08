import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/calculators/enrollment-rate",
  category: "calculator",
  title: "Clinical trial enrollment rate calculator",
  description:
    "Calculate a trial's enrollment rate in patients per site per month, and the months left to the enrollment target at that rate. Formula, example and benchmarks.",
  keywords: [
    "enrollment rate calculator",
    "how to calculate enrollment rate clinical trial",
    "patients per site per month",
    "clinical trial recruitment rate formula",
    "enrollment projection clinical trial",
  ],
  eyebrow: "Calculator",
  h1: "Clinical trial enrollment rate calculator",
  intro:
    "A trial's enrollment rate is the number of participants enrolled divided by the site-months open to enrollment, usually reported as patients per site per month. The CREST-2 stroke prevention trial, for example, reported a recruitment rate of 0.26 patients per site per month.{{cite:crest2}} Enter your own numbers below to get your rate and the months left to your target.",
  summary: "Patients per site per month from enrollments, sites and months open, with the months left to your target.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See how Engage works", secondaryHref: "/engage" },
  sections: [
    {
      id: "calculate",
      heading: "How do you calculate the enrollment rate?",
      blocks: [
        { type: "calculator", kind: "enrollment-rate" },
        {
          type: "callout",
          tone: "info",
          title: "The formula",
          text: "`enrollment rate = participants enrolled ÷ (sites × months open to enrollment)`",
        },
        {
          type: "p",
          text: "The denominator is site-months: the sum, across sites, of the months each site has been open to enrollment. The calculator multiplies the number of sites by their average months open, which gives the same total. Enrollment itself is a count, the estimated or actual number of human subjects enrolled, which a responsible party must update on ClinicalTrials.gov once the trial reaches its primary completion date.{{cite:ecfr-42-11-10}}",
        },
      ],
    },
    {
      id: "site-months",
      heading: "What counts as a site-month?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Start each site's clock at activation,** the date the sponsor authorized it to enroll, not at selection. In CREST-2, the median time from site selection to authorization to randomize was 9.9 months across 147 sites, so counting from selection would cut the rate badly.{{cite:crest2}}",
            "**Keep sites that enrolled nobody.** In a Tufts CSDD analysis of more than 150 studies and nearly 16,000 sites, 11% of sites in a given trial typically failed to enroll a single patient.{{cite:tufts-2013}} Leaving them out overstates what the study as a whole is doing.",
            "**Stop the clock when a site closes to enrollment,** or when the study pauses enrollment, so idle months do not count against it.",
            "**Pick one event and stick to it.** Some studies count consent, others randomization. Tufts CSDD's randomization rate, for example, divides patients enrolled by patients screened.{{cite:tufts-2022}} Say which event you counted when you report the rate.",
          ],
        },
      ],
    },
    {
      id: "benchmarks",
      heading: "What is a good enrollment rate?",
      blocks: [
        {
          type: "p",
          text: "There is no single benchmark: the right rate depends on how common the condition is, how strict the criteria are and how many sites share the patient pool. What the published data does show is that most sites and studies fall short of plan.",
        },
        {
          type: "table",
          caption: "Published enrollment performance",
          columns: ["Finding", "Figure", "Source"],
          rows: [
            ["CREST-2 stroke prevention trial, recruitment rate", "0.26 patients per site per month", "Stroke{{cite:crest2}}"],
            ["Sites that enroll no patients in a given trial", "11%", "Tufts CSDD, more than 150 studies{{cite:tufts-2013}}"],
            ["Sites that under-enroll, meet or exceed their target", "37%, 39% and 13%", "Tufts CSDD{{cite:tufts-2013}}"],
            ["NCI CTEP trials that missed their projected accrual in the planned period", "81.5% of 764 trials", "Clinical Cancer Research{{cite:cheng-2011}}"],
            ["UK trials that met their enrollment goals", "31% of 114 trials", "Contemporary Clinical Trials Communications{{cite:fogel-2018}}"],
          ],
        },
        {
          type: "p",
          text: "Compare your rate with the rate your own feasibility assumed, not with another study's. A [site feasibility](/guides/site-feasibility) estimate built from eligible-patient counts in the EHR gives that plan a firmer basis than an estimate from memory.",
        },
      ],
    },
    {
      id: "project",
      heading: "How do you project when you will reach your target?",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Months to target",
          text: "`months remaining = (target − enrolled) ÷ (enrollment rate × active sites)`",
        },
        {
          type: "p",
          text: "The projection assumes the same sites keep enrolling at the same rate. Recalculate monthly, because early months matter most: in a study of 764 NCI CTEP trials, those that enrolled their first patient more than 2 months after opening were significantly less likely to meet their accrual goal.{{cite:cheng-2011}} If the projection lands past the deadline, the levers are more patients found per site, faster contact and booking, or more sites.",
        },
      ],
    },
    {
      id: "raise",
      heading: "How can a site raise its enrollment rate?",
      blocks: [
        {
          type: "p",
          text: "Track the rate by funnel stage, not only the final count. Patients identified, contacted, pre-screened, consented and randomized each month show whether the constraint is finding patients, reaching them or converting them. Bond's real-time dashboard reports each of those stages, along with time to enrollment.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "**Finding patients:** Bond's [Identify](/identify) screens the site's EHR against each protocol, including clinical notes, and Bond creates and runs Meta and Google ad campaigns to reach patients beyond the site's records.{{cite:bond-site,bond-product}}",
            "**Reaching them:** Bond's voice and text agents contact every new ad lead immediately and keep following up with every lead who has not responded, to maximize response rates.{{cite:bond-product}}",
            "**Converting them:** the same agents pre-screen patients and book them for screening visits. Bond reports up to 3x faster enrollment than manual recruitment.{{cite:bond-product,bond-site}}",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the formula for enrollment rate in a clinical trial?",
      a: "Enrollment rate = participants enrolled ÷ site-months, where site-months is the sum, across sites, of the months each site has been open to enrollment. The CREST-2 trial reported 0.26 patients per site per month.{{cite:crest2}}",
    },
    {
      q: "Should sites that enrolled nobody be included?",
      a: "Yes. In a typical trial, 11% of sites fail to enroll a single patient, per a Tufts CSDD analysis of nearly 16,000 sites; dropping them makes the study look faster than it is.{{cite:tufts-2013}}",
    },
    {
      q: "What is the difference between enrollment and the enrollment rate?",
      a: "Enrollment is a count: the estimated or actual number of human subjects enrolled in the trial, as ClinicalTrials.gov regulations use the term.{{cite:ecfr-42-11-10}} The enrollment rate divides that count by sites and time, so studies of different sizes can be compared.",
    },
    {
      q: "How often should we recalculate the enrollment rate?",
      a: "Monthly, by site. Early months are the best warning sign: NCI CTEP trials that took more than 2 months to enroll their first patient were significantly less likely to meet their accrual goal.{{cite:cheng-2011}}",
    },
  ],
  sources: [
    {
      id: "crest2",
      title: "Factors Associated With Time to Site Activation, Randomization, and Enrollment Performance in a Stroke Prevention Trial",
      publisher: "Stroke (American Heart Association), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/28768800/",
      year: "2017",
      note: "Quotes: \"The recruitment rate was 0.26 (95% confidence interval, 0.23-0.28) patients per site per month.\" and \"For 147 sites, the median time between site selection to authorization to randomize was 9.9 months (interquartile range, 7.7, 12.4), and factors associated with early site activation were not identified.\"",
    },
    {
      id: "ecfr-42-11-10",
      title: "42 CFR 11.10 Definitions (Clinical Trials Registration and Results Information Submission)",
      publisher: "eCFR (NIH/NLM)",
      url: "https://www.ecfr.gov/current/title-42/chapter-I/subchapter-A/part-11/subpart-A/section-11.10",
      year: "2026",
      note: "Quote, 11.10(b)(18): \"Once the trial has reached the primary completion date, the responsible party must update the Enrollment data element to reflect the actual number of human subjects enrolled in the clinical trial.\"",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013. Quote: \"Tufts CSDD said its recent analysis, based on more than 150 clinical studies involving nearly 16,000 sites\". Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\"",
    },
    {
      id: "tufts-2022",
      title: "Protocol Design and Performance Benchmarks by Phase and by Oncology and Rare Disease Subgroups",
      publisher: "Therapeutic Innovation & Regulatory Science (Getz K, Smith Z, Kravet M), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9373886/",
      year: "2022",
      note: "Randomization rate is defined as \"the ratio of the number of patients enrolled to the total number screened\".",
    },
    {
      id: "cheng-2011",
      title: "Predicting accrual achievement: monitoring accrual milestones of NCI-CTEP-sponsored clinical trials",
      publisher: "Clinical Cancer Research (Cheng SK, Dietrich MS, Dilts DM), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/21447723/",
      year: "2011",
      note: "764 nonpediatric therapeutic trials, 2000 to 2007. Quote: \"A total of 81.5% (n = 623) of the trials did not achieve the projected accrual goals within the anticipated accruing period.\" Quote: \"Trials that accrue the first enrollment beyond 2 months (n = 379, 49.6%) are significantly less likely to achieve the accrual performance than those trials that enroll patients under 2 months\".",
    },
    {
      id: "fogel-2018",
      title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
      publisher: "Contemporary Clinical Trials Communications, via PMC",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
      year: "2018",
      note: "Quote: \"A study of 114 trials in the UK indicated that only 31% met enrollment goals.\"",
    },
  ],
  related: [
    { label: "Enrollment rate: definition", href: "/glossary/enrollment-rate", description: "The term, with FAQs and sources." },
    { label: "Screen failure rate calculator", href: "/calculators/screen-failure-rate", description: "Screen failures divided by patients screened." },
    { label: "Cost per randomized patient calculator", href: "/calculators/cost-per-randomized-patient", description: "Everything recruitment cost, divided by randomizations." },
    { label: "Site activation and qualification visits", href: "/guides/site-activation", description: "What happens between selection and the first patient." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "Every lead contacted immediately and followed up." },
  ],
};

export default page;
