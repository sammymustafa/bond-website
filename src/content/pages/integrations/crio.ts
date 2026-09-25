import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations/crio",
  category: "integration",
  title: "CRIO CTMS patient recruitment integration: Certified Partner",
  description:
    "How Bond, a CRIO Certified Partner, screens charts, sends pre-screened patients into CRIO CTMS, reads status back, and what your CRIO admin sets up.",
  keywords: [
    "CRIO CTMS integration",
    "CRIO certified partner patient recruitment",
    "CRIO CTMS recruiting API",
    "AI patient recruitment for CRIO sites",
    "CRIO Partner Directory",
  ],
  eyebrow: "Integration",
  h1: "Connecting Bond to CRIO",
  intro:
    "Bond Health is a CRIO Certified Partner, listed on CRIO's partners page under Patient Acquisition & Retention as of September 2026.{{cite:bond-site,crio-partners}} For sites on CRIO, Bond screens the EHR and the patient records the site keeps in CRIO against a study's criteria, pre-screens likely matches by voice or text, and schedules the screening visit.{{cite:crio-bond-announcement}}",
  summary: "How pre-screened patients and statuses move between Bond and CRIO, and what the CRIO Certified Partner badge covers.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "what-is-crio",
      heading: "What is CRIO, and who uses it?",
      blocks: [
        {
          type: "p",
          text: "CRIO makes software for research sites and site networks, plus a Central eSource product for sponsors.{{cite:crio-products,crio-sponsors}} Per its About page, it was founded in 2015 and is based in Boston.{{cite:crio-about}} Its core product is [eSource](/glossary/esource), which CRIO says is integrated with its Site [CTMS](/glossary/ctms), eRegulatory and eConsent modules and has an open API for other vendors.{{cite:crio-esource}}",
        },
        {
          type: "stats",
          items: [
            { value: "3,000", label: "Sites using CRIO, per CRIO's page for sites (September 2026)", cite: "crio-sites" },
            { value: "6,000+", label: "Protocols run on CRIO, per the same page", cite: "crio-sites" },
            { value: "30+", label: "Countries with CRIO sites, per the same page", cite: "crio-sites" },
            { value: "28%", label: "Average share of US sites that were CRIO clients in 50 Phase 2 and 3 studies, per CRIO", cite: "crio-clinical-leader" },
          ],
        },
        {
          type: "p",
          text: "These are CRIO's own figures, and they vary by page: its page for sponsors says 2,500 sites.{{cite:crio-sponsors}} CRIO has not published the method behind the US share.{{cite:crio-clinical-leader}}",
        },
        {
          type: "p",
          text: "CRIO's Site CTMS already covers parts of recruitment: a patient database with feasibility search, website leads, in-system calls and texts, and phone-screening questionnaires.{{cite:crio-ctms}} Bond does not replace those tools. It adds EHR screening with evidence for each criterion, plus voice and text agents, then hands patients to CRIO.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "certified-partner",
      heading: "What does CRIO Certified Partner mean?",
      blocks: [
        {
          type: "p",
          text: "CRIO's Partners Program brings third-party suppliers to CRIO site clients, and CRIO says partners are qualified by demonstrating competency with its platform.{{cite:crio-partners-intro}} CRIO launched the program and its Partner Directory in July 2024, with certified partners in areas such as patient recruitment, data management, accreditation, and contract and billing support.{{cite:crio-partners-launch}}",
        },
        {
          type: "ul",
          items: [
            "**Where partners are listed.** CRIO's Partner Directory, which CRIO calls a complimentary tool in its in-app Help Center, lets sites read user reviews, contact partners and request API access activation.{{cite:crio-partners-intro,crio-partners}}",
            "**The badge.** CRIO's partners page tells sites asking whether a vendor integrates with CRIO to look for its Certified Integration Partner badge.{{cite:crio-partners}}",
            "**Bond's listing.** CRIO announced Bond's addition to the program on LinkedIn in September 2026.{{cite:crio-bond-announcement}}",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "What the certification covers",
          text: "It covers competency with CRIO's platform. It is not a regulatory certification, and CRIO does not describe it as a review of a partner's matching accuracy or security.{{cite:crio-partners-intro}} It is the only vendor certification Bond holds. Bond connects to EHRs over FHIR R4, HL7 v2 or an aggregator, and works alongside other research systems through APIs or file export where the vendor supports them.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "patient-flow",
      heading: "How do matched patients get into CRIO?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Screen",
              text: "[Identify](/identify) reads the EHR over FHIR R4 or HL7 v2 and, once the site activates API access, the patient records the site keeps in CRIO. Each match shows the evidence for each criterion.{{cite:bond-site,crio-bond-announcement}}",
            },
            {
              title: "Review",
              text: "Coordinators review ranked candidates and the evidence behind each one in Bond's dashboard.{{cite:bond-site}}",
            },
            {
              title: "Reach out and pre-screen",
              text: "[Engage](/engage) agents call or text patients, tell them AI assistance is used, and ask the [pre-screening](/glossary/pre-screening) questions the chart cannot answer. Patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Hand off to CRIO",
              text: "Patients who pass are sent to CRIO through the CRIO API. CRIO says its Recruiting API lets vendors send patient updates, qualify patients into studies and schedule appointments.{{cite:crio-recruiting-api}}",
            },
            {
              title: "Screening visit",
              text: "The coordinator picks the patient up in CRIO. Eligibility is decided at the visit, and the site obtains consent.",
            },
          ],
        },
        {
          type: "table",
          caption: "Data Bond needs and how it is carried",
          columns: ["Data element", "FHIR resource or interface", "Notes"],
          rows: [
            ["Problems, medications, labs", "From the EHR: FHIR R4 Condition, MedicationRequest and Observation, or HL7 v2", "Read from the EHR or an aggregator, not through CRIO. See [Epic](/integrations/epic) and [Oracle Health](/integrations/oracle-cerner)."],
            ["Clinical notes", "From the EHR: FHIR R4 DocumentReference, where the EHR exposes notes", "Used for criteria that coded fields do not capture."],
            ["Patient records held in CRIO", "From CRIO: CRIO API, once the site activates access", "Lets Bond screen patients the site already has in CRIO."],
            ["Demographics and contact details", "To CRIO: Recruiting API", "Creates or updates the patient so staff do not re-key it."],
            ["Study qualification", "To CRIO: Recruiting API", "Places the patient on the matching study. The evidence stays viewable in Bond."],
            ["Screening visit", "To CRIO: Recruiting API", "Booked by the agent into slots the site sets."],
            ["Subject status", "From CRIO: Recruiting API", "Feeds Bond's enrollment reports."],
          ],
          note: "CRIO lists medical conditions, study qualifications, appointments, scheduling, demographics and subject status as examples of data its Recruiting API can send and receive.{{cite:crio-recruiting-api}} Which fields are exchanged is confirmed with each site during setup.",
        },
      ],
    },
    {
      id: "status-sync",
      heading: "How do statuses stay in sync?",
      blocks: [
        {
          type: "p",
          text: "After the handoff, CRIO is the system of record. Staff record visit outcomes once, in CRIO, and Bond reads subject status back through the API, which CRIO says can both send and receive status.{{cite:crio-recruiting-api}}",
        },
        {
          type: "ul",
          items: [
            "**A full funnel.** Bond's reports cover patients matched, contacted, pre-screened, consented and randomized, plus time to enrollment and screen-failure signals.{{cite:bond-site}} The stages after the handoff come from CRIO status.",
            "**Screen failures.** A screen failure recorded in CRIO shows up in those signals, so the site and Bond can check which criterion the chart missed. See [how we validate eligibility logic](/blog/validating-eligibility-logic-before-go-live).",
          ],
        },
      ],
    },
    {
      id: "site-setup",
      heading: "What do the CRIO admin and IT team need to do?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Activate Bond's API access.** In CRIO's Partner Directory, request integration with Bond. CRIO then activates API access for the site's organization.{{cite:crio-partners-intro,crio-partners}}",
            "**Match studies.** Link each Bond study to its CRIO study so patients land on the right protocol.",
            "**Choose data sources.** Decide whether Bond screens the EHR, the records the site holds in CRIO, or both.",
            "**Set visit slots and owners.** Tell Bond which slots it may book and who gets each referral and escalation.",
            "**Agree status meanings.** Confirm which CRIO statuses count as screened, screen failed, consented and randomized in Bond's reports.",
            "**Set Bond user roles.** Assign role-based access in Bond, with SSO where the site uses it.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "The site's IT and compliance teams handle the BAA, the security review and EHR access over FHIR or HL7. The CRIO steps sit in the outreach and scheduling step of the [implementation plan](/implementation) and run alongside the EHR connection. A full deployment with the EHR connected takes 48 hours, depending on the EHR, the IT review and the interface method.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "security",
      heading: "How is patient data protected between Bond and CRIO?",
      blocks: [
        {
          type: "ul",
          items: [
            "**A BAA first.** Bond signs a business associate agreement with each site before handling its PHI.{{cite:bond-site}}",
            "**Site-granted access.** CRIO activates Bond's API access at the site's request, for that site's CRIO organization.{{cite:crio-partners-intro}}",
            "**Bond's controls.** Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Its controls include encryption at rest and in transit (AES-256 where applicable), role-based access with SSO, audit logging and penetration testing.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "The [security](/security) page shows where PHI goes in a Bond deployment and links to Bond's Trust Center.",
        },
      ],
    },
    {
      id: "not-integrated",
      heading: "What is not integrated with CRIO today?",
      blocks: [
        {
          type: "p",
          text: "Bond's CRIO connection is for recruitment. The rest of CRIO works as it does today.",
        },
        {
          type: "table",
          caption: "CRIO modules and Bond",
          columns: ["CRIO module", "What it covers", "Connected to Bond?"],
          rows: [
            ["Site CTMS", "Patient database, recruitment, scheduling and site operations", "Yes, for patients, study qualification, screening visits and status"],
            ["Site eSource", "Source data captured at study visits", "No. Site staff enter visit data"],
            ["eRegulatory", "Delegation logs and regulatory documents with versioning and e-signature", "No"],
            ["eConsent", "Electronic informed consent", "No. Bond's [consent support](/consent) is separate; the site documents consent"],
            ["EDC integration, Reviewer EDC, reporting, patient stipends", "Data transfer and review, reports, stipends", "No"],
          ],
          note: "Module names and descriptions from CRIO's product pages, September 2026.{{cite:crio-products,crio-ereg}}",
        },
        {
          type: "p",
          text: "Bond's agents use Bond's own voice and text channels, not CRIO's in-system calling. For other research systems, see [integrations](/integrations).",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your CRIO admin. We will walk through study mapping, statuses and visit slots.",
          secondaryLabel: "Read about security",
          secondaryHref: "/security",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do we need CRIO to use Bond?",
      a: "No. Bond can hand referrals to a Google Sheet, the site calendar or another CTMS, working alongside it through an API or file export where the vendor supports it.{{cite:bond-site}} See [integrations](/integrations).",
    },
    {
      q: "Can Bond screen patients already in our CRIO database?",
      a: "Yes, once the site activates Bond's API access. CRIO's partner listing describes Bond as automating chart review across the EMR and CRIO.{{cite:crio-partners}}",
    },
    {
      q: "How is the CRIO connection priced?",
      a: "Bond charges no integration fee: integration and workflow configuration fall under its volume-based platform fee, alongside a success fee per enrolled patient; see [pricing](/pricing).{{cite:bond-site}} CRIO describes its Partner Directory as complimentary for CRIO users.{{cite:crio-partners-intro}}",
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
      id: "crio-about",
      title: "About CRIO",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/about/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Founded in 2015 by current Co-CEO Raymond Nomizu and Phuc Truong\". Footer address: 68 Harrison Avenue, Boston, MA 02111. Some older CRIO materials give 2016, the year its eSource product launched.",
    },
    {
      id: "crio-esource",
      title: "The #1 eSource in Clinical Trials",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/products/esource/",
      year: "2026",
      note: "Vendor page, accessed September 2026. Quote: \"Our eSource system is fully integrated with our Site CTMS, eRegulatory, and eConsent solutions. It also has an open API, allowing for integration with other technology providers.\"",
    },
    {
      id: "crio-sites",
      title: "Clinical Research Technology for Sites",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/solutions/sites/",
      year: "2026",
      note: "Vendor claim, accessed September 2026. Quote: \"3,000 sites use the CRIO platform on 6,000+ protocols for over 3000 sponsors in over 30 different countries.\"",
    },
    {
      id: "crio-sponsors",
      title: "Central eSource for Sponsors",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/solutions/sponsors/",
      year: "2026",
      note: "Vendor claim, accessed September 2026. Quote: \"CRIO is the eSource solution they're already using, trusted by 2,500 sites on 6,000+ protocols across 30+ countries.\"",
    },
    {
      id: "crio-clinical-leader",
      title: "CRIO vendor page",
      publisher: "Clinical Leader (vendor-supplied content)",
      url: "https://www.clinicalleader.com/ecommcenter/crio",
      year: "2026",
      note: "Vendor-supplied content; sample and method not published. Quote: \"A recent analysis of 50 Phase 2 and 3 studies showed that, on average, 28% of U.S. sites were CRIO clients, with even higher adoption in key therapeutic areas.\"",
    },
    {
      id: "crio-ctms",
      title: "Your Integrated Site CTMS Software",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/products/site-ctms/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Manage your patient database, search for patients that meet feasibility criteria, and have website leads come in automatically\". Also: \"Make calls and send texts from within the system to move patients through the funnel\" and \"Simplify phone screenings with interactive patient questionnaires\".",
    },
    {
      id: "crio-products",
      title: "Configurable eClinical Solutions",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/products/",
      year: "2026",
      note: "Product list, accessed September 2026: Central eSource, Site eSource, Reviewer EDC, EDC Integration, eConsent, eRegulatory, Site CTMS, Reporting and Patient Stipends. Quote: \"Site eSource Capture source data in real time\" and \"EDC Integration Integrate Central eSource with select third-party EDC systems\" and \"Patient Stipends Issue and load patient stipend cards\"",
    },
    {
      id: "crio-ereg",
      title: "eRegulatory",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/products/eregulatory/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Build electronic delegation (eDOA) logs and copy duty profiles from one user to the other\". Also: \"Upload, version, route, and e-sign regulatory documents\".",
    },
    {
      id: "crio-partners-intro",
      title: "Introducing the CRIO Partners Program for Research Sites",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/introducing-the-crio-partners-program-coming-soon/",
      year: "2024",
      note: "Blog dated June 18, 2024, re-checked September 22, 2026. Quote: \"The Partners Program is an umbrella program whereby CRIO partners with best-in-class third party suppliers to bring needed products or services to CRIO site clients.\" Also: \"Partners in the program have been qualified by demonstrating competency with CRIO's platform. You will be able to view a list of CRIO certified Partners using the Partner Directory, a complimentary tool which will be available to all CRIO users, in the in-app Help Center.\" and \"Each Partner Directory listing displays reviews from users and enables sites to directly communicate with the Partner or request integration with the Partner to their organization via the CRIO API.\"",
    },
    {
      id: "crio-partners-launch",
      title: "CRIO Announces Official Launch of Partners Program",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/crio-announces-official-launch-of-partners-program/",
      year: "2024",
      note: "Blog dated July 14, 2024. Quote: \"certified partners specializing in site solutions such as patient recruitment, data management, accreditation services, contract and billing support\"",
    },
    {
      id: "crio-partners",
      title: "CRIO Clinical Trials Software Company Partners",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/about/partners/",
      year: "2026",
      note: "Accessed September 22, 2026 (Bond Health was not yet listed when checked on September 21). Bond Health's listing under Patient Acquisition & Retention reads: \"Automate chart review across your EMR and CRIO. Ranked, pre-screened candidates with cited evidence, delivered straight into your coordinators' workflow.\" Also: \"Use the CRIO Partner Directory to search for providers, read reviews from other CRIO users, request information from CRIO Partners, and request API access activation for integrated partners.\" and \"Does Your Vendor Integrate With CRIO?\" followed by \"Look for the badge!\" (a hexagonal badge reading Certified, Integration, Partner).",
    },
    {
      id: "crio-recruiting-api",
      title: "Recruitment. Simplified. (CRIO's Recruiting API)",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/recruitment-simplified1/",
      year: "2022",
      note: "Blog dated January 4, 2022, re-checked September 22, 2026. Quote: \"Vendors can send patient updates, qualify patients into studies, schedule appointments, and more.\" Also: \"Here are a few examples of patient data that can be sent and received using the API: Medical conditions Study qualifications Appointments Scheduling Demographics Subject status\" and \"eliminate manual entry of patient recruitment data and updates.\"",
    },
    {
      id: "crio-bond-announcement",
      title: "CRIO welcomes Bond Health to the CRIO Partners Program (LinkedIn posts)",
      publisher: "CRIO and Bond Health, via Bond Health's LinkedIn company page",
      url: "https://www.linkedin.com/company/bondtrials",
      year: "2026",
      note: "Posts from September 2026, accessed September 22, 2026. CRIO's post: \"CRIO is excited to welcome Bond Health to the CRIO Partners Program, bringing AI-powered patient recruitment to sites running trials on CRIO.\" Bond's post: \"Excited to announce that Bond Health is now a CRIO partner\"; on CRIO: \"It runs the trial once a patient is in. Visits, source docs, billing, the regulatory binder\"; on Bond: \"Finding the patient, screening them, getting them to the visit\"; and for CRIO sites: \"LLM-based screening to identify eligible patients from the EHR, CRIO, and Meta/Google Ads\" and \"Voice and SMS/text agents for pre-screening and scheduling\".",
    },
  ],
  related: [
    { label: "All integrations", href: "/integrations", description: "EHR connections and the research systems Bond works alongside." },
    { label: "Implementation", href: "/implementation", description: "Where the CRIO steps sit in the 48-hour plan." },
    { label: "For research sites", href: "/for/research-sites", description: "What Bond changes for coordinators and site directors." },
    { label: "For site networks", href: "/for/site-networks", description: "Running Bond across several locations and systems." },
    { label: "Security", href: "/security", description: "BAA, encryption, access control and the data flow." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond screens charts and shows evidence per criterion." },
  ],
};

export default page;
