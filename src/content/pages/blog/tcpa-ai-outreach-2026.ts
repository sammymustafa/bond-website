import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/tcpa-ai-outreach-2026",
  category: "blog",
  title: "TCPA rules for AI voice calls and patient texts in 2026",
  description:
    "AI voices count as artificial under the TCPA, opt-outs can come in any form, and the healthcare exemption omits recruitment. What sites should do in 2026.",
  keywords: [
    "TCPA AI voice calls",
    "TCPA texting patients rules",
    "FCC AI-generated voice ruling",
    "TCPA consent revocation rule",
    "TCPA healthcare exemption",
  ],
  eyebrow: "Blog",
  h1: "TCPA and AI patient outreach: what sites need to know in 2026",
  intro:
    "Since 2024 the FCC has ruled that AI-generated voices are artificial voices under the TCPA and has rewritten how patients revoke consent to automated calls and texts.{{cite:fcc-24-17,fcc-24-24}} The upshot for research sites: AI calls about a study need prior express consent, because the healthcare exemption does not cover recruitment, and opt-out handling has to catch plain-language requests. This post is not legal advice.",
  summary: "The FCC's AI voice ruling, the 2025 opt-out rules and the healthcare exemption, applied to trial recruitment.",
  lastUpdated: "2026-09-24",
  blog: { date: "2026-09-21", author: "Bond Health", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "fcc-ai-voice-ruling",
      heading: "What did the FCC decide about AI voices?",
      blocks: [
        {
          type: "p",
          text: "On February 8, 2024, the FCC issued a declaratory ruling that the TCPA's limits on \"artificial or prerecorded voice\" calls cover AI technologies that generate human voices. A call that uses one needs the called party's prior express consent unless it is made for an emergency purpose or an exemption applies.{{cite:fcc-24-17}}",
        },
        {
          type: "p",
          text: "The trigger is the technology, not the message: an informational, IRB-approved study invitation delivered by AI voice to a mobile number still needs consent. Like any artificial-voice message, the call must also name the organization responsible at the start and give a callback number during or after it.{{cite:cfr-47-64-1200}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "AI disclosure is not yet a federal rule",
          text: "In August 2024 the FCC proposed defining AI-generated calls and requiring callers to tell consumers when they receive one. As of September 2026 the proposal had not been finalized.{{cite:fcc-24-84}}",
        },
      ],
    },
    {
      id: "healthcare-exemption",
      heading: "Does the healthcare exemption cover recruitment calls?",
      blocks: [
        {
          type: "p",
          text: "Not as written. It lets providers call or text a patient's mobile number without prior consent only for listed care messages under tight conditions.{{cite:cfr-47-64-1200}} Study recruitment is not on the list, and the other conditions are hard to meet on a pre-screening call.",
        },
        {
          type: "table",
          caption: "Exemption conditions next to a typical AI recruitment call",
          columns: ["Exemption condition", "Typical AI recruitment call"],
          rows: [
            ["Strictly limited to listed purposes, such as reminders, lab results and prescription notifications{{cite:cfr-47-64-1200}}", "A research study invitation, which is not a listed purpose"],
            ["Concise: generally one minute or less for voice calls, 160 characters or less for texts{{cite:cfr-47-64-1200}}", "A pre-screening script with several eligibility questions"],
            ["One message per day and no more than three per week per patient{{cite:cfr-47-64-1200}}", "First contact, follow-ups and visit reminders for one study"],
            ["No telemarketing, solicitation or advertising{{cite:cfr-47-64-1200}}", "A sponsor-funded invitation; whether that counts is a question for counsel"],
            ["An opt-out in every message, honored immediately{{cite:cfr-47-64-1200}}", "Achievable, and needed for the revocation rules anyway"],
          ],
        },
        {
          type: "p",
          text: "So for AI calls about a study, plan on prior express consent, not the exemption. Whether consent a site already holds, such as a research-contact preference collected at registration, covers a specific study is a question for counsel to settle before the IRB submission. Our [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach) covers the separate HIPAA question of who may contact which patients.",
        },
      ],
    },
    {
      id: "consent-revocation",
      heading: "What changed about opt-outs in 2025?",
      blocks: [
        {
          type: "p",
          text: "Revocation rules the FCC adopted in February 2024 took effect on April 11, 2025. A patient can revoke consent by any reasonable means, and the caller must honor the request within 10 business days.{{cite:fcc-24-24}} Text replies of stop, quit, end, revoke, opt out, cancel or unsubscribe count automatically, and other wording counts if a reasonable person would read it as a request to stop.{{cite:cfr-47-64-1200}}",
        },
        {
          type: "p",
          text: "That matters for AI agents. \"Please don't call me again\" mid-call, or \"take me off your list\" by text, is a revocation, so the agent has to recognize phrasing like this, not only the word STOP.{{cite:fcc-24-24}} One text confirming the opt-out is allowed, and one sent within five minutes is presumed to fall within the patient's consent.{{cite:cfr-47-64-1200}}",
        },
        {
          type: "p",
          text: "Still pending is the \"revoke-all\" rule, under which an opt-out from one type of informational message also revokes consent for the same caller's robocalls and robotexts on unrelated matters. As of September 2026 it has been delayed twice and is set to take effect January 31, 2027.{{cite:fcc-da-26-12}} For a site that sends both appointment reminders and study outreach, one opt-out could then cover both.",
        },
      ],
    },
    {
      id: "texting-rules",
      heading: "Do the same rules apply to texts?",
      blocks: [
        {
          type: "p",
          text: "Largely. The FCC treats text messages as calls, and the healthcare exemption and opt-out rules above name texts explicitly. Federal rules also bar telephone solicitations before 8 a.m. or after 9 p.m. at the patient's location.{{cite:cfr-47-64-1200}} A study invitation may not count as a solicitation, but that window is a sensible outer bound.",
        },
        {
          type: "p",
          text: "Texting adds a second gatekeeper: the carriers. They police business texting using CTIA's voluntary messaging principles, which call for opt-in before any message, a standard STOP opt-out and one final confirmation.{{cite:ctia-2023}} Texts from a standard 10-digit number (10DLC) also need brand and campaign registration with The Campaign Registry before carriers allow them.{{cite:tcr}} Our [patient outreach SMS templates](/templates/patient-outreach-sms-templates) include disclosure and opt-out wording.",
        },
      ],
    },
    {
      id: "state-ai-laws",
      heading: "Do state laws add AI disclosure rules?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Texas.** Since January 1, 2026, a provider that uses AI in relation to health care services must disclose it to the patient in clear, plain language no later than when the service is first provided.{{cite:tx-hb149}}",
            "**California.** Since January 1, 2025, clinics and physician offices using generative AI to write patient messages about clinical information must include a disclaimer and instructions for reaching a human (spoken at the start and end of audio), unless a licensed provider reviews the message. Messages about scheduling and billing are excluded.{{cite:ca-ab3030}}",
            "**Colorado.** A rewritten AI law signed in May 2026 takes effect January 1, 2027 and requires notice at the point of interaction when covered automated tools are used in consequential decisions, which include health care services.{{cite:co-sb26-189}}",
          ],
        },
        {
          type: "p",
          text: "Whether recruitment calls fall inside each law depends on its definitions; ask counsel. The simpler path is to disclose AI use on every contact. Bond's [Engage](/engage) agents tell each patient that AI assistance is being used, and the patient can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
        },
      ],
    },
    {
      id: "site-checklist",
      heading: "What should a site do before turning on AI outreach?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Write down the consent basis** for each patient list, have counsel sign off, and do not rely on the healthcare exemption.",
            "**Put the disclosure in the script.** Name the site at the start, give a callback number, say that AI is being used and offer a person.",
            "**Send the script to the IRB** with the disclosure line, contact window, attempts and opt-out handling. Start from our [IRB submission language](/templates/irb-submission-language-ai-outreach).",
            "**Test opt-outs in plain language.** Try free-text replies and mid-call requests, not only the word STOP.",
            "**Suppress fast.** Log each opt-out with its date and remove the number well inside the 10 business day limit.{{cite:fcc-24-24}}",
            "**Register before you text.** Build 10DLC brand and campaign registration into the launch timeline.{{cite:tcr}}",
            "**Mark January 31, 2027** and decide how one opt-out will apply across reminders and research outreach.{{cite:fcc-da-26-12}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how AI disclosure, live transfers, human callback requests and coordinator escalation work in an Engage script built for your study.",
          secondaryLabel: "Read the IRB and HIPAA guide",
          secondaryHref: "/guides/irb-hipaa-patient-outreach",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is a coordinator calling by hand covered by the AI voice ruling?",
      a: "No. The ruling is about AI-generated voices, so a person dialing and speaking is outside it.{{cite:fcc-24-17}} Still keep one opt-out list for staff and automated contact, so a patient who said no is not called again.",
    },
    {
      q: "Does federal law require an AI call to say it is AI?",
      a: "Not as of September 2026; the FCC's 2024 proposal is still pending.{{cite:fcc-24-84}} Every artificial-voice call must already name the organization behind it, and Texas requires disclosure of AI use in health care.{{cite:cfr-47-64-1200,tx-hb149}}",
    },
  ],
  sources: [
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
    },
    {
      id: "fcc-da-26-12",
      title: "Order extending limited waiver of 47 CFR 64.1200(a)(10) (DA 26-12)",
      publisher: "Federal Communications Commission, Consumer and Governmental Affairs Bureau",
      url: "https://docs.fcc.gov/public/attachments/DA-26-12A1.pdf",
      year: "2026",
      note: "Quote (paragraph 1): \"we extend the waiver of section 64.1200(a)(10) of the Commission's rules to the extent the rule requires callers to treat a request to revoke consent made by a called party in response to one type of informational message as applicable to all future robocalls and robotexts from that caller on unrelated matters. Specifically, we find that good cause exists to extend the effective date for this requirement until January 31, 2027\"",
    },
    {
      id: "cfr-47-64-1200",
      title: "47 CFR 64.1200: Delivery restrictions",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      year: "2025",
      note: "Quote (paragraph (a)(1)): \"initiate any telephone call (other than a call made for emergency purposes or is made with the prior express consent of the called party) using an automatic telephone dialing system or an artificial or prerecorded voice\". Quote (paragraph (a)(9)(iv)(B)): \"Voice calls and text messages must state the name and contact information of the healthcare provider (for voice calls, these disclosures would need to be made at the beginning of the call)\". Quote (paragraph (a)(9)(iv)(C)): \"Voice calls and text messages are strictly limited to those for the following purposes: appointment and exam confirmations and reminders, wellness checkups, hospital pre-registration instructions, pre-operative instructions, lab results, post-discharge follow-up intended to prevent readmission, prescription notifications, and home healthcare instructions\". Quote (paragraph (a)(9)(iv)(E)): \"Voice calls and text messages must be concise, generally one minute or less in length for voice calls or 160 characters or less in length for text messages\". Quote (paragraph (a)(9)(iv)(H)): \"A healthcare provider must honor opt-out requests immediately\". Quote (paragraph (a)(10)): \"If a reply to an incoming text message uses words other than 'stop,' 'quit,' 'end,' 'revoke,' 'opt out,' 'cancel,' or 'unsubscribe,' the caller must treat that reply text as a valid revocation request if a reasonable person would understand those words to have conveyed a request to revoke consent.\" Quote (paragraph (a)(12)): \"If the confirmation text is sent within five minutes of receipt, it will be presumed to fall within the consumer's prior express consent.\" Quote (paragraph (b)(1) and (b)(2)): \"At the beginning of the message, state clearly the identity of the business, individual, or other entity that is responsible for initiating the call\"; \"During or after the message, state clearly the telephone number\". Quote (paragraph (c)(1)): \"No person or entity shall initiate any telephone solicitation to any residential telephone subscriber before the hour of 8 a.m. or after 9 p.m. (local time at the called party's location)\"",
    },
    {
      id: "ctia-2023",
      title: "Messaging Principles and Best Practices",
      publisher: "CTIA",
      url: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf",
      year: "2023",
    },
    {
      id: "tcr",
      title: "The Campaign Registry: 10DLC brand and campaign registration",
      publisher: "The Campaign Registry",
      url: "https://www.campaignregistry.com/",
      year: "2026",
    },
    {
      id: "tx-hb149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act (enrolled)",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
    },
    {
      id: "ca-ab3030",
      title: "AB-3030 Health care services: artificial intelligence (Chapter 848, Statutes of 2024)",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3030",
      year: "2024",
      note: "Quote (Health and Safety Code 1339.75): \"For audio communications, the disclaimer shall be provided verbally at the start and the end of the interaction.\" Quote: \"If a communication is generated by generative artificial intelligence and read and reviewed by a human licensed or certified health care provider, the requirements of subdivision (a) do not apply.\" Patient clinical information excludes \"appointment scheduling, billing, or other clerical or business matters.\"",
    },
    {
      id: "co-sb26-189",
      title: "SB26-189 Automated Decision-Making Technology",
      publisher: "Colorado General Assembly",
      url: "https://leg.colorado.gov/bills/sb26-189",
      year: "2026",
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
    { label: "Engage: voice and text outreach", href: "/engage", description: "How Bond's agents disclose AI use, offer a human and escalate to coordinators." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact patients, under which HIPAA path, with what IRB approval." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "First-contact, reminder and opt-out wording for texts." },
    { label: "IRB submission language for AI outreach", href: "/templates/irb-submission-language-ai-outreach", description: "Draft paragraphs that describe AI outreach in an IRB application." },
    { label: "TCPA", href: "/glossary/tcpa", description: "The federal law behind the autodialer, artificial voice and texting rules." },
  ],
};

export default page;
