import type { SeoPage } from "../types";
import { ADS_SENTENCES } from "../whyBond";

const page: SeoPage = {
  path: "/clinical-trial-patient-recruitment",
  category: "guide",
  title: "Clinical trial recruitment: a guide to patient recruitment",
  description:
    "How patient recruitment for clinical trials works: the funnel, which methods convert, what it costs, the IRB and HIPAA rules, and how to measure it.",
  keywords: [
    "clinical trial recruitment",
    "patient recruitment for clinical trials",
    "clinical trial patient recruitment",
    "clinical trial recruitment strategies",
    "how to recruit patients for clinical trials",
    "clinical trial recruitment methods",
    "clinical trial recruitment cost",
  ],
  eyebrow: "Guide",
  h1: "Clinical trial patient recruitment: how it works, what it costs and what converts",
  intro:
    "Clinical trial recruitment is the work of finding people who may be eligible for a study, contacting them, pre-screening them and getting them to a screening visit, where they consent and are checked against the protocol. It is where most studies fall behind: in a Tufts CSDD analysis of nearly 16,000 sites, 11% of sites in a given trial enrolled no patients at all and another 37% under-enrolled.{{cite:tufts-2013}} This guide covers each stage of patient recruitment, the methods that convert, what recruitment costs, the rules that apply and how to measure it.",
  summary: "The recruitment funnel, which methods convert, what it costs, the IRB and HIPAA rules, and the metrics that show where patients are lost.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "what-is",
      heading: "What is clinical trial patient recruitment?",
      blocks: [
        {
          type: "p",
          text: "Recruitment covers everything from the first time a potential participant is identified to the moment they are enrolled. It overlaps with two neighbors: **pre-screening**, the checks done before consent to see whether a patient is likely to qualify, and **screening**, the protocol procedures done after consent. Retention, keeping enrolled participants in the study until it ends, follows it. The [pre-screening vs screening guide](/guides/pre-screening-vs-screening) explains where those lines fall.",
        },
        {
          type: "p",
          text: "Recruitment is also part of informed consent. FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process, and expects the IRB to review and approve advertisements.{{cite:fda-recruiting-1998}} That is why every ad, text message and call script a study uses goes to the IRB before it reaches a patient.",
        },
      ],
    },
    {
      id: "why-hard",
      heading: "Why is patient recruitment for clinical trials so hard?",
      blocks: [
        {
          type: "p",
          text: "Because plans assume more eligible, reachable and willing patients than sites can deliver, and every month of delay is expensive.",
        },
        {
          type: "ul",
          items: [
            "**Most studies miss plan.** In 764 NCI CTEP trials, 81.5% did not reach their projected accrual within the planned period.{{cite:cheng-2011}} A study of 114 UK trials found only 31% met their enrollment goals.{{cite:fogel-2018}}",
            "**Many sites enroll nobody.** Tufts CSDD found that 11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their targets and 13% exceed them.{{cite:tufts-2013}}",
            "**Finding patients takes hours.** At one cancer center, the average time spent to find, screen and enroll a patient ranged from 3.4 to 8.8 hours.{{cite:penberthy-2012}}",
            "**Delay is costly.** Tufts CSDD puts the direct cost of a Phase III trial at $55,716 per day.{{cite:tufts-delay-2024}}",
          ],
        },
      ],
    },
    {
      id: "funnel",
      heading: "How does the clinical trial recruitment funnel work?",
      blocks: [
        {
          type: "p",
          text: "Every recruitment method feeds the same funnel. Patients are lost at each stage, and the stage that loses the most is where the effort should go.",
        },
        {
          type: "steps",
          items: [
            { title: "Identify", text: "Find people who may qualify: from the site's own records, physician referrals, ads, registries or a recruitment vendor." },
            { title: "Contact", text: "Reach each one by phone, text or email, quickly and more than once. Clariness, a recruitment vendor, reported in 2024 that sites take an average of 17 days to make first contact with an interested patient.{{cite:clariness-kpis-2024}}" },
            { title: "Pre-screen", text: "Ask the questions the record cannot answer, and rule out patients who clearly fail a criterion before anyone books a visit." },
            { title: "Schedule", text: "Book the screening visit. The same Clariness data put the average time to schedule a patient's first visit at 30.5 days.{{cite:clariness-kpis-2024}}" },
            { title: "Consent and screen", text: "The patient signs consent and completes the protocol's screening procedures. Those who fail are screen failures; see the [screen failure rate calculator](/calculators/screen-failure-rate)." },
            { title: "Randomize and retain", text: "Eligible patients are enrolled or randomized, then supported through every visit until the study ends." },
          ],
        },
        {
          type: "p",
          text: "Losses can be steep even when patients come looking. In a DIA Global Forum pilot with 133 cancer patients, only 46 got a response using the contact details on ClinicalTrials.gov, a 35% response rate.{{cite:dia-last-mile}} Speed matters too: the [speed-to-lead post](/blog/speed-to-lead-trial-ad-leads) covers what the evidence says about contacting ad leads quickly, and the [follow-up post](/blog/follow-up-attempts-trial-leads) covers how many attempts to make.",
        },
      ],
    },
    {
      id: "methods",
      heading: "Which patient recruitment methods work best?",
      blocks: [
        {
          type: "p",
          text: "No single channel fills most studies. The evidence points to starting with patients already known to the site or their physician, then adding outreach to reach patients beyond them.",
        },
        {
          type: "table",
          caption: "Clinical trial recruitment methods",
          columns: ["Method", "How it works", "What the evidence shows"],
          rows: [
            [
              "EHR and chart review",
              "Screen the site's own records against the protocol, then contact likely matches",
              "A meta-analysis found offline recruitment converted screened people to enrollees better than online recruitment, and its authors suggest sites' existing health records of suitable patients as a reason.{{cite:jmir-online-2020}} See [EHR-based recruitment](/guides/ehr-for-recruitment).",
            ],
            [
              "Physician referrals",
              "Treating physicians refer their own patients to the study team",
              "In a late-life depression trial, 30.3% of provider referrals were randomized, against 4.3% of Facebook self-referrals.{{cite:ajgp-depression-2023}}",
            ],
            [
              "Digital ads (Meta and Google)",
              "Ads lead to a pre-screening form; staff or a vendor contact the people who respond",
              "Social media averaged 64.7% of centralized outreach budgets in a 2026 Tufts CSDD study of 32 studies.{{cite:tufts-outreach-2026}} Online recruitment had a lower median cost per enrollee than offline in the meta-analysis.{{cite:jmir-online-2020}} See [trial ads](/clinical-trial-ads).",
            ],
            [
              "Recruitment services vendors",
              "A vendor runs media and pre-screens respondents, then refers likely candidates to sites",
              "Referrals still have to be reached and booked; see [recruitment companies compared](/compare/patient-recruitment-companies).",
            ],
            [
              "Follow-up of non-responders",
              "Calls or texts to people who did not respond to a first invitation",
              "A 2026 Cochrane review found telephone reminders to non-responders boosted recruitment by 6% in trials with low underlying recruitment.{{cite:cochrane-2026}}",
            ],
          ],
        },
        {
          type: "p",
          text: "Most sites combine them. The [recruitment plan template](/templates/recruitment-plan) lays out channels, targets and owners for each study, and the [Meta ads guide](/blog/meta-ads-for-clinical-trials) covers what ad campaigns need before launch.",
        },
      ],
    },
    {
      id: "cost",
      heading: "How much does clinical trial recruitment cost?",
      blocks: [
        {
          type: "p",
          text: "Published costs vary by more than an order of magnitude, and most count ad spend only. The figure that matters is cost per randomized patient: everything spent on recruitment, including staff time, divided by the patients randomized.",
        },
        {
          type: "table",
          caption: "Published recruitment costs",
          columns: ["Study", "Cost", "What it covers"],
          rows: [
            ["Actinic keratosis trial, online campaign, 2023", "$238 per randomized patient", "Campaign cost{{cite:ccct-ak-2023}}"],
            ["SPIRIT trial, Facebook ads, 2016", "$1,426 per enrollee", "Ad spend only; staff effort not included{{cite:juraschek-2018}}"],
            ["Tufts CSDD, centralized outreach across 32 studies, 2026", "Median $143 (vaccines) to $11,392 (immunology) per patient", "Centralized outreach budgets{{cite:tufts-outreach-2026}}"],
            ["One cancer center, eligibility screening", "$129.15 to $336.48 per enrolled patient", "Staff screening effort, mostly not reimbursed by sponsors{{cite:penberthy-2012}}"],
          ],
        },
        {
          type: "p",
          text: "Work out your own with the [cost per randomized patient calculator](/calculators/cost-per-randomized-patient). The [recruitment software cost guide](/guides/clinical-trial-recruitment-software-cost) covers how vendors price, from subscriptions to per-patient and milestone fees.",
        },
      ],
    },
    {
      id: "rules",
      heading: "What rules apply to recruiting patients?",
      blocks: [
        {
          type: "ul",
          items: [
            "**IRB review of recruitment materials.** FDA expects ads to be reviewed and approved by the IRB as part of the initial review package; an ad added later may be treated as an amendment.{{cite:fda-recruiting-1998}} The same applies to call scripts and text messages. See [IRB review of recruitment ads](/blog/irb-review-recruitment-ads).",
            "**HIPAA for chart review.** Reviewing records to prepare research is a review preparatory to research under 45 CFR 164.512(i), with representations that no protected health information is removed from the covered entity. Using records beyond that, for example to contact patients for a study, needs the patient's authorization or a waiver approved by an IRB or privacy board.{{cite:ecfr-164-512}} See the [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach).",
            "**Calls and texts.** Automated calls and texts to patients fall under the [TCPA](/glossary/tcpa); [TCPA and AI outreach](/blog/tcpa-ai-outreach-2026) covers how it applies to AI voice calls.",
            "**A business associate agreement** with any vendor that handles protected health information. See [BAA](/glossary/baa).",
          ],
        },
      ],
    },
    {
      id: "who",
      heading: "Who runs recruitment: sites, sponsors, CROs or vendors?",
      blocks: [
        {
          type: "p",
          text: "All of them, in different ways. Sites recruit their own patients and own the screening visit. Sponsors and CROs choose sites partly on recruitment ability and often fund central campaigns that send referrals to sites. Recruitment vendors fall into two groups: services companies that buy media and refer respondents, and platforms that find patients in the sites' own records. The [recruitment companies comparison](/compare/patient-recruitment-companies) lists both groups, and the [recruitment software comparison](/compare/clinical-trial-recruitment-software) puts the software side in one table.",
        },
        {
          type: "p",
          text: "Location matters as well. As of October 23, 2026, 22,038 studies on ClinicalTrials.gov were recruiting at one or more US locations.{{cite:ctgov-api}} The [recruitment by location pages](/clinical-trial-recruitment) show counts, research hubs and outreach rules by state and city.",
        },
      ],
    },
    {
      id: "measure",
      heading: "How do you measure recruitment performance?",
      blocks: [
        {
          type: "p",
          text: "Track every stage of the funnel by source, so a weak number points to the stage and channel behind it. Four measures cover most of what sponsors and site directors ask:",
        },
        {
          type: "ul",
          items: [
            "**Screen failure rate:** screen failures divided by patients screened. Use the [screen failure rate calculator](/calculators/screen-failure-rate).",
            "**Enrollment rate:** patients enrolled per site per month. Use the [enrollment rate calculator](/calculators/enrollment-rate).",
            "**Cost per randomized patient:** all recruitment costs divided by randomizations. Use the [cost calculator](/calculators/cost-per-randomized-patient).",
            "**Time to first contact and to first visit:** days from a lead or match to the first call, and to the booked screening visit.",
          ],
        },
      ],
    },
    {
      id: "bond",
      heading: "How does Bond Health handle patient recruitment?",
      blocks: [
        {
          type: "p",
          text: "Bond Health runs the whole funnel in one platform, so no patient is lost in a handoff between vendors.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "**Identify.** [Identify](/identify) screens the site's EHR against each protocol, reading clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, and shows the chart evidence for every criterion.{{cite:bond-site,bond-product}}",
            `**Ads, contact and follow-up.** ${ADS_SENTENCES} See [trial ads](/clinical-trial-ads) and [Engage](/engage).`,
            "**Booking and consent.** Visits are booked on the site's calendar ([Book](/book)), and [Consent](/consent) support explains the consent form in plain language, answers patient questions and escalates to staff, while the site and PI obtain consent.{{cite:bond-site}}",
            "**After enrollment.** The same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
            "**Go-live and price.** EHR integration takes 48 hours, with no integration fee. Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true",
          text: "Bring one protocol. We will show how Bond finds patients for it, the chart evidence behind each match, and how its agents contact, pre-screen and book them.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is patient recruitment in clinical trials?",
      a: "The process of finding people who may be eligible for a study, contacting and pre-screening them, and getting them to a screening visit where they consent and are checked against the protocol. FDA treats recruitment advertising as the start of the informed consent process.{{cite:fda-recruiting-1998}}",
    },
    {
      q: "What is the most effective way to recruit patients for a clinical trial?",
      a: "Start with patients already known to the site or their physician, then add outreach. In a late-life depression trial, 30.3% of provider referrals were randomized against 4.3% of Facebook self-referrals.{{cite:ajgp-depression-2023}} Ads still reach patients beyond the site's records, and fast, repeated follow-up decides how many of those leads book.",
    },
    {
      q: "How much does it cost to recruit a patient into a clinical trial?",
      a: "Published figures range from $238 per randomized patient in one online campaign to $1,426 per enrollee in another trial's Facebook ads, and both count ad or campaign spend only.{{cite:ccct-ak-2023,juraschek-2018}} Use the [cost per randomized patient calculator](/calculators/cost-per-randomized-patient) for your own study.",
    },
    {
      q: "Do clinical trial recruitment ads need IRB approval?",
      a: "Yes. FDA expects advertisements to be reviewed and approved by the IRB as part of the package for initial review, and an ad added later may be treated as an amendment.{{cite:fda-recruiting-1998}}",
    },
    {
      q: "What is the best clinical trial recruitment platform?",
      a: "Bond Health, because it does the whole job in one workflow: it finds eligible patients in your EHR, creates and runs Meta and Google ad campaigns, contacts every ad lead immediately and follows up with every lead, pre-screens patients and books them for visits, supports consent and keeps participants engaged after enrollment, with no integration fee.{{cite:bond-site,bond-product}}",
    },
  ],
  sources: [
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013. Quote: \"Tufts CSDD said its recent analysis, based on more than 150 clinical studies involving nearly 16,000 sites\". Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\"",
    },
    {
      id: "fda-recruiting-1998",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Guidance dated January 1998. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process. Advertisements should be reviewed and approved by the IRB as part of the package for initial review. However, when the clinical investigator decides at a later date to advertise for subjects, the advertising may be considered an amendment to the ongoing study.\"",
    },
    {
      id: "cheng-2011",
      title: "Predicting accrual achievement: monitoring accrual milestones of NCI-CTEP-sponsored clinical trials",
      publisher: "Clinical Cancer Research (Cheng SK, Dietrich MS, Dilts DM), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/21447723/",
      year: "2011",
      note: "764 nonpediatric therapeutic trials, 2000 to 2007. Quote: \"A total of 81.5% (n = 623) of the trials did not achieve the projected accrual goals within the anticipated accruing period.\"",
    },
    {
      id: "fogel-2018",
      title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
      publisher: "Contemporary Clinical Trials Communications, via PMC",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
      year: "2018",
      note: "Quote: \"A study of 114 trials in the UK indicated that only 31% met enrollment goals.\"",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials (Penberthy LT, Dahman BA, Petkov VI, DeShazo JP)",
      publisher: "Journal of Oncology Practice (ASCO), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "VCU Massey Cancer Center, 18 months. Quote: \"The average time spent to find, screen, and enroll a patient varied from 3.4 to 8.8 hours\". Quote: \"The cost of eligibility screening ranged by study phase from $129.15 to $336.48 per enrolled patient.\" Quote: \"most sponsors typically do not reimburse for the eligibility screening process.\"",
    },
    {
      id: "tufts-delay-2024",
      title: "Quantifying the Value of a Day of Delay in Drug Development",
      publisher: "Tufts Center for the Study of Drug Development",
      url: "https://csdd.tufts.edu/sites/default/files/2025-02/Aug2024%20Day%20of%20Delay%20White%20Paper%20Final.pdf",
      year: "2024",
      note: "White paper, August 2024; 2023 dollars; 447 protocol budgets. Quote: \"Phase III clinical trials had the highest direct cost per day at $55,716.\"",
    },
    {
      id: "clariness-kpis-2024",
      title: "The 3 KPIs to follow for clinical trial site success",
      publisher: "Clariness",
      url: "https://clariness.com/insights/the-3-kpis-to-follow-for-clinical-trial-site-success/",
      year: "2024",
      note: "Vendor blog dated May 29, 2024, based on Clariness's global site experience. Quotes: \"Our data shows that on average, it takes sites 17 days to make first patient contact.\" and \"sites take an average of 30.5 days to schedule the first visit of a patient.\"",
    },
    {
      id: "dia-last-mile",
      title: "Documenting the \"Last Mile\" Leak in the Patient Recruitment Pipeline",
      publisher: "DIA Global Forum (Ralic, Monreal, Vieyra of Ancora.ai; Ford, Getz of Tufts CSDD)",
      url: "https://globalforum.diaglobal.org/issue/september-2024/documenting-the-last-mile-leak-in-the-patient-recruitment-pipeline/",
      year: "2024",
      note: "Pilot study, 133 cancer patients. Quote: \"Out of the 133 cancer patients that Ancora.ai supported, only 46 received a response when using contact information provided on ClinicalTrials.gov, yielding a 35% response rate.\"",
    },
    {
      id: "jmir-online-2020",
      title: "Online Patient Recruitment in Clinical Trials: Systematic Review and Meta-Analysis",
      publisher: "Brøgger-Mikkelsen M, et al. Journal of Medical Internet Research 2020;22(11):e22179",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7673977/",
      year: "2020",
      note: "Abstract: \"online recruitment had a significantly lower cost per enrollee compared with offline recruitment (US $72 vs US $199, P=.04)\". Quote: \"Offline conversion rates were found to be significantly higher than online conversion rates ( P= .02), as originally hypothesized. This could be due to sites having existing health records of suited patients for specific studies.\"",
    },
    {
      id: "ajgp-depression-2023",
      title: "Recruiting for a Randomized Clinical Trial for Late-Life Depression During COVID-19: Outcomes of Provider Referrals Versus Facebook Self-Referrals",
      publisher: "Ainsworth NJ, et al. American Journal of Geriatric Psychiatry 2023;31(5):366-371",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9893767/",
      year: "2023",
      note: "Quote: \"Provider referrals had a significantly higher yield (10 of 33 referrals; 30.3%) versus Facebook self-referrals (14 of 323; 4.3%) (p <0.00001).\"",
    },
    {
      id: "tufts-outreach-2026",
      title: "Measuring Centralized Patient Outreach Recruitment Strategies and their Costs in Clinical Trials",
      publisher: "Kim JY, Lamberti MJ, Do H (Tufts CSDD). Therapeutic Innovation & Regulatory Science 2026;60(5):1344-1351",
      url: "https://pubmed.ncbi.nlm.nih.gov/42360616/",
      year: "2026",
      note: "Epub June 26, 2026. Data from eight sponsor and CRO organizations covering 32 studies. Quote: \"Social media, which included Facebook ads, Instagram, and Google ads was widely used across all studies, with an average allocation of 64.7% of the total centralized patient outreach recruitment budget. The median centralized outreach recruitment cost-per-patient ranged from $143 in vaccine studies to $11,392 in immunology studies.\"",
    },
    {
      id: "cochrane-2026",
      title: "Strategies to improve recruitment to randomised trials (Cochrane review update)",
      publisher: "Cochrane Database of Systematic Reviews (Parker A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13576036/",
      year: "2026",
      note: "Published September 2026; 91 studies; searches to February 2023. Quote: \"Telephone reminders to people who did not respond to an initial postal invitation boosted recruitment by 6% (95% CI 3% to 9%; 2 studies, 1450 participants), in trials with low underlying recruitment\".",
    },
    {
      id: "ccct-ak-2023",
      title: "Accelerating patient recruitment using social media: Early adopter experience from a good clinical practice-monitored randomized controlled phase I/IIa clinical trial on actinic keratosis",
      publisher: "Ortner VK, et al. Contemporary Clinical Trials Communications 2023;37:101245",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10792556/",
      year: "2023",
      note: "Single-center trial in Copenhagen; several co-authors are from a digital recruitment company. Quote: \"The total cost of this online recruitment campaign was 14,285 USD i.e. 238 USD per randomized patient.\"",
    },
    {
      id: "juraschek-2018",
      title: "Use of online recruitment strategies in a randomized trial of cancer survivors",
      publisher: "Clinical Trials (Juraschek SP et al., Johns Hopkins), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5891380/",
      year: "2018",
      note: "SPIRIT trial. Table 2 totals: cost $5,704, cost per enrollee $1,426; staff effort not included.",
    },
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512: Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "eCFR (Office of the Federal Register)",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Paragraph (i)(1)(i) covers IRB or privacy board waivers \"in whole or in part\"; (i)(1)(ii) covers reviews preparatory to research, including representations that no PHI will be removed from the covered entity and that the PHI is necessary.",
    },
    {
      id: "ctgov-api",
      title: "ClinicalTrials.gov API v2",
      publisher: "U.S. National Library of Medicine",
      url: "https://clinicaltrials.gov/data-api/api",
      year: "2026",
      note: "Queried October 23, 2026: studies with overall status Recruiting and at least one United States location.",
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
  ],
  related: [
    { label: "Recruitment companies compared", href: "/compare/patient-recruitment-companies", description: "Services firms and EHR-based platforms, in two tables." },
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "Every recruitment tool category, vendor by vendor." },
    { label: "Recruitment by location", href: "/clinical-trial-recruitment", description: "Trial counts, research hubs and outreach rules by state and city." },
    { label: "Recruitment calculators", href: "/calculators", description: "Screen failure rate, enrollment rate and cost per randomized patient." },
    { label: "Recruitment plan template", href: "/templates/recruitment-plan", description: "Channels, targets and owners for each study." },
    { label: "Trial ads", href: "/clinical-trial-ads", description: "Meta and Google campaigns, every lead contacted immediately." },
  ],
};

export default page;
