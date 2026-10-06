import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/recruitment-line-items-site-budget",
  category: "blog",
  title: "Recruitment line items for a clinical trial site budget",
  description:
    "The recruitment and advertising line items a site should request in an industry-sponsored budget, how to justify each one, and which to make pass-through.",
  keywords: [
    "clinical trial site budget recruitment line items",
    "advertising budget clinical trial site",
    "pre-screening fee site budget",
    "pass-through costs clinical trial budget",
    "IRB advertising review fee",
  ],
  eyebrow: "Blog",
  h1: "Recruitment and advertising line items in a clinical trial site budget",
  intro:
    "Recruitment is a small slice of sponsor trial costs, 1.7% to 2.7% across phases in an HHS-commissioned analysis, and it is easy to leave out of a site budget.{{cite:aspe-2014}} When it is left out, the site pays for ads, chart review and calls out of its per-patient fees. Below are the recruitment line items to request, how to justify each one, and which to make pass-through.",
  summary: "A line-by-line list of recruitment costs to put in a site budget, with justification and contract terms.",
  lastUpdated: "2026-12-14",
  blog: { date: "2026-12-14", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-missing",
      heading: "Why do recruitment costs go missing from site budgets?",
      blocks: [
        {
          type: "p",
          text: "Because most recruitment work happens before consent, and that stage is often unpaid. In a study at one cancer center, screening effort cost $129.15 to $336.48 per enrolled patient, and the authors note most sponsors do not reimburse it.{{cite:penberthy-2012}} A task force of sites, sponsors and CROs reported that sites are typically not paid for feasibility work either.{{cite:redefining-feasibility-2024}}",
        },
        {
          type: "p",
          text: "Sites feel the gap. In ACRP's 2025 survey of more than 735 research professionals, only 31% said budgets are sufficient to support good operations.{{cite:acrp-workforce-2025}} Negotiation helps: in 10 industry-sponsored pediatric trials at a Swedish university hospital, final budgets averaged 59% more than the sponsor's first proposal, with time for study activities among the main differences.{{cite:koulizakos-2023}}",
        },
        {
          type: "p",
          text: "CTTI's recruitment recommendations make the same point from the sponsor side: develop budget plans early so that recruitment costs are anticipated and covered.{{cite:ctti-recruitment}}",
        },
      ],
    },
    {
      id: "line-items",
      heading: "Which recruitment line items should a site request?",
      blocks: [
        {
          type: "table",
          caption: "Recruitment line items for an industry-sponsored site budget",
          columns: ["Line item", "What it covers", "Suggested structure"],
          rows: [
            ["Pre-screening and chart review", "Coordinator time to check records against eligibility before consent{{cite:penberthy-2012}}", "Start-up fee plus a per-patient or hourly rate"],
            ["EHR query and feasibility report", "Building and running the cohort query; counts for feasibility", "One-time fee"],
            ["IRB review of recruitment materials", "Initial review of ads, scripts and landing pages, plus amendments for later changes{{cite:fda-recruiting}}", "Pass-through at the IRB's fee"],
            ["Advertising spend", "Meta, Google, print, radio and mail", "Pass-through with receipts and a sponsor-approved monthly cap"],
            ["Creative, landing page and translation", "Design, copy and versions in patients' languages{{cite:cfr-50-20}}", "One-time fee per language"],
            ["Outreach and scheduling", "Calls, texts, follow-ups and booking screening visits", "Per-lead or hourly fee, or the vendor's fee"],
            ["Recruitment vendor or software fees", "Third-party services used for the study", "Pass-through or invoiceable"],
            ["Participant travel and stipends", "Travel, parking and lodging reimbursement; payment for participation{{cite:fda-payment-2018}}", "Per visit, as approved by the IRB"],
            ["Printing and mailing", "Letters, flyers and postage", "Invoiceable at cost"],
          ],
          note: "Apply your institution's overhead rate where it allows. HHS's cost model assumed site overhead at 25 percent of total per-study costs.{{cite:aspe-2014}}",
        },
      ],
    },
    {
      id: "pass-through-ads",
      heading: "Should ad spend be a fixed fee or pass-through?",
      blocks: [
        {
          type: "p",
          text: "Pass-through, in most cases, because nobody knows the right number in advance. Published costs per enrolled participant vary several-fold by channel: in the SPIRIT trial, $436 for periodicals, $799 for direct mail and $1,426 for Facebook overall.{{cite:juraschek-2018}} A fixed fee forces the site to guess, and it loses if the protocol is harder to fill than expected.",
        },
        {
          type: "ul",
          items: [
            "**Invoice monthly at cost** with platform receipts, not at study close.",
            "**Agree on a monthly cap** and a fast approval path for raising it when a channel is working.",
            "**Report cost per randomized patient by channel** with each invoice, so the sponsor sees what the spend produced. CTTI recommends defining recruitment metrics and collecting performance data during the trial.{{cite:ctti-recruitment}}",
          ],
        },
        {
          type: "p",
          text: "Who holds the ad budget matters when a vendor runs the campaigns. Bond creates and runs Meta and Google campaigns for each study, but ad spend is not included in its fee and comes out of the site's own ad budget; Bond charges a volume-based fee per screened patient plus a percentage of the randomization milestone payment for each patient, with no integration fee.{{cite:bond-product}} A site using Bond should therefore ask the sponsor for ad spend as its own line.",
        },
      ],
    },
    {
      id: "justify",
      heading: "How should a site justify each line item?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Time your pre-screening",
              text: "Log coordinator hours per patient reviewed for two weeks on a similar study. One cancer center measured 3.4 to 8.8 hours to find, screen and enroll each patient.{{cite:penberthy-2012}}",
            },
            {
              title: "Show your funnel",
              text: "Bring leads, pre-screen passes, screening visits and randomizations from a past study, with cost per randomized patient by channel.",
            },
            {
              title: "Tie materials to the rules",
              text: "FDA treats ads as the start of informed consent and expects the IRB to review them, which is the basis for IRB and translation line items.{{cite:fda-recruiting}}",
            },
            {
              title: "Separate one-time from per-patient costs",
              text: "A start-up fee for creative and queries is easier for a sponsor to review than a per-patient fee, which can look like an enrollment incentive.",
            },
            {
              title: "Offer reporting in return",
              text: "Monthly channel reports make pass-through spend auditable and show the sponsor what it is paying for.",
            },
          ],
        },
      ],
    },
    {
      id: "participant-payments",
      heading: "How should participant payments and travel be budgeted?",
      blocks: [
        {
          type: "p",
          text: "As separate lines from recruitment, because the IRB reviews them differently. FDA does not consider reimbursement for travel, parking and lodging to raise undue-influence concerns, while payment for participation is a recruitment incentive the IRB must weigh. The amount and schedule of all payments go to the IRB at initial review and into the consent form, and a completion bonus should be a small part of the total.{{cite:fda-payment-2018}}",
        },
        {
          type: "checklist",
          items: [
            "Per-visit stipend amount and schedule, matching the consent form",
            "Mileage, parking, transit or ride-service reimbursement",
            "Lodging and meals for long or overnight visits",
            "Card or payment-platform fees, if the site pays them",
            "Caregiver travel, if the protocol requires a companion",
          ],
        },
      ],
    },
    {
      id: "contract-terms",
      heading: "What contract terms protect recruitment funding?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Define pass-through costs** in the budget, with what documentation the sponsor needs.",
            "**Make recruitment items invoiceable,** not bundled into per-patient payments that arrive only after enrollment.",
            "**State who pays IRB fees** for sponsor-provided materials and for later amendments.{{cite:fda-recruiting}}",
            "**Add an amendment trigger:** if eligibility or the enrollment target changes, recruitment lines are renegotiated.",
            "**Keep the feasibility work billable** if the sponsor asks for detailed counts or early chart review.{{cite:redefining-feasibility-2024}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "We can help you estimate ad spend and outreach volume for a protocol before you send the budget back.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Are recruitment costs paid per patient or as fixed fees?",
      a: "Both work. One-time work such as creative, queries and IRB submissions fits a fixed fee; ad spend fits pass-through at cost; ongoing pre-screening and outreach fit a per-patient or hourly rate. Keep each one invoiceable rather than buried in per-patient payments.",
    },
    {
      q: "Who pays for ad spend when a vendor runs the campaigns?",
      a: "It depends on the vendor. With Bond, Meta and Google ad spend is not part of Bond's fee and comes from the site's own ad budget, so the site should request it from the sponsor as a separate line.{{cite:bond-product}}",
    },
    {
      q: "Do travel reimbursements need IRB review?",
      a: "FDA expects the IRB to see the amount and schedule of all payments at initial review, though it does not consider reasonable travel and lodging reimbursement an undue influence.{{cite:fda-payment-2018}}",
    },
  ],
  sources: [
    {
      id: "aspe-2014",
      title: "Examination of Clinical Trial Costs and Barriers for Drug Development",
      publisher: "Eastern Research Group for the US Department of Health and Human Services, Office of the Assistant Secretary for Planning and Evaluation (ASPE)",
      url: "https://aspe.hhs.gov/sites/default/files/pdf/77166/rpt_erg.pdf",
      year: "2014",
      note: "Final report dated July 25, 2014, based on Medidata cost tabulations. Read October 2026. Quote: \"While not insignificant in dollar terms, Patient Recruitment Costs only account for 1.7 to 2.7 percent of overall costs across different clinical trial phases.\" Appendix B defines Patient Recruitment Costs as \"Advertising costs associated with recruitment of patients at the per-patient level\" and Site Overhead Percent as \"Site overhead charged on contracts by the site estimated at 25 percent of total per-study costs\".",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice (Penberthy LT et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Virginia Commonwealth University Massey Cancer Center, 18 months. Read October 2026. Quote: \"The cost of eligibility screening ranged by study phase from $129.15 to $336.48 per enrolled patient.\" Quote: \"The average time spent to find, screen, and enroll a patient varied from 3.4 to 8.8 hours\". Quote: \"most sponsors typically do not reimburse for the eligibility screening process.\"",
    },
    {
      id: "redefining-feasibility-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications (Site Enablement League task force), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Task force of sites (43%), site networks (20%), sponsors and CROs. Read October 2026. Quote: \"sites are typically not compensated for feasibility assessment work\".",
    },
    {
      id: "acrp-workforce-2025",
      title: "ACRP Publishes Results from First-Ever National Workforce Survey",
      publisher: "Association of Clinical Research Professionals (ACRP)",
      url: "https://acrpnet.org/2025/09/24/acrp-publishes-results-from-first-ever-national-workforce-survey",
      year: "2025",
      note: "Self-selected respondents, December 2024 to February 2025. Read October 2026. Quote: \"More than 735 respondents\". Quote: \"only 33% say that trial operations are efficient industry-wide while 31% report budgets are sufficient to support good operations in their studies.\"",
    },
    {
      id: "koulizakos-2023",
      title: "Paediatric clinical trials need paediatric clinical trial budgets",
      publisher: "Acta Paediatrica (Koulizakos S et al., Sahlgrenska University Hospital), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/37119385/",
      year: "2023",
      note: "Abstract read October 2026; 10 industry-sponsored pediatric trials in Sweden. Quote: \"The mean difference in total budget amount between the initial budget and the final budget was +60% (mean 59%, range 31%-139%). The costs for preparation of the clinical trial, time spent for study activities and costs for examinations were identified as key budget items for these differences.\"",
    },
    {
      id: "ctti-recruitment",
      title: "CTTI Recommendations: Planning for Successful Trial Recruitment",
      publisher: "Clinical Trials Transformation Initiative (CTTI)",
      url: "https://ctti-clinicaltrials.org/wp-content/uploads/2021/06/CTTI_Recruitment_Recs.pdf",
      year: "2016",
      note: "Published May 2016, updated July 2018. Read October 2026. Quote: \"Develop budget plans early to ensure that recruitment costs are anticipated and covered.\" Quote: \"Monitor and evaluate both the recruitment process and performance with meaningful metrics\" including \"Identifying meaningful metrics for each goal\" and \"Collecting process and performance data\".",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Information sheet guidance, January 1998. Read October 2026. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process. Advertisements should be reviewed and approved by the IRB as part of the package for initial review. However, when the clinical investigator decides at a later date to advertise for subjects, the advertising may be considered an amendment to the ongoing study.\"",
    },
    {
      id: "fda-payment-2018",
      title: "Payment and Reimbursement to Research Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/payment-and-reimbursement-research-subjects",
      year: "2018",
      note: "January 2018. Read October 2026. Quote: \"FDA does not consider reimbursement for travel expenses to and from the clinical trial site and associated costs such as airfare, parking, and lodging to raise issues regarding undue influence.\" Quote: \"The amount and schedule of all payments should be presented to the IRB at the time of initial review.\" Quote: \"payment of a small proportion as an incentive for completion of the study is acceptable to FDA, providing that such incentive is not coercive.\"",
    },
    {
      id: "cfr-50-20",
      title: "21 CFR 50.20: General requirements for informed consent",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-21/section-50.20",
      year: "2026",
      note: "Read October 2026. Quote: \"The information that is given to the subject or the representative shall be in language understandable to the subject or the representative.\"",
    },
    {
      id: "juraschek-2018",
      title: "Use of online recruitment strategies in a randomized trial of cancer survivors",
      publisher: "Clinical Trials (Juraschek SP et al., Johns Hopkins), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5891380/",
      year: "2018",
      note: "SPIRIT trial, Baltimore. Read October 2026. Quote: \"By contrast, community fairs, direct mail, or periodicals cost $917, $799, or $436 per enrollee, respectively.\" Quote: \"It was the most expensive modality at a cost of $1,426 per enrollee\" (Facebook, all campaigns).",
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
    { label: "Pricing", href: "/pricing", description: "Bond's per-screened-patient and randomization-based pricing, with ad spend separate." },
    { label: "Engage: ads, voice and text outreach", href: "/engage", description: "How Bond runs study ads and contacts every lead." },
    { label: "How to win more studies", href: "/guides/win-more-studies", description: "What sponsors look for when they choose sites." },
    { label: "Feasibility questionnaire template", href: "/templates/feasibility-questionnaire", description: "A template for answering sponsor feasibility questions." },
  ],
};

export default page;
