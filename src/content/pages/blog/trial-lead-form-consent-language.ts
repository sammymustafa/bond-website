import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/trial-lead-form-consent-language",
  category: "blog",
  title: "Trial lead form consent language for calls and texts",
  description:
    "What a trial ad lead form needs before automated calls, AI voice or texts: TCPA written consent elements, carrier opt-in rules and the records to keep.",
  keywords: [
    "TCPA consent language lead form",
    "clinical trial lead form consent",
    "prior express written consent web form",
    "SMS opt-in language research study",
    "TCPA consent records",
  ],
  eyebrow: "Blog",
  h1: "What a trial ad lead form needs before anyone calls or texts",
  intro:
    "If anyone will reach a lead with an autodialer, an AI or prerecorded voice, or a texting platform, the form needs consent language that names who will contact them, how, at which number, and how to stop, plus a record that proves the person agreed.{{cite:cfr-47-64-1200,fcc-24-17}} This post sets out the federal elements, the carrier expectations for texts and the records to keep, as of October 2026. It is not legal advice; have counsel review your wording.",
  summary: "TCPA written consent elements, carrier opt-in expectations and consent records for trial ad lead forms, as of October 2026.",
  lastUpdated: "2026-11-16",
  blog: { date: "2026-11-16", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read the TCPA guide", secondaryHref: "/blog/tcpa-ai-outreach-2026" },
  sections: [
    {
      id: "which-standard",
      heading: "Which consent standard applies to a trial lead?",
      blocks: [
        {
          type: "p",
          text: "Under FCC rules, a call to a mobile number using an autodialer or an artificial or prerecorded voice needs the called party's prior express consent. If the call includes an advertisement or constitutes telemarketing, the bar rises to **prior express written consent**.{{cite:cfr-47-64-1200}} The FCC confirmed in 2024 that AI-generated voices count as artificial voices, so an AI pre-screening call needs consent too.{{cite:fcc-24-17}}",
        },
        {
          type: "p",
          text: "Is a study invitation telemarketing? The rules define telemarketing as a call or message that encourages the purchase or rental of, or investment in, property, goods or services.{{cite:cfr-47-64-1200}} A research invitation may fall outside that, but sponsor funding and paid participation make the answer less clear. Many sites simply design forms to the written-consent standard, which also satisfies the lower one.",
        },
      ],
    },
    {
      id: "required-elements",
      heading: "What must the consent language say?",
      blocks: [
        {
          type: "p",
          text: "The FCC defines prior express written consent as a signed written agreement that clearly authorizes calls using an autodialer or artificial or prerecorded voice and names the telephone number. It must clearly and conspicuously disclose that the person is authorizing such calls and is not required to agree as a condition of purchasing anything. An electronic signature recognized under federal or state law counts.{{cite:cfr-47-64-1200}} The FCC's 2012 order confirmed that consent obtained through a website form in line with the E-SIGN Act qualifies.{{cite:fcc-12-21}}",
        },
        {
          type: "p",
          text: "For texts, carriers follow CTIA's messaging principles, which call for a clear call-to-action covering the program description, the numbers messages will come from, the organization sending them, any fees, and terms such as how to opt out, customer care contact and the privacy policy. Opt-in details should not be buried in other terms.{{cite:ctia-2023}}",
        },
        {
          type: "quote",
          text: "By checking this box, I agree that [Site name] and [vendor name], on its behalf, may call and text me at the number above about this research study, including screening and scheduling, using automated technology and artificial or AI-generated voices. I do not have to agree to take part in the study or to receive care; I can call [phone] instead. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. [Privacy policy link]",
          attribution: "Sample checkbox wording to adapt with counsel and submit to the IRB",
        },
        {
          type: "p",
          text: "Put the box next to the phone field, leave it unchecked, and keep it separate from any terms of use. The rules define \"clear and conspicuous\" as apparent to a reasonable consumer and separate from the advertising copy.{{cite:cfr-47-64-1200}}",
        },
      ],
    },
    {
      id: "one-to-one",
      heading: "What happened to the FCC's one-to-one consent rule?",
      blocks: [
        {
          type: "p",
          text: "It never took effect. In a 2023 order the FCC said consent to telemarketing robocalls had to be given to one seller at a time and cover only calls logically and topically related to the interaction. On January 24, 2025, the Eleventh Circuit held that the FCC exceeded its authority and vacated that part of the order.{{cite:ca11-imc-2025}}",
        },
        {
          type: "p",
          text: "Carrier expectations still point the same way. CTIA says an opt-in should apply only to the campaign and sender it was obtained for, should not be transferable, and that senders should not use opt-in lists that were rented, sold or shared.{{cite:ctia-2023}} For a site, that means naming yourself and any vendor that calls for you, and not passing leads to unrelated sponsors.",
        },
      ],
    },
    {
      id: "records",
      heading: "What consent records should a site keep?",
      blocks: [
        {
          type: "p",
          text: "If consent is ever disputed, the caller bears the burden of showing that a clear and conspicuous disclosure was provided and that unambiguous consent was obtained.{{cite:fcc-12-21}} The stakes are real: the TCPA lets people sue for actual losses or $500 per violation, whichever is greater, and a court can award up to three times that for willful or knowing violations.{{cite:usc-47-227}} CTIA lists what to retain for text opt-ins:{{cite:ctia-2023}}",
        },
        {
          type: "checklist",
          items: [
            "Timestamp of consent.",
            "How consent was collected, such as a web form or keyword.",
            "A capture of the experience: the exact language shown and the action taken.",
            "The specific campaign the opt-in covers.",
            "The IP address used.",
            "The phone number consented.",
            "The identity of the person, by name or another identifier such as a session ID.",
          ],
        },
        {
          type: "p",
          text: "Add the version of the form and its IRB approval date, plus every opt-out with the date received; revocations must be honored within 10 business days.{{cite:cfr-47-64-1200}} On retention, federal law sets a default four-year limit for suits under federal statutes enacted after December 1, 1990, and the TCPA dates from 1991, so keep records at least that long unless counsel advises otherwise.{{cite:usc-28-1658,fcc-24-17}}",
        },
      ],
    },
    {
      id: "state-laws",
      heading: "Do state laws change the consent language?",
      blocks: [
        {
          type: "p",
          text: "Some states have their own versions. Florida's Telephone Solicitation Act requires prior express written consent for unsolicited sales calls and texts that use an automated system for selecting and dialing numbers or a recorded message, and its definition mirrors the federal elements: a signature, the authorized number, and a clear disclosure that agreeing is not a condition of purchase.{{cite:fl-501059}} Whether a study invitation is a \"telephonic sales call\" under that law is a question for counsel, but a form built to the federal written standard covers the same elements.",
        },
        {
          type: "p",
          text: "Calls placed later can reach a different person if the number has been reassigned. The FCC provides a safe harbor for callers who checked its reassigned numbers database and got an erroneous answer, so check the database before calling old leads about a new study.{{cite:cfr-47-64-1200}}",
        },
      ],
    },
    {
      id: "before-first-call",
      heading: "What should be in place before the first call or text?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Consent wording approved** by counsel and included in the IRB submission with the rest of the landing page.",
            "**A consent log** that stores the fields above for every lead, linked to the lead record.",
            "**One opt-out list** shared by staff, vendors and every channel, honored well inside 10 business days.{{cite:cfr-47-64-1200}}",
            "**Text registration done** for any business number that will send texts.",
            "**AI disclosure in the script**, so the person hears that AI is used and how to reach a human. See our [TCPA guide](/blog/tcpa-ai-outreach-2026).",
          ],
        },
        {
          type: "p",
          text: "Speed makes this matter more, not less. Bond's voice and SMS agents contact every new ad lead immediately and keep following up with every lead who has not responded, so the consent and opt-out handling have to be live before the first lead arrives.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond contacts each consented lead immediately, discloses AI use and routes opt-outs.",
          secondaryLabel: "SMS templates with opt-out wording",
          secondaryHref: "/templates/patient-outreach-sms-templates",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can the consent checkbox be pre-checked?",
      a: "Avoid it. The caller has to be able to show that a clear and conspicuous disclosure was made and that consent was unambiguous, and a box the person never touched is weak evidence of either.{{cite:fcc-12-21}}",
    },
    {
      q: "Does a coordinator dialing by hand need written consent?",
      a: "The written-consent and artificial-voice rules apply to calls using an autodialer or an artificial or prerecorded voice.{{cite:cfr-47-64-1200}} Calls dialed and spoken by a person fall outside those particular rules, but do-not-call rules, opt-outs and state laws can still apply; ask counsel how your dialing system is classified.",
    },
    {
      q: "Can we use one lead's consent for future studies?",
      a: "Only if the wording covered them. CTIA expects an opt-in to apply only to the campaign and sender it was obtained for.{{cite:ctia-2023}} If you want to contact people about future studies, say so in the consent language and get IRB approval.",
    },
  ],
  sources: [
    {
      id: "cfr-47-64-1200",
      title: "47 CFR 64.1200: Delivery restrictions",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      year: "2026",
      note: "Read October 2026. Quote (paragraph (a)(2)): \"Initiate, or cause to be initiated, any telephone call that includes or introduces an advertisement or constitutes telemarketing, using an automatic telephone dialing system or an artificial or prerecorded voice, to any of the lines or telephone numbers described in paragraphs (a)(1)(i) through (iii) of this section, other than a call made with the prior express written consent of the called party\". Quote (paragraph (f)(9)): \"The term prior express written consent means an agreement, in writing, bearing the signature of the person called that clearly authorizes the seller to deliver or cause to be delivered to the person called advertisements or telemarketing messages using an automatic telephone dialing system or an artificial or prerecorded voice, and the telephone number to which the signatory authorizes such advertisements or telemarketing messages to be delivered.\" Quote (paragraph (f)(3)): \"The term clear and conspicuous means a notice that would be apparent to the reasonable consumer, separate and distinguishable from the advertising copy or other disclosures.\" Quote (paragraph (f)(13)): \"The term telemarketing means the initiation of a telephone call or message for the purpose of encouraging the purchase or rental of, or investment in, property, goods, or services\". Quote (paragraph (a)(10)): \"must be honored within a reasonable time not to exceed ten business days from receipt of such request.\" Paragraph (m) sets out the reassigned numbers database safe harbor.",
    },
    {
      id: "fcc-24-17",
      title: "Declaratory Ruling, Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts (FCC 24-17)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      year: "2024",
      note: "Read October 2026. Quote: \"we confirm that the TCPA’s restrictions on the use of “artificial or prerecorded voice” encompass current AI technologies that generate human voices. As a result, calls that use such technologies fall under the TCPA and the Commission’s implementing rules, and therefore require the prior express consent of the called party to initiate such calls absent an emergency purpose or exemption.\" Footnote 1 cites the TCPA as \"Pub. L. No. 102-243, 105 Stat. 2394 (1991)\".",
    },
    {
      id: "fcc-12-21",
      title: "Report and Order, Rules and Regulations Implementing the Telephone Consumer Protection Act of 1991 (FCC 12-21)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-12-21A1.pdf",
      year: "2012",
      note: "Read October 2026. Quote (para. 33): \"should any question about the consent arise, the seller will bear the burden of demonstrating that a clear and conspicuous disclosure was provided and that unambiguous consent was obtained.\" Quote (para. 34): \"The FTC specifically found that consent obtained via an email, website form, text message, telephone keypress, or voice recording are in compliance with the E- SIGN Act and would satisfy the written consent requirement in the amended TSR. Consistent with the FTC, we now similarly conclude that consent obtained in compliance with the E-SIGN Act will satisfy the requirements of our revised rule\".",
    },
    {
      id: "ca11-imc-2025",
      title: "Insurance Marketing Coalition Ltd. v. FCC, No. 24-10277",
      publisher: "U.S. Court of Appeals for the Eleventh Circuit",
      url: "https://media.ca11.uscourts.gov/opinions/pub/files/202410277.pdf",
      year: "2025",
      note: "Opinion filed January 24, 2025. Read October 2026. Quote: \"we agree with IMC that the FCC exceeded its statutory authority under the TCPA because the 2023 Order’s new consent restrictions impermissibly conflict with the ordinary statutory meaning of “prior express consent.” Accordingly, we grant IMC’s petition for review, vacate Part III.D of the 2023 Order, and remand for further proceedings.\"",
    },
    {
      id: "ctia-2023",
      title: "Messaging Principles and Best Practices",
      publisher: "CTIA",
      url: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf",
      year: "2023",
      note: "May 2023. Read October 2026. Quote (5.1.1): \"A Call-to-Action should ensure that Consumers are aware of: (1) the program or product description; (2) the telephone number(s) or short code(s) from which messaging will originate; (3) the specific identity of the organization or individual being represented in the initial message; (4) clear and conspicuous language about opt-in and any associated fees or charges; and (5) other applicable terms and conditions (e.g., how to opt-out, customer care contact information, and any applicable privacy policy).\" Quote: \"Message Senders should also document opt-in consent by retaining the following data where applicable: • Timestamp of consent acquisition; • Consent acquisition medium ... • Capture of experience (e.g., language and action) used to secure consent; • Specific campaign for which the opt-in was provided; • IP address used to grant consent; • Consumer phone number for which consent to receive messaging was granted; and • Identity of the individual who consented\". Quote (5.1.2.2): \"A Consumer opt-in to receive messages should not be transferable or assignable.\" Quote (5.1.4): \"Message Senders should not use opt-in lists that have been rented, sold, or shared to send messages.\"",
    },
    {
      id: "usc-47-227",
      title: "47 U.S. Code 227: Restrictions on use of telephone equipment",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/uscode/text/47/227",
      year: "2026",
      note: "Read October 2026. Private right of action, subsection (b)(3): \"receive $500 in damages for each such violation, whichever is greater\". Quote: \"the court may, in its discretion, increase the amount of the award to an amount equal to not more than 3 times the amount available under subparagraph (B) of this paragraph.\"",
    },
    {
      id: "usc-28-1658",
      title: "28 U.S. Code 1658: Time limitations on the commencement of civil actions arising under Acts of Congress",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/uscode/text/28/1658",
      year: "2026",
      note: "Read October 2026. Quote: \"Except as otherwise provided by law, a civil action arising under an Act of Congress enacted after the date of the enactment of this section may not be commenced later than 4 years after the cause of action accrues.\" Editorial note: the date of enactment is Dec. 1, 1990.",
    },
    {
      id: "fl-501059",
      title: "Florida Statutes 501.059: Telephone solicitation",
      publisher: "The Florida Legislature",
      url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.059.html",
      year: "2026",
      note: "Read October 2026. Quote: \"A person may not make or knowingly allow to be made an unsolicited telephonic sales call if such call involves an automated system for the selection and dialing of telephone numbers or the playing of a recorded message when a connection is completed to a number called without the prior express written consent of the called party.\" The definition of prior express written consent requires that it \"Bears the signature of the called party\", \"Includes the telephone number\" and discloses that the person is \"not required to directly or indirectly sign the written agreement or to agree to enter into such an agreement as a condition of purchasing any property, goods, or services.\"",
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
    { label: "TCPA rules for AI voice calls and patient texts", href: "/blog/tcpa-ai-outreach-2026", description: "The AI voice ruling, opt-out rules and the healthcare exemption." },
    { label: "TCPA", href: "/glossary/tcpa", description: "The federal law behind the autodialer, artificial voice and texting rules." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "First-contact, reminder and opt-out wording for texts." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "How Bond contacts every lead, discloses AI use and offers a person." },
  ],
};

export default page;
