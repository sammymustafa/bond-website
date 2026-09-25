import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/implementation",
  category: "product",
  title: "Trial recruitment software implementation: EHR timeline",
  description:
    "What Bond and your site each do in a 4 to 6 week EHR-integrated rollout of trial recruitment software, from BAA and security review to go-live.",
  keywords: [
    "clinical trial recruitment software implementation",
    "EHR integration timeline clinical trials",
    "FHIR R4 integration research site",
    "clinical trial recruitment pilot",
  ],
  eyebrow: "Implementation",
  h1: "Implementation: the 4 to 6 weeks, week by week",
  intro:
    "A full Bond Health deployment with the EHR connected typically takes 4 to 6 weeks, depending on the EHR, the IT review and the interface method. A pilot without EHR integration can be set up in under 2 weeks.{{cite:bond-site}} Most of that time goes to approvals Bond does not control: the BAA, the security review, the EHR connection and, where needed, IRB review of outreach scripts. Below is what Bond does, what your team does, and what exists after each step.",
  summary: "Week-by-week plan for an EHR-integrated deployment, with site tasks, Bond tasks and a faster pilot path.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "week-by-week",
      heading: "What happens each week?",
      blocks: [
        {
          type: "p",
          text: "The table shows the usual order for a full deployment with the EHR connected. Tracks overlap: while IT reviews security and sets up the connection, the study team works through criteria and scripts with Bond.",
        },
        {
          type: "stats",
          items: [
            { value: "4 to 6 weeks", label: "Full deployment with the EHR connected", cite: "bond-site" },
            { value: "Under 2 weeks", label: "Setup for a pilot without EHR integration", cite: "bond-site" },
            { value: "20 days", label: "Median from site activation to first patient screened (CRIO benchmarks, 2026)", cite: "crio-startup" },
          ],
        },
        {
          type: "table",
          caption: "Full EHR-integrated deployment",
          columns: ["Week", "Bond does", "Site does", "Output"],
          rows: [
            [
              "Week 1: kickoff and BAA",
              "Runs kickoff, signs the BAA, shares security documents, reviews the protocol.",
              "Names the PI, coordinator, IT and security contacts. Signs the BAA.",
              "Signed BAA, owners, dated plan",
            ],
            [
              "Weeks 1 to 3: security review",
              "Answers the security questionnaire. Lists the data and API scopes it requests.",
              "Runs its vendor review. Picks FHIR R4, HL7 v2 or an integration partner.",
              "Security approval, chosen interface",
            ],
            [
              "Weeks 2 to 3: EHR connection",
              "Connects in test, then production. Checks which data and note types come through.",
              "Provisions credentials and approves scopes, following the EHR vendor's steps.",
              "Working connection",
            ],
            [
              "Weeks 2 to 4: criteria",
              "Turns each criterion into checks and runs them on a sample of real records.",
              "PI or coordinator settles ambiguous criteria and adjudicates the sample.",
              "Validated, versioned criteria",
            ],
            [
              "Weeks 2 to 4: scripts and IRB",
              "Drafts voice and text scripts with AI disclosure and how to reach a person: a live transfer or a callback.{{cite:bond-product}}",
              "Edits the scripts. Submits them to the IRB where required.",
              "Approved scripts",
            ],
            [
              "Weeks 3 to 5: outreach and scheduling",
              "Loads scripts, sets escalation rules, connects the calendar and CTMS or sheet, sends test calls.",
              "Supplies visit slots, escalation contacts and CTMS access. Tests as a patient.",
              "Tested outreach flow",
            ],
            [
              "Week 5: training",
              "Trains coordinators on the dashboard. Sets up role-based access and SSO.",
              "Decides who reviews matches and who covers escalations.",
              "Trained users",
            ],
            [
              "Weeks 5 to 6: go-live",
              "Turns on screening and outreach at the agreed pace. Monitors quality.",
              "Reviews matches, takes escalations, runs screening visits.",
              "First matches and booked visits",
            ],
            [
              "First month after go-live",
              "Reviews accepted and rejected matches with the site.",
              "Flags wrong matches and screen failures. Approves changes.",
              "Accuracy report, funnel numbers",
            ],
          ],
          note: "Typical sequence for a 4 to 6 week deployment.{{cite:bond-site}} Your dates move with the three approvals below.",
        },
        {
          type: "callout",
          tone: "info",
          title: "What moves the date",
          text: "Three approvals set the pace, and none is Bond's to give: the site's security review, EHR provisioning (by your EHR team and, on some platforms, the vendor), and IRB review of scripts where required. So the security review starts at kickoff, and draft scripts reach the site early for IRB submission.",
        },
      ],
    },
    {
      id: "before-kickoff",
      heading: "What does the site need to have ready?",
      blocks: [
        {
          type: "p",
          text: "None of this requires patient data, and no PHI moves to Bond until the business associate agreement (BAA) is signed.",
        },
        {
          type: "checklist",
          items: [
            "**A PI and a lead coordinator** who can settle ambiguous criteria and review the validation sample.",
            "**An IT contact** who knows the EHR's interfaces and approves new connections.",
            "**A privacy or security contact** to run the vendor review and route the BAA.",
            "**The protocol**, with inclusion and exclusion criteria and the screening visit schedule.",
            "**The IRB of record**, and whether it reviews recruitment scripts.",
            "**Scheduling details**: the calendar for screening visits and the CTMS or sheet that tracks referrals.",
            "**Your EHR and its hosting**, and whether IT already runs third-party FHIR apps.",
          ],
        },
        {
          type: "p",
          text: "Your IT team sees the data and API scopes Bond requests before approving them. Once PHI flows, it is encrypted in transit and at rest (AES-256 where applicable), with role-based access, SSO support and audit logging. Bond also runs penetration testing and keeps a [Trust Center](https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj) for your reviewer.{{cite:bond-site}} Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} See [security](/security).",
        },
      ],
    },
    {
      id: "ehr-connection",
      heading: "How does the EHR connection get approved?",
      blocks: [
        {
          type: "p",
          text: "Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR.{{cite:bond-product}} Most certified EHRs already ship a standard interface. ONC's Cures Act Final Rule required certified EHR developers to update their API technology to FHIR-based APIs under § 170.315(g)(10) and provide it to customers by December 31, 2022, and ONC reported in February 2023 that more than 95 percent of developers met that deadline.{{cite:onc-cures-milestone}} The criterion is built on HL7 FHIR Release 4.0.1,{{cite:onc-g10}} so Bond's default path is FHIR R4 and the site's work is mostly approval and provisioning. Ask your IT team whether those APIs are turned on for third-party apps.",
        },
        {
          type: "p",
          text: "Each EHR has its own paperwork. Per Epic's developer documentation (as of September 2026), a health system signs the open.epic API Subscription Agreement once per organization, and Epic recommends it request a licensing estimate and run a security review scoped to the app's client ID. Bulk FHIR exports also need an analytics registry built around the inclusion criteria in Epic.{{cite:epic-implementing}} On Oracle Health Millennium, per Oracle's documentation, the customer requests a tenant ID and logs a service request to provision the app.{{cite:oracle-provisioning}} Where FHIR falls short, Bond can use an HL7 v2 feed or an integration partner. See [integrations](/integrations), including [Epic](/integrations/epic) and [Oracle Health](/integrations/oracle-cerner).",
        },
        {
          type: "p",
          text: "Firms that build new integrations quote longer. Topflight Apps puts a new app's first production Epic integration at 6 to 12 months, with each added site needing, for most apps, its own approval plus roughly 2 to 4 weeks to go live.{{cite:topflight-epic}} Bond's 4 to 6 weeks covers connecting your site and setting up a study, and depends on your EHR, IT review and interface method.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "configuration",
      heading: "How are criteria, scripts and consent set up?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Configure and validate the criteria",
              text: "Bond reads structured fields, clinical notes, imaging data and other unstructured documents through the approved interface{{cite:bond-product}} and checks them against each criterion, using a terminology graph that links codes and synonyms across SNOMED CT, RxNorm, LOINC, ICD-10-CM and other vocabularies.{{cite:bond-whitepaper}} Before go-live it runs the criteria on a sample of the site's records, and the PI or coordinator adjudicates until agreement meets the study's bar. See [how we validate eligibility logic](/blog/validating-eligibility-logic-before-go-live) and [Identify](/identify).",
            },
            {
              title: "Write the scripts",
              text: "Bond drafts voice and text scripts per site and study. Each tells patients that AI assistance is used and that they can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}} Your team owns the wording. See [Engage](/engage).",
            },
            {
              title: "Clear the IRB",
              text: "Where the IRB reviews recruitment materials, the site submits the scripts with a plain description of how the agents work. The decision is the IRB's. See [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach).",
            },
            {
              title: "Connect scheduling",
              text: "Bond connects to the site calendar and to the CTMS or a Google Sheet, so booked visits and referral status land where coordinators work. Bond is a [CRIO](/integrations/crio) Certified Partner; with other CTMSs it uses the vendor's API or file export where supported.",
            },
            {
              title: "Set up consent support, if used",
              text: "[Consent](/consent) support explains the study in plain language, answers patient questions and escalates to staff. The PI and delegated staff still obtain consent.",
            },
          ],
        },
        {
          type: "p",
          text: "If a study will use ads, Bond sets up the Meta and Google ad campaigns alongside the outreach configuration.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "go-live",
      heading: "What happens at go-live and in the first month?",
      blocks: [
        {
          type: "p",
          text: "Training happens the week before go-live. Coordinators learn the dashboard: the ranked match list, the criterion-to-evidence rationale behind each match, outreach status, pre-screening answers, booked visits and escalations.",
        },
        {
          type: "p",
          text: "At go-live, screening turns on and outreach starts at a pace coordinators can follow up on. Patients who ask for a person go to staff. In the first month, Bond and the site review accepted and rejected matches together, and the site approves any change to criteria or scripts. After that, Bond keeps improving outreach messaging until study close-out.{{cite:bond-product}} Reports cover patients matched, contacted, pre-screened, consented and randomized, time to enrollment, matching accuracy, screen-failure signals and coordinator hours saved.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "pilot",
      heading: "Can a site start before the EHR is connected?",
      blocks: [
        {
          type: "p",
          text: "Yes. A pilot without EHR integration can be set up in under 2 weeks.{{cite:bond-site}} It fits when a study is about to activate and the EHR connection will take longer. It still needs the BAA and your vendor review, because a candidate list is PHI. Early speed matters: CRIO's July 2026 benchmarks put the median time from site activation to first patient screened at 20 days, and 8 days for top-quartile sites.{{cite:crio-startup}}",
        },
        {
          type: "ol",
          items: [
            "**Sign the BAA and pick one study.** Same agreement and security documents as a full deployment.",
            "**Share a candidate list.** The site exports patients it has already identified, for example from an EHR report, into a shared sheet.",
            "**Approve the scripts.** If the IRB must review them first, that review sets the start date.",
            "**Start outreach.** Voice and text agents contact patients, ask the pre-screening questions, book visits and escalate to coordinators.",
            "**Add the EHR connection.** When IT approves it, Bond adds EHR screening. Scripts and scheduling stay in place.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "What the pilot leaves out",
          text: "Without the EHR connection, Bond does not read charts. There is no ranked match list and no criterion-to-evidence rationale. Who gets contacted depends on the site's list and the pre-screening questions.",
        },
      ],
    },
    {
      id: "manual-vs-bond",
      heading: "What changes for coordinators?",
      blocks: [
        {
          type: "table",
          caption: "Recruitment tasks, manual and with Bond",
          columns: ["Task", "Manual way", "With Bond"],
          rows: [
            ["Finding candidates", "Run an EHR report, then open charts one at a time", "Bond reads structured data and notes against each criterion and ranks candidates"],
            ["Checking criteria", "Coordinator reads the chart and logs a decision", "Each match shows the chart evidence per criterion; the coordinator accepts or rejects"],
            ["First contact", "Calls and voicemails during clinic hours", "Voice and text agents disclose AI use and offer a live transfer to a coordinator or a human callback{{cite:bond-product}}"],
            ["Pre-screening", "Coordinator asks the questions by phone", "The agent asks the site-approved questions and records the answers"],
            ["Scheduling", "Back-and-forth, then manual CTMS entry", "Visit booked on the site calendar; status sent to the CTMS or a sheet"],
            ["Record keeping", "Spreadsheets and call notes", "Dashboard and audit trail"],
          ],
        },
      ],
    },
    {
      id: "limits",
      heading: "What does Bond not do?",
      blocks: [
        {
          type: "ul",
          items: [
            "**It does not control your approval queues.** If the security review, EHR provisioning or IRB review runs long, go-live moves.",
            "**It does not decide eligibility.** Bond reports matching accuracy above 90 percent,{{cite:bond-site}} so some matches will be wrong. Coordinators and the PI confirm each one, and the screening visit decides.",
            "**It does not obtain consent.** The PI and delegated staff do.",
            "**It does not replace your CTMS or eRegulatory system.** It works alongside them.",
            "**It does not have a public price list.** Pricing is custom: a volume-based platform fee covers EHR integration, implementation and ongoing operation, with no separate integration fee, plus a success fee per randomized patient. See [pricing](/pricing).{{cite:bond-site}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring your protocol and the name of your EHR. We will lay the plan against your calendar and show which steps are yours.",
          secondaryLabel: "Read about security",
          secondaryHref: "/security",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Bond need EHR access before the BAA is signed?",
      a: "No. No PHI moves to Bond until the business associate agreement is signed.",
    },
    {
      q: "What if our security review takes longer than the plan?",
      a: "Go-live moves with it. Criteria setup and script drafting continue, but validation on real records waits. A pilot also needs the BAA and security review, so it helps only when the EHR connection is the holdup.",
    },
    {
      q: "Does the EHR vendor charge for the connection?",
      a: "That depends on your contract with the EHR vendor. Epic's developer documentation (as of September 2026) recommends that health systems request a licensing estimate early.{{cite:epic-implementing}} Bond charges no integration fee; its integration work is covered by its volume-based platform fee.{{cite:bond-site}}",
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
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health (Goel R., preprint)",
      year: "2026",
      note: "Bond Health preprint, August 2026. Describes the ClinText Graph terminology graph built from 18 biomedical vocabularies including UMLS, SNOMED CT, RxNorm, LOINC and ICD-10-CM/PCS.",
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
      id: "onc-cures-milestone",
      title: "Achieving a Major Milestone: Health IT Developers Certify to Cures Update",
      publisher: "HealthIT.gov (ASTP/ONC)",
      url: "https://healthit.gov/blog/interoperability/achieving-a-major-milestone-health-it-developers-certify-to-cures-update/",
      year: "2023",
      note: "Blog post by Robert Anthony, February 10, 2023. Quote: \"More than 95 percent of Certified Health IT developers met the compliance deadline to update and provide their customers with new technology.\" Also: \"our requirements for standardized APIs included a provision to update certified API technology previously certified to § 170.315(g)(8) to FHIR®-based APIs in 170.315(g)(10) as well as provide that updated certified API technology to customers by December 31, 2022.\"",
    },
    {
      id: "onc-g10",
      title: "Certification Companion Guide: Standardized API for patient and population services",
      publisher: "HealthIT.gov (ASTP/ONC)",
      url: "https://www.healthit.gov/test-method/standardized-api-patient-and-population-services",
      year: "2026",
      note: "Quote: \"the standard adopted at § 170.215(a)(1) (HL7® FHIR® Release 4.0.1)\"",
    },
    {
      id: "epic-implementing",
      title: "Implementing Apps at Epic Customers",
      publisher: "Epic Systems Corporation (Epic on FHIR)",
      url: "https://fhir.epic.com/Documentation?docId=implementing",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Community members who wish to use FHIR APIs with a third-party application registered on the Epic on FHIR website must sign the open.epic API Subscription Agreement. This agreement applies to the organization, not to individual apps.\" Also: \"Epic recommends that healthcare organizations proactively request a licensing estimate and complete a security review based on your client ID's scope.\" Also: \"Using Bulk FHIR requires configuration from the health system, as they will need to create an analytics registry around specific inclusion criteria, within Epic.\"",
    },
    {
      id: "oracle-provisioning",
      title: "FHIR Application Provisioning (Oracle Health Millennium Platform)",
      publisher: "Oracle Help Center (docs.oracle.com)",
      url: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/fhir-app-provisioning/",
      year: "2026",
      note: "Quote: \"The customer logs an SR to Cerner Ignite APIs for Millennium for provisioning.\"",
    },
    {
      id: "topflight-epic",
      title: "Epic EHR Integration for Health Apps: Process, Cost & Challenges",
      publisher: "Topflight Apps",
      url: "https://topflightapps.com/ideas/how-integrate-health-app-with-epic-ehr-emr/",
      year: "2026",
      note: "Development consultancy blog by Joe Tuan, updated September 11, 2026; accessed September 2026. Quote: \"Our planning range for a production integration is 6 to 12 months to the first go-live.\" Also: \"Each additional site then needs its own setup and, for most apps, its own approval on that customer's timeline, plus roughly 2 to 4 weeks to go live\" and, attributed to Scott Rossignol, who led EHR integration at Topflight: \"Your implementation timeline is going to be 90% waiting for the health system to approve your integration and 10% doing, and that 10% can take two weeks to 90 days.\"",
    },
    {
      id: "crio-startup",
      title: "What It Takes to Start a Study: Site Start-up Benchmarks",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/what-it-takes-to-start-a-study-site-start-up-benchmarks/",
      year: "2026",
      note: "Blog post by Raymond Nomizu, July 30, 2026: analysis of CRIO system data with the Site Accreditation and Standards Institute; sample size not stated. Quote: \"The median time from activation to first patient screened is 20 days, but top-quartile performance is observed at just 8 days, or a little over a week. Bottom-quartile performance is 34 days, or just over a month.\"",
    },
  ],
  related: [
    { label: "Integrations", href: "/integrations", description: "Which EHRs and research systems Bond connects to, and what each one needs." },
    { label: "Epic integration", href: "/integrations/epic", description: "The FHIR resources, approvals and IT tasks for Epic sites." },
    { label: "CRIO integration", href: "/integrations/crio", description: "How referrals and statuses move between Bond and CRIO." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "Pricing", href: "/pricing", description: "The volume-based platform fee and the per-enrolled-patient success fee." },
    { label: "Book a demo", href: "/book-a-demo", description: "Map the plan to your protocol, EHR and site calendar." },
  ],
};

export default page;
