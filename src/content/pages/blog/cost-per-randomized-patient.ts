import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/cost-per-randomized-patient",
  category: "blog",
  title: "How to calculate cost per randomized patient",
  description:
    "A worked formula for cost per randomized patient, published funnel data behind it, and why cost per lead hides the costs that matter to sites and sponsors.",
  keywords: [
    "cost per randomized patient",
    "cost per randomized participant clinical trial",
    "clinical trial recruitment cost per patient",
    "cost per lead clinical trial ads",
    "recruitment funnel metrics",
  ],
  eyebrow: "Blog",
  h1: "How to calculate cost per randomized patient, and why it beats cost per lead",
  intro:
    "Cost per randomized patient is everything you spent to recruit, including staff time, divided by the patients who were randomized. It beats cost per lead because most leads never randomize: in a Johns Hopkins trial, Facebook ads cost $1.30 per click but $1,426 per enrolled participant.{{cite:juraschek-2018}} Below is the formula, what belongs in it, and a worked example a site or sponsor can copy.",
  summary: "The formula for cost per randomized patient, the funnel data behind it, and how to use it to choose channels.",
  lastUpdated: "2026-10-23",
  blog: { date: "2026-10-23", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "what-it-is",
      heading: "What is cost per randomized patient?",
      blocks: [
        {
          type: "p",
          text: "It is the full cost of recruitment for a study, or for one channel, divided by the patients from that source who were randomized in the same period:",
        },
        {
          type: "callout",
          tone: "info",
          title: "The formula",
          text: "`cost per randomized = (ad spend + vendor fees + materials and review fees + unreimbursed staff time) / patients randomized`",
        },
        {
          type: "p",
          text: "Randomization is the right denominator for a randomized trial because it is the milestone that moves the enrollment target. Leads, calls and even screening visits are steps on the way, and each one loses people. For a single-arm study, use the equivalent milestone, such as first dose.",
        },
      ],
    },
    {
      id: "why-not-cost-per-lead",
      heading: "Why does cost per lead mislead?",
      blocks: [
        {
          type: "p",
          text: "Because the drop-off after the lead is where most of the cost hides. The SPIRIT trial at Johns Hopkins ran Facebook banner ads for a community study of cancer survivors and tracked every stage.{{cite:juraschek-2018}}",
        },
        {
          type: "table",
          caption: "Facebook recruitment in the SPIRIT trial, all campaigns, 2016",
          columns: ["Stage", "Count", "Cost per stage"],
          rows: [
            ["Clicks to the study website", "4,401", "$1.30 per click"],
            ["People who contacted study staff", "24", "$238 per contact"],
            ["Pre-screened", "6", "$951 per pre-screen"],
            ["Enrolled", "4", "$1,426 per enrollee"],
          ],
          note: "Total ad cost was $5,704. The authors note staff effort was not included and cost comparison was not a pre-planned outcome.{{cite:juraschek-2018}}",
        },
        {
          type: "p",
          text: "A channel can also look cheap per lead and still be the wrong buy. In the Fit & Quit trial, local postcards and word-of-mouth each produced about two dozen randomized participants (24 and 23), but postcards cost $1,920.40 per randomized participant against $48.51 for word-of-mouth. Radio cost $973.76 per randomized participant yet produced the most, 112 of 305.{{cite:perez-munoz-2022}} Cost per randomized patient tells you what each channel really costs; volume tells you whether it can fill the study. You need both.",
        },
        {
          type: "p",
          text: "Be careful with published benchmarks, too. A 2017 review of 35 studies that used Facebook found a median cost of US $14.41 per participant, but those studies mostly recruited people aged 16 to 24 into health research, and only 10 of the 35 also tested an intervention.{{cite:whitaker-2017}}",
        },
      ],
    },
    {
      id: "what-to-include",
      heading: "What belongs in the numerator?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Media:** Meta, Google, radio, print and mail costs for the period, by channel.",
            "**Vendor fees:** recruitment vendors, call centers and software, booked to the same period as the patients they produced.",
            "**Materials and review:** creative, translation, printing and IRB fees for reviewing recruitment materials.",
            "**Unreimbursed staff time:** hours spent on chart review, calls, follow-ups, scheduling and screening visits for patients who fail, times a loaded hourly rate. In one cancer center, screening effort alone cost $129.15 to $336.48 per enrolled patient, and most sponsors did not reimburse it.{{cite:penberthy-2012}}",
          ],
        },
        {
          type: "p",
          text: "Staff time is easy to leave out, and leaving it out makes coordinator-heavy channels, like cold calling a patient list, look free. Vendor pricing should be booked the same way. Bond, for example, charges a volume-based fee per screened patient (a patient Bond calls and texts to pre-screen) plus a percentage of the randomization milestone payment for each patient, with no integration fee; Meta and Google ad spend is separate and comes from the site's own ad budget.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "worked-example",
      heading: "How do you calculate it step by step?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Pick the period and the source",
              text: "Use one calendar month and one channel or campaign. Tag every lead with its source at intake so it can be traced to randomization.",
            },
            {
              title: "Total the costs",
              text: "Add media, vendor fees, materials and staff hours times a loaded rate for that channel and month.",
            },
            {
              title: "Count each funnel stage",
              text: "Leads, patients reached, pre-screen passes, screening visits and randomizations. Allow for lag: a lead from late in the month may randomize weeks later, so recalculate after the screening window closes.",
            },
            {
              title: "Divide at every stage",
              text: "Cost per lead, per reached patient, per screening visit and per randomization. The stage where cost jumps most is where the leak is.",
            },
            {
              title: "Compare channels on the same basis",
              text: "Rank channels by cost per randomized patient, then check that the cheapest ones can supply enough volume to hit the target date.",
            },
          ],
        },
        {
          type: "table",
          caption: "Hypothetical month for one study at one site",
          columns: ["Stage", "Count", "Cost per stage (total $8,500)"],
          rows: [
            ["Leads", "250", "$34"],
            ["Reached by phone or text", "175", "$49"],
            ["Passed pre-screen", "40", "$213"],
            ["Attended screening visit", "25", "$340"],
            ["Randomized", "5", "$1,700"],
          ],
          note: "Illustrative inputs: $4,000 ads, $2,500 vendor fees, 50 staff hours at $40. For a published funnel with similar drop-off, see the SPIRIT table above.{{cite:juraschek-2018}}",
        },
        {
          type: "p",
          text: "In this example, 75 leads were never reached. Reaching them may cost less than buying 75 more, which is why speed and persistence of follow-up belong in the same review as ad spend.",
        },
      ],
    },
    {
      id: "how-to-use-it",
      heading: "How should sponsors and sites use the number?",
      blocks: [
        {
          type: "p",
          text: "Keep it next to time. In a 2014 HHS-commissioned analysis of industry cost data, patient recruitment was only 1.7% to 2.7% of total trial costs across phases.{{cite:aspe-2014}} Delay is far more expensive: Tufts CSDD puts the mean direct cost of a phase III trial at $55,716 per day and a phase II trial at $23,737 per day, in 2023 dollars.{{cite:tufts-delay-2024}} A channel that costs more per randomized patient but fills the study months sooner can be the cheaper choice overall.",
        },
        {
          type: "ul",
          items: [
            "**Sponsors:** ask sites and vendors to report cost and volume per randomized patient by channel, not leads delivered.",
            "**Sites:** compare cost per randomized patient with the per-patient payment in your budget to see which studies and channels actually pay for themselves.",
            "**Both:** write the numbers down. In the 2026 Cochrane review of recruitment strategies, only 17 of 91 studies reported costs at all.{{cite:cochrane-2026}}",
          ],
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "What mistakes skew the calculation?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Counting consents as randomizations.** A consented patient can still screen-fail. Use the milestone the sponsor pays on.",
            "**Closing the books too early.** Leads from the last week of a month randomize in the next one. Recalculate after the screening window.",
            "**Losing the source.** Without a source tag on every lead, referrals and repeat visitors get credited to whichever channel is easiest to see.",
            "**Comparing different protocols.** Strict criteria raise cost per randomized patient for every channel. Compare channels within a study, not across studies.",
            "**Ignoring staff time.** It is real cost even when no invoice arrives. Our [guide to reducing screen failure](/guides/reduce-screen-failure) covers where those hours go.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one study's funnel. We will show where Bond's ads, immediate outreach and booking would change cost per randomized patient.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is cost per randomized patient the same as cost per enrolled patient?",
      a: "Not always. Some studies count enrollment at consent, before screening is complete, so cost per enrolled patient can look lower than cost per randomized patient. For a randomized trial, use randomization, the milestone that counts toward the target.",
    },
    {
      q: "What is a good cost per randomized patient?",
      a: "There is no universal benchmark, because eligibility criteria drive the number. In two published trials, costs ranged from $436 to $1,426 per enrollee by channel in one and from $45.56 to $1,920.40 per randomized participant in the other.{{cite:juraschek-2018,perez-munoz-2022}} Compare yours with the per-patient payment in your own budget.",
    },
    {
      q: "Does a lower cost per lead mean a better channel?",
      a: "No. In the SPIRIT trial, $1.30 clicks became $1,426 enrollees, because only 4 of 4,401 clickers enrolled.{{cite:juraschek-2018}} Judge a channel by cost per randomized patient and by volume.",
    },
  ],
  sources: [
    {
      id: "juraschek-2018",
      title: "Use of online recruitment strategies in a randomized trial of cancer survivors",
      publisher: "Clinical Trials (Juraschek SP et al., Johns Hopkins), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5891380/",
      year: "2018",
      note: "SPIRIT trial, Baltimore, June 2015 to December 2016. Read October 2026. Quote (abstract): \"Facebook advertisements were shown over 3 million times (impressions) to 124,476 people, which resulted in 4401 clicks on our advertisement. Of these, 24 people ultimately contacted study staff, 6 underwent prescreening, and 4 enrolled in the study.\" Quote: \"By contrast, community fairs, direct mail, or periodicals cost $917, $799, or $436 per enrollee, respectively.\" Table 2 totals: cost $5,704, cost per contact $238, per screenee $951, per enrollee $1,426; Table 1 total cost per click $1.30. Limitation quote: \"comparing recruitment costs was not a pre-planned outcome of the trial\"; staff effort not included.",
    },
    {
      id: "perez-munoz-2022",
      title: "Recruitment strategies for a post cessation weight management trial: A comparison of strategy cost-effectiveness and sample diversity",
      publisher: "Contemporary Clinical Trials Communications (Pérez-Muñoz A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9661419/",
      year: "2022",
      note: "Fit & Quit trial, 305 randomized, November 2017 to February 2021; direct advertising costs only. Read October 2026. Quote: \"Radio advertisements resulted in more recruited and randomized participants compared to other recruitment methods (36.7%, n = 112)\". Quote: \"local postcard advertisements were overall more expensive ($46,089.70; 19.3% of direct costs) than word-of-mouth ($1115.80; 0.5% of direct costs) and less cost-effective ($1920.40 vs $48.51 per participant, respectively), despite resulting in a nearly equal recruitment yield.\" Quote: \"more cost effective than radio advertisements ($646.45 and $973.76 per participant, respectively)\". Quote: \"The refer-a-friend system was the most cost-effective ($45.56 per participant)\". Postcards n = 24, word-of-mouth n = 23.",
    },
    {
      id: "whitaker-2017",
      title: "The Use of Facebook in Recruiting Participants for Health Research Purposes: A Systematic Review",
      publisher: "Journal of Medical Internet Research (Whitaker C et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/28851679/",
      year: "2017",
      note: "Abstract read October 2026. Quote: \"Information from the 35 studies was analyzed with median values being 264 recruited participants, a 3-month recruitment period, 3.3 million impressions, cost per click of US $0.51, conversion rate of 4% (range 0.06-29.50), eligibility of 61% (range 17-100), and cost per participant of US $14.41.\" Quote: \"All focused on the feasibility of recruitment via Facebook, with some (n=10) also testing interventions, such as smoking cessation and depression reduction. Most recruited young age groups (16-24 years)\".",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice (Penberthy LT et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Virginia Commonwealth University Massey Cancer Center, 18 months. Read October 2026. Quote: \"The cost of eligibility screening ranged by study phase from $129.15 to $336.48 per enrolled patient.\" Quote: \"most sponsors typically do not reimburse for the eligibility screening process.\"",
    },
    {
      id: "aspe-2014",
      title: "Examination of Clinical Trial Costs and Barriers for Drug Development",
      publisher: "Eastern Research Group for the US Department of Health and Human Services, Office of the Assistant Secretary for Planning and Evaluation (ASPE)",
      url: "https://aspe.hhs.gov/sites/default/files/pdf/77166/rpt_erg.pdf",
      year: "2014",
      note: "Final report dated July 25, 2014, based on Medidata cost tabulations. Read October 2026. Quote: \"While not insignificant in dollar terms, Patient Recruitment Costs only account for 1.7 to 2.7 percent of overall costs across different clinical trial phases.\"",
    },
    {
      id: "tufts-delay-2024",
      title: "Quantifying the Value of a Day of Delay in Drug Development",
      publisher: "Tufts Center for the Study of Drug Development (Smith Z, DiMasi J, Getz K)",
      url: "https://csdd.tufts.edu/sites/default/files/2025-02/Aug2024%20Day%20of%20Delay%20White%20Paper%20Final.pdf",
      year: "2024",
      note: "White paper; 447 protocol budgets, 2023 dollars. Read October 2026. Quote: \"Phase III clinical trials had the highest direct cost per day at $55,716. Phase II clinical trials cost roughly half that amount at $23,737 per day.\"",
    },
    {
      id: "cochrane-2026",
      title: "Strategies to improve recruitment to randomised trials",
      publisher: "Cochrane Database of Systematic Reviews (Parker A et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/42742038/",
      year: "2026",
      note: "Abstract read October 2026; update of the 2018 review, searches to February 2023. Quote: \"We identified 91 eligible studies (53 new to this update)\". Quote: \"Costs were reported in only 17 of 91 studies.\"",
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
    { label: "Pricing", href: "/pricing", description: "How Bond's per-screened-patient and randomization-based pricing works." },
    { label: "Engage: ads, voice and text outreach", href: "/engage", description: "How Bond runs ads and contacts every lead immediately." },
    { label: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment", description: "Paying for leads versus paying for outcomes." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Catching ineligible patients before the screening visit." },
  ],
};

export default page;
