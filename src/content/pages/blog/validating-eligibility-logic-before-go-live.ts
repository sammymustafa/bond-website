import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/validating-eligibility-logic-before-go-live",
  category: "blog",
  title: "How we validate eligibility logic before go-live",
  description:
    "Before Bond screens a live chart, a study's criteria are configured, run against real records, and checked by the site's coordinators. The process, step by step.",
  keywords: ["validating AI eligibility screening", "clinical trial eligibility criteria configuration", "EHR screening accuracy"],
  eyebrow: "Blog",
  h1: "How we validate eligibility logic before go-live",
  intro:
    "An AI screening tool is only as good as the criteria it was given and the evidence it can find. This post describes what happens between signing and go-live: how a protocol's inclusion and exclusion criteria become checks the system can run, how those checks are tested against real records, and what a coordinator sees when a match is wrong.",
  summary: "The configure, test, adjudicate loop that runs before any live screening starts.",
  lastUpdated: "2026-09-24",
  blog: { date: "2026-09-21", author: "Bond Health", readingMinutes: 6 },
  heroCta: { label: "See it on your protocol", href: "/book-a-demo", secondaryLabel: "Read about Identify", secondaryHref: "/identify" },
  sections: [
    {
      id: "why-validate",
      heading: "Why validate at all?",
      blocks: [
        {
          type: "p",
          text: "Eligibility criteria are written for humans. A line like \"no myocardial infarction within the past three months\" assumes a reader who can find a discharge summary, read a date, and decide whether a troponin bump in an emergency note counts. When software makes that decision, someone has to check that it makes it the way the study team would. Bond does that before go-live, on the site's own records, with the site's own coordinators, so that the first live match list is one the team already trusts.{{cite:bond-site}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "What \"accuracy\" means here",
          text: "Bond reports above 90 percent matching accuracy for eligibility screening.{{cite:bond-site}} That is a platform figure. What matters to a site is accuracy on its own protocol and its own records, which is why each study's criteria are checked on the site's data before any live screening starts.",
        },
      ],
    },
    {
      id: "configure",
      heading: "How are criteria turned into checks?",
      blocks: [
        {
          type: "p",
          text: "Each criterion in the protocol is broken into the clinical concepts it refers to, the evidence that could establish it, and the time window that applies. The [Identify](/identify) stage links those concepts to Bond's terminology graph so that the many ways a chart can say the same thing, a diagnosis code, a medication, a phrase in a note, all resolve to one check.{{cite:bond-whitepaper}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Read the protocol with the study team",
              text: "Ambiguous criteria are flagged and resolved with the coordinator or PI before anything is configured. \"Adequate organ function\" gets the lab thresholds the sponsor actually uses.",
            },
            {
              title: "Map each criterion to evidence types",
              text: "Structured fields such as problem lists, labs and medications are the first source. Notes, pathology and imaging reports are the second. Each criterion records which sources can satisfy it and which can only suggest it.",
            },
            {
              title: "Set time windows and precedence",
              text: "A resolved diagnosis, a discontinued drug, or a lab from two years ago should not count. Each check carries the window from the protocol and a rule for conflicting evidence.",
            },
            {
              title: "Decide what needs a human",
              text: "Some criteria cannot be settled from the chart, for example willingness to use contraception. Those are marked for the pre-screening call rather than the screening pass.",
            },
          ],
        },
      ],
    },
    {
      id: "test",
      heading: "How is the configuration tested against real records?",
      blocks: [
        {
          type: "p",
          text: "Once criteria are configured, Bond runs them against a sample of the site's records under the site's business associate agreement and its IRB or privacy board determination for preparatory-to-research review. The output is not a list of eligible patients. It is a list of decisions, one per criterion per patient, each with the evidence the system relied on and a link back to where in the chart it found it.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "Coordinators review a stratified sample: clear matches, clear exclusions, and the uncertain middle where most errors live.",
            "Every disagreement is logged with the reason: wrong evidence, right evidence but wrong interpretation, missing evidence, or a criterion the team decided to change.",
            "Criteria are adjusted and the sample is re-run until agreement meets the study's threshold. Changes are versioned so a monitor can see what was live on any date.",
          ],
        },
        {
          type: "p",
          text: "This is the same loop a good coordinator runs in their head when they train a new colleague. Making it explicit is what lets the site sign off on the logic rather than on a demo.",
        },
      ],
    },
    {
      id: "in-production",
      heading: "What happens after go-live?",
      blocks: [
        {
          type: "p",
          text: "Validation does not stop at launch. Each match the coordinator accepts or rejects in the dashboard feeds back into the study's accuracy report. When the protocol is amended, the affected criteria go through the same configure and test loop before the new version screens anyone. Screen failures at the site are reviewed against the pre-screening decision to catch causes the chart could have predicted.{{cite:bond-site}}",
        },
        {
          type: "table",
          caption: "What the site sees at each stage",
          columns: ["Stage", "Site's role", "Bond's output"],
          rows: [
            ["Configuration", "Resolve ambiguous criteria with the study team", "Criterion-by-criterion checklist with evidence types and windows"],
            ["Validation run", "Adjudicate a sample of decisions", "Per-criterion agreement, error reasons, versioned criteria"],
            ["Go-live", "Review ranked matches in the dashboard", "Match list with criterion-to-evidence rationale"],
            ["Amendments", "Approve re-validated criteria", "Change log and a fresh validation report"],
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol, and we will walk through how Bond would screen its hardest criteria.",
          secondaryLabel: "How implementation works",
          secondaryHref: "/implementation",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does the site have to share PHI before the contract is signed?",
      a: "No. A demo needs no patient data. Validation on real records happens after the business associate agreement is in place and the site's IRB or privacy board has made the relevant determination, as described on the [security](/security) page.",
    },
    {
      q: "Who decides what an ambiguous criterion means?",
      a: "The study team does. Bond documents the interpretation so it can be shown to the sponsor or monitor, but the site and the sponsor own the protocol.",
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
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Available on request.",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "What Bond reads in the chart and how matches are explained." },
    { label: "Implementation", href: "/implementation", description: "Where validation sits in the 48-hour plan." },
    { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist", description: "The manual version of the same discipline." },
  ],
};

export default page;
