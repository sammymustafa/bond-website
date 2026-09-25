import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/obesity-and-metabolic",
  category: "therapeutic",
  title: "Obesity and type 2 diabetes trial recruitment: GLP-1 era",
  description:
    "How BMI rules, A1c windows and GLP-1 washouts shape obesity and type 2 diabetes trial screening, what drives screen failure, and what to check in the chart.",
  keywords: [
    "obesity clinical trial recruitment",
    "GLP-1 trial eligibility criteria",
    "type 2 diabetes trial screening",
    "obesity trial screen failure",
    "prior GLP-1 use exclusion",
  ],
  eyebrow: "Therapeutic area",
  h1: "Obesity and metabolic trials: BMI, A1c and the GLP-1 era",
  intro:
    "From August 2021 to August 2023, 40.3 percent of US adults had obesity.{{cite:cdc-obesity}} These trials rarely lack candidates on paper. They lack candidates whose measured BMI, A1c and medication history fall inside the protocol's windows on screening day. This page covers eligibility, screen failure, and what Bond Health reads in the chart.",
  summary: "BMI, A1c and GLP-1 washout criteria, screen failure drivers, and the recruiting-trial pool for obesity and type 2 diabetes.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Identify", secondaryHref: "/identify" },
  sections: [
    {
      id: "large-pool-hard-fit",
      heading: "Why is recruitment hard when so many adults qualify on paper?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "40.3%", label: "US adults with obesity, August 2021 to August 2023", cite: "cdc-obesity" },
            { value: "40.1 million", label: "People in the US with diagnosed or undiagnosed diabetes, 2023", cite: "cdc-diabetes" },
            { value: "12%", label: "US adults currently taking a GLP-1 drug, late 2025 poll", cite: "kff-glp1-2025" },
            { value: "852", label: "Recruiting obesity, overweight or type 2 diabetes studies with a US site", cite: "ctgov-api" },
          ],
        },
        {
          type: "p",
          text: "Population numbers make these trials look easy. One analysis of national survey data estimated that 93.0 million US adults, 38 percent, fit the criteria of STEP 1, the semaglutide 2.4 mg obesity trial.{{cite:wong-2025}} It applied STEP 1's BMI and comorbidity rules and excluded diabetes, acute pancreatitis, bariatric surgery and severe renal failure. That sizes the pool, not who passes screening: weight, A1c and GLP-1 use change between the last chart entry and the screening visit.",
        },
      ],
    },
    {
      id: "eligibility-patterns",
      heading: "What do obesity and type 2 diabetes protocols usually require?",
      blocks: [
        {
          type: "p",
          text: "Most obesity trials start from a BMI rule. FDA's January 2025 draft guidance on weight-reduction drugs describes enrolling adults with a BMI of 30 or higher, or 27 or higher with a weight-related comorbidity such as type 2 diabetes, hypertension, dyslipidemia, sleep apnea or cardiovascular disease.{{cite:fda-obesity-guidance}} Of 10,407 registered obesity and obesity-related studies, about 75 percent used BMI as a strict inclusion criterion.{{cite:nguyen-2025}}",
        },
        {
          type: "p",
          text: "Type 2 diabetes trials add an A1c window and a background-therapy rule. SURPASS-2 required an HbA1c of 7.0 to 10.5 percent and a stable metformin dose above 1,500 mg a day for at least 3 months.{{cite:surpass-2}} Obesity trials that exclude diabetes turn the A1c rule around: STEP 1 excluded a central-lab HbA1c of 6.5 percent or higher.{{cite:step-1}}",
        },
        {
          type: "table",
          caption: "Typical criterion types in obesity and type 2 diabetes trials",
          columns: ["Criterion", "Example", "Where it lives in the chart", "Structured or unstructured"],
          rows: [
            ["BMI", "30 or higher, or 27 or higher with a comorbidity{{cite:fda-obesity-guidance}}", "Vitals", "Structured, but may be old"],
            ["Weight-related comorbidity", "Hypertension, dyslipidemia, sleep apnea, cardiovascular disease", "Problem list, sleep study reports", "Mixed"],
            ["A1c", "7.0 to 10.5% (SURPASS-2); 6.5% or higher excluded (STEP 1){{cite:surpass-2,step-1}}", "Lab results", "Structured; STEP 1 used the screening central-lab value"],
            ["Diabetes status", "Required, or any history excluded", "Problem list, medications, A1c history", "Mostly structured; undiagnosed diabetes is invisible"],
            ["Prior GLP-1 use", "None within 90 days (SELECT) or 6 months (enicepatide){{cite:select,enicepatide}}", "Medication list, orders, notes", "Mixed: stop dates may be only in notes"],
            ["Recent weight change", "No self-reported change over 5 kg in 90 days{{cite:step-1}}", "Patient report; vitals trend", "Self-report decides; the chart is a guide"],
            ["Safety history", "Pancreatitis, personal or family history of medullary thyroid carcinoma or MEN 2, gastroparesis, bariatric surgery{{cite:surpass-2,select,enicepatide}}", "Problem list, surgical and family history, GI notes", "Often unstructured"],
            ["Psychiatric stability", "No unstable major depression or severe psychiatric disorder{{cite:enicepatide}}", "Problem list, psychiatry notes, PHQ-9", "Mixed"],
            ["Kidney and eye (type 2 diabetes)", "eGFR 45 or higher; no proliferative retinopathy{{cite:surpass-2}}", "Labs, eye exam reports", "Labs structured; eye findings often scanned"],
          ],
          note: "From the ClinicalTrials.gov entries for SURPASS-2, STEP 1, SELECT and a 2026 enicepatide trial, retrieved September 2026.{{cite:surpass-2,step-1,select,enicepatide}} Each protocol sets its own values.",
        },
      ],
    },
    {
      id: "prior-glp1-use",
      heading: "How does prior GLP-1 use affect eligibility?",
      blocks: [
        {
          type: "p",
          text: "Many obesity protocols exclude recent GLP-1 exposure. SELECT, the semaglutide cardiovascular outcomes trial, excluded treatment with any GLP-1 receptor agonist within 90 days before screening.{{cite:select}} A Phase 3 enicepatide trial that Roche started in 2026 excludes any approved or investigational GLP-1-based therapy, whether single, dual or triple agonist, within 6 months before randomization.{{cite:enicepatide}}",
        },
        {
          type: "p",
          text: "By late 2025, 18 percent of US adults said they had ever taken a GLP-1 drug and 12 percent were taking one, up from 12 and 6 percent in May 2024.{{cite:kff-glp1-2025,kff-glp1-2024}} Among adults told they had overweight or obesity in the past five years, 34 percent had ever taken one and 23 percent were taking one; among adults with diabetes, 57 and 45 percent.{{cite:kff-glp1-2025}}",
        },
        {
          type: "p",
          text: "Many of those patients stop. In a large US EHR cohort of adults with overweight or obesity who started a GLP-1, 64.8 percent of those without type 2 diabetes discontinued within one year, against 46.5 percent of those with it.{{cite:rodriguez-2025}} A patient excluded today may qualify once the washout has passed, if the chart shows when the drug was stopped.",
        },
        {
          type: "callout",
          tone: "info",
          title: "The stop date is the evidence",
          text: "A medication list shows what was prescribed, not always when a patient stopped or switched to a self-paid or compounded supply. Those details, when recorded, often sit in progress notes. Bond reads notes with the medication list and shows the evidence behind each GLP-1 decision.",
        },
      ],
    },
    {
      id: "screen-failure",
      heading: "What drives screen failure in obesity and metabolic trials?",
      blocks: [
        {
          type: "p",
          text: "Published data here is thin: few metabolic trials report screen failures by reason, and we found no verifiable pooled screen failure rate for obesity or type 2 diabetes trials. The clearest numbers come from single trials and eligibility modeling.",
        },
        {
          type: "p",
          text: "SURMOUNT-3, which used a lead-in, shows two gates. Of 972 people assessed at screening, 806 entered a 12-week intensive lifestyle lead-in, so about 17 percent were not enrolled. Of those 806, 579 (71.8 percent) reached at least 5 percent weight loss, remained eligible and were randomized.{{cite:surmount-3}}",
        },
        {
          type: "p",
          text: "A 2026 study of 352 GLP-1 receptor agonist trials registered from 2017 to 2020 found BMI criteria in 66.2 percent. In national survey data, a BMI threshold of 30 was met by 41.5 percent of non-Asian and 13.5 percent of Asian US adults, while more than 93 percent met typical A1c, eGFR and liver-function thresholds.{{cite:huh-2026}} Of the criteria studied, BMI removed the most adults.",
        },
        { type: "h3", text: "Where chart-eligible patients fail at screening" },
        {
          type: "ul",
          items: [
            "**Measured BMI under the threshold**, when the chart weight is old or self-reported.",
            "**A screening lab in the diabetes range.** SURMOUNT-3 excluded an HbA1c of 6.5 percent or higher, fasting glucose of 126 mg/dL or higher, or random glucose of 200 mg/dL or higher.{{cite:surmount-3}} Some of these patients have undiagnosed diabetes: 27.6 percent of US adults with diabetes do not know they have it.{{cite:cdc-diabetes}}",
            "**GLP-1 or weight-loss drug use** that the medication list did not show.",
            "**Self-reported weight change** over the limit, such as 5 kg in 90 days.{{cite:step-1}}",
            "**Psychiatric screening**, such as a PHQ-9 score of 15 or more, an exclusion in SURMOUNT-3.{{cite:surmount-3}}",
            "**Lead-in failure**, when a patient misses a weight-loss target before randomization.{{cite:surmount-3}}",
          ],
        },
        {
          type: "p",
          text: "The chart-based items can be checked before a screening visit is booked; the central-lab result and the lead-in cannot. See the [guide to reducing screen failure](/guides/reduce-screen-failure).",
        },
      ],
    },
    {
      id: "what-bond-reads",
      heading: "What does Bond read in the chart to find eligible patients?",
      blocks: [
        {
          type: "p",
          text: "Bond's [Identify](/identify) stage reads structured EHR data and clinical notes against a study's inclusion and exclusion criteria, ranks candidates, and links each criterion decision to the evidence behind it.{{cite:bond-site}} It also uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}} For a metabolic protocol, that evidence falls into four groups.",
        },
        {
          type: "steps",
          items: [
            { title: "Vitals and labs", text: "Height, weight, BMI and trend, plus A1c, glucose, eGFR and liver enzymes, each linked to the record it came from so a coordinator can see how old it is." },
            { title: "Medications", text: "Current and past GLP-1 and GIP agonists, other glucose-lowering and weight-loss drugs, with start and stop evidence from orders and notes." },
            { title: "Problem list and history", text: "Comorbidities, diabetes type, pancreatitis, gallbladder disease, bariatric surgery, and personal or family history of thyroid cancer." },
            { title: "Notes and reports", text: "Sleep studies, eye exams, psychiatric history, weight-loss attempts, and why a drug was stopped." },
          ],
        },
        {
          type: "p",
          text: "One drug appears under many names: semaglutide as Ozempic, Wegovy or Rybelsus, tirzepatide as Mounjaro or Zepbound, plus RxNorm codes and free text. Bond's terminology graph maps names and codes across 18 sources, including RxNorm, LOINC, SNOMED CT and ICD-10-CM, in 3,270,078 nodes, so one criterion check matches each form.{{cite:bond-whitepaper}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "What the chart cannot settle",
          text: "Bond's [Engage](/engage) voice and text agents ask what a chart cannot answer, such as self-paid GLP-1 use or recent weight change, from a script configured for the study, then hand interested patients to the coordinator. Patients are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
        },
      ],
    },
    {
      id: "trial-pool",
      heading: "How many obesity and metabolic trials are recruiting in the US?",
      blocks: [
        {
          type: "p",
          text: "As of September 21, 2026, a ClinicalTrials.gov condition keyword search for obesity, overweight or type 2 diabetes returned 852 recruiting studies with a US site, out of 22,041 in total.{{cite:ctgov-api}} The count includes observational studies, and a study can appear in more than one area.",
        },
        {
          type: "chart",
          title: "Recruiting studies with a US site, by condition keyword search",
          unit: "studies",
          data: [
            { label: "Oncology", value: 7074 },
            { label: "Cardiology", value: 2845 },
            { label: "Psychiatry", value: 1273 },
            { label: "Neurology", value: 987 },
            { label: "Obesity, overweight or type 2 diabetes", value: 852 },
            { label: "Pain", value: 629 },
            { label: "Gastroenterology", value: 285 },
            { label: "Dermatology", value: 214 },
          ],
          cite: "ctgov-api",
        },
        {
          type: "p",
          text: "These are keyword searches, not formal categories. The cardiology search includes hypertension and cardiovascular terms, so some metabolic studies count there too, and MASH and NASH studies fall under gastroenterology. The [therapeutic areas](/therapeutic-areas) page covers the rest.",
        },
        {
          type: "p",
          text: "Sponsor trials fill fast: STEP 5 randomized all 304 participants in under four months, and SURMOUNT-3 enrolled 806 people into its lead-in in under five months.{{cite:step-5,surmount-3}} IQVIA estimated more than 193 obesity assets in development worldwide as of October 2025.{{cite:iqvia-obesity}} Sites with candidates pre-screened at activation are better placed.",
        },
      ],
    },
    {
      id: "getting-started",
      heading: "What does it take to start on a metabolic study?",
      blocks: [
        {
          type: "p",
          text: "Many metabolic candidates are seen in primary care, not at a research site, so Bond works with research sites and with [physician groups](/for/physician-groups).",
        },
        {
          type: "p",
          text: "Full EHR integration usually takes 48 hours, depending on the EHR, IT review and interface method. Pricing is a volume-based platform fee plus a success fee per randomized patient, with no integration fee; see [pricing](/pricing).{{cite:bond-site}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring an obesity or type 2 diabetes protocol and we will walk through how Bond reads its BMI, A1c and GLP-1 washout criteria.",
          secondaryLabel: "All therapeutic areas",
          secondaryHref: "/therapeutic-areas",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Why not filter on an obesity diagnosis code?",
      a: "A code shows that a clinician documented obesity at some point. It does not give the current BMI, which is what the protocol checks, so Bond reads measured vitals alongside the problem list.",
    },
    {
      q: "Does Bond publish accuracy figures for metabolic trials specifically?",
      a: "No. Bond publishes over 90 percent matching accuracy for eligibility screening overall, not by therapeutic area. Matching accuracy is also one of the outcomes in Bond's reporting to sites.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "cdc-obesity",
      title: "Obesity and Severe Obesity Prevalence in Adults: United States, August 2021-August 2023 (NCHS Data Brief No. 508)",
      publisher: "CDC National Center for Health Statistics",
      url: "https://www.cdc.gov/nchs/products/databriefs/db508.htm",
      year: "2024",
      note: "Quote: \"During August 2021–August 2023, the prevalence of obesity in adults was 40.3%, with no significant differences between men and women.\"",
    },
    {
      id: "cdc-diabetes",
      title: "National Diabetes Statistics Report",
      publisher: "Centers for Disease Control and Prevention",
      url: "https://www.cdc.gov/diabetes/php/data-research/index.html",
      year: "2026",
      note: "Quote: \"40.1 million Estimated number of people with diagnosed or undiagnosed diabetes in the United States, 2023\" and \"27.6% Estimated percentage of adults aged ≥18 years with diabetes who are undiagnosed, representing 11.0 million people\". Page last reviewed September 16, 2026.",
    },
    {
      id: "kff-glp1-2025",
      title: "Poll: 1 in 8 Adults Say They Are Currently Taking a GLP-1 Drug for Weight Loss, Diabetes or Another Condition",
      publisher: "KFF",
      url: "https://www.kff.org/public-opinion/poll-1-in-8-adults-say-they-are-currently-taking-a-glp-1-drug-for-weight-loss-diabetes-or-another-condition-even-as-half-say-the-drugs-are-difficult-to-afford/",
      year: "2025",
      note: "Quote: \"About one in eight adults (12%) say that they are currently taking a GLP-1 drug\", \"Overall nearly one in five adults (18%) say at some point they have taken a GLP-1 drug\", and \"diagnosed with diabetes (57% have ever used the drug, including 45% who are currently using), heart disease (40% ever, 29% currently), or as obese or overweight in the past five years (34% ever, 23% currently)\". Fielded October 27 to November 2, 2025.",
    },
    {
      id: "kff-glp1-2024",
      title: "KFF Health Tracking Poll May 2024: The Public's Use and Views of GLP-1 Drugs",
      publisher: "KFF",
      url: "https://www.kff.org/health-costs/kff-health-tracking-poll-may-2024-the-publics-use-and-views-of-glp-1-drugs/",
      year: "2024",
      note: "Quote: \"about one in eight adults (12%) say they have ever taken a GLP-1 agonist\" and \"6% who say they are currently taking such a drug\". Fielded April 23 to May 1, 2024.",
    },
    {
      id: "fda-obesity-guidance",
      title: "Obesity and Overweight: Developing Drugs and Biological Products for Weight Reduction (Draft Guidance for Industry)",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/71252/download",
      year: "2025",
      note: "Draft guidance, Revision 2, January 2025. Nonbinding recommendations. Quote: \"BMI greater than or equal to 27 kg/m2 in the presence of at least one weight-related comorbidity (e.g., type 2 diabetes, hypertension, dyslipidemia, sleep apnea, or cardiovascular disease)\".",
    },
    {
      id: "nguyen-2025",
      title: "Clinical Data Mega-Collection of Obesity and Obesity-Related Trials: Primary Inclusion Criteria from All Studies and Highlights of Clinical Efficacy Analysis of GLP-1 Drugs",
      publisher: "Journal of Clinical Medicine",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11818846/",
      year: "2025",
      note: "Quote: \"Among the 10,407 trials, there were nearly 7600 that utilized the BMI as a strict inclusion criterion, accounting for ~75% of all studies\".",
    },
    {
      id: "wong-2025",
      title: "US Population Eligibility and Estimated Impact of Semaglutide Treatment on Obesity Prevalence and Cardiovascular Disease Events",
      publisher: "Cardiovascular Drugs and Therapy",
      url: "https://pubmed.ncbi.nlm.nih.gov/37578663/",
      year: "2025",
      note: "NHANES 2015-2018. Quote: \"We identified 3999 US adults weighted to an estimated population size of 93.0 million [M] (38% of US adults) who fit STEP 1 eligibility criteria.\" Methods (full text, PMC11802588): \"Patients with diabetes mellitus (DM), acute pancreatitis, bariatric surgery, or severe renal failure were excluded.\"",
    },
    {
      id: "surpass-2",
      title: "SURPASS-2: Tirzepatide Versus Semaglutide Once Weekly as Add-on Therapy to Metformin in Participants With Type 2 Diabetes (NCT03987919)",
      publisher: "ClinicalTrials.gov",
      url: "https://clinicaltrials.gov/study/NCT03987919",
      year: "2026",
      note: "Quote: \"Have HbA1c between ≥7.0% and ≤10.5%\", \"Be on stable treatment with unchanged dose of metformin >1500 mg/day for at least 3 months prior to screening\", and exclusions \"Have an estimated glomerular filtration rate <45 milliliters/minute/1.73 m²\", \"Have proliferative diabetic retinopathy or diabetic maculopathy or nonproliferative diabetic retinopathy requiring acute treatment\", \"Have a personal or family history of medullary thyroid carcinoma or personal history of multiple endocrine neoplasia syndrome type 2\" and \"Have been taking any other diabetes medicines other than metformin during the last 3 months\". Retrieved via the ClinicalTrials.gov API v2 on September 22, 2026.",
    },
    {
      id: "step-1",
      title: "STEP 1: Semaglutide in People With Overweight or Obesity (NCT03548935)",
      publisher: "ClinicalTrials.gov",
      url: "https://clinicaltrials.gov/study/NCT03548935",
      year: "2026",
      note: "Quote (exclusion criteria): \"(HbA1C) greater than or equal to 48 mmol/mol (6.5%) as measured by the central laboratory at screening\" and \"A self-reported change in body weight greater than 5 kg (11 lbs) within 90 days before screening irrespective of medical records\". Retrieved via the ClinicalTrials.gov API v2 on September 22, 2026.",
    },
    {
      id: "select",
      title: "SELECT: Semaglutide Effects on Heart Disease and Stroke in Patients With Overweight or Obesity (NCT03574597)",
      publisher: "ClinicalTrials.gov",
      url: "https://clinicaltrials.gov/study/NCT03574597",
      year: "2026",
      note: "Quote (exclusion criteria): \"Treatment with any glucagon-like-peptide-1 receptor agonist (GLP-1 RA) within 90 days before screening\", \"History or presence of chronic pancreatitis\" and \"Personal or first degree relative(s) history of multiple endocrine neoplasia type 2 or medullary thyroid carcinoma\". Retrieved via the ClinicalTrials.gov API v2 on September 22, 2026.",
    },
    {
      id: "enicepatide",
      title: "A Clinical Study to Evaluate the Effects of Enicepatide (RO7795068) in Participants With Obesity or Overweight Without Type 2 Diabetes (NCT07351045)",
      publisher: "ClinicalTrials.gov",
      url: "https://clinicaltrials.gov/study/NCT07351045",
      year: "2026",
      note: "Quote (exclusion criteria): \"Treatment with any approved or investigational GLP-1-RA-based therapy (e.g., GLP-1 receptor mono agonist, GLP-1/GIP receptor dual agonist, GLP-1/GIP/Gluc receptor triple agonist) within 6 months prior to randomization\", \"Prior or planned surgical treatment for obesity\", \"Known clinically significant gastric emptying abnormality (e.g., severe gastroparesis or gastric outlet obstruction)\" and \"Have a history of significant active or unstable major depressive disorder (MDD) or other severe psychiatric disorder\". Lead sponsor Hoffmann-La Roche, Phase 3, start date March 16, 2026. Retrieved via the ClinicalTrials.gov API v2 on September 22, 2026.",
    },
    {
      id: "rodriguez-2025",
      title: "Discontinuation and Reinitiation of Dual-Labeled GLP-1 Receptor Agonists Among US Adults With Overweight or Obesity",
      publisher: "JAMA Network Open",
      url: "https://pubmed.ncbi.nlm.nih.gov/39888616/",
      year: "2025",
      note: "Quote: \"One-year discontinuation was significantly higher for patients without type 2 diabetes (64.8% [95% CI, 64.4%-65.2%]) compared with those with type 2 diabetes (46.5% [95% CI, 46.2%-46.9%]).\"",
    },
    {
      id: "surmount-3",
      title: "Tirzepatide after intensive lifestyle intervention in adults with overweight or obesity: the SURMOUNT-3 phase 3 trial",
      publisher: "Nature Medicine",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10667099/",
      year: "2023",
      note: "Quote: \"A total of 972 participants were assessed for eligibility at screening, of whom 806 were enrolled into the 12-week intensive lifestyle intervention lead-in period\", \"The first participant was enrolled on 12 April 2021 and the last on 3 September 2021\", \"579 (71.8%) who achieved ≥5% weight reduction at the end of the lead-in period and were otherwise eligible to proceed to the next phase of the study were randomized\" and \"conducted at 62 medical research centers in the USA, Argentina and Brazil\". Exclusion criteria (Methods): \"had at least one laboratory value suggestive of diabetes mellitus during screening, including one or more of: HbA1c ≥6.5% (≥48 mmol mol−1), fasting glucose ≥126 mg dl−1 (≥7.0 mmol l−1) or random glucose ≥200 mg dl−1 (≥11.1 mmol l−1)\", \"had a lifetime history of suicide attempt\" and \"had a PHQ-9 score of 15 or more at visit 1\".",
    },
    {
      id: "step-5",
      title: "Two-year effects of semaglutide in adults with overweight or obesity: the STEP 5 trial",
      publisher: "Nature Medicine",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9556320/",
      year: "2022",
      note: "Quote: \"From 5 October 2018 to 1 February 2019, 304 participants were randomly assigned to semaglutide 2.4 mg (n = 152) or placebo (n = 152), 92.8% of whom completed the trial\".",
    },
    {
      id: "huh-2026",
      title: "Fixed BMI eligibility criteria for GLP-1 receptor agonist trials and estimated trial-eligible proportions in Asian and non-Asian populations: A cross-sectional analysis",
      publisher: "PLoS One",
      url: "https://pubmed.ncbi.nlm.nih.gov/42348574/",
      year: "2026",
      note: "Quote: \"This cross-sectional study characterized eligibility criteria in 352 GLP-1 RA trials registered on ClinicalTrials.gov (2017-2020)\" and \"BMI criteria, specified in 233 trials (66.2%), demonstrated the largest eligibility disparities. For trials requiring BMI ≥ 30 kg/m2, eligibility was 41.5% for Non-Asian US versus 13.5% for Asian US and 7.2% for Korean adults. In contrast, HbA1c, eGFR, and liver function criteria showed minimal between-population differences (all > 93% meeting typical thresholds).\" Huh KY, Song I. Abstract read via NCBI E-utilities.",
    },
    {
      id: "iqvia-obesity",
      title: "Outlook for Obesity in 2026: From Consolidation to Acceleration",
      publisher: "IQVIA",
      url: "https://www.iqvia.com/locations/emea/blogs/2026/01/outlook-for-obesity-in-2026",
      year: "2026",
      note: "Quote: \"IQVIA estimated there are over 193 assets in development as of October 2025, an increase from 181 assets in development in May 2025.\" Published January 5, 2026.",
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
      note: "Goel R. Bond Health preprint, August 2026.",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads vitals, labs, medications and notes against a protocol's criteria." },
    { label: "Engage: voice and text pre-screening", href: "/engage", description: "Asks patients the questions a chart cannot answer, then hands them to the coordinator." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Causes, benchmarks and fixes across therapeutic areas." },
    { label: "For physician groups", href: "/for/physician-groups", description: "Running trials in the practices where metabolic patients are already seen." },
    { label: "Therapeutic areas", href: "/therapeutic-areas", description: "Eligibility and screen failure in oncology, cardiology, neurology and more." },
  ],
};

export default page;
