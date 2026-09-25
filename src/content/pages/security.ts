import type { SeoPage } from "../types";

const TRUST_CENTER = "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj";

const page: SeoPage = {
  path: "/security",
  category: "product",
  title: "HIPAA-compliant trial recruitment AI: security and BAAs",
  description:
    "How Bond handles PHI when it screens charts and contacts patients: SOC 2 Type I and HIPAA compliance, the BAA, encryption, access control and AI disclosure.",
  keywords: [
    "HIPAA compliant clinical trial recruitment",
    "AI patient recruitment security",
    "business associate agreement AI vendor",
    "PHI handling clinical trial software",
    "clinical trial recruitment BAA",
  ],
  eyebrow: "Security",
  h1: "Security and compliance: how Bond handles PHI",
  intro:
    "Bond Health reads patient records, calls and texts patients, and helps explain consent forms, so it handles protected health information at every step. Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} This page covers where that PHI goes, the controls around it and the evidence your security reviewer can request.",
  summary: "Where PHI goes in a Bond deployment, the controls around it, and the evidence your security reviewer can request.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "Open the Trust Center",
    secondaryHref: TRUST_CENTER,
  },
  sections: [
    {
      id: "data-flow",
      heading: "Where does PHI go in a Bond deployment?",
      blocks: [
        {
          type: "p",
          text: "Bond touches protected health information (PHI) at four points. Each happens under the business associate agreement (BAA) between Bond and the site or health system, and the platform keeps an audit trail.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Identify reads the chart",
              text: "[Identify](/identify) reads the EHR through FHIR R4 APIs, HL7 v2 where applicable, or an [integration partner](/integrations). It checks structured fields and clinical notes against the study's inclusion and exclusion criteria, ranks candidates, and shows the evidence for each criterion.{{cite:bond-site}}",
            },
            {
              title: "The coordinator reviews matches",
              text: "Ranked candidates appear in Bond's dashboard with criterion-to-evidence rationale. Access is set by role, and sign-in can run through the site's own identity provider by SSO.{{cite:bond-site}}",
            },
            {
              title: "Engage contacts the patient",
              text: "[Engage](/engage) runs voice and SMS agents from scripts configured for each site and study. The agents pre-screen, schedule, and escalate to a coordinator when needed or when the patient asks.{{cite:bond-site}}",
            },
            {
              title: "Consent support explains, the site consents",
              text: "[Consent](/consent) gives plain-language explanations and answers patient questions about the consent form. The investigator or delegated site staff still obtain consent.{{cite:bond-site}}",
            },
          ],
        },
        {
          type: "p",
          text: "Engage also connects directly to Google Sheets, CTMS and calendars.{{cite:bond-site}} Data synced to one of those falls under that system's access controls, so list each connection in your risk analysis.",
        },
        { type: "h3", text: "How is it configured and checked before go-live?" },
        {
          type: "ul",
          items: [
            "**Setup.** Implementation covers the EHR connection, security review, audit logging setup and workflow configuration, all in the volume-based platform fee, with no separate integration fee. See [pricing](/pricing).{{cite:bond-site}}",
            "**Scripts.** Outreach scripts are configured per site and study.{{cite:bond-site}} FDA expects the IRB to review recruitment material and its mode of communication, so they go in your IRB package.{{cite:fda-recruiting}} See the [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach).",
            "**Validation.** ICH E6(R3) expects computerized systems used in trials to be fit for purpose, for example through risk-based validation, and leaves the investigator to decide whether a service provider is appropriate.{{cite:ich-e6r3}} Ask Bond how its configuration is tested against your protocol.",
          ],
        },
        { type: "h3", text: "How does this compare with a manual workflow?" },
        {
          type: "table",
          caption: "Where PHI ends up, manual recruitment and Bond",
          columns: ["Step", "Common manual pattern", "With Bond"],
          rows: [
            [
              "Finding candidates",
              "A coordinator reads charts and copies names and notes into a spreadsheet",
              "Bond reads records under the BAA and shows matches in the access-controlled dashboard",
            ],
            [
              "Sharing the list",
              "The spreadsheet moves by email or a shared drive, outside the EHR's access logs",
              "Users sign in to one dashboard, with access set by role and logged",
            ],
            [
              "Contacting patients",
              "Staff call from the list and record outcomes in free-text notes",
              "Voice and SMS agents follow the configured script and each contact is logged",
            ],
            [
              "Showing who saw what",
              "Reconstructed from EHR logs, inboxes and file histories",
              "Bond's audit trail of access and actions in the platform",
            ],
          ],
          note: "Manual workflows can be run securely; the difference is how many copies of PHI they create.",
        },
      ],
    },
    {
      id: "baa",
      heading: "What does the BAA commit Bond to?",
      blocks: [
        {
          type: "p",
          text: "Under HIPAA, a vendor that creates, receives, maintains or transmits PHI on behalf of a covered entity is a business associate.{{cite:ecfr-160-103}} Bond is one and signs a BAA with each site or health system.{{cite:bond-site}} HIPAA requires that written agreement before a business associate handles the site's PHI.{{cite:ecfr-164-502}} The [BAA glossary entry](/glossary/baa) covers the required contents. Four terms matter most here:",
        },
        {
          type: "ul",
          items: [
            "**Safeguards.** Bond must comply with the HIPAA Security Rule for the electronic PHI it handles.{{cite:ecfr-164-314}}",
            "**Subcontractors.** Any subcontractor that creates, receives, maintains or transmits electronic PHI for Bond must agree to the same requirements in its own contract.{{cite:ecfr-164-314}}",
            "**Incident reporting.** Bond must report security incidents to the site, including breaches of unsecured PHI (timeline below).{{cite:ecfr-164-314}}",
            "**Return or destruction.** When the contract ends, Bond must return or destroy the PHI it still holds where feasible, and extend the contract's protections to anything it cannot.{{cite:ecfr-164-504}}",
          ],
        },
        { type: "h3", text: "What about the language models?" },
        {
          type: "p",
          text: "A company that hosts a language model and processes chart text or patient messages for Bond is a subcontractor under that rule.{{cite:ecfr-164-314}} HIPAA lets Bond share PHI with it only under a written agreement.{{cite:ecfr-164-502}} Ask which subprocessors, model providers included, handle PHI for your site.",
        },
      ],
    },
    {
      id: "controls",
      heading: "Which security controls does Bond run?",
      blocks: [
        {
          type: "p",
          text: "The HIPAA Security Rule names five technical safeguards: access control, audit controls, integrity, person or entity authentication, and transmission security. Encryption is an addressable specification, not a required one.{{cite:ecfr-164-312}} Bond encrypts PHI regardless.{{cite:bond-site}}",
        },
        {
          type: "table",
          caption: "Controls, what Bond does, and the evidence behind each",
          columns: ["Control", "What Bond does", "Evidence you can request"],
          rows: [
            [
              "Business associate agreement",
              "Signs a BAA with each site or health system",
              "Bond's BAA for legal review, then the executed copy",
            ],
            [
              "Encryption, 45 CFR 164.312(a)(2)(iv) and (e)",
              "Encrypts PHI at rest and in transit, using AES-256 where applicable",
              "Trust Center, with detail on request from hello@bondtrials.com",
            ],
            [
              "Access control, 45 CFR 164.312(a)",
              "Role-based permissions for site, CRO and sponsor users",
              "Reviewed with your team during implementation",
            ],
            [
              "Authentication, 45 CFR 164.312(d)",
              "SSO support, so the site's identity provider controls sign-in",
              "SSO configuration during implementation",
            ],
            [
              "Audit controls, 45 CFR 164.312(b)",
              "Audit logging of access and actions in the platform",
              "Set up during implementation; ask which events and fields are logged",
            ],
            [
              "Security testing",
              "Penetration testing of the platform",
              "Ask for the scope and date of the most recent test",
            ],
          ],
          note: "Bond's controls as described on bondtrials.com, which also lists employee security training.{{cite:bond-site}}",
        },
        { type: "h3", text: "What is Bond's compliance status?" },
        {
          type: "ul",
          items: [
            "**SOC 2 Type I and HIPAA.** Bond is SOC 2 Type I compliant: independent auditor Advantage Partners has issued Bond's SOC 2 Type I report. Bond is also HIPAA compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}}",
            "**Trust Center.** Bond's [Trust Center](" + TRUST_CENTER + ") lists 73 HIPAA Security Rule controls, monitored continuously by Vanta.{{cite:bond-trust-center}}",
          ],
        },
      ],
    },
    {
      id: "minimum-necessary",
      heading: "How does Bond keep PHI to the minimum necessary?",
      blocks: [
        {
          type: "p",
          text: "HIPAA's minimum necessary standard applies to business associates as well as covered entities: make reasonable efforts to limit the PHI used, disclosed or requested to what the purpose needs.{{cite:ecfr-164-502}} Three parts of a Bond deployment bear on it.",
        },
        {
          type: "ul",
          items: [
            "**Screening.** Coordinators check the evidence Bond cites for each criterion instead of paging through the whole chart.{{cite:bond-site}}",
            "**Outreach content.** Scripts are configured per site and study,{{cite:bond-site}} so your team and IRB decide what a first text says. One option is to leave the condition out of it and confirm identity before discussing the study.",
            "**Reporting.** CRO and sponsor reporting covers enrollment metrics such as patients matched, contacted, consented and randomized.{{cite:bond-site}} Ask which fields each role can view.",
          ],
        },
        {
          type: "p",
          text: "FDA says a simple statement that \"confidentiality will be maintained\" does not tell the IRB enough about a screening script. Its example questions include what happens to personal information if the caller hangs up, and whether names of people who do not qualify are kept for other studies.{{cite:fda-recruiting}} Get Bond's answers to both before you submit. The [IRB submission language template](/templates/irb-submission-language-ai-outreach) gives wording sites can adapt.",
        },
        { type: "h3", text: "How long is data kept?" },
        {
          type: "p",
          text: "Set retention and disposal terms in the BAA and services agreement. At the end of an engagement, HIPAA requires the business associate to return or destroy the PHI where feasible.{{cite:ecfr-164-504}} For security questionnaires: HIPAA's 6-year retention rule covers security policies and records of required security activities, not the patient data itself.{{cite:ecfr-164-316}}",
        },
      ],
    },
    {
      id: "ai-disclosure",
      heading: "How are patients told that AI is involved?",
      blocks: [
        {
          type: "p",
          text: "Patients contacted by Bond's voice or SMS agents are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "Some states regulate this; two examples as of September 2026. Since January 1, 2025, California has required health facilities, clinics and physician offices that use generative AI for patient communications about clinical information to include an AI disclaimer (spoken at the start and end of a call) and a way to reach a person, unless a licensed provider reviews the message. Scheduling and other administrative matters are excluded.{{cite:ca-ab-3030}} Since January 1, 2026, Texas has required providers that use AI in health care services to disclose it in plain language by the date the service is first provided.{{cite:tx-hb-149}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "Check coverage with counsel",
          text: "Whether a recruitment call falls under either law is a question for the site's counsel, who should also confirm that the agents' disclosure wording and timing meet any law that applies.",
        },
      ],
    },
    {
      id: "breach",
      heading: "What happens if there is a breach?",
      blocks: [
        {
          type: "p",
          text: "A breach at one vendor can reach the patients of many providers at once. HHS's Office for Civil Rights (OCR) reported these figures for 2024 to Congress, as summarized by HIPAA Journal:{{cite:ocr-breaches-2024}}",
        },
        {
          type: "stats",
          items: [
            { value: "663", label: "Breaches affecting 500 or more individuals that occurred in 2024 and were reported to OCR", cite: "ocr-breaches-2024" },
            { value: "242.9 million", label: "Individuals whose PHI was exposed or impermissibly disclosed in those breaches", cite: "ocr-breaches-2024" },
            { value: "81%", label: "Share of those breaches that were hacking or IT incidents", cite: "ocr-breaches-2024" },
          ],
        },
        {
          type: "p",
          text: "Most of that total came from a single breach at Change Healthcare, estimated at 192 million individuals.{{cite:ocr-breaches-2024}} Encryption matters legally: notification duties attach to unsecured PHI, meaning PHI not made unusable, unreadable or indecipherable to unauthorized persons by a method HHS specifies.{{cite:ecfr-164-402}}",
        },
        {
          type: "p",
          text: "If Bond discovers a breach of unsecured PHI, it must notify the site without unreasonable delay and no later than 60 calendar days after discovery, identifying each affected individual where possible.{{cite:ecfr-164-410}} The site, as the covered entity, notifies patients and HHS, and can set a shorter window in the BAA.",
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
            "**No FDA clearance.** Bond holds no FDA clearance or approval for its software.",
            "**No IRB approval.** Bond claims none. Each site submits its own recruitment materials and chooses its HIPAA pathway, such as a review preparatory to research or a waiver of authorization.{{cite:ecfr-164-512}}",
            "**No consent on the site's behalf.** The investigator or delegated staff obtain consent.{{cite:bond-site}}",
            "**No eligibility decisions.** Bond ranks candidates and shows its evidence. The study team decides who is eligible.",
            "**No substitute for the site's HIPAA program.** The site remains the covered entity, with its own risk analysis and policies.",
          ],
        },
      ],
    },
    {
      id: "security-review",
      heading: "What should your security reviewer ask for?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Bond's BAA, including subcontractor, incident and termination terms",
            "The current list of subprocessors that handle PHI, model providers included",
            "Encryption details, and the scope and date of the most recent penetration test",
            "A walkthrough of roles, SSO and the audit trail for your site",
            "Any Google Sheets, CTMS or calendar connections, and what data each one receives",
            "The AI disclosure language the agents use, for your IRB submission",
          ],
        },
        {
          type: "p",
          text: "HHS's January 2025 proposed Security Rule update would require encryption of electronic PHI at rest and in transit with limited exceptions, penetration testing at least once every 12 months, and written verification of each business associate's technical safeguards at least once every 12 months.{{cite:security-rule-nprm}} As of September 2026 no final rule had been published, and the eCFR still lists encryption as addressable.{{cite:ecfr-164-312}}",
        },
        {
          type: "p",
          text: "Security review runs inside implementation, and full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site}} See [implementation](/implementation) for the plan, and the [AI recruitment vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) to compare vendors.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring your security questionnaire. We will walk your IT and compliance team through the data flow, the BAA and the Trust Center.",
          secondaryLabel: "See how pricing works",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Bond sign a BAA?",
      a: "Yes, with each site or health system.{{cite:bond-site}} HIPAA requires that written agreement before a business associate handles the site's PHI.{{cite:ecfr-164-502}}",
    },
    {
      q: "Is Bond SOC 2 compliant?",
      a: "Bond is SOC 2 Type I compliant: independent auditor Advantage Partners has issued Bond's SOC 2 Type I report. Bond is also HIPAA compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its current posture is in its Vanta-hosted Trust Center, and security questions go to hello@bondtrials.com.{{cite:bond-site}}",
    },
    {
      q: "Do language model providers see patient data?",
      a: "Only under a written agreement, which HIPAA requires for any subcontractor that handles PHI for Bond.{{cite:ecfr-164-314}} Ask for the current subprocessor list.",
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
      id: "bond-trust-center",
      title: "Bond Health Trust Center",
      publisher: "Bond Health, monitored by Vanta",
      url: TRUST_CENTER,
      year: "2026",
      note: "Lists 73 HIPAA Security Rule controls: infrastructure security (20), organizational security (14), internal security procedures (38), and data and privacy (1), monitored continuously by Vanta. Viewed September 23, 2026.",
    },
    {
      id: "ecfr-160-103",
      title: "45 CFR 160.103 Definitions (business associate)",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-160.103",
      year: "2026",
      note: "Text current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-312",
      title: "45 CFR 164.312 Technical safeguards",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.312",
      year: "2026",
      note: "Quote: \"(b) Standard: Audit controls. Implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use electronic protected health information.\" and \"(iv) Encryption and decryption (Addressable). Implement a mechanism to encrypt and decrypt electronic protected health information.\" Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-314",
      title: "45 CFR 164.314 Organizational requirements (business associate contracts)",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.314",
      year: "2026",
      note: "Quote: \"(B) In accordance with § 164.308(b)(2), ensure that any subcontractors that create, receive, maintain, or transmit electronic protected health information on behalf of the business associate agree to comply with the applicable requirements of this subpart by entering into a contract or other arrangement that complies with this section; and (C) Report to the covered entity any security incident of which it becomes aware\" Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-410",
      title: "45 CFR 164.410 Notification by a business associate",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.410",
      year: "2026",
      note: "Quote: \"a business associate shall provide the notification required by paragraph (a) of this section without unreasonable delay and in no case later than 60 calendar days after discovery of a breach.\" Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-402",
      title: "45 CFR 164.402 Definitions (unsecured protected health information)",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.402",
      year: "2026",
      note: "Quote: \"Unsecured protected health information means protected health information that is not rendered unusable, unreadable, or indecipherable to unauthorized persons through the use of a technology or methodology specified by the Secretary in the guidance\" Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-504",
      title: "45 CFR 164.504(e) Business associate contracts",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.504",
      year: "2026",
      note: "Quote: \"(J) At termination of the contract, if feasible, return or destroy all protected health information received from, or created or received by the business associate on behalf of, the covered entity that the business associate still maintains in any form and retain no copies of such information\" Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-502",
      title: "45 CFR 164.502 Uses and disclosures of protected health information: general rules (minimum necessary; disclosures to business associates)",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.502",
      year: "2026",
      note: "Quote from (e): \"A business associate may disclose protected health information to a business associate that is a subcontractor and may allow the subcontractor to create, receive, maintain, or transmit protected health information on its behalf, if the business associate obtains satisfactory assurances [...] The satisfactory assurances required by paragraph (e)(1) of this section must be documented through a written contract or other written agreement or arrangement with the business associate\" Paragraph (b) sets the minimum necessary standard. Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-316",
      title: "45 CFR 164.316 Policies and procedures and documentation requirements",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.316",
      year: "2026",
      note: "Quote: \"(i) Time limit (Required). Retain the documentation required by paragraph (b)(1) of this section for 6 years from the date of its creation or the date when it last was in effect, whichever is later.\" Paragraph (b)(1) covers written policies and procedures and records of required actions, activities or assessments. Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512(i) Uses and disclosures for research purposes",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Text current as of September 1, 2026.",
    },
    {
      id: "ich-e6r3",
      title: "ICH Harmonised Guideline: Good Clinical Practice E6(R3), final version adopted 6 January 2025",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Principle 9.3: computerized systems used in clinical trials \"should be fit for purpose (e.g., through risk-based validation, if appropriate)\". Section 2.3.1: \"The investigator may delegate trial-related activities to other persons or parties. [...] the investigator retains the final decision on whether the service provider intended to support the investigator is appropriate\". FDA announced E6(R3) as final guidance on September 9, 2025.",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Information sheet, January 1998; content current as of 2018. Quote: \"A simple statement such as 'confidentiality will be maintained' does not adequately inform the IRB of the procedures that will be used. Examples of issues that are appropriate for IRB review: What happens to personal information if the caller ends the interview or simply hangs up? [...] Are names of non-eligibles maintained in case they would qualify for another study?\"",
    },
    {
      id: "ca-ab-3030",
      title: "AB-3030 Health care services: artificial intelligence (Chapter 848, Statutes of 2024)",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3030",
      year: "2024",
      note: "Health and Safety Code 1339.75. Operative January 1, 2025. Quote: \"For audio communications, the disclaimer shall be provided verbally at the start and the end of the interaction.\" and \"This information does not include administrative matters, including, but not limited to, appointment scheduling, billing, or other clerical or business matters.\"",
    },
    {
      id: "tx-hb-149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act (enrolled)",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
      note: "Business and Commerce Code Sec. 552.051. Effective January 1, 2026. Quote: \"(f) If an artificial intelligence system is used in relation to health care service or treatment, the provider of the service or treatment shall provide the disclosure under Subsection (b) to the recipient of the service or treatment or the recipient's personal representative not later than the date the service or treatment is first provided\"",
    },
    {
      id: "ocr-breaches-2024",
      title: "OCR Reports to Congress on HIPAA Compliance and Data Breaches in 2024",
      publisher: "HIPAA Journal",
      url: "https://www.hipaajournal.com/ocr-reports-congress-hipaa-compliance-data-breaches-2024/",
      year: "2026",
      note: "Quote: \"In calendar year 2024, OCR received 742 reports of data breaches affecting 500 or more individuals; however, only 663 reports related to breaches that occurred in 2024.\" Also: \"Across the 663 reported data breaches, the protected health information of 242,908,056 individuals was exposed or impermissibly disclosed.\" Also: \"hacking/IT incidents, which accounted for 81% of all data breaches\" and \"The massive total was largely due to a single data breach at Change Healthcare, which affected an estimated 192 million individuals.\" Article by Steve Alder, May 26, 2026, summarizing OCR's report to Congress; the HHS PDF returned HTTP 403 when fetched.",
    },
    {
      id: "security-rule-nprm",
      title: "HIPAA Security Rule To Strengthen the Cybersecurity of Electronic Protected Health Information (proposed rule), 90 FR 898",
      publisher: "Federal Register, U.S. Department of Health and Human Services",
      url: "https://www.govinfo.gov/content/pkg/FR-2025-01-06/html/2024-30983.htm",
      year: "2025",
      note: "Quote: \"(B) Penetration testing must be performed at least once every 12 months or in accordance with the covered entity's or business associate's risk analysis required by Sec. 164.308(a)(2), whichever is more frequent.\" Also: \"proposed 45 CFR 164.312(b)(2) would require regulated entities to encrypt all ePHI at rest and in transit, with limited exceptions\" and \"The Department proposes to require that the regulated entity obtain this written verification documenting the business associate's deployment of the required technical safeguards at least once every 12 months.\"",
    },
  ],
  related: [
    { label: "Implementation", href: "/implementation", description: "Where security review and audit logging setup sit in the plan." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "The approval path and HIPAA basis for contacting patients." },
    { label: "Integrations", href: "/integrations", description: "How Bond connects to EHRs, CTMS and calendars." },
    { label: "Pricing", href: "/pricing", description: "What the volume-based platform fee covers, including security review." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "How the agents disclose AI use and hand off to coordinators." },
    { label: "Identify: EHR screening", href: "/identify", description: "What Bond reads in the chart and how matches are explained." },
  ],
};

export default page;
