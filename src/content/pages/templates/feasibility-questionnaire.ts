import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/templates/feasibility-questionnaire",
  category: "template",
  title: "Site feasibility questionnaire template for clinical trials",
  description:
    "An editable site feasibility questionnaire: site profile, staff, experience, EHR-derived patient counts, competing studies, equipment, timelines and budget.",
  keywords: [
    "site feasibility questionnaire template clinical trial",
    "clinical trial feasibility questionnaire",
    "site feasibility assessment",
    "EHR patient counts for feasibility",
    "site selection questionnaire",
  ],
  eyebrow: "Template",
  h1: "Feasibility questionnaire template for research sites",
  intro:
    "Sponsors and CROs send a feasibility questionnaire before they shortlist a site, and many cover the same ground in a different order. This template puts those questions in one place so your site can answer once, keep the answers current, and copy them into each sponsor's form. It includes a worksheet for patient counts drawn from your EHR, because a count with its method attached is easier to believe than an estimate.",
  summary: "An editable site feasibility questionnaire with an EHR patient-count worksheet and guidance on answering with data.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "How sponsors choose sites",
    secondaryHref: "/guides/how-sponsors-choose-sites",
  },
  sections: [
    {
      id: "what-it-is-for",
      heading: "What is this feasibility questionnaire for?",
      blocks: [
        {
          type: "p",
          text: "A feasibility questionnaire is how a sponsor or CRO decides whether your site can run a study and enroll for it. In a 2024 ACRP blog post, one site leader put these forms at anywhere from 10 to 40 pages.{{cite:acrp-feasibility-2024}} Sites are typically not compensated for feasibility work, according to a 2024 paper by an industry task force of sites, site networks, sponsors and CROs. The same paper cites an estimate, extrapolated from oncology survey data, that the burden and inefficiency of site feasibility cost the industry $1.6 billion.{{cite:feasibility-2024}}",
        },
        {
          type: "stats",
          items: [
            { value: "11%", label: "of sites in a typical trial enroll no patients", cite: "tufts-2013" },
            { value: "37%", label: "of sites enroll fewer patients than planned", cite: "tufts-2013" },
            { value: "$1.6B", label: "estimated industry-wide cost of feasibility inefficiency, extrapolated from oncology", cite: "feasibility-2024" },
          ],
        },
        {
          type: "p",
          text: "The sponsor's caution has a basis. Those site-performance figures come from a Tufts CSDD analysis of more than 150 studies and nearly 16,000 sites, released in January 2013.{{cite:tufts-2013}} The questionnaire is the sponsor's first attempt to tell the sites that will enroll from the ones that will not.",
        },
        {
          type: "p",
          text: "Use this template as your site's master answer file. Fill it in once per therapeutic area, update it each quarter, and paste from it when a sponsor's form arrives. The guide to [how sponsors choose sites](/guides/how-sponsors-choose-sites) explains what happens to your answers after you send them.",
        },
        {
          type: "download",
          label: "Feasibility questionnaire template (Word)",
          href: "/downloads/feasibility-questionnaire.docx",
          format: "Word document (.docx), editable",
        },
      ],
    },
    {
      id: "how-to-use",
      heading: "How should your site use the template?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Fill in the standing sections once",
              text: "Site profile, staff, experience, equipment and timelines change slowly. Complete them now and have the site director review them.",
            },
            {
              title: "Run the patient count for each protocol",
              text: "The patient population section depends on the protocol's criteria. Rerun the EHR query for each synopsis and record the query date.",
            },
            {
              title: "Check competing studies",
              text: "List every open or planned study at your site that draws on the same patients, including investigator-initiated work.",
            },
            {
              title: "Have the PI review it",
              text: "The sponsor will hold the principal investigator to the enrollment estimate. The PI should see the count, the method and the projection before the form goes out.",
            },
            {
              title: "Keep a dated copy",
              text: "Save each completed response with the date and the sponsor's version. When the study starts, compare actual enrollment against what you projected.",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Answer with data, not adjectives",
          text: "Replace \"large patient population\" with a count, a query date and a method. Replace \"experienced staff\" with named roles and the studies each person has run. If you do not know a number, say so and say how you would get it. A sponsor can plan around an honest gap. It cannot plan around a guess.",
        },
      ],
    },
    {
      id: "site-profile-staff-experience",
      heading: "What goes in the site profile, staff and experience sections?",
      blocks: [
        {
          type: "p",
          text: "These answers change slowly, so they can be reused across sponsors. Replace the bracketed text with your own details.",
        },
        {
          type: "form",
          title: "Section A. Site profile",
          fields: [
            { label: "Site name and address", hint: "[Site name], [street address], [city, state, ZIP]", kind: "text" },
            {
              label: "Site type",
              kind: "select",
              options: [
                "Independent research site",
                "Site network member",
                "Academic medical center",
                "Hospital or health system",
                "Physician practice",
                "FQHC or community health center",
              ],
            },
            { label: "Principal investigator", hint: "[Name, credentials, specialty, board certification]", kind: "text" },
            { label: "Primary contact for this study", hint: "[Name, role, email, phone]", kind: "text" },
            {
              label: "IRB of record",
              hint: "If a local IRB is required, give its meeting schedule and usual turnaround.",
              kind: "select",
              options: ["Central IRB accepted", "Local IRB required", "Either, depending on the sponsor"],
            },
            {
              label: "Electronic systems in use",
              hint: "EHR vendor, CTMS, eRegulatory or eISF, eSource. Note which sponsor systems your staff already use.",
              kind: "textarea",
            },
            { label: "Patient catchment", hint: "Clinics, referral partners and counties your site draws from.", kind: "textarea" },
          ],
        },
        {
          type: "form",
          title: "Section B. Staff",
          fields: [
            {
              label: "Investigators",
              hint: "PI and each sub-investigator: [name], [specialty], [studies as PI or sub-investigator in the past three years], [GCP training date].",
              kind: "textarea",
            },
            {
              label: "Study coordinators",
              hint: "Number of coordinators, time each devotes to research, and current study load per coordinator.",
              kind: "text",
            },
            { label: "Regulatory, data entry and pharmacy support", hint: "Named roles, and whether each is in-house or shared.", kind: "textarea" },
            {
              label: "Languages spoken by consenting staff",
              hint: "Languages in which staff can hold the consent discussion without an interpreter.",
              kind: "text",
            },
            { label: "Staffing changes expected during the study", hint: "Planned hires, departures or leave.", kind: "textarea" },
          ],
        },
        {
          type: "form",
          title: "Section C. Experience",
          fields: [
            {
              label: "Studies in this therapeutic area, past three years",
              hint: "For each: phase, indication, sponsor or CRO, enrollment commitment, patients randomized, status.",
              kind: "textarea",
            },
            {
              label: "Enrollment against commitment for closed studies",
              hint: "Randomized versus committed for each study that closed in the past three years. Give a reason next to any shortfall.",
              kind: "textarea",
            },
            {
              label: "Screen failure rate on similar studies",
              hint: "Screen failures divided by patients screened, with the top reasons.",
              kind: "text",
            },
            {
              label: "Audit and inspection history",
              hint: "FDA inspections and sponsor audits, with outcomes and any Form FDA 483 observations.",
              kind: "textarea",
            },
          ],
        },
        {
          type: "p",
          text: "Sponsors weigh this history for a reason: sites with a track record of successful enrollment are more likely to meet their targets.{{cite:fogel-2018}} Systems count too. Florence's 2024 State of Technology Enabled Clinical Trials report, as cited in WCG's 2024 site survey report, found that 43% of sponsors view a site's adoption of the sponsor's software as a key selection criterion, so list the sponsor platforms your staff already know.{{cite:wcg-2024}}",
        },
      ],
    },
    {
      id: "patient-population",
      heading: "How should you report the patient population?",
      blocks: [
        {
          type: "p",
          text: "A diagnosis-code count is not a count of eligible patients. The worksheet below turns one into the other in steps, so the sponsor can see which [inclusion and exclusion criteria](/glossary/inclusion-and-exclusion-criteria) you applied and which you could not check in the chart.",
        },
        {
          type: "table",
          caption: "EHR patient-count worksheet",
          columns: ["Step", "Criteria applied", "Data source", "Patients remaining"],
          rows: [
            ["Diagnosis", "[ICD-10-CM codes or problem-list terms for the condition]", "Problem list, encounter diagnoses", "[n]"],
            ["Active at your site", "Seen at [site] within [lookback window]", "Encounters", "[n]"],
            ["Age and sex", "[Protocol age range and sex criteria]", "Demographics", "[n]"],
            ["Key labs and measures", "[Lab thresholds, vitals or scores the protocol requires]", "Lab results, vitals, flowsheets", "[n]"],
            ["Prior and current therapy", "[Required or excluded medications and washout periods]", "Medication lists, orders", "[n]"],
            ["Major exclusions", "[Conditions or events that exclude]", "Problem list, notes, reports", "[n]"],
            ["Chart-reviewed sample", "[n] charts reviewed by [role]; [n] held up", "Coordinator review", "[n]"],
          ],
          note: "Record the query date, the lookback window and who ran the query. Criteria the chart cannot answer, such as willingness to follow the visit schedule, belong in the pre-screening call, not the count.",
        },
        {
          type: "form",
          title: "Section D. Patient population",
          fields: [
            { label: "Query date and method", hint: "[Date], [who ran it], [EHR report, data warehouse or screening software]", kind: "text" },
            { label: "Final count from the worksheet", kind: "number" },
            { label: "Criteria you could not check in the EHR", hint: "List them. These are checked at pre-screening or screening.", kind: "textarea" },
            {
              label: "Demographic breakdown of the final count",
              hint: "By race, ethnicity, sex and age group, where the data allows. Note fields that are often blank.",
              kind: "textarea",
            },
            {
              label: "New patients per month who meet the key criteria",
              hint: "From new diagnoses or referrals over a recent period. State the period.",
              kind: "text",
            },
            {
              label: "Projected randomizations per month",
              hint: "Apply your historical consent and screen failure rates to the final count and to new patients per month, over the planned enrollment period. Show the arithmetic.",
              kind: "text",
            },
            {
              label: "Recruitment sources beyond the EHR",
              hint: "Referral partners, registries, community outreach, IRB-approved advertising.",
              kind: "textarea",
            },
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Do not commit the eligible pool",
          text: "The final count is patients who might qualify, not patients who will enroll. Convert it to an enrollment estimate last, using your own screen failure and consent rates, and show that step. The guide to [pre-screening vs screening](/guides/pre-screening-vs-screening) explains where the pool shrinks.",
        },
      ],
    },
    {
      id: "competing-studies-equipment-timelines",
      heading: "What should you report on competing studies, equipment and timelines?",
      blocks: [
        {
          type: "form",
          title: "Section E. Competing studies",
          fields: [
            {
              label: "Open studies that draw on the same patients",
              hint: "[Sponsor or protocol], [phase], [status], [where the criteria overlap]",
              kind: "textarea",
            },
            { label: "Planned studies now in start-up", hint: "Same details as above.", kind: "textarea" },
            {
              label: "How you would prioritize referrals",
              hint: "Which study gets first referral when a patient qualifies for more than one.",
              kind: "textarea",
            },
          ],
        },
        {
          type: "form",
          title: "Section F. Facilities and equipment",
          fields: [
            { label: "Dedicated exam rooms for research visits", kind: "checkbox" },
            { label: "Locked, access-controlled storage for investigational product", kind: "checkbox" },
            { label: "Temperature-monitored refrigerator and freezer with alarms and logs", kind: "checkbox" },
            { label: "Ultra-low temperature freezer, if the protocol requires one", kind: "checkbox" },
            { label: "Refrigerated centrifuge", kind: "checkbox" },
            { label: "Investigational pharmacy or pharmacist oversight", kind: "checkbox" },
            { label: "ECG machine with calibration records", kind: "checkbox" },
            { label: "On-site or contracted imaging: [modalities]", kind: "checkbox" },
            { label: "Staff trained to ship biological samples as dangerous goods", kind: "checkbox" },
            { label: "Remote monitoring access to the EHR or eSource", kind: "checkbox" },
            { label: "Other protocol-specific equipment", hint: "[List, with calibration or maintenance dates]", kind: "textarea" },
          ],
        },
        {
          type: "form",
          title: "Section G. Start-up timelines",
          fields: [
            {
              label: "Budget and contract review",
              hint: "Median days from receipt to signature on recent studies, and who reviews: the site, the institution, or both.",
              kind: "text",
            },
            {
              label: "IRB review",
              hint: "Central IRB reliance steps, or local IRB meeting frequency and median days to approval.",
              kind: "text",
            },
            { label: "Earliest site initiation visit", hint: "[Date staff can attend]", kind: "text" },
            { label: "Activation to first patient screened", hint: "Median days on recent studies.", kind: "text" },
            { label: "Blackout dates", hint: "Holidays, staff leave or audits during the projected enrollment period.", kind: "text" },
          ],
        },
        {
          type: "table",
          caption: "Published start-up benchmarks to check your answers against",
          columns: ["Measure", "Published benchmark", "What to report"],
          rows: [
            [
              "Activation to first patient screened",
              "Median 20 days; top quartile 8 days, bottom quartile 34 days, in a CRIO analysis for SASI published July 2026{{cite:crio-2026}}",
              "Your median across recent studies",
            ],
            [
              "Start-up at independent sites and physician practices",
              "60% reported starting studies in under 60 days in WCG's 2024 site survey{{cite:wcg-2024}}",
              "Your median from contract receipt to activation",
            ],
            [
              "Start-up at academic medical centers, community hospitals and health systems",
              "77% reported start-up longer than 60 days in the same survey{{cite:wcg-2024}}",
              "The same measure, split into budget, contract and IRB",
            ],
          ],
          note: "If your numbers are slower than these, give the reason next to them. A sponsor trusts an explained delay more than an unexplained one.",
        },
      ],
    },
    {
      id: "budget-expectations",
      heading: "What should the budget section ask?",
      blocks: [
        {
          type: "p",
          text: "Some questionnaires ask about budget expectations before a draft budget exists. State your standard fees and terms now so the negotiation starts from your numbers.",
        },
        {
          type: "form",
          title: "Section H. Budget expectations",
          fields: [
            { label: "Start-up fee", hint: "[Amount], non-refundable, invoiced at [contract signature or activation]", kind: "text" },
            { label: "IRB fees", hint: "Initial review, continuing review and amendments, if not paid directly by the sponsor.", kind: "text" },
            { label: "Pharmacy fees", hint: "Set-up, dispensing and close-out.", kind: "text" },
            {
              label: "Per-patient visit costs",
              hint: "From your research rate sheet for the procedures in the schedule of assessments.",
              kind: "textarea",
            },
            {
              label: "Screen failure reimbursement",
              hint: "A fee per screen failure, or the ratio of screen failures paid per randomized patient.",
              kind: "text",
            },
            {
              label: "Pre-screening and recruitment costs",
              hint: "Chart review, patient outreach, advertising and any recruitment vendor fees.",
              kind: "textarea",
            },
            { label: "Coordinator time outside visits", hint: "Feasibility, start-up, monitoring visits, query resolution and close-out.", kind: "textarea" },
            { label: "Overhead or indirect rate", hint: "[Rate], applied to [which costs]", kind: "text" },
            { label: "Payment terms", hint: "Invoice frequency and the days to payment you require.", kind: "text" },
            { label: "Holdback", hint: "The share withheld until database lock, if any, and whether you accept it.", kind: "text" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Why terms matter as much as fees",
          text: "In WCG's 2024 survey of 852 sites worldwide, budgets and contracts were the leading contributor to delayed study start-up, affecting 69% of respondents.{{cite:wcg-2024}} Putting your terms in writing at feasibility gives the contract team a starting point.",
        },
      ],
    },
    {
      id: "irb-approval",
      heading: "Does any of this need IRB approval?",
      blocks: [
        {
          type: "p",
          text: "Completing the questionnaire itself generally does not: it describes your site, not a study procedure, and no patient is contacted. Two activities around it need care, and your IRB and privacy office have the final word on both.",
        },
        {
          type: "ul",
          items: [
            "**Running the EHR count.** Reviewing records to judge whether a study is feasible is usually handled under the HIPAA provision for reviews [preparatory to research](/glossary/preparatory-to-research). The covered entity must obtain the researcher's representation that the review is solely to prepare a research protocol or for similar purposes preparatory to research, that no protected health information will be removed from the covered entity, and that the information is necessary for the research.{{cite:ecfr-164-512}} Send the sponsor aggregate counts only, and follow your privacy office's rules on who may run queries.",
            "**Contacting patients to test interest.** That is recruitment, not feasibility. FDA's recruiting guidance (issued January 1998 and posted on its website as of September 2026) treats direct advertising for study subjects as the start of the informed consent and subject selection process, and says advertisements should be reviewed and approved by the IRB.{{cite:fda-recruiting}} Wait until the study, its recruitment materials and any outreach scripts are approved.",
          ],
        },
        {
          type: "p",
          text: "The guide to [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach) covers the outreach side in detail.",
        },
      ],
    },
    {
      id: "where-bond-fits",
      heading: "Where does Bond fit?",
      blocks: [
        {
          type: "p",
          text: "Bond Health does not fill in feasibility questionnaires. It helps with the part that depends on chart review: the patient count. [Identify](/identify) reads structured and unstructured EHR records against a study's inclusion and exclusion criteria, ranks candidates, and shows the chart evidence behind each criterion decision. A coordinator can check a sample of those decisions before the site reports a number, which is the chart-reviewed step in the worksheet above. Full EHR integration usually takes 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "Once a study is awarded and its recruitment materials are IRB-approved, the same candidate list can feed [Engage](/engage) for outreach and scheduling, so outreach starts from patients already screened against the criteria. See [Bond for research sites](/for/research-sites), or browse the other [templates](/templates).",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol synopsis you are evaluating and see Bond screen records against its criteria, with the chart evidence for each decision.",
          secondaryLabel: "Bond for research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Are sites paid to complete feasibility questionnaires?",
      a: "Usually not. A 2024 industry task force paper says sites are typically not compensated for feasibility assessment work.{{cite:feasibility-2024}} A master answer file keeps that unpaid time down, and Section H lets you list feasibility among the coordinator time you expect the budget to cover.",
    },
    {
      q: "Can we share patient counts with a sponsor before the study is approved?",
      a: "Yes, as aggregate counts without identifiers, which is what sponsors ask for and all you should send. The chart review behind the count stays inside your organization under the preparatory-to-research provision, which requires that no protected health information be removed from the covered entity during the review.{{cite:ecfr-164-512}}",
    },
    {
      q: "How often should we update the template?",
      a: "Review the standing sections each quarter. Rerun the patient count for every protocol, and again whenever the synopsis changes.",
    },
    {
      q: "What if a sponsor's form asks something this template does not cover?",
      a: "Answer it, then add the question and your answer to the master file. Over time the file becomes your site's own standard.",
    },
    {
      q: "What if we cannot run an EHR query ourselves?",
      a: "Ask your IT or analytics team for a report built from the worksheet criteria, or have a coordinator review recent clinic schedules for the condition. Either way, record the method in Section D so the sponsor knows how the number was produced.",
    },
  ],
  sources: [
    {
      id: "acrp-feasibility-2024",
      title: "Fixing Feasibility: Collaborative Approaches for Redefining and Improving Site Selection",
      publisher: "Association of Clinical Research Professionals (ACRP)",
      url: "https://acrpnet.org/2024/03/21/fixing-feasibility-collaborative-approaches-for-redefining-and-improving-site-selection",
      year: "2024",
      note: "Blog post quoting Nancy Sacco, SiteBridge Research: \"feasibility questionnaires can be anywhere from 10 to 40 pages.\" Site-leader testimony, not a survey.",
    },
    {
      id: "feasibility-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Site Enablement League Task Force; Florence Healthcare employees manage the league. Quotes: \"sites are typically not compensated for feasibility assessment work\"; \"the scale of the problem across the industry is estimated at $1.6B\", citing a Clinical Leader article and extrapolated from ASCO oncology survey results.",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts Center for the Study of Drug Development, press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013. Quotes: \"11% of sites in a given trial typically fail to enroll a single patient\"; \"37% under-enroll\". Analysis of more than 150 studies and nearly 16,000 sites; global, pre-2013 data.",
    },
    {
      id: "wcg-2024",
      title: "2024 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/2024/10/WCG_2024_Clinical_Research_Site_Challenges_Report.pdf",
      year: "2024",
      note: "Survey of 852 sites, April to June 2024. Quotes: budgets and contracts were \"the main offenders contributing to delayed study start-up timelines, affecting 69% of respondents\"; independent sites and physician practices, \"60% reporting that they can initiate studies in under 60 days\"; academic medical centers, community hospitals and health systems, \"77% saying their study start-up timelines exceed 60 days\"; \"43% of sponsors view their software's adoption as a key selection criterion\", cited from Florence's 2024 State of Technology Enabled Clinical Trials report.",
    },
    {
      id: "crio-2026",
      title: "What It Takes to Start a Study: Site Start-up Benchmarks",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/what-it-takes-to-start-a-study-site-start-up-benchmarks/",
      year: "2026",
      note: "Quote: \"The median time from activation to first patient screened is 20 days, but top-quartile performance is observed at just 8 days, or a little over a week. Bottom-quartile performance is 34 days, or just over a month.\" Analysis performed for the Site Accreditation and Standards Institute (SASI); sample size not stated.",
    },
    {
      id: "fogel-2018",
      title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
      year: "2018",
      note: "Quote: \"Study centers with a track record of successful performance are historically more likely to meet enrollment targets.\"",
    },
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512: Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Paragraph (i)(1)(ii), reviews preparatory to research. Quote: \"No protected health information is to be removed from the covered entity by the researcher in the course of the review.\" Accessed September 2026.",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Issued January 1998. Quotes: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process.\" \"Advertisements should be reviewed and approved by the IRB as part of the package for initial review.\"",
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
    {
      label: "How sponsors choose sites",
      href: "/guides/how-sponsors-choose-sites",
      description: "What sponsors check during selection and how they read your answers.",
    },
    {
      label: "How to win more studies",
      href: "/guides/win-more-studies",
      description: "Building the sponsor and CRO relationships that bring repeat studies.",
    },
    {
      label: "Identify: LLM-based EHR screening",
      href: "/identify",
      description: "Criterion-level matching against your records, with the chart evidence shown.",
    },
    {
      label: "Bond for research sites",
      href: "/for/research-sites",
      description: "How sites use Bond for screening, outreach and consent support.",
    },
    {
      label: "All templates",
      href: "/templates",
      description: "Editable templates for feasibility, pre-screening, outreach and IRB language.",
    },
  ],
};

export default page;
