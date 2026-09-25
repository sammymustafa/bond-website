import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/pain",
  category: "therapeutic",
  title: "Chronic pain clinical trial recruitment and screening",
  description:
    "Chronic pain trial screening: where pain scores, opioid limits, prior procedures and psychiatric exclusions sit in the chart, and what drives screen failure.",
  keywords: [
    "chronic pain clinical trial recruitment",
    "chronic pain clinical trial screening",
    "pain trial screening criteria",
    "opioid exclusion criteria clinical trials",
    "pain trial screen failure",
    "placebo response pain trials",
  ],
  eyebrow: "Pain",
  h1: "Pain trial recruitment: diagnoses, opioid history and patient-reported scores",
  intro:
    "In 2023, 24.3% of US adults had chronic pain,{{cite:cdc-chronic-pain-2023}} yet in one review of phase 3 and 4 chronic pain trials, 33.8% of discontinued trials that gave a reason cited low accrual or insufficient recruitment.{{cite:jacobsen-2023}} Most pain protocols set a minimum pain score, and many also limit opioid dose, prior procedures and psychiatric history. This page maps those criteria to the chart and shows how Bond screens for them.",
  summary: "How pain scores, opioid limits, prior procedures and psychiatric exclusions map to the chart, and how Bond screens for them.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How Identify works", secondaryHref: "/identify" },
  sections: [
    {
      id: "how-pain-eligibility-works",
      heading: "How does eligibility work in chronic pain trials?",
      blocks: [
        {
          type: "p",
          text: "Chronic pain protocols select a diagnosis with pain that is long-lasting, severe enough and stable, then exclude patients whose treatment, opioid or psychiatric history could cloud the result. FDA's May 2026 draft guidance asks for pain of appropriate intensity and chronicity, for example at least 3 months, and asks sponsors to avoid overly restrictive enrollment criteria where possible.{{cite:fda-chronic-pain-2026}} The examples below come from ClinicalTrials.gov records read in September 2026.",
        },
        {
          type: "table",
          caption: "Common chronic pain criteria and where the evidence lives",
          columns: ["Criterion type", "Example protocol language", "Where it lives in the chart", "Structured?"],
          rows: [
            ["Diagnosis", "Painful lumbosacral radiculopathy diagnosed more than 3 months ago{{cite:nct06176196}}", "Problem list, encounter codes, specialist notes, imaging reports", "Partly: codes are often nonspecific"],
            ["Pain duration", "Daily pain for at least 12 weeks{{cite:nct05986292}}; low back pain for at least 6 months{{cite:nct06325566}}", "First diagnosis date, intake notes", "Partly"],
            ["Pain intensity", "Weekly average NPRS of 4 to 9 with limited variation over a 7-day baseline{{cite:nct06628908}}; VAS of 40 to under 95{{cite:nct05986292}}", "Visit pain scores; the qualifying score comes from screening", "Sometimes"],
            ["Prior treatment", "Failed at least 3 months of conservative care{{cite:nct06325566}}", "Medication history, physical therapy referrals, notes", "Partly"],
            ["Prior procedures", "No prior lumbar surgery such as discectomy or fusion{{cite:nct06176196}}; no epidural steroid injection within 6 weeks{{cite:nct06325566}}", "Surgical history, procedure codes, operative notes, outside records", "Partly: outside procedures often appear only in notes"],
            ["Opioid dose", "Average daily morphine equivalent of 200 mg or less over 30 days{{cite:nct05968664}}; no current prescription of 90 MME per day or more{{cite:nct07507422}}", "Medication orders and prescriptions", "Partly: the prescription is coded, the dose taken is not"],
            ["Substance use and psychiatric history", "No alcohol, illicit drug, analgesic or narcotic use disorder within 2 years{{cite:nct05986292}}; no severe depression or anxiety{{cite:nct06325566}}", "Problem list, behavioral health notes, PHQ-9 results", "Partly"],
            ["Psychological scales", "Pain Catastrophizing Scale score of 30 or less{{cite:nct05986292}}", "Rarely in the chart; scored at screening", "No"],
          ],
          note: "Structured? reflects typical documentation, not a measured rate, and varies by EHR.",
        },
        {
          type: "p",
          text: "The qualifying pain score and diary compliance are measured after consent, in a screening or pre-enrollment period that FDA's draft guidance suggests sponsors consider,{{cite:fda-chronic-pain-2026}} so a chart review can only predict them. The [therapeutic areas](/therapeutic-areas) pages map other conditions the same way.",
        },
      ],
    },
    {
      id: "screen-failure",
      heading: "What drives screen failure in chronic pain trials?",
      blocks: [
        {
          type: "p",
          text: "Published screen failure data for pain trials is thin. BEST, an NIH HEAL Initiative trial in chronic low back pain, published its funnel from pre-screen to randomization.",
        },
        {
          type: "stats",
          items: [
            { value: "3,140", label: "pre-screened for BEST", cite: "best-trial-2025" },
            { value: "1,483", label: "screened at an enrollment visit", cite: "best-trial-2025" },
            { value: "805", label: "randomized, 1 for every 3.9 pre-screened", cite: "best-trial-2025" },
          ],
        },
        {
          type: "p",
          text: "Of the 1,408 people BEST found ineligible at pre-screen, the most common reasons were a low PEG score (584), a disqualifying medical condition (429), back pain no worse than pain elsewhere in the body (334), and back pain for less than 3 months (204); one person could have several.{{cite:best-trial-2025}} PEG is a three-item, 0 to 10 scale of pain intensity and interference, so that cut needs the patient. A disqualifying condition or short back pain history can often be spotted in the chart first.",
        },
        {
          type: "p",
          text: "Pain score floors are a common cut: IMMPACT recommends a minimum of 4 on a 0 to 10 scale in most phase 2 and 3 trials where pain intensity is the primary outcome.{{cite:immpact-entry-2023}} Diaries add another cut after consent. All 1,019 people BEST enrolled entered a 2-week run-in: 72 became ineligible, 82 were lost to follow-up, and failing to complete daily pain questionnaires was among the most common reasons for exclusion.{{cite:best-trial-2025}} For site-level fixes, see [how to reduce screen failure](/guides/reduce-screen-failure).",
        },
      ],
    },
    {
      id: "opioid-and-psychiatric-exclusions",
      heading: "How do opioid and psychiatric exclusions shape the candidate pool?",
      blocks: [
        {
          type: "p",
          text: "Opioid limits vary by protocol, as the table shows, and the chart can only partly answer them. FDA's draft guidance says EHR and claims data show prescribing and dispensing patterns but are generally not sufficient for an accurate assessment of actual opioid use,{{cite:fda-chronic-pain-2026}} so the patient has to confirm what they take.",
        },
        {
          type: "p",
          text: "Psychiatric exclusions are common. In a sample of 400 highly cited trials from 2002 to 2010, possible or definite psychiatric exclusion criteria appeared in 75% of the low back pain trials and 57% of the osteoarthritis trials.{{cite:humphreys-2015}} A 2026 analysis of 312 neuropathic pain trials found definite or probable psychiatric exclusions in 80% of them, most often for substance-related disorders (38%) and depression (22%).{{cite:arnold-2026}}",
        },
        {
          type: "p",
          text: "A 2022 review found only 4 studies on the prevalence or impact of exclusion criteria in pain trials. In the one clinical trial among them, a Dutch low back pain study, the criteria turned away 452 of 1,148 otherwise eligible participants (39.4%), most often for psychological problems. Those excluded were older, less likely to have a paid job, had more functional limitations and used strong opioids more often.{{cite:salmasi-2022}}",
        },
      ],
    },
    {
      id: "placebo-response",
      heading: "Why does placebo response matter for recruitment?",
      blocks: [
        {
          type: "p",
          text: "Pain is self-reported, and placebo arms often improve. In a 2015 McGill analysis of 84 neuropathic pain drug trials from 1990 to 2013, placebo-group pain relief rose to an average 30% reduction by 2013, a rise seen only in trials run wholly in the US.{{cite:tuttle-2015}} Across 215 osteoarthritis trials, on average 75% of the pain reduction was attributable to contextual effects rather than the treatment itself.{{cite:zou-2016}} Who enrolls, and how reliably they report pain, affects whether a trial can detect a real effect.{{cite:immpact-conduct-2020}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "Why chart-first identification fits pain trials",
          text: "IMMPACT's paper on trial conduct lists confirming participant-reported diagnoses in clinical records or with treating physicians among its strategies against people who report a condition they do not have.{{cite:immpact-conduct-2020}} A patient found in their treating clinic's records starts with that evidence. Placebo response remains, but the diagnosis no longer rests on self-report.",
        },
      ],
    },
    {
      id: "what-bond-reads",
      heading: "What does Bond read in a pain chart?",
      blocks: [
        {
          type: "p",
          text: "Bond's [Identify](/identify) stage reads structured and unstructured records against each inclusion and exclusion criterion, ranks candidates, and shows the evidence behind each criterion-level decision.{{cite:bond-site}} It uses imaging data, clinical notes and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}} It connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR or HL7 interfaces or an aggregator.{{cite:bond-site,bond-product}} FDA's draft guidance notes that such data may be valuable in identifying patients who may be eligible for trials.{{cite:fda-chronic-pain-2026}} In a pain chart, Bond reads these sources where the site's EHR connection makes them available:",
        },
        {
          type: "ul",
          items: [
            "**Problem list and codes:** the diagnosis, and the first coded date as a rough guide to duration.",
            "**Medication orders:** opioid, gabapentinoid, SNRI and NSAID prescriptions with doses and dates, and any treatment for opioid use disorder.",
            "**Procedure history:** epidural injections, radiofrequency ablation, spine surgery and stimulator implants.",
            "**Flowsheets:** visit pain scores, and PHQ-9 or GAD-7 results where recorded.",
            "**Notes and imaging reports:** radicular or axial pain, where pain is worst, conservative care tried, and MRI findings.",
          ],
        },
        {
          type: "steps",
          items: [
            {
              title: "Match diagnoses and drugs across vocabularies",
              text: "Criterion and chart terms are resolved against Bond's terminology graph, built from 18 biomedical terminology sources, so a diagnosis or drug can match under its different names.{{cite:bond-whitepaper}}",
            },
            {
              title: "Compare opioid and procedure history with the protocol",
              text: "Prescribed opioid doses are compared with the protocol's limit, and injections and spine surgeries with its exclusions and washout windows.",
            },
            {
              title: "Read psychiatric and substance use history",
              text: "Diagnoses, questionnaire scores and behavioral health notes are checked against the protocol's own wording, not a generic psychiatric flag: \"severe depression or anxiety\" and \"any serious psychiatric disorder\" select very different pools.",
            },
            {
              title: "Leave scores and diaries to the study team",
              text: "Current pain, actual opioid use, where pain is worst and willingness to keep a diary go to the pre-screening call, run by Bond's [Engage](/engage) voice and text agents or by site staff. Patients are told AI is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "What Bond has published, and what it has not",
          text: "Bond reports 90%+ matching accuracy and 50%+ less chart review.{{cite:bond-site}} These are platform-wide figures. Commonwealth Pain and Spine Clinic is a Bond partner, and Bond has not published pain-specific screen failure or enrollment results.",
        },
      ],
    },
    {
      id: "recruiting-pain-trials",
      heading: "How many pain trials are recruiting in the US?",
      blocks: [
        {
          type: "p",
          text: "As of September 21, 2026, 629 recruiting studies with at least one US site matched a pain keyword search of ClinicalTrials.gov, about 3% of the 22,041 recruiting studies with a US site.{{cite:ctgov-api}} The search ran chronic pain, low back pain, osteoarthritis, neuropathic pain or migraine through the registry's condition search, which also checks study titles and keywords. The count includes observational studies and every matching osteoarthritis or migraine study, whether or not pain is the primary outcome, and counts acute or postoperative pain studies only if they match one of the five terms.",
        },
        {
          type: "chart",
          title: "Recruiting studies with a US site, by area (keyword searches, September 21, 2026)",
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
          text: "Each bar is a separate keyword search, so a study can count in more than one area; migraine is in both the pain and neurology searches.",
        },
        {
          type: "p",
          text: "The patient pool is large: in 2023, chronic pain rose with age from 12.3% of adults aged 18 to 29 to 36.0% of those 65 and older, and was more common in nonmetropolitan areas (31.4%) than in large central metropolitan areas (20.5%).{{cite:cdc-chronic-pain-2023}} The hard part is finding who qualifies.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a pain protocol and we will show how its criteria map to your charts.",
          secondaryLabel: "How Identify works",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What baseline pain score do chronic pain trials usually require?",
      a: "Most set a minimum of 4 on a 0 to 10 scale (40 on a 0 to 100 scale), in line with IMMPACT's recommendation when pain intensity is the primary outcome.{{cite:immpact-entry-2023}} Some also set a ceiling and require limited variation over a 7-day baseline, as in the table above.{{cite:nct06628908}}",
    },
    {
      q: "Does Bond decide whether a patient is eligible?",
      a: "No. Bond ranks candidates and shows the chart evidence for each criterion.{{cite:bond-site}} The coordinator reviews the match, and the investigator confirms eligibility at screening.",
    },
    {
      q: "How long does it take to start screening at a pain practice?",
      a: "Full EHR integration takes 4 to 6 weeks, depending on the EHR, the IT review and the interface method.{{cite:bond-site}}",
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
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Available on request.",
    },
    {
      id: "ctgov-api",
      title: "ClinicalTrials.gov API v2",
      publisher: "U.S. National Library of Medicine",
      url: "https://clinicaltrials.gov/data-api/api",
      year: "2026",
      note: "Queried September 21, 2026. Overall status Recruiting, location United States. Pain: condition search (query.cond) for \"chronic pain OR low back pain OR osteoarthritis OR neuropathic pain OR migraine\", 629 studies; all conditions, 22,041 studies. Other areas use their own keyword sets.",
    },
    {
      id: "cdc-chronic-pain-2023",
      title: "Chronic Pain and High-impact Chronic Pain in U.S. Adults, 2023 (NCHS Data Brief No. 518)",
      publisher: "CDC National Center for Health Statistics (Lucas JW, Sohi I)",
      url: "https://www.cdc.gov/nchs/products/databriefs/db518.htm",
      year: "2024",
      note: "Quote: \"In 2023, 24.3% of adults had chronic pain, and 8.5% of adults had chronic pain that frequently limited life or work activities.\" Also: \"The percentage of adults who had chronic pain in the past 3 months increased with age, from 12.3% among those ages 18–29 to 36.0% among those age 65 and older.\" And: \"from 20.5% in large central metropolitan areas to 31.4% in nonmetropolitan areas.\"",
    },
    {
      id: "fda-chronic-pain-2026",
      title: "Development of Non-Opioid Analgesics for Chronic Pain: Draft Guidance for Industry",
      publisher: "U.S. Food and Drug Administration, CDER",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/development-non-opioid-analgesics-chronic-pain",
      year: "2026",
      note: "Quote: \"the enrollment criteria should select participants with pain of appropriate intensity and chronicity (e.g., at least 3 months)\" and \"Sponsors should avoid overly restrictive enrollment criteria, where possible... geriatric participants or participants with renal or hepatic disease should not be routinely excluded from trials in the absence of a potential safety concern.\" Also: EHR and claims data \"can provide information on prescribing and dispensing patterns, but they are generally not sufficient for obtaining an accurate assessment of actual opioid use\" but \"may be valuable... in identifying patients who may be eligible for trial participation.\" And: \"Sponsors can consider incorporating an extended screening or preenrollment phase to evaluate participants' baseline pain severity... This preenrollment phase may also be used to identify participants who can comply with recording their pain scores.\" Draft, May 2026 (Revision 1). PDF checked September 23, 2026.",
    },
    {
      id: "nct06176196",
      title: "Evaluation of Efficacy and Safety of VX-548 for Painful Lumbosacral Radiculopathy (PLSR) (NCT06176196)",
      publisher: "ClinicalTrials.gov (Vertex Pharmaceuticals)",
      url: "https://clinicaltrials.gov/study/NCT06176196",
      year: "2025",
      note: "Phase 2, status Completed; record last updated October 1, 2025. Quote: \"Diagnosis of PLSR for greater than (>)3 months\"; \"Weekly average of daily NPRS score >=4 and <10\"; exclusion: \"History of prior lumbar spine surgery (e.g., discectomies, laminectomies, foraminotomies, or fusion)\". Record read September 2026.",
    },
    {
      id: "nct06628908",
      title: "Evaluation of Efficacy and Safety of Suzetrigine for Pain Associated With Diabetic Peripheral Neuropathy (NCT06628908)",
      publisher: "ClinicalTrials.gov (Vertex Pharmaceuticals)",
      url: "https://clinicaltrials.gov/study/NCT06628908",
      year: "2026",
      note: "Quote: \"Weekly average of daily NPRS score ≥4 and less than or equal to (≤) 9 with limited variation in the 7-day Baseline Period\"; \"Diagnosis of diabetes mellitus type 1 or type 2 by glycosylated hemoglobin A1c (HbA1c) ≤9%\"; exclusion: \"More than 3 missing daily NPRS scores during the 7-day Baseline Period\". Record read September 2026.",
    },
    {
      id: "nct05986292",
      title: "A Master Protocol Study (LY900028) of Multiple Intervention-Specific-Appendices (ISAs) in Participants With Chronic Pain (NCT05986292)",
      publisher: "ClinicalTrials.gov (Eli Lilly and Company)",
      url: "https://clinicaltrials.gov/study/NCT05986292",
      year: "2026",
      note: "Quote: \"have a visual analog scale (VAS) pain value ≥40 and <95 at screening\"; \"have a history of daily pain for at least 12 weeks\"; \"have a value of ≤30 on the pain catastrophizing scale\"; exclusion: \"have a history of alcohol, illicit drug, analgesic or narcotic use disorder within 2 years prior to screening\". Record read September 2026.",
    },
    {
      id: "nct06325566",
      title: "Efficacy and Safety of Rexlemestrocel-L Combined With HA in Participants With Moderate to Severe Chronic Low Back Pain (NCT06325566)",
      publisher: "ClinicalTrials.gov (Mesoblast, Ltd.)",
      url: "https://clinicaltrials.gov/study/NCT06325566",
      year: "2026",
      note: "Phase 3, status Active, not recruiting. Quote: \"Participants with moderate to severe low back pain for a duration of at least six months who have failed at least 3 months of conservative care\"; exclusions: \"Participants with severe depression or anxiety\" and \"Participants who received an epidural steroid injection within 6 weeks prior to informed consent\". Record read September 2026.",
    },
    {
      id: "nct05968664",
      title: "Novel Stimulation Patterns to Improve the Effectiveness of Spinal Cord Stimulation (NCT05968664)",
      publisher: "ClinicalTrials.gov (sponsor-investigator Ashwin Viswanathan, Baylor College of Medicine)",
      url: "https://clinicaltrials.gov/study/NCT05968664",
      year: "2024",
      note: "Status Recruiting; record last updated November 22, 2024. Quote: \"Consumed an average total daily morphine equivalent of ≤200 mg during the 30 days prior to Screening.\" Record read September 2026.",
    },
    {
      id: "nct07507422",
      title: "Post Market Evaluation of Real World Outcomes and Durability to Support Implantable Inceptiv Spinal Cord Stimulation Therapy (NCT07507422)",
      publisher: "ClinicalTrials.gov (Medtronic)",
      url: "https://clinicaltrials.gov/study/NCT07507422",
      year: "2026",
      note: "Quote: inclusion \"Patient is on stable opioid dosage for 3 months prior to enrollment, if applicable\"; exclusion \"Has a current prescription of ≥90 morphine milligram equivalents (MME) per day\". Record read September 2026.",
    },
    {
      id: "best-trial-2025",
      title: "Baseline characteristics of participants in the Biomarkers for Evaluating Spine Treatments clinical trial: a sequential multiple assignment randomized trial for chronic low back pain",
      publisher: "Pain Medicine (Rowland B et al., BEST Trial, NIH HEAL BACPAC)",
      url: "https://academic.oup.com/painmedicine/article/26/11/758/8222744",
      year: "2025",
      note: "Quote: \"We pre-screened 3140 potential participants, screened 1483 potential participants, enrolled 1019 participants, and randomized 805 participants in the BEST Trial.\" And: \"The most common reasons for pre-screen ineligibility were low PEG score (584/1408), a disqualifying medical condition (429/1408), back pain was not more severe than pain in other parts of the body (334/1408), or back pain for less than 3 months (204/1408)\". Also: \"We observed ratios of 3.9:1 and 1.8:1 for pre-screened and screened potential participants to those who were eventually randomized\"; \"All enrolled participants entered a 2-week run-in period\"; \"Seventy-two participants became ineligible during the run-in period, and 82 were lost to follow-up. The most common reasons for exclusion after the run-in period were lost to follow-up participants, failure to complete daily pain questionnaires, and failure to complete the BEST Trial educational modules.\" Full text checked via Europe PMC (PMC12585105) on September 23, 2026.",
    },
    {
      id: "jacobsen-2023",
      title: "Discontinuation and nonpublication analysis of chronic pain randomized controlled trials",
      publisher: "PAIN Reports (Jacobsen SM, Moore T, Douglas A, et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10079346/",
      year: "2023",
      note: "Phase 3 and 4 chronic pain RCTs on ClinicalTrials.gov (phase 2/3 included), excluding trials after October 1, 2017. Quote: \"a final analysis identified 71 of 112 trials (63.4%) providing a reason for trial discontinuation... low accrual or insufficient recruitment (24 of 71 [33.8%]).\"",
    },
    {
      id: "immpact-entry-2023",
      title: "What should be the entry pain intensity criteria for chronic pain clinical trials? An IMMPACT update",
      publisher: "PAIN (Langford DJ et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10523853/",
      year: "2023",
      note: "Quote: \"The majority of chronic pain clinical trials impose a minimum pain intensity score of 4 (0–10 scale) or 40 (0–100 scale)\"; IMMPACT recommends \"that, in most circumstances, an entry criterion of ≥4 be implemented for phase 2 and 3 trials for which pain intensity is the primary outcome\"; \"an entry algorithm that incorporates minimum, maximum and variability in baseline pain intensity may also be considered\".",
    },
    {
      id: "immpact-conduct-2020",
      title: "Improving Study Conduct and Data Quality in Clinical Trials of Chronic Pain Treatments: IMMPACT Recommendations",
      publisher: "The Journal of Pain (Gewandter JS, Dworkin RH, Turk DC, et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7292738/",
      year: "2020",
      note: "IMMPACT meeting convened \"to identify potential areas for improvement in trial conduct in order to improve assay sensitivity (i.e., ability of trials to detect a true treatment effect)\", including participant selection. Quote: \"Study participants' abilities to accurately and consistently report their pain intensities vary.\" Table 1 recommends: \"Employ strategies to minimize enrollment of fraudulent participants\"; the strategies described include \"confirming participant-reported diagnoses in clinical records or with treating physicians whenever possible\".",
    },
    {
      id: "humphreys-2015",
      title: "The exclusion of people with psychiatric disorders from medical research",
      publisher: "Journal of Psychiatric Research (Humphreys K, Blodgett JC, Roberts LW)",
      url: "https://pubmed.ncbi.nlm.nih.gov/26424420/",
      year: "2015",
      note: "Abstract checked via PubMed, PMID 26424420, on September 23, 2026. Quote: \"a sample of 400 highly-cited randomized trials (2002-2010) across 20 common chronic disorders... Half of all trials... reported possible or definite psychiatric exclusion criteria... Non-psychiatric conditions with high rates of reported psychiatric exclusion criteria included low back pain (75%), osteoarthritis (57%)\".",
    },
    {
      id: "arnold-2026",
      title: "Exclusion of psychiatric disorders in neuropathic pain research: a secondary analysis of 312 randomized controlled trials",
      publisher: "PAIN (Arnold K, Al-Chalabi N, Mann M, et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/42153807/",
      year: "2026",
      note: "Abstract checked via PubMed, PMID 42153807, on September 23, 2026. Quote: \"60% reported definite psychiatric exclusion criteria, 55% probable criteria, and 80% reported either or both.\" And: \"Substance-related disorders (38%) and depression (22%) were the most frequently specified exclusions\".",
    },
    {
      id: "salmasi-2022",
      title: "A literature review of the impact of exclusion criteria on generalizability of clinical trial findings to patients with chronic pain",
      publisher: "PAIN Reports (Salmasi V, Lii TR, Humphreys K, Reddy V, Mackey SC)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9663135/",
      year: "2022",
      note: "Quote: \"One clinical trial and 3 review articles (total N = 4) met our relevance criteria.\" On the clinical trial (Maas et al., 16 Dutch clinics and 102 physiotherapy practices): \"The most frequently applied exclusion was 'psychological problems'... The combined effect of all criteria was to exclude 452 of 1148 (39.4%) participants who had otherwise been deemed eligible during initial screenings... those in observational group 2 were older, less likely to have a paid job, had more functional limitations at baseline, and used strong opioids more often.\"",
    },
    {
      id: "tuttle-2015",
      title: "American placebo: New analysis of chronic pain drug trials shows increasing placebo responses over time, in the US only",
      publisher: "McGill University news release via EurekAlert, on Tuttle AH et al., PAIN 2015",
      url: "https://www.eurekalert.org/news-releases/869870",
      year: "2015",
      note: "News release dated October 6, 2015, on Tuttle AH et al., Pain 2015;156(12):2616-2626 (PMID 26307858). Quote: \"analyzed the results of 84 clinical trials of drugs conducted around the world from 1990 to 2013. Over that period, the pain inhibition experienced by patients in the placebo group increased steadily, reaching an average 30% decrease in pain levels by 2013\"; \"the increase in placebo responses occurred only in trials conducted wholly in the U.S.\"",
    },
    {
      id: "zou-2016",
      title: "Examination of overall treatment effect and the proportion attributable to contextual effect in osteoarthritis: meta-analysis of randomised controlled trials",
      publisher: "Annals of the Rheumatic Diseases (Zou K, Wong J, Abdullah N, et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5099197/",
      year: "2016",
      note: "Quote: \"In total, 215 trials (41 392 participants) were included... On average, 75% (PCE=0.75, 95% CI 0.72 to 0.79) of pain reduction was attributable to contextual effect.\"",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "What Bond reads in the chart and how each match is explained." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "Pre-screening calls for the questions a chart cannot answer." },
    { label: "Therapeutic areas", href: "/therapeutic-areas", description: "Criteria and chart evidence for other conditions." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Site-level fixes that act before the screening visit." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "An editable phone script with placeholders for your protocol's eligibility questions." },
  ],
};

export default page;
