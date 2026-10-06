import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/activation-to-first-patient-in",
  category: "blog",
  title: "Site activation to first patient in: benchmarks and delays",
  description:
    "CRIO's median is 20 days from activation to first patient screened, and a late first enrollment predicts missed accrual. Causes and a readiness checklist.",
  keywords: [
    "site activation to first patient in",
    "time to first patient in benchmark",
    "first patient screened after site activation",
    "clinical trial site start-up delays",
    "non-enrolling sites",
  ],
  eyebrow: "Blog",
  h1: "From site activation to first patient in: benchmarks and causes of delay",
  intro:
    "The gap between site activation and first patient in is usually a few weeks, and it predicts the rest of the study. In CRIO's site data, the median study took 20 days from activation to first patient screened, with the fastest quarter at 8 days and the slowest at 34.{{cite:crio-startup}} Among NCI-sponsored cancer trials, those that took longer than 2 months to enroll a first patient were significantly less likely to reach their accrual goal.{{cite:cheng-2011}} Most of the gap can be closed before the site is greenlit.",
  summary: "Benchmarks for activation to first patient in, why the first patient predicts accrual, and a pre-activation checklist.",
  lastUpdated: "2026-11-13",
  blog: { date: "2026-11-13", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How implementation works", secondaryHref: "/implementation" },
  sections: [
    {
      id: "benchmarks",
      heading: "How long does it take to go from activation to first patient in?",
      blocks: [
        {
          type: "p",
          text: "A recent public benchmark comes from CRIO, an eSource and site software vendor, in an analysis it ran for the Site Accreditation and Standards Institute. It measures days per study, split into quartiles.{{cite:crio-startup}}",
        },
        {
          type: "table",
          caption: "Site start-up benchmarks from CRIO system data (days per study)",
          columns: ["Metric", "Slowest quarter", "Median", "Fastest quarter"],
          rows: [
            ["Regulatory documents received to submitted", "15", "7", "4"],
            ["Budget received to budget returned", "23", "9", "5"],
            ["Site activation to first patient visit screened", "34", "20", "8"],
          ],
          note: "Vendor data from sites using CRIO; the post does not state the sample size. First patient screened is not first patient randomized, which adds the screening window.{{cite:crio-startup}}",
        },
        {
          type: "p",
          text: "Activation itself takes much longer. A Tufts CSDD survey of more than 400 sponsors and CROs found the start-up process averages 5 to 6 months, and is faster with repeat sites than new ones.{{cite:lamberti-2018}} In WCG's 2025 survey, 54% of independent sites and physician practices said start-up took under 60 days, against 9% of academic medical centers, health systems, community hospitals and site networks.{{cite:wcg-2025}}",
        },
      ],
    },
    {
      id: "why-first-patient-matters",
      heading: "Why does the first patient matter so much?",
      blocks: [
        {
          type: "p",
          text: "Because a slow start is hard to recover from. In 764 NCI-CTEP therapeutic trials from 2000 to 2007, 49.6% took more than 2 months to enroll their first patient, and those trials were significantly less likely to reach their minimum accrual (odds ratio 0.637). Overall, 81.5% missed their projected accrual within the planned period.{{cite:cheng-2011}}",
        },
        {
          type: "stats",
          items: [
            { value: "11%", label: "Of sites in a typical trial enroll no patients at all (Tufts CSDD, 2013)", cite: "tufts-2013" },
            { value: "37%", label: "Of sites under-enroll against their target (Tufts CSDD, 2013)", cite: "tufts-2013" },
            { value: "$55,716", label: "Mean direct cost per day of a phase III trial, 2023 dollars (Tufts CSDD)", cite: "tufts-delay-2024" },
          ],
        },
        {
          type: "p",
          text: "For sponsors, a site that activates but does not enroll carries start-up and monitoring costs with nothing to show for them. Tufts CSDD research, as summarized in DIA's Global Forum, found only 60% of activated sites in a trial enroll a patient.{{cite:dia-last-mile}} For the site, in a study with competitive enrollment, a slow start can mean a smaller share of patients and less of the per-patient revenue the budget was built on.",
        },
      ],
    },
    {
      id: "causes-of-delay",
      heading: "What causes the delay after activation?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Recruitment materials not approved.** FDA says ads should go to the IRB with the initial package; ads added later may be handled as an amendment to the ongoing study.{{cite:fda-recruiting}} A site that writes its ads after activation starts recruiting with an approval cycle still ahead.",
            "**No candidate list.** If chart review starts on activation day, the first weeks go to finding patients rather than screening them.",
            "**Source documents not ready.** CRIO's data show a median of 11 days to build and publish source templates, and its post cites a Tufts CSDD finding that sites wait about 6 weeks on average for the documents needed to complete source.{{cite:crio-startup}}",
            "**Start-up that ran long.** Budgets and contracts were the leading contributor to start-up delays for 73% of WCG's 2025 respondents.{{cite:wcg-2025}} When contracting runs late, the work that should happen in parallel, like ads and pre-screening, often slips too.",
            "**Slow first contact.** An interested patient cannot start screening until someone at the site answers. In a pilot summarized by DIA, only 35% of cancer patients who used trial contact details on ClinicalTrials.gov got a response.{{cite:dia-last-mile}}",
          ],
        },
      ],
    },
    {
      id: "readiness-checklist",
      heading: "What can a site do before activation?",
      blocks: [
        {
          type: "p",
          text: "Treat recruitment as part of start-up, not something that begins at the greenlight. This checklist is ordered roughly by lead time.",
        },
        {
          type: "checklist",
          items: [
            "**Send recruitment materials with the initial IRB package:** ads, landing page, pre-screening scripts, and call and text wording, so none of them needs an amendment later.{{cite:fda-recruiting}}",
            "**Build the EHR query during feasibility.** HIPAA permits review of patient records as necessary to prepare a research protocol, as long as no PHI leaves the covered entity; contacting patients waits for IRB approval. Confirm the approach with your privacy office and IRB. This is not legal advice.{{cite:hipaa-164-512}}",
            "**Rank the first candidates** by upcoming clinic visits so the first screening visits can be booked in week one.",
            "**Build source templates** as soon as the final protocol and CRF guidelines arrive, before the site initiation visit.",
            "**Hold screening slots** on the investigator's calendar for the first two weeks after activation.",
            "**Confirm logistics dates:** investigational product, lab kits, and EDC and IRT access, so none of them is the reason a consented patient waits.",
            "**Name a backup coordinator** for the study in case the primary is out or leaves.",
            "**Set a target** for activation to first patient screened. CRIO's fastest quarter is 8 days, a reasonable stretch goal.{{cite:crio-startup}}",
          ],
        },
        {
          type: "p",
          text: "Integration lead time matters here too. Bond's full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method, and Bond creates and runs Meta and Google ad campaigns for each study, with voice and text agents that contact every new lead immediately and book pre-screened patients into the site's calendar.{{cite:bond-product}} Our [implementation page](/implementation) lays out the steps.",
        },
      ],
    },
    {
      id: "sponsor-role",
      heading: "What can sponsors and CROs do to shorten the gap?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Reuse sites that have delivered.** Tufts found every start-up activity is faster at repeat sites than new ones.{{cite:lamberti-2018}}",
            "**Send recruitment templates early,** with the protocol, so sites can submit them in the first IRB package.",
            "**Measure activation to first patient screened per site,** not only activation dates, and ask about the plan for the first 30 days at the site initiation visit.",
            "**Pay for the pre-activation work** you want, such as feasibility queries and early chart review, as budget line items.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a study that is about to activate. We will show what Bond's screening list and outreach would look like on day one.",
          secondaryLabel: "How implementation works",
          secondaryHref: "/implementation",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the difference between site activation and first patient in?",
      a: "Activation is when a site is cleared to enroll, after IRB approval, contracts and the initiation visit. First patient in is the first patient screened, consented or randomized, depending on the sponsor's definition, so ask which one a target refers to. See [site activation](/glossary/site-activation) and [first patient in](/glossary/first-patient-in).",
    },
    {
      q: "Is 20 days from activation to first patient screened good?",
      a: "It is the median in CRIO's data. The fastest quarter of studies reached first patient screened in 8 days and the slowest in 34.{{cite:crio-startup}}",
    },
    {
      q: "Can a site review charts before the study is activated?",
      a: "HIPAA allows review of records as necessary to prepare a research protocol when no PHI leaves the covered entity, but contacting patients requires IRB approval of the study and its recruitment materials.{{cite:hipaa-164-512,fda-recruiting}} Check your institution's policy; this is not legal advice.",
    },
  ],
  sources: [
    {
      id: "crio-startup",
      title: "What It Takes to Start a Study: Site Start-up Benchmarks",
      publisher: "CRIO (Raymond Nomizu)",
      url: "https://clinicalresearch.io/blog/what-it-takes-to-start-a-study-site-start-up-benchmarks/",
      year: "2026",
      note: "Vendor blog dated July 30, 2026; analysis CRIO performed for the Site Accreditation and Standards Institute; sample size not stated. Read October 2026. Quote: \"The median time from activation to first patient screened is 20 days, but top-quartile performance is observed at just 8 days, or a little over a week. Bottom-quartile performance is 34 days, or just over a month.\" Table rows: reg docs 15 / 7 / 4 days; budget 23 / 9 / 5 days. Quote: \"we observe a median turnaround time of 11 days, with top-quartile performance at 5 days, and bottom-quartile at 26 days.\" Quote: \"it therefore takes on average 6 weeks for the site to receive all the documents necessary for source completion.\"",
    },
    {
      id: "cheng-2011",
      title: "Predicting accrual achievement: monitoring accrual milestones of NCI-CTEP-sponsored clinical trials",
      publisher: "Clinical Cancer Research (Cheng SK, Dietrich MS, Dilts DM), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/21447723/",
      year: "2011",
      note: "Abstract read October 2026. 764 nonpediatric therapeutic trials, 2000 to 2007. Quote: \"A total of 81.5% (n = 623) of the trials did not achieve the projected accrual goals within the anticipated accruing period.\" Quote: \"Trials that accrue the first enrollment beyond 2 months (n = 379, 49.6%) are significantly less likely to achieve the accrual performance than those trials that enroll patients under 2 months (OR: 0.637, 95% CI: 0.464-0.875, P = 0.005).\"",
    },
    {
      id: "lamberti-2018",
      title: "Assessing Study Start-up Practices, Performance, and Perceptions Among Sponsors and Contract Research Organizations",
      publisher: "Therapeutic Innovation & Regulatory Science (Lamberti MJ et al., Tufts CSDD), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29714558/",
      year: "2018",
      note: "Abstract read October 2026. Quote: \"Responses from over 400 unique companies were gathered and analyzed.\" Quote: \"the start-up process is on average 5 to 6 months in total duration, and cycle times across all activities, including site identification, site selection, and study start-up, are faster for repeat sites than for new sites.\"",
    },
    {
      id: "wcg-2025",
      title: "2025 Clinical Research Site Challenges Report",
      publisher: "WCG",
      url: "https://www.wcgclinical.com/wp-content/uploads/sites/2/2025/10/WCG-Site-Challenges-Report-2025.pdf",
      year: "2025",
      note: "Vendor survey of 611 sites, July to September 2025. Read October 2026. Quote: \"independent sites and physician practices tend to have faster start-up timelines, with 54% reporting that they can initiate studies in under 60 days. In contrast, academic medical centers, community hospitals, health systems, and site networks typically face longer timelines, with only 9% saying their study start-up timelines take less than 60 days.\" Quote: \"budgets and contracts emerged as the leading factors contributing to delays in study start-up timelines, impacting 73% of respondents.\"",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013; more than 150 studies and nearly 16,000 sites. Read October 2026. Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\"",
    },
    {
      id: "dia-last-mile",
      title: "Documenting the \"Last Mile\" Leak in the Patient Recruitment Pipeline",
      publisher: "DIA Global Forum (Ralic, Monreal, Vieyra of Ancora.ai; Ford, Getz of Tufts CSDD)",
      url: "https://globalforum.diaglobal.org/issue/september-2024/documenting-the-last-mile-leak-in-the-patient-recruitment-pipeline/",
      year: "2024",
      note: "Read October 2026. Quote: \"According to research conducted by the Tufts Center for the Study of Drug Development (Tufts CSDD), only 60% of activated investigative sites in any trial enroll a patient\". Pilot of 133 cancer patients; quote: \"only 46 received a response when using contact information provided on ClinicalTrials.gov, yielding a 35% response rate.\"",
    },
    {
      id: "tufts-delay-2024",
      title: "Quantifying the Value of a Day of Delay in Drug Development",
      publisher: "Tufts Center for the Study of Drug Development (Smith Z, DiMasi J, Getz K)",
      url: "https://csdd.tufts.edu/sites/default/files/2025-02/Aug2024%20Day%20of%20Delay%20White%20Paper%20Final.pdf",
      year: "2024",
      note: "White paper; 447 protocol budgets, 2023 dollars. Read October 2026. Quote: \"Phase III clinical trials had the highest direct cost per day at $55,716.\"",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Information sheet guidance, January 1998. Read October 2026. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process. Advertisements should be reviewed and approved by the IRB as part of the package for initial review. However, when the clinical investigator decides at a later date to advertise for subjects, the advertising may be considered an amendment to the ongoing study.\"",
    },
    {
      id: "hipaa-164-512",
      title: "45 CFR 164.512(i): Uses and disclosures for research purposes",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Read October 2026. Quote (164.512(i)(1)(ii)): \"Use or disclosure is sought solely to review protected health information as necessary to prepare a research protocol or for similar purposes preparatory to research\" and \"No protected health information is to be removed from the covered entity by the researcher in the course of the review\".",
    },
    {
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, pricing and compliance status described by Bond Health, October 2026.",
    },
  ],
  related: [
    { label: "Site activation", href: "/glossary/site-activation", description: "What has to be in place before a site can enroll." },
    { label: "First patient in", href: "/glossary/first-patient-in", description: "How sponsors define and track the first enrollment milestone." },
    { label: "Implementation", href: "/implementation", description: "How Bond connects to a site's EHR and calendar before launch." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact which patients, and with what approval." },
  ],
};

export default page;
