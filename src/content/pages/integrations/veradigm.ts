import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/veradigm",
  category: "integration",
  title: "Veradigm FHIR integration for clinical trial recruitment",
  description:
    "How Bond connects to Veradigm EHR and Practice Fusion over FHIR R4: the data it reads, Veradigm Connect, approvals, timeline and what is not integrated.",
  keywords: [
    "Veradigm clinical trial recruitment",
    "Veradigm EHR FHIR R4 API",
    "Practice Fusion FHIR bulk export",
    "Veradigm Connect developer program",
    "Allscripts Professional EHR FHIR",
  ],
  eyebrow: "Integration",
  h1: "Connecting Bond to Veradigm EHR and Practice Fusion",
  intro:
    "Bond Health connects to Veradigm EHR and Practice Fusion through Veradigm's certified FHIR R4 APIs, screens a practice's patients against a study's criteria, and hands pre-screened patients to its coordinators.{{cite:bond-site}} Below: what Veradigm sells today, the FHIR resources involved, Veradigm's developer program, what the practice approves, the timeline, and what is not integrated.",
  summary: "The FHIR resources, Veradigm Connect program, practice approvals and timeline for connecting Bond at a Veradigm EHR or Practice Fusion practice.",
  lastUpdated: "2026-10-05",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "who-uses-veradigm",
      heading: "What is Veradigm, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "Veradigm is the former Allscripts. On May 2, 2022, Allscripts sold its Hospital and Large Physician Practices segment to Constellation Software through N. Harris Computer Corporation, and that business now operates as Altera Digital Health.{{cite:sec-allscripts-sale,altera-harris}} Effective January 1, 2023, Allscripts Healthcare Solutions changed its name to Veradigm Inc.{{cite:sec-veradigm-rename}} This page covers its two EHRs, Veradigm EHR (formerly Allscripts Professional EHR) and Practice Fusion, both supported by Veradigm's developer program.{{cite:veradigm-connect}}",
        },
        {
          type: "p",
          text: "Veradigm has stayed independent and describes itself as a provider of clinical and revenue cycle solutions for independent practices.{{cite:veradigm-10k-2026}} Its board ended a review of strategic alternatives, including a possible sale, in January 2025 without receiving final proposals.{{cite:veradigm-strategic-review}} As of May 2026, its stock traded over the counter (OTCMKTS: MDRX) rather than on a national exchange; that month it filed its 2023 and 2024 annual reports and said it aims to get current on SEC filings and then relist.{{cite:veradigm-10k-2026}}",
        },
        {
          type: "table",
          caption: "Veradigm's footprint in US ambulatory care",
          columns: ["Measure", "Figure", "Source and basis"],
          rows: [
            ["Office-based physicians naming it as their primary EHR", "Practice Fusion 3.2%; Allscripts 2.7%", "2024 National Electronic Health Record Survey, published by ASTP/ONC in June 2026{{cite:onc-nehrs}}"],
            ["Ambulatory EHR installations", "Veradigm 2,580 (3.1%), seventh; Practice Fusion 2,563 (3.1%), eighth", "Definitive Healthcare data, accessed October 2025{{cite:definitive-ambulatory}}"],
          ],
          note: "The survey's response options were \"Allscripts\" and \"Practice Fusion\"; it does not separate Veradigm EHR from the former Allscripts products Altera now sells.",
        },
        {
          type: "callout",
          tone: "info",
          title: "On TouchWorks, Sunrise or Paragon?",
          text: "Those are Altera products, and Veradigm's developer documentation refers their developers to Altera's own program.{{cite:veradigm-process}} This page covers Veradigm EHR and Practice Fusion. For other systems, see [integrations](/integrations).",
        },
      ],
    },
    {
      id: "data-and-resources",
      heading: "What data does Bond read, and which FHIR resources carry it?",
      blocks: [
        {
          type: "p",
          text: "Veradigm's FHIR API for Veradigm EHR supports FHIR R4 and USCDI; Veradigm stopped supporting its older DSTU2 version on June 1, 2025.{{cite:veradigm-fhir-intro}} Practice Fusion's API follows FHIR R4 4.0.1, US Core 6.1.0 (USCDI v3), SMART App Launch 2.0.0 and Bulk Data Access 1.0.1.{{cite:pf-get-started}} Veradigm EHR 26 and Practice Fusion EHR 3.7 both hold active ONC certification that includes the standardized FHIR API criterion, § 170.315(g)(10).{{cite:chpl-veradigm-ehr,chpl-practice-fusion}}",
        },
        {
          type: "table",
          caption: "Data Bond requests from Veradigm EHR and Practice Fusion",
          columns: ["Data element", "Veradigm EHR", "Practice Fusion"],
          rows: [
            ["Demographics and contact details", "Patient", "Patient"],
            ["Diagnoses", "Condition", "Condition"],
            ["Medications", "MedicationRequest, Medication, MedicationDispense", "MedicationRequest, MedicationDispense"],
            ["Labs and vitals", "Observation", "Observation"],
            ["Procedures and orders", "Procedure, ServiceRequest", "Procedure, ServiceRequest"],
            ["Allergies", "AllergyIntolerance", "AllergyIntolerance"],
            ["Reports", "DiagnosticReport", "DiagnosticReport"],
            ["Clinical notes", "DocumentReference", "DocumentReference"],
            ["Visits", "Encounter", "Encounter"],
            ["Whole-population pull", "Group `$export` for a group the practice builds", "`Patient/$export` for the whole practice, or `Group/{id}/$export`"],
          ],
          note: "Veradigm EHR resources are those Veradigm lists for version 26.0; earlier versions are checked against their CapabilityStatement.{{cite:veradigm-resources,veradigm-bulk}} Practice Fusion resources and export endpoints are from its API specification.{{cite:pf-api-spec}}",
        },
        {
          type: "ul",
          items: [
            "**Notes.** Veradigm's DocumentReference searches by category, type and date, so queries can be limited to the note types and look-back window a protocol needs.{{cite:veradigm-resources}} [Identify](/identify) reads notes and reports alongside coded fields and shows the evidence for each criterion.{{cite:bond-product}}",
            "**Scans.** Faxes and scanned outside records may not arrive as readable text. Criteria that depend on them move to the pre-screening call.",
          ],
        },
      ],
    },
    {
      id: "veradigm-programs",
      heading: "Which Veradigm developer programs are involved?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Veradigm Connect**, formerly the Allscripts Developer Program, covers Veradigm EHR, Veradigm Practice Management and Practice Fusion. Its **Open** level gives free access to the FHIR APIs; **Integrator** levels add Veradigm's proprietary Unity API.{{cite:veradigm-connect}}",
            "**Fees.** Veradigm's published fee schedule, last updated May 2024, lists $0 for the FHIR API license and FHIR API usage at every level, and says developers can enable FHIR apps with provider organizations \"at no cost and without intervention from Veradigm.\" Integrator subscriptions run from $49 to $2,499 a month.{{cite:veradigm-fees}}",
            "**Read-only FHIR.** \"The Veradigm FHIR API is limited to read-only access.\" For two-way integration Veradigm offers Unity, which developers must also use for Veradigm Practice Management data.{{cite:veradigm-process}}",
            "**Registration.** A developer registers the app, selects its scopes and purpose of use, and requests production access, which Veradigm Connect reviews before clients can activate it.{{cite:veradigm-process}}",
            "**Bulk data.** Only apps registered as the System type can request bulk exports, using backend authentication with a published key set (JWKS).{{cite:veradigm-bulk}}",
            "**Practice Fusion.** Developers register through Practice Fusion's PDS API portal. Under its terms, developers pay no fees for these APIs, and practices pay any standard transaction fee Practice Fusion publishes; its fee sheet lists none for API usage \"at this time.\"{{cite:pf-get-started,pf-terms,veradigm-fees}}",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "What Bond does and does not claim",
          text: "Bond works alongside Veradigm and connects through its standard FHIR APIs with the access each practice grants. It holds no Veradigm certification or partner status and claims no Veradigm App Expo or Practice Fusion marketplace listing. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "practice-approvals",
      heading: "What does the practice need to approve?",
      blocks: [
        {
          type: "p",
          text: "On both products the practice, not Veradigm, turns a third-party app on, so most of the work sits with whoever administers your EHR.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Sign the BAA",
              text: "No PHI moves until the business associate agreement with Bond is signed.{{cite:bond-product}}",
            },
            {
              title: "Activate the app",
              text: "On Veradigm EHR, \"the clients must activate applications themselves through the client License Management Portal.\"{{cite:veradigm-process}} On Practice Fusion, practices manage FHIR connections in the EHR, \"choosing what data is shared with any given application.\"{{cite:pf-get-started}}",
            },
            {
              title: "Define the population",
              text: "On Veradigm EHR, the practice builds the Group for a bulk export from a segment in the Reporting module.{{cite:veradigm-bulk}} On Practice Fusion, it can allow a whole-practice export or define groups, each limited to 1,000 patients.{{cite:pf-api-spec}}",
            },
            {
              title: "Review and test",
              text: "Your security reviewer checks the resource list against Bond's controls, then coordinators check a sample of matches against real charts, as described in [validating eligibility logic](/blog/validating-eligibility-logic-before-go-live).",
            },
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "How long does the Veradigm connection take?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for a full EHR integration is 48 hours, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} In the [implementation plan](/implementation), the security review and the EHR connection come first, while criteria and outreach scripts are configured in parallel.",
        },
        {
          type: "p",
          text: "Two Veradigm details shape the first screen. A Veradigm EHR export needs the practice's Group to exist first.{{cite:veradigm-bulk}} On Practice Fusion, a panel larger than 1,000 patients needs several groups or the whole-practice export.{{cite:pf-api-spec}}",
        },
        {
          type: "callout",
          tone: "warning",
          title: "What moves the date",
          text: "Approvals set the pace: your security review, activating the app in the License Management Portal or Practice Fusion, building the patient group, and IRB review of outreach scripts where it applies.",
        },
      ],
    },
    {
      id: "phi",
      heading: "How is PHI protected?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Agreements first.** Bond signs a business associate agreement before any PHI is shared.{{cite:bond-product}}",
            "**Read-only access.** Bond requests read access to the resources above, and your security review approves the list. Veradigm's FHIR API is read-only.{{cite:veradigm-process}}",
            "**Bond's controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, its SOC 2 Type II and ISO 27001 audits are underway, and it encrypts data in transit and at rest (AES-256 where applicable).{{cite:bond-product}}",
            "**People decide.** Coordinators review each ranked candidate and its evidence, and the site's screening visit confirms eligibility.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "See [security](/security) for where PHI goes and what your reviewer should ask for.",
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with Veradigm today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Writing to the chart.** Bond does not file notes, orders or research status in Veradigm EHR or Practice Fusion, and does not use Unity's write access.{{cite:veradigm-process}}",
            "**The practice management schedule.** Veradigm says appointment data in Veradigm Practice Management is reachable only through Unity.{{cite:veradigm-process}} Bond books screening visits straight into the site's calendar instead.{{cite:bond-site}}",
            "**Portal messaging.** Bond does not message patients through FollowMyHealth or Patient Fusion. Outreach is by voice and text through [Engage](/engage).",
            "**Altera products.** TouchWorks, Sunrise and Paragon are outside this page and Veradigm's program.{{cite:veradigm-process}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol, your Veradigm product and version, and the name of your EHR administrator. We will map approvals and dates to your calendar.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Veradigm charge for FHIR API access?",
      a: "Veradigm's published schedule lists no FHIR API license or usage fees for developers, and no API usage fees for Veradigm EHR or Practice Fusion clients \"at this time.\"{{cite:veradigm-fees}} Bond charges no integration fee; its volume-based fee per screened patient covers its integration work. See [pricing](/pricing).{{cite:bond-site}}",
    },
    {
      q: "We are on Practice Fusion. Is the process different?",
      a: "Slightly. The practice manages the connection inside Practice Fusion, and a bulk export covers either the whole practice or groups of up to 1,000 patients.{{cite:pf-get-started,pf-api-spec}}",
    },
    {
      q: "Does Bond read free-text notes from Veradigm EHR?",
      a: "Yes, through DocumentReference, for the note types the practice's build returns.{{cite:veradigm-resources}} Each match shows the chart evidence behind each criterion.{{cite:bond-product}}",
    },
    {
      q: "Our practice runs TouchWorks. Is that Veradigm?",
      a: "No. Veradigm's developer documentation lists TouchWorks as an Altera product, and Altera Digital Health is the business Allscripts sold in 2022.{{cite:veradigm-process,altera-harris}} See [integrations](/integrations) for other systems.",
    },
  ],
  sources: [
    { id: "bond-site", title: "Bond Health: platform overview, FAQ and pricing", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026" },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
    {
      id: "sec-allscripts-sale",
      title: "Allscripts Closes Sale of Hospital and Large Physician Practices Business to Constellation Software (Form 8-K, Exhibit 99.1)",
      publisher: "Allscripts Healthcare Solutions, via SEC EDGAR",
      url: "https://www.sec.gov/Archives/edgar/data/1124804/000095017022006865/mdrx-ex99_1.htm",
      year: "2022",
      note: "Dated May 2, 2022. Quote: \"completed the sale of the net assets of the Allscripts Hospital and Large Physician Practices business segment to Constellation Software Inc. (TSX:CSU), through its wholly-owned subsidiary N. Harris Computer Corporation\"",
    },
    {
      id: "altera-harris",
      title: "Harris completes purchase of Allscripts Hospitals and Large Physician Practices business segment",
      publisher: "Altera Digital Health (news release)",
      url: "https://www.alterahealth.com/newsroom/harris-completes-purchase-of-allscripts-hospitals-and-large-physician-practices-business-segment/",
      year: "2022",
      note: "Dated May 6, 2022. Quote: \"The segment will now operate as Altera Digital Health, a business unit of Harris Healthcare.\"",
    },
    {
      id: "sec-veradigm-rename",
      title: "Allscripts Announces Corporate Name Change to Veradigm Inc. (Form 8-K, Exhibit 99.1)",
      publisher: "Veradigm Inc., via SEC EDGAR",
      url: "https://www.sec.gov/Archives/edgar/data/1124804/000095017023000070/mdrx-ex99_1.htm",
      year: "2023",
      note: "Dated January 3, 2023. Quote: \"Allscripts Healthcare Solutions, Inc. announced today that, effective January 1, 2023, it has changed its name to Veradigm Inc.\"",
    },
    {
      id: "veradigm-strategic-review",
      title: "Veradigm Concludes Exploration of Strategic Alternatives and Announces Operational Review",
      publisher: "Veradigm (press release)",
      url: "https://investor.veradigm.com/news-releases/news-release-details/veradigm-concludes-exploration-strategic-alternatives-and",
      year: "2025",
      note: "Dated January 30, 2025. Quote: \"evaluated potential strategic opportunities, including a possible sale of the Company\" ... \"However, the Company did not receive any final proposals.\"",
    },
    {
      id: "veradigm-10k-2026",
      title: "Veradigm Files 2023 and 2024 Form 10-K",
      publisher: "Veradigm (press release)",
      url: "https://investor.veradigm.com/news-releases/news-release-details/veradigm-files-2023-and-2024-form-10-k",
      year: "2026",
      note: "Dated May 26, 2026. Quote: \"Veradigm® (OTCMKTS: MDRX), a leading provider of clinical and revenue cycle solutions for independent practices\". Also: \"The Company remains focused on getting current and staying current with its SEC filing obligations and subsequently relisting its common stock on a national exchange.\"",
    },
    {
      id: "onc-nehrs",
      title: "Office-based Physician Electronic Health Record Adoption, 2008-2024 (Appendix Table 2)",
      publisher: "ASTP/ONC, HealthIT.gov data brief 84",
      url: "https://healthit.gov/data/data-briefs/office-based-physician-electronic-health-record-adoption-2008-2024/",
      year: "2026",
      note: "June 2026; 2024 National Electronic Health Record Survey, N = 1,725, weighted percent of all office-based physicians. Quote: \"Practice Fusion Midmarket 3.20% Allscripts Midmarket 2.70%\"",
    },
    {
      id: "definitive-ambulatory",
      title: "Top 10 Ambulatory EHR Vendors",
      publisher: "Definitive Healthcare",
      url: "https://www.definitivehc.com/blog/top-ambulatory-ehr-systems",
      year: "2025",
      note: "Published October 15, 2025; ranked by installations, data accessed October 2025. Table rows: \"7 Veradigm Inc 2,580 3.1%\" and \"8 Practice Fusion an Allscripts Company 2,563 3.1%\".",
    },
    {
      id: "veradigm-connect",
      title: "Veradigm Developer Program (Veradigm Connect)",
      publisher: "Veradigm",
      url: "https://developer.veradigm.com/",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Veradigm Connect, formerly the Allscripts Developer Program\" ... \"Veradigm EHR (formerly Allscripts Professional EHR), Veradigm Practice Management (formerly Allscripts Practice Management), Practice Fusion and other supported EHRs.\" Also: \"Open: Available to any individual or company wanting to use select FHIR® ©-enabled APIs.\"",
    },
    {
      id: "veradigm-fhir-intro",
      title: "Veradigm FHIR API: Introduction",
      publisher: "Veradigm Developer Program",
      url: "https://developer.veradigm.com/Fhir/Introduction",
      year: "2026",
      note: "Accessed October 2026. Quote: \"The current version of the Veradigm implementation of the FHIR API supports FHIR release 4 (\"R4\") and the United States Core Data for Interoperability (\"USCDI\")\". Also: \"as of 6/1/2025, Veradigm will no longer be providing support for DSTU2\".",
    },
    {
      id: "veradigm-process",
      title: "Veradigm FHIR API: Process Overview",
      publisher: "Veradigm Developer Program",
      url: "https://developer.veradigm.com/Fhir/ProcessOverview",
      year: "2026",
      note: "Accessed October 2026. Quote: \"The Veradigm FHIR API is limited to read-only access.\" Also: \"The FHIR application is reviewed and, if appropriate, approved by Veradigm Connect. Once approved, clients can begin activating the FHIR application.\" And: \"To integrate with Veradigm Practice Management, developers must utilize Unity to read or write patient demographic, appointment, or financial data.\" And: \"the clients must activate applications themselves through the client License Management Portal.\" And: \"Altera products include Altera TouchWorks EHR, Sunrise, and Paragon.\"",
    },
    {
      id: "veradigm-resources",
      title: "Veradigm FHIR API: Supported FHIR R4 Resources",
      publisher: "Veradigm Developer Program",
      url: "https://developer.veradigm.com/Fhir/Resources",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Veradigm EHR version 26.0 supports these FHIR resources.\" DocumentReference supports the US Core 3.1.1 and 6.1.0 profiles and searches by patient with category, type, date and period.",
    },
    {
      id: "veradigm-bulk",
      title: "Veradigm FHIR API: Bulk Data",
      publisher: "Veradigm Developer Program",
      url: "https://developer.veradigm.com/Fhir/BulkData",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Only FHIR applications of the type System can send bulk data requests.\" Also: \"Group resources are created by organizations in Veradigm EHR. Veradigm EHR uses segments in the Reporting module to create Group resources.\"",
    },
    {
      id: "veradigm-fees",
      title: "ONC Certification Criteria for Health IT API Fees (spreadsheet)",
      publisher: "Veradigm",
      url: "https://veradigm.com/img/legal/onc/API-Fees-ONC-Cert-Criteria-for-Health-IT-Final.xlsx",
      year: "2024",
      note: "Linked from veradigm.com/legal/onc-reg-compliance; last updated May 10 and May 22, 2024; read October 2026. Quote: \"Individual developers and companies can register FHIR apps, test using development endpoints, declare apps as production ready, and enable them with provider organizations at no cost and without intervention from Veradigm.\" Also: \"Veradigm EHR does not charge API fees for API usage at this time\" and \"Practice Fusion does not charge API fees for API usage at this time\". Integrator tiers: \"$49/month or $529/year\" to \"$2,499/month or $26,990/year\".",
    },
    {
      id: "pf-get-started",
      title: "Getting started with FHIR APIs",
      publisher: "Practice Fusion",
      url: "https://www.practicefusion.com/fhir/get-started",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Practice Fusion practices will be able to manage FHIR connections in the EHR, choosing what data is shared with any given application.\" Also lists \"HL7 FHIR R4 v4.0.1\", \"US Core Profiles v6.1.0 / USCDI v3\", \"Bulk Data Access v1.0.1\" and \"SMART App Launch v2.0.0\".",
    },
    {
      id: "pf-api-spec",
      title: "Practice Fusion FHIR API Specifications",
      publisher: "Practice Fusion",
      url: "https://www.practicefusion.com/fhir/api-specifications/",
      year: "2026",
      note: "Accessed October 2026. Lists Patient/$export for \"all patients in the practice\" and Group/{{GroupId}}/$export. Quote: \"Groups are limited to a maximum of 1,000 patients each.\"",
    },
    {
      id: "pf-terms",
      title: "PDS API Terms of Service (Application Access Developer Agreement)",
      publisher: "Practice Fusion",
      url: "https://www.practicefusion.com/pds-api/termsofservice/",
      year: "2026",
      note: "Accessed October 2026. Quote: \"The Developer/API User does not pay fees for use of the Application Access APIs.\" Also: \"Practice Fusion customers shall pay to Practice Fusion the then standard Transaction Fee if any\".",
    },
    {
      id: "chpl-veradigm-ehr",
      title: "CHPL listing: Veradigm EHR 26 (15.04.04.2891.Vera.26.14.1.251231)",
      publisher: "ASTP/ONC Certified Health IT Product List",
      url: "https://chpl.healthit.gov/#/listing/11763",
      year: "2026",
      note: "Viewed October 2026. Shows \"CERTIFICATION DATE: Dec 31, 2025\", \"VERSION: 26\", \"CERTIFICATION STATUS: Active\"; criteria include \"170.315 (g)(10) Standardized API for Patient and Population Services\".",
    },
    {
      id: "chpl-practice-fusion",
      title: "CHPL listing: Practice Fusion EHR 3.7 (15.04.04.2924.Prac.37.01.1.240826)",
      publisher: "ASTP/ONC Certified Health IT Product List",
      url: "https://chpl.healthit.gov/#/listing/11507",
      year: "2026",
      note: "Viewed October 2026. Shows \"CERTIFICATION DATE: Aug 26, 2024\", \"VERSION: 3.7\", \"CERTIFICATION STATUS: Active\"; criteria include 170.315 (g)(10).",
    },
  ],
  related: [
    { label: "Integrations", href: "/integrations", description: "The EHRs and research systems Bond connects to, and what each needs." },
    { label: "Implementation", href: "/implementation", description: "Where the Veradigm connection sits in the 48-hour plan." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads charts against each criterion and explains matches." },
    { label: "Security", href: "/security", description: "BAAs, encryption and compliance status." },
    { label: "Physician groups", href: "/for/physician-groups", description: "Running studies from an independent practice's own patient panel." },
    { label: "eClinicalWorks integration", href: "/integrations/eclinicalworks", description: "The same FHIR-based path for another ambulatory EHR." },
  ],
};

export default page;
