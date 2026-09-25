import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/advarra-clinical-conductor",
  category: "integration",
  title: "Advarra Clinical Conductor CTMS integration for recruitment",
  description:
    "How Bond works alongside Advarra Clinical Conductor and OnCore: referral and pre-screen handoff, API and export options, IT tasks, timeline and current limits.",
  keywords: [
    "Advarra Clinical Conductor CTMS integration",
    "Clinical Conductor patient recruitment",
    "OnCore CTMS recruitment",
    "CTMS pre-screening log",
    "CTMS referral source tracking",
  ],
  eyebrow: "Integration",
  h1: "Using Bond alongside Advarra Clinical Conductor and OnCore",
  intro:
    "Clinical Conductor is the CTMS Advarra sells to growing research sites and site networks, and OnCore is its CTMS for academic medical centers and cancer centers.{{cite:advarra-cc,advarra-oncore}} Bond Health works alongside both: it finds and pre-screens candidates from the EHR, sends referrals to the CTMS by API or file export, and reads enrollment status back.",
  summary: "How referrals, pre-screen outcomes and enrollment status move between Bond and Advarra's CTMS products.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "what-are-clinical-conductor-and-oncore",
      heading: "What are Clinical Conductor and OnCore, and who uses them?",
      blocks: [
        {
          type: "p",
          text: "Advarra bought Bio-Optronics, the maker of Clinical Conductor, in March 2021, adding site networks, health systems and commercial sites to the academic and cancer centers it served through OnCore.{{cite:advarra-bio-optronics}} Advarra says OnCore typically serves academic medical centers, cancer centers and some health systems running 50 to 500+ active trials.{{cite:advarra-oncore}}",
        },
        {
          type: "stats",
          items: [
            { value: "300+", label: "Enterprise research sites using Advarra site technology, per Advarra (November 2025)", cite: "advarra-ignitedata" },
            { value: "90 of 125", label: "Top academic medical centers using Advarra site technology, per Advarra (November 2025)", cite: "advarra-ignitedata" },
            { value: "50 to 500+", label: "Active trials at a typical OnCore customer, per Advarra", cite: "advarra-oncore" },
          ],
        },
        {
          type: "p",
          text: "The first two figures are Advarra's own and cover all its site products, not only the CTMS.{{cite:advarra-ignitedata}} Clinical Conductor has its own recruitment tools: enrollment tracking, outreach by text, email and phone, and CCText two-way texting.{{cite:advarra-cc,softwareone-cc}} As of September 2026, neither the Clinical Conductor nor the OnCore product page describes screening EHR records against eligibility criteria.{{cite:advarra-cc,advarra-oncore}} That is the step Bond adds.",
        },
      ],
    },
    {
      id: "how-bond-fits",
      heading: "How does Bond fit into a Clinical Conductor workflow?",
      blocks: [
        {
          type: "p",
          text: "The [CTMS](/glossary/ctms) stays the system of record for studies, subjects, visits and finances. Bond works before a patient becomes a subject: [EHR screening](/identify), then outreach, [pre-screening](/glossary/pre-screening) and scheduling by voice and text through [Engage](/engage).{{cite:bond-site}} Three records carry the handoff.",
        },
        {
          type: "ul",
          items: [
            "**Pre-screening log.** One row per candidate: date, study, outcome and, for a fail, the criterion that ruled the patient out.",
            "**Referral source.** Each referral is tagged with its source and outreach channel, so the site's CTMS reports can show which sources lead to randomized patients.",
            "**Enrollment status.** Consented, screen-failed and randomized statuses come back from the CTMS by API or export. Bond counts a patient as enrolled once randomized, the basis of its success fee.{{cite:bond-site}}",
          ],
        },
      ],
    },
    {
      id: "data-elements",
      heading: "What data moves between Bond and the CTMS?",
      blocks: [
        {
          type: "p",
          text: "Bond reads the chart from the EHR over FHIR R4, HL7 v2 or an aggregator, as the [Epic](/integrations/epic) and [Oracle Health](/integrations/oracle-cerner) pages describe.{{cite:bond-site}} The CTMS link carries recruitment records only.",
        },
        {
          type: "table",
          caption: "Data exchanged between Bond and Clinical Conductor or OnCore",
          columns: ["Data element", "FHIR resource or interface", "Notes"],
          rows: [
            ["Chart data for screening", "From the EHR: FHIR R4 resources such as Condition, Observation and MedicationRequest, or HL7 v2", "Read from the EHR, not from the CTMS."],
            ["Candidate demographics and contact", "From the EHR: FHIR Patient. To the CTMS: API, or entry from a Bond export", "The site decides which candidates are sent, usually after coordinator review."],
            ["Study identifier", "Mapping table set at kickoff", "Links each Bond study to its CTMS protocol record."],
            ["Pre-screening outcome", "CTMS API or scheduled CSV export", "Pass, fail or pending, with the failing criterion."],
            ["Referral source and channel", "CTMS API or scheduled CSV export", "Values agreed with the site, such as \"Bond EHR screen, voice\"."],
            ["Screening visit", "Site calendar; CTMS visit by API where the site enables it", "Bond books into the coordinators' calendar."],
            ["Enrollment status", "CTMS API or status report export, back to Bond", "Consented, screen-failed, randomized or withdrawn."],
            ["Research flag in the EHR", "CTMS to EHR through the IHE RPE profile", "Advarra's own Subject/Protocol Information (EMR) interface, not Bond's.{{cite:advarra-cc,advarra-integrations-blog}}"],
          ],
          note: "Field names and writable records vary by site configuration and are confirmed in test.",
        },
      ],
    },
    {
      id: "integration-options",
      heading: "Which integration options are available?",
      blocks: [
        {
          type: "p",
          text: "Advarra's listing on the SoftwareOne Marketplace says customers can use Clinical Conductor's API to connect with other platforms.{{cite:softwareone-cc}} In March 2022 Devana Solutions announced a two-way API integration with Clinical Conductor after site networks Javara Research and Velocity Clinical Research encouraged one.{{cite:devana-2022}} Advarra says OnCore also provides an API for other applications.{{cite:advarra-oncore}} Bond uses these APIs only with access the site arranges under its own Advarra agreement.",
        },
        {
          type: "ol",
          items: [
            "**API.** Where the site's access allows, Bond writes referrals and pre-screen outcomes to the CTMS and reads status back on a schedule.",
            "**File export.** Bond sends a scheduled CSV of the pre-screening log and referrals for the CTMS administrator to load, and reads a status export back.",
            "**Shared sheet.** For a pilot, Bond writes to a Google Sheet the coordinators update.{{cite:bond-site}}",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Works alongside, not certified",
          text: "Bond is not certified by Advarra and is not an Advarra partner. As of September 2026, Clinical Conductor's product page lists no third-party recruitment platform among its integrations.{{cite:advarra-cc}}",
        },
      ],
    },
    {
      id: "site-tasks",
      heading: "What does the site's CTMS or IT team need to do?",
      blocks: [
        {
          type: "p",
          text: "Bond configures its side. The site's CTMS administrator or IT team owns these steps.",
        },
        {
          type: "checklist",
          items: [
            "Check whether API access is part of the site's Advarra agreement.",
            "Choose API, file export, or a shared sheet for a pilot.",
            "For the API, request credentials limited to the records Bond needs.",
            "Agree referral source values and the status list.",
            "Map each Bond study to its CTMS protocol record.",
            "Complete the security review and sign the business associate agreement.",
          ],
        },
        {
          type: "p",
          text: "On a network-wide Clinical Conductor instance, this is usually done once. Each new study adds only its mapping.",
        },
      ],
    },
    {
      id: "timeline",
      heading: "Where does the CTMS link fit in the 4 to 6 week implementation?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for full EHR integration is 4 to 6 weeks, depending on the EHR, IT review and interface method.{{cite:bond-site}} The CTMS link is smaller work that runs in parallel within the [implementation plan](/implementation).",
        },
        {
          type: "steps",
          items: [
            { title: "Week 1: kickoff and BAA", text: "Bond signs the BAA and lists the CTMS data it sends and reads." },
            { title: "Weeks 1 to 3: path and access", text: "The site picks API or export and requests access if needed." },
            { title: "Weeks 2 to 4: test", text: "Test referrals go to a test study or export, and coordinators check them." },
            { title: "Weeks 5 to 6: go-live", text: "Referrals flow on schedule and status returns to the dashboard.{{cite:bond-site}}" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "If API access takes longer",
          text: "Start with the file export. A pilot without EHR integration can start from a patient list after a setup of under 2 weeks.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "security",
      heading: "How is recruitment data protected between Bond and the CTMS?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Agreements first.** No PHI moves until the business associate agreement is signed.",
            "**Minimum necessary.** The site and Bond agree which fields go to the CTMS. Log rows for patients not referred can omit contact details.",
            "**Scoped credentials.** API access belongs to the site, which can revoke it.",
            "**Controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its controls include encryption in transit and at rest (AES-256 where applicable), role-based access, SSO support, audit logging and penetration testing, documented in Bond's Trust Center.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "Details are on the [security](/security) page.",
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with Clinical Conductor or OnCore today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**No Advarra partner listing.** Advarra's Study Collaboration partner network, expanded in December 2025, gives sites single sign-on to tools such as EDC and eCOA.{{cite:advarra-study-collab}} Bond is not in it.",
            "**No app inside the CTMS.** Coordinators review matches in Bond's dashboard.",
            "**No CCText link.** Bond's outreach runs from Bond. Sites using CCText too decide which channel contacts whom, to avoid duplicate messages.",
            "**No finance data.** Bond does not read or write budgets, stipends or billing grids.",
            "**No eReg filing.** Bond supports the [consent](/consent) conversation. The site files signed forms.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your CTMS setup. We will map the handoff with your CTMS contact.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a certified Advarra or Clinical Conductor partner?",
      a: "No. Bond works alongside Clinical Conductor and OnCore through the site's own API access or file exports. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.",
    },
    {
      q: "Does Bond replace Clinical Conductor's recruitment tools?",
      a: "No. Clinical Conductor supports outreach by text, email and phone for screening and enrollment.{{cite:advarra-cc}} Bond adds the step before: screening EHR records against the protocol and handing pre-screened referrals to the CTMS.",
    },
    {
      q: "Can enrollment status flow back from Clinical Conductor to Bond?",
      a: "Yes, through the API where the site has access, or a scheduled status export.",
    },
    {
      q: "Does the same approach work with OnCore?",
      a: "Yes. Advarra says OnCore provides an API, and OnCore's own EMR interfaces with Epic and Cerner carry subject, protocol and billing data.{{cite:advarra-oncore}} Bond reads the EHR separately over FHIR and sends referrals to OnCore by API or export.",
    },
    {
      q: "How long does the CTMS connection take?",
      a: "It runs inside the 4 to 6 week full EHR integration.{{cite:bond-site}} A list-based pilot can start sooner, with referrals sent by file export.",
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
      id: "advarra-cc",
      title: "Clinical Conductor Clinical Trial Management System (CTMS)",
      publisher: "Advarra",
      url: "https://www.advarra.com/solutions/sites/ctms/clinical-conductor/",
      year: "2026",
      note: "Vendor product page, accessed September 2026. Quote: \"Clinical Conductor by Advarra is the CTMS growing research sites and networks count on to scale their footprint and efficiently manage clinical research operations and financials.\" Also: \"Reach prospective participants through text, email, and phone communications to support patient screening and enrollment across studies.\" And: \"CCText is the only CTMS-embedded, two-way text messaging solution designed to meet the centralized oversight needs of health systems, hospitals, site networks, and individual sites engaged in clinical research.\" (vendor claim). Enterprise integrations listed: eIRB (via OnCore API), CRPC Billing Grid (EMR), Demographics (EMR), Subject/Protocol Information (EMR), general ledger, Clinical Conductor Analytics, Advarra Payments.",
    },
    {
      id: "advarra-oncore",
      title: "OnCore Clinical Trial Management System (CTMS)",
      publisher: "Advarra",
      url: "https://www.advarra.com/solutions/sites/ctms/oncore/",
      year: "2026",
      note: "Vendor product page, accessed September 2026. Quote: \"OnCore typically addresses the needs of academic medical centers and cancer centers, as well as some health systems, conducting fifty to 500+ active trials.\" Also: \"OnCore also provides an API to interface with your applications, including your eIRB system.\" And: \"Connect subject, protocol, and billing data through deep EMR integration with widely used EMR systems, including Epic and Cerner.\"",
    },
    {
      id: "softwareone-cc",
      title: "Clinical Conductor by Advarra",
      publisher: "SoftwareOne Marketplace (Advarra vendor listing)",
      url: "https://platform.softwareone.com/product/clinical-conductor/PCP-3653-6205",
      year: "2026",
      note: "Quote: \"Integrate with Advarra eReg or eSource + EDC, or use Clinical Conductor's API to connect with other platforms throughout your organization.\" Also: \"Use patient recruitment and enrollment tools to optimize your recruitment tasks, track progress in detail, and reach more participants in less time.\"",
    },
    {
      id: "devana-2022",
      title: "Devana Solutions Connects Research Operations and Business Intelligence at Scale with Clinical Conductor Integration",
      publisher: "PRWeb (Devana Solutions)",
      url: "https://www.prweb.com/releases/devana-solutions-connects-research-operations-and-business-intelligence-at-scale-with-clinical-conductor-integration-837428512.html",
      year: "2022",
      note: "Press release, March 10, 2022. Quote: \"The Devana - Advarra integration is a dynamic, bi-directional data and process flow between Devana's IGNITE and PROPEL products, and Advarra's industry-leading Clinical Conductor CTMS.\" Also: \"When the leadership at highly-valued client-partners, Javara Research and Velocity Clinical Research, encouraged an API-integration with Advarra's Clinical Conductor CTMS to better support their study teams, we were eager to explore it.\"",
    },
    {
      id: "advarra-ignitedata",
      title: "Advarra and IgniteData Announce Partnership to Simplify Clinical Trial Data Transfer for Research Sites",
      publisher: "PR Newswire (Advarra)",
      url: "https://www.prnewswire.com/news-releases/advarra-and-ignitedata-announce-partnership-to-simplify-clinical-trial-data-transfer-for-research-sites-302612178.html",
      year: "2025",
      note: "Press release, November 12, 2025. Statement by Scott Uebele, Advarra COO. Quote: \"With 90 of the top 125 academic medical centers, 90% of NCI-Designated Cancer Centers, and over 300 enterprise research sites\" using Advarra's site technology, which the statement says includes OnCore CTMS, Clinical Conductor CTMS, eReg, eSource and EDC. Vendor-reported; the basis of the top 125 ranking is not stated.",
    },
    {
      id: "advarra-integrations-blog",
      title: "4 Key Integrations for Your Clinical Trial Management System",
      publisher: "Advarra",
      url: "https://www.advarra.com/blog/4-key-integrations-for-your-clinical-trial-management-system/",
      year: "2021",
      note: "Blog post, August 10, 2021, updated February 2025. Quote: \"You can also interface with your EMR to exchange subject enrollment status and protocol information, flagging research participants for clinical and billing workflows.\"",
    },
    {
      id: "advarra-bio-optronics",
      title: "Advarra Acquires Bio-Optronics, Maker of Clinical Conductor TrialSuite",
      publisher: "PR Newswire (Advarra)",
      url: "https://www.prnewswire.com/news-releases/advarra-acquires-bio-optronics-maker-of-clinical-conductor-trialsuite-301242844.html",
      year: "2021",
      note: "Press release, March 9, 2021. Quote: \"With the acquisition of Bio-Optronics, Advarra builds on its established relationships with academic medical centers, cancer centers and sites through its OnCore CTMS to now include a broader coverage of site networks and health systems of any size as well as commercial sites supported by CCTrialSuite.\"",
    },
    {
      id: "advarra-study-collab",
      title: "Advarra Expands Study Collaboration Solution, Connecting Leading Clinical Trial Technology Partners to Simplify Site Access",
      publisher: "PR Newswire (Advarra)",
      url: "https://www.prnewswire.com/news-releases/advarra-expands-study-collaboration-solution-connecting-leading-clinical-trial-technology-partners-to-simplify-site-access-302637357.html",
      year: "2025",
      note: "Press release, December 10, 2025. Quote: \"Advarra's expanded partner network unites leading research technologies within a vendor-agnostic, single sign-on (SSO) access point, simplifying how sites connect to the systems they use across studies, including EDC, eConsent, IRT/RTSM, eCOA, payments, and patient engagement.\"",
    },
  ],
  related: [
    { label: "For site networks", href: "/for/site-networks", description: "How Bond runs across locations that share one CTMS." },
    { label: "For research sites", href: "/for/research-sites", description: "What Bond changes for a single site's coordinators." },
    { label: "Implementation", href: "/implementation", description: "Where the CTMS link sits in the 4 to 6 week plan." },
    { label: "Integrations", href: "/integrations", description: "The EHR and research systems Bond works with, and what each needs." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads charts against each criterion and explains matches." },
  ],
};

export default page;
