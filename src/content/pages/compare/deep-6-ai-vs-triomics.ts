import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { deep6Sources } from "./_deep6-sources";

const page: SeoPage = {
  path: "/compare/deep-6-ai-vs-triomics",
  category: "comparison",
  title: "Deep 6 AI vs Triomics: EHR trial matching compared",
  description:
    "Deep 6 AI (Tempus) vs Triomics PRISM: data, workflow, oncology focus and pricing, plus an option that also contacts, pre-screens and books matched patients.",
  keywords: [
    "Deep 6 AI vs Triomics",
    "Triomics vs Deep 6 AI",
    "Triomics PRISM",
    "Deep 6 AI alternatives",
    "Triomics alternatives",
    "oncology clinical trial matching software",
    "EHR clinical trial matching software",
  ],
  eyebrow: "Comparison",
  h1: "Deep 6 AI vs Triomics",
  intro:
    "Deep 6 AI and Triomics both built EHR trial matching that reads unstructured notes and reports and sends the matches to site staff.{{cite:tempus-deep6-acquisition,deep6-life-sciences-2023,triomics-home,triomics-prism}} Triomics is an oncology platform that screens the patients on a cancer center's upcoming clinic schedule inside Epic, OncoEMR and iKnowMed.{{cite:triomics-prism,triomics-cancer-centers}} Deep 6 AI, which health systems used across all their trials, has been a Tempus company since March 11, 2025, and Tempus now sells trial matching through TIME and Next Trials.{{cite:deep6-cassidy-2024,tempus-10k-2025,deep6-archive-2026,tempus-next-trials-2026}} Neither publicly documents calling or texting matched patients or booking their visits. Bond Health finds patients in the EHR and then contacts, pre-screens and schedules them.{{cite:bond-site}}",
  summary: "How Deep 6 AI and Triomics differ on data, workflow, focus and pricing, and how both compare with Bond.",
  lastUpdated: "2026-10-29",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "difference",
      heading: "What is the difference between Deep 6 AI and Triomics?",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "The short answer",
          text: "Triomics is an oncology platform: its PRISM product matches a cancer center's scheduled patients against every active trial, inside the EHR, before clinic.{{cite:triomics-home,triomics-prism}} Deep 6 AI was general EHR matching software that health systems ran across all their trials, often from the Clinical Trials Office. It is now part of Tempus, whose current trial products are TIME and Next Trials.{{cite:deep6-cassidy-2024,tempus-10k-2025,tempus-time-site-2026,tempus-next-trials-2026}} Both stop at the match: site staff take it from there.",
        },
        {
          type: "ul",
          items: [
            "**Focus.** Triomics says it is \"built for cancer care's complexity\".{{cite:triomics-home}} Deep 6 AI was used enterprise-wide for investigator-initiated, government-funded and sponsored trials.{{cite:deep6-cassidy-2024}}",
            "**When screening runs.** Triomics PRISM screens \"every upcoming patient on tomorrow's schedule and the week ahead\" against the site's active trials, refreshes nightly and re-checks eligibility whenever the chart updates.{{cite:triomics-prism}} Deep 6 AI matched patients by mining real-time structured and unstructured EMR data.{{cite:tempus-deep6-acquisition}}",
            "**Where matches go.** Triomics sends matches as an EHR in-basket message, in the PRISM worklist or by email before clinic starts.{{cite:triomics-prism}} In Deep 6 AI, site staff validated each patient's eligibility with evidence in the EMR and tracked recruitment status and referrals there.{{cite:deep6-life-sciences-2023}}",
            "**Where each company is now.** Tempus, which acquired Deep 6 AI, sells trial matching through TIME, its oncology trial network, and Next Trials, which pre-screens for trials already open at a practice. Deep 6 AI's own website no longer loads.{{cite:tempus-10k-2025,tempus-time-site-2026,tempus-next-trials-2026,deep6-archive-2026}} Besides PRISM for trial matching, Triomics offers Symphony for visit preparation and Harmony for data curation.{{cite:triomics-about}}",
            "**Sponsors.** Both sell to life sciences companies through the sites that run them. Triomics describes \"one AI platform, deployed at the sites, sponsor-ready outputs\", and Deep 6 AI let sponsors share AI-matched patient cohorts with site staff.{{cite:triomics-life-sciences,deep6-life-sciences-2023}}",
          ],
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Deep 6 AI, Triomics and Bond compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Years in the Deep 6 AI and Triomics columns show each source's date. \"Not publicly documented\" means we found no public description in the materials we reviewed in October 2026, not that the capability is absent.",
        },
        {
          type: "table",
          caption: "Deep 6 AI (Tempus), Triomics and Bond Health, from materials reviewed in October 2026",
          columns: ["Capability", "Deep 6 AI (Tempus)", "Triomics", "Bond Health"],
          rows: [
            [
              "Therapeutic focus",
              "Was used enterprise-wide across a health system's investigator-initiated, government-funded and sponsored trials (2024).{{cite:deep6-cassidy-2024}}",
              "Oncology. \"Built for cancer care's complexity\" (2026).{{cite:triomics-home}}",
              "Any [therapeutic area](/therapeutic-areas). Screening is configured from each protocol's own criteria, for drug and device studies alike.{{cite:bond-site,bond-product}}",
            ],
            [
              "EHR identification",
              "Mined real-time structured and unstructured EMR data to match patients to trials (2025).{{cite:tempus-deep6-acquisition}}",
              "PRISM screens patients on the upcoming clinic schedule against every active trial, refreshes nightly and re-checks when the chart updates (2026).{{cite:triomics-prism}}",
              "LLM-based screening of the site's EHR against each protocol's criteria, returning ranked matches: 10,000+ charts per hour and 90%+ matching accuracy.{{cite:bond-site}}",
            ],
            [
              "Unstructured data",
              "NLP over physician notes, lab, radiology and pathology reports, and genomics results (2023).{{cite:deep6-ttuhsc-2023}}",
              "Reasons across \"every note, report and fax\" and reads HL7, FHIR, CCDA and XML data plus PDFs, TIFFs and JPEGs (2026).{{cite:triomics-home,triomics-cancer-centers}}",
              "Reads clinical notes, prescriptions and lab results, and uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
            ],
            [
              "Evidence behind each match",
              "Highlighted the patient data related to each inclusion and exclusion criterion and showed the text where its NLP found each keyword (2024).{{cite:osu-aaci-2024}}",
              "Delivers \"structured, cited answers\" into the cancer center's workflows (2026).{{cite:triomics-home}}",
              "Ranked matches come with the evidence behind each criterion decision and traceability to the chart.{{cite:bond-site}}",
            ],
            [
              "Where matches go",
              "Site staff validated eligibility with evidence in the EMR and tracked recruitment status and referrals (2023).{{cite:deep6-life-sciences-2023}}",
              "An EHR in-basket message, the PRISM worklist or an email to staff, before clinic starts (2026).{{cite:triomics-prism}}",
              "Straight to Bond's voice and SMS agents, which contact the patient, alongside a dashboard for the site team.{{cite:bond-site,bond-product}}",
            ],
            [
              "Patient outreach and scheduling",
              "Automated calls or texts to matched patients, and visit booking: not publicly documented (October 2026).",
              "Not publicly documented (October 2026). The matches go to staff, not to patients.{{cite:triomics-prism}}",
              "Voice and SMS agents contact matched patients, starting from what Identify found in the chart, and can pre-screen and book a visit in one conversation, in the patient's language. Bond's site cites a 3x contact rate.{{cite:bond-site,bond-product}}",
            ],
            [
              "Consent",
              "Patient-facing consent support: not publicly documented (October 2026).",
              "Not publicly documented (October 2026).",
              "Plain-language explanations, patient Q&A and staff escalation, with checks on the patient's understanding and an auditable record for the site. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
            ],
            [
              "Support after enrollment",
              "Not publicly documented (October 2026).",
              "Not publicly documented (October 2026).",
              "Visit reminders, transportation booking, symptom and diary collection, side-effect check-ins and flags for participants at risk of dropping out.{{cite:bond-product}}",
            ],
            [
              "EHR connections",
              "Integrated with the health system's EMR (2023) and could bring in genomics, cancer registry and CTMS data (2024).{{cite:deep6-ttuhsc-2023,osu-aaci-2024}}",
              "Native integrations with Epic, OncoEMR and iKnowMed, and approved on the Epic App Marketplace (2026). Its PRISM page also lists Cerner.{{cite:triomics-cancer-centers,triomics-prism}}",
              "Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and the other major EHRs, via FHIR and HL7 or an aggregator, plus CTMS systems including CRIO, Advarra OnCore, RealTime and Veeva SiteVault. Live in 48 hours, with no integration fee ([implementation](/implementation)).{{cite:bond-site,bond-product}}",
            ],
            [
              "Who it serves",
              "Health systems, often through the Clinical Trials Office, and life sciences companies (2024).{{cite:deep6-cassidy-2024}}",
              "Cancer centers, and life sciences companies through the sites that run it (2026).{{cite:triomics-cancer-centers,triomics-life-sciences}}",
              "Any research site, including physician groups and FQHCs, plus site networks, CROs and sponsors.{{cite:bond-site}}",
            ],
            [
              "Pricing",
              "No public price list found (October 2026).",
              "No public price list found (October 2026). The website offers a demo.{{cite:triomics-home}}",
              "A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
            ],
          ],
        },
      ],
    },
    {
      id: "which-to-choose",
      heading: "Should you choose Deep 6 AI or Triomics?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Choose Triomics** if you are a cancer center on Epic, OncoEMR or iKnowMed and want every scheduled patient checked against your trial portfolio before clinic, with matches in the in-basket. Its Symphony and Harmony products add visit preparation and data curation.{{cite:triomics-prism,triomics-cancer-centers,triomics-about}}",
            "**Choose Tempus**, which owns Deep 6 AI, if you run oncology trials and want matching tied to its TIME network or Next Trials pre-screening for trials already open at your practice. Ask Tempus which Deep 6 AI capabilities it still offers, since Deep 6 AI's own website no longer loads.{{cite:tempus-time-site-2026,tempus-next-trials-2026,deep6-archive-2026}}",
            "**Choose Bond** if the bottleneck is what happens after the match: someone has to call each patient, pre-screen them, book the visit and walk them through consent. Bond does all of that, in any therapeutic area, from the same EHR screening.{{cite:bond-site,bond-product}}",
          ],
        },
      ],
    },
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over Deep 6 AI and Triomics?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "Matching is half the job",
          text: "A match list still needs a coordinator to call every patient. Bond finds eligible patients in the EHR, then its voice and text agents contact, pre-screen and schedule them and support consent, in one product with a percentage of each randomized patient's milestone payments, from randomization onward.{{cite:bond-site,bond-product}}",
        },
        {
          type: "stats",
          items: [
            { value: "48 hours", label: "typical time to go live with full EHR integration, handled by Bond's team with no integration fee", cite: "bond-site" },
            { value: "10,000+", label: "charts screened per hour", cite: "bond-site" },
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**One product from chart to booked visit.** Bond automates EHR screening, patient outreach, visit booking and consent tracking in one workflow, with \"no data silos, no manual handoffs, and complete visibility from first ad click or chart match to a booked visit and signed consent.\"{{cite:bond-site}}",
            ADS_BULLET,
            "**Agents that start from the chart.** Bond's voice agents skip questions the chart already answers, can explain why the patient was contacted, and transfer live to a coordinator when the site wants that, in the patient's language.{{cite:bond-product}}",
            "**Every open study at once.** Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**Security you can check.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its information security management system is certified to ISO/IEC 27001:2022 by Advantage Partners. See [security](/security).{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "evaluate",
      heading: "How can you test Deep 6 AI, Triomics and Bond on your own data?",
      blocks: [
        {
          type: "p",
          text: "Run a pilot on your own records, under a [business associate agreement](/glossary/baa). A demo shows an interface; a pilot shows which tool gets more eligible patients to a screening visit.",
        },
        {
          type: "steps",
          items: [
            { title: "Pick a study with a known answer", text: "Use a closed or mature study where coordinators know who enrolled, who screen-failed and why. For Triomics, it has to be an oncology study." },
            { title: "Give every vendor the same protocol and patients", text: "Same criteria, same records. Ask for the chart evidence behind every criterion decision, not only a score." },
            { title: "Count what happens after the match", text: "Track who contacts each matched patient, how fast, how many are reached and how many reach a screening visit. With a matching-only tool, that work is your coordinators' time." },
            {
              title: "Compare cost per randomized patient",
              text: "Add platform, integration and staff time, then divide by randomized patients. Bond's milestone share is a percentage of each randomized patient's milestone payments, from randomization onward ([pricing](/pricing)).{{cite:bond-product}}",
            },
          ],
        },
        {
          type: "p",
          text: "The [vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) turns these steps into questions, and [all recruitment software, one table](/compare/clinical-trial-recruitment-software) covers the wider category.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true",
          text: "Bring one protocol. We will show how Bond handles its hardest criteria, then how it contacts and books the patients it finds.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
    {
      id: "how-made",
      heading: "How was this comparison made?",
      blocks: [
        {
          type: "p",
          text: "Bond wrote this page in October 2026. Triomics facts come from its website, read in October 2026; parts of the site appeared to be mid-update, so check its live pages for changes. Deep 6 AI facts come from Tempus's 2025 Form 10-K, Deep 6 AI and Tempus press releases, Tempus web pages, an archived copy of Deep 6 AI's website and an Ohio State customer abstract. deep6.ai itself did not load in October 2026. Bond's figures and capabilities come from its website and product information Bond provided. We used no private or internal competitive material.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Triomics better than Deep 6 AI?",
      a: "For cancer centers, Triomics is the more specialized tool: it is built for oncology and checks each scheduled patient against every active trial inside Epic, OncoEMR or iKnowMed.{{cite:triomics-home,triomics-prism,triomics-cancer-centers}} Deep 6 AI was built for health systems running one matching tool across all their trials, and it is now part of Tempus.{{cite:deep6-cassidy-2024,tempus-10k-2025}} Neither publicly documents contacting matched patients; Bond does, and then books their visits.{{cite:bond-site}}",
    },
    {
      q: "Does Triomics contact patients?",
      a: "Not according to its public materials. PRISM sends matches to staff as an EHR in-basket message, a worklist entry or an email.{{cite:triomics-prism}} We found no description of calling or texting patients, booking visits or consent support as of October 2026.",
    },
    {
      q: "Is Deep 6 AI part of Tempus?",
      a: "Yes. Tempus's 2025 Form 10-K says it acquired Deep 6 AI, Inc. on March 11, 2025.{{cite:tempus-10k-2025}} By January 2026, Deep 6 AI's website said it \"is now a Tempus AI company\".{{cite:deep6-archive-2026}} See [Bond vs Tempus (Deep 6 AI)](/compare/bond-vs-tempus-deep-6) for TIME and Next Trials.",
    },
    {
      q: "How much do Deep 6 AI and Triomics cost?",
      a: "Neither publishes a price list as of October 2026. Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}} See [what recruitment software costs](/guides/clinical-trial-recruitment-software-cost).",
    },
    {
      q: "What is an alternative to Deep 6 AI and Triomics?",
      a: "Bond Health. It screens the EHR, including clinical notes and pathology, radiology and molecular reports, then contacts, pre-screens and schedules matched patients by voice and text and supports consent, in any therapeutic area.{{cite:bond-site,bond-product}}",
    },
  ],
  sources: [
    {
      id: "triomics-home",
      title: "Triomics homepage",
      publisher: "Triomics",
      url: "https://triomics.com/",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"Built for cancer care's complexity\"; \"Our AI agents reason across every note, report and fax in a patient's record and deliver structured, cited answers … directly into the workflows that run a cancer center.\"; \"Coordinators stop reading charts to rule patients out.\"",
    },
    {
      id: "triomics-prism",
      title: "PRISM: clinical trial matching",
      publisher: "Triomics",
      url: "https://triomics.com/prism",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"PRISM screens every upcoming patient on tomorrow's schedule and the week ahead against every active trial in your portfolio, then refreshes the results nightly as each visit approaches.\"; \"Matches arrive as an EHR in-basket message or in the PRISM worklist before clinic starts\"; \"Matches can surface as in-basket or email notifications when the chart updates\"; \"PRISM re-evaluates eligibility every time the chart updates\"; \"Federally funded, investigator-initiated, industry-sponsored. Your full portfolio, no exceptions.\"; \"Native in Epic, Cerner, OncoEMR. Approved on the Epic App Marketplace.\"",
    },
    {
      id: "triomics-cancer-centers",
      title: "Triomics for cancer centers",
      publisher: "Triomics",
      url: "https://triomics.com/cancer-centers",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"HL7, FHIR, CCDAs, XMLs, PDFs, TIFFs, JPEGs.\"; \"Native integrations with Epic, OncoEMR, iKnowMed. Approved on the Epic App Marketplace. Outputs land in in-baskets, worklists, and EHR notes.\"",
    },
    {
      id: "triomics-life-sciences",
      title: "Triomics for life sciences",
      publisher: "Triomics",
      url: "https://triomics.com/life-sciences",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"One AI platform, deployed at the sites, sponsor- ready outputs.\"; \"Triomics deployments are governed by site agreements.\"",
    },
    {
      id: "triomics-about",
      title: "About Triomics",
      publisher: "Triomics",
      url: "https://triomics.com/about-us",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Today, it powers PRISM for trial matching, Symphony for visit prep, and Harmony for data curation.\"",
    },
    ...deep6Sources("tempus-10k-2025", "tempus-deep6-acquisition", "tempus-time-site-2026", "tempus-next-trials-2026", "deep6-cassidy-2024", "deep6-life-sciences-2023", "deep6-ttuhsc-2023", "osu-aaci-2024", "deep6-archive-2026"),
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
    ...testimonialSources(),
  ],
  related: [
    { label: "Bond vs Tempus (Deep 6 AI)", href: "/compare/bond-vs-tempus-deep-6", description: "Deep 6 AI, TIME and Next Trials, compared with Bond." },
    { label: "Deep 6 AI vs Paradigm Health", href: "/compare/deep-6-ai-vs-paradigm-health", description: "Matching software vs a sponsor-funded research network." },
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, vendor by vendor." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Oncology recruitment", href: "/oncology", description: "Where oncology criteria sit in the chart, and how Bond screens for them." },
  ],
};

export default page;
