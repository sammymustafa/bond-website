import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/for/research-sites",
  category: "audience",
  title: "Patient recruitment for clinical research sites",
  description:
    "How research sites find eligible patients in their own EHR, pre-screen them by phone and text, and support consent with Bond, plus metrics, setup and pricing.",
  keywords: [
    "patient recruitment for clinical research sites",
    "research site enrollment",
    "clinical research coordinator workload",
    "EHR pre-screening for research sites",
  ],
  eyebrow: "For research sites",
  h1: "Enroll from the patients you already have",
  intro:
    "Site enrollment depends on finding eligible patients in your own records and reaching them without using up staff time. This page covers where that breaks down, what Bond Health changes day to day, what gets reported, and what setup and pricing involve.",
  summary: "How Bond fits an independent or hospital-based research site: problems, workflow, metrics, setup and pricing.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How implementation works", secondaryHref: "/implementation" },
  sections: [
    {
      id: "where-enrollment-breaks",
      heading: "Where does enrollment break down at research sites?",
      blocks: [
        {
          type: "p",
          text: "Enrollment is uneven across the sites in a single trial. A 2013 Tufts CSDD analysis found that 11% of sites in a given trial typically enroll no patients and 37% under-enroll.{{cite:tufts-2013}}",
        },
        {
          type: "ul",
          items: [
            "**Staff time.** In a 2012 study at one cancer center, the largest share of eligibility evaluations (35.8%) took 10 to 30 minutes, but more than 10% took 2 to 4 hours. Finding, screening and enrolling one patient took 3.4 to 8.8 research staff hours on average, by study type.{{cite:penberthy-2012}}",
            "**Staffing.** In WCG's 2025 survey of 611 sites, 30% named site staffing a top challenge, and 28% named patient recruitment and retention (32% of smaller sites).{{cite:wcg-2025}}",
            "**Turnover.** In SCRS's 2022 survey, sites reported yearly turnover of patient-facing staff of 35% to 61%, against a typical 10% to 37%. SCRS puts the cost of recruiting and training a replacement at about six months' pay.{{cite:scrs-2023}}",
            "**Screen failures.** A patient who fails at the visit still costs the screening work. In a 2008 site-finance model, at a 10% screen-failure rate, nine enrolled patients must cover the screening cost of one failure.{{cite:bienkowski-2008}} See [how to reduce screen failures](/guides/reduce-screen-failure).",
          ],
        },
        {
          type: "p",
          text: "Patient interest is often not the limit. In the 2020 national HINTS survey, only 9% of US adults had ever been invited to a clinical trial, but 47% of those invited took part.{{cite:hints-2021}} The work is finding and asking the right patients.",
        },
      ],
    },
    {
      id: "how-bond-fits",
      heading: "How does Bond fit into a site's workflow?",
      blocks: [
        {
          type: "p",
          text: "Bond runs three stages as one workflow: identify, engage and consent. Decisions that need a coordinator or clinician stay with your team.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Identify",
              text: "Bond reads structured and unstructured records against the study's inclusion and exclusion criteria, ranks candidates and shows the record evidence behind each criterion. It connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR. See [Identify](/identify).{{cite:bond-site,bond-product}}",
            },
            {
              title: "Engage",
              text: "Voice and SMS agents contact matched patients, say that AI assistance is being used, ask the questions in your approved pre-screening script, and book visits into your calendar. A patient can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers. See [Engage](/engage).{{cite:bond-site,bond-product}}",
            },
            {
              title: "Consent",
              text: "Bond gives patients plain-language explanations of the study, answers their questions and escalates to staff when needed. The PI or delegated staff still obtains consent. See [Consent](/consent).{{cite:bond-site}}",
            },
            {
              title: "Report",
              text: "A real-time dashboard and audit trail track each patient from match to randomization, and status can go to a Google Sheet or your CTMS.{{cite:bond-site}}",
            },
          ],
        },
        {
          type: "p",
          text: "When a study needs more patients than your own records hold, Bond sets up Meta and Google ad campaigns for it.{{cite:bond-product}} Leads from those ads flow straight into the same voice and SMS agents for pre-screening and scheduling, alongside patients found in your EHR.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "Bond is a [CRIO Certified Partner](/integrations/crio). It works alongside other CTMS and eRegulatory systems through API or file export where the vendor supports it. See all [integrations](/integrations).{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "coordinators-and-pi",
      heading: "What changes day to day for coordinators and the PI?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Coordinators** check a ranked list and the evidence cited for each criterion instead of opening charts one at a time. They also handle escalations from the agents and run screening visits that are already booked.{{cite:bond-site}}",
            "**The PI** settles ambiguous criteria during setup, approves the outreach scripts, and obtains consent as before.",
            "**Phone work** narrows to the calls that need a person: live transfers, requested callbacks and questions outside the script.{{cite:bond-product}}",
            "**Records** of match rationale and outreach sit in one audit trail, which helps when a monitor asks why a patient was or was not approached.{{cite:bond-site}}",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "In one trial, AI help did not save time",
          text: "In a randomized evaluation of 355 retrospective oncology charts at Emory, published in 2026, coordinators abstracting full eligibility with an AI model's help were more accurate (76.5% vs 71.1% of charts) but no faster (37.4 vs 37.8 minutes per chart).{{cite:parikh-2026}} Time chart review on one study before and after Bond rather than assume a saving.",
        },
      ],
    },
    {
      id: "problem-to-metric",
      heading: "Which site problems does Bond address, and how is each measured?",
      blocks: [
        {
          type: "p",
          text: "Compare each measure with your own baseline: the same funnel on a similar study run the old way.",
        },
        {
          type: "table",
          caption: "Site problem, what Bond does, what you measure",
          columns: ["Site problem", "What Bond does", "What you measure"],
          rows: [
            [
              "Sites that enroll no one (11% in a typical trial) or too few (37%){{cite:tufts-2013}}",
              "Screens the whole EHR, not only this week's clinic schedule",
              "Patients matched, contacted and randomized against the site's target{{cite:bond-site}}",
            ],
            [
              "3.4 to 8.8 research staff hours to find, screen and enroll one patient (one cancer center, 2012){{cite:penberthy-2012}}",
              "Ranks candidates and shows criterion-to-evidence rationale for each",
              "Chart review time and coordinator hours saved{{cite:bond-site}}",
            ],
            [
              "Few patients are asked: 9% of US adults had ever been invited to a trial (2020){{cite:hints-2021}}",
              "Voice and SMS agents contact, pre-screen on the approved script and book visits",
              "Patients contacted, pre-screened and scheduled; time to enrollment",
            ],
            [
              "Screen failures: at a 10% rate, nine enrolled patients carry one failure's screening cost{{cite:bienkowski-2008}}",
              "Checks the criteria the chart can answer before contact and asks the rest in pre-screening",
              "Screen-failure signals and the screen-fail rate at the visit",
            ],
            [
              "Invited patients who do not join: 47% of invited US adults took part (2020){{cite:hints-2021}}",
              "Plain-language explanations and Q&A before the visit, with escalation to staff",
              "Patients consented, and consented patients who are randomized",
            ],
            [
              "Manual review errors: research staff alone were accurate on 71.1% of charts in one randomized evaluation{{cite:parikh-2026}}",
              "Shows the evidence behind each criterion for coordinators to check",
              "Matching accuracy, plus your coordinators' spot checks against the chart{{cite:bond-site}}",
            ],
          ],
        },
      ],
    },
    {
      id: "metrics",
      heading: "What results should the site expect to see reported?",
      blocks: [
        {
          type: "p",
          text: "Bond reports each study's funnel: patients matched, contacted, pre-screened, consented and randomized. Reports also show time to enrollment, matching accuracy, screen-failure signals and coordinator hours saved.{{cite:bond-site}}",
        },
        {
          type: "stats",
          items: [
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
            { value: "90%+", label: "matching accuracy in eligibility screening", cite: "bond-site" },
            { value: "50%+", label: "less chart review in pre-screening", cite: "bond-site" },
          ],
        },
        {
          type: "p",
          text: "These are Bond's published figures, not a forecast for your study. Results depend on the protocol, the population and how fast the site acts on matches. Funnel counts also help with sponsor feasibility requests; see [how to win more studies](/guides/win-more-studies) and the [feasibility questionnaire template](/templates/feasibility-questionnaire).",
        },
        {
          type: "quote",
          text: "Reduced our chart review time significantly while improving the quality of patients we bring in for screening.",
          attribution: "Research coordinator, academic medical center, oncology trial",
        },
      ],
    },
    {
      id: "implementation",
      heading: "What does implementation ask of the site?",
      blocks: [
        {
          type: "p",
          text: "A full deployment with the EHR connected takes 4 to 6 weeks, depending on the EHR, the IT review and the interface method. A pilot without EHR integration can be set up in under 2 weeks.{{cite:bond-site}} See the week-by-week [implementation](/implementation) plan.",
        },
        {
          type: "p",
          text: "Site type changes the path. In WCG's 2025 survey, 54% of independent sites and physician practices said their study start-up took under 60 days, against 9% of academic medical centers, community hospitals, health systems and site networks.{{cite:wcg-2025}} A hospital-based site should bring in IT and security early. An independent site can start with a list-based pilot.",
        },
        {
          type: "checklist",
          items: [
            "Name a PI, a lead coordinator, an IT contact and a security contact.",
            "Sign a business associate agreement and run your vendor security review. Bond's controls are on the [security](/security) page.",
            "Choose an interface: FHIR R4, HL7 v2 or an integration partner.",
            "Have the PI settle ambiguous criteria and a coordinator check a sample of Bond's matches against the chart.",
            "Edit the voice and text scripts and submit them to your IRB where required, using our [IRB language template](/templates/irb-submission-language-ai-outreach).",
            "Supply visit slots, escalation contacts and CTMS or sheet access.",
          ],
        },
      ],
    },
    {
      id: "pricing",
      heading: "How does pricing line up with site economics?",
      blocks: [
        {
          type: "p",
          text: "A site pays for screening on every patient, including those who fail, and recovers it from what it is paid for enrolled patients.{{cite:bienkowski-2008}} At one cancer center in 2012, manual screening cost $129 to $336 per enrolled patient, 6.5% to 16.7% of the average amount reimbursed per enrolled patient.{{cite:penberthy-2012}}",
        },
        {
          type: "p",
          text: "Bond uses two-part pricing. A volume-based platform fee covers EHR integration, implementation and ongoing operation: the EHR connection, security review, audit logging, workflow configuration and ongoing support. There is no separate integration fee. A success fee is charged per enrolled patient, where \"enrolled\" means randomized, and per-visit milestones can be added.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "The variable part follows randomized patients, not referrals, calls or leads, so a patient who fails screening adds no success fee. Pricing is custom; see [pricing](/pricing).{{cite:bond-site}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one open protocol, and we will show how its criteria are screened and how matches are ranked and explained.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Bond replace our coordinators?",
      a: "No. Coordinators still review matches and run visits, and the PI or delegated staff obtains consent.{{cite:bond-site}}",
    },
    {
      q: "Can we start without connecting our EHR?",
      a: "Yes. A pilot that runs outreach on a patient list you supply can be set up in under 2 weeks.{{cite:bond-site}} It still needs the BAA and your vendor review, and without the EHR connection Bond does not read charts or rank matches.",
    },
    {
      q: "Do patients know they are talking to AI?",
      a: "Yes. Patients are told that AI assistance is being used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
    },
    {
      q: "What does a site pay if no patients enroll?",
      a: "The platform fee still applies, and there is no integration fee; the success fee is charged only per randomized patient. Ask for a quote on the [pricing](/pricing) page.{{cite:bond-site}}",
    },
  ],
  sources: [
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
      note: "Capabilities, pricing and compliance status described by Bond Health, September 2026.",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts Center for the Study of Drug Development (press release via BioSpace)",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Tufts CSDD Impact Report, January/February 2013; more than 150 studies and nearly 16,000 sites.",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Penberthy LT et al. Virginia Commonwealth University Massey Cancer Center, 3,467 eligibility evaluations for 130 open trials over 18 months; about 80% of screening was done by research nurses. Costs in 2012 dollars. Quote: \"These costs of screening represent 6.5% to 16.7% of the average total amount reimbursed per enrolled patient.\"",
    },
    {
      id: "wcg-2025",
      title: "2025 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/sites/2/2025/10/WCG-Site-Challenges-Report-2025.pdf",
      year: "2025",
      note: "Survey of 611 research sites, July to September 2025, 80% in the US. Challenge and solution questions allowed several answers. Start-up timelines are self-reported.",
    },
    {
      id: "scrs-2023",
      title: "Workforce Challenges at Clinical Research Sites",
      publisher: "Society for Clinical Research Sites (SCRS)",
      url: "https://myscrs.org/wp-content/uploads/2024/07/SCRS-2023-whitepaper_v5.pdf",
      year: "2023",
      note: "White paper on the SCRS 2022 Site Landscape Survey of member sites.",
    },
    {
      id: "bienkowski-2008",
      title: "Screen Failures in Clinical Trials: Financial Roulette or the Cost of Doing Business?",
      publisher: "Journal of Clinical Research Best Practices",
      url: "https://sitecouncil.org/Articles/0807%20Screen_Failures.pdf",
      year: "2008",
      note: "Bienkowski RS, Goldfarb NM. Illustrative site-finance model of how screen-failure costs are recovered.",
    },
    {
      id: "hints-2021",
      title: "Demographic and Health Behavior Factors Associated With Clinical Trial Invitation and Participation in the United States",
      publisher: "JAMA Network Open",
      url: "https://pubmed.ncbi.nlm.nih.gov/34586365/",
      year: "2021",
      note: "Williams CP et al. Health Information National Trends Survey (HINTS) 2020, 3,689 US adults, weighted.",
    },
    {
      id: "parikh-2026",
      title: "Human-AI teaming to improve accuracy and efficiency of eligibility criteria prescreening for oncology trials: a randomized evaluation trial using retrospective electronic health records",
      publisher: "Nature Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12976108/",
      year: "2026",
      note: "Parikh RB et al. Emory Winship Cancer Institute, 355 retrospective lung and colorectal cancer charts.",
    },
  ],
  related: [
    { label: "Identify: AI EHR screening", href: "/identify", description: "What Bond reads in the chart and how each match is explained." },
    { label: "Engage: voice and SMS pre-screening", href: "/engage", description: "How the agents contact patients, pre-screen and book visits." },
    { label: "Implementation", href: "/implementation", description: "The 4 to 6 week plan, with site tasks and Bond tasks." },
    { label: "Pricing", href: "/pricing", description: "Platform fee plus a success fee per randomized patient." },
    { label: "How to win more studies", href: "/guides/win-more-studies", description: "What sponsors look for in site feasibility and selection." },
    { label: "Feasibility questionnaire template", href: "/templates/feasibility-questionnaire", description: "A fill-in template for answering sponsor feasibility requests." },
  ],
};

export default page;
