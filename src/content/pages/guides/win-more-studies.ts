import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/win-more-studies",
  category: "guide",
  title: "How research sites get more clinical trials",
  description:
    "The levers that put a research site on a sponsor's shortlist: enrollment record, fast feasibility answers, PI time, start-up speed, networks and technology.",
  keywords: [
    "how research sites get more clinical trials",
    "win more clinical trials as a site",
    "clinical trial site selection",
    "feasibility questionnaire response",
    "study start-up time",
  ],
  eyebrow: "Guide",
  h1: "How to win more studies as a site",
  intro:
    "Sponsors and CROs give studies to sites they expect to open quickly and enroll what they promise. Much of what they check is the site's own history: enrollment against commitment, start-up time, investigator availability, and how fast and how credibly the site answered feasibility.",
  summary: "The levers a site controls to get selected for more studies, with benchmarks, a lever table and a plan for this week.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "Feasibility questionnaire template",
    secondaryHref: "/templates/feasibility-questionnaire",
  },
  sections: [
    {
      id: "why-sites-lose-studies",
      heading: "Why do capable sites lose studies?",
      blocks: [
        {
          type: "p",
          text: "The record gives sponsors reason to be careful. In a Tufts CSDD analysis of more than 150 studies and nearly 16,000 sites, published in 2013, 11% of sites in a typical trial enrolled no one and 37% under-enrolled. Only 39% met their target and 13% exceeded it.{{cite:tufts-2013-recruitment}}",
        },
        {
          type: "stats",
          items: [
            { value: "11%", label: "of sites in a typical trial enrolled no patients (Tufts CSDD, 2013)", cite: "tufts-2013-recruitment" },
            { value: "16%", label: "of better-performing sites enrolled almost half of patients in 173 cancer trials (Phesi, 2023)", cite: "phesi-labiotech-2023" },
            { value: "62%", label: "site activation rate in North America, per Tufts CSDD in 2024", cite: "ctv-tufts-2024" },
            { value: "45%", label: "of sites said their top challenges limit their capacity to take on new studies (WCG, 2025)", cite: "wcg-2025" },
          ],
        },
        {
          type: "p",
          text: "Enrollment is concentrated in a minority of sites. In the same Phesi cancer-trial analysis, 19% of sites enrolled exactly one patient.{{cite:phesi-labiotech-2023}} A site without a strong record in the indication is judged on proxies: how it answers feasibility, how fast it opens, and whether its investigator has time.",
        },
        {
          type: "p",
          text: "Activation is the second filter. Ken Getz of Tufts CSDD said in March 2024 that about 40% of the North American sites a sponsor looks to engage will not activate. Some never get through contracting, budgeting or IRB approval, and some have trouble enrolling a single patient.{{cite:ctv-tufts-2024}}",
        },
      ],
    },
    {
      id: "what-sponsors-confirm",
      heading: "What must a sponsor confirm before selecting a site?",
      blocks: [
        {
          type: "p",
          text: "Part of it is regulation. For drug studies under an IND, [21 CFR 312.53(a)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.53) says a sponsor shall select only investigators \"qualified by training and experience as appropriate experts to investigate the drug.\" Under 312.53(c), the sponsor must also obtain a signed Form FDA 1572, which includes the investigator's commitment to \"personally conduct or supervise\" the investigation.{{cite:ecfr-312-53}}",
        },
        {
          type: "p",
          text: "[ICH E6(R3)](https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf), the good clinical practice guideline adopted in January 2025, sets two expectations for the investigator. Under section 2.2.1, the investigator should be able to show, from retrospective or current data, a potential to recruit the agreed number of participants in the agreed period. Under section 2.2.2, the investigator should have sufficient time, qualified staff and facilities for the trial.{{cite:ich-e6r3}}",
        },
        {
          type: "p",
          text: "Past performance carries weight because it predicts future performance. A 2018 review of why trials fail found that sites with a record of meeting enrollment targets are more likely to meet them again, and that a site that has run 6 to 10 trials is more likely to enroll on time than one with fewer.{{cite:fogel-2018}} Our guide to [how sponsors choose sites](/guides/how-sponsors-choose-sites) covers the sponsor's scorecard in detail.",
        },
      ],
    },
    {
      id: "levers",
      heading: "Which levers can a site control?",
      blocks: [
        {
          type: "p",
          text: "None of these levers requires a larger patient population. Each requires evidence a sponsor can check.",
        },
        {
          type: "table",
          caption: "Levers that move a site onto the shortlist",
          columns: ["Lever", "What the sponsor is judging", "What the site can do"],
          rows: [
            ["Track record", "Enrollment against commitment on similar studies", "Report randomized patients against target for every closed study, with a reason next to each miss."],
            ["Feasibility response", "Whether your patient estimate is real", "Answer from protocol criteria, not diagnosis totals. Show the funnel and query date."],
            ["Therapeutic focus", "Depth in the indication", "Focus where your investigators and patients are strongest. Decline studies far outside it."],
            ["PI availability", "Whether the investigator will personally supervise", "Show each PI's study load, clinic days and a named sub-investigator. ICH E6(R3) expects sufficient time.{{cite:ich-e6r3}}"],
            ["Start-up speed", "How soon you can open", "Pre-approve budget and contract templates, and track days per start-up step."],
            ["Sponsor and CRO relationships", "Whether they have worked with you before", "Keep CRA and feasibility contacts current. Close studies cleanly."],
            ["Site network membership", "Central contracting and standard processes", "Weigh sponsor access and shared staff against fees and control."],
            ["Technology signals", "Whether you will use their systems and deliver clean data", "List your systems and agree to use the sponsor's where required."],
            ["Marketing to sponsors", "Whether they know you exist", "Keep a current site profile and performance summary."],
          ],
        },
      ],
    },
    {
      id: "feasibility",
      heading: "How should a site answer a feasibility questionnaire?",
      blocks: [
        {
          type: "p",
          text: "Feasibility is where many sites win or lose a study. Questionnaires can run from 10 to 40 pages, and sites are typically not compensated for the work.{{cite:acrp-feasibility-2024,feasibility-2024}} A 2024 task force of sites, sponsors and CROs asked sites to use tools and data to make enrollment projections as accurate as possible.{{cite:feasibility-2024}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Triage the day it arrives",
              text: "Check the synopsis against your PI's interests, competing studies and coordinator capacity. A fast no protects the relationship better than a late, weak yes.",
            },
            {
              title: "Count from the criteria",
              text: "Start from the [inclusion and exclusion criteria](/glossary/inclusion-and-exclusion-criteria), not the diagnosis code. Report the count after each group of criteria.",
            },
            {
              title: "Check a sample of charts",
              text: "Have a coordinator review a sample from the bottom of the funnel, using a format like the [chart review checklist](/templates/coordinator-chart-review-checklist), and record how many hold up. That ratio makes the estimate credible.",
            },
            {
              title: "Commit below the pool",
              text: "Apply your own historical screen failure and consent rates to the eligible count. Commit to that result, not to the sponsor's per-site target.",
            },
            {
              title: "Name the people",
              text: "List the PI, sub-investigator and coordinator who will run the study, with their current study loads.",
            },
            {
              title: "Hold a turnaround target",
              text: "Pick a response time your team can always meet, such as two business days, and track it. Keep a standing site profile for questions that never change.",
            },
          ],
        },
        {
          type: "p",
          text: "A criteria-based count is slow by hand because exclusions sit in notes, labs and medication histories. Bond Health's [Identify](/identify) stage reads structured and unstructured records against a study's criteria and shows the chart evidence behind each decision, so a coordinator can check a sample and send a count with its method attached.{{cite:bond-site}} The [feasibility questionnaire template](/templates/feasibility-questionnaire) lists the questions sponsors ask most, and the glossary defines [site feasibility](/glossary/site-feasibility).",
        },
      ],
    },
    {
      id: "startup-speed",
      heading: "How fast does a site need to start up?",
      blocks: [
        {
          type: "p",
          text: "In WCG's 2025 survey of 611 sites, budgets and contracts were the most-cited cause of start-up delays, named among their top three by 73% of respondents. Among independent sites and physician practices, 54% said they can start a study in under 60 days, against 9% of academic medical centers, community hospitals, health systems and site networks.{{cite:wcg-2025}}",
        },
        {
          type: "table",
          caption: "Site start-up benchmarks from one published analysis",
          columns: ["Step", "Median", "Fastest quartile"],
          rows: [
            ["Regulatory documents received to submitted", "7 days", "4 days{{cite:crio-startup-2026}}"],
            ["Budget received to budget returned", "9 days", "5 days{{cite:crio-startup-2026}}"],
            ["Site activation to first patient screened", "20 days", "8 days{{cite:crio-startup-2026}}"],
          ],
          note: "CRIO analysis for the Site Accreditation and Standards Institute (SASI), published July 2026. Fastest quartile is the quickest 25% of sites. Sample size and period were not published.",
        },
        {
          type: "p",
          text: "Process changes are associated with faster start-up. In the NIH-funded Trial Innovation Network, investigator-initiated trials that combined a standardized start-up workflow, a dedicated site navigator and electronic tracking activated sites in a median of 133 days from IRB packet arrival, against 277 days for trials without the standardized workflow.{{cite:jcts-2025-startup}} The glossary covers [study start-up](/glossary/study-startup) and [site activation](/glossary/site-activation).",
        },
        {
          type: "checklist",
          items: [
            "A budget template and fee schedule approved in advance.",
            "Contract language your institution has already accepted with that sponsor or CRO.",
            "A regulatory packet ready to send: CVs, licenses, GCP training, lab certifications.",
            "One named start-up owner who tracks each study's days by step.",
            "Coordinator time reserved for the first patients before activation.",
          ],
        },
      ],
    },
    {
      id: "relationships-networks-technology",
      heading: "How do relationships, networks and technology affect selection?",
      blocks: [
        { type: "h3", text: "Sponsor and CRO relationships" },
        {
          type: "p",
          text: "Many feasibility requests start with a person: the CRA who monitored your last study, or the CRO feasibility lead who read your last response. Keep those contacts current. After each study closes, ask what would put you on the next list. After each rejection, ask why.",
        },
        { type: "h3", text: "Site networks" },
        {
          type: "p",
          text: "More trials are running through networks. Tufts CSDD reported in its March/April 2026 Impact Report that a growing proportion of clinical trials are conducted at academic medical center and network-affiliated sites.{{cite:tufts-impact-2026}} Investors are buying into site networks. The Private Equity Stakeholder Project, an advocacy group, tracked 42 private equity deals in pharmaceutical services in 2025, including clinical trial sites.{{cite:pesp-2025}}",
        },
        {
          type: "p",
          text: "Joining one, by membership or sale, can bring an independent site sponsor relationships, central contracting and shared regulatory staff. The trade is fees or equity, and less control over which studies you take. If you stay independent, match networks on what sponsors see most: fast start-up and a clean performance record.",
        },
        { type: "h3", text: "Technology signals" },
        {
          type: "p",
          text: "Sponsors also weigh a site's systems. WCG, citing a 2024 survey by the site software vendor Florence Healthcare, reported that 43% of sponsors view a site's adoption of the sponsor's own software as a key selection criterion, while 42% of sites want sponsors to accept the site's own technology.{{cite:wcg-2024}} The same survey found that 72% of sites had adopted feasibility software.{{cite:florence-2024}}",
        },
        {
          type: "p",
          text: "List your CTMS, eSource, [eISF](/glossary/eregulatory-eisf) and EHR screening tools in your site profile, and say you will use the sponsor's systems where required.",
        },
      ],
    },
    {
      id: "market-and-measure",
      heading: "How should a site market itself and measure the results?",
      blocks: [
        {
          type: "p",
          text: "Marketing to sponsors is mostly making your evidence easy to find. Update a site profile and a performance summary every quarter and attach both to every feasibility response.",
        },
        {
          type: "ul",
          items: [
            "**Site profile:** therapeutic areas, investigators and their experience, staff, equipment, languages spoken and systems.",
            "**Performance summary:** enrollment against commitment, start-up days by step, screen failure rate and deviations.",
            "**Visibility:** ACRP chapter meetings, SCRS events, sponsor site portals and CRO preferred-site programs.",
          ],
        },
        {
          type: "table",
          caption: "Metrics that show whether the levers are working",
          columns: ["Metric", "How to calculate it", "Why it matters"],
          rows: [
            ["Response time", "Days from request to complete response", "The lever you control most directly"],
            ["Selection rate", "Studies selected divided by feasibility responses sent", "The clearest sign the other levers are working"],
            ["Activation rate", "Studies activated divided by studies selected", "Shows whether selections turn into open studies"],
            ["Start-up days", "Median days from selection notice to activation, by step", "Shows where the time goes"],
            ["Enrollment vs commitment", "Randomized patients divided by committed patients, per study", "Your evidence of recruitment potential under ICH E6(R3) 2.2.1. See [enrollment rate](/glossary/enrollment-rate)."],
            ["Repeat sponsors", "Share of new studies from sponsors or CROs you have worked with before", "Shows whether relationships are holding"],
          ],
        },
      ],
    },
    {
      id: "this-week",
      heading: "What should I do this week?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Pull enrollment against commitment for every study your site closed in the past three years.",
            "Time your last few feasibility responses from request to submission.",
            "Rebuild one open feasibility answer as a criteria-based funnel with a reviewed chart sample.",
            "Find the start-up step that took longest on your last study and write down why.",
            "Confirm each PI's active study load and clinic days, and name a sub-investigator for each.",
            "Draft or update your site profile using the [feasibility questionnaire template](/templates/feasibility-questionnaire).",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol you are evaluating and see how Identify screens records against its criteria and shows the evidence behind each match.",
          secondaryLabel: "Bond for research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "How quickly should a site answer a feasibility questionnaire?",
      a: "Sponsors set their own deadlines, so set an internal target and measure it. Questionnaires can run 10 to 40 pages, which is why a standing site profile with reusable answers saves time.{{cite:acrp-feasibility-2024}}",
    },
    {
      q: "Can a new site win studies without a track record?",
      a: "It can, but it needs stronger evidence on the study at hand: a criteria-based patient count, a reviewed chart sample and named staff. ICH E6(R3) lets an investigator show recruitment potential from current data as well as past data.{{cite:ich-e6r3}}",
    },
    {
      q: "What start-up time do sponsors expect?",
      a: "It varies by sponsor and study. As reference points, 54% of independent sites and physician practices in WCG's 2025 survey said they can start a study in under 60 days, and CRIO's 2026 benchmark puts the median from activation to first patient screened at 20 days.{{cite:wcg-2025,crio-startup-2026}}",
    },
    {
      q: "Does Bond help a site win studies?",
      a: "Bond helps with the evidence. [Identify](/identify) screens records against a study's criteria and shows the chart evidence behind each match, which supports a criteria-based patient count. Full EHR integration typically takes 48 hours, depending on the EHR and IT review; see [implementation](/implementation).{{cite:bond-site}} Selection is still the sponsor's decision.",
    },
  ],
  sources: [
    {
      id: "tufts-2013-recruitment",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013. Analysis of more than 150 studies and nearly 16,000 sites; global, pre-2013 data. Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\"",
    },
    {
      id: "phesi-labiotech-2023",
      title: "Almost 20% of cancer trials have recruited only one patient",
      publisher: "Labiotech (reporting Phesi analysis)",
      url: "https://www.labiotech.eu/trends-news/cancer-trials-recruitment/",
      year: "2023",
      note: "Article dated February 2, 2023. 173 cancer trials, 11,826 investigator sites, 57 countries; oncology only. Quote: \"a small proportion (16%) of better performing trial sites contribute almost half of patients\" and \"2,298 (19%) enrolled just one patient\"",
    },
    {
      id: "ctv-tufts-2024",
      title: "Tufts CSDD: New Insights on The Clinical Trial Industry",
      publisher: "Clinical Trial Vanguard (conference coverage of Ken Getz, Tufts CSDD)",
      url: "https://www.clinicaltrialvanguard.com/conference-coverage/tufts-csdd-new-insights-on-the-clinical-trial-industry/",
      year: "2024",
      note: "Article dated March 19, 2024; secondary report of a Tufts CSDD presentation by Ken Getz. Quote: \"particularly in North America, where rates have plummeted to 62%\" and \"What this suggests is that 40% of sites in North America that we actually will look to engage will not activate.\" Also: \"Some of those sites may never get through the contracting and budgeting process. They may never get approval from the IRB and a percentage of those will have difficulty actually enrolling a single patient as well\"",
    },
    {
      id: "wcg-2024",
      title: "2024 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/2024/10/WCG_2024_Clinical_Research_Site_Challenges_Report.pdf",
      year: "2024",
      note: "Survey of 852 sites, April to June 2024. The 43% and 42% figures are WCG citing Florence Healthcare's 2024 State of Tech-Enabled Clinical Trials survey. Quote: \"42% of sites stress the need for sponsor acceptance of their technology in study participation. However, 43% of sponsors view their software's adoption as a key selection criterion\"",
    },
    {
      id: "wcg-2025",
      title: "2025 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/sites/2/2025/10/WCG-Site-Challenges-Report-2025.pdf",
      year: "2025",
      note: "Survey of 611 sites, July to September 2025; the delay question asked sites to select their top three contributors. Quote: \"budgets and contracts emerged as the leading factors contributing to delays in study start-up timelines, impacting 73% of respondents\" and \"independent sites and physician practices tend to have faster start-up timelines, with 54% reporting that they can initiate studies in under 60 days. In contrast, academic medical centers, community hospitals, health systems, and site networks typically face longer timelines, with only 9% saying their study start-up timelines take less than 60 days\" and \"nearly half (45%) of sites reported that these challenges are restricting their capacity to agree to participate in new studies\"",
    },
    {
      id: "ecfr-312-53",
      title: "21 CFR 312.53: Selecting investigators and monitors",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.53",
      year: "2026",
      note: "Checked September 2026. Quote: \"A sponsor shall select only investigators qualified by training and experience as appropriate experts to investigate the drug.\" Paragraph (c)(1): \"A signed investigator statement (Form FDA-1572) containing:\" and (c)(1)(vi)(c): \"Will personally conduct or supervise the described investigation(s)\"",
    },
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice, final version",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Adopted on 06 January 2025. Quote (2.2.1): \"The investigator should be able to demonstrate (e.g., based on retrospective or currently available data) a potential for recruiting the proposed number of eligible participants within the recruitment period as agreed with the sponsor.\" (2.2.2): \"The investigator should have sufficient time, an adequate number of available and qualified staff, and adequate facilities for the foreseen duration of the trial to conduct the trial properly and safely.\"",
    },
    {
      id: "fogel-2018",
      title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
      year: "2018",
      note: "Quote: \"Study centers with a track record of successful performance are historically more likely to meet enrollment targets\" and \"a site that has conducted between 6 and 10 clinical trials has a greater probability of meeting enrollment within the required time than does a site with a history of fewer trials.\"",
    },
    {
      id: "acrp-feasibility-2024",
      title: "Fixing Feasibility: Collaborative Approaches for Redefining and Improving Site Selection",
      publisher: "Association of Clinical Research Professionals (ACRP)",
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
      note: "Site Enablement League task force of sites, site networks, sponsors and CROs. Quote: \"sites are typically not compensated for feasibility assessment work\" and \"Sites should be as accurate as possible with enrollment projections, using tools and data to estimate participant populations.\"",
    },
    {
      id: "crio-startup-2026",
      title: "What It Takes to Start a Study: Site Start-up Benchmarks",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/what-it-takes-to-start-a-study-site-start-up-benchmarks/",
      year: "2026",
      note: "Blog dated July 30, 2026. Analysis CRIO performed for the Site Accreditation and Standards Institute (SASI); sample size not stated. Quartile 3 is the fastest quarter. Quote: \"Days from budget received to budget returned | Study | 23 | 9 | 5\" and \"Days from site activation to first patient visit screened | Study | 34 | 20 | 8\" and \"Days from reg docs received to reg docs submitted | Study | 15 | 7 | 4\"",
    },
    {
      id: "jcts-2025-startup",
      title: "Accelerating start-up cycles in investigator-initiated multicenter clinical trials",
      publisher: "Journal of Clinical and Translational Science",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12695510/",
      year: "2025",
      note: "NIH/NCATS Trial Innovation Network investigator-initiated trials, not industry trials. The three elements are a lean standardized workflow, a dedicated site navigator and an electronic tracking system; time runs from protocol and IRB packet arrival at the site to site activation. Quote: \"Trials using all three elements (n = 6) had 160 total site activations in a median of 133 days.\" and \"Four trials without the standardized workflow element had 96 total site activations in a median of 277 days.\"",
    },
    {
      id: "tufts-impact-2026",
      title: "Impact Reports, Vol. 28 No. 2 (March/April 2026)",
      publisher: "Tufts Center for the Study of Drug Development",
      url: "https://csdd.tufts.edu/publications/impact-reports",
      year: "2026",
      note: "Subscriber report; only the headline is public. Quote: \"A growing proportion of clinical trials are conducted in AMC- and network-affiliated sites\"",
    },
    {
      id: "pesp-2025",
      title: "Private Equity Healthcare Deals: 2025 in Review",
      publisher: "Private Equity Stakeholder Project",
      url: "https://pestakeholder.org/reports/pe-healthcare-deals-2025-in-review/",
      year: "2026",
      note: "Published February 2026 by an advocacy organization. Quote: \"PESP tracked 42 deals involving pharmaceutical services companies. These included contract research organizations, including clinical trial sites and recruitment companies.\" and \"Analysts have noted that clinical trial sites are now among the most sought-after segments of the pharmaceutical services industry.\"",
    },
    {
      id: "florence-2024",
      title: "2024 State of Tech-Enabled Clinical Trials: Insights, Trends, and Predictions",
      publisher: "Florence Healthcare",
      url: "https://florencehc.com/blog-post/2024-state-of-tech-enabled-clinical-trials-insights-trends-and-predictions/",
      year: "2024",
      note: "Vendor survey of 221 respondents across sites, sponsors and CROs. Quote: \"72% of sites adopted feasibility software, indicative of a need for efficient patient recruitment.\" and \"From 41% in 2020 to an impressive 64% in 2024, research sites are increasingly using Electronic Investigator Site Files (eISF).\"",
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
    { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites", description: "The sponsor's scorecard, and how to present EHR-derived patient counts." },
    { label: "Feasibility questionnaire template", href: "/templates/feasibility-questionnaire", description: "The questions sponsors ask, ready to fill in as a standing site profile." },
    { label: "Bond for research sites", href: "/for/research-sites", description: "How sites use Bond for screening, outreach and consent support." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Screening against study criteria, with the chart evidence behind each match." },
    { label: "Study start-up", href: "/glossary/study-startup", description: "The steps between site selection and activation, defined." },
  ],
};

export default page;
