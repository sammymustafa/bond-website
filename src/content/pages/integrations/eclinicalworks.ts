import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/eclinicalworks",
  category: "integration",
  title: "eClinicalWorks FHIR integration: clinical trial recruitment",
  description:
    "How Bond connects to eClinicalWorks over FHIR R4: data it reads, how notes are handled, what the practice activates, the timeline and what is not integrated.",
  keywords: [
    "eClinicalWorks clinical trial recruitment integration FHIR",
    "eClinicalWorks FHIR R4 API",
    "eClinicalWorks FQHC clinical trials",
    "eClinicalWorks On-Demand Activation",
    "eClinicalWorks bulk FHIR export",
  ],
  eyebrow: "Integration",
  h1: "Connecting Bond to eClinicalWorks",
  intro:
    "Bond Health connects via the ONC-certified FHIR R4 APIs that eClinicalWorks offers its customers, screens a practice's patients against a study's criteria, and hands pre-screened patients to your coordinators. Below: the data involved, what your administrator turns on, the timeline, and what is not integrated today.",
  summary: "The FHIR resources, practice activation steps, timeline and notes handling for connecting Bond at an eClinicalWorks practice or health center.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "ecw-footprint",
      heading: "What is eClinicalWorks, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "eClinicalWorks is a privately held health IT company founded in 1999. It sells EHR software to ambulatory practices, urgent care centers, health centers and hospitals, along with patient engagement, population health and revenue cycle tools.{{cite:ecw-about}}",
        },
        {
          type: "table",
          caption: "eClinicalWorks' share of US ambulatory care",
          columns: ["Measure", "eClinicalWorks", "Rank"],
          rows: [
            ["Office-based physicians using it, 2024 federal survey{{cite:onc-nehrs}}", "7.5%", "Third, after Epic and Meditech"],
            ["Ambulatory installations, Definitive Healthcare, October 2025{{cite:definitive-ambulatory}}", "11.9% (9,966 installations)", "Second, after Epic"],
            ["US health centers, per the vendor, March 2024{{cite:ecw-uds-approval}}", "More than 800, roughly 60%", "Vendor's own claim"],
          ],
          note: "The survey counts physicians; Definitive counts installations; the health center figure is eClinicalWorks' own.",
        },
        {
          type: "p",
          text: "Its footprint is largest in community health. Health centers served 32.4 million patients in 2024, and 64% of them were people of color.{{cite:kff-chc}} If the vendor's share holds, many of those charts are in eClinicalWorks, which matters to [FQHCs](/for/fqhcs-and-community-sites) and to sponsors with a [diversity action plan](/glossary/diversity-action-plan).",
        },
      ],
    },
    {
      id: "data-and-resources",
      heading: "What data does Bond read, and which FHIR resources carry it?",
      blocks: [
        {
          type: "p",
          text: "eClinicalWorks holds ONC certification for the standardized API for patient and population services, § 170.315(g)(10).{{cite:ecw-cert}} As of September 2026, its production FHIR server runs version 4.0.1, declares the US Core server and Bulk Data capability statements, and lists 36 resource types. All of them are read and search only, except QuestionnaireResponse, which also accepts create.{{cite:ecw-fhir-metadata}}",
        },
        {
          type: "table",
          caption: "Data Bond requests from eClinicalWorks",
          columns: ["Data element", "FHIR resource or interface", "Notes"],
          rows: [
            ["Whole-panel pull", "Bulk Data `$export`, system or Group level", "One asynchronous job for the agreed patient population."],
            ["Demographics and contact details", "Patient", "Age and sex for criteria; phone and language for outreach."],
            ["Diagnoses", "Condition", "US Core problem list and encounter diagnosis profiles, with onset dates."],
            ["Medications", "MedicationRequest, MedicationAdministration, MedicationDispense", "Current and prior therapies, washout windows."],
            ["Labs, vitals and status", "Observation", "US Core lab, vital sign, smoking status and pregnancy status profiles."],
            ["Procedures and orders", "Procedure, ServiceRequest", "Procedures named in exclusions; open orders and referrals."],
            ["Allergies", "AllergyIntolerance", "Allergies that rule out a study drug."],
            ["Reports", "DiagnosticReport", "US Core lab and note profiles, for narrative results where the practice files them."],
            ["Clinical notes", "DocumentReference and Binary", "Progress notes and other documents. The main source for unstructured criteria."],
            ["Visits", "Encounter", "Visit history. No Appointment resource is listed, so upcoming appointments are not available here."],
          ],
          note: "Resources and profiles from the live eClinicalWorks CapabilityStatement, retrieved September 2026.{{cite:ecw-fhir-metadata}} What a given practice's build returns is checked when Bond connects in test.",
        },
      ],
    },
    {
      id: "notes-handling",
      heading: "How are clinical notes handled?",
      blocks: [
        {
          type: "p",
          text: "Many criteria live in free text, such as symptom history or response to a prior therapy. [Identify](/identify) reads the notes eClinicalWorks returns through DocumentReference and Binary alongside coded fields, and links each criterion to the passage that supports it.{{cite:ecw-fhir-metadata}}",
        },
        {
          type: "ul",
          items: [
            "**Scope.** DocumentReference can be searched by category, type and date, so a query can be limited to the note types and look-back window a protocol needs.{{cite:ecw-fhir-metadata}}",
            "**Scribe-drafted notes.** Some practices draft notes with Sunoh.ai, an ambient AI scribe eClinicalWorks says is fully integrated with its EHR.{{cite:ecw-sunoh}} Bond does not connect to Sunoh; in the test connection, check that these notes appear in DocumentReference like other progress notes.",
            "**Scanned and outside records.** Faxes, scans and records from other networks may not arrive as readable text. If not, criteria that depend on them move to the pre-screening call.",
            "**Wording.** A note can name the same condition many ways. Bond's terminology graph maps phrases, codes and drug names to one concept before a criterion is checked.{{cite:bond-whitepaper}}",
          ],
        },
      ],
    },
    {
      id: "practice-steps",
      heading: "What does the practice need to do?",
      blocks: [
        {
          type: "p",
          text: "The practice-side work sits mostly with your eClinicalWorks administrator. Third-party developers connect through eClinicalWorks' Platform for Open Development, which has one developer portal for patient-facing apps and another for provider-facing and backend (bulk) FHIR APIs.{{cite:ecw-interop,ecw-cert}} A tool that screens a whole panel uses the second.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Sign the business associate agreement",
              text: "No PHI moves until the BAA with Bond is in place.",
            },
            {
              title: "Turn on FHIR access",
              text: "An administrator enables FHIR APIs through the On-Demand Activation feature inside the eClinicalWorks application.{{cite:ecw-cert}} A third-party API directory reports that each practice activates separately, so a network running several eClinicalWorks practices may repeat this step for each.{{cite:cobalt-ecw}}",
            },
            {
              title: "Authorize the backend connection",
              text: "An independent API catalog lists support for SMART Backend Services with `private_key_jwt` authentication, so no staff login is shared.{{cite:apis-io-ecw}}",
            },
            {
              title: "Agree on the export population",
              text: "The practice and Bond agree on which patients the Bulk Data export covers.",
            },
            {
              title: "Name a validation reviewer",
              text: "Before go-live, a PI or coordinator adjudicates a sample of Bond's criteria checks on real records. See [how we validate eligibility logic](/blog/validating-eligibility-logic-before-go-live).",
            },
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "Where does this sit in the 4 to 6 week implementation?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for a full EHR integration is 4 to 6 weeks, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} In the [implementation plan](/implementation), the security review runs in weeks 1 to 3 and the eClinicalWorks connection in weeks 2 to 3, while criteria and outreach scripts are set up alongside.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "The first screen runs across the agreed population. As of September 2026, a third-party API directory reports a limit of 250 calls per minute per practice code, which makes chart-by-chart queries across a large panel slow.{{cite:cobalt-ecw}} A Bulk Data export fetches the population as one job, which is why the population is agreed early.",
        },
      ],
    },
    {
      id: "security",
      heading: "How is patient data protected?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Scoped access.** Bond requests read access to the resources in the table above, and your security review approves that list.",
            "**Bond's controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} It signs BAAs and uses encryption in transit and at rest (AES-256 where applicable), role-based access, SSO support, audit logging and penetration testing.{{cite:bond-site}}",
            "**People decide.** Bond ranks candidates with the evidence for each criterion; coordinators review them, and the screening visit confirms eligibility.",
          ],
        },
        {
          type: "p",
          text: "See [security](/security) for where PHI goes and what your security reviewer should ask for.",
        },
      ],
    },
    {
      id: "ecw-tools",
      heading: "How does Bond relate to eClinicalWorks' own tools?",
      blocks: [
        {
          type: "p",
          text: "eClinicalWorks does not present these tools as trial recruitment products; the difference is scope.",
        },
        {
          type: "table",
          caption: "eClinicalWorks tools and where Bond fits",
          columns: ["eClinicalWorks tool", "What it does, per eClinicalWorks", "How Bond relates"],
          rows: [
            [
              "Disease Explorer",
              "Groups patients into cohorts by demographics, condition, severity or gaps in recommended care, to target outreach.{{cite:ecw-disease-explorer}}",
              "Useful for a quick feasibility count. Bond adds note review and per-criterion evidence for a specific protocol.",
            ],
            [
              "EHI export",
              "Full export of electronic health information, per patient or population.{{cite:ecw-cert}}",
              "Not Bond's standard path; can be raised during scoping.",
            ],
          ],
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with eClinicalWorks today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Certification or partner status.** Bond works alongside eClinicalWorks and connects via its FHIR APIs, but holds no eClinicalWorks certification or partner listing. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
            "**Writing to the chart.** The FHIR server is read-only apart from QuestionnaireResponse, and a third-party directory reports that write APIs need a separate contract with eClinicalWorks.{{cite:ecw-fhir-metadata,cobalt-ecw}} Bond does not file notes, orders or research status in eClinicalWorks.",
            "**The eClinicalWorks schedule.** Bond does not read or book eClinicalWorks appointments. It books visits on the calendar the site connects, and status goes to Bond's dashboard, the CTMS or a Google Sheet.{{cite:bond-site}}",
            "**Portal messaging.** Bond does not send patient portal messages. Its outreach is voice and text through [Engage](/engage).",
          ],
        },
        {
          type: "p",
          text: "Paths for other EHRs and research systems are on the [integrations](/integrations) page.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your eClinicalWorks administrator. We will map activation, scopes and dates.",
          secondaryLabel: "Read about security",
          secondaryHref: "/security",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does eClinicalWorks charge for FHIR API access?",
      a: "As of September 2026, eClinicalWorks says its certified FHIR APIs are free to customers and third-party developers \"at this time\", with at least 30 days' notice before any fee.{{cite:ecw-cert}} Bond charges no integration fee; its integration work is covered by its volume-based platform fee. See [pricing](/pricing).{{cite:bond-site}}",
    },
    {
      q: "We are a health center with a small IT team. What does this ask of us?",
      a: "An administrator activates FHIR access and joins the security review; a PI or coordinator checks a validation sample. Bond's volume-based platform fee covers the EHR connection, security review and audit logging setup, and workflow configuration, with no separate integration fee.{{cite:bond-site}}",
    },
    {
      q: "Can we start before FHIR access is activated?",
      a: "Yes. A pilot without EHR integration can be set up in under 2 weeks from a patient list the practice exports, and EHR screening is added once the connection is approved.{{cite:bond-site}}",
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
      note: "Internal technical report by R. Goel, August 2026. Available on request.",
    },
    {
      id: "onc-nehrs",
      title: "Office-based Physician Electronic Health Record Adoption, 2008-2024 (Appendix Table 2)",
      publisher: "ASTP/ONC, HealthIT.gov data brief",
      url: "https://healthit.gov/data/data-briefs/office-based-physician-electronic-health-record-adoption-2008-2024/",
      year: "2025",
      note: "2024 National Electronic Health Record Survey, percent of all office-based physicians. Quote: \"EHR Developer Market Size % of all physicians Epic Top 5 27.70% Meditech Top 5 11.10% eClinicalWorks Top 5 7.50%\"",
    },
    {
      id: "definitive-ambulatory",
      title: "Top 10 Ambulatory EHR Vendors by Market Share",
      publisher: "Definitive Healthcare",
      url: "https://www.definitivehc.com/blog/top-ambulatory-ehr-systems",
      year: "2025",
      note: "Published October 15, 2025, from Definitive Healthcare data accessed October 2025. Measured by number of installations; eClinicalWorks ranks second behind Epic. Quote: \"eClinicalWorks 9,966 11.9%\"",
    },
    {
      id: "ecw-uds-approval",
      title: "eClinicalWorks EHR Receives HRSA Approval for UDS+ Submissions for Health Centers Nationwide",
      publisher: "eClinicalWorks (press release, March 25, 2024)",
      url: "https://www.eclinicalworks.com/eclinicalworks-ehr-receives-hrsa-approval-for-uds-submissions-for-health-centers-nationwide/",
      year: "2024",
      note: "Vendor-reported figure. Quote: \"vendor of choice for over 800, or roughly 60% of the nation's health centers\"",
    },
    {
      id: "kff-chc",
      title: "Community Health Center Patients, Financing, and Services",
      publisher: "KFF",
      url: "https://www.kff.org/medicaid/community-health-center-patients-financing-and-services/",
      year: "2025",
      note: "Analysis of HRSA 2024 UDS data. Quote: \"In 2024, 1,359 health center organizations provided care at over 16,300 service delivery sites.\" Also: \"Health centers served 32.4 million patients in 2024\" and \"Most health center patients (64%) are people of color\".",
    },
    {
      id: "ecw-about",
      title: "About Us",
      publisher: "eClinicalWorks",
      url: "https://www.eclinicalworks.com/about-us/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"eClinicalWorks was founded in 1999 with a simple goal\". Also: \"Privately held, eClinicalWorks answers to customers, not shareholders.\" And: \"ambulatory practices, urgent care facilities, health centers, hospitals, and more than 50 specialties\" and \"along with tools for Patient Engagement, Population Health, and Revenue Cycle Management.\"",
    },
    {
      id: "ecw-fhir-metadata",
      title: "eCW FHIR Facade CapabilityStatement (live metadata endpoint)",
      publisher: "eClinicalWorks",
      url: "https://fhir4.healow.com/fhir/r4/DJDIBD/metadata",
      year: "2026",
      note: "Retrieved September 2026. Quote: \"fhirVersion\": \"4.0.1\" with instantiates bulk-data and us-core-server CapabilityStatements. Lists 36 resource types; each supports read or search only, except QuestionnaireResponse, which also supports create. No Appointment resource. Security: \"OAuth2 using SMART-on-FHIR profile\". Group and system-level $export declared.",
    },
    {
      id: "ecw-cert",
      title: "Certified EHR Technology",
      publisher: "eClinicalWorks",
      url: "https://www.eclinicalworks.com/resources/certified-ehr-technology/",
      year: "2026",
      note: "Quote: \"Certified FHIR APIs are available to third-party application developers and eClinicalWorks customers at no cost at this time.\" Also: \"Customers can learn more and enable FHIR APIs through the On-Demand Activation feature in the eClinicalWorks application.\" And: \"eClinicalWorks will notify customers of any future API licensing or usage fees at least 30 days in advance of such fees taking effect.\"",
    },
    {
      id: "ecw-interop",
      title: "Interoperability Solutions",
      publisher: "eClinicalWorks",
      url: "https://www.eclinicalworks.com/products-services/interoperability/",
      year: "2026",
      note: "Quote: \"The eClinicalWorks Platform for Open Development allows third-party developers to integrate healthcare applications with the eClinicalWorks EHR using FHIR\"",
    },
    {
      id: "apis-io-ecw",
      title: "eClinicalWorks FHIR API",
      publisher: "APIs.io (API Evangelist profile)",
      url: "https://apis.io/apis/eclinicalworks/eclinicalworks-fhir-api/index.md",
      year: "2026",
      note: "Independent API catalog. Quote: \"Supports SMART on FHIR EHR Launch, Standalone Launch, Backend Services (private_key_jwt, RS384)\"",
    },
    {
      id: "cobalt-ecw",
      title: "eClinicalWorks API: EHR API Explorer",
      publisher: "Cobalt",
      url: "https://explorer.usecobalt.com/ehr/eclinicalworks",
      year: "2026",
      note: "Third-party summary of eClinicalWorks developer documentation; eClinicalWorks' own developer portal could not be reached to confirm it. Quote: \"250 calls/min per practice code\". Also: \"Each practice must individually activate FHIR APIs via On-Demand Activation\" and \"All write APIs require a separate contract\".",
    },
    {
      id: "ecw-disease-explorer",
      title: "Disease Explorer",
      publisher: "eClinicalWorks",
      url: "https://www.eclinicalworks.com/products-services/population-health/disease-explorer/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Organize patients by demographic data, medical condition, severity, or non-compliance with specific health measures or recommendations\". Also: \"Target and hone your outreach and intervention efforts to get the right message to the right patients\"",
    },
    {
      id: "ecw-sunoh",
      title: "Sunoh.ai: Medical AI Scribe Technology for Clinical Documentation",
      publisher: "eClinicalWorks",
      url: "https://www.eclinicalworks.com/sunoh-ai-medical-scribe-technology-for-clinical-documentation/",
      year: "2026",
      note: "Quote: \"Sunoh is fully integrated with eClinicalWorks and can be customized to fit the specific needs of your practice.\"",
    },
  ],
  related: [
    { label: "FQHCs and community sites", href: "/for/fqhcs-and-community-sites", description: "How Bond works in health centers, where eClinicalWorks is most common." },
    { label: "Physician groups", href: "/for/physician-groups", description: "Running studies from an ambulatory practice's own patient panel." },
    { label: "Implementation", href: "/implementation", description: "Where the eClinicalWorks connection sits in the 4 to 6 week plan." },
    { label: "Integrations", href: "/integrations", description: "Every EHR and research system Bond connects to, and what each needs." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads charts and notes against each criterion and explains matches." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
  ],
};

export default page;
