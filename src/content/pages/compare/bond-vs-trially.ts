import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";

const TRUST_CENTER = "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj";

const page: SeoPage = {
  path: "/compare/bond-vs-trially",
  category: "comparison",
  title: "Trially alternative: Bond Health vs Trially, compared",
  description:
    "Bond Health vs Trially: Bond screens EHR notes, reaches patients by voice and text and supports consent in one platform, with fees tied to randomized patients.",
  keywords: [
    "Trially alternative",
    "Trially vs Bond Health",
    "Trially Margo AI outreach",
    "clinical trial recruitment AI",
    "EHR patient matching software",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs Trially",
  intro:
    "Trially sells Trially Match, which matches patients to trials from EHR data, and Margo, an AI agent that contacts and pre-screens patients by voice call, text and email.{{cite:trially-home,trially-faq-ai,trially-connect}} Bond Health runs the whole path in one platform: it screens the site's EHR, including clinical notes, contacts patients by voice and SMS, pre-screens and schedules them, and supports informed consent, with chart evidence behind every match and a success fee per randomized patient.{{cite:bond-site}} For sites, CROs and sponsors that want one vendor from chart to consent, Bond is the stronger choice.",
  summary:
    "Why sites choose Bond over Trially: one workflow from chart to consent, chart-aware agents, support after enrollment and no integration fee.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over Trially?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond covers the whole path from chart review to consent support in one platform, with chart evidence behind every match and a success fee per randomized patient.{{cite:bond-site}}",
        },
        {
          type: "stats",
          items: [
            { value: "10,000+", label: "charts screened per hour, with chart evidence for every criterion", cite: "bond-site" },
            { value: "3x", label: "contact rate with voice and SMS/text outreach", cite: "bond-site" },
            { value: "90%+", label: "consent completion with Bond's consent support", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**One workflow from chart to consent.** Bond screens the EHR, runs voice and SMS outreach and supports informed consent in one platform, with a real-time dashboard and audit trail from first match to signed consent. Its [Consent](/consent) support explains the consent form in plain language, answers patient questions and escalates to staff, while the site and PI obtain consent.{{cite:bond-site}} Informed consent support is not publicly documented in Trially's materials (September 2026).{{cite:trially-home,trially-connect,trially-connect-blog}}",
            "**Agents that start from the chart.** Bond's voice agents start from what [Identify](/identify) found, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation. Conversations run in the patient's language, including English, Spanish and Mandarin, and can switch languages mid-call.{{cite:bond-product}} Patients are told AI is used and can reach a person at any time, by live transfer to a coordinator or a callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            "**Support after enrollment.** The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out, and Bond keeps improving outreach messaging until study close-out.{{cite:bond-product}}",
            "**No integration fee.** Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee.{{cite:bond-site,bond-product}} Trially described a monthly subscription, varying with site size and integration needs, in a March 2025 blog post.{{cite:trially-crio-webinar}} See [pricing](/pricing).",
            "**A method you can check.** Bond's matching method is written up in a technical report with results on public benchmarks, including 0.9312 micro F1 on the held-out n2c2 2018 cohort-selection task. The report is an August 2026 preprint, available on request.{{cite:bond-whitepaper}}",
            "**Ads when you need more patients.** For studies that need patients beyond your records, Bond sets up Meta and Google ad campaigns, and those leads flow into the same pre-screening and scheduling as EHR matches.{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and Trially compare, capability by capability?",
      blocks: [
        {
          type: "table",
          caption: "Bond Health and Trially, from each company's materials as of September 2026",
          columns: ["Capability", "Bond Health", "Trially"],
          rows: [
            [
              "One workflow from chart to consent",
              "One platform for EHR screening, voice and SMS outreach, and consent support, with a real-time dashboard and audit trail from first match to signed consent.{{cite:bond-site}}",
              "Trially Match finds patients in the EHR, and Margo pre-screens and schedules them. Consent support is not publicly documented (September 2026).{{cite:trially-faq-ai,trially-connect,trially-connect-blog}}",
            ],
            [
              "EHR identification",
              "LLM-based screening of the site's EHR returns ranked patient matches at 10,000+ charts per hour.{{cite:bond-site}} Identify uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}}",
              "Trially Match reads EHR data and scores patients on how closely they meet the inclusion and exclusion criteria.{{cite:trially-faq-ai,trially-faq-ranking}}",
            ],
            [
              "Unstructured notes",
              "Reads clinical notes, prescriptions and lab results along with structured fields, plus imaging data and other unstructured documents.{{cite:bond-site,bond-product}}",
              "Its LLM and NLP architecture analyzes both structured and unstructured EHR data.{{cite:trially-faq-ai}}",
            ],
            [
              "Evidence behind each match",
              "Shows the chart evidence behind each criterion decision, and every model decision carries provenance-tagged evidence.{{cite:bond-site,bond-whitepaper}}",
              "A detailed rationale is available for each match.{{cite:trially-faq-ranking}}",
            ],
            [
              "Outreach channels",
              "Voice and SMS/text agents, with a 3x contact rate cited on Bond's site. Patients are told AI is used and can reach a person at any time.{{cite:bond-site}} Calls transfer live to a coordinator or book a callback, as the site prefers; conversations run in the patient's language, with mid-call switching; reminders can go by text, voice or email.{{cite:bond-product}}",
              "Margo contacts patients by voice call, text and email.{{cite:trially-connect}}",
            ],
            [
              "Pre-screening and scheduling",
              "Voice agents start from what Identify found in the chart, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation.{{cite:bond-product}}",
              "Margo pre-screens patients, schedules appointments and sends reminders. Trially calls it a decision-support tool, with the physician keeping final decision-making authority.{{cite:trially-connect,trially-connect-blog}}",
            ],
            [
              "Consent",
              "Plain-language explanations, patient Q&A that can run in the patient's preferred language, checks of understanding on key points with an auditable record, and staff escalation. Bond's site cites 90%+ completion, and the site and PI obtain consent.{{cite:bond-site,bond-product}}",
              "Not publicly documented (September 2026).{{cite:trially-home,trially-connect,trially-connect-blog}}",
            ],
            [
              "Cross-study matching",
              "Screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
              "Its Match page lists a \"Multi-Trial. Multi-Site.\" feature: \"Match across protocols and sites.\"{{cite:trially-match}}",
            ],
            [
              "Support after enrollment",
              "The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
              "Margo sends appointment reminders by call, email and SMS. Other support after enrollment: not publicly documented (September 2026).{{cite:trially-connect}}",
            ],
            [
              "Feasibility",
              "Bond runs feasibility from the same EHR screening that finds patients, giving eligible-patient counts for a protocol backed by the chart evidence behind each match, with faster feasibility assessments and consistent metrics across sites.{{cite:bond-site,bond-product}}",
              "Trially Intelligence offers feasibility analytics and sponsor-ready eligibility counts.{{cite:trially-intelligence}}",
            ],
            [
              "EHR integration",
              "All the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR R4, HL7 v2 or an aggregator. Bond's implementation team handles the integration end to end, with no integration fee.{{cite:bond-site,bond-product}}",
              "Its FAQ names Epic, athenahealth, Oracle Health/Cerner, eClinicalWorks, NextGen and others, with file transfer or PDF ingestion where an EHR has no API.{{cite:trially-faq-ehr,trially-crio-webinar}}",
            ],
            [
              "CTMS integration",
              "CRIO Certified Partner, plus direct integrations with CTMS, calendars and Google Sheets.{{cite:bond-site,bond-acrp-talk}}",
              "CRIO announced Trially as a CRIO-certified API partner in September 2024. Its FAQ says it can integrate with any CRM or CTMS.{{cite:crio-trially-2024,trially-faq-crm}}",
            ],
            [
              "Therapeutic breadth",
              "Any therapeutic area, because screening is configured from each protocol's own criteria, for drug and device studies alike.{{cite:bond-site,bond-product}}",
              "Supports all trial phases across multiple therapeutic areas, from cardiovascular to oncology to rare diseases.{{cite:trially-faq-trials}}",
            ],
            [
              "Pricing",
              "A volume-based platform fee plus a success fee per randomized patient, with no integration fee.{{cite:bond-site,bond-product}} See [pricing](/pricing).",
              "A monthly subscription that varies with site size and integration needs, per a March 2025 Trially blog post; current terms may differ.{{cite:trially-crio-webinar}}",
            ],
          ],
        },
        {
          type: "p",
          text: "Both products read structured and unstructured EHR data and explain each match.{{cite:bond-site,trially-faq-ai,trially-faq-ranking}} Bond then keeps the patient in one platform through outreach, pre-screening, scheduling and consent support, and ties its success fee to randomized patients.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "trially-strengths",
      heading: "Can Bond do what Trially is known for?",
      blocks: [
        {
          type: "p",
          text: "Here is how Bond handles each strength that Trially's materials highlight.",
        },
        {
          type: "ul",
          items: [
            "**EHR scoring with a rationale.** Trially Match scores patients on how closely they meet a protocol's criteria and gives a rationale for each match.{{cite:trially-faq-ranking}} Bond's [Identify](/identify) ranks patient matches and shows the chart evidence behind each criterion decision, reading clinical notes, prescriptions and lab results at 10,000+ charts per hour.{{cite:bond-site}} It also uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}}",
            "**Margo's outreach, reminders and email.** Margo contacts patients by voice call, text and email, pre-screens them, schedules visits and sends reminders.{{cite:trially-connect}} Bond's [Engage](/engage) agents contact patients by voice and SMS/text, pre-screen them and book screening visits.{{cite:bond-site}} Because they start from what Identify found in the chart, they skip questions the chart already answers and can explain why the patient was contacted. They transfer calls live to a coordinator when the site wants that, switch languages mid-call, and send reminders by text, voice or email.{{cite:bond-product}}",
            "**A CRIO partnership.** CRIO announced Trially as a certified API partner in September 2024.{{cite:crio-trially-2024}} Bond is a CRIO Certified Partner, listed by CRIO under Patient Acquisition & Retention.{{cite:bond-site}} See [Bond's CRIO integration](/integrations/crio).",
            "**Connectors to many EHRs.** Trially's FAQ names Epic, athenahealth, Oracle Health/Cerner, eClinicalWorks, NextGen and more.{{cite:trially-faq-ehr}} Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, and its implementation team handles the integration end to end, with no integration fee.{{cite:bond-site,bond-product}}",
            "**Feasibility analytics.** Trially Intelligence offers feasibility analytics and sponsor-ready eligibility counts.{{cite:trially-intelligence}} Bond runs feasibility from the same EHR screening that finds patients, giving eligible-patient counts for a protocol backed by the chart evidence behind each match, with network-wide standardization and consistent metrics across sites.{{cite:bond-site,bond-product}}",
          ],
        },
        {
          type: "p",
          text: "Bond also helps with your IRB submission. Each outreach script is configured per site and study from the wording your IRB approved, and the free [IRB submission language template](/templates/irb-submission-language-ai-outreach) gives model protocol paragraphs for AI-assisted pre-screening, voice and SMS outreach, data security and consent support.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "evidence",
      heading: "What evidence does Bond publish?",
      blocks: [
        {
          type: "p",
          text: "Bond puts three kinds of evidence in front of buyers: the figures on its website, a technical report with benchmark results on public datasets, and its security and compliance record.",
        },
        {
          type: "p",
          text: "**Published figures.** Bond's website reports 90%+ matching accuracy, 50%+ less chart review, a 3x contact rate, 90%+ completion for consent support and up to 3x faster enrollment than manual recruitment.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "**Technical report.** Bond's report describes its matching method and tests it on public datasets. It reports 0.9312 micro F1 on the held-out n2c2 2018 cohort-selection benchmark, and nDCG@10 gains of 0.1315 on TREC 2021 and 0.1316 on TREC 2022 over TrialGPT's criterion-count ranking component. Its terminology graph of 3,270,078 nodes from 18 biomedical sources resolves an exact multi-token concept in 82.0% of 51,055 ClinicalTrials.gov criteria, against 5.7% for ICD-10-CM alone, and every model decision carries provenance-tagged evidence. The report is an August 2026 preprint that has not been peer reviewed, and it is available on request.{{cite:bond-whitepaper}}",
        },
        {
          type: "p",
          text:
            "**Security and compliance.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its public [Trust Center](" +
            TRUST_CENTER +
            ") lists 73 HIPAA Security Rule controls across infrastructure security, organizational security, internal security procedures, and data and privacy, monitored continuously by Vanta. They include encryption of ePHI, access controls, automatic log-off, log-in monitoring, backups, disaster recovery and contingency plans, and a named HIPAA security officer.{{cite:bond-trust-center}} Bond also signs BAAs and runs penetration testing and employee security training; the [security](/security) page has the details.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "evaluate",
      heading: "How can you test Bond against Trially on your own data?",
      blocks: [
        {
          type: "p",
          text: "Each company's figures come from its own methods and data, so the clearest comparison is a head-to-head pilot, and Bond welcomes one. Give both vendors the same protocol and the same patient list under a [business associate agreement](/glossary/baa), then compare the results side by side.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Use one protocol and one patient list",
              text: "Pick a closed study where coordinators know who enrolled, who screen-failed and why, and give both vendors the same protocol and records.",
            },
            {
              title: "Compare evidence quality",
              text: "Ask for the chart evidence behind each criterion decision, then adjudicate a stratified sample of clear matches, clear exclusions and borderline cases, so easy cases do not hide errors in hard ones.",
            },
            {
              title: "Compare contact rate",
              text: "Run outreach from your own approved script and count how many patients each vendor reaches. Listen to calls, read texts, and check how opt-outs and requests for a human are handled.",
            },
            {
              title: "Compare time to first visit",
              text: "Track the days from match to a booked screening visit for each vendor.",
            },
            {
              title: "Compare cost per randomized patient",
              text: "Add up every fee, divide by randomized patients, and check the BAA, audit logging and who does the IT work.",
            },
          ],
        },
        {
          type: "p",
          text: "A Bond pilot can also start before EHR integration, running outreach, pre-screening and scheduling on a list you already have, such as ad leads, referrals or registry contacts.{{cite:bond-site}} The [AI recruitment vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) turns these steps into vendor questions, and the [recruitment software comparison](/compare/clinical-trial-recruitment-software) covers other tools in the category.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol. We will show how Bond handles its hardest criteria and the evidence behind each decision.",
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
          text: "Bond Health wrote this page in September 2026. Statements about Trially come only from public sources accessed that month: Trially's website, solution pages, FAQ and blog, and CRIO's partner announcement. Statements about Bond come from Bond's website, public Trust Center, product information, an April 2026 ACRP chapter presentation and Bond's technical report. We used no private or internal information about Trially. Where Trially's materials are silent on a capability, we say it is not publicly documented rather than guess. Trially® is a trademark of Trially Inc. Bond Health is not affiliated with or endorsed by Trially.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, including anything about Trially, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a good Trially alternative?",
      a: "Yes. Bond screens the site's EHR, including clinical notes, with chart evidence behind each match, then contacts, pre-screens and schedules patients by voice and text and supports informed consent, all in one platform with no integration fee and a success fee per randomized patient.{{cite:bond-site,bond-product}} As of September 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that reads EHR notes against a protocol, contacts patients by voice and text, and supports informed consent.",
    },
    {
      q: "Does Trially support informed consent?",
      a: "Informed consent and eConsent support are not publicly documented in the Trially materials we reviewed in September 2026, so ask Trially directly.{{cite:trially-home,trially-connect,trially-connect-blog}} Bond's [Consent](/consent) support explains the consent form in plain language, answers patient questions, checks understanding of key points and keeps an auditable record for the site, and consent Q&A can run in the patient's preferred language. Bond's site cites 90%+ completion, and the site and PI obtain consent.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How does pricing compare?",
      a: "Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee, so part of the cost depends on enrollment; see [pricing](/pricing).{{cite:bond-site,bond-product}} In a March 2025 blog post, Trially described a monthly subscription that varies with site size and integration needs. We found no published Trially prices, and its current terms may differ.{{cite:trially-crio-webinar}}",
    },
    {
      q: "Do Bond and Trially both work with CRIO?",
      a: "Yes. Bond is a CRIO Certified Partner, listed by CRIO under Patient Acquisition & Retention, and also integrates directly with CTMS, calendars and Google Sheets.{{cite:bond-site,bond-acrp-talk}} CRIO announced Trially as a CRIO-certified API partner in September 2024.{{cite:crio-trially-2024}} See [Bond's CRIO integration](/integrations/crio).",
    },
  ],
  sources: [
    {
      id: "trially-home",
      title: "Trially AI | Clinical Trial Patient Recruitment",
      publisher: "Trially",
      url: "https://www.trially.ai/",
      year: "2026",
      note: "Homepage accessed September 23, 2026. Products listed: Trially Match, Trially Connect, Trially Intelligence. No mention of informed consent or eConsent.",
    },
    {
      id: "trially-faq-ai",
      title: "FAQ: What kind of AI technology does Trially use?",
      publisher: "Trially",
      url: "https://www.trially.ai/faq/what-kind-of-ai-technology-does-trially-use",
      year: "2026",
      note: "Accessed September 21, 2026. Quote: \"Trially is built on a native LLM (Large Language Model) and NLP (Natural Language Processing) architecture, capable of analyzing both structured and unstructured EHR data to determine eligibility with high precision in minutes, not days.\"",
    },
    {
      id: "trially-connect",
      title: "Trially Connect",
      publisher: "Trially",
      url: "https://www.trially.ai/solution-connect",
      year: "2026",
      note: "Solution page accessed September 23, 2026. Quotes: \"Margo reactivates and engages dormant patient populations with voice call, text and email to build your trial-ready population.\"; \"Qualify patients for trials with automated pre-screening, scheduling and engagement.\"; \"Apts & Reminders\" and \"Scheduling through call, email, SMS.\" The page does not mention informed consent or eConsent.",
    },
    {
      id: "bond-site",
      title: "Bond Health: platform overview, FAQ and pricing",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
    },
    {
      id: "trially-connect-blog",
      title: "Trially Connect: Margo AI Gives Clinical Research Coordinators the Backup They Deserve",
      publisher: "Trially (blog)",
      url: "https://www.trially.ai/blog/trially-connect-margo-ai-gives-clinical-research-coordinators-the-backup-they-deserve",
      year: "2026",
      note: "Blog post dated June 12, 2026. Quotes: \"It acts as a decision-support tool rather than an autonomous decision-maker.\"; \"ensuring the physician always retains the final decision-making authority.\" and \"It automates the crucial follow-up steps that humans simply do not have the time for, including pre-screening patients, scheduling appointments, and sending consistent reminders through text messages and voice calls.\" Our September 2026 review of Trially's homepage, About, Match, Connect and Intelligence pages and blog posts found no description of informed consent or eConsent support.",
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
      id: "trially-crio-webinar",
      title: "Top 5 Takeaways from our CRIO Partner Webinar",
      publisher: "Trially (blog)",
      url: "https://www.trially.ai/blog/top-5-takeaways-from-crio-partner-webinar",
      year: "2025",
      note: "Blog post dated March 26, 2025. Quotes: \"Trially operates on a monthly subscription model, which varies depending on your site's size and integration needs.\" and, on EMRs without an API, \"Whether it's through secure file transfers, PDF ingestion, or alternative export formats, we'll find a path that works for your setup.\"",
    },
    {
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request.",
    },
    {
      id: "bond-trust-center",
      title: "Bond Health Trust Center",
      publisher: "Bond Health, monitored by Vanta",
      url: TRUST_CENTER,
      year: "2026",
      note: "Lists 73 HIPAA Security Rule controls: infrastructure security (20), organizational security (14), internal security procedures (38), and data and privacy (1), monitored continuously by Vanta. Viewed September 23, 2026.",
    },
    {
      id: "trially-faq-ranking",
      title: "FAQ: How are matches ranked?",
      publisher: "Trially",
      url: "https://www.trially.ai/faq/how-are-matches-ranked",
      year: "2026",
      note: "Accessed September 22, 2026. Quote: \"Patients are scored based on how closely they meet the inclusion/exclusion criteria, with the ability to triple-click into the detailed rationale provided for each match.\"",
    },
    {
      id: "trially-match",
      title: "Trially Match",
      publisher: "Trially",
      url: "https://www.trially.ai/solution-match",
      year: "2026",
      note: "Solution page accessed September 23, 2026. Under \"Key Features\": \"Multi-Trial. Multi-Site.\" with \"Match across protocols and sites.\", and \"Realtime Matching\" with \"Match your database against protocols.\"",
    },
    {
      id: "trially-intelligence",
      title: "Trially Intelligence",
      publisher: "Trially",
      url: "https://www.trially.ai/solution-intelligence",
      year: "2026",
      note: "Solution page accessed September 23, 2026. Quotes: \"Feasibility You Can Prove, Instantly.\" and \"Deliver sponsor-ready eligibility counts.\"",
    },
    {
      id: "trially-faq-ehr",
      title: "FAQ: Which Electronic Health Systems (EHR) systems does Trially integrate with?",
      publisher: "Trially",
      url: "https://www.trially.ai/faq/which-electronic-health-systems-(ehr)-systems-does-trially-integrate-with-how-long-does-that-take",
      year: "2026",
      note: "Accessed September 22, 2026. Quote: \"Trially connects with the systems sites already use - including Epic, Carequality, Practice Fusion, ModMed, NextGen Healthcare, Oracle Health/Cerner, eClinicalWorks, Veradigm, athenahealth, and more.\"",
    },
    {
      id: "bond-acrp-talk",
      title: "Modernizing Patient Recruitment: AI Tools, Workflows, and Outcomes",
      publisher: "Bond Health presentation to the ACRP New Jersey chapter (Goel R, Mustafa S)",
      year: "2026",
      note: "April 2026. Slides state \"1,000 patients screened in <2 hours\", \"Direct integrations with Google Sheets, CTMS, and Calendars\" and \"Flexible knowledge base for Voice Agents\".",
    },
    {
      id: "crio-trially-2024",
      title: "CRIO-Trially Integration: Enhancing EMR Workflows and Patient Identification",
      publisher: "Clinical Research IO (CRIO)",
      url: "https://clinicalresearch.io/blog/company-news/crio-trially-integration-enhancing-emr-workflows-and-patient-identification/",
      year: "2024",
      note: "Posted September 3, 2024. Quote: \"As a CRIO-certified API partner, Trially can [...] integrate with CRIO's recruitment module in addition to EMR systems, to analyze a site's patient population and identify qualified patients based on protocol eligibility criteria.\"",
    },
    {
      id: "trially-faq-crm",
      title: "FAQ: Which CRM systems does Trially integrate with?",
      publisher: "Trially",
      url: "https://www.trially.ai/faq/which-crm-systems-does-trially-integrate-with-how-long-does-that-take",
      year: "2026",
      note: "Accessed September 21, 2026. Quote: \"Trially can integrate with any CRM or CTMS system including (but not limited to): Salesforce, Hubspot, CRIO, RealtimeCTMS and more.\"",
    },
    {
      id: "trially-faq-trials",
      title: "FAQ: What types of trials can Trially support?",
      publisher: "Trially",
      url: "https://www.trially.ai/faq/what-types-of-trials-can-trially-support",
      year: "2026",
      note: "Accessed September 21, 2026. Quote: \"Trially supports all phases of clinical trials across multiple therapeutic areas\" and \"from cardiovascular to oncology to rare diseases. It's built to scale with your study portfolio.\"",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, vendor by vendor." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based platform fee plus a success fee per randomized patient." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and explains each match." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "Outreach, pre-screening and scheduling after the match." },
    { label: "Consent: informed consent support", href: "/consent", description: "Plain-language explanations and patient Q&A while the site obtains consent." },
  ],
};

export default page;
