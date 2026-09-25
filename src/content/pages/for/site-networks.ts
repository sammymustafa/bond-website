import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/for/site-networks",
  category: "audience",
  title: "Recruitment technology for clinical trial site networks",
  description:
    "How site networks use Bond Health to screen charts, contact patients and support consent the same way at every site, and report one funnel across them.",
  keywords: [
    "clinical trial site network recruitment technology",
    "site network patient recruitment",
    "multi-site clinical trial recruitment",
    "CRIO site network recruitment",
    "feasibility from EHR data",
  ],
  eyebrow: "For site networks",
  h1: "One recruitment standard across every site in your network",
  intro:
    "A site network offers sponsors many sites that work to one standard. Recruitment is where that standard is hard to hold, because each site reads charts, calls patients and answers consent questions its own way.",
  summary: "How multi-site networks run one screening, outreach and consent-support standard, with one set of reports.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "why-standards-slip",
      heading: "Why is one recruitment standard hard to hold across a network?",
      blocks: [
        {
          type: "p",
          text: "Tufts CSDD reported in its March/April 2026 Impact Report that a growing share of clinical trials run at academic medical center- and network-affiliated sites.{{cite:tufts-impact-2026}} For-profit organizations, including sites and site networks, took about half of the $7.6 billion in reported industry payments to US research sites in 2022, and from 2019 to 2022 their payments grew 11.8% a year, against 4.9% for nonprofit institutions.{{cite:crio-meganetwork}}",
        },
        {
          type: "stats",
          items: [
            { value: "34", label: "Financial investors leading a US site network in November 2023, up from 3 in 2015", cite: "crio-meganetwork" },
            { value: "27%", label: "Share of 2022 for-profit US site revenue earned by sites owned by private equity and other financial investors", cite: "crio-meganetwork" },
            { value: "14 to ~80", label: "Velocity Clinical Research sites (US and Europe), from GHO Capital's 2021 investment to the December 2022 Meridian deal", cite: "velocity-meridian" },
          ],
        },
        {
          type: "p",
          text: "Investor-backed networks grow by adding sites, and the deals continued in 2025. BayPine agreed in April to acquire CenExel, an 18-location US network, and in August THL agreed to buy Headlands Research from KKR, which founded it in 2018.{{cite:baypine-cenexel,thl-headlands}} An acquired site can bring its own EHR, coordinators and pre-screening habits. Without a network standard, recruitment quality depends on which site a patient reaches.",
        },
        {
          type: "p",
          text: "Site results already vary widely. In a 2013 Tufts CSDD analysis of more than 150 studies and nearly 16,000 sites, 11% of sites in a typical trial enrolled no patients and 37% enrolled fewer than planned.{{cite:tufts-2013}} Capacity is tight too: in WCG's 2024 survey of 852 sites worldwide, 46% said their top challenges restricted their capacity to take on new studies.{{cite:wcg-2024}}",
        },
      ],
    },
    {
      id: "one-standard",
      heading: "What changes day to day at each site?",
      blocks: [
        {
          type: "p",
          text: "Bond runs the same three stages at every site: identify, engage and consent. The network agrees once on how each protocol's criteria are read. Coordinators at each site then check that reading against a sample of their own records before go-live, as described in [how we validate eligibility logic](/blog/validating-eligibility-logic-before-go-live).",
        },
        {
          type: "steps",
          items: [
            {
              title: "Identify",
              text: "[Identify](/identify) reads structured and unstructured EHR records against the protocol's criteria, ranks candidates, and shows the chart evidence behind each criterion decision. Every site reviews the same kind of list.{{cite:bond-site}}",
            },
            {
              title: "Engage",
              text: "[Engage](/engage) voice and text agents contact likely matches, ask the pre-screening questions the chart cannot answer, and book screening visits into the site's calendar. Patients are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Consent",
              text: "[Consent](/consent) explains the IRB-approved consent form in plain language and answers patient questions, with escalation to staff. The PI and delegated staff still obtain consent.{{cite:bond-site}}",
            },
          ],
        },
        { type: "h3", text: "Central, local or mixed outreach" },
        {
          type: "ul",
          items: [
            "**Central.** One approved script per study across all sites, with escalations going to one network team.",
            "**Local.** Each site's script carries its own name and details, with escalations to its coordinators.",
            "**Mixed.** Central scripts, with escalations routed to each site's coordinators.",
          ],
        },
        {
          type: "p",
          text: "Scripts are configured per site and per study, so a network can run a central model on one study and a local model on the next.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "When a study needs more patients than the sites' records hold, Bond sets up Meta and Google ad campaigns for the study.{{cite:bond-product}} Leads from those ads flow straight into the same voice and text agents for pre-screening and scheduling, alongside patients found in each site's EHR, so ad leads follow one workflow across the network.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "feasibility",
      heading: "How can a network answer feasibility from data?",
      blocks: [
        {
          type: "p",
          text: "Sites are typically not paid for feasibility work, and a 2024 task-force paper cites an estimate that the feasibility problem costs the industry $1.6 billion.{{cite:feasibility-2024}} One site leader told ACRP that questionnaires can run 10 to 40 pages.{{cite:acrp-feasibility}} When each site answers from memory or a diagnosis-code search, the network's numbers cannot be compared.",
        },
        {
          type: "p",
          text: "Identify screens records against a protocol's inclusion and exclusion criteria, so at a site whose EHR is connected, the same screening can be run on a protocol the network is evaluating.{{cite:bond-site}} Bond runs feasibility from the same EHR screening, giving eligible-patient counts for a protocol backed by the chart evidence behind each match, which a coordinator can spot-check.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "Send the sponsor aggregate counts only. The chart review behind them may qualify as a HIPAA review [preparatory to research](/glossary/preparatory-to-research), which requires the researcher to represent that no protected health information will be removed from the covered entity during the review.{{cite:cfr-164-512}} Each site's privacy office decides. See [how sponsors choose sites](/guides/how-sponsors-choose-sites) and the [feasibility questionnaire template](/templates/feasibility-questionnaire).",
        },
      ],
    },
    {
      id: "systems",
      heading: "How does Bond fit with CRIO, other CTMS products and several EHRs?",
      blocks: [
        {
          type: "p",
          text: "A network built through acquisitions may run several EHRs and CTMS products. Coordinators keep their site's system, whether that is CRIO, another CTMS or a Google Sheet, and the network reads the same funnel stages from every site.",
        },
        {
          type: "ul",
          items: [
            "**EHRs.** Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, over FHIR R4 APIs, HL7 v2 where applicable, or an integration partner. Each connection has its own approval. See [Epic](/integrations/epic) and [Oracle Health](/integrations/oracle-cerner).{{cite:bond-site,bond-product}}",
            "**CRIO.** Bond is a CRIO Certified Partner and, as of September 2026, is listed on CRIO's partners page under Patient Acquisition & Retention.{{cite:bond-site,crio-partners}} Pre-screened patients go to CRIO through the CRIO API. CRIO says its Recruiting API lets vendors send patient updates, qualify patients into studies and schedule appointments.{{cite:crio-recruiting-api}} See the [CRIO integration](/integrations/crio).",
            "**Other CTMS products.** Bond works alongside systems such as [RealTime](/integrations/realtime) and [Advarra Clinical Conductor](/integrations/advarra-clinical-conductor), through the vendor's API or file export where the vendor supports it. Google Sheets and calendars connect directly.{{cite:bond-site}}",
          ],
        },
      ],
    },
    {
      id: "measure",
      heading: "What should the network expect to see reported?",
      blocks: [
        {
          type: "p",
          text: "Agree on the measures before go-live and report them the same way at every site. Bond's reports cover patients matched, contacted, pre-screened, consented and randomized, time to enrollment, matching accuracy, screen-failure signals and coordinator hours saved, with an audit trail behind them.{{cite:bond-site}}",
        },
        {
          type: "table",
          caption: "Network problems, what Bond does, and what to measure",
          columns: ["Network problem", "What Bond does", "What you measure"],
          rows: [
            ["Sites pre-screen the same protocol differently", "One agreed reading of each criterion, checked on each site's records", "Matching accuracy and screen-failure signals, by site"],
            ["Coordinator time goes to chart review", "Screens structured data and notes, then ranks candidates", "Coordinator hours saved and patients matched"],
            ["Matches wait in phone queues", "Voice and text agents contact, pre-screen and book visits", "Patients contacted and pre-screened, and time to enrollment"],
            ["Consent conversations vary by site", "Plain-language explanation of the approved form and patient Q&A", "Patients consented, by site"],
            ["Feasibility answered from memory", "Screens connected sites' records against a protocol under review", "Likely matches per site, against patients later randomized"],
            ["Each site reports in its own format", "The same funnel stages and definitions at every site", "Randomized patients by site and study"],
          ],
        },
        {
          type: "stats",
          items: [
            { value: "Up to 3x", label: "Faster enrollment than manual recruitment", cite: "bond-site" },
            { value: "90%+", label: "Matching accuracy on eligibility screening", cite: "bond-site" },
            { value: "50%+", label: "Less coordinator time on chart review", cite: "bond-site" },
            { value: "10,000+", label: "Charts screened per hour", cite: "bond-site" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Read these as Bond's published figures",
          text: "They are not a forecast for your network. Your reports show results per site and per study, so the spread shows which sites need help.",
        },
      ],
    },
    {
      id: "implementation",
      heading: "What does implementation ask of the network?",
      blocks: [
        {
          type: "p",
          text: "Full EHR integration typically takes 4 to 6 weeks, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} The [implementation](/implementation) page has the week-by-week plan. A practical start is one protocol at a few sites that share an EHR, then expand once the reports look right.",
        },
        {
          type: "checklist",
          items: [
            "**A network owner for the standard.** One person decides how criteria are read and which outreach model each study uses.",
            "**An IT and security contact for each EHR.** Bond signs a BAA, and data is encrypted in transit and at rest.{{cite:bond-site}} Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} See [security](/security).",
            "**Coordinators for validation.** Staff at each site adjudicate a sample of screening decisions before go-live.",
            "**IRB review of scripts where required.** The [IRB submission language](/templates/irb-submission-language-ai-outreach) template describes how the agents work.",
            "**CTMS access.** For CRIO sites, the site requests API access activation for Bond through CRIO's Partner Directory.{{cite:crio-partners}} Other systems use an API or file export.",
          ],
        },
      ],
    },
    {
      id: "pricing",
      heading: "How does pricing work across many sites?",
      blocks: [
        {
          type: "p",
          text: "Pricing has two parts: a volume-based platform fee covering EHR integration, implementation and ongoing operation, including EHR connections, security review, audit logging setup, workflow configuration, and ongoing compute, monitoring and support; and a success fee per enrolled patient, where enrolled means randomized. There is no separate integration fee. Per-visit milestones can be added.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "For a network, that means variable spend follows the sites that actually randomize patients. Every engagement includes screening, outreach, consent support and the dashboard. Pricing is custom; see [pricing](/pricing).",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and a list of your sites and EHRs. We will walk through screening and sketch a network rollout plan.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do all of our sites need the same EHR?",
      a: "No. Each EHR connects separately, with its own approval, and full integration usually takes 4 to 6 weeks.{{cite:bond-site}}",
    },
    {
      q: "Can the network start before EHR connections are approved?",
      a: "Yes. A pilot without EHR integration, such as outreach to an existing patient list, can be set up in under 2 weeks.{{cite:bond-site}} Ranked matches from EHR chart screening start once that site's connection is live.",
    },
    {
      q: "Does Bond replace coordinators at our sites?",
      a: "No. Coordinators review ranked matches and take escalations, and the PI and delegated staff obtain consent. Bond takes the first pass of chart review and first contact off their queue.",
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
      id: "tufts-impact-2026",
      title: "Tufts CSDD Impact Reports (Vol. 28 No. 2, March/April 2026)",
      publisher: "Tufts Center for the Study of Drug Development",
      url: "https://csdd.tufts.edu/publications/impact-reports",
      year: "2026",
      note: "Subscriber report; only the headline finding is public. Quote: \"A growing proportion of clinical trials are conducted in AMC- and network-affiliated sites\"",
    },
    {
      id: "crio-meganetwork",
      title: "The Rise of the Clinical Trial Site Mega Network (Scaling and Innovating Part 3: Site Network Consolidation by the Numbers)",
      publisher: "CRIO with Cure Clinical",
      url: "https://clinicalresearch.io/wp-content/uploads/2025/04/Rise-of-the-Clinical-Trial-Site-Meganetwork-Part-3-x.pdf",
      year: "2023",
      note: "US data from CMS Open Payments joined to ClinicalTrials.gov; captures reported industry payments only. Quote: \"In 2022, total reported cash payments from industry to clinical research sites was $7.6 billion, of which approximately 50% went to non-profit organizations such as academic medical centers, hospitals and health systems; and 50% went to for-profit organization[s]\". Also: \"The for-profit sector grew more quickly, at 11.8% vs. 4.9% for the nonprofit sector.\" Also: \"As of the date of this report (Nov. 2023), there are 34 unique financial investors who serve as majority or lead investors in a site network\" (up from 3 in 2015). Also: \"we classified Financial and Strategic ownership as 38% of total 2022 revenue, with Financial at 27% and Strategic at 11%.\" The ownership split applies to for-profit site revenue.",
    },
    {
      id: "velocity-meridian",
      title: "Velocity Clinical Research Acquires Meridian Clinical Research, Creates Largest Global Research Sites Business",
      publisher: "Velocity Clinical Research",
      url: "https://velocityclinical.com/velocity-clinical-research-acquires-meridian-clinical-research-creates-largest-global-research-sites-business/",
      year: "2022",
      note: "Press release, December 15, 2022. Quote: \"approximately 80 sites in the U.S. and Europe\" and \"Since GHO's investment in 2021, when Velocity had 14 sites\".",
    },
    {
      id: "baypine-cenexel",
      title: "BayPine to Acquire CenExel",
      publisher: "BayPine",
      url: "https://baypine.com/news/baypine-to-acquire-cenexel",
      year: "2025",
      note: "Press release, April 14, 2025. Quote: \"With 18 locations geographically dispersed across major U.S. metro areas\".",
    },
    {
      id: "thl-headlands",
      title: "THL Announces Agreement to Acquire Headlands Research from KKR",
      publisher: "THL (Thomas H. Lee Partners)",
      url: "https://thl.com/articles/thl-announces-agreement-to-acquire-headlands-research-from-kkr/",
      year: "2025",
      note: "Press release, August 2025; deal terms not disclosed. Quote: \"KKR founded Headlands in 2018 via its Health Care Strategic Growth Fund to transform the clinical trial site industry\".",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD, via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Analysis of more than 150 clinical studies involving nearly 16,000 sites; global, pre-2013 data. Quote: \"11% of sites in a given trial typically fail to enroll a single patient\", with 37% under-enrolling.",
    },
    {
      id: "wcg-2024",
      title: "2024 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/2024/10/WCG_2024_Clinical_Research_Site_Challenges_Report.pdf",
      year: "2024",
      note: "Survey of 852 sites, April to June 2024. Quote: \"nearly half (46%) of sites reported that these challenges are restricting their capacity to agree to participate in new studies.\"",
    },
    {
      id: "acrp-feasibility",
      title: "Fixing Feasibility: Collaborative Approaches for Redefining and Improving Site Selection",
      publisher: "ACRP",
      url: "https://acrpnet.org/2024/03/21/fixing-feasibility-collaborative-approaches-for-redefining-and-improving-site-selection",
      year: "2024",
      note: "Site-leader testimony, not a survey. Quote: \"feasibility questionnaires can be anywhere from 10 to 40 pages.\"",
    },
    {
      id: "feasibility-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Site Enablement League task force; the $1.6B figure is an estimate the paper cites (its ref. 4), extrapolated from an ASCO oncology feasibility survey. Quote: \"The results are applicable across all therapeutic areas, and therefore the scale of the problem across the industry is estimated at $1.6B\". Also: \"sites are typically not compensated for feasibility assessment work\".",
    },
    {
      id: "crio-partners",
      title: "CRIO Clinical Trials Software Company Partners",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/about/partners/",
      year: "2026",
      note: "Accessed and re-checked September 22, 2026 (an earlier September 21 check did not show Bond). Bond Health is listed under Patient Acquisition & Retention with the blurb \"Automate chart review across your EMR and CRIO. Ranked, pre-screened candidates with cited evidence, delivered straight into your coordinators' workflow.\" Quote: \"Use the CRIO Partner Directory to search for providers, read reviews from other CRIO users, request information from CRIO Partners, and request API access activation for integrated partners.\"",
    },
    {
      id: "crio-recruiting-api",
      title: "CRIO's Recruiting API Simplifies Patient Enrollment",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/recruitment-simplified1/",
      year: "2022",
      note: "Blog dated January 4, 2022. Quote: \"Vendors can send patient updates, qualify patients into studies, schedule appointments, and more.\"",
    },
    {
      id: "cfr-164-512",
      title: "45 CFR 164.512: Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/cfr/text/45/164.512",
      year: "2026",
      note: "Accessed September 22, 2026. Paragraph (i)(1)(ii), reviews preparatory to research: the covered entity obtains representations from the researcher. Quote: \"No protected health information is to be removed from the covered entity by the researcher in the course of the review\"",
    },
  ],
  related: [
    { label: "Bond for research sites", href: "/for/research-sites", description: "How a single site uses Bond for screening, outreach and consent support." },
    { label: "CRIO integration", href: "/integrations/crio", description: "How pre-screened patients and statuses move between Bond and CRIO." },
    { label: "Implementation", href: "/implementation", description: "The week-by-week plan for connecting an EHR and going live." },
    { label: "Pricing", href: "/pricing", description: "A volume-based platform fee plus a success fee per randomized patient." },
    { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites", description: "What sponsors check in feasibility, and how to present patient counts." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Criterion-by-criterion screening with the chart evidence behind each match." },
  ],
};

export default page;
