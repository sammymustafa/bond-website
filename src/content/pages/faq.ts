import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/faq",
  category: "faq",
  title: "Bond Health FAQ: AI trial recruitment, data, IRB, pricing",
  description:
    "Answers for research sites, CROs and sponsors on how Bond Health screens EHRs, contacts patients, supports consent, protects PHI, fits IRB review and is priced.",
  keywords: [
    "Bond Health FAQ",
    "AI clinical trial recruitment questions",
    "HIPAA BAA AI patient outreach",
    "IRB review of AI recruitment scripts",
    "clinical trial recruitment software pricing",
  ],
  eyebrow: "FAQ",
  h1: "Frequently asked questions",
  intro:
    "Answers to the questions research sites, CROs and sponsors ask before they sign: what Bond Health reads in the chart, how the voice and text agents treat patients, what the IRB reviews, how PHI is handled and how pricing works. Most answers link to the page with more detail, and figures Bond publishes about itself are labeled as Bond's.",
  summary: "Thirty answers on product, data, IRB, patients' rights, AI disclosure, pricing, implementation and security.",
  lastUpdated: "2026-09-24",
  showLastUpdated: true,
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "what-this-covers",
      heading: "What does this FAQ cover?",
      blocks: [
        {
          type: "p",
          text: "The first seven questions are the ones on the Bond Health homepage. The rest follow in this order: product, data and integrations, IRB and consent, patients' rights and AI disclosure, pricing and contracts, implementation and support, and security.",
        },
        {
          type: "p",
          text: "Each stage has its own page ([Identify](/identify), [Engage](/engage) and [Consent](/consent)), and so do [integrations](/integrations), [pricing](/pricing), [implementation](/implementation) and [security](/security).",
        },
      ],
    },
    {
      id: "start-as-a-site",
      heading: "Where do I start if I run a site?",
      blocks: [
        {
          type: "p",
          text: "Before screening starts, three things need sign-off: the business associate agreement and your security review, your IRB's review of the outreach scripts, and your IT team's approval of the EHR connection. Full EHR integration takes 48 hours.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "For the timeline, read [implementation](/implementation). For the IRB packet, start from [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach). For what changes day to day, see [Bond for research sites](/for/research-sites).",
        },
      ],
    },
    {
      id: "start-as-a-cro-or-sponsor",
      heading: "Where do I start if I work at a CRO or sponsor?",
      blocks: [
        {
          type: "p",
          text: "Start with reporting and pricing. Bond reports patients matched, contacted, pre-screened, consented and randomized, plus time to enrollment and screen-failure signals, in real-time dashboards and regular reports for sites, CROs and sponsors. The success fee is paid per randomized patient, so cost follows enrollment.{{cite:bond-site}} See [Bond for sponsors](/for/sponsors), [Bond for CROs](/for/cros) and [pricing](/pricing).",
        },
      ],
    },
    {
      id: "more-questions",
      heading: "What if my question is not answered here?",
      blocks: [
        {
          type: "p",
          text: "Email [hello@bondtrials.com](mailto:hello@bondtrials.com) or book a demo.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol. The call can cover your EHR, your IRB's process and the criteria that are hardest to screen.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "How does Bond Health connect to EHR data?",
      a: "Bond Health connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, using secure APIs and healthcare interoperability standards (FHIR and HL7, as applicable).{{cite:bond-product}} Bond Health's implementation team handles the integration end-to-end, and full EHR integration typically completes in 48 hours depending on site IT review and interface method.{{cite:bond-site}} See [integrations](/integrations).",
    },
    {
      q: "How does Bond Health validate trial eligibility logic?",
      a: "Bond Health configures study-specific inclusion and exclusion criteria with your team, then validates the eligibility logic against real-world patient records before go-live. Bond Health provides traceable match rationale (criteria-to-evidence) and runs pre-launch QA to confirm accuracy and reduce screen failures.{{cite:bond-site}} See [Identify](/identify).",
    },
    {
      q: "How do Bond Health's voice and SMS/text agents handle PHI?",
      a: "Bond Health's voice and SMS/text agents follow HIPAA compliant practices: encryption in transit, access controls, and audit logging. Patients are informed when AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}} Bond Health designs workflows to minimize PHI exposure and support compliant operations.{{cite:bond-site}} See [Engage](/engage) and [security](/security).",
    },
    {
      q: "What is Bond Health's implementation timeline?",
      a: "Bond Health typically implements in 48 hours for full EHR integration. Implementation includes EHR connection, eligibility configuration, voice and SMS/text agent setup, analytics dashboards, and staff onboarding. Bond Health provides dedicated support throughout integration and launch,{{cite:bond-site}} and keeps improving outreach messaging until study close-out.{{cite:bond-product}} See [implementation](/implementation).",
    },
    {
      q: "What is Bond Health's security posture?",
      a: "Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Bond Health uses encryption at rest and in transit (AES-256 where applicable), role-based access controls, comprehensive audit logging, and routine security testing. Bond Health signs BAAs and maintains HIPAA compliant workflows for PHI.{{cite:bond-site}} See [security](/security).",
    },
    {
      q: "What outcomes does Bond Health measure for research sites?",
      a: "Bond Health reports site-relevant outcomes including patients matched, patients contacted and pre-screened, patients consented, patients randomized (when available), time-to-enrollment, matching accuracy, screen failure rate signals, and coordinator hours saved. Bond Health provides real-time dashboards plus regular reporting for sponsors, CROs, and sites as needed.{{cite:bond-site}} See [Bond for research sites](/for/research-sites).",
    },
    {
      q: "Can Bond Health run Meta and Google ads for our studies?",
      a: "Yes. Bond Health sets up Meta and Google ad campaigns for your studies, and leads from those ads flow straight into Bond's voice and SMS/text agents for pre-screening and scheduling, alongside the patients Bond finds in your EHR.{{cite:bond-product}} Like any recruitment material, ad copy needs IRB review before it runs; FDA's guidance on recruiting study subjects asks IRBs to review advertising.{{cite:fda-recruiting}} See [Engage](/engage).",
    },
    {
      q: "What does Bond do?",
      a: "Bond runs three stages in one workflow. [Identify](/identify) screens EHR records against a study's inclusion and exclusion criteria, [Engage](/engage) contacts and pre-screens patients by voice and text and books visits, and [Consent](/consent) helps patients understand the consent form before the site obtains consent. A dashboard and audit trail cover all three for sites, CROs and sponsors.{{cite:bond-site}} When a study needs patients beyond your records, Bond also sets up Meta and Google ad campaigns and runs those leads through the same pre-screening.{{cite:bond-product}}",
    },
    {
      q: "What parts of the chart does Bond read?",
      a: "Both structured fields, such as diagnoses, medications and lab results, and the unstructured text of clinical notes.{{cite:bond-site}} Identify also uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}} Terms are resolved through a terminology graph built from 18 biomedical vocabularies, including SNOMED CT, RxNorm, LOINC and ICD-10-CM, so a billing code and a synonym written in a note can map to the same concept.{{cite:bond-whitepaper}} Each match shows the criterion and the chart evidence behind it. See [Identify](/identify).",
    },
    {
      q: "How accurate is Bond's eligibility screening?",
      a: "Bond publishes above 90 percent matching accuracy for eligibility screening.{{cite:bond-site}} In Bond's technical report, the matching pipeline scored 0.9312 micro F1 on the held-out n2c2 2018 cohort-selection benchmark.{{cite:bond-whitepaper}} Both are Bond's own figures. For your protocol, the eligibility logic is validated against real patient records before go-live, and the study team reviews matches and decides eligibility. See [validating eligibility logic before go-live](/blog/validating-eligibility-logic-before-go-live).",
    },
    {
      q: "What results has Bond published?",
      a: "Besides matching accuracy, Bond publishes two figures: up to 3x faster enrollment than manual recruitment, and at least 50 percent less chart review time for coordinators.{{cite:bond-site}} These are Bond's own figures. Results depend on the protocol, the patient population and the site's data, so each deployment reports its own numbers in the dashboard.",
    },
    {
      q: "Does Bond replace study coordinators?",
      a: "No. Bond does the first pass through the chart and the first outreach call or text. Coordinators review the ranked matches, take escalations, live transfers and human callback requests, and run the screening visit, and the investigator and study team decide who is eligible.{{cite:bond-site,bond-product}} See [Bond vs manual chart review](/compare/bond-vs-manual-chart-review).",
    },
    {
      q: "How does Bond guard against bias in who gets contacted?",
      a: "Every match shows the criterion and the chart evidence behind it, so a coordinator can see why a patient was ranked and catch a wrong inference.{{cite:bond-site}} Published research shows where to look: a 2026 JAMIA study of nine language models on vignettes from 58 trial protocols found eligibility judgments largely stable across sociodemographic identities, but homelessness produced the largest negative shift, and disparities appeared where the models had to infer behavior or resources.{{cite:jamia-2026-bias}} For FDA-regulated studies, the IRB must also find that selection of subjects is equitable before it approves the research.{{cite:ecfr-56-111}}",
    },
    {
      q: "How do the voice and text agents work?",
      a: "[Engage](/engage) calls or texts patients from the reviewed match list or from a list the site provides. Using scripts configured for each site and study, the agent says that AI assistance is used, asks the study's pre-screening questions and books screening visits on the site's calendar. Anything outside the script goes to the site's coordinators.{{cite:bond-site}} Patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers. Conversations run in the patient's preferred language, including English, Spanish, Mandarin and many others, and can switch languages mid-call.{{cite:bond-product}} See the [pre-screening call script](/templates/pre-screening-call-script) template.",
    },
    {
      q: "Does Bond obtain informed consent from patients?",
      a: "No. [Consent](/consent) support explains the IRB-approved form in plain language, answers patient questions and escalates to staff, and the site obtains and documents consent.{{cite:bond-site}} ICH E6(R3) says the consent process should be conducted by the investigator or site staff the investigator delegates.{{cite:ich-e6r3}}",
    },
    {
      q: "Which EHRs does Bond work with?",
      a: "Bond connects to all the major EHRs, including [Epic](/integrations/epic), [Oracle Health (Cerner)](/integrations/oracle-cerner), [MEDITECH](/integrations/meditech), [athenahealth](/integrations/athenahealth), [eClinicalWorks](/integrations/eclinicalworks), NextGen, Veradigm and OncoEMR.{{cite:bond-product}} Connections run through FHIR R4 APIs, HL7 v2 where applicable, or an integration partner, and the site's IT team approves each one.{{cite:bond-site}} Certified health IT developers had until December 31, 2022 to deliver standardized FHIR-based APIs to their customers, and ONC reported that more than 95 percent met that deadline.{{cite:onc-cures-milestone}} See [integrations](/integrations).",
    },
    {
      q: "Does Bond integrate with CRIO and other CTMS systems?",
      a: "Bond is a [CRIO](/integrations/crio) Certified Partner and connects directly to Google Sheets and site calendars.{{cite:bond-site}} With [RealTime](/integrations/realtime), [Advarra Clinical Conductor](/integrations/advarra-clinical-conductor) and [Veeva SiteVault](/integrations/veeva-sitevault), Bond works alongside the system through an API or file export where the vendor supports it, so referrals and statuses reach the system coordinators already use.",
    },
    {
      q: "Who at our site can see patient data in Bond?",
      a: "The site decides. Access is role-based with SSO support, so the site chooses which of its staff see patient data, and access is audit-logged.{{cite:bond-site}} In your security review, also ask which Bond roles can access PHI and for what tasks; the [AI recruitment vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) lists the questions. See [security](/security).",
    },
    {
      q: "Do language model providers see patient data?",
      a: "If a model provider processes PHI for Bond, HIPAA makes that provider a business associate in its own right, because the definition covers a subcontractor that creates, receives, maintains or transmits PHI on behalf of a business associate.{{cite:ecfr-160-103}} The BAA between the site and Bond must also require Bond to have such subcontractors agree to the same restrictions and conditions that apply to Bond.{{cite:ecfr-164-504}} During security review, ask for the current subprocessor list and which subprocessors receive PHI. See [security](/security).",
    },
    {
      q: "What happens to our data when the contract ends?",
      a: "The business associate agreement governs it. HIPAA requires every business associate contract to say that, at termination, the business associate returns or destroys the PHI if feasible and keeps no copies, or extends the contract's protections to anything it cannot return or destroy.{{cite:ecfr-164-504}} Bond signs a BAA with each site{{cite:bond-site}}, so check its return-or-destroy terms, and how destruction is confirmed, before you sign.",
    },
    {
      q: "Do we need IRB approval to use Bond?",
      a: "Your IRB reviews your study's recruitment procedures, and that includes the scripts Bond's agents use. FDA's guidance on recruiting study subjects treats direct advertising as the start of informed consent and asks the IRB to check that scripts used at first contact to screen for eligibility protect prospective subjects' rights and welfare{{cite:fda-recruiting}}, and ICH E6(R3) asks for documented IRB approval of recruitment procedures before a trial starts.{{cite:ich-e6r3}} Scripts are configured per site and study, so the agents can use language your IRB has approved.{{cite:bond-site}} [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach) gives a starting point.",
    },
    {
      q: "What allows Bond to screen records before a patient has agreed to anything?",
      a: "HIPAA offers several paths for using PHI to find research candidates, including reviews preparatory to research and an IRB or privacy board waiver or alteration of authorization, and the site's privacy office or IRB decides which one applies.{{cite:ecfr-164-512}} For research under the Common Rule, an IRB may also approve screening through records without the prospective subject's consent.{{cite:ecfr-46-116}} Bond works under the site's BAA and that determination. [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach) covers the details.",
    },
    {
      q: "Do patients know they are talking to an AI?",
      a: "Yes. Patients are told when AI assistance is used, in every state, and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}} As of September 2026, some states also require disclosure by law. California requires health facilities, clinics and physician offices that use generative AI for patient communications about clinical information to include an AI disclaimer and instructions for reaching a person, unless a licensed provider reviews the message{{cite:ca-ab-3030}}, and since January 1, 2026 Texas has required providers to disclose AI use in health care services.{{cite:tx-hb-149}}",
    },
    {
      q: "How does a patient stop calls or texts?",
      a: "By asking in any reasonable way, such as replying STOP to a text or saying so on a call. Under FCC rules in effect since April 11, 2025, consent to automated calls and texts can be revoked by any reasonable means, and callers must honor the request within a reasonable time not to exceed 10 business days.{{cite:fcc-24-24}} Put opt-out wording in the scripts your IRB reviews; the [patient outreach SMS templates](/templates/patient-outreach-sms-templates) include language to adapt.",
    },
    {
      q: "Do TCPA rules apply to AI voice calls?",
      a: "Yes. In a February 2024 declaratory ruling, the FCC confirmed that calls using AI-generated voices count as \"artificial\" voice calls under the TCPA, so they need the consent the TCPA requires unless an exemption applies.{{cite:fcc-24-17}} Which consent or exemption fits your outreach is a question for your counsel and IRB. [TCPA and AI outreach in 2026](/blog/tcpa-ai-outreach-2026) walks through it.",
    },
    {
      q: "How is Bond priced?",
      a: "Pricing is custom and has two parts: a volume-based platform fee, and a success fee for each enrolled patient. There is no integration fee.{{cite:bond-site}} The platform fee covers EHR integration, implementation and ongoing operation: the EHR connection, security review, audit logging setup, workflow configuration, and ongoing compute, monitoring and support. Enrolled means successfully randomized, and per-visit milestones can be added. See [pricing](/pricing), or [book a demo](/book-a-demo) for a quote.",
    },
    {
      q: "What is included in every engagement?",
      a: "EHR screening, voice and text outreach and scheduling, consent support, the dashboard and audit trail, FHIR integration and dedicated support.{{cite:bond-site}} See [pricing](/pricing) for how the platform fee and the success fee apply.",
    },
    {
      q: "Can a site start without EHR integration?",
      a: "Yes. A pilot can run outreach from a candidate list the site provides, and EHR screening is added once IT approves the connection.{{cite:bond-site}} Without the EHR connection there is no ranked match list or chart evidence, so who is contacted depends on the site's list. See [implementation](/implementation).",
    },
    {
      q: "What does our site need to provide during implementation?",
      a: "A PI and lead coordinator to settle ambiguous criteria and review validation results, an IT contact for the EHR connection, and a privacy or security contact to run the vendor review and route the BAA. Bond also needs the protocol, your IRB's process for recruitment scripts, and access to the screening calendar and the CTMS or sheet that tracks referrals. See [implementation](/implementation).",
    },
    {
      q: "Is Bond SOC 2 compliant?",
      a: "Bond is SOC 2 Type I compliant: independent auditor Advantage Partners has issued Bond's SOC 2 Type I report. Bond is also HIPAA compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its controls include encryption at rest and in transit, role-based access, audit logging, penetration testing and employee security training, and its [Trust Center](https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj) on Vanta shows the current security posture.{{cite:bond-site}} Send security questionnaires to [hello@bondtrials.com](mailto:hello@bondtrials.com). See [security](/security).",
    },
    {
      q: "Is Bond cleared by the FDA?",
      a: "No. Bond does not hold FDA clearance or approval. It supports recruitment work that study staff oversee: coordinators review matches, the investigator decides eligibility, and the site obtains consent.{{cite:bond-site}}",
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
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Goel R. Bond Health preprint, August 2026. No public URL yet.",
    },
    {
      id: "onc-cures-milestone",
      title: "Achieving a Major Milestone: Health IT Developers Certify to Cures Update",
      publisher: "HealthIT.gov (ASTP/ONC)",
      url: "https://healthit.gov/blog/interoperability/achieving-a-major-milestone-health-it-developers-certify-to-cures-update/",
      year: "2023",
      note: "Quote: \"More than 95 percent of Certified Health IT developers met the compliance deadline to update and provide their customers with new technology.\"",
    },
    {
      id: "jamia-2026-bias",
      title: "Sociodemographic bias in large language model clinical trial screening",
      publisher: "Journal of the American Medical Informatics Association",
      url: "https://pubmed.ncbi.nlm.nih.gov/42118957/",
      year: "2026",
      note: "Quote: \"Across 58 protocols and 5.3 million evaluations, eligibility judgments were largely stable across identities. [...] Homelessness produced the largest negative eligibility shift [...] disparities emerged in domains requiring inference about behavior or resources.\" Physician-validated vignettes in 33 identity variants, assessed by nine language models. JAMIA 2026;33(8):1504-1509.",
    },
    {
      id: "ecfr-56-111",
      title: "21 CFR 56.111 Criteria for IRB approval of research",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-21/section-56.111",
      year: "2026",
      note: "Paragraph (a)(3): selection of subjects is equitable. Text current as of September 1, 2026.",
    },
    {
      id: "ich-e6r3",
      title: "ICH Harmonised Guideline: Guideline for Good Clinical Practice E6(R3)",
      publisher: "International Council for Harmonisation",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Final version adopted January 6, 2025. Sections 2.4.2 (IRB approval of recruitment procedures) and 2.8.5 (who conducts the consent process).",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Information sheet, January 1998; content current as of 2018. Quotes: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process.\" and, on the receptionist script used at first contact, \"The IRB should assure the procedures followed adequately protect the rights and welfare of the prospective subjects.\"",
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
      id: "ecfr-46-116",
      title: "45 CFR 46.116 General requirements for informed consent",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-46.116",
      year: "2026",
      note: "Paragraph (g), screening, recruiting, or determining eligibility. Text current as of September 1, 2026.",
    },
    {
      id: "ecfr-160-103",
      title: "45 CFR 160.103 Definitions (business associate)",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-160.103",
      year: "2026",
      note: "Quote: \"(iii) A subcontractor that creates, receives, maintains, or transmits protected health information on behalf of the business associate.\" Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ecfr-164-504",
      title: "45 CFR 164.504(e) Business associate contracts",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.504",
      year: "2026",
      note: "Paragraph (e)(2)(ii)(D): \"ensure that any subcontractors that create, receive, maintain, or transmit protected health information on behalf of the business associate agree to the same restrictions and conditions that apply to the business associate with respect to such information\". Paragraph (e)(2)(ii)(J): \"At termination of the contract, if feasible, return or destroy all protected health information received from, or created or received by the business associate on behalf of, the covered entity that the business associate still maintains in any form and retain no copies of such information or, if such return or destruction is not feasible, extend the protections of the contract to the information\" Text retrieved from the eCFR API, current as of September 1, 2026.",
    },
    {
      id: "ca-ab-3030",
      title: "AB-3030 Health care services: artificial intelligence (Chapter 848, Statutes of 2024)",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3030",
      year: "2024",
      note: "Health and Safety Code 1339.75. Operative January 1, 2025.",
    },
    {
      id: "tx-hb-149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act (enrolled)",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
      note: "Business and Commerce Code Sec. 552.051. Effective January 1, 2026.",
    },
    {
      id: "fcc-24-17",
      title: "Declaratory Ruling, Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts (FCC 24-17)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      year: "2024",
      note: "Adopted February 2, 2024; released February 8, 2024.",
    },
    {
      id: "fcc-24-24",
      title: "Report and Order, Rules and Regulations Implementing the Telephone Consumer Protection Act of 1991 (FCC 24-24)",
      publisher: "Federal Communications Commission",
      url: "https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf",
      year: "2024",
      note: "Revocation rules codified at 47 CFR 64.1200(a)(10); effective April 11, 2025.",
    },
  ],
  related: [
    { label: "Pricing", href: "/pricing", description: "The volume-based platform fee and the success fee per randomized patient." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control, audit logging and the Trust Center." },
    { label: "Implementation", href: "/implementation", description: "What happens between signing and live screening, step by step." },
    { label: "Integrations", href: "/integrations", description: "How Bond connects to EHRs, CTMS systems and calendars." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Authorizations, waivers and what the IRB reviews." },
  ],
};

export default page;
