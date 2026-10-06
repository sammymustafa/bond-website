import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/oncore",
  category: "integration",
  title: "Advarra OnCore CTMS integration for trial recruitment",
  description:
    "How Bond works alongside Advarra OnCore at academic medical and cancer centers: EHR screening, referral handoff, API or export options, IT tasks and limits.",
  keywords: [
    "Advarra OnCore CTMS integration",
    "OnCore patient recruitment",
    "OnCore API recruitment",
    "cancer center CTMS recruitment",
    "academic medical center trial recruitment",
  ],
  eyebrow: "Integration",
  h1: "Using Bond alongside Advarra OnCore",
  intro:
    "OnCore is the enterprise CTMS Advarra sells to academic medical centers, cancer centers and some health systems.{{cite:advarra-oncore}} Bond Health works alongside it. Bond screens the EHR, pre-screens likely matches by voice and text, books the screening visit and hands each referral to the research team. OnCore stays the system of record from consent onward. Bond is not an Advarra partner: it connects through the institution's own API access or file exports.",
  summary: "How Bond's EHR screening and outreach hand referrals to research teams at OnCore institutions, and what stays in OnCore.",
  lastUpdated: "2026-10-06",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "what-is-oncore",
      heading: "What is Advarra OnCore, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "OnCore was the flagship enterprise CTMS of Forte, which Advarra announced it would acquire in September 2019.{{cite:advarra-forte}} Advarra describes it as the backbone for managing studies from protocol setup and activation through participant tracking, financial oversight and reporting. Pricing depends on the modules licensed and the volume of protocols.{{cite:advarra-oncore}}",
        },
        {
          type: "stats",
          items: [
            { value: "74", label: "NCI-Designated Cancer Centers, in 37 states and the District of Columbia (NCI, May 2026)", cite: "nci-cancer-centers" },
            { value: "85%+", label: "NCI-designated cancer centers supported by OnCore, per a July 2025 START announcement", cite: "start-advarra-2025" },
            { value: "50 to 500+", label: "Active trials at a typical OnCore customer, per Advarra", cite: "advarra-oncore" },
          ],
        },
        {
          type: "p",
          text: "The OnCore adoption figures are vendor-reported. In November 2025 Advarra said 90 of the top 125 academic medical centers use its site technology, which also includes Clinical Conductor, eReg, eSource and EDC.{{cite:advarra-ignitedata}} NCI says most designated centers are affiliated with university medical centers.{{cite:nci-cancer-centers}}",
        },
        {
          type: "p",
          text: "Use goes beyond cancer centers. At the University of Washington, UW Medicine, Fred Hutch and SCCA jointly launched OnCore in 2018 for oncology studies, and since 2020 it has also supported non-oncology studies.{{cite:uw-ctms}} START, a community-based early-phase oncology network, said in July 2025 that it had used OnCore across its network since 2024.{{cite:start-advarra-2025}} As of October 2026, OnCore's product page lists cancer center features such as automated data table reporting and PRMC workflows, but does not describe screening EHR records against eligibility criteria.{{cite:advarra-oncore}} Bond adds that step.",
        },
      ],
    },
    {
      id: "accrual-oversight",
      heading: "Why does accrual tracking matter so much at an OnCore cancer center?",
      blocks: [
        {
          type: "p",
          text: "Under NCI's Cancer Center Support Grant announcement PAR-25-444, posted in November 2025, each center's Protocol Review and Monitoring Committee (PRMC) keeps reviewing open protocols, including accrual, and has sole authority to close trials for that reason. For renewing centers, the interventional treatment trials in Data Table 4 must be generated from NCI's Clinical Trials Reporting Program (CTRP) database.{{cite:nih-par-25-444}}",
        },
        {
          type: "p",
          text: "Advarra lists NCI reporting among OnCore's capabilities.{{cite:advarra-oncore}} Bond does not keep a second accrual record. It adds pre-screened referrals upstream, tagged with their source, and the study team records consent and enrollment in OnCore as usual.",
        },
      ],
    },
    {
      id: "how-bond-fits",
      heading: "How does Bond fit an OnCore institution's recruitment workflow?",
      blocks: [
        {
          type: "p",
          text: "Bond works before a patient becomes a subject. OnCore takes over at consent and registration.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Screen the EHR",
              text: "[Identify](/identify) reads clinical notes, prescriptions, labs, imaging data and pathology, radiology and molecular reports against each criterion, with evidence for every match.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Review",
              text: "The research team reviews ranked candidates in Bond's dashboard and decides who is contacted.{{cite:bond-site}}",
            },
            {
              title: "Contact, pre-screen and book",
              text: "[Engage](/engage) voice and text agents tell patients AI is used, ask the [pre-screening](/glossary/pre-screening) questions the chart cannot answer and book the visit into the team's calendar. Patients can reach a person any time, by live transfer or a callback. If a study uses ads, Bond creates and runs the Meta and Google campaigns, contacts every new ad lead immediately and keeps following up with every lead who has not responded.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Hand off",
              text: "Each referral reaches the study team with a pre-screen summary and its source, and goes to OnCore where the institution enables it.",
            },
            {
              title: "Consent and register",
              text: "The study team consents the patient and registers the subject in OnCore. Washington University's SOP, for example, has staff register subjects by Epic demographic lookup and record consent in OnCore within one business day.{{cite:washu-sop}}",
            },
            {
              title: "Status back to Bond",
              text: "Consent, eligibility and on-study statuses return by API or export, so Bond's reports run from match to randomization.{{cite:bond-site}}",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Pre-screening records follow your SOP",
          text: "Washington University's SOP makes pre-screening documentation optional and puts it in Epic, not OnCore, for departments that keep it.{{cite:washu-sop}} Bond's pre-screening log can go to OnCore, to a file for the CTMS team, or stay in Bond's dashboard and audit trail.",
        },
      ],
    },
    {
      id: "data-elements",
      heading: "What data moves between Bond and OnCore?",
      blocks: [
        {
          type: "p",
          text: "Bond reads the chart from the EHR over FHIR R4, HL7 v2 or an aggregator, not from OnCore.{{cite:bond-site}} The OnCore link carries recruitment records only.",
        },
        {
          type: "table",
          caption: "Data exchanged between Bond and OnCore",
          columns: ["Data element", "Direction and interface", "Notes"],
          rows: [
            ["Chart data for screening", "EHR to Bond: FHIR R4 resources such as Condition, Observation and DocumentReference, HL7 v2, or an aggregator", "Not read from OnCore."],
            ["Protocol mapping", "Set at kickoff", "Links each Bond study to its OnCore protocol, by protocol or NCT number."],
            ["Referral and pre-screen outcome", "Bond to OnCore by API where enabled; otherwise a scheduled CSV export, or kept in Bond", "Pass, fail or pending, with the failing criterion."],
            ["Referral source", "Same path as the referral", "Values agreed with the CTMS team, such as \"Bond EHR screen, voice\"."],
            ["Subject registration and consent", "Entered in OnCore by the study team", "Where the Epic demographics interface is live, subjects are found by Epic lookup, not re-keyed.{{cite:washu-epic}}"],
            ["Subject status", "OnCore to Bond by API or a scheduled report export", "Such as not eligible, on study and off study.{{cite:washu-sop}} Feeds Bond's reports and the randomization share of its fee.{{cite:bond-site}}"],
            ["Research flag in Epic", "OnCore to Epic over the IHE RPE profile", "Advarra's interface, not Bond's.{{cite:advarra-integrations-blog,washu-epic}}"],
          ],
          note: "Field names and writable records depend on the institution's OnCore setup and access, and are confirmed in test.",
        },
      ],
    },
    {
      id: "integration-options",
      heading: "Which integration options exist for OnCore?",
      blocks: [
        {
          type: "p",
          text: "As of October 2026, Advarra's public material describes these OnCore interfaces:",
        },
        {
          type: "ul",
          items: [
            "**EMR interfaces.** RPE for protocol and subject information and IHE CRPC for billing designations, with Epic and Cerner.{{cite:advarra-oncore}} At Washington University, demographics flow from Epic to OnCore, and protocol and subject information flows back.{{cite:washu-epic}}",
            "**An API for the institution's applications**, including its eIRB system.{{cite:advarra-oncore}}",
            "**A general ledger link**, the OnCore receivables interface for invoices and payment reconciliation.{{cite:advarra-integrations-blog}}",
            "**The API Partner Program**, part of the partner network Advarra launched in May 2022, which connects technology vendors to Advarra's platform in Silver, Gold and Platinum tiers through a Partner Portal.{{cite:advarra-partner-network,advarra-api-agreement}}",
          ],
        },
        {
          type: "p",
          text: "Institutions also build their own links: the University of Washington lists a pharmacy app integrated with the OnCore API.{{cite:uw-ctms}} Bond works in one of three ways:",
        },
        {
          type: "ol",
          items: [
            "**API, under the institution's access.** Where the institution's Advarra agreement and interface team allow it, Bond writes referrals and reads subject status on a schedule.",
            "**File export.** Bond sends a scheduled CSV for the CTMS team to load, and reads an OnCore status report back.",
            "**No CTMS link.** Coordinators work referrals from Bond's dashboard and register subjects in OnCore as usual.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Works alongside, not certified",
          text: "Bond is not an Advarra partner, is not in the API Partner Program and holds no Advarra certification. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "institution-tasks",
      heading: "What does the institution's CTMS and IT team need to do?",
      blocks: [
        {
          type: "p",
          text: "At an academic medical center the work is often split between a central CTMS office, research IT, the IRB and the privacy and security office. Washington University's OnCore Support Team, for example, links each protocol to Epic after IRB approval.{{cite:washu-epic}}",
        },
        {
          type: "checklist",
          items: [
            "**CTMS office:** decide where pre-screening and referral source are recorded, and whether Bond's records reach OnCore by API, export or not at all.",
            "**CTMS office:** map each Bond study to its OnCore protocol and agree the statuses that come back.",
            "**Interface team:** for the API path, confirm with Advarra that the agreement covers access by an outside vendor, then issue credentials limited to what Bond needs.",
            "**IRB:** approve outreach scripts and any ads. FDA guidance says the IRB should review the methods and material investigators propose to use to recruit subjects.{{cite:fda-recruiting}}",
            "**Privacy office:** confirm the HIPAA basis for screening and outreach. See [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
            "**Security and contracting:** complete the vendor review and sign the business associate agreement.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "On an enterprise OnCore instance this is usually done once. Each new study adds its protocol mapping and IRB-approved scripts.",
        },
      ],
    },
    {
      id: "timeline",
      heading: "Where does the OnCore link fit in the 48-hour EHR implementation?",
      blocks: [
        {
          type: "p",
          text: "Bond's published estimate for full EHR integration is 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site}} The OnCore link is separate. It is smaller work that runs alongside the EHR connection or after go-live, within the [implementation plan](/implementation), while IRB review runs on the IRB's own calendar.",
        },
        {
          type: "steps",
          items: [
            { title: "Step 1: BAA and EHR connection", text: "Bond signs the BAA and connects to the EHR, as the [Epic](/integrations/epic) and [Oracle Health](/integrations/oracle-cerner) pages describe." },
            { title: "Step 2: OnCore path", text: "The CTMS office picks API, export or no link, and requests access if needed." },
            { title: "Step 3: test", text: "Test referrals go to a test protocol or file for the CTMS team to check." },
            { title: "Step 4: go-live", text: "Referrals flow on schedule and statuses return to Bond's dashboard." },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "If OnCore access takes longer",
          text: "Start with the file export. A pilot can also run outreach from a candidate list before the EHR is connected; it still needs the BAA and vendor review.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "security",
      heading: "How is recruitment data protected between Bond and OnCore?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Agreement first.** Bond signs a business associate agreement before any PHI moves.{{cite:bond-site}}",
            "**Minimum necessary.** The institution and Bond agree which fields go to OnCore or the export.",
            "**Institution-owned credentials.** Any OnCore API access belongs to the institution, which can limit or revoke it.",
            "**Bond's controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} It encrypts data at rest and in transit (AES-256 where applicable) and uses role-based access controls and audit logging.{{cite:bond-site}} See [security](/security).",
          ],
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with OnCore today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**No Advarra partnership or listing.** Bond is not in Advarra's API Partner Program.{{cite:advarra-partner-network}}",
            "**No subject registration.** Bond does not create subjects, record consent or enter eligibility in OnCore.",
            "**No Epic research flag.** The OnCore-to-Epic RPE interface belongs to Advarra and the institution.{{cite:advarra-integrations-blog}}",
            "**No billing or finance data.** Bond does not touch coverage analyses, CRPC billing grids, budgets or invoices.",
            "**No NCI reporting.** Data Table 4 and CTRP reporting stay with the cancer center.{{cite:nih-par-25-444}}",
            "**No biospecimen, eIRB or eReg links.** Bond supports the [consent](/consent) conversation; the site and PI obtain consent.",
            "**No app inside OnCore.** Coordinators review matches in Bond's dashboard.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your CTMS office contact. We will map the handoff to your OnCore SOP.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a certified Advarra or OnCore partner?",
      a: "No. Bond works alongside OnCore through the institution's own API access or file exports. Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
    },
    {
      q: "Does Bond replace OnCore's Epic interface?",
      a: "No. Advarra's RPE and CRPC interfaces carry protocol, subject and billing data between OnCore and Epic.{{cite:advarra-oncore}} Bond reads the EHR separately for screening.",
    },
    {
      q: "Can we start before OnCore access is approved?",
      a: "Yes. Bond can run with a file export or its own dashboard while the API question is settled. The EHR connection does not depend on OnCore.",
    },
    {
      q: "Does Bond report accrual to NCI?",
      a: "No. Bond tags each referral with its source, and the study team records consent and enrollment in OnCore. Data Table 4 reporting through CTRP stays with the cancer center.{{cite:nih-par-25-444}}",
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
      note: "Capabilities, pricing and compliance status described by Bond Health, October 2026.",
    },
    {
      id: "advarra-oncore",
      title: "OnCore Clinical Trial Management System (CTMS)",
      publisher: "Advarra",
      url: "https://www.advarra.com/solutions/sites/ctms/oncore/",
      year: "2026",
      note: "Vendor page, read October 6, 2026. Quote: \"OnCore typically addresses the needs of academic medical centers and cancer centers, as well as some health systems, conducting fifty to 500+ active trials.\" Also: \"OnCore offers robust integration with EMR systems, including RPE integration for protocol and subject information, and IHE CRPC billing designations to enhance billing compliance. OnCore also provides an API to interface with your applications, including your eIRB system.\" And: \"The OnCore licensing fee is dependent upon your licensed modules and your volume of protocols.\" No EHR eligibility screening is described.",
    },
    {
      id: "advarra-forte",
      title: "Advarra Announces Intent to Acquire Forte, Market-Leading Provider of Clinical Technology Solutions",
      publisher: "Advarra",
      url: "https://www.advarra.com/learn/newsroom/advarra-announces-intent-to-acquire-forte-market-leading-provider-of-clinical-technology-solutions/",
      year: "2019",
      note: "Press release, September 5, 2019. Quote: \"including OnCore, Forte's flagship enterprise CTMS.\"",
    },
    {
      id: "advarra-ignitedata",
      title: "Advarra and IgniteData Announce Partnership to Simplify Clinical Trial Data Transfer for Research Sites",
      publisher: "PR Newswire (Advarra)",
      url: "https://www.prnewswire.com/news-releases/advarra-and-ignitedata-announce-partnership-to-simplify-clinical-trial-data-transfer-for-research-sites-302612178.html",
      year: "2025",
      note: "Press release, November 12, 2025, quoting Advarra's COO. Quote: \"With 90 of the top 125 academic medical centers, 90% of NCI-Designated Cancer Centers, and over 300 enterprise research sites leveraging Advarra's site technology—including OnCore CTMS, Clinical Conductor CTMS, eReg, eSource, and EDC\". Vendor figure; ranking basis not stated.",
    },
    {
      id: "start-advarra-2025",
      title: "START and Advarra Unite to Deliver Unmatched Speed, Quality, and Predictability for Early-Phase Oncology Trials",
      publisher: "Advarra (press release from The START Center for Cancer Research)",
      url: "https://www.advarra.com/learn/newsroom/start-and-advarra-unite-to-deliver-unmatched-speed-quality-and-predictability-for-early-phase-oncology-trials/",
      year: "2025",
      note: "Press release, July 24, 2025. Quote: \"Advarra's OnCore Clinical Trial Management System (CTMS), which supports over 85% of NCI-designated cancer centers and has been actively used to improve operational efficiency across START's network since 2024.\"",
    },
    {
      id: "nci-cancer-centers",
      title: "NCI-Designated Cancer Centers",
      publisher: "National Cancer Institute",
      url: "https://www.cancer.gov/research/infrastructure/cancer-centers",
      year: "2026",
      note: "Updated May 20, 2026. Quote: \"There are 74 NCI-Designated Cancer Centers, located in 37 states and the District of Columbia\". Also: \"Most of the NCI-Designated Cancer Centers are affiliated with university medical centers\".",
    },
    {
      id: "nih-par-25-444",
      title: "PAR-25-444: Cancer Center Support Grants (CCSGs) for NCI-designated Cancer Centers (P30 Clinical Trial Optional)",
      publisher: "National Cancer Institute, NIH (via Simpler.Grants.gov)",
      url: "https://files.simpler.grants.gov/opportunities/45ab10e1-1758-4a2f-ad07-e93d95c5bedc/attachments/e44005b6-6bd0-41a0-bdc3-4d5d5d7ac1fc/PAR-25-444-Revised-Full-Announcement.html",
      year: "2025",
      note: "Reissue of PAR-21-321, posted November 26, 2025, expires September 26, 2028. Quote: \"The PRMC is responsible for continuing review of open protocols, including accrual, new safety information, and scientific relevance, and has sole authority to close trials for these reasons.\" Also: \"DT4 interventional treatment trials must be generated using the Clinical Trials Reporting Program (CTRP) database.\" and \"New (Type 1) applications are not required to use CTRP in preparation of DT4.\"",
    },
    {
      id: "uw-ctms",
      title: "CTMS",
      publisher: "UW Research Information Technologies, University of Washington",
      url: "https://rit.uw.edu/ctms",
      year: "2026",
      note: "Read October 6, 2026. Quote: \"In 2018 UW Medicine, Fred Hutch Cancer Research Center (FH) and Seattle Cancer Center Alliance (SCCA) jointly launched a Clinical Trials Management System, using Advarra OnCore and Advarra EDC to facilitate the needs of Oncology studies, and as of 2020, is also supporting non-Oncology studies.\" Also: \"real-time integration with the OnCore API\" (Vestigo pharmacy app).",
    },
    {
      id: "washu-epic",
      title: "How Does OnCore integrate with Epic?",
      publisher: "OnCore Support Services, Washington University in St. Louis",
      url: "https://washu.atlassian.net/wiki/spaces/OSS/pages/185827686/How+Does+OnCore+integrate+with+Epic",
      year: "2024",
      note: "Updated July 12, 2024. Quote: \"Patient demographic data is sent from Epic to OnCore so that patients from WUSM or BJC can be identified and selected for clinical trials.\" Also: \"clinical trial protocol and subject information is sent from OnCore to Epic.\" And protocol linking \"is completed by the Oncore Support Team and is performed once the study has IRB approval.\"",
    },
    {
      id: "washu-sop",
      title: "OnCore CTMS Standard Operating Procedure: Subject Management (version 1.2)",
      publisher: "Center for Clinical Studies, Washington University in St. Louis",
      url: "https://clinicalstudies.wustl.edu/app/uploads/2023/06/Subject-Management-SOP_20June2023.pdf",
      year: "2023",
      note: "Effective June 20, 2023. Quote: \"Pre-screening is optional and not required.\" and \"For departments who choose to document pre-screening they should do so in Epic.\" Also: subjects are registered \"through Epic demographic interface lookup\" and \"consent details must be documented in OnCore within one business day.\" Statuses include not eligible, On Study and Off Study.",
    },
    {
      id: "advarra-integrations-blog",
      title: "4 Key Integrations for Your Clinical Trial Management System",
      publisher: "Advarra",
      url: "https://www.advarra.com/blog/4-key-integrations-for-your-clinical-trial-management-system/",
      year: "2021",
      note: "Blog post, August 10, 2021, modified February 11, 2025. Quote: \"You can also interface with your EMR to exchange subject enrollment status and protocol information, flagging research participants for clinical and billing workflows. This process, which uses the IHE Retrieve Process for Execution (RPE) profile\". Also names \"the OnCore receivables interface\" for invoices and payment reconciliation.",
    },
    {
      id: "advarra-partner-network",
      title: "Advarra Launches Partner Network to Extend Research Capabilities and Enable Site-Centric Connectivity Across the Industry",
      publisher: "Advarra",
      url: "https://www.advarra.com/learn/newsroom/advarra-launches-partner-network/",
      year: "2022",
      note: "Press release, May 17, 2022. Quote: \"The API Partner Program allows technology vendors to connect with Advarra's technology platform and is further organized by Silver, Gold, and Platinum Tiers based on level of integration and implementation support.\" Bond is not among the partners named.",
    },
    {
      id: "advarra-api-agreement",
      title: "Advarra API Partner Program Agreement",
      publisher: "Advarra",
      url: "https://www.advarra.com/advarra-api-partner-program-agreement/",
      year: "2026",
      note: "Read October 6, 2026. Quote: \"The Program is comprised of Advarra's application programming interfaces (\"APIs\") and the web-based platform (the \"Partner Portal\") by which Partner accesses the API\".",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Information sheet, January 1998, read October 6, 2026. Quote: \"The IRB should also review the methods and material that investigators propose to use to recruit subjects.\"",
    },
  ],
  related: [
    { label: "Advarra Clinical Conductor", href: "/integrations/advarra-clinical-conductor", description: "How Bond works alongside Advarra's CTMS for research sites and site networks." },
    { label: "Epic", href: "/integrations/epic", description: "The FHIR connection Bond uses to screen charts at Epic institutions." },
    { label: "Oncology", href: "/oncology", description: "Why oncology eligibility lives in reports and notes, and how Bond reads them." },
    { label: "Implementation", href: "/implementation", description: "Where the OnCore link sits next to the 48-hour EHR plan." },
    { label: "IRB and HIPAA rules for outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What the IRB and privacy office review before patients are contacted." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
  ],
};

export default page;
