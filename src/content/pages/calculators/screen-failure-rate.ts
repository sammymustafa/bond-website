import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/calculators/screen-failure-rate",
  category: "calculator",
  title: "Screen failure rate calculator and formula",
  description:
    "Calculate a clinical trial screen failure rate: screen failures divided by patients screened, times 100. With benchmarks and the screenings needed for a target.",
  keywords: [
    "how to calculate screen failure rate",
    "screen failure rate calculator",
    "screen failure rate formula",
    "clinical trial screen failure rate",
    "screening to randomization ratio",
  ],
  eyebrow: "Calculator",
  h1: "Screen failure rate calculator",
  intro:
    "To calculate a screen failure rate, divide the number of screen failures by the number of patients screened and multiply by 100. ICH and CDISC define a screen failure as a potential participant who does not meet the eligibility (inclusion or exclusion) criteria during the screening period.{{cite:ncit-screen-failure}} Enter your own numbers below to get the rate and the number of screenings you need to reach your target.",
  summary: "Screen failures divided by patients screened, with the screenings needed for your target and published benchmarks.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "How Identify works", secondaryHref: "/identify" },
  sections: [
    {
      id: "calculate",
      heading: "How do you calculate the screen failure rate?",
      blocks: [
        { type: "calculator", kind: "screen-failure-rate" },
        {
          type: "callout",
          tone: "info",
          title: "The formula",
          text: "`screen failure rate = screen failures ÷ patients screened × 100`",
        },
        {
          type: "p",
          text: "A worked example from a published trial: in SYMPLICITY HTN-3, 880 of 1,415 patients screened did not meet the criteria for randomization.{{cite:htn3}} 880 ÷ 1,415 × 100 = 62.2%, which the authors report as 62%.",
        },
        {
          type: "steps",
          items: [
            { title: "Pick a date range", text: "Use the same period for both numbers, such as one month or the study to date." },
            { title: "Count everyone screened", text: "Every patient who signed consent and started screening procedures in that period goes in the denominator." },
            { title: "Count the screen failures", text: "Patients from that group who did not meet an inclusion or exclusion criterion during screening go in the numerator." },
            { title: "Divide and multiply by 100", text: "The result is the screen failure rate as a percentage. Track it per study, per site and per referral source." },
          ],
        },
      ],
    },
    {
      id: "who-counts",
      heading: "Who counts as screened, and who counts as a screen failure?",
      blocks: [
        {
          type: "p",
          text: "Screening starts at consent. FDA expects informed consent before any procedure done solely to determine eligibility for research, including a medication wash-out done in preparation for the study.{{cite:fda-screening-tests}} A patient ruled out by chart review or a pre-screening call before consent is a pre-screen exclusion, not a screen failure, and belongs in neither number. See [pre-screening vs screening](/guides/pre-screening-vs-screening) for where that line falls.",
        },
        {
          type: "p",
          text: "Sponsors do not all count the same events. The Tufts CSDD benchmark measures the opposite side, a randomization rate of patients enrolled divided by patients screened.{{cite:tufts-2022}} An audit of 15 randomized oncology studies at one cancer center counted patients who declined treatment as screen failures (22.2% of failures), alongside those who did not meet inclusion criteria (54.9%).{{cite:tata-audit}} Before comparing your rate with a sponsor's report or a benchmark, check whether withdrawals of consent during screening are in the numerator.",
        },
      ],
    },
    {
      id: "typical",
      heading: "What is a typical screen failure rate?",
      blocks: [
        {
          type: "p",
          text: "It depends heavily on the therapeutic area and the protocol. Published figures from the sources below range from under a fifth to nearly two-thirds of patients screened.",
        },
        {
          type: "table",
          caption: "Published screen failure rates",
          columns: ["Setting", "Screen failure rate", "Source"],
          rows: [
            ["Phase III protocols, Tufts CSDD benchmark (187 protocols, 2013 to 2018)", "29.3% (randomization rate 70.7%)", "Tufts CSDD{{cite:tufts-2022}}"],
            ["SYMPLICITY HTN-3, resistant hypertension", "62%", "American Heart Journal{{cite:htn3}}"],
            ["15 randomized oncology studies, one cancer center in India", "51%", "ecancermedicalscience{{cite:tata-audit}}"],
            ["12 ulcerative colitis trials (mean per trial)", "43%", "Inflammatory Bowel Diseases{{cite:uzzan-2025}}"],
            ["5 Crohn's disease trials (mean per trial)", "53%", "Inflammatory Bowel Diseases{{cite:uzzan-2025}}"],
            ["One IBD trial center vs the global study population", "17.1% vs 39.2%", "Inflammatory Bowel Diseases{{cite:outtier-2023}}"],
          ],
          note: "The Tufts row is 100% minus the mean Phase III randomization rate, which Tufts defines as patients enrolled divided by patients screened.{{cite:tufts-2022}}",
        },
        {
          type: "p",
          text: "The single-center IBD figure shows how much a site can do: the Leuven center's rate was less than half the global rate for the same studies, and its authors judged that about one-quarter of its own screen failures could have been avoided by more thorough pre-screening.{{cite:outtier-2023}}",
        },
      ],
    },
    {
      id: "plan",
      heading: "How many patients do you need to screen to reach your target?",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Screenings needed",
          text: "`screenings needed = randomized patients needed ÷ (1 − screen failure rate)`",
        },
        {
          type: "p",
          text: "At SYMPLICITY HTN-3's rate of 62%, each patient who passed screening took about 2.6 screenings (1,415 ÷ 535).{{cite:htn3}} At a 29.3% rate, the Phase III mean in the Tufts benchmark, the figure is about 1.4.{{cite:tufts-2022}} Screen failures still use consent visits, coordinator hours and often tests the budget does not cover: at one cancer center, eligibility screening cost $129.15 to $336.48 per enrolled patient, and most sponsors did not reimburse it.{{cite:penberthy-2012}} Put that cost into the [cost per randomized patient calculator](/calculators/cost-per-randomized-patient).",
        },
        {
          type: "p",
          text: "The planning figure assumes every patient who passes screening is randomized. If some withdraw between screening and randomization, add them to the screen failures for planning, or use the [enrollment rate calculator](/calculators/enrollment-rate) to project from actual enrollments instead.",
        },
      ],
    },
    {
      id: "lower",
      heading: "How can a site lower its screen failure rate?",
      blocks: [
        {
          type: "p",
          text: "Check the chart against every criterion before the consent visit. In the oncology audit, not meeting inclusion criteria was the most common reason for screen failure, at 54.9% of failures.{{cite:tata-audit}} Many such failures are visible in the record beforehand: an excluded medication, a lab result outside the window, a documented comorbidity.",
        },
        {
          type: "ul",
          items: [
            "**Screen the full record, including notes.** Bond's [Identify](/identify) reads clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, and shows the chart evidence for each criterion decision.{{cite:bond-site,bond-product}}",
            "**Pre-screen what the chart cannot show.** Bond's voice agents start from what Identify found, so they skip questions the chart already answers and ask the rest before booking the visit.{{cite:bond-product}}",
            "**Rescreen against other open studies.** Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
          ],
        },
        {
          type: "p",
          text: "The [guide to reducing screen failure](/guides/reduce-screen-failure) covers causes by therapeutic area and a pre-screening routine in detail.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the formula for screen failure rate?",
      a: "Screen failure rate = screen failures ÷ patients screened × 100. A screen failure is a potential participant who does not meet the eligibility (inclusion or exclusion) criteria during the screening period, as ICH and CDISC define it.{{cite:ncit-screen-failure}}",
    },
    {
      q: "Is a patient excluded at pre-screening a screen failure?",
      a: "No. Screening begins with informed consent, which FDA expects before any procedure done solely to determine research eligibility.{{cite:fda-screening-tests}} A patient ruled out before consent, by chart review or a pre-screening call, is a pre-screen exclusion and is left out of both numbers.",
    },
    {
      q: "What is the difference between the screen failure rate and the randomization rate?",
      a: "They are two sides of the same count. Tufts CSDD defines the randomization rate as patients enrolled divided by patients screened, and reports a Phase III mean of 70.7%, which leaves about 29.3% who did not go on.{{cite:tufts-2022}}",
    },
    {
      q: "Does a screen failure rate depend on the therapeutic area?",
      a: "Yes, a great deal. Published rates include 62% in a resistant hypertension trial, 43% in ulcerative colitis trials and 53% in Crohn's disease trials.{{cite:htn3,uzzan-2025}}",
    },
  ],
  sources: [
    {
      id: "ncit-screen-failure",
      title: "NCI Thesaurus C49628: Trial Screen Failure (ICH and CDISC definitions)",
      publisher: "National Cancer Institute EVS / CDISC",
      url: "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C49628",
      year: "2026",
      note: "Quote: \"The potential participant who does not meet eligibility (inclusion/exclusion) criteria during the screening period.\"",
    },
    {
      id: "htn3",
      title: "High screen failure rate in patients with resistant hypertension: Findings from SYMPLICITY HTN-3",
      publisher: "American Heart Journal, via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/28938966/",
      year: "2017",
      note: "Quote: \"Among 1,415 patients screened, 880 (62%) did not meet criteria for randomization.\" 1,415 minus 880 is 535.",
    },
    {
      id: "tufts-2022",
      title: "Protocol Design and Performance Benchmarks by Phase and by Oncology and Rare Disease Subgroups",
      publisher: "Therapeutic Innovation & Regulatory Science (Getz K, Smith Z, Kravet M), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9373886/",
      year: "2022",
      note: "Quotes: \"In all, 187 protocols were analyzed.\" \"The convenience sampling frame included only those protocols that had received final protocol approval between January 2013 and December 2018\". Randomization rate: \"the ratio of the number of patients enrolled to the total number screened\". Table 6, \"Randomization Rate (Enrolled/Screened)\": 67.7%, 69.4% and 70.7% for Phase I, II and III.",
    },
    {
      id: "tata-audit",
      title: "Audit of screen failure in 15 randomised studies from a low and middle-income country",
      publisher: "ecancermedicalscience, via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/36819805/",
      year: "2022",
      note: "Single center (Tata Memorial Centre, India). Quote: \"Out of these, 3,666 (49.0%) patients were enrolled into trials and 3,815 (51.0%) screen failed. The most common reason for screen failure was 'not meeting inclusion criteria' (54.9%) followed by declining to take treatment (22.2%).\"",
    },
    {
      id: "uzzan-2025",
      title: "Screen Failures and Causes in Inflammatory Bowel Disease Randomized Controlled Trials: A Study of 16 913 Screened Patients",
      publisher: "Inflammatory Bowel Diseases (Uzzan M et al.)",
      url: "https://academic.oup.com/ibdjournal/article/31/7/1811/7778241",
      year: "2025",
      note: "2025;31(7):1811-1818. Abstract: \"We analyzed SF-related data from 17 randomized controlled phase 2 or 3 IBD trials. Twelve trials were in ulcerative colitis (UC) and 5 trials were in Crohn's disease (CD)\"; \"The mean SF proportion was 0.43 per trial in UC\"; \"In CD clinical trials, the mean SF proportion was at 0.53.\"",
    },
    {
      id: "outtier-2023",
      title: "Screening Failure in a Large Clinical Trial Centre for Inflammatory Bowel Diseases: Rates, Causes, and Outcomes",
      publisher: "Inflammatory Bowel Diseases (Outtier A et al.)",
      url: "https://academic.oup.com/ibdjournal/article/29/9/1440/6815647",
      year: "2023",
      note: "2023;29(9):1440-1445. University Hospitals Leuven, Belgium. Quotes: \"642 local screenings were performed as part of 53 studies. We identified an overall SF rate of 17.1%, compared with 39.2% in the global study population (P < .00001).\"; \"about one-quarter of SFs could have been avoided by thorough prescreening of the patient by clinical examination, more careful investigation of the patient's medical history, and available laboratory analyses.\"",
    },
    {
      id: "fda-screening-tests",
      title: "Screening Tests Prior to Study Enrollment: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
      year: "1998",
      note: "Information sheet, January 1998. Quote: \"informed consent must be obtained prior to initiation of any clinical procedures that are performed solely for the purpose of determining eligibility for research, including withdrawal from medication (wash-out).\"",
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
    { label: "Screen failure rate: definition", href: "/glossary/screen-failure-rate", description: "The ICH and CDISC definition, with FAQs." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Causes by therapeutic area and a pre-screening routine." },
    { label: "Enrollment rate calculator", href: "/calculators/enrollment-rate", description: "Patients per site per month, and months to target." },
    { label: "Cost per randomized patient calculator", href: "/calculators/cost-per-randomized-patient", description: "Everything recruitment cost, divided by randomizations." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Chart evidence for every criterion before the screening visit." },
  ],
};

export default page;
