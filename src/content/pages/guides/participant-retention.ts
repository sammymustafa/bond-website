import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/participant-retention",
  category: "guide",
  title: "Clinical trial participant retention: how sites prevent dropout",
  description:
    "How research sites keep clinical trial participants enrolled: typical retention rates, why participants leave, and the retention steps with evidence behind them.",
  keywords: [
    "clinical trial participant retention",
    "how to prevent dropout in clinical trials",
    "patient retention strategies clinical trials",
    "clinical trial retention plan",
    "keep participants in clinical trials",
  ],
  eyebrow: "Guide",
  h1: "How to keep clinical trial participants from dropping out",
  intro:
    "Research sites keep clinical trial participants from dropping out by making each visit easier to keep, with reminders, transportation, flexible scheduling and prompt reimbursement. Retention matters as much as recruitment: a participant who leaves after randomization has to be replaced, or the missing data weakens the result. This guide covers how much dropout to expect, why participants leave, which retention steps have evidence behind them, and how to keep participants without pressuring anyone to stay.",
  summary:
    "Typical retention rates, why participants leave, which retention steps have evidence, and a retention checklist for research sites.",
  lastUpdated: "2026-10-25",
  heroCta: {
    label: "Book a demo",
    href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true",
    secondaryLabel: "Recruitment and retention plan template",
    secondaryHref: "/templates/recruitment-plan",
  },
  sections: [
    {
      id: "how-much-dropout",
      heading: "How many participants drop out of clinical trials?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "89%", label: "median retention across 151 UK publicly funded trials (participants with primary outcome data at follow-up)", cite: "walters-2017" },
            { value: "79%", label: "of surveyed participants said they completed the entire study", cite: "ciscrp-2025" },
            { value: "11%", label: "said they stopped before their last scheduled study visit", cite: "ciscrp-2025" },
          ],
        },
        {
          type: "p",
          text: "Retention depends on the study. In a review of 151 trials funded by the UK's NIHR Health Technology Assessment programme, the median share of participants with valid primary outcome data at follow-up was 89%, and the middle half of trials fell between 79% and 97%.{{cite:walters-2017}} The participant figures come from CISCRP's 2025 online survey of 12,887 people, a self-selected sample, so read them as a direction rather than a benchmark.{{cite:ciscrp-2025}}",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why does dropout matter so much?",
      blocks: [
        {
          type: "p",
          text: "Every participant who leaves takes outcome data with them. A 2012 summary of a National Research Council report on missing data asks trial teams to limit the burden and inconvenience of data collection, make the study experience as positive as possible, set target rates for missing data and monitor against them.{{cite:little-2012}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "Stopping treatment is not dropping out",
          text: "The same report warns that too many investigators equate treatment discontinuation with study dropout, and asks that staff be trained to keep participants in the trial until the end whether or not they continue the assigned treatment.{{cite:little-2012}} Ask a participant who stops the study drug whether they will keep coming to follow-up visits.",
        },
      ],
    },
    {
      id: "why-participants-leave",
      heading: "Why do participants leave?",
      blocks: [
        {
          type: "p",
          text: "In CISCRP's 2025 survey, people who stopped early most often said they were told they no longer qualified (31%), then health reasons (19%), poor communication with the study center (13%), the location of the study center (13%) and the overall time commitment (12%).{{cite:ciscrp-2025}} Communication, travel and time are all within a site's reach.",
        },
        {
          type: "p",
          text: "Asked what would have helped, those who stopped named more virtual visits (15%), reimbursement for out-of-pocket expenses (14%), more information on managing side effects (13%) and supportive services (13%). Updates matter as well: 29% of participants in traditional studies said they never received updates while enrolled.{{cite:ciscrp-2025}}",
        },
      ],
    },
    {
      id: "evidence",
      heading: "Which retention strategies have evidence behind them?",
      blocks: [
        {
          type: "p",
          text: "Less than you might expect. A 2021 Cochrane review found 81 randomized trials of retention strategies. Most aimed to get postal questionnaires returned, few tested ways to bring participants back to trial sites, and none of the comparisons is supported by high-certainty evidence. Moderate-certainty evidence supported self-sampling kits, a monetary reward combined with a reminder or prenotification, and giving a pen at recruitment.{{cite:gillies-2021}}",
        },
        {
          type: "p",
          text: "Reducing the burden of taking part looks more promising than chasing people. In a 2018 review of 143 longitudinal cohort studies, those using barrier-reduction strategies retained 10% more of their sample, while those relying on follow-up and reminder strategies lost an additional 10%, a result the authors called surprising.{{cite:teague-2018}} Those were cohort studies rather than trials, but the direction matches what participants report.",
        },
        {
          type: "p",
          text: "For getting someone to a single visit, reminders do help: a Cochrane review found text message reminders improved attendance at healthcare appointments compared with no reminder, and worked about as well as phone call reminders.{{cite:cochrane-sms-2013}} Our post on [screening visit no-shows](/blog/screening-visit-no-shows) covers reminders in more detail.",
        },
      ],
    },
    {
      id: "retention-plan",
      heading: "What should a site's retention plan include?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Reminders before every visit,** by text or call, in the participant's language.{{cite:cochrane-sms-2013}}",
            "**Travel arranged before the first visit,** with reimbursement for travel, parking and lodging, which FDA does not consider an undue influence.{{cite:fda-payment-2018}} A ride offer alone is not enough: in one Philadelphia study, uptake of free rideshares was low and missed primary care appointments did not fall.{{cite:chaiyachati-2018}}",
            "**Payments that accrue as the study goes,** at an amount, method and timing the IRB has reviewed, never contingent on finishing the study.{{cite:fda-payment-2018}}",
            "**Visits that fit people's lives,** including early or late slots and, where the protocol allows, decentralized elements such as telehealth or in-home visits.{{cite:fda-dct-2024}}",
            "**A named contact and regular updates,** so participants know who to call between visits and hear how the study is going.{{cite:ciscrp-2025}}",
            "**Check-ins between visits** for side effects and questions, with plain instructions on managing common side effects.{{cite:ciscrp-2025}}",
            "**An early warning rule,** such as a missed call or a rescheduled visit, that triggers a coordinator follow-up.",
            "**Off treatment is not off study.** Keep following participants who stop the study drug, if they agree.{{cite:little-2012}}",
          ],
        },
        {
          type: "p",
          text: "Our [recruitment and retention plan template](/templates/recruitment-plan) has a retention section to fill in alongside recruitment.",
        },
      ],
    },
    {
      id: "right-to-withdraw",
      heading: "How do you keep participants without pressuring them?",
      blocks: [
        {
          type: "p",
          text: "Retention has a hard limit. Under 21 CFR 50.25(a)(8), the consent must state that participation is voluntary and that the participant may discontinue participation at any time without penalty or loss of benefits to which they are otherwise entitled.{{cite:cfr-50-25}} Retention means removing reasons to leave, such as travel, cost, confusion or a hard schedule, not arguing with someone who has decided to go. FDA applies the same idea to money: credit for payment should accrue as the study progresses and not depend on completing the entire study.{{cite:fda-payment-2018}}",
        },
      ],
    },
    {
      id: "how-bond-helps",
      heading: "How does Bond help sites keep participants enrolled?",
      blocks: [
        {
          type: "p",
          text: "After a patient enrolls, Bond's AI agents keep supporting them: they send visit reminders, book transportation, collect symptoms and diary entries, run side-effect check-ins and flag participants at risk of dropping out so a coordinator can step in.{{cite:bond-product}} These are the same [Engage](/engage) voice and SMS agents that recruited the patient, working in the patient's language, with a live transfer to a coordinator or a human callback whenever the patient wants a person.{{cite:bond-site,bond-product}} [Book](/book) covers scheduling and reminders.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true",
          text: "See how Bond's agents handle reminders, transportation and check-ins after enrollment.",
          secondaryLabel: "Recruitment plan template",
          secondaryHref: "/templates/recruitment-plan",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is a good retention rate for a clinical trial?",
      a: "It depends on the study's length, population and burden. In 151 UK publicly funded trials, the median share of participants with primary outcome data at follow-up was 89%, with the middle half between 79% and 97%.{{cite:walters-2017}} Set a target for missing data before the study starts and monitor against it.{{cite:little-2012}}",
    },
    {
      q: "Do reminders improve retention?",
      a: "They help people attend a given appointment: text reminders improved attendance compared with no reminder in a Cochrane review.{{cite:cochrane-sms-2013}} Evidence that any strategy keeps people in a trial over months is weaker; a Cochrane review of retention strategies found none supported by high-certainty evidence.{{cite:gillies-2021}}",
    },
    {
      q: "Can a site pay participants to stay in a study?",
      a: "Payments are allowed if the IRB reviews the amount, method and timing, and FDA says credit should accrue as the study progresses rather than depend on completing it. FDA does not consider reimbursement for travel and similar costs an undue influence.{{cite:fda-payment-2018}}",
    },
    {
      q: "Is a participant who stops the study drug a dropout?",
      a: "Not necessarily. A National Research Council report on missing data warns that too many investigators equate treatment discontinuation with study dropout, and recommends training staff that keeping participants in the trial until the end matters whether or not they continue the assigned treatment.{{cite:little-2012}}",
    },
  ],
  sources: [
    {
      id: "walters-2017",
      title: "Recruitment and retention of participants in randomised controlled trials: a review of trials funded and published by the United Kingdom Health Technology Assessment Programme",
      publisher: "BMJ Open (Walters SJ et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5372123/",
      year: "2017",
      note: "Read October 2026. HTA reports published 2004 to April 2016. Quote: \"This review identified 151 individually RCTs from 787 NIHR HTA reports.\" Quote: \"the median retention rate (proportion of participants with valid primary outcome data at follow-up) was estimated at 89% (IQR 79–97%).\"",
    },
    {
      id: "ciscrp-2025",
      title: "2025 Perceptions & Insights Study: Participation Experiences",
      publisher: "Center for Information and Study on Clinical Research Participation (CISCRP)",
      url: "https://www.ciscrp.org/wp-content/uploads/2025/11/2025-Perceptions-Insights-Participation-Experiences_FINAL.pdf",
      year: "2025",
      note: "Read October 2026. Online international survey, April to June 2025; 12,887 respondents, 34% with study experience. Quote: \"79% Completed Participation in the Entire Study\"; 11% \"I stopped before my last scheduled study visit\". Quote: \"I was told I did not qualify to participate anymore (31%) Health reasons (19%) There was poor communication with the study center (13%) The location of the study center (13%) The overall time commitment was too much (12%)\". Quote: \"More virtual visits offered (15%) Reimbursement for my out-of-pocket expenses (14%) Additional information provided on how to manage side effects (13%) Being provided supportive services (13%)\" (base: those who stopped participation). Quote: \"29% of those in traditional studies reported never receiving updates while enrolled, compared to 22% in hybrid studies and 21% in remote studies.\" Self-selected sample.",
    },
    {
      id: "little-2012",
      title: "The prevention and treatment of missing data in clinical trials",
      publisher: "New England Journal of Medicine (Little RJ et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3771340/",
      year: "2012",
      note: "Read October 2026. Summary of the 2010 National Research Council report. Quote: \"A major source of missing data in clinical trials is participants who discontinue the assigned treatment because of adverse events, lack of tolerability, lack of efficacy, or simple inconvenience. Too many investigators incorrectly equate treatment discontinuation with study dropout\". Quote: \"Set acceptable target rates for missing data and monitor the progress of the trial with respect to these targets.\" Quote: \"Limit the burden and inconvenience of data collection on the participants, and make the study experience as positive as possible.\" Quote: \"Train investigators and study staff that keeping participants in the trial until the end is important, regardless of whether they continue to receive the assigned treatment.\"",
    },
    {
      id: "gillies-2021",
      title: "Strategies to improve retention in randomised trials",
      publisher: "Cochrane Database of Systematic Reviews (Gillies K et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8092429/",
      year: "2021",
      note: "Read October 2026. Quote: \"We identified 70 eligible papers that reported data from 81 retention trials.\" Quote: \"There were four comparisons presenting moderate-certainty evidence, three supporting retention (self-sampling kits, monetary reward together with reminder or prenotification and giving a pen at recruitment) and one reducing retention (inclusion of a diary with usual follow-up compared to usual follow-up alone).\" Quote: \"There were few evaluations of ways to improve participants returning to trial sites for trial follow-up. None of the comparisons are supported by high-certainty evidence.\" Quote: \"Most of the interventions we identified aimed to improve retention in the form of postal questionnaire response.\"",
    },
    {
      id: "teague-2018",
      title: "Retention strategies in longitudinal cohort studies: a systematic review and meta-analysis",
      publisher: "BMC Medical Research Methodology (Teague S et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6258319/",
      year: "2018",
      note: "Read October 2026. 143 longitudinal cohort studies. Quote: \"Meta-regressions indicated that studies using barrier-reduction strategies retained 10% more of their sample (95%CI [0.13 to 1.08]; p = .01); however, studies using follow-up/reminder strategies lost an additional 10% of their sample (95%CI [− 1.19 to − 0.21]; p = .02).\" Quote: \"Follow-up/reminder strategies, such as incentives and reminders, were associated with significantly poorer retention. This result was surprising\".",
    },
    {
      id: "fda-payment-2018",
      title: "Payment and Reimbursement to Research Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/payment-and-reimbursement-research-subjects",
      year: "2018",
      note: "Read October 2026. Information sheet issued January 2018. Quote: \"The IRB should review both the amount of payment and the proposed method and timing of disbursement to assure that neither are coercive or present undue influence\". Quote: \"Any credit for payment should accrue as the study progresses and not be contingent upon the subject completing the entire study.\" Quote: \"In contrast to payment for participation, FDA does not consider reimbursement for travel expenses to and from the clinical trial site and associated costs such as airfare, parking, and lodging to raise issues regarding undue influence.\"",
    },
    {
      id: "cochrane-sms-2013",
      title: "Mobile phone messaging reminders for attendance at healthcare appointments",
      publisher: "Cochrane Database of Systematic Reviews (Gurol-Urganci I et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6485985/",
      year: "2013",
      note: "Read October 2026. Eight RCTs, 6,615 participants. Quote: \"We found moderate quality evidence from seven studies (5841 participants) that mobile text message reminders improved the rate of attendance at healthcare appointments compared to no reminders (risk ratio (RR) 1.14 (95% confidence interval (CI) 1.03 to 1.26)). There was also moderate quality evidence from three studies (2509 participants) that mobile text message reminders had a similar impact to phone call reminders (RR 0.99 (95% CI 0.95 to 1.02).\" Quote: \"Overall, the attendance to appointment rates were 67.8% for the no reminders group, 78.6% for the mobile phone messaging reminders group and 80.3% for the phone call reminders group.\" Quote: \"Two studies reported that the costs per text message per attendance were respectively 55% and 65% lower than costs per phone call reminder.\"",
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
      id: "fda-dct-2024",
      title: "Conducting Clinical Trials With Decentralized Elements: Guidance for Industry, Investigators, and Other Interested Parties",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/conducting-clinical-trials-decentralized-elements",
      year: "2024",
      note: "Read October 2026. Final guidance, September 2024. Quote: \"a clinical trial that includes decentralized elements where trial-related activities occur at locations other than traditional clinical trial sites\". Quote: \"Decentralized elements allow trial-related activities to occur remotely at locations convenient for trial participants. Decentralized elements can include, among other things, telehealth visits with trial personnel, in-home visits with remote trial personnel, or visits with local health care providers.\"",
    },
    {
      id: "bond-site",
      title: "Bond Health: platform overview, FAQ and pricing",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
    },
    {
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, pricing and compliance status described by Bond Health, October 2026.",
    },
    {
      id: "cfr-50-25",
      title: "21 CFR 50.25 Elements of informed consent",
      publisher: "eCFR, US Government Publishing Office",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.25",
      year: "2026",
      note: "Read October 25, 2026. Quote (a)(8): \"A statement that participation is voluntary, that refusal to participate will involve no penalty or loss of benefits to which the subject is otherwise entitled, and that the subject may discontinue participation at any time without penalty or loss of benefits to which the subject is otherwise entitled.\"",
    },
  ],
  related: [
    {
      label: "Recruitment and retention plan template",
      href: "/templates/recruitment-plan",
      description: "Enrollment target, funnel, sources, outreach, retention and monitoring in one plan.",
    },
    {
      label: "Why patients miss screening visits",
      href: "/blog/screening-visit-no-shows",
      description: "No-show rates, reminders and what to do when a patient misses the visit.",
    },
    {
      label: "Book: scheduling and reminders",
      href: "/book",
      description: "Visits booked into the site's calendar, with reminders and transportation after enrollment.",
    },
    {
      label: "Engage: AI voice and SMS agents",
      href: "/engage",
      description: "The agents that recruit, pre-screen and keep supporting participants.",
    },
  ],
};

export default page;
