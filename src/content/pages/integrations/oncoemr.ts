import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/oncoemr",
  category: "integration",
  title: "OncoEMR FHIR integration for oncology trial recruitment",
  description:
    "How Bond connects to Flatiron OncoEMR over FHIR R4: the notes and reports it reads, Flatiron's API terms, approvals, timeline and what is not integrated.",
  keywords: [
    "OncoEMR clinical trial recruitment",
    "Flatiron OncoEMR FHIR API",
    "community oncology trial screening EHR",
    "OncoEMR DocumentReference pathology report",
    "Flatiron FHIR API pricing",
  ],
  eyebrow: "Integration",
  h1: "Connecting Bond to Flatiron OncoEMR",
  intro:
    "Bond Health connects to OncoEMR through Flatiron Health's certified FHIR R4 APIs, reads the notes and pathology, radiology and molecular reports that decide oncology eligibility, and hands pre-screened patients to the practice's research staff.{{cite:bond-site,bond-product}} Below: the data and FHIR resources involved, Flatiron's API terms, what the practice approves, the timeline, and what is not integrated today.",
  summary: "The FHIR resources, Flatiron API terms, practice approvals and timeline for connecting Bond at a community oncology practice on OncoEMR.",
  lastUpdated: "2026-10-05",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Oncology screening", secondaryHref: "/oncology" },
  sections: [
    {
      id: "who-uses-oncoemr",
      heading: "What is OncoEMR, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "OncoEMR is Flatiron Health's cloud-based, oncology-specific EHR for community practices. Roche completed its USD 1.9 billion acquisition of Flatiron on April 6, 2018, and said Flatiron would continue as a separate legal entity.{{cite:roche-flatiron}} In August 2026, Flatiron described itself as \"an independent affiliate of the Roche Group.\"{{cite:flatiron-candid-2026}}",
        },
        {
          type: "stats",
          items: [
            { value: "5,100+", label: "providers using OncoEMR, per Flatiron, August 2026", cite: "flatiron-candid-2026" },
            { value: "220+", label: "community oncology practices using OncoEMR, per Flatiron, August 2026", cite: "flatiron-candid-2026" },
          ],
        },
        {
          type: "p",
          text: "OncoEMR version 2.8, certified December 21, 2022, holds active ONC certification that includes the standardized FHIR API criterion, § 170.315(g)(10). Its CHPL listing names the intended users as oncology and hematology community practices.{{cite:chpl-oncoemr}}",
        },
      ],
    },
    {
      id: "why-documents-matter",
      heading: "Why does oncology eligibility depend on notes, pathology and molecular reports?",
      blocks: [
        {
          type: "p",
          text: "Coded fields hold diagnoses, orders and lab values. Histology, biomarkers, progression and performance status are often written only in reports and notes. In a 2014 study of chronic lymphocytic leukemia and prostate cancer trials, unstructured data was essential to resolving 59% and 77% of eligibility criteria, respectively.{{cite:raghavan-2014}} Outside of trials, progression and response \"are not routinely encoded into structured data.\"{{cite:kehl-2019}}",
        },
        {
          type: "p",
          text: "Biomarker results show the gap in community oncology. In a study of 3,337 patients newly diagnosed with stage IV non-small cell lung cancer in The US Oncology Network, EGFR testing appeared in structured fields for 36%; in a 300-patient subset reviewed with unstructured data, 80% had EGFR testing documented.{{cite:waterhouse-2021}} The cohorts differ, so this is not a direct comparison, but the gap is large. Molecular panels can cover dozens or hundreds of biomarkers and produce long, complex reports, as Quest Diagnostics noted when it announced its OncoEMR ordering integration in July 2026.{{cite:quest-oncoemr-2026}}",
        },
        {
          type: "p",
          text: "The [oncology](/oncology) page maps common criteria to where they live in the chart.",
        },
      ],
    },
    {
      id: "data-and-resources",
      heading: "What data does Bond read, and which FHIR resources carry it?",
      blocks: [
        {
          type: "p",
          text: "Flatiron's FHIR API follows the US Core Implementation Guide, supports read and search on every resource, and gives read-only access to USCDI data.{{cite:flatiron-fhir-overview,flatiron-fhir-home}} Flatiron's documentation also lists where each resource's data lives in OncoEMR.",
        },
        {
          type: "table",
          caption: "Data Bond requests from OncoEMR",
          columns: ["Data element", "FHIR resource", "Notes"],
          rows: [
            ["Demographics and contact details", "Patient", "Age and sex for criteria; phone and language for outreach."],
            ["Diagnoses", "Condition (problems and encounter diagnoses)", "From the OncoEMR Summary."],
            ["Treatment given", "MedicationAdministration, MedicationRequest", "Administrations come from the MAR; used for line-of-therapy and washout criteria."],
            ["Pathology, imaging and lab narratives", "DiagnosticReport (report and note exchange profile)", "From Documents and Orders."],
            ["Clinical notes and outside documents", "DocumentReference", "From Documents: progress and consultation notes and pathology, imaging and lab report narratives."],
            ["Labs and vitals", "Observation (lab result, vital signs)", "Dated values for organ-function criteria."],
            ["Procedures", "Procedure", "Prior surgery and procedures named in exclusions."],
            ["Visits", "Encounter, Appointment", "Recent and upcoming visits, to time outreach."],
          ],
          note: "Resources, USCDI data elements and OncoEMR source locations from Flatiron's FHIR documentation, read October 2026.{{cite:flatiron-fhir-overview,flatiron-docref,flatiron-diagreport,flatiron-medadmin}} What a practice's documents return is checked in test.",
        },
        {
          type: "ul",
          items: [
            "**Documents are PDFs.** Flatiron surfaces documents as base64-encoded PDFs only; plain-text documents are not available through the API.{{cite:flatiron-docref}}",
            "**Volume limits.** A DocumentReference call returns up to 200 documents with content. For larger charts, Flatiron directs callers to filter by LOINC document type, or to fetch metadata first with `_summary` and then each document by ID.{{cite:flatiron-docref}}",
            "**What Bond does with them.** [Identify](/identify) reads these notes and reports alongside coded fields and shows the evidence for each criterion.{{cite:bond-product}} Scanned faxes may not be readable text; criteria that depend on them move to the pre-screening call.",
          ],
        },
      ],
    },
    {
      id: "flatiron-api-terms",
      heading: "Which Flatiron API program and terms apply?",
      blocks: [
        {
          type: "p",
          text: "Flatiron runs its own FHIR developer site. A developer creates an account and submits a registration form for each use case, naming each OncoEMR practice by its practice PIN and confirming that the practice has consented.{{cite:flatiron-fhir-home,flatiron-faq}}",
        },
        {
          type: "ul",
          items: [
            "**Access types.** Besides patient and clinician app launches, Flatiron offers backend access with no user in the loop: single-patient APIs across all patients in an OncoEMR instance, or a bulk export of \"a static pre-defined group.\"{{cite:flatiron-fhir-overview,flatiron-fhir-home}}",
            "**Fees.** As of March 2026, R4 APIs for USCDI v3 data are included in the OncoEMR subscription. Flatiron's terms name two situations in which it charges: a launch button inside OncoEMR (EHR Launch, $3,000) and an optional value-added services package ($5,000 per OncoEMR customer integration).{{cite:flatiron-pricing,flatiron-terms}}",
            "**No write access.** Flatiron says it \"does not support 'write' API access at this time\" and does not support CDS Hooks.{{cite:flatiron-faq}}",
            "**Data handling.** Flatiron's API terms bar building databases or permanent copies from returned data \"unless expressly permitted by the content owner or by applicable law\", so cover data retention in your security review.{{cite:flatiron-terms}}",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "What Bond does and does not claim",
          text: "Bond works alongside OncoEMR and connects through Flatiron's standard FHIR APIs with the consent each practice gives. It holds no Flatiron certification or partner status. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "practice-approvals",
      heading: "What does the practice need to approve?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Sign the BAA",
              text: "No PHI moves until the business associate agreement with Bond is signed.{{cite:bond-product}}",
            },
            {
              title: "Share the practice PIN and confirm",
              text: "The PIN appears in the bottom right corner of OncoEMR for any logged-in user. Flatiron needs the practice's explicit confirmation before a practitioner request is final.{{cite:flatiron-faq}}",
            },
            {
              title: "Choose the population",
              text: "Agree whether screening uses backend access across the practice's patients or a bulk export of a static, pre-defined group, and how that group is defined.{{cite:flatiron-fhir-overview}}",
            },
            {
              title: "Run the security review",
              text: "Your reviewer checks the resource list, data retention under the BAA and Flatiron's terms, and Bond's controls.",
            },
            {
              title: "Test on real charts",
              text: "Coordinators check a sample of matches, especially pathology and molecular criteria, against the chart. See [validating eligibility logic](/blog/validating-eligibility-logic-before-go-live).",
            },
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "How long does the OncoEMR connection take?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for a full EHR integration is 48 hours, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} In the [implementation plan](/implementation), the security review and the EHR connection come first, while criteria and outreach scripts are configured in parallel.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Flatiron's own clock",
          text: "Flatiron says it completes security verification within 10 days of receiving a registration form and registers the app for production within 5 days after that. A request can stay in Pending Review until the practice authorizes the integration.{{cite:flatiron-faq}} Submit the form and the practice's confirmation on day one.",
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
            "**Read-only access.** Bond requests read access to the resources above, and your security review approves the list. Flatiron's API is read-only.{{cite:flatiron-faq}}",
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
      heading: "What is not integrated with OncoEMR today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Writing to the chart.** Bond does not file notes, orders or research status in OncoEMR.",
            "**A button inside OncoEMR.** Bond does not use Flatiron's EHR Launch; coordinators review matches in Bond.",
            "**The OncoEMR schedule and portal.** Bond books screening visits straight into the site's calendar and reaches patients by voice and text through [Engage](/engage), not through OncoEMR scheduling or the CareSpace portal.{{cite:bond-site}}",
            "**Flatiron's research tools and data.** Bond does not connect to Flatiron's clinical research tools and does not use Flatiron's real-world datasets.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one oncology protocol and your OncoEMR practice PIN. We will map the registration, approvals and dates to your calendar.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Bond read pathology and molecular reports from OncoEMR?",
      a: "Yes, the reports OncoEMR returns through DocumentReference and DiagnosticReport, which arrive as PDFs.{{cite:flatiron-docref,flatiron-diagreport}} Identify reads pathology, radiology and molecular reports and shows the passage behind each criterion.{{cite:bond-product}}",
    },
    {
      q: "Does Flatiron charge for the connection?",
      a: "Not for standard read access: as of March 2026, its R4 APIs for USCDI v3 data are included in the OncoEMR subscription, and its terms name only two charges, for an in-OncoEMR launch button and an optional services package.{{cite:flatiron-pricing,flatiron-terms}} Bond charges no integration fee. See [pricing](/pricing).{{cite:bond-site}}",
    },
    {
      q: "Does Bond need a launch button inside OncoEMR?",
      a: "No. Flatiron offers backend access that needs no user to launch an app from OncoEMR, and its $3,000 fee applies only to adding a launch button.{{cite:flatiron-fhir-overview,flatiron-pricing}} Bond does not run inside OncoEMR; coordinators review matches in Bond.",
    },
  ],
  sources: [
    { id: "bond-site", title: "Bond Health: platform overview, FAQ and pricing", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026" },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
    {
      id: "roche-flatiron",
      title: "Roche completes acquisition of Flatiron Health",
      publisher: "Roche (media release)",
      url: "https://www.roche.com/media/releases/med-cor-2018-04-06",
      year: "2018",
      note: "Dated April 6, 2018. Quote: \"the transaction value for the acquisition of Flatiron Health was USD 1.9 billion on a fully diluted basis\" and \"Flatiron Health will continue its operations as a separate legal entity\". Also: \"Flatiron Health is a market leader in oncology-specific electronic health record (EHR) software\".",
    },
    {
      id: "flatiron-candid-2026",
      title: "Candid Health and Flatiron Health Partner to Bring Revenue Cycle Management to Oncology Practices",
      publisher: "Flatiron Health (press release)",
      url: "https://resources.flatiron.com/press/candid-health-and-flatiron-health-partner-to-bring-revenue-cycle-management-to-oncology-practices",
      year: "2026",
      note: "Published August 27, 2026; vendor-reported. Quote: \"Used by more than 5,100 providers and 220+ community oncology practices across the U.S.\" Also: \"Flatiron Health is an independent affiliate of the Roche Group.\"",
    },
    {
      id: "chpl-oncoemr",
      title: "CHPL listing: OncoEMR 2.8 (15.04.04.3010.Onco.28.02.1.221221)",
      publisher: "ASTP/ONC Certified Health IT Product List",
      url: "https://chpl.healthit.gov/#/listing/11115",
      year: "2026",
      note: "Viewed October 2026. Shows \"CERTIFICATION DATE: Dec 21, 2022\", \"CERTIFICATION STATUS: Active\", ONC-ACB Drummond Group, and \"DESCRIPTION OF INTENDED USERS: Oncology/Hematology Community Practices\"; criteria include \"170.315 (g)(10) Standardized API for Patient and Population Services\".",
    },
    {
      id: "raghavan-2014",
      title: "How essential are unstructured clinical narratives and information fusion to clinical trial recruitment?",
      publisher: "AMIA Joint Summits on Translational Science Proceedings (Raghavan P et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25717416/",
      year: "2014",
      note: "Abstract checked via PubMed, October 2026. Quote: \"Unstructured data is essential to solving 59% of the CLL trial criteria and 77% of the prostate cancer trial criteria.\"",
    },
    {
      id: "kehl-2019",
      title: "Assessment of Deep Natural Language Processing in Ascertaining Oncologic Outcomes From Radiology Reports",
      publisher: "JAMA Oncology (Kehl KL et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31343664/",
      year: "2019",
      note: "Abstract checked via PubMed, October 2026. Quote: \"Outside of clinical trials, end points such as cancer progression and response are not routinely encoded into structured data.\"",
    },
    {
      id: "waterhouse-2021",
      title: "Understanding Contemporary Molecular Biomarker Testing Rates and Trends for Metastatic NSCLC Among Community Oncologists",
      publisher: "Clinical Lung Cancer (Waterhouse DM et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34187757/",
      year: "2021",
      note: "Abstract checked via PubMed, October 2026; patients in The US Oncology Network, July 2016 to September 2019. Quote: \"In cohort A (n = 3337), programmed death ligand 1 (37%) was the most frequently tested biomarker documented in structured data, followed by epidermal growth factor receptor (36%)\" and \"According to unstructured data in cohort B (n = 300), epidermal growth factor receptor (80%) was the most frequently tested biomarker\".",
    },
    {
      id: "quest-oncoemr-2026",
      title: "Quest Diagnostics Now the Largest Clinical Reference Lab to Extend Oncology Test Access Through OncoEMR MPI",
      publisher: "Quest Diagnostics (press release, posted by Flatiron Health)",
      url: "https://resources.flatiron.com/press/quest-diagnostics-now-the-largest-clinical-reference-lab-to-extend-oncology-test-access-through-oncoemr-mpi",
      year: "2026",
      note: "Published July 8, 2026. Quote: \"Molecular oncology testing often involves dozens or even hundreds of individual genetic biomarkers, which can complicate ordering workflows and producing long, complex results reports.\"",
    },
    {
      id: "flatiron-fhir-home",
      title: "Getting Started with Flatiron's FHIR APIs",
      publisher: "Flatiron Health",
      url: "https://flatiron.my.site.com/FHIR/s/",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Flatiron supports read-only FHIR® API access for all United States Core Data for Interoperability (USCDI) version 1 data elements\". Also: \"If you are an OncoEMR® site seeking to set up a FHIR® API integration, please direct the application developer you are partnering with to create an account and submit the registration form.\" And: \"the requester will be prompted to provide the practice's OncoEMR PIN for any practice(s) they are partnering with\".",
    },
    {
      id: "flatiron-fhir-overview",
      title: "Flatiron's FHIR API Overview",
      publisher: "Flatiron Health",
      url: "https://flatiron.my.site.com/FHIR/s/article/Flatiron-FHIR-Overview",
      year: "2025",
      note: "Dated August 25, 2025; accessed October 2026. Quote: \"Provider Backend Access (Single Patient API): ... the app can access all patients in a given OncoEMR® instance at the system-level via the single-patient FHIR® APIs.\" Also: \"export clinical data for multiple patients in a static pre-defined group.\" And: \"Supports RESTful READ and SEARCH operations for all resources.\"",
    },
    {
      id: "flatiron-docref",
      title: "Resource: DocumentReference",
      publisher: "Flatiron Health",
      url: "https://flatiron.my.site.com/FHIR/s/article/DocumentReference",
      year: "2025",
      note: "Dated August 27, 2025; accessed October 2026. USCDI elements: \"Consultation Note, Discharge Summary Note, History & Physical, Imaging Narrative, Laboratory Report Narrative, Pathology Report Narrative, Procedure Note, Progress Note, Clinical Note\"; location \"Documents\". Quote: \"Only base64 encoded PDFs are surfaced. Plain Text documents are not available via the API\". Also: \"will return up to 200 Documents per response when calling for the content of the documents\".",
    },
    {
      id: "flatiron-diagreport",
      title: "Resource: DiagnosticReport - Report and Note Exchange",
      publisher: "Flatiron Health",
      url: "https://flatiron.my.site.com/FHIR/s/article/DiagnosticReport",
      year: "2026",
      note: "Accessed October 2026. Quote: \"USCDI Data Elements Supported by this Resource: Imaging Narrative, Laboratory Report Narrative, Pathology Report Narrative, Procedure Note, Tests, Values/Results\" and \"Primary Location(s) for This Data in OncoEMR® Documents, Orders\".",
    },
    {
      id: "flatiron-medadmin",
      title: "Resource: MedicationAdministration",
      publisher: "Flatiron Health",
      url: "https://flatiron.my.site.com/FHIR/s/article/Resource-MedicationAdministration",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Primary Location(s) for This Data in OncoEMR® MAR\".",
    },
    {
      id: "flatiron-pricing",
      title: "Flatiron's Certified FHIR API Pricing",
      publisher: "Flatiron Health",
      url: "https://flatiron.my.site.com/FHIR/s/article/API-Pricing",
      year: "2026",
      note: "Dated March 5, 2026. Quote: \"Flatiron R4 FHIR® APIs for USCDI v3 data elements are included within the cost of an OncoEMR® subscription.\" Also: \"Integration: $3,000\" for EHR Launch, and \"The value-added services package is available to application developers at a one-time fee of $5,000 per OncoEMR® customer integration.\"",
    },
    {
      id: "flatiron-terms",
      title: "API Terms of Use",
      publisher: "Flatiron Health",
      url: "https://flatiron.my.site.com/FHIR/s/article/API-Terms-of-Use",
      year: "2022",
      note: "Last updated November 9, 2022; accessed October 2026. Quote: \"Flatiron charges fees in two situations\". Also: \"Unless expressly permitted by the content owner or by applicable law, you shall not ... Scrape, build databases or otherwise create permanent copies, or keep cached copies longer than permitted by the cache header\".",
    },
    {
      id: "flatiron-faq",
      title: "FHIR FAQs",
      publisher: "Flatiron Health",
      url: "https://flatiron.my.site.com/FHIR/s/article/FHIR-FAQs",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Flatiron will conduct security verification within 10 days of receipt and will register the application for production use within 5 days of security verification being completed.\" Also: \"for Practitioner API use cases, Flatiron requires the explicit confirmation of the OncoEMR® customer\". And: \"No, Flatiron does not support 'write' API access at this time.\" And: \"A practice's PIN is non-confidential information that can be located by any logged-in user within the bottom right hand corner of OncoEMR®.\"",
    },
  ],
  related: [
    { label: "Oncology", href: "/oncology", description: "Where oncology criteria live in the chart and what drives screen failure." },
    { label: "Integrations", href: "/integrations", description: "The EHRs and research systems Bond connects to, and what each needs." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads notes and reports against each criterion." },
    { label: "Implementation", href: "/implementation", description: "Where the OncoEMR connection sits in the 48-hour plan." },
    { label: "Security", href: "/security", description: "BAAs, encryption and compliance status." },
    { label: "Unstructured data as eligibility evidence", href: "/blog/unstructured-data-eligibility-evidence", description: "Why notes and reports decide so many criteria." },
  ],
};

export default page;
