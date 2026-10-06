import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/why-trial-leads-never-book",
  category: "blog",
  title: "Why most clinical trial leads never reach a screening visit",
  description:
    "Trial leads leak at first contact, pre-screen and booking. What published funnels show at each step, why calls go unanswered, and how sites can close the gaps.",
  keywords: [
    "clinical trial recruitment funnel",
    "clinical trial leads not converting",
    "patient recruitment lead follow-up",
    "trial referrals never contacted",
    "recruitment funnel leakage",
  ],
  eyebrow: "Blog",
  h1: "Why most clinical trial leads never reach a screening visit: where the funnel leaks",
  intro:
    "Most leads are lost before anyone judges their eligibility: they are never reached, reached too late, or reached but never booked. Few published studies report this stage, and those that do show large losses at first contact. Of 6,881 people who applied for Alzheimer's trials through online ads at one research site network in 2023, only 46% ever spoke with a recruiter.{{cite:starling-2025}}",
  summary: "Where trial leads drop out between the first inquiry and the screening visit, with the published numbers and a fix for each step.",
  lastUpdated: "2026-11-09",
  blog: { date: "2026-11-09", author: "Rishabh Goel", readingMinutes: 6 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "where-it-leaks",
      heading: "Where does the recruitment funnel leak?",
      blocks: [
        {
          type: "p",
          text: "Think of the path in stages: a lead arrives, someone reaches them, they pass a pre-screen, they book, they show up, they consent and they are randomized. The SEAR framework, built from screening logs in eight UK trials, uses four broad stages: screened, eligible, approached and randomized. Only three of those eight trials systematically recorded why individual patients did not enroll.{{cite:sear-2018}}",
        },
        {
          type: "table",
          caption: "Where leads are lost before randomization",
          columns: ["Stage", "How leads are lost", "Published signal"],
          rows: [
            ["Lead to first contact", "Never called back, called late, or never answers", "46% of ad applicants ever reached a recruiter at one site network{{cite:starling-2025}}"],
            ["Contact to pre-screen pass", "Ineligible, or loses interest after hearing the details", "Online recruits converted to enrollment less often than offline recruits in 9 of 13 studies{{cite:brogger-2020}}"],
            ["Pass to booked visit", "No slot offered on the call; the patient promises to call back", "Rarely logged: 3 of 8 trials recorded reasons for non-enrollment{{cite:sear-2018}}"],
            ["Booked to attended", "No-show, often after a long wait", "Outpatient no-shows average about 23%{{cite:dantas-2018}}"],
          ],
        },
        {
          type: "p",
          text: "Oncology offers the most complete picture of a clinic-based pathway. Across 13 studies of 8,883 patients, a trial was unavailable at the patient's institution 55.6% of the time, 21.5% of patients were ineligible for an available trial, 14.8% did not enroll and 8.1% enrolled.{{cite:unger-2019}} That pathway starts in the clinic rather than with an ad, but it shows how quickly small losses at each step compound.",
        },
      ],
    },
    {
      id: "never-contacted",
      heading: "How many leads are never contacted?",
      blocks: [
        {
          type: "p",
          text: "Often nobody knows. A sponsor's 2016 Facebook campaign for a Phase 1 trial in Michigan produced 621 inquiries, and the trial filled its 45 places. Yet the sponsor could not say how many of the 621 were ever contacted for prescreening, because the CRO that handled follow-up did not share its data, and the sponsor adjusted ad spend to the CRO's capacity to follow up on inquiries in a timely manner.{{cite:cowie-2018}}",
        },
        {
          type: "p",
          text: "Where someone does count, the losses are large and speed matters. A research site network, Adams Clinical, analyzed 6,881 people who applied for Alzheimer's trials through Facebook and Google ads in 2023. Most got a first call within 72 hours, yet only 46% ever spoke with a recruiter. Longer delays before the first call lowered the chance of reaching the applicant: calls placed within 24 hours succeeded 47.9% of the time, against 42.7% at 24 to 48 hours and 39.4% at 48 to 72 hours.{{cite:starling-2025}} The data come from a conference abstract, not a full paper.",
        },
        {
          type: "p",
          text: "Inquiries to sites go unanswered too. Between September 2021 and June 2024, a patient trial-matching service contacted trial sites on behalf of 133 cancer patients. Using the contact details on ClinicalTrials.gov, 35% got a response; adding LinkedIn and other channels raised that to 47%. Of 26 patients who received accurate next steps, 7 had been successfully referred at the time of writing.{{cite:dia-2024}} The sample is small and comes from one company's work, written up with Tufts CSDD, but the pattern is familiar to anyone who has sent a referral and waited.",
        },
      ],
    },
    {
      id: "why-no-answer",
      heading: "Why don't leads answer the phone?",
      blocks: [
        {
          type: "p",
          text: "Partly because people screen calls. In a Pew Research Center survey of 10,211 US adults in July 2020, 80% said they generally do not answer cellphone calls from unknown numbers: 67% let the call ring through and check any voicemail, while 14% ignore the voicemail too.{{cite:pew-2020}}",
        },
        {
          type: "p",
          text: "So a first call from an unfamiliar number will usually go unanswered. Leave a short voicemail naming the site, send a text that says who is calling and why, and try again at other times. The Kaiser Permanente trial made up to five calls over two weeks, on different days and at different times of day, before classing a patient as a passive decliner.{{cite:kp-2025}}",
        },
        {
          type: "p",
          text: "Language is a leak of its own. In that trial, 25% of the patients sent outreach preferred Spanish, against 17% of those reached by phone and 10% of those who consented, even though every recruiter was bilingual in English and Spanish.{{cite:kp-2025}} Bond's voice and text agents contact every new ad lead immediately, keep following up with every lead who has not responded, and speak with patients in their own language.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "follow-up-works",
      heading: "Does following up with non-responders work?",
      blocks: [
        {
          type: "p",
          text: "Yes, and the evidence is unusually strong for recruitment research. The 2026 update of the Cochrane review of recruitment strategies, covering 91 studies, found high-certainty evidence for only five strategies. One was a telephone reminder to people who had not responded to a postal invitation, which raised recruitment by 6 percentage points (2 studies, 1,450 participants) in trials where underlying recruitment was low.{{cite:cochrane-recruit-2026}}",
        },
        {
          type: "p",
          text: "Follow-up helps after a pre-screen as well. In an Australian diabetes prevention trial, eight-week attendance at screening among men who had passed a prescreen but not come in was 12% before reminders, and 18% after a single text or 23% after a single call.{{cite:bracken-2019}}",
        },
      ],
    },
    {
      id: "online-leads",
      heading: "Why do online leads convert worse than clinic referrals?",
      blocks: [
        {
          type: "p",
          text: "Because online recruitment is fast and cheap per enrollee but brings in more people who will not qualify. A 2020 meta-analysis found online methods recruited about four times as many patients per active day of recruitment (incidence rate ratio 4.17, 7 studies) and cost less per enrollee (US$72 against US$199). But in 9 of 13 studies, offline recruits converted from screening to enrollment better, a risk ratio of 0.8 for online recruits.{{cite:brogger-2020}} Several of the authors worked for an online recruitment company, which is worth knowing when reading the speed and cost figures.",
        },
        {
          type: "p",
          text: "The practical reading: an ad lead is a lower-certainty lead. It needs a fast first contact and a real pre-screen before anyone spends a coordinator's time on a screening visit. Our [comparison with media-only recruitment](/compare/bond-vs-media-recruitment) looks at what happens after the click.",
        },
      ],
    },
    {
      id: "after-yes",
      heading: "Where are leads lost after they agree to a visit?",
      blocks: [
        {
          type: "p",
          text: "Between saying yes and showing up. A patient who promises to call back and book often does not, and we could not find a trial study that measured this step, which says something about how rarely it is logged. Once a visit is booked, long waits and a history of missed appointments are the most commonly reported predictors of a no-show in outpatient care.{{cite:dantas-2018}}",
        },
        {
          type: "p",
          text: "The fix is to book before the call ends. Bond's agents can pre-screen a patient and book the visit in the same call, straight into the site's calendar, then send reminders by text, voice or email.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "measure-and-fix",
      heading: "How should a site measure and fix its funnel?",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Log every lead with a timestamp", text: "Record the source, the time it arrived, each contact attempt and its outcome." },
            { title: "Measure time to first attempt", text: "Track the median time from a lead arriving to the first call or text, including evenings and weekends." },
            { title: "Set an attempt policy", text: "Decide how many attempts, over how long, by which channels, with which voicemail and text wording, and put it in the IRB submission. Our [pre-screening call script](/templates/pre-screening-call-script) is a starting point." },
            { title: "Book on the call", text: "Offer the earliest open slot before hanging up, rather than asking the patient to call back." },
            { title: "Record a reason for every exit", text: "Not reached, ineligible on a named criterion, declined, or no-show, as the SEAR framework encourages.{{cite:sear-2018}}" },
            { title: "Review weekly by source", text: "Compare contact, booking and show rates for ad, EHR and physician-referral leads, and fix the step with the biggest drop first." },
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring the lead counts from one active study and we will map where your funnel loses patients.",
          secondaryLabel: "For research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "How fast should a site contact a new lead?",
      a: "Within a day if you can. In the Alzheimer's ad-lead analysis, the share of applicants eventually reached fell as the delay before the first call grew, from 47.9% for calls placed within 24 hours to 39.4% at 48 to 72 hours.{{cite:starling-2025}} It is one conference abstract from one network, so track your own time to first attempt and contact rate as well.",
    },
    {
      q: "How many call attempts are reasonable?",
      a: "Set a limit and include it in the IRB submission. One Kaiser Permanente trial allowed up to five calls over two weeks, on different days and at different times, and left no more than five voicemails.{{cite:kp-2025}}",
    },
    {
      q: "Is a lead the same as a referral?",
      a: "Not quite. A lead is anyone who raised a hand, such as an ad response or a web form. A referral usually comes from a clinician who already knows the patient's history. Track them as separate sources, because they convert differently.",
    },
  ],
  sources: [
    {
      id: "kp-2025",
      title: "Sociodemographic characteristics of patients throughout the recruitment process into a randomized, controlled behavioral trial",
      publisher: "Trials (Young DR et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12625122/",
      year: "2025",
      note: "Read October 2026. Kaiser Permanente Southern California, July 2020 to September 2023. The 36% share is computed from the reported counts. Quote: \"A total of 11,152 patients received either an email (89.5%) or letter (10.5%) informing them of potential eligibility (pre-diabetes: 66%; female: 57%; Hispanic: 65%; Spanish-language preference: 25%\". Quote: \"Recruiters contacted 4033 patients by phone\" and those contacted were less likely \"to have a Spanish-language preference (17%)\". Quote: \"patients who consented (N = 721) ... less likely to prefer Spanish language (10%)\". Quote: \"Four hundred fifty-one were randomized\". Quote: \"Patients received up to 5 calls over a 2-week period across different days of the week and times of day, leaving no more than 5 voice mails.\" Quote: \"Recruiters were bilingual and bicultural in English and Spanish\". Quote: \"If the patient was not able to be reached after these attempts, they were classified as a passive decliner.\"",
    },
    {
      id: "starling-2025",
      title: "Importance of Speed of First Attempted Contact in Alzheimer's Trial Participation",
      publisher: "Alzheimer's & Dementia (Starling S et al., Adams Clinical), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11714075/",
      year: "2025",
      note: "Read October 2026. Conference abstract (Alzheimer's & Dementia 2024;20 Suppl 6), published January 2025; recruitment via Facebook and Google ads. Quote: \"From January to December 2023, 6881 individuals applied to participate in AD trials through online advertisements. Time to first attempted call ranged from under an hour to 227 days, with 95.4% occurring within 72 hours. 46% of applicants eventually communicated with a recruiter. Longer delays to first call decreased the likelihood of reaching the potential participant across all calls\". Quote: \"Calls made within 24 hours yielded a 47.9% success rate, compared to 42.7% for 24-48 hours, and 39.4% for 48-72 hours.\"",
    },
    {
      id: "sear-2018",
      title: "Development of a framework to improve the process of recruitment to randomised controlled trials (RCTs): the SEAR (Screened, Eligible, Approached, Randomised) framework",
      publisher: "Trials (Wilson C et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5775609/",
      year: "2018",
      note: "Read October 2026. Quote: \"The eight trials recorded basic information about patients screened for trial participation and randomisation outcome. Three trials systematically recorded reasons why an individual was not enrolled in the trial\". Quote: \"SEAR - Screening, to identify potentially eligible trial participants; Eligibility, assessed against the trial protocol inclusion/exclusion criteria; Approach, the provision of oral and written information and invitation to participate in the trial, and Randomised or not\".",
    },
    {
      id: "brogger-2020",
      title: "Online Patient Recruitment in Clinical Trials: Systematic Review and Meta-Analysis",
      publisher: "Journal of Medical Internet Research (Brøgger-Mikkelsen M et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7673977/",
      year: "2020",
      note: "Read October 2026. 61 studies reviewed, 23 in the meta-analysis. Three authors list Studies&Me A/S, LEO Innovation Lab, as an affiliation. Quote: \"100% (7/7) of the studies included had a better online recruitment rate compared with offline recruitment (incidence rate ratio [IRR] 4.17, P=.04).\" Quote: \"online recruitment had a significantly lower cost per enrollee compared with offline recruitment (US $72 vs US $199, P=.04). Finally, we found that 69% (9/13) of studies had significantly better offline conversion rates compared with online conversion rates (risk ratio 0.8, P=.02).\"",
    },
    {
      id: "dantas-2018",
      title: "No-shows in appointment scheduling: a systematic literature review",
      publisher: "Health Policy (Dantas LF et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29482948/",
      year: "2018",
      note: "Read October 2026. Quote: \"The results indicate that the average no-show rate is of the order of 23%\". Quote: \"the most commonly reported significant determinants of no-show were high lead time and prior no-show history.\"",
    },
    {
      id: "unger-2019",
      title: "Systematic Review and Meta-Analysis of the Magnitude of Structural, Clinical, and Physician and Patient Barriers to Cancer Clinical Trial Participation",
      publisher: "Journal of the National Cancer Institute (Unger JM et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6410951/",
      year: "2019",
      note: "Read October 2026. Quote: \"We identified 13 studies (nine in academic and four in community settings) with 8883 patients. A trial was unavailable for patients at their institution 55.6% of the time (95% confidence interval [CI] = 43.7% to 67.3%). Further, 21.5% (95% CI = 10.9% to 34.6%) of patients were ineligible for an available trial, 14.8% (95% CI = 9.0% to 21.7%) did not enroll, and 8.1% (95% CI = 6.3% to 10.0%) enrolled.\"",
    },
    {
      id: "cowie-2018",
      title: "The Use of Facebook Advertising to Recruit Healthy Elderly People for a Clinical Trial: Baseline Metrics",
      publisher: "JMIR Research Protocols (Cowie JM, Gurney ME), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5803529/",
      year: "2018",
      note: "Read October 2026. Phase 1 trial at one site in Michigan; Facebook campaign ran about 8 weeks from late August 2016. Quote: \"A total of 621 people responded to a Facebook advertising campaign by completing an online form or telephoning the CRO, and the clinical trial was fully enrolled at 45 subjects\". Quote: \"advertising placements and expenditures varied relative to the CRO's capacity to follow up on inquiries in a timely manner.\" Quote: \"specific recruitment data tracked by the CRO was not shared with the sponsor. In this study, the following are not known: ... how many of the 621 responses attributed to the Facebook campaign were contacted for prescreening\".",
    },
    {
      id: "dia-2024",
      title: "Documenting the \"Last Mile\" Leak in the Patient Recruitment Pipeline",
      publisher: "DIA Global Forum (Ralic D, Monreal B, Vieyra K of Ancora.ai; Ford RM, Getz K of Tufts CSDD)",
      url: "https://globalforum.diaglobal.org/issue/september-2024/documenting-the-last-mile-leak-in-the-patient-recruitment-pipeline/",
      year: "2024",
      note: "Read October 2026. Data from Ancora.ai referral activity, September 2021 to June 2024. Quote: \"Out of the 133 cancer patients that Ancora.ai supported, only 46 received a response when using contact information provided on ClinicalTrials.gov, yielding a 35% response rate. When Ancora.ai reached out to clinical trial personnel via LinkedIn and other channels in addition to ClinicalTrials.gov, the response rate improved to 47%\". Quote: \"Ultimately, among these 26 patients, 9 decided not to proceed, 3 failed the study pre-screen, 7 are in progress, and 7 were successfully referred.\"",
    },
    {
      id: "pew-2020",
      title: "Most Americans don't answer cellphone calls from unknown numbers",
      publisher: "Pew Research Center",
      url: "https://www.pewresearch.org/short-reads/2020/12/14/most-americans-dont-answer-cellphone-calls-from-unknown-numbers/",
      year: "2020",
      note: "Read October 2026. Survey of 10,211 US adults, July 13 to 19, 2020. Quote: \"Eight-in-ten Americans say they don't generally answer their cellphone when an unknown number calls\". Quote: \"The majority of Americans (67%) say their general practice is to not answer the phone when an incoming call is from an unknown number but to check a voicemail if one is left.\" Quote: \"The share of Americans who say they generally ignore any voicemail left after not answering a call is relatively low (14%)\".",
    },
    {
      id: "cochrane-recruit-2026",
      title: "Strategies to improve recruitment to randomised trials",
      publisher: "Cochrane Database of Systematic Reviews (Parker A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13576036/",
      year: "2026",
      note: "Read October 2026. Update published September 2026; searches to February 2023. Quote: \"We identified 91 eligible studies (53 new to this update)\". Quote: \"Only five strategies were supported by high-certainty evidence according to GRADE criteria\". Quote: \"Telephone reminders to people who did not respond to an initial postal invitation boosted recruitment by 6% (95% CI 3% to 9%; 2 studies, 1450 participants), in trials with low underlying recruitment (we are less certain for trials with over 10% recruitment).\"",
    },
    {
      id: "bracken-2019",
      title: "Telephone call reminders did not increase screening uptake more than SMS reminders: a recruitment study within a trial",
      publisher: "Journal of Clinical Epidemiology (Bracken K et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/31051248/",
      year: "2019",
      note: "Read October 2026. Quote: \"Attendance was 18% (62/354) in the SMS reminder group, and 23% (80/355) in the phone reminder group\". Quote: \"did not include the 8-week attendance rate before this evaluation, 12%.\"",
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
    { label: "Engage: outreach, booking and reminders", href: "/engage", description: "How Bond contacts every lead, pre-screens and books visits." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A script and attempt log for the first call." },
    { label: "Bond vs media-only recruitment", href: "/compare/bond-vs-media-recruitment", description: "What happens to ad leads after the click." },
    { label: "Bond for research sites", href: "/for/research-sites", description: "How Bond fits a site's recruitment workflow." },
  ],
};

export default page;
