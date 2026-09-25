import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/templates/patient-outreach-sms-templates",
  category: "template",
  title: "Clinical trial recruitment text message templates",
  description:
    "Fifteen editable texts for trial outreach, follow-up, reminders, reschedules, no-shows and opt-outs, with Spanish versions, character counts and TCPA notes.",
  keywords: [
    "clinical trial recruitment text message templates",
    "SMS templates for clinical trial recruitment",
    "IRB-approved patient outreach text messages",
    "TCPA opt-out language for healthcare texts",
    "Spanish clinical trial recruitment texts",
  ],
  eyebrow: "Template",
  h1: "Patient outreach SMS templates for clinical trials",
  intro:
    "These are the texts a research site or practice sends when it contacts its own patients about a study: first contact, follow-up, booking, reminders, reschedules, missed visits and opt-outs. Each one shows its character count, and the core messages are also written in Spanish. Send none of them until your IRB has approved the exact wording.",
  summary: "Fifteen editable outreach texts, from first contact to opt-out, with Spanish versions and TCPA notes.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "Download the Word file",
    href: "/downloads/patient-outreach-sms-templates.docx",
    secondaryLabel: "Book a demo",
    secondaryHref: "/book-a-demo",
  },
  sections: [
    {
      id: "what-the-templates-are-for",
      heading: "What are these text message templates for?",
      blocks: [
        {
          type: "p",
          text: "Use them when a site or practice texts its own patients about a study it runs, from first contact through booking, reminders, missed visits, opt-outs and HELP replies. They are not public advertising, and they do not replace the [pre-screening call](/templates/pre-screening-call-script) that follows a yes.",
        },
        {
          type: "p",
          text: "Plan texts alongside phone calls, not instead of them. Many patients never answer the study team's call, and text reminders have held up in randomized trials.",
        },
        {
          type: "stats",
          items: [
            {
              value: "36%",
              label: "of pre-notified patients that recruiters reached by phone, with up to five attempts, in a Kaiser Permanente trial campaign (2020 to 2023)",
              cite: "kpsc-recruitment",
            },
            {
              value: "67% vs 54%",
              label: "clinic attendance with digital appointment notifications vs none, in a 2016 meta-analysis",
              cite: "bmj-open-notifications",
            },
            {
              value: "11.7% vs 10.2%",
              label: "missed appointments after text vs phone reminders in a Geneva primary care randomized trial, a difference that was not statistically significant",
              cite: "geneva-sms-rct",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Why there is no open-rate figure here",
          text: "Rally, an SMS vendor, calls the often-quoted 98% text open rate \"a behavioral guess that got marketed like a scientific fact\" and notes that SMS has no built-in way to report opens.{{cite:rally-sms-myth}} Track replies, booked visits and opt-outs instead.",
        },
        {
          type: "download",
          label: "Patient outreach SMS templates (Word)",
          href: "/downloads/patient-outreach-sms-templates.docx",
          format: "Word document (.docx), editable",
          note: "Every template on this page, plus the IRB checklist and the TCPA table.",
        },
      ],
    },
    {
      id: "how-to-use",
      heading: "How should you adapt and send them?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Fill every placeholder",
              text: "Replace each bracketed placeholder. [Practice name] is the patient's own practice, which sends first contact; [Site name] is the research site that books visits. They may be the same.",
            },
            {
              title: "Recount the characters",
              text: "Counts include the placeholders, so recount after filling them in. The TCPA healthcare exemption generally limits texts to 160 characters;{{cite:ecfr-64-1200}} if a filled reminder runs over, shorten the address or site name.",
            },
            {
              title: "Set the sequence",
              text: "Decide how many texts, how far apart and in what hours. One first-contact text and one follow-up is a sensible ceiling before a person calls.",
            },
            {
              title: "Get the wording approved",
              text: "Submit the exact wording to your IRB, Spanish included. Later changes go back to the IRB.",
            },
            {
              title: "Register the sending number",
              text: "As of September 2026, texts from a standard 10-digit number need your brand and campaign verified through The Campaign Registry, via your texting vendor, before they are allowed to send.{{cite:tcr-10dlc}}",
            },
            {
              title: "Log every reply",
              text: "Record every reply with its date, and apply each opt-out to every research outreach list.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Leave the diagnosis out of the first text",
          text: "Lock screens show previews, and phones are shared. HIPAA's minimum necessary standard requires reasonable efforts to limit protected health information to what the purpose needs.{{cite:ecfr-164-502}} The first-contact texts name the condition only after the patient replies.",
        },
      ],
    },
    {
      id: "first-contact-texts",
      heading: "What should the first-contact texts say?",
      blocks: [
        {
          type: "p",
          text: "Send these only to patients identified through a pathway your IRB and privacy office approved; the [IRB and HIPAA guide](/guides/irb-hipaa-patient-outreach) explains the options.",
        },
        {
          type: "table",
          caption: "First contact, follow-up and replies",
          columns: ["#", "When to send", "Message", "Characters"],
          rows: [
            [
              "E1",
              "First contact, sent by staff",
              "[Practice name]: Dr. [Last name]'s office invites some patients to learn about a research study. Reply YES if interested or NO if not. Reply STOP to opt out.",
              "157",
            ],
            [
              "E2",
              "First contact, sent by an automated or AI system",
              "[Practice name]: An AI assistant is texting for Dr. [Last name]'s office about a research study. Reply YES to learn more, CALL for a person, STOP to opt out.",
              "157",
            ],
            [
              "E3",
              "Patient replied YES",
              "Thanks. The [Study name] research study is testing [an investigational medicine] for [condition] and involves [number] visits over [time]. Joining is your choice and does not affect your care. Book a call: [link] or reply CALL. Reply STOP to opt out.",
              "250",
            ],
            [
              "E4",
              "No reply after [number] business days; send once",
              "[Practice name]: Following up about a research study at Dr. [Last name]'s office. Reply YES to learn more or NO if not interested. Reply STOP to opt out.",
              "153",
            ],
            [
              "E5",
              "Patient replied NO",
              "Thanks for letting us know. We won't contact you about this study again. Your care at [Practice name] is not affected.",
              "118",
            ],
          ],
          note: "Counts are for the text as written, placeholders included. E3 answers the patient's own reply and runs longer; split it into two texts if your platform or IRB prefers.",
        },
        {
          type: "p",
          text: "FDA says recruitment material should not call a test article a \"new treatment\" without saying it is investigational, should not promise \"free medical treatment\", and should not emphasize payment.{{cite:fda-recruiting}} Consent must be sought in a way that minimizes coercion or undue influence, so E3 says joining is the patient's choice.{{cite:ecfr-50-20}}",
        },
      ],
    },
    {
      id: "scheduling-and-reminders",
      heading: "Which texts cover booking, reminders and missed visits?",
      blocks: [
        {
          type: "p",
          text: "In a randomized trial at a Geneva primary care clinic, text reminders worked about as well as phone reminders at a small fraction of the cost.{{cite:geneva-sms-rct}}",
        },
        {
          type: "table",
          caption: "Booking, reminders, reschedules and missed visits",
          columns: ["#", "When to send", "Message", "Characters"],
          rows: [
            [
              "E6",
              "Visit booked",
              "[Site name]: Research visit booked [Day, Date], [Time], [Address]. Reply C to confirm, R to reschedule. Questions: [phone]. Reply STOP to opt out.",
              "146",
            ],
            [
              "E7",
              "Day before the visit",
              "[Site name] reminder: research visit tomorrow, [Day] at [Time], [Address]. [Prep note.] Questions: [phone]. Reply STOP to opt out.",
              "130",
            ],
            [
              "E8",
              "Patient replied R",
              "[Site name]: Open times are [Option A], [Option B] or [Option C]. Reply A, B or C, or call [phone] for another time. Reply STOP to opt out.",
              "139",
            ],
            [
              "E9",
              "Missed visit; send once",
              "[Site name]: We missed you at today's research visit. To rebook, reply YES or call [phone]. No reply needed if you'd rather not. Reply STOP to opt out.",
              "151",
            ],
          ],
          note: "Use the prep note for one practical instruction from the protocol, such as bringing a medication list. After a reschedule, send E6 again with the new time.",
        },
        {
          type: "p",
          text: "When a patient answers E6, treat YES, Y, C and CONFIRM as a confirmation, and route any reply the platform does not recognize to a coordinator.",
        },
        {
          type: "p",
          text: "Missed first visits are common: at one Alzheimer's trial site recruiting through online ads in 2023, only 45.0% of scheduled prospects attended their first scheduled appointment.{{cite:ad-first-visit}} E9 keeps the door open without pressure.",
        },
      ],
    },
    {
      id: "opt-outs-and-help",
      heading: "How should opt-outs and HELP replies be handled?",
      blocks: [
        {
          type: "table",
          caption: "Opt-out confirmation and HELP reply",
          columns: ["#", "When to send", "Message", "Characters"],
          rows: [
            [
              "E10",
              "Any opt-out reply; send once, right away",
              "[Site name]: You're unsubscribed from [program name] texts and won't get more messages. Your care is not affected.",
              "114",
            ],
            [
              "E11",
              "Patient replied HELP",
              "[Site name] research study texts. Help: [phone] or [email]. Up to [number] msgs/week. Msg & data rates may apply. Reply STOP to opt out.",
              "136",
            ],
          ],
        },
        {
          type: "p",
          text: "These rules come from the FCC's TCPA regulations and CTIA's voluntary messaging principles (May 2023 edition).{{cite:ecfr-64-1200,ctia-messaging}}",
        },
        {
          type: "ul",
          items: [
            "**Any reasonable wording counts.** STOP, QUIT, END, CANCEL, UNSUBSCRIBE and similar words are opt-outs, and so is any reply a reasonable person would read as one.{{cite:ecfr-64-1200}} Treat ALTO, PARAR or BAJA the same way.",
            "**Confirm once, then stop.** One confirmation with no promotional content is allowed, and one sent within five minutes is presumed to fall within consent.{{cite:ecfr-64-1200}} CTIA also calls for no messages after it.{{cite:ctia-messaging}}",
            "**Honor it fast.** The limit is 10 business days, or immediately for texts sent under the healthcare exemption.{{cite:ecfr-64-1200}}",
            "**Plan for revoke-all.** As of September 2026, the FCC has delayed to January 31, 2027 the rule that makes an opt-out from one type of message revoke consent for the sender's unrelated robocalls and robotexts.{{cite:da-26-12}} If the practice also texts clinical reminders, decide with counsel how a research STOP applies.",
            "**Answer HELP.** E11 repeats the five items CTIA asks a recurring program's opt-in confirmation to include: program name, customer care contact, how to opt out, message frequency and any charges.{{cite:ctia-messaging}}",
          ],
        },
      ],
    },
    {
      id: "spanish-versions",
      heading: "What are the Spanish versions?",
      blocks: [
        {
          type: "p",
          text: "The core messages use the formal usted form. Have a qualified translator check them for your community, and accept SI, SÍ and YES as the same reply.",
        },
        {
          type: "table",
          caption: "Spanish versions of the core messages",
          columns: ["#", "Matches", "Message", "Characters"],
          rows: [
            [
              "S1",
              "E1, first contact",
              "[Consultorio]: El consultorio de su médico, [Dr./Dra. Apellido], invita a algunos pacientes a conocer un estudio de investigación. ¿Le interesa? Responda SÍ o NO. Responda STOP para no recibir más mensajes.",
              "206",
            ],
            [
              "S2",
              "E6, visit booked",
              "[Centro]: Su cita del estudio de investigación es el [día, fecha] a las [hora] en [dirección]. Responda C para confirmar o R para cambiar la cita. Preguntas: [teléfono]. Responda STOP para no recibir más mensajes.",
              "213",
            ],
            [
              "S3",
              "E7, day before the visit",
              "[Centro]: Le recordamos su cita del estudio de investigación mañana, [día], a las [hora] en [dirección]. Preguntas: [teléfono]. Responda STOP para no recibir más mensajes.",
              "171",
            ],
            [
              "S4",
              "E10, opt-out confirmation",
              "[Centro]: Cancelamos su suscripción a los mensajes de [programa]. No recibirá más mensajes. Esto no afecta su atención médica.",
              "126",
            ],
          ],
          note: "Spanish runs longer than English. S1 to S3 exceed 160 characters as written; trim them with your translator if you need to stay under the limit.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Accents change the segment math",
          text: "A GSM-7 text fits 160 characters in one segment. Characters outside GSM-7 switch the text to UCS-2 encoding: 70 characters in one segment, or 67 per segment when split.{{cite:twilio-sms-length}} The á, í and ó in these texts are outside GSM-7, so each Spanish text sends as several segments. The exemption's limit is stated in characters, not segments.{{cite:ecfr-64-1200}}",
        },
      ],
    },
    {
      id: "irb-and-tcpa",
      heading: "What needs IRB approval, and where does the TCPA apply?",
      blocks: [
        {
          type: "p",
          text: "FDA treats recruitment advertising as the start of informed consent and expects the IRB to review what it says and how it is delivered.{{cite:fda-recruiting}} ICH E6(R3) asks for documented IRB approval of recruitment procedures before the trial starts.{{cite:ich-e6r3}}",
        },
        { type: "h3", text: "What to send the IRB" },
        {
          type: "checklist",
          items: [
            "Every message, word for word, in every language",
            "The sequence: how many texts, how far apart, in what hours",
            "Who sends them, and how the first text discloses automation",
            "How patients were identified, and the HIPAA basis",
            "Where replies are stored and who can see them",
            "How opt-outs are recorded and carried over",
          ],
        },
        { type: "h3", text: "The TCPA healthcare exemption" },
        {
          type: "table",
          caption: "Conditions of the healthcare exemption for texts to cell phones, and how the templates handle them",
          columns: ["Condition in 47 CFR 64.1200(a)(9)", "How the templates handle it"],
          rows: [
            ["Not charged to the patient or counted against their plan limits", "Confirm with your texting vendor; E11's \"Msg & data rates may apply\" line does not fit an exempt program"],
            ["Sent only to the number the patient provided", "Use the number on record; never buy or append numbers"],
            ["Provider name and contact information in each message", "E6 to E9 open with the site name and include [phone]"],
            ["Listed purposes only, such as appointment confirmations and reminders", "E6 and E7 fit most clearly; first-contact texts are not on the list"],
            ["No telemarketing, advertising or billing content", "None in any template"],
            ["Concise texts, generally 160 characters or fewer", "E6 to E9 fit as written; recount once placeholders are filled"],
            ["One message a day, three a week at most", "Set in your sequence plan"],
            ["A reply-STOP opt-out in each message, honored immediately", "Outreach and reminder templates end with the STOP line"],
          ],
          note: "Paraphrased from 47 CFR 64.1200(a)(9) and (a)(9)(iv).{{cite:ecfr-64-1200}} Whether research visit reminders qualify is a question for counsel.",
        },
        {
          type: "p",
          text: "Texts outside the exemption, including first contact, need their own legal basis, such as the patient's prior express consent; settle it with counsel. Telephone solicitations are barred before 8 a.m. or after 9 p.m. local time, a sensible window for research texts too.{{cite:ecfr-64-1200}}",
        },
        {
          type: "p",
          text: "If AI sends or answers the texts, use E2. Since January 1, 2026, Texas has required a provider that uses AI in relation to health care services or treatment to disclose it to the patient in clear, plain language.{{cite:tx-hb149}} [TCPA and AI outreach in 2026](/blog/tcpa-ai-outreach-2026) covers other rules.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Not legal advice",
          text: "Federal rules as of September 2026. State laws vary; have counsel review your consent basis and opt-out process.",
        },
      ],
    },
    {
      id: "how-bond-uses-them",
      heading: "How does Bond relate to these templates?",
      blocks: [
        {
          type: "p",
          text: "Bond Health's [Engage](/engage) stage runs voice and SMS outreach, pre-screening and scheduling for research sites. Scripts are configured per site and study, so a site can load the wording its IRB approved. Patients are told AI assistance is used and can reach a person at any time through a live transfer to a coordinator or a human callback, whichever the site prefers, and conversations can be escalated to a coordinator.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "The [templates](/templates) page has the rest of the set, including the [pre-screening call script](/templates/pre-screening-call-script) and [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach).",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See Bond's SMS agent send outreach texts, book a visit and escalate to a coordinator.",
          secondaryLabel: "Read about Engage",
          secondaryHref: "/engage",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can we send these texts without IRB approval?",
      a: "Not for recruitment. FDA expects IRB review of recruitment material and its delivery, and ICH E6(R3) asks for documented approval before the trial starts.{{cite:fda-recruiting,ich-e6r3}}",
    },
    {
      q: "What should happen when a patient replies STOP?",
      a: "Stop all research texts to that number and send one confirmation, such as E10. A confirmation sent within five minutes is presumed to fall within consent, and opt-outs must be honored within 10 business days at most.{{cite:ecfr-64-1200}}",
    },
    {
      q: "Can an AI system send these texts?",
      a: "Yes, if your IRB approves it, your consent basis covers it and the first text says so, as E2 does. Bond tells patients AI assistance is used, and they can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Do the Spanish versions need IRB review?",
      a: "Yes. Submit them with the English versions and note who translated and checked them.",
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
      id: "kpsc-recruitment",
      title: "Sociodemographic characteristics of patients throughout the recruitment process into a randomized, controlled behavioral trial",
      publisher: "Trials (Springer Nature), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12625122/",
      year: "2025",
      note: "Kaiser Permanente Southern California; recruiters reached 4,033 of 11,152 pre-notified patients by phone with up to five attempts over two weeks. The 36% is computed from the reported counts.",
    },
    {
      id: "bmj-open-notifications",
      title: "Using digital notifications to improve attendance in clinic: systematic review and meta-analysis",
      publisher: "BMJ Open, via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5093388/",
      year: "2016",
    },
    {
      id: "geneva-sms-rct",
      title: "Text-messaging versus telephone reminders to reduce missed appointments in an academic primary care clinic: a randomized controlled trial",
      publisher: "BMC Health Services Research, via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3623700/",
      year: "2013",
      note: "6,450 patients at Geneva University Hospitals, 2010 to 2011; difference not statistically significant (p = 0.07). The authors conclude text reminders are equivalent and more cost-effective. Reminder costs were EUR 230 for texts and EUR 8,910 for calls over the trial.",
    },
    {
      id: "ad-first-visit",
      title: "Initial evaluation rate invariance for Alzheimer's Disease drug trials after first appointment modification",
      publisher: "PubMed Central (open-access journal article)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11713465/",
      year: "2025",
      note: "Single site, 4,043 prospects from online advertising scheduled in 2023. Quote: \"Only 45.0% attended their first scheduled appointment.\"",
    },
    {
      id: "rally-sms-myth",
      title: "98% SMS Open Rates Are a Myth",
      publisher: "Rally Corp (blog)",
      url: "https://www.rallycorp.com/blog/90-sms-open-rates-are-a-myth",
      year: "2026",
      note: "Industry critique by an SMS vendor, published February 10, 2026. Quote: \"Email has tracking pixels. SMS does not.\"",
    },
    {
      id: "ecfr-64-1200",
      title: "47 CFR 64.1200, Delivery restrictions",
      publisher: "Legal Information Institute, Cornell Law School (eCFR text)",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      year: "2025",
      note: "Not-charged condition at (a)(9); healthcare exemption conditions at (a)(9)(iv)(A) to (H); revocation of consent at (a)(10); opt-out confirmation text at (a)(12); calling hours at (c)(1).",
    },
    {
      id: "da-26-12",
      title: "Order extending limited waiver of section 64.1200(a)(10) (DA 26-12)",
      publisher: "Federal Communications Commission, Consumer and Governmental Affairs Bureau",
      url: "https://docs.fcc.gov/public/attachments/DA-26-12A1.pdf",
      year: "2026",
    },
    {
      id: "ctia-messaging",
      title: "Messaging Principles and Best Practices",
      publisher: "CTIA",
      url: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf",
      year: "2023",
      note: "May 2023 edition. Describes itself as \"a set of voluntary best practices developed by CTIA's member companies.\" Opt-in confirmation contents at 5.1.2.1; one final opt-out confirmation at 5.1.3.",
    },
    {
      id: "tcr-10dlc",
      title: "The Campaign Registry",
      publisher: "The Campaign Registry (TCR)",
      url: "https://www.campaignregistry.com/",
      year: "2026",
    },
    {
      id: "twilio-sms-length",
      title: "How long can a message be?",
      publisher: "Twilio Docs (glossary)",
      url: "https://www.twilio.com/docs/glossary/what-sms-character-limit",
      year: "2026",
      note: "Quote: \"If your message includes a UCS-2 character like an emoji or a Chinese hanzi, SMS switches to the UCS-2 encoding. This reduces the character length limit of the message to 70 characters: 140 bytes divided by two-bytes per character.\" Also: \"To include characters from extended Latin or non-Latin scripts requires the two-byte Universal Coded Character Set (UCS-2) encoding.\" and \"GSM-7 messages contain 153 alphanumeric characters. UCS-2 encoded messages contain 67 Unicode characters.\" Accessed September 22, 2026.",
    },
    {
      id: "ecfr-164-502",
      title: "45 CFR 164.502, Uses and disclosures of protected health information: general rules (minimum necessary)",
      publisher: "eCFR (Office of the Federal Register / GPO)",
      url: "https://www.ecfr.gov/current/title-45/section-164.502",
      year: "2026",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Information sheet, January 1998; content current as of 2018.",
    },
    {
      id: "ecfr-50-20",
      title: "21 CFR 50.20, General requirements for informed consent",
      publisher: "eCFR (Office of the Federal Register / GPO)",
      url: "https://www.ecfr.gov/current/title-21/section-50.20",
      year: "2026",
    },
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice, final version adopted 6 January 2025",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Section 2.4.2 on documented IRB/IEC approval of participant recruitment procedures.",
    },
    {
      id: "tx-hb149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act (enrolled), Business & Commerce Code Sec. 552.051",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
    },
  ],
  related: [
    { label: "Engage: voice and SMS agents", href: "/engage", description: "How Bond's voice and SMS agents handle outreach, pre-screening, scheduling and escalation." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact a patient, and what the IRB must see first." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "The phone conversation that follows a YES." },
    { label: "TCPA and AI outreach in 2026", href: "/blog/tcpa-ai-outreach-2026", description: "What the FCC's rules mean for automated calls and texts." },
    { label: "All templates", href: "/templates", description: "Feasibility, pre-screening, vendor evaluation, IRB language and chart review." },
  ],
};

export default page;
