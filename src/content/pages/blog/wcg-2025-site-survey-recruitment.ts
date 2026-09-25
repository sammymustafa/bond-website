import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/wcg-2025-site-survey-recruitment",
  category: "blog",
  title: "WCG 2025 site survey: 611 sites on recruitment challenges",
  description:
    "WCG's 2025 survey of 611 research sites: recruitment fell to the fourth-ranked challenge, and more sites hired or trained staff than adopted technology.",
  keywords: [
    "WCG site survey 2025 recruitment challenges",
    "WCG Site Challenges Report 2025",
    "clinical research site challenges",
    "site staffing and patient recruitment",
  ],
  eyebrow: "Blog",
  h1: "What 611 sites told WCG about recruitment in 2025",
  intro:
    "Between July and September 2025, 611 clinical research sites answered WCG's third annual site challenges survey.{{cite:wcg-2025}} Recruitment and retention fell from second to fourth among their top challenges, and hiring and training were each more common responses than technology. Our argument: more staff does not lower the hours each enrollment costs, so a site should test tools against a measured baseline.",
  summary: "WCG's 2025 site survey, read closely: where recruitment ranks, what sites did about it, and what to measure next.",
  lastUpdated: "2026-09-21",
  blog: { date: "2026-09-21", author: "Bond Health", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Bond for research sites", secondaryHref: "/for/research-sites" },
  sections: [
    {
      id: "who-answered",
      heading: "Who answered the WCG 2025 site survey?",
      blocks: [
        {
          type: "p",
          text: "Of the 611 responding sites, 60% were academic medical centers, health systems or community hospitals, and 35% were independent sites, physician practices or site networks. Eighty percent were in the United States. Most respondents were operational staff: 28% in research administration and 27% coordinators or research nurses. Only 7% were principal investigators.{{cite:wcg-2025}}",
        },
        {
          type: "p",
          text: "Three caveats. The report does not say how sites were invited, so it describes the sites that answered, not all sites. Top-three and multiple-answer questions limit how percentages can be combined. And WCG sells IRB review and site services, including site resource augmentation and study start-up support, per the report's closing section.{{cite:wcg-2025}}",
        },
      ],
    },
    {
      id: "where-recruitment-ranks",
      heading: "Where does recruitment rank among site challenges?",
      blocks: [
        {
          type: "p",
          text: "Sites picked their top three issues from a fixed list. Recruitment and retention was named by 28%, down from 36% in 2024.{{cite:wcg-2025}}",
        },
        {
          type: "table",
          caption: "Share of sites naming each issue in their top three",
          columns: ["Challenge", "2025", "2024"],
          rows: [
            ["Complexity of clinical trials", "35%", "38%"],
            ["Study start-up (coverage analysis, budgets, contracts)", "31%", "35%"],
            ["Site staffing", "30%", "31%"],
            ["Recruitment and retention", "28%", "36%"],
            ["Long study initiation timelines", "26%", "22%"],
            ["Trial delays and cancellations", "23%", "Not listed"],
            ["Sponsor-provided technology", "20%", "19%"],
          ],
          note: "Each site chose three issues. Trial delays and cancellations was not a 2024 option.{{cite:wcg-2025}}",
        },
        {
          type: "p",
          text: "Read the drop narrowly: fewer sites ranked recruitment above other problems, which is not the same as trials enrolling faster. It also varies by site type: 32% of independent sites and physician practices named it, against 26% of larger sites, a gap WCG links in part to smaller patient databases and less brand recognition.{{cite:wcg-2025}}",
        },
      ],
    },
    {
      id: "what-sites-did",
      heading: "What did sites do about their challenges?",
      blocks: [
        {
          type: "p",
          text: "WCG asked which solutions sites had put in place for their challenges overall, not for recruitment alone. Sites could select all that apply.",
        },
        {
          type: "ul",
          items: [
            "Hired additional staff: 34%",
            "Trained staff or PIs: 33%",
            "Implemented technology solutions: 26%",
            "Took on more industry-sponsored trials: 23%",
            "Partnered with clinical services companies: 19%",
            "Limited studies to specific therapeutic areas, or joined fewer studies: 16% each{{cite:wcg-2025}}",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Why 34% plus 33% is not 67%",
          text: "A site that hired and trained counts in both figures, so the share that did at least one lies somewhere between 34% and 67%. The report does not say where.{{cite:wcg-2025}}",
        },
      ],
    },
    {
      id: "people-before-technology",
      heading: "Why do sites reach for people before technology?",
      blocks: [
        {
          type: "p",
          text: "The survey does not ask why, but its other answers suggest a reason: sites already carry a technology load. Asked for the single biggest driver of trial complexity, 22% chose the number of technologies and vendors a trial requires, second only to complex protocols. Sponsor-provided systems such as CTMS, eReg and eISF were a top-three issue for 20% of all sites and 25% of independent sites and physician practices. Only 9% named their own site technology.{{cite:wcg-2025}}",
        },
        {
          type: "p",
          text: "The complaint is mostly about systems each sponsor requires, not tools a site picks. But any new system means IT and security review, training and new coordinator routines, while a new hire follows a process every site already knows.",
        },
      ],
    },
    {
      id: "limits-of-headcount",
      heading: "What are the limits of solving recruitment with headcount?",
      blocks: [
        {
          type: "p",
          text: "Hiring is itself one of the problems. Site staffing was a top-three issue for 30% of sites. Over the past year, 45% of sites held staffing levels steady, 28% grew and 27% shrank.{{cite:wcg-2025}} In ACRP's 2025 workforce survey of more than 735 clinical research professionals, 52% said hiring and retaining staff is worse than it was 5 to 10 years ago.{{cite:acrp-workforce-2025}}",
        },
        {
          type: "p",
          text: "Headcount also scales in a straight line with the work. In a 2012 study at one cancer center, finding, screening and enrolling a single patient took 3.4 to 8.8 staff hours, depending on the type of study.{{cite:penberthy-2012}} Protocol design adds to that load: 59% of WCG's respondents ranked complex protocols, including eligibility criteria, as the biggest driver of trial complexity.{{cite:wcg-2025}} A new coordinator adds hours, but the hours each enrollment costs stay the same. Our [comparison of Bond and manual chart review](/compare/bond-vs-manual-chart-review) breaks down where those hours go.",
        },
      ],
    },
    {
      id: "does-technology-save-time",
      heading: "Does recruitment technology actually save coordinator time?",
      blocks: [
        {
          type: "p",
          text: "Sometimes. In a pilot at a Yale Cancer Center GI oncology clinic, reported in 2023, a matching algorithm excluded 146 of 161 patients in one week, leaving 15 charts for staff, and missed none of the six eligible patients. Review time fell from 3.11 to 1.82 minutes per patient.{{cite:yale-aaci-2023}} In a randomized evaluation on 355 oncology charts, AI assistance raised coordinators' chart-level accuracy from 71.1% to 76.5% but saved no time.{{cite:parikh-2026}}",
        },
        {
          type: "stats",
          items: [
            { value: "41%", label: "Less review time per patient with a pre-filter at one Yale clinic", cite: "yale-aaci-2023" },
            { value: "37.8 vs 37.4 min", label: "Per chart without and with AI assistance in a randomized evaluation", cite: "parikh-2026" },
          ],
        },
        {
          type: "p",
          text: "The difference is what happens after the tool runs. In the randomized study, coordinators read every document for all 12 criteria, and the authors note it was not powered to detect a time difference.{{cite:parikh-2026}} Time is more likely to drop when the tool narrows who gets reviewed and shows where each criterion was met, so the coordinator checks evidence instead of hunting for it. Bond's [Identify](/identify) stage works this way: it ranks candidates and links each criterion to its evidence. Bond's website cites 50%+ less chart review, a figure to confirm on your own study.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "what-to-do",
      heading: "What should a site do with these findings?",
      blocks: [
        {
          type: "p",
          text: "Treat hiring, training and technology as one plan, not rival options. WCG's recommendations to sites cover both staff training and technology, along with tracking key metrics against industry benchmarks and launching pilot projects.{{cite:wcg-2025}} For recruitment, that looks like this.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Measure one study",
              text: "Log coordinator hours on chart review, outreach and scheduling for one active study over two weeks, with referrals and enrollments.",
            },
            {
              title: "Find the bottleneck",
              text: "Fix the step with the most hours per enrolled patient first. The [coordinator chart review checklist](/templates/coordinator-chart-review-checklist) standardizes the manual baseline.",
            },
            {
              title: "Pilot one tool on that step",
              text: "Same study, same staff. Agree on measures in advance: hours per referral, referrals per week, and screen-fail rate at the first visit, which the [screen failure guide](/guides/reduce-screen-failure) covers.",
            },
            {
              title: "Train the people who will use it",
              text: "Agree on what a coordinator must verify for each flagged patient. If every chart still gets a full read, as in the randomized study above, time may not drop.",
            },
            {
              title: "Decide on a set date",
              text: "Set the review date before the pilot starts, and keep the tool only if the numbers moved. Either way, you have data for sponsor feasibility calls.",
            },
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one active protocol. We will show how Bond screens it and what a pilot on your slowest step would measure.",
          secondaryLabel: "Bond for research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Did 67% of sites choose hiring or training over technology?",
      a: "No. Sites could pick both, so the 34% who hired and the 33% who trained overlap by an unknown amount. Each was more common than implementing technology, at 26%.{{cite:wcg-2025}}",
    },
    {
      q: "Did recruitment get easier for sites in 2025?",
      a: "Fewer sites ranked it a top-three issue: 28% against 36% in 2024. That tracks how sites ranked it, not how fast trials enrolled.{{cite:wcg-2025}}",
    },
    {
      q: "What was the top challenge in the WCG 2025 survey?",
      a: "Complexity of clinical trials, named by 35% of sites, followed by study start-up at 31%. Asked what drives that complexity most, 59% chose complex protocols.{{cite:wcg-2025}}",
    },
    {
      q: "Where does Bond fit among the solutions sites listed?",
      a: "Under implementing technology. Bond screens EHR records against a study's criteria, runs voice and text outreach, and supports the consent process, with a dashboard and audit trail for the site team.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "wcg-2025",
      title: "2025 Clinical Research Site Challenges Report",
      publisher: "WCG",
      url: "https://www.wcgclinical.com/wp-content/uploads/sites/2/2025/10/WCG-Site-Challenges-Report-2025.pdf",
      year: "2025",
      note: "Survey of 611 sites, July to September 2025. Quote: \"Recruitment and retention continue to be major challenges for clinical research sites, with 28% of sites saying it is one of their top challenges, compared to 36% in 2024.\" Quote: \"32% of smaller sites cited recruitment and retention as a top challenge, which can stem from having more limited resources, less brand recognition, and smaller patient databases compared to larger sites.\" Quote: \"Difficulties with sponsor-provided technologies were reported by 25% of smaller sites, compared to only 17% of larger sites.\" Quote: \"Overwhelmingly, sites said that complex protocols (i.e., trial design, endpoints, inclusion/exclusion criteria, etc.) are the largest driver of complexity in clinical trials, with 59% of sites ranking it as number one.\" Quote: \"The number of technologies and vendors required for their clinical trials was recognized as the greatest driver of complexity by 22% of sites.\" The 2024 column, trial delays (23%), site technology (9%), the larger-site figure (26%), the Q9 solutions list and the Q14 staffing changes (5% and 23% increases, 45% no change, 22% and 5% decreases) are read from the report's charts. WCG's services are listed in Section 10.",
    },
    {
      id: "acrp-workforce-2025",
      title: "ACRP Publishes Results from First-Ever National Workforce Survey",
      publisher: "Association of Clinical Research Professionals (ACRP)",
      url: "https://acrpnet.org/2025/09/24/acrp-publishes-results-from-first-ever-national-workforce-survey",
      year: "2025",
      note: "Survey of more than 735 clinical research professionals; self-selected respondents.",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice (Penberthy LT et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Virginia Commonwealth University Massey Cancer Center, 18 months of tracked screening effort.",
    },
    {
      id: "parikh-2026",
      title: "Human-AI teaming to improve accuracy and efficiency of eligibility criteria prescreening for oncology trials: a randomized evaluation trial using retrospective electronic health records",
      publisher: "Nature Communications (Parikh RB et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12976108/",
      year: "2026",
      note: "Retrospective charts, lung and colorectal cancer. Quote: \"Since our study was powered on chart-level accuracy, CRCs reviewed every EHR document in full for the presence or absence of all 12 criteria.\"",
    },
    {
      id: "yale-aaci-2023",
      title: "Automated Patient Pre-Screening Using a Clinical Trials Patient Matching Algorithm",
      publisher: "Association of American Cancer Institutes (Wiess C, Gong G, Kunz P; Yale Cancer Center)",
      url: "https://www.aaci-cancer.org/Files/Admin/CRI/2023/77-Automated-Patient-Pre-Screening-Using-Clinical-Trials-Patient-Matching-Algorithm.pdf",
      year: "2023",
      note: "One GI oncology clinic and one interventional trial; conference abstract. Quote: \"When the CTPM was applied it successfully excluded 146 patients, narrowing the pool to 15 patients for manual chart review, resulting in 100 percent sensitivity\"",
    },
    {
      id: "bond-site",
      title: "Bond Health: platform overview, FAQ and pricing",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
    },
  ],
  related: [
    { label: "Bond for research sites", href: "/for/research-sites", description: "How Bond fits a site's recruitment workflow and staff." },
    { label: "Bond vs manual chart review", href: "/compare/bond-vs-manual-chart-review", description: "Where coordinator hours go in manual screening and what software changes." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond ranks candidates and shows the evidence for each criterion." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Catching ineligible patients before the first screening visit." },
    { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist", description: "A template for standardizing manual pre-screening." },
  ],
};

export default page;
