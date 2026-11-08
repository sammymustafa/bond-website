import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/calculators/cost-per-randomized-patient",
  category: "calculator",
  title: "Cost per randomized patient calculator",
  description:
    "Calculate cost per randomized patient: ad spend, vendor fees, staff time and unreimbursed screening costs, divided by patients randomized. With published benchmarks.",
  keywords: [
    "cost per randomized patient calculator",
    "cost per randomized patient",
    "clinical trial recruitment cost per patient",
    "patient recruitment cost calculator",
    "cost per enrolled patient clinical trial",
  ],
  eyebrow: "Calculator",
  h1: "Cost per randomized patient calculator",
  intro:
    "Cost per randomized patient is everything a study or site spent on recruitment, including staff time, divided by the patients who were randomized in the same period. In one published trial, an online campaign that cost US$14,285 randomized 60 patients, or US$238 per randomized patient.{{cite:ccct-ak-2023}} Enter your own costs below.",
  summary: "Ad spend, vendor fees, staff time and unreimbursed screening costs, divided by patients randomized.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "calculate",
      heading: "How do you calculate cost per randomized patient?",
      blocks: [
        { type: "calculator", kind: "cost-per-randomized-patient" },
        {
          type: "callout",
          tone: "info",
          title: "The formula",
          text: "`cost per randomized patient = (ad spend + vendor fees + staff time + unreimbursed screening costs) ÷ patients randomized`",
        },
        {
          type: "p",
          text: "Use randomization as the denominator for a randomized trial, because it is the milestone that moves the enrollment target; leads, calls and screening visits all lose people along the way. For a single-arm study, use the equivalent milestone, such as first dose. The [cost per randomized patient guide](/blog/cost-per-randomized-patient) walks through a full funnel example.",
        },
      ],
    },
    {
      id: "what-to-include",
      heading: "What costs belong in the calculation?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Advertising and media:** Meta, Google, radio, print and mail, by channel, for the period.",
            "**Vendor and software fees:** recruitment vendors, call centers and platforms, booked to the same period as the patients they produced.",
            "**Staff time:** hours spent on chart review, calls, follow-ups, scheduling and screening visits, times a loaded hourly rate that includes benefits and overhead.",
            "**Unreimbursed screening costs:** visits and tests for patients who fail screening that the study budget does not cover. At one cancer center, eligibility screening cost $129.15 to $336.48 per enrolled patient, and most sponsors did not reimburse it.{{cite:penberthy-2012}}",
          ],
        },
        {
          type: "p",
          text: "Staff time is the cost most often left out. The SPIRIT trial at Johns Hopkins reported $1,426 in Facebook ad spend per enrolled participant, and its authors note that staff effort was not included.{{cite:juraschek-2018}} Leaving it out makes coordinator-heavy channels, such as cold calling a patient list, look free.",
        },
      ],
    },
    {
      id: "benchmarks",
      heading: "What does a randomized patient typically cost?",
      blocks: [
        {
          type: "p",
          text: "Published figures vary by more than an order of magnitude, and most count ad or outreach spend only. Compare channels within your own study before comparing with these.",
        },
        {
          type: "table",
          caption: "Published recruitment cost per participant",
          columns: ["Study and channel", "Cost per participant", "What it covers"],
          rows: [
            ["Actinic keratosis Phase I/IIa trial, online campaign, 2023", "$238 per randomized patient", "Campaign cost; several co-authors are from a digital recruitment company{{cite:ccct-ak-2023}}"],
            ["SPIRIT trial, Facebook ads, 2016", "$1,426 per enrollee", "Ad spend only; staff effort not included{{cite:juraschek-2018}}"],
            ["Fit & Quit trial, local postcards", "$1,920.40 per participant", "Direct advertising costs{{cite:perez-munoz-2022}}"],
            ["Fit & Quit trial, word of mouth", "$48.51 per participant", "Direct advertising costs{{cite:perez-munoz-2022}}"],
            ["Tufts CSDD, centralized outreach across 32 studies, 2026", "Median $143 (vaccines) to $11,392 (immunology) per patient", "Centralized outreach budgets; the abstract does not define \"patient\"{{cite:tufts-outreach-2026}}"],
          ],
        },
        {
          type: "p",
          text: "The Fit & Quit rows show why volume matters too: postcards and word of mouth produced about the same number of participants (24 and 23), at very different costs.{{cite:perez-munoz-2022}} Rank channels by cost per randomized patient, then check that the cheapest ones can supply enough patients to hit the target date.",
        },
      ],
    },
    {
      id: "lower",
      heading: "How can a site lower its cost per randomized patient?",
      blocks: [
        {
          type: "p",
          text: "Most of the cost sits between the lead and the randomization: leads never reached, patients who fail screening, and the staff hours spent on both. Three changes address each part.",
        },
        {
          type: "ul",
          items: [
            "**Contact every lead immediately and keep following up.** Bond's voice and text agents contact every new ad lead immediately and keep following up with every lead who has not responded, then pre-screen patients and book them for screening visits.{{cite:bond-product}}",
            "**Check the chart before the screening visit.** Bond's [Identify](/identify) reads clinical notes, prescriptions and lab results against each criterion, so fewer screening visits end in a screen failure. See the [screen failure rate calculator](/calculators/screen-failure-rate).{{cite:bond-site}}",
            "**Price recruitment on results.** Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee, so part of the cost moves with enrollment. See [pricing](/pricing).{{cite:bond-product}}",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the formula for cost per randomized patient?",
      a: "Cost per randomized patient = (ad spend + vendor fees + staff time + unreimbursed screening costs) ÷ patients randomized, all for the same period. In one published campaign, US$14,285 in costs and 60 randomized patients gave US$238 per randomized patient.{{cite:ccct-ak-2023}}",
    },
    {
      q: "Why use cost per randomized patient instead of cost per lead?",
      a: "Because most leads never randomize. In the SPIRIT trial, Facebook ads cost $1.30 per click but $1,426 per enrolled participant.{{cite:juraschek-2018}}",
    },
    {
      q: "Should staff time be included?",
      a: "Yes. Screening effort alone cost $129.15 to $336.48 per enrolled patient at one cancer center, and most sponsors did not reimburse it.{{cite:penberthy-2012}} Without staff time, channels that rely on coordinator calls look cheaper than they are.",
    },
    {
      q: "How does Bond's pricing fit into the calculation?",
      a: "Enter Bond's fees under vendor fees. Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee; see [pricing](/pricing).{{cite:bond-product}}",
    },
  ],
  sources: [
    {
      id: "ccct-ak-2023",
      title: "Accelerating patient recruitment using social media: Early adopter experience from a good clinical practice-monitored randomized controlled phase I/IIa clinical trial on actinic keratosis",
      publisher: "Ortner VK, et al. Contemporary Clinical Trials Communications 2023;37:101245",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10792556/",
      year: "2023",
      note: "Single-center trial in Copenhagen; several co-authors are from a digital recruitment company. Quote: \"The RCT's enrollment target of 60 patients (68.8 ± 7.1 years, 43.3 % female) was reached in 53 days after screening 90 participants in-clinic, corresponding to a screen failure rate of 33.3 %. The total cost of this online recruitment campaign was 14,285 USD i.e. 238 USD per randomized patient.\"",
    },
    {
      id: "juraschek-2018",
      title: "Use of online recruitment strategies in a randomized trial of cancer survivors",
      publisher: "Clinical Trials (Juraschek SP et al., Johns Hopkins), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5891380/",
      year: "2018",
      note: "SPIRIT trial, Baltimore, June 2015 to December 2016. Table 2 totals: cost $5,704, cost per enrollee $1,426; Table 1 total cost per click $1.30. Limitation quote: \"comparing recruitment costs was not a pre-planned outcome of the trial\"; staff effort not included.",
    },
    {
      id: "perez-munoz-2022",
      title: "Recruitment strategies for a post cessation weight management trial: A comparison of strategy cost-effectiveness and sample diversity",
      publisher: "Contemporary Clinical Trials Communications (Pérez-Muñoz A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9661419/",
      year: "2022",
      note: "Fit & Quit trial, 305 randomized, November 2017 to February 2021; direct advertising costs only. Quote: \"local postcard advertisements were overall more expensive ($46,089.70; 19.3% of direct costs) than word-of-mouth ($1115.80; 0.5% of direct costs) and less cost-effective ($1920.40 vs $48.51 per participant, respectively), despite resulting in a nearly equal recruitment yield.\" Postcards n = 24, word-of-mouth n = 23.",
    },
    {
      id: "tufts-outreach-2026",
      title: "Measuring Centralized Patient Outreach Recruitment Strategies and their Costs in Clinical Trials",
      publisher: "Kim JY, Lamberti MJ, Do H (Tufts CSDD). Therapeutic Innovation & Regulatory Science 2026;60(5):1344-1351",
      url: "https://pubmed.ncbi.nlm.nih.gov/42360616/",
      year: "2026",
      note: "Epub June 26, 2026. Data from eight sponsor and CRO organizations covering 32 studies. Quote: \"The median centralized outreach recruitment cost-per-patient ranged from $143 in vaccine studies to $11,392 in immunology studies.\"",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials (Penberthy LT, Dahman BA, Petkov VI, DeShazo JP)",
      publisher: "Journal of Oncology Practice (ASCO), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "VCU Massey Cancer Center, 18 months. Quote: \"The cost of eligibility screening ranged by study phase from $129.15 to $336.48 per enrolled patient.\" Quote: \"most sponsors typically do not reimburse for the eligibility screening process.\"",
    },
  ],
  related: [
    { label: "How to calculate cost per randomized patient", href: "/blog/cost-per-randomized-patient", description: "A full funnel example, and why cost per lead misleads." },
    { label: "Screen failure rate calculator", href: "/calculators/screen-failure-rate", description: "Screen failures divided by patients screened." },
    { label: "Enrollment rate calculator", href: "/calculators/enrollment-rate", description: "Patients per site per month, and months to target." },
    { label: "Pricing", href: "/pricing", description: "A fee per screened patient plus a share of milestone payments from randomization on." },
    { label: "Recruitment software cost", href: "/guides/clinical-trial-recruitment-software-cost", description: "How vendors price, and what to budget." },
  ],
};

export default page;
