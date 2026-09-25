import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/athenahealth",
  category: "integration",
  title: "athenahealth FHIR integration for clinical trial recruitment",
  description:
    "How Bond connects to athenaOne over FHIR R4: the data it reads, what your athenahealth admin approves, the 4 to 6 week timeline, and what is not integrated.",
  keywords: [
    "athenahealth clinical trial recruitment",
    "athenaOne FHIR R4 integration",
    "athenahealth Marketplace clinical trials",
    "athenahealth DocumentReference clinical notes",
    "physician group clinical trial recruitment EHR",
  ],
  eyebrow: "Integration",
  h1: "Connecting Bond to athenahealth's athenaOne",
  intro:
    "Bond Health connects via athenahealth's FHIR R4 APIs to read athenaOne records, screens a practice's patients against a study's criteria, and hands matched, pre-screened patients to the practice's coordinators. Below: the data and FHIR resources involved, what your athenaOne administrator approves, the timeline, and what is not integrated today.",
  summary: "The FHIR resources, practice approvals, timeline and PHI controls for connecting Bond to athenaOne.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "who-uses-athenahealth",
      heading: "What is athenahealth, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "athenahealth sells athenaOne, a cloud-based suite that combines an ambulatory EHR (athenaClinicals), practice management and billing (athenaCollector) and patient engagement tools. Per a September 2025 TechTarget profile, the company mainly serves small to medium-sized physician practices and hospitals.{{cite:techtarget-athenahealth}} A January 2025 press release from Trially, a recruitment vendor joining the athenahealth Marketplace, cited more than 160,000 providers on the athenaOne network.{{cite:trially-marketplace}} By installations, Definitive Healthcare data ranks athenahealth third among ambulatory EHR vendors, behind Epic and eClinicalWorks.{{cite:definitive-ambulatory}}",
        },
        {
          type: "table",
          caption: "Top three ambulatory EHR vendors by installations",
          columns: ["Vendor", "Installations", "Market share"],
          rows: [
            ["Epic", "16,295", "19.5%"],
            ["eClinicalWorks", "9,966", "11.9%"],
            ["athenahealth", "5,801", "6.9%"],
          ],
          note: "Definitive Healthcare data, accessed October 2025.{{cite:definitive-ambulatory}} The counts are installations, not providers.",
        },
        {
          type: "p",
          text: "KLAS Research graded six ambulatory vendors' product suites in its 2025 Complete Look reports. As summarized by TechTarget in June 2025, athenahealth received a B-minus overall, against a C average for the six, and 77% of its customers were satisfied or highly satisfied. Customers praised its interfaces and interoperability; some said specialty workflows need improvement.{{cite:klas-ambulatory-2025}}",
        },
      ],
    },
    {
      id: "physician-groups",
      heading: "Why does athenahealth matter for physician groups running trials?",
      blocks: [
        {
          type: "p",
          text: "A small or medium-sized group on athenaOne may have the patients a study needs but no research informatics team to query the EHR. Then coordinators pre-screen by opening charts one at a time. Bond takes over that reading and hands them a ranked list with reasons attached.",
        },
        {
          type: "ul",
          items: [
            "[Identify](/identify) screens coded data and notes against each inclusion and exclusion criterion, ranks candidates and shows the chart evidence behind each decision.",
            "[Engage](/engage) calls or texts matched patients, asks the pre-screening questions the chart cannot answer and books visits. Patients are told AI is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
          ],
        },
        {
          type: "p",
          text: "The [physician groups](/for/physician-groups) page covers staffing and study selection for groups new to research.",
        },
      ],
    },
    {
      id: "data-and-resources",
      heading: "What data does Bond read, and which FHIR resources carry it?",
      blocks: [
        {
          type: "p",
          text: "As of September 2026, athenahealth's production FHIR server runs FHIR R4 (version 4.0.1) and declares conformance to US Core 3.1.1 and 6.1.0 and to the Bulk Data Access guide, versions 1.0.1 and 2.0.0. Its CapabilityStatement lists 32 resource types. Every resource in the table below supports read, and all but Binary support search. Searches accept an athenaOne practice filter (`ah-practice`), and Patient searches also accept a department filter (`ah-department`).{{cite:athena-fhir-metadata}}",
        },
        {
          type: "table",
          caption: "Data Bond requests from athenaOne",
          columns: ["Data element", "FHIR resource or interface", "Notes"],
          rows: [
            ["Demographics and contact details", "Patient", "Age and sex for criteria; phone and preferred language for outreach."],
            ["Diagnoses", "Condition (problem list and encounter diagnosis profiles)", "Coded diagnoses with dates, used for time windows."],
            ["Medications", "MedicationRequest, Medication", "Current and prior therapies, for washout and prior-treatment criteria."],
            ["Labs and vitals", "Observation (lab, vital sign, BMI and blood pressure profiles)", "Dated values for lab thresholds, BMI and blood pressure criteria."],
            ["Procedures", "Procedure", "Prior procedures named in exclusions."],
            ["Allergies", "AllergyIntolerance", "Allergies that rule out a study drug or its class."],
            ["Results and reports", "DiagnosticReport (lab and note profiles)", "Lab panels and report text the practice receives into athenaOne."],
            ["Clinical notes", "DocumentReference and Binary", "Visit notes and documents the practice exposes. The main source for criteria that live in free text."],
            ["Visits", "Encounter, Appointment", "Recent and upcoming visits, used to time outreach around clinic dates."],
          ],
          note: "Resources and profiles as declared in athenahealth's production CapabilityStatement, retrieved September 2026.{{cite:athena-fhir-metadata}}",
        },
        {
          type: "p",
          text: "Notes carry the criteria that coded fields miss: symptom history, response to a prior therapy, a specialist's finding. DocumentReference searches accept category, type and date filters. The CapabilityStatement also declares a Group-level bulk `$export` operation, an alternative to per-patient searches for loading a whole panel.{{cite:athena-fhir-metadata}}",
        },
      ],
    },
    {
      id: "marketplace",
      heading: "Is Bond on the athenahealth Marketplace?",
      blocks: [
        {
          type: "p",
          text: "No. The Marketplace is athenahealth's catalog of third-party apps. A January 2025 release put it at over 500 solutions across more than 60 medical specialties and capabilities, and recruitment tools are listed there: Trially joined the program that month.{{cite:trially-marketplace}}",
        },
        {
          type: "p",
          text: "Bond connects via athenahealth's standards-based FHIR APIs instead, under each practice's own authorization. As of September 2026, athenahealth's published SMART configuration lists the `client_credentials` grant and `private_key_jwt` client authentication, the combination the SMART Backend Services pattern uses for server-to-server access.{{cite:athena-smart}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "What Bond does and does not claim",
          text: "Bond works alongside athenaOne and connects via its FHIR R4 APIs. Bond holds no athenahealth certification, is not an athenahealth partner and has no Marketplace listing. The only vendor certification Bond holds is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "practice-tasks",
      heading: "What does the practice need to do?",
      blocks: [
        {
          type: "p",
          text: "Most of the work sits with whoever manages athenaOne for the group: an IT lead, a practice administrator or an outside consultant. Bond supplies the list of resources it needs and does the configuration.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Sign the BAA",
              text: "No PHI moves until the business associate agreement is signed.",
            },
            {
              title: "Approve API access",
              text: "Authorize Bond's application for the practice's athenaOne data, following the steps in your athenahealth agreement. Your athenahealth account contact can confirm what applies to your contract.",
            },
            {
              title: "Set the scope",
              text: "Name the practice and the departments to include. athenahealth's Patient search filters by both, so screening can start from only the clinics running the study.{{cite:athena-fhir-metadata}}",
            },
            {
              title: "Run the security review",
              text: "Your reviewer checks the resource list above and Bond's controls. Bond answers the questionnaire and shares its Trust Center.{{cite:bond-site}}",
            },
            {
              title: "Test on real charts",
              text: "Coordinators check a sample of matches against the chart, including which note types come through. The [validation process](/blog/validating-eligibility-logic-before-go-live) describes this step.",
            },
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "How long does the athenahealth connection take?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for a full EHR integration is 4 to 6 weeks, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} In the [implementation plan](/implementation), the security review runs in weeks 1 to 3 and the EHR connection in weeks 2 to 3, while criteria and outreach scripts are configured in parallel.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "What moves the date",
          text: "Approvals set the pace: your security review, the steps to enable API access, and IRB review of outreach scripts where it applies. If API access is the holdup, a pilot without EHR integration can start from an exported patient list after a setup of under 2 weeks.{{cite:bond-site}} The pilot still needs the BAA and security review, because the list is PHI.",
        },
      ],
    },
    {
      id: "security-and-limits",
      heading: "How is PHI protected, and what is not integrated today?",
      blocks: [
        {
          type: "p",
          text: "Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Bond signs a BAA, encrypts data in transit and at rest (AES-256 where applicable), and uses role-based access, SSO support, audit logging and penetration testing, documented in its Trust Center.{{cite:bond-site}} The [security](/security) page shows the full data flow.",
        },
        {
          type: "h3",
          text: "Not integrated today",
        },
        {
          type: "ul",
          items: [
            "**Writing to the chart.** For every resource in the data table, athenahealth's CapabilityStatement lists read and search only, as of September 2026.{{cite:athena-fhir-metadata}} Bond does not file notes, flags or orders in athenaOne.",
            "**Inside athenaOne.** Bond does not run as an embedded app in the athenaOne screen. Coordinators review matches in Bond's dashboard.",
            "**The athenaOne schedule.** Bond books screening visits in the site's calendar, not in athenaOne scheduling.",
            "**Portal messaging.** Bond does not message patients through athenahealth's patient portal. Outreach is by voice and text.",
            "**Research status in the chart.** Study status goes to the CTMS or a Google Sheet, not to athenaOne.",
            "**Proprietary athenaOne APIs.** Bond's standard path is FHIR R4. An HL7 v2 feed or an aggregator is an option where a practice already has one.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and the name of your athenaOne administrator. We will map the scopes, approvals and dates to your calendar.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Bond read free-text notes from athenaOne?",
      a: "Yes, through DocumentReference and Binary, for the note types the practice exposes.{{cite:athena-fhir-metadata}} Each match shows the chart evidence behind each criterion.",
    },
    {
      q: "Can we limit screening to one clinic in our group?",
      a: "Yes. athenahealth's FHIR Patient search accepts practice and department filters, so the patient list can be limited to the departments running the study.{{cite:athena-fhir-metadata}}",
    },
    {
      q: "Can we start before API access is approved?",
      a: "Yes. A pilot without EHR integration can be set up in under 2 weeks from a patient list the practice exports, and EHR screening is added once access is approved.{{cite:bond-site}} The pilot still needs the BAA and security review.",
    },
    {
      q: "How is the connection priced?",
      a: "Bond charges no integration fee. Its volume-based platform fee covers the EHR connection, security review and setup, and a success fee applies per randomized patient. See [pricing](/pricing).{{cite:bond-site}}",
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
      id: "techtarget-athenahealth",
      title: "What is athenahealth Inc.?",
      publisher: "TechTarget",
      url: "https://www.techtarget.com/searchhealthit/definition/athenahealth-Inc",
      year: "2025",
      note: "Published September 8, 2025; accessed September 2026. Quote: \"Athenahealth, Inc. provides cloud-based electronic health record (EHR) systems, revenue cycle management (RCM), patient engagement tools and point-of-care mobile applications. The company primarily serves small to medium-sized physician practices and hospitals\". Also: \"Athenahealth offers an integrated, cloud-based suite known as athenaOne\", listing athenaClinicals (\"An EHR system designed for ambulatory care settings\") and athenaCollector (\"A practice management and RCM solution\").",
    },
    {
      id: "trially-marketplace",
      title: "Trially AI Joins athenahealth's Marketplace Program to Enroll Patients into Clinical Trials with Unprecedented Speed and Precision",
      publisher: "Trially (Business Wire, syndicated by Silicon UK)",
      url: "https://www.silicon.co.uk/press-release/trially-ai-joins-athenahealths-marketplace-program-to-enroll-patients-into-clinical-trials-with-unprecedented-speed-and-precision",
      year: "2025",
      note: "Vendor press release dated January 29, 2025; figures are as stated in the release. Quote: \"more than 160,000 providers on the athenaOne network\" and \"The Marketplace has over 500 solutions across more than 60 medical specialties and capabilities that are integrated with athenaOne\".",
    },
    {
      id: "definitive-ambulatory",
      title: "Top 10 Ambulatory EHR Vendors",
      publisher: "Definitive Healthcare",
      url: "https://www.definitivehc.com/blog/top-ambulatory-ehr-systems",
      year: "2025",
      note: "Measured by number of installations, data accessed October 2025. Table: Epic 16,295 (19.5%), eClinicalWorks 9,966 (11.9%), athenahealth 5,801 (6.9%). Quote: \"Rounding out the top three is athenahealth with nearly 7% market share\".",
    },
    {
      id: "klas-ambulatory-2025",
      title: "How 6 ambulatory EHR providers stack up",
      publisher: "TechTarget (reporting KLAS Research)",
      url: "https://www.techtarget.com/searchhealthit/news/366626047/How-6-ambulatory-EHR-providers-stack-up",
      year: "2025",
      note: "Published June 24, 2025, summarizing KLAS's 2025 ambulatory Complete Look reports (the athenahealth report is dated May 23, 2025), based on 690 provider organizations across six vendors. Quote: \"Athenahealth received a B-minus overall performance score, with 77% of customers either satisfied or highly satisfied.\" Also: \"Vendors in the Complete Looks series averaged a 'C' overall\" and \"Clients consistently praised the user-friendly interfaces and strong interoperability features. However, some customers reported that specialty workflows need improvement\".",
    },
    {
      id: "athena-fhir-metadata",
      title: "athenahealth FHIR R4 CapabilityStatement (production /metadata)",
      publisher: "athenahealth",
      url: "https://api.platform.athenahealth.com/fhir/r4/metadata",
      year: "2026",
      note: "Machine-readable, retrieved September 2026. Declares fhirVersion 4.0.1, US Core 3.1.1 and 6.1.0, Bulk Data 1.0.1 and 2.0.0; lists 32 resource types. Each resource in the data table lists read and search-type (Binary: read only) and no create or update; each searchable one takes ah-practice; ah-department is on Patient (also CarePlan, CareTeam, Goal); DocumentReference (US Core 6.1.0 profile) searches by category, type and date; Group $export. Quote: \"publisher\":\"athenahealth\",\"instantiates\":[\"http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|3.1.1\",\"http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|6.1.0\"",
    },
    {
      id: "athena-smart",
      title: "athenahealth SMART configuration (/.well-known/smart-configuration)",
      publisher: "athenahealth",
      url: "https://api.platform.athenahealth.com/fhir/r4/.well-known/smart-configuration",
      year: "2026",
      note: "Machine-readable, retrieved September 2026. Lists private_key_jwt among token endpoint auth methods. Quote: \"grant_types_supported\":[\"authorization_code\",\"client_credentials\"]",
    },
  ],
  related: [
    { label: "Physician groups", href: "/for/physician-groups", description: "How Bond fits a physician group that runs trials alongside clinical care." },
    { label: "Implementation", href: "/implementation", description: "Where the athenahealth connection sits in the 4 to 6 week plan." },
    { label: "Integrations", href: "/integrations", description: "The EHRs and research systems Bond connects to, and what each needs." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads athenaOne charts against each criterion and explains matches." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "eClinicalWorks integration", href: "/integrations/eclinicalworks", description: "The same FHIR-based path for another large ambulatory EHR." },
  ],
};

export default page;
