/**
 * Shared Bond Health material for the comparisons with recruitment services vendors that run media and refer
 * pre-screened patients to sites (SubjectWell, 1nHealth, StudyKIK). Not a page: gen:registry skips files that
 * start with "_". Bond's side of each capability row and the evidence, pilot and method sections live here so
 * the three pages describe Bond the same way; each page writes its own competitor column and framing.
 */
import type { Block, Section, Source } from "../../types";

const DEMO = "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true";
const TRUST_CENTER = "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj";

/** Bond's cell for each capability row, in the order the comparison tables use. */
export const BOND_CELLS = {
  workflow:
    "EHR screening, Meta and Google ad campaigns, voice and text outreach, pre-screening, visit booking and consent support in one platform, with a real-time dashboard and audit trail from first match to booked visit and signed consent.{{cite:bond-site,bond-product}}",
  sources:
    "The site's own EHR, screened against each protocol, plus Meta and Google ad campaigns Bond creates and runs for each study.{{cite:bond-site,bond-product}}",
  ehr:
    "Reads clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, with chart evidence for every criterion. Each patient is screened against every open study at the site ([Identify](/identify)).{{cite:bond-site,bond-product}}",
  prescreen:
    "Voice and text agents pre-screen chart matches and ad leads alike; for EHR matches they skip questions the chart already answers.{{cite:bond-product}}",
  contact:
    "Every new ad lead is contacted immediately by voice and text, and the agents keep following up with every lead who has not responded. Patients are told AI is used and can reach a person at any time ([Engage](/engage)).{{cite:bond-product,bond-site}}",
  scheduling:
    "The agents pre-screen and book the screening visit in one conversation, straight onto the site's calendar, or transfer live to a coordinator or book a callback, as the site prefers ([Book](/book)).{{cite:bond-product,bond-site}}",
  consent:
    "Plain-language explanations, patient Q&A in the patient's preferred language, checks of understanding on key points and staff escalation, with an auditable record. The site and PI obtain consent ([Consent](/consent)).{{cite:bond-site,bond-product}}",
  retention:
    "The same voice and text agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
  reporting:
    "A real-time dashboard and audit trail report patients matched, contacted, pre-screened, consented and randomized, plus time to enrollment and coordinator hours saved.{{cite:bond-site}}",
  integration:
    "All the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, with full integration in 48 hours and no integration fee. Works with CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault, and is a CRIO Certified Partner with a two-way CRIO integration.{{cite:bond-site,bond-product}}",
  pricing:
    "A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
  serves:
    "Research sites, plus CROs that want consistent metrics across sites and sponsors that want faster enrollment timelines.{{cite:bond-site}}",
};

/** The capability labels, matching BOND_CELLS. */
export const ROW_LABELS: Record<keyof typeof BOND_CELLS, string> = {
  workflow: "One workflow from ad click or chart match to booked visit and consent",
  sources: "Where patients come from",
  ehr: "Screening the site's own patients in the EHR",
  prescreen: "Pre-screening",
  contact: "First contact and follow-up",
  scheduling: "Booking the screening visit",
  consent: "Informed consent",
  retention: "Support after enrollment",
  reporting: "Reporting for the site",
  integration: "EHR and CTMS integration",
  pricing: "Pricing",
  serves: "Who it serves",
};

/** Builds the capability table rows from the competitor's cells, in ROW_LABELS order. */
export function capabilityRows(competitor: Record<keyof typeof BOND_CELLS, string>): string[][] {
  return (Object.keys(ROW_LABELS) as (keyof typeof BOND_CELLS)[]).map((k) => [ROW_LABELS[k], BOND_CELLS[k], competitor[k]]);
}

export function evidenceSection(): Section {
  return {
    id: "evidence",
    heading: "What evidence does Bond publish?",
    blocks: [
      {
        type: "p",
        text: "**Published figures.** Bond's website reports 90%+ matching accuracy, 50%+ less chart review, a 3x contact rate and up to 3x faster enrollment than manual recruitment.{{cite:bond-site}}",
      },
      {
        type: "p",
        text: "**Technical report.** Bond's matching method is written up in a technical report with results on public benchmarks, including 0.9312 micro F1 on the held-out n2c2 2018 cohort-selection task. The report is an August 2026 preprint that has not been peer reviewed, and it is available on request.{{cite:bond-whitepaper}}",
      },
      {
        type: "p",
        text:
          "**Security and compliance.** Bond is HIPAA compliant and SOC 2 Type I compliant, its information security management system is certified to ISO/IEC 27001:2022 by Advantage Partners, and its SOC 2 Type II audit is underway.{{cite:bond-product}} Its public [Trust Center](" +
          TRUST_CENTER +
          ") lists 73 HIPAA Security Rule controls, monitored continuously by Vanta.{{cite:bond-trust-center}} Bond signs BAAs; the [security](/security) page has the details.{{cite:bond-site}}",
      },
    ],
  };
}

