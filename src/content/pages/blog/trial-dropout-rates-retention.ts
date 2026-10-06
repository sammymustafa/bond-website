import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/trial-dropout-rates-retention",
  category: "blog",
  title: "Clinical trial dropout rates and what keeps people enrolled",
  description:
    "How often trial participants drop out, why missing data threatens results, and which retention strategies have evidence, from lower burden to staying in touch.",
  keywords: [
    "clinical trial dropout rate",
    "clinical trial retention strategies",
    "participant retention evidence",
    "loss to follow-up clinical trials",
    "why participants leave clinical trials",
  ],
  eyebrow: "Blog",
  h1: "Clinical trial dropout: how common it is and what keeps participants enrolled",
  intro:
    "Dropout varies enormously from trial to trial. In UK publicly funded trials, the median share of participants with primary outcome data was 89%, while short placebo-controlled antipsychotic trials lost about half their patients.{{cite:walters-2017,kemmler-2005}} No retention strategy has high-certainty evidence behind it. The most consistent signal is that lowering the burden of taking part keeps people in, and that retention should be planned before the first patient is enrolled.{{cite:gillies-2021,teague-2018}}",
  summary: "Published dropout rates, why missing data matters, why participants leave, and the retention steps with evidence behind them.",
  lastUpdated: "2026-12-09",
  blog: { date: "2026-12-09", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "how-common",
      heading: "How common is dropout in clinical trials?",
      blocks: [
        {
          type: "p",
          text: "It depends heavily on the condition, the design and the length of follow-up, so any single figure misleads. Four reference points show the range.",
        },
        {
          type: "table",
          caption: "Published measures of retention and dropout",
          columns: ["Setting", "Measure", "Figure"],
          rows: [
            ["151 UK trials funded by the NIHR HTA programme, 2004 to 2016", "Median share of participants with valid primary outcome data", "89% (IQR 79% to 97%){{cite:walters-2017}}"],
            ["235 trials in five top general medical journals, 2005 to 2007", "Median share lost to follow-up, where reported", "6% (IQR 2% to 14%){{cite:akl-2012}}"],
            ["31 placebo-controlled and active-control antipsychotic trials of 12 weeks or less", "Dropout in second-generation drug arms of placebo-controlled trials", "48.1%, and 60.2% on placebo{{cite:kemmler-2005}}"],
            ["CISCRP's 2025 survey of past participants", "Self-reported stop before the last scheduled visit", "11%, with 79% completing{{cite:ciscrp-2025}}"],
          ],
          note: "In the journal sample, 13% of trial reports did not say whether any participants were lost to follow-up.{{cite:akl-2012}}",
        },
        {
          type: "p",
          text: "Design shapes the number. In the antipsychotic meta-analysis, dropout in the active-drug arms was 48.1% in placebo-controlled trials against 28.3% in trials with an active comparator.{{cite:kemmler-2005}}",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why does dropout matter so much?",
      blocks: [
        {
          type: "p",
          text: "Because missing outcomes can change a trial's answer. In the journal sample, the authors recalculated each significant result under different assumptions about the patients who were lost. Under a worst-case assumption, 58% of trials would no longer have been significant; under more plausible assumptions, 0% to 33% would not.{{cite:akl-2012}}",
        },
        {
          type: "p",
          text: "A 2012 summary of the National Research Council's report on missing data makes two points every site should hear. First, too many investigators treat stopping the study drug as leaving the study: participants who stop treatment should, with their agreement, still be followed for outcomes. Second, prevention belongs in trial conduct: set acceptable target rates for missing data and monitor against them, limit the burden of data collection, and train staff that keeping participants in the trial until the end matters whether or not they stay on treatment.{{cite:little-2012}}",
        },
      ],
    },
    {
      id: "why-they-leave",
      heading: "Why do participants leave?",
      blocks: [
        {
          type: "p",
          text: "Some exits are built into the protocol and some are not. Among CISCRP's 2025 respondents who stopped early, 31% said they were told they no longer qualified and 19% cited health reasons. The next answers are ones a site can influence: poor communication with the study center (13%), its location (13%) and the overall time commitment (12%).{{cite:ciscrp-2025}}",
        },
        {
          type: "p",
          text: "Communication tends to thin out once a participant is enrolled. In the same survey, 29% of participants in traditional site-based studies said they never received updates while enrolled, against 22% in hybrid and 21% in remote studies.{{cite:ciscrp-2025}} Treatment experience matters too: adverse events, poor tolerability, lack of benefit and plain inconvenience are common reasons participants stop the assigned treatment.{{cite:little-2012}}",
        },
      ],
    },
    {
      id: "what-works",
      heading: "Which retention strategies have evidence behind them?",
      blocks: [
        {
          type: "p",
          text: "Fewer than you would hope. A 2021 Cochrane review of 81 trials testing retention strategies found none supported by high-certainty evidence. Three had moderate-certainty evidence of helping: self-sampling kits, a monetary reward combined with a reminder or pre-notification, and giving a pen at recruitment. One, adding a diary to usual follow-up, made retention worse. Most strategies targeted postal questionnaires, and few tested ways to get participants back to the site.{{cite:gillies-2021}}",
        },
        {
          type: "p",
          text: "Observational evidence from 143 longitudinal cohort studies favors reducing burden: studies that used barrier-reduction strategies, such as offering other ways to complete data collection, retained 10% more of their sample. The same analysis found that studies using follow-up and reminder strategies, a category that included incentives, lost an additional 10%, a result the authors called surprising.{{cite:teague-2018}} These are comparisons across studies, not randomized tests, and they come from cohorts rather than trials.",
        },
        {
          type: "p",
          text: "Participants point the same way. Asked what would have kept them in, those who stopped early most often chose more virtual visits (15%), reimbursement for out-of-pocket costs (14%), more information on managing side effects (13%) and supportive services (13%).{{cite:ciscrp-2025}}",
        },
      ],
    },
    {
      id: "sponsor-questions",
      heading: "What should a sponsor ask a site about retention?",
      blocks: [
        {
          type: "p",
          text: "Feasibility questionnaires dwell on how many patients a site can find. Retention deserves the same questions, asked before the site is selected, because losing a randomized participant undoes the work of recruiting them. Our guide to [how sponsors choose sites](/guides/how-sponsors-choose-sites) covers the wider selection process.",
        },
        {
          type: "checklist",
          items: [
            "What share of participants completed the primary endpoint visit in your last comparable study?",
            "How do you remind participants before each visit, and who calls when a visit is missed?",
            "What travel help can you arrange, and how quickly is it paid?",
            "Who can a participant reach after hours with a question or a side effect?",
            "How do you keep following participants who stop the study drug?",
            "Do you record a reason for every missed visit and every withdrawal?",
          ],
        },
      ],
    },
    {
      id: "site-plan",
      heading: "What can a site do to keep participants enrolled?",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Set a retention target at start-up", text: "Agree with the sponsor on an acceptable rate of missing data for each key visit, and monitor progress against it, as the National Research Council report recommends.{{cite:little-2012}}" },
            { title: "Cut the burden of each visit", text: "Shorten waits, combine procedures, solve travel before it becomes a missed visit, and ask the sponsor which visits can be remote." },
            { title: "Stay in touch between visits", text: "Send short updates and a named contact, so that silence never becomes the reason someone drifts away." },
            { title: "Check in on side effects", text: "Call after dose changes and early visits, and route concerns to the study team the same day." },
            { title: "Treat a missed visit as an early warning", text: "Call the same day, log the reason, and rebook while the participant is still engaged." },
            { title: "Keep following people who stop treatment", text: "Explain at consent that follow-up continues if the study drug stops, and ask again at the time." },
          ],
        },
        {
          type: "p",
          text: "Bond's agents take on several of these steps after enrollment: they send visit reminders, book transportation, run side-effect check-ins and flag participants at risk of dropping out, so coordinators can step in early.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how reminders, check-ins and dropout-risk flags work for an enrolled participant.",
          secondaryLabel: "For sponsors",
          secondaryHref: "/for/sponsors",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What dropout rate should a sponsor plan for?",
      a: "Use completed trials in the same condition, design and follow-up length. General figures range too widely to plan on: a median retention of 89% in UK publicly funded trials, against dropout of about half in short placebo-controlled antipsychotic trials.{{cite:walters-2017,kemmler-2005}}",
    },
    {
      q: "Is stopping the study drug the same as dropping out?",
      a: "No. A participant who stops the assigned treatment can often keep attending visits, with their agreement, so their outcomes are recorded, and the National Research Council report warns against treating the two as the same.{{cite:little-2012}}",
    },
    {
      q: "Do payments improve retention?",
      a: "There is moderate-certainty evidence that a monetary reward with a reminder or pre-notification helps, mostly for questionnaire return.{{cite:gillies-2021}} FDA says payment should accrue as the study progresses and not depend on completing the whole study, and the IRB reviews the amount and schedule.{{cite:fda-payment-2018}}",
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
      id: "akl-2012",
      title: "Potential impact on estimated treatment effects of information lost to follow-up in randomised controlled trials (LOST-IT): systematic review",
      publisher: "BMJ (Akl EA et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/22611167/",
      year: "2012",
      note: "Read October 2026. Trials in five top general medical journals, 2005 to 2007, reporting a significant binary primary outcome. Quote: \"Of the 235 eligible reports identified, 31 (13%) did not report whether or not loss to follow-up occurred. In reports that did give the relevant information, the median percentage of participants lost to follow-up was 6% (interquartile range 2-14%).\" Quote: \"58% if we assumed a worst case scenario\". Quote: \"Under more plausible assumptions ... results of 0% to 33% trials were no longer significant.\"",
    },
    {
      id: "kemmler-2005",
      title: "Dropout rates in placebo-controlled and active-control clinical trials of antipsychotic drugs: a meta-analysis",
      publisher: "Archives of General Psychiatry (Kemmler G et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/16330718/",
      year: "2005",
      note: "Read October 2026. 31 trials, 10,058 subjects, schizophrenia or schizoaffective disorder, 12 weeks or less. Quote: \"Weighted mean dropout rates in the active treatment arms were significantly higher in placebo-controlled trials (PCTs) than in active-control trials: 48.1% (PCTs) vs 28.3% (active-control trials) for second-generation antipsychotics\". Quote: \"Within PCTs, attrition rates were significantly higher in the placebo arms than with second-generation antipsychotics (60.2% vs 48.1%\".",
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
      note: "Read October 2026. Quote: \"We identified 70 eligible papers that reported data from 81 retention trials.\" Quote: \"There were four comparisons presenting moderate-certainty evidence, three supporting retention (self-sampling kits, monetary reward together with reminder or prenotification and giving a pen at recruitment) and one reducing retention (inclusion of a diary with usual follow-up compared to usual follow-up alone).\" Quote: \"There were few evaluations of ways to improve participants returning to trial sites for trial follow-up. None of the comparisons are supported by high-certainty evidence.\"",
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
      note: "Read October 2026. Information sheet issued January 2018. Quote: \"The IRB should review both the amount of payment and the proposed method and timing of disbursement to assure that neither are coercive or present undue influence\". Quote: \"Any credit for payment should accrue as the study progresses and not be contingent upon the subject completing the entire study.\"",
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
    { label: "Bond for CROs", href: "/for/cros", description: "Keeping enrollment and retention on plan across a study." },
    { label: "Last patient in", href: "/glossary/last-patient-in", description: "The milestone retention problems can push back." },
  ],
};

export default page;
