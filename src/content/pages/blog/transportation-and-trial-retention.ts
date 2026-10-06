import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/transportation-and-trial-retention",
  category: "blog",
  title: "Transportation barriers and trial retention: the evidence",
  description:
    "Travel is what most often disrupts trial participants. What the data show on transport, enrollment and dropout, why free rides alone fall short, and what helps.",
  keywords: [
    "transportation barriers clinical trials",
    "clinical trial travel burden",
    "trial participant transportation reimbursement",
    "clinical trial retention travel",
    "rideshare missed appointments",
  ],
  eyebrow: "Blog",
  h1: "How transportation barriers affect clinical trial enrollment and retention",
  intro:
    "Travel is the most common reason trial participants give for finding a study disruptive: in CISCRP's 2025 survey, 49% of participants who found taking part disruptive named having to travel to the study clinic.{{cite:ciscrp-2025}} Transportation also keeps some patients from enrolling at all. But offering free rides to everyone did not reduce missed visits in a US primary care trial that tested it, so the useful move is to find out who needs help and solve their specific trip.{{cite:chaiyachati-2018}}",
  summary: "What the evidence says about travel, enrollment and dropout in trials, and a transportation workflow for sites and sponsors.",
  lastUpdated: "2026-11-23",
  blog: { date: "2026-11-23", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "how-many",
      heading: "How many patients miss care because of transportation?",
      blocks: [
        {
          type: "p",
          text: "A small share overall, concentrated among people with the fewest resources. In 2017, 5.8 million people in the US, 1.8% of the population, delayed medical care because they did not have transportation. Hispanic people, people below the poverty line, Medicaid recipients and people with a functional limitation had higher odds of reporting it.{{cite:wolfe-2020}}",
        },
        {
          type: "p",
          text: "In patient samples the share is higher. A review of 61 US studies found that in 25 of them, 10% to 51% of patients reported transportation as a barrier to care, and that such barriers lead to rescheduled or missed appointments. Distance on its own was a less consistent predictor: the authors called that evidence inconclusive.{{cite:syed-2013}}",
        },
      ],
    },
    {
      id: "how-far",
      heading: "How far do patients travel to reach a trial site?",
      blocks: [
        {
          type: "p",
          text: "It depends heavily on where they live. Mapping the population center of each US census tract to its nearest psoriasis trial site, one 2023 study found an average trip of 45.6 miles and 51.8 minutes. Travel burden was greater in rural areas, among Native American and Black residents, among people without a college education and among Veterans Affairs beneficiaries.{{cite:masison-2023}}",
        },
        {
          type: "p",
          text: "Patients who actually enroll tend to live much closer. Among 4,913 US patients with complete data who enrolled in Radiation Therapy Oncology Group trials from 2006 to 2009, the median trip was 11.6 miles: 12.9 miles for White patients, 8.22 for Latino patients and 5.85 for African American patients.{{cite:bruner-2015}} One reading of the two studies together is that distance quietly filters who enrolls.",
        },
      ],
    },
    {
      id: "dropout",
      heading: "Does travel burden drive dropout?",
      blocks: [
        {
          type: "p",
          text: "It is one driver among several. In CISCRP's 2025 online survey, 79% of participants said they completed their whole study and 11% said they stopped before their last scheduled visit. Of those who stopped, 31% were told they no longer qualified, 19% cited health reasons, and 13% each cited the location of the study center and poor communication with it. Among respondents who rated it, 28% found traveling to the clinic somewhat or very burdensome.{{cite:ciscrp-2025}}",
        },
        {
          type: "p",
          text: "Asked what would have made it less disruptive, participants who found taking part disruptive most often chose not having to travel as far (35%), payment for their time (31%), home visits by a study nurse or doctor (28%), and help traveling to and from the study (25%).{{cite:ciscrp-2025}} The survey is self-selected and international, so treat the percentages as direction rather than benchmarks.",
        },
        {
          type: "p",
          text: "Research outside trials points the same way. A meta-analysis of 143 longitudinal cohort studies found that those using barrier-reduction strategies, such as flexible ways to collect data, retained 10% more of their sample.{{cite:teague-2018}}",
        },
      ],
    },
    {
      id: "free-rides",
      heading: "Do free rides reduce missed visits?",
      blocks: [
        {
          type: "p",
          text: "Not on their own, and not for everyone. In a 2016 to 2017 trial in West Philadelphia, 786 Medicaid patients due for primary care visits were offered a free rideshare or usual care depending on their appointment day. Of the 288 patients in the offer group who answered the reminder call, 85 used a ride, and missed-appointment rates were 36.5% and 36.7%.{{cite:chaiyachati-2018}} Uptake was low, and the authors suggested targeting people with stronger transportation needs.",
        },
        {
          type: "p",
          text: "Targeted help does reach people who need it. At Massachusetts General Hospital, a program with the Lazarex Cancer Foundation reimbursed travel and lodging for patients in therapeutic cancer trials. Among 260 trial patients surveyed from 2015 to 2017, those in the program started with far more travel cost concerns (41.0% against 6.8%). Over the 90-day follow-up, the share reporting travel cost concerns fell by 10.0 percentage points in the program group and rose by 1.2 points among comparison patients.{{cite:nipp-2019}} The study measured financial worry, not whether patients stayed in their trials.",
        },
      ],
    },
    {
      id: "rules",
      heading: "What do the rules say about paying for travel?",
      blocks: [
        {
          type: "p",
          text: "Reimbursing travel is not treated as an inducement. FDA's information sheet on payment and reimbursement to research subjects says it does not consider reimbursement for travel to and from the trial site, including airfare, parking and lodging, to raise issues of undue influence.{{cite:fda-payment-2018}} Payment for participation is different: the IRB reviews its amount, method and timing for undue influence. Describe the plan in the consent form and follow your institution's policy. This is not legal advice.",
        },
        {
          type: "p",
          text: "Moving visits closer to the patient is the other lever. FDA's final guidance on trials with decentralized elements, issued in September 2024, covers trial activities that take place at locations other than traditional sites, including telehealth visits with trial personnel, in-home visits and visits with local health care providers.{{cite:fda-dct-2024}} Whether a given visit can move is a protocol decision for the sponsor.",
        },
      ],
    },
    {
      id: "workflow",
      heading: "How should a site build transportation into its workflow?",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Ask during pre-screening", text: "Ask how the patient will get to visits, how far they live, and whether a caregiver comes too. Record the answer with the lead." },
            { title: "Budget for it before start-up", text: "Sponsors and sites should agree on rides, mileage, parking and lodging in the budget and the consent language, not after the first missed visit." },
            { title: "Pay up front where you can", text: "A pre-booked ride or a direct payment asks less of the patient than a receipt to submit later. In CISCRP's 2025 survey, 1 in 3 participants said they received no compensation or reimbursement at all.{{cite:ciscrp-2025}}" },
            { title: "Put the trip in the reminder", text: "Include the pickup time and a number to call if the ride does not show." },
            { title: "Log the reason for every missed visit", text: "Flag participants whose misses trace to travel, and fix their next trip before it happens." },
            { title: "Move visits when the protocol allows", text: "Ask the sponsor which visits can be remote or at home for patients with long trips." },
          ],
        },
        {
          type: "p",
          text: "Bond's agents cover part of this list after enrollment: they send visit reminders, book transportation and flag participants at risk of dropping out.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how reminders, transportation booking and dropout-risk flags work for an enrolled participant.",
          secondaryLabel: "For sponsors",
          secondaryHref: "/for/sponsors",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does reimbursing travel count as undue influence?",
      a: "Not in FDA's view. Its 2018 information sheet says reimbursement for travel to and from the site, including airfare, parking and lodging, does not raise undue influence issues. Payment for participation is reviewed separately by the IRB.{{cite:fda-payment-2018}}",
    },
    {
      q: "Should we offer rides to every participant?",
      a: "Offer them to anyone who needs one, but ask first. When two Philadelphia primary care practices offered free rides to Medicaid patients in a trial, 85 of 288 who answered the call used one and missed-visit rates did not change.{{cite:chaiyachati-2018}}",
    },
    {
      q: "Can visits happen at home instead?",
      a: "Sometimes. FDA's 2024 guidance allows trial activities at locations other than the site, including home visits, but the protocol and sponsor decide which visits can move.{{cite:fda-dct-2024}}",
    },
  ],
  sources: [
    {
      id: "ciscrp-2025",
      title: "2025 Perceptions & Insights Study: Participation Experiences",
      publisher: "Center for Information and Study on Clinical Research Participation (CISCRP)",
      url: "https://www.ciscrp.org/wp-content/uploads/2025/11/2025-Perceptions-Insights-Participation-Experiences_FINAL.pdf",
      year: "2025",
      note: "Read October 2026. Online international survey, April to June 2025; 12,887 respondents, 34% of whom had participated in a study. Quote: \"What made your participation in the clinical research study disruptive? Having to travel to the study clinic (49%)\" (base: those who reported participation was disruptive, n = 2,194). Quote: \"Traveling to clinic (n = 3,738) 28%\" (% somewhat or very burdensome). Quote: \"79% Completed Participation in the Entire Study\"; \"I stopped before my last scheduled study visit\" 11%. Quote: \"I was told I did not qualify to participate anymore (31%) Health reasons (19%) There was poor communication with the study center (13%) The location of the study center (13%)\". Quote: \"Not having to travel as far to get to my study visits (35%) Receiving compensation (money) for my time (31%) Having a study nurse or doctor come to my home for some of my study visits (28%) Having help/assistance traveling to and from the study (25%)\". Quote: \"1 in 3 received no compensation or reimbursement\". Self-selected sample.",
    },
    {
      id: "wolfe-2020",
      title: "Transportation Barriers to Health Care in the United States: Findings From the National Health Interview Survey, 1997-2017",
      publisher: "American Journal of Public Health (Wolfe MK, McDonald NC, Holmes GM), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7204444/",
      year: "2020",
      note: "Read October 2026. Quote: \"In 2017, 5.8 million persons in the United States (1.8%) delayed medical care because they did not have transportation.\" Quote: \"Hispanic people, those living below the poverty threshold, Medicaid recipients, and people with a functional limitation had greater odds of reporting a transportation barrier\".",
    },
    {
      id: "syed-2013",
      title: "Traveling towards disease: transportation barriers to health care access",
      publisher: "Journal of Community Health (Syed ST, Gerber BS, Sharp LK), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4265215/",
      year: "2013",
      note: "Read October 2026. Quote: \"In total, 61 studies were reviewed.\" Quote: \"In 25 separate studies, 10–51 % of patients reported that transportation was a barrier to health care access\". Quote: \"Transportation barriers lead to rescheduled or missed appointments, delayed care, and missed or delayed medication use.\" Quote: \"while distance from a patient to a provider would intuitively seem to be a barrier to health care access, the evidence is inconclusive.\"",
    },
    {
      id: "masison-2023",
      title: "Differential patient travel distance and time to psoriasis clinical trial sites",
      publisher: "Archives of Dermatological Research (Masison J, Beltrami EJ, Feng H), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/37166524/",
      year: "2023",
      note: "Read October 2026. Census tract population centers mapped to the nearest psoriasis trial site, 2020 American Community Survey. Quote: \"The average distance and time traveled to reach a psoriasis clinical trial site nationally were 45.6 miles and 51.8 min, respectively.\" Quote: \"Travel burden was significantly greater among Native American and Black races, individuals without college education and Veterans Affairs beneficiaries relative to their counterparts.\"",
    },
    {
      id: "bruner-2015",
      title: "Cartographic Mapping and Travel Burden to Assess and Develop Strategies to Improve Minority Access to National Cancer Clinical Trials",
      publisher: "International Journal of Radiation Oncology, Biology, Physics (Bruner DW et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4605855/",
      year: "2015",
      note: "Read October 2026. RTOG trial enrollment, 2006 to 2009. Quote: \"Of the 4913 U.S. patients with complete data, patients traveled a median of 11.6 miles to participate in clinical trials. Whites traveled statistically longer distances (12.9 miles; p<0.0001) to participate followed by Latinos (8.22 miles), and African Americans (5.85 miles).\"",
    },
    {
      id: "teague-2018",
      title: "Retention strategies in longitudinal cohort studies: a systematic review and meta-analysis",
      publisher: "BMC Medical Research Methodology (Teague S et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6258319/",
      year: "2018",
      note: "Read October 2026. Cohort studies, not trials. Quote: \"with 143 eligible longitudinal cohort studies identified\". Quote: \"Meta-regressions indicated that studies using barrier-reduction strategies retained 10% more of their sample (95%CI [0.13 to 1.08]; p = .01)\". Quote: \"strategies that aim to reduce participant burden (e.g., flexibility in data collection methods) might be most effective in maximising cohort retention.\"",
    },
    {
      id: "chaiyachati-2018",
      title: "Association of Rideshare-Based Transportation Services and Missed Primary Care Appointments: A Clinical Trial",
      publisher: "JAMA Internal Medicine (Chaiyachati KH et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13371950/",
      year: "2018",
      note: "Read October 2026. 786 Medicaid beneficiaries, West Philadelphia, October 2016 to April 2017; allocation by even or odd appointment weekday. Quote: \"Within the intervention arm, 85 among 288 (26.0%) participants who answered the phone call used ridesharing. The missed appointment rate was 36.5% (144 of 394) for the intervention arm and 36.7% (144 of 392) for the control arm (P = .96).\" Quote: \"The uptake of ridesharing was low and did not decrease missed primary care appointments.\"",
    },
    {
      id: "nipp-2019",
      title: "Addressing the Financial Burden of Cancer Clinical Trial Participation: Longitudinal Effects of an Equity Intervention",
      publisher: "The Oncologist (Nipp RD et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6693715/",
      year: "2019",
      note: "Read October 2026. Quote: \"Massachusetts General Hospital partnered with the Lazarex Cancer Foundation, a 501 (c)(3) nonprofit organization, to develop an equity intervention\". Quote: \"Among 260 participants, intervention patients were more likely than comparison patients to have incomes under $60,000 (52% vs. 24%, p < .001) and to report travel-related (41.0% vs. 6.8%, p < 0.001) and lodging-related (32.5% vs. 2.0%, p < .001) cost concerns at baseline.\" Quote: \"Over time, intervention patients experienced greater improvements in their travel-related (-10.0% vs. +1.2%, p = .010) and lodging-related (-3.9% vs. +4.0%, p = .003) cost concerns.\" Surveys at baseline, day 45 and day 90, July 2015 to July 2017.",
    },
    {
      id: "fda-payment-2018",
      title: "Payment and Reimbursement to Research Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/payment-and-reimbursement-research-subjects",
      year: "2018",
      note: "Read October 2026. Information sheet issued January 2018. Quote: \"In contrast to payment for participation, FDA does not consider reimbursement for travel expenses to and from the clinical trial site and associated costs such as airfare, parking, and lodging to raise issues regarding undue influence.\" Quote: \"The IRB should review both the amount of payment and the proposed method and timing of disbursement to assure that neither are coercive or present undue influence\".",
    },
    {
      id: "fda-dct-2024",
      title: "Conducting Clinical Trials With Decentralized Elements: Guidance for Industry, Investigators, and Other Interested Parties",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/conducting-clinical-trials-decentralized-elements",
      year: "2024",
      note: "Read October 2026. Final guidance, September 2024. Quote: \"a clinical trial that includes decentralized elements where trial-related activities occur at locations other than traditional clinical trial sites\". Quote: \"Decentralized elements allow trial-related activities to occur remotely at locations convenient for trial participants. Decentralized elements can include, among other things, telehealth visits with trial personnel, in-home visits with remote trial personnel, or visits with local health care providers.\"",
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
    { label: "Engage: outreach, booking and reminders", href: "/engage", description: "How Bond supports participants before and after enrollment." },
    { label: "Bond for sponsors", href: "/for/sponsors", description: "Recruitment and retention support across sites." },
    { label: "Bond for FQHCs and community sites", href: "/for/fqhcs-and-community-sites", description: "Reaching patients who face the most barriers to taking part." },
    { label: "Diversity action plan", href: "/glossary/diversity-action-plan", description: "How FDA expects sponsors to plan enrollment of underrepresented groups." },
  ],
};

export default page;
