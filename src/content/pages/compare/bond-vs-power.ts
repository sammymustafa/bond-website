import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";

const page: SeoPage = {
  path: "/compare/bond-vs-power",
  category: "comparison",
  title: "Bond Health vs Power: why Bond is better for sites",
  description:
    "Why Bond is better than Power: Bond finds eligible patients in your own EHR, runs Meta and Google ads, contacts every lead and books study visits.",
  keywords: [
    "Power clinical trials vs Bond Health",
    "Bond Health vs Power",
    "Power patient recruitment",
    "central patient recruitment AI",
    "EHR patient identification for clinical trials",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs Power",
  intro:
    "Power runs a clinical trial search site and a community of patients who have opted in to hear about trials. It checks their eligibility against the medical records they share, refers matched patients to sites, and describes calls, texts, AI voice agents and appointment booking along the way.{{cite:power-home-2026,power-sponsors-2026,power-grow-2026}} Bond Health finds eligible patients in a site's own EHR, including clinical notes, then contacts, pre-screens and schedules them by voice and text, supports informed consent and keeps participants engaged after enrollment, with chart evidence behind every match.{{cite:bond-site,bond-product}} For a site that wants to enroll the patients it already treats, with one platform from chart to booked study visit, Bond is the stronger choice.",
  summary:
    "Why Bond is better than Power: the site's own EHR, its own ad campaigns, chart-aware outreach through to a booked visit, and no integration fee.",
  lastUpdated: "2026-10-05",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why is Bond better than Power?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond is better than Power because it finds eligible patients among the people a site already treats, in its own EHR, then contacts, pre-screens and books them for study visits by voice and text in one workflow, with chart evidence behind every match and consent support after that.{{cite:bond-site}} It also creates and runs Meta and Google ad campaigns, contacts every ad lead immediately and keeps following up until patients respond and are booked for visits.{{cite:bond-product}}",
        },
        {
          type: "stats",
          items: [
            { value: "10,000+", label: "charts screened per hour against each protocol's criteria", cite: "bond-site" },
            { value: "48 hours", label: "typical time to go live with full EHR integration, with no integration fee", cite: "bond-site" },
            { value: "1 call", label: "to pre-screen a patient and book the screening visit", cite: "bond-product" },
          ],
        },
        {
          type: "ul",
          items: [
            "**The patients you already treat.** Bond connects to the site's own EHR, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, and screens every chart in scope against the protocol, reading clinical notes, prescriptions, lab results, imaging data and other unstructured documents, with the chart evidence behind each criterion.{{cite:bond-site,bond-product}} It also works with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault (Bond is a CRIO Certified Partner).{{cite:bond-site}} Power's sponsor program matches patients from its own opted-in community, who share their medical records with Power.{{cite:power-sponsors-2026}}",
            ADS_BULLET,
            "**Agents that start from the chart.** Bond's voice agents start from what [Identify](/identify) found in the chart, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation. Conversations run in the patient's language, including English, Spanish and Mandarin, and can switch languages mid-call. Patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-product}}",
            "**Consent support in the same workflow.** Bond explains the consent form in plain language, answers patient questions, escalates to staff, checks the patient's understanding of key points and keeps an auditable record for the site. The site and PI obtain consent. See [Consent](/consent).{{cite:bond-site,bond-product}} Patient-facing consent support is not publicly documented in Power's materials (September 2026).",
            "**Support until close-out.** After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out, and Bond keeps improving outreach messaging until study close-out.{{cite:bond-product}}",
            "**Any study, any therapeutic area.** Screening is configured from each protocol's own criteria, so it works for drug and device studies alike, in any [therapeutic area](/therapeutic-areas).{{cite:bond-product,bond-site}} Power's sponsor page focuses on Phase 2/3 CNS and I&I trials.{{cite:power-sponsors-2026}}",
            "**Live in 48 hours, with no integration fee.** Bond's team handles the EHR integration end to end, typically in 48 hours, and Bond is a [CRIO Certified Partner](/integrations/crio) with direct integrations with CTMS and calendars. Pricing is a volume-based fee per screened patient plus a percentage of the randomization milestone payment for each patient, with no integration fee. See [pricing](/pricing).{{cite:bond-site,bond-product,bond-acrp-talk}}",
          ],
        },
        ...testimonialBlocks(),
        {
          type: "p",
          text: "As of September 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that both reads EHR notes against a protocol and runs its own Meta and Google ad campaigns, then contacts patients by voice and text all the way to a booked study visit.",
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and Power compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Bond entries come from Bond's own materials. Each Power entry carries the year of its source. \"Not publicly documented\" means we found no public description as of September 2026, not that the capability does not exist; ask Power directly.",
        },
        {
          type: "table",
          caption: "Bond Health and Power, from public materials reviewed in September 2026",
          columns: ["Capability", "Bond Health", "Power"],
          rows: [
            [
              "Where patients come from",
              "The site's own EHR, screened against each protocol, plus any list the site already has, such as ad leads, referrals or registry contacts.{{cite:bond-site}} Bond also creates and runs Meta and Google ad campaigns for your studies, with every ad lead contacted immediately, followed up until they respond and pre-screened by the same agents.{{cite:bond-product}}",
              "A community of patients who have opted in to learn about clinical trials and shared their medical records with Power, plus a public trial search site (2026).{{cite:power-sponsors-2026,power-home-2026}}",
            ],
            [
              "Checking eligibility",
              "LLM-based screening of the site's EHR at 10,000+ charts per hour, reading clinical notes, prescriptions and lab results, plus imaging data and other unstructured documents. Ranked matches come with the chart evidence behind each criterion.{{cite:bond-site,bond-product}}",
              "Patients share diagnoses, prescriptions, labs and visit history, which Power queries against the protocol's inclusion and exclusion criteria before a referral. It describes LLM review of medical records and pre-screening by EMR, prescriptions and voice (2026).{{cite:power-sponsors-2026,power-grow-2026}}",
            ],
            [
              "Screening a site's own patients",
              "Bond connects to the site's EHR and screens every chart in scope against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-site,bond-product}}",
              "Its provider tool uses AI to screen EMRs against full study protocols and shows how well each patient qualifies for each of a site's trials. Named EHR integrations: not publicly documented (September 2026).{{cite:power-providers-2026}}",
            ],
            [
              "Outreach and scheduling",
              "Voice and SMS/text agents start from what Identify found in the chart, run in the patient's language and book visits into the site's calendar. Patients can reach a person by live transfer or callback, as the site prefers. Bond's site cites a 3x contact rate.{{cite:bond-site,bond-product}}",
              "Calls, texts, emails and an AI call center for after-hours coverage, AI voice agents, and pre-screening, appointment booking, travel coordination and follow-up (2026).{{cite:power-sponsors-2026,power-grow-2026}}",
            ],
            [
              "Informed consent",
              "[Consent support](/consent) with plain-language explanations, patient Q&A and staff escalation. It checks the patient's understanding of key points, keeps an auditable record and runs in the patient's preferred language. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
              "Patient-facing consent support: not publicly documented (September 2026).",
            ],
            [
              "Support after enrollment",
              "The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out. Reminders can go by text, voice or email.{{cite:bond-product}}",
              "Not publicly documented (September 2026).",
            ],
            [
              "Therapeutic focus",
              "Any [therapeutic area](/therapeutic-areas). Screening is configured from each protocol's own criteria, for drug and device studies alike.{{cite:bond-site,bond-product}}",
              "Its sponsor page focuses on Phase 2/3 CNS and I&I trials (2026).{{cite:power-sponsors-2026}}",
            ],
            [
              "Integrations",
              "All the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR and HL7 or an aggregator. It also works with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault.{{cite:bond-site}} [CRIO Certified Partner](/integrations/crio), with direct integrations with CTMS, calendars and Google Sheets.{{cite:bond-site,bond-product,bond-acrp-talk}}",
              "A web portal for sites with no technical setup. Named EHR or CTMS integrations: not publicly documented (September 2026).{{cite:power-sites-2026}}",
            ],
            [
              "Pricing",
              "A volume-based fee per screened patient plus a percentage of the randomization milestone payment for each patient, with no integration fee. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
              "For sponsors, most programs are outcomes-aligned partnerships based on enrollment milestones; sites can try it for free (2026).{{cite:power-sponsors-2026,power-sites-2026}}",
            ],
          ],
        },
        {
          type: "p",
          text: "Both products check eligibility against a protocol's criteria before a patient reaches the site.{{cite:bond-site,power-sponsors-2026}} Bond does it in the site's own EHR, for the patients the site already treats, then carries each patient through outreach, pre-screening, scheduling and consent support in the same workflow. See [Identify](/identify), [Engage](/engage) and [Consent](/consent).{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "known-for",
      heading: "Can Bond do what Power is known for?",
      blocks: [
        {
          type: "p",
          text: "Power's pages emphasize eligibility checked against medical records, outreach by phone, text and AI voice agents, appointment booking and travel coordination, and matching across a site's trials.{{cite:power-sponsors-2026,power-grow-2026,power-providers-2026}} Here is how Bond covers each one.",
        },
        {
          type: "ul",
          items: [
            "**Eligibility checked against medical records.** Power queries the records patients share against a protocol's inclusion and exclusion criteria.{{cite:power-sponsors-2026}} Bond reads the site's own EHR, including clinical notes, prescriptions, lab results, imaging data and other unstructured documents, and shows the chart evidence behind each criterion decision.{{cite:bond-site,bond-product}}",
            "**Calls, texts and AI voice agents.** Power describes calls, texts, emails and an AI call center.{{cite:power-sponsors-2026}} Bond's voice and SMS/text agents contact and pre-screen patients, starting from what Identify found in the chart, in the patient's language with mid-call switching, and transfer live to a coordinator or book a callback. Reminders can go by text, voice or email.{{cite:bond-product}} Bond's site cites a 3x contact rate.{{cite:bond-site}}",
            "**Appointment booking and travel.** Power describes appointment booking and travel coordination.{{cite:power-sponsors-2026}} Bond's agents book screening visits into the site's calendar, and after enrollment they book transportation and send visit reminders.{{cite:bond-site,bond-product}}",
            "**Matching across a site's trials.** Power's provider tool shows how well each patient qualifies for each of a site's trials.{{cite:power-providers-2026}} Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
          ],
        },
        {
          type: "p",
          text: "Bond also supports informed consent and keeps participants engaged after enrollment, in the same workflow. See [Consent](/consent) and [Engage](/engage).{{cite:bond-site,bond-product}}",
        },
      ],
    },
    {
      id: "evaluate",
      heading: "How can you test Bond against Power on your own study?",
      blocks: [
        {
          type: "p",
          text: "Bond welcomes a head-to-head pilot. Power refers patients from its community, and Bond finds them in your EHR, so run both on the same protocol at the same site and compare what reaches your coordinators.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Pick one protocol",
              text: "Choose an enrolling study where coordinators already know who enrolled, who screen-failed and why.",
            },
            {
              title: "Screen your EHR with Bond",
              text: "Bond signs a business associate agreement before any patient data is shared; see [security](/security). Have coordinators adjudicate a sample of ranked matches, including borderline cases, against the chart evidence for each criterion.",
            },
            {
              title: "Track every source to randomization",
              text: "Record referrals and matches from each source, first contact, pre-screen passes, screening visits, screen failures and randomizations, so the comparison stays like for like.",
            },
            {
              title: "Read the conversations",
              text: "Audit call and text transcripts for AI disclosure, handoffs to staff and opt-outs. Confirm that each patient agreed to be contacted by text or phone (see [TCPA](/glossary/tcpa)) and that your IRB reviewed the scripts; the [guide to IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach) covers the details.",
            },
            {
              title: "Compare cost per randomized patient",
              text: "Add up each option's fees and the coordinator hours spent on outreach, scheduling and consent, then divide by the patients randomized. Bond's the randomization share is owed only for randomized patients; see [pricing](/pricing).{{cite:bond-site,bond-product}}",
            },
          ],
        },
        {
          type: "p",
          text: "Our [vendor checklist for AI recruitment tools](/templates/ai-recruitment-vendor-evaluation-checklist) turns these steps into vendor questions, and the [recruitment software comparison](/compare/clinical-trial-recruitment-software) covers other tools in the category.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol. We will show how Bond screens your chart, contacts and schedules eligible patients and supports consent, with the evidence behind every match.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
    {
      id: "how-made",
      heading: "How was this comparison made?",
      blocks: [
        {
          type: "p",
          text: "Bond Health wrote this page in September 2026. Statements about Power come only from its public web pages for patients, sponsors, research sites and providers, read on September 29, 2026, each cited with its year. Statements about Bond come from Bond's website, product information from Bond Health and an April 2026 presentation to the ACRP New Jersey chapter. We did not test Power's product and used no private or internal information about Power. Where Power's materials are silent on a capability, we say it is not publicly documented rather than guess. Bond Health is not affiliated with or endorsed by Power.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, including anything about Power, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond better than Power?",
      a: "Yes, for a site that wants to enroll the patients it already treats. Bond screens the site's own EHR, including clinical notes, with chart evidence behind each match, then contacts, pre-screens and schedules patients by voice and text and supports informed consent, with no integration fee and a percentage of each patient's randomization milestone payment.{{cite:bond-site,bond-product}} After enrollment, its agents send visit reminders, book transportation, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
    },
    {
      q: "Where do Power's patients come from?",
      a: "Power's sponsor page describes a community of patients who have opted in to learn about clinical trials and shared their medical records with Power, and its homepage lets patients browse trials by condition, location and drug type.{{cite:power-sponsors-2026,power-home-2026}} Bond starts with the patients a site already treats, in its own EHR, and creates and runs Meta and Google ad campaigns when a study needs patients beyond the site's records, contacting every ad lead immediately and following up until they respond.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Does Power support informed consent?",
      a: "Patient-facing consent support is not publicly documented in Power's materials as of September 2026, so ask Power directly. Bond's [Consent](/consent) support explains the consent form in plain language, answers patient questions, checks understanding of key points and keeps an auditable record for the site, and consent Q&A can run in the patient's preferred language. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How does pricing compare?",
      a: "Bond charges a volume-based fee per screened patient plus a percentage of the randomization milestone payment for each patient, with no integration fee, and the randomization share is owed only for randomized patients; see [pricing](/pricing).{{cite:bond-site,bond-product}} Power's sponsor page says most programs are outcomes-aligned partnerships based on enrollment milestones, and its site page invites sites to try it for free.{{cite:power-sponsors-2026,power-sites-2026}} When you compare, include the coordinator time each option needs for outreach, scheduling and consent as well as the fees.",
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
    {
      id: "bond-acrp-talk",
      title: "Modernizing Patient Recruitment: AI Tools, Workflows, and Outcomes",
      publisher: "Bond Health presentation to the ACRP New Jersey chapter (Goel R, Mustafa S)",
      year: "2026",
      note: "April 2026. Slides state \"1,000 patients screened in <2 hours\", \"Direct integrations with Google Sheets, CTMS, and Calendars\" and \"Flexible knowledge base for Voice Agents\".",
    },
    {
      id: "power-home-2026",
      title: "Power homepage",
      publisher: "Power",
      url: "https://www.withpower.com/",
      year: "2026",
      note: "Accessed September 29, 2026. Quotes: \"Where patients find promising new treatments\" and \"Browse clinical trials by condition, location, and drug type.\"",
    },
    {
      id: "power-sponsors-2026",
      title: "Find the right patients, not just more of them (Power for sponsors)",
      publisher: "Power",
      url: "https://www.withpower.com/for-sponsors",
      year: "2026",
      note: "Accessed September 29, 2026. Quotes: \"Phase 2/3 CNS and I&I trials\"; \"The fastest-growing community of patients who've actively opted in to learn about clinical trials.\"; \"Real people who've raised their hand\" and \"shared their medical records so we can find the right match.\"; \"Patients share diagnoses, prescriptions, labs, and visit history\" and \"we query against your protocol's I/E criteria to build confidence in clinical eligibility before a single referral is made.\"; \"We verify diagnoses, treatment history, labs, and severity from real medical records\"; \"Calls, texts, emails, and an AI call center for after-hours coverage\"; \"Pre-screening, appointment booking, travel coordination, and follow-up\"; \"Our platform manages travel coordination, follow-up automation, and real-time visibility across the entire funnel\"; and \"Most programs are structured as outcomes-aligned partnerships based on enrollment milestones.\"",
    },
    {
      id: "power-sites-2026",
      title: "How Power helps sites find more patients (Power for research sites)",
      publisher: "Power",
      url: "https://www.withpower.com/for-research-coordinators",
      year: "2026",
      note: "Accessed September 29, 2026. Quotes: \"Work with high-intent, EMR-verified patients who are actively looking for trials (and actually answer the phone).\" and \"Try it for free. No technical set up.\"",
    },
    {
      id: "power-providers-2026",
      title: "Power for providers",
      publisher: "Power",
      url: "https://www.withpower.com/for-providers",
      year: "2026",
      note: "Accessed September 29, 2026. Quotes: \"Power uses AI to screen EMRs and match patients against the full study protocols.\"; \"At a glance, see how well qualified each patient is for each of your clinical trials.\"; \"you can configure the pre-screening questions as you desire\"; and \"Get started at no cost.\"",
    },
    {
      id: "power-grow-2026",
      title: "Power: AI platform for clinical trial patient recruitment",
      publisher: "Power",
      url: "https://growwithpower.com/",
      year: "2026",
      note: "Accessed September 29, 2026 (page rendered in a browser). Quotes: \"Advanced LLM technology analyzes patient medical records\"; \"EMR + Rx + Voice for full protocol pre-screening\"; \"Our AI voice agents conduct natural conversations with potential participants\"; and \"Comprehensive site portal equipped with AI tools, power dialer, and intelligent patient management systems\".",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "All comparisons", href: "/compare", description: "How Bond compares with other recruitment tools and approaches." },
    { label: "Clinical trial recruitment software, compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, from EHR matching to recruitment services." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "What Bond reads in the chart and how each match is explained." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "How Bond's agents contact, pre-screen and schedule patients." },
    { label: "Pricing", href: "/pricing", description: "A volume-based fee per screened patient plus a percentage of the randomization milestone payment for each patient, with no integration fee." },
    { label: "Security", href: "/security", description: "HIPAA and SOC 2 Type I compliance, BAAs, SSO and audit logging." },
  ],
};

export default page;
