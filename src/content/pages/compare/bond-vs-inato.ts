import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";

const page: SeoPage = {
  path: "/compare/bond-vs-inato",
  category: "comparison",
  title: "Inato alternative: EHR screening, outreach and consent",
  description:
    "Bond finds eligible patients in your EHR, then contacts, pre-screens and schedules them by voice and text and supports consent. See how it compares with Inato.",
  keywords: [
    "Inato alternative",
    "Bond Health vs Inato",
    "Inato AI patient pre-screening",
    "AI chart review for clinical trials",
    "EHR patient identification for clinical trials",
    "voice and SMS pre-screening for clinical trials",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs Inato",
  intro:
    "Inato runs an AI-powered platform that brings trial sponsors and research sites together for early planning and site selection, and it offers sites AI patient pre-screening that reviews patient records against a trial's inclusion and exclusion criteria.{{cite:inato-home-2026,inato-ehr-2025}} Bond Health finds eligible patients in a site's own EHR, including clinical notes, then contacts, pre-screens and schedules them by voice and text and supports informed consent, with chart evidence behind every match.{{cite:bond-site}} For a site that wants one platform to carry each eligible patient from the chart to a booked visit and consent, Bond is the stronger choice.",
  summary:
    "Why sites choose Bond over Inato: EHR screening plus voice and text outreach, scheduling, consent support and pricing tied to randomized patients.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over Inato?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond finds eligible patients in the site's own EHR, then contacts, pre-screens and schedules them by voice and text and supports informed consent in one workflow, with chart evidence behind every match.{{cite:bond-site}}",
        },
        {
          type: "stats",
          items: [
            { value: "10,000+", label: "charts screened per hour against each protocol's criteria", cite: "bond-site" },
            { value: "3x", label: "contact rate with Bond's voice and SMS/text outreach", cite: "bond-site" },
            { value: "90%+", label: "completion rate with Bond's informed consent support", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**Outreach that starts from the chart.** Bond's voice and SMS/text agents contact, pre-screen and schedule the patients [Identify](/identify) finds. They start from what Identify found in the chart, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation. Bond's site cites a 3x contact rate.{{cite:bond-site,bond-product}} Voice and text outreach is not publicly documented in Inato's materials (September 2026); its eClinPro integration passes ready-to-screen patients to that CTMS to manage outreach and next steps.{{cite:inato-eclinpro-2026}}",
            "**Consent support in the same workflow.** Bond explains the consent form in plain language, answers patient questions and escalates to staff, and it checks the patient's understanding of key points and keeps an auditable record for the site. Bond's site cites 90%+ completion, and the site and PI obtain consent. See [Consent](/consent).{{cite:bond-site,bond-product}} Informed consent support is not publicly documented in Inato's materials (September 2026).",
            "**Every chart, every open study.** Bond screens 10,000+ charts per hour, reading clinical notes, prescriptions and lab results, and ranks matches with the evidence behind them.{{cite:bond-site}} Identify also uses imaging data and pathology, radiology and molecular reports, and Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**Conversations in the patient's language, with a person on request.** Voice and text conversations and consent Q&A run in the patient's preferred language, including English, Spanish, Mandarin and many others, and can switch languages mid-call. Patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-product}}",
            "**Support until close-out.** After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out, and Bond keeps improving outreach messaging until study close-out.{{cite:bond-product}}",
            "**Ads when you need more patients.** Bond sets up Meta and Google ad campaigns for your studies, and those leads flow straight into Bond's voice and SMS/text agents for pre-screening and scheduling, alongside patients found in your EHR. Like any recruitment material, ad copy needs IRB review before it runs.{{cite:bond-product}}",
            "**Integration handled for you, priced per randomized patient.** Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, and Bond's team handles the integration end to end. Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee, and the success fee is paid only for randomized patients. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
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
      heading: "How do Bond and Inato compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Bond entries come from Bond's own materials. Each Inato entry carries the year of its source. \"Not publicly documented\" means we found no public description as of September 2026, not that the capability does not exist; ask Inato directly.",
        },
        {
          type: "table",
          caption: "Bond Health and Inato, from public materials reviewed in September 2026",
          columns: ["Capability", "Bond Health", "Inato"],
          rows: [
            [
              "What it is",
              "One platform that automates EHR screening, patient outreach and consent tracking in one workflow, with no manual handoffs and complete visibility from first match to signed consent.{{cite:bond-site}}",
              "An AI-powered platform that brings sponsors and research sites together. Sponsors use it for early planning and site selection; sites use it to apply for sponsor trials and to pre-screen patients with AI (2026).{{cite:inato-home-2026,inato-sites-2026}}",
            ],
            [
              "Contacting patients",
              "Voice and SMS/text agents contact the patients Identify finds and can explain why each patient was contacted. Bond's site cites a 3x contact rate. Patients are told AI is used and can reach a person at any time.{{cite:bond-site,bond-product}}",
              "Not publicly documented (September 2026). Its eClinPro integration sends ready-to-screen patients to eClinPro \"to easily manage outreach and next steps\", and its CRIO sync updates patient eligibility in CRIO's CTMS (2026).{{cite:inato-eclinpro-2026,inato-crio-2026}}",
            ],
            [
              "Pre-screening",
              "Chart criteria are checked in the EHR first. The agents then pre-screen by voice or text, skipping questions the chart already answers, and can book a visit in the same conversation. Bond's voice agents screened 1,000 patients in under 2 hours.{{cite:bond-site,bond-product,bond-acrp-talk}}",
              "AI patient pre-screening assesses patient records against each inclusion and exclusion criterion and gives an explanation and a source for each one. Site staff review the assessment and make the final call on who moves to screening (2025 and 2026).{{cite:inato-ehr-2025,inato-prescreening-faq-2026}}",
            ],
            [
              "Scheduling",
              "The agents can book a visit in the same conversation as the pre-screen, and Bond integrates directly with calendars.{{cite:bond-product,bond-acrp-talk}}",
              "Not publicly documented (September 2026).",
            ],
            [
              "Informed consent",
              "[Consent support](/consent) with plain-language explanations, patient Q&A and staff escalation. It checks the patient's understanding of key points, keeps an auditable record and runs in the patient's preferred language. Bond's site cites 90%+ completion. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
              "Not publicly documented (September 2026).",
            ],
            [
              "Support after enrollment",
              "The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out. Reminders can go by text, voice or email.{{cite:bond-product}}",
              "Not publicly documented (September 2026).",
            ],
            [
              "New patients from ads",
              "Bond sets up Meta and Google ad campaigns for your studies, and those leads flow straight into the same agents for pre-screening and scheduling.{{cite:bond-product}}",
              "Not publicly documented (September 2026).",
            ],
            [
              "Finding eligible patients in the chart",
              "LLM-based screening of the site's own EHR at 10,000+ charts per hour, reading clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports. Ranked matches come with evidence and traceability.{{cite:bond-site,bond-product}}",
              "Sites upload PDF patient records or import patients from a connected EHR or CTMS. Inato says its AI understands unstructured data in patient notes as well as handwriting, and it ranks patients from most to least likely to qualify (2025 and 2026).{{cite:inato-prescreening-2026,inato-ehr-2025,inato-launch-2025}}",
            ],
            [
              "Screening across studies",
              "Screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
              "Assesses patients against all of a site's active trials, including trials a site adds by NCT ID, and tracks each candidate across studies (2025 and 2026).{{cite:inato-ehr-2025,inato-crio-2026,inato-prescreening-faq-2026,inato-prescreening-2026}}",
            ],
            [
              "EHR and CTMS integrations",
              "All the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR and HL7 or an aggregator. [CRIO Certified Partner](/integrations/crio), with direct integrations with CTMS, calendars and Google Sheets.{{cite:bond-site,bond-product,bond-acrp-talk}}",
              "Connectors for athenahealth, ModMed, eClinicalWorks, AdvancedMD, Office Ally, Epic, Practice Fusion and NextGen Enterprise, plus two-way syncs with the CRIO and eClinPro site CTMS. Its site also shows a CRIO Certified Partner badge (2026).{{cite:inato-connections-2026,inato-sites-2026}}",
            ],
            [
              "Pricing",
              "A volume-based platform fee plus a success fee per randomized patient, with no integration fee. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
              "Its pre-screening page says the tool is free for all sites today (2026). A 2024 Inato blog post says Inato is always free for sites and generates revenue from participating sponsors. Sponsor pricing: not publicly documented (September 2026).{{cite:inato-prescreening-faq-2026,inato-free-2024}}",
            ],
          ],
        },
        {
          type: "p",
          text: "Both products read unstructured chart data against a protocol and explain each decision.{{cite:bond-site,inato-ehr-2025}} Bond then carries each patient through outreach, pre-screening, scheduling and consent support in the same workflow. See [Identify](/identify), [Engage](/engage) and [Consent](/consent).{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "known-for",
      heading: "Can Bond do what Inato is known for?",
      blocks: [
        {
          type: "p",
          text: "Inato's website, blog and support pages emphasize AI chart review that explains each eligibility decision, assessing every patient against all of a site's trials, reading unstructured notes, and connecting to the EHR and CTMS systems sites already use.{{cite:inato-ehr-2025,inato-crio-2026,inato-connections-2026}} Here is how Bond covers each one.",
        },
        {
          type: "ul",
          items: [
            "**Chart review that explains each decision.** Inato's AI assesses patient records against each inclusion and exclusion criterion and gives an explanation and a source for each one.{{cite:inato-ehr-2025}} Bond's [Identify](/identify) screens the site's own EHR against each protocol's criteria at 10,000+ charts per hour and ranks matches with the evidence and traceability behind them, for fewer screen failures.{{cite:bond-site}}",
            "**Every patient, every trial.** Inato assesses patients against all of a site's active trials.{{cite:inato-crio-2026}} Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**Unstructured notes.** Inato says its AI understands unstructured data in patient notes.{{cite:inato-ehr-2025}} Bond reads clinical notes, prescriptions and lab results, and Identify also uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
            "**Connections to the systems sites already use.** Inato lists EHR connectors that include Epic, athenahealth and eClinicalWorks, and two-way syncs with the CRIO and eClinPro site CTMS.{{cite:inato-connections-2026}} Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR. It is a [CRIO Certified Partner](/integrations/crio) and integrates directly with CTMS and calendars, and Bond's team handles the integration end to end, with no integration fee.{{cite:bond-site,bond-product,bond-acrp-talk}}",
          ],
        },
        {
          type: "p",
          text: "From there, Bond's voice and SMS/text agents contact, pre-screen and schedule the patients it finds, and Bond supports informed consent in the same workflow. See [Engage](/engage) and [Consent](/consent).{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "evaluate",
      heading: "How can you test Bond against Inato on your own data?",
      blocks: [
        {
          type: "p",
          text: "Bond welcomes a head-to-head pilot. A demo shows the interface, not results on your patients, so give both tools the same protocol and the same patients, then compare the results side by side.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Pick one protocol",
              text: "Choose a study where coordinators already know who enrolled, who screen-failed and why, and set it up in both tools.",
            },
            {
              title: "Use the same patients",
              text: "Run both tools on the same patient records, from the same EHR or the same export, so the chart comparison stays like for like.",
            },
            {
              title: "Compare evidence quality",
              text: "For each patient a tool marks as likely eligible, check the chart evidence behind each criterion and how long a coordinator needs to confirm it. Include borderline cases, so easy cases do not hide errors in hard ones.",
            },
            {
              title: "Measure contact rate and time to first visit",
              text: "Track how many eligible patients are reached, how many pass pre-screening, and the days from match to a completed screening visit, whichever tool or team makes the contact.",
            },
            {
              title: "Read the conversations",
              text: "Audit Bond's call and text transcripts for AI disclosure, handoffs to staff and opt-outs. Confirm that each patient agreed to be contacted by text or phone (see [TCPA](/glossary/tcpa)) and that your IRB reviewed the scripts; the [guide to IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach) covers the details.",
            },
            {
              title: "Compare cost per randomized patient",
              text: "Add up each option's fees and the coordinator hours spent on chart review, outreach, scheduling and consent, then divide by the patients randomized. Bond's success fee is paid only for randomized patients; see [pricing](/pricing).{{cite:bond-site,bond-product}}",
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
          text: "Bring one protocol. We will show how Bond screens the chart, contacts and schedules eligible patients and supports consent, with the evidence behind every match.",
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
          text: "Bond Health wrote this page in September 2026. Statements about Inato come only from public sources read on September 24, 2026: Inato's website, its pre-screening and site support pages, its blog and a press release, each cited with its year. Statements about Bond come from Bond's website, product information from Bond Health and an April 2026 presentation to the ACRP New Jersey chapter. We did not test Inato's product and used no private or internal information about Inato. Where Inato's materials are silent on a capability, we say it is not publicly documented rather than guess. Bond Health is not affiliated with or endorsed by Inato.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, including anything about Inato, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a good Inato alternative?",
      a: "Yes, for a site that wants software to take eligible patients from the chart to a booked visit and consent. Bond screens the site's EHR, including clinical notes, with chart evidence behind each match, then contacts, pre-screens and schedules patients by voice and text and supports informed consent, with no integration fee and a success fee per randomized patient.{{cite:bond-site,bond-product}} Bond also screens each patient against every open study at the site, and after enrollment its agents send visit reminders, book transportation, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
    },
    {
      q: "Does Inato contact or schedule patients?",
      a: "Patient outreach, scheduling and consent support are not publicly documented in Inato's materials as of September 2026, so ask Inato directly. Its AI patient pre-screening assesses patient records against a trial's criteria for site staff to review, and its eClinPro integration sends ready-to-screen patients to eClinPro \"to easily manage outreach and next steps\".{{cite:inato-ehr-2025,inato-eclinpro-2026}} Bond's voice and SMS/text agents contact, pre-screen and schedule patients, and Bond's site cites a 3x contact rate. See [Engage](/engage).{{cite:bond-site}}",
    },
    {
      q: "How does pricing compare?",
      a: "Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee, and the success fee is paid only for randomized patients; see [pricing](/pricing).{{cite:bond-site,bond-product}} Inato's pre-screening page says the tool is free for all sites today, and a 2024 Inato blog post says the company generates revenue from participating sponsors.{{cite:inato-prescreening-faq-2026,inato-free-2024}} When you compare, include the coordinator time each option needs for outreach, scheduling and consent as well as the fees.",
    },
    {
      q: "Does Bond work with the EHR and CTMS we already use?",
      a: "Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR.{{cite:bond-product}} It is a CRIO Certified Partner, listed by CRIO under Patient Acquisition & Retention, and integrates directly with CTMS, calendars and Google Sheets.{{cite:bond-site,bond-acrp-talk}} Bond's team handles the integration end to end, and full EHR integration takes 48 hours. Bond signs BAAs and supports SSO and audit logging; see [security](/security).{{cite:bond-site}}",
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
      id: "inato-home-2026",
      title: "Inato homepage",
      publisher: "Inato",
      url: "https://www.inato.com/",
      year: "2026",
      note: "Accessed September 24, 2026. Quote: \"Inato unites sponsors, research sites, and patients through one AI-powered platform, expanding access, increasing efficiency, and bringing life-changing treatments to more communities around the world.\" The platform section has three tabs, \"Early planning\", \"Site selection\" and \"AI Pre-screening\", with the lines \"Optimize across your portfolio with insights from sites who can deliver on your trials.\" and \"Reduce site burden and accelerate patient enrollment by using AI to automate chart review and pre-screening.\"",
    },
    {
      id: "inato-sites-2026",
      title: "Inato for sites",
      publisher: "Inato",
      url: "https://www.inato.com/for-sites",
      year: "2026",
      note: "Accessed September 24, 2026. Quotes: \"Apply for top-sponsor trials that match your site's strengths, boosting patient access.\" \"Shape your site's trial pipeline, highlight its unique strengths, and easily apply for studies with top sponsors, all while reducing burden.\" \"Spend less time reviewing charts and more time enrolling.\" \"Proudly partnered with CRIO\", shown with a CRIO Certified Partner badge. Under \"Connect your current workflow with Inato\", the page shows logos for Athena Health, Mod Med, CRIO, eClinicalWorks, Advanced MD, Office Ally, eClinPro CTMS, Practice Fusion and Epic.",
    },
    {
      id: "inato-prescreening-2026",
      title: "AI Patient Pre-Screening",
      publisher: "Inato",
      url: "https://www.inato.com/patient-pre-screening",
      year: "2026",
      note: "Accessed September 24, 2026. Under \"How do you want to upload patients?\" the page lists \"Upload PDF patient records\", \"Import patients from EHR\" and \"Import patients from CTMS\". Quotes: \"Designed around your workflow. Connect your EHR or CTMS, or simply upload PDFs.\" \"Track every candidate across studies, ranked by eligibility. Connect your CTMS for a fully streamlined workflow that lets site staff focus on the patients who matter.\"",
    },
    {
      id: "inato-prescreening-faq-2026",
      title: "Pre-screening sign-up page and FAQ",
      publisher: "Inato",
      url: "https://marketplace.inato.com/prescreening",
      year: "2026",
      note: "Accessed September 24, 2026. The page's button reads \"Start pre-screening for free\". Quotes from its FAQ: \"Is this really free? Yes, today, this is free for all sites\"; \"Can I use this across all my trials?\" is answered with \"You can easily create a trial from outside Inato within the tool. If you have the NCT ID number of the trial, we'll auto-pull the IE criteria for you.\"; and the AI section says \"you review the AI assessment for each IE criteria to make the final call on whether to move the patient to screening.\"",
    },
    {
      id: "inato-ehr-2025",
      title: "Inato and your EHR: level up your patient pre-screening process with an EHR integration today",
      publisher: "Inato blog",
      url: "https://www.inato.com/blogs/ehr-integration",
      year: "2025",
      note: "Published November 14, 2025; accessed September 24, 2026. Quotes: \"The AI analyzes patient records against the full list of inclusion and exclusion criteria for all relevant trials at a site and provides an explanation and a source for each criterion\" \"Unlike standard EHR queries, which rely on structured data, our tool can understand unstructured data in patient notes to determine whether or not a patient meets the diagnostic and demographic criteria for a trial.\" \"Get a prioritized list of pre-screened patients, from most likely to least likely to qualify\" \"We already support several of the top EHR providers, including eClinicalWorks, ModMed, Athenahealth, and Practice Fusion\" \"Inato will handle the technical build of the integration and send instructions to your team to connect on the back end when the time comes.\"",
    },
    {
      id: "inato-launch-2025",
      title: "Inato Launches AI-Powered Patient Pre-Screening to Reduce Site Burden and Accelerate Enrollment",
      publisher: "Inato via PR Newswire",
      url: "https://www.prnewswire.com/news-releases/inato-launches-ai-powered-patient-pre-screening-to-reduce-site-burden-and-accelerate-enrollment-302361384.html",
      year: "2025",
      note: "Press release dated January 28, 2025; accessed September 24, 2026. Quotes: \"Beginning today, research sites across the United States can use Inato's AI-enabled patient pre-screening feature to significantly streamline patient identification and review\", \"with no EMR or CTMS integration required.\" \"This blend of models is capable of sophisticated medical reasoning and deduction, time-bound assessments, and understanding handwriting.\" From its About section: \"The global technology company combines trial planning, site selection, and patient pre-screening into a single AI-enabled platform to transform the way research sites, sponsors, and CROs work together to advance medical research.\"",
    },
    {
      id: "inato-crio-2026",
      title: "Inato Integrates With CRIO's Site CTMS to Simplify Patient Screening",
      publisher: "Inato blog",
      url: "https://www.inato.com/blogs/inato-integrates-with-crios-site-ctms-to-simplify-patient-screening",
      year: "2026",
      note: "Published July 21, 2026; accessed September 24, 2026. Quotes: \"Inato's AI patient pre-screening now connects with CRIO's Site CTMS through a two-way sync, helping sites track, manage, and enroll trial participants with far less manual work.\" The sync involves \"assessing patients for active studies, and updating patient eligibility in CRIO's CTMS to help sites manage next steps.\" \"CRIO users can now assess all patients for all active trials using Inato's AI patient pre-screening.\"",
    },
    {
      id: "inato-eclinpro-2026",
      title: "Inato Integrates With eClinPro To Streamline Patient Screening and Enrollment",
      publisher: "Inato blog",
      url: "https://www.inato.com/blogs/inato-integrates-with-eclinpro-to-streamline-patient-screening-and-enrollment",
      year: "2026",
      note: "Published April 15, 2026; accessed September 24, 2026. Quotes: \"Inato's AI patient pre-screening now integrates with eClinPro's Site CTMS, creating one streamlined workflow for sites to easily move patients from identification to enrollment.\" \"Send ready-to-screen patients on to eClinPro with a single click to easily manage outreach and next steps\" Its assessments cover \"both structured and unstructured data in the patient record\". \"If you're not yet an Inato user, you can sign up here for free.\"",
    },
    {
      id: "inato-connections-2026",
      title: "Inato Site Support: connections",
      publisher: "Inato",
      url: "https://support.inato.com/connections",
      year: "2026",
      note: "Accessed September 24, 2026. Quote: \"Integrate your EHR, CTMS, or bulk data exports directly into the platform\". Connectors listed: Athena, ModMed, CRIO, eClinicalWorks, AdvancedMD, Office Ally, Epic, eClinPro, Practice Fusion and NextGen Enterprise. The CRIO and eClinPro entries describe a \"two-way sync\"; the eClinPro steps end with \"Inato will complete the setup so you can start using the two-way sync.\"",
    },
    {
      id: "inato-free-2024",
      title: "Disrupting Clinical Trials with Inato's Free Marketplace for Sites",
      publisher: "Inato blog",
      url: "https://blog.inato.com/blog/disrupting-clinical-trials-with-inatos-free-marketplace-for-sites",
      year: "2024",
      note: "Published January 25, 2024; accessed September 24, 2026. Quotes: \"Sponsors post trials: Inato collaborates closely with sponsors to post trials on the marketplace, which all sites can browse.\" \"Liz emphasized that there is no catch: Inato is always free for sites. (To understand this works, check out the recording where Liz shared more details on how they generate revenue from participating sponsors.)\"",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "All comparisons", href: "/compare", description: "How Bond compares with other recruitment tools and approaches." },
    { label: "Clinical trial recruitment software, compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, from EHR matching to engagement agents." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "What Bond reads in the chart and how each match is explained." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "How Bond's agents contact, pre-screen and schedule patients." },
    { label: "Pricing", href: "/pricing", description: "A volume-based platform fee plus a success fee per randomized patient, with no integration fee." },
    { label: "Security", href: "/security", description: "BAAs, SSO, audit logging and a public Trust Center." },
  ],
};

export default page;
