import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/screening-visit-no-shows",
  category: "blog",
  title: "Screening visit no-shows: why they happen and what works",
  description:
    "Why patients miss trial screening visits, what the evidence says about lead time, reminders and rides, and a no-show plan a research site can start this month.",
  keywords: [
    "clinical trial screening visit no-shows",
    "reduce no-shows clinical research",
    "why patients miss appointments",
    "appointment reminders attendance evidence",
    "screening visit attendance",
  ],
  eyebrow: "Blog",
  h1: "Why patients miss screening visits, and what measurably reduces no-shows",
  intro:
    "Patients miss screening visits for much the same reasons they miss any appointment: a long wait between booking and the visit, forgetting, worry about what will happen, and getting there. Reminders have the strongest evidence. A short wait before the visit and a same-day call after a miss are cheap and sensible, while offering free rides to everyone did not cut missed visits in a US trial that tested it.{{cite:cochrane-sms-2013,dantas-2018,chaiyachati-2018}} Most of this evidence comes from outpatient clinics rather than trials, and we say where it does.",
  summary: "What predicts a missed screening visit, which fixes have evidence behind them, and a six-step no-show plan for sites.",
  lastUpdated: "2026-10-09",
  blog: { date: "2026-10-09", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "how-often",
      heading: "How often do patients miss screening visits?",
      blocks: [
        {
          type: "p",
          text: "We could not find a published benchmark for screening-visit no-shows across trials, so sites have to borrow from outpatient care. A 2018 systematic review of 105 studies put the average no-show rate at about 23%, from 13.2% in Oceania to 43.0% in Africa.{{cite:dantas-2018}} Rates vary widely inside one country too: a rural Wisconsin health system saw 6.0% of its 1,260,083 appointments in 2021 missed.{{cite:shour-2023}}",
        },
        {
          type: "p",
          text: "Trial data, where it exists, can look worse. In an Australian diabetes prevention trial, men who passed a prescreening questionnaire but had not attended the screening assessment within four weeks rarely came later: before the team added reminders, only 12% of them attended within eight weeks.{{cite:bracken-2019}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "Start with your own baseline",
          text: "Count booked, attended, rescheduled and missed screening visits for each study and each referral source. Without that number, no fix can be judged.",
        },
      ],
    },
    {
      id: "why-patients-miss",
      heading: "Why do patients miss screening visits?",
      blocks: [
        {
          type: "p",
          text: "The same review found that the most commonly reported predictors of a no-show were a long lead time between booking and the visit and a history of missed appointments. Patients who were younger, had lower incomes, lived farther from the clinic or lacked private insurance also missed more often.{{cite:dantas-2018}}",
        },
        {
          type: "p",
          text: "Patients' own explanations add what the statistics miss. In interviews with 34 patients at an urban family medicine clinic, the reasons people gave for missing appointments without calling were emotions such as fear of procedures or bad news, feeling disrespected by the health system, and not understanding how scheduling worked. Logistics came up, but patients did not name them as the key reason.{{cite:lacy-2004}} A first research visit, with a consent form, blood draws and an unfamiliar building, invites exactly that kind of anxiety.",
        },
        {
          type: "p",
          text: "Transportation is a real barrier for a smaller group. In 2017, 5.8 million people in the US, 1.8% of the population, delayed medical care because they had no transportation. Hispanic people, people below the poverty line, Medicaid recipients and people with a functional limitation had higher odds of reporting it.{{cite:wolfe-2020}}",
        },
        {
          type: "table",
          caption: "Causes of missed visits and what a site controls",
          columns: ["Cause", "Evidence", "What a site can do"],
          rows: [
            ["Long wait between booking and visit", "A leading predictor in a review of 105 studies{{cite:dantas-2018}}", "Offer the earliest slot during the pre-screening call"],
            ["Forgetting", "Reminders raise attendance in randomized trials{{cite:cochrane-sms-2013}}", "Send more than one reminder"],
            ["Fear or uncertainty about the visit", "Named by patients in qualitative interviews{{cite:lacy-2004}}", "Explain what happens, how long it takes, and that they can still say no"],
            ["Transportation", "Delayed care for 1.8% of people in 2017{{cite:wolfe-2020}}", "Ask during pre-screening and arrange help for those who need it"],
            ["Earlier missed appointments", "A leading predictor in the same review{{cite:dantas-2018}}", "Call these patients instead of relying on a text"],
          ],
        },
      ],
    },
    {
      id: "reminders",
      heading: "Do reminders reduce no-shows?",
      blocks: [
        {
          type: "p",
          text: "Yes, in outpatient care. A Cochrane review found moderate-quality evidence that text reminders raised attendance compared with no reminder (risk ratio 1.14; 7 studies, 5,841 participants). Across the included studies, attendance was 67.8% with no reminder, 78.6% with text reminders and 80.3% with phone call reminders, and texts and calls performed about the same.{{cite:cochrane-sms-2013}}",
        },
        {
          type: "p",
          text: "A later meta-analysis of 21 randomized studies found that no-shows fell from 21% to 15% with electronic notifications, and that several notifications improved attendance more than one.{{cite:robotham-2016}}",
        },
        {
          type: "p",
          text: "The trial evidence points the same way. In the Australian diabetes prevention trial, one reminder to men who had passed prescreening but not attended raised eight-week attendance to 18% with a text and 23% with a phone call, against 12% before reminders. The difference between text and call was not statistically significant, and a phone reminder cost AU$6.21 against AU$0.53 for a text.{{cite:bracken-2019}}",
        },
      ],
    },
    {
      id: "lead-time",
      heading: "Does a shorter wait before the visit help?",
      blocks: [
        {
          type: "p",
          text: "Lead time is one of the few causes a site controls directly. Beyond the review's finding that long lead times predict no-shows, the Wisconsin system found that 7.7% of appointments booked more than 60 days ahead were missed, against 6.0% overall.{{cite:dantas-2018,shour-2023}} Neither study looked at research visits, but nothing about a screening visit makes a long wait less risky.",
        },
        {
          type: "p",
          text: "The practical rule is to book while the patient is still on the phone and offer the earliest slot that suits them. Bond's agents work this way: one call can pre-screen the patient and book the visit straight into the site's calendar.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "free-rides",
      heading: "Do free rides fix transportation no-shows?",
      blocks: [
        {
          type: "p",
          text: "Not when they are offered to everyone. In a 2016 to 2017 trial in West Philadelphia, 786 Medicaid patients due for primary care visits were allocated by appointment day to an offer of a free rideshare or to usual care. Of the 288 patients in the offer group who answered the reminder call, 85 used a ride, and missed-appointment rates were 36.5% and 36.7%, no different.{{cite:chaiyachati-2018}}",
        },
        {
          type: "p",
          text: "The authors suggested targeting people with stronger transportation needs. For a site, that means asking each patient during pre-screening how they will get to the visit, then arranging a ride or mileage reimbursement for those who say it is a problem.",
        },
      ],
    },
    {
      id: "after-a-miss",
      heading: "What should happen when a patient misses the visit?",
      blocks: [
        {
          type: "p",
          text: "Call the same day and rebook. In a multi-site pediatric sickle cell trial, a review found that 4 sites had no formal process for following up with caregivers who missed clinic appointments. After sites added follow-up calls, alongside other changes, the number identified for pre-screening rose from 54 to 164 and enrollment from 14 to 46 between the first six months and the next seven.{{cite:strong-2023}} The changes were bundled, so the calls cannot take all the credit.",
        },
        {
          type: "p",
          text: "Patients who have missed before deserve extra effort. A 2023 rapid review found moderate-certainty evidence that phone reminders aimed at patients a model rated high-risk reduced no-shows (median risk ratio 0.61, 3 trials), as did patient navigators (risk ratio 0.55, 1 trial).{{cite:oikonomidi-2023}} A site without a model can use the simplest predictor: a past missed visit.",
        },
      ],
    },
    {
      id: "no-show-plan",
      heading: "What does a no-show plan look like for a site?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Measure first",
              text: "For two weeks, log every booked screening visit with the date booked, the visit date, the outcome and the referral source.",
            },
            {
              title: "Book short",
              text: "Offer the earliest slot during the pre-screening call, and treat any visit booked weeks out as at risk.",
            },
            {
              title: "Remind more than once",
              text: "Send a text when the visit is booked and again shortly before it, and call patients who have missed before. Bond sends these reminders by text, voice or email.{{cite:bond-product}}",
            },
            {
              title: "Ask about the trip",
              text: "Ask how the patient will get there, and arrange help only for those who need it.",
            },
            {
              title: "Call every no-show",
              text: "Call the same day, ask what got in the way, and offer a new time.",
            },
            {
              title: "Review monthly",
              text: "Compare show rates by study, referral source and lead time, and change one thing at a time so you can tell what worked.",
            },
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one active study and see how pre-screening, booking and reminders can run as one workflow at your site.",
          secondaryLabel: "Read about Engage",
          secondaryHref: "/engage",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is a normal no-show rate for trial screening visits?",
      a: "We could not find a published benchmark across trials. In outpatient care, a 2018 review put the average around 23%, with wide variation by setting, so your own baseline is the number to beat.{{cite:dantas-2018}}",
    },
    {
      q: "Are text reminders as good as phone calls?",
      a: "Close. In the Cochrane review, attendance was 78.6% with texts and 80.3% with calls, a difference that was not statistically significant, and two included studies found texts cost 55% and 65% less per attended appointment.{{cite:cochrane-sms-2013}}",
    },
    {
      q: "Should we overbook screening slots?",
      a: "The evidence is thin. A 2023 review rated the effect of model-based overbooking as uncertain, and a screening visit usually needs a coordinator and an investigator who cannot absorb a double-booked slot.{{cite:oikonomidi-2023}}",
    },
  ],
  sources: [
    {
      id: "dantas-2018",
      title: "No-shows in appointment scheduling: a systematic literature review",
      publisher: "Health Policy (Dantas LF et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29482948/",
      year: "2018",
      note: "Read October 2026. 105 studies across specialties. Quote: \"The results indicate that the average no-show rate is of the order of 23%, being highest in the African continent (43.0%) and lowest in Oceania (13.2%).\" Quote: \"the most commonly reported significant determinants of no-show were high lead time and prior no-show history.\"",
    },
    {
      id: "shour-2023",
      title: "Development of an evidence-based model for predicting patient, provider, and appointment factors that influence no-shows in a rural healthcare system",
      publisher: "BMC Health Services Research (Shour AR et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10503036/",
      year: "2023",
      note: "Read October 2026. Marshfield Clinic Health System, Wisconsin, 2021: 1,260,083 appointments from 263,464 patients. Quote: \"The no-show rate was 6.0% in both the train and test datasets.\" Quote: \"Appointments scheduled further in advance (> 60 days of lead time) had a higher (7.7%) no-show rate.\"",
    },
    {
      id: "bracken-2019",
      title: "Telephone call reminders did not increase screening uptake more than SMS reminders: a recruitment study within a trial",
      publisher: "Journal of Clinical Epidemiology (Bracken K et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/31051248/",
      year: "2019",
      note: "Read October 2026. Australian diabetes prevention RCT; men aged 50 to 74 who were eligible on prescreening but had not attended screening within 4 weeks (N = 709). Quote: \"Attendance was 18% (62/354) in the SMS reminder group, and 23% (80/355) in the phone reminder group\". Quote: \"did not include the 8-week attendance rate before this evaluation, 12%.\" Quote: \"Phone reminders cost substantially more than SMS reminders (AU$6.21 vs. AU$0.53 per reminder).\"",
    },
    {
      id: "lacy-2004",
      title: "Why we don't come: patient perceptions on no-shows",
      publisher: "Annals of Family Medicine (Lacy NL et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1466756/",
      year: "2004",
      note: "Read October 2026. Semistructured interviews with 34 adult patients at an urban family practice. Quote: \"Participants identified 3 types of issues related to missing appointments without notifying the clinic staff: emotions, perceived disrespect, and not understanding the scheduling system. Although they discussed logistical issues of appointment keeping, participants did not identify these issues as key reasons for nonattendance.\"",
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
      id: "cochrane-sms-2013",
      title: "Mobile phone messaging reminders for attendance at healthcare appointments",
      publisher: "Cochrane Database of Systematic Reviews (Gurol-Urganci I et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6485985/",
      year: "2013",
      note: "Read October 2026. Quote: \"We found moderate quality evidence from seven studies (5841 participants) that mobile text message reminders improved the rate of attendance at healthcare appointments compared to no reminders (risk ratio (RR) 1.14 (95% confidence interval (CI) 1.03 to 1.26)).\" Quote: \"Overall, the attendance to appointment rates were 67.8% for the no reminders group, 78.6% for the mobile phone messaging reminders group and 80.3% for the phone call reminders group.\" Quote: \"Two studies reported that the costs per text message per attendance were respectively 55% and 65% lower than costs per phone call reminder.\"",
    },
    {
      id: "robotham-2016",
      title: "Using digital notifications to improve attendance in clinic: systematic review and meta-analysis",
      publisher: "BMJ Open (Robotham D et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5093388/",
      year: "2016",
      note: "Read October 2026. 21 randomized studies in the primary meta-analysis. Quote: \"Those receiving notifications were 25% less likely to 'no show' for appointments (risk ratio=.75, 15% vs 21%).\" Quote: \"Multiple notifications were significantly more effective at improving attendance than single notifications.\"",
    },
    {
      id: "chaiyachati-2018",
      title: "Association of Rideshare-Based Transportation Services and Missed Primary Care Appointments: A Clinical Trial",
      publisher: "JAMA Internal Medicine (Chaiyachati KH et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13371950/",
      year: "2018",
      note: "Read October 2026. 786 Medicaid beneficiaries in West Philadelphia, October 2016 to April 2017. Quote: \"Within the intervention arm, 85 among 288 (26.0%) participants who answered the phone call used ridesharing. The missed appointment rate was 36.5% (144 of 394) for the intervention arm and 36.7% (144 of 392) for the control arm (P = .96).\" Quote: \"Future studies trying to reduce missed appointments should explore alternative delivery models or targeting populations with stronger transportation needs.\"",
    },
    {
      id: "strong-2023",
      title: "Using the consolidated framework for implementation research to identify recruitment barriers and targeted strategies for a shared decision-making randomized clinical trial in pediatric sickle cell disease",
      publisher: "Clinical Trials (Strong H et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10330034/",
      year: "2023",
      note: "Read October 2026. Quote: \"A review of the data revealed that 4 sites did not have a formal process for following up with caregivers who missed appointments.\" Quote: \"After implementation of the recruitment strategies, the number of caregivers identified for pre-screening increased from 54 to 164, and enrollment more than tripled from 14 to 46 caregiver participants.\" Months 1 to 6 compared with months 7 to 13.",
    },
    {
      id: "oikonomidi-2023",
      title: "Predictive model-based interventions to reduce outpatient no-shows: a rapid systematic review",
      publisher: "Journal of the American Medical Informatics Association (Oikonomidi T et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9933067/",
      year: "2023",
      note: "Read October 2026. Quote: \"There was moderate certainty evidence that predictive model-based phone call reminders (3 RCTs, median RR 0.61, IQR 0.49, 0.68) and patient navigators reduced no-shows (1 RCT, RR 0.55, 95% confidence interval 0.46, 0.67). The effect of predictive model-based overbooking was uncertain.\"",
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
    { label: "Engage: outreach, booking and reminders", href: "/engage", description: "How Bond contacts patients, pre-screens them and books screening visits." },
    { label: "Patient outreach text message templates", href: "/templates/patient-outreach-sms-templates", description: "Booking, reminder and missed-visit texts ready for IRB review." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A call script that ends with a booked visit." },
    { label: "Pre-screening vs screening", href: "/guides/pre-screening-vs-screening", description: "What happens before consent and what counts as a screening visit." },
  ],
};

export default page;
