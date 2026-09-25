import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/epic",
  category: "integration",
  title: "Epic EHR FHIR integration for clinical trial recruitment",
  description:
    "How Bond connects to Epic over FHIR R4: the data it reads, what your Epic team approves, PHI controls, timelines, and where Epic's own research tools fit.",
  keywords: [
    "Epic EHR clinical trial recruitment",
    "Epic FHIR integration clinical trials",
    "Epic DocumentReference clinical notes",
    "open.epic API Subscription Agreement",
    "Epic MyChart research recruitment",
  ],
  eyebrow: "Integration",
  h1: "Connecting Bond to Epic",
  intro:
    "Bond Health connects to Epic through Epic's standard FHIR R4 APIs, screens charts against a study's criteria and passes ranked candidates to your coordinators.{{cite:bond-site}} Below: the data Bond requests, what your Epic team approves, and what is not integrated today.",
  summary: "The FHIR resources, Epic approvals, timeline and PHI controls for connecting Bond at an Epic site.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "epic-footprint",
      heading: "What is Epic, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "Epic, from Epic Systems Corporation, is the most common EHR in US acute care hospitals, per KLAS's 2026 report on 2025 data, and the largest US ambulatory EHR vendor by installations, per Definitive Healthcare.{{cite:klas-2026-hsc,definitive-ambulatory}} If your site works with a health system on Epic, its Epic team makes the approvals below.",
        },
        {
          type: "stats",
          items: [
            { value: "43.7%", label: "US acute care hospitals on Epic, KLAS 2026", cite: "klas-2026-hsc" },
            { value: "56.9%", label: "US acute care beds on Epic, KLAS 2026", cite: "klas-2026-hsc" },
            { value: "19.5%", label: "US ambulatory EHR installs, Definitive 2025", cite: "definitive-ambulatory" },
            { value: "325M+", label: "Patients with a current Epic record, per Epic", cite: "epic-about" },
          ],
        },
      ],
    },
    {
      id: "data-and-resources",
      heading: "What data does Bond read, and which FHIR resources carry it?",
      blocks: [
        {
          type: "p",
          text: "Bond requests Epic data through standard FHIR APIs. The federal certification criterion for such APIs, (g)(10), is built on HL7 FHIR Release 4.0.1, US Core, SMART App Launch and Bulk Data Access, with USCDI v3 as its base data set.{{cite:onc-g10}}",
        },
        {
          type: "p",
          text: "Coded fields settle some criteria. Others, such as symptom history or response to a prior therapy, sit in notes, which Epic exposes through DocumentReference (Clinical Notes) with the text in Binary.{{cite:epic-fhir}} [Identify](/identify) reads both and links each criterion to its supporting passage.",
        },
        {
          type: "table",
          caption: "Data Bond requests from Epic",
          columns: ["Data element", "FHIR R4 resource or interface (Epic label)", "Notes"],
          rows: [
            ["Demographics and contact details", "Patient (Demographics)", "Age and sex for criteria; phone and language for outreach."],
            ["Diagnoses", "Condition (Problems), Condition (Encounter Diagnosis)", "Coded diagnoses with onset and resolution dates."],
            ["Medications", "MedicationRequest", "Current and prior therapies, washout windows."],
            ["Labs and vitals", "Observation (Labs), Observation (Vital Signs)", "Dated values for lab and vitals thresholds."],
            ["Procedures", "Procedure (Orders), Procedure (Surgeries)", "Procedures and surgical history named in exclusions."],
            ["Allergies", "AllergyIntolerance (Patient Chart)", "Allergies that rule out a study drug."],
            ["Results and reports", "DiagnosticReport (Results)", "Pathology and imaging reports, where exposed."],
            ["Clinical notes", "DocumentReference (Clinical Notes) and Binary (Clinical Notes)", "Progress notes, consults, discharge summaries: the main source for unstructured criteria."],
            ["Visits", "Encounter (Patient Chart), Appointment (Appointments)", "Recent and upcoming visits, to time outreach."],
            ["Study population (optional)", "Bulk FHIR Group export from a site-built registry", "Epic supports only Group export; see the registry step below.{{cite:epic-bulk}}"],
            ["Alternative feed", "HL7 v2 interface or an integration aggregator", "Used where a site prefers it to direct FHIR access.{{cite:bond-site}}"],
          ],
          note: "Labels from Epic's R4 API catalog.{{cite:epic-fhir}} Which note and report types come through depends on the site's build and is checked in test.",
        },
      ],
    },
    {
      id: "epic-programs",
      heading: "Which Epic developer programs are involved?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Epic on FHIR** (fhir.epic.com): free developer documentation and the API catalog. A registered app has a client ID that the health system downloads into its Epic environment.{{cite:epic-fhir,epic-implementing}}",
            "**open.epic**: Epic's interoperability program, whose API Subscription Agreement the health system signs. Per its website, as of September 2026, it offers USCDI v3 support and over 750 no-cost APIs and interfaces.{{cite:open-epic}}",
            "**Showroom and Connection Hub**: Epic's directory of third-party products. As of September 2026, a Connection Hub listing costs $500 per product per year and requires production use with at least one Epic customer.{{cite:epic-ch-listing}}",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "What Bond does and does not claim",
          text: "Bond connects via Epic's standard FHIR APIs under each site's own agreement with Epic. It holds no Epic certification or partner status and claims no Showroom listing; its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}} See [integrations](/integrations) for other systems Bond works alongside.",
        },
      ],
    },
    {
      id: "site-approvals",
      heading: "What does the site's Epic team need to approve?",
      blocks: [
        {
          type: "p",
          text: "Epic's guidance for third-party apps puts most decisions with the health system.{{cite:epic-implementing}} Expect these steps from your Epic analysts, security team and research IT.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Hold a kickoff call",
              text: "Epic suggests one to align stakeholders on goals, scope, milestones and timeline.{{cite:epic-implementing}}",
            },
            {
              title: "Sign the open.epic API Subscription Agreement",
              text: "Signed once per organization, not per app, so it may already be in place.{{cite:epic-implementing}}",
            },
            {
              title: "Scope licensing and security",
              text: "Epic recommends a licensing estimate and a security review scoped to the app's client ID.{{cite:epic-implementing}} The table above is the starting list for that review.",
            },
            {
              title: "Download the client ID and test",
              text: "The Epic team downloads the app with a non-production client ID for testing, then a production one.{{cite:epic-implementing}}",
            },
            {
              title: "Check the Epic version",
              text: "Customers often upgrade 3 to 12 months after an Epic release, so a catalog API may not be live at your site yet.{{cite:epic-implementing}}",
            },
            {
              title: "Build a registry, if bulk export is used",
              text: "Epic's Bulk FHIR supports only Group export, so the health system first builds a registry around the inclusion criteria.{{cite:epic-bulk,epic-implementing}}",
            },
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "How long does the Epic connection take?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for a full EHR integration is 48 hours, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} In the typical [implementation plan](/implementation), the security review and the EHR connection come first, while criteria and outreach scripts are set up in parallel.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "Building a new Epic integration takes longer. In September 2026, Topflight Apps, an integration consultancy, gave a planning range of 6 to 12 months to a new app's first go-live, then roughly 2 to 4 weeks per additional site once it has approved and configured the app.{{cite:topflight-epic}}",
        },
        {
          type: "callout",
          tone: "warning",
          title: "What moves the date",
          text: "Your queues set the pace: security review, the Epic team's build calendar, and any Epic upgrade an API needs. If they run long, a pilot without EHR integration can start first (see the FAQ below).",
        },
      ],
    },
    {
      id: "phi-and-results",
      heading: "How is PHI protected, and where do results go?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Agreements first.** Bond signs a business associate agreement with the site before any PHI is shared.{{cite:bond-site}}",
            "**Controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its controls include encryption in transit and at rest (AES-256 where applicable), role-based access, SSO, audit logging, penetration testing and staff security training.{{cite:bond-site}}",
            "**People decide.** Bond ranks candidates and shows the evidence for each criterion; coordinators review them, and the site's screening visit confirms eligibility.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "Results go to Bond's dashboard, the CTMS or a Google Sheet, and the site calendar for booked visits.{{cite:bond-site}} See [security](/security) for the data flow.",
        },
      ],
    },
    {
      id: "epic-research-tools",
      heading: "How does Bond compare with Epic's own research tools?",
      blocks: [
        {
          type: "table",
          caption: "Epic research tools and where Bond fits",
          columns: ["Epic tool", "What it does", "How Bond relates"],
          rows: [
            [
              "Clarity queries and Reporting Workbench",
              "At Emory's Georgia CTSA, Clarity queries find patients who meet most of a study's inclusion criteria. Per Washington University, Reporting Workbench tracks study patients and sends MyChart recruitment requests.{{cite:georgia-ctsa,wustl-epic-tools}}",
              "Bond checks each criterion across coded fields and notes, with evidence. A query or registry can set who Bond screens.",
            ],
            [
              "MyChart research recruitment",
              "Portal messages to identified patients. At University of Utah Health, the IRB must approve MyChart as a recruitment mechanism.{{cite:utah-mychart}}",
              "Bond uses voice and text outreach, pre-screens and books visits. Sites can run both.",
            ],
            [
              "Cosmos",
              "Per Epic, records for 310 million patients as of September 2026, available as a limited data set or de-identified to approved users at participating organizations.{{cite:cosmos-about,jscdm-cosmos}}",
              "Bond works on your own identified charts under your BAA.",
            ],
            [
              "Discovery",
              "Epic's life sciences platform, built on its research toolset.{{cite:epic-life-sciences}}",
              "Bond does not connect to it.",
            ],
          ],
        },
        {
          type: "p",
          text: "Epic's summary of a Cleveland Clinic BioRepository case reports a 7.8% response rate to MyChart recruitment messages.{{cite:epic-life-sciences}} In an investigator survey at NYU Langone, published in 2022, most studies that used MyChart sent a message only once, and recruitment costs averaged $431 per study.{{cite:nyu-mychart}}",
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with Epic today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Writing to the chart.** Epic's catalog lists DocumentReference (Clinical Notes) Create, but Bond does not file notes or results in Epic today.{{cite:epic-fhir}}",
            "**MyChart messaging.** Bond's outreach is voice and text, not MyChart messages.",
            "**Research status in Epic.** Bond does not update study status in Epic; status goes to the CTMS or a sheet.",
            "**Cosmos and Discovery.** Bond does not use Cosmos data or connect to Discovery.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your Epic contact. We will map scopes, approvals and dates to your calendar.",
          secondaryLabel: "Read about security",
          secondaryHref: "/security",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Epic charge the health system for the connection?",
      a: "It can, depending on your Epic contract. Epic recommends that health systems request a licensing estimate before enabling a third-party app, so they see the cost implications of the data it requests.{{cite:epic-implementing}} Bond charges no integration fee; its own integration work is covered by its volume-based platform fee. See [pricing](/pricing).{{cite:bond-site}}",
    },
    {
      q: "Can we start before the Epic connection is approved?",
      a: "Yes. A pilot without EHR integration can start from a patient list the site exports, and EHR screening is added once IT approves the connection.{{cite:bond-site}}",
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
      id: "klas-2026-hsc",
      title: "Acute Care EHR Market Share 2026: Epic Up, Oracle Down",
      publisher: "healthsystemCIO.com (reporting KLAS Research)",
      url: "https://healthsystemcio.com/2026/05/14/acute-care-ehr-market-share-2026/",
      year: "2026",
      note: "Reports KLAS's US Hospital EMR Market Share 2026 report, covering 2025. Quote: \"Epic now holds 43.7% of acute care hospital market share and 56.9% of beds.\"",
    },
    {
      id: "definitive-ambulatory",
      title: "Top 10 Ambulatory EHR Vendors",
      publisher: "Definitive Healthcare",
      url: "https://www.definitivehc.com/blog/top-ambulatory-ehr-systems",
      year: "2025",
      note: "Measured by number of ambulatory EHR installations; figure credited \"Accessed October 2025\". Epic ranked first: 16,295 installations (19.5%). Quote: \"The top three ambulatory EHR vendors hold about 40% of the ambulatory EHR market.\"",
    },
    {
      id: "epic-about",
      title: "About Epic",
      publisher: "Epic Systems Corporation",
      url: "https://www.epic.com/about/",
      year: "2026",
      note: "Vendor figure, accessed September 2026. Quote: \"More than 325 million patients have a current electronic record in Epic.\"",
    },
    {
      id: "onc-g10",
      title: "Certification Companion Guide: Standardized API for patient and population services",
      publisher: "HealthIT.gov (ASTP/ONC)",
      url: "https://www.healthit.gov/test-method/standardized-api-patient-and-population-services",
      year: "2026",
      note: "Accessed September 2026. Lists the criterion's standards: \"HL7® Fast Healthcare Interoperability Resources (FHIR®) Release 4.0.1\", \"HL7® FHIR® US Core Implementation Guide STU 6.1.0\", \"HL7® SMART App Launch Implementation Guide Release 2.0.0\", \"FHIR® Bulk Data Access (Flat FHIR®) (v1.0.0: STU 1)\" and \"United States Core Data for Interoperability Version 3 (USCDI v3)\". Newer USCDI versions are approved under SVAP.",
    },
    {
      id: "epic-fhir",
      title: "Epic on FHIR: API catalog",
      publisher: "Epic Systems Corporation",
      url: "https://fhir.epic.com/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Epic on FHIR is a free resource for developers who create apps for use by patients and healthcare organizations.\" Catalog lists DocumentReference (Clinical Notes) Read, Search, Create and Binary (Clinical Notes) Read, Search for R4.",
    },
    {
      id: "epic-implementing",
      title: "Implementing Apps at Epic Customers",
      publisher: "Epic Systems Corporation (Epic on FHIR)",
      url: "https://fhir.epic.com/Documentation?docId=implementing",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Epic recommends that healthcare organizations proactively request a licensing estimate and complete a security review based on your client ID's scope. This ensures they consider both privacy and cost implications of the data your app could request.\" Also: \"In practice, customers set their own production upgrade timelines, often 3 to 12 months (sometimes more) after Epic's release date.\" Also: \"To allow an Epic community member to download an app, simply provide them with the Production or Non-Production Client ID from the app's detail page.\" And: \"they or the developer should organize a kickoff call to align key stakeholders on the goals, scope, processes, milestones, and timeline of the project.\"",
    },
    {
      id: "epic-bulk",
      title: "FHIR Bulk Data Access Tutorial",
      publisher: "Epic Systems Corporation (Epic on FHIR)",
      url: "https://fhir.epic.com/Documentation?docId=fhir_bulk_data",
      year: "2026",
      note: "Quote: \"Epic supports only the Group Export operation.\"",
    },
    {
      id: "open-epic",
      title: "open.epic",
      publisher: "Epic Systems Corporation",
      url: "https://open.epic.com/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"USCDI v3 support is available to app developers for free on open.epic alongside over 750 no-cost APIs and interfaces.\"",
    },
    {
      id: "epic-ch-listing",
      title: "Requesting a Listing on Showroom",
      publisher: "Epic Systems Corporation (Epic on FHIR)",
      url: "https://fhir.epic.com/Documentation?docId=chlistingrequest",
      year: "2026",
      note: "Quote: \"You also agree to pay the annual, non-refundable Connection Hub listing fee of $500 per product per year.\" Listings require production use with at least one Epic customer.",
    },
    {
      id: "topflight-epic",
      title: "Epic EHR Integration for Health Apps: Process, Cost & Challenges",
      publisher: "Topflight Apps",
      url: "https://topflightapps.com/ideas/how-integrate-health-app-with-epic-ehr-emr/",
      year: "2026",
      note: "Integration consultancy blog by Joe Tuan, dated September 11, 2026; accessed September 2026. Quote: \"Our planning range for a production Epic EHR integration is 6 to 12 months, most of it sandbox development and validation. Each additional site then adds its own go-live, roughly 2 to 4 weeks once that customer has approved and configured your app.\"",
    },
    {
      id: "georgia-ctsa",
      title: "Recruitment Center",
      publisher: "Georgia Clinical and Translational Science Alliance (Emory University)",
      url: "https://georgiactsa.org/research/recruitment-center.html",
      year: "2026",
      note: "Quote: \"The Recruitment Center works with study teams to create queries against Epic's Clarity Database which are used to find patients who meet most of a study's inclusion criteria\"",
    },
    {
      id: "wustl-epic-tools",
      title: "Research Recruitment and Reporting Tools in Epic",
      publisher: "Washington University in St. Louis",
      url: "https://bpb-us-e2.wpmucdn.com/sites.wustl.edu/dist/1/4020/files/2025/11/Research-Recruitment-and-Reporting-Tools-in-Epic-1-1.pdf",
      year: "2025",
      note: "Quote: \"Reporting Workbench (RWB): Epic's self-service reporting tool to help study teams track their study patients in Epic and/or send recruitment requests to patients in MyChart.\"",
    },
    {
      id: "utah-mychart",
      title: "Epic MyChart Recruitment",
      publisher: "University of Utah Health CTSI",
      url: "https://ctsi.utah.edu/crso/mychart-recruitment",
      year: "2026",
      note: "Institutional policy; other sites differ. Quote: \"Epic MyChart is an approved recruitment mechanism for the study as outlined in the study IRB.\"",
    },
    {
      id: "cosmos-about",
      title: "About Epic Cosmos",
      publisher: "Epic Systems Corporation",
      url: "https://cosmos.epic.com/about/",
      year: "2026",
      note: "Counter accessed September 2026: \"310 Million Patients\". Also: \"direct access to Cosmos is available for those affiliated with and approved by a Cosmos participating organization\"",
    },
    {
      id: "jscdm-cosmos",
      title: "Cosmos: Real-World Data Powered by the Healthcare Community",
      publisher: "Journal of the Society for Clinical Data Management",
      url: "https://www.jscdm.org/article/id/246/",
      year: "2023",
      note: "Written by Epic staff (Noel A, Bartelt K). Describes access as a HIPAA limited data set or data de-identified under the Expert Determination method.",
    },
    {
      id: "epic-life-sciences",
      title: "Life Sciences",
      publisher: "Epic Systems Corporation",
      url: "https://www.epic.com/software/life-sciences/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Discovery, Epic's life sciences platform, builds on the research toolset.\" Vendor-published case summary, in the Cleveland Clinic block that begins \"Cleveland Clinic accelerated recruitment for the Cleveland Clinic BioRepository\": \"The response rate to MyChart recruitment messages was 7.8%, and respondents were more diverse compared to traditional outreach methods\"",
    },
    {
      id: "nyu-mychart",
      title: "Use of patient portals to support recruitment into clinical trials and health research studies: results from studies using MyChart at one academic institution",
      publisher: "JAMIA Open (Sherman SE et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/36325306/",
      year: "2022",
      note: "Investigator survey at NYU Langone. Quote: \"Recruitment costs were modest, averaging $431/study.\"",
    },
  ],
  related: [
    { label: "Implementation", href: "/implementation", description: "Where the Epic connection sits in the 48-hour plan." },
    { label: "Integrations", href: "/integrations", description: "Every EHR and research system Bond connects to, and what each needs." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads Epic charts against each criterion and explains matches." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "Oracle Health (Cerner) integration", href: "/integrations/oracle-cerner", description: "The same FHIR-based path for Oracle Health sites." },
  ],
};

export default page;
