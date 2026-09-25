import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/oncology",
  category: "therapeutic",
  title: "Oncology clinical trial recruitment and EHR screening",
  description:
    "Where oncology eligibility lives in the chart (stage, biomarkers, ECOG, line of therapy), what drives screen failure, and how Bond screens EHR records.",
  keywords: [
    "oncology clinical trial recruitment",
    "oncology EHR screening",
    "cancer trial screen failure",
    "oncology trial eligibility criteria",
  ],
  eyebrow: "Oncology",
  h1: "Oncology eligibility lives in reports and notes, not the problem list",
  intro:
    "Most of the evidence an oncology protocol screens on sits in pathology, molecular and imaging reports and in clinic notes, not in coded fields. In a pooled analysis of 13 studies of cancer patients, 21.5% were ineligible for a trial open at their institution, and 8.1% enrolled.{{cite:unger-2019}}",
  summary: "How oncology criteria map to the chart, what drives screen failure, and how Bond screens for it.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How Identify works", secondaryHref: "/identify" },
  sections: [
    {
      id: "how-oncology-eligibility-works",
      heading: "How does eligibility work in oncology trials?",
      blocks: [
        {
          type: "p",
          text: "Oncology protocols define a patient in layers: confirmed histology, stage and measurable disease, line of therapy, biomarkers, performance status and organ function, plus washout windows and exclusions such as brain metastases. Each layer is a separate chance to screen out, and each tends to live in a different part of the chart.",
        },
        {
          type: "table",
          caption: "Common oncology criteria and where the evidence lives",
          columns: ["Criterion type", "Typical protocol language", "Where it lives in the chart", "Structured?"],
          rows: [
            ["Histology and diagnosis", "Histologically confirmed adenocarcinoma", "Pathology report; diagnosis codes usually give the site, not the histology", "Partly"],
            ["Stage and extent of disease", "Unresectable stage III or IV per AJCC eighth edition", "Staging forms, oncology consult notes, imaging reports", "Often not"],
            ["Measurable disease", "At least one measurable lesion per RECIST 1.1", "Radiology reports", "No"],
            ["Biomarkers and genomics", "KRAS G12C mutation; mismatch repair deficiency; HER2 negative", "Molecular reports from outside labs; immunohistochemistry results inside pathology reports", "Rarely"],
            ["Line of therapy", "No prior systemic therapy for metastatic disease", "Infusion and medication records, treatment plans, progress notes", "Partly; drugs are coded, the reason a regimen ended is not"],
            ["Performance status", "ECOG 0 or 1", "Oncology progress notes, sometimes a flowsheet field", "Sometimes"],
            ["Organ function", "Neutrophils, platelets, creatinine clearance and liver enzymes within set limits", "Lab results", "Yes, if inside the screening window"],
            ["Washout and prior treatment", "No anticancer therapy within a set number of days before first dose", "Medication administration records, outside records, notes", "Partly"],
            ["CNS disease and other exclusions", "No untreated or symptomatic brain metastases", "Brain MRI reports, radiation oncology notes", "No"],
          ],
        },
        {
          type: "p",
          text: "The [therapeutic areas](/therapeutic-areas) pages map criteria to the chart the same way for other areas.",
        },
      ],
    },
    {
      id: "screen-failure",
      heading: "What drives screen failure in oncology trials?",
      blocks: [
        {
          type: "p",
          text: "Published screen failure data in oncology is thin, partly because many trials never report it. In a review of trials in advanced genitourinary cancers run from 1999 to 2016, ineligibility was the main reason given, with patient refusal also common in kidney and bladder trials.{{cite:wong-2017}}",
        },
        {
          type: "stats",
          items: [
            { value: "48%", label: "of 50 genitourinary cancer trials reviewed published a screen failure rate", cite: "wong-2017" },
            { value: "20% to 30%", label: "approximate screen failure in phase II and III trials in advanced genitourinary cancers", cite: "wong-2017" },
            { value: "21.4% to 26.4%", label: "screen failure among consented patients in early-phase trials at three French cancer centers, 2020 to 2022", cite: "korakis-2025" },
          ],
        },
        {
          type: "chart",
          title: "Reasons for screen failure in early-phase oncology trials (202 patients, three French centers, 2020 to 2022)",
          unit: "percent",
          data: [
            { label: "Radiological", value: 29.2 },
            { label: "Lab results", value: 23.8 },
            { label: "Clinical", value: 22.3 },
            { label: "Performance status decline", value: 11.9 },
            { label: "Administrative", value: 10.9 },
          ],
          cite: "korakis-2025",
        },
        {
          type: "p",
          text: "Radiology was the largest category, led by newly found brain metastases (27 patients) and disease that was not measurable (17 patients). The authors conclude that referring patients with a brain scan and laboratory results may help reduce screen failure.{{cite:korakis-2025}} A single-center review of 217 solid-tumor patients, which set aside biomarker, stage and prior-treatment failures, found the most common remaining reasons were rapid progression (16%), performance status of 2 or worse (12%) and abnormal liver tests (12%).{{cite:tiu-2019}}",
        },
        {
          type: "p",
          text: "Biomarker-selected trials fail patients at a different point. In phase 3 HER2-positive breast cancer trials at 14 sites in India, 56.1% of 727 screened patients failed screening, and most of those who missed the criteria were HER2 negative.{{cite:mahajan-2015}} Where the biomarker result is already in the chart, that kind of failure can be caught before a screening visit is booked.",
        },
        {
          type: "p",
          text: "Performance status is the other common gate. Among 96 phase III and IV oncology trials listed on ClinicalTrials.gov from 2019 to 2023, 43.8% admitted only ECOG 0 or 1 (or Karnofsky 70 or higher), and 20% included patients with ECOG 2.{{cite:agaronnik-2025}} FDA's final guidance on performance status, issued in July 2026, says patients with ECOG 2 should be included unless established safety considerations justify excluding them.{{cite:fda-ps-2026}} Protocols written before it may still require ECOG 0 or 1, and a patient's ECOG is often recorded only in a clinic note. For site-level fixes, see [how to reduce screen failure](/guides/reduce-screen-failure).",
        },
      ],
    },
    {
      id: "why-structured-data-misses-it",
      heading: "Why does structured EHR data miss oncology eligibility?",
      blocks: [
        {
          type: "p",
          text: "Structured fields hold diagnosis codes, medication orders and lab values. The facts that decide oncology eligibility are mostly written in text. In a 2014 study of trials in chronic lymphocytic leukemia and prostate cancer, unstructured data was essential to resolving 59% and 77% of the eligibility criteria, respectively.{{cite:raghavan-2014}}",
        },
        {
          type: "p",
          text: "Stage is a clear example. At one academic cancer center, TNM stage was documented in the EHR on time for only 5.6% of new patients before a hospital-wide intervention raised it to 67.4%.{{cite:lee-2021}} Progression and response are harder still: outside of trials they are not routinely encoded as structured data, and they live in radiology reports.{{cite:kehl-2019}} Molecular results add a further gap, since outside lab reports are often filed as documents rather than as discrete results.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "What a code-based query gets wrong",
          text: "A diagnosis code for colorectal cancer says nothing about KRAS status, prior oxaliplatin, or whether a liver lesion is measurable. Code-based lists send coordinators patients who fail on a pathology or molecular result, and miss patients whose progression appears only in a scan report.",
        },
      ],
    },
    {
      id: "how-bond-screens",
      heading: "How does Bond screen oncology charts?",
      blocks: [
        {
          type: "p",
          text: "Bond's [Identify](/identify) stage reads structured and unstructured records against each inclusion and exclusion criterion and ranks candidates.{{cite:bond-site}} It connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR or HL7 interfaces or through an aggregator.{{cite:bond-site,bond-product}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Map each criterion to clinical concepts",
              text: "Concepts in a criterion link to Bond's terminology graph, built from 18 vocabularies including NCIt for cancer and HGNC for genes, so a finding can be matched under the different names reports and notes use.{{cite:bond-whitepaper}}",
            },
            {
              title: "Read the documents that decide eligibility",
              text: "Imaging data, pathology, molecular and radiology reports, oncology notes and other unstructured documents are read alongside labs, medications and diagnosis codes, where the site's EHR connection makes them available.{{cite:bond-product}}",
            },
            {
              title: "Check treatment history against the notes",
              text: "Line-of-therapy and washout criteria are checked against infusion and medication records, which give drugs and dates, and the notes, which often say why a regimen stopped.",
            },
            {
              title: "Show the evidence for each criterion",
              text: "Each candidate's criteria are listed with a decision and the evidence behind it, so a coordinator checks the cited evidence instead of re-reading the chart.",
            },
            {
              title: "Leave to people what the chart cannot settle",
              text: "Current performance status, ability to attend visits, and changes not yet documented go to the pre-screening call, handled by Bond's [Engage](/engage) agents or site staff.",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "What Bond has published, and what it has not",
          text: "Bond reports above 90% matching accuracy and more than 50% less chart review, and full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site}} These are platform-wide figures. Bond has not published oncology-specific screen failure or enrollment results.",
        },
        {
          type: "quote",
          text: "Reduced our chart review time significantly while improving the quality of patients we bring in for screening.{{cite:bond-site}}",
          attribution: "Research coordinator, academic medical center, oncology trial",
        },
      ],
    },
    {
      id: "recruiting-oncology-trials",
      heading: "How many oncology trials are recruiting in the US?",
      blocks: [
        {
          type: "p",
          text: "As of September 21, 2026, 7,074 studies with a US site were recruiting under an oncology keyword search, about a third of the 22,041 recruiting US studies.{{cite:ctgov-api}} The search covers cancer, neoplasm, carcinoma, lymphoma or leukemia in the condition field, so it can miss tumor types named otherwise and includes some supportive care studies. Other areas use similar keyword sets (neurology covers only Alzheimer, dementia, Parkinson, multiple sclerosis, migraine and epilepsy), and a study can count in more than one area.",
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
          text: "Many oncology trials target narrow groups: worldwide, 74% of oncology trials started in 2024 evaluated medicines for rare cancers.{{cite:iqvia-oncology-2025}} In the pooled analysis cited above, the largest barrier was access: no trial was available at the patient's institution 55.6% of the time, and enrollment was 15.9% at academic sites against 7.0% at community sites.{{cite:unger-2019}}",
        },
      ],
    },
    {
      id: "example-trial-types",
      heading: "What do current oncology trials ask for?",
      blocks: [
        {
          type: "p",
          text: "These studies were recruiting at US sites in September 2026, per ClinicalTrials.gov.{{cite:ctgov-api}}",
        },
        {
          type: "ul",
          items: [
            "**Biomarker plus line of therapy.** A Merck phase 3 study of calderasib in colorectal cancer ([NCT06997497](https://clinicaltrials.gov/study/NCT06997497)) requires a KRAS G12C mutation, unresectable stage III or IV disease and, in Part 2, no systemic therapy for advanced disease beyond a short allowed course of chemotherapy.",
            "**Pathology-defined subgroup.** An NCI phase 2 study in recurrent endometrial cancer ([NCT05112601](https://clinicaltrials.gov/study/NCT05112601)) requires mismatch repair deficiency by immunohistochemistry or microsatellite instability testing, documented in an institutional pathology report.",
            "**Treatment-naive disease.** An AstraZeneca phase 3 study in follicular lymphoma ([NCT06549595](https://clinicaltrials.gov/study/NCT06549595)) requires no prior systemic lymphoma therapy and ECOG 0 to 2, and excludes suspected transformation to aggressive lymphoma.",
            "**Receptor status and stage.** An NCI phase 3 study in breast cancer ([NCT06058377](https://clinicaltrials.gov/study/NCT06058377)) requires hormone receptor positive, HER2 negative, clinical stage II or III disease without metastases.",
            "**Rare histologies.** An NCI phase 2 study ([NCT03866382](https://clinicaltrials.gov/study/NCT03866382)) enrolls rare genitourinary cancers such as pure squamous cell carcinoma of the bladder, which only the pathology text tells apart from urothelial cancer with squamous features.",
            "**Early-phase study.** A phase 1/2 study in advanced colorectal cancer ([NCT07693751](https://clinicaltrials.gov/study/NCT07693751)) requires ECOG 0 or 1 (ECOG 2 only with the sponsor's agreement) and sets limits for neutrophils, platelets, creatinine clearance and liver enzymes.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one oncology protocol and we will walk through how its hardest criteria map to your chart.",
          secondaryLabel: "Reduce screen failure",
          secondaryHref: "/guides/reduce-screen-failure",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can Bond read molecular reports from outside labs?",
      a: "Yes, where the site's EHR connection makes them available. Identify uses imaging data, clinical notes and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}} What comes through depends on how the site files outside results and which document types its interface exposes, so check with your IT team before a study starts.",
    },
    {
      q: "Does Bond decide whether a patient is eligible?",
      a: "No. Bond ranks candidates and shows the evidence for each criterion. The coordinator reviews the match, and the investigator confirms eligibility at screening.",
    },
    {
      q: "How does Bond compare with Tempus and Deep 6?",
      a: "The [Bond vs Tempus and Deep 6](/compare/bond-vs-tempus-deep-6) comparison sets out scope and approach side by side, sourced to each company's public materials.",
    },
  ],
  sources: [
    {
      id: "unger-2019",
      title: "Systematic Review and Meta-Analysis of the Magnitude of Structural, Clinical, and Physician and Patient Barriers to Cancer Clinical Trial Participation",
      publisher: "Journal of the National Cancer Institute (Unger JM, Vaidya R, Hershman DL, Minasian LM, Fleury ME)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6410951/",
      year: "2019",
      note: "Quote: \"We identified 13 studies (nine in academic and four in community settings) with 8883 patients. A trial was unavailable for patients at their institution 55.6% of the time (95% confidence interval [CI] = 43.7% to 67.3%). Further, 21.5% (95% CI = 10.9% to 34.6%) of patients were ineligible for an available trial, 14.8% (95% CI = 9.0% to 21.7%) did not enroll, and 8.1% (95% CI = 6.3% to 10.0%) enrolled. Rates of trial enrollment in academic (15.9% [95% CI = 13.8% to 18.2%]) vs community (7.0% [95% CI = 5.1% to 9.1%]) settings differed\"",
    },
    {
      id: "wong-2017",
      title: "Screen Failure Rates in Contemporary Randomized Clinical Phase II/III Therapeutic Trials in Genitourinary Malignancies",
      publisher: "Clinical Genitourinary Cancer (Wong SE, North SA, Sweeney CJ, Stockler MR, Sridhar SS)",
      url: "https://pubmed.ncbi.nlm.nih.gov/28993132/",
      year: "2017",
      note: "Abstract text checked via Europe PMC on September 22, 2026. Quote: \"We reviewed 50 phase II and III trials in advanced genitourinary cancers conducted between 1999 and 2016 ... Of the 50 trials, only 48% (24 of 50) published screen failure rates ... The main reason for screen failure was reported as ineligibility ... with the most frequent reasons being ineligibility and patient refusal ... Contemporary trials in genitourinary cancer reported screen failure rates of approximately 20% to 30%.\"",
    },
    {
      id: "korakis-2025",
      title: "Addressing screening failures in early-phase clinical trials in oncology: impact on patient outcomes and strategies for improvement",
      publisher: "ESMO Open (Korakis I et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12362514/",
      year: "2025",
      note: "Three French cancer centers, 2020 to 2022; 202 patients with solid tumors who consented and then screen-failed. Quote: \"A total of 202 patients failed to enroll in EPT, representing an SF rate of 21.7% (Gustave Roussy Cancer Campus Villejuif), 21.4% (Oncopole Claudius Regaud, Toulouse) and 26.4% (Centre Léon Bérard, Lyon) ... SF reasons were radiological (n = 59, 29.2%), biological (n = 48, 23.8%; n = 34 due to vital organ dysfunction), clinical (n = 45, 22.3%), administrative (n = 22, 10.9%), and PS deterioration (n = 24, 11.9%) ... Radiological reasons included brain metastases (n = 27), nonmeasurable disease (n = 17) and absence of target for mandatory biopsy (n = 8) ... referring patients with brain scan and laboratory results may help reduce SF rates.\"",
    },
    {
      id: "tiu-2019",
      title: "Effect of Reasons for Screen Failure on Subsequent Treatment Outcomes in Cancer Patients Assessed for Clinical Trials",
      publisher: "Oncology (Tiu C et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31266008/",
      year: "2019",
      note: "Single-center review of 217 adults with solid tumors listed as ineligible on screening logs, 2011 to 2018. Quote: \"Patients screen-failed for biomarker results or incorrect cancer stage/prior treatment profile were excluded ... Overall, 217 patients were eligible ... The most common RFSF were rapid disease progression (PD; 16%), performance status (PS) ≥2 (12%), and abnormal liver function tests (aLFT; 12%).\"",
    },
    {
      id: "mahajan-2015",
      title: "Reasons why patients fail screening in Indian breast cancer trials",
      publisher: "Perspectives in Clinical Research (Mahajan P et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/26623389/",
      year: "2015",
      note: "Non-US data, used here only to illustrate biomarker-driven screen failure. Quote: \"Of 727 patients screened at 14 sites, 408 (56.1%) failed screening ... Of these, 296 (80%) screen failure patients did not meet selection criteria. The majority -266 were HER2 negative.\"",
    },
    {
      id: "agaronnik-2025",
      title: "Exclusion of people from oncology clinical trials based on functional status",
      publisher: "Clinical Trials (Agaronnik ND, Peters MLB, Iezzoni LI)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12199287/",
      year: "2025",
      note: "96 approved interventional phase III and IV oncology trials listed on ClinicalTrials.gov between January 1, 2019 and December 31, 2023. Quote: \"the most common thresholds for inclusion were ECOG 0 or 1 or equivalent KPS 70 or greater in 42 (43.8%) of studies.\" Abstract: \"Only 20% of studies included patients with Eastern Cooperative Oncology Group 2 and Karnofsky Performance Scale 60.\"",
    },
    {
      id: "fda-ps-2026",
      title: "Cancer Clinical Trial Eligibility Criteria: Performance Status. Guidance for Industry, IRBs, and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/178018/download",
      year: "2026",
      note: "Final guidance, July 2026. Quote: \"Patients with ECOG PS2 (or KPS 60-70) should be included unless there is a scientific and/or clinical rationale for exclusion justified by established safety considerations.\"",
    },
    {
      id: "raghavan-2014",
      title: "How essential are unstructured clinical narratives and information fusion to clinical trial recruitment?",
      publisher: "AMIA Joint Summits on Translational Science Proceedings (Raghavan P, Chen JL, Fosler-Lussier E, Lai AM)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25717416/",
      year: "2014",
      note: "Abstract text checked via Europe PMC on September 22, 2026. Quote: \"We perform an empirical study to validate the argument and show that structured data alone is insufficient in resolving eligibility criteria for recruiting patients onto clinical trials for chronic lymphocytic leukemia (CLL) and prostate cancer. Unstructured data is essential to solving 59% of the CLL trial criteria and 77% of the prostate cancer trial criteria.\"",
    },
    {
      id: "lee-2021",
      title: "A Hospital-Wide Intervention to Improve Compliance With TNM Cancer Staging Documentation",
      publisher: "Journal of the National Comprehensive Cancer Network (Lee JH et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34450596/",
      year: "2021",
      note: "Academic oncology practice, 7,787 preintervention and 5,152 postintervention new patient visits, 2014 to 2018. Quote: \"For most teams, staging was considered compliant if it was completed in the EHR within the first 7 days of the calendar month after the date of the patient visit ... During the preintervention period, staging was compliant in 5.6% of patients compared with 67.4% of patients after intervention.\"",
    },
    {
      id: "kehl-2019",
      title: "Assessment of Deep Natural Language Processing in Ascertaining Oncologic Outcomes From Radiology Reports",
      publisher: "JAMA Oncology (Kehl KL et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31343664/",
      year: "2019",
      note: "Quote: \"Outside of clinical trials, end points such as cancer progression and response are not routinely encoded into structured data.\"",
    },
    {
      id: "iqvia-oncology-2025",
      title: "Global Oncology Trends 2025",
      publisher: "IQVIA Institute for Human Data Science",
      url: "https://www.iqvia.com/insights/the-iqvia-institute/reports-and-publications/reports/global-oncology-trends-2025",
      year: "2025",
      note: "Quote: \"Most oncology trials are focused on rare cancers, with 74% of trial starts in 2024 evaluating medicines for rare cancers.\"",
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
    { label: "Bond vs Tempus and Deep 6", href: "/compare/bond-vs-tempus-deep-6", description: "Scope and approach compared, from public materials." },
    { label: "Unstructured clinical data", href: "/glossary/unstructured-clinical-data", description: "What it is and why eligibility depends on it." },
    { label: "Screen failure rate", href: "/glossary/screen-failure-rate", description: "How the metric is defined and reported." },
  ],
};

export default page;
