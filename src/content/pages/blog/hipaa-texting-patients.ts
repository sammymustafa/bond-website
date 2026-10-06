import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/hipaa-texting-patients",
  category: "blog",
  title: "HIPAA and texting patients about research studies",
  description:
    "What HHS guidance says about unencrypted texts to patients, patient preference, research contact and the pending Security Rule update. Not legal advice.",
  keywords: [
    "HIPAA texting patients",
    "HIPAA unencrypted text messages patients",
    "HIPAA research recruitment text message",
    "HIPAA patient communication preference",
    "HIPAA Security Rule encryption proposed rule",
  ],
  eyebrow: "Blog",
  h1: "HIPAA and texting patients about research: what HHS guidance says",
  intro:
    "HIPAA does not ban unencrypted texts or emails to patients. HHS guidance says providers may communicate electronically with reasonable safeguards, must accommodate reasonable requests to use other channels, and may send unencrypted messages a patient prefers after warning of the risk.{{cite:hhs-faq-email,omnibus-2013}} For research outreach, the harder questions are who may contact the patient and how much the first message reveals. This post reflects federal rules as of October 2026 and is not legal advice.",
  summary: "HHS guidance on unencrypted messages, patient preference and research contact, applied to texting patients about studies, plus the pending Security Rule changes.",
  lastUpdated: "2026-12-11",
  blog: { date: "2026-12-11", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about security", secondaryHref: "/security" },
  sections: [
    {
      id: "unencrypted-allowed",
      heading: "Does HIPAA allow unencrypted messages to patients?",
      blocks: [
        {
          type: "p",
          text: "Yes, with safeguards. HHS's answer on email says the Privacy Rule lets providers communicate electronically with patients if they apply reasonable safeguards, does not prohibit unencrypted email for treatment-related communications, and suggests limiting the amount or type of information sent. It adds that transmissions of electronic protected health information must also meet the Security Rule.{{cite:hhs-faq-email}}",
        },
        {
          type: "p",
          text: "That guidance names email. We did not find a separate HHS answer for text messages, but the provisions it relies on, the Privacy Rule's safeguards standard and the Security Rule, are not specific to one channel, so the same reasoning is the sensible starting point for SMS. Note too that the FAQ speaks of treatment-related communications; research outreach is a different purpose, which is one more reason to keep health details out of the message.{{cite:hhs-faq-email}}",
        },
        {
          type: "p",
          text: "Under the current Security Rule, encryption of data in transit is an \"addressable\" specification.{{cite:cfr-164-312}} Addressable does not mean optional: an organization must assess whether encryption is reasonable and appropriate, implement it if so, or document why not and adopt an equivalent alternative where reasonable.{{cite:cfr-164-306}}",
        },
      ],
    },
    {
      id: "patient-preference",
      heading: "What if a patient prefers plain text messages?",
      blocks: [
        {
          type: "p",
          text: "Patient preference carries weight in both directions. In the 2013 Omnibus Rule, HHS stated that covered entities may send unencrypted emails to individuals who have been advised of the risk and still prefer them. HHS added that it does not expect providers to educate patients about encryption, only to tell them there may be some level of risk that a third party could read the message.{{cite:omnibus-2013}}",
        },
        {
          type: "p",
          text: "The other direction is the right to confidential communications. A covered provider must accommodate reasonable requests to receive communications by alternative means or at alternative locations.{{cite:cfr-164-522}} HHS's email answer gives the example of a patient who finds unencrypted email unacceptable: offer a more secure electronic method, mail or the phone instead. It also says that when a patient starts an email exchange, the provider can assume email is acceptable unless the patient says otherwise.{{cite:hhs-faq-email}}",
        },
      ],
    },
    {
      id: "who-may-contact",
      heading: "Who may text a patient about a research study?",
      blocks: [
        {
          type: "p",
          text: "HIPAA treats this differently depending on who is reaching out. According to HHS, a researcher who is part of the covered entity's workforce may use protected health information under the preparatory-to-research provision to contact prospective participants, and treating providers and patients may discuss the option of enrolling in a clinical trial without the patient's authorization or an IRB waiver. A researcher outside the covered entity cannot use that provision to make contact, and would instead need a partial waiver of authorization from an IRB or Privacy Board.{{cite:hhs-faq-317}}",
        },
        {
          type: "p",
          text: "Vendors are a third question. HHS guidance on cloud services says the \"conduit\" exception covers only transmission-only services, and a service that stores electronic protected health information is a business associate even if it cannot read the data.{{cite:hhs-cloud}} A texting or calling platform that keeps message logs about patients should therefore be under a business associate agreement. Our [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach) covers the IRB side of the same decision.",
        },
      ],
    },
    {
      id: "first-message",
      heading: "What should a first research text say?",
      blocks: [
        {
          type: "p",
          text: "As little health information as the job allows. HHS's own suggested safeguard for unencrypted messages is to limit the amount or type of information they carry.{{cite:hhs-faq-email}} A first text should identify the site, say there is a research study the patient may qualify for, and offer a way to learn more or opt out. Details about diagnoses, results and eligibility belong on the phone or behind a secure link.",
        },
        {
          type: "table",
          caption: "Illustrative first texts",
          columns: ["Avoid", "Prefer"],
          rows: [
            ["\"Your recent A1c result makes you eligible for our diabetes drug study.\"", "\"This is [site name]. You may qualify for a research study. Reply YES to hear more or STOP to opt out.\""],
            ["Naming the condition, the drug or the referring specialist", "Naming the site and offering a call from a coordinator"],
            ["A link that opens study details without any check", "A link to a page that asks the patient to confirm who they are first"],
          ],
        },
        {
          type: "p",
          text: "HIPAA is only one of the rules on a research text. Consent and opt-out rules under the TCPA, and carrier registration, apply separately; see our post on [TCPA rules for AI calls and texts](/blog/tcpa-ai-outreach-2026) and the [patient outreach SMS templates](/templates/patient-outreach-sms-templates).",
        },
      ],
    },
    {
      id: "security-rule-update",
      heading: "What is changing in the HIPAA Security Rule?",
      blocks: [
        {
          type: "p",
          text: "On January 6, 2025, HHS proposed rewriting the Security Rule. The proposal would remove the distinction between \"required\" and \"addressable\" specifications and would require regulated entities to encrypt all electronic protected health information at rest and in transit, with limited exceptions.{{cite:security-nprm-2025}} One proposed exception covers individuals who ask to receive their own records through unencrypted email or messaging under the HIPAA right of access, after being told the risks.{{cite:security-nprm-2025}}",
        },
        {
          type: "p",
          text: "As of October 2026 the rule is not final. The most recent Unified Agenda entry lists it under Long-Term Actions, with final action targeted for July 2027.{{cite:reginfo-security-rule}} As proposed, the patient-request exception is written around right-of-access requests, so if the rule is finalized in that form, outreach texts that carry health information may need encryption or much less content. Keeping clinical details out of texts now avoids having to redesign the workflow later.",
        },
      ],
    },
    {
      id: "site-checklist",
      heading: "What should a site put in place?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Record each patient's channel preference** and, where they prefer plain texts or email, that they were told about the risk.{{cite:omnibus-2013}}",
            "**Honor requests for another channel** promptly, and make sure every outreach list respects them.{{cite:cfr-164-522}}",
            "**Keep diagnoses and results out of texts.** Move detail to a phone call or a page behind identity checks.{{cite:hhs-faq-email}}",
            "**Document your encryption decision** for texting in the Security Rule risk analysis.{{cite:cfr-164-306}}",
            "**Confirm who is making contact**, workforce or outside researcher, and the HIPAA basis for it.{{cite:hhs-faq-317}}",
            "**Sign a business associate agreement** with any vendor that stores messages or call records.{{cite:hhs-cloud}}",
            "**Send scripts and texts to the IRB**, and add TCPA consent and opt-out handling before launch.",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond handles this",
          text: "Bond is HIPAA compliant, signs business associate agreements and encrypts data at rest and in transit (AES-256 where applicable). It is SOC 2 Type I compliant, with SOC 2 Type II and ISO 27001 audits underway. See [security](/security) for details.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See the texting and calling scripts Bond would use for your study, including disclosure, opt-out and escalation to staff.",
          secondaryLabel: "Read the IRB and HIPAA guide",
          secondaryHref: "/guides/irb-hipaa-patient-outreach",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does HIPAA require an encrypted app for texting patients?",
      a: "Not under the current rule. Encryption in transit is an addressable specification, so you must assess it and document your decision.{{cite:cfr-164-312,cfr-164-306}} HHS's January 2025 proposal would make encryption mandatory with limited exceptions; as of October 2026 it is not final.{{cite:security-nprm-2025,reginfo-security-rule}}",
    },
    {
      q: "What if a patient asks us to stop texting?",
      a: "Under HIPAA, a reasonable request to use another channel must be accommodated.{{cite:cfr-164-522}} Separate TCPA rules govern opt-outs from automated calls and texts; see our [TCPA post](/blog/tcpa-ai-outreach-2026).",
    },
    {
      q: "Is this legal advice?",
      a: "No. It summarizes HHS guidance and federal rules as of October 2026. State law, your institution's policies and your IRB may set stricter requirements, so confirm your outreach plan with counsel and your privacy office.",
    },
  ],
  sources: [
    {
      id: "hhs-faq-email",
      title: "Does the HIPAA Privacy Rule permit health care providers to use e-mail to discuss health issues and treatment with their patients?",
      publisher: "U.S. Department of Health and Human Services, Office for Civil Rights",
      url: "https://www.hhs.gov/hipaa/for-professionals/faq/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html",
      year: "2008",
      note: "Read October 2026. FAQ 570, created 12/15/08, content last reviewed July 26, 2013. Quote: \"while the Privacy Rule does not prohibit the use of unencrypted e-mail for treatment-related communications between health care providers and patients, other safeguards should be applied to reasonably protect privacy, such as limiting the amount or type of information disclosed through the unencrypted e-mail.\" Also: \"if the use of unencrypted e-mail is unacceptable to a patient who requests confidential communications, other means of communicating with the patient, such as by more secure electronic methods, or by mail or telephone, should be offered and accommodated.\" And: \"the health care provider can assume (unless the patient has explicitly stated otherwise) that e-mail communications are acceptable to the individual.\"",
    },
    {
      id: "omnibus-2013",
      title: "Modifications to the HIPAA Privacy, Security, Enforcement, and Breach Notification Rules (Omnibus Rule)",
      publisher: "Federal Register, U.S. Department of Health and Human Services",
      url: "https://www.federalregister.gov/documents/2013/01/25/2013-01073/modifications-to-the-hipaa-privacy-security-enforcement-and-breach-notification-rules-under-the",
      year: "2013",
      note: "Read October 2026. Quote (preamble, right of access discussion): \"We clarify that covered entities are permitted to send individuals unencrypted emails if they have advised the individual of the risk, and the individual still prefers the unencrypted email.\" Also: \"We do not expect covered entities to educate individuals about encryption technology and the information security. Rather, we merely expect the covered entity to notify the individual that there may be some level of risk that the information in the email could be read by a third party.\" Published January 25, 2013.",
    },
    {
      id: "cfr-164-522",
      title: "45 CFR 164.522: Rights to request privacy protection for protected health information",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/cfr/text/45/164.522",
      year: "2026",
      note: "Read October 2026. Quote (paragraph (b)(1)(i)): \"A covered health care provider must permit individuals to request and must accommodate reasonable requests by individuals to receive communications of protected health information from the covered health care provider by alternative means or at alternative locations.\"",
    },
    {
      id: "cfr-164-312",
      title: "45 CFR 164.312: Technical safeguards",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/cfr/text/45/164.312",
      year: "2026",
      note: "Read October 2026. Quote (paragraph (e)): \"Standard: Transmission security. Implement technical security measures to guard against unauthorized access to electronic protected health information that is being transmitted over an electronic communications network.\" Also: \"Encryption (Addressable). Implement a mechanism to encrypt electronic protected health information whenever deemed appropriate.\"",
    },
    {
      id: "cfr-164-306",
      title: "45 CFR 164.306: Security standards: General rules",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/cfr/text/45/164.306",
      year: "2026",
      note: "Read October 2026. Quote (paragraph (d)(3)): addressable specifications require the entity to \"Assess whether each implementation specification is a reasonable and appropriate safeguard in its environment\" and to \"Implement the implementation specification if reasonable and appropriate\" or, if not, \"Document why it would not be reasonable and appropriate to implement the implementation specification; and\" \"Implement an equivalent alternative measure if reasonable and appropriate.\"",
    },
    {
      id: "hhs-faq-317",
      title: "Can the preparatory research provision of the HIPAA Privacy Rule at 45 CFR 164.512(i)(1)(ii) be used to recruit individuals into a research study?",
      publisher: "U.S. Department of Health and Human Services, Office for Civil Rights",
      url: "https://www.hhs.gov/hipaa/for-professionals/faq/can-the-prepatory-research-provision-be-used-to-recruit-individuals-to-a-research-study/index.html",
      year: "2006",
      note: "Read October 2026. FAQ 317, created 12/20/2002, last updated 03/14/2006. Quote: \"a researcher who is an employee or a member of the covered entity's workforce could use protected health information to contact prospective research subjects.\" Also: \"covered health care providers and patients may continue to discuss the option of enrolling in a clinical trial without patient authorization, and without an Institutional Review Board (IRB) or Privacy Board waiver of the authorization.\" And: \"a researcher who is not a part of the covered entity may not use the preparatory research provision to contact prospective research subjects. Rather, the outside researcher could obtain contact information through a partial waiver of individual authorization by an IRB or Privacy Board\".",
    },
    {
      id: "hhs-cloud",
      title: "Guidance on HIPAA & Cloud Computing",
      publisher: "U.S. Department of Health and Human Services, Office for Civil Rights",
      url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html",
      year: "2022",
      note: "Read October 2026. Page content last reviewed December 23, 2022. Quote: \"the conduit exception is limited to transmission-only services for PHI (whether in electronic or paper form), including any temporary storage of PHI incident to such transmission.\" Also: CSPs that create, receive or maintain ePHI \"meet the definition of a business associate, even if the CSP cannot view the ePHI because it is encrypted and the CSP does not have the decryption key.\"",
    },
    {
      id: "security-nprm-2025",
      title: "HIPAA Security Rule To Strengthen the Cybersecurity of Electronic Protected Health Information (proposed rule), 90 FR 898",
      publisher: "Federal Register, U.S. Department of Health and Human Services",
      url: "https://www.federalregister.gov/documents/2025/01/06/2024-30983/hipaa-security-rule-to-strengthen-the-cybersecurity-of-electronic-protected-health-information",
      year: "2025",
      note: "Read October 2026. Quote: \"we propose to modify 45 CFR 164.306(c) and (d) by collapsing the separate paragraphs into one paragraph (c) to address both standards and implementation specifications and to remove the distinction between \"addressable\" and \"required\" implementation specifications.\" Also: \"proposed 45 CFR 164.312(b)(2) would require regulated entities to encrypt all ePHI at rest and in transit, with limited exceptions.\" And: the second proposed exception \"would be available for ePHI transmitted in response to an individual request, pursuant to 45 CFR 164.524, to receive their ePHI in an unencrypted manner\"; documentation would show \"the individual has requested to receive ePHI by unencrypted email or unencrypted messaging technology\" and \"the regulated entity informed the individual of the risks\".",
    },
    {
      id: "reginfo-security-rule",
      title: "Unified Agenda: HIPAA Security Rule to Strengthen the Cybersecurity of Electronic Protected Health Information (RIN 0945-AA22)",
      publisher: "Office of Information and Regulatory Affairs, reginfo.gov",
      url: "https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=0945-AA22",
      year: "2026",
      note: "Read October 2026; the site labels this agenda edition 2026. Shows \"Agenda Stage of Rulemaking: Long-Term Actions\" and a timetable of \"NPRM 01/06/2025 90 FR 898\" and \"Final Action 07/00/2027\".",
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
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact which patients, under which HIPAA path, with what IRB approval." },
    { label: "TCPA rules for AI calls and texts", href: "/blog/tcpa-ai-outreach-2026", description: "Consent, opt-outs and the healthcare exemption for automated outreach." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "First-contact, reminder and opt-out wording for texts." },
    { label: "Security at Bond", href: "/security", description: "HIPAA, SOC 2 status, BAAs and encryption." },
  ],
};

export default page;