export function pilotSection(vendor: string): Section {
  const steps: Block = {
    type: "steps",
    items: [
      { title: "Pick one protocol", text: `Choose a study ${vendor} is already recruiting for, or one you would give it, so both work the same criteria.` },
      { title: "Screen your EHR with Bond", text: "Identify ranks matches with chart evidence for each criterion. Have coordinators adjudicate a sample, including borderline cases, under a BAA." },
      {
        title: "Give Bond part of the same leads",
        text: "A Bond pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads or referrals, before EHR integration.{{cite:bond-site}}",
      },
      { title: "Track every source to randomization", text: "Record leads, first contact, booked visits, screen failures and randomizations by source, with the days between each step." },
      {
        title: "Compare cost per randomized patient",
        text: "Add every fee and the coordinator hours each source used, then divide by randomizations. The [cost per randomized patient calculator](/calculators/cost-per-randomized-patient) does the arithmetic.",
      },
    ],
  };
  return {
    id: "test",
    heading: `How can you test Bond against ${vendor} on your own data?`,
    blocks: [
      { type: "p", text: "Each company's figures come from its own methods, so the clearest comparison is a head-to-head pilot on the same protocol, and Bond welcomes one." },
      steps,
      {
        type: "cta",
        label: "Book a demo",
        href: DEMO,
        text: "Bring one protocol. We will show how Bond finds patients for it in your EHR and through its own ads, and how its agents contact, pre-screen and book them.",
        secondaryLabel: "See pricing",
        secondaryHref: "/pricing",
      },
    ],
  };
}

export function methodSection(opts: { vendor: string; sources: string; trademark: string }): Section {
  return {
    id: "how-made",
    heading: "How was this comparison made?",
    blocks: [
      {
        type: "p",
        text: `Bond Health, which sells recruitment software and competes with ${opts.vendor}, wrote this page in November 2026. Statements about ${opts.vendor} come only from public sources read on November 8, 2026: ${opts.sources}. We do not repeat ${opts.vendor}'s performance or audience-size claims, and where its materials are silent on a capability we say it is not publicly documented rather than guess. Statements about Bond come from Bond's website, product information, Trust Center and technical report. ${opts.trademark} Bond Health is not affiliated with or endorsed by ${opts.vendor}.`,
      },
      {
        type: "callout",
        tone: "bond",
        title: "Corrections",
        text: `If anything here is wrong or out of date, including anything about ${opts.vendor}, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.`,
      },
    ],
  };
}

export const BOND_SOURCES: Source[] = [
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
  {
    id: "bond-trust-center",
    title: "Bond Health Trust Center",
    publisher: "Bond Health, monitored by Vanta",
    url: TRUST_CENTER,
    year: "2026",
    note: "Lists 73 HIPAA Security Rule controls: infrastructure security (20), organizational security (14), internal security procedures (38), and data and privacy (1), monitored continuously by Vanta.",
  },
  {
    id: "bond-whitepaper",
    title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
    publisher: "Bond Health, preprint",
    year: "2026",
    note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request.",
  },
];

/** Published research on referral follow-up that all three pages cite. */
export const REFERRAL_RESEARCH_SOURCES: Record<"clariness-kpis-2024" | "mytomorrows-2026" | "ajgp-depression-2023" | "fda-recruiting-1998", Source> = {
  "clariness-kpis-2024": {
    id: "clariness-kpis-2024",
    title: "The 3 KPIs to follow for clinical trial site success",
    publisher: "Clariness",
    url: "https://clariness.com/insights/the-3-kpis-to-follow-for-clinical-trial-site-success/",
    year: "2024",
    note: "Vendor blog dated May 29, 2024, based on Clariness's global site experience. Quotes: \"Our data shows that on average, it takes sites 17 days to make first patient contact.\" and \"sites take an average of 30.5 days to schedule the first visit of a patient.\"",
  },
  "mytomorrows-2026": {
    id: "mytomorrows-2026",
    title: "The Referral Readiness Gap: What 100 U.S. Clinical Trial Sites Told Us About Referral Quality",
    publisher: "myTomorrows",
    url: "https://mytomorrows.com/blog/healthcare-professionals/the-referral-readiness-gap-what-100-u-s-clinical-trial-sites-told-us-about-referral-quality/",
    year: "2026",
    note: "Vendor-sponsored survey of 100 US site professionals, fielded May 2026, published July 14, 2026; the post does not break referrals down by source. Quote: \"In our survey, 52% of sites said at least one in five referrals are ruled ineligible before formal screening even begins\".",
  },
  "ajgp-depression-2023": {
    id: "ajgp-depression-2023",
    title: "Recruiting for a Randomized Clinical Trial for Late-Life Depression During COVID-19: Outcomes of Provider Referrals Versus Facebook Self-Referrals",
    publisher: "Ainsworth NJ, et al. American Journal of Geriatric Psychiatry 2023;31(5):366-371",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9893767/",
    year: "2023",
    note: "Quote: \"Provider referrals had a significantly higher yield (10 of 33 referrals; 30.3%) versus Facebook self-referrals (14 of 323; 4.3%) (p <0.00001).\"",
  },
  "fda-recruiting-1998": {
    id: "fda-recruiting-1998",
    title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
    publisher: "U.S. Food and Drug Administration",
    url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
    year: "1998",
    note: "Guidance dated January 1998. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process. Advertisements should be reviewed and approved by the IRB as part of the package for initial review.\"",
  },
};
