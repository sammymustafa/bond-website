import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/oracle-cerner",
  category: "integration",
  title: "Cerner/Oracle Health FHIR integration for trial recruitment",
  description:
    "How Bond connects to Cerner (Oracle Health) Millennium over FHIR R4 for trial recruitment: the data it reads, site IT tasks, the timeline, and current limits.",
  keywords: [
    "Cerner clinical trial recruitment integration",
    "Oracle Health FHIR API clinical trials",
    "Millennium FHIR R4 patient matching",
    "Oracle Patient Recruitment Cloud Service",
  ],
  eyebrow: "EHR integration",
  h1: "Connecting Bond to Oracle Health (Cerner) for trial recruitment",
  intro:
    "Oracle Health, formerly Cerner, was the EHR vendor for 21.9 percent of US acute care hospitals at the end of 2025, second only to Epic, according to KLAS.{{cite:klas-2026-hsc}} Bond Health connects to its Millennium platform via FHIR R4 APIs, HL7 v2 where applicable, or an integration partner, and reads structured data and clinical notes against a study's criteria.{{cite:bond-site}} This page covers the data, the site's tasks, the [implementation](/implementation) timeline and what is not integrated today.",
  summary: "What Bond reads from Oracle Health Millennium, what site IT does, and how it differs from Oracle Patient Recruitment.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "what-is-oracle-health",
      heading: "What is Oracle Health Millennium, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "Oracle agreed to buy Cerner in December 2021,{{cite:oracle-buys-cerner}} and the business now operates as Oracle Health. Its hospital EHR runs on the Millennium platform, which clinicians work in through PowerChart. KLAS now lists the product as Oracle Health Foundation EHR (formerly Millennium PowerChart).{{cite:klas-naming}}",
        },
        {
          type: "stats",
          items: [
            { value: "21.9%", label: "US acute care hospitals, end of 2025 (KLAS)", cite: "klas-2026-hsc" },
            { value: "20.4%", label: "US acute care beds, end of 2025 (KLAS)", cite: "klas-2026-hsc" },
            { value: "2,000+", label: "US hospitals of all types with a Cerner EHR, February 2025 (Definitive)", cite: "definitive-oracle" },
          ],
        },
        {
          type: "p",
          text: "KLAS also reports that Oracle Health had a net loss of 56 hospitals in 2025, its third straight year of net losses, and that nearly one-third of customers it sampled said Oracle Health is not part of their long-term plans.{{cite:klas-2026-hit}}",
        },
      ],
    },
    {
      id: "data-and-apis",
      heading: "What data does Bond read from Millennium, and through which APIs?",
      blocks: [
        {
          type: "p",
          text: "As of September 2026, Oracle documents HL7 FHIR R4 (4.0.1) APIs for Millennium, secured with OAuth 2.0 and SMART on FHIR, with patient, user and system scopes.{{cite:oracle-r4-overview}} Oracle no longer supports the older DSTU 2 APIs and tells developers to move to R4.{{cite:oracle-api-index}} An app that screens records in the background, with no clinician logged in, uses system scopes. What Bond does with the records is covered under [Identify](/identify).",
        },
        {
          type: "table",
          caption: "Data used for screening and the Millennium resource that carries it",
          columns: ["Data element", "FHIR resource or interface", "Notes"],
          rows: [
            ["Age, sex, contact details", "`Patient`", "Phone number supports outreach the site approves through [Engage](/engage)"],
            ["Diagnoses and problem list", "`Condition`", "Onset and resolution dates matter for time-bound criteria"],
            ["Medications", "`MedicationRequest`, `MedicationAdministration`", "Current and past therapy for washout and prior-treatment criteria"],
            ["Labs and vitals", "`Observation`", "Values, units and dates for threshold criteria"],
            ["Procedures", "`Procedure`", "Prior surgery and treatment exclusions"],
            ["Clinical notes", "`DocumentReference`, then `Binary`", "Note text needs the `Binary.read` scope as well as `DocumentReference.read`"],
            ["Reports", "`DocumentReference`, `DiagnosticReport`", "Search covers cardiology, radiology, microbiology and pathology documents"],
            ["Visits and appointments", "`Encounter`, `Appointment`", "Care setting, visit history and upcoming visits"],
          ],
          note: "Every resource listed is named in Oracle's Millennium R4 documentation.{{cite:oracle-r4-overview,oracle-docref,oracle-binary}} Screening needs read scopes only, and the site's security reviewer sees the full scope list.",
        },
        {
          type: "p",
          text: "Two Millennium details shape the setup. Bulk export works per group or per listed patient, not across all patients: the health system manages groups in Ignite Management Tooling, and a patient export needs a list of patient IDs.{{cite:oracle-bulk}} Oracle also enforces rate limits that vary by customer based on agreed usage levels, and returns HTTP 429 when they are exceeded.{{cite:oracle-faq}}",
        },
      ],
    },
    {
      id: "site-tasks",
      heading: "What does the site's IT or Oracle team have to do?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Name owners and confirm hosting",
              text: "Oracle's provisioning steps differ for remote-hosted (RHO), customer-hosted (CHO) and Global domains. RHO sites request a tenant ID from Oracle Health Hosting; CHO sites find theirs in Cerner Central.{{cite:oracle-app-provisioning}}",
            },
            {
              title: "Approve the scopes",
              text: "The site's security reviewer checks the scope list, the BAA and audit logging.",
            },
            {
              title: "Log the service request",
              text: "The app developer (Bond, or the integration partner if the site uses one) gives the site a production application ID and client ID. The site logs a service request to Cerner Ignite APIs for Millennium to provision them on its tenant and, if applicable, completes a Process for Executing Client Approval (PECA) form.{{cite:oracle-app-provisioning}}",
            },
            {
              title: "Confirm usage levels and the population",
              text: "IT confirms the agreed usage level and names the clinics or patient groups in scope, so screening runs within the rate limit.{{cite:oracle-faq}}",
            },
            {
              title: "Adjudicate a validation sample",
              text: "The coordinator and PI review a sample of criterion decisions before go-live. See [how we validate eligibility logic](/blog/validating-eligibility-logic-before-go-live).",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Oracle partner programs are optional",
          text: "Oracle's developer page, as of September 2026, lists Oracle PartnerNetwork membership, Oracle Validated Integration and Millennium environment access as paid services and says they are not required to develop and deploy apps.{{cite:oracle-developer-api}} A site does not need them to connect Bond.",
        },
      ],
    },
    {
      id: "timeline",
      heading: "Where does the Oracle Health work fit in the implementation?",
      blocks: [
        {
          type: "table",
          caption: "Oracle Health steps inside a full EHR-integrated deployment",
          columns: ["When", "Step", "Owner"],
          rows: [
            ["Week 1", "Kickoff, BAA, owners named, hosting type confirmed", "Site and Bond"],
            ["Weeks 1 to 3", "Security review and scope approval", "Site security"],
            ["Weeks 2 to 3", "Tenant ID, service request, usage levels confirmed", "Site Oracle team with Oracle Health"],
            ["Weeks 2 to 4", "Criteria checked against live records", "Coordinator, PI and Bond"],
            ["Weeks 5 to 6", "Go-live within the agreed usage level", "Site and Bond"],
          ],
          note: "A full EHR-integrated deployment takes 4 to 6 weeks, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} Oracle, not the site or Bond, completes the service request, so the site logs it as soon as the security review allows.",
        },
      ],
    },
    {
      id: "oracle-patient-recruitment",
      heading: "How is Bond different from Oracle Patient Recruitment?",
      blocks: [
        {
          type: "p",
          text: "On October 29, 2024, Oracle Life Sciences announced Oracle Site Feasibility and Oracle Patient Recruitment Cloud Services. Per that announcement, Patient Recruitment uses Health Data Intelligence to surface data directly from the EHR and identify eligible and partially eligible patients within a health system. It also shows study teams upcoming and past appointments.{{cite:oracle-prc}}",
        },
        {
          type: "table",
          caption: "Scope compared, based on Oracle's October 2024 announcement (checked September 2026)",
          columns: ["Question", "Oracle Patient Recruitment", "Bond"],
          rows: [
            ["Who it is for", "Life sciences customers", "Research sites, site networks, CROs and sponsors"],
            ["Data path", "Health Data Intelligence, surfacing data directly from the EHR", "The site's EHR via FHIR R4, HL7 v2 or an integration partner"],
            ["Output for the study team", "Eligibility score and reasons a patient qualifies or falls short", "Ranked candidates with criterion-to-evidence rationale"],
            ["Patient contact", "Not described in the announcement", "Voice and SMS pre-screening and scheduling, with AI disclosure and a live transfer or human callback on request{{cite:bond-product}}"],
            ["Consent", "Not described in the announcement", "Plain-language consent support; the site obtains consent"],
          ],
          note: "Differences are in scope, not performance. Oracle's current offering may go beyond its announcement.{{cite:oracle-prc,bond-site}}",
        },
      ],
    },
    {
      id: "security",
      heading: "How is patient data protected on this connection?",
      blocks: [
        {
          type: "p",
          text: "The site controls access on both sides. On the Oracle side, the site provisions the app on its own tenant, and the separate `Binary.read` scope shows a reviewer whether note text is included.{{cite:oracle-app-provisioning,oracle-binary}} On the Bond side:",
        },
        {
          type: "ul",
          items: [
            "Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}}",
            "A BAA is signed before any PHI moves.{{cite:bond-site}}",
            "Data is encrypted in transit and at rest.{{cite:bond-site}}",
            "Access is role-based, with SSO support.{{cite:bond-site}}",
            "Screening decisions, outreach and consent-support activity are recorded in an audit trail.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "The [security](/security) page covers subprocessors, the Trust Center and what Bond does not claim.",
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Oracle programs.** Bond holds no Oracle certification, Oracle Validated Integration or partner listing. It connects as an app the site provisions on its own Millennium domain.",
            "**Oracle Life Sciences services.** Bond does not exchange data with Oracle Patient Recruitment, Site Feasibility or Health Data Intelligence. It reads the site's own records under the BAA with the site.",
            "**Writing to the chart.** Bond does not write notes, orders or research flags into PowerChart. Matches, call outcomes and consent-support activity appear in Bond's dashboard and can be sent to the site's CTMS, Google Sheets or calendar.",
            "**Oracle's new EHR.** Oracle's new AI-powered EHR received ONC Health IT certification in November 2025. At that point it was available only to ambulatory providers, and Oracle planned to add acute care functionality in 2026.{{cite:advisory-oracle-ehr}} This page covers Millennium; sites on the new platform should raise it during scoping.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring your Oracle Health contact and one protocol. We will walk through the scope list and the service request together.",
          secondaryLabel: "All integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Bond work with Cerner PowerChart?",
      a: "Yes. Bond connects to Millennium, the platform behind PowerChart, via FHIR R4 APIs, HL7 v2 where applicable, or an integration partner.{{cite:bond-site}}",
    },
    {
      q: "How long does the Oracle Health connection take?",
      a: "A full EHR-integrated deployment takes 4 to 6 weeks, depending on the EHR, the IT review and the interface method. A pilot without EHR integration, such as outreach to a list the site provides, can be set up in under 2 weeks.{{cite:bond-site}}",
    },
    {
      q: "What happens if our health system moves off Oracle Health?",
      a: "Study criteria, outreach scripts and workflows are configured in Bond, not in the EHR, so they carry over. The EHR connection is rebuilt on the new system's FHIR API and goes through security review again.",
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
      publisher: "healthsystemCIO (reporting KLAS Research, US Acute Care EHR Market Share 2026)",
      url: "https://healthsystemcio.com/2026/05/14/acute-care-ehr-market-share-2026/",
      year: "2026",
      note: "US acute care hospitals, year-end 2025. Quote: \"Oracle Health, meanwhile, sits second at 21.9% of hospitals and 20.4% of beds\"",
    },
    {
      id: "klas-2026-hit",
      title: "KLAS 2026 EHR Market Share Report: Epic Gains as Oracle Health Faces Third Year of Losses",
      publisher: "HIT Consultant (reporting KLAS Research)",
      url: "https://hitconsultant.net/2026/05/14/klas-2026-ehr-market-share-report/",
      year: "2026",
      note: "Quote: \"Oracle Health saw its third consecutive year of major net losses, losing 56 hospitals and 14,676 beds.\" and \"Nearly one-third of sampled customers report that Oracle Health is not part of their long-term plans.\"",
    },
    {
      id: "klas-naming",
      title: "KLAS Research search results: acute care EHR market share",
      publisher: "KLAS Research",
      url: "https://klasresearch.com/search?q=acute+care+ehr+market+share+2026",
      year: "2026",
      note: "Quote: \"Oracle Health Foundation EHR (formerly Millennium PowerChart)/CommunityWorks Clinicals\"",
    },
    {
      id: "definitive-oracle",
      title: "10 Leading Hospitals Using Oracle Cerner's EHR",
      publisher: "Definitive Healthcare",
      url: "https://www.definitivehc.com/resources/healthcare-insights/top-10-hospitals-using-oracle-cerners-ehr",
      year: "2025",
      note: "Published February 18, 2025. Counts hospitals of all types, so it is not directly comparable with KLAS acute care figures. Quote: \"As of February 2025, more than 2,000 hospitals recorded Cerner Oracle EMR implementations\"",
    },
    {
      id: "oracle-buys-cerner",
      title: "Oracle Buys Cerner",
      publisher: "Oracle",
      url: "https://www.oracle.com/news/announcement/oracle-buys-cerner-2021-12-20/",
      year: "2021",
      note: "December 20, 2021. Quote: \"Oracle Corporation (NYSE: ORCL) and Cerner Corporation today jointly announced an agreement for Oracle to acquire Cerner\"",
    },
    {
      id: "oracle-r4-overview",
      title: "FHIR R4 APIs for Oracle Health Millennium Platform: R4 Overview",
      publisher: "Oracle Help Center",
      url: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/r4_overview.html",
      year: "2026",
      note: "Accessed September 2026. Quote: \"This topic describes the R4 (4.0.1) specification.\" and \"An endpoint secured with OAuth 2.0 is available with support for SMART Applications.\" The page lists patient, user and system scopes and names Patient, Condition, MedicationRequest, MedicationAdministration, Observation, Procedure, Encounter, Appointment, DocumentReference, DiagnosticReport and Binary.",
    },
    {
      id: "oracle-api-index",
      title: "Oracle Health Millennium Platform: Get Started",
      publisher: "Oracle Help Center",
      url: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/index.html",
      year: "2026",
      note: "Quote: \"Oracle no longer supports DSTU 2 FHIR APIs. ... This functionality is replaced by the R4 version. Update your applications to use R4 as soon as possible\"",
    },
    {
      id: "oracle-docref",
      title: "FHIR R4 APIs for Oracle Health Millennium Platform: Get a list of document references",
      publisher: "Oracle Help Center",
      url: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/op-documentreference-get.html",
      year: "2026",
      note: "Quote: \"The search operation is supported for clinical-note, cardiology, radiology, microbiology, and pathology charted documents and clinical-note staged documents.\"",
    },
    {
      id: "oracle-binary",
      title: "FHIR R4 APIs for Oracle Health Millennium Platform: Get a binary document by ID",
      publisher: "Oracle Help Center",
      url: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/op-binary-id-get.html",
      year: "2026",
      note: "Quote: \"The Binary.read scope is required in addition to one of the following scopes: Communication.read, DiagnosticReport.read, or DocumentReference.read.\"",
    },
    {
      id: "oracle-bulk",
      title: "FHIR R4 APIs with Bulk Data Access",
      publisher: "Oracle Help Center",
      url: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfbda/bulk_data_access.html",
      year: "2026",
      note: "Quote: \"The Patient Export operation does not support an export of all patients. A list of patients IDs must be provided in the request.\" and \"Organizations can manage groups in Ignite Management Tooling.\"",
    },
    {
      id: "oracle-faq",
      title: "FAQs and Common Issues (Oracle Health Millennium Platform APIs)",
      publisher: "Oracle Help Center",
      url: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/fhir-faqs-common-issues/",
      year: "2026",
      note: "Quote: \"Rate limits vary between customers based on agreed usage levels.\" and \"If you exceed the rate limit, you receive a 429 (Too Many Requests) status code.\"",
    },
    {
      id: "oracle-app-provisioning",
      title: "FHIR Application Provisioning",
      publisher: "Oracle Help Center",
      url: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/fhir-app-provisioning/",
      year: "2026",
      note: "Quote: \"The customer logs an SR to Cerner Ignite APIs for Millennium for provisioning.\" RHO and Global customers request a tenant ID from Oracle Health Hosting; CHO customers find it in Cerner Central. In production, \"If applicable, the customer completes a Process for Executing Client Approval (PECA) form.\"",
    },
    {
      id: "oracle-developer-api",
      title: "API Access and Fees and Registering an App",
      publisher: "Oracle Health",
      url: "https://www.oracle.com/health/developer/api/",
      year: "2026",
      note: "Quote: \"Oracle Health offers value-added services to developers through the Oracle PartnerNetwork. These services are not required to develop and deploy apps.\"",
    },
    {
      id: "oracle-prc",
      title: "New Oracle Cloud Services Help Pharmas Accelerate Clinical Trial Site Feasibility Assessment and Patient Recruitment",
      publisher: "Oracle via PR Newswire",
      url: "https://www.prnewswire.com/news-releases/new-oracle-cloud-services-help-pharmas-accelerate-clinical-trial-site-feasibility-assessment-and-patient-recruitment-302289032.html",
      year: "2024",
      note: "October 29, 2024. Quote: \"It uses Health Data Intelligence (HDI) as its underlying technology infrastructure to surface data directly from the EHR and identify eligible and partially eligible patients for potential trial participation.\" and \"Oracle Patient Recruitment calculates an eligibility score for qualified patients and provides important insights to the study team about why a patient qualifies for a trial or where they may fall short.\" Availability: \"available globally for life sciences customers\".",
    },
    {
      id: "advisory-oracle-ehr",
      title: "Oracle's AI-powered EHR is here: What to know",
      publisher: "Advisory Board (Daily Briefing)",
      url: "https://www.advisory.com/daily-briefing/2025/11/20/oracle-ehr",
      year: "2025",
      note: "November 20, 2025. Quote: \"Currently, Oracle's new EHR is only available for ambulatory providers\" and \"The company plans to add acute care functionality in 2026 to support more healthcare settings and clinical needs.\"",
    },
  ],
  related: [
    { label: "Implementation", href: "/implementation", description: "The full deployment plan, week by week." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "What Bond does with the records it reads." },
    { label: "Security", href: "/security", description: "The BAA, encryption, access control and audit logging." },
    { label: "All integrations", href: "/integrations", description: "Other EHRs and the research systems Bond works alongside." },
    { label: "Epic integration", href: "/integrations/epic", description: "The same questions answered for Epic sites." },
  ],
};

export default page;
