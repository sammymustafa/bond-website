import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { deep6Sources } from "./_deep6-sources";

const page: SeoPage = {
  path: "/compare/deep-6-ai-vs-mendel",
  category: "comparison",
  title: "Deep 6 AI vs Mendel: clinical trial matching compared",
  description:
    "Deep 6 AI and Mendel both read unstructured EHR data, and both have joined larger companies. How they compared, where each is now, and what to use instead.",
  keywords: [
    "Deep 6 AI vs Mendel",
    "Mendel vs Deep 6 AI",
    "Mendel AI Hypercube",
    "Mendel AI Ensemble Health Partners",
    "Deep 6 AI Tempus",
    "Deep 6 AI alternatives",
    "Mendel AI alternatives",
  ],
  eyebrow: "Comparison",
  h1: "Deep 6 AI vs Mendel",
  intro:
    "Deep 6 AI and Mendel both used AI to read unstructured medical records, but for different jobs: Deep 6 AI matched a health system's patients to its clinical trials, while Mendel was a broader clinical data platform whose Hypercube copilots handled chart abstraction, chart review, cohort analysis and trial matching.{{cite:tempus-deep6-acquisition,deep6-cassidy-2024,mendel-meta-2025,mendel-abstraction-2025}} Both have since joined larger companies: Tempus acquired Deep 6 AI on March 11, 2025, and Mendel's investor Oak HC/FT lists it as merged into Ensemble Health Partners.{{cite:tempus-10k-2025,oak-mendel}} Neither publicly documented contacting matched patients. Bond Health finds patients in the EHR and then contacts, pre-screens and schedules them.{{cite:bond-site}}",
  summary: "How Deep 6 AI and Mendel differed, where each company is now, and how both compare with Bond.",
  lastUpdated: "2026-10-23",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "difference",
      heading: "What is the difference between Deep 6 AI and Mendel?",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "The short answer",
          text: "Deep 6 AI was trial-matching software; Mendel was a clinical data platform that offered trial matching among other chart-review tasks.{{cite:deep6-cassidy-2024,mendel-home-2025}} Deep 6 AI is now part of Tempus, which sells trial matching through TIME and Next Trials.{{cite:deep6-archive-2026,tempus-next-trials-2026}} Mendel's website no longer loads, its investor lists it as merged into Ensemble Health Partners, and we found no current Mendel product on Ensemble's website.{{cite:oak-mendel}}",
        },
        {
          type: "ul",
          items: [
            "**Focus.** Deep 6 AI matched patients to a health system's investigator-initiated, government-funded and sponsored trials.{{cite:deep6-cassidy-2024}} Mendel described itself as AI for \"clinical data workflows\" for providers, biopharma and diagnostics companies, and for providers offered prior authorization, chart review and trial matching.{{cite:mendel-home-2025}}",
            "**Data.** Deep 6 AI applied NLP to physician notes, lab, radiology and pathology reports, and genomics results.{{cite:deep6-ttuhsc-2023}} Mendel's Hypercube abstracted the medical record \"including unstructured data, such as genomic and pathology reports and clinical notes\".{{cite:mendel-abstraction-2025}}",
            "**Connections.** Deep 6 AI integrated with the health system's EMR.{{cite:deep6-ttuhsc-2023}} Mendel's FAQ listed integrations with data warehouses such as Databricks and Snowflake and BI tools such as Tableau and Qlik; we found no EHR connector named in its materials.{{cite:mendel-faq-2025}}",
            "**Evidence.** Deep 6 AI highlighted the patient data behind each criterion and showed the text where its NLP found each keyword.{{cite:osu-aaci-2024}} Mendel said every answer was supported by evidence highlighted from the patient's original records.{{cite:mendel-charts-2025}}",
            "**Where each is now.** Deep 6 AI's website said by January 2026 that it \"is now a Tempus AI company\".{{cite:deep6-archive-2026}} Oak HC/FT lists Mendel as merged into Ensemble Health Partners, a Forbes Councils profile of an Ensemble executive dates the acquisition to July 2025, and Ensemble's Chief AI Officer, Wael Salloum, previously founded Mendel.ai.{{cite:oak-mendel,forbes-ensemble,ensemble-leadership}}",
          ],
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Deep 6 AI, Mendel and Bond compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Years in the Deep 6 AI and Mendel columns show each source's date. \"Not publicly documented\" means we found no public description in the materials we reviewed in October 2026, not that the capability never existed.",
        },
        {
          type: "table",
          caption: "Deep 6 AI (Tempus), Mendel and Bond Health, from materials reviewed in October 2026",
          columns: ["Capability", "Deep 6 AI (Tempus)", "Mendel", "Bond Health"],
          rows: [
            [
              "Status in October 2026",
              "Part of Tempus since March 11, 2025. deep6.ai no longer loads; Tempus sells trial matching through TIME and Next Trials.{{cite:tempus-10k-2025,deep6-archive-2026,tempus-next-trials-2026}}",
              "Listed by its investor as merged into Ensemble Health Partners. mendel.ai did not load in September or October 2026.{{cite:oak-mendel,mendel-meta-2025}}",
              "Available to research sites, site networks, CROs and sponsors, with full EHR integration in 48 hours and no integration fee.{{cite:bond-site}}",
            ],
            [
              "Focus",
              "Clinical trial matching across a health system's trials (2024).{{cite:deep6-cassidy-2024}}",
              "Clinical data platform: chart abstraction, chart review, cohort analysis, prior authorization and trial matching (2025).{{cite:mendel-home-2025,mendel-meta-2025}}",
              "Clinical trial recruitment, from EHR screening to outreach, booked visits and consent support, in any [therapeutic area](/therapeutic-areas).{{cite:bond-site,bond-product}}",
            ],
            [
              "Trial matching",
              "Mined real-time structured and unstructured EMR data to match patients to trials (2025).{{cite:tempus-deep6-acquisition}}",
              "Found patients \"from your system\" who match a trial's inclusion and exclusion criteria, and mapped eligibility from protocol templates (2025).{{cite:mendel-providers-2025,mendel-charts-2025}}",
              "LLM-based screening of the site's EHR against each protocol's criteria, returning ranked matches: 10,000+ charts per hour and 90%+ matching accuracy.{{cite:bond-site}}",
            ],
            [
              "Unstructured data",
              "NLP over physician notes, lab, radiology and pathology reports, and genomics results (2023).{{cite:deep6-ttuhsc-2023}}",
              "Genomic and pathology reports and clinical notes (2025).{{cite:mendel-abstraction-2025}}",
              "Reads clinical notes, prescriptions and lab results, and uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
            ],
            [
              "Evidence behind each answer",
              "Highlighted the patient data related to each criterion and the text where its NLP found each keyword (2024).{{cite:osu-aaci-2024}}",
              "Every answer supported by evidence highlighted from the patient's original records (2025).{{cite:mendel-charts-2025}}",
              "Ranked matches come with the evidence behind each criterion decision and traceability to the chart.{{cite:bond-site}}",
            ],
            [
              "Data connections",
              "Integrated with the health system's EMR (2023) and could bring in genomics, cancer registry and CTMS data (2024).{{cite:deep6-ttuhsc-2023,osu-aaci-2024}}",
              "Data warehouses such as Databricks and Snowflake, and BI tools such as Tableau and Qlik (2025). No EHR connector named.{{cite:mendel-faq-2025}}",
              "Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and the other major EHRs, plus CTMS systems including CRIO, Advarra OnCore, RealTime and Veeva SiteVault ([implementation](/implementation)).{{cite:bond-site,bond-product}}",
            ],
            [
              "Patient outreach and scheduling",
              "Not publicly documented (October 2026).",
              "Not publicly documented (October 2026).",
              "Voice and SMS agents contact matched patients, starting from what Identify found in the chart, and can pre-screen and book a visit in one conversation, in the patient's language.{{cite:bond-site,bond-product}}",
            ],
            [
              "Consent",
              "Not publicly documented (October 2026).",
              "Not publicly documented (October 2026).",
              "Plain-language explanations, patient Q&A and staff escalation, with checks on the patient's understanding and an auditable record for the site. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
            ],
            [
              "Who it served",
              "Health systems, often through the Clinical Trials Office, and life sciences companies (2024).{{cite:deep6-cassidy-2024}}",
              "Providers, biopharma and diagnostics companies (2025), including life sciences customers (2024).{{cite:mendel-home-2025,mendel-google-2024}}",
              "Any research site, including physician groups and FQHCs, plus site networks, CROs and sponsors.{{cite:bond-site}}",
            ],
            [
              "Pricing",
              "No public price list found (October 2026).",
              "Every product listed \"Contact Sales\" (2025).{{cite:mendel-providers-2025}}",
              "A volume-based fee per screened patient plus a percentage of the randomization milestone payment for each patient, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
            ],
          ],
        },
      ],
    },
    {
      id: "what-to-use",
      heading: "What should you use instead of Deep 6 AI or Mendel?",
      blocks: [
        {
          type: "ul",
          items: [
            "**If you were evaluating Deep 6 AI,** talk to Tempus about TIME and Next Trials, which pre-screen oncology patients for trials, and ask which Deep 6 AI capabilities it still offers.{{cite:tempus-time-site-2026,tempus-next-trials-2026}}",
            "**If you were evaluating Mendel** for chart abstraction or cohort work, ask Ensemble Health Partners whether Mendel's products are still sold.{{cite:oak-mendel}}",
            "**If you need patients enrolled,** Bond finds them in your EHR, including clinical notes and pathology, radiology and molecular reports, then contacts, pre-screens and books them and supports consent, in any therapeutic area.{{cite:bond-site,bond-product}}",
          ],
        },
      ],
    },
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over EHR matching tools?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "Matching is half the job",
          text: "A match list still needs a coordinator to call every patient. Bond finds eligible patients in the EHR, then its voice and text agents contact, pre-screen and schedule them and support consent, in one product with a percentage of each patient's randomization milestone payment.{{cite:bond-site,bond-product}}",
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
            "**Every open study at once.** Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**Support after enrollment.** The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
            "**Security you can check.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its information security management system is certified to ISO/IEC 27001:2022 by Advantage Partners. See [security](/security).{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "evaluate",
      heading: "How can you test a replacement on your own data?",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Pick a study with a known answer", text: "Use a closed or mature study where coordinators know who enrolled, who screen-failed and why." },
            { title: "Give each vendor the same protocol and patients", text: "Same criteria, same records, under a [business associate agreement](/glossary/baa). Ask for the chart evidence behind every criterion decision, not only a score." },
            { title: "Count what happens after the match", text: "Track who contacts each matched patient, how fast, how many are reached and how many reach a screening visit." },
            {
              title: "Compare cost per randomized patient",
              text: "Add platform, integration and staff time, then divide by randomized patients. Bond's randomization share is a percentage of each patient's randomization milestone payment ([pricing](/pricing)).{{cite:bond-product}}",
            },
          ],
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
          text: "Bond wrote this page in October 2026. mendel.ai did not load when we checked in September and October 2026, so Mendel facts come from Internet Archive copies of its website from June to August 2025, a 2024 Google Cloud article, a 2025 Meta article, its investor Oak HC/FT's portfolio page, Ensemble Health Partners' leadership page and a Forbes Councils profile. Deep 6 AI facts come from Tempus's 2025 Form 10-K, Deep 6 AI and Tempus press releases, Tempus web pages, an archived copy of Deep 6 AI's website and an Ohio State customer abstract. Bond's figures and capabilities come from its website and product information Bond provided. We used no private or internal competitive material.",
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
      q: "Is Mendel still available?",
      a: "We could not confirm that it is. mendel.ai did not load when we checked in September and October 2026, Oak HC/FT lists Mendel as merged into Ensemble Health Partners, and we found no current Mendel product on Ensemble's website.{{cite:oak-mendel,mendel-meta-2025}} Ask Ensemble directly.",
    },
    {
      q: "Who acquired Mendel?",
      a: "Ensemble Health Partners, according to Mendel's investor Oak HC/FT. A Forbes Councils profile of an Ensemble executive dates the acquisition to July 2025.{{cite:oak-mendel,forbes-ensemble}}",
    },
    {
      q: "Did Mendel do clinical trial matching?",
      a: "Yes, among other tasks. Meta described Mendel's Hypercube as usable for trial matching in natural language, and Mendel's provider page offered matching against a trial's inclusion and exclusion criteria.{{cite:mendel-meta-2025,mendel-providers-2025}} Contacting matched patients was not described.",
    },
    {
      q: "Is Deep 6 AI part of Tempus?",
      a: "Yes. Tempus's 2025 Form 10-K says it acquired Deep 6 AI, Inc. on March 11, 2025, and by January 2026 Deep 6 AI's website said it \"is now a Tempus AI company\".{{cite:tempus-10k-2025,deep6-archive-2026}} See [Bond vs Tempus (Deep 6 AI)](/compare/bond-vs-tempus-deep-6).",
    },
    {
      q: "What is an alternative to Deep 6 AI and Mendel?",
      a: "Bond Health. It screens the EHR, including clinical notes and pathology, radiology and molecular reports, then contacts, pre-screens and schedules matched patients by voice and text and supports consent, in any therapeutic area.{{cite:bond-site,bond-product}} See [Deep 6 AI vs Triomics](/compare/deep-6-ai-vs-triomics) for an oncology option.",
    },
  ],
  sources: [
    {
      id: "mendel-home-2025",
      title: "Mendel homepage (archived)",
      publisher: "Mendel, via the Internet Archive",
      url: "https://web.archive.org/web/20250830184607/https://www.mendel.ai/",
      year: "2025",
      note: "Internet Archive copy of August 30, 2025, read October 23, 2026. Quotes: \"Supercharge your clinical data workflows. AI copilots that can clinically reason\"; \"Whether you're in clinical care, pharmaceuticals, or diagnostics, our solutions are designed to meet your specific needs.\"; \"For Providers Streamline prior authorizations, enhance chart review accuracy, and efficiently match patients to clinical trials.\"",
    },
    {
      id: "mendel-providers-2025",
      title: "Mendel for providers (archived)",
      publisher: "Mendel, via the Internet Archive",
      url: "https://web.archive.org/web/20250621210159/https://www.mendel.ai/solutions/providers",
      year: "2025",
      note: "Internet Archive copy of June 21, 2025, read October 23, 2026. Quotes: \"Trial Matching Find patients from your system who match the inclusion and exclusion criteria of trials being recruited for.\"; \"Mendel helps physicians and care coordinators to chat with the structured and unstructured EMR data\". Each product card reads \"Pricing Contact Sales\".",
    },
    {
      id: "mendel-abstraction-2025",
      title: "Clinical data abstraction one-sheet (archived)",
      publisher: "Mendel, via the Internet Archive",
      url: "https://web.archive.org/web/20250712121334/https://www.mendel.ai/solutions/one-sheets/clinical-data-abstraction",
      year: "2025",
      note: "Internet Archive copy of July 12, 2025, read October 23, 2026. Quote: \"Hypercube is your AI copilot, powering comprehensive abstraction of the medical record including unstructured data, such as genomic and pathology reports and clinical notes.\"",
    },
    {
      id: "mendel-charts-2025",
      title: "Hypercube Charts (archived)",
      publisher: "Mendel, via the Internet Archive",
      url: "https://web.archive.org/web/20250712135502/https://www.mendel.ai/product/hypercube-charts",
      year: "2025",
      note: "Internet Archive copy of July 12, 2025, read October 23, 2026. Quotes: \"Craft a template incorporating prior-authorization criteria, NCCN guidelines, and trial protocols, and Hypercube will seamlessly map patient eligibility.\"; \"Every answer is supported by discrete evidence highlighted from the patient's original records\".",
    },
    {
      id: "mendel-faq-2025",
      title: "Mendel FAQ (archived)",
      publisher: "Mendel, via the Internet Archive",
      url: "https://web.archive.org/web/20250828112123/https://www.mendel.ai/resources/faq",
      year: "2025",
      note: "Internet Archive copy of August 28, 2025, read October 23, 2026. Quote: \"Integrations with your current data warehouse such as Databricks and Snowflake, most BI tools like Tableau, Qlik, etc.\"",
    },
    {
      id: "mendel-google-2024",
      title: "Can gen AI bring order to medical records? This startup is giving it a shot.",
      publisher: "Google Cloud Blog (Transform)",
      url: "https://cloud.google.com/transform/gen-ai-medical-records-solutions-llms-mendel",
      year: "2024",
      note: "Published July 25, 2024, by Sumeet Ranu and Matt A.V. Chaban; re-checked October 23, 2026. Quotes: Mendel has \"some of the world's leading life sciences companies as customers\"; Hypercube Charts: \"Chat with medical records through a user-friendly interface with sophisticated clinical reasoning to complete chart reviews for visits, pre-authorization, trial matching and more\".",
    },
    {
      id: "mendel-meta-2025",
      title: "Dramatically accelerating patient-matching in clinical trials with open source",
      publisher: "Meta AI (blog)",
      url: "https://ai.meta.com/blog/mendel-ai-accelerating-clinical-trials-with-llama/",
      year: "2025",
      note: "Published February 19, 2025, re-checked October 23, 2026. Quotes: \"Mendel Hypercube, tackles clinical tasks like data abstraction, chart reviews, and patient cohort analysis.\" and \"With Llama, Hypercube can also be used to chat and query in natural language for trial matching and putting together patient groups.\" Mendel's own website did not load when we checked in September and October 2026.",
    },
    {
      id: "oak-mendel",
      title: "Mendel portfolio page",
      publisher: "Oak HC/FT",
      url: "https://www.oakhcft.com/company/mendel",
      year: "2026",
      note: "Read October 23, 2026. The page describes Mendel as a \"Clinical data extraction and processing platform\" with the status \"Merged: Ensemble Health Partners\".",
    },
    {
      id: "ensemble-leadership",
      title: "Leadership",
      publisher: "Ensemble Health Partners",
      url: "https://www.ensemblehp.com/about-us/leadership/",
      year: "2026",
      note: "Read October 23, 2026. Quote, on Chief AI Officer Wael Salloum: \"He previously founded Mendel.ai, a clinical AI platform advancing data workflows through large language models\".",
    },
    {
      id: "forbes-ensemble",
      title: "Pradeep Prasana Kanagaraj, VP, AI Operations & Transformation, Ensemble Health Partners",
      publisher: "Forbes Technology Council member profile",
      url: "https://councils.forbes.com/profile/Pradeep-Prasana-Kanagaraj-VP-AI-Operations-Transformation-Ensemble-Health-Partners/560ea125-25b2-479f-9fb0-21f90afe83e4",
      note: "Undated member profile, read October 23, 2026. Its company bio reads: \"Mendel.ai was acquired by Ensemble Health Partners in July 2025.\" We found no press release from either company.",
    },
    ...deep6Sources("tempus-10k-2025", "tempus-deep6-acquisition", "tempus-time-site-2026", "tempus-next-trials-2026", "deep6-cassidy-2024", "deep6-ttuhsc-2023", "osu-aaci-2024", "deep6-archive-2026"),
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
    { label: "Deep 6 AI vs Triomics", href: "/compare/deep-6-ai-vs-triomics", description: "General EHR matching vs an oncology platform." },
    { label: "Deep 6 AI vs Paradigm Health", href: "/compare/deep-6-ai-vs-paradigm-health", description: "Matching software vs a sponsor-funded research network." },
    { label: "Bond vs Tempus (Deep 6 AI)", href: "/compare/bond-vs-tempus-deep-6", description: "Deep 6 AI, TIME and Next Trials, compared with Bond." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based fee per screened patient plus a percentage of the randomization milestone payment for each patient." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and explains each match." },
  ],
};

export default page;
