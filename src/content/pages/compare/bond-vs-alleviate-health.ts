import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";

const TRUST_CENTER = "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj";

const page: SeoPage = {
  path: "/compare/bond-vs-alleviate-health",
  category: "comparison",
  title: "Alleviate Health alternative: from EHR screening to consent",
  description:
    "Bond finds eligible patients in your EHR, works the leads you already have, and pre-screens, schedules and supports consent. Compare it with Alleviate Health.",
  keywords: [
    "Alleviate Health alternative",
    "Bond Health vs Alleviate Health",
    "Alleviate Health AI recruiter",
    "AI pre-screening agents clinical trials",
    "SMS and voice pre-screening for clinical trials",
    "EHR patient identification for clinical trials",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs Alleviate Health",
  intro:
    "Alleviate Health sells human-in-the-loop AI agents that pre-screen and schedule clinical trial leads over SMS and voice.{{cite:alleviate-home-2026,alleviate-launch-2025}} Bond Health finds eligible patients in a site's own EHR, including clinical notes, then contacts, pre-screens and schedules them by voice and text, and supports informed consent, with chart evidence behind every match.{{cite:bond-site}} For a site that wants one platform to find eligible patients, work the leads it already has and carry each patient through to consent, Bond is the stronger choice.",
  summary:
    "Why sites choose Bond over Alleviate Health: EHR identification, chart-aware outreach, consent support, support after enrollment and no integration fee.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over Alleviate Health?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond pre-screens and schedules the leads a site already has, finds eligible patients in the site's own EHR before anyone is contacted, and carries each patient from outreach to consent support in one workflow.{{cite:bond-site}}",
        },
        {
          type: "stats",
          items: [
            { value: "3x", label: "Contact rate for Bond's voice and SMS/text outreach", cite: "bond-site" },
            { value: "1,000", label: "Patients pre-screened by Bond's voice agents in under 2 hours", cite: "bond-acrp-talk" },
            { value: "90%+", label: "Completion rate with Bond's informed consent support", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**Eligible patients from the site's own EHR.** Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, and is a [CRIO Certified Partner](/integrations/crio). It screens each chart against the protocol, reading clinical notes, prescriptions, lab results, imaging data and other unstructured documents, and ranks matches with the evidence behind them before anyone is contacted.{{cite:bond-site,bond-product}} Bond's August 2026 technical report, a preprint available on request, reports 0.9312 micro F1 on the held-out n2c2 2018 cohort-selection benchmark.{{cite:bond-whitepaper}}",
            "**Agents that start from the chart.** Bond's voice agents start from what [Identify](/identify) found in the chart, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation. Conversations run in the patient's language, including English, Spanish and Mandarin, and can switch languages mid-call. Patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-product}}",
            "**Consent support in the same workflow.** EHR screening, patient outreach and consent tracking run in one workflow, with complete visibility from first match to signed consent. Bond explains the consent form in plain language, answers patient questions, escalates to staff, checks the patient's understanding of key points and keeps an auditable record for the site. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
            "**Support until close-out.** After enrollment, the same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out, and Bond keeps improving outreach messaging until study close-out.{{cite:bond-product}}",
            `**Security you can inspect.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} It signs BAAs, supports SSO and audit logging, and publishes a [Trust Center](${TRUST_CENTER}) that lists 73 HIPAA Security Rule controls, monitored continuously by Vanta.{{cite:bond-site,bond-trust-center}}`,
            "**No integration fee.** Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
            "**Ads when you need more patients.** For studies that need patients beyond your records, Bond sets up Meta and Google ad campaigns, and those leads flow into the same pre-screening and scheduling as EHR matches.{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
        {
          type: "p",
          text: "As of September 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that reads EHR notes against a protocol, contacts patients by voice and text, and supports informed consent.",
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and Alleviate Health compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Bond entries come from Bond's own materials. Each Alleviate entry carries the year of its source. \"Not publicly documented\" means we found no public description as of September 2026, not that the capability does not exist; ask Alleviate directly.",
        },
        {
          type: "table",
          caption: "Bond Health and Alleviate Health, from public materials reviewed in September 2026",
          columns: ["Capability", "Bond Health", "Alleviate Health"],
          rows: [
            [
              "Where patients come from",
              "The site's own EHR: Bond screens 10,000+ charts per hour against each protocol's inclusion and exclusion criteria and ranks the matches, so chart criteria are checked before anyone is contacted. It also works any lead list the site already has, such as ad leads, referrals or registry contacts,{{cite:bond-site}} and Bond sets up Meta and Google ad campaigns for your studies, with those leads pre-screened by the same agents.{{cite:bond-product}}",
              "A site's lead sources, such as new Facebook leads (2026). EHR-based patient identification: not publicly documented (September 2026).{{cite:alleviate-home-2026}}",
            ],
            [
              "Unstructured notes and evidence",
              "Reads clinical notes, prescriptions and lab results, and uses imaging data and other unstructured documents, including pathology, radiology and molecular reports. Ranked matches come with the evidence behind them, and Bond's site cites 90%+ matching accuracy and 50%+ less chart review.{{cite:bond-site,bond-product}}",
              "Reading clinical notes: not publicly documented (September 2026). Its workflows collect eligibility information from the patient in conversation, including an AI voice pre-screen it recommends for full medical history requirements (2026). Its launch release says patient preferences and medical data from these conversations are kept in its CRM (2025).{{cite:alleviate-home-2026,alleviate-launch-2025}}",
            ],
            [
              "Outreach, pre-screening and scheduling",
              "Voice and SMS/text agents contact, pre-screen and schedule patients. Bond's site cites a 3x contact rate, and its voice agents pre-screened 1,000 patients in under 2 hours. The agents start from what Identify found in the chart, so they skip questions the chart already answers and can pre-screen and book a visit in one conversation. Conversations run in the patient's language, including English, Spanish and Mandarin, with mid-call switching.{{cite:bond-site,bond-acrp-talk,bond-product}}",
              "SMS pre-screening that books an on-site visit or a call with a coordinator, and AI voice pre-screening that books on-site visits (2026).{{cite:alleviate-home-2026}}",
            ],
            [
              "Human handoff",
              "Patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers. Patients are told AI is being used, and questions the script does not cover go to the site's coordinators.{{cite:bond-site,bond-product}}",
              "Warm transfer from an AI voice pre-screen to a human recruiter. Recruiters can jump in at any point, and patients are \"graduated to a human at the right moments\" (2026).{{cite:alleviate-home-2026}}",
            ],
            [
              "Informed consent",
              "[Consent support](/consent) with plain-language explanations, patient Q&A and staff escalation. It checks the patient's understanding of key points and keeps an auditable record for the site, and consent Q&A can run in the patient's preferred language. Bond's site cites 90%+ completion. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
              "Informed consent support: not publicly documented (September 2026).",
            ],
            [
              "Routing across trials and retention",
              "Screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another. After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
              "The homepage's example patient record lists other trials the patient qualifies for (2026). An April 2026 job post says its agents route patients across every trial a site is running, sending patients who screen out to the next-best protocol. Job posts also say its agents support patients 24/7 through the trial to reduce drop-offs (2025 and 2026).{{cite:alleviate-home-2026,alleviate-job-bdr-2026,alleviate-job-engineer-2025,alleviate-job-ae-2026}}",
            ],
            [
              "Integrations",
              "All the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR and HL7 or an aggregator. [CRIO Certified Partner](/integrations/crio). Direct integrations with CTMS, calendars and Google Sheets.{{cite:bond-site,bond-product,bond-acrp-talk}}",
              "Its launch release says each interaction is kept in a CRM built for clinical research (2025), and CNBC TV18 reported that its agents update clinical trial management systems in real time (2025). Its privacy policy describes Google Workspace calendar syncing (2025). Named EHR or CTMS integrations: not publicly documented (September 2026).{{cite:alleviate-launch-2025,cnbctv18-2025,alleviate-privacy-2025}}",
            ],
            [
              "Setup and ongoing support",
              "Bond's implementation team handles the integration end to end, with no integration fee and dedicated support through launch, and Bond keeps improving outreach messaging until study close-out. A list-based pilot can be set up in under 2 weeks; full EHR integration takes 4 to 6 weeks, depending on the EHR, IT review and interface method.{{cite:bond-site,bond-product}}",
              "Its team advises on the workflow and sets up each study end to end, with messaging for the site's lead sources and indication (2026). Setup timeline: not publicly documented (September 2026).{{cite:alleviate-home-2026}}",
            ],
            [
              "Pricing",
              "A volume-based platform fee plus a success fee per randomized patient, with no integration fee. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
              "Not publicly documented (September 2026); the website's calls to action are demo bookings (2026). A May 2026 job post refers to new studies added under master agreements.{{cite:alleviate-home-2026,alleviate-job-account-manager-2026}}",
            ],
          ],
        },
      ],
    },
    {
      id: "known-for",
      heading: "Can Bond do what Alleviate Health is known for?",
      blocks: [
        {
          type: "p",
          text: "Alleviate's homepage and job posts emphasize pre-screening leads at scale, a human in the loop, routing patients across a site's trials, keeping patients engaged through the trial, and messaging tuned to each study.{{cite:alleviate-home-2026,alleviate-job-bdr-2026,alleviate-job-engineer-2025}} Bond covers each of them.",
        },
        {
          type: "ul",
          items: [
            "**Fast pre-screening at scale.** Bond's voice agents pre-screened 1,000 patients in under 2 hours, and Bond's site cites a 3x contact rate for its voice and SMS/text outreach.{{cite:bond-acrp-talk,bond-site}}",
            "**A human in the loop.** Patients can reach a person at any time: Bond's agents transfer the call live to a coordinator or book a human callback, whichever the site prefers, and questions the script does not cover go to the site's coordinators.{{cite:bond-site,bond-product}}",
            "**Routing across trials.** Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**Retention.** After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out, and reminders can go by text, voice or email.{{cite:bond-product}}",
            "**Messaging tuned to each study.** Scripts are configured per site and per study, voice agents answer study questions from a flexible knowledge base, and Bond provides dedicated support through integration and launch.{{cite:bond-site,bond-acrp-talk}} Bond then keeps improving outreach messaging until study close-out.{{cite:bond-product}}",
          ],
        },
        {
          type: "p",
          text: "Bond also finds eligible patients in the site's own EHR before anyone is contacted, and it carries each patient through to [consent support](/consent) in the same workflow.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "evaluate",
      heading: "How can you test Bond against Alleviate Health on your own data?",
      blocks: [
        {
          type: "p",
          text: "Bond welcomes a head-to-head pilot. A demo shows the interface, not results on your patients, so run both vendors on the same protocol and the same patient list under a [business associate agreement](/glossary/baa), then compare the results.",
        },
        {
          type: "steps",
          items: [
            { title: "Pick one protocol", text: "Choose a study where coordinators already know who enrolled, who screen-failed and why, and give both vendors the same protocol." },
            { title: "Use the same patient list", text: "Give both vendors the same list of leads or referrals. If Bond also screens your EHR for the study, report those patients separately so the list comparison stays like for like." },
            { title: "Compare evidence quality", text: "For each patient a vendor passes to your team, check what supports the match: chart evidence for each criterion, the patient's own answers, or both." },
            { title: "Measure contact rate and time to first visit", text: "Track how many patients each vendor reaches, how many pass pre-screening, and the time from first contact to a completed screening visit." },
            { title: "Read the conversations", text: "Audit transcripts for AI disclosure, handoffs to staff and opt-outs. Confirm that each patient agreed to be contacted by text or phone (see [TCPA](/glossary/tcpa)) and that your IRB reviewed the scripts; the [guide to IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach) covers the details." },
            { title: "Compare cost per randomized patient", text: "Divide each vendor's total cost by the patients randomized from its work. Bond ties part of its price to randomized patients; see [pricing](/pricing).{{cite:bond-site}}" },
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
          text: "Bring one protocol and a lead list. We will show how Bond screens the chart, works the list and supports consent, with the evidence behind every match.",
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
          text: "Bond Health wrote this page in September 2026. Statements about Alleviate come from its public website, privacy policy, launch press release, press coverage and public job posts, each cited with its year. When we checked, its Workflows page said detailed information about its AI workflows was \"coming soon\".{{cite:alleviate-workflows-2026}} Statements about Bond come from Bond's website, its public Trust Center, its April 2026 presentation to the ACRP New Jersey chapter and product information from Bond Health. We used no private or internal competitive material.",
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
      q: "Is Bond a good Alleviate Health alternative?",
      a: "Yes. Bond runs outreach, pre-screening and scheduling by voice and SMS/text, both on the leads a site already has and on eligible patients it finds by reading the site's EHR, clinical notes included, and it supports informed consent in the same workflow.{{cite:bond-site}} Bond also screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another, and after enrollment its agents send visit reminders, book transportation, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
    },
    {
      q: "Does Alleviate Health find patients in the EHR?",
      a: "EHR-based patient identification is not publicly documented for Alleviate as of September 2026. Its homepage describes working from a site's lead sources, such as new Facebook leads, and pre-screening patients in conversation by SMS or voice.{{cite:alleviate-home-2026}} A 2025 job post lists training a model that matches patient profiles to trials among the work an engineer might do, so ask Alleviate for its current scope.{{cite:alleviate-job-engineer-2025}} Bond starts in the EHR: it screens each chart against the protocol, including clinical notes, and ranks matches with the evidence behind them before anyone is contacted.{{cite:bond-site}}",
    },
    {
      q: "Can Bond work the leads we already have?",
      a: "Yes. Bond's voice and SMS/text agents can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads, referrals or registry contacts, and a pilot on that list can be set up in under 2 weeks. Full EHR integration typically takes 4 to 6 weeks.{{cite:bond-site}} Once it is live, the voice agents start from what [Identify](/identify) found in the chart, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation.{{cite:bond-product}} See [Engage](/engage). Bond can also generate new leads: it sets up Meta and Google ad campaigns for your studies, and those leads flow into the same pre-screening and scheduling.{{cite:bond-product}}",
    },
    {
      q: "How does pricing compare?",
      a: "Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee, so part of its price depends on enrollment; see [pricing](/pricing).{{cite:bond-site,bond-product}} Alleviate's pricing is not publicly documented as of September 2026. Its website's calls to action are demo bookings, and a May 2026 job post refers to new studies added under master agreements.{{cite:alleviate-home-2026,alleviate-job-account-manager-2026}}",
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
      id: "bond-acrp-talk",
      title: "Modernizing Patient Recruitment: AI Tools, Workflows, and Outcomes",
      publisher: "Bond Health presentation to the ACRP New Jersey chapter (Goel R, Mustafa S)",
      year: "2026",
      note: "April 2026. Slides state \"1,000 patients screened in <2 hours\", \"Direct integrations with Google Sheets, CTMS, and Calendars\" and \"Flexible knowledge base for Voice Agents\".",
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
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request.",
    },
    {
      id: "alleviate-home-2026",
      title: "Alleviate Health homepage",
      publisher: "Alleviate Health",
      url: "https://alleviatehealth.care/",
      year: "2026",
      note: "Accessed September 21 to 23, 2026. Quotes: \"The AI Recruiter for Clinical Research. Human-in-the-loop AI workflows to help your team to make more powerful connections with participants while saving thousands of hours.\" \"SMS Conduct pre-screening conversations via SMS before booking an on-site visit or call with CRC.\" \"Warm-Transfer Pre-screen a patient via AI Voice Call before you transfer it to a human recruiter. Ideal for full medical history requirements.\" \"Voice-AI Pre-Screen participants via Voice AI before booking them for an on-site visit.\" \"Human-in-the-Loop: Built with a familiar look for recruiters to jump in at any point. With patients graduated to a human at the right moments.\" \"Conversationally outreach thousands of participants at a time with personalized dialogue to their specific situation.\" \"Our team advises you on the ideal Conversational AI workflow for your study.\" \"We then setup your study end-to-end with messaging optimized for your lead sources and indication.\" \"We continually optimize messaging, the AI model, and the chosen workflow for the highest conversion rates until study close-out.\" A \"Flu-Prevention 65+\" example is labeled \"New Facebook Leads\". The hero's example patient record lists \"Other trials the patient qualifies for\", and its example conversation ends with \"Escalated to human recruiter\". Its calls to action are \"Book a Demo\" links, and no pricing appears on the page.",
    },
    {
      id: "alleviate-launch-2025",
      title: "Alleviate Health launch press release",
      publisher: "Alleviate Health via Business Wire (Yahoo Finance)",
      url: "https://finance.yahoo.com/news/alleviate-health-backed-andreessen-horowitz-130000381.html",
      year: "2025",
      note: "Press release dated October 13, 2025; accessed September 23, 2026. Quotes: \"human-in-the-loop AI agents that engage patients 24/7 across SMS and Voice, verify eligibility against protocols, and book visits and calls. Alleviate brings in recruitment teams at the right moments\" and \"All of these interactions, along with patient preferences and medical data, are captured in a clinical-research specific CRM\".",
    },
    {
      id: "alleviate-privacy-2025",
      title: "Alleviate Health Privacy Policy",
      publisher: "Alleviate Health",
      url: "https://alleviatehealth.care/privacy",
      year: "2025",
      note: "Accessed September 22 and 23, 2026. Quote: \"Alleviate Health integrates with Google Workspace APIs only for functionality explicitly requested by users, such as calendar syncing or secure sign-in.\"",
    },
    {
      id: "alleviate-workflows-2026",
      title: "Alleviate Health Workflows page",
      publisher: "Alleviate Health",
      url: "https://alleviatehealth.care/workflows",
      year: "2026",
      note: "Accessed September 21 and 23, 2026. Quote: \"AI Workflows Coming soon - Detailed information about our AI workflows for clinical trial recruitment.\"",
    },
    {
      id: "cnbctv18-2025",
      title: "Profile of Alleviate Health co-founder Saathvik Boompelli",
      publisher: "CNBC TV18",
      url: "https://www.cnbctv18.com/business/startup/saathvik-boompelli-healthtech-startup-founder-andreessen-horowitz-funding-19714924.htm",
      year: "2025",
      note: "Published October 14, 2025; accessed September 23, 2026. Quote: \"Alleviate helps clinical research sites reach more patients by automating recruitment. Its AI-powered SMS and voice agents screen potential participants, connect qualified leads to recruiters, and update clinical trial management systems in real time.\"",
    },
    {
      id: "alleviate-job-engineer-2025",
      title: "Founding Engineer job posting",
      publisher: "Alleviate Health (Ashby job board)",
      url: "https://jobs.ashbyhq.com/alleviatehealth/eb87c8f4-5a49-42df-a220-d07002c3dc2a",
      year: "2025",
      note: "Posted October 13, 2025. Read September 22 and 23, 2026 through Ashby's public job-board feed (https://api.ashbyhq.com/posting-api/job-board/alleviatehealth) because the job page does not load as text. From its list of what its AI agents do: \"Intelligently screening & routing patients to the right trials.\" and \"Answering patients' questions perfectly and supporting them 24/7 throughout the trial - reducing costly drop-offs.\" Under \"What you might work on\": \"Training a proprietary ML model that matches detailed patient profiles to trials using real-world outcomes to learn what actually qualifies and enrolls patients.\"",
    },
    {
      id: "alleviate-job-bdr-2026",
      title: "Business Development Representative job posting",
      publisher: "Alleviate Health (Ashby job board)",
      url: "https://jobs.ashbyhq.com/alleviatehealth/0d5221bb-da66-481e-949e-75a8f7cb9b96",
      year: "2026",
      note: "Posted April 23, 2026. Read September 22 and 23, 2026 through Ashby's public job-board feed (https://api.ashbyhq.com/posting-api/job-board/alleviatehealth) because the job page does not load as text. Quotes: \"Our AI agents recruit, screen, and intelligently route patients across every trial a site is running\" and \"routing disqualified patients into the next-best protocol instead of losing them\".",
    },
    {
      id: "alleviate-job-account-manager-2026",
      title: "Account Manager job posting",
      publisher: "Alleviate Health (Ashby job board)",
      url: "https://jobs.ashbyhq.com/alleviatehealth/4d9bda63-06e6-419c-ba9b-61527c5da70a",
      year: "2026",
      note: "Posted May 3, 2026. Read September 22 and 23, 2026 through Ashby's public job-board feed (https://api.ashbyhq.com/posting-api/job-board/alleviatehealth) because the job page does not load as text. Quote: \"Drive expansion through new studies under master agreements, additional sites onboarded within networks, and adoption of new products, including AI voice, SMS, and more\".",
    },
    {
      id: "alleviate-job-ae-2026",
      title: "Account Executive job posting",
      publisher: "Alleviate Health (Ashby job board)",
      url: "https://jobs.ashbyhq.com/alleviatehealth/99b19820-4739-4138-ace6-a1a06280cfc3",
      year: "2026",
      note: "Posted January 7, 2026. Read September 22 and 23, 2026 through Ashby's public job-board feed (https://api.ashbyhq.com/posting-api/job-board/alleviatehealth) because the job page does not load as text. From its list of what its AI agents do: \"Answering patients' questions perfectly and supporting them 24/7 throughout the trial - reducing costly drop-offs.\"",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "All comparisons", href: "/compare", description: "How Bond compares with other recruitment tools and approaches." },
    { label: "Clinical trial recruitment software, compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, from EHR matching to media recruitment." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "How Bond's agents contact, pre-screen and schedule patients." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "What Bond reads in the chart and how each match is explained." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based platform fee plus a success fee per randomized patient." },
    { label: "Security", href: "/security", description: "HIPAA and SOC 2 Type I compliant, with BAAs, SSO, audit logging and a public Trust Center." },
  ],
};

export default page;
