import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/screen-failure-reimbursement-budgets",
  category: "blog",
  title: "Screen failure reimbursement: what sites should negotiate",
  description:
    "Screen failure rates top 50% in some therapeutic areas. How screen-fail payments work in site budgets, why caps tied to enrollment are risky, what to ask for.",
  keywords: [
    "screen failure reimbursement",
    "screen failure payment clinical trial budget",
    "screen fail cap site budget",
    "clinical trial budget negotiation",
    "screen failure rate by therapeutic area",
  ],
  eyebrow: "Blog",
  h1: "Screen failure reimbursement in site budgets: how it works and what to negotiate",
  intro:
    "A screen failure can cost a site as much staff time and as many procedures as a patient who qualifies, and in some therapeutic areas more than half of screened patients fail: a pooled analysis of MASH trials found a 56.28% screen failure rate.{{cite:mash-sfr-2025}} How the budget pays for those patients decides whether a study makes or loses money. Here is how screen-fail payment usually works, a way to price it, and what to negotiate.",
  summary: "Screen failure rates by therapeutic area, how sponsors pay for screen fails, the math behind caps, and a negotiation checklist.",
  lastUpdated: "2026-11-30",
  blog: { date: "2026-11-30", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How to reduce screen failure", secondaryHref: "/guides/reduce-screen-failure" },
  sections: [
    {
      id: "how-common",
      heading: "How common are screen failures?",
      blocks: [
        {
          type: "p",
          text: "Common enough that a budget has to assume them. Three recent analyses, each in a different therapeutic area, found that roughly half of screened patients did not randomize.",
        },
        {
          type: "table",
          caption: "Published screen failure rates",
          columns: ["Area", "Data", "Screen failure"],
          rows: [
            ["MASH (fatty liver disease)", "58 phase 2 or later trials, 44,949 individuals", "56.28% pooled; higher in recent, global and industry-funded trials{{cite:mash-sfr-2025}}"],
            ["Inflammatory bowel disease", "17 phase 2 and 3 trials run by one CRO, 16,913 screened", "Mean 0.43 per trial in ulcerative colitis, 0.53 in Crohn's disease{{cite:ibd-sf-2025}}"],
            ["Retina", "87 trials at 6 centers, 962 screened", "51.8%; the most common reason was imaging findings{{cite:retina-sf-2024}}"],
          ],
        },
        {
          type: "p",
          text: "Most of these failures come from eligibility, not patient choice. In the IBD trials the top reason was disease activity scores below the inclusion threshold, and in the retina trials it was imaging findings, 44.5% of all screen failures.{{cite:ibd-sf-2025,retina-sf-2024}} Some of that can be caught before a visit; some, like an endoscopy score, cannot.",
        },
      ],
    },
    {
      id: "how-sponsors-pay",
      heading: "How do sponsors usually pay for screen failures?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Per procedure performed.** The site invoices each screening procedure actually done before the patient failed. This tracks real cost most closely.",
            "**Flat screen-fail fee.** One amount per screen failure regardless of how far the visit went.",
            "**Capped or tied to enrollment.** Payment for a set number of screen failures per enrolled patient. In a 2008 worked example, a contract paid for up to four screen failures per enrolled subject and nothing if no one enrolled.{{cite:bienkowski-2008}}",
            "**Not paid.** When a sponsor expects few failures, it may decline to pay for them at all, which pushes the cost onto the site.{{cite:bienkowski-2008}}",
          ],
        },
        {
          type: "p",
          text: "Insurance is not a fallback. Medicare's clinical trial policy excludes from routine costs any items and services provided solely for data collection, and those the sponsor customarily provides free of charge.{{cite:cms-ncd-310-1}} Procedures done only to check eligibility generally fall to the sponsor or the site, so confirm each one in the coverage analysis. This is not billing advice.",
        },
        {
          type: "p",
          text: "The work before the visit is usually unpaid. FDA allows an investigator to discuss a study with a patient without consent, but consent is required before any procedure done solely to determine eligibility.{{cite:fda-screening-tests}} The chart review and calls that come first are what a cancer center found cost $129.15 to $336.48 per enrolled patient, largely unreimbursed.{{cite:penberthy-2012}}",
        },
      ],
    },
    {
      id: "why-caps-are-risky",
      heading: "Why are screen-fail caps tied to enrollment risky?",
      blocks: [
        {
          type: "p",
          text: "Because a run of failures is more likely than it feels. If each screen fails with probability equal to the screen failure rate, the chance that the first five screens all fail is that rate to the fifth power. At an 80% rate, that is 32.77%.{{cite:bienkowski-2008}}",
        },
        {
          type: "p",
          text: "Bienkowski and Goldfarb worked through that case: $400 per screening, $3,000 revenue and $1,000 profit per completed subject, and payment for up to four screen failures only once someone enrolls. About a third of the time the site enrolls no one and loses $2,000, which cuts its expected margin on the study from 33% to 11%. They concluded that schemes other than partial payment for every screen failure leave 25% to 35% of sites on a study with significant losses.{{cite:bienkowski-2008}}",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Run the math before you sign",
          text: "Chance that the first n screens all fail = SFR^n. At a 50% rate, five straight failures happen about 3% of the time; at 80%, about 33%. If the contract pays nothing until a patient randomizes, that is the chance of absorbing every screening cost so far.{{cite:bienkowski-2008}}",
        },
      ],
    },
    {
      id: "pricing-screen-fails",
      heading: "How should a site price screen failures?",
      blocks: [
        {
          type: "p",
          text: "Start from the protocol's screening visit: every procedure, lab and imaging study, plus coordinator and investigator time. Then work out how many screen failures each randomized patient will carry. At a screen failure rate s, that number is s / (1 - s).",
        },
        {
          type: "table",
          caption: "Screen failures carried by each randomized patient",
          columns: ["Screen failure rate", "Screen failures per randomized patient"],
          rows: [
            ["10%", "0.11"],
            ["30%", "0.43"],
            ["50%", "1.0"],
            ["56% (pooled MASH rate)", "1.3"],
            ["80%", "4.0"],
          ],
          note: "The MASH rate is from the pooled analysis above; the rest are illustrative. At 10%, Bienkowski and Goldfarb price the one expected failure into the nine enrolled patients: $400 / 9, about $44 each.{{cite:mash-sfr-2025,bienkowski-2008}}",
        },
        {
          type: "p",
          text: "Multiply by your unpaid cost per screen failure to see what the per-patient fee must absorb if screen fails are not paid. For example, at a 50% rate and $600 of unpaid cost per failure, each randomized patient carries $600 of screening loss. Use your own screening log for the rate, not the sponsor's estimate.{{cite:bienkowski-2008}}",
        },
      ],
    },
    {
      id: "what-to-negotiate",
      heading: "What should a site negotiate?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Pay every screen failure** for the procedures actually performed, without a ratio to enrollment. Bienkowski and Goldfarb concluded that partial payment for every screen failure is the only feasible option.{{cite:bienkowski-2008}}",
            "**If a cap is unavoidable, set it from data.** Base the ratio on the protocol's expected rate and published rates for the area, and add a clause to revisit it if the observed rate runs higher.",
            "**Price the screening visit in full:** coordinator and investigator time, labs, imaging, kit shipping and any central reads.",
            "**Add a pre-screening line** for chart review and calls. Sites are typically not compensated for feasibility work, and screening effort is largely unreimbursed.{{cite:redefining-feasibility-2024,penberthy-2012}}",
            "**Pay re-screens** if the protocol allows a patient to screen again.",
            "**Confirm coverage analysis** for every screening procedure so research-only items are not billed to insurance.{{cite:cms-ncd-310-1}}",
            "**Invoice monthly.** Screen fails should be payable when they happen, not held until an enrollment milestone.",
            "**Reopen after amendments** that change eligibility or the screening schedule.",
          ],
        },
      ],
    },
    {
      id: "reduce-screen-fails",
      heading: "How can a site lower its screen failure rate?",
      blocks: [
        {
          type: "p",
          text: "Check every criterion that the record can answer before booking the visit: recent labs, imaging and pathology reports, medication history and diagnosis dates. Keep a screen-fail log with the reason for each failure; it is the evidence for the next budget negotiation and shows which criteria to check earlier. Our [guide to reducing screen failure](/guides/reduce-screen-failure) covers the method.",
        },
        {
          type: "p",
          text: "Bond's [Identify](/identify) stage reads clinical notes, labs, imaging, pathology and molecular reports against the protocol and shows criterion-by-criterion evidence for every match, and its agents pre-screen patients by phone or text before booking a visit. Its pricing is a volume-based fee per screened patient plus a percentage of the randomization milestone payment for each patient, so part of the fee depends on patients randomizing.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol with a high screen failure rate. We will show which criteria Bond can check in the record before the visit.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is a typical screen failure reimbursement amount?",
      a: "There is no public benchmark, because it depends on the screening procedures in each protocol. Price it from the visit's actual procedures and staff time, and use the expected screen failure rate to decide whether a cap is acceptable.",
    },
    {
      q: "Can a site bill insurance for screening procedures?",
      a: "Not for items provided solely for research data collection, which Medicare's clinical trial policy excludes from routine costs.{{cite:cms-ncd-310-1}} Procedures that would be done for care anyway may be covered; your coverage analysis decides each one. This is not billing advice.",
    },
    {
      q: "Is pre-screening paid like screening?",
      a: "Usually not. Pre-screening happens before consent and is mostly record review and calls, which sponsors typically do not reimburse.{{cite:penberthy-2012}} See [pre-screening vs screening](/guides/pre-screening-vs-screening) for where the line falls.",
    },
  ],
  sources: [
    {
      id: "mash-sfr-2025",
      title: "Enrollment in Metabolic Dysfunction-Associated Steatohepatitis Clinical Trials: A Pooled Analysis of Screen Failure Rates",
      publisher: "American Journal of Gastroenterology (Souza M et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/40323026/",
      year: "2025",
      note: "Abstract read October 2026. Quote: \"Of 67 included RCTs, 58 reported enrollment data. The pooled SFR was 56.28% (95% confidence interval 50.14-62.23) in 44,949 individuals.\" Quote: \"SFR was higher in more recent trials, globally conducted trials, and trials funded by pharmaceutical companies.\"",
    },
    {
      id: "ibd-sf-2025",
      title: "Screen Failures and Causes in Inflammatory Bowel Disease Randomized Controlled Trials: A Study of 16 913 Screened Patients",
      publisher: "Inflammatory Bowel Diseases (Uzzan M et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/39326010/",
      year: "2025",
      note: "Abstract read October 2026; 17 phase 2 or 3 trials operated by IQVIA. Quote: \"The mean SF proportion was 0.43 per trial in UC.\" Quote: \"In CD clinical trials, the mean SF proportion was at 0.53.\" The plain-language summary gives 44% and 51%; the page uses the Results figures. Quote: \"The primary reason for SFs in UC was not meeting the overall (modified) Mayo score inclusion threshold and/or the endoscopic subscore of at least 2 (33.8% of all SF).\"",
    },
    {
      id: "retina-sf-2024",
      title: "Screen Failures in Clinical Trials in Retina",
      publisher: "Ophthalmology Retina, via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/38810882/",
      year: "2024",
      note: "Abstract read October 2026. Quote: \"Among 87 trials and 962 patients, 465 (48.2%) patients were successfully randomized and 497 (51.8%) patients were classified as screen failures.\" Quote: \"most were because of patients not meeting inclusion criteria of imaging findings (n = 221 [44.5%])\".",
    },
    {
      id: "bienkowski-2008",
      title: "Screen Failures in Clinical Trials: Financial Roulette or the Cost of Doing Business?",
      publisher: "Bienkowski RS and Goldfarb NM (Vol. 4, No. 7, July 2008), PDF hosted by Site Council",
      url: "https://sitecouncil.org/Articles/0807%20Screen_Failures.pdf",
      year: "2008",
      note: "Illustrative analysis, not a survey. Read October 2026. Quote: \"The clinical trial agreement states that the sponsor will pay the cost of $400 per screening, including up to four screen failures per enrolled subject.\" Table 1 gives a 32.77% probability of zero enrollments in five screens at SFR 0.8 (the text says 33.8%). Quote: \"The terms of the screen failure payment thus reduce the expected profit margin from 33% to 11%.\" Quote: \"Study sponsors are thus left with only one feasible option: partial payment to sites for every screen failure. Any other screen failure payment scheme generates significant losses for 25-35% of the sites on a given study\". Quote: \"the price for each enrolled subject must thus increase by $44 ($400/9) to cover the one expected screen failure.\" Quote: \"sponsors may decline to pay for screen failures. In these situations, sponsors are passing the cost of screen failures to the sites.\"",
    },
    {
      id: "cms-ncd-310-1",
      title: "National Coverage Determination: Routine Costs in Clinical Trials (310.1)",
      publisher: "Centers for Medicare & Medicaid Services",
      url: "https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?ncdid=1&ncdver=2",
      year: "2007",
      note: "Effective July 9, 2007. Read October 2026. Routine costs exclude: \"Items and services provided solely to satisfy data collection and analysis needs and that are not used in the direct clinical management of the patient\" and \"Items and services customarily provided by the research sponsors free-of-charge for any enrollee in the trial.\"",
    },
    {
      id: "fda-screening-tests",
      title: "Screening Tests Prior to Study Enrollment: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
      year: "1998",
      note: "Information sheet guidance, January 1998. Read October 2026. Quote: \"While an investigator may discuss availability of studies and the possibility of entry into a study with a prospective subject without first obtaining consent, informed consent must be obtained prior to initiation of any clinical procedures that are performed solely for the purpose of determining eligibility for research\".",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice (Penberthy LT et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Virginia Commonwealth University Massey Cancer Center, 18 months. Read October 2026. Quote: \"The cost of eligibility screening ranged by study phase from $129.15 to $336.48 per enrolled patient.\" Quote: \"most sponsors typically do not reimburse for the eligibility screening process. Screening usually occurs before consent and includes activities such as reviewing medical records\".",
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
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, pricing and compliance status described by Bond Health, October 2026.",
    },
  ],
  related: [
    { label: "Screen failure rate", href: "/glossary/screen-failure-rate", description: "How the rate is defined and calculated." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Catching ineligible patients before the screening visit." },
    { label: "Pre-screening vs screening", href: "/guides/pre-screening-vs-screening", description: "Where record review ends and consented screening begins." },
    { label: "Pricing", href: "/pricing", description: "Bond's per-screened-patient and randomization-based pricing." },
  ],
};

export default page;
