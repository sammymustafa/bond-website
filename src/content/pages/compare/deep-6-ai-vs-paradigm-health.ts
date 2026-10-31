import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { deep6Sources } from "./_deep6-sources";

const page: SeoPage = {
  path: "/compare/deep-6-ai-vs-paradigm-health",
  category: "comparison",
  title: "Deep 6 AI vs Paradigm Health: trial matching compared",
  description:
    "Deep 6 AI (Tempus) is EHR matching software; Paradigm Health pairs its platform with its own recruitment staff. How they differ on workflow, outreach and pricing.",
  keywords: [
    "Deep 6 AI vs Paradigm Health",
    "Paradigm Health vs Deep 6 AI",
    "Paradigm Health clinical trials",
    "Paradigm Health alternatives",
    "Deep 6 AI alternatives",
    "EHR clinical trial matching software",
  ],
  eyebrow: "Comparison",
  h1: "Deep 6 AI vs Paradigm Health",
  intro:
    "Deep 6 AI was matching software that health systems ran on their own EHR data, and it has been part of Tempus since March 11, 2025.{{cite:deep6-cassidy-2024,tempus-10k-2025}} Paradigm Health is a research partner that combines its platform with its own recruitment staff and brings sponsor trials to the provider organizations it works with; in 2023 it said its customers are trial sponsors, not health systems.{{cite:paradigm-home,paradigm-providers,paradigm-identification,medcity-paradigm-2023}} Bond Health is a third model: software whose voice and text agents contact, pre-screen and schedule the patients it finds in a site's EHR.{{cite:bond-site}}",
  summary: "How Deep 6 AI and Paradigm Health differ on model, workflow, outreach and pricing, and how both compare with Bond.",
  lastUpdated: "2026-10-29",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "difference",
      heading: "What is the difference between Deep 6 AI and Paradigm Health?",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "The short answer",
          text: "Deep 6 AI sold matching software, and the site's own staff followed up on each match; it is now part of Tempus.{{cite:deep6-cassidy-2024,deep6-life-sciences-2023,tempus-10k-2025}} Paradigm Health sells a platform plus people: its recruitment coordinators and eligibility specialists work alongside site teams through pre-screening, consent and screening, and it coordinates with sponsors and CROs to bring trials to the site.{{cite:paradigm-identification,paradigm-providers}}",
        },
        {
          type: "ul",
          items: [
            "**Software or partner.** Health systems used Deep 6 AI's platform \"enterprise-wide\", often run centrally by the Clinical Trials Office.{{cite:deep6-cassidy-2024}} Paradigm \"combines technology and services, integrating directly with health provider organizations\".{{cite:paradigm-home}}",
            "**Who follows up on a match.** In Deep 6 AI, site staff validated each patient's eligibility with evidence in the EMR and tracked recruitment status and referrals.{{cite:deep6-life-sciences-2023}} At Paradigm, \"dedicated Paradigm Health recruitment coordinators work in sync with site teams on a shared platform\".{{cite:paradigm-identification}}",
            "**Where the trials come from.** Deep 6 AI was used across a health system's investigator-initiated, government-funded and sponsored trials.{{cite:deep6-cassidy-2024}} Paradigm matches patients to a site's own trial portfolio and also coordinates with sponsors and CRO partners to get trials live at the site.{{cite:paradigm-highlands-2024,paradigm-providers}}",
            "**Who pays.** Neither publishes prices. In 2023, Paradigm's CEO said it does not charge health systems and that its customers are trial sponsors.{{cite:medcity-paradigm-2023}} Tempus's closest offering to that model is TIME, its oncology trial network, where Tempus's 10-K names the trial sponsor as the customer.{{cite:tempus-time-site-2026,tempus-10k-2025}}",
          ],
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Deep 6 AI, Paradigm Health and Bond compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Years in the Deep 6 AI and Paradigm Health columns show each source's date. \"Not publicly documented\" means we found no public description in the materials we reviewed in October 2026, not that the capability is absent.",
        },
        {
          type: "table",
          caption: "Deep 6 AI (Tempus), Paradigm Health and Bond Health, from materials reviewed in October 2026",
          columns: ["Capability", "Deep 6 AI (Tempus)", "Paradigm Health", "Bond Health"],
          rows: [
            [
              "Model",
              "Software used enterprise-wide across a health system's trials, often run by the Clinical Trials Office (2024). Now part of Tempus.{{cite:deep6-cassidy-2024,tempus-10k-2025}}",
              "Technology plus services, integrated with provider organizations, with Paradigm staff alongside site teams (2026).{{cite:paradigm-home,paradigm-identification}}",
              "Software with an implementation team. The site runs its own studies, and Bond's agents do the outreach.{{cite:bond-site,bond-product}}",
            ],
            [
              "EHR identification",
              "Mined real-time structured and unstructured EMR data to match patients to trials (2025).{{cite:tempus-deep6-acquisition}}",
              "Evaluates structured and unstructured clinical data against protocol eligibility criteria and surfaces candidates for site review (2026).{{cite:paradigm-identification}}",
              "LLM-based screening of the site's EHR against each protocol's criteria, returning ranked matches: 10,000+ charts per hour and 90%+ matching accuracy.{{cite:bond-site}}",
            ],
            [
              "Unstructured data",
              "NLP over physician notes, lab, radiology and pathology reports, and genomics results (2023).{{cite:deep6-ttuhsc-2023}}",
              "Unstructured text from clinical notes and pathology reports (2024).{{cite:paradigm-highlands-2024}}",
              "Reads clinical notes, prescriptions and lab results, and uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
            ],
            [
              "Patient outreach",
              "Site staff validated matches and tracked referrals in the EMR (2023). Automated calls or texts to matched patients: not publicly documented (October 2026).{{cite:deep6-life-sciences-2023}}",
              "Paradigm recruitment coordinators and eligibility specialists help site teams coordinate outreach and follow-up (2026). Automated calls or texts: not publicly documented (October 2026).{{cite:paradigm-identification}}",
              "Voice and SMS agents contact matched patients, starting from what Identify found in the chart, in the patient's language. Bond's site cites a 3x contact rate.{{cite:bond-site,bond-product}}",
            ],
            [
              "Scheduling",
              "Not publicly documented (October 2026).",
              "Uses scheduling data to bring trial options to patients at their next appointment (2025, 2026). Booking screening visits: not publicly documented (October 2026).{{cite:paradigm-fierce-2025,paradigm-providers}}",
              "Agents pre-screen and book a screening visit in the same conversation.{{cite:bond-site,bond-product}}",
            ],
            [
              "Consent",
              "Patient-facing consent support: not publicly documented (October 2026).",
              "Staff-led: Paradigm's clinical staff help match, pre-screen and consent patients (2026). Patient-facing consent tools: not publicly documented (October 2026).{{cite:paradigm-providers,paradigm-identification}}",
              "Plain-language explanations, patient Q&A and staff escalation, with checks on the patient's understanding and an auditable record for the site. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
            ],
            [
              "After enrollment",
              "Not publicly documented (October 2026).",
              "Study data capture in the EHR or a standalone app (2026). Patient-facing support, such as reminders or transport: not publicly documented (October 2026).{{cite:paradigm-data-capture}}",
              "Visit reminders, transportation booking, symptom and diary collection, side-effect check-ins and flags for participants at risk of dropping out.{{cite:bond-product}}",
            ],
            [
              "EHR connections",
              "Integrated with the health system's EMR (2023) and could bring in genomics, cancer registry and CTMS data (2024).{{cite:deep6-ttuhsc-2023,osu-aaci-2024}}",
              "FHIR, HL7 and data warehouse integrations, including SMART on FHIR (2026), and a planned native integration with Flatiron's OncoEMR (2025).{{cite:paradigm-identification,paradigm-data-capture,paradigm-flatiron-2025}}",
              "Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and the other major EHRs, plus CTMS systems including CRIO, Advarra OnCore, RealTime and Veeva SiteVault. Live in 48 hours, with no integration fee ([implementation](/implementation)).{{cite:bond-site,bond-product}}",
            ],
            [
              "Who it serves",
              "Health systems, often through the Clinical Trials Office, and life sciences companies (2024).{{cite:deep6-cassidy-2024}}",
              "Community providers and academic medical centers in the United States, Japan and Israel, and sponsors running Phase I to IV trials (2026).{{cite:paradigm-sponsors}}",
              "Any research site, including physician groups and FQHCs, plus site networks, CROs and sponsors.{{cite:bond-site}}",
            ],
            [
              "Pricing",
              "No public price list found (October 2026).",
              "No public price list found (October 2026). In 2023 press, Paradigm did not charge health systems; its customers were trial sponsors.{{cite:medcity-paradigm-2023}}",
              "A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
            ],
          ],
        },
      ],
    },
    {
      id: "which-to-choose",
      heading: "Should you choose Deep 6 AI or Paradigm Health?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Choose Paradigm Health** if you are a community provider or academic center that wants a partner to bring in sponsor trials and add recruitment staff, and the sponsor-funded model suits you.{{cite:paradigm-providers,paradigm-identification,medcity-paradigm-2023}}",
            "**Choose Tempus**, which owns Deep 6 AI, if you run oncology trials and want EHR matching tied to its TIME network or Next Trials pre-screening for trials already open at your practice. Ask Tempus which Deep 6 AI capabilities it still offers, since Deep 6 AI's own website no longer loads.{{cite:tempus-time-site-2026,tempus-next-trials-2026,deep6-archive-2026}}",
            "**Choose Bond** if you run your own studies and want software, not an outside team, to call, pre-screen and book every match, in any therapeutic area, with pricing tied to randomization.{{cite:bond-site,bond-product}}",
          ],
        },
      ],
    },
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over Deep 6 AI and Paradigm Health?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "Follow-up that scales without more staff",
          text: "Deep 6 AI left follow-up to your coordinators, and Paradigm adds its own. Bond's voice and text agents contact every matched patient, pre-screen them, book the visit and support consent, alongside your team, with a percentage of each randomized patient's milestone payments, from randomization onward.{{cite:deep6-life-sciences-2023,paradigm-identification,bond-site,bond-product}}",
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
            "**Your studies, your sponsors.** Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**Security you can check.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its information security management system is certified to ISO/IEC 27001:2022 by Advantage Partners. See [security](/security).{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "evaluate",
      heading: "How can you compare Deep 6 AI, Paradigm Health and Bond on your own data?",
      blocks: [
        {
          type: "p",
          text: "Run a pilot on your own records, under a [business associate agreement](/glossary/baa), and ask each option the same questions.",
        },
        {
          type: "steps",
          items: [
            { title: "Pick a study with a known answer", text: "Use a closed or mature study where coordinators know who enrolled, who screen-failed and why." },
            { title: "Ask who does each step", text: "For every match, who contacts the patient, who pre-screens, who books the visit and who explains the consent form: your staff, the vendor's staff or software." },
            { title: "Ask which trials you get", text: "Does the option work on the studies you already run, or on trials it brings to you, and who decides which patients are offered which trial?" },
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
          secondaryLabel: "Read about Engage",
          secondaryHref: "/engage",
        },
      ],
    },
    {
      id: "how-made",
      heading: "How was this comparison made?",
      blocks: [
        {
          type: "p",
          text: "Bond wrote this page in October 2026. Paradigm Health facts come from its website (paradigm.inc now redirects to paradigmhealth.ai), read in October 2026, including its 2024 case studies, a 2025 press release and a 2025 interview it republished, plus one 2023 MedCity News article, the only source we found on who pays. Deep 6 AI facts come from Tempus's 2025 Form 10-K, Deep 6 AI and Tempus press releases, Tempus web pages, an archived copy of Deep 6 AI's website and an Ohio State customer abstract. deep6.ai itself did not load in October 2026. Bond's figures and capabilities come from its website and product information Bond provided. We used no private or internal competitive material.",
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
      q: "Is Paradigm Health better than Deep 6 AI?",
      a: "They solve different problems. Deep 6 AI was matching software that a health system's own staff worked from, and it is now part of Tempus; Paradigm adds its own recruitment coordinators and brings sponsor trials to the site.{{cite:deep6-cassidy-2024,deep6-life-sciences-2023,tempus-10k-2025,paradigm-identification,paradigm-providers}} If you want matched patients contacted and booked by software, Bond does that.{{cite:bond-site}}",
    },
    {
      q: "Who pays for Paradigm Health?",
      a: "Paradigm publishes no prices. In a 2023 MedCity News interview, its CEO said Paradigm does not charge health systems for its technology and services and that its customers are trial sponsors.{{cite:medcity-paradigm-2023}}",
    },
    {
      q: "Does Paradigm Health contact patients?",
      a: "Its recruitment coordinators and eligibility specialists help site teams coordinate outreach and follow up through pre-screening, consent and screening.{{cite:paradigm-identification}} We found no description of automated calls or texts to patients as of October 2026.",
    },
    {
      q: "Is Deep 6 AI part of Tempus?",
      a: "Yes. Tempus's 2025 Form 10-K says it acquired Deep 6 AI, Inc. on March 11, 2025.{{cite:tempus-10k-2025}} By January 2026, Deep 6 AI's website said it \"is now a Tempus AI company\".{{cite:deep6-archive-2026}} See [Bond vs Tempus (Deep 6 AI)](/compare/bond-vs-tempus-deep-6) for TIME and Next Trials.",
    },
    {
      q: "What is an alternative to Deep 6 AI and Paradigm Health?",
      a: "Bond Health. It screens the EHR, including clinical notes and pathology, radiology and molecular reports, then contacts, pre-screens and schedules matched patients by voice and text and supports consent, in any therapeutic area. See [what recruitment software costs](/guides/clinical-trial-recruitment-software-cost) for how its pricing compares.{{cite:bond-site,bond-product}}",
    },
  ],
  sources: [
    {
      id: "paradigm-home",
      title: "AI-Native Clinical Trial Platform for Sponsors and Providers",
      publisher: "Paradigm Health",
      url: "https://www.paradigmhealth.ai/",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"Clinical Research, Re-Engineered for Impact\"; \"It seamlessly combines technology and services, integrating directly with health provider organizations\".",
    },
    {
      id: "paradigm-providers",
      title: "The Clinical Trial Platform Built for Care Providers",
      publisher: "Paradigm Health",
      url: "https://www.paradigmhealth.ai/solutions/providers",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"Paradigm Health removes administrative friction and coordinates directly with sponsors and CRO partners to get trials live faster.\"; \"Match, pre-screen, and consent patients with the unprecedented speed of Paradigm Health's AI-driven Platform, backed by highly experienced clinical staff.\"; \"Seamlessly navigate patients to trial options at their next appointment\".",
    },
    {
      id: "paradigm-sponsors",
      title: "Paradigm Health for sponsors",
      publisher: "Paradigm Health",
      url: "https://www.paradigmhealth.ai/solutions/sponsors",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"Paradigm Health delivers a unified, AI-powered research model for Phase I- IV clinical trials\"; \"We are the end-to-end research partner of choice for community healthcare providers and academic medical centers across the United States, Japan, and Israel.\"",
    },
    {
      id: "paradigm-identification",
      title: "Patient identification and trial enrollment",
      publisher: "Paradigm Health",
      url: "https://www.paradigmhealth.ai/solutions/patient-identification-trial-enrollment",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"The platform evaluates structured and unstructured clinical data against protocol-defined eligibility criteria, enabling AI-supported trial matching that surfaces potential candidates for site review.\"; \"Embedded screening workflows and clinical recruitment support help research teams confirm eligibility, coordinate outreach, and progress patients efficiently toward enrollment.\"; \"Integrated screening workflows and dedicated Paradigm Health recruitment coordinators work in sync with site teams on a shared platform\"; \"Eligibility specialists maintain structured follow-up across pre-screening, consent, and screening stages\"; \"support interoperability through FHIR, HL7, and data warehouse integrations\".",
    },
    {
      id: "paradigm-data-capture",
      title: "Trial data capture and delivery",
      publisher: "Paradigm Health",
      url: "https://www.paradigmhealth.ai/solutions/trial-data-capture-and-delivery",
      year: "2026",
      note: "Accessed October 2026. Quotes: \"FHIR-based integrations connect trial workflows directly to provider EHR systems.\"; \"SMART on FHIR integration\"; \"Research teams can capture study data within the EHR or through a standalone application\".",
    },
    {
      id: "paradigm-highlands-2024",
      title: "Highlands case study",
      publisher: "Paradigm Health",
      url: "https://www.paradigmhealth.ai/resources/highlands",
      year: "2024",
      note: "Accessed October 2026. Quotes: \"data derived from unstructured text from clinical notes and pathology reports\"; \"automated precision matching of eligible patients to Highlands' clinical trial portfolio\".",
    },
    {
      id: "paradigm-flatiron-2025",
      title: "Paradigm Health acquires Flatiron Health's clinical research business and forms strategic partnership",
      publisher: "Paradigm Health and Flatiron Health press release",
      url: "https://www.paradigmhealth.ai/resources/paradigm-health-acquires-flatiron-healths-clinical-research-business-and-forms-strategic-partnership-to-rebuild-clinical-research-ecosystem",
      year: "2025",
      note: "Dated December 4, 2025, accessed October 2026. Quotes: \"Paradigm Health and Flatiron Health today announced that Paradigm Health will acquire Flatiron's Clinical Research Business.\"; \"work to natively integrate Paradigm Health's solutions into Flatiron's OncoEMR® and deploy new capabilities\".",
    },
    {
      id: "paradigm-fierce-2025",
      title: "How Paradigm Health is enabling community and rural health systems to do oncology clinical research",
      publisher: "Fierce Pharma interview, republished by Paradigm Health",
      url: "https://www.paradigmhealth.ai/resources/how-paradigm-health-is-enabling-community-and-rural-health-systems-to-do-oncology-clinical-research",
      year: "2025",
      note: "Republished October 8, 2025, accessed October 2026. Quote: \"When we ingest all of the medical records of a health system, we are also ingesting all of the scheduling data.\"",
    },
    {
      id: "medcity-paradigm-2023",
      title: "Paradigm launches … to transform clinical trial recruitment",
      publisher: "MedCity News (Katie Adams)",
      url: "https://medcitynews.com/2023/01/paradigm-launches-with-203m-to-transform-clinical-trial-recruitment/",
      year: "2023",
      note: "Published January 31, 2023, accessed October 2026. Quote: \"Paradigm does not charge health systems for access to its technology and services, Thoelke said. Instead, the company's customers are trial sponsors\".",
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
    { label: "Deep 6 AI vs Triomics", href: "/compare/deep-6-ai-vs-triomics", description: "General EHR matching vs an oncology platform." },
    { label: "Bond vs Tempus (Deep 6 AI)", href: "/compare/bond-vs-tempus-deep-6", description: "Deep 6 AI, TIME and Next Trials, compared with Bond." },
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, vendor by vendor." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "How Bond's agents contact, pre-screen and schedule matched patients." },
  ],
};

export default page;
