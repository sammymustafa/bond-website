import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/pricing",
  category: "product",
  title: "Clinical trial recruitment software pricing per enrollee",
  description:
    "How Bond prices clinical trial recruitment: a volume-based platform fee plus a success fee per randomized patient, with no integration fee, and how it compares.",
  keywords: [
    "clinical trial recruitment software pricing",
    "per enrolled patient pricing clinical trials",
    "patient recruitment success fee",
    "clinical trial recruitment cost per randomized patient",
  ],
  eyebrow: "Pricing",
  h1: "Pricing: a platform fee plus a success fee per randomized patient",
  intro:
    "Bond Health prices every engagement in two parts: a volume-based platform fee, and a success fee for each patient who is randomized. There is no integration fee.{{cite:bond-site}} Pricing is custom, and Bond does not publish dollar amounts. The platform fee covers EHR integration, implementation and ongoing operation.",
  summary: "How Bond's two-part pricing works, what counts as enrolled, and how it compares with other ways to pay for recruitment.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Get custom pricing", href: "/book-a-demo", secondaryLabel: "How implementation works", secondaryHref: "/implementation" },
  sections: [
    {
      id: "two-parts",
      heading: "How does Bond's pricing work?",
      blocks: [
        {
          type: "p",
          text: "There are two fees. The **platform fee** is volume-based and covers EHR integration, implementation and ongoing operation, itemized below; there is no separate integration fee. The **success fee** is charged per enrolled patient, which Bond defines as a patient who is successfully randomized.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "The split follows the costs. Connecting an EHR, passing a security review, configuring scripts and running the platform are covered by the platform fee. The success fee is the part that moves with results.",
        },
      ],
    },
    {
      id: "platform-fee",
      heading: "What does the platform fee cover?",
      blocks: [
        {
          type: "ul",
          items: [
            "**EHR connection.** FHIR or HL7 interfaces, or a connection through an aggregator, set up by Bond with no separate integration fee. Full EHR integration typically takes 4 to 6 weeks, depending on the EHR, IT review and interface method; the [implementation](/implementation) page shows the plan week by week.{{cite:bond-site}}",
            "**Security review and audit logging setup.** Bond goes through your security review, signs a business associate agreement (BAA) and sets up audit logging. Details are on the [security](/security) page.{{cite:bond-site}}",
            "**Workflow configuration.** The study's inclusion and exclusion criteria and the outreach scripts, configured for each site and study.{{cite:bond-site}}",
            "**Ongoing operation.** Compute, monitoring and support for as long as the engagement runs.",
          ],
        },
        {
          type: "h3",
          text: "What is included in every engagement?",
        },
        {
          type: "checklist",
          items: [
            "LLM-based EHR screening in [Identify](/identify), with criterion-to-evidence rationale for each match",
            "Voice and SMS outreach, pre-screening and scheduling in [Engage](/engage)",
            "AI consent support in [Consent](/consent); the site and PI still obtain consent",
            "Real-time dashboard and audit trail",
            "EHR vendor integration via FHIR",
            "Dedicated support{{cite:bond-site}}",
          ],
        },
        {
          type: "h3",
          text: "What does the fee pay to run?",
        },
        {
          type: "p",
          text: "Bond reads structured and unstructured EHR records against the study's inclusion and exclusion criteria and ranks candidates. Bond reports 90%+ matching accuracy for eligibility screening, and each match still shows the evidence behind each criterion, so a coordinator can check the reasoning before acting on it.{{cite:bond-site}} Voice and text agents then run outreach with the scripts configured for that site. Patients are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "PHI is handled under a signed BAA, with encryption at rest and in transit (AES-256 where applicable), role-based access control, SSO support and audit logging.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "enrolled",
      heading: "What counts as an enrolled patient?",
      blocks: [
        {
          type: "p",
          text: "Bond defines enrolled as successfully randomized.{{cite:bond-site}} A match, a referral, a completed pre-screening call, a booked visit or a signed consent form does not count. A patient who consents and then fails screening generates no randomization fee.",
        },
        {
          type: "p",
          text: "Randomization is an event every randomized study already records, so the count can be checked against the study's own records. Where a study needs it, milestones for individual visits can be added on top, and those are written into the contract.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "The gap between a referral and a randomized patient is wide. In a vendor-sponsored survey of 100 US site professionals, fielded by myTomorrows in May 2026, 52% said at least one in five referrals they receive is ruled ineligible before formal screening begins.{{cite:mytomorrows-2026}} In one late-life depression trial in Toronto, 4.3% of Facebook self-referrals were randomized (14 of 323), against 30.3% of provider referrals (10 of 33).{{cite:ainsworth-2023}} That is one small trial, but it shows how far a per-referral count and a per-randomization count can diverge.",
        },
        {
          type: "p",
          text: "The coordinator sees the same funnel the fee is based on. The dashboard reports patients matched, contacted, pre-screened, consented and randomized, along with time to enrollment and screen-failure signals. Reporting is available for sites, CROs and sponsors.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "how-it-compares",
      heading: "How does this compare with other ways to pay for recruitment?",
      blocks: [
        {
          type: "p",
          text: "Each common way to buy recruitment puts the risk of a slow study in a different place. The table compares structure, not price.",
        },
        {
          type: "table",
          caption: "Pricing structures across recruitment approaches",
          columns: ["Approach", "What you pay for", "Who carries the risk if no one enrolls", "What the site still does"],
          rows: [
            [
              "Media and digital recruitment vendors",
              "Campaigns, referrals or milestones, depending on the vendor. Per their websites as of September 2026, 1nHealth prices on milestones such as signed consent forms or randomization, with other models available,{{cite:1nhealth-pricing}} and Trialfacts commits in writing to a participant number and timeframe and refunds the fee for any participants it does not deliver.{{cite:trialfacts-home}}",
              "Depends on the unit priced; the closer it is to randomization, the more the vendor carries",
              "Screens the referrals it receives, including those who turn out not to qualify",
            ],
            [
              "Outsourced staff, such as functional service provider (FSP) contracts",
              "Staff time or units of work. FSP contracts in general are priced either per full-time equivalent, for dedicated staff over a set period, or per unit of measurable output.{{cite:clinical-leader-fsp}}",
              "The buyer under FTE pricing, since time is billed whether or not patients enroll",
              "Works with the added staff; the PI still owns eligibility decisions",
            ],
            [
              "CTMS license",
              "Access. Per SimpleTrials, a CTMS vendor, CTMS fees are typically based on the number of users, studies or both.{{cite:simpletrials-ctms}}",
              "The buyer. The license is owed whatever enrollment does",
              "The recruitment work itself; the CTMS tracks it",
            ],
            [
              "Site staff alone",
              "Coordinator salaries and time",
              "The site",
              "Everything: chart review, calls, scheduling, consent",
            ],
            [
              "Bond",
              "A volume-based platform fee, plus a success fee per randomized patient; no integration fee{{cite:bond-site}}",
              "Shared. The platform fee is owed; the success fee is owed only for randomized patients",
              "Reviews matches, takes escalations, runs screening visits and obtains consent",
            ],
          ],
          note: "Structures only. Many vendors mix models, and none of these rows states a price.",
        },
        {
          type: "p",
          text: "Media recruitment reaches people who are not in the site's records at all. Bond covers that path too: it sets up Meta and Google ad campaigns for your studies, and those leads go through the same pre-screening and scheduling as EHR matches.{{cite:bond-product}} The cost of media recruitment varies widely. A 2026 Tufts CSDD study of 32 studies from eight sponsors and CROs found a median centralized outreach budget of $1.33 million, and median outreach cost per patient ranging from $143 in vaccine studies to $11,392 in immunology studies.{{cite:tufts-outreach-2026}} The abstract does not say whether a patient means referred, enrolled or randomized, and the figures cover centralized outreach spend only.",
        },
        {
          type: "p",
          text: "The evidence cuts both ways. A 2020 meta-analysis found online recruitment cheaper per enrolled participant (median $72 against $199 offline), but offline recruitment turned screened people into enrollees at a higher rate. The authors suggest one reason for the second finding: sites already hold health records of suitable patients.{{cite:jmir-2020}} For a fuller comparison, see [Bond vs media recruitment](/compare/bond-vs-media-recruitment) and [recruitment software compared](/compare/clinical-trial-recruitment-software).",
        },
      ],
    },
    {
      id: "cost-of-not-enrolling",
      heading: "What does a site that does not enroll cost?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "11%", label: "Sites in a typical trial that enroll no patients (Tufts CSDD, 2013)", cite: "tufts-2013" },
            { value: "37%", label: "Sites that under-enroll against target, same analysis", cite: "tufts-2013" },
            { value: "$55,716", label: "Average direct cost of one day of a Phase III trial, in 2023 dollars (Tufts CSDD, 2024)", cite: "tufts-delay-2024" },
          ],
        },
        {
          type: "p",
          text: "Tufts CSDD's analysis of more than 150 studies and nearly 16,000 sites found that 11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their targets and 13% exceed them.{{cite:tufts-2013}} The data are global and were published in 2013, so treat them as a baseline rather than a current rate.",
        },
        {
          type: "p",
          text: "Every activated site carries fixed costs, whether or not it enrolls. In oncology, a 2023 analysis by the data company Phesi of 173 cancer trials and 11,826 sites found that 19% of sites enrolled just one patient. Phesi estimated that those sites cost about $130,000 per patient, against $14,167 at a better-performing site.{{cite:phesi-2023}}",
        },
        {
          type: "p",
          text: "Slow sites also stretch the timeline. The $55,716 daily Phase III figure from Tufts CSDD covers direct trial costs only, before any lost sales.{{cite:tufts-delay-2024}}",
        },
        {
          type: "p",
          text: "A site that enrolls no one still costs the sponsor money, and costs the site the coordinator hours spent looking. A success fee tied to randomization does not fix that by itself. What it does is keep the variable part of Bond's price at zero for a site that does not enroll.",
        },
      ],
    },
    {
      id: "manual-vs-bond",
      heading: "Where does recruitment cost sit, manually and with Bond?",
      blocks: [
        {
          type: "p",
          text: "When a site recruits from its own records, the main cost is coordinator time, and it is spent whether or not anyone is randomized. With Bond, part of that work moves to software covered by the platform fee, and part of the price waits for randomization.",
        },
        {
          type: "table",
          caption: "Recruitment costs, manual and with Bond",
          columns: ["Cost", "Manual recruitment", "With Bond"],
          rows: [
            ["Finding candidates", "Coordinator hours on EHR reports and chart review", "Bond reads the records against the criteria and ranks matches with their evidence; Bond reports 50%+ less chart review{{cite:bond-site}}"],
            ["First contact and pre-screening", "Coordinator calls, voicemails and callbacks", "Voice and text agents call, pre-screen, schedule visits and escalate to coordinators{{cite:bond-site}}"],
            ["Consent conversation", "PI and coordinator time", "AI support explains the study in plain language and answers patient questions; the PI and delegated staff obtain consent{{cite:bond-site}}"],
            ["Setup", "Staff training on the study", "Covered by the platform fee, with no integration fee; typically 4 to 6 weeks for full EHR integration{{cite:bond-site}}"],
            ["If no one is randomized", "Staff time already spent", "Platform fee already owed; no success fee"],
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
            "**It does not publish a price list.** Quotes are custom and scoped to your sites and studies.{{cite:bond-site}}",
            "**It is not purely pay-for-performance.** The platform fee is owed whether or not anyone is randomized. Only the success fee, plus any visit milestones agreed in the contract, depends on results.{{cite:bond-site}}",
            "**It does not guarantee enrollment.** A protocol with few eligible patients, or a site without visit capacity, will enroll slowly with any tool. The success fee means Bond shares that outcome. It does not remove it.",
            "**It does not obtain consent or decide eligibility.** The PI and delegated staff do both.",
          ],
        },
      ],
    },
    {
      id: "get-a-quote",
      heading: "How do you get a quote?",
      blocks: [
        {
          type: "p",
          text: "[Book a demo](/book-a-demo) and bring one protocol. To scope the platform fee, Bond needs to know which EHR each site uses, how many sites and studies are in scope, whether a study will use Meta and Google ad campaigns, and whether you want to start with a pilot that does not need the EHR connection, which can be set up in under 2 weeks.{{cite:bond-site,bond-product}}",
        },
        {
          type: "cta",
          label: "Get custom pricing",
          href: "/book-a-demo",
          text: "Bring a protocol and the name of your EHR. We will walk through what the platform fee covers for your sites and how randomizations are counted.",
          secondaryLabel: "Read about security",
          secondaryHref: "/security",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What happens if no one enrolls?",
      a: "No randomization fee is owed, because Bond counts a patient as enrolled only when they are randomized.{{cite:bond-site}} The platform fee still applies, since it covers the EHR integration, implementation and operation that ran regardless. There is no separate integration fee.",
    },
    {
      q: "Is there a pilot option?",
      a: "Yes. A pilot without EHR integration, using outreach to a list the site already has, can be set up in under 2 weeks.{{cite:bond-site}} Its scope and price are part of the custom quote.",
    },
    {
      q: "How are contracts structured?",
      a: "Each engagement is scoped and priced individually around the two fees described on this page.{{cite:bond-site}} Scope, studies and any visit milestones are agreed in the contract.",
    },
    {
      q: "Are screening, outreach and consent support priced separately?",
      a: "No. EHR screening, voice and SMS outreach, consent support, the dashboard and audit trail, and dedicated support are included in every engagement.{{cite:bond-site}}",
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
      id: "1nhealth-pricing",
      title: "1nHealth homepage FAQ: What's your pricing model?",
      publisher: "1nHealth",
      url: "https://1nhealth.com/",
      year: "2026",
      note: "Vendor's own description of its pricing, read September 2026. The FAQ says its pricing is based on specific milestones, such as signed ICFs or patient randomization, and that flexible pricing models are offered when milestone pricing does not fit a study.",
    },
    {
      id: "trialfacts-home",
      title: "Trialfacts homepage",
      publisher: "Trialfacts",
      url: "https://trialfacts.com/",
      year: "2026",
      note: "Vendor's own description of its guarantee, read September 2026. Quote: \"We commit to a specific number of participants and a timeframe in writing, before you pay anything. If we do not deliver, you receive a full refund of the fee for the participants we did not deliver.\"",
    },
    {
      id: "clinical-leader-fsp",
      title: "The FSP Model In Clinical Research: How Functional Service Providers Support Trials",
      publisher: "Clinical Leader (Elizabeth Mann)",
      url: "https://www.clinicalleader.com/topic/fsp-model-clinical-research",
      note: "Undated topic page on functional service provider contracts in general (not recruitment staff specifically), read September 22, 2026. Quote: \"Unit-based pricing is based on measurable outputs like data query resolutions or monitoring visits. FTE models contract dedicated professionals for a set period of hours or days, offering consistent support over time.\"",
    },
    {
      id: "simpletrials-ctms",
      title: "True Cost of a CTMS",
      publisher: "SimpleTrials (CTMS vendor)",
      url: "https://www.simpletrials.com/true-cost-of-a-ctms",
      note: "Undated vendor page, read September 22, 2026. Quote: \"CTMS fees are typically based on the number of users and/or studies.\"",
    },
    {
      id: "mytomorrows-2026",
      title: "The Referral Readiness Gap: What 100 U.S. Clinical Trial Sites Told Us About Referral Quality",
      publisher: "myTomorrows",
      url: "https://mytomorrows.com/blog/healthcare-professionals/the-referral-readiness-gap-what-100-u-s-clinical-trial-sites-told-us-about-referral-quality/",
      year: "2026",
      note: "Vendor-sponsored survey of 100 US site professionals, fielded May 2026. Covers referrals from all sources.",
    },
    {
      id: "ainsworth-2023",
      title: "Recruiting for a Randomized Clinical Trial for Late-Life Depression During COVID-19: Outcomes of Provider Referrals Versus Facebook Self-Referrals",
      publisher: "American Journal of Geriatric Psychiatry (Ainsworth NJ et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9893767/",
      year: "2023",
      note: "Single trial in Toronto; small numbers.",
    },
    {
      id: "tufts-outreach-2026",
      title: "Measuring Centralized Patient Outreach Recruitment Strategies and their Costs in Clinical Trials",
      publisher: "Therapeutic Innovation & Regulatory Science (Kim JY, Lamberti MJ, Do H; Tufts CSDD)",
      url: "https://pubmed.ncbi.nlm.nih.gov/42360616/",
      year: "2026",
      note: "32 studies from eight sponsors and CROs. Figures cover centralized outreach spend only.",
    },
    {
      id: "jmir-2020",
      title: "Online Patient Recruitment in Clinical Trials: Systematic Review and Meta-Analysis",
      publisher: "Journal of Medical Internet Research (Brøgger-Mikkelsen M et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7673977/",
      year: "2020",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "More than 150 studies and nearly 16,000 sites; global data.",
    },
    {
      id: "phesi-2023",
      title: "Almost 20% of cancer trials have recruited only one patient",
      publisher: "Labiotech (reporting Phesi)",
      url: "https://www.labiotech.eu/trends-news/cancer-trials-recruitment/",
      year: "2023",
      note: "Phesi analysis of 173 cancer trials and 11,826 sites. Oncology only.",
    },
    {
      id: "tufts-delay-2024",
      title: "Quantifying the Value of a Day of Delay in Drug Development",
      publisher: "Tufts Center for the Study of Drug Development",
      url: "https://csdd.tufts.edu/sites/default/files/2025-02/Aug2024%20Day%20of%20Delay%20White%20Paper%20Final.pdf",
      year: "2024",
      note: "White paper, August 2024. Direct trial cost only; excludes lost sales.",
    },
  ],
  related: [
    { label: "Implementation", href: "/implementation", description: "What the platform fee pays for, week by week." },
    { label: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment", description: "Bond's EHR screening and ad campaigns compared with media vendors." },
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "How recruitment tools differ in scope and approach." },
    { label: "Security", href: "/security", description: "The BAA, encryption, access control and audit logging in every engagement." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "What Bond reads in the chart and how matches are explained." },
    { label: "Book a demo", href: "/book-a-demo", description: "Bring a protocol and get a custom quote." },
  ],
};

export default page;
