import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/enrollment-forecasting-feasibility",
  category: "blog",
  title: "How to forecast enrollment honestly at feasibility",
  description:
    "Enrollment forecasts run high. A funnel worksheet for feasibility, the published data on how far off sites are, and how to check a forecast against history.",
  keywords: [
    "enrollment forecasting clinical trial feasibility",
    "site enrollment projection",
    "feasibility enrollment estimate",
    "Lasagna's law",
    "recruitment rate per site per month",
  ],
  eyebrow: "Blog",
  h1: "How sites can forecast enrollment honestly at feasibility",
  intro:
    "An honest feasibility forecast starts from the patients a site can actually reach and screen, not the number in an EHR query. Overestimates are common: in Tufts CSDD data, 11% of sites in a typical trial enroll no one and 37% under-enroll,{{cite:tufts-2013}} and only 56% of UK publicly funded trials reached their recruitment target.{{cite:walters-2017}} Below is a funnel worksheet that builds the number up step by step and checks it against your own history.",
  summary: "Why enrollment forecasts run high, a funnel worksheet for feasibility, and how to give sponsors a range they can trust.",
  lastUpdated: "2026-12-30",
  blog: { date: "2026-12-30", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Feasibility questionnaire template", secondaryHref: "/templates/feasibility-questionnaire" },
  sections: [
    {
      id: "how-far-off",
      heading: "How far off are enrollment forecasts?",
      blocks: [
        {
          type: "p",
          text: "Far enough to plan for. Tufts CSDD's analysis of more than 150 studies and nearly 16,000 sites found that 11% of sites fail to enroll a single patient, 37% under-enroll, 39% meet their targets and 13% exceed them. Trials that met their enrollment goals typically took nearly twice as long as planned.{{cite:tufts-2013}}",
        },
        {
          type: "stats",
          items: [
            { value: "56%", label: "Of 151 UK publicly funded trials reached their recruitment target", cite: "walters-2017" },
            { value: "0.92", label: "Median participants recruited per centre per month in those trials", cite: "walters-2017" },
            { value: "81.5%", label: "Of 764 NCI-sponsored cancer trials missed projected accrual in the planned period", cite: "cheng-2011" },
          ],
        },
        {
          type: "p",
          text: "The pattern has a name. Lasagna's law, from 1979, holds that the patients available for a trial drop sharply once it starts; Alvan Feinstein later put the real number at about 1/10 to 1/3 of the original estimate.{{cite:bogin-2022}} A methods paper on accrual planning makes the same point more plainly: projected recruitment rates are often over-estimated, and the time needed is often under-estimated.{{cite:carter-2005}}",
        },
      ],
    },
    {
      id: "why-high",
      heading: "Why do site forecasts run high?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Diagnosis counts are not eligibility.** At Brigham and Women's Hospital, a rule-based EHR search flagged patients for heart failure therapy; of 5,460 checked by hand, 1,754 were truly eligible, an accuracy of 32.1%. Over 38% of the false positives involved symptoms or medication history, details the authors suggest clinical notes could supply.{{cite:subramaniam-2024}}",
            "**Not every eligible patient is reachable or interested,** and a forecast should say how many it assumes are.",
            "**Screening loses more.** At one cancer center, staff screened 3 to 13 patients for every enrollment, depending on study type.{{cite:penberthy-2012}}",
            "**The protocol is not final.** A task force of sites, sponsors and CROs found sites cannot project enrollment accurately without the full inclusion and exclusion criteria.{{cite:redefining-feasibility-2024}}",
            "**Competing studies and staff capacity** cap what the funnel can deliver in a month, however many candidates exist.",
          ],
        },
      ],
    },
    {
      id: "funnel-worksheet",
      heading: "How do you build a funnel forecast?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Start with patients seen",
              text: "Count patients with the condition seen at the site in the last 12 months. Patients not seen recently are hard to reach.",
            },
            {
              title: "Apply the criteria the record can check",
              text: "Age, diagnosis, key labs, medications and prior treatments. Then hand-check a random sample of 20 to 30 charts to estimate how many truly qualify; structured rules alone overcounted in the Brigham example.{{cite:subramaniam-2024}}",
            },
            {
              title: "Remove patients you cannot offer the study",
              text: "Those in competing studies, those under another investigator who will not refer, and those seen only once.",
            },
            {
              title: "Apply reach and interest rates from your history",
              text: "What share of patients you contacted for past studies answered and agreed to screen. If you have no data, say so and use a cautious assumption.",
            },
            {
              title: "Apply your screen-pass rate",
              text: "Use your own screening log for similar protocols, not the sponsor's estimate.",
            },
            {
              title: "Spread it over time",
              text: "Divide by enrollment months, start the first months at a partial rate, and cap each month at the screening visits your staff can run.",
            },
          ],
        },
        {
          type: "table",
          caption: "Worked example with hypothetical numbers",
          columns: ["Step", "Patients", "Rate applied"],
          rows: [
            ["Seen with the condition in 12 months", "1,200", "Starting count"],
            ["Pass record-checkable criteria", "240", "20%"],
            ["Truly eligible after chart sample", "120", "50% of flagged"],
            ["Not in competing studies", "100", "Remove 20"],
            ["Reached and agree to screen", "35", "35%"],
            ["Pass screening and randomize", "17", "50%"],
          ],
          note: "Illustrative only. Over 12 months that is about 1.4 randomizations a month, before ramp-up, which falls within the middle half of per-centre rates in UK publicly funded trials.{{cite:walters-2017}}",
        },
      ],
    },
    {
      id: "check-against-history",
      heading: "How do you check the forecast against reality?",
      blocks: [
        {
          type: "p",
          text: "Compare the monthly rate with your best and median past studies in the same area. If the forecast beats your best study, write down why. Recruitment rates differ widely between sites: across UK trials the middle half ranged from 0.43 to 2.79 participants per centre per month.{{cite:walters-2017}}",
        },
        {
          type: "p",
          text: "Then give a range, not a point. Anisimov and Fedorov's model treats each site's recruitment as a random process whose rate varies from site to site, which lets it predict remaining recruitment time with confidence intervals.{{cite:anisimov-2007}} Simulation that includes known sources of variation gives a more defensible accrual period than a single average.{{cite:carter-2005}} A site does not need the math to borrow the idea: report a low case from your slowest similar study, a base case from the worksheet, and a high case only if you can name what would produce it.",
        },
        {
          type: "p",
          text: "Software can replace the hand-checked sample with a full count. Bond's [Identify](/identify) stage reads clinical notes, prescriptions, labs and reports against each criterion, shows the evidence for every match and processes 10,000+ charts per hour, so the eligible count can come from the records rather than a small sample.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "what-to-tell-sponsor",
      heading: "What should a site tell the sponsor?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Counts with definitions:** what each number includes and which criteria were applied.",
            "**A low, base and high case,** with the assumption behind each rate.",
            "**Competing studies** at the site in the same population.",
            "**Time to first patient** as its own commitment. Trials that enrolled no one in the first 2 months were significantly less likely to reach accrual.{{cite:cheng-2011}}",
            "**A re-forecast date** 30 to 60 days after activation, using real funnel data.",
            "**What you need** to hit the base case, such as ad spend, staff time or a final protocol. CTTI recommends setting realistic enrollment expectations and mapping anticipated events early.{{cite:ctti-recruitment}}",
          ],
        },
        {
          type: "p",
          text: "Accuracy is part of a site's reputation. The feasibility task force asked sites to be as accurate as possible with enrollment projections, using tools and data to estimate participant populations.{{cite:redefining-feasibility-2024}} Our [feasibility questionnaire template](/templates/feasibility-questionnaire) has fields for each assumption.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol in feasibility. We will show how Bond screens your records against it and what the evidence behind each count looks like.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is Lasagna's law?",
      a: "Louis Lasagna's 1979 observation that the patients available for a trial drop sharply once it begins. Alvan Feinstein later estimated the patients actually available at about 1/10 to 1/3 of the original estimate.{{cite:bogin-2022}}",
    },
    {
      q: "What enrollment rate per site per month is typical?",
      a: "There is no universal figure. In 151 UK publicly funded trials the median was 0.92 participants per centre per month, with the middle half between 0.43 and 2.79.{{cite:walters-2017}} Industry trials and therapeutic areas differ, so your own history is the better guide.",
    },
    {
      q: "Is an EHR count a good feasibility number?",
      a: "Only as a starting point. Structured queries miss details in notes, and in one hospital's rule-based search only 32.1% of flagged patients were truly eligible on manual review.{{cite:subramaniam-2024}}",
    },
  ],
  sources: [
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013. Read October 2026. Quote: \"Tufts CSDD said its recent analysis, based on more than 150 clinical studies involving nearly 16,000 sites\". Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\" Quote: \"While nine out of 10 clinical trials worldwide meet their patient enrollment goals, reaching those targets typically means that drug developers need to nearly double their original timelines\".",
    },
    {
      id: "walters-2017",
      title: "Recruitment and retention of participants in randomised controlled trials: a review of trials funded and published by the United Kingdom Health Technology Assessment Programme",
      publisher: "BMJ Open (Walters SJ et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/28320800/",
      year: "2017",
      note: "Abstract read October 2026; trials published 2004 to April 2016. Quote: \"This review identified 151 individually RCTs from 787 NIHR HTA reports. The final recruitment target sample size was achieved in 56% (85/151) of the RCTs\". Quote: \"The median recruitment rate (participants per centre per month) was found to be 0.92 (IQR 0.43-2.79)\". Quote: \"Investigators should bear this in mind at the planning stage of their study and not be overly optimistic about their recruitment projections.\"",
    },
    {
      id: "cheng-2011",
      title: "Predicting accrual achievement: monitoring accrual milestones of NCI-CTEP-sponsored clinical trials",
      publisher: "Clinical Cancer Research (Cheng SK, Dietrich MS, Dilts DM), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/21447723/",
      year: "2011",
      note: "Abstract read October 2026; 764 trials, 2000 to 2007. Quote: \"A total of 81.5% (n = 623) of the trials did not achieve the projected accrual goals within the anticipated accruing period.\" Quote: \"Trials that accrue the first enrollment beyond 2 months (n = 379, 49.6%) are significantly less likely to achieve the accrual performance than those trials that enroll patients under 2 months\".",
    },
    {
      id: "bogin-2022",
      title: "Lasagna's law: A dish best served early",
      publisher: "Contemporary Clinical Trials Communications (Bogin V), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8847811/",
      year: "2022",
      note: "Commentary. Read October 2026. Quote: \"“the number of patients available to join a trial drop by 90% the day the trial begins. They re-appear as soon as the study is over”\". Quote: \"His observation in 1979 has since become known as “Lasagna's Law”. In 2001 Alvan R. Feinstein ... described it as follows: “the number of patients who are actually available for a trial is about 1/10 to 1/3 of what was originally estimated”\".",
    },
    {
      id: "carter-2005",
      title: "Practical considerations for estimating clinical trial accrual periods: application to a multi-center effectiveness study",
      publisher: "BMC Medical Research Methodology (Carter RE, Sonne SC, Brady KT), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/15796782/",
      year: "2005",
      note: "Abstract read October 2026. Quote: \"Projected recruitment rates are often over-estimated, and the time to recruit the target population (accrual period) is often under-estimated.\" Quote: \"Incorporating known sources of accrual variation can yield a more justified estimate of the accrual period.\"",
    },
    {
      id: "anisimov-2007",
      title: "Modelling, prediction and adaptive adjustment of recruitment in multicentre trials",
      publisher: "Statistics in Medicine (Anisimov VV, Fedorov VV), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/17639505/",
      year: "2007",
      note: "Abstract read October 2026. Quote: \"We consider a recruitment model, where patients arrive at different centres according to Poisson processes, with recruitment rates viewed as a sample from a gamma distribution.\" Quote: \"It allows the prediction of the remaining recruitment time together with confidence intervals using current enrolment information\".",
    },
    {
      id: "subramaniam-2024",
      title: "Identifying Patients with Heart Failure Eligible for Guideline-Directed Medical Therapy",
      publisher: "Population Health Management (Subramaniam S et al., Brigham and Women's Hospital), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/39630562/",
      year: "2024",
      note: "Therapy eligibility, not trial screening. Abstract read October 2026. Quote: \"A total 5460 patients were manually screened, of which 1754 were found to be truly eligible with an accuracy of 32.1%. An analysis of the false-positive cases showed that over 38% of the false positives were due to incorrect determination of symptomatic HF and medication history of the patients.\"",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice (Penberthy LT et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Read October 2026. Quote: \"The average number of patients screened per enrolled patient ranged from three for observational studies to 13 for phase I studies.\"",
    },
    {
      id: "redefining-feasibility-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications (Site Enablement League task force), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Read October 2026. Quote: \"Sites are unable to accurately project enrollment estimates without knowing all I/E criteria.\" Quote: \"Sites should be as accurate as possible with enrollment projections, using tools and data to estimate participant populations.\"",
    },
    {
      id: "ctti-recruitment",
      title: "CTTI Recommendations: Planning for Successful Trial Recruitment",
      publisher: "Clinical Trials Transformation Initiative (CTTI)",
      url: "https://ctti-clinicaltrials.org/wp-content/uploads/2021/06/CTTI_Recruitment_Recs.pdf",
      year: "2016",
      note: "Published May 2016, updated July 2018. Read October 2026. Quote: \"Set realistic expectations for completing trial enrollment by anticipating key factors that will influence site activation, screening, and enrollment trajectories. Map out anticipated events, even if estimations are rough, to identify potential pitfalls and bottlenecks.\"",
    },
    { id: "bond-site", title: "Bond Health: platform overview, FAQ and pricing", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026" },
  ],
  related: [
    { label: "Feasibility questionnaire template", href: "/templates/feasibility-questionnaire", description: "A template for answering sponsor feasibility questions with stated assumptions." },
    { label: "Site feasibility", href: "/glossary/site-feasibility", description: "What sponsors assess before selecting a site." },
    { label: "Enrollment rate", href: "/glossary/enrollment-rate", description: "How enrollment rate is defined and tracked." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond checks each criterion in the record and shows the evidence." },
  ],
};

export default page;
