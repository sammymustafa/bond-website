import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/a2p-10dlc-sms-registration",
  category: "blog",
  title: "A2P 10DLC registration for research sites that text",
  description:
    "What carriers require before a research site can text patients from a 10-digit number: brand and campaign registration, opt-in proof, timelines and fees.",
  keywords: [
    "A2P 10DLC registration research site",
    "10DLC clinical trial texting",
    "The Campaign Registry brand campaign",
    "SMS registration patient outreach",
    "10DLC campaign rejected",
  ],
  eyebrow: "Blog",
  h1: "A2P 10DLC registration for research sites that text patients: what carriers require",
  intro:
    "If your site texts patients from an ordinary 10-digit number through any software platform, U.S. carriers expect that traffic to be registered under A2P 10DLC. You register a brand (who is sending) and a campaign (what you send and how people opt in) through a messaging provider with The Campaign Registry.{{cite:twilio-10dlc,tcr}} Campaign vetting can take two to three weeks, so start before a study's ads go live.{{cite:twilio-standard}} This reflects provider documentation as of October 2026.",
  summary: "What A2P 10DLC is, what carriers check, how long registration takes, what it costs and what gets research texting campaigns rejected.",
  lastUpdated: "2026-12-16",
  blog: { date: "2026-12-16", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "SMS templates", secondaryHref: "/templates/patient-outreach-sms-templates" },
  sections: [
    {
      id: "what-is-10dlc",
      heading: "What is A2P 10DLC, and does it apply to a research site?",
      blocks: [
        {
          type: "p",
          text: "A2P (application-to-person) 10DLC (10-digit long code) is the standard U.S. carriers use to make sure business texts sent from local numbers are verified and consensual. Twilio's documentation says carriers treat any message sent through a messaging provider as application-to-person, and that anyone sending texts over a 10DLC number from an application to U.S. recipients must register.{{cite:twilio-10dlc}} A site that sends study invitations, pre-screening links or visit reminders from a platform is in scope.",
        },
        {
          type: "p",
          text: "Registration runs through your provider. The Campaign Registry (TCR) says brands cannot register with it directly and must work with a registered campaign service provider.{{cite:tcr}} Skipping it has a cost: Twilio notes that unregistered senders face more filtering and additional carrier fees.{{cite:twilio-10dlc}} Toll-free numbers are a separate system with their own verification, and Twilio's toll-free numbers cannot text U.S. or Canadian recipients until verification is approved.{{cite:twilio-tollfree}}",
        },
      ],
    },
    {
      id: "what-carriers-check",
      heading: "What do carriers check during registration?",
      blocks: [
        {
          type: "table",
          caption: "Items reviewed for a brand and campaign, per Twilio's registration guide",
          columns: ["Item", "What reviewers look for", "What it means for a study"],
          rows: [
            ["Legal name and tax ID", "The name exactly as registered with the EIN, as shown on the CP 575 confirmation letter{{cite:twilio-collect}}", "Register under the legal entity that runs the site, not a study nickname"],
            ["Website", "A functional site related to the business; a screenshot is captured and checked{{cite:twilio-collect}}", "Use the site's main domain, not a temporary landing page"],
            ["Campaign description", "Who the sender is, who the recipients are and why they get messages{{cite:twilio-collect}}", "Say the site texts people who asked about a research study"],
            ["Opt-in description", "Every opt-in method, described in 40 to 2,049 characters, with screenshots if the opt-in is not public{{cite:twilio-collect}}", "Point to the study landing page checkbox and quote its wording"],
            ["Privacy policy", "Public, says mobile numbers are not shared with third parties, discloses message frequency and \"Message and data rates may apply\"{{cite:twilio-collect}}", "Update the site's policy before submitting"],
            ["Sample messages", "Two to five samples, brand named in each, variables in brackets{{cite:twilio-collect}}", "Use your IRB-approved texts, with the site's name in each"],
          ],
          note: "Terms and conditions must be public and hosted on the business's own domain.{{cite:twilio-collect}}",
        },
        {
          type: "p",
          text: "These match the carrier industry's own expectations. CTIA's messaging principles ask that people know the program, the sending numbers, the organization behind the messages, any fees and how to opt out, and that senders keep records of each opt-in.{{cite:ctia-2023}} Our [SMS templates](/templates/patient-outreach-sms-templates) include opt-out wording you can adapt.",
        },
      ],
    },
    {
      id: "use-case",
      heading: "Which campaign use case fits study texting?",
      blocks: [
        {
          type: "p",
          text: "Twilio's list of standard use cases includes account notifications, customer care, marketing and mixed campaigns, plus special use cases for groups such as charities and emergency services. The list we reviewed has no research-specific category.{{cite:twilio-collect}} Pick the one that honestly describes the traffic: a campaign that sends study invitations and visit reminders covers more than one purpose. Mixed campaigns are likely to get lower throughput and a higher cost per message, and the low-volume mixed type is capped at the lowest throughput tier.{{cite:twilio-collect}}",
        },
        {
          type: "p",
          text: "Match the traffic to the registration once you are live. Twilio lists a mismatch between registered campaign and actual traffic as a reason carriers suspend campaigns.{{cite:twilio-rectify}}",
        },
      ],
    },
    {
      id: "time-and-cost",
      heading: "How long does registration take, and what does it cost?",
      blocks: [
        {
          type: "p",
          text: "Allow a month. Twilio says TCR often reviews a brand within minutes, but manual reviews take seven business days or more, and a newly issued EIN can take 30 to 90 days to show up in validation databases. Campaign vetting then takes two to three weeks.{{cite:twilio-standard,twilio-collect}}",
        },
        {
          type: "table",
          caption: "A2P 10DLC fees Twilio lists as passed through from TCR and carriers",
          columns: ["Fee", "Amount"],
          rows: [
            ["Low-volume standard brand registration", "$4.50 one time{{cite:twilio-fees}}"],
            ["Standard brand registration, including secondary vetting", "$46 one time{{cite:twilio-fees}}"],
            ["Campaign vetting", "$15 per campaign{{cite:twilio-fees}}"],
            ["Standard campaign", "$10 per month{{cite:twilio-fees}}"],
            ["Low-volume mixed campaign", "$1.50 per month{{cite:twilio-fees}}"],
            ["Carrier fees", "Per message segment, set by each carrier{{cite:twilio-fees}}"],
          ],
          note: "Twilio says TCR raised several fees on August 1, 2025. Other providers' prices may differ; check yours.{{cite:twilio-fees}}",
        },
      ],
    },
    {
      id: "rejections",
      heading: "What gets research texting campaigns rejected or suspended?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Vague descriptions or samples.** Invalid campaign descriptions and sample messages that do not match the use case are among the fixable rejection reasons Twilio lists.{{cite:twilio-rectify}}",
            "**Public link shorteners.** Randomly shortened links from free services lead TCR to reject a campaign; use a short domain the business owns.{{cite:twilio-rectify}}",
            "**Restricted topics.** Content referring to alcohol, firearms, tobacco or marijuana can be disallowed outright, and messaging about controlled substances is listed among suspension reasons. Studies in those areas should ask their provider before submitting.{{cite:twilio-rectify}}",
            "**Shared opt-ins.** Sharing opt-ins with affiliate companies is a suspension reason, as is an excessive volume of complaints.{{cite:twilio-rectify}}",
          ],
        },
        {
          type: "p",
          text: "A suspended campaign cannot send messages, and Twilio warns against moving the same traffic to another campaign. If carriers decide the use case does not fit A2P 10DLC, Twilio deletes the campaign and releases its numbers after 30 days of suspension.{{cite:twilio-rectify}}",
        },
      ],
    },
    {
      id: "vendors",
      heading: "What should you ask a vendor that texts for you?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Whose brand is registered?** CTIA expects messages to identify the organization they represent, and an opt-in to cover only the campaign and sender it was given for.{{cite:ctia-2023}}",
            "**Does the opt-in wording on our form name that sender?** If a vendor sends under its own brand, the consent text should say so.",
            "**Which number and campaign ID will our study use**, and when was it approved?",
            "**How do STOP replies reach our opt-out list?** One list should cover staff and every platform.",
            "**Are the sample messages our IRB-approved texts?** Registration samples should match what is actually sent.{{cite:twilio-collect}}",
          ],
        },
        {
          type: "p",
          text: "Bond's SMS agents contact every new ad lead immediately and keep following up with every lead who has not responded, so confirm the sending setup for each study before its ads launch.{{cite:bond-product}} Registration is separate from consent: carriers check your process, while the TCPA governs whether you may text at all. Our [TCPA guide](/blog/tcpa-ai-outreach-2026) covers that side. This is not legal advice.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond's text agents reach new leads, honor opt-outs and hand patients to your coordinators.",
          secondaryLabel: "Read about Engage",
          secondaryHref: "/engage",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do we need 10DLC registration if coordinators text from their own phones?",
      a: "Person-to-person texting from a personal phone is outside A2P registration, which covers messages sent through an application.{{cite:twilio-10dlc}} It also leaves no central record of consent or opt-outs, which is a problem of its own.",
    },
    {
      q: "Does registration mean our texts are TCPA compliant?",
      a: "No. Registration is a carrier requirement about who is sending and how people opt in. Consent and opt-out rules under the TCPA apply separately; see our [TCPA guide](/blog/tcpa-ai-outreach-2026).",
    },
    {
      q: "Can one registration cover several studies?",
      a: "Often, if the campaign description and samples cover the kinds of messages every study sends. Twilio says each brand may register up to five campaigns unless there is a clear business reason for more.{{cite:twilio-10dlc}}",
    },
  ],
  sources: [
    {
      id: "twilio-10dlc",
      title: "Programmable Messaging and A2P 10DLC",
      publisher: "Twilio Docs",
      url: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc",
      year: "2026",
      note: "Read October 2026. Quote: \"A2P (Application-to-Person) 10DLC (10-digit long code) is the standard that United States telecom carriers have put in place to ensure that SMS traffic to US end users through long code phone numbers is verified and consensual.\" Quote: \"Anyone sending SMS/MMS messages over a 10DLC number from an application to the US must register for A2P 10DLC.\" Quote: \"Registering for A2P 10DLC results in lower message filtering and higher messaging throughput. Additionally, customers who send messages from a Twilio 10DLC number but do not register will receive additional carrier fees for sending unregistered traffic.\" Quote: \"Each Brand may register up to five Campaigns, unless a clear and valid business reason is provided for exceeding this limit\". Quote: \"Traffic sent from an individual person to another person is called Person to Person (P2P) traffic.\"",
    },
    {
      id: "tcr",
      title: "The Campaign Registry",
      publisher: "The Campaign Registry",
      url: "https://www.campaignregistry.com/",
      year: "2026",
      note: "Read October 2026. Quote: \"10DLC is an A2P messaging channel in which Brands and Campaign Service Providers (CSPs) are verified prior to being allowed to send messages.\" Quote: \"Currently, direct registration with TCR is not available for Brands. Instead, you must work with one of the registered messaging service providers (CSP) who will handle your registration process on your behalf.\"",
    },
    {
      id: "twilio-collect",
      title: "Gather business information for A2P 10DLC registration",
      publisher: "Twilio Docs",
      url: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/collect-business-info",
      year: "2026",
      note: "Read October 2026. Quote: \"Do not use the legal business name found on the W2 or W9 forms as they may differ from the CP 575 notice.\" Quote: \"Newly issued EINs or equivalent tax IDs can take 30-90 days to propagate across database validation systems.\" Quote: \"A screenshot is captured and is evaluated against the A2P 10DLC compliance rules.\" Quote: \"The description should include who the sender is, who the recipients are, and why messages are being sent to the recipients.\" Quote: \"A detailed description of how end users opt in (consent) to receiving the Campaign's messages. Must be between 40 and 2049 characters in length.\" Privacy policy criteria: \"State that you will not share users' mobile numbers with third parties. Disclose message frequency ... Include the statement \"Message and data rates may apply.\"\" Quote: \"Minimum of two messages. Maximum of five messages.\" Quote: \"The Brand must be identified by name and/or website in each message.\" Quote: \"Mixed campaigns are likely to have lower throughput and a higher cost per message.\"",
    },
    {
      id: "twilio-standard",
      title: "Direct Standard and Low-Volume Standard registration",
      publisher: "Twilio Docs",
      url: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/direct-standard-onboarding",
      year: "2026",
      note: "Read October 2026. Quote: \"TCR review typically occurs within a few minutes after submitting, but process length varies depending on how much vetting the Brand requires.\" Quote: \"Manual reviews take seven business days or more.\" Quote: \"Once submitted, your Campaign undergoes a manual vetting process and has a pending status. This process can take between two to three weeks to complete.\"",
    },
    {
      id: "twilio-rectify",
      title: "Troubleshooting and rectifying A2P 10DLC campaigns",
      publisher: "Twilio Docs",
      url: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/troubleshooting-a2p-brands/troubleshooting-and-rectifying-a2p-campaigns-1",
      year: "2026",
      note: "Read October 2026. Quote: \"You cannot use the sort of randomly-shortened URL typically furnished by a free service like bit.ly or TinyUrl; this will lead to rejection of the Campaign by TCR.\" Quote: \"prohibited under the terms of A2P Campaign registration, such as sexual references, hate speech, or references to alcohol, firearms, tobacco products or marijuana.\" Suspension reasons include \"Campaign-to-traffic mismatch\", \"Controlled substance\", \"(Excessive) Complaints\" and \"Affiliate Marketing: including but not limited to sharing of opt-ins to affiliate companies\". Quote: \"after 30 days of being suspended, Twilio will automatically delete your suspended campaigns and release all the associated phone numbers.\"",
    },
    {
      id: "twilio-fees",
      title: "Pricing and Fees for A2P 10DLC Service",
      publisher: "Twilio Help Center",
      url: "https://help.twilio.com/articles/1260803965530-What-pricing-and-fees-are-associated-with-the-A2P-10DLC-service",
      year: "2026",
      note: "Read October 2026. Quote: \"TCR increased some of their standard fees on August 1, 2025.\" Quote: \"US A2P Low Volume Standard Brand registration fee: $4.50 one-time registration fee\". Quote: \"US A2P Standard Brand registration fee: $46 one-time registration fee (includes Secondary Vetting for A2P 10DLC).\" Quote: \"US A2P Campaign use case registration fees: $15 vetting fee\". Monthly: Standard $10/month; Low-volume mixed $1.50/month. Quote: \"Both types of fees are charged by carriers as part of the A2P 10DLC system, and are passed through by Twilio to our customers with no added cost.\"",
    },
    {
      id: "twilio-tollfree",
      title: "Toll-free verification console onboarding guide",
      publisher: "Twilio Docs",
      url: "https://www.twilio.com/docs/messaging/compliance/toll-free/console-onboarding",
      year: "2026",
      note: "Read October 2026. Quote: \"Twilio toll-free numbers can't send SMS messages to the United States and Canada until you've completed toll-free verification and Twilio approved your verification.\"",
    },
    {
      id: "ctia-2023",
      title: "Messaging Principles and Best Practices",
      publisher: "CTIA",
      url: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf",
      year: "2023",
      note: "May 2023. Read October 2026. Quote (5.1.1): \"A Call-to-Action should ensure that Consumers are aware of: (1) the program or product description; (2) the telephone number(s) or short code(s) from which messaging will originate; (3) the specific identity of the organization or individual being represented in the initial message; (4) clear and conspicuous language about opt-in and any associated fees or charges; and (5) other applicable terms and conditions\". Quote (5.1.2.2): \"A Consumer opt-in should apply only to the campaign(s) and specific Message Sender for which it was intended or obtained.\"",
    },
    {
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, pricing and compliance status described by Bond Health, October 2026.",
    },
  ],
  related: [
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "First-contact, reminder and opt-out wording for texts." },
    { label: "TCPA rules for AI voice calls and patient texts", href: "/blog/tcpa-ai-outreach-2026", description: "Consent and opt-out rules that apply on top of carrier registration." },
    { label: "TCPA", href: "/glossary/tcpa", description: "The federal law behind the autodialer, artificial voice and texting rules." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "How Bond's agents text and call every lead." },
  ],
};

export default page;
