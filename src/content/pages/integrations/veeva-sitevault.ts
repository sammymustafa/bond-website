import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/veeva-sitevault",
  category: "integration",
  title: "Veeva SiteVault eISF integration for recruitment records",
  description:
    "How Bond's pre-screening and consent support records fit a Veeva SiteVault eISF: document types, file upload or Vault API, and what stays manual today.",
  keywords: [
    "Veeva SiteVault eISF integration recruitment",
    "SiteVault screening log",
    "SiteVault Vault API integration",
    "eISF recruitment records",
    "SiteVault eConsent",
  ],
  eyebrow: "Integration",
  h1: "Veeva SiteVault and Bond: what connects and what is manual",
  intro:
    "Veeva SiteVault is the eISF, CTMS and eConsent system many research sites use as their regulatory binder.{{cite:veeva-eisf,veeva-ctms-faq}} Bond Health works at the recruitment step, before a patient becomes a participant, and produces records the binder may need.",
  summary: "Which Bond records go into a SiteVault eISF, under which document types, and what stays manual today.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "what-is-sitevault",
      heading: "What is Veeva SiteVault, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "SiteVault eISF is an electronic investigator site file that replaces paper regulatory binders and gives study teams and monitors self-serve access to documents.{{cite:veeva-eisf}} Veeva launched SiteVault as a free eRegulatory product in January 2020.{{cite:veeva-launch}} As of September 2026, the free edition includes CTMS, eISF and eConsent for sites with 20 or fewer concurrent active studies, which Veeva says is over 90% of research sites globally.{{cite:veeva-ctms-faq}} Larger sites move to SiteVault Enterprise, which has tiered pricing.{{cite:veeva-eisf,veeva-ctms-faq}}",
        },
        {
          type: "p",
          text: "Site staff file essential documents in SiteVault, and monitors assigned to a study review them there.{{cite:veeva-eisf,veeva-doctypes}} The figures below are Veeva's, as of September 2026.",
        },
        {
          type: "stats",
          items: [
            { value: "8,000+", label: "Sites in 80+ countries that have joined SiteVault", cite: "veeva-eisf" },
            { value: "2,000+", label: "Sites active in SiteVault each month", cite: "veeva-home" },
            { value: "20", label: "Most concurrent active studies on the free edition", cite: "veeva-eisf" },
          ],
        },
      ],
    },
    {
      id: "how-bond-fits",
      heading: "Where does Bond sit next to SiteVault?",
      blocks: [
        {
          type: "p",
          text: "Bond covers recruitment. [Identify](/identify) screens EHR records against the protocol and shows the evidence for each criterion. [Engage](/engage) contacts candidates by voice or text, pre-screens them and books a screening visit. [Consent](/consent) support answers patients' questions in plain language, and the site still obtains consent.{{cite:bond-site}} SiteVault holds the regulatory record that follows: approved recruitment materials, logs, signed consent forms and staff records.{{cite:veeva-doctypes}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "What Bond does and does not claim",
          text: "Bond works alongside SiteVault and has no Veeva partnership. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}} As of September 2026, Veeva's AI page says only Veeva-governed AI agents operate on SiteVault data.{{cite:veeva-ai}} Bond's AI runs on EHR data, never on SiteVault.",
        },
      ],
    },
    {
      id: "records-and-document-types",
      heading: "Which Bond records belong in the SiteVault binder?",
      blocks: [
        {
          type: "p",
          text: "SiteVault's eBinder uses a fixed folder structure based on the eISF Reference Model, and sites cannot change it.{{cite:veeva-faq}} So each Bond record goes under one of Veeva's standard document types.{{cite:veeva-doctypes}} The site's SOPs and the sponsor decide what is filed.",
        },
        {
          type: "table",
          caption: "Bond data and records, and where they go in SiteVault",
          columns: ["Data element", "FHIR resource or interface", "SiteVault document type", "Notes"],
          rows: [
            [
              "Chart data for screening",
              "EHR over FHIR R4 (Patient, Condition, MedicationRequest, Observation, DocumentReference), HL7 v2 or an integration partner",
              "None",
              "Read from the EHR under the BAA with Bond and never filed in SiteVault.{{cite:bond-site}} See [integrations](/integrations).",
            ],
            [
              "Recruitment approach",
              "Written description of the study's Bond configuration",
              "Recruitment Plan, in Key Study Materials > Manuals & Procedures",
              "The plan can name EHR screening and AI outreach as methods and say how referrals are tracked.",
            ],
            [
              "Voice and text outreach scripts",
              "Script text exported as a document",
              "Advertisement for Recruitment, in Participant Facing > Recruiting & Consenting",
              "Veeva defines this type as IRB-approved recruitment material. The IRB's decision files as IRB/IEC Response.",
            ],
            [
              "Pre-screening log",
              "Report exported from Bond's dashboard, coded by the site before filing",
              "Participant Screening Log, in Participants > Logs",
              "Veeva's log lists participants by code. Whether pre-screens belong here is the site's and sponsor's call.",
            ],
            [
              "Consent support record",
              "Report from Bond's audit trail",
              "Source, in Participants > Source",
              "Only if the site's SOP treats it as documentation of the consent process. The signed ICF files as Informed Consent Form (signed).",
            ],
            [
              "Bond user access",
              "User list from Bond's role-based access settings",
              "System User Access, in PI Oversight",
              "Which staff hold Bond accounts, and when access ends.",
            ],
            [
              "Dashboard training",
              "The site's training sign-in sheet",
              "Training Evidence (study-specific), in Study Training",
              "Bond trains coordinators in week 5 of the typical implementation plan.{{cite:bond-site}}",
            ],
          ],
          note: "Document types and eBinder locations are from Veeva's SiteVault document type list, updated August 7, 2026.{{cite:veeva-doctypes}}",
        },
      ],
    },
    {
      id: "how-records-move",
      heading: "How do records move from Bond into SiteVault?",
      blocks: [
        {
          type: "p",
          text: "It depends on the edition. As of September 2026, Veeva's FAQ says the free version integrates with other Veeva applications but does not currently integrate with third-party systems, and that the Enterprise package enables integration.{{cite:veeva-faq}} On Veeva's plans page, Open API and single sign-on are Enterprise features.{{cite:veeva-plans}}",
        },
        {
          type: "table",
          caption: "How Bond records reach SiteVault, by edition",
          columns: ["SiteVault edition", "How Bond records get in", "Who finalizes them"],
          rows: [
            [
              "SiteVault Free (up to 20 active studies){{cite:veeva-eisf}}",
              "Staff export the reports above from Bond and upload them like any other document.",
              "Site staff",
            ],
            [
              "SiteVault Enterprise",
              "Enterprise adds API access.{{cite:veeva-ctms-faq}} The Vault API lets an external application read and write to Vault.{{cite:veeva-vault-api}} Bond has no prebuilt upload, so one is scoped per site with the Vault administrator.",
              "Uploads start in Draft, the first lifecycle state for these document types. Staff review and finalize them.{{cite:veeva-doctypes}}",
            ],
          ],
        },
        {
          type: "p",
          text: "For API loads, Veeva's general Vault guidance recommends storing the external system's document ID in the `external_id__v` field so each document links back to its source.{{cite:veeva-integration-types}} For Bond, that is the report ID.",
        },
      ],
    },
    {
      id: "site-tasks",
      heading: "What does the site's regulatory or IT team need to do?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Confirm the edition",
              text: "Free sites use file upload. Enterprise sites can also use the API.",
            },
            {
              title: "Agree on the mapping",
              text: "Check each document type above against site SOPs and sponsor expectations.",
            },
            {
              title: "Set the coding rule",
              text: "Decide how patients are coded in logs, so names stay out of shared logs. The key linking codes to names files as a Participant ID Code List.{{cite:veeva-doctypes}}",
            },
            {
              title: "Issue API access (Enterprise only)",
              text: "With the site's Vault administrator, set up credentials for the upload and limit its access to the agreed studies.",
            },
            {
              title: "Test on one study",
              text: "File one study's first reports, have the regulatory lead check them, then extend.",
            },
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "Where does this fit in the 4 to 6 week implementation?",
      blocks: [
        {
          type: "p",
          text: "A full Bond deployment with the EHR connected typically takes 4 to 6 weeks, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} SiteVault work does not gate go-live, because Bond never reads from it. In the typical [implementation plan](/implementation), scripts go to the IRB in weeks 2 to 4, and the pre-screening log starts when outreach begins in weeks 3 to 5. Training and access setup in week 5 produce the training and user access records.{{cite:bond-site}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Starting before the EHR is connected",
          text: "A pilot without EHR integration can be set up in under 2 weeks.{{cite:bond-site}} SiteVault filing works the same way in a pilot.",
        },
      ],
    },
    {
      id: "security",
      heading: "How is patient data protected between Bond and SiteVault?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Agreements first.** The business associate agreement with Bond is signed in week 1, before any PHI moves.{{cite:bond-site}}",
            "**Coded logs.** Veeva's screening log type lists participants by code, and monitors on the study can view it once final.{{cite:veeva-doctypes}}",
            "**The site decides what is shared.** In SiteVault the site owns its data and chooses which documents to share and with whom.{{cite:veeva-faq}}",
            "**Bond's controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its controls include encryption in transit and at rest (AES-256 where applicable), role-based access, SSO, audit logging and penetration testing. See [security](/security).{{cite:bond-site}}",
          ],
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with SiteVault today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**No prebuilt connector, and no reads.** Bond works alongside SiteVault by file upload, or an API upload scoped with an Enterprise site. It pulls nothing out of SiteVault.",
            "**No CTMS sync.** Bond does not create participants or set their status in SiteVault CTMS. Staff do that on the participant's Screening & Enrollment Details tab, as for any referral.{{cite:veeva-participant}}",
            "**No sponsor feed.** For sponsors on Veeva's Clinical Platform, SiteVault CTMS can share recruitment status.{{cite:veeva-ctms-faq}} That status comes from what staff enter, not from Bond.",
            "**No eConsent writes.** SiteVault eConsent runs in-person or remote consent.{{cite:veeva-econsent}} Bond supports the conversation before it and does not write to eConsent records.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your regulatory lead. We will map Bond's records to your binder.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a Veeva partner?",
      a: "No. Bond has no Veeva partnership, and its only vendor certification is CRIO Certified Partner.{{cite:bond-site}} It works alongside SiteVault through file upload or, on Enterprise, a scoped API upload.",
    },
    {
      q: "Do we need SiteVault Enterprise to use Bond?",
      a: "No. Sites on the free edition, which covers up to 20 active studies, upload Bond's reports as files.{{cite:veeva-eisf}} Enterprise matters only if the site wants an API upload.{{cite:veeva-faq}}",
    },
    {
      q: "How is Bond different from Veeva AI in SiteVault?",
      a: "As of September 2026, SiteVault's first production AI agent reads a protocol's schedule of assessments and builds the visit schedule in CTMS.{{cite:veeva-ai}} That is study setup. Bond works on a different step: finding and pre-screening patients from the EHR.",
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
      id: "veeva-eisf",
      title: "eISF Software for Clinical Trial Sites | Veeva SiteVault",
      publisher: "Veeva Systems",
      url: "https://sites.veeva.com/solutions/eisf",
      year: "2026",
      note: "Vendor page, accessed September 2026. Quote: \"SiteVault eISF is an electronic investigator site file (eISF) that reduces the administrative burden of managing paper binders so research teams can focus on what matters most.\" Also: \"SiteVault is free for sites with up to 20 active studies, and available with tiered pricing options for larger sites.\" Also: \"Join over 8,000 sites across more than 80 countries.\"",
    },
    {
      id: "veeva-home",
      title: "Veeva SiteVault: One place to manage your studies",
      publisher: "Veeva Systems",
      url: "https://sites.veeva.com/",
      year: "2026",
      note: "Vendor homepage, accessed September 2026. Quote: \"2000 + Monthly Active Sites Use SiteVault\"",
    },
    {
      id: "veeva-ctms-faq",
      title: "CTMS General FAQs | SiteVault Help",
      publisher: "Veeva Systems",
      url: "https://sites.veevavault.help/gr/sitevault/ctms/ctms-faq/",
      year: "2026",
      note: "Quote: \"The 'SiteVault Free' edition (which now includes CTMS, eISF, and eConsent) is available to any site managing 20 or fewer concurrent active studies. This is over 90% of research sites, globally.\" Also: \"The Enterprise tier provides the same core CTMS capabilities but includes additional features like Single Sign-On (SSO), API access for custom integrations, and dedicated account management.\" Also: \"For sponsors and CROs using Veeva's Clinical Platform, SiteVault CTMS allows for bidirectional data flow. This streamlines the exchange of information, such as recruitment status and milestone completions.\"",
    },
    {
      id: "veeva-launch",
      title: "Veeva SiteVault Now Available to Simplify Study Execution at Clinical Research Sites",
      publisher: "Veeva Systems",
      url: "https://www.veeva.com/resources/veeva-sitevault-free-now-available-to-simplify-study-execution-at-clinical-research-sites/",
      year: "2020",
      note: "Press release dated January 8, 2020. Quote: \"Veeva Systems (NYSE:VEEV) today introduced the availability of Veeva SiteVault, a free eRegulatory solution for clinical research sites.\"",
    },
    {
      id: "veeva-faq",
      title: "SiteVault FAQ",
      publisher: "Veeva Systems",
      url: "https://sites.veeva.com/sitevault-faq",
      year: "2026",
      note: "Accessed September 22, 2026. Quote: \"The free version of SiteVault integrates with other Veeva applications but does not currently integrate with third-party systems.\" Also: \"The SiteVault Enterprise Package enables integration.\" Also: \"The SiteVault eBinder structure is based on the eISF Reference Model and is an intentional product design choice.\" Also: \"The sites decide what documents to share and with whom to share them.\"",
    },
    {
      id: "veeva-plans",
      title: "Plans | Veeva SiteVault",
      publisher: "Veeva Systems",
      url: "https://sites.veeva.com/plans",
      year: "2026",
      note: "Feature table, SiteVault Free then SiteVault Enterprise. Quote: \"Connection to sponsor systems from Veeva ✓ ✓ One login across Veeva applications ✓ ✓ Open API – ✓ Single sign-on (SSO) – ✓\"",
    },
    {
      id: "veeva-vault-api",
      title: "Vault API | Vault Developer Portal (SiteVault)",
      publisher: "Veeva Systems",
      url: "https://general.veevavault.dev/sitevault/vault-api/",
      year: "2026",
      note: "Quote: \"Vault API allows you to read and write to Vault [...], allowing your application to integrate directly with Vault.\"",
    },
    {
      id: "veeva-integration-types",
      title: "Integration Types | Vault Developer Portal",
      publisher: "Veeva Systems",
      url: "https://general.veevavault.dev/integrations/references/integration-types",
      year: "2026",
      note: "General Vault Platform guidance. Quote: \"When loading documents from an external system into Vault, it's recommended to store the external document's identifier in the Vault external_id__v field or any other unique field, to be able to easily link the documents.\"",
    },
    {
      id: "veeva-doctypes",
      title: "SiteVault Document Types (SiteVault-DocumentTypes.xlsx)",
      publisher: "Veeva Systems",
      url: "https://sites.veevavault.help/gr/uploads/sitevault/downloads/SiteVault-DocumentTypes.xlsx",
      year: "2026",
      note: "Spreadsheet downloaded and read September 22, 2026 (\"Current\" sheet; the Updates sheet is dated August 7, 2026). Quote: \"Participant Screening Log | Subject Screening Log -- Lists all study participants screened at the site. Participants are coded to respect personal identification. | Draft to Current | ... | Participants > Logs\" Also: \"Advertisement for Recruitment | Recruiting Ad -- Materials used in study recruitment campaigns; approved by the IRB/IEC to ensure recruitment measures are appropriate and not coercive.\" (Participant Facing > Recruiting & Consenting). Also: \"Recruitment Plan | To describe the planned participant enrollment/recruitment goals for the study, and the methods by which those goals will be tracked and achieved.\" (Key Study Materials > Manuals & Procedures). Also: \"System User Access | ... Identifies which site staff have received accounts for a third party system (such as randomization or ePRO) used for the study. May also identify revocation of access.\" (PI Oversight). Also: Source \"May include medical treatment and history, concomitant medication (con med) records, documentation of the consent process\" (Participants > Source). Also: \"Training Evidence (study-specific) | Verifies completion of study-specific training. Often in form of a Sign-in Sheet.\" (Study Training). Also: \"IRB/IEC Response | Ethics Committee Approval, Decision, Acknowledgement\" (IRB/IEC > Submissions). Also: \"Participant ID Code List | Subject Identification Code List, Subject ID List -- Fully identifies all participants for the study at the site, with unique identifiers/codes where relevant.\" (Participants > Logs). Can Monitors View: \"Yes, if steady state and monitor is on the study.\"",
    },
    {
      id: "veeva-participant",
      title: "Create Participant | SiteVault Help",
      publisher: "Veeva Systems",
      url: "https://sites.veevavault.help/gr/sitevault/ctms/part-create/",
      year: "2026",
      note: "Quote: \"Once created, you can select the current status for the participant and complete any relevant date fields on the Screening & Enrollment Details tab.\"",
    },
    {
      id: "veeva-ai",
      title: "Veeva AI in SiteVault",
      publisher: "Veeva Systems",
      url: "https://sites.veeva.com/ai",
      year: "2026",
      note: "Accessed September 22, 2026. Quote: \"Not permitted. Only Veeva-governed agents operate on SiteVault data.\" (row: third-party AI apps reaching into your data). Also: \"SiteVault's first production ready AI agent is live in CTMS, built to eliminate the manual overhead of study setup.\" Also: \"The agent reads the schedule of assessments the way an experienced study manager would, automatically generating the visit schedule directly in CTMS.\"",
    },
    {
      id: "veeva-econsent",
      title: "eConsent in Clinical Trials | Veeva SiteVault",
      publisher: "Veeva Systems",
      url: "https://sites.veeva.com/solutions/econsent",
      year: "2026",
      note: "Accessed September 2026. Quote: \"SiteVault eConsent provides a digital way to consent clinical trial participants in-person or remotely.\"",
    },
  ],
  related: [
    { label: "Consent", href: "/consent", description: "How Bond supports the consent conversation and what the site still owns." },
    { label: "Implementation", href: "/implementation", description: "The 4 to 6 week plan, week by week, with site and Bond tasks." },
    { label: "Integrations", href: "/integrations", description: "EHR and research-system connections, and what each requires." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond screens the EHR and explains each match." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "eRegulatory and eISF", href: "/glossary/eregulatory-eisf", description: "What an electronic regulatory binder holds." },
  ],
};

export default page;
