import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/for/sponsors",
  category: "audience",
  title: "Enrollment acceleration technology for trial sponsors",
  description:
    "What enrollment delay costs a sponsor, why selected sites enroll unevenly, and how Bond screens EHRs, contacts patients and reports one funnel across sites.",
  keywords: [
    "sponsor clinical trial enrollment acceleration technology",
    "cost of clinical trial delay",
    "site enrollment performance",
    "EHR-based site feasibility",
    "Diversity Action Plan enrollment",
  ],
  eyebrow: "For sponsors",
  h1: "First-patient-in to last-patient-in, with every site's funnel in view",
  intro:
    "A sponsor chooses the sites and carries the cost when enrollment runs late, but it cannot read their charts or call their patients. Bond Health runs EHR screening, voice and text outreach, and consent support at each participating site, and reports one enrollment funnel back to you.",
  summary: "What a delay day costs, why sites enroll unevenly, and how Bond reports one enrollment funnel across a sponsor's sites.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "cost-of-delay",
      heading: "What does a day of enrollment delay cost a sponsor?",
      blocks: [
        {
          type: "p",
          text: "Tufts CSDD re-estimated the value of a delay day in an August 2024 white paper, in 2023 dollars, and called the long-quoted $4 to 5 million a day a gross misestimation.{{cite:tufts-delay-2024}}",
        },
        {
          type: "stats",
          items: [
            { value: "$55,716", label: "direct cost per day of a Phase III trial", cite: "tufts-delay-2024" },
            { value: "$23,737", label: "direct cost per day of a Phase II trial", cite: "tufts-delay-2024" },
            { value: "About $800,000", label: "average daily sales forgone when a launch slips, across 645 products", cite: "tufts-delay-2024" },
          ],
        },
        {
          type: "p",
          text: "Tufts CSDD reported in 2013 that 89% of trials eventually met their enrollment goals, typically by nearly doubling the original timeline.{{cite:tufts-2013}} Of 2,579 Phase 2 and 3 trials closed in 2011, 19% were terminated for failed accrual or finished below 85% of their enrollment target.{{cite:carlisle-2015}}",
        },
      ],
    },
    {
      id: "site-variance",
      heading: "How unevenly do selected sites enroll?",
      blocks: [
        {
          type: "p",
          text: "In that 2013 Tufts CSDD analysis of more than 150 studies and nearly 16,000 sites, 11% of sites in a typical trial enrolled no patients, 37% under-enrolled, 39% met their target and 13% exceeded it.{{cite:tufts-2013}} Presenting Tufts CSDD data at the 2024 SCOPE Summit, Ken Getz said about 40% of the North American sites a sponsor looks to engage will not activate, with contracting, budgets and IRB approval among the reasons.{{cite:ctv-tufts-2024}}",
        },
        {
          type: "p",
          text: "In WCG's 2025 survey of 611 sites, 28% named recruitment and retention a top challenge, down from 36% in 2024, and 41% said expanded recruitment and retention services were a top priority for sponsors to address.{{cite:wcg-2025}} Bond does not fix contracting or activation delays. At an active site, it takes on the chart search and first contact that compete for coordinator time. After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "protocol-feasibility",
      heading: "Can EHR data check a site's feasibility estimate?",
      blocks: [
        {
          type: "p",
          text: "Site feasibility usually means a questionnaire and often a site visit, and sites are typically not paid for the work. A 2024 task force paper, extrapolating from an ASCO oncology survey, put the industry-wide scale of feasibility burden and inefficiency at $1.6 billion.{{cite:feasibility-2024}}",
        },
        {
          type: "p",
          text: "At a site already connected to Bond, [Identify](/identify) runs the protocol's criteria over structured and unstructured records and shows the chart evidence for each match.{{cite:bond-site}} Bond runs feasibility from the same EHR screening, giving eligible-patient counts for a protocol backed by the chart evidence behind each match.{{cite:bond-product}} The count comes from the chart, not from a coordinator's estimate. Diagnosis codes alone map little of the language criteria use. In Bond's own analysis of 51,055 eligibility criteria from ClinicalTrials.gov, ICD-10-CM alone resolved at least one exact multi-token concept in 5.7% of criteria, against 82.0% for Bond's terminology graph.{{cite:bond-whitepaper}}",
        },
        {
          type: "ul",
          items: [
            "**Same logic at every site.** Each site runs the same configured criteria, so differences in matched counts are less likely to come from how each site counted.",
            "**Known limits.** Counts exist only where Bond is connected to the EHR, depend on what each site documents, and miss criteria that are not in the chart, such as willingness to take part. The [feasibility questionnaire template](/templates/feasibility-questionnaire) and the guide to [how sponsors choose sites](/guides/how-sponsors-choose-sites) cover the rest.",
          ],
        },
      ],
    },
    {
      id: "day-to-day",
      heading: "What changes at each site day to day?",
      blocks: [
        {
          type: "p",
          text: "Site staff keep the decisions: they review matches, take escalations and obtain consent.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Identify",
              text: "LLM-based screening reads structured fields and notes against each criterion, ranks candidates and shows the evidence behind each decision. Coordinators review a ranked list instead of building one by hand.",
            },
            {
              title: "Engage",
              text: "[Engage](/engage) runs voice and text outreach, pre-screening and scheduling with scripts configured per site and study. Patients are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Consent",
              text: "[Consent](/consent) support explains the study in plain language, answers patient questions, supports comprehension and escalates to staff. The investigator and delegated staff still obtain consent.",
            },
          ],
        },
        {
          type: "p",
          text: "Bond can also set up Meta and Google ad campaigns for your study across the sites it supports.{{cite:bond-product}} Leads from those ads flow straight into the same voice and text agents that pre-screen and schedule patients found in each site's EHR.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "diversity-plans",
      heading: "How does EHR screening relate to a Diversity Action Plan?",
      blocks: [
        {
          type: "p",
          text: "FDORA, enacted in December 2022, requires sponsors to submit a [Diversity Action Plan](/glossary/diversity-action-plan) for Phase 3 and other pivotal drug studies and certain device studies, with enrollment goals broken down by race, ethnicity, sex and age group. The requirement applies to studies that begin enrollment more than 180 days after FDA publishes final guidance.{{cite:fda-dap-report}} As of September 2026, FDA's guidance page still lists the June 2024 guidance as a draft.{{cite:fda-dap-guidance}}",
        },
        {
          type: "p",
          text: "Who gets asked shapes who enrolls. In the 2020 HINTS survey, 9% of US adults had ever been invited to join a clinical trial, and 47% of those invited took part. Rural adults had about a third of the odds of urban adults of being invited.{{cite:hints-2021}}",
        },
        {
          type: "p",
          text: "Bond screens the connected EHR population against the criteria, not only referrals, but which populations get screened still depends on the sites you select. See [Bond for FQHCs and community sites](/for/fqhcs-and-community-sites).",
        },
      ],
    },
    {
      id: "reporting",
      heading: "What will you see reported across your sites?",
      blocks: [
        {
          type: "p",
          text: "Bond reports the same funnel at every site: patients matched, contacted, pre-screened, consented and randomized, plus time to enrollment, matching accuracy, screen-failure signals and coordinator hours saved.{{cite:bond-site}} Bond counts a patient as enrolled once randomized, the count that sets [last-patient-in](/glossary/last-patient-in).",
        },
        {
          type: "table",
          caption: "Sponsor problems, what Bond does, and what you measure",
          columns: ["Problem", "What Bond does", "What you measure"],
          rows: [
            ["Each delay day adds direct cost and forgone sales", "Starts screening and outreach as each site goes live", "Time to enrollment, per site"],
            ["Sites enroll unevenly, and some enroll no one", "Gives each site a ranked match list and runs first contact", "Matched, contacted, pre-screened and randomized, per site"],
            ["Feasibility estimates are not comparable across sites", "Counts chart matches with the same configured criteria at each site", "Patients matched, against the site's feasibility estimate"],
            ["Screen failures after the visit is booked", "Chart evidence per criterion, then a pre-screening call", "Screen-failure signals and matching accuracy"],
            ["No view of where a site is stuck", "Dashboard and audit trail of matches, contacts and hand-offs", "Counts at each funnel stage, per site"],
          ],
          note: "Measures are from Bond's published reporting set.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "Stage counts show where a site is stuck: few matches point at the criteria or population, matches without contacts at review or outreach, pre-screens without consents at scheduling or the consent discussion, and consents without randomizations at screen failures.",
        },
        {
          type: "callout",
          tone: "info",
          title: "About Bond's headline figures",
          text: "Bond's website states up to 3x faster enrollment than manual recruitment, over 90% matching accuracy and at least 50% less chart review.{{cite:bond-site}} These are Bond's own figures, not a forecast for your protocol. Plan with each site's measured rates once it is live.",
        },
      ],
    },
    {
      id: "deployment",
      heading: "What does deployment ask of the sponsor and its sites?",
      blocks: [
        {
          type: "p",
          text: "Bond deploys at the sites you select. Each site signs a business associate agreement, completes a security review, connects its EHR, configures criteria and scripts with Bond, and submits outreach scripts to its IRB where required. Full EHR integration typically takes 4 to 6 weeks per site, depending on the EHR, IT review and interface method. A pilot using a patient list the site already holds, without EHR integration, can start in under 2 weeks.{{cite:bond-site}} See [implementation](/implementation) and [security](/security).",
        },
        {
          type: "checklist",
          items: [
            "Pick the first studies and sites, starting where enrollment risk is highest.",
            "Share how your medical team reads ambiguous criteria, such as lookback windows and lab cutoffs, so every site configures them the same way.",
            "Agree funnel definitions and a reporting cadence before the first site goes live.",
            "Start Bond setup during site start-up, not after activation.",
          ],
        },
        {
          type: "p",
          text: "Activation is not enrollment. In CRIO's July 2026 start-up benchmarks, measured by study, the median time from site activation to first patient visit screened was 20 days, with quartile values of 8 and 34 days.{{cite:crio-startup-2026}} Configuring screening during start-up lets it begin at activation.",
        },
        {
          type: "p",
          text: "Engage connects to the site's calendar, CTMS or a Google Sheet for scheduling and hand-off, and Bond is a [CRIO Certified Partner](/integrations/crio).{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "pricing",
      heading: "How does pricing line up with what a sponsor pays for?",
      blocks: [
        {
          type: "p",
          text: "Bond uses two-part pricing. A volume-based platform fee covers EHR integration, implementation and ongoing operation: the EHR connection, security review and audit logging setup, workflow configuration and ongoing support. There is no separate integration fee. A success fee is charged per enrolled patient, meaning randomized, and per-visit milestones can be added.{{cite:bond-site}} The variable part tracks the same randomized count your reports show, not calls placed or leads passed. Pricing is custom; see [pricing](/pricing).",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol and your site list. We will walk through how its criteria would be configured and what your funnel reports would show.",
          secondaryLabel: "How implementation works",
          secondaryHref: "/implementation",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does the sponsor see patient-level data?",
      a: "Bond works under a business associate agreement with each site and handles patient data on the site's behalf.{{cite:bond-site}} The measures listed above are counts by site and funnel stage. Any sharing beyond that follows your agreements with each site. See [security](/security).",
    },
    {
      q: "Can Bond work across sites on different EHRs?",
      a: "Yes. Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR R4 APIs, HL7 v2 where applicable, or an integration partner.{{cite:bond-site,bond-product}} The [integrations](/integrations) pages list what each site provides.",
    },
    {
      q: "Can Bond join a study that is already enrolling?",
      a: "Yes. A site can start with a list-based pilot and move to full EHR screening once integration is complete.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "tufts-delay-2024",
      title: "Quantifying the Value of a Day of Delay in Drug Development",
      publisher: "Tufts Center for the Study of Drug Development",
      url: "https://csdd.tufts.edu/sites/default/files/2025-02/Aug2024%20Day%20of%20Delay%20White%20Paper%20Final.pdf",
      year: "2024",
      note: "White paper, August 2024; 2023 dollars. Direct cost per day is total budget divided by trial duration for 447 protocols from Tufts CSDD benchmark studies run 2016 to 2021. Sales per day are total sales divided by days since launch, averaged across 645 drugs and biologics. Quote: \"Phase III clinical trials had the highest direct cost per day at $55,716. Phase II clinical trials cost roughly half that amount at $23,737 per day.\" Also: \"At the present time a single day of delay is worth approximately $800,000 in lost prescription drug or biologic sales. The $4 - 5 million figure has been a gross misestimation for more than 25 years.\"",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "January 15, 2013. More than 150 studies and nearly 16,000 sites; global, pre-2013 data. Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\" Also: \"While nine out of 10 clinical trials worldwide meet their patient enrollment goals, reaching those targets typically means that drug developers need to nearly double their original timelines\" and \"89% of all clinical trials meet enrollment goals\"",
    },
    {
      id: "carlisle-2015",
      title: "Unsuccessful trial accrual and human subjects protections: an empirical analysis of recently closed trials",
      publisher: "Clinical Trials (Carlisle B et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/25475878/",
      year: "2015",
      note: "ClinicalTrials.gov registrations of Phase 2 and 3 interventional trials closed in 2011; global, all funders. Quote: \"Of 2579 eligible trials, 481 (19%) either terminated for failed accrual or completed with less than 85% expected enrolment, seriously compromising their statistical power.\"",
    },
    {
      id: "ctv-tufts-2024",
      title: "Tufts CSDD: New Insights on The Clinical Trial Industry",
      publisher: "Clinical Trial Vanguard (conference coverage of Ken Getz, Tufts CSDD)",
      url: "https://www.clinicaltrialvanguard.com/conference-coverage/tufts-csdd-new-insights-on-the-clinical-trial-industry/",
      year: "2024",
      note: "Secondary report of Ken Getz's Tufts CSDD presentation at the SCOPE Summit, March 19, 2024. Quote: \"What this suggests is that 40% of sites in North America that we actually will look to engage will not activate. Some of those sites may never get through the contracting and budgeting process. They may never get approval from the IRB\"",
    },
    {
      id: "wcg-2025",
      title: "2025 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/sites/2/2025/10/WCG-Site-Challenges-Report-2025.pdf",
      year: "2025",
      note: "Survey of 611 sites, July to September 2025, 80% US. Quote: \"Recruitment and retention continue to be major challenges for clinical research sites, with 28% of sites saying it is one of their top challenges, compared to 36% in 2024.\" Also: \"a vital need identified by 41% of sites, who cite 'expanded patient recruitment and retention services' as a top priority for sponsors to address to ensure site operational viability\"",
    },
    {
      id: "feasibility-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Site Enablement League task force. \"The problem\" is the site burden, inefficiency and lack of transparency the paper describes in site feasibility; the $1.6B figure is cited to the paper's reference [4] and extrapolates from an ASCO oncology feasibility survey. Full text read via Europe PMC. Quote: \"The results are applicable across all therapeutic areas, and therefore the scale of the problem across the industry is estimated at $1.6B\" Also: \"sites are typically not compensated for feasibility assessment work\" and \"The process may include a survey or feasibility questionnaire (FQ) as well as a site visit\"",
    },
    {
      id: "fda-dap-report",
      title: "Report to Congress: Diversity Action Plans Summary FY 2023 and FY 2024",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/184768/download",
      year: "2025",
      note: "Quote: \"FDORA amended the Federal Food, Drug, and Cosmetic Act (FD&C Act) to require submission of a 'Diversity Action Plan' for: A clinical investigation of a new drug that is a phase 3 study (as defined in 21 CFR 312.21), or as appropriate, another pivotal clinical\" study. Also: \"Sections 505(z) and 520(g)(9) of the FD&C Act require that sponsors submit a Diversity Action Plan that specifies goals for clinical study enrollment, and FDORA states that such goals must be disaggregated by the race, ethnicity, sex, and age group demographic characteristics of the clinically relevant population.\" And: \"The requirement to submit Diversity Action Plans will apply to certain studies for which enrollment commences after 180 days from the publication of the final guidance.\"",
    },
    {
      id: "fda-dap-guidance",
      title: "Diversity Action Plans to Improve Enrollment of Participants from Underrepresented Populations in Clinical Studies (draft guidance)",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/diversity-action-plans-improve-enrollment-participants-underrepresented-populations-clinical-studies",
      year: "2024",
      note: "Checked September 22, 2026: status Draft, issued June 2024, docket FDA-2021-D-0789. Quote: \"Not for implementation. Contains non-binding recommendations.\" Also: \"Per a court order, HHS is required to restore this website to its version as of 12:00 AM on January 29, 2025.\"",
    },
    {
      id: "hints-2021",
      title: "Demographic and Health Behavior Factors Associated With Clinical Trial Invitation and Participation in the United States",
      publisher: "JAMA Network Open (Williams CP et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/34586365/",
      year: "2021",
      note: "Health Information National Trends Survey (HINTS) 2020, 3,689 US adults, weighted. Quote: \"Overall, 439 respondents (9%) had been invited to participate in any clinical trial. ... Of invited respondents, 199 (47%) participated.\" Also: \"Respondents residing in rural vs urban areas had 77% decreased odds of invitation to a clinical trial (aOR 0.33; 95% CI 0.17-0.65).\" The page text says 77%, but an adjusted odds ratio of 0.33 is about a third of the odds, which is how it is stated here.",
    },
    {
      id: "crio-startup-2026",
      title: "What It Takes to Start a Study: Site Start-up Benchmarks",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/what-it-takes-to-start-a-study-site-start-up-benchmarks/",
      year: "2026",
      note: "Published July 30, 2026. Analysis CRIO performed for the Site Accreditation and Standards Institute (SASI); sample size not stated. Columns are Metric, Data is by, Quartile 1, Median, Quartile 3; this metric is measured per study, and the article does not define which quartile is faster, so the page gives the two quartile values without ranking them. Quote: \"Days from site activation to first patient visit screened | Study | 34 | 20 | 8\"",
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
      note: "Goel R. Bond Health preprint, August 2026; no public URL yet. The graph combines 18 biomedical terminology sources, including UMLS, SNOMED CT, RxNorm, LOINC and ICD-10-CM.",
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
    { label: "Bond for CROs", href: "/for/cros", description: "Screening, outreach and one enrollment funnel across a CRO's site portfolio." },
    { label: "Implementation", href: "/implementation", description: "What full EHR integration involves over 4 to 6 weeks, and what a site provides." },
    { label: "Pricing", href: "/pricing", description: "A platform fee plus a success fee per randomized patient." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites", description: "What sponsors and CROs check during feasibility and selection." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Ranked candidates with the chart evidence for each criterion." },
  ],
};

export default page;
