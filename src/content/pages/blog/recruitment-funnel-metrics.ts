import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/recruitment-funnel-metrics",
  category: "blog",
  title: "Recruitment funnel metrics every research site should track",
  description:
    "Definitions for the recruitment metrics that matter, from time to first contact to screen failure and retention, with published benchmarks and their limits.",
  keywords: [
    "clinical trial recruitment metrics",
    "recruitment funnel metrics definitions",
    "screen failure rate definition",
    "enrollment rate per site per month",
    "clinical research site KPIs",
  ],
  eyebrow: "Blog",
  h1: "The recruitment funnel metrics every site should track, with definitions",
  intro:
    "Track each step from first contact to randomization as a rate with a fixed numerator, denominator and date range, so you can see which step loses the most patients. The core set is time to first contact, contact rate, pre-screen pass rate, booking rate, show rate, screen failure rate, enrollment rate and retention. Recording a reason at every exit matters as much as the counts.{{cite:sear-2018}}",
  summary: "Ten recruitment metrics with definitions, how to calculate them consistently, published benchmarks, and which fix each one points to.",
  lastUpdated: "2027-01-22",
  blog: { date: "2027-01-22", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "For research sites", secondaryHref: "/for/research-sites" },
  sections: [
    {
      id: "why-funnel",
      heading: "Why track the whole funnel, not just enrollments?",
      blocks: [
        {
          type: "p",
          text: "Because an enrollment count tells you that you are behind, not why. Being behind is common: of 2,579 phase 2 and 3 trials closed in 2011, 19% were terminated for poor accrual or finished below 85% of their planned enrollment.{{cite:carlisle-2015}} Among 151 UK publicly funded trials, 56% reached their final recruitment target.{{cite:walters-2017}}",
        },
        {
          type: "p",
          text: "Step-level data is what makes the problem fixable, and it is often missing. When researchers compared screening and recruitment logs from eight UK trials, only three had systematically recorded why individual patients were not enrolled. Their SEAR framework (screened, eligible, approached, randomized) was built to close that gap.{{cite:sear-2018}}",
        },
      ],
    },
    {
      id: "metric-definitions",
      heading: "Which metrics should a site track, and how are they defined?",
      blocks: [
        {
          type: "table",
          caption: "Core recruitment funnel metrics",
          columns: ["Metric", "Definition", "What it tells you"],
          rows: [
            ["Leads by source", "New leads per week from each source: ads, EHR lists, physician referrals, registries", "Whether the top of the funnel is big enough"],
            ["Time to first attempt", "Median time from a lead arriving to the first call or text", "How fast the site responds while interest is fresh"],
            ["Contact rate", "Leads reached in a conversation, divided by leads received", "How many leads are lost before anyone talks to them"],
            ["Pre-screen pass rate", "Patients who pass the pre-screen, divided by patients pre-screened", "How well targeting and outreach fit the protocol"],
            ["Booking rate", "Screening visits booked, divided by pre-screen passes", "Whether passes turn into appointments"],
            ["Show rate", "Screening visits attended, divided by visits booked", "How well reminders and scheduling work"],
            ["Screen failure rate", "Consented patients not randomized, divided by patients consented", "How well pre-screening predicts eligibility"],
            ["Enrollment rate", "Participants randomized per site per month", "Pace against the plan"],
            ["Retention", "Randomized participants with primary outcome data, divided by participants randomized", "Whether enrolled patients count in the analysis"],
            ["Cost per randomized patient", "Recruitment spend, divided by participants randomized, by source", "Which sources are worth their cost"],
          ],
          note: "The enrollment rate and retention definitions follow a review of UK publicly funded trials.{{cite:walters-2017}} See the glossary entries for [screen failure rate](/glossary/screen-failure-rate) and [enrollment rate](/glossary/enrollment-rate).",
        },
      ],
    },
    {
      id: "benchmarks",
      heading: "What do published benchmarks look like?",
      blocks: [
        {
          type: "p",
          text: "Few are published, and they come from different populations, so read them as context rather than targets. Across 151 UK publicly funded trials, the median recruitment rate was 0.92 participants per centre per month (IQR 0.43 to 2.79), and median retention was 89%.{{cite:walters-2017}}",
        },
        {
          type: "p",
          text: "For conversion from screening to enrollment, a 2020 meta-analysis found online recruits converted less often than offline recruits in 9 of 13 studies (risk ratio 0.8).{{cite:brogger-2020}} For contact rate and speed, one research site network found that 46% of 6,881 Alzheimer's trial applicants from online ads ever spoke with a recruiter, and that the share reached fell as the delay before the first call grew.{{cite:starling-2025}} In a Kaiser Permanente behavioral trial, 11,152 patients were sent a letter or email, recruiters reached 4,033 by phone, 721 consented and 451 were randomized.{{cite:kp-2025}} In oncology, a meta-analysis of 13 studies found that 8.1% of patients enrolled in a trial; most of the rest had no trial available or were ineligible.{{cite:unger-2019}} For show rates, the closest reference is outpatient care, where a review of 105 studies put the average no-show rate around 23%.{{cite:dantas-2018}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "Your own baseline beats any benchmark",
          text: "Measure each metric on one active study for a month before changing anything. That number, not a published median, is what a new process or vendor has to beat.",
        },
      ],
    },
    {
      id: "calculation",
      heading: "How should each metric be calculated so the numbers mean something?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Count by cohort.** Follow the leads that arrived in a given week through every later step, rather than dividing this week's visits by this week's leads.",
            "**Fix the definitions.** Write down what counts as a lead, a contact (a conversation, not a voicemail), a pass and a show, and keep them stable for the life of the study.",
            "**Keep pre-screening and screening apart.** A pre-screen fail is not a screen failure; our guide on [pre-screening vs screening](/guides/pre-screening-vs-screening) draws the line.",
            "**De-duplicate.** One patient who answers two ads is one lead.",
            "**Tag the source.** Record where every lead came from, so ads, EHR lists and referrals can be compared step by step.",
            "**Record a reason at every exit.** Not reached, failed a named criterion, declined, no-show or withdrew, as the SEAR framework encourages.{{cite:sear-2018}}",
          ],
        },
      ],
    },
    {
      id: "diagnosis",
      heading: "Which metric points to which fix?",
      blocks: [
        {
          type: "table",
          caption: "Reading a weak metric",
          columns: ["Weak metric", "Likely causes", "What to try"],
          rows: [
            ["Contact rate", "Slow first attempt; calls from unknown numbers go unanswered; a single attempt", "Text plus voicemail, several attempts at different times of day{{cite:pew-2020}}"],
            ["Pre-screen pass rate", "Ads or lists reach people the protocol excludes", "Tighten targeting and move knockout questions first"],
            ["Booking rate", "No slot offered on the call", "Book before the call ends"],
            ["Show rate", "Long wait to the visit; no reminders", "Shorter lead time and more than one reminder{{cite:dantas-2018}}"],
            ["Screen failure rate", "The pre-screen misses a criterion", "Move that criterion to chart review or rewrite the question"],
            ["Retention", "Visit burden; little contact between visits", "Cut burden and set a target for missing data{{cite:little-2012}}"],
          ],
        },
        {
          type: "p",
          text: "Follow-up deserves particular attention because the evidence is strong. The 2026 Cochrane review of recruitment strategies found high-certainty evidence for only five strategies, one of which was telephoning people who had not responded to a postal invitation: it raised recruitment by 6 percentage points in trials where underlying recruitment was low.{{cite:cochrane-recruit-2026}}",
        },
      ],
    },
    {
      id: "review-cadence",
      heading: "How often should a site review the funnel, and with whom?",
      blocks: [
        {
          type: "p",
          text: "Weekly within the study team for any study that is actively recruiting, and monthly with the PI and the sponsor. Set a target for each step at start-up and review progress against it, the same discipline the National Research Council report recommends for missing data.{{cite:little-2012}} Fix the step with the biggest drop first, change one thing at a time, and keep the definitions stable so the trend means something.",
        },
        {
          type: "p",
          text: "Bond works on the first steps in that table: its voice and text agents contact every new ad lead immediately, keep following up with every lead who has not responded, and book pre-screened patients straight into the site's calendar.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a month of lead and visit counts from one study, and we will walk through where your funnel loses patients.",
          secondaryLabel: "For research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the difference between a pre-screen failure and a screen failure?",
      a: "A pre-screen failure happens before consent, from a conversation or a records review. A screen failure is a patient who consented and started screening procedures but was not randomized. Track them separately, because they point to different fixes.",
    },
    {
      q: "What is a good enrollment rate per site?",
      a: "It depends on the condition and protocol. As a reference, UK publicly funded trials had a median of 0.92 participants per centre per month, with the middle half of trials between 0.43 and 2.79.{{cite:walters-2017}} Compare against your own study's plan first.",
    },
    {
      q: "Which metric should a site fix first?",
      a: "The step where the most patients drop out. In the Kaiser Permanente example above, the largest number of patients was lost at first contact,{{cite:kp-2025}} but only cohort counts by source will show where yours are lost.",
    },
  ],
  sources: [
    {
      id: "sear-2018",
      title: "Development of a framework to improve the process of recruitment to randomised controlled trials (RCTs): the SEAR (Screened, Eligible, Approached, Randomised) framework",
      publisher: "Trials (Wilson C et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5775609/",
      year: "2018",
      note: "Read October 2026. Quote: \"The eight trials recorded basic information about patients screened for trial participation and randomisation outcome. Three trials systematically recorded reasons why an individual was not enrolled in the trial\". Quote: \"The SEAR framework encourages the collection of information to identify recruitment obstacles and facilitate improvements to the recruitment process.\"",
    },
    {
      id: "carlisle-2015",
      title: "Unsuccessful trial accrual and human subjects protections: an empirical analysis of recently closed trials",
      publisher: "Clinical Trials (Carlisle B et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4516407/",
      year: "2015",
      note: "Read October 2026. Phase 2 and 3 interventional trials registered as closed in 2011. Quote: \"Of 2579 eligible trials, 481 (19%) either terminated for failed accrual or completed with less than 85% expected enrolment, seriously compromising their statistical power.\"",
    },
    {
      id: "walters-2017",
      title: "Recruitment and retention of participants in randomised controlled trials: a review of trials funded and published by the United Kingdom Health Technology Assessment Programme",
      publisher: "BMJ Open (Walters SJ et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5372123/",
      year: "2017",
      note: "Read October 2026. Quote: \"recruitment rates (number of participants recruited per centre per month) and retention rates (randomised participants retained and assessed with valid primary outcome data)\". Quote: \"The final recruitment target sample size was achieved in 56% (85/151) of the RCTs\". Quote: \"The median recruitment rate (participants per centre per month) was found to be 0.92 (IQR 0.43–2.79) and the median retention rate ... was estimated at 89% (IQR 79–97%).\"",
    },
    {
      id: "brogger-2020",
      title: "Online Patient Recruitment in Clinical Trials: Systematic Review and Meta-Analysis",
      publisher: "Journal of Medical Internet Research (Brøgger-Mikkelsen M et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7673977/",
      year: "2020",
      note: "Read October 2026. Conversion rate defined as \"the percentage of participants screened who proceed to enroll into the clinical trial\". Quote: \"we found that 69% (9/13) of studies had significantly better offline conversion rates compared with online conversion rates (risk ratio 0.8, P=.02).\"",
    },
    {
      id: "kp-2025",
      title: "Sociodemographic characteristics of patients throughout the recruitment process into a randomized, controlled behavioral trial",
      publisher: "Trials (Young DR et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12625122/",
      year: "2025",
      note: "Read October 2026. Kaiser Permanente Southern California physical activity trial, July 2020 to September 2023. Quote: \"A total of 11,152 patients received either an email (89.5%) or letter (10.5%) informing them of potential eligibility\". Quote: \"Recruiters contacted 4033 patients by phone\". Quote: \"patients who consented (N = 721)\". Quote: \"Four hundred fifty-one were randomized\".",
    },
    {
      id: "starling-2025",
      title: "Importance of Speed of First Attempted Contact in Alzheimer's Trial Participation",
      publisher: "Alzheimer's & Dementia (Starling S et al., Adams Clinical), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11714075/",
      year: "2025",
      note: "Read October 2026. Conference abstract (Alzheimer's & Dementia 2024;20 Suppl 6), published January 2025. Quote: \"From January to December 2023, 6881 individuals applied to participate in AD trials through online advertisements.\" Quote: \"46% of applicants eventually communicated with a recruiter. Longer delays to first call decreased the likelihood of reaching the potential participant across all calls\".",
    },
    {
      id: "unger-2019",
      title: "Systematic Review and Meta-Analysis of the Magnitude of Structural, Clinical, and Physician and Patient Barriers to Cancer Clinical Trial Participation",
      publisher: "Journal of the National Cancer Institute (Unger JM et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6410951/",
      year: "2019",
      note: "Read October 2026. 13 studies, 8,883 patients. Quote: \"A trial was unavailable for patients at their institution 55.6% of the time ... 21.5% ... of patients were ineligible for an available trial, 14.8% ... did not enroll, and 8.1% (95% CI = 6.3% to 10.0%) enrolled.\"",
    },
    {
      id: "dantas-2018",
      title: "No-shows in appointment scheduling: a systematic literature review",
      publisher: "Health Policy (Dantas LF et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29482948/",
      year: "2018",
      note: "Read October 2026. 105 studies. Quote: \"The results indicate that the average no-show rate is of the order of 23%\". Quote: \"the most commonly reported significant determinants of no-show were high lead time and prior no-show history.\"",
    },
    {
      id: "pew-2020",
      title: "Most Americans don't answer cellphone calls from unknown numbers",
      publisher: "Pew Research Center",
      url: "https://www.pewresearch.org/short-reads/2020/12/14/most-americans-dont-answer-cellphone-calls-from-unknown-numbers/",
      year: "2020",
      note: "Read October 2026. Survey of 10,211 US adults, July 13 to 19, 2020. Quote: \"Eight-in-ten Americans say they don't generally answer their cellphone when an unknown number calls\". Quote: \"The majority of Americans (67%) say their general practice is to not answer the phone when an incoming call is from an unknown number but to check a voicemail if one is left.\"",
    },
    {
      id: "little-2012",
      title: "The prevention and treatment of missing data in clinical trials",
      publisher: "New England Journal of Medicine (Little RJ et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3771340/",
      year: "2012",
      note: "Read October 2026. Summary of the 2010 National Research Council report. Quote: \"Set acceptable target rates for missing data and monitor the progress of the trial with respect to these targets.\" Quote: \"Limit the burden and inconvenience of data collection on the participants, and make the study experience as positive as possible.\"",
    },
    {
      id: "cochrane-recruit-2026",
      title: "Strategies to improve recruitment to randomised trials",
      publisher: "Cochrane Database of Systematic Reviews (Parker A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13576036/",
      year: "2026",
      note: "Read October 2026. Quote: \"Only five strategies were supported by high-certainty evidence according to GRADE criteria\". Quote: \"Telephone reminders to people who did not respond to an initial postal invitation boosted recruitment by 6% (95% CI 3% to 9%; 2 studies, 1450 participants), in trials with low underlying recruitment (we are less certain for trials with over 10% recruitment).\"",
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
    { label: "Screen failure rate", href: "/glossary/screen-failure-rate", description: "Definition and what drives it." },
    { label: "Enrollment rate", href: "/glossary/enrollment-rate", description: "Patients enrolled per site per month, against plan." },
    { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites", description: "Why recruitment data matters at feasibility." },
    { label: "Bond for research sites", href: "/for/research-sites", description: "How Bond fits a site's recruitment workflow." },
  ],
};

export default page;
