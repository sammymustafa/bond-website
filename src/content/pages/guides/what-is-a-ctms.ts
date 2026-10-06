import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/what-is-a-ctms",
  category: "guide",
  title: "What is a CTMS? Clinical trial management systems explained",
  description:
    "What a CTMS (clinical trial management system) does, site vs sponsor systems, CTMS vs EHR, eISF and EDC, how to choose one, and how recruitment data gets in.",
  keywords: [
    "ctms",
    "what is a ctms",
    "what is ctms",
    "ctms meaning",
    "ctms full form",
    "clinical trial management system",
    "ctms systems",
    "ctms clinical trial",
    "what is ctms in clinical trials",
    "ctms software",
    "ctms software clinical trials",
    "what is ctms software",
    "clinical research management system",
    "research participant tracking software",
    "how to choose a ctms system",
    "ctms systems for clinical trial",
    "trial management system",
    "which platforms integrate recruitment with trial management systems",
    "RealTime CTMS visit scheduling and subject management",
  ],
  eyebrow: "Guide",
  h1: "What is a CTMS? A plain-English guide for research sites",
  intro:
    "A CTMS (clinical trial management system) is the software research sites, sponsors and CROs use to run the operations of their clinical trials: studies, participants, visit schedules, budgets and payments, staff work and reporting.{{cite:veeva-ctms-faq,vault-ctms}} At a research site, it is also where recruitment status should end up, from the first referral to randomization. This guide explains what a CTMS does, how site and sponsor systems differ, how a CTMS differs from an EHR, eISF and EDC, how to choose one, and how recruitment data gets in.",
  summary: "A plain-English definition of a CTMS, what it does, site vs sponsor systems, common site CTMS products, how to choose one, and how recruitment data gets in.",
  lastUpdated: "2026-10-06",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "See CTMS integrations",
    secondaryHref: "/integrations",
  },
  sections: [
    {
      id: "what-is-a-ctms",
      heading: "What is a CTMS?",
      blocks: [
        {
          type: "p",
          text: "CTMS stands for clinical trial management system. It runs the business side of a trial, not the collection of clinical data. FDA's 2024 guidance on electronic systems in clinical investigations lists the clinical trial management system as a separate system from EDC, interactive response technology and electronic clinical outcome assessment.{{cite:fda-part11-qa}}",
        },
        {
          type: "p",
          text: "Some academic centers call it a clinical research management system (CRMS). A Weill Cornell team wrote that CRMSs, also known as CTMSs, support research billing compliance by letting researchers define protocols, analyze which procedures are billable to insurers or only to the sponsor, build budgets and manage subject enrollment.{{cite:campion-2014}}",
        },
        {
          type: "p",
          text: "Pharmaceutical companies and CROs developed CTMSs to centralize the trial process. Academic medical centers need one that also links to the hospital systems they run for patients, IRB approvals, contracts and budgets.{{cite:park-2018}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "In one sentence",
          text: "A site CTMS is the operational record of every study: who is in it, which visits are due, what the sponsor owes and who is doing what. If you need research participant tracking software, a CTMS is usually it.",
        },
      ],
    },
    {
      id: "what-does-a-ctms-do",
      heading: "What does a CTMS do?",
      blocks: [
        {
          type: "p",
          text: "Feature lists differ, but site CTMS products cover the same core jobs. Examples are vendors' own descriptions, as of October 2026.",
        },
        {
          type: "table",
          caption: "Core CTMS jobs at a research site",
          columns: ["Job", "What the CTMS keeps", "How a vendor describes it"],
          rows: [
            [
              "Participant tracking",
              "Each participant's study, status and visits",
              "RealTime: track enrollment \"from first referral through screen fail, randomization, or completion\"{{cite:rt-ctms}}",
            ],
            [
              "Visit scheduling and windows",
              "Visit dates from the protocol, with allowed windows",
              "RealTime: visits submitted against protocol templates \"with automated target date calculations and visit window enforcement\"{{cite:rt-ctms}}",
            ],
            [
              "Study calendars",
              "The protocol's schedule of visits and procedures, built once per study",
              "SiteVault CTMS: \"Building and customizing study-specific visit schedules\"{{cite:veeva-ctms-faq}}",
            ],
            [
              "Finances, billing and payments",
              "Budgets, what the sponsor owes, invoices, payments and stipends",
              "CRIO: visit- or procedure-level receivables, stipends and payables, invoices, and sponsor reimbursements{{cite:crio-ctms}}",
            ],
            [
              "Staff tasks",
              "Staff calendars, workload and what is due",
              "Clinical Conductor: patient check-in and check-out, staff calendars and capacity planning{{cite:advarra-cc}}",
            ],
            [
              "Reporting",
              "Enrollment, revenue and upcoming milestones",
              "SiteVault CTMS: dashboards for staff workload, enrollment curves, earned vs. forecasted revenue and milestone dates{{cite:veeva-ctms-faq}}",
            ],
            [
              "Recruitment status",
              "Leads, contact attempts, pre-screen outcomes and referral sources",
              "CRIO: patient database search, website leads, in-system calls and texts, and phone-screening questionnaires{{cite:crio-ctms}}",
            ],
          ],
        },
        {
          type: "p",
          text: "At academic medical centers the CTMS also talks to the EHR. At the Medical University of South Carolina, the OnCore CTMS pushes protocol and calendar information into Epic, pulls patient demographics from Epic, and sends recruitment status updates back.{{cite:musc-2022}}",
        },
        { type: "h3", text: "How does RealTime CTMS handle visit scheduling and subject management?" },
        {
          type: "p",
          text: "RealTime lists subject profiles with medical history, medications, allergies and contact attempt logs; visits submitted against protocol templates, with calculated target dates and enforced windows; help spotting out-of-window visits before they become protocol deviations; and enrollment tracked from first referral to screen fail, randomization or completion.{{cite:rt-ctms}}",
        },
      ],
    },
    {
      id: "site-vs-sponsor",
      heading: "Site CTMS vs sponsor or CRO CTMS: what is the difference?",
      blocks: [
        {
          type: "p",
          text: "A site CTMS manages one site's or network's work across every sponsor's studies. A sponsor or CRO CTMS manages one sponsor's studies across every site, so only a site CTMS shows a site's enrollment and revenue across all its sponsors.",
        },
        {
          type: "table",
          caption: "Site CTMS and sponsor CTMS compared",
          columns: ["Question", "Site CTMS", "Sponsor or CRO CTMS"],
          rows: [
            ["Who uses it?", "Coordinators, site managers, finance staff and investigators", "Clinical operations teams, study managers and monitors"],
            ["What does it track?", "Participants, visits, staff and money for every study at the site", "Sites, enrollment and milestones across a study or portfolio"],
            ["What recruitment data does it hold?", "Patient database, leads, contact attempts, pre-screens and referral sources", "Enrollment and recruitment status reported by each site"],
            ["What money does it track?", "What sponsors owe the site, invoices and stipends", "Payments to sites, supported by EDC data"],
            ["What about monitoring?", "The site hosts monitoring visits", "Monitoring visit reports, issues and protocol deviations"],
            ["Examples", "CRIO Site CTMS, Advarra OnCore and Clinical Conductor, RealTime CTMS, SiteVault CTMS", "Veeva CTMS"],
          ],
          note: "Based on vendors' own descriptions.{{cite:crio-ctms,rt-ctms,veeva-ctms-faq,vault-ctms}}",
        },
        {
          type: "p",
          text: "Veeva describes its sponsor product, Veeva CTMS, as end-to-end study management and monitoring for insourced and outsourced trials.{{cite:vault-ctms}} The two can exchange data: for sponsors on Veeva's Clinical Platform, SiteVault CTMS can share recruitment status and milestones.{{cite:veeva-ctms-faq}}",
        },
      ],
    },
    {
      id: "site-ctms-systems",
      heading: "Which CTMS systems do research sites use?",
      blocks: [
        {
          type: "p",
          text: "The table covers five systems research sites use, each described from the vendor's own pages as of October 2026. It is not a ranking.",
        },
        {
          type: "table",
          caption: "Site CTMS and eRegulatory systems, in the vendors' words",
          columns: ["System", "Typically for", "What it covers"],
          rows: [
            [
              "CRIO Site CTMS",
              "Research sites using CRIO's eSource, which CRIO says the CTMS was built to work with.{{cite:crio-ctms}}",
              "Patient database and recruitment, phone screening, receivables, payables, invoices, sponsor reimbursements and stipends.{{cite:crio-ctms}}",
            ],
            [
              "Advarra OnCore",
              "Academic medical centers and cancer centers, plus some health systems, running 50 to 500+ active trials.{{cite:advarra-oncore}}",
              "Protocol setup and activation, participant tracking, financial oversight, billing compliance with EMR interfaces, and reporting, including NCI reporting.{{cite:advarra-oncore}}",
            ],
            [
              "Advarra Clinical Conductor",
              "Growing research sites and site networks.{{cite:advarra-cc}}",
              "Operations and financials across sites, outreach by text, email and phone, patient scheduling, staff calendars and participant payments.{{cite:advarra-cc}}",
            ],
            [
              "RealTime CTMS (RealTime-CTMS)",
              "Sites, site networks, academic medical centers and health systems.{{cite:rt-ctms}}",
              "Subject profiles, enrollment tracking, visit windows, patient database search, referral source reporting, study finances and stipends.{{cite:rt-ctms}}",
            ],
            [
              "Veeva SiteVault",
              "Research sites. Free for sites with up to 20 active studies, with tiered pricing for larger sites.{{cite:veeva-eisf}}",
              "An electronic investigator site file (eISF) that replaces paper regulatory binders. Veeva says the free edition now also includes CTMS and eConsent.{{cite:veeva-eisf,veeva-ctms-faq}}",
            ],
          ],
        },
        {
          type: "p",
          text: "SiteVault is an eRegulatory product first: Veeva launched it in January 2020 as a free eRegulatory solution for sites.{{cite:veeva-launch}} Its CTMS came later, so a site that keeps its binder in SiteVault may run a different CTMS.{{cite:veeva-ctms-faq}}",
        },
      ],
    },
    {
      id: "ctms-vs-ehr-eisf-edc",
      heading: "How is a CTMS different from an EHR, eISF/eRegulatory and EDC?",
      blocks: [
        {
          type: "p",
          text: "Each holds a different record, and recruitment touches all four.",
        },
        {
          type: "table",
          caption: "Four systems a research site works with",
          columns: ["System", "Whose record is it?", "What it holds", "Role in recruitment"],
          rows: [
            [
              "EHR",
              "The patient's medical record, kept by health care providers",
              "A digital version of the patient's chart: diagnoses, lab results, medications, physician notes and more{{cite:healthit-ehr}}",
              "Where eligibility evidence lives. Pre-screening reads it.",
            ],
            [
              "[CTMS](/glossary/ctms)",
              "The site's operational record of its studies",
              "Study calendars, participant visits, budgets, invoices and reports{{cite:veeva-ctms-faq}}",
              "Where recruitment status should end up, from referral to randomization",
            ],
            [
              "[eISF / eRegulatory](/glossary/eregulatory-eisf)",
              "The investigator site file, the site's regulatory binder",
              "Essential records, including documents on recruitment, pre-trial screening and consent, and the completed screening log{{cite:ich-e6r3}}",
              "Holds IRB-approved recruitment materials and screening logs",
            ],
            [
              "EDC",
              "The study's data, reported to the sponsor",
              "Electronic case report forms. FDA defines EDC systems as systems designed to collect, manage and store clinical investigation data.{{cite:fda-part11-qa,fda-esource}}",
              "None before consent. Entry starts with protocol screening and study visits.",
            ],
          ],
        },
        {
          type: "p",
          text: "Data first recorded electronically, whether in the EHR or typed straight into a study system, is [eSource](/glossary/esource). FDA's eSource guidance names clinical data in EHRs among its common examples.{{cite:fda-esource}}",
        },
        {
          type: "p",
          text: "Some vendors sell several pieces as one suite; CRIO says its eSource is fully integrated with its Site CTMS, eRegulatory and eConsent modules.{{cite:crio-esource}} Either way, decide which system owns which record, so nothing is entered twice.",
        },
      ],
    },
    {
      id: "choose-a-ctms",
      heading: "How should a site choose a CTMS?",
      blocks: [
        {
          type: "p",
          text: "Start with the kind of site you are. Advarra positions OnCore for academic medical centers and cancer centers, and some health systems, running 50 to 500+ active trials, and Clinical Conductor for growing sites and networks.{{cite:advarra-oncore,advarra-cc}}",
        },
        {
          type: "p",
          text: "Write requirements before the demos. Weill Cornell's list for its CRMS covered protocol definitions, subject enrollments, prospective reimbursement analyses and budgets, plus sharing data with its practice management and EHR systems.{{cite:campion-2014}}",
        },
        { type: "h3", text: "Questions to ask every CTMS vendor" },
        {
          type: "checklist",
          items: [
            "**Recruitment integrations.** Is there a documented API that lets a recruitment tool create patients, place them on a study, book visits and read subject status? CRIO publishes a Recruiting API for this.{{cite:crio-recruiting-api}}",
            "**API access by tier.** Is API access in our tier or an add-on? SiteVault puts API access in its Enterprise tier; its free version does not currently integrate with third-party systems.{{cite:veeva-ctms-faq,veeva-faq}}",
            "**EHR interfaces.** Can it pull demographics from our EHR and send research status and billing calendars back? OnCore, for example, offers RPE and IHE CRPC interfaces with EMR systems.{{cite:advarra-oncore}}",
            "**Data export.** Can we export all participant, status and financial data ourselves, in a standard format, including when the contract ends?",
            "**Reporting.** Can we report the recruitment funnel by study and referral source, from referral to randomization, without spreadsheets?",
            "**Cost model.** Is pricing per module, protocol volume, study tier or user? Are API access, EHR interfaces and implementation extra? OnCore's license fee, for example, depends on licensed modules and protocol volume.{{cite:advarra-oncore}}",
            "**Validation.** What validation documentation do you provide? FDA does not pre-evaluate EDC or CTMS products for Part 11 compliance; it evaluates them during inspections.{{cite:fda-part11-qa}}",
            "**Setup.** Who builds study calendars and budgets, and how are staff trained?",
          ],
        },
      ],
    },
    {
      id: "recruitment-data",
      heading: "How does recruitment data get into the CTMS?",
      blocks: [
        {
          type: "p",
          text: "Recruitment often starts outside the CTMS, in a chart search, an ad or a referral. Make the CTMS the source of truth for participant status anyway.",
        },
        {
          type: "ul",
          items: [
            "**Money.** Industry sponsors often tie payment to accrual and other milestones, so the site has to show when each was reached.{{cite:musc-2022}}",
            "**Records.** ICH E6(R3) lists documents on recruitment, pre-trial screening and consent, and the completed screening log, among a trial's essential records.{{cite:ich-e6r3}}",
            "**Feasibility.** As the MUSC team put it, industry sponsors are unlikely to choose sites that cannot document a proven accrual track record.{{cite:musc-2022}}",
          ],
        },
        { type: "h3", text: "Which statuses should the CTMS hold?" },
        {
          type: "table",
          caption: "Recruitment statuses worth recording in the CTMS",
          columns: ["Status", "What it means"],
          rows: [
            ["Referred", "A candidate from a chart search, ad, referral or database, sent to the study team with its source"],
            ["Pre-screened", "Passed or failed the IRB-approved pre-screening questions; a fail names the criterion"],
            ["Booked", "A screening visit is on the site's calendar"],
            ["Consented", "Signed informed consent, which opens protocol screening"],
            ["Screen failed or randomized", "The outcome of protocol screening, recorded by site staff"],
          ],
          note: "Pre-screening comes before consent and screening after it; see [pre-screening vs screening](/guides/pre-screening-vs-screening).",
        },
        { type: "h3", text: "API, file import or manual entry?" },
        {
          type: "table",
          caption: "Three ways referrals reach the CTMS",
          columns: ["Method", "How it works", "Watch for"],
          rows: [
            [
              "API",
              "The recruitment tool writes referrals and statuses into the CTMS and reads outcomes back. CRIO says its Recruiting API can eliminate manual entry of recruitment data; RealTime and Clinical Conductor also offer APIs.{{cite:crio-recruiting-api,rt-api,softwareone-cc}}",
              "Access may depend on your contract or tier. Map fields and statuses first.",
            ],
            [
              "File import",
              "A scheduled CSV of referrals and outcomes, loaded by the CTMS administrator, with a status export back",
              "Lag between runs; someone must own each load.",
            ],
            [
              "Manual entry",
              "Coordinators re-key referrals from a dashboard or shared sheet",
              "Typos, delays and lost referral sources. Fine for a pilot.",
            ],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Agree the rules first",
          text: "Before go-live, agree what each status means, which referral source value the recruitment tool uses, and which system sends each patient message, so no one is contacted twice.",
        },
      ],
    },
    {
      id: "recruitment-platforms",
      heading: "Which recruitment platforms integrate with a CTMS?",
      blocks: [
        {
          type: "p",
          text: "Bond Health does. Bond finds eligible patients in the EHR with evidence for each criterion, creates and runs Meta and Google ad campaigns, contacts every new ad lead immediately and keeps following up with those who have not responded, pre-screens by voice and text, and books visits into the site's calendar.{{cite:bond-site,bond-product}} It works with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault, via API or file export where the vendor supports it. Bond is a CRIO Certified Partner with a two-way CRIO integration, its only vendor certification.{{cite:bond-product,bond-site,crio-partners}}",
        },
        {
          type: "table",
          caption: "How Bond connects to each system",
          columns: ["System", "How Bond connects"],
          rows: [
            [
              "[CRIO](/integrations/crio)",
              "CRIO Certified Partner. Pre-screened patients go into CRIO through CRIO's API, and subject status comes back to Bond. Once the site activates API access, Bond can also screen the patient records the site keeps in CRIO.{{cite:bond-site,crio-partners,crio-recruiting-api}}",
            ],
            [
              "[Advarra OnCore](/integrations/oncore)",
              "Works alongside OnCore through the institution's own API access or a scheduled file export, with subject status read back. The study team registers subjects and records consent in OnCore.{{cite:bond-site}}",
            ],
            [
              "[Advarra Clinical Conductor](/integrations/advarra-clinical-conductor)",
              "Writes referrals and pre-screen outcomes by API where the site's access allows, or by scheduled CSV export, and reads enrollment status back. A shared sheet works for a pilot.{{cite:bond-site}}",
            ],
            [
              "[RealTime CTMS](/integrations/realtime)",
              "Referrals, recruitment status and outcomes move through RealTime's API or a file export, under the site's own account.{{cite:bond-site}}",
            ],
            [
              "[Veeva SiteVault](/integrations/veeva-sitevault)",
              "Site staff upload Bond's records, such as outreach scripts and the pre-screening log, to the SiteVault eISF; on SiteVault Enterprise, an API upload can be scoped with the site. Bond does not read from SiteVault or set participant status there.{{cite:bond-site,veeva-faq}}",
            ],
          ],
          note: "Only the CRIO connection is a certified integration. With the others, Bond works alongside the system under the site's own access. See [all integrations](/integrations).",
        },
        {
          type: "p",
          text: "To check any other platform, start with the CTMS vendor's own list; CRIO tells sites to look for its Certified Integration Partner badge.{{cite:crio-partners}} Then ask which statuses it writes and reads, and how.",
        },
        {
          type: "p",
          text: "Bond charges no integration fee; see [pricing](/pricing).{{cite:bond-product}} Full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method, and the CTMS connection is set up alongside it in the [implementation plan](/implementation).{{cite:bond-site}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your CTMS administrator. We will show how referrals and statuses would move into your system.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What does CTMS stand for?",
      a: "CTMS stands for clinical trial management system: software for running the operations of clinical trials, such as participants, visits, budgets and reporting. Some academic centers call it a clinical research management system (CRMS).{{cite:campion-2014}}",
    },
    {
      q: "What is CTMS software used for in clinical trials?",
      a: "Sites use a CTMS to track participants and visits, build study calendars, manage budgets and invoices, and report on enrollment and revenue.{{cite:veeva-ctms-faq,crio-ctms}} Sponsors and CROs use theirs to oversee enrollment, milestones and monitoring across sites.{{cite:vault-ctms}}",
    },
    {
      q: "Is a CTMS the same as an EDC?",
      a: "No. An EDC system collects, manages and stores the clinical data a protocol calls for, in electronic case report forms that generally go to the sponsor, while a CTMS runs study operations. FDA names them as separate systems.{{cite:fda-part11-qa,fda-esource}}",
    },
    {
      q: "Is Veeva SiteVault a CTMS?",
      a: "SiteVault launched in January 2020 as a free eRegulatory (eISF) product for research sites. Veeva says its free edition now includes CTMS, eISF and eConsent for sites with 20 or fewer concurrent active studies.{{cite:veeva-launch,veeva-ctms-faq}}",
    },
    {
      q: "Which recruitment platforms integrate with trial management systems?",
      a: "Bond Health works with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault, via API or file export where the vendor supports it. It is a CRIO Certified Partner with a two-way CRIO integration.{{cite:bond-product,bond-site}} See [integrations](/integrations).",
    },
    {
      q: "What is the best CTMS for a research site?",
      a: "It depends on the site. An academic or cancer center with many trials and EHR billing interfaces needs different things than an independent site with a few studies, so compare fit for your study volume, recruitment and EHR integrations, data export, reporting and cost model, using the [checklist above](#choose-a-ctms).",
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
      id: "campion-2014",
      title: "Implementing a Clinical Research Management System: One Institution's Successful Approach Following Previous Failures",
      publisher: "AMIA Joint Summits on Translational Science Proceedings (Campion TR Jr et al., Weill Cornell Medical College)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25954570/",
      year: "2014",
      note: "Read October 6, 2026 (full text via PMC4419771). Quote: \"clinical research management systems (CRMSs), also known as clinical trial management systems (CTMSs)\". Also: \"CRMSs facilitate billing compliance by enabling clinical researchers to define research protocols with basic characteristics such as title and sponsor, perform prospective reimbursement analysis of procedures in a protocol, generate protocol budgets for internal analysis and negotiation with sponsors, and manage enrollment of subjects in protocols.\" Also: \"WCMC's requirements for a CRMS include the ability to create and maintain protocol definitions, subject enrollments, prospective reimbursement analyses, and budgets as well as share data with PM and EHR systems.\"",
    },
    {
      id: "park-2018",
      title: "Utilization of a Clinical Trial Management System for the Whole Clinical Trial Process as an Integrated Database: System Development",
      publisher: "Journal of Medical Internet Research (Park YR et al., Asan Medical Center)",
      url: "https://pubmed.ncbi.nlm.nih.gov/29691212/",
      year: "2018",
      note: "J Med Internet Res 2018;20(4):e103. Read October 6, 2026 (full text via PMC5941091). Quote: \"pharmaceutical companies and CROs have developed supportive tools such as clinical trial management systems (CTMSs).\" Also: \"academic medical centers have to make extra efforts to establish a system that is able to link pre-existing systems such as the health information system (HIS; subject management), electronic institutional review board (e-IRB; study approval), and enterprise resource planning (ERP) program (contract and budget of clinical trial)\".",
    },
    {
      id: "musc-2022",
      title: "An integrated approach to improve clinical trial efficiency: Linking a clinical trial management system into the Research Integrated Network of Systems",
      publisher: "Journal of Clinical and Translational Science (Sampson R et al., Medical University of South Carolina)",
      url: "https://pubmed.ncbi.nlm.nih.gov/35720964/",
      year: "2022",
      note: "J Clin Transl Sci 2022;6(1):e63. Read October 6, 2026 (full text via PMC9161043). Quote: \"Epic is the electronic health record system and OnCore the enterprise-level CTMS used by the Medical University of South Carolina.\" Also: the CTMS \"pulls patient demographic information into the CTMS from the EHR and sends updates regarding patient recruitment status back to the EHR\". Also: \"Industry sponsors often condition payment on hitting accrual or other study milestones\" and \"industry sponsors are unlikely to choose sites that cannot document a proven accrual track record.\"",
    },
    {
      id: "fda-part11-qa",
      title: "Electronic Systems, Electronic Records, and Electronic Signatures in Clinical Investigations: Questions and Answers (Guidance for Industry)",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/166215/download",
      year: "2024",
      note: "Final guidance, October 2024, read October 6, 2026. Quote: \"the electronic systems (e.g., EDC system, clinical trial management system, interactive response technology system, electronic clinical outcome assessment)\". Also (Q16): \"FDA does not perform preliminary evaluations of electronic systems (e.g., EDC system, electronic clinical trial management system) to determine whether they comply with part 11 requirements. These systems will be evaluated during an inspection.\" Glossary: \"Electronic Data Capture (EDC) Systems: Electronic systems designed to collect, manage, and store clinical investigation data in an electronic format.\"",
    },
    {
      id: "fda-esource",
      title: "Electronic Source Data in Clinical Investigations: Guidance for Industry",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/85183/download",
      year: "2013",
      note: "September 2013, read October 6, 2026. Quote: \"The eCRF is an auditable electronic record of information that generally is reported to the sponsor on each trial subject, according to a clinical investigation protocol.\" Also: \"Common examples include, but are not limited to clinical data initially recorded in electronic health records maintained by healthcare providers and institutions\".",
    },
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice",
      publisher: "International Council for Harmonisation",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Appendix C, essential records, read October 6, 2026. Quote: \"Documents the recruitment, pre-trial screening and consenting process of trial participants and their identity and chronological enrolment as appropriate\". The list of essential records includes \"Completed participants screening log\".",
    },
    {
      id: "healthit-ehr",
      title: "Benefits of EHRs: What is an EHR?",
      publisher: "Office of the National Coordinator for Health Information Technology (HealthIT.gov)",
      url: "https://healthit.gov/health-it-basics/benefits-ehrs/",
      year: "2026",
      note: "Read October 6, 2026. Quote: \"An electronic health record (EHR) is a digital version of a patient's paper chart. It contains health information collected and maintained by healthcare providers over time.\" Also: \"including diagnoses, lab results, medications, physician notes, and more\".",
    },
    {
      id: "crio-ctms",
      title: "Site CTMS Software",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/products/site-ctms/",
      year: "2026",
      note: "Vendor page, read October 6, 2026. Quote: \"CRIO's site CTMS software was built to work in tandem with our eSource solution\". Also: \"Manage your patient database, search for patients that meet feasibility criteria, and have website leads come in automatically\", \"Make calls and send texts from within the system\", \"Simplify phone screenings with interactive patient questionnaires\", \"Book patients for special prescreening visits or studies\", \"Set visit or procedure-level receivables, patient stipends, and payables in different currencies\", \"Generate and automatically track invoices and payment vouchers\" and \"Record and reconcile sponsor reimbursements\".",
    },
    {
      id: "crio-esource",
      title: "The #1 eSource in Clinical Trials",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/products/esource/",
      year: "2026",
      note: "Vendor page, read October 6, 2026. Quote: \"Our eSource system is fully integrated with our Site CTMS, eRegulatory, and eConsent solutions. It also has an open API, allowing for integration with other technology providers.\"",
    },
    {
      id: "crio-recruiting-api",
      title: "Recruitment. Simplified. (CRIO's Recruiting API)",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/recruitment-simplified1/",
      year: "2022",
      note: "Blog dated January 4, 2022, re-read October 6, 2026. Quote: \"Vendors can send patient updates, qualify patients into studies, schedule appointments, and more.\" Also: \"eliminate manual entry of patient recruitment data and updates.\" Examples of data sent and received include study qualifications, appointments, demographics and subject status.",
    },
    {
      id: "crio-partners",
      title: "CRIO Clinical Trials Software Company Partners",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/about/partners/",
      year: "2026",
      note: "Re-read October 6, 2026. Bond Health is listed with: \"Automate chart review across your EMR and CRIO. Ranked, pre-screened candidates with cited evidence, delivered straight into your coordinators' workflow.\" Also: \"request API access activation for integrated partners\" and \"Does Your Vendor Integrate With CRIO?\" followed by \"Look for the badge!\"",
    },
    {
      id: "advarra-oncore",
      title: "OnCore Clinical Trial Management System (CTMS)",
      publisher: "Advarra",
      url: "https://www.advarra.com/solutions/sites/ctms/oncore/",
      year: "2026",
      note: "Vendor page, read October 6, 2026. Quote: \"OnCore typically addresses the needs of academic medical centers and cancer centers, as well as some health systems, conducting fifty to 500+ active trials.\" Also: \"the backbone for managing studies across the lifecycle, including protocol setup and activation, participant tracking, financial oversight, and reporting\", \"standardized reporting capabilities, such as NCI reporting\", \"OnCore offers robust integration with EMR systems, including RPE integration for protocol and subject information, and IHE CRPC billing designations\" and \"The OnCore licensing fee is dependent upon your licensed modules and your volume of protocols.\"",
    },
    {
      id: "advarra-cc",
      title: "Clinical Conductor Clinical Trial Management System (CTMS)",
      publisher: "Advarra",
      url: "https://www.advarra.com/solutions/sites/ctms/clinical-conductor/",
      year: "2026",
      note: "Vendor page, read October 6, 2026. Quote: \"Clinical Conductor by Advarra is the CTMS growing research sites and networks count on to scale their footprint and efficiently manage clinical research operations and financials.\" Also: \"Reach prospective participants through text, email, and phone communications to support patient screening and enrollment across studies.\" and \"Coordinate patient scheduling and check-in/check-out, staff calendars, and capacity planning\". CCPay provides participant payment reimbursements.",
    },
    {
      id: "softwareone-cc",
      title: "Clinical Conductor by Advarra",
      publisher: "SoftwareOne Marketplace (Advarra vendor listing)",
      url: "https://platform.softwareone.com/product/clinical-conductor/PCP-3653-6205",
      year: "2026",
      note: "Re-read October 6, 2026. Quote: \"Integrate with Advarra eReg or eSource + EDC, or use Clinical Conductor's API to connect with other platforms throughout your organization.\"",
    },
    {
      id: "rt-ctms",
      title: "CTMS: Clinical Trial Management System",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/solutions/ctms/",
      year: "2026",
      note: "Vendor page, read October 6, 2026 (wording updated since September). Listed under \"Sites, Networks, AMCs & Health Systems\". Quotes: \"Manage subject profiles with full medical history, medications, allergies, and contact attempt logs, all tied to the right study.\" \"Track enrollment from first referral through screen fail, randomization, or completion.\" \"Submit visits against pre-built protocol templates with automated target date calculations and visit window enforcement.\" \"Identify and act on out-of-window visits before they become protocol deviations.\" \"Track referral sources and advertising campaign performance\". \"RealTime CTMS is the operational core of RealTime SOMS\".",
    },
    {
      id: "rt-api",
      title: "API & Integrations",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/api-integrations/",
      year: "2026",
      note: "Re-read October 6, 2026. Quote: \"OData enabled RESTful API allows the creation and consumption of query-able and interoperable RESTful APIs in a simple and standard way\".",
    },
    {
      id: "veeva-eisf",
      title: "eISF Software for Clinical Trial Sites | Veeva SiteVault",
      publisher: "Veeva Systems",
      url: "https://sites.veeva.com/solutions/eisf",
      year: "2026",
      note: "Vendor page, re-read October 6, 2026. Quote: \"SiteVault eISF is an electronic investigator site file (eISF) that reduces the administrative burden of managing paper binders\". Also: \"SiteVault is free for sites with up to 20 active studies, and available with tiered pricing options for larger sites.\"",
    },
    {
      id: "veeva-ctms-faq",
      title: "CTMS General FAQs | SiteVault Help",
      publisher: "Veeva Systems",
      url: "https://sites.veevavault.help/gr/sitevault/ctms/ctms-faq/",
      year: "2026",
      note: "Re-read October 6, 2026. Quote: \"The 'SiteVault Free' edition (which now includes CTMS, eISF, and eConsent) is available to any site managing 20 or fewer concurrent active studies.\" Features: \"Study Calendars: Building and customizing study-specific visit schedules.\" \"Participant Tracking: Logging patient visits and procedures in real-time.\" \"Financial Management: Tracking study budgets, automating invoice generation, and reconciling payments.\" Dashboards track \"staff workload, enrollment curves, earned vs. forecasted revenue, and upcoming milestone dates\". Enterprise adds \"API access for custom integrations\". For sponsors on Veeva's Clinical Platform, data flow covers \"recruitment status and milestone completions\". Also refers to \"the SiteVault suite (including the new CTMS)\".",
    },
    {
      id: "veeva-faq",
      title: "SiteVault FAQ",
      publisher: "Veeva Systems",
      url: "https://sites.veeva.com/sitevault-faq",
      year: "2026",
      note: "Re-read October 6, 2026. Quote: \"The SiteVault Enterprise Package enables integration.\" Also: \"The free version of SiteVault integrates with other Veeva applications but does not currently integrate with third-party systems.\"",
    },
    {
      id: "veeva-launch",
      title: "Veeva SiteVault Now Available to Simplify Study Execution at Clinical Research Sites",
      publisher: "Veeva Systems",
      url: "https://www.veeva.com/resources/veeva-sitevault-free-now-available-to-simplify-study-execution-at-clinical-research-sites/",
      year: "2020",
      note: "Press release dated January 8, 2020, re-read October 6, 2026. Quote: \"Veeva Systems (NYSE:VEEV) today introduced the availability of Veeva SiteVault, a free eRegulatory solution for clinical research sites.\"",
    },
    {
      id: "vault-ctms",
      title: "Veeva CTMS",
      publisher: "Veeva Systems",
      url: "https://www.veeva.com/products/veeva-ctms/",
      year: "2026",
      note: "Sponsor and CRO product page, read October 6, 2026. Quote: \"CTMS is an enterprise trial management system that provides end-to-end study management and monitoring capabilities for insourced and outsourced trials.\" Also: \"Dashboards and reports track key indicators, including enrollment and milestones\", \"Monitoring visit reports support automation\", \"Issues and Protocol Deviations are logged\" and \"CTMS is connected with EDC to support enrollment, monitoring, payments\".",
    },
  ],
  related: [
    { label: "Integrations", href: "/integrations", description: "The EHRs and CTMS systems Bond works with, and what each connection needs." },
    { label: "Bond and CRIO", href: "/integrations/crio", description: "Bond's certified, two-way CTMS integration." },
    { label: "Implementation", href: "/implementation", description: "Where the CTMS connection sits in the 48-hour EHR plan." },
    { label: "Clinical trial management system (CTMS)", href: "/glossary/ctms", description: "The short glossary definition." },
  ],
};

export default page;
