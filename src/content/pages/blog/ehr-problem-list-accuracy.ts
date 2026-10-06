import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/ehr-problem-list-accuracy",
  category: "blog",
  title: "How accurate are EHR problem lists for trial eligibility?",
  description:
    "Problem lists and diagnosis codes miss many real diagnoses. What studies measured, what clinical notes add, and how to query the EHR for a trial.",
  keywords: [
    "EHR problem list accuracy",
    "diagnosis code accuracy clinical trials",
    "ICD codes trial eligibility",
    "problem list completeness",
    "EHR query patient recruitment",
  ],
  eyebrow: "Blog",
  h1: "How accurate are problem lists and diagnosis codes for trial screening?",
  intro:
    "Problem lists and diagnosis codes are the usual starting point for finding trial candidates, but studies keep finding them incomplete. Across ten health systems, the share of patients with lab-confirmed diabetes who had diabetes on their problem list ranged from 60.2 to 99.4 percent.{{cite:wright-2015}} Codes tend to be specific but miss many true cases, and adding clinical notes raises sensitivity. Here is what has been measured, and how to build a query that does not silently drop eligible patients.",
  summary: "What studies measured about problem list completeness and diagnosis code accuracy, what notes add, and how to query the EHR for a trial.",
  lastUpdated: "2026-12-28",
  blog: { date: "2026-12-28", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "See it on your protocol", href: "/book-a-demo", secondaryLabel: "Read about Identify", secondaryHref: "/identify" },
  sections: [
    {
      id: "problem-list-completeness",
      heading: "How complete are EHR problem lists?",
      blocks: [
        {
          type: "p",
          text: "A 2015 study measured one simple thing at ten organizations in the United States, the United Kingdom and Argentina: of patients with a hemoglobin A1c of 7.0 percent or higher, which is diagnostic of diabetes, how many had diabetes on their problem list? The answer ranged from 60.2 to 99.4 percent, with a mean of 78.2 percent.{{cite:wright-2015}}",
        },
        {
          type: "p",
          text: "A 2020 study of 327,695 patients at Partners HealthCare looked at eight common chronic diseases. Problem list completeness ranged from 72.9 percent for hypertension to 93.5 percent for asthma, duplicate entries ranged from 4.8 percent for hypertension to 28.2 percent for diabetes, and completeness rose with disease severity for most diseases.{{cite:wang-wright-2020}}",
        },
        {
          type: "p",
          text: "Inpatient lists can be worse. At a London teaching hospital one year after it moved to Epic, reviewers read the notes of 516 patients with suspected or confirmed COVID-19 and found 1,722 diagnoses missing from the structured problem lists. Only 62.3 percent of diagnoses had been on the list.{{cite:poulos-2021}}",
        },
        {
          type: "stats",
          items: [
            { value: "60.2–99.4%", label: "of patients with diabetic-range A1c had diabetes on the problem list, across ten sites", cite: "wright-2015" },
            { value: "72.9%", label: "problem list completeness for hypertension at Partners HealthCare", cite: "wang-wright-2020" },
            { value: "62.3%", label: "of inpatient diagnoses were on the structured problem list in a London audit", cite: "poulos-2021" },
          ],
        },
      ],
    },
    {
      id: "diagnosis-code-accuracy",
      heading: "How accurate are diagnosis codes?",
      blocks: [
        {
          type: "p",
          text: "Codes are better at confirming a condition than at finding everyone who has it. In a study of veterans with diabetes in VA and Medicare records, 31.6 percent had chronic kidney disease by lab criteria, but only 20.2 to 42.4 percent of them received a renal diagnosis code over a year, depending on the code set. Specificity was 93.2 to 99.4 percent.{{cite:kern-2006}}",
        },
        {
          type: "p",
          text: "Vanderbilt researchers reviewed 1,750 charts across ten diseases. The positive predictive value of any single source (codes, notes or medications) ranged from 0.06 to 0.71. Requiring two or more ICD codes raised average PPV to 0.84, and combining at least two sources gave a mean of 0.91. ICD codes had a sensitivity of 0.67; primary notes had the best sensitivity, 0.77.{{cite:wei-2016}}",
        },
        {
          type: "p",
          text: "Coding may be drifting the wrong way. In Alberta chart-review cohorts, the mean gap in prevalence between chart review and ICD-10 data across 17 conditions was 2.1 percent in 2003, 7.6 percent in 2015 and 6.3 percent in 2022, and the authors concluded comorbidities were increasingly undercoded.{{cite:pan-2025}} Errors enter at every step, from what the clinician knows at the visit to coder training and upcoding, so treat a code as an administrative record, not a confirmed clinical fact.{{cite:omalley-2005}}",
        },
      ],
    },
    {
      id: "structured-coverage",
      heading: "How much of a protocol can structured data answer?",
      blocks: [
        {
          type: "p",
          text: "Less than most queries assume. A German study broke the 351 eligibility criteria of 15 randomly chosen trials into 706 patient characteristics. On average, 55 percent of them could be documented in structured EHR fields at all, data was present for 64 percent of patients when the field existed, and overall completeness for recruitment was 35 percent. Six categories of criteria had no data at all.{{cite:kopcke-2013}}",
        },
        {
          type: "table",
          caption: "Illustrative: what a code-based query can and cannot settle",
          columns: ["Criterion type", "What the codes give you", "Where the answer usually is"],
          rows: [
            ["Has the condition", "Many true cases, some false ones, and some missed", "Problem list, codes, medications and qualifying labs together"],
            ["Does not have a condition (exclusion)", "Nothing reliable: a missing code is not proof of absence", "Notes, discharge summaries and the pre-screening call"],
            ["Severity, stage or functional class", "Rarely coded", "Visit notes, pathology and imaging reports"],
            ["Timing of an event", "Encounter dates that may not match the event", "Notes and discharge summaries with the event date"],
            ["Prior therapy and why it stopped", "Medication orders without a reason", "Visit notes"],
            ["A lab threshold", "Usually good, if results are discrete", "Structured lab results"],
          ],
        },
      ],
    },
    {
      id: "what-notes-add",
      heading: "What do clinical notes add?",
      blocks: [
        {
          type: "p",
          text: "Sensitivity, mainly. A systematic review of 67 studies that used EHR text to detect cases of 41 conditions found that adding text to codes raised median sensitivity from 62 to 78 percent and median area under the ROC curve from 88 to 95 percent.{{cite:ford-2016}} In the London audit, reading notes raised the mean number of recorded problems per patient from 5.51 to 8.84.{{cite:poulos-2021}}",
        },
        {
          type: "p",
          text: "Notes are not a replacement for codes. In the Vanderbilt study no single source was reliable on its own, and the most stable results came from combining at least two.{{cite:wei-2016}} For trial screening, that means using codes, medications and labs to build a wide candidate pool, and reading the notes to decide each patient against the criteria.",
        },
      ],
    },
    {
      id: "fix-the-list",
      heading: "Can a site fix the problem list itself?",
      blocks: [
        {
          type: "p",
          text: "Partly, and slowly. In a randomized trial at four health systems on three different EHRs, an alert suggested adding missing problems inferred from structured data for 12 heart, lung and blood diseases. Clinicians accepted it 22.1 percent of the time (63,777 additions out of 288,832 opportunities), and the intervention arm added 4.6 times as many problems as control, though quality measures did not change.{{cite:wright-2023}}",
        },
        {
          type: "p",
          text: "Better problem lists help the next study. They do not help the one enrolling now, and changing clinical documentation is the care team's decision, not the research team's.",
        },
      ],
    },
    {
      id: "build-the-query",
      heading: "How should a site build an EHR query for a trial?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Widen inclusion with OR, not AND.** Find the condition through the problem list, diagnosis codes, condition-specific medications and qualifying labs, the way the ten-site study used A1c to find diabetes.{{cite:wright-2015}}",
            "**Ask for two or more codes** when you need a high-confidence code signal; at Vanderbilt that raised average PPV from 0.71 for ICD codes to 0.84.{{cite:wei-2016}}",
            "**Never exclude on a missing code.** When only 20.2 to 42.4 percent of patients with chronic kidney disease carried a renal code in one study, the absence of a code says little.{{cite:kern-2006}}",
            "**Route note-based criteria to note review.** Severity, stage, event dates and reasons for stopping a drug belong in a chart or software review that cites the note.",
            "**Adjust feasibility counts.** A count built only on codes undercounts some conditions; say how the count was built when you report it to a sponsor.",
            "**Log screen-failure reasons.** If failures cluster on criteria the notes could have answered, the pre-screen is under-reading the chart ([more on screen failure](/guides/reduce-screen-failure)).",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond handles this",
          text: "Bond's [Identify](/identify) stage does not stop at codes. It reads clinical notes, prescriptions, lab results and imaging, pathology, radiology and molecular reports against each criterion, and shows criterion-by-criterion evidence for every match so a coordinator can confirm it.{{cite:bond-site,bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol. We will show which of its criteria your codes can settle and which depend on notes.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Should a feasibility count be based on diagnosis codes?",
      a: "Codes are a reasonable start, but they undercount some conditions. In the VA and Medicare study, only 20.2 to 42.4 percent of patients with chronic kidney disease had a renal code.{{cite:kern-2006}} Combine codes with medications and labs, and say how the count was built.",
    },
    {
      q: "Is the problem list more reliable than billing codes?",
      a: "Neither is complete. Problem list completeness for diabetes ranged from 60.2 to 99.4 percent across ten sites, and billing codes carry their own coding errors.{{cite:wright-2015,omalley-2005}} Using both, plus labs and medications, finds more true cases than either alone.{{cite:wei-2016}}",
    },
    {
      q: "Does reading notes create more false positives?",
      a: "Any single source can. In the Vanderbilt study the most stable accuracy came from combining at least two sources, with a mean PPV of 0.91.{{cite:wei-2016}} Notes should inform a criterion-by-criterion decision, not just add keyword hits.",
    },
  ],
  sources: [
    {
      id: "wright-2015",
      title: "Problem list completeness in electronic health records: A multi-site study and assessment of success factors",
      publisher: "International Journal of Medical Informatics (Wright A et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/26228650/",
      year: "2015",
      note: "Read October 2026 (PubMed abstract). Quote: \"At each site, we assessed the proportion of patients who have diabetes recorded on their problem list out of all patients with a hemoglobin A1c elevation>=7.0%, which is diagnostic of diabetes.\" Also: \"Problem list completeness across the ten sites ranged from 60.2% to 99.4%, with a mean of 78.2%.\" Sites were in the United States, United Kingdom and Argentina.",
    },
    {
      id: "wang-wright-2020",
      title: "Characterizing outpatient problem list completeness and duplications in the electronic health record",
      publisher: "Journal of the American Medical Informatics Association (Wang EC, Wright A)",
      url: "https://pubmed.ncbi.nlm.nih.gov/32620950/",
      year: "2020",
      note: "Read October 2026 (PubMed abstract). Quote: \"A total of 327 695 unique patients and 383 404 problem list entries were identified. Problem list completeness varied from 72.9% in hypertension to 93.5% in asthma, whereas problem list duplications varied from 4.8% in hypertension to 28.2% in diabetes.\" Also: \"Rates of completeness were positively correlated with disease severity for most diseases.\"",
    },
    {
      id: "poulos-2021",
      title: "Data gaps in electronic health record (EHR) systems: An audit of problem list completeness during the COVID-19 pandemic",
      publisher: "International Journal of Medical Informatics (Poulos J et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/33864979/",
      year: "2021",
      note: "Read October 2026 (PubMed abstract). Setting: London teaching hospital trust, one year after launch of Epic. Quote: \"1722 additional diagnoses were identified, increasing the mean number of recorded problems per patient from 5.51 to 8.84. The overall percentage of diagnoses originally included in the problem list was 62.3% (2841 / 4563\". Also: \"almost 40% of important diagnoses mentioned only in the free text notes.\"",
    },
    {
      id: "kern-2006",
      title: "Failure of ICD-9-CM codes to identify patients with comorbid chronic kidney disease in diabetes",
      publisher: "Health Services Research (Kern EF et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/16584465/",
      year: "2006",
      note: "Read October 2026 (PubMed abstract). Data from 1999 to 2000, veterans dually enrolled in VA and Medicare. Quote: \"Prevalence of CKD was 31.6 percent in the veteran sample with diabetes. Depending on the detail of the algorithm, only 20.2 to 42.4 percent of individuals with CKD received a renal-related diagnosis code in either VA or Medicare records over 1 year. Specificity of renal codes for CKD ranged from 93.2 to 99.4 percent.\"",
    },
    {
      id: "wei-2016",
      title: "Combining billing codes, clinical notes, and medications from electronic health records provides superior phenotyping performance",
      publisher: "Journal of the American Medical Informatics Association (Wei WQ et al., Vanderbilt)",
      url: "https://pubmed.ncbi.nlm.nih.gov/26338219/",
      year: "2016",
      note: "Read October 2026 (PubMed abstract). Quote: \"The PPVs of single components were inconsistent and inadequate for accurately phenotyping (0.06-0.71). Using two or more ICD codes improved the average PPV to 0.84. We observed a more stable and higher accuracy when using at least two components (mean ± standard deviation: 0.91 ± 0.08). Primary notes offered the best sensitivity (0.77). The sensitivity of ICD codes was 0.67.\" Also: \"its PPV (0.71 ± 0.13)\" for ICD codes. 1,750 charts reviewed across ten diseases.",
    },
    {
      id: "pan-2025",
      title: "Assessing the validity of ICD-10 administrative data in coding comorbidities",
      publisher: "BMJ Health & Care Informatics (Pan J et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/40360294/",
      year: "2025",
      note: "Read October 2026 (PubMed abstract). Alberta, Canada chart-review cohorts. Quote: \"the mean difference in prevalence between chart reviews and ICD-10 for these 17 conditions was 2.1% in 2003, 7.6% in 2015 and 6.3% in 2022.\" Also: \"Comorbidities were increasingly undercoded over 20 years.\"",
    },
    {
      id: "omalley-2005",
      title: "Measuring diagnoses: ICD code accuracy",
      publisher: "Health Services Research (O'Malley KJ et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/16178999/",
      year: "2005",
      note: "Read October 2026 (PubMed abstract). Quote: \"Main error sources along the \"patient trajectory\" include amount and quality of information at admission, communication among patients and providers, the clinician's knowledge and experience with the illness, and the clinician's attention to detail. Main error sources along the \"paper trail\" include variance in the electronic and written records, coder training and experience, facility quality-control efforts, and unintentional and intentional coder errors, such as misspecification, unbundling, and upcoding.\"",
    },
    {
      id: "kopcke-2013",
      title: "Evaluation of data completeness in the electronic health record for the purpose of patient recruitment into clinical trials: a retrospective analysis of element presence",
      publisher: "BMC Medical Informatics and Decision Making (Köpcke F et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/23514203/",
      year: "2013",
      note: "Read October 2026 (PubMed abstract). Five German tertiary care providers. Quote: \"351 eligibility criteria from 15 clinical trials contained 706 patient characteristics. In average, 55% of these characteristics could be documented in the EHR. Clinical data was available for 64% of all patients, if corresponding data elements were available. The total completeness of EHR data for recruitment purposes is 35%.\" Also: \"No data was available for 6 semantic groups.\"",
    },
    {
      id: "ford-2016",
      title: "Extracting information from the text of electronic medical records to improve case detection: a systematic review",
      publisher: "Journal of the American Medical Informatics Association (Ford E et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/26911811/",
      year: "2016",
      note: "Read October 2026 (PubMed abstract). Quote: \"67 of which reported on the extraction of information from free text of EMRs with the stated purpose of detecting cases of a named clinical condition.\" Also: \"Inclusion of information from text resulted in a significant improvement in algorithm sensitivity and area under the receiver operating characteristic in comparison to codes alone (median sensitivity 78% (codes + text) vs 62% (codes), P = .03; median area under the receiver operating characteristic 95% (codes + text) vs 88% (codes), P = .025).\" Text was extracted for 41 conditions.",
    },
    {
      id: "wright-2023",
      title: "A multi-site randomized trial of a clinical decision support intervention to improve problem list completeness",
      publisher: "Journal of the American Medical Informatics Association (Wright A et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/36806929/",
      year: "2023",
      note: "Read October 2026 (PubMed abstract). Quote: \"We evaluated the intervention at 4 diverse healthcare systems using 3 different EHRs\". Also: \"There were 288 832 opportunities to add a problem in the intervention arm and the problem was added 63 777 times (acceptance rate 22.1%). The intervention arm had 4.6 times as many problems added as the control arm. There were no significant differences in any of the clinical quality measures.\" Covered 12 heart, lung and blood diseases.",
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
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads notes, labs and reports and shows the evidence for each criterion." },
    { label: "Why eligibility screening needs unstructured data", href: "/blog/unstructured-data-eligibility-evidence", description: "What studies measured about criteria that only notes can answer." },
    { label: "EHR phenotyping", href: "/glossary/ehr-phenotyping", description: "A short definition of rule-based patient identification from EHR data." },
    { label: "Using the EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "Interfaces, permissions and what each EHR tool can and cannot query." },
  ],
};

export default page;
