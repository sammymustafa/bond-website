import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/cardiology",
  category: "therapeutic",
  title: "Cardiology trial recruitment: heart failure EHR screening",
  description:
    "How cardiology eligibility works, where LVEF, NYHA class, NT-proBNP and Lp(a) sit in the chart, what drives screen failure, and how Bond screens EHRs for them.",
  keywords: [
    "cardiology clinical trial recruitment",
    "heart failure trial screening",
    "cardiology EHR screening",
    "Lp(a) trial recruitment",
    "cardiovascular trial screen failure",
  ],
  eyebrow: "Cardiology",
  h1: "Cardiology trial recruitment: finding patients by ejection fraction, Lp(a) and events",
  intro:
    "Cardiology protocols screen on ejection fraction, symptom class, lab thresholds and dated cardiac events, and much of that evidence sits in echo reports and notes rather than coded fields. In one heart failure trial, fewer than half of the 10,359 patients screened were randomized.{{cite:wjc-paragon-hf}} Here is where those criteria live in the chart and how Bond Health screens for them.",
  summary: "How cardiology criteria map to the chart, what drives screen failure, and how Bond screens for it.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How Identify works", secondaryHref: "/identify" },
  sections: [
    {
      id: "how-cardiology-eligibility-works",
      heading: "How does eligibility work in cardiology trials?",
      blocks: [
        {
          type: "p",
          text: "Cardiology protocols define a patient in layers: ejection fraction sets the type of heart failure, NYHA class sets severity, an NT-proBNP or Lp(a) threshold narrows the group, qualifying events must fall inside a time window, and kidney function, background medicines and safety exclusions remove many of the rest.",
        },
        {
          type: "p",
          text: "Ejection fraction is the first split. US and European guidelines call heart failure reduced at an LVEF of 40% or lower, mildly reduced at 41% to 49%, and preserved at 50% or higher. The US guideline adds an improved category for patients whose LVEF has risen above 40%.{{cite:esc-acc-2023}} Trials draw their own lines inside these bands, and some check every past measurement, not only the latest.{{cite:wjc-paragon-hf}}",
        },
        {
          type: "table",
          caption: "Common cardiology criteria and where the evidence lives",
          columns: ["Criterion type", "Example protocol language", "Where it lives in the chart", "Structured or unstructured"],
          rows: [
            ["Ejection fraction", "LVEF of 40% or lower (DAPA-HF); LVEF of 45% or higher and no prior LVEF below 40% (PARAGON-HF){{cite:wjc-dapa-hf,wjc-paragon-hf}}", "Echo, cardiac MRI and catheterization reports, including older studies", "Mostly unstructured report text"],
            ["Symptom class", "NYHA class II, III or IV symptoms{{cite:wjc-dapa-hf}}", "Cardiology progress notes", "Unstructured"],
            ["Natriuretic peptides", "NT-proBNP of 600 pg/mL or more, 400 if hospitalized for heart failure in the past 12 months, 900 with atrial fibrillation or flutter{{cite:wjc-dapa-hf}}", "Lab results, read with ECG reports and admission history", "Structured value; the cutoff rule is not"],
            ["Lipoprotein(a)", "Lp(a) of 70 mg/dL or more at a central lab{{cite:ctgov-lpa-horizon}}", "Lab results, if the patient was ever tested", "Structured, but rarely present"],
            ["Qualifying events", "Myocardial infarction or ischemic stroke 3 months to 10 years before screening{{cite:ctgov-lpa-horizon}}", "Discharge summaries, problem lists, diagnosis codes, outside records", "Mixed; event dates are often only in text"],
            ["Kidney function", "Exclude low eGFR; DAPA-HF excluded 30 mL/min/1.73 m² or below{{cite:wjc-dapa-hf}}", "Lab results", "Structured, if drawn inside the screening window"],
            ["Background therapy", "Stable doses of guideline-directed heart failure medicines", "Medication lists, orders, notes on why a drug was stopped", "Mixed; reasons for stopping a drug are in notes"],
            ["Safety exclusions", "NYHA class IV heart failure; history of hemorrhagic stroke or other major bleeding{{cite:ctgov-lpa-horizon}}", "Notes, problem lists, imaging reports", "Mixed"],
          ],
        },
        {
          type: "p",
          text: "A patient can pass on a diagnosis code and fail on a line in an old echo report. The [therapeutic areas](/therapeutic-areas) pages cover the same pattern in other specialties.",
        },
      ],
    },
    {
      id: "screen-failure",
      heading: "What drives screen failure in cardiology trials?",
      blocks: [
        {
          type: "p",
          text: "Published screen failure data in cardiology is thin. PARAGON-HF, a trial in heart failure with preserved ejection fraction, randomized fewer than half of the patients it screened. Patients went through drug run-in periods during screening, so that gap reflects side effects during run-in as well as strict eligibility criteria.{{cite:wjc-paragon-hf}} Most other evidence comes from applying trial criteria to real patient groups.",
        },
        {
          type: "stats",
          items: [
            { value: "4,822 of 10,359", label: "patients screened for PARAGON-HF were randomized", cite: "wjc-paragon-hf" },
            { value: "52%", label: "of HFrEF patients at one Swedish hospital met DAPA-HF criteria", cite: "hakansson-2021" },
            { value: "25.9%", label: "of 455 HFrEF patients in a Canadian acute heart failure registry met vericiguat trial criteria", cite: "can-hf-2023" },
          ],
        },
        {
          type: "p",
          text: "In the Swedish cohort of 681 patients with reduced ejection fraction, 39% met EMPEROR-Reduced criteria, and the main reasons for ineligibility were low NT-proBNP or low eGFR.{{cite:hakansson-2021}} Both are lab values that need context. In DAPA-HF, the NT-proBNP cutoff changed with heart rhythm and recent admissions, so a result had to be read next to the ECG and hospital history.{{cite:wjc-dapa-hf}} For site-level fixes, see [how to reduce screen failure](/guides/reduce-screen-failure).",
        },
      ],
    },
    {
      id: "why-structured-data-misses-it",
      heading: "Why do structured fields miss cardiology eligibility?",
      blocks: [
        {
          type: "p",
          text: "The facts that settle cardiology eligibility are often written in text. For COPILOT-HF, a heart failure trial at Mass General Brigham, structured EHR data could settle only 5 of 6 inclusion criteria and 5 of 17 exclusion criteria, and study staff reviewed charts by hand for the rest.{{cite:unlu-2024}}",
        },
        {
          type: "p",
          text: "Skipping the notes costs accuracy. At Brigham and Women's Hospital, a rule-based system searched the EHR for heart failure patients eligible for guideline-directed therapy. Staff manually screened 5,460 of the patients it flagged and found 1,754 truly eligible, an accuracy of 32.1%. Over 38% of the false positives came from misjudging symptomatic heart failure and medication history, and the authors named clinical notes as the way to improve it.{{cite:subramaniam-2024}}",
        },
      ],
    },
    {
      id: "how-bond-screens",
      heading: "What does Bond read in a cardiology chart?",
      blocks: [
        {
          type: "p",
          text: "Bond's [Identify](/identify) stage reads structured and unstructured records against each inclusion and exclusion criterion, ranks candidates, and shows the evidence behind every criterion-level decision.{{cite:bond-site}} It uses imaging data, clinical notes and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}} It connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR or HL7 interfaces or through an aggregator.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "Each decision draws on Bond's terminology graph of 18 sources, including SNOMED CT, LOINC, RxNorm and ICD-10-CM, so a coded myocardial infarction and \"STEMI\" in a discharge summary can be matched to the same concept.{{cite:bond-whitepaper}} In a cardiology chart, Bond reads these sources where the site's interface exposes them:",
        },
        {
          type: "ul",
          items: [
            "**Echo, cardiac MRI and catheterization reports**, older ones as well as the latest, so an exclusion based on any prior LVEF can be checked.",
            "**Cardiology notes** for NYHA class, symptoms and why a medicine was stopped.",
            "**Discharge summaries and problem lists** for the type and date of a heart attack, stroke or heart failure admission.",
            "**ECG reports** for atrial fibrillation or flutter, which changes some NT-proBNP cutoffs.",
            "**Labs** for NT-proBNP, Lp(a) and eGFR, each dated against the protocol's window.",
            "**Medication records** for doses and start dates of background therapy.",
          ],
        },
        {
          type: "p",
          text: "Criteria the chart cannot settle, such as current NYHA class, are left for the pre-screening call by Bond's [Engage](/engage) agents or site staff.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "What Bond has published, and what it has not",
          text: "Bond reports 90%+ matching accuracy and 50%+ less chart review across its platform, and full EHR integration typically takes 4 to 6 weeks.{{cite:bond-site}} Bond has not published cardiology-specific screen failure or enrollment results.",
        },
      ],
    },
    {
      id: "lpa-horizon-example",
      heading: "How would Bond screen for an Lp(a)HORIZON-style trial?",
      blocks: [
        {
          type: "p",
          text: "Lp(a)HORIZON tested pelacarsen in 8,323 patients with established cardiovascular disease. It required Lp(a) of 70 mg/dL or more at a central lab, plus a myocardial infarction or ischemic stroke 3 months to 10 years before screening, or symptomatic peripheral artery disease. Its key exclusions included NYHA class IV heart failure, a history of cancer, and a history of hemorrhagic stroke or other major bleeding.{{cite:ctgov-lpa-horizon}} On September 4, 2026, Novartis announced that the trial did not meet its primary endpoint.{{cite:novartis-2026}} Its criteria still show the search problem other Lp(a) trials face.",
        },
        {
          type: "p",
          text: "Few charts hold an Lp(a) result. In Epic Cosmos, a data set of more than 300 million patient records, 0.2% of the US population had Lp(a) tested from 2015 to 2024.{{cite:cosmos-lpa-2025}} Across the University of California health system from 2012 to 2021, 0.3% of 5.55 million adults had been tested, and so had only 2.9% of those with ischemic heart disease.{{cite:bhatia-2023}} Novartis estimates that about 20% of people worldwide have elevated Lp(a), so most patients who might qualify have no result in the chart.{{cite:novartis-2026}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Find the qualifying events",
              text: "Bond looks for myocardial infarction and ischemic stroke in codes, problem lists, discharge summaries and notes, and for symptomatic peripheral artery disease in vascular notes.",
            },
            {
              title: "Check the window",
              text: "Each event needs a date. Bond takes it from the admission or the note that describes it and keeps patients whose event falls between 3 months and 10 years before screening.{{cite:ctgov-lpa-horizon}}",
            },
            {
              title: "Look for any Lp(a) result",
              text: "A prior result at or above the threshold moves a patient up the list. Untested patients stay on it, since the trial measured Lp(a) at a central lab at screening. Units need care, because labs report Lp(a) in mg/dL or nmol/L and the protocol sets its threshold in one of them.",
            },
            {
              title: "Apply the exclusions",
              text: "NYHA class IV heart failure, past cancer, hemorrhagic stroke and major bleeding are checked in notes and imaging reports as well as codes.",
            },
            {
              title: "Hand off what the chart cannot settle",
              text: "Current symptoms and ability to attend visits go to the pre-screening call. The investigator confirms eligibility at screening.",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "An example, not a case study",
          text: "This walk-through applies Bond's screening approach to Lp(a)HORIZON's published criteria. Bond did not recruit for Lp(a)HORIZON.",
        },
      ],
    },
    {
      id: "recruiting-cardiology-trials",
      heading: "How many cardiology trials are recruiting in the US?",
      blocks: [
        {
          type: "p",
          text: "As of September 21, 2026, 2,845 studies with at least one US site were recruiting under a cardiology keyword search, about 13% of the 22,041 recruiting studies with a US site.{{cite:ctgov-api}} The search matches heart failure, coronary, atrial fibrillation, hypertension or cardiovascular in the condition field. It therefore counts hypertension and risk-factor studies, misses studies listed only under terms such as stroke, lipoprotein(a) or peripheral artery disease, and lets a study count in more than one area.",
        },
        {
          type: "chart",
          title: "Recruiting studies with at least one US site, by area (keyword search, September 21, 2026)",
          unit: "studies",
          data: [
            { label: "Oncology", value: 7074 },
            { label: "Cardiology", value: 2845 },
            { label: "Psychiatry", value: 1273 },
            { label: "Neurology", value: 987 },
            { label: "Obesity and type 2 diabetes", value: 852 },
            { label: "Pain", value: 629 },
            { label: "Gastroenterology", value: 285 },
            { label: "Dermatology", value: 214 },
          ],
          cite: "ctgov-api",
        },
        {
          type: "p",
          text: "About 6.7 million Americans aged 20 and older have heart failure, and the number is expected to reach 8.5 million by 2030.{{cite:hfsa-2023}} Yet of 19,191 cardiovascular trials registered on ClinicalTrials.gov from 2000 to 2025, 11.5% stopped early, and low recruitment was the most common reason given.{{cite:cv-termination-2026}} The hard part is finding the patients whose echo, labs and history fit a given protocol.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one cardiology protocol and we will walk through how its hardest criteria, such as a historical LVEF floor or an event window, map to your chart.",
          secondaryLabel: "Using the EHR for recruitment",
          secondaryHref: "/guides/ehr-for-recruitment",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can Bond read ejection fraction from echo reports?",
      a: "Bond reads the text of reports and notes that the site's EHR interface exposes, alongside structured fields,{{cite:bond-site}} and Identify also uses imaging data and other unstructured documents.{{cite:bond-product}} If echo reports live only as scanned images or in a separate cardiology imaging system, the site and Bond confirm during implementation whether the interface can reach them.",
    },
    {
      q: "Is there published evidence for AI screening in heart failure trials?",
      a: "Yes. RECTIFIER, a GPT-4 tool built at Mass General Brigham for the COPILOT-HF trial, judged symptomatic heart failure with 97.9% accuracy against 91.7% for study staff.{{cite:unlu-2024}} It is a separate tool, and its results are not Bond's.",
    },
  ],
  sources: [
    {
      id: "wjc-paragon-hf",
      title: "PARAGON-HF",
      publisher: "Wiki Journal Club",
      url: "https://www.wikijournalclub.org/wiki/PARAGON-HF",
      year: "2019",
      note: "Summary of Solomon SD et al., NEJM 2019. Quote: \"There were a significant number of patients excluded in the trial run-in period (10,359 screened with 4822 undergoing randomization), for reasons including comprehensive exclusion criteria and side-effects during run-in\" ... \"LVEF ≥45%\" ... \"Any prior echocardiographic measurement of LVEF <40%\"",
    },
    {
      id: "wjc-dapa-hf",
      title: "DAPA-HF",
      publisher: "Wiki Journal Club",
      url: "https://www.wikijournalclub.org/wiki/DAPA-HF",
      year: "2019",
      note: "Summary of McMurray JJV et al., NEJM 2019. Quote: \"Ejection fraction of ≤40%\" ... \"≥ 600pg/mL OR ≥ 400pg/mL if they were hospitalized for HF within the past 12 months OR ≥ 900pg/mL if patient had atrial fibrillation/flutter on baseline ECG\" ... \"NYHA Class II, III, or IV symptoms\" ... exclusion: \"Estimated glomerular filtration rate (eGFR) ≤30 ml/m/1.73m2\"",
    },
    {
      id: "esc-acc-2023",
      title: "ACC/AHA/HFSA 2022 and ESC 2021 guidelines on heart failure comparison",
      publisher: "ESC Heart Failure",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192289/",
      year: "2023",
      note: "Behnoush AH et al. Full text checked via NCBI E-utilities on September 22, 2026. Quote: \"In the latest ACC/AHA/HFSA guidelines, HF with improved LVEF (HFimpEF) has been added to the list.\" Table 1 (ESC column lists HFimpEF as N/A): \"HFrEF: LVEF ≤ 40%\" ... \"HFimpEF: Previous LVEF ≤ 40% and follow-up LVEF > 40%\" ... \"HFmrEF: LVEF 41%–49% and evidence of spontaneous or provokable increased LV filling pressures\" ... \"HFpEF: LVEF ≥ 50% and evidence of spontaneous or provokable increased LV filling pressures\"",
    },
    {
      id: "hakansson-2021",
      title: "Eligibility of Dapagliflozin and Empagliflozin in a Real-World Heart Failure Population",
      publisher: "Cardiovascular Therapeutics (Håkansson E et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8720587/",
      year: "2021",
      note: "Single center in Sweden (Umeå University Hospital), 2010 to 2019; non-US. Abstract checked via Europe PMC on September 22, 2026. Quote: \"681 patients had left ventricle ejection fraction ≤ 40%, and of these 352 (52%) and 268 (39%) patients met eligibility criteria for DAPA-HF and EMPEROR-reduced, respectively.\" ... \"The main reasons for ineligibility were low NT-proBNP or low eGFR.\"",
    },
    {
      id: "can-hf-2023",
      title: "Patient Eligibility for Established and Novel Guideline-Directed Medical Therapies After Acute Heart Failure Hospitalization",
      publisher: "JACC: Heart Failure (Moghaddam N et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/36732099/",
      year: "2023",
      note: "CAN-HF registry, Canada; 809 patients discharged alive after acute heart failure admission, 2017 to 2020; non-US. Abstract checked via PubMed on September 22, 2026. Quote: \"A total of 809 patients with documented LVEF were discharged alive from hospital: 455 with HFrEF and 354 with HFpEF\" ... \"In HFrEF patients, eligibility for therapies was ...\" ... \"Additionally, 25.9% and 30.1% met trial criteria for vericiguat and omecamtiv mecarbil, respectively.\"",
    },
    {
      id: "cv-termination-2026",
      title: "Trends and Predictors of Premature Termination of Cardiovascular Trials: A Systematic Review",
      publisher: "JACC: Advances",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13131426/",
      year: "2026",
      note: "Cardiovascular trials registered on ClinicalTrials.gov, 2000 to 2025. Full text checked via NCBI E-utilities on September 22, 2026. Quote: \"Among 19,191 trials, 2,202 (11.5%) were prematurely terminated. Low recruitment was the most common reported reason (946/2,202, 42.9%)\"",
    },
    {
      id: "unlu-2024",
      title: "Retrieval Augmented Generation Enabled Generative Pre-Trained Transformer 4 (GPT-4) Performance for Clinical Trial Screening",
      publisher: "medRxiv preprint (Unlu O et al.); peer-reviewed version in NEJM AI, 2024",
      url: "https://pubmed.ncbi.nlm.nih.gov/38370719/",
      year: "2024",
      note: "Abstract text checked via PubMed on September 22, 2026. Quote: \"Currently, structured data in the EHR can only be used to determine 5 out of 6 inclusion and 5 out of 17 exclusion criteria. Trained, but non-licensed, study staff complete manual chart review to determine patient eligibility\" ... \"RECTIFIER performed better than study staff to determine the inclusion criteria of 'symptomatic heart failure' with an accuracy of 97.9% vs 91.7%.\"",
    },
    {
      id: "subramaniam-2024",
      title: "Identifying Patients with Heart Failure Eligible for Guideline-Directed Medical Therapy",
      publisher: "Population Health Management (Subramaniam S et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/39630562/",
      year: "2024",
      note: "Abstract text checked via PubMed on September 22, 2026. Quote: \"The RBS was deployed to streamline a PHM program at Brigham and Women's Hospital wherein the RBS was executed every other month to identify potentially eligible patients for further screening by the program staff.\" ... \"A total 5460 patients were manually screened, of which 1754 were found to be truly eligible with an accuracy of 32.1%.\" ... \"over 38% of the false positives were due to incorrect determination of symptomatic HF and medication history of the patients. The system's performance can be potentially improved by integrating information from clinical notes.\"",
    },
    {
      id: "ctgov-lpa-horizon",
      title: "Assessing the Impact of Lipoprotein (a) Lowering With Pelacarsen (TQJ230) on Major Cardiovascular Events in Patients With CVD (Lp(a)HORIZON), NCT04023552",
      publisher: "ClinicalTrials.gov",
      url: "https://clinicaltrials.gov/study/NCT04023552",
      year: "2026",
      note: "Record read via the ClinicalTrials.gov API v2 on September 22, 2026; actual enrollment 8,323. Quote: \"Lp(a) ≥ 70 mg/dL at the screening visit, measured at the Central laboratory\" ... \"Myocardial infarction: ≥ 3 months from screening and randomization to ≤ 10 years prior to the screening visit\" ... \"Ischemic stroke: ≥ 3 months from screening and randomization to ≤ 10 years prior to the screening visit\" ... \"Clinically significant symptomatic peripheral artery disease\" ... Key Exclusion Criteria include: \"Heart failure New York Heart Association (NYHA) class IV\" ... \"History of malignancy of any organ system\" ... \"History of hemorrhagic stroke or other major bleeding\"",
    },
    {
      id: "novartis-2026",
      title: "Novartis announces Lp(a)HORIZON Phase III topline results for pelacarsen in patients with elevated Lp(a) and established cardiovascular disease (CVD)",
      publisher: "Novartis",
      url: "https://www.novartis.com/news/media-releases/novartis-announces-lpahorizon-phase-iii-topline-results-pelacarsen-patients-elevated-lpa-and-established-cardiovascular-disease-cvd",
      year: "2026",
      note: "Press release, September 4, 2026. Quote: \"did not meet its primary endpoint of reducing the risk of cardiovascular events\" ... \"8,323 patients with elevated Lp(a) and established CVD\" ... \"Approximately 20 percent of people worldwide, and nearly one-third of those with premature cardiovascular disease, have elevated Lp(a)\"",
    },
    {
      id: "cosmos-lpa-2025",
      title: "Lipoprotein(a) Testing Trends in the United States 2015-2024: An Analysis of 300 Million Individuals",
      publisher: "JACC: Advances (Ramsis M et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12495319/",
      year: "2025",
      note: "Epic Cosmos data. Quote: \"Epic Cosmos, a data set created in collaboration with a community of Epic health systems representing more than 300 million patient records\" ... \"From 2015 to 2024, a total of 728,550 (0.2% of U.S. population) distinct patients underwent Lp(a) testing\" ... \"annual percentage of the total patient population undergoing Lp(a) testing also increased, rising from 0.03% in 2015 to 0.24% in 2024\"",
    },
    {
      id: "bhatia-2023",
      title: "Lipoprotein(a) Testing Trends in a Large Academic Health System in the United States",
      publisher: "Journal of the American Heart Association (Bhatia HS et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/37702041/",
      year: "2023",
      note: "Abstract text checked via PubMed on September 22, 2026. Quote: \"From 2012 to 2021, there were 5 553 654 unique adults evaluated in the University of California health system, of whom 18 972 (0.3%) had lipoprotein(a) testing.\" ... \"Lipoprotein(a) testing was performed in 6469 individuals with ischemic heart disease (2.9%)\"",
    },
    {
      id: "hfsa-2023",
      title: "Heart Failure Epidemiology and Outcomes Statistics: A Report of the Heart Failure Society of America",
      publisher: "Journal of Cardiac Failure (Heart Failure Society of America)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10864030/",
      year: "2023",
      note: "Quote: \"Approximately 6.7 million Americans over 20 years of age have HF\" ... \"The prevalence of HF is expected to rise to 8.5 million Americans in 2030\"",
    },
    {
      id: "ctgov-api",
      title: "ClinicalTrials.gov API v2",
      publisher: "U.S. National Library of Medicine",
      url: "https://clinicaltrials.gov/data-api/api",
      year: "2026",
      note: "Queried September 21, 2026.",
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
    {
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Available on request.",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads structured data and notes against each criterion." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Causes, benchmarks and fixes a site can apply." },
    { label: "Therapeutic areas", href: "/therapeutic-areas", description: "Eligibility and chart evidence in the other areas Bond covers." },
    { label: "Using the EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "What the EHR can and cannot tell you about eligibility." },
    { label: "Unstructured clinical data", href: "/glossary/unstructured-clinical-data", description: "What it is and why eligibility depends on it." },
    { label: "Screen failure rate", href: "/glossary/screen-failure-rate", description: "How the metric is defined and reported." },
  ],
};

export default page;
