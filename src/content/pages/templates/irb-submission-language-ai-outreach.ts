import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/templates/irb-submission-language-ai-outreach",
  category: "template",
  title: "IRB language template for AI recruitment outreach",
  description:
    "Model IRB paragraphs for AI-assisted EHR pre-screening, voice and SMS outreach, data security and consent support, citing HIPAA, 45 CFR 46 and 21 CFR 50/56.",
  keywords: [
    "IRB language AI recruitment outreach template",
    "IRB submission AI voice agent",
    "preparatory to research EHR pre-screening",
    "partial waiver of authorization recruitment",
    "AI disclosure clinical trial outreach",
  ],
  eyebrow: "Template",
  h1: "IRB submission language for AI-assisted outreach",
  intro:
    "Model paragraphs for the recruitment section of an IRB protocol when software screens the EHR and an AI voice or text assistant contacts patients. Each part names the rule it answers to and uses [bracketed placeholders] for site, study and vendor details. Adapt it to your IRB's forms and policies before you submit, because it is a starting draft and not legal advice.",
  summary: "Model protocol paragraphs for AI EHR pre-screening, voice and SMS outreach, data security and consent support.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "Read the IRB and HIPAA guide",
    secondaryHref: "/guides/irb-hipaa-patient-outreach",
  },
  sections: [
    {
      id: "what-it-covers",
      heading: "What is this template for?",
      blocks: [
        {
          type: "p",
          text: "Most sites already have an approved recruitment plan for coordinators who review charts and make calls. Adding AI changes two things the IRB will ask about: software now reads the records, and an automated assistant may make first contact. This template gives you draft language for both, plus the data handling and consent paragraphs that usually follow. For the rules behind it, read the guide to [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
        },
        {
          type: "p",
          text: "FDA treats recruitment advertising as the start of the informed consent and subject selection process, and expects the IRB to review both what the material says and how it is communicated.{{cite:fda-recruiting}} A call or text thread run by software is also a mode of communication, so expect the IRB to review its script like any other recruitment material.",
        },
        {
          type: "table",
          caption: "What each part of the template covers",
          columns: ["Template part", "Where it usually goes", "Rules it answers to"],
          rows: [
            [
              "A. AI-assisted EHR pre-screening",
              "Recruitment plan, HIPAA section, waiver request",
              "45 CFR 164.512(i), 45 CFR 46.116(g), FDA informed consent guidance{{cite:ecfr-164-512,ecfr-46-116,fda-ic-2023}}",
            ],
            [
              "B. AI voice and SMS outreach",
              "Recruitment plan, with scripts attached as recruitment materials",
              "21 CFR 56.109 and 56.111, FDA recruiting guidance, TCPA rules (47 CFR 64.1200) and the FCC's AI voice ruling, state AI disclosure laws{{cite:ecfr-56-109,ecfr-56-111,fda-recruiting,cfr-47-64-1200,fcc-24-17,ca-ab3030,tx-hb149}}",
            ],
            [
              "C. Data security and pre-screening data",
              "Privacy and confidentiality section",
              "HIPAA business associate and minimum necessary rules, NIH screening guidance, ICH E6(R3){{cite:ecfr-160-103,ecfr-164-502,nih-irbo,ich-e6r3}}",
            ],
            [
              "D. AI consent support",
              "Consent process section",
              "21 CFR 50.20, ICH E6(R3){{cite:ecfr-50-20,ich-e6r3}}",
            ],
          ],
        },
      ],
    },
    {
      id: "how-to-use",
      heading: "How do you use this template?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Check which rules apply",
              text: "FDA-regulated studies follow 21 CFR 50 and 56. Federally funded research, and institutions that apply the Common Rule to all studies, follow 45 CFR 46. HIPAA governs the records whenever a covered entity, such as a hospital or medical practice, holds them. Keep the paragraphs that match your study and delete the rest.",
            },
            {
              title: "Choose one HIPAA path for the records review",
              text: "Paragraph A.2 offers a [review preparatory to research](/glossary/preparatory-to-research) or a [partial waiver of authorization](/glossary/waiver-of-authorization). Your privacy officer or privacy board decides which fits, and what covers the first contact with each patient.",
            },
            {
              title: "Replace every bracket",
              text: "Fill in site, study, vendor and contact details. Where the template offers choices separated by a slash, keep one and delete the others.",
            },
            {
              title: "Attach the scripts",
              text: "Submit the full voice script and every text message as recruitment materials, with version numbers. The paragraphs describe the process. The scripts are what patients hear and read. The [pre-screening call script](/templates/pre-screening-call-script) and [SMS templates](/templates/patient-outreach-sms-templates) are starting points.",
            },
            {
              title: "Match your IRB's form",
              text: "Most IRBs use a fixed protocol template or an electronic form. Paste each paragraph into the matching field instead of submitting this page as a separate document.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Not legal advice",
          text: "This is model language. No IRB has reviewed or approved it. Local IRB policy, state law and sponsor requirements can all change what you need to say. Review the final text with your IRB office and privacy officer, and with counsel for anything involving calls and texts.",
        },
        {
          type: "download",
          label: "IRB submission language for AI-assisted outreach (Word)",
          href: "/downloads/irb-submission-language-ai-outreach.docx",
          format: "Word document (.docx), editable",
        },
      ],
    },
    {
      id: "ehr-pre-screening",
      heading: "What language describes AI-assisted EHR pre-screening?",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "How to fill in Part A",
          text: "Use A.1 in every submission. Choose Option 1 or Option 2 in A.2. In A.3, keep the paragraph for your study's regulatory framework and keep the equitable selection paragraph in all cases.",
        },
        { type: "h3", text: "A.1 Identification of potential participants" },
        {
          type: "p",
          text: "Potential participants will be identified by review of electronic health records (EHR) at [site name]. [Vendor name], acting as a business associate of [covered entity] under a business associate agreement, will use software that includes large language models to compare structured data (such as diagnoses, medications and laboratory results) and clinical notes against the inclusion and exclusion criteria in [protocol section]. For each patient, the software lists the criteria it assessed and the record evidence it relied on. The software does not decide eligibility. [Role, e.g., the study coordinator], listed as study staff on this protocol, reviews each flagged record and decides whether the patient may be contacted. The review is limited to patients [seen at (clinics) between (date) and (date) / with (diagnosis or visit criteria)], and only the data elements needed to assess the study criteria will be used.",
        },
        { type: "h3", text: "A.2 HIPAA basis for the records review" },
        {
          type: "p",
          text: "**Option 1, review preparatory to research.** The review will be conducted under 45 CFR 164.512(i)(1)(ii). The investigator represents that use of protected health information (PHI) is sought solely to review PHI as necessary to prepare a research protocol or for similar purposes preparatory to research (here, identifying potential participants); that no PHI will be removed from [covered entity] in the course of the review; and that the PHI reviewed is necessary for the research purposes.{{cite:ecfr-164-512}} [Vendor name] processes the records on behalf of [covered entity] under its business associate agreement. [Confirm with your privacy officer that this arrangement meets the no-removal representation. This provision covers the review itself, so describe separately what basis covers contacting patients.]",
        },
        {
          type: "p",
          text: "**Option 2, partial waiver of authorization.** We request a partial waiver of HIPAA authorization under 45 CFR 164.512(i)(1)(i), limited to identifying potential participants and using their name and contact information to contact them about this study. Authorization for study participation will be obtained together with informed consent, as 45 CFR 164.508(b)(3) permits.{{cite:ecfr-164-508}} The waiver meets the criteria in 45 CFR 164.512(i)(2)(ii).{{cite:ecfr-164-512}} (1) The use involves no more than minimal risk to privacy: identifiers are held in access-controlled systems, used only by study staff and [vendor name] under a business associate agreement, and destroyed [timepoint], and PHI will not be reused or disclosed to any other person or entity except as required by law, for authorized oversight of this research, or for other research for which the Privacy Rule would permit the use or disclosure. (2) The research could not practicably be conducted without the waiver, because [asking each patient for authorization before knowing whether they may be eligible is not practicable]. (3) The research could not practicably be conducted without access to the PHI, because [eligibility depends on diagnoses, medications and results that exist only in the medical record].",
        },
        { type: "h3", text: "A.3 Consent for pre-screening" },
        {
          type: "p",
          text: "**Common Rule studies.** We ask the IRB to approve obtaining information for screening, recruiting or determining eligibility without informed consent under 45 CFR 46.116(g). Study staff, and [vendor name] acting for [covered entity] as described in A.1 and Part B, will access existing records and communicate with prospective participants [by phone and text message] for these purposes only.{{cite:ecfr-46-116}}",
        },
        {
          type: "p",
          text: "**FDA-regulated studies.** The records review captures only the information needed to judge potential eligibility and to contact the patient. FDA guidance treats this kind of preliminary records review as preparation for a clinical investigation that does not require informed consent under FDA regulations.{{cite:fda-ic-2023}} The pre-screening questions in Appendix [X] ask only for information that is not in the record and is needed to judge potential eligibility, such as [examples]. [Describe how agreement or consent is obtained before these questions are asked, as your IRB requires. FDA guidance says consent may be required before collecting information the record does not contain.]{{cite:fda-ic-2023}} Any procedure performed solely to determine eligibility, including medication washout, will take place only after informed consent.{{cite:fda-screening-tests}}",
        },
        {
          type: "p",
          text: "**Equitable selection.** The criteria configured in the software are taken from [protocol section] and were reviewed by [PI name] before use. The study team will review [a sample of records the software did not flag / reasons patients screened out] [frequency] to check that the software is not systematically excluding eligible patients. Changes to the configured criteria will be submitted to the IRB [as an amendment / as IRB policy requires].{{cite:ecfr-56-111}}",
        },
      ],
    },
    {
      id: "voice-and-sms-outreach",
      heading: "What language describes AI voice and SMS outreach?",
      blocks: [
        { type: "h3", text: "B.1 Who makes contact and how" },
        {
          type: "p",
          text: "Potential participants approved for contact by the study team will be contacted by [phone call / text message / both] from [site name]. Contact will be made by an automated assistant that uses artificial intelligence (AI) to hold a spoken or text conversation, operated by [vendor name] on behalf of [site name]. Required statements (the AI disclosure, the study description, the voluntariness statement, the recording notice and the opt-out instructions) are delivered as written in the IRB-approved script in Appendix [X]. The assistant asks only the pre-screening questions listed in that script and answers logistics questions only from the IRB-approved study information sheet. Questions about medical care, risks, or whether to take part are referred to study staff. [If a letter or portal message from the treating clinician comes first, describe it here and attach it.]",
        },
        { type: "h3", text: "B.2 Disclosure that the caller is AI" },
        {
          type: "p",
          text: "At the start of every call and every text message, the assistant states that it is an automated assistant using AI, calling or writing on behalf of [site name] and [PI name]'s research team, and explains how to reach a staff member. Voice calls repeat the disclosure at the end. Before giving any study details on a call, the assistant confirms it is speaking with the intended person [by (verification method)]. Voicemails give only the patient's first name, the site name, the AI disclosure and a callback number, and texts do not name a sensitive condition. The assistant does not claim to be a person and does not describe itself as a nurse, doctor or other licensed professional.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Why the disclosure is written this way",
          text: "As of September 2026, California requires health facilities, clinics and physician offices that use generative AI for patient communications about clinical information to include an AI disclaimer and instructions for reaching a human: at the start of each written message, and at the start and end of a call. Messages a licensed provider reads and reviews are exempt, and administrative matters such as scheduling are excluded.{{cite:ca-ab3030}} California also bars AI systems from using terms that imply care or advice comes from a licensed person.{{cite:ca-ab489}} Since January 1, 2026, Texas has required licensed providers that use AI in health care services or treatment to disclose it clearly and in plain language.{{cite:tx-hb149}} Whether a recruitment call falls under these laws is a question for counsel. Writing to the strictest reading keeps one script usable across states.",
        },
        { type: "h3", text: "Appendix [X]: required statements, sample wording" },
        {
          type: "script",
          lines: [
            {
              speaker: "First text",
              text: "[Site name] research team: this is an automated assistant using AI. We are inviting some patients to learn about a research study on [condition, or a general description if the condition is sensitive]. Reply YES to learn more, CALL to have a staff member call you, or STOP to opt out. Questions: [phone number].",
            },
            {
              speaker: "Each later text",
              text: "[Site name] research team (automated AI assistant): [message]. Reply CALL to reach staff or STOP to opt out.",
            },
            {
              speaker: "Assistant",
              text: "Hello, this is an automated assistant using AI, calling for [site name] on behalf of [PI name]'s research team. May I speak with [patient first name]?",
            },
            { speaker: "Patient", text: "Speaking." },
            {
              speaker: "Assistant",
              text: "Thank you. [To make sure I have the right person, can you confirm your (verification item)?] This call is about a research study, not about your regular care. [This call is recorded.] You can ask to speak with a staff member at any time, or ask us not to contact you again. Is now a good time to talk for about [number] minutes?",
            },
            { speaker: "Patient", text: "What is this about?" },
            {
              speaker: "Assistant",
              text: "[Site name] is looking for people who may be able to take part in a research study about [condition]. Taking part is voluntary, and deciding not to will not change your care at [site name]. I can ask a few questions to see if you might qualify, or I can have a staff member call you back.",
            },
            { speaker: "Patient", text: "I would rather talk to a person." },
            {
              speaker: "Assistant",
              text: "Of course. A member of the study team will call you back [timeframe] at this number. Is this the best number to reach you?",
            },
            {
              speaker: "Assistant (closing)",
              text: "Thank you. As a reminder, you spoke with an automated AI assistant for [site name]. To reach the study team directly, call [phone number]. If you do not want more calls or texts about this study, tell me now, or reply STOP to any text.",
            },
            {
              speaker: "Voicemail",
              text: "This is an automated assistant using AI, calling for the [site name] research team with a message for [patient first name]. Please call us back at [phone number]. Again, this was an automated AI assistant for [site name].",
            },
          ],
        },
        { type: "h3", text: "B.3 Escalation to study staff" },
        {
          type: "p",
          text: "The assistant hands the conversation to study staff, or books a staff callback, when the person asks for a human, asks a question outside the approved script, reports a medical problem, seems distressed, or gives an answer the protocol flags for staff review. If a person describes an emergency, the assistant tells them to call 911 [or the local emergency number] and alerts [role] at once. Study staff review each escalation [timeframe] during business hours and record the outcome.",
        },
        { type: "h3", text: "B.4 Opting out and contact limits" },
        {
          type: "p",
          text: "Every text message explains how to opt out by replying STOP. A person may also opt out by any reasonable means, including saying so on a call, replying to a text in their own words, or telling any staff member. Opt-out requests are recorded and honored within [timeframe, not to exceed ten business days], and the person is not contacted again about this study [or about other studies, if site policy requires].{{cite:cfr-47-64-1200}} A person will be contacted no more than [number] times by [channel] over [period], and only between [start time] and [end time] in their local time zone.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Before the first call",
          text: "In February 2024 the FCC ruled that AI-generated voices count as an \"artificial or prerecorded voice\" under the TCPA, so these calls need the called person's prior express consent unless an emergency purpose or exemption applies.{{cite:fcc-24-17}} Ask counsel which consent basis covers your first call or text, and whether a letter or portal message from the treating clinician should come first.",
        },
        { type: "h3", text: "B.5 Recording and transcripts" },
        {
          type: "p",
          text: "[Choose one.] Calls are recorded and transcribed. / Calls are transcribed but not recorded. / Calls are not recorded, and only the answers to the pre-screening questions are stored. [If recorded or transcribed:] The person is told at the start of the call. Recordings and transcripts are stored in [system], can be accessed only by [roles], and are deleted [timepoint]. They are used only to document the pre-screening conversation, to review escalations and to check the assistant's performance.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Before you choose a recording option",
          text: "Call recording consent rules differ by state. Check them with counsel for every state your patients live in, and make sure the script's recording notice matches the option you keep.",
        },
        { type: "h3", text: "B.6 Content of messages" },
        {
          type: "p",
          text: "Scripts and messages state that the study is research, name the condition under study, summarize the main eligibility criteria and the time commitment, and give contact details. They do not state or imply that the study drug or device is safe or effective, do not call it a new treatment without saying it is investigational, and do not emphasize payment.{{cite:fda-recruiting}}",
        },
      ],
    },
    {
      id: "data-security",
      heading: "What language describes data security and pre-screening data?",
      blocks: [
        { type: "h3", text: "C.1 Data handling" },
        {
          type: "p",
          text: "[Vendor name] is a business associate of [covered entity] and handles PHI only under a signed business associate agreement.{{cite:ecfr-160-103}} Data is encrypted in transit and at rest [standard, e.g., AES-256]. Access is limited by role to [roles] and requires [single sign-on / multi-factor authentication]. The system keeps an audit log of who viewed or changed each record. Staff and software use and request only the minimum PHI needed for each step.{{cite:ecfr-164-502}}",
        },
        {
          type: "p",
          text: "**AI model processing.** [Describe where the AI models run, whether PHI leaves (vendor name)'s environment, and whether any model provider may retain or train on the data. Ask your vendor for this in writing before you submit.]",
        },
        { type: "h3", text: "C.2 Pre-screening data" },
        {
          type: "p",
          text: "Answers to pre-screening questions are stored in [system] and used only to decide whether to invite the person to a screening visit. For people who do not qualify or who decline, identifiable pre-screening information is [destroyed (timeframe) / kept in a screening log limited to (data elements) under (HIPAA authorization / the waiver approved for this study)]. Counts of people contacted, pre-screened and referred, without identifiers, are kept for recruitment reporting.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Why C.2 asks you to choose",
          text: "NIH's Office of Human Subjects Research Protections says that for people found ineligible, identifiable data collected before consent cannot be kept.{{cite:nih-irbo}} ICH E6(R3), meanwhile, lists records of recruitment and pre-trial screening among essential records.{{cite:ich-e6r3}} Decide with your IRB which identifiers the screening log keeps and on what basis.",
        },
        { type: "h3", text: "C.3 Oversight of delegated recruitment" },
        {
          type: "p",
          text: "The investigator remains responsible for recruitment activities delegated to [vendor name].{{cite:ich-e6r3}} Before use, the configured eligibility criteria are tested on a sample of records and reviewed by [PI or coordinator]. The script, and any change to it, is approved by the IRB before use. [Vendor name] provides a contact log showing each contact, its date, channel, script version and outcome, which the study team reviews [frequency].",
        },
      ],
    },
    {
      id: "consent-support",
      heading: "What language describes AI support during informed consent?",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "How to fill in Part D",
          text: "Include Part D only if patients will use an AI tool during the consent process. Attach the documents the tool answers from.",
        },
        { type: "h3", text: "D.1 Role of the AI assistant in consent" },
        {
          type: "p",
          text: "After a person agrees to learn more, they may use an AI assistant to read a plain-language explanation of the IRB-approved consent form and ask questions about it. The assistant answers only from the approved consent form and [study information sheet]. It does not obtain consent and does not advise the person whether to take part. It refers any question it cannot answer from those documents, and any question about the person's own medical care, to study staff. Informed consent is obtained by the investigator or study staff delegated by the investigator, who review the form with the person, answer remaining questions and document consent as described in [protocol section].{{cite:ich-e6r3}}",
        },
        { type: "h3", text: "D.2 Voluntariness" },
        {
          type: "p",
          text: "Using the assistant is optional. The person may stop at any time and talk with staff instead, and using it does not shorten the time the person has to consider the study. Consent is sought only under circumstances that give the person enough time to decide and that minimize the possibility of coercion or undue influence, in language the person can understand.{{cite:ecfr-50-20}}",
        },
      ],
    },
    {
      id: "irb-approval",
      heading: "What needs IRB approval before outreach starts?",
      blocks: [
        {
          type: "p",
          text: "Under 21 CFR 56.109, the IRB reviews the research activities it covers and can approve them, require changes or disapprove them.{{cite:ecfr-56-109}} ICH E6(R3) says the investigator should hold documented IRB approval of participant recruitment procedures, such as advertisements, before a trial starts.{{cite:ich-e6r3}} FDA also expects the IRB to check that phone screening procedures protect the people being screened and handle sensitive information appropriately, and says a general promise that confidentiality will be maintained is not enough.{{cite:fda-recruiting}}",
        },
        {
          type: "checklist",
          items: [
            "The recruitment plan paragraphs from Parts A to D, edited for your study",
            "The full voice script, including the disclosure, escalation and closing statements, with a version number",
            "Every text message, word for word, including the reply to STOP, and the voicemail message",
            "The HIPAA basis for the records review and for first contact, with the waiver request if you chose Option 2",
            "The pre-screening questions, and what happens to answers from people who screen out",
            "The consent support description and its source documents, if Part D applies",
            "Translated versions of any script, reviewed like the English one",
            "The vendor's security summary or BAA reference, if your IRB or privacy office asks for it",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "After approval",
          text: "Treat any change to what patients hear or read, to the criteria the software screens on, or to the channels you use as a change to recruitment materials. Submit it before it goes live unless your IRB's policy says otherwise.",
        },
      ],
    },
    {
      id: "how-bond-fits",
      heading: "How does Bond relate to this template?",
      blocks: [
        {
          type: "p",
          text: "Bond Health's software handles the activities this template describes. [Identify](/identify) screens EHR records against a study's inclusion and exclusion criteria and shows the record evidence for each criterion. [Engage](/engage) runs voice and SMS outreach and pre-screening. [Consent](/consent) supports the consent conversation with plain-language explanations and patient Q&A. Patients are told that AI assistance is used and can reach a person at any time through a live transfer to a coordinator or a human callback, whichever the site prefers, scripts are configured for each site and study, and conversations escalate to coordinators.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "For C.1, Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Bond signs BAAs, encrypts data at rest and in transit, supports role-based access and SSO, and keeps an audit log. The [security](/security) page has the details. Ask for the AI model processing details in writing, as you would from any vendor. Bond does not hold IRB approval for any study and does not obtain consent: your IRB reviews your submission, and your investigator or delegated staff obtain consent.{{cite:bond-site}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how the AI disclosure, live transfer or human callback, and escalation steps work before you draft your submission.",
          secondaryLabel: "Browse all templates",
          secondaryHref: "/templates",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can AI pre-screening of the EHR rely on the preparatory-to-research provision?",
      a: "It can cover the records review if PHI is used only to prepare for the research and none is removed from the covered entity.{{cite:ecfr-164-512}} Whether a vendor working under a BAA meets that condition, and what basis covers contacting patients, are questions for your privacy officer.",
    },
    {
      q: "Does the IRB need to see the exact words an AI assistant will say?",
      a: "Plan on it. FDA expects the IRB to review what recruitment material says and how it is delivered, and a voice or text assistant is a way of delivering it.{{cite:fda-recruiting}} Submit the required statements word for word and describe how the assistant handles questions outside the script.",
    },
    {
      q: "Do patients have to be told they are talking to AI?",
      a: "As of September 2026, some states require it in health care settings. California requires an AI disclaimer on generative AI patient communications about clinical information, and Texas requires licensed providers to disclose AI used in health care services.{{cite:ca-ab3030,tx-hb149}} Whether a recruitment call is covered depends on the facts, so this template discloses AI use at the start and end of every call and in every text. Bond's agents also tell patients that AI assistance is used.{{cite:bond-site}}",
    },
    {
      q: "Is informed consent needed before software pre-screens a chart?",
      a: "For Common Rule studies, an IRB can approve screening and recruiting activities without consent under 45 CFR 46.116(g).{{cite:ecfr-46-116}} For FDA-regulated studies, FDA guidance says a preliminary records review that records only limited information does not require informed consent under FDA regulations.{{cite:fda-ic-2023}} HIPAA applies in both cases.",
    },
    {
      q: "Can an AI assistant obtain informed consent?",
      a: "No. ICH E6(R3) says the consent process should be conducted by the investigator or staff the investigator delegates.{{cite:ich-e6r3}} An AI tool can explain the approved form and route questions to staff, but the site obtains and documents consent.",
    },
  ],
  sources: [
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512: Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "eCFR (Office of the Federal Register and GPO)",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Paragraph (i) covers research: waiver of authorization in whole or in part, reviews preparatory to research, and the waiver criteria in (i)(2)(ii). Text current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-508",
      title: "45 CFR 164.508: Uses and disclosures for which an authorization is required",
      publisher: "eCFR (Office of the Federal Register and GPO)",
      url: "https://www.ecfr.gov/current/title-45/section-164.508",
      year: "2026",
      note: "Paragraph (b)(3)(i) allows a research authorization to be combined with the consent to participate in the same study.",
    },
    {
      id: "ecfr-164-502",
      title: "45 CFR 164.502: Uses and disclosures of protected health information, general rules (minimum necessary)",
      publisher: "eCFR (Office of the Federal Register and GPO)",
      url: "https://www.ecfr.gov/current/title-45/section-164.502",
      year: "2026",
    },
    {
      id: "ecfr-160-103",
      title: "45 CFR 160.103: Definitions (business associate)",
      publisher: "eCFR (Office of the Federal Register and GPO)",
      url: "https://www.ecfr.gov/current/title-45/section-160.103",
      year: "2026",
    },
    {
      id: "ecfr-46-116",
      title: "45 CFR 46.116: General requirements for informed consent",
      publisher: "eCFR (Office of the Federal Register and GPO)",
      url: "https://www.ecfr.gov/current/title-45/section-46.116",
      year: "2026",
      note: "Paragraph (g), added by the 2018 revised Common Rule, covers screening, recruiting or determining eligibility.",
    },
    {
      id: "ecfr-56-109",
      title: "21 CFR 56.109: IRB review of research",
      publisher: "eCFR (Office of the Federal Register and GPO)",
      url: "https://www.ecfr.gov/current/title-21/section-56.109",
      year: "2026",
    },
    {
      id: "ecfr-56-111",
      title: "21 CFR 56.111: Criteria for IRB approval of research",
      publisher: "eCFR (Office of the Federal Register and GPO)",
      url: "https://www.ecfr.gov/current/title-21/section-56.111",
      year: "2026",
      note: "Paragraph (a)(3): selection of subjects is equitable.",
    },
    {
      id: "ecfr-50-20",
      title: "21 CFR 50.20: General requirements for informed consent",
      publisher: "eCFR (Office of the Federal Register and GPO)",
      url: "https://www.ecfr.gov/current/title-21/section-50.20",
      year: "2026",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Information Sheet for IRBs and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Final information sheet, January 1998; page content current as of 2018.",
    },
    {
      id: "fda-screening-tests",
      title: "Screening Tests Prior to Study Enrollment: Information Sheet for IRBs and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
      year: "1998",
    },
    {
      id: "fda-ic-2023",
      title: "Informed Consent: Guidance for IRBs, Clinical Investigators, and Sponsors",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/88915/download",
      year: "2023",
    },
    {
      id: "nih-irbo",
      title: "Screening for Research Studies",
      publisher: "NIH Office of Human Subjects Research Protections",
      url: "https://irbo.nih.gov/conducting-your-study/screening-for-research-studies/",
      year: "2026",
    },
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice, final version adopted 6 January 2025",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Sections 2.3.1 (delegation), 2.4.2 (approval of recruitment procedures), 2.8.5 (who conducts consent) and Appendix C (essential records). FDA issued E6(R3) as final guidance in September 2025.",
    },
    {
      id: "cfr-47-64-1200",
      title: "47 CFR 64.1200: Delivery restrictions",
      publisher: "Legal Information Institute, Cornell Law School (eCFR text)",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      year: "2026",
      note: "Paragraph (a)(10). Quote: \"All requests to revoke prior express consent or prior express written consent made in any reasonable manner must be honored within a reasonable time not to exceed ten business days from receipt of such request.\"",
    },
    {
      id: "ca-ab3030",
      title: "AB-3030 Health care services: artificial intelligence (Chapter 848, Statutes of 2024)",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3030",
      year: "2024",
      note: "Health and Safety Code 1339.75, operative January 1, 2025. Written messages: disclaimer to \"appear prominently at the beginning of each communication\"; audio: \"provided verbally at the start and the end of the interaction\". Excludes administrative matters such as scheduling, and communications read and reviewed by a licensed provider.",
    },
    {
      id: "ca-ab489",
      title: "AB-489 Health care professions: deceptive terms or letters or phrases: artificial intelligence (Chapter 615, Statutes of 2025)",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB489",
      year: "2025",
    },
    {
      id: "tx-hb149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act (enrolled)",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
      note: "Business & Commerce Code 552.051(f), effective January 1, 2026: \"If an artificial intelligence system is used in relation to health care service or treatment, the provider of the service or treatment shall provide the disclosure under Subsection (b) to the recipient of the service or treatment or the recipient's personal representative not later than the date the service or treatment is first provided, except in the case of emergency\"",
    },
    {
      id: "fcc-24-17",
      title: "Declaratory Ruling: Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts (FCC 24-17, CG Docket No. 23-362)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      year: "2024",
      note: "Adopted February 2, 2024; released February 8, 2024. Quote: \"we confirm that the TCPA's restrictions on the use of 'artificial or prerecorded voice' encompass current AI technologies that generate human voices. As a result, calls that use such technologies fall under the TCPA and the Commission's implementing rules, and therefore require the prior express consent of the called party to initiate such calls absent an emergency purpose or exemption.\"",
    },
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
  ],
  related: [
    {
      label: "IRB and HIPAA rules for patient outreach",
      href: "/guides/irb-hipaa-patient-outreach",
      description: "Which HIPAA path applies, what the IRB reviews, and how TCPA and state AI laws shape calls and texts.",
    },
    { label: "Engage: voice and SMS agents", href: "/engage", description: "How Bond's agents disclose AI use, pre-screen and escalate to coordinators." },
    { label: "Consent: AI consent support", href: "/consent", description: "Plain-language explanations and Q&A while the site obtains consent." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A full call script to attach as Appendix X." },
    { label: "All templates", href: "/templates", description: "Scripts, SMS templates, checklists and questionnaires for sites." },
  ],
};

export default page;
