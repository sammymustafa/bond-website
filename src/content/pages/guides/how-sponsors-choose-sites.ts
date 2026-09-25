import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/how-sponsors-choose-sites",
  category: "guide",
  title: "How sponsors select clinical trial sites: feasibility guide",
  description:
    "What sponsors and CROs check before selecting a site: feasibility questionnaires, performance history, start-up speed, EHR-derived counts and diversity plans.",
  keywords: [
    "how sponsors select clinical trial sites",
    "clinical trial site feasibility",
    "site selection criteria",
    "site performance metrics",
    "EHR patient counts for feasibility",
  ],
  eyebrow: "Guide",
  h1: "How sponsors choose sites, and what they check",
  intro:
    "Sponsors and CROs build site lists from performance databases, CRO networks, feasibility questionnaires and qualification visits. What moves a site onto the final list is evidence: enrollment against past commitments, start-up speed, data quality, and a patient count the sponsor can believe.",
  summary: "What sponsors check during site selection, and how a site can show enrollment, start-up and patient-count evidence.",
  lastUpdated: "2026-09-22",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "Feasibility questionnaire template",
    secondaryHref: "/templates/feasibility-questionnaire",
  },
  sections: [
    {
      id: "selection-process",
      heading: "How does a sponsor build its site list?",
      blocks: [
        {
          type: "p",
          text: "Selection usually starts before a site hears about the study. The sponsor, or the CRO running feasibility, pulls candidates from its own performance records, investigator databases, its site network, and sites that ran similar protocols. Regulation sets the floor: for drug studies under an IND, [21 CFR 312.53(a)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.53) says a sponsor must \"select only investigators qualified by training and experience as appropriate experts to investigate the drug.\"{{cite:ecfr-312-53}} Above that floor, the choice is a judgment about who will enroll.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Long list from data",
              text: "The sponsor or CRO screens its database and prior-study records for indication experience, enrollment history and investigator status. Sites that under-delivered recently are often dropped here.",
            },
            {
              title: "Confidentiality agreement and synopsis",
              text: "Shortlisted sites sign a confidentiality agreement and receive a protocol synopsis.",
            },
            {
              title: "Feasibility questionnaire",
              text: "The site answers questions on its patients, competing studies, staff, equipment, start-up timelines and expected enrollment. Sites are typically not paid for this work.{{cite:feasibility-2024}}",
            },
            {
              title: "Pre-study or qualification visit",
              text: "A CRA visits, in person or remotely, to confirm facilities, investigator oversight, pharmacy and lab capability, and the recruitment plan.",
            },
            {
              title: "Selection and start-up",
              text: "Selected sites move into budget, contract and IRB work. A 2025 paper notes that industry still describes more than two months to select sites, then eight more months to activate them.{{cite:jcts-2025-startup}} Before an investigator starts, [21 CFR 312.53(c)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.53) requires the sponsor to collect a signed Form FDA 1572 and the investigator's CV or equivalent.{{cite:ecfr-312-53}}",
            },
          ],
        },
        {
          type: "p",
          text: "Our [feasibility questionnaire template](/templates/feasibility-questionnaire) lists the questions most sponsors ask. The glossary defines [site feasibility](/glossary/site-feasibility) and [site activation](/glossary/site-activation).",
        },
      ],
    },
    {
      id: "why-sponsors-are-cautious",
      heading: "Why are sponsors wary of a site's enrollment estimate?",
      blocks: [
        {
          type: "p",
          text: "Because the record says estimates are unreliable. In a 2013 Tufts CSDD analysis of more than 150 studies and nearly 16,000 sites, 11% of sites in a typical trial enrolled no one, 37% under-enrolled, 39% met their target and 13% exceeded it. Most trials (89%) still reached their enrollment goals, but usually by nearly doubling the original timeline.{{cite:tufts-2013-recruitment}}",
        },
        {
          type: "stats",
          items: [
            { value: "11%", label: "of sites in a typical trial enrolled no patients (2013 analysis)", cite: "tufts-2013-recruitment" },
            { value: "19%", label: "of sites in 173 cancer trials enrolled exactly one patient", cite: "phesi-labiotech-2023" },
            { value: "62%", label: "site activation rate in North America, per Tufts CSDD (2024)", cite: "ctv-tufts-2024" },
            { value: "$55,716", label: "average direct cost per day of a Phase III trial, 2023 dollars", cite: "tufts-delay-2024" },
          ],
        },
        {
          type: "p",
          text: "Weak sites are expensive. Phesi estimated that a cancer-trial site enrolling a single patient costs about $130,000 per patient, almost ten times the $14,167 at a better-performing site.{{cite:phesi-labiotech-2023}} In the STICH heart-failure trial, 44 sites that had been approved never enrolled a patient, at an estimated $10,000 per deactivated site.{{cite:fogel-2018}}",
        },
        {
          type: "p",
          text: "Activation is a separate risk. At the 2024 SCOPE Summit, Ken Getz of Tufts CSDD said that about 40% of North American sites a sponsor looks to engage will not activate: some never get through contracting and budgeting, and some never get IRB approval.{{cite:ctv-tufts-2024}}",
        },
      ],
    },
    {
      id: "metrics-that-matter",
      heading: "Which site metrics do sponsors weigh most?",
      blocks: [
        {
          type: "table",
          caption: "Site metrics sponsors and CROs check during selection",
          columns: ["Metric", "What the sponsor wants to know", "Evidence a site can bring"],
          rows: [
            ["Enrollment vs commitment", "Whether you delivered what you promised on similar studies", "Randomized patients against target for each recent study, including the bad ones"],
            ["Start-up time", "How soon you can open", "Median days from contract receipt to activation. In WCG's 2024 survey, 60% of independent sites and physician practices said they can start studies in under 60 days.{{cite:wcg-2024}}"],
            ["Time to first patient", "How soon you screen the first patient once open", "Days from activation to first patient screened. CRIO's 2026 start-up benchmarks put the median at 20 days and the fastest-quartile mark at 8.{{cite:crio-startup-2026}}"],
            ["Screen failure rate", "Whether the patients you send are actually eligible", "Screened vs randomized by study, with top failure reasons. See [screen failure rate](/glossary/screen-failure-rate)."],
            ["Query rate", "How much cleaning your data will need", "Queries per subject and median days to resolve them"],
            ["Protocol deviations", "Whether you follow the protocol as written", "Deviations per enrolled subject, major and minor. CRIO's benchmark median visit-window deviation rate is 18%.{{cite:crio-startup-2026}} See [protocol deviation](/glossary/protocol-deviation)."],
            ["Capacity", "Whether you have room for this study now", "Studies per coordinator and competing studies. In WCG's 2024 survey, 46% of sites said operational challenges limited their capacity for new studies.{{cite:wcg-2024}}"],
            ["Technology fit", "Whether you will work in the sponsor's systems", "The EDC, eSource, CTMS and eISF you run. WCG cites a 2024 Florence Healthcare survey in which 43% of sponsors called adoption of their own software a key selection criterion.{{cite:wcg-2024}}"],
          ],
          note: "Survey and vendor benchmarks are reference points, not targets. Say which benchmark you compare against.",
        },
        {
          type: "p",
          text: "In WCG's 2024 survey of 852 sites, 69% named budgets and contracts among the largest contributors to start-up time, more than any other factor. The same report cites a 2024 benchmarking study of North American cancer centers in which only 9% met a 90-day activation timeline for industry-sponsored studies, against nearly 60% for NCI-sponsored studies.{{cite:wcg-2024}}",
        },
      ],
    },
    {
      id: "many-patients",
      heading: "Why does \"we have many patients\" not win the study?",
      blocks: [
        {
          type: "p",
          text: "Most sites say they have the population. A sponsor cannot tell a site that has checked from one that is guessing, so it discounts both. A diagnosis count from a billing query skips the criteria that do most of the excluding: lab thresholds, prior therapies, washout windows, comorbidities, and whether the patient still gets care at the site.",
        },
        {
          type: "p",
          text: "Track record fills the gap. A 2018 review of why trials fail found that sites with a history of meeting enrollment targets are more likely to meet them again, and that a site that has run 6 to 10 trials has a greater probability of enrolling on time than one with fewer.{{cite:fogel-2018}} A site with less history needs stronger evidence, usually a patient count with its method attached.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Answers a sponsor will discount",
          text: "A diagnosis total with no date range. A share of \"our practice\" with no denominator. An enrollment estimate that matches the sponsor's per-site target exactly. A physician's recollection with no chart check behind it.",
        },
      ],
    },
    {
      id: "ehr-derived-counts",
      heading: "How should a site present EHR-derived patient counts?",
      blocks: [
        {
          type: "p",
          text: "Present a count like a lab result: with the method, the date and the limits, so the sponsor can judge how much it will shrink at screening.",
        },
        {
          type: "ol",
          items: [
            "**Start from the protocol, not the diagnosis.** List the [inclusion and exclusion criteria](/glossary/inclusion-and-exclusion-criteria) and mark which the EHR can answer from structured fields, which need notes or reports, and which cannot be checked in the chart at all.",
            "**Show the funnel.** Report the count after each group of criteria: diagnosis, age and sex, a recent visit at your site, key labs, prior or current therapy, major exclusions. The drop between steps shows the sponsor you applied the criteria.",
            "**State the query date and lookback window.** Say when the query ran and how recently a patient must have been seen to count as active.",
            "**Separate computed from reviewed.** If coordinators checked a sample of charts from the funnel, say how many and what share held up. That ratio is often the most persuasive number you can offer.",
            "**Break out demographics.** Give the final count by race, ethnicity, sex and age group where the data allows. Sponsors writing diversity plans will ask (see the next section).",
            "**Convert to an enrollment estimate last.** Apply your own historical screen failure and consent rates, and show that step, rather than presenting the eligible pool as your commitment.",
          ],
        },
        {
          type: "p",
          text: "Keep counts aggregate and free of identifiers. The chart review behind them usually falls under the HIPAA provision for reviews [preparatory to research](/glossary/preparatory-to-research), [45 CFR 164.512(i)(1)(ii)](https://www.ecfr.gov/current/title-45/section-164.512), which bars removing protected health information from the covered entity during the review.{{cite:ecfr-164-512}} Follow your privacy office's process.",
        },
        {
          type: "p",
          text: "[Identify](/identify), Bond Health's EHR screening step, reads structured and unstructured records against a study's inclusion and exclusion criteria, ranks candidates and shows the chart evidence behind each criterion decision. A coordinator can use that evidence to check a sample before reporting a count. Full EHR integration typically takes 4 to 6 weeks, depending on the EHR and IT review.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "diversity-requirements",
      heading: "How do diversity requirements affect site selection?",
      blocks: [
        {
          type: "p",
          text: "The Food and Drug Omnibus Reform Act of 2022 (FDORA) amended the FD&C Act to require a Diversity Action Plan for Phase 3 and other pivotal drug studies and for certain device studies, under [sections 505(z) and 520(g)(9)](https://www.fda.gov/media/184768/download). The plan must set enrollment goals disaggregated by the race, ethnicity, sex and age group of the clinically relevant population.{{cite:fda-dap-report}}",
        },
        {
          type: "p",
          text: "The requirement applies to certain studies that begin enrollment more than 180 days after FDA publishes final guidance.{{cite:fda-dap-report}} As of September 2026, FDA's guidance page still lists the June 2024 document as a draft and notes that it was restored under a court order, so the 180-day clock has not started.{{cite:fda-dap-guidance}} FDA received voluntary plans for some studies in fiscal years 2023 and 2024, and a sponsor that writes one needs sites that can help meet its goals.{{cite:fda-dap-report}}",
        },
        {
          type: "p",
          text: "For a site, demographic data becomes part of feasibility. Be ready to report your population by race, ethnicity, sex and age group, the languages your staff can consent in, and your community outreach. Say where race and ethnicity fields are incomplete. The [Diversity Action Plan](/glossary/diversity-action-plan) entry covers the plan itself.",
        },
      ],
    },
    {
      id: "measure-performance",
      heading: "How should a site track the metrics sponsors check?",
      blocks: [
        {
          type: "p",
          text: "Keep a one-page performance summary and update it every quarter. Most of it comes from your CTMS and the EDC reports sponsors already send you.",
        },
        {
          type: "checklist",
          items: [
            "Randomized patients against commitment for every study that closed in the past three years.",
            "Median days from contract receipt to activation, split into budget, contract and IRB.",
            "Median days from activation to first patient screened and first patient randomized.",
            "Screen failure rate by study, with the top reasons.",
            "Open queries and median days to resolve them.",
            "Protocol deviations per enrolled subject, major and minor.",
            "Active studies per coordinator and current open positions.",
          ],
        },
        {
          type: "p",
          text: "Report weak numbers with a reason next to them. A sponsor trusts a site that explains a slow study more than one that lists only its best. The guide to [winning more studies](/guides/win-more-studies) covers the relationship side.",
        },
      ],
    },
    {
      id: "this-week",
      heading: "What should I do this week?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Pull enrollment against commitment for your last five closed studies.",
            "Take one open feasibility request and rebuild the patient count as a funnel, with the query date and the criteria you could not check.",
            "Ask a coordinator to review a small sample of charts from the bottom of the funnel and record how many hold up.",
            "Time your last budget and contract cycle from receipt to signature, and find the step that took longest.",
            "Check how complete the race, ethnicity and preferred language fields are in your EHR.",
            "Save the answers in the [feasibility questionnaire template](/templates/feasibility-questionnaire) so the next response takes less time.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol you are evaluating and see how Bond screens records against each criterion and shows the evidence behind every decision.",
          secondaryLabel: "Bond for research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do sponsors pay sites to complete feasibility questionnaires?",
      a: "Usually not, according to a 2024 paper from a task force of sites, sponsors and CROs. It also cites an estimate, extrapolated from an ASCO survey of oncology sites, that the feasibility burden costs the industry $1.6 billion.{{cite:feasibility-2024}}",
    },
    {
      q: "How long does site selection and activation take?",
      a: "Industry sources describe more than two months to select sites and eight more to activate them. In 13 trials in NIH's Trial Innovation Network, sites activated in a median of 133 days with a standardized workflow, a site navigator and electronic tracking, against 277 days without the standardized workflow.{{cite:jcts-2025-startup}}",
    },
    {
      q: "Can a site share EHR patient counts with a sponsor?",
      a: "Yes, as aggregate counts with no patient identifiers. If the chart review relies on [45 CFR 164.512(i)(1)(ii)](https://www.ecfr.gov/current/title-45/section-164.512), no protected health information may leave the covered entity during the review.{{cite:ecfr-164-512}}",
    },
    {
      q: "What if my site has no track record in the indication?",
      a: "Bring stronger evidence on this study: a criteria-based funnel, a reviewed chart sample, start-up times from your other studies, and a realistic enrollment estimate.",
    },
  ],
  sources: [
    {
      id: "tufts-2013-recruitment",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Analysis of more than 150 studies and nearly 16,000 sites; global, pre-2013 data. Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\"",
    },
    {
      id: "ctv-tufts-2024",
      title: "Tufts CSDD: New Insights on The Clinical Trial Industry",
      publisher: "Clinical Trial Vanguard (conference coverage of Ken Getz, Tufts CSDD)",
      url: "https://www.clinicaltrialvanguard.com/conference-coverage/tufts-csdd-new-insights-on-the-clinical-trial-industry/",
      year: "2024",
      note: "Secondary report of Ken Getz's Tufts CSDD presentation at SCOPE 2024; activation rate reported as 62% in North America. Also: \"Some of those sites may never get through the contracting and budgeting process. They may never get approval from the IRB\" Quote: \"What this suggests is that 40% of sites in North America that we actually will look to engage will not activate.\"",
    },
    {
      id: "phesi-labiotech-2023",
      title: "Almost 20% of cancer trials have recruited only one patient",
      publisher: "Labiotech (reporting Phesi analysis)",
      url: "https://www.labiotech.eu/trends-news/cancer-trials-recruitment/",
      year: "2023",
      note: "173 cancer trials, 11,826 investigator sites; oncology only. Quote: \"single patient sites cost $130,000 per patient, almost 10 times that of the patient cost at a better-performing site of $14,167\"",
    },
    {
      id: "wcg-2024",
      title: "2024 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/2024/10/WCG_2024_Clinical_Research_Site_Challenges_Report.pdf",
      year: "2024",
      note: "Survey of 852 sites, April to June 2024. The 43% sponsor figure is WCG citing Florence's 2024 survey; the cancer-center activation figures are WCG citing Kasner et al. (2024), North American cancer center benchmarking, JCO Oncology Practice. The 69% is a multi-select answer to \"What were the largest contributors to your study start-up timelines last year?\" Quote: \"Across all types of clinical research sites, budgets and contracts were the main offenders contributing to delayed study start-up timelines, affecting 69% of respondents.\"",
    },
    {
      id: "jcts-2025-startup",
      title: "Accelerating start-up cycles in investigator-initiated multicenter clinical trials",
      publisher: "Journal of Clinical and Translational Science",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12695510/",
      year: "2025",
      note: "NIH/NCATS Trial Innovation Network investigator-initiated trials, not industry trials; 13 trials, 308 site activations. The 133-day group used all three elements (standardized workflow, site navigator, electronic tracking). Quote: \"Industry continues to describe start-up cycle times much the same as they were 20 years ago, reporting more than two months to select sites, then another eight months from site selection to site activation.\" Also: \"four trials, without the lean workflow sequencing or benchmarks, activated a total of 96 sites in a median of 277 days.\"",
    },
    {
      id: "crio-startup-2026",
      title: "What It Takes to Start a Study: Site Start-up Benchmarks",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/what-it-takes-to-start-a-study-site-start-up-benchmarks/",
      year: "2026",
      note: "Vendor analysis CRIO performed for the Site Accreditation and Standards Institute (SASI); sample size not stated. Quartile 1 is the slowest quarter, Quartile 3 the fastest. Quote: \"Days from site activation to first patient visit screened | Study | 34 | 20 | 8\" and \"Visit window deviation rate | Organization | 35% | 18% | 8%\"",
    },
    {
      id: "fogel-2018",
      title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
      year: "2018",
      note: "Quote: \"a site that has conducted between 6 and 10 clinical trials has a greater probability of meeting enrollment within the required time than does a site with a history of fewer trials.\" Also: \"44 sites that had been approved for the trial failed to enroll a patient. The cost per deactivated site was estimated at $10,000.\"",
    },
    {
      id: "feasibility-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Task force of sites (43%), site networks (20%), sponsors and CROs; corresponding author from Florence Healthcare. The $1.6B figure is cited to a Clinical Leader article that extrapolates from the ASCO oncology feasibility survey. Quote: \"the scale of the problem across the industry is estimated at $1.6B\" and \"sites are typically not compensated for feasibility assessment work\"",
    },
    {
      id: "tufts-delay-2024",
      title: "Quantifying the Value of a Day of Delay in Drug Development",
      publisher: "Tufts Center for the Study of Drug Development",
      url: "https://csdd.tufts.edu/sites/default/files/2025-02/Aug2024%20Day%20of%20Delay%20White%20Paper%20Final.pdf",
      year: "2024",
      note: "Direct trial costs only, 2023 dollars. Quote: \"Phase III clinical trials had the highest direct cost per day at $55,716.\"",
    },
    {
      id: "fda-dap-report",
      title: "Report to Congress: Diversity Action Plans Summary FY 2023 and FY 2024",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/184768/download",
      year: "2025",
      note: "Also: \"FDA has received voluntary diversity plans for some clinical studies conducted between October 1, 2022, and September 30, 2024\" Quote: \"Sections 505(z) and 520(g)(9) of the FD&C Act require that sponsors submit a Diversity Action Plan that specifies goals for clinical study enrollment, and FDORA states that such goals must be disaggregated by the race, ethnicity, sex, and age group demographic characteristics of the clinically relevant population. The requirement to submit Diversity Action Plans will apply to certain studies for which enrollment commences after 180 days from the publication of the final guidance.\"",
    },
    {
      id: "fda-dap-guidance",
      title: "Diversity Action Plans to Improve Enrollment of Participants from Underrepresented Populations in Clinical Studies (draft guidance)",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/diversity-action-plans-improve-enrollment-participants-underrepresented-populations-clinical-studies",
      year: "2024",
      note: "Checked September 22, 2026: page lists status Draft, issued June 2024, docket FDA-2021-D-0789. Also: \"Per a court order, HHS is required to restore this website to its version as of 12:00 AM on January 29, 2025.\" Quote: \"Not for implementation. Contains non-binding recommendations.\"",
    },
    {
      id: "ecfr-312-53",
      title: "21 CFR 312.53: Selecting investigators and monitors",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.53",
      year: "2026",
      note: "Paragraphs (a) and (c). Quote: \"A sponsor shall select only investigators qualified by training and experience as appropriate experts to investigate the drug.\" Also: \"Before permitting an investigator to begin participation in an investigation, the sponsor shall obtain the following: (1) A signed investigator statement (Form FDA-1572)\" and \"(2) Curriculum vitae. A curriculum vitae or other statement of qualifications of the investigator\"",
    },
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512: Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Paragraph (i)(1)(ii), reviews preparatory to research. Quote: \"No protected health information is to be removed from the covered entity by the researcher in the course of the review\"",
    },
    {
      id: "bond-site",
      title: "Bond Health: platform overview, FAQ and pricing",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
    },
  ],
  related: [
    { label: "Feasibility questionnaire template", href: "/templates/feasibility-questionnaire", description: "The questions sponsors ask, with notes on what a strong answer contains." },
    { label: "How to win more studies", href: "/guides/win-more-studies", description: "Building the record and relationships that put a site on the list." },
    { label: "Bond for research sites", href: "/for/research-sites", description: "How sites use Bond for screening, outreach and consent support." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Screens EHR records against trial criteria and shows the chart evidence for each decision." },
    { label: "Site feasibility", href: "/glossary/site-feasibility", description: "What feasibility covers and who does the work." },
  ],
};

export default page;
