import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/nextgen",
  category: "integration",
  title: "NextGen EHR FHIR integration for clinical trial recruitment",
  description:
    "How Bond connects to NextGen Enterprise and NextGen Office over FHIR R4: the data it reads, NextGen's API programs and fees, approvals, timeline and limits.",
  keywords: [
    "NextGen clinical trial recruitment",
    "NextGen Enterprise FHIR R4 API",
    "NextGen Office Bulk FHIR API",
    "NextGen API Distributor Program",
    "NextGen API Client Portal third-party app",
  ],
  eyebrow: "Integration",
  h1: "Connecting Bond to NextGen Healthcare",
  intro:
    "Bond Health connects to NextGen Enterprise and NextGen Office through NextGen's certified FHIR R4 APIs, screens a practice's patients against a study's criteria, and hands pre-screened patients to its coordinators.{{cite:bond-site,bond-product}} Below: the FHIR resources involved, which NextGen API program applies to your product, what your NextGen administrator approves, the timeline, and what is not integrated today.",
  summary: "The FHIR resources, NextGen API programs and fees, practice approvals and timeline for connecting Bond at a NextGen Enterprise or NextGen Office practice.",
  lastUpdated: "2026-10-05",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "who-uses-nextgen",
      heading: "What is NextGen Healthcare, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "NextGen Healthcare sells EHR and practice management software to ambulatory practices. NextGen Enterprise is its flagship platform; NextGen Office is its cloud product for small practices. Thoma Bravo, a software investment firm, completed its $1.8 billion acquisition of the company in November 2023, when NextGen's stock ceased trading on Nasdaq.{{cite:thoma-bravo-nextgen}} NextGen still described itself as privately held in July 2026.{{cite:nextgen-time-2026}}",
        },
        {
          type: "table",
          caption: "NextGen's footprint in US ambulatory care",
          columns: ["Measure", "NextGen", "Source and basis"],
          rows: [
            ["Office-based physicians naming it as their primary EHR", "4.1%", "2024 National Electronic Health Record Survey, published by ASTP/ONC in June 2026{{cite:onc-nehrs}}"],
            ["Ambulatory EHR installations", "3,510 (4.2%), fifth largest", "Definitive Healthcare data, accessed October 2025{{cite:definitive-ambulatory}}"],
            ["Organizations and providers", "More than 8,000 organizations, 100,000 providers", "Vendor figure, April 2026{{cite:nextgen-brand-2026}}"],
            ["Community health centers", "300+ FQHCs and CHCs", "Vendor figure, accessed October 2026{{cite:nextgen-about}}"],
          ],
          note: "The survey counts physicians, Definitive counts installations, and the last two rows are NextGen's own figures.",
        },
        {
          type: "p",
          text: "In KLAS Research's 2025 review of six ambulatory vendors, as summarized by TechTarget, NextGen earned a C-minus overall against a C average, with 55% of users satisfied or highly satisfied; users credited its customizability and broad integration options.{{cite:klas-ambulatory-2025}}",
        },
      ],
    },
    {
      id: "enterprise-or-office",
      heading: "Does it matter whether you run NextGen Enterprise or NextGen Office?",
      blocks: [
        {
          type: "p",
          text: "Yes. The two products are certified separately, run on different FHIR servers, and have different API programs and fees. Both hold active ONC certification that includes the standardized FHIR API criterion, § 170.315(g)(10).{{cite:chpl-nge,chpl-ngo}}",
        },
        {
          type: "table",
          caption: "NextGen Enterprise and NextGen Office for a third-party connection",
          columns: ["", "NextGen Enterprise", "NextGen Office"],
          rows: [
            ["CHPL listing", "Enterprise 8, certified June 2, 2025{{cite:chpl-nge}}", "Version 5.0, certified February 20, 2018{{cite:chpl-ngo}}"],
            ["Published FHIR R4 server", "28 resource types, read and search only{{cite:nge-fhir-metadata}}", "26 resource types, read and search only{{cite:ngo-fhir-metadata}}"],
            ["Population-level export", "None in the published R4 CapabilityStatement or route documentation{{cite:nge-fhir-metadata,nge-fhir-r4-routes}}", "Bulk FHIR API with Group and Patient `$export`{{cite:ngo-bulk-metadata}}"],
            ["Other APIs", "Proprietary Enterprise APIs, 800+ routes, read and write{{cite:nextgen-api}}", "Published provider APIs are read-only FHIR for USCDI v1 data{{cite:nextgen-regulatory-ngo}}"],
            ["How a vendor app is enabled", "The practice grants access in the NextGen API Client Portal{{cite:nextgen-api}}", "NextGen onboards each provider API per vendor per practice, for a fee{{cite:nextgen-regulatory-ngo}}"],
          ],
          note: "Retrieved October 2026. NextGen shares full documentation for provider-facing Enterprise apps after a developer submits its onboarding form.{{cite:nextgen-api}}",
        },
      ],
    },
    {
      id: "data-and-resources",
      heading: "What data does Bond read, and which FHIR resources carry it?",
      blocks: [
        {
          type: "p",
          text: "Both NextGen R4 servers run FHIR 4.0.1 and declare the US Core server capability statement.{{cite:nge-fhir-metadata,ngo-fhir-metadata}} The table maps what [Identify](/identify) needs to the resources they list.",
        },
        {
          type: "table",
          caption: "Data Bond requests from NextGen",
          columns: ["Data element", "FHIR resource", "Notes"],
          rows: [
            ["Demographics and contact details", "Patient", "Age and sex for criteria; phone and language for outreach."],
            ["Diagnoses", "Condition (problem list and encounter diagnosis profiles)", "Coded diagnoses with onset dates, for time windows."],
            ["Medications", "MedicationRequest, MedicationDispense; MedicationStatement (Enterprise) or MedicationAdministration (Office)", "Current and prior therapies, for washout and prior-treatment criteria."],
            ["Labs and vitals", "Observation (lab, vital sign, smoking and pregnancy status profiles)", "Dated values for lab, BMI and blood pressure criteria."],
            ["Procedures and orders", "Procedure, ServiceRequest", "Procedures named in exclusions; open orders and referrals."],
            ["Allergies", "AllergyIntolerance", "Allergies that rule out a study drug."],
            ["Reports", "DiagnosticReport (lab and note profiles)", "Lab panels and narrative reports the practice files."],
            ["Clinical notes", "DocumentReference", "Visit notes and documents: the main source for criteria that live in free text."],
            ["Visits", "Encounter", "Visit history. Neither server lists an Appointment resource."],
          ],
          note: "From NextGen's production CapabilityStatements, retrieved October 2026.{{cite:nge-fhir-metadata,ngo-fhir-metadata}} Which note types a practice's build returns is checked when Bond connects in test.",
        },
        {
          type: "p",
          text: "DocumentReference searches on both servers accept category, type and date filters, so a query can be limited to the note types and look-back window a protocol needs.{{cite:nge-fhir-metadata,ngo-fhir-metadata}} Identify reads notes and reports alongside coded fields and shows the evidence for each criterion.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "nextgen-programs",
      heading: "Which NextGen developer programs and APIs are involved?",
      blocks: [
        {
          type: "h3",
          text: "NextGen Enterprise",
        },
        {
          type: "ul",
          items: [
            "**Patient Access APIs**: read-only FHIR endpoints for apps patients use to get their own data. Bond is not a patient app.{{cite:nextgen-api}}",
            "**Enterprise APIs**: a proprietary JSON API of 800+ routes for apps used by provider organizations. NextGen adds that \"FHIR APIs may also be used for NGE Client-Facing applications.\"{{cite:nextgen-api}}",
            "**API Distributor Program**: the program for third-party vendors. It requires an API Terms of Service Agreement, and fees may vary with data scope and with read-only versus read-write access. NextGen states there is no charge for Enterprise API GET routes on certified technology.{{cite:nextgen-regulatory-nge}}",
            "**Server-to-server access**: NextGen documents a Global Service Account (GSA) model for apps that run without a user launching them inside NextGen Enterprise.{{cite:nextgen-regulatory-nge}}",
          ],
        },
        {
          type: "h3",
          text: "NextGen Office",
        },
        {
          type: "p",
          text: "Provider-side access runs through the SMART App Launch API and the Bulk FHIR API, both read-only for USCDI v1 data. As of October 2026, NextGen lists fees \"per vendor per practice\": $2,400 one-time onboarding for each API, then $50 a month for SMART App Launch and $100 a month for Bulk FHIR. It caps traffic at 20 requests per minute from one IP address and bulk export at one request per patient per week.{{cite:nextgen-regulatory-ngo}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "What Bond does and does not claim",
          text: "Bond works alongside NextGen and connects through NextGen's standard APIs with the access each practice grants. It holds no NextGen certification or partner status and claims no NextGen Marketplace listing. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "practice-approvals",
      heading: "What does the practice's NextGen administrator need to approve?",
      blocks: [
        {
          type: "p",
          text: "The work sits with whoever manages NextGen for the group: an IT lead, a practice administrator or an outside consultant. Bond supplies the resource list and does the configuration.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Sign the BAA",
              text: "No PHI moves until the business associate agreement with Bond is signed.{{cite:bond-product}}",
            },
            {
              title: "Confirm product and version",
              text: "NextGen's API documentation covers NextGen Enterprise 5.9.0 and later and NextGen Office 5.0 and later.{{cite:nextgen-regulatory-nge,nextgen-regulatory-ngo}}",
            },
            {
              title: "Grant access",
              text: "On NextGen Enterprise, the practice grants a vendor's API access itself in the NextGen API Client Portal, once a Main Client Community user on the account has given the person doing it portal permission.{{cite:nextgen-api}} On NextGen Office, NextGen onboards the provider API for the vendor and the practice.{{cite:nextgen-regulatory-ngo}}",
            },
            {
              title: "Agree on the population",
              text: "Name the clinics and patient groups the study draws from. On NextGen Office, a bulk export runs against a defined group of patients.{{cite:ngo-bulk-metadata}}",
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
      heading: "How long does the NextGen connection take?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for a full EHR integration is 48 hours, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} In the [implementation plan](/implementation), the security review and the NextGen connection come first, while criteria and outreach scripts are configured in parallel.",
        },
        {
          type: "p",
          text: "On NextGen Office, the request cap shapes the first screen: at 20 requests per minute, chart-by-chart queries across a large panel are slow. The Bulk FHIR API exports a group as one job instead, within NextGen's limit of one request per patient per week.{{cite:nextgen-regulatory-ngo,ngo-bulk-metadata}}",
        },
        {
          type: "callout",
          tone: "warning",
          title: "What moves the date",
          text: "Approvals set the pace: your security review, Client Portal permission on NextGen Enterprise or API onboarding on NextGen Office, and IRB review of outreach scripts where it applies.",
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
            "**Read-only access.** Bond requests read access to the resources above, and your security review approves the list. Both NextGen FHIR servers are read-only for them.{{cite:nge-fhir-metadata,ngo-fhir-metadata}}",
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
      heading: "What is not integrated with NextGen today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Writing to the chart.** Bond does not file notes, orders, flags or research status in NextGen. Both FHIR servers list read and search only.{{cite:nge-fhir-metadata,ngo-fhir-metadata}}",
            "**Running inside NextGen.** Bond does not run as an embedded app in the NextGen screen; coordinators review matches in Bond.",
            "**The NextGen schedule.** Bond books screening visits straight into the site's calendar, not NextGen scheduling.{{cite:bond-site}}",
            "**Portal messaging.** Bond does not message patients through the NextGen patient portal. Outreach is by voice and text through [Engage](/engage).",
            "**Proprietary Enterprise APIs.** Bond connects to NextGen through its FHIR APIs, not NextGen's proprietary Enterprise APIs.{{cite:bond-product}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol, your NextGen product and version, and the name of your NextGen administrator. We will map approvals and dates to your calendar.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does NextGen charge for API access?",
      a: "It depends on the product. On NextGen Enterprise, NextGen states there is no charge for Enterprise API GET routes on certified technology, while its API Distributor Program may carry fees that vary with data scope.{{cite:nextgen-regulatory-nge}} On NextGen Office, it lists $2,400 onboarding and $50 or $100 monthly fees per vendor per practice for its provider APIs.{{cite:nextgen-regulatory-ngo}} Bond charges no integration fee. See [pricing](/pricing).{{cite:bond-site}}",
    },
    {
      q: "Does Bond read free-text notes from NextGen?",
      a: "Yes, through DocumentReference and the DiagnosticReport note profile, for the note types the practice's build returns.{{cite:nge-fhir-metadata,ngo-fhir-metadata}} Each match shows the chart evidence behind each criterion.{{cite:bond-product}}",
    },
    {
      q: "We are a health center on NextGen. Does anything change?",
      a: "No, the steps are the same. NextGen says it serves 300+ FQHCs and community health centers.{{cite:nextgen-about}} See [FQHCs and community sites](/for/fqhcs-and-community-sites).",
    },
    {
      q: "Does Bond use FHIR or an HL7 interface with NextGen?",
      a: "FHIR. Bond connects to NextGen Enterprise and NextGen Office through NextGen's certified FHIR R4 APIs.{{cite:bond-product}}",
    },
  ],
  sources: [
    { id: "bond-site", title: "Bond Health: platform overview, FAQ and pricing", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026" },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
    {
      id: "thoma-bravo-nextgen",
      title: "Thoma Bravo Completes Acquisition of NextGen Healthcare",
      publisher: "Thoma Bravo (press release)",
      url: "https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-nextgen-healthcare",
      year: "2023",
      note: "Dated November 10, 2023; read October 2026. Quote: \"The Company's common stock has ceased trading and will be delisted from Nasdaq.\" Also: \"NextGen Healthcare serves the small practice market with its NextGen® Office SaaS solution.\"",
    },
    {
      id: "nextgen-time-2026",
      title: "NextGen Healthcare Named to TIME's 2026 List of America's Best Private Companies",
      publisher: "NextGen Healthcare (press release)",
      url: "https://www.nextgen.com/company/newsroom/press-release/nextgen-healthcare-named-to-times-2026-list-of-americas-est-private-companies",
      year: "2026",
      note: "Dated July 8, 2026. Quote: \"has been named to TIME's list of America's Best Private Companies 2026.\"",
    },
    {
      id: "nextgen-brand-2026",
      title: "NextGen Healthcare Launches Bold Platform Future with New Brand Identity",
      publisher: "NextGen Healthcare (press release)",
      url: "https://www.nextgen.com/company/newsroom/press-release/NextGen-Healthcare-Launches-Bold-Platform-Future-with-New-Brand-Identity",
      year: "2026",
      note: "Dated April 13, 2026; vendor-reported. Quote: \"more than 8,000 organizations nationwide, representing 100,000 providers across 30 specialties.\"",
    },
    {
      id: "nextgen-about",
      title: "About Us",
      publisher: "NextGen Healthcare",
      url: "https://www.nextgen.com/company/about-us",
      year: "2026",
      note: "Accessed October 2026; vendor-reported. Page statistic: \"300+ FQHC/CHCs served\".",
    },
    {
      id: "onc-nehrs",
      title: "Office-based Physician Electronic Health Record Adoption, 2008-2024 (Appendix Table 2)",
      publisher: "ASTP/ONC, HealthIT.gov data brief 84",
      url: "https://healthit.gov/data/data-briefs/office-based-physician-electronic-health-record-adoption-2008-2024/",
      year: "2026",
      note: "June 2026; 2024 National Electronic Health Record Survey, N = 1,725, weighted percent of all office-based physicians. Quote: \"NextGen Midmarket 4.10%\"",
    },
    {
      id: "definitive-ambulatory",
      title: "Top 10 Ambulatory EHR Vendors",
      publisher: "Definitive Healthcare",
      url: "https://www.definitivehc.com/blog/top-ambulatory-ehr-systems",
      year: "2025",
      note: "Published October 15, 2025; ranked by installations. Table row: \"5 NextGen Healthcare 3,510 4.2%\". Quote: \"Accessed October 2025.\"",
    },
    {
      id: "klas-ambulatory-2025",
      title: "How 6 ambulatory EHR providers stack up",
      publisher: "TechTarget (reporting KLAS Research)",
      url: "https://www.techtarget.com/searchhealthit/news/366626047/How-6-ambulatory-EHR-providers-stack-up",
      year: "2025",
      note: "Published June 24, 2025. Quote: \"NextGen earned a C-minus with 55% of users either satisfied or highly satisfied.\" Also: \"NextGen is known for its customizability and broad integration options\" and \"Vendors in the Complete Looks series averaged a 'C' overall.\"",
    },
    {
      id: "chpl-nge",
      title: "CHPL listing: NextGen Enterprise EHR (15.04.04.2054.Next.80.12.1.250602)",
      publisher: "ASTP/ONC Certified Health IT Product List",
      url: "https://chpl.healthit.gov/#/listing/11645",
      year: "2026",
      note: "Viewed October 2026. Shows \"CERTIFICATION DATE: Jun 2, 2025\", \"VERSION: Enterprise 8\", \"CERTIFICATION STATUS: Active\"; criteria include \"170.315 (g)(10) Standardized API for Patient and Population Services\".",
    },
    {
      id: "chpl-ngo",
      title: "CHPL listing: NextGen Office (15.04.04.2054.Medi.05.00.1.180220)",
      publisher: "ASTP/ONC Certified Health IT Product List",
      url: "https://chpl.healthit.gov/#/listing/9372",
      year: "2026",
      note: "Viewed October 2026. Shows \"CERTIFICATION DATE: Feb 20, 2018\", \"VERSION: Version 5.0\", \"CERTIFICATION STATUS: Active\"; criteria include 170.315 (g)(10).",
    },
    {
      id: "nextgen-api",
      title: "Public API Documentation for NextGen Healthcare Certified Health IT Solutions",
      publisher: "NextGen Healthcare",
      url: "https://www.nextgen.com/api",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Comprised of an extensive collection of JSON-based RESTful APIs (800+ routes), Enterprise APIs power the category of apps that are used by provider organizations\". Also: \"FHIR APIs may also be used for NGE Client-Facing applications.\" And: \"Clients who have adopted an API-powered app from a 3rd party vendor ... can now independently grant & manage access on a self-service basis using the NextGen API Client Portal.\" And: \"Access to the API Client Portal itself requires additional permission from a Main Client Community user for your account\".",
    },
    {
      id: "nextgen-regulatory-nge",
      title: "APIs for NextGen Enterprise 5.9.0+: Section 170.404 Regulatory Information",
      publisher: "NextGen Healthcare",
      url: "https://www.nextgen.com/api/regulatory-nge",
      year: "2026",
      note: "Accessed October 2026. Quote: \"Participation in the API Distributor Program is limited to 3rd Party Vendors and requires execution of an API Terms of Service Agreement\". Also: \"There is no charge for usage of NextGen Enterprise API GET routes for certified technology.\" And: \"The Global Service Account (\"GSA\") is the only Enterprise API authentication model that enables applications to use NextGen Enterprise APIs without requiring a NextGen Enterprise User to launch the application from within NGE.\"",
    },
    {
      id: "nextgen-regulatory-ngo",
      title: "APIs for NextGen Office 5.0+: Section 170.404 Regulatory Information",
      publisher: "NextGen Healthcare",
      url: "https://www.nextgen.com/api/regulatory-ngo",
      year: "2026",
      note: "Accessed October 2026. Quote: \"The following fees apply for additional API services per vendor per practice: Onboarding Fees (One-time): NextGen Office Smart App Launch API - $2,400 NextGen Office Bulk FHIR API - $2,400 Monthly Recurring Maintenance Fees: NextGen Office Smart App Launch API - $50/month NextGen Office Bulk FHIR API - $100/month\". Also: \"A maximum of 20 requests per minute is allowed from the same IP address.\" And: \"One request per patient per week is permitted for bulk data access.\"",
    },
    {
      id: "nge-fhir-metadata",
      title: "NextGen Enterprise FHIR R4 CapabilityStatement (production /metadata)",
      publisher: "NextGen Healthcare",
      url: "https://fhir.nextgen.com/nge/prod/fhir-api-r4/fhir/r4/metadata",
      year: "2026",
      note: "Retrieved October 5, 2026. fhirVersion 4.0.1; instantiates the US Core server CapabilityStatement; 28 resource types, each read and search-type only; no Appointment; no bulk operation. Quote: \"description\": \"This FHIR SERVER is a Nextgen's implementation of US Core Profile\"",
    },
    {
      id: "nge-fhir-r4-routes",
      title: "NGE FHIR R4: route-level documentation",
      publisher: "NextGen Healthcare",
      url: "https://www.nextgen.com/api/nge-fhir-r4",
      year: "2026",
      note: "Accessed October 2026. The page loads a Swagger file titled \"R4 Fhir\" whose 40 paths are resource read and search routes, such as \"/DocumentReference/{id}\", plus \"/metadata\"; none is a bulk export route.",
    },
    {
      id: "ngo-fhir-metadata",
      title: "NextGen Office FHIR R4 CapabilityStatement (production /metadata)",
      publisher: "NextGen Healthcare",
      url: "https://fhir.meditouchehr.com/api/fhir/r4/metadata",
      year: "2026",
      note: "Retrieved October 5, 2026. fhirVersion 4.0.1; instantiates the US Core server CapabilityStatement; 26 resource types with read or search-type only, including MedicationAdministration; no Appointment. Quote: \"url\": \"https://fhir.meditouchehr.com/api/fhir/r4\"",
    },
    {
      id: "ngo-bulk-metadata",
      title: "NextGen Office Bulk FHIR R4 CapabilityStatement (production /metadata)",
      publisher: "NextGen Healthcare",
      url: "https://fhir.meditouchehr.com/api/bulkfhir/r4/metadata",
      year: "2026",
      note: "Retrieved October 5, 2026. Instantiates the Bulk Data CapabilityStatement; Group and Patient declare the export operation. Quote: \"name\": \"NGO Bulk FHIR Server\"",
    },
  ],
  related: [
    { label: "Integrations", href: "/integrations", description: "The EHRs and research systems Bond connects to, and what each needs." },
    { label: "Implementation", href: "/implementation", description: "Where the NextGen connection sits in the 48-hour plan." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads NextGen charts against each criterion and explains matches." },
    { label: "Security", href: "/security", description: "BAAs, encryption and compliance status." },
    { label: "Physician groups", href: "/for/physician-groups", description: "Running studies from an ambulatory practice's own patient panel." },
    { label: "athenahealth integration", href: "/integrations/athenahealth", description: "The same FHIR-based path for another ambulatory EHR." },
  ],
};

export default page;
