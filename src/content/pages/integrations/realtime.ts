import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/realtime",
  category: "integration",
  title: "RealTime CTMS integration for patient recruitment",
  description:
    "How Bond works alongside RealTime CTMS: referral handoff, recruitment status and outcomes via RealTime's API or file export, site setup, security and limits.",
  keywords: [
    "RealTime CTMS integration patient recruitment",
    "RealTime CTMS referral handoff",
    "RealTime eClinical API",
    "CTMS recruitment status sync",
    "clinical trial recruitment CTMS",
  ],
  eyebrow: "Integration",
  h1: "RealTime CTMS and Bond: how they work together",
  intro:
    "Bond Health finds and pre-screens patients from the EHR, then hands each referral to the system your coordinators already use. At a RealTime site, referrals, recruitment status and outcomes move between Bond and RealTime-CTMS through RealTime's API or a file export, depending on what the site enables. Bond works alongside RealTime; it is not a RealTime partner.",
  summary: "How referrals, recruitment status and outcomes move between Bond and RealTime-CTMS, and what is not integrated.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "what-is-realtime",
      heading: "What is RealTime, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "RealTime eClinical Solutions, formerly RealTime Software Solutions,{{cite:rt-awards-2025}} makes software for running clinical research sites. Its founder began building it in 2013 to meet the needs of the large research site he owned.{{cite:rt-ceo-2022}} RealTime-CTMS tracks recruitment, subjects, visits, finances and reporting; per RealTime's website, it can centrally manage an unlimited number of sites and studies in over 30 countries.{{cite:rt-ctms}} RealTime also sells eSource, eReg/eISF, SitePay participant payments and Engage!, a participant portal with remote eConsent.{{cite:rt-esource,rt-ereg,rt-sitepay,rt-engage}}",
        },
        {
          type: "p",
          text: "As of September 2026, RealTime's CTMS page lists recruitment integrations for websites, Facebook ads and SubjectWell, plus visit scheduling with window calculations and text reminders.{{cite:rt-ctms}} The figures below are RealTime's own; it does not name the customers or its ranking basis.",
        },
        {
          type: "stats",
          items: [
            { value: "3,000+", label: "Clinical research sites using RealTime, per RealTime (January 2024)", cite: "rt-growth-2024" },
            { value: "9 of top 10", label: "Site networks using RealTime solutions, per RealTime (November 2025)", cite: "rt-cro-2025" },
            { value: "3 of top 5", label: "CROs using RealTime solutions, per RealTime (November 2025)", cite: "rt-cro-2025" },
            { value: "600,000+", label: "Patient visits supported per year, per RealTime's website (September 2026)", cite: "rt-home" },
          ],
        },
      ],
    },
    {
      id: "how-bond-fits",
      heading: "How does Bond work alongside RealTime?",
      blocks: [
        {
          type: "p",
          text: "Bond works before a patient becomes a subject. RealTime-CTMS is where the site tracks the patient from referral onward. The referral is the handoff.",
        },
        {
          type: "ol",
          items: [
            "[Identify](/identify) screens EHR records against the study's inclusion and exclusion criteria and shows the evidence for each criterion.",
            "A coordinator reviews the ranked list and accepts or rejects each match.",
            "Bond's voice and text agents contact accepted patients, tell them AI assistance is used, pre-screen and book a visit. Patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            "Bond passes the referral to RealTime, by API or through a shared sheet, with the study, the referral source and a pre-screen summary.",
            "The coordinator works the subject in RealTime as usual. Screening and randomization outcomes come back to Bond for reporting.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "What Bond does and does not claim",
          text: "As of September 2026, RealTime's API page lists Devana, Mailchimp, Microsoft Outlook, SubjectWell and Twilio as integration partners. Bond is not on that list and holds no RealTime certification.{{cite:rt-api}} Bond's only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "data-and-interfaces",
      heading: "What data moves, and how is it carried?",
      blocks: [
        {
          type: "p",
          text: "Per RealTime's website, its API is an OData-enabled REST API, built for connecting RealTime data to CRM, ERP, EMR, analytics and BI systems.{{cite:rt-api}} A 2022 RealTime post says lead-generation campaigns connected to RealTime deliver leads directly into studies,{{cite:rt-ctms-blog}} so RealTime already has a path for leads that start outside it. Which fields Bond can read or write at your site is confirmed with your RealTime administrator during scoping.",
        },
        {
          type: "table",
          caption: "Data Bond uses at a RealTime site, and how it moves",
          columns: ["Data element", "FHIR resource or interface", "Notes"],
          rows: [
            [
              "Chart data for screening",
              "EHR via FHIR R4 (Patient, Condition, MedicationRequest, Observation, DocumentReference), HL7 v2 or an aggregator",
              "Read from the EHR, not from RealTime.",
            ],
            [
              "Study mapping",
              "Set in Bond during configuration",
              "Each Bond study is matched to its RealTime study so referrals land in the right place.",
            ],
            [
              "Referral",
              "RealTime API where enabled; otherwise a shared Google Sheet or export file",
              "Name, contact details, study, referral source (Bond) and a short pre-screen summary. On the sheet path, a coordinator enters it in RealTime.",
            ],
            [
              "Recruitment status",
              "RealTime API, or the same sheet",
              "Contacted, not reached, pre-screen passed or failed with the reason, visit booked.",
            ],
            [
              "Screening visit",
              "Site calendar connection",
              "Bond books into the site's calendar. The coordinator logs the visit in RealTime as usual.",
            ],
            [
              "Outcomes",
              "RealTime API read, or a periodic report export from RealTime",
              "Screened, screen failed, consented, randomized. Used for reporting and for Bond's success fee, which is charged per randomized patient.{{cite:bond-site}}",
            ],
            [
              "Consent support log",
              "Bond audit trail only",
              "Not sent to RealTime. The signed consent stays in the site's eConsent tool or regulatory binder.",
            ],
          ],
        },
      ],
    },
    {
      id: "site-tasks",
      heading: "What do the site's RealTime administrator and IT team need to do?",
      blocks: [
        {
          type: "p",
          text: "Most of the work is decisions, not code. The RealTime administrator owns the steps below with Bond. The site's IT team handles the EHR connection and security review separately; the [integrations](/integrations) page covers each EHR.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Choose the handoff method",
              text: "API, shared sheet, or Bond's dashboard only. A site can start with a sheet for the first study and add the API once the workflow is settled.",
            },
            {
              title: "Confirm API access",
              text: "Check that the site's RealTime agreement covers API use, issue a credential for Bond, and limit it to the studies and fields the connection needs.",
            },
            {
              title: "Map statuses and sources",
              text: "Match Bond's statuses to the subject statuses and referral sources the site already uses, so RealTime reports keep working.",
            },
            {
              title: "Test on one study",
              text: "Send test referrals to one study, have a coordinator check each record, then switch on the rest.",
            },
            {
              title: "Bring in RealTime if needed",
              text: "Per its website, RealTime's professional services include Integration Services with custom API development and configuration.{{cite:rt-services}} A site that wants RealTime's team involved scopes that with RealTime directly.",
            },
          ],
        },
      ],
    },
    {
      id: "timeline",
      heading: "Where does this fit in the 4 to 6 week implementation?",
      blocks: [
        {
          type: "p",
          text: "Bond's estimate for a full deployment with the EHR connected is 4 to 6 weeks, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} In the [implementation plan](/implementation), the CTMS or sheet connection is set up in weeks 3 to 5, alongside outreach scripts and calendar scheduling. Most of the elapsed time goes to approvals: the BAA, the security review and EHR access.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Starting before the EHR is connected",
          text: "A pilot without EHR integration can be set up in under 2 weeks.{{cite:bond-site}} A site can seed it with a list, such as volunteers in its RealTime patient database who agreed to be contacted about studies, and track referrals on the sheet. The list is PHI, so the BAA and security review still come first.",
        },
      ],
    },
    {
      id: "security",
      heading: "How is patient data protected between Bond and RealTime?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Agreement first.** Bond signs a business associate agreement before any PHI moves.{{cite:bond-site}}",
            "**Only referrals cross over.** RealTime receives records only for patients Bond refers. The site decides whether declines and pre-screen failures are also logged there.",
            "**Bond's controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its controls include encryption in transit and at rest (AES-256 where applicable), role-based access, SSO, audit logging and penetration testing.{{cite:bond-site}}",
            "**Your risk analysis.** Data synced to RealTime or a shared sheet falls under that system's access controls, so list each connection. The [security](/security) page maps where PHI goes in a Bond deployment.",
          ],
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with RealTime today?",
      blocks: [
        {
          type: "ul",
          items: [
            "**No certified or native integration.** Bond connects via RealTime's API or a file export under the site's own account.",
            "**eSource and eReg/eISF.** Bond does not write visit data to RealTime eSource or file documents in eReg/eISF.",
            "**Payments.** Bond does not trigger SitePay stipends or reimbursements.",
            "**Messaging.** Bond sends its own voice and text outreach, not through RealTime Text, which per RealTime uses a US short code for recruitment messages.{{cite:rt-text}}",
            "**eConsent signatures.** Bond supports the consent conversation. Signatures are captured in the site's eConsent tool, such as RealTime's remote eConsent, or on paper.{{cite:rt-engage}}",
            "**Screening from RealTime data.** Bond screens from the EHR, not from eSource forms or subject histories in RealTime.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your RealTime administrator. We will pick the handoff method, map statuses and date the work against your calendar.",
          secondaryLabel: "See all integrations",
          secondaryHref: "/integrations",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a certified RealTime integration partner?",
      a: "No. Bond works alongside RealTime through the site's own account. Bond's only vendor certification is CRIO Certified Partner.{{cite:bond-site}}",
    },
    {
      q: "Will Bond referrals look different from our other sources in RealTime?",
      a: "They carry Bond as the referral source and use the statuses your site already tracks, so source reports stay comparable with website, social and SubjectWell leads.",
    },
    {
      q: "Does Bond replace RealTime Text?",
      a: "No. Bond runs its own voice and text outreach for first contact and pre-screening. Sites that keep RealTime Text for reminders agree with Bond which system sends each message, so no patient is contacted twice.",
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
      id: "rt-ceo-2022",
      title: "RealTime Software Solutions Welcomes Stephen Johnson as CEO; Rick Greenfield Assumes Role of Founder & President",
      publisher: "PR Newswire (RealTime Software Solutions)",
      url: "https://www.prnewswire.com/news-releases/realtime-software-solutions-welcomes-stephen-johnson-as-ceo-rick-greenfield-assumes-role-of-founder--president-301602698.html",
      year: "2022",
      note: "Quote: \"Greenfield began developing RealTime solutions in 2013 to meet the needs he personally experienced as the owner of a large clinical research site.\"",
    },
    {
      id: "rt-growth-2024",
      title: "RealTime Software Solutions Reports Record Growth in 2023, Emerging as the Premier Clinical Trial Management Solution for Clinical Research Sites",
      publisher: "PR Newswire (RealTime Software Solutions)",
      url: "https://www.prnewswire.com/news-releases/realtime-software-solutions-reports-record-growth-in-2023-emerging-as-the-premier-clinical-trial-management-solution-for-clinical-research-sites-302037072.html",
      year: "2024",
      note: "Vendor figure, January 2024. Quote: \"Adopted by over 3,000 clinical research sites worldwide, RealTime has experienced a rapid surge in user growth.\"",
    },
    {
      id: "rt-cro-2025",
      title: "Top 5 Global CRO Chooses RealTime eClinical Solutions to Modernize Regulatory Oversight Across Hundreds of Studies",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/2025/11/05/top-5-global-cro-chooses-realtime-eclinical-solutions-to-modernize-regulatory-oversight-across-hundreds-of-studies/",
      year: "2025",
      note: "Vendor figure, November 2025; customers and ranking basis not named. Quote: \"joining three of the top five CROs and nine of the top 10 site networks already using RealTime solutions\"",
    },
    {
      id: "rt-home",
      title: "RealTime eClinical Solutions: Clinical Research software systems",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/",
      year: "2026",
      note: "Homepage stat block, accessed September 2026. Quote: \"600,000+ patient visits supported per year\"",
    },
    {
      id: "rt-ctms",
      title: "CTMS: Clinical Trial Management System",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/solutions/ctms/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Centrally manage an unlimited number of sites, studies, personnel, finances, and reporting in over 30 countries around the globe with infinite scalability.\" Also: \"Grow your patient database with integrations for your website, Facebook ads, SubjectWell, and more.\" and \"Accelerate scheduling with automated study target dates and window calculations, text reminders, and Outlook integration.\"",
    },
    {
      id: "rt-api",
      title: "API & Integrations",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/api-integrations/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"OData enabled RESTful API allows the creation and consumption of query-able and interoperable RESTful APIs in a simple and standard way\". Partners listed on the page: Devana, Mailchimp, Microsoft Outlook, SubjectWell, Twilio.",
    },
    {
      id: "rt-ctms-blog",
      title: "RealTime-CTMS Integrates with Numerous Systems for Max Performance!",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/2022/06/28/ctms-integrations/",
      year: "2022",
      note: "Blog post, June 2022. Quote: \"Your lead generation campaigns that are connected to RealTime will deliver leads directly into RealTime studies.\"",
    },
    {
      id: "rt-text",
      title: "Text",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/solutions/text/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Recruitment-related text messages are sent via short code in the US [...]\"",
    },
    {
      id: "rt-engage",
      title: "Engage!",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/solutions/engage/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Speed up recruiting with remote consenting that can be managed via desktop or mobile app with 'Sign on the Line.'\"",
    },
    {
      id: "rt-ereg",
      title: "eReg / eISF",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/solutions/ereg-eisf/",
      year: "2026",
      note: "Vendor's own description of its product, accessed September 2026.",
    },
    {
      id: "rt-esource",
      title: "eSource",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/solutions/esource/",
      year: "2026",
      note: "Vendor's own description of its product, accessed September 2026.",
    },
    {
      id: "rt-sitepay",
      title: "SitePay: Stipend Payments",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/solutions/sitepay/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Request funds and confirm account balances from within your CTMS.\"",
    },
    {
      id: "rt-services",
      title: "Professional Services",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/professional-services/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"For unique integration needs, we provide custom API development and configuration, allowing new software to communicate effectively with your existing systems.\"",
    },
    {
      id: "rt-awards-2025",
      title: "RealTime eClinical Solutions Wins Dual Honors for Innovation and Marketing in the 2025 Clinical Trials Arena Excellence Awards",
      publisher: "RealTime eClinical Solutions",
      url: "https://realtime-eclinical.com/2025/09/18/realtime-eclinical-solutions-wins-dual-honors-for-innovation-and-marketing-in-the-2025-clinical-trials-arena-excellence-awards/",
      year: "2025",
      note: "Quote: \"The Marketing Award for Brand Innovation recognizes RealTime's recent rebranding initiative, which unified RealTime, Devana, and Complion under the single RealTime eClinical Solutions identity.\"",
    },
  ],
  related: [
    { label: "Site networks", href: "/for/site-networks", description: "How Bond fits organizations that run many sites." },
    { label: "Implementation", href: "/implementation", description: "Where the RealTime handoff sits in the 4 to 6 week plan." },
    { label: "Integrations", href: "/integrations", description: "EHR and research-system connections, and what each requires." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "CRIO", href: "/integrations/crio", description: "Bond's only certified vendor integration." },
  ],
};

export default page;
