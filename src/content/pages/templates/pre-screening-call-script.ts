import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/templates/pre-screening-call-script",
  category: "template",
  title: "Clinical trial pre-screening phone script template",
  description:
    "Editable clinical trial pre-screening phone script: opening, permission to proceed, AI disclosure, eligibility questions, scheduling, voicemail and objections.",
  keywords: [
    "clinical trial pre-screening phone script template",
    "pre-screening call script",
    "clinical research phone screening script",
    "IRB recruitment script template",
    "research recruitment voicemail script",
  ],
  eyebrow: "Template",
  h1: "Pre-screening call script template for research sites",
  intro:
    "A pre-screening call is where many patients first talk to a study team, so the script behind it has to be clear, honest and approved by the IRB. This template gives you a complete call: an opening that confirms identity and asks permission, an optional AI disclosure, eligibility questions with placeholders for your protocol, scheduling, a voicemail and answers to common objections. Adapt it to your study, then submit it with your recruitment materials.",
  summary: "A complete pre-screening phone script with AI disclosure, eligibility placeholders, voicemail and objection handling, ready to adapt for your IRB.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "Pre-screening vs screening",
    secondaryHref: "/guides/pre-screening-vs-screening",
  },
  sections: [
    {
      id: "what-it-is-for",
      heading: "What is this pre-screening call script for?",
      blocks: [
        {
          type: "p",
          text: "Use this script when a coordinator, recruiter or voice agent calls a patient who may qualify for a study after chart review, a clinician referral or an ad. The call confirms you have the right person, checks interest and asks the few questions that rule them in or out before a screening visit. It stops before informed consent. The guide to [pre-screening vs screening](/guides/pre-screening-vs-screening) explains where that line sits.",
        },
        {
          type: "p",
          text: "Many interested patients are lost before anyone pre-screens them, and a call can win some back. The first figure is from a 2024 DIA Global Forum article citing an earlier Clinical Leader piece. The second is from a Canadian randomized trial that followed up people who had not answered a mailed invitation.{{cite:dia-2024,trials-2013}}",
        },
        {
          type: "stats",
          items: [
            { value: "69%", label: "of identified, interested patients are never pre-screened", cite: "dia-2024" },
            { value: "17.5% vs 9.1%", label: "of mail non-responders attended eligibility screening after phone vs mail follow-up", cite: "trials-2013" },
          ],
        },
        {
          type: "download",
          label: "Pre-screening call script template (Word)",
          href: "/downloads/pre-screening-call-script.docx",
          format: "Word document (.docx), editable",
        },
      ],
    },
    {
      id: "how-to-use",
      heading: "How should you adapt the script for your study?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Fill in every placeholder",
              text: "Replace each bracketed item with your site, study and contact details. Use the study's plain-language name, not the protocol number, unless your IRB asks for both.",
            },
            {
              title: "Write the eligibility questions from the protocol",
              text: "Ask only about inclusion and exclusion criteria the chart could not answer. Pre-screening happens before consent, so questions address the study's specific criteria and no research procedures take place.{{cite:umbc-screening}}",
            },
            {
              title: "Decide who makes the call",
              text: "If a voice agent places the call or AI assists the caller, keep the lines marked AI. If only staff call without AI, delete them.",
            },
            {
              title: "Submit the script to the IRB",
              text: "Send the script, voicemail, objection responses and data-handling plan with the rest of the recruitment package.",
            },
            {
              title: "Train callers and log every attempt",
              text: "Callers read the approved wording and log each attempt, outcome and reason for ineligibility. ICH E6(R3) lists records of recruitment and pre-trial screening among a trial's essential records.{{cite:ich-e6r3}}",
            },
          ],
        },
        {
          type: "table",
          caption: "Placeholders to fill in",
          columns: ["Placeholder", "What to insert", "Where it appears"],
          rows: [
            ["[Caller name]", "First name of the coordinator, or the name the voice agent uses", "Opening, voicemail"],
            ["[Site name]", "The name patients know, such as the clinic or practice", "Throughout"],
            ["[PI name]", "Principal investigator's name and title", "Opening, scheduling"],
            ["[Study team phone number]", "A number answered by the study team, not a general line", "Opening, voicemail, close"],
            ["[Condition]", "Plain-language name of the condition the study is about", "Reason for the call"],
            ["[Privacy statement]", "Who sees the answers, where they are stored and when they are destroyed", "Permission to proceed"],
            ["[Eligibility questions]", "One question per criterion the chart could not settle", "Eligibility section"],
            ["[Visit details]", "Screening visit length, location and what to bring", "Scheduling"],
            ["[Cost and payment statement]", "IRB-approved wording on costs and compensation", "Objections"],
          ],
          note: "Keep a version number and approval date on the script. Callers should use only the version the IRB approved.",
        },
        {
          type: "callout",
          tone: "info",
          title: "When to call",
          text: "In one trial across three California health systems, research calls placed between 8 and 10 a.m. and between 1 and 4 p.m. reached more patients, and opt-outs appeared higher for calls between 7 and 9 p.m.{{cite:jgim-2023}} Federal rules bar telephone solicitations before 8 a.m. or after 9 p.m. local time.{{cite:ecfr-47-64-1200}} A study call is generally not a solicitation, but that window is a sensible default.",
        },
      ],
    },
    {
      id: "call-opening",
      heading: "How should the call open?",
      blocks: [
        {
          type: "p",
          text: "Before any health question, the opening names the caller and the site, gives the AI disclosure if AI is used, confirms the right person is on the line, says why you are calling and asks permission to continue. Do not name the condition or the study until identity is confirmed.",
        },
        { type: "h3", text: "Introduction" },
        {
          type: "script",
          lines: [
            { speaker: "Caller", text: "Hello, may I speak with [patient first and last name]?" },
            {
              speaker: "Note",
              text: "If someone else answers, say: This is [caller name] from [site name]. Could you ask [patient first name] to call me back at [study team phone number]? Do not say why you are calling.",
            },
            { speaker: "Caller", text: "Hi, [patient first name]. My name is [caller name], and I'm calling from [site name] for [PI name]'s research team." },
          ],
        },
        { type: "h3", text: "AI disclosure (use only if AI is used)" },
        {
          type: "script",
          lines: [
            {
              speaker: "Caller (AI)",
              text: "I'm an automated assistant working with the [site name] research team. I'm not a person, and I'm not a doctor. You can ask to speak with someone from the study team at any time, and I'll arrange a call back.",
            },
            {
              speaker: "Note",
              text: "Give the disclosure before asking for date of birth or any health information, and repeat a short version before the call ends, whatever the outcome. If a staff member is calling with AI help, for example AI-generated prompts or notes, replace the line above with: I'm using a computer system to help me take notes during this call. Use the exact wording your IRB approves.",
            },
          ],
        },
        { type: "h3", text: "Identity check" },
        {
          type: "script",
          lines: [
            { speaker: "Caller", text: "Before I go on, can you please confirm your date of birth?" },
            {
              speaker: "Note",
              text: "Check the answer against the record. If it does not match, apologize, end the call and log it as a wrong number.",
            },
          ],
        },
        { type: "h3", text: "Reason for the call and permission to proceed" },
        {
          type: "script",
          lines: [
            {
              speaker: "Caller",
              text: "I'm calling about a research study at [site name] for people with [condition]. [How the patient was identified, in IRB-approved words, for example: Dr. [clinician name] thought you might like to hear about it.]",
            },
            { speaker: "Caller", text: "Research studies are voluntary. Whether or not you take part will not change the care you get at [site name]." },
            {
              speaker: "Caller",
              text: "I'd like to ask a few questions to see whether the study might be a fit. It takes about [number] minutes. [Privacy statement: who will see your answers, where they are kept, and when they are deleted.] Is now a good time?",
            },
            { speaker: "If no", text: "When would be a better time to call? [Record the time.] Thank you, [patient first name]." },
            { speaker: "If yes", text: "Thank you. You can skip any question, and you can stop at any time." },
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Write a real privacy statement",
          text: "FDA's recruiting guidance says the IRB should make sure a phone screening script protects prospective subjects, asks what happens to personal information if the person hangs up, and says a simple statement such as \"confidentiality will be maintained\" does not adequately inform the IRB.{{cite:fda-recruiting}} Name who sees the answers, where they are stored and when they are destroyed.",
        },
      ],
    },
    {
      id: "eligibility-questions",
      heading: "What eligibility questions should the script ask?",
      blocks: [
        {
          type: "p",
          text: "Write one short, plain-language question per criterion the chart could not settle, answerable with yes, no or a short fact. Put the criteria that most often rule people out first, so the call stays short for patients who do not qualify.",
        },
        {
          type: "table",
          caption: "Notes on each question type",
          columns: ["Question type", "Notes"],
          rows: [
            ["Diagnosis", "Skip if the chart already confirms it."],
            ["Current treatment", "Ask for names, not doses, unless the protocol needs doses."],
            ["Recent events", "Use the protocol's exact time window, such as surgery or a hospital stay in the past [number] months."],
            ["Excluding conditions", "Ask only about exclusions the chart may miss."],
            ["Other research", "Check the protocol's rule on concurrent studies."],
            ["Pregnancy", "Include only if the protocol requires it, and use the same wording for everyone you ask."],
            ["Schedule", "Ask last, after the clinical criteria."],
          ],
        },
        {
          type: "script",
          lines: [
            { speaker: "Caller", text: "Has a doctor ever told you that you have [condition]?" },
            { speaker: "Caller", text: "Are you taking [medication or drug class] right now?" },
            { speaker: "Caller", text: "In the past [time window from the protocol], have you had [event, such as surgery or a hospital stay]?" },
            { speaker: "Caller", text: "Have you ever been diagnosed with [excluded condition]?" },
            { speaker: "Caller", text: "[Additional protocol-specific question.]" },
            { speaker: "Caller", text: "Are you taking part in any other research study right now?" },
            { speaker: "Caller", text: "[Only if the protocol requires it:] Are you pregnant, planning a pregnancy or breastfeeding?" },
            { speaker: "Caller", text: "The study involves [number of visits] visits over [time period] at [location]. Would that schedule work for you?" },
            {
              speaker: "Note",
              text: "Do not tell the patient what each answer means for eligibility as you go. Record every answer, then move to the close.",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Keep the call to eligibility",
          text: "Never ask a patient to stop or change a medicine on this call. FDA says informed consent must be obtained before any clinical procedure performed solely to determine research eligibility, including withdrawal from medication.{{cite:fda-screening-tests}} Other health questions belong at the screening visit, after consent.",
        },
      ],
    },
    {
      id: "close-schedule-voicemail",
      heading: "How do you close the call, schedule and leave a voicemail?",
      blocks: [
        { type: "h3", text: "If the patient may be eligible" },
        {
          type: "script",
          lines: [
            {
              speaker: "Caller",
              text: "Thank you. Based on your answers, you may be able to take part. The next step is a screening visit at [location]. At that visit, [PI name] or a member of the team will explain the study in detail and answer your questions before you decide anything. The visit takes about [visit length].",
            },
            { speaker: "Caller", text: "I have [date and time option] or [date and time option]. Would either of those work?" },
            {
              speaker: "Caller",
              text: "Please bring [photo ID, a list of your medicines, other items]. You'll get a reminder by [text, call or email] before the visit. If anything changes, call [study team phone number].",
            },
            {
              speaker: "Caller (AI)",
              text: "A reminder that I'm an automated assistant. If you'd like a person from the study team to call you, I can set that up now.",
            },
          ],
        },
        { type: "h3", text: "If the patient does not qualify" },
        {
          type: "script",
          lines: [
            {
              speaker: "Caller",
              text: "Thank you for your time, [patient first name]. Based on your answers, this study isn't a fit right now. That's about the study's rules, not about you.",
            },
            {
              speaker: "Caller",
              text: "[Only if your IRB approved it: Would you like us to keep your name and phone number so we can tell you about future studies?]",
            },
          ],
        },
        {
          type: "p",
          text: "Decide before the first call what happens to answers from people who do not qualify. For NIH research, NIH's human subjects office says identifiable data collected before consent cannot be kept when someone is found not eligible.{{cite:nih-ohsrp-screening}} University of Miami IRB guidance (2011) says phone questions about medical history create new protected health information, which must be destroyed for ineligible people unless the investigator has HIPAA authorization or an IRB waiver to keep a screen-failure log.{{cite:umiami-screening}}",
        },
        { type: "h3", text: "If the patient is not interested" },
        {
          type: "script",
          lines: [
            { speaker: "Caller", text: "I understand. Thank you for letting me know. Would you like us to stop contacting you about this study?" },
            { speaker: "Note", text: "Record the answer. If the patient says yes, mark the record so no one calls or texts again about this study." },
          ],
        },
        { type: "h3", text: "Voicemail" },
        {
          type: "script",
          lines: [
            {
              speaker: "Caller",
              text: "Hello, this message is for [patient first name]. This is [caller name] calling from [site name]. Please call me back at [study team phone number], [days and hours]. Thank you.",
            },
            {
              speaker: "Caller (AI)",
              text: "Hello, this message is for [patient first name]. This is an automated assistant calling for the [site name] team. Please call [study team phone number], and you can ask for a member of the team.",
            },
            {
              speaker: "Note",
              text: "Do not name the condition, the study or the treatment in a voicemail. Anyone with access to the phone may hear it.",
            },
          ],
        },
        {
          type: "p",
          text: "A generic voicemail follows HIPAA's minimum necessary standard, which requires reasonable efforts to limit protected health information to what the purpose needs.{{cite:ecfr-164-502}} If your IRB approves a neutral study name, you may add it. An AI-voiced message must also name the calling organization at the start and give a callback number, as federal rules require for all artificial or prerecorded voice messages.{{cite:ecfr-47-64-1200,fcc-24-17}}",
        },
        { type: "h3", text: "Record the outcome" },
        {
          type: "table",
          caption: "Call outcomes for the pre-screening log",
          columns: ["Outcome", "What to record", "Next step"],
          rows: [
            ["May be eligible, visit booked", "Visit date and time, answer to each question", "Send the reminder and hand off to the screening visit team"],
            ["May be eligible, not ready", "Answers and the callback date the patient chose", "Call back on that date"],
            ["Does not qualify", "The criterion not met, as a reason code", "Keep or destroy answers under the IRB-approved plan"],
            ["Not interested", "Date, and whether the patient asked not to be contacted", "Flag do-not-contact for this study if asked"],
            ["Voicemail left", "Attempt number, date and time", "Try again within your attempt limit"],
            ["Wrong number or identity not confirmed", "Date only, with no health details", "Close the record"],
            ["Asked for a person (AI calls)", "Callback request and preferred time", "A coordinator calls back"],
          ],
          note: "Counts by outcome feed your pre-screening log. NIMH's pre-screening log template, for example, records how many people were eligible for a screening visit and how many were ineligible and why.{{cite:nimh-toolbox}}",
        },
        {
          type: "form",
          title: "Call record",
          fields: [
            { label: "Patient study ID", hint: "Use the log ID, not the patient's name, if your IRB plan requires it.", kind: "text" },
            { label: "Date and time of call", kind: "text" },
            { label: "Caller name, or voice agent", kind: "text" },
            { label: "Attempt number", kind: "number" },
            { label: "Identity confirmed", kind: "checkbox" },
            { label: "AI disclosure given (AI calls only)", kind: "checkbox" },
            { label: "Answers to eligibility questions", hint: "One line per question. Record only what the protocol needs.", kind: "textarea" },
            {
              label: "Outcome",
              kind: "select",
              options: [
                "May be eligible, visit booked",
                "May be eligible, not ready",
                "Does not qualify",
                "Not interested",
                "Voicemail left",
                "Wrong number or identity not confirmed",
                "Asked for a person",
              ],
            },
            { label: "Reason code, if not eligible", kind: "text" },
            { label: "Do-not-contact requested for this study", kind: "checkbox" },
            { label: "Next step and date", kind: "text" },
          ],
        },
      ],
    },
    {
      id: "objections",
      heading: "How should callers answer common questions and objections?",
      blocks: [
        {
          type: "p",
          text: "Scripted answers keep responses inside what the IRB approved. Never press a patient who says no.",
        },
        {
          type: "table",
          caption: "Objection responses",
          columns: ["Patient says", "Suggested response", "Why"],
          rows: [
            [
              "How did you get my number?",
              "You're a patient at [site name], and [the care team or Dr. clinician name] thought this study might interest you. [Use the IRB-approved description of how patients are identified.]",
              "Answer truthfully, in approved words.",
            ],
            [
              "Is this a scam?",
              "That's a fair question. You can call [site name]'s main number, [main phone number], and ask for the research office to confirm who I am.",
              "Gives the patient an independent way to check.",
            ],
            [
              "Am I talking to a robot?",
              "[If AI:] Yes, I'm an automated assistant for the [site name] study team. I can have a person call you instead. [If staff:] No, I'm a member of the study team.",
              "Answer honestly. California and Texas have AI disclosure rules for health care communications.{{cite:ca-ab3030,tx-hb149}}",
            ],
            [
              "Will it cost me anything? Will I be paid?",
              "[IRB-approved statement on costs and compensation.] The team will go over the details at the screening visit.",
              "FDA says recruitment ads should not emphasize payment or promise \"free medical treatment\" when the intent is only that subjects will not be charged.{{cite:fda-recruiting}}",
            ],
            [
              "Is the treatment safe? Does it work?",
              "That's what the study is looking at. The study team will explain the known risks and possible benefits before you decide anything.",
              "FDA says recruitment ads should make no claim that the product is safe or effective.{{cite:fda-recruiting}}",
            ],
            [
              "I don't want to be a guinea pig.",
              "That's understandable. Research is voluntary, and you can say no or stop at any time without it affecting your care. Would you like to hear more, or would you prefer we not call again?",
              "Staff should not coerce or unduly influence participation.{{cite:ich-e6r3}}",
            ],
            [
              "I need to talk to my doctor or family first.",
              "Of course. I can call back on [date], or you can reach us at [study team phone number].",
              "Give time to decide.",
            ],
            [
              "Stop calling me.",
              "I'll take you off our list for this study right away. Thank you for your time.",
              "Under FCC rules in effect since April 2025, people can revoke consent to robocalls and robotexts in any reasonable way, and callers must honor it within 10 business days.{{cite:fcc-24-24}}",
            ],
          ],
          note: "Anything not in this table goes to a coordinator. Callers should not improvise answers about the study drug, device or procedures.",
        },
      ],
    },
    {
      id: "irb-approval",
      heading: "What needs IRB approval before the first call?",
      blocks: [
        {
          type: "p",
          text: "The script, voicemail and data-handling plan all go to the IRB. FDA treats screening for research eligibility as part of recruitment, which requires IRB oversight, and says the IRB should receive a written outline of the screening procedure.{{cite:fda-screening-tests}} ICH E6(R3) says the investigator should have documented IRB approval of recruitment procedures before a trial starts.{{cite:ich-e6r3}}",
        },
        {
          type: "checklist",
          items: [
            "**The full script**, including branches, voicemail and objection responses. NIH's human subjects office asks that screening interviews include the actual questions and explain their purpose.{{cite:nih-ohsrp-screening}}",
            "**How patients were identified** and who places the call: site staff, a vendor or an AI voice agent.",
            "**How answers are recorded, stored and destroyed**, including answers from people who hang up or do not qualify.{{cite:fda-recruiting}}",
            "**The basis for asking questions before consent.** Under the Common Rule, 45 CFR 46.116(g) lets an IRB approve screening or eligibility determination without informed consent when the investigator talks with the prospective subject or accesses records.{{cite:ecfr-46-116}} For FDA-regulated studies, FDA's 2023 guidance says consent may be needed before collecting eligibility information the patient's record lacks.{{cite:fda-consent-2023}} Ask your IRB how it classifies the call.",
            "**The AI disclosure wording**, if a voice agent or AI-assisted caller is used.",
            "**Call hours, attempt limits and the opt-out process.**",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "AI disclosure rules",
          text: "The FCC ruled in February 2024 that AI-generated voices count as artificial voices under the TCPA, so those calls need prior express consent unless an exemption applies.{{cite:fcc-24-17}} An FCC proposal from August 2024 to require disclosure of AI-generated calls had not been finalized as of September 2026.{{cite:fcc-24-84}} California's AB 3030, in effect since January 1, 2025, requires health facilities, clinics and physician practices that use generative AI for patient communications about clinical information to give a disclaimer and instructions for reaching a human, spoken at the start and end of audio interactions, unless a licensed provider reviews the communication. Scheduling and other administrative messages are excluded.{{cite:ca-ab3030}} Texas's HB 149, in effect since January 1, 2026, requires providers that use AI in relation to health care services to disclose it to the patient.{{cite:tx-hb149}} Have counsel confirm which rules apply.",
        },
        {
          type: "p",
          text: "The guide to [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach) covers each rule in more detail, and the [IRB submission language template](/templates/irb-submission-language-ai-outreach) has wording for describing AI-assisted outreach in your application.",
        },
      ],
    },
    {
      id: "where-bond-fits",
      heading: "How does Bond use a script like this?",
      blocks: [
        {
          type: "p",
          text: "Bond Health's [Engage](/engage) stage runs this kind of call with voice and SMS agents. Scripts are configured per site and study, patients are told AI assistance is used and can reach a person at any time through a live transfer to a coordinator or a human callback, whichever the site prefers, calls can be escalated to a coordinator, and visits can be booked on the site's calendar.{{cite:bond-site,bond-product}} IRB review of the script stays with the site.",
        },
        {
          type: "p",
          text: "Patients can reach the call from [Identify](/identify), which screens EHR records against the study's criteria and shows the chart evidence behind each one, so the call covers only what the chart could not answer.{{cite:bond-site}} For text outreach, see the [patient outreach SMS templates](/templates/patient-outreach-sms-templates), or browse all [templates](/templates).",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring your pre-screening script and see how Engage runs it, including AI disclosure, live transfer or human callback, and coordinator escalation.",
          secondaryLabel: "How Engage works",
          secondaryHref: "/engage",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does a pre-screening phone script need IRB approval?",
      a: "Yes. FDA treats screening for research eligibility as part of subject selection and recruitment, which requires IRB oversight.{{cite:fda-screening-tests}} Submit the script, voicemail and data-handling plan with your recruitment materials.",
    },
    {
      q: "Can we keep the answers of patients who do not qualify?",
      a: "Only if your IRB-approved plan allows it. NIH's human subjects office says identifiable data collected before consent cannot be kept for people found ineligible, and University of Miami IRB guidance allows a screen-failure log only with HIPAA authorization or an IRB waiver.{{cite:nih-ohsrp-screening,umiami-screening}}",
    },
    {
      q: "Do we have to tell patients an AI is calling?",
      a: "As of September 2026, no final federal rule requires it, though the FCC proposed one in August 2024.{{cite:fcc-24-84}} California and Texas have their own disclosure rules for AI in health care.{{cite:ca-ab3030,tx-hb149}} Your IRB may also require a disclosure. Bond's agents tell patients that AI assistance is used.{{cite:bond-site}}",
    },
    {
      q: "How many times should we try to reach a patient?",
      a: "Set a limit and include it in the IRB submission. In one EHR-driven campaign, recruiters reached 4,033 of 11,152 pre-notified patients by phone, about 36%, with up to five calls each over two weeks.{{cite:kp-2025}} Stop as soon as a patient asks you to.",
    },
  ],
  sources: [
    {
      id: "dia-2024",
      title: "Documenting the \"Last Mile\" Leak in the Patient Recruitment Pipeline",
      publisher: "DIA Global Forum",
      url: "https://globalforum.diaglobal.org/issue/september-2024/documenting-the-last-mile-leak-in-the-patient-recruitment-pipeline/",
      year: "2024",
      note: "Authors include Kenneth Getz of Tufts CSDD. The article attributes the 69% figure to a Clinical Leader piece.",
    },
    {
      id: "trials-2013",
      title: "Randomized controlled trial comparing telephone and mail follow-up for recruitment of participants into a clinical trial of colorectal cancer screening",
      publisher: "Trials (BioMed Central)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3599938/",
      year: "2013",
      note: "Canada. 480 patients allocated to telephone follow-up and 472 to mail follow-up after an unanswered postal invitation.",
    },
    {
      id: "kp-2025",
      title: "Sociodemographic characteristics of patients throughout the recruitment process into a randomized, controlled behavioral trial",
      publisher: "Trials (Springer Nature)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12625122/",
      year: "2025",
      note: "Kaiser Permanente Southern California, July 2020 to July 2023. The 36% share is computed from the reported counts. Quotes: \"a total of 11,152 patients received either an email (89.5%) or letter\"; \"Recruiters contacted 4033 patients by phone\"; \"Patients received up to 5 calls over a 2-week period across different days of the week and times of day\".",
    },
    {
      id: "jgim-2023",
      title: "Telephone Outreach Enhances Recruitment of Underrepresented Seriously Ill Patients for an Advance Care Planning Pragmatic Trial",
      publisher: "Journal of General Internal Medicine",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10271940/",
      year: "2023",
      note: "Three California academic health systems. Quotes: \"Phone calls completed between 8 a.m. and 10 a.m., and 1 p.m. and 4 p.m., reached more patients\" and \"Opt outs appear to be higher for phone calls placed between 7 p.m. and 9 p.m.\"",
    },
    {
      id: "ecfr-47-64-1200",
      title: "47 CFR 64.1200: Delivery restrictions",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      year: "2025",
      note: "Paragraph (c)(1). The hour restriction applies to telephone solicitations. Paragraph (b) covers all artificial or prerecorded voice messages. Quote: \"At the beginning of the message, state clearly the identity of the business, individual, or other entity that is responsible for initiating the call.\" and \"During or after the message, state clearly the telephone number (other than that of the autodialer or prerecorded message player that placed the call) of such business, other entity, or individual.\"",
    },
    {
      id: "umbc-screening",
      title: "Participant Screening",
      publisher: "University of Maryland, Baltimore County, Office of Research Protections and Compliance",
      url: "https://research.umbc.edu/participant-screening/",
      year: "2026",
    },
    {
      id: "umiami-screening",
      title: "Guidance on Screening Research Subjects for Recruitment: Screening Process and Documentation",
      publisher: "University of Miami Human Subject Research Office",
      url: "https://www.hsro.uresearch.miami.edu/_assets/pdf/guidance-screening-process-and-documentation-10.14.2011.pdf",
      year: "2011",
    },
    {
      id: "nih-ohsrp-screening",
      title: "Screening for Research Studies",
      publisher: "NIH Office of Human Subjects Research Protections",
      url: "https://irbo.nih.gov/conducting-your-study/screening-for-research-studies/",
      year: "2026",
      note: "Quote: \"Any formal questionnaires or interviews used as part of screening to determine eligibility should include the actual questions that will be asked.\" Also: \"Identifiable data collected before consent cannot be kept.\"",
    },
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Sections 2.4.2 and 2.8.3, and Appendix C on essential records.",
    },
    {
      id: "nimh-toolbox",
      title: "NIMH Clinical Research Toolbox: Screening and Enrollment Logs and Materials",
      publisher: "National Institute of Mental Health",
      url: "https://www.nimh.nih.gov/funding/clinical-research/clinical-research-toolbox/nimh-clinical-research-toolbox",
      year: "2026",
      note: "Describes the NIMH Participant Pre-Screening Log Template for people who completed phone screens or online screening surveys, typically before signing consent.",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Quotes: \"What happens to personal information if the caller ends the interview or simply hangs up?\" and \"A simple statement such as 'confidentiality will be maintained' does not adequately inform the IRB of the procedures that will be used.\"",
    },
    {
      id: "fda-screening-tests",
      title: "Screening Tests Prior to Study Enrollment: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
      year: "1998",
    },
    {
      id: "fda-consent-2023",
      title: "Informed Consent: Guidance for IRBs, Clinical Investigators, and Sponsors",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/88915/download",
      year: "2023",
    },
    {
      id: "ecfr-46-116",
      title: "45 CFR 46.116: General requirements for informed consent",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116",
      year: "2026",
      note: "Paragraph (g), screening, recruiting or determining eligibility.",
    },
    {
      id: "ecfr-164-502",
      title: "45 CFR 164.502: Uses and disclosures of protected health information, general rules",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.502",
      year: "2026",
      note: "Paragraph (b), minimum necessary.",
    },
    {
      id: "fcc-24-17",
      title: "Declaratory Ruling: Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts (FCC 24-17)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      year: "2024",
    },
    {
      id: "fcc-24-84",
      title: "Notice of Proposed Rulemaking and Notice of Inquiry: Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts (FCC 24-84)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-84A1.pdf",
      year: "2024",
      note: "Adopted August 7, 2024. Quote: \"we propose to define AI-generated calls and propose new rules that would require callers disclose to consumers when they receive an AI-generated call.\" Still a proposal, not a final rule, as of September 2026.",
    },
    {
      id: "fcc-24-24",
      title: "Report and Order: Rules and Regulations Implementing the Telephone Consumer Protection Act of 1991 (FCC 24-24)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf",
      year: "2024",
      note: "Consent-revocation rules effective April 11, 2025.",
    },
    {
      id: "ca-ab3030",
      title: "AB-3030 Health care services: artificial intelligence (Chapter 848, Statutes of 2024)",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3030",
      year: "2024",
      note: "Health and Safety Code 1339.75, operative January 1, 2025. Quotes: \"For audio communications, the disclaimer shall be provided verbally at the start and the end of the interaction\" and patient clinical information \"does not include administrative matters, including, but not limited to, appointment scheduling, billing, or other clerical or business matters.\"",
    },
    {
      id: "tx-hb149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act (enrolled)",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
      note: "Business and Commerce Code Sec. 552.051. The act takes effect January 1, 2026.",
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
      label: "Pre-screening vs screening",
      href: "/guides/pre-screening-vs-screening",
      description: "Where pre-screening ends and consent-based screening begins.",
    },
    {
      label: "IRB and HIPAA rules for patient outreach",
      href: "/guides/irb-hipaa-patient-outreach",
      description: "The IRB, HIPAA, TCPA and AI disclosure rules behind outreach scripts.",
    },
    {
      label: "Engage: voice and text outreach",
      href: "/engage",
      description: "Voice and SMS agents that run your site's script with AI disclosure and a live transfer or human callback.",
    },
    {
      label: "Patient outreach SMS templates",
      href: "/templates/patient-outreach-sms-templates",
      description: "Text message templates for first contact, reminders and opt-outs.",
    },
    {
      label: "IRB submission language for AI outreach",
      href: "/templates/irb-submission-language-ai-outreach",
      description: "Wording for describing AI-assisted calls and texts in your IRB application.",
    },
    {
      label: "All templates",
      href: "/templates",
      description: "Editable templates for feasibility, pre-screening, outreach and IRB language.",
    },
  ],
};

export default page;
