import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/engage",
  category: "product",
  title: "Engage: AI voice and SMS trial pre-screening and scheduling",
  description:
    "Bond sets up Meta and Google ads for your studies, and its voice and SMS agents pre-screen and schedule every lead and EHR match, with AI disclosure built in.",
  keywords: [
    "AI voice agent clinical trial pre-screening",
    "SMS patient outreach clinical trials",
    "clinical trial visit scheduling automation",
    "TCPA AI voice calls healthcare",
  ],
  eyebrow: "Engage",
  h1: "Voice and SMS agents that pre-screen and schedule matched patients",
  intro:
    "Engage is the outreach stage of Bond Health. Voice and SMS agents contact the patients a site has approved for outreach, tell them AI assistance is being used, run a pre-screening script configured for the site and study, and book a screening visit into the site's calendar. Anything the script does not cover goes to a coordinator, and a patient can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}} For studies that need patients beyond the site's records, Bond also sets up Meta and Google ad campaigns, and those leads go to the same agents.{{cite:bond-product}}",
  summary:
    "Meta and Google ad campaigns plus voice and SMS agents that pre-screen every lead on the site's script, book visits and escalate to coordinators.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "what-engage-does",
      heading: "What does Engage do?",
      blocks: [
        {
          type: "p",
          text: "Engage starts from a list of patients who look eligible. With full EHR integration, that list comes from [Identify](/identify), ranked and shown with the chart evidence behind each match. For a pilot without EHR integration, the site can supply the list itself, for example in a Google Sheet. Bond's agents then work through the list by phone and text.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Disclose",
              text: "The patient is told that AI assistance is being used and can reach a person at any point: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Pre-screen",
              text: "The agent asks the questions in the site's approved script and records each answer. These are usually the criteria a chart cannot settle, such as current symptoms or whether the patient can make the visit schedule. Conversations run in the patient's preferred language, including English, Spanish, Mandarin and many others, and can switch languages mid-call.{{cite:bond-product}}",
            },
            {
              title: "Book the visit",
              text: "If the patient passes pre-screening and wants to go ahead, the agent books the screening visit into the site's calendar through a direct integration.{{cite:bond-site}}",
            },
            {
              title: "Escalate and hand off",
              text: "A request for a person, or any question the script does not cover, including questions about care, risks or whether to join, goes to a coordinator.{{cite:bond-site}}",
            },
          ],
        },
        {
          type: "p",
          text: "Voice and SMS outreach and scheduling are included in every engagement. [Implementation](/implementation) covers setup and [pricing](/pricing) covers fees.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "ads",
      heading: "Can Bond bring in new patients with Meta and Google ads?",
      blocks: [
        {
          type: "p",
          text: "Yes. Bond sets up Meta and Google ad campaigns for your studies. Leads from those ads flow straight into Bond's voice and SMS/text agents for pre-screening and scheduling, alongside the patients Bond finds in your EHR, so every lead gets the same script, the same AI disclosure and the same handoff to your coordinators.{{cite:bond-product}}",
        },
        {
          type: "ul",
          items: [
            "**One workflow for every source.** EHR matches, ad leads and lists the site already has go through the same pre-screening and scheduling, then on to [Consent](/consent) support.{{cite:bond-site,bond-product}}",
            "**Chart first, ads to fill the gap.** Patients the site already treats come with a chart that [Identify](/identify) checks against the protocol before anyone is contacted. Ads reach people the site has not seen, and the agents pre-screen them before a visit is booked.{{cite:bond-product}}",
            "**IRB review first.** Like any recruitment material, ad copy and landing pages need IRB review before they run. FDA's guidance on recruiting study subjects treats advertising as the start of informed consent.{{cite:fda-recruiting}}",
          ],
        },
      ],
    },
    {
      id: "why-outreach-stalls",
      heading: "Why does manual phone outreach stall?",
      blocks: [
        {
          type: "p",
          text: "Calling patients competes with every other coordinator task. Published studies show where it breaks down: patients do not pick up, first visits do not happen, and staff hours pile up before anyone enrolls.",
        },
        {
          type: "stats",
          items: [
            {
              value: "36%",
              label: "of pre-notified patients reached by phone in a Kaiser Permanente Southern California trial, with up to five attempts each",
              cite: "kpsc-recruitment",
            },
            {
              value: "45%",
              label: "of scheduled prospects attended their first visit at one Alzheimer's trial site recruiting online (2023)",
              cite: "ad-first-visit",
            },
            {
              value: "3.4 to 8.8",
              label: "staff hours to find, screen and enroll one patient at one cancer center, by study phase (2012)",
              cite: "penberthy-2012",
            },
            {
              value: "81%",
              label: "of hospice caregivers who enrolled 14 to 90 days into care did so within the first two calls",
              cite: "hospice-outreach",
            },
          ],
        },
      ],
    },
    {
      id: "scripts-and-irb",
      heading: "How is a script configured, approved and tested?",
      blocks: [
        {
          type: "p",
          text: "Site scripts and scheduling rules are configured per site and per study.{{cite:bond-site}} The site starts from language its IRB has already approved, or from Bond's [pre-screening call script](/templates/pre-screening-call-script) and [SMS templates](/templates/patient-outreach-sms-templates). Bond configures the agent to that text and to escalate anything the text does not cover.",
        },
        {
          type: "p",
          text: "FDA's guidance on recruiting study subjects treats recruitment advertising as the start of informed consent and asks the IRB to review both what it says and how it is delivered. For screening scripts, it asks the IRB to make sure sensitive answers are handled appropriately.{{cite:fda-recruiting}} ICH E6(R3) asks for documented IRB approval of recruitment procedures before a trial starts.{{cite:ich-e6r3}} Bond's [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach) is a starting point for the submission, which should cover:",
        },
        {
          type: "checklist",
          items: [
            "The voice script and every SMS message, word for word",
            "The AI disclosure line and how a patient reaches a person",
            "Which pre-screening answers are recorded, where they are stored and who can see them",
            "The contact window, the number of attempts and how opt-outs are handled",
            "Any translated version of the script, reviewed like the English one",
          ],
        },
        {
          type: "p",
          text: "ICH E6(R3) also expects computerized systems used in a trial to be fit for purpose, and the investigator stays responsible for work delegated to a service provider.{{cite:ich-e6r3}} Before the first live call, have the study team compare the configured script with the approved version, place test calls and texts, and confirm that escalations and opt-outs reach the right person.",
        },
        {
          type: "p",
          text: "After launch, Bond keeps improving outreach messaging until study close-out.{{cite:bond-product}} Wording changes to an approved script go back to the IRB before they run.",
        },
      ],
    },
    {
      id: "disclosure-tcpa-hipaa",
      heading: "How do AI disclosure, TCPA and HIPAA apply?",
      blocks: [
        { type: "h3", text: "Disclosure" },
        {
          type: "p",
          text: "As of September 2026, no federal rule specifically requires AI disclosure on calls: the FCC proposed an AI-call disclosure rule in August 2024 but had not finalized it.{{cite:fcc-24-84}} Some states do require it. Since January 1, 2026, Texas has required a provider that uses AI in relation to health care services to disclose that use to the patient in plain language.{{cite:tx-hb149}} California requires a disclaimer and a way to reach a human when generative AI writes patient messages about clinical information, unless a licensed provider reviews them; administrative matters such as appointment scheduling are excluded.{{cite:ca-ab3030}}",
        },
        { type: "h3", text: "TCPA" },
        {
          type: "p",
          text: "In February 2024 the FCC ruled that AI-generated voices are \"artificial\" voices under the TCPA, so these calls need the called party's prior express consent unless an emergency purpose or an exemption applies.{{cite:fcc-24-17}}",
        },
        {
          type: "p",
          text: "The healthcare exemption for calls and texts to cell phones is narrow: one message per day, no more than three per week, voice calls of one minute or less, texts of 160 characters or less, and an opt-out in every message.{{cite:ecfr-64-1200}} A pre-screening conversation rarely fits those limits, so the consent basis is a decision for the site and its counsel before outreach starts.",
        },
        {
          type: "p",
          text: "Since April 2025, patients can revoke consent by any reasonable means, and callers must honor it within 10 business days.{{cite:fcc-24-24}} CTIA's messaging principles, which carriers apply to business texting, call for honoring STOP and plain-language opt-outs with one final confirmation text.{{cite:ctia-messaging}} Texts from a standard 10-digit number also need brand and campaign registration before carriers will deliver them, so plan for it in the timeline.{{cite:tcr-10dlc}}",
        },
        { type: "h3", text: "HIPAA" },
        {
          type: "p",
          text: "Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Bond signs a business associate agreement with the site, encrypts data in transit and at rest, limits access by role and keeps an audit trail.{{cite:bond-site}} HIPAA's minimum necessary standard applies to business associates as well as covered entities.{{cite:ecfr-164-502}} In practice, a script should ask only what pre-screening needs, and a first text should not name a diagnosis, since anyone holding the phone can read it. The [IRB and HIPAA guide for patient outreach](/guides/irb-hipaa-patient-outreach) covers authorizations and waivers, and the [security](/security) page lists Bond's controls.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Not legal advice",
          text: "This summarizes the rules as of September 2026 and is not legal advice. More detail: [TCPA and AI outreach in 2026](/blog/tcpa-ai-outreach-2026).",
        },
      ],
    },
    {
      id: "contact-windows-and-retries",
      heading: "When does the agent call, and how many times?",
      blocks: [
        {
          type: "p",
          text: "The site decides the contact window, the number of attempts and the spacing between them, and they go into the IRB submission. Federal rules bar telephone solicitations before 8 a.m. or after 9 p.m. in the patient's local time. Informational research calls are generally not solicitations, but the same window is a sensible default.{{cite:ecfr-64-1200}}",
        },
        {
          type: "p",
          text: "Timing changes who picks up. In a pragmatic trial at three California health systems, calls placed between 8 and 10 a.m. and between 1 and 4 p.m. reached more patients, while opt-outs appeared higher for calls placed between 7 and 9 p.m.{{cite:acp-phone-outreach}}",
        },
        {
          type: "p",
          text: "On retries, the authors of the hospice studies above recommend calling at least twice and at different times of day. Their samples were small, so treat this as a direction, not a rule.{{cite:hospice-outreach}}",
        },
      ],
    },
    {
      id: "coordinator-view",
      heading: "What does the coordinator see?",
      blocks: [
        {
          type: "p",
          text: "Coordinators work from Bond's real-time dashboard, which tracks patients through the funnel: matched, contacted, pre-screened, consented and randomized. Status syncs to the site's CTMS or Google Sheet, and an audit trail supports compliance reporting.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "**Escalations.** Patients who asked for a person or asked something the script does not cover, routed to a coordinator.{{cite:bond-site}}",
            "**Booked visits.** Already in the site's calendar.",
          ],
        },
        {
          type: "p",
          text: "Bond's reports add time to enrollment and coordinator hours saved, and Bond's site cites a 3x contact rate for its outreach.{{cite:bond-site}} Contact rate and show rate come from the funnel counts, so each study can be measured against your site's own baseline.",
        },
        {
          type: "p",
          text: "Reminders before the screening visit also affect show rate. In a meta-analysis of routine clinic appointments, not research visits, patients who got text reminders attended 67% of the time against 54% without.{{cite:bmj-open-notifications}} Any reminder texts need the same IRB and TCPA review as the first outreach.",
        },
        {
          type: "callout",
          tone: "info",
          title: "A note on SMS read rates",
          text: "The widely repeated claim that 98% of texts are opened has no measured source, and standard SMS has no read tracking, according to one SMS vendor's review.{{cite:rally-sms-myth}} Track replies and booked visits instead.",
        },
      ],
    },
    {
      id: "after-enrollment",
      heading: "What do the agents do after a patient enrolls?",
      blocks: [
        {
          type: "p",
          text: "After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}} Like the reminders above, these messages need the same IRB and TCPA review as the first outreach.",
        },
      ],
    },
    {
      id: "manual-vs-bond",
      heading: "How does coordinator phone outreach compare with Bond's agents?",
      blocks: [
        {
          type: "table",
          caption: "Coordinator phone outreach vs Bond's voice and SMS agents",
          columns: ["Step", "Coordinator phone outreach", "Bond's voice and SMS agents"],
          rows: [
            ["First contact", "Calls fit between visits, data entry and monitoring", "Agents call and text the patients on the match list{{cite:bond-site}}"],
            ["Reach", "In one EHR-driven trial campaign, up to five call attempts reached about 36% of patients{{cite:kpsc-recruitment}}", "Voice and text on the same list; each study measures its own contact rate"],
            ["Volume", "Limited by coordinator hours", "Bond reports voice agents screening 1,000 patients in under 2 hours{{cite:bond-acrp-talk}}"],
            ["Script", "Each coordinator's version of the approved script", "One script configured per site and study, used on every call{{cite:bond-site}}"],
            ["Scheduling", "Coordinator checks the calendar and calls back", "Agent books into the site calendar through a direct integration{{cite:bond-site}}"],
            ["Hard questions", "Answered by whoever is on the call", "Escalated to a coordinator{{cite:bond-site}}"],
            ["Staff time", "3.4 to 8.8 staff hours per enrolled patient for manual screening at one cancer center (2012){{cite:penberthy-2012}}", "Coordinator time goes to escalations, consent and visits"],
            ["Record", "Call notes typed into the CTMS", "Status synced to the CTMS or Google Sheet, with an audit trail{{cite:bond-site}}"],
          ],
          note: "Manual figures come from published studies at other institutions. They describe the problem, not a Bond benchmark.",
        },
      ],
    },
    {
      id: "limits",
      heading: "What does Bond not do?",
      blocks: [
        {
          type: "ul",
          items: [
            "**It does not obtain consent.** [Consent](/consent) support helps patients understand the study. The site and PI still obtain consent.{{cite:bond-site}}",
            "**It does not decide eligibility.** Pre-screening answers narrow the list. The study team decides who screens and who enrolls.",
            "**It does not give medical advice.** Questions about care, risks or whether to join go to the study team.",
            "**It does not choose the TCPA consent basis or approve its own scripts.** The site's counsel and IRB do.",
            "**It does not guarantee that patients answer.** Contact rates still depend on the list, the population and the timing.",
            "**It does not replace coordinators.** Escalations, consent visits and the relationship with each patient stay with the site team.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Walk through your study's pre-screening questions, escalation rules and scheduling setup with the Bond team.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do patients know they are talking to an AI?",
      a: "Yes. Patients are told that AI assistance is being used, and they can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Can we use the pre-screening script our IRB already approved?",
      a: "Yes. Scripts are configured per site and study, so the agent can run language your IRB has approved.{{cite:bond-site}} FDA asks IRBs to review how recruitment material is delivered as well as what it says, so tell your IRB that an AI agent will deliver the script, even if the words stay the same.{{cite:fda-recruiting}}",
    },
    {
      q: "Does Engage need EHR integration?",
      a: "No. A pilot can run from a list the site provides, with setup in under 2 weeks. Full EHR integration through Identify takes 4 to 6 weeks, depending on the EHR, IT review and interface method.{{cite:bond-site}}",
    },
    {
      q: "What should happen when a patient opts out?",
      a: "Outreach to that patient should stop. Under FCC rules a revocation can come in any reasonable form, not only the word STOP, and must be honored within 10 business days.{{cite:fcc-24-24}} CTIA's messaging principles call for one final confirmation text.{{cite:ctia-messaging}} Agree during setup where opt-outs are recorded so no one on the team calls that patient again.",
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
      publisher: "Goel R, Mustafa S. ACRP New Jersey chapter presentation",
      year: "2026",
      note: "Chapter presentation by R. Goel and S. Mustafa; source of the voice-agent throughput figure.",
    },
    {
      id: "kpsc-recruitment",
      title: "Sociodemographic characteristics of patients throughout the recruitment process into a randomized, controlled behavioral trial",
      publisher: "Trials (Springer Nature), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12625122/",
      year: "2025",
      note: "Kaiser Permanente Southern California physical activity trial for adults with diabetes or prediabetes, 2020 to 2023; patients found through the EHR were sent an email or letter, then called. Recruiters reached 4,033 of 11,152 by phone with up to five attempts. The 36% is computed from the reported counts.",
    },
    {
      id: "ad-first-visit",
      title: "Initial evaluation rate invariance for Alzheimer's Disease drug trials after first appointment modification",
      publisher: "PubMed Central (open-access journal article)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11713465/",
      year: "2025",
      note: "Single site, 4,043 prospects from online advertising scheduled in 2023.",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice (ASCO), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "VCU Massey Cancer Center; hours include time spent on patients who were never enrolled.",
    },
    {
      id: "hospice-outreach",
      title: "Establishing Initial Guidelines for Hospice Caregiver Outreach and Recruitment",
      publisher: "Innovation in Aging (Oxford University Press), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12763059/",
      year: "2025",
      note: "Conference abstract (Innovation in Aging) pooling two US hospice intervention studies: 1,312 calls; 144 of 461 eligible caregivers enrolled. The 81% is 90 of 111 caregivers who enrolled 14 to 90 days after start of care. The authors recommend \"calling at least twice\" and \"having the flexibility to call at all times of the day.\"",
    },
    {
      id: "acp-phone-outreach",
      title: "Telephone Outreach Enhances Recruitment of Underrepresented Seriously Ill Patients for an Advance Care Planning Pragmatic Trial",
      publisher: "Journal of General Internal Medicine, via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10271940/",
      year: "2023",
    },
    {
      id: "bmj-open-notifications",
      title: "Using digital notifications to improve attendance in clinic: systematic review and meta-analysis",
      publisher: "BMJ Open, via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5093388/",
      year: "2016",
    },
    {
      id: "rally-sms-myth",
      title: "98% SMS Open Rates Are a Myth",
      publisher: "Rally Corp (blog)",
      url: "https://www.rallycorp.com/blog/90-sms-open-rates-are-a-myth",
      year: "2026",
      note: "Industry critique by an SMS vendor, published February 10, 2026: \"Email has tracking pixels. SMS does not.\"",
    },
    {
      id: "fcc-24-17",
      title: "Declaratory Ruling, Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts (FCC 24-17)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      year: "2024",
    },
    {
      id: "fcc-24-84",
      title: "Notice of Proposed Rulemaking and Notice of Inquiry, Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts (FCC 24-84)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-84A1.pdf",
      year: "2024",
    },
    {
      id: "fcc-24-24",
      title: "Report and Order and Further Notice of Proposed Rulemaking, Rules and Regulations Implementing the Telephone Consumer Protection Act of 1991 (FCC 24-24)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf",
      year: "2024",
      note: "Adopted February 15, 2024; revocation rules effective April 11, 2025.",
    },
    {
      id: "ctia-messaging",
      title: "Messaging Principles and Best Practices, May 2023",
      publisher: "CTIA",
      url: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf",
      year: "2023",
      note: "Industry best practices that wireless carriers apply to business (A2P) texting.",
    },
    {
      id: "ecfr-64-1200",
      title: "47 CFR 64.1200, Delivery restrictions",
      publisher: "Legal Information Institute, Cornell Law School (eCFR text)",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      year: "2025",
    },
    {
      id: "tcr-10dlc",
      title: "The Campaign Registry",
      publisher: "The Campaign Registry (TCR)",
      url: "https://www.campaignregistry.com/",
      year: "2026",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
    },
    {
      id: "ich-e6r3",
      title: "Guideline for Good Clinical Practice E6(R3)",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
    },
    {
      id: "tx-hb149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
    },
    {
      id: "ca-ab3030",
      title: "AB-3030 Health care services: artificial intelligence",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3030",
      year: "2024",
    },
    {
      id: "ecfr-164-502",
      title: "45 CFR 164.502(b), Minimum necessary",
      publisher: "eCFR (Office of the Federal Register / GPO)",
      url: "https://www.ecfr.gov/current/title-45/section-164.502",
      year: "2026",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Where the match list that Engage works from comes from." },
    { label: "Consent: AI-powered informed consent support", href: "/consent", description: "What happens after the screening visit is booked." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A starting script to adapt and submit to your IRB." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "Text messages with disclosure and opt-out language." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Authorizations, waivers and what the IRB reviews." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
  ],
};

export default page;
