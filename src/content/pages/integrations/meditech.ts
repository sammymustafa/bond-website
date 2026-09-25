import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/meditech",
  category: "integration",
  title: "MEDITECH Expanse FHIR integration for trial recruitment",
  description:
    "How Bond connects to MEDITECH Expanse over FHIR R4 and HL7 v2: the data it reads, what hospital IT approves, clinical notes and the 4 to 6 week timeline.",
  keywords: [
    "MEDITECH Expanse clinical trial recruitment",
    "MEDITECH FHIR integration",
    "MEDITECH Greenfield API",
    "community hospital clinical trial recruitment",
    "MEDITECH HL7 interface",
  ],
  eyebrow: "Integration",
  h1: "Connecting Bond to MEDITECH Expanse",
  intro:
    "MEDITECH Expanse is MEDITECH's go-forward EHR platform, and MEDITECH lists community and critical access hospitals first among the customers it serves.{{cite:klas-2025-blog,meditech-about}} Bond Health connects to Expanse via FHIR R4 or an HL7 v2 feed that the hospital approves, screens coded data and clinical notes against a study's criteria, and hands ranked candidates to coordinators. This page covers the data, the approvals, the timeline and what is not integrated today.",
  summary: "The FHIR and HL7 paths, IT approvals, timeline and limits for connecting Bond at a MEDITECH hospital.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "who-uses-meditech",
      heading: "What is MEDITECH Expanse, and who uses it?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "14.7%", label: "US acute care hospitals on MEDITECH, 2025 (KLAS)", cite: "klas-2026-hsc" },
            { value: "12.5%", label: "US acute care beds on MEDITECH, 2025 (KLAS)", cite: "klas-2026-hsc" },
            { value: "84%", label: "Legacy MEDITECH customers making a go-forward decision in 2025 who chose Expanse (KLAS)", cite: "klas-2026-hsc" },
            { value: "2,000+", label: "Organizations in 28 countries and territories, per MEDITECH (September 2026)", cite: "meditech-about" },
          ],
        },
        {
          type: "p",
          text: "MEDITECH, founded in 1969 and based in Canton, Massachusetts, describes Expanse as a cloud-native EHR for health systems of all sizes.{{cite:meditech-about}} KLAS's 2026 market share report, which covers contracts signed in 2025, ranks MEDITECH third among US acute care EHR vendors, behind Epic at 43.7% and Oracle Health at 21.9% of hospitals.{{cite:klas-2026-hsc}} Large systems use it too: HCA Healthcare had 72 hospitals across the US and UK on Expanse as of August 2026.{{cite:meditech-hca}}",
        },
        {
          type: "p",
          text: "MEDITECH offers patient registries and a Business and Clinical Analytics platform, and Expanse Genomics can build research cohorts by genetic marker.{{cite:meditech-pop-health,meditech-genomics}} As of September 2026, MEDITECH's pages describe these as cohort tools, not criterion-by-criterion review of a patient's notes, which is what Bond's [Identify](/identify) stage does.",
        },
      ],
    },
    {
      id: "expanse-apis",
      heading: "What does MEDITECH Expanse expose to outside developers?",
      blocks: [
        {
          type: "p",
          text: "MEDITECH's developer program is called Greenfield. Its Greenfield Workspace is a sandbox where developers run APIs and test applications against a real MEDITECH EHR.{{cite:meditech-greenfield}} To join, a developer submits a registration request and MEDITECH issues an OAuth2 client ID and secret for testing.{{cite:meditech-greenfield-howto}}",
        },
        {
          type: "table",
          caption: "MEDITECH interfaces and how Bond uses them",
          columns: ["Interface", "What it provides", "Role for Bond"],
          rows: [
            [
              "US Core FHIR R4 APIs",
              "View-only patient data, after the patient authorizes an app.{{cite:meditech-greenfield}}",
              "Patient-facing only. Not enough to screen a population.",
            ],
            [
              "Population-level FHIR (Bulk Data)",
              "ONC's (g)(10) criterion requires certified EHRs to support FHIR Bulk Data for groups of patients, on US Core 6.1.0 from December 31, 2025.{{cite:onc-g10}}",
              "Suits population screening, where the hospital enables it for Bond.",
            ],
            [
              "FHIR Scheduling APIs",
              "Scheduling workflows, Expanse customers only.{{cite:meditech-greenfield}}",
              "Not used today.",
            ],
            [
              "Outbound HL7 v2 interfaces",
              "Feeds for admissions, lab results, orders, pathology reports, home medications and more.{{cite:meditech-hl7}}",
              "Used where FHIR population access is not available, sent through the hospital's interface engine.",
            ],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Patient access is not population access",
          text: "As of September 2026, MEDITECH's public FHIR pages describe apps a patient authorizes. Screening a population needs system-level access that the hospital grants to Bond under a business associate agreement. The path, FHIR or an HL7 v2 feed, is settled at scoping with IT and, where needed, MEDITECH.",
        },
      ],
    },
    {
      id: "data-and-resources",
      heading: "What data does Bond read, and which resources carry it?",
      blocks: [
        {
          type: "p",
          text: "Each element Bond reads maps to a US Core FHIR resource and, for most, to one of the HL7 v2 feeds MEDITECH documents for outside vendors.{{cite:meditech-hl7}}",
        },
        {
          type: "table",
          caption: "Data Bond requests from MEDITECH Expanse",
          columns: ["Data element", "FHIR resource or interface", "Notes"],
          rows: [
            ["Demographics and contact details", "Patient; Admissions outbound HL7", "Age and sex for criteria; phone for outreach."],
            ["Diagnoses and problems", "Condition", "Onset and resolution dates set time windows."],
            ["Medications", "MedicationRequest; home medications outbound HL7", "Washout and prohibited-drug criteria."],
            ["Lab results", "Observation; laboratory results outbound HL7", "Dated values for threshold criteria."],
            ["Allergies", "AllergyIntolerance; Admissions outbound HL7", "Carried in the Admissions feed.{{cite:meditech-hl7}}"],
            ["Procedures", "Procedure", "Prior procedures named in exclusions."],
            ["Visits", "Encounter; Appointment; community-wide scheduling outbound HL7", "Upcoming visits help time outreach."],
            ["Clinical notes and reports", "DocumentReference; pathology reports outbound HL7", "The main source for unstructured criteria."],
          ],
          note: "What comes through depends on the hospital's Expanse release and configuration, and is checked in test.",
        },
      ],
    },
    {
      id: "clinical-notes",
      heading: "How does Bond handle MEDITECH clinical notes?",
      blocks: [
        {
          type: "p",
          text: "Many criteria are settled only in notes: a pathology finding, an ejection fraction, a prior line of therapy. USCDI's Clinical Notes data class covers note types including consultation notes, discharge summaries, history and physicals, procedure notes and progress notes.{{cite:onc-uscdi}} The US Core DocumentReference profile sets minimum expectations for how servers search for and return those notes, with the content inline or at a URL.{{cite:us-core-docref}} ONC's (g)(10) criterion also requires certified APIs to return note text as plain text.{{cite:onc-g10}}",
        },
        {
          type: "p",
          text: "Bond's [Identify](/identify) stage reads notes alongside the coded record. It maps phrases to clinical concepts through a terminology graph built from 18 biomedical terminology sources, so \"HFrEF\" in a cardiology note and a coded diagnosis of heart failure with reduced ejection fraction can map to the same concept.{{cite:bond-whitepaper}} Each match shows the evidence behind each criterion, so a coordinator can check it in Expanse.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "**Note types.** A note type the hospital does not send cannot be read.",
            "**Text or image.** Scanned documents may arrive as images, not text; testing shows which do.",
          ],
        },
      ],
    },
    {
      id: "site-it-tasks",
      heading: "What does the hospital's IT team need to do?",
      blocks: [
        {
          type: "p",
          text: "The hospital's IT or interface team owns these steps.",
        },
        {
          type: "checklist",
          items: [
            "Confirm the Expanse release and its USCDI version. Certified health IT had to support USCDI v3 by the end of 2025; MEDITECH's public Greenfield page still listed USCDI v1 as of September 2026.{{cite:onc-hti1,meditech-greenfield}}",
            "Choose the access path: population-level FHIR, an HL7 v2 feed from the interface engine, or an integration partner.",
            "Register Bond's client, issue credentials and approve scopes limited to the table above.",
            "Run the vendor security review and sign the business associate agreement.",
            "Name an IT contact and a research contact for testing.",
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "Where does MEDITECH fit in the 4 to 6 week implementation?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for a full EHR integration is 4 to 6 weeks, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} In the [implementation plan](/implementation), criteria and scripts are configured in parallel with these steps.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Week 1: kickoff and BAA",
              text: "Bond signs the BAA and lists the data it requests.",
            },
            {
              title: "Weeks 1 to 3: security review and access path",
              text: "IT reviews Bond and picks FHIR, HL7 v2 or an integration partner.",
            },
            {
              title: "Weeks 2 to 3: connection",
              text: "IT registers Bond or turns on the feed. Bond checks which data and note types arrive.",
            },
            {
              title: "Weeks 2 to 4: criteria and validation",
              text: "Bond turns each criterion into checks. The PI or coordinator adjudicates matches on a sample of Expanse records.",
            },
            {
              title: "Weeks 5 to 6: go-live",
              text: "Ranked matches appear in the dashboard.{{cite:bond-site}}",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "If IT approval runs long",
          text: "A pilot without EHR integration can start from an exported patient list after a setup of under 2 weeks. EHR screening is added once the MEDITECH connection is approved.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "security",
      heading: "How is MEDITECH data protected?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Agreements first.** Bond signs a business associate agreement before the hospital shares any PHI.{{cite:bond-site}}",
            "**Controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its controls include encryption in transit and at rest (AES-256 where applicable), role-based access, SSO, audit logging, penetration testing and employee security training.{{cite:bond-site}}",
            "**People decide.** Coordinators review each ranked match against its evidence, and the site confirms eligibility at screening.",
          ],
        },
        {
          type: "p",
          text: "Matches go to Bond's dashboard, then to the CTMS, a Google Sheet or the site calendar.{{cite:bond-site}} The [security](/security) page shows the full data flow.",
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with MEDITECH today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**No MEDITECH certification.** Bond is not in the MEDITECH Alliance, MEDITECH's program for vetted third-party solutions.{{cite:meditech-alliance}}",
            "**No write-back.** Bond does not file notes, flags or research status in Expanse.",
            "**No Expanse scheduling.** Bond books visits in the site calendar.",
            "**No app inside the chart.** Coordinators work in Bond's dashboard, not in a SMART app launched from Expanse.",
            "**No Traverse Exchange.** Bond does not use MEDITECH's network for sharing records with other providers.{{cite:meditech-traverse}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your Expanse release. We will map the access path, approvals and dates with your IT contact.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond certified by MEDITECH?",
      a: "No. Bond connects via FHIR R4 or an HL7 v2 feed that each hospital approves, under that hospital's own agreements. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.",
    },
    {
      q: "Does Bond work with hospitals still on older MEDITECH platforms?",
      a: "It depends on what the hospital's platform can send. In October 2021, MEDITECH said it planned to certify all its platforms to the 2015 Edition Cures Update, which adds FHIR Bulk Data, in the first half of 2022, and that each hospital would need an update to receive it.{{cite:meditech-cures}} FHIR Scheduling is Expanse only.{{cite:meditech-greenfield}} Where FHIR population access is not available, Bond scopes an HL7 v2 feed or an integration partner.",
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
      id: "klas-2026-hsc",
      title: "Acute Care EHR Market Share 2026: Epic Up, Oracle Down",
      publisher: "healthsystemCIO.com (reporting KLAS Research)",
      url: "https://healthsystemcio.com/2026/05/14/acute-care-ehr-market-share-2026/",
      year: "2026",
      note: "Reports KLAS's US Acute Care EHR Market Share 2026 report, covering EHR contracts executed January through December 2025. Accessed September 2026. Quote: \"Epic now holds 43.7% of acute care hospital market share and 56.9% of beds. Oracle Health, meanwhile, sits second at 21.9% of hospitals and 20.4% of beds, followed by Meditech at 14.7% and 12.5%.\" Also: \"84% of legacy Meditech customers making a go-forward decision chose to migrate to Expanse.\"",
    },
    {
      id: "klas-2025-blog",
      title: "Partnership Vital in EHR Decisions: Insights from the Acute Care EHR Market Share 2025 Report",
      publisher: "KLAS Research",
      url: "https://engage.klasresearch.com/blog/partnership-vital-in-ehr-decisions-insights-from-the-acute-care-ehr-market-share-2025-report/7282/",
      year: "2025",
      note: "Blog post, May 22, 2025. Quote: \"MEDITECH has retained a high percentage of legacy customers who have migrated to their go-forward Expanse platform, doubling their retention rate of those making go-forward decisions in 2024 versus 2023.\"",
    },
    {
      id: "meditech-cures",
      title: "21st Century Cures Act: Timelines, Regulatory Dates In The Upcoming Years",
      publisher: "MEDITECH",
      url: "https://home.meditech.com/en/d/customerservicearticles/otherfiles/curesacttimelines.pdf",
      year: "2021",
      note: "Customer communication, last updated October 2021. Quote: \"MEDITECH will certify our 2015 Edition Cures Update for all platforms and care settings throughout Q1/Q2 2022.\" Also: \"All organizations will need a priority pack topoff to receive the certified 2015 Edition Cures Update.\" On (g)(10): \"Also known as FHIR Bulk Data Access (Flat FHIR), this criteria requires that EHRs support the ability for a client to retrieve large volumes of data for a group of patients via FHIR API.\"",
    },
    {
      id: "meditech-about",
      title: "About MEDITECH",
      publisher: "MEDITECH",
      url: "https://ehr.meditech.com/about/meditech",
      year: "2026",
      note: "Vendor figures, accessed September 2026. Quote: \"Over 2,000 healthcare organizations across 28 countries and territories have chosen MEDITECH to meet the challenges of a new era in healthcare.\" Customer types listed first: \"Community and critical access hospitals\". Also: \"MEDITECH was founded in 1969\", headquartered \"in Canton, Massachusetts\", and \"MEDITECH Expanse is cloud-native and highly scalable, making it the ideal EHR platform for health systems of all sizes.\"",
    },
    {
      id: "meditech-hca",
      title: "MEDITECH Expanse EHR live across first full U.S. divisions of HCA Healthcare",
      publisher: "MEDITECH",
      url: "https://ehr.meditech.com/news/meditech-expanse-ehr-live-across-first-full-us-divisions-of-hca-healthcare",
      year: "2026",
      note: "Press release, September 14, 2026. Quote: \"As of the latest implementation group in August 2026, HCA Healthcare has 72 hospitals across its network in the U.S. and U.K. running on the MEDITECH Expanse platform.\"",
    },
    {
      id: "meditech-pop-health",
      title: "MEDITECH Population Health",
      publisher: "MEDITECH",
      url: "https://ehr.meditech.com/ehr-solutions/meditech-population-health",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Actionable patient registries enable practices to take advantage of upcoming appointments to address gaps in care.\"",
    },
    {
      id: "meditech-genomics",
      title: "Expanse Genomics: How we're extending our industry-leading solution",
      publisher: "MEDITECH",
      url: "https://blog.meditech.com/expanse-genomics-how-we-are-extending-our-industry-leading-solution",
      year: "2023",
      note: "Quote: \"In addition, building out actionable cohorts of patients for research or trials can now be directed based on the specific genetic markers, often key when working with new drugs.\"",
    },
    {
      id: "meditech-greenfield",
      title: "Greenfield Workspace",
      publisher: "MEDITECH",
      url: "https://ehr.meditech.com/ehr-solutions/greenfield-workspace",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Developers can execute APIs and test their applications against a real MEDITECH EHR.\" Also: \"US Core FHIR R4 APIs: Provides view-only access to patient-facing data after patients give the requesting app authorization to access their data. USCDI V1 and DSTU2/R4 compatible.\" On FHIR Scheduling: \"User and patient workflows are supported for Expanse customers only.\"",
    },
    {
      id: "meditech-greenfield-howto",
      title: "How to work in the Greenfield Workspace",
      publisher: "MEDITECH",
      url: "https://ehr.meditech.com/ehr-solutions/how-to-work-in-the-greenfield-workspace",
      year: "2026",
      note: "Quote: \"Provide the MEDITECH Greenfield support team with a redirect/callback URI to generate an OAuth client ID and secret.\"",
    },
    {
      id: "meditech-hl7",
      title: "HL7 Outbound List for Greenfield",
      publisher: "MEDITECH",
      url: "https://ehr.meditech.com/meditech-greenfield/hl7-outbound-list-for-greenfield",
      year: "2026",
      note: "Lists outbound interfaces including admissions, laboratory results, order management, community-wide scheduling, pathology reports, home medications and charges. Quote: \"The Admissions Outbound interface updates vendors with patient registration, demographic, and allergy information.\"",
    },
    {
      id: "onc-g10",
      title: "§ 170.315(g)(10) Standardized API for patient and population services",
      publisher: "HealthIT.gov (ASTP/ONC)",
      url: "https://www.healthit.gov/test-method/standardized-api-patient-and-population-services",
      year: "2025",
      note: "Test method for the certification criterion. Requires FHIR R4 with US Core 6.1.0, SMART App Launch 2.0.0 and FHIR Bulk Data Access for multiple patients as of December 31, 2025, and plain-text representation of clinical note text.",
    },
    {
      id: "onc-uscdi",
      title: "United States Core Data for Interoperability (USCDI)",
      publisher: "HealthIT.gov (ASTP/ONC)",
      url: "https://isp.healthit.gov/united-states-core-data-interoperability-uscdi",
      year: "2026",
      note: "Accessed September 2026. Clinical Notes data class: \"Narrative patient data relevant to the context identified by note types.\" Note types vary by version; Consultation Note, Discharge Summary Note, History & Physical, Procedure Note and Progress Note appear in both USCDI v1 and v5.",
    },
    {
      id: "us-core-docref",
      title: "US Core DocumentReference Profile (US Core STU 6.1)",
      publisher: "HL7 International",
      url: "https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-documentreference.html",
      year: "2023",
      note: "Quote: \"To promote interoperability and adoption through common implementation, this profile sets minimum expectations for searching and fetching patient documents including Clinical Notes using the DocumentReference resource.\"",
    },
    {
      id: "onc-hti1",
      title: "HTI-1 Final Rule Overview and Key Dates Fact Sheet",
      publisher: "HealthIT.gov (ASTP/ONC)",
      url: "https://healthit.gov/wp-content/uploads/2025/03/Overview-and-Key-Dates-2024_508.pdf",
      year: "2025",
      note: "Quote: \"ONC has updated the USCDI standard in § 170.213 by adding USCDI Version 3 (v3) and establishing a January 1, 2026, expiration date for USCDI v1 (July 2020 Errata) for purposes of the Certification Program.\"",
    },
    {
      id: "meditech-traverse",
      title: "MEDITECH introduces Traverse Exchange interoperability network for U.S. Market",
      publisher: "MEDITECH",
      url: "https://ehr.meditech.com/news/meditech-introduces-traverse-exchange-interoperability-network-for-us-market",
      year: "2024",
      note: "Press release, August 8, 2024. Quote: \"In addition to connecting to a private MEDITECH network, Traverse Exchange enables customers to connect to other networks, public health agencies, and various data-sharing networks, such as Commonwell, Carequality, and QHINs under TEFCA\"",
    },
    {
      id: "meditech-alliance",
      title: "MEDITECH Alliance program triples in size fueling innovation",
      publisher: "MEDITECH",
      url: "https://ehr.meditech.com/news/meditech-alliance-program-triples-in-size-fueling-innovation",
      year: "2024",
      note: "Press release, December 4, 2024. Quote: \"The Alliance program now hosts 37 solution members, offering 49 integrated solutions that complement, enhance, or extend MEDITECH Expanse.\"",
    },
  ],
  related: [
    { label: "Implementation", href: "/implementation", description: "Where the MEDITECH connection sits in the 4 to 6 week plan." },
    { label: "Integrations", href: "/integrations", description: "Every EHR and research system Bond connects to, and what each needs." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads charts against each criterion and explains matches." },
    { label: "FHIR", href: "/glossary/fhir", description: "The data standard behind the Expanse connection, in plain terms." },
  ],
};

export default page;
