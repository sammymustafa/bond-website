import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";

const page: SeoPage = {
  path: "/compare",
  category: "hub",
  title: "Compare Bond Health with other recruitment tools",
  description:
    "How Bond compares with Trially, Tempus (Deep 6 AI), Alleviate Health, Hippocratic AI, Inato, media recruitment and manual chart review, every claim sourced.",
  keywords: [
    "clinical trial recruitment software comparison",
    "Trially alternative",
    "Deep 6 AI alternative",
    "Alleviate Health alternative",
    "Inato alternative",
  ],
  eyebrow: "Compare",
  h1: "How Bond compares",
  intro:
    "Most recruitment tools cover one step. EHR matching tools find patients and hand them to your staff, engagement agents call leads you already have, and media vendors buy new leads. Bond does all of it: it finds eligible patients in your own EHR, sets up Meta and Google ad campaigns to reach new ones, contacts, pre-screens and schedules every lead, supports informed consent and keeps participants engaged after enrollment, in one workflow with no integration fee and a success fee per randomized patient.{{cite:bond-site,bond-product}}",
  summary: "Every comparison page in one place, and why sites choose one platform over separate tools.",
  lastUpdated: "2026-09-24",
  sections: [
    {
      id: "why-bond",
      heading: "Why do sites choose Bond?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "One platform from chart to consent",
          text: "As of September 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that reads EHR notes against a protocol, contacts patients by voice and text, and supports informed consent.",
        },
        {
          type: "stats",
          items: [
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
            { value: "90%+", label: "matching accuracy in eligibility screening", cite: "bond-site" },
            { value: "3x", label: "contact rate for voice and SMS outreach", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**No handoffs between tools.** [Identify](/identify), [Engage](/engage) and [Consent](/consent) share one dashboard and one audit trail, from first match to signed consent.{{cite:bond-site}}",
            "**Evidence behind every match.** Each candidate comes with criterion-by-criterion rationale linked to the chart, so coordinators check evidence instead of rereading records. Identify reads clinical notes, prescriptions and lab results, and uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
            "**Agents that speak your patients' language.** Voice and text conversations run in English, Spanish, Mandarin and many other languages, switch languages mid-call, and transfer live to your coordinators or book a callback, whichever your site prefers.{{cite:bond-product}}",
            "**Support after enrollment.** The same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
            "**No integration fee.** A volume-based platform fee plus a success fee paid only for patients who are randomized. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
            "**Every major EHR, live in 48 hours.** Bond connects to Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and the other major EHRs, its team handles the integration end to end, and Bond is a CRIO Certified Partner. See [implementation](/implementation).{{cite:bond-site,bond-product}}",
            "**Security you can check.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway. Its public Trust Center lists 73 HIPAA Security Rule controls, monitored continuously. See [security](/security).{{cite:bond-product,bond-trust-center}}",
            "**Ads when you need more patients.** For studies that need patients beyond your records, Bond sets up Meta and Google ad campaigns, and those leads flow into the same pre-screening and scheduling as EHR matches.{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "which-comparison",
      heading: "Which comparison should I read?",
      blocks: [
        {
          type: "p",
          text: "Start with the full table if you are building a shortlist. Read a vendor page if one name keeps coming up. If your team still screens charts by hand, start with the manual chart review comparison.",
        },
        { type: "pageList", category: "comparison" },
      ],
    },
    {
      id: "how-we-compare",
      heading: "How are these comparisons written?",
      blocks: [
        {
          type: "ul",
          items: [
            "Facts about other companies come from their own websites, filings and press releases, or from reputable press, and each one is dated.",
            "Facts about Bond come from Bond's website, its public Trust Center, its technical report and its product information.",
            "Where we found nothing public about a capability, the page says \"not publicly documented\" rather than guessing.",
            "Each page ends with a way to test Bond against the other option on your own protocol and patient list.",
            "If something is out of date, email hello@bondtrials.com and we will correct it.",
          ],
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
      note: "Capabilities, pricing and compliance status described by Bond Health, September 2026.",
    },
    {
      id: "bond-trust-center",
      title: "Bond Health Trust Center",
      publisher: "Bond Health, monitored by Vanta",
      url: "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj",
      year: "2026",
      note: "Lists 73 HIPAA Security Rule controls: infrastructure security (20), organizational security (14), internal security procedures (38), and data and privacy (1), monitored continuously by Vanta. Viewed September 23, 2026.",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "All recruitment software, one table", href: "/compare/clinical-trial-recruitment-software", description: "Every vendor's coverage of identify, engage and consent." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based platform fee plus a per-randomized-patient success fee." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Implementation", href: "/implementation", description: "Live in 48 hours, step by step." },
  ],
};

export default page;
