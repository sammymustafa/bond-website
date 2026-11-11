import type { SeoPage } from "../types";
import { ISO_27001_CLAUSE } from "../compliance";

/**
 * How Bond limits AI calls and texts to patients. Confirmed by Rishabh on Nov 11, 2026:
 * - calling hours are set per state from that state's laws;
 * - follow-ups stop at the limit the site chooses (for example 3 or 5); there is no fixed Bond default;
 * - an opt-out or do-not-contact request is honored right away, and the person is never contacted again.
 * Do not add a contact frequency, satisfaction score or escalation rule beyond these and the
 * `languages` reason in whyBond.ts (live transfer to coordinators or a booked callback).
 *
 * The state table lists only rules read in the statute itself; each row cites it.
 */
const page: SeoPage = {
  path: "/outreach-safeguards",
  category: "product",
  title: "AI outreach safeguards: state calling hours",
  description:
    "How Bond limits AI calls and texts to patients: calling hours set from each state's laws, follow-up limits the site chooses, and opt-outs honored at once.",
  keywords: [
    "AI patient outreach compliance",
    "TCPA calling hours by state",
    "telemarketing calling hours by state",
    "clinical trial patient outreach rules",
    "AI voice agent opt-out",
    "how many times to call a clinical trial lead",
    "do not contact list clinical trials",
  ],
  eyebrow: "Outreach safeguards",
  h1: "How Bond keeps AI patient outreach safe: calling hours, follow-up limits and opt-outs",
  intro:
    "Bond's voice and text agents contact patients only inside calling hours Bond sets for each state from that state's laws, stop following up at the limit the site chooses, such as three or five follow-ups, and put anyone who opts out or asks not to be contacted on the do-not-contact list right away. After that, Bond never contacts them again.{{cite:bond-product}} Every script is approved by the site's IRB before it runs, patients are told AI is used, and they can reach a person at any time.{{cite:bond-site,bond-product}}",
  summary: "Calling hours by state, follow-up limits the site sets, immediate opt-outs, AI disclosure and a way to reach a person.",
  lastUpdated: "2026-11-11",
  showLastUpdated: true,
  heroCta: {
    label: "Book a demo",
    href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true",
    secondaryLabel: "See security",
    secondaryHref: "/security",
  },
  sections: [
    {
      id: "summary",
      heading: "What limits does Bond put on AI outreach?",
      blocks: [
        {
          type: "table",
          caption: "Bond's outreach limits",
          columns: ["Safeguard", "What Bond does", "Who decides"],
          rows: [
            ["Calling hours", "Calls and texts go out only inside the hours Bond sets for the patient's state, built from that state's laws{{cite:bond-product}}", "Bond, per state"],
            ["Follow-ups", "Bond stops at the follow-up limit the site sets, for example after three or five follow-ups{{cite:bond-product}}", "The site, in its IRB submission"],
            ["Opt-outs", "A patient who opts out or asks not to be contacted goes on the do-not-contact list right away and is never contacted again{{cite:bond-product}}", "The patient"],
            ["AI disclosure", "Patients are told AI is used, in the words the IRB approved{{cite:bond-site,bond-product}}", "The site and its IRB"],
            ["Reaching a person", "The agent transfers the patient live to the site's coordinators or books a callback, whichever the site prefers{{cite:bond-product}}", "The site"],
            ["Scripts", "Agents use only IRB-approved wording, and anything the script does not cover is escalated{{cite:bond-site}}", "The site and its IRB"],
          ],
        },
      ],
    },
    {
      id: "calling-hours",
      heading: "When will Bond's agents call or text a patient?",
      blocks: [
        {
          type: "p",
          text: "Only inside the calling hours Bond sets for the patient's state, in the patient's local time. Bond builds each state's window from that state's laws, and the federal rule sets the outer limit: no telephone solicitations before 8 a.m. or after 9 p.m.{{cite:bond-product,ecfr-64-1200}}",
        },
        {
          type: "p",
          text: "Most of these state laws were written for sales calls, so a study invitation that sells nothing may fall outside them. Using them anyway keeps calls and texts to the hours patients in each state are used to.",
        },
        {
          type: "table",
          caption: "State calling-hour rules that are stricter than the federal window, read in each statute",
          columns: ["State", "What the law allows", "Law"],
          rows: [
            ["California", "No automatic dialing-announcing device calls between 9 p.m. and 9 a.m. California time{{cite:ca-puc-2872}}", "Pub. Util. Code 2872"],
            ["Massachusetts", "No unsolicited sales calls between 8 p.m. and 8 a.m.{{cite:ma-159c-3}}", "M.G.L. c. 159C, § 3"],
            ["Nevada", "No calls from devices that dial and play prerecorded sales messages between 8 p.m. and 9 a.m.{{cite:nrs-597}}", "NRS 597.814"],
            ["New York", "Telemarketing only from 8 a.m. to 9 p.m. without the consumer's consent{{cite:ny-gbl-399z}}", "Gen. Bus. Law § 399-z"],
            ["Pennsylvania", "No telephone solicitations on Sundays or legal holidays, or before 9 a.m. or after 7 p.m.; covers texts{{cite:pa-act47-2026}}", "Telemarketer Registration Act, as amended by Act 47 of 2026"],
          ],
          note: "Read in each statute between September and November 2026. This is a map for counsel, not legal advice.",
        },
      ],
    },
    {
      id: "follow-ups",
      heading: "How many times will Bond follow up with a patient?",
      blocks: [
        {
          type: "p",
          text: "As many times as the site allows and no more. The site sets the limit, for example three or five follow-ups, and Bond stops there. The limit, the contact window and the spacing between attempts go into the site's IRB submission.{{cite:bond-product,bond-site}}",
        },
        {
          type: "p",
          text: "A limit of a few attempts still reaches many patients. In a Kaiser Permanente Southern California trial, recruiters reached 4,033 of 11,152 patients by phone with up to five attempts.{{cite:kpsc-recruitment}} For ad leads, Bond contacts every new lead immediately and keeps following up, within the site's limit, until they respond.{{cite:bond-product}} More on timing: [how many follow-up attempts trial leads need](/blog/follow-up-attempts-trial-leads).",
        },
      ],
    },
    {
      id: "opt-outs",
      heading: "What happens when a patient opts out?",
      blocks: [
        {
          type: "p",
          text: "Bond puts the patient on the do-not-contact list right away, and they are never contacted again, by call or by text. That applies whether the patient replies STOP, says so on a call or asks in any other way.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "That is faster than federal law requires. Since April 2025, consent to automated calls and texts can be revoked by any reasonable means, and callers must honor a revocation within 10 business days.{{cite:fcc-24-24}} CTIA's messaging principles, which carriers apply to business texting, call for honoring STOP and plain-language opt-outs.{{cite:ctia-messaging}} Virginia requires a STOP or UNSUBSCRIBE reply to a solicitation text to be honored for at least 10 years.{{cite:va-texting}}",
        },
      ],
    },
    {
      id: "ai-disclosure-and-people",
      heading: "Does the patient know it is AI, and can they reach a person?",
      blocks: [
        {
          type: "p",
          text: "Yes to both. Patients contacted by Bond's agents are told AI is used, in a disclosure line that is part of the IRB-approved script, and can reach a person at any time: the agent transfers them live to the site's coordinators or books a callback, whichever the site prefers.{{cite:bond-site,bond-product}} During consent support, anything the agent cannot answer goes to site staff.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "Some states require disclosure. Since January 1, 2026, Texas has required a provider that uses AI in relation to health care services to disclose that use to the patient in plain language.{{cite:tx-hb149}} California requires a disclaimer and a way to reach a human when generative AI writes patient messages about clinical information, unless a licensed provider reviews them; appointment scheduling is excluded.{{cite:ca-ab3030}}",
        },
        {
          type: "p",
          text: "Patients do not have to speak English to get the same treatment: conversations run in English, Spanish, Mandarin and many other languages, and switch languages mid-call.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "irb-approval",
      heading: "Who approves what the agent says?",
      blocks: [
        {
          type: "p",
          text: "The site's IRB. FDA's guidance on recruiting study subjects treats recruitment material as the start of informed consent and asks the IRB to review what it says and how it is delivered.{{cite:fda-recruiting}} ICH E6(R3) asks for documented IRB approval of recruitment procedures before a trial starts.{{cite:ich-e6r3}} Bond configures the agent to the approved text and escalates anything the text does not cover; wording changes go back to the IRB before they run.{{cite:bond-site}}",
        },
        {
          type: "checklist",
          items: [
            "The voice script and every text message, word for word",
            "The AI disclosure line and how a patient reaches a person",
            "The calling hours, the follow-up limit and the spacing between attempts",
            "How opt-outs and do-not-contact requests are handled",
            "Any translated version of the script, reviewed like the English one",
          ],
        },
        {
          type: "p",
          text: "Bond's [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach) covers each item.",
        },
      ],
    },
    {
      id: "patient-data",
      heading: "How is patient data protected during outreach?",
      blocks: [
        {
          type: "p",
          text: `Bond works under a business associate agreement with each site, is HIPAA compliant and SOC 2 Type I compliant, and ${ISO_27001_CLAUSE}.{{cite:bond-site,bond-product}} A script should ask only what pre-screening needs, and a first text should not name a diagnosis, since anyone holding the phone can read it. See [security](/security).`,
        },
        {
          type: "callout",
          tone: "warning",
          title: "Not legal advice",
          text: "This summarizes the rules as of November 2026 and is not legal advice. More detail: [TCPA and AI outreach in 2026](/blog/tcpa-ai-outreach-2026) and [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can a site set its own follow-up limit?",
      a: "Yes. The site chooses how many times Bond follows up, for example three or five follow-ups, and Bond stops there.{{cite:bond-product}}",
    },
    {
      q: "What calling hours does Bond use?",
      a: "Bond sets calling hours for each state from that state's laws, in the patient's local time, inside the federal limit of 8 a.m. to 9 p.m.{{cite:bond-product,ecfr-64-1200}}",
    },
    {
      q: "Will Bond contact a patient who opted out?",
      a: "No. A patient who opts out or asks not to be contacted goes on the do-not-contact list right away and is never contacted again.{{cite:bond-product}}",
    },
    {
      q: "Can a patient talk to a person instead of the AI?",
      a: "Yes. The agent transfers the patient live to the site's coordinators or books a callback, whichever the site prefers.{{cite:bond-product}}",
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
      note: "Capabilities, outreach rules and compliance status described by Bond Health, November 2026.",
    },
    {
      id: "ecfr-64-1200",
      title: "47 CFR 64.1200, Delivery restrictions",
      publisher: "Legal Information Institute, Cornell Law School (eCFR text)",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      year: "2025",
    },
    {
      id: "fcc-24-24",
      title: "Report and Order and Further Notice of Proposed Rulemaking, Rules and Regulations Implementing the Telephone Consumer Protection Act of 1991 (FCC 24-24)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf",
      year: "2024",
    },
    {
      id: "ctia-messaging",
      title: "Messaging Principles and Best Practices, May 2023",
      publisher: "CTIA",
      url: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf",
      year: "2023",
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
      id: "kpsc-recruitment",
      title: "Sociodemographic characteristics of patients throughout the recruitment process into a randomized, controlled behavioral trial",
      publisher: "Trials (Springer Nature), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12625122/",
      year: "2025",
      note: "Kaiser Permanente Southern California physical activity trial for adults with diabetes or prediabetes, 2020 to 2023; patients found through the EHR were sent an email or letter, then called. Recruiters reached 4,033 of 11,152 by phone with up to five attempts.",
    },
    {
      id: "va-texting",
      title: "Code of Virginia § 59.1-514. Unwanted telephone solicitations prohibited",
      publisher: "Virginia General Assembly, Legislative Information System",
      url: "https://law.lis.virginia.gov/vacode/title59.1/chapter51/section59.1-514/",
      year: "2026",
      note: "Quote: \"In the case of a telephone solicitation via text message, such statement shall be made by replying to the text message with the word 'UNSUBSCRIBE' or 'STOP.'\" and \"Any such request not to receive telephone solicitations shall be honored for at least 10 years from the time the request is made.\"",
    },
    {
      id: "ca-puc-2872",
      title: "Public Utilities Code 2872",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PUC&sectionNum=2872",
      year: "2026",
      note: "Read October 5, 2026. Quote: \"A person shall not operate an automatic dialing-announcing device in this state to place a call that is received by a telephone in this state during the hours between 9 p.m. and 9 a.m. California time.\"",
    },
    {
      id: "ma-159c-3",
      title: "General Laws c. 159C, Section 3: Unsolicited telephonic sales calls",
      publisher: "The 194th General Court of the Commonwealth of Massachusetts",
      url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section3",
      year: "2026",
      note: "Read October 5, 2026. Bars unsolicited telephonic sales calls \"between the hours of 8:00 p.m. and 8:00 a.m.\", among other limits.",
    },
    {
      id: "nrs-597",
      title: "NRS Chapter 597, NRS 597.812 to 597.818",
      publisher: "Nevada Legislature",
      url: "https://www.leg.state.nv.us/NRS/NRS-597.html",
      year: "2021",
      note: "NRS 597.814(2) bars calls from the covered devices \"between 8 p.m. and 9 a.m.\"; the devices dial random or sequential numbers to play prerecorded messages that solicit purchases.",
    },
    {
      id: "ny-gbl-399z",
      title: "New York General Business Law Section 399-Z: Telemarketing sales call registry",
      publisher: "New York State Senate (Consolidated Laws)",
      url: "https://www.nysenate.gov/legislation/laws/GBS/399-Z",
      year: "2026",
      note: "Read October 5, 2026. A telemarketing sales call is \"a telephone call or electronic messaging text made directly or indirectly by a telemarketer\" for the purpose of \"inducing payment or ... consideration for any goods or services\".",
    },
    {
      id: "pa-act47-2026",
      title: "Act of Jul. 20, 2026, P.L. 532, No. 47 (SB 992): Telemarketer Registration Act, omnibus amendments",
      publisher: "Pennsylvania General Assembly",
      url: "https://www.palegis.us/WU01/LI/LI/US/HTM/2026/0/0047..HTM",
      year: "2026",
      note: "Read October 5, 2026. Prohibited: \"Initiating or causing to be initiated a telephone solicitation on a Sunday or after 7 p.m. or before 9 a.m.\"; extends the act to texts and ringless voicemail.",
    },
  ],
  related: [
    { label: "Engage", href: "/engage", description: "AI voice and SMS pre-screening and follow-up." },
    { label: "Security", href: "/security", description: "ISO 27001 certified, HIPAA and SOC 2 Type I compliant." },
    { label: "TCPA and AI outreach in 2026", href: "/blog/tcpa-ai-outreach-2026", description: "Consent, opt-outs and the FCC's 2026 rules." },
    { label: "IRB submission language for AI outreach", href: "/templates/irb-submission-language-ai-outreach", description: "Ready-to-adapt text for the IRB." },
    { label: "Case study: 193 randomized in two weeks", href: "/case-studies/vaccine-trial-enrollment", description: "One site's results in a Phase 3 vaccine trial." },
  ],
};

export default page;
