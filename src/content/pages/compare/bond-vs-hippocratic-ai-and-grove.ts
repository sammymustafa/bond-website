import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";

const page: SeoPage = {
  path: "/compare/bond-vs-hippocratic-ai-and-grove",
  category: "comparison",
  title: "Hippocratic AI and Grove AI (Grace) trial agent alternative",
  description:
    "A Hippocratic AI and Grove AI alternative: Bond finds eligible patients in your own EHR, notes included, then calls, texts, pre-screens and supports consent.",
  keywords: [
    "Hippocratic AI alternative",
    "Grove AI Grace alternative",
    "Hippocratic AI clinical trial agent",
    "Hippocratic AI Grove AI acquisition",
    "AI voice agent clinical trial recruitment",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs Hippocratic AI and Grove AI",
  intro:
    "Hippocratic AI, which announced its acquisition of Grove AI and the Grace trial agent on January 12, 2026, sells AI agents that call and pre-screen trial candidates drawn from a feasibility model, referrals, registries and campaigns.{{cite:hippo-grove-acquisition,hippo-trial-enrollment}} Bond Health starts in the chart: it screens the site's own EHR, clinical notes included, against each study's criteria, then contacts, pre-screens and schedules matched patients by voice and text and supports informed consent, with chart evidence behind every match.{{cite:bond-site}} If you want eligible patients found in your own records and carried to consent by one platform, with a success fee tied to randomized patients, Bond is the stronger choice.",
  summary: "Why sites choose Bond over Hippocratic AI and Grove AI, compared capability by capability, with a plan for a head-to-head test.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over Hippocratic AI and Grove AI?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "As of September 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that reads EHR notes against a protocol, contacts patients by voice and text, and supports informed consent.",
        },
        {
          type: "stats",
          items: [
            { value: "3x", label: "Contact rate with Bond's voice and SMS agents", cite: "bond-site" },
            { value: "90%+", label: "Matching accuracy in Bond's EHR screening", cite: "bond-site" },
            { value: "1,000", label: "Patients pre-screened by Bond's voice agents in under 2 hours", cite: "bond-acrp-talk" },
          ],
        },
        {
          type: "ul",
          items: [
            "**Patients come from your own charts.** Bond screens the site's EHR against each study's criteria before anyone is contacted, reading clinical notes, prescriptions and lab results at more than 10,000 charts per hour, along with imaging data and other unstructured documents.{{cite:bond-site,bond-product}}",
            "**Every match shows its evidence.** Coordinators review ranked matches with the note, lab or medication behind each criterion decision, and Bond reports 50%+ less chart review and fewer screen failures.{{cite:bond-site}}",
            "**Calls start from the chart.** Bond's voice agents start from what Identify found in the chart, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation. They speak English, Spanish, Mandarin and many other languages, switch languages mid-call, and transfer live to a coordinator when the site wants that.{{cite:bond-product}}",
            "**One platform from chart to consent and beyond.** EHR screening, outreach, scheduling and consent support run in one workflow, with no data silos or manual handoffs from first match to signed consent.{{cite:bond-site}} After enrollment, the same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
            "**Connected to the systems sites run.** Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR and HL7, and is a CRIO Certified Partner.{{cite:bond-site,bond-product}}",
            "**No integration fee.** Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
            "**Ads when you need more patients.** For studies that need patients beyond your records, Bond sets up Meta and Google ad campaigns, and those leads flow into the same pre-screening and scheduling as EHR matches.{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and Hippocratic AI compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Bond's column comes from Bond's website and product information. Hippocratic AI's column, which includes Grove AI, comes from Hippocratic AI's public pages and press coverage. \"Not publicly documented\" means we found no public description as of September 2026, not that the capability is absent.",
        },
        {
          type: "table",
          caption: "Bond Health and Hippocratic AI, from each company's materials and press coverage, September 2026",
          columns: ["Capability", "Bond Health", "Hippocratic AI (including Grove AI)"],
          rows: [
            [
              "Where patients come from",
              "Screens the site's own EHR, including clinical notes, against each study's criteria before anyone is contacted, and ranks the matches.{{cite:bond-site}} Also sets up Meta and Google ad campaigns for your studies, and pre-screens those leads with the same agents.{{cite:bond-product}}",
              "Calls candidates a feasibility model surfaces and follows up on referrals, registry hits and responses to ads and campaigns. Says its agents can pull a cohort from an EHR or CRM. Chart screening against a trial's criteria: not publicly documented (September 2026).{{cite:hippo-trial-enrollment,medcity-grove-2026,hippo-agents-call}}",
            ],
            [
              "Unstructured notes",
              "Reads clinical notes, prescriptions and lab results.{{cite:bond-site}} Also uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}}",
              "Not publicly documented for trial identification (September 2026).{{cite:hippo-trial-enrollment}}",
            ],
            [
              "Chart evidence behind each criterion",
              "Yes. Each match lists the criteria, the decision on each, and the note, lab or medication behind it.{{cite:bond-site}}",
              "Not publicly documented (September 2026).{{cite:hippo-trial-enrollment}}",
            ],
            [
              "Outreach, pre-screening and scheduling",
              "Voice and SMS/text agents run outreach, pre-screen scripts and scheduling, with a 3x contact rate.{{cite:bond-site}} Voice agents start from what the chart shows, skip questions it already answers, can pre-screen and book a visit in one conversation, and transfer live to a coordinator or book a callback, as the site prefers.{{cite:bond-product}}",
              "Pre-screening calls against inclusion and exclusion criteria, eligibility documentation with automatic form filling, visit scheduling, and handoff of qualified, willing patients to a coordinator. Grace works across voice, text and email.{{cite:hippo-trial-enrollment,hippo-grove-acquisition}}",
            ],
            [
              "Informed consent",
              "Plain-language explanations, patient Q&A and staff escalation, with 90%+ completion; the site and PI obtain consent.{{cite:bond-site}} Checks the patient's understanding of key points and keeps an auditable record for the site.{{cite:bond-product}}",
              "Consent education; agents guide participants through consent, explain study expectations and confirm understanding before enrollment.{{cite:hippo-trial-enrollment,hippo-life-sciences}}",
            ],
            [
              "Retention after enrollment",
              "The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out. Reminders can go by text, voice or email.{{cite:bond-product}}",
              "AI Trial Retention: visit reminders, ePRO and diary collection, side-effect check-ins and dropout-risk detection.{{cite:hippo-trial-retention}}",
            ],
            [
              "Languages",
              "Voice and text conversations and consent Q&A run in the patient's preferred language, including English, Spanish, Mandarin and many others, with mid-call language switching.{{cite:bond-product}}",
              "Multilingual, with mid-call language switching.{{cite:hippo-trial-enrollment}}",
            ],
            [
              "Drug and device studies",
              "Screening works for drug and device studies alike, because it is configured from each protocol's own criteria.{{cite:bond-product}}",
              "Separate products: AI Trial Enrollment for pharma and AI Device Trial Enroll for medtech (August 2026).{{cite:hippo-orchestrators-2026}}",
            ],
            [
              "Integrations",
              "FHIR and HL7 to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, or through an aggregator; CRIO Certified Partner.{{cite:bond-site,bond-product}} Direct integrations with CTMS and calendars.{{cite:bond-acrp-talk}}",
              "Agents pull the target population from an EHR or CRM and write outcomes back; the integration is mapped during scoping. Named EHR or CTMS vendors: not publicly documented (September 2026).{{cite:hippo-agents-call}}",
            ],
            [
              "Pricing",
              "A volume-based platform fee plus a success fee per randomized patient, with no integration fee. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
              "Says pricing scales with volume and use case.{{cite:hippo-agents-call}}",
            ],
          ],
        },
      ],
    },
    {
      id: "known-for",
      heading: "Can Bond do what Hippocratic AI and Grove AI are known for?",
      blocks: [
        {
          type: "p",
          text: "Hippocratic AI and Grove AI promote phone pre-screening at volume, consent education, retention support, multilingual conversations and device-trial enrollment.{{cite:hippo-trial-enrollment,hippo-trial-retention,hippo-grove-acquisition,hippo-orchestrators-2026}} Bond covers each one.",
        },
        {
          type: "ul",
          items: [
            "**Fast phone pre-screening.** Bond's voice agents screened 1,000 patients in under 2 hours.{{cite:bond-acrp-talk}} Its voice and SMS outreach has a 3x contact rate, and the agents can pre-screen and schedule a list the site already has, such as ad leads, referrals or registry contacts.{{cite:bond-site}}",
            "**Consent education.** Bond's consent support, with 90%+ completion, explains the consent form in plain language, answers patient questions and escalates to staff.{{cite:bond-site}} It checks the patient's understanding of key points and keeps an auditable record for the site.{{cite:bond-product}}",
            "**Retention.** After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out. Reminders can go by text, voice or email.{{cite:bond-product}}",
            "**Many languages.** Voice and text conversations and consent Q&A run in the patient's preferred language, including English, Spanish, Mandarin and many others, and can switch languages mid-call.{{cite:bond-product}}",
            "**Device studies.** Screening works for drug and device studies alike, because it is configured from each protocol's own criteria.{{cite:bond-product}}",
          ],
        },
        {
          type: "p",
          text: "Bond also hands patients to your team the way you choose: its agents transfer the call live to a coordinator or book a human callback, whichever the site prefers.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "evaluate",
      heading: "How can you test Bond against Hippocratic AI on your own data?",
      blocks: [
        {
          type: "p",
          text: "Bond welcomes a head-to-head pilot. Give both vendors the same protocol and the same patient list under a [business associate agreement](/glossary/baa), then compare evidence quality, contact rate, time to first visit and cost per randomized patient.",
        },
        {
          type: "steps",
          items: [
            { title: "Use one protocol and one patient list", text: "Pick a study where coordinators already know who enrolled, who screen-failed and why, and give both vendors the same list." },
            { title: "Compare the evidence", text: "Ask each vendor to show why each patient qualifies. With EHR access, Bond shows the note, lab or medication behind each criterion decision.{{cite:bond-site}}" },
            { title: "Compare contact rates", text: "Count the patients each vendor reaches and pre-screens, and review real transcripts, including requests for a human." },
            { title: "Measure time to first visit", text: "Track the time from list to first screening visit, along with show-ups and screen failures." },
            { title: "Compare cost per randomized patient", text: "Divide each vendor's total cost by the patients randomized. Bond charges its success fee per randomized patient; see [pricing](/pricing).{{cite:bond-site}}" },
          ],
        },
        {
          type: "p",
          text: "Full EHR integration takes 48 hours, depending on the EHR, IT review and interface method, and Bond's implementation team handles it end to end, with no integration fee. Bond signs a BAA before any patient data is shared; see [security](/security).{{cite:bond-site,bond-product}} Bond can also share its technical report, a preprint with benchmark results on public datasets, on request.{{cite:bond-whitepaper}} Our [vendor checklist for AI recruitment tools](/templates/ai-recruitment-vendor-evaluation-checklist) turns these steps into written questions.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol. We will walk through how Bond would screen for it and plan a side-by-side test on your data.",
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
          text: "Bond Health wrote this page in September 2026. Facts about Hippocratic AI and Grove AI come only from their public web pages, press releases and press coverage, listed below with dates, not from private or internal competitive material. Grove AI's homepage now shows an acquisition notice, so Grove AI entries rely on the acquisition announcement and press coverage and may not match how Hippocratic AI offers Grace today.{{cite:grove-site-2026}} Facts about Bond come from Bond's website, its presentation to the ACRP New Jersey chapter, its technical report and product information Bond provided.",
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
      q: "Is Bond an alternative to Hippocratic AI's trial agents?",
      a: "Yes. Bond's voice and SMS agents contact, pre-screen and schedule patients, and its consent support explains the consent form in plain language and answers questions.{{cite:bond-site}} After enrollment, the same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}} Bond also finds those patients first, by screening the site's own EHR, clinical notes included, with chart evidence behind every match, and it charges a success fee per randomized patient.{{cite:bond-site}}",
    },
    {
      q: "Is Grove AI part of Hippocratic AI?",
      a: "Yes. Hippocratic AI announced on January 12, 2026 that it had acquired Grove AI, maker of the Grace trial agent, and that Grove AI's team and technology now form a core pillar of its Life Sciences Division.{{cite:hippo-grove-acquisition}} Terms were not disclosed, and Grove AI's homepage now shows an acquisition notice.{{cite:medcity-grove-2026,grove-site-2026}}",
    },
    {
      q: "Can Bond's agents transfer a patient to our coordinators?",
      a: "Yes. Patients can reach a person at any time: Bond's agents transfer the call live to a coordinator or book a human callback, whichever your site prefers. Conversations run in the patient's language, including English, Spanish and Mandarin, and can switch languages mid-call.{{cite:bond-product}}",
    },
    {
      q: "How does pricing compare?",
      a: "Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee.{{cite:bond-site,bond-product}} Hippocratic AI says its pricing scales with volume and use case.{{cite:hippo-agents-call}} See [pricing](/pricing) for how Bond's model works.",
    },
  ],
  sources: [
    {
      id: "hippo-grove-acquisition",
      title: "Hippocratic AI Consolidates Life Sciences Leadership with Acquisition of Grove AI and Key Executive Appointments",
      publisher: "Hippocratic AI via Business Wire (Yahoo Finance)",
      url: "https://finance.yahoo.com/news/hippocratic-ai-consolidates-life-sciences-174700469.html",
      year: "2026",
      note: "Press release dated January 12, 2026, accessed September 2026. Quotes: \"Grove AI's team and technology now form a core pillar of Hippocratic AI's Life Sciences Division.\" On Grace: \"An always-on, multilingual AI agent that supports end-to-end patient engagement, recruitment, and follow-up across voice, text, and email.\"",
    },
    {
      id: "medcity-grove-2026",
      title: "Startup to Acquisition in 2 Years: Grove AI's Journey to Transform Clinical Trials",
      publisher: "MedCity News (Frank Vinluan)",
      url: "https://medcitynews.com/2026/07/grove-ai-voice-agent-agentic-clinical-trial-recruitment-hippocratic/",
      year: "2026",
      note: "Article dated July 31, 2026. Quotes: \"In January of this year, Hippocratic AI acquired Grove for an undisclosed sum.\" \"Le said patients learn about the voice agent option through pharma company outreach to disease groups and clinical sites as well as online advertising.\"",
    },
    {
      id: "hippo-trial-enrollment",
      title: "AI Clinical Trial Enrollment",
      publisher: "Hippocratic AI",
      url: "https://hippocraticai.com/ai-trial-enrollment/",
      year: "2026",
      note: "Product page, accessed September 21 and 22, 2026. Quotes: \"It calls every candidate the feasibility model surfaced, walks the I/E criteria conversationally\"; \"Mass pre-screening outreach against inclusion/exclusion criteria with non-linear intake and ambiguous-answer clarification\"; \"eligibility documentation with auto-form filling\"; \"consent education; visit scheduling and live transfer to site coordinators\"; \"Every referral, registry hit, and campaign response gets same-day follow-up.\"; \"multilingual with mid-call switching\"; \"hands the qualified, willing patient to a coordinator with the paperwork already done.\" The page does not describe the feasibility model's data sources.",
    },
    {
      id: "hippo-trial-retention",
      title: "AI Clinical Trial Retention",
      publisher: "Hippocratic AI",
      url: "https://hippocraticai.com/ai-trial-retention/",
      year: "2026",
      note: "Product page, accessed September 2026. Quote: \"An AI companion for every participant: visit reminders with transportation booked in-call; ePRO and diary collection in natural conversation; symptom and side-effect check-ins with site escalation; dropout-risk detection with early intervention\".",
    },
    {
      id: "hippo-agents-call",
      title: "AI Agents That Call Your Patients",
      publisher: "Hippocratic AI",
      url: "https://hippocraticai.com/ai-agents-that-call-your-patients/",
      year: "2026",
      note: "Product page, accessed September 22, 2026. Quotes: \"Pull the cohort from your EHR/CRM\"; \"Will it integrate with our EHR / CRM? Yes. Agents pull the target population from your systems and write outcomes back, so calls update the record and feed your reporting. We'll map the integration during scoping.\" \"Pricing scales with volume and use case.\" No EHR or CTMS vendors are named.",
    },
    {
      id: "hippo-life-sciences",
      title: "Life Sciences",
      publisher: "Hippocratic AI",
      url: "https://hippocraticai.com/lifesciences/",
      year: "2026",
      note: "Accessed September 22, 2026. Clinical trials section: \"Accelerate enrollment. Reduce site burden. Improve retention.\" Informed Consent Education: \"Guide participants through consent, explain study expectations, and confirm understanding before enrollment.\"",
    },
    {
      id: "hippo-orchestrators-2026",
      title: "Hippocratic AI Announces Next Generation of Healthcare AI: Orchestrators Focused on Outcomes, Not Tasks",
      publisher: "Hippocratic AI via PR Newswire",
      url: "https://www.prnewswire.com/news-releases/hippocratic-ai-announces-next-generation-of-healthcare-ai-orchestrators-focused-on-outcomes-not-tasks-302850620.html",
      year: "2026",
      note: "Press release dated August 13, 2026, accessed September 22, 2026. Life Sciences (Pharma) products listed include \"AI Trial Enrollment, AI Trial Retention\"; Med Tech products include \"AI Device Trial Enroll\".",
    },
    {
      id: "grove-site-2026",
      title: "Grove AI homepage",
      publisher: "Grove AI",
      url: "https://www.grovetrials.com/",
      year: "2026",
      note: "Accessed September 22, 2026. The visible page shows the notice \"Grove AI has been acquired by Hippocratic AI\" and a sign-in link.",
    },
    { id: "bond-site", title: "Bond Health: platform overview, FAQ and pricing", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026" },
    { id: "bond-acrp-talk", title: "Modernizing Patient Recruitment: AI Tools, Workflows, and Outcomes", publisher: "Bond Health presentation to the ACRP New Jersey chapter (Goel R, Mustafa S)", year: "2026", note: "April 2026. Slides state \"1,000 patients screened in <2 hours\", \"Direct integrations with Google Sheets, CTMS, and Calendars\" and \"Flexible knowledge base for Voice Agents\"." },
    { id: "bond-whitepaper", title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching", publisher: "Bond Health, preprint", year: "2026", note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request." },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, September 2026." },
    ...testimonialSources(),
  ],
  related: [
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, vendor by vendor." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and shows the evidence for each match." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "How Bond's agents call, text, pre-screen and schedule." },
    { label: "Consent support", href: "/consent", description: "Plain-language explanations, patient Q&A and understanding checks." },
    { label: "Pricing", href: "/pricing", description: "Platform fee plus a per-randomized-patient success fee." },
    { label: "Security", href: "/security", description: "BAAs, audit logging, encryption and Bond's public Trust Center." },
  ],
};

export default page;
