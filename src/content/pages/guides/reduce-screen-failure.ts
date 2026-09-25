import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/reduce-screen-failure",
  category: "guide",
  title: "How sites can reduce clinical trial screen failure rates",
  description:
    "Clinical trial screen failure benchmarks by therapeutic area, the causes a site can spot in the chart, and the pre-screening steps that prevent them.",
  keywords: [
    "reduce screen failure rate clinical trial",
    "screen failure rate benchmarks",
    "clinical trial screen failure causes",
    "pre-screening to reduce screen failures",
  ],
  eyebrow: "Guide",
  h1: "How to reduce screen failure at your site",
  intro:
    "Every screen failure uses coordinator hours, a visit slot and often procedures the study budget may not fully cover. This guide covers the benchmarks worth comparing against, the causes a site can predict, and a pre-screening routine that catches more of them before the consent visit.",
  summary: "Benchmarks by therapeutic area, root causes, and a pre-screening routine that cuts avoidable screen failures.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "See pre-screening on your protocol",
    href: "/book-a-demo",
    secondaryLabel: "How Identify works",
    secondaryHref: "/identify",
  },
  sections: [
    {
      id: "what-counts",
      heading: "What counts as a screen failure?",
      blocks: [
        {
          type: "p",
          text: "A screen failure is a patient who signs the informed consent form, enters the protocol's screening period, and is not enrolled or randomized. The [screen failure rate](/glossary/screen-failure-rate) is screen failures divided by patients who entered screening.",
        },
        {
          type: "p",
          text: "The line that matters is consent. FDA guidance says informed consent must be obtained before any clinical procedure performed solely to determine eligibility for research, in line with [21 CFR 50.20](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20).{{cite:fda-screening-tests}} Everything before that line is [pre-screening](/glossary/pre-screening): chart review, registry queries and phone calls. A patient ruled out at pre-screening costs review time. A patient ruled out after consent also costs a visit, procedures, and a slot another patient could have used.",
        },
        {
          type: "p",
          text: "Chart pre-screening before consent needs a HIPAA pathway, typically a review [preparatory to research](/glossary/preparatory-to-research) under [45 CFR 164.512(i)(1)(ii)](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.512) or an IRB or privacy board waiver of authorization. The [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach) covers which one fits.",
        },
      ],
    },
    {
      id: "benchmarks",
      heading: "What screen failure rate should you expect?",
      blocks: [
        {
          type: "p",
          text: "There is no single industry rate, and published figures use different denominators. The broadest cross-therapeutic benchmark comes from Tufts CSDD, which reports a randomization rate: patients enrolled divided by patients screened. In its 2022 benchmark of 187 industry protocols approved between 2013 and 2018, Phase II protocols randomized 69.4% of screened patients and Phase III protocols 70.7%, so roughly 3 in 10 screened patients were not enrolled.{{cite:tufts-2022}}",
        },
        {
          type: "stats",
          items: [
            { value: "70.7%", label: "of screened patients randomized in Phase III protocols (Tufts CSDD, 2022)", cite: "tufts-2022" },
            { value: "About 1 in 4", label: "screen failures at one IBD center that more thorough pre-screening could have avoided", cite: "outtier-2023" },
            { value: "3.4 to 8.8 hours", label: "of staff time to find, screen and enroll one patient at one cancer center (2012 study)", cite: "penberthy-2012" },
          ],
        },
        {
          type: "table",
          caption: "Published screen failure rates by therapeutic area",
          columns: ["Therapeutic area", "Setting", "Screen failure rate", "Common cause reported"],
          rows: [
            ["Oncology, early phase", "Three French cancer centers, 2020 to 2022; biomarker failures excluded", "21.4% to 26.4% {{cite:korakis-2025}}", "Imaging findings, mostly new brain metastases: 29.2% of failures {{cite:korakis-2025}}"],
            ["Oncology, genitourinary", "Phase II and III trials, 1999 to 2016, that published a rate", "About 20% to 30% {{cite:wong-2017}}", "Ineligibility; also patient refusal in kidney and bladder trials {{cite:wong-2017}}"],
            ["Ulcerative colitis", "Phase II and III trials run by one CRO", "Mean of 43% per trial {{cite:uzzan-2025}}", "Mayo score or endoscopic subscore below threshold: 33.8% of failures {{cite:uzzan-2025}}"],
            ["Crohn's disease", "Same analysis", "Mean of 53% per trial {{cite:uzzan-2025}}", "CDAI criteria not met: 23.1% of failures {{cite:uzzan-2025}}"],
            ["MASH (fatty liver disease)", "Therapeutic trials", "70% to 80% {{cite:fichez-2025}}", "Baseline liver biopsy does not show fibrotic MASH {{cite:fichez-2025}}"],
            ["Early Alzheimer's disease", "Anti-amyloid Phase II trial, two US sites, 2024", "74.1% {{cite:huoh-2025}}", "Amyloid-negative PET: excluded 39% of clinically eligible patients in a separate phase 1b trial {{cite:sevigny-2016}}"],
          ],
          note: "Figures come from different designs, periods and denominators. Use them to set expectations for a protocol, not to grade a site.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Compare like with like",
          text: "Across 53 sponsored studies at a large IBD trial center, 17.1% of screened patients failed screening, compared with 39.2% in the global populations of the same trials.{{cite:outtier-2023}} Compare your rate with the sponsor's study-wide rate for that protocol, not with a number from another disease.",
        },
      ],
    },
    {
      id: "root-causes",
      heading: "Why do patients fail screening?",
      blocks: [
        {
          type: "p",
          text: "Screen failure reasons fall into four broad groups, and each calls for a different check before consent.",
        },
        { type: "h3", text: "Criteria mismatch" },
        {
          type: "p",
          text: "The patient did not meet a criterion. Sometimes the evidence was already in a note, report or result nobody read against the protocol. Sometimes the criterion can only be measured at screening, such as an endoscopic score. At one IBD center, ineligible disease activity was the leading cause, at 36.4% of screen failures.{{cite:outtier-2023}}",
        },
        { type: "h3", text: "Lab, imaging and clinical changes" },
        {
          type: "p",
          text: "Labs, scans and performance status change between referral and the screening visit, and results age out of the protocol window. In the early-phase oncology series, imaging findings caused 29.2% of screen failures, lab results 23.8% and performance status deterioration 11.9%.{{cite:korakis-2025}} At another institution, which left biomarker and stage failures out of its analysis, the most common reasons among solid-tumor patients were rapid disease progression (16%), ECOG performance status of 2 or worse (12%) and abnormal liver function tests (12%).{{cite:oncology-sf-2019}}",
        },
        { type: "h3", text: "Washouts and concomitant medications" },
        {
          type: "p",
          text: "The patient takes an excluded drug, or stopped a prior therapy too recently. These failures are predictable from the medication list and the last treatment date. FDA finalized guidance on washout periods and concomitant medications in cancer trial eligibility in July 2026, and a companion guidance on laboratory values notes that eligibility criteria are sometimes more restrictive than necessary.{{cite:fda-washout,fda-lab-values}}",
        },
        { type: "h3", text: "Patient withdrawal and logistics" },
        {
          type: "p",
          text: "The patient decides against the study, cannot keep the visit schedule, or cannot get a required procedure done in time. Withdrawal of consent caused 9.1% of screen failures at the IBD center above. In the early-phase oncology series, administrative reasons, which included consent withdrawal and sponsor enrollment halts, caused 10.9%.{{cite:outtier-2023,korakis-2025}} A plain pre-visit call can bring some of these out before the slot is used.",
        },
      ],
    },
    {
      id: "tactics",
      heading: "What reduces screen failure before the screening visit?",
      blocks: [
        {
          type: "p",
          text: "The goal is to move every checkable criterion to the pre-screening side of the consent line. Five practices help.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Pre-screen against the full chart",
              text: "Read notes, pathology, imaging reports and outside records, not only the problem list. Record the evidence and its date for each criterion. The early-phase oncology authors suggest referring patients with brain scan and lab results already in hand.{{cite:korakis-2025}} The [coordinator chart review checklist](/templates/coordinator-chart-review-checklist) gives a format.",
            },
            {
              title: "Set lab and imaging re-check windows",
              text: "For each time-bound criterion, write down the protocol window and the date the qualifying result expires. If the last result will be stale by the visit, plan a re-check. Results from routine care, which would happen with or without the study, may be used for eligibility without consent first; tests done only for the study wait until after consent.{{cite:fda-screening-tests}}",
            },
            {
              title: "Check washouts against dates",
              text: "Compare the current medication list and the last dose of each prior therapy with the protocol's exclusions. When a prior therapy has already ended, book the screening visit for after the washout period, not before it. If a patient would stop a medication only to become eligible, FDA treats that washout as part of the research, so consent comes first.{{cite:fda-screening-tests}}",
            },
            {
              title: "Make a pre-visit call",
              text: "Confirm current medications, recent admissions and new diagnoses. Ask about biopsies, washouts, placebo, the visit schedule, transport and, where required, a study partner. The [pre-screening call script](/templates/pre-screening-call-script) covers the questions.",
            },
            {
              title: "Clarify criteria with the sponsor in writing",
              text: "Send ambiguous criteria to the sponsor or medical monitor before the first patient, and keep the answers in a criteria interpretation log. Where a criterion looks stricter than current guidance, say so. FDA's final performance status guidance (July 2026) says patients with ECOG PS 2 should be included in cancer trials unless a scientific or clinical rationale based on established safety considerations justifies excluding them.{{cite:fda-performance-status}}",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Re-check the day before",
          text: "Patients get admitted, start new drugs and get new scans between pre-screening and screening. A short chart re-check the day before catches those changes while the visit can still be moved.",
        },
      ],
    },
    {
      id: "causes-and-fixes",
      heading: "Which fix matches which cause?",
      blocks: [
        {
          type: "p",
          text: "Use this table to map each screen failure reason code to a pre-screening check and an owner.",
        },
        {
          type: "table",
          caption: "Screen failure causes and the check that prevents them",
          columns: ["Cause", "What it looks like", "Check before consent", "Owner"],
          rows: [
            ["Criteria mismatch", "Stage, histology, disease activity or performance status outside the protocol", "Full-chart pre-screen with evidence and a date for each criterion", "Coordinator, with PI sign-off"],
            ["Lab or imaging out of range or expired", "Values drift after referral, or the qualifying result ages out of the window", "Latest value, its trend and expiry date; routine tests timed to land inside the window", "Coordinator and treating clinician"],
            ["Washout or excluded drug", "Recent prior therapy or a prohibited concomitant medication", "Medication list and last-dose dates against protocol exclusions; consent before any washout done for the study", "Coordinator and pharmacist"],
            ["Infection or safety screen", "Positive stool, tuberculosis or viral tests at screening", "History and any recent routine-care results", "PI"],
            ["Patient withdrawal", "Declines, cannot meet the visit schedule, or has no study partner", "Pre-visit call on procedures, visits, placebo and travel", "Coordinator or recruitment staff"],
            ["Ambiguous criterion", "Site and sponsor read a criterion differently", "Written clarification in a criteria interpretation log", "PI and sponsor medical monitor"],
          ],
        },
      ],
    },
    {
      id: "measure",
      heading: "How should you measure screen failure?",
      blocks: [
        {
          type: "p",
          text: "Track screen failure per study, per month and per reason. A single site-wide rate hides the problem.",
        },
        {
          type: "ul",
          items: [
            "**Screen failure rate:** screen failures divided by patients who signed consent, for each study.",
            "**Reason codes:** one primary reason per failure, from a fixed list that matches the table above.",
            "**Avoidable or not:** whether the chart held the answer at pre-screening. This share tells you how much a deeper pre-screen could save.",
            "**Pre-screen pass rate:** patients who pass pre-screening divided by patients reviewed. A high pass rate paired with a high screen failure rate points to a shallow pre-screen.",
            "**Days from pre-screen to screening visit:** long gaps raise the chance that labs, scans and performance status change.",
            "**Staff time per enrolled patient:** coordinator hours per enrolled patient, counting time spent on patients who failed. At one cancer center, eligibility screening cost $129.15 to $336.48 per enrolled patient, depending on study phase.{{cite:penberthy-2012}}",
          ],
        },
        {
          type: "p",
          text: "Share the numbers with sponsors. Reporting is uneven: in a review of 50 genitourinary cancer trials, only 24 published their screen failure rates.{{cite:wong-2017}} Failure reasons and avoidable failures by study give the sponsor evidence for criteria clarifications and for its [next site selection decision](/guides/win-more-studies).",
        },
      ],
    },
    {
      id: "how-bond-helps",
      heading: "How does Bond help reduce screen failure?",
      blocks: [
        {
          type: "p",
          text: "Bond Health works on the pre-screening side of the consent line. [Identify](/identify) reads structured and unstructured records, such as notes and reports, against each inclusion and exclusion criterion. It ranks candidates and shows the evidence behind each criterion decision, so a coordinator can check the lab, the date and the note before calling anyone. Bond reports above 90% matching accuracy for eligibility screening and more than 50% less chart review time.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "[Engage](/engage) handles outreach, pre-screening questions and scheduling by voice and text, with scripts configured per site and study and escalation to coordinators. Patients are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "The dashboard reports patients matched, contacted, pre-screened, consented and randomized, along with screen-failure signals.{{cite:bond-site}} Bond does not publish a screen failure reduction figure, so track your own rate per study, before and after any change, with the measures above.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol with a high screen failure rate and we will walk through its hardest criteria.",
          secondaryLabel: "How Identify works",
          secondaryHref: "/identify",
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
            "Pull the recent screen failures for your highest-volume study and give each one a primary reason code.",
            "Mark each failure avoidable or not: was the answer in the chart before consent?",
            "For every time-bound criterion in that protocol, write down the window and add the expiry date to your pre-screen notes.",
            "Send the sponsor a written list of criteria your team reads differently, and start an interpretation log.",
            "Add a pre-visit call to every screening booking, using the [pre-screening call script](/templates/pre-screening-call-script).",
            "Check how your clinical trial agreement pays for screen failures, including any cap.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is a good screen failure rate?",
      a: "It depends on the therapeutic area and the protocol. Phase III protocols in a 2022 Tufts CSDD benchmark randomized 70.7% of screened patients, while MASH trials report screen failure rates of 70% to 80%.{{cite:tufts-2022,fichez-2025}}",
    },
    {
      q: "Is pre-screening the same as screening?",
      a: "No. Pre-screening uses records and conversations before consent. Screening starts after consent, and any procedure done only to check eligibility belongs there.{{cite:fda-screening-tests}} Routine-care results can still count toward eligibility if they fall inside the protocol window. See [pre-screening vs screening](/guides/pre-screening-vs-screening).",
    },
    {
      q: "Should we rescreen a patient who failed?",
      a: "Only if the protocol allows it and the reason can change. A lab value that recovers or a washout that ends can justify rescreening. A biomarker or histology result usually will not.",
    },
  ],
  sources: [
    {
      id: "tufts-2022",
      title: "Protocol Design and Performance Benchmarks by Phase and by Oncology and Rare Disease Subgroups",
      publisher: "Therapeutic Innovation & Regulatory Science (Getz K, Smith Z, Kravet M), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9373886/",
      year: "2022",
      note: "187 protocols with final approval between January 2013 and December 2018. Randomization rate is defined as \"the ratio of the number of patients enrolled to the total number screened\". Table 6: \"Randomization Rate (Enrolled/Screened) 67.7% 69.4% 70.7%\" (Phase I, II, III). Phase III mean eligibility criteria: 30.4 (Table 2).",
    },
    {
      id: "korakis-2025",
      title: "Addressing screening failures in early-phase clinical trials in oncology: impact on patient outcomes and strategies for improvement",
      publisher: "ESMO Open (Korakis I et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12362514/",
      year: "2025",
      note: "Three French cancer centers, 2020 to 2022, 202 screen-failed patients; \"SF due to the absence of biomarker for enrolment were excluded\". Quote: \"SF reasons were radiological (n = 59, 29.2%), biological (n = 48, 23.8%; n = 34 due to vital organ dysfunction), clinical (n = 45, 22.3%), administrative (n = 22, 10.9%), and PS deterioration (n = 24, 11.9%)\". Administrative reasons were those \"related to the sponsor (halt of enrolment) or patient (consent withdrawal)\". Conclusion: \"To reduce SF rates, patients could be referred with results of brain scan and laboratory tests.\"",
    },
    {
      id: "wong-2017",
      title: "Screen Failure Rates in Contemporary Randomized Clinical Phase II/III Therapeutic Trials in Genitourinary Malignancies",
      publisher: "Clinical Genitourinary Cancer (Wong SE, North SA, Sweeney CJ, Stockler MR, Sridhar SS), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/28993132/",
      year: "2017",
      note: "Abstract checked via Europe PMC. Quotes: \"Screen failures, defined as individuals who undergo screening but are not enrolled in a clinical trial, incur significant costs without contributing valuable data to the study.\" \"We reviewed 50 phase II and III trials in advanced genitourinary cancers conducted between 1999 and 2016.\" \"Of the 50 trials, only 48% (24 of 50) published screen failure rates\". \"Contemporary trials in genitourinary cancer reported screen failure rates of approximately 20% to 30%\". Main reasons: ineligibility, and in kidney and bladder trials also patient refusal.",
    },
    {
      id: "uzzan-2025",
      title: "Screen Failures and Causes in Inflammatory Bowel Disease Randomized Controlled Trials: A Study of 16 913 Screened Patients",
      publisher: "Inflammatory Bowel Diseases (Uzzan M et al.), via Capital Region of Denmark Research Portal",
      url: "https://research.regionh.dk/en/publications/screen-failures-and-causes-in-inflammatory-bowel-disease-randomiz/",
      year: "2025",
      note: "Abstract on this portal. \"We analyzed SF-related data from 17 randomized controlled phase 2 or 3 IBD trials. Twelve trials were in ulcerative colitis (UC) and 5 trials were in Crohn's disease (CD) operated by a single contract research organization\". Quotes: \"The mean SF proportion was 0.43 per trial in UC\"; \"In CD clinical trials, the mean SF proportion was at 0.53\"; \"not meeting the overall (modified) Mayo score inclusion threshold and/or the endoscopic subscore of at least 2 (33.8% of all SF)\"; \"not meeting the CDAI eligibility criteria (23.1% of all SFs)\"",
    },
    {
      id: "outtier-2023",
      title: "Screening Failure in a Large Clinical Trial Centre for Inflammatory Bowel Diseases: Rates, Causes, and Outcomes",
      publisher: "Inflammatory Bowel Diseases (Outtier A, Gijbels L, Noman M, et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/36350998/",
      year: "2023",
      note: "Abstract checked via Europe PMC. Quotes: \"642 local screenings were performed as part of 53 studies.\" \"We identified an overall SF rate of 17.1%, compared with 39.2% in the global study population (P < .00001).\" \"Causes of SF at our center included ineligible disease activity (36.4%), microbiology (25.5%), protocol violation (16.4%), withdrawal of consent (9.1%), chemistry (6.4%) and hematology (6.4%).\" \"Approximately one-fourth of SFs could have been avoided by prescreening that was more thorough.\"",
    },
    {
      id: "oncology-sf-2019",
      title: "Effect of Reasons for Screen Failure on Subsequent Treatment Outcomes in Cancer Patients Assessed for Clinical Trials",
      publisher: "Oncology, via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/31266008/",
      year: "2019",
      note: "Single institution, 217 adults with solid tumors listed as ineligible on screening logs, 2011 to 2018. \"Patients screen-failed for biomarker results or incorrect cancer stage/prior treatment profile were excluded.\" Quote: \"The most common RFSF were rapid disease progression (PD; 16%), performance status (PS) ≥2 (12%), and abnormal liver function tests (aLFT; 12%).\"",
    },
    {
      id: "fichez-2025",
      title: "Non-invasive tests for fibrotic MASH for reducing screen failure in therapeutic trials",
      publisher: "JHEP Reports (Fichez J et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985113/",
      year: "2025",
    },
    {
      id: "huoh-2025",
      title: "Non-inferior screen fail rate for persons under the age of 65 in an anti-amyloid monoclonal antibody clinical trial on Alzheimer's Disease",
      publisher: "Alzheimer's & Dementia (Huoh et al., AAIC abstract), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12741874/",
      year: "2025",
      note: "Conference abstract; two California sites, 2024 screening year.",
    },
    {
      id: "sevigny-2016",
      title: "Amyloid PET Screening for Enrichment of Early-Stage Alzheimer Disease Clinical Trials: Experience in a Phase 1b Clinical Trial",
      publisher: "Alzheimer Disease & Associated Disorders (Sevigny J et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/26885819/",
      year: "2016",
    },
    {
      id: "penberthy-2012",
      title: "Effort Required in Eligibility Screening for Clinical Trials",
      publisher: "Journal of Oncology Practice (Penberthy LT, Dahman BA, Petkov VI, DeShazo JP), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Single academic cancer center. Quote: \"The cost of eligibility screening ranged by study phase from $129.15 to $336.48 per enrolled patient.\"",
    },
    {
      id: "fda-screening-tests",
      title: "Screening Tests Prior to Study Enrollment: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
      year: "1998",
      note: "Information sheet, January 1998. Quote: \"informed consent must be obtained prior to initiation of any clinical procedures that are performed solely for the purpose of determining eligibility for research, including withdrawal from medication (wash-out). When wash-out is done in anticipation of or in preparation for the research, it is part of the research.\" and \"Procedures that are to be performed as part of the practice of medicine and which would be done whether or not study entry was contemplated, such as for diagnosis or treatment of a disease or medical condition, may be performed and the results subsequently used for determining study eligibility without first obtaining consent.\"",
    },
    {
      id: "fda-performance-status",
      title: "Cancer Clinical Trial Eligibility Criteria: Performance Status (Guidance for Industry, IRBs, and Clinical Investigators)",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/178018/download",
      year: "2026",
    },
    {
      id: "fda-lab-values",
      title: "Cancer Clinical Trial Eligibility Criteria: Laboratory Values",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cancer-clinical-trial-eligibility-criteria-laboratory-values",
      year: "2026",
    },
    {
      id: "fda-washout",
      title: "Cancer Clinical Trial Eligibility Criteria: Washout Periods and Concomitant Medications",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cancer-clinical-trial-eligibility-criteria-washout-periods-and-concomitant-medications",
      year: "2026",
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
      note: "Capabilities, pricing and compliance status described by Bond Health, September 2026.",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Full-chart pre-screening with the evidence behind each criterion." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "Pre-visit calls, pre-screening questions and scheduling." },
    { label: "Oncology recruitment", href: "/oncology", description: "Cancer trials, where imaging and lab timing drive many screen failures." },
    { label: "Gastroenterology recruitment", href: "/gastroenterology", description: "IBD and MASH trials, where disease activity and biopsy criteria decide eligibility." },
    { label: "Screen failure rate", href: "/glossary/screen-failure-rate", description: "The definition and how to calculate it per study." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "Questions to ask before you book a screening visit." },
  ],
};

export default page;
