import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/for/cros",
  category: "audience",
  title: "CRO patient recruitment technology for site enrollment",
  description:
    "Patient recruitment technology for CROs: chart-based feasibility counts, one screening and outreach workflow per site, and one enrollment funnel across sites.",
  keywords: [
    "CRO patient recruitment technology",
    "CRO site enrollment",
    "site activation timelines",
    "clinical trial enrollment forecasting",
    "rescue study recruitment",
  ],
  eyebrow: "For CROs",
  h1: "One recruitment workflow and one enrollment funnel across your sites",
  intro:
    "A CRO answers to the sponsor for enrollment at sites it usually does not run, and each of those sites finds, contacts and counts patients its own way. Bond Health runs the same workflow at every participating site: EHR screening, voice and text outreach, and consent support. It reports one enrollment funnel for all of them.",
  summary: "How CROs can get chart-based feasibility counts, one recruitment workflow per site, and one enrollment funnel across a portfolio.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "portfolio-problem",
      heading: "Why is enrollment hard to predict across a CRO's site portfolio?",
      blocks: [
        {
          type: "p",
          text: "IQVIA estimates that biopharma spent about $159 billion worldwide on clinical development in 2025 and outsourced about $75 billion of it.{{cite:iqvia-10k-2025}} Enrollment risk comes with that work, spread across sites that perform very differently.",
        },
        {
          type: "stats",
          items: [
            { value: "11%", label: "of sites in a typical trial enroll no patients", cite: "tufts-2013-recruitment" },
            { value: "37%", label: "of sites enroll below their target", cite: "tufts-2013-recruitment" },
            { value: "About 40%", label: "of North American sites a sponsor looks to engage never activate", cite: "ctv-tufts-2024" },
          ],
        },
        {
          type: "p",
          text: "Tufts CSDD found that 89% of trials eventually meet their enrollment goals, but getting there typically means nearly doubling the original timeline.{{cite:tufts-2013-recruitment}} The data are global and predate 2013, so treat them as a pattern, not a current benchmark.",
        },
        {
          type: "p",
          text: "Vendor count matters too. In a Tufts CSDD benchmarking study of 13 sponsors and 133 trials, announced by Syneos Health on September 16, 2026, no sourcing model (in-house, full-service CRO or FSP) consistently outperformed the others, and more service providers were associated with longer timelines from protocol approval to database lock.{{cite:syneos-tufts-2026}}",
        },
      ],
    },
    {
      id: "feasibility",
      heading: "What can Bond add to feasibility and site selection?",
      blocks: [
        {
          type: "p",
          text: "Site feasibility often means a questionnaire and a qualification visit, and sites are typically not compensated for the work. A 2024 industry task-force paper puts the industry-wide scale of the feasibility problem at $1.6 billion, extrapolated from an ASCO survey of oncology sites. It adds that not all sites have good data and tools for estimating enrollment, leaving sponsors and CROs with inaccurate timelines.{{cite:feasibility-2024}}",
        },
        {
          type: "p",
          text: "Where a site already runs Bond, [Identify](/identify) screens structured and unstructured records against the protocol's criteria and shows the chart evidence for each one.{{cite:bond-site}} Bond runs feasibility from the same EHR screening, giving eligible-patient counts for a protocol backed by the chart evidence behind each match, which a coordinator can check.{{cite:bond-product}} Diagnosis codes alone express few criteria: in Bond's preprint, across 51,055 eligibility criteria from ClinicalTrials.gov, ICD-10-CM resolved at least one exact multi-token concept in 5.7% of criteria, against 82.0% for Bond's terminology graph.{{cite:bond-whitepaper}}",
        },
        {
          type: "ul",
          items: [
            "**Same criteria at every site.** When each site screens against the same configured criteria, count differences are less likely to reflect method.",
            "**Know the limits.** Counts exist only where Bond is connected to the EHR. Criteria outside the chart, such as willingness to take part, still need a conversation.",
            "**Use them in selection.** Pair the counts with the [feasibility questionnaire template](/templates/feasibility-questionnaire) and the guide to [how sponsors choose sites](/guides/how-sponsors-choose-sites).",
          ],
        },
      ],
    },
    {
      id: "day-to-day",
      heading: "What changes day to day at each site?",
      blocks: [
        {
          type: "p",
          text: "Bond runs three stages in one workflow. The site team keeps every decision that needs a person.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Identify",
              text: "EHR screening ranks candidates, with the chart evidence for each criterion. Coordinators review a ranked list instead of building one.",
            },
            {
              title: "Engage",
              text: "[Engage](/engage) runs voice and text outreach, pre-screening and scheduling, with scripts set per site and study. Patients are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Consent",
              text: "[Consent](/consent) support gives plain-language explanations and answers patient questions before the visit, with escalation to staff. The site and PI still obtain consent.",
            },
          ],
        },
        {
          type: "p",
          text: "Bond can also set up Meta and Google ad campaigns for a study across the sites it supports.{{cite:bond-product}} Leads from those ads flow straight into the same voice and text agents that pre-screen and schedule patients found in each site's EHR.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "metrics",
      heading: "Which metrics will you see, and are they the same at every site?",
      blocks: [
        {
          type: "p",
          text: "For every site and study, Bond reports the same funnel: patients matched, contacted, pre-screened, consented and randomized. It adds time to enrollment, matching accuracy, screen-failure signals and coordinator hours saved, and keeps an audit trail. A patient counts as enrolled when randomized.{{cite:bond-site}}",
        },
        {
          type: "table",
          caption: "Portfolio problems, what Bond does, and what you measure",
          columns: ["Problem", "What Bond does", "What you measure"],
          rows: [
            [
              "Sites estimate enrollment without good data or tools{{cite:feasibility-2024}}",
              "Screens the site's EHR against the configured criteria, with chart evidence per criterion",
              "Patients matched per site",
            ],
            [
              "Time from site activation to first patient screened (median 20 days in CRIO's July 2026 benchmarks){{cite:crio-startup-2026}}",
              "Gives coordinators a ranked match list and runs voice and text outreach from it",
              "Patients contacted and pre-screened, time to enrollment",
            ],
            [
              "Each site reports recruitment in its own format",
              "Runs one workflow and one funnel definition at every Bond site",
              "Matched, contacted, pre-screened, consented, randomized",
            ],
            [
              "Screen failures after a visit is booked",
              "Checks each criterion against the chart, then pre-screens by voice or text before booking",
              "Screen-failure signals, matching accuracy",
            ],
            [
              "Coordinators short on time for chart review",
              "Reads the chart, including notes, and ranks candidates",
              "Coordinator hours saved",
            ],
            [
              "Enrollment forecasts built on site estimates",
              "Reports each site's count at every funnel stage, which feeds your forecasting model rather than replacing it",
              "Conversion from matched to randomized, per site",
            ],
          ],
          note: "Measures are from Bond's published reporting set.{{cite:bond-site}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "About Bond's headline figures",
          text: "Bond's website states up to 3x faster enrollment than manual recruitment, above 90% matching accuracy and at least 50% less chart review.{{cite:bond-site}} These are Bond's own figures, not a forecast for your protocol. Plan with each site's dashboard numbers once the study is live.",
        },
      ],
    },
    {
      id: "rescue-studies",
      heading: "Can Bond help rescue a study that is behind plan?",
      blocks: [
        {
          type: "p",
          text: "We found no reliable published count of rescue studies, but registry data shows how often enrollment falls short. Of 2,579 Phase 2 and Phase 3 trials on ClinicalTrials.gov that closed in 2011, 19% were terminated for failed accrual or finished below 85% of target enrollment.{{cite:carlisle-2015}}",
        },
        {
          type: "p",
          text: "A rescue has three levers: add sites, amend the protocol, or get more from active sites. New sites restart selection and start-up, which industry still describes as more than two months to select sites and another eight months to activate them.{{cite:jcts-2025-startup}} New sites do not guarantee patients either. In the STICH heart-failure trial, low enrollment forced an expansion from 32 planned US and Canadian sites to 171 sites; 44 approved sites never enrolled a patient, at an estimated $10,000 per deactivated site.{{cite:fogel-2018}}",
        },
        {
          type: "p",
          text: "Bond works on the third lever. With the EHR connected, it screens charts at active sites and contacts the candidates it finds. Full EHR integration takes 48 hours per site. A pilot without EHR integration does not read charts: it contacts and pre-screens patients from a list the site already holds.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "implementation",
      heading: "What does implementation ask of the CRO and its sites?",
      blocks: [
        {
          type: "p",
          text: "Start-up is already the slow part. In WCG's 2025 survey of 611 sites, 54% of independent sites and physician practices said they can start a study in under 60 days, against 9% of academic medical centers, community hospitals, health systems and site networks.{{cite:wcg-2025}} In WCG's 2024 survey, budgets and contracts were the most common cause of start-up delay, affecting 69% of sites.{{cite:wcg-2024}}",
        },
        {
          type: "p",
          text: "Each site signs a BAA, completes a security review, connects its EHR, validates the criteria with its coordinators and, where required, sends outreach scripts to the IRB. The 48 hours per site depend on the EHR, the IT review and the interface method.{{cite:bond-site}} The [implementation plan](/implementation) lists each step.",
        },
        {
          type: "checklist",
          items: [
            "Choose the first studies and sites where enrollment risk is highest and IT can respond quickly.",
            "Start Bond setup during site start-up, next to contracts and budgets, so a validated match list is ready when the site activates.",
            "Agree funnel definitions and reporting cadence with the sponsor, including enrolled as randomized.",
            "Name one owner for the dashboard and for site escalations.",
          ],
        },
      ],
    },
    {
      id: "pricing",
      heading: "How does pricing line up with how a CRO is measured?",
      blocks: [
        {
          type: "p",
          text: "Bond uses two-part pricing. A volume-based platform fee covers EHR integration, implementation and ongoing operation: the EHR connection, security review, audit logging setup, workflow configuration and ongoing support. There is no separate integration fee. A success fee is paid per enrolled patient, where enrolled means randomized, and per-visit milestones can be added.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "The success fee follows randomized patients, the number you report to the sponsor, rather than outreach volume. Pricing is custom. See [pricing](/pricing) for the structure and what every engagement includes.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a study you are about to place, or one that is behind plan. We will walk through the funnel Bond would report for it.",
          secondaryLabel: "How implementation works",
          secondaryHref: "/implementation",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can Bond work across sites that use different EHRs?",
      a: "Yes. Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR R4 APIs, HL7 v2 where applicable, or an integration partner.{{cite:bond-site,bond-product}} Each site connects separately; see [integrations](/integrations).",
    },
    {
      q: "Does Bond replace site coordinators or the CRO's monitors?",
      a: "No. Coordinators review matches and take escalations, the PI and site staff obtain consent, and monitoring stays with your team. Bond takes on chart search, first contact, pre-screening and scheduling.",
    },
    {
      q: "How is patient data handled across sites?",
      a: "Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} Bond signs a business associate agreement with each site and uses encryption, role-based access and audit logging. Its current security posture is in a Vanta-hosted Trust Center.{{cite:bond-site}} See [security](/security).",
    },
    {
      q: "How does Bond fit with a site's CTMS?",
      a: "Bond is a CRIO Certified Partner; see the [CRIO integration](/integrations/crio). With other CTMS platforms, Bond works alongside the system through API or file export where the vendor supports it.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "iqvia-10k-2025",
      title: "IQVIA Holdings Inc. Form 10-K for fiscal year 2025",
      publisher: "IQVIA Holdings Inc. (SEC filing)",
      url: "https://s201.q4cdn.com/580005511/files/doc_financials/2025/q4/IQV-2025-12-31-10K_Filed-with-exhibits.pdf",
      year: "2026",
      note: "Global market; company estimates. Quote: \"Biopharmaceutical spending on drug development totaled approximately $199 billion in 2025. Of that amount, we estimate that our addressable opportunity (clinical development spending excluding preclinical spending) was approximately $159 billion. The portion of this addressable opportunity that was outsourced in 2025, based on our estimates, was approximately $75 billion.\"",
    },
    {
      id: "tufts-2013-recruitment",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "More than 150 studies and nearly 16,000 sites; global, pre-2013 data. Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\" Also: \"89% of all clinical trials meet enrollment goals\" and reaching those targets \"typically means that drug developers need to nearly double their original timelines.\"",
    },
    {
      id: "ctv-tufts-2024",
      title: "Tufts CSDD: New Insights on The Clinical Trial Industry",
      publisher: "Clinical Trial Vanguard (conference coverage of Ken Getz, Tufts CSDD)",
      url: "https://www.clinicaltrialvanguard.com/conference-coverage/tufts-csdd-new-insights-on-the-clinical-trial-industry/",
      year: "2024",
      note: "Secondary report of a Tufts CSDD presentation. Quote: \"40% of sites in North America that we actually will look to engage will not activate.\"",
    },
    {
      id: "syneos-tufts-2026",
      title: "Syneos Health and Tufts CSDD Study Shows Clinical Trial Performance Depends More on Operating Model Design Than Sourcing Strategy",
      publisher: "Syneos Health press release via GlobeNewswire",
      url: "https://www.globenewswire.com/news-release/2026/09/16/3363088/33420/en/syneos-health-and-tufts-csdd-study-shows-clinical-trial-performance-depends-more-on-operating-model-design-than-sourcing-strategy.html",
      year: "2026",
      note: "Announced September 16, 2026 by Syneos Health, a CRO; benchmarking study conducted by Tufts CSDD with data from participating sponsors. Quote: \"Across 13 sponsor companies, 81 development programs and 133 clinical trials, no single sourcing model consistently outperformed others\" and \"A greater number of service providers was associated with several measures of trial performance, including longer timelines from protocol approval to database lock, higher dropout rates in certain contexts and more protocol amendments and quality events\"",
    },
    {
      id: "feasibility-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Site Enablement League task force (managed by Florence Healthcare); the estimate extrapolates from an ASCO oncology feasibility survey to all therapeutic areas. Quotes: \"The results are applicable across all therapeutic areas, and therefore the scale of the problem across the industry is estimated at $1.6B\"; \"sites are typically not compensated for feasibility assessment work\"; \"Not all sites have good data and tools for estimating enrollment activity. Sites are often basing estimates on only partial protocol information (as mentioned above). Sponsors/CROs can't effectively gauge participation for the study, leading to inaccurate project timelines\"",
    },
    {
      id: "carlisle-2015",
      title: "Unsuccessful trial accrual and human subjects protections: an empirical analysis of recently closed trials",
      publisher: "Clinical Trials (Carlisle B, Kimmelman J, Ramsay T, MacKinnon N), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/25475878/",
      year: "2015",
      note: "ClinicalTrials.gov Phase 2 and 3 trials closed in 2011, global. Quote: \"Of 2579 eligible trials, 481 (19%) either terminated for failed accrual or completed with less than 85% expected enrolment, seriously compromising their statistical power.\"",
    },
    {
      id: "jcts-2025-startup",
      title: "Accelerating start-up cycles in investigator-initiated multicenter clinical trials",
      publisher: "Journal of Clinical and Translational Science",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12695510/",
      year: "2025",
      note: "Framing statement citing industry literature, not a new measurement. Quote: \"Industry continues to describe start-up cycle times much the same as they were 20 years ago, reporting more than two months to select sites, then another eight months from site selection to site activation\"",
    },
    {
      id: "fogel-2018",
      title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
      year: "2018",
      note: "Describes the STICH trial's expansion after low enrollment. Quote: \"Originally, the study was designed to cover 32 study sites in the USA and Canada, but low patient enrollment required expanding the study to 171 sites internationally. After the expansion, 44 sites that had been approved for the trial failed to enroll a patient. The cost per deactivated site was estimated at $10,000.\"",
    },
    {
      id: "wcg-2025",
      title: "2025 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/sites/2/2025/10/WCG-Site-Challenges-Report-2025.pdf",
      year: "2025",
      note: "Survey of 611 sites, July to September 2025, 80% US; self-reported. Quote: \"Notably, independent sites and physician practices tend to have faster start-up timelines, with 54% reporting that they can initiate studies in under 60 days. In contrast, academic medical centers, community hospitals, health systems, and site networks typically face longer timelines, with only 9% saying their study start-up timelines take less than 60 days.\"",
    },
    {
      id: "wcg-2024",
      title: "2024 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/2024/10/WCG_2024_Clinical_Research_Site_Challenges_Report.pdf",
      year: "2024",
      note: "Survey of 852 sites, April to June 2024. Quote: \"Across all types of clinical research sites, budgets and contracts were the main offenders contributing to delayed study start-up timelines, affecting 69% of respondents.\"",
    },
    {
      id: "crio-startup-2026",
      title: "What It Takes to Start a Study: Site Start-up Benchmarks",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/what-it-takes-to-start-a-study-site-start-up-benchmarks/",
      year: "2026",
      note: "Posted July 30, 2026; analysis CRIO performed for the Site Accreditation and Standards Institute (SASI); sample size not stated. The post does not label the quartiles; Quartile 3 (8 days) marks the fastest quarter of sites. Quote: \"Days from site activation to first patient visit screened\" with Quartile 1: 34, Median: 20, Quartile 3: 8.",
    },
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
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Available on request.",
    },
    {
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, pricing and compliance status described by Bond Health, September 2026.",
    },
  ],
  related: [
    { label: "Bond for sponsors", href: "/for/sponsors", description: "Delay costs, site variance and one funnel from the sponsor's side." },
    { label: "Bond for site networks", href: "/for/site-networks", description: "One workflow and one set of metrics across a network's sites." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and explains each match." },
    { label: "Implementation", href: "/implementation", description: "The 48-hour plan, with site and Bond tasks at each step." },
    { label: "Pricing", href: "/pricing", description: "A platform fee plus a success fee per randomized patient." },
    { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites", description: "What sponsors and CROs check during feasibility and selection." },
  ],
};

export default page;
