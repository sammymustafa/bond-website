import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/vaccine-trial-recruitment",
  category: "blog",
  title: "Vaccine trial recruitment: speed, volunteers and cost data",
  description:
    "What large vaccine trials show about enrollment speed, volunteer registries, pre-screen exclusions and outreach cost per enrollee, with a plan sites can use.",
  keywords: [
    "vaccine trial recruitment",
    "healthy volunteer recruitment vaccine trial",
    "vaccine clinical trial enrollment speed",
    "cost per enrollee vaccine trial recruitment",
  ],
  eyebrow: "Blog",
  h1: "Recruiting for vaccine trials: what the data say about speed, volunteers and cost",
  intro:
    "Vaccine trials enroll mostly healthy people, often thousands at a time, on a calendar set by a virus season. The published record points to three things that decide whether a site keeps up: a volunteer pool that exists before the study opens, a first contact that catches the standard exclusions, and cost tracked by channel. Here is the evidence for each, and a plan a site can start before its next study.",
  summary: "Enrollment speed, volunteer registries, pre-screen exclusions and outreach cost data from published vaccine trials, with a site plan.",
  lastUpdated: "2026-12-21",
  blog: { date: "2026-12-21", author: "Rishabh Goel", readingMinutes: 6 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How Engage works", secondaryHref: "/engage" },
  sections: [
    {
      id: "how-fast",
      heading: "How fast do large vaccine trials enroll?",
      blocks: [
        {
          type: "p",
          text: "The COVID-19 trials set the pace, under conditions no site should plan around. Moderna's COVE trial randomized 30,420 adults at 99 US sites between July 27 and October 23, 2020.{{cite:baden-2021}} Pfizer and BioNTech screened 44,820 people and randomized 43,548 at 152 sites, 130 of them in the US, between July 27 and November 14, 2020.{{cite:polack-2020}}",
        },
        {
          type: "table",
          caption: "Enrollment in three large vaccine efficacy trials",
          columns: ["Trial", "Participants", "Sites", "Enrollment dates"],
          rows: [
            ["Moderna COVE (COVID-19)", "30,420 randomized{{cite:baden-2021}}", "99, all in the US", "July 27 to October 23, 2020"],
            ["Pfizer/BioNTech C4591001 (COVID-19)", "43,548 randomized of 44,820 screened{{cite:polack-2020}}", "152, of which 130 in the US", "July 27 to November 14, 2020"],
            ["Pfizer Study 1013 (RSV, adults 60 and older)", "35,971 enrolled{{cite:fda-renoir-2023}}", "240 in seven countries", "First participant August 31, 2021"],
          ],
          note: "The RSV trial's original protocol was dated July 7, 2021, and its primary objective was efficacy in the first RSV season.{{cite:fda-renoir-2023}}",
        },
        {
          type: "p",
          text: "Two lessons carry over to ordinary studies. A broad healthy-volunteer protocol can have very few screen failures: almost everyone Pfizer screened was randomized.{{cite:polack-2020}} And a respiratory vaccine study is tied to the calendar, because its efficacy readout comes from a specific season.{{cite:fda-renoir-2023}} A site that starts slowly cannot make up the weeks after the virus starts circulating.",
        },
      ],
    },
    {
      id: "volunteer-registry",
      heading: "What did the COVID-19 volunteer registry add?",
      blocks: [
        {
          type: "p",
          text: "The COVID-19 Prevention Network built a volunteer screening registry before most trials opened. It launched to the public on July 8, 2020, and collected 657,750 volunteers, half of them within the first 36 days. The median questionnaire took 5 minutes, and the completion rate was 95.3%.{{cite:abernethy-2025}}",
        },
        {
          type: "p",
          text: "From August 4, 2020, sites could query it, and 455 US sites accessed 168,015 volunteer records for six Phase 3 trials. Records could be checked out so that nearby sites did not compete for the same people. The authors estimate the registry accounted for up to 20% of enrollment in some trials; they did not publish an overall conversion rate.{{cite:abernethy-2025}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "A skewed pool can still feed a representative trial",
          text: "Registrants were 79.3% White and 3.2% Black. Yet about 80% of the people enrolled from the registry were Black, Indigenous or other people of color, against about 20% of the Moderna Phase 3 population overall.{{cite:abernethy-2025}} What mattered was which records sites pulled, not the average registrant.",
        },
      ],
    },
    {
      id: "pre-screen-exclusions",
      heading: "Which exclusions should the first contact catch?",
      blocks: [
        {
          type: "p",
          text: "Healthy-volunteer protocols are broad, so screen failures cluster on a short list of recent exposures and conditions. COVE's registry record gives typical examples.{{cite:ctgov-cove}}",
        },
        {
          type: "checklist",
          items: [
            "Any vaccine received or planned within 28 days before the first dose, seasonal flu vaccine excepted.{{cite:ctgov-cove}}",
            "An immunosuppressive or immunodeficient state, or systemic immunosuppressants for more than 14 days in the 6 months before dosing.",
            "Immunoglobulins or blood products within 3 months, or a blood donation of 450 mL or more within 28 days.",
            "Another interventional study within 28 days (Part A of the trial).",
            "Acute illness or fever in the 72 hours before screening or dosing; the record allows these participants to be rescheduled.",
          ],
        },
        {
          type: "p",
          text: "Windows differ by protocol. A University of Pittsburgh HPV vaccine trial excluded blood products or immunoglobulins within 90 days, other drug studies within 30 days and other vaccines within 8 days.{{cite:raviotta-2016}} Ask each question with its date: \"have you had a vaccine recently?\" does not settle a 28-day window. The [pre-screening call script](/templates/pre-screening-call-script) shows how to word dated questions.",
        },
      ],
    },
    {
      id: "outreach-cost",
      heading: "What does vaccine trial outreach cost per enrollee?",
      blocks: [
        {
          type: "p",
          text: "Published cost data is thin, and most of it counts ad spend or vendor budgets, not site staff time.",
        },
        {
          type: "table",
          caption: "Published recruitment cost and yield figures for vaccine studies",
          columns: ["Source", "Setting", "What it found"],
          rows: [
            ["Tufts CSDD, 2026", "Centralized outreach in 32 industry studies from 8 sponsors and CROs", "Median outreach cost per patient of $143 in vaccine studies, against $11,392 in immunology; social media averaged 64.7% of outreach budgets{{cite:kim-2026}}"],
            ["University of Pittsburgh HPV vaccine trial, 2010 to 2011", "220 men aged 18 to 25", "Facebook ads cost $4,820, reported as $110 per enrollee who first heard about the study on social media; print ads and fliers cost $61 per enrollee; 65 enrollees came from sources with no direct cost{{cite:raviotta-2016}}"],
            ["University of Pennsylvania, COVE recruitment, 2020", "Patient-portal messages sent up to 3 times", "5,614 people messaged, 301 responded, 115 were interested, 24 agreed to a screening visit and 9 enrolled{{cite:yuh-2022}}"],
          ],
          note: "Tufts figures are from the published abstract and cover sponsor-run outreach only. Pittsburgh costs exclude staff time.{{cite:kim-2026,raviotta-2016}}",
        },
        {
          type: "p",
          text: "Two points follow. Cost per head in vaccine studies is low next to patient trials, so the constraint is volume and speed, not price per lead.{{cite:kim-2026}} And one-way messages underperform. At Penn, minority patients disproportionately lacked portal access, and follow-up calls to non-responders and decliners surfaced reasons such as vaccine mistrust, health conditions and logistics.{{cite:yuh-2022}}",
        },
        {
          type: "p",
          text: "What worked in Pittsburgh was speed after the click: each person saw their eligibility result on the next web page, and eligible contacts were emailed to staff who called to schedule. Of 428 people who completed the screener, 311 were eligible and 220 enrolled.{{cite:raviotta-2016}}",
        },
      ],
    },
    {
      id: "representative-enrollment",
      heading: "How do you keep enrollment representative without stopping it?",
      blocks: [
        {
          type: "p",
          text: "In COVE, White enrollment at COVID-19 Prevention Network sites began to outpace enrollment of people of color within two weeks. Sites were told to slow White enrollment on September 11, 2020 and to halt it on September 30.{{cite:andrasik-2021}} The authors' recommendation is to set enrollment goals from the outset and reserve slots, rather than stop enrollment late. Moderna also adjusted site selection and enrollment processes to increase minority enrollment.{{cite:baden-2021}}",
        },
        {
          type: "p",
          text: "Federal law points the same way. FDORA requires sponsors of Phase 3 and other pivotal drug studies to submit diversity action plans with enrollment goals, but only for studies that begin enrolling 180 days after FDA publishes final guidance.{{cite:usc-355z}} As of October 2026, FDA's guidance page still lists the June 2024 draft, which covers drugs, biologics and devices.{{cite:fda-dap-2024}} Ask the sponsor what goals apply to your site. See [diversity action plans](/glossary/diversity-action-plan) for the basics.",
        },
      ],
    },
    {
      id: "site-plan",
      heading: "What should a site do before its next vaccine study opens?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Keep a consented volunteer list",
              text: "Ask past participants and interested callers for permission to recontact, and record age, conditions and vaccination history with dates. The COVID-19 registry showed a 5-minute form can be completed at scale.{{cite:abernethy-2025}}",
            },
            {
              title: "Turn exclusions into dated questions",
              text: "Recent vaccines, immunosuppressants, blood products, blood donation and other studies, each with the protocol's window.",
            },
            {
              title: "Answer every lead the same day",
              text: "Give an eligibility answer right away and route eligible people to someone who schedules, as the Pittsburgh team did.{{cite:raviotta-2016}} Call people who do not reply to a message.",
            },
            {
              title: "Track source and cost for every enrollee",
              text: "Record where each enrollee first heard about the study and what that channel cost, including staff time, which most published figures leave out.",
            },
            {
              title: "Set enrollment goals before the first visit",
              text: "Agree targets by age and population with the sponsor, and plan outreach to reach them from week one.",
            },
            {
              title: "Agree payment with the IRB early",
              text: "FDA treats payment as a recruitment incentive, not a benefit. Credit should accrue as the study progresses, travel reimbursement does not raise undue-influence concerns, and the amount and schedule go to the IRB at initial review.{{cite:fda-payment-2018}}",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's [Engage](/engage) stage creates and runs Meta and Google ad campaigns for each study. Its voice and text agents contact every new lead immediately, keep following up with leads who have not responded, pre-screen them and book visits into the site's calendar. Ad spend is not included in Bond's fee and comes from the site's own ad budget.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a vaccine protocol. We will show how its exclusions become pre-screening questions and how leads reach your calendar.",
          secondaryLabel: "How Engage works",
          secondaryHref: "/engage",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Are volunteer registries or ads better for vaccine trials?",
      a: "Use both and measure each. The COVID-19 registry accounted for up to 20% of enrollment in some trials,{{cite:abernethy-2025}} and in the Pittsburgh HPV trial, print ads, Facebook ads and free word of mouth each brought in a share of the 220 enrollees.{{cite:raviotta-2016}}",
    },
    {
      q: "Can a site raise payments to speed up healthy-volunteer enrollment?",
      a: "Only with IRB review. FDA's guidance says the amount and schedule of payments should be presented to the IRB at initial review, and that payment should not be coercive or exert undue influence.{{cite:fda-payment-2018}} This is not legal advice; check your IRB's policy.",
    },
    {
      q: "Is EHR outreach useful for vaccine trials?",
      a: "Yes, for trials that want older adults or people with risk conditions, but not on its own. Penn's EHR search found 13,779 patients who fit its criteria, yet portal messages alone enrolled 9 people; phone follow-up explained why others declined.{{cite:yuh-2022}}",
    },
  ],
  sources: [
    {
      id: "baden-2021",
      title: "Efficacy and Safety of the mRNA-1273 SARS-CoV-2 Vaccine",
      publisher: "New England Journal of Medicine (Baden LR, El Sahly HM et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7787219/",
      year: "2021",
      note: "Read October 2026 via NCBI full text. Quote: \"Between July 27, 2020, and October 23, 2020, a total of 30,420 participants underwent randomization\". Also: \"enrolled adults in medically stable condition at 99 U.S. sites\" and \"To enhance the diversity of the trial population in accordance with Food and Drug Administration Draft Guidance, site-selection and enrollment processes were adjusted to increase the number of persons from racial and ethnic minorities in the trial\". Industry sponsored; pandemic conditions.",
    },
    {
      id: "polack-2020",
      title: "Safety and Efficacy of the BNT162b2 mRNA Covid-19 Vaccine",
      publisher: "New England Journal of Medicine (Polack FP et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7745181/",
      year: "2020",
      note: "Quote: \"Between July 27, 2020, and November 14, 2020, a total of 44,820 persons were screened, and 43,548 persons 16 years of age or older underwent randomization at 152 sites worldwide (United States, 130 sites; Argentina, 1; Brazil, 2; South Africa, 4; Germany, 6; and Turkey, 9)\". \"Screened\" counts in-person screening, not pre-screening.",
    },
    {
      id: "fda-renoir-2023",
      title: "BLA Clinical Review Memorandum, STN 125769/0 (Abrysvo, Respiratory Syncytial Virus Vaccine)",
      publisher: "US Food and Drug Administration, Center for Biologics Evaluation and Research",
      url: "https://www.fda.gov/media/169940/download",
      year: "2023",
      note: "Study 1013 (RENOIR). Quotes: \"A total of 35,971 participants were enrolled in the study.\"; \"The first participant was enrolled on August 31, 2021.\"; \"The original protocol was dated July 7, 2021.\"; \"There were 240 sites in the United States (US), South Africa, Japan, Canada, Finland, the Netherlands, and Argentina\"; \"The primary objective of Study 1013 was to demonstrate the efficacy of RSVpreF in preventing RSV-LRTD in the first RSV season.\" No enrollment end date is given.",
    },
    {
      id: "abernethy-2025",
      title: "Rapid development of a registry to accelerate COVID-19 vaccine clinical trials",
      publisher: "npj Digital Medicine (Abernethy NF et al., COVID-19 Prevention Network), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12056171/",
      year: "2025",
      note: "Written by the registry's developers; no formal evaluation. Quotes: \"The registry was launched to the public on July 8, 2020\"; \"With 657,750 volunteers in total, the VSR was highly effective; 50% of these volunteers signed up within the first 36 days.\"; \"The median time to complete a survey was 5 min. The completion rate of the VSR questionnaire was 95.3%. Among completed surveys, 79.3% of respondents were White ... 3.2% Black or African American\"; \"The Site Portal was subsequently launched on August 4, 2020. In the US, 455 unique clinical research sites accessed a total of 168,015 volunteer records for recruitment and enrollment into six phase 3 COVID-19 vaccine clinical trials.\"; \"Volunteer records could be “checked out” to prevent competition for volunteers within zip codes\"; \"approximately 20% of the Moderna Phase 3 study population were Black, Indigenous and People of Color (BIPOC), whereas 55% of those enrolled at CoVPN sites, and approximately 80% of those enrolled from the VSR were from BIPOC communities\"; \"we estimate that up to 20% of enrollment was accounted for by VSR usage in some clinical trials.\"",
    },
    {
      id: "andrasik-2021",
      title: "Increasing Black, Indigenous and People of Color participation in clinical trials through community engagement and recruitment goal establishment",
      publisher: "PLOS ONE (Andrasik MP et al., COVID-19 Prevention Network), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8525736/",
      year: "2021",
      note: "Covers US CoVPN sites only. Quotes: \"Within two weeks, White enrollment began to quickly outpace enrollment of BIPOC participants\"; \"all clinical research sites were instructed to first slow (September 11, 2020), and then halt (September 30, 2020) White enrollment.\"; \"future vaccine clinical trial efforts must include clear established goals for BIPOC enrollment from the outset of study accrual, reserving space in the trial to ensure equitable inclusion.\"",
    },
    {
      id: "ctgov-cove",
      title: "A Study to Evaluate Efficacy, Safety, and Immunogenicity of mRNA-1273 Vaccine in Adults Aged 18 Years and Older to Prevent COVID-19 (NCT04470427)",
      publisher: "ClinicalTrials.gov (sponsor ModernaTX, Inc.)",
      url: "https://clinicaltrials.gov/study/NCT04470427",
      year: "2024",
      note: "Eligibility read via the ClinicalTrials.gov API, October 2026; last update posted March 21, 2024; record reflects the amended protocol. Quotes: \"Has received or plans to receive a vaccine within 28 days prior to the first dose (Day 1) ... (except for seasonal influenza vaccine).\"; \"Immunosuppressive or immunodeficient state\"; \"Has received systemic immunosuppressants or immune-modifying drugs for >14 days in total within 6 months prior to IP dose administration\"; \"Has received systemic immunoglobulins or blood products within 3 months\"; \"Has donated ≥450 milliliters (mL) of blood products within 28 days\"; \"(Part A only) Has participated in an interventional clinical study within 28 days prior to the day of enrollment.\"; \"Is acutely ill or febrile 72 hours prior to or at Screening or dosing (Part B and Part C) ... Participants meeting this criterion may be rescheduled\".",
    },
    {
      id: "raviotta-2016",
      title: "Using Facebook to Recruit College-Age Men for a Human Papillomavirus Vaccine Trial",
      publisher: "American Journal of Men's Health (Raviotta JM et al., University of Pittsburgh), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4427547/",
      year: "2016",
      note: "Recruitment October 2010 to May 2011. Quotes: \"The direct costs of the Facebook™ ads were $4,820, $1.24/click, and $110/enrollee, and did not include time spent managing the ads and the campaign.\"; \"The direct cost of recruiting 111 young men who first heard about the study through print ads and fliers was approximately $6,758 or $61/enrollee\"; \"The remaining 65 participants reported first hearing about the study from a source without direct costs\"; \"428 young men who completed the screening form. Of those, 311 were eligible and 220 enrolled, 44 of whom reported first hearing about the study through Facebook™ or another social networking site.\"; \"Those who completed the screening form were immediately informed of their eligibility status on the next web page.\"; \"no receipt of blood products or immunoglobulins within 90 days, no participation in other drug studies within 30 days and no receipt of other vaccines within 8 days.\" The $110 figure equals $4,820 divided by the 44 social-media enrollees.",
    },
    {
      id: "yuh-2022",
      title: "Using a patient portal as a recruitment tool to diversify the pool of participants in COVID-19 vaccine clinical trials",
      publisher: "JAMIA Open (Yuh T et al., University of Pennsylvania), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9642328/",
      year: "2022",
      note: "Single health system, recruitment for the Moderna trial. Quotes: \"Through EHR identification, 13 779 patients fit the inclusion criteria\"; \"Of these, 5614 (40.7%) individuals had activated MyChart accounts and were sent an electronic message\"; \"The message was sent an additional 2 times to participants who did not respond\"; \"Only 301 (5.4%) of messaged individuals responded.\"; \"Among the total 115 respondents who expressed interest, 24 agreed to a screening visit, and 9 were ultimately enrolled in the trial\"; \"minority groups disproportionately lacked access to the portal\"; \"common reasons for declining included mistrust of the COVID-19 vaccine, underlying health conditions, and logistical barriers\".",
    },
    {
      id: "kim-2026",
      title: "Measuring Centralized Patient Outreach Recruitment Strategies and their Costs in Clinical Trials",
      publisher: "Therapeutic Innovation & Regulatory Science (Kim JY, Lamberti MJ, Do H; Tufts Center for the Study of Drug Development)",
      url: "https://pubmed.ncbi.nlm.nih.gov/42360616/",
      year: "2026",
      note: "Abstract read via PubMed; full text paywalled, so the number of vaccine studies and the exact definition of \"patient\" were not checked. Quotes: \"cost data from eight sponsor and contract research organizations\"; \"budgetary items for 32 studies\"; \"Social media, which included Facebook ads, Instagram, and Google ads was widely used across all studies, with an average allocation of 64.7% of the total centralized patient outreach recruitment budget.\"; \"The median centralized outreach recruitment cost-per-patient ranged from $143 in vaccine studies to $11,392 in immunology studies.\"",
    },
    {
      id: "fda-payment-2018",
      title: "Payment and Reimbursement to Research Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/payment-and-reimbursement-research-subjects",
      year: "2018",
      note: "Final guidance, January 2018. Quotes: \"Payment to research subjects for participation in studies is not considered a benefit that would be part of the weighing of benefits or risks; it is a recruitment incentive.\"; \"FDA does not consider reimbursement for travel expenses to and from the clinical trial site and associated costs such as airfare, parking, and lodging to raise issues regarding undue influence.\"; \"Any credit for payment should accrue as the study progresses and not be contingent upon the subject completing the entire study.\"; \"The amount and schedule of all payments should be presented to the IRB at the time of initial review.\"",
    },
    {
      id: "usc-355z",
      title: "21 U.S.C. 355(z), Diversity action plans for clinical studies, with statutory notes on FDORA section 3602",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/uscode/text/21/355",
      year: "2022",
      note: "Added by the Food and Drug Omnibus Reform Act of 2022 (Pub. L. 117-328). Quotes: \"another pivotal study of a new drug (other than bioavailability or bioequivalence studies), the sponsor of such drug shall submit to the Secretary a diversity action plan.\"; \"(A) the sponsor’s goals for enrollment in such clinical study\"; \"shall apply only with respect to clinical investigations for which enrollment commences after the date that is 180 days after the publication of final guidance required under this section\".",
    },
    {
      id: "fda-dap-2024",
      title: "Diversity Action Plans to Improve Enrollment of Participants from Underrepresented Populations in Clinical Studies (draft guidance)",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/diversity-action-plans-improve-enrollment-participants-underrepresented-populations-clinical-studies",
      year: "2024",
      note: "Checked October 2026. The page reads \"Draft Guidance for Industry June 2024\" and \"Draft Not for implementation.\" It lists \"Regulated Product(s) Biologics Drugs Medical Devices\" and \"Content current as of: 07/25/2025\", with the banner \"Per a court order, HHS is required to restore this website to its version as of 12:00 AM on January 29, 2025.\"",
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
    { label: "Engage: ads, outreach and booking", href: "/engage", description: "How Bond runs study ads and contacts every lead by voice and text." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A template for turning exclusions into dated phone questions." },
    { label: "Diversity action plan", href: "/glossary/diversity-action-plan", description: "What FDORA requires of sponsors and where the guidance stands." },
    { label: "HIPAA and IRB rules for outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What a site needs approved before contacting volunteers." },
  ],
};

export default page;
