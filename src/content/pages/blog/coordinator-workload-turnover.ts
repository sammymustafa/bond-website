import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/coordinator-workload-turnover",
  category: "blog",
  title: "Coordinator turnover: what surveys show and what it costs",
  description:
    "SCRS sites reported 35-61% turnover of patient-facing staff. What losing a coordinator costs a site, and how to measure workload per protocol.",
  keywords: [
    "clinical research coordinator turnover",
    "CRC workload",
    "clinical research site staffing",
    "OPAL protocol complexity score",
    "cost of coordinator turnover",
  ],
  eyebrow: "Blog",
  h1: "Coordinator workload and turnover: what the surveys show and what it costs sites",
  intro:
    "Coordinator turnover is a budget problem, not only an HR one. In SCRS's 2022 site survey, patient-facing staff turnover ran at 35% to 61%, about double a typical year, and SCRS puts the cost of replacing one person at roughly six months' pay, with 6 to 12 months for a study to get back on track.{{cite:scrs-workforce}} The part a site controls is workload per coordinator, and that can be measured protocol by protocol.",
  summary: "Turnover figures from SCRS, Duke, ACRP and WCG, what a departure costs, and a way to score coordinator workload.",
  lastUpdated: "2027-01-20",
  blog: { date: "2027-01-20", author: "Rishabh Goel", readingMinutes: 6 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Bond for research sites", secondaryHref: "/for/research-sites" },
  sections: [
    {
      id: "how-high-is-turnover",
      heading: "How high is clinical research coordinator turnover?",
      blocks: [
        {
          type: "p",
          text: "It depends on who is counting. SCRS's 2022 Site Landscape Survey of member sites found sites averaging double their usual turnover of patient-facing staff: 35% to 61%, against 10% to 37% in a typical year. The white paper does not say how many sites answered.{{cite:scrs-workforce}}",
        },
        {
          type: "p",
          text: "Duke University, which tracks every clinical research professional it employs, saw lower but steady numbers. Across 2,169 staff over seven years, all-cause turnover rose from 16.1% in fiscal 2018 to 19.4% in fiscal 2023, then fell to 16.9% in fiscal 2024. Of all departures, 78.5% came within the first five years of employment.{{cite:duke-turnover-2025}}",
        },
        {
          type: "table",
          caption: "Four recent measures of research staffing",
          columns: ["Source", "Who answered", "Finding"],
          rows: [
            ["SCRS 2022 Site Landscape Survey", "Member sites worldwide; sample size not stated", "Patient-facing staff turnover of 35% to 61%, up from 10% to 37% in a typical year{{cite:scrs-workforce}}"],
            ["Duke University HR data", "2,169 research professionals, fiscal 2018 to 2024", "All-cause turnover between 16.1% and 19.4% a year; 16.9% in fiscal 2024{{cite:duke-turnover-2025}}"],
            ["ACRP workforce survey", "More than 735 professionals, December 2024 to February 2025", "52% say hiring and retaining staff is worse than 5 to 10 years ago{{cite:acrp-workforce-2025}}"],
            ["WCG 2025 Site Challenges Survey", "611 sites, July to September 2025", "30% name site staffing a top-three challenge; 45% saw no change in staffing levels over the year{{cite:wcg-2025}}"],
          ],
        },
        {
          type: "p",
          text: "These numbers are not directly comparable. One is a self-reported range, one is a single employer's records and two are perception surveys. Together they say turnover is high enough that a site should plan for it in every study budget and timeline.",
        },
      ],
    },
    {
      id: "why-coordinators-leave",
      heading: "Why do coordinators leave?",
      blocks: [
        {
          type: "p",
          text: "Mostly for better offers. In the SCRS survey, 85% of staff who left research sites went to sponsors and CROs, which can offer sign-on bonuses, higher pay and flexible work. SCRS also lists patient recruitment difficulties that lead to burnout among the causes.{{cite:scrs-workforce}}",
        },
        {
          type: "p",
          text: "Pay is not the only lever. In a Vanderbilt survey of 85 current and former coordinators from more than 30 academic medical centers, the top retention factor was a close, respectful working relationship with the principal investigator, followed by salary. Compensation and a clear career path predicted who stayed.{{cite:vumc-crc-retention}} After Duke introduced competency-based research jobs with career ladders, turnover in those roles fell from 23% to 16%.{{cite:duke-competency-2020}}",
        },
      ],
    },
    {
      id: "workload-growth",
      heading: "How much more work does each protocol bring?",
      blocks: [
        {
          type: "p",
          text: "More every year. Tufts CSDD and 15 TransCelerate member companies analyzed 105 protocols and found an average of 5.9 million data points per phase III protocol, up 11% a year since 2020. As much as 30% of participant and site burden came from procedures that were non-core or performed more often than the endpoints required.{{cite:tufts-data-2025}}",
        },
        {
          type: "p",
          text: "Amendments add rework on top. In a 2022 Tufts study of 950 protocols, 76% had at least one amendment, against 57% in 2015, the mean rose to 3.3 amendments per protocol, and sites ran on different protocol versions for 215 days on average.{{cite:tufts-amendments-2024}} For a coordinator, an amendment can mean retraining, new source documents and revised pre-screening logic.",
        },
        {
          type: "p",
          text: "Recruitment is a large share of the load. At Virginia Commonwealth University's Massey Cancer Center, staff spent 3.4 to 8.8 hours to find, screen and enroll each patient, and screened between 3 and 13 patients for each enrollment, depending on study type. The authors note that most sponsors do not reimburse this screening work.{{cite:penberthy-2012}}",
        },
      ],
    },
    {
      id: "cost-of-a-departure",
      heading: "What does losing a coordinator cost a site?",
      blocks: [
        {
          type: "p",
          text: "SCRS estimates the cost of recruiting and training a new patient-facing staff member at about six months' pay, and says it can take 6 to 12 months for a study to get back on track after a coordinator leaves. Sites increasingly backfill with people who have no research experience, which lengthens onboarding and raises oversight costs.{{cite:scrs-workforce}}",
        },
        {
          type: "p",
          text: "The salary cost is the visible part. The bigger cost can be the enrollment a study loses while the seat is empty or the new hire is learning. Four lines give a working estimate:",
        },
        {
          type: "ol",
          items: [
            "**Replacement cost** = annual salary and benefits x 0.5, using the SCRS six-months'-pay estimate.{{cite:scrs-workforce}}",
            "**Lost randomizations** = (normal randomizations per month minus randomizations per month during the gap) x months until back on track. SCRS's range is 6 to 12 months.{{cite:scrs-workforce}}",
            "**Lost revenue** = lost randomizations x the net per-patient payment in your budgets, plus any unpaid screening work on studies that miss their targets.",
            "**Total** = replacement cost + lost revenue. Compare it with the cost of a retention raise or of moving work off that coordinator's desk.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Worked example with hypothetical inputs",
          text: "Salary and benefits of $80,000 give a replacement cost of $40,000. If the coordinator's studies drop from 2 randomizations a month to 1 for 9 months, that is 9 lost randomizations; at a net $3,000 each, $27,000. Total: about $67,000 for one departure. Swap in your own salary, enrollment and budget figures.{{cite:scrs-workforce}}",
        },
      ],
    },
    {
      id: "measure-workload",
      heading: "How can a site measure coordinator workload per protocol?",
      blocks: [
        {
          type: "p",
          text: "Count weighted cases, not studies. The Ontario Protocol Assessment Level (OPAL), built by Ontario cancer centers, scores each protocol on a scale from level 1 (non-treatment trials) to level 8 (complex phase I treatment trials), with optional half-point additions up to 10. In a 3-month pilot at 17 cancer centers, most sites scored the same 27 protocols within 1.5 points of each other.{{cite:opal-2011}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Score each new protocol",
              text: "Have several people score it independently at feasibility and agree on one number. The Ontario site in the paper used three research staff and three investigators.{{cite:opal-2011}}",
            },
            {
              title: "Multiply by active patients",
              text: "Case workload = active patients x OPAL score, with patients in follow-up counted at half. Add the protocol score once for the coordinator who manages the study.{{cite:opal-2011}}",
            },
            {
              title: "Total it per coordinator",
              text: "In the paper's example, a protocol scoring 5 with four active patients totals 25: 20 for the patients and 5 for the protocol.{{cite:opal-2011}}",
            },
            {
              title: "Set your own ceiling",
              text: "OPAL does not publish a universal cap. Compare totals across your team, note where overtime, errors or slow enrollment start to appear, and treat that level as the limit before accepting another study.",
            },
            {
              title: "Re-score after amendments",
              text: "An amendment that adds visits or procedures should raise the score. Tufts found sites run on mixed protocol versions for 215 days on average.{{cite:tufts-amendments-2024}}",
            },
          ],
        },
      ],
    },
    {
      id: "which-tasks-first",
      heading: "Which coordinator tasks should come off the desk first?",
      blocks: [
        {
          type: "p",
          text: "Start with work that is high-volume and unpaid: chart review for pre-screening, first calls to leads, follow-ups and scheduling. That work grows with the number of candidates, not the number of patients enrolled, which is how one enrollment can take up to 8.8 staff hours.{{cite:penberthy-2012}}",
        },
        {
          type: "ul",
          items: [
            "**Put it in the budget.** SCRS calls for renegotiating budgets to sustain recruitment, retention and quality work. List pre-screening and outreach as line items rather than absorbing them.{{cite:scrs-workforce}}",
            "**Standardize the manual baseline.** A [coordinator chart review checklist](/templates/coordinator-chart-review-checklist) lets a new hire pre-screen the same way a veteran does.",
            "**Automate the repetitive steps.** Bond's [Identify](/identify) stage screens EHR records against the protocol and shows the evidence for each criterion, and its [Engage](/engage) agents contact every new ad lead immediately, keep following up and book pre-screened patients into the site's calendar. Bond cites 50%+ less chart review, a figure to confirm on your own study.{{cite:bond-site}}",
            "**Protect the PI relationship.** It was the top retention factor in the Vanderbilt survey, and it costs investigator time rather than budget.{{cite:vumc-crc-retention}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one active protocol and your coordinator hours for it. We will show which steps Bond would take off the desk.",
          secondaryLabel: "Bond for research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is a normal turnover rate for clinical research coordinators?",
      a: "There is no single benchmark. SCRS member sites reported 10% to 37% in a typical year and 35% to 61% in 2022, while Duke's all-cause turnover across its research workforce was 16.9% in fiscal 2024.{{cite:scrs-workforce,duke-turnover-2025}}",
    },
    {
      q: "How many studies should one coordinator carry?",
      a: "It depends on the studies, which is why a simple count misleads. OPAL weights each protocol by complexity and by active patients, so a manager can compare workloads across staff and reassign studies before someone is overloaded.{{cite:opal-2011}}",
    },
    {
      q: "Does recruitment technology reduce coordinator turnover?",
      a: "We found no published study that links recruitment software to lower turnover. SCRS does list recruitment difficulties among the causes of burnout and turnover, so taking repetitive recruitment work off coordinators is a reasonable thing to test and measure.{{cite:scrs-workforce}}",
    },
  ],
  sources: [
    {
      id: "scrs-workforce",
      title: "Workforce Challenges at Clinical Research Sites (2022 Site Landscape Survey white paper)",
      publisher: "Society for Clinical Research Sites (SCRS)",
      url: "https://myscrs.org/wp-content/uploads/2024/07/SCRS-2023-whitepaper_v5.pdf",
      year: "2023",
      note: "Read October 2026. Sample size not stated. Quote: \"Sites are averaging double the usual turnover rate of patient-facing staff from a range of 10%–37% in a typical year to current rates of 35%–61%.\" Quote: \"85% of staff departing clinical research sites went to sponsor and CRO organizations.\" Quote: \"the cost of recruiting and training a new patient-facing staff member is approximately six months’ pay.\" Quote: \"it can take 6-12 months for sites to get back on track with a study when a coordinator leaves.\" Listed cause: \"Patient recruitment difficulties resulting in burnout and turnover\". Recommendation: \"there should be an investment in renegotiation of existing budgets to sustain prior efforts of recruitment, retention, and quality\"",
    },
    {
      id: "duke-turnover-2025",
      title: "Trends in turnover and turbulence at a large academic medical center before and during COVID-19: analyzing structured clinical research professional roles",
      publisher: "Journal of Clinical and Translational Science (Stroo M et al., Duke University)",
      url: "https://www.cambridge.org/core/journals/journal-of-clinical-and-translational-science/article/trends-in-turnover-and-turbulence-at-a-large-academic-medical-center-before-and-during-covid19-analyzing-structured-clinical-research-professional-roles/4FCD004C1E699BA332939609FD5A1BA4",
      year: "2025",
      note: "Read October 2026. Quote: \"Data from a total of 2,169 unique Duke CRP employees were captured over the past 7 years.\" Quote: \"All turnover, encompassing both voluntary and involuntary departures, had been on a slight upward trajectory, starting at 16.1% in FY 2018 and reaching 19.4% in FY 2023, but dropped back to 16.9% in FY 2024.\" Quote: \"In summary, 78.5% of all terminations and 78.9% of voluntary terminations occur within the first 5 years of employment.\"",
    },
    {
      id: "duke-competency-2020",
      title: "Impact of implementing a competency-based job framework for clinical research professionals on employee turnover",
      publisher: "Journal of Clinical and Translational Science (Stroo M et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7681128/",
      year: "2020",
      note: "Read October 2026. Single academic medical center (Duke). Quote: \"Employee turnover within the clinical research professional jobs has decreased from 23% to 16%\". The abstract calls this a 45% reduction and the discussion a 30% reduction, so the page gives only the two rates.",
    },
    {
      id: "acrp-workforce-2025",
      title: "ACRP Publishes Results from First-Ever National Workforce Survey",
      publisher: "Association of Clinical Research Professionals (ACRP)",
      url: "https://acrpnet.org/2025/09/24/acrp-publishes-results-from-first-ever-national-workforce-survey",
      year: "2025",
      note: "Read October 2026. Self-selected respondents. Quote: \"More than 735 respondents identified successes, setbacks, predictions, and areas for “bending the curve.” The survey was conducted from December 2024 to February 2025\". Quote: \"52% say that hiring and retaining clinical research staff are worse today than five to 10 years ago.\"",
    },
    {
      id: "wcg-2025",
      title: "2025 Clinical Research Site Challenges Report",
      publisher: "WCG",
      url: "https://www.wcgclinical.com/wp-content/uploads/sites/2/2025/10/WCG-Site-Challenges-Report-2025.pdf",
      year: "2025",
      note: "Vendor survey; WCG sells site services. Read October 2026. Quote: \"Between July and September 2025, 611 clinical research sites participated in a global WCG survey\". Quote: \"30% of sites identifying site staffing as one of their top concerns\". Quote: \"Overall, 45% of sites reported no change in their site staffing levels over the last year\".",
    },
    {
      id: "vumc-crc-retention",
      title: "Survey identifies factors in reducing clinical research coordinator turnover",
      publisher: "VUMC News (Vanderbilt University Medical Center), reporting Buchanan and Claassen in Mayo Clinic Proceedings: Innovations, Quality & Outcomes",
      url: "https://news.vumc.org/2021/03/08/survey-identifies-factors-in-reducing-clinical-research-coordinator-turnover/",
      year: "2021",
      note: "Read October 2026. Quote: \"Salary followed as the next factor for retention among 85 former or current CRCs who responded to a REDCap survey sent to 113 people from more than 30 academic medical centers across the U.S.\" Quote: \"compensation and a clear trajectory for career growth were significant predictors of retention among coordinators.\"",
    },
    {
      id: "tufts-data-2025",
      title: "Insights Informing Strategies for Optimizing the Collection of Clinical Trial Data",
      publisher: "Therapeutic Innovation & Regulatory Science (Getz K et al., Tufts CSDD), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/41462003/",
      year: "2025",
      note: "Abstract read October 2026. Quote: \"In all, 105 multi-therapeutic protocols with a primary completion date after 2018 were analyzed.\" Quote: \"5.9 million datapoints now collected on average per phase III protocol, up 11% annually since 2020.\" Quote: \"As much as 30% of participant and site burden is associated with non-core procedures or are non-essential procedures supporting core, standard/required endpoints.\"",
    },
    {
      id: "tufts-amendments-2024",
      title: "New Benchmarks on Protocol Amendment Practices, Trends and their Impact on Clinical Trial Performance",
      publisher: "Therapeutic Innovation & Regulatory Science (Getz K et al., Tufts CSDD), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/38438658/",
      year: "2024",
      note: "Abstract read October 2026. Quote: \"Sixteen pharmaceutical companies and contract research organizations provided data on 950 protocols and 2188 amendments.\" Quote: \"the prevalence of protocols with at least one amendment in phases I-IV has increased substantially (from 57 to 76%) and the mean number of amendments per protocol has increased 60% to 3.3, up from 2.1.\" Quote: \"the mean duration during which investigative sites operate with different versions of the clinical trial protocol spans 215 days.\"",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice (Penberthy LT et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Virginia Commonwealth University Massey Cancer Center, 18 months. Read October 2026. Quote: \"The average time spent to find, screen, and enroll a patient varied from 3.4 to 8.8 hours\". Quote: \"The average number of patients screened per enrolled patient ranged from three for observational studies to 13 for phase I studies.\" Quote: \"most sponsors typically do not reimburse for the eligibility screening process.\"",
    },
    {
      id: "opal-2011",
      title: "Ontario Protocol Assessment Level: Clinical Trial Complexity Rating Tool for Workload Planning in Oncology Clinical Trials",
      publisher: "Journal of Oncology Practice (Smuck B et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3051866/",
      year: "2011",
      note: "Read October 2026. Quote: \"The pyramid rating scale is ranked from levels 1 through 8\". Quote: \"optional elements at 0.5 increments were developed that may be incorporated into any level to create a maximum score of 10\". Quote: \"OPAL was evaluated by 17 Ontario cancer centers to demonstrate its reliability and consistency during a 3-month pilot study.\" Quote: \"Twenty-seven protocols were reviewed by multiple sites, and the majority of the sites reported OPAL score differences between 0 and 1.5.\" Quote: \"For patients in follow-up, the case workload is divided in half\". Quote: \"if the coordinator has a trial protocol with an OPAL score of 5 and enrolls four patients, then the active case workload will be 20 for the subjects and 5 for the protocol, resulting in a total trial workload score of 25\". Quote: \"This committee is composed of three clinical trials research staff and three investigator physicians.\"",
    },
    { id: "bond-site", title: "Bond Health: platform overview, FAQ and pricing", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026" },
  ],
  related: [
    { label: "Bond for research sites", href: "/for/research-sites", description: "How Bond fits a site's recruitment workflow and staff." },
    { label: "Clinical research coordinator", href: "/glossary/clinical-research-coordinator", description: "What the role covers and where recruitment work sits in it." },
    { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist", description: "A template for standardizing manual pre-screening." },
    { label: "Bond vs manual chart review", href: "/compare/bond-vs-manual-chart-review", description: "Where coordinator hours go in manual screening and what software changes." },
  ],
};

export default page;
