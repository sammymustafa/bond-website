import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/alzheimers-blood-biomarkers-screening",
  category: "blog",
  title: "How p-tau217 blood tests are changing Alzheimer's screening",
  description:
    "Four FDA-cleared Alzheimer's blood tests, what trials learned from p-tau217 pre-screening, the gray zone and kidney caveats, and a setup plan for sites.",
  keywords: [
    "p-tau217 Alzheimer's trial screening",
    "Alzheimer's blood test clinical trial pre-screening",
    "plasma biomarker Alzheimer's screen failure",
    "FDA cleared Alzheimer's blood test",
  ],
  eyebrow: "Blog",
  h1: "Blood tests are moving the amyloid check to the front of Alzheimer's trial screening",
  intro:
    "Plasma p-tau217 and related blood tests let an Alzheimer's study check for likely amyloid with a blood draw, before anyone books a PET scan or a lumbar puncture. They do not remove screen failure; they move it to the first visit, where it costs much less. Here is where FDA clearance stands as of October 2026, what trials have learned, and what a site should set up before its next blood-first protocol.",
  summary: "FDA-cleared Alzheimer's blood tests, trial experience with p-tau217 pre-screening, and how a site should set up a blood-first funnel.",
  lastUpdated: "2026-10-21",
  blog: { date: "2026-10-21", author: "Rishabh Goel", readingMinutes: 6 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Alzheimer's trial recruitment", secondaryHref: "/neurology-and-alzheimers" },
  sections: [
    {
      id: "cleared-tests",
      heading: "Which Alzheimer's blood tests has FDA cleared?",
      blocks: [
        {
          type: "p",
          text: "As of FDA's September 2026 data refresh, four blood tests for amyloid pathology are cleared, all as Class II devices through the 510(k) pathway under 21 CFR 866.5840.{{cite:openfda-set}} The first, Fujirebio's Lumipulse test, was cleared on May 16, 2025.{{cite:fda-lumipulse-2025}}",
        },
        {
          type: "table",
          caption: "FDA-cleared Alzheimer's blood tests, October 2026",
          columns: ["Test", "FDA decision", "Cleared use", "How results are reported"],
          rows: [
            ["Lumipulse G pTau217/β-Amyloid 1-42 Plasma Ratio (Fujirebio)", "May 16, 2025{{cite:openfda-set}}", "Adults 55 and older with signs and symptoms of Alzheimer's disease{{cite:fda-lumipulse-2025}}", "Positive, indeterminate or negative; under 20% of 499 patients were indeterminate"],
            ["Elecsys Phospho-Tau (181P) Plasma (Roche)", "October 8, 2025", "Initial assessment in adults 55 and older with cognitive symptoms; not recommended once a patient is referred to a specialist{{cite:fda-k252163}}", "One cutoff: NPV 97.9%, PPV 22.4%"],
            ["PrecivityAD2 (C2N Diagnostics)", "August 19, 2026", "Adults 40 and older with signs or symptoms of cognitive impairment; run at a single laboratory{{cite:fda-k253240}}", "Positive, likely positive or negative; 17.3% likely positive"],
            ["Elecsys Phospho-Tau (217P) Plasma (Roche)", "August 19, 2026", "Adults 55 and older with signs, symptoms or complaints of cognitive decline{{cite:fda-k261686}}", "Positive, intermediate or negative; 19.9% intermediate"],
          ],
          note: "FDA decision dates are from the 510(k) database; company announcements came a few days later.{{cite:openfda-set}}",
        },
        {
          type: "p",
          text: "Two limits matter for trials. Every cleared test is for people who already have cognitive symptoms, and FDA described the Lumipulse test as \"not intended as a screening or stand-alone diagnostic test.\"{{cite:fda-lumipulse-2025}} A preclinical prevention trial that screens cognitively unimpaired volunteers is therefore working outside these labels, under the protocol's own assay, lab and cutoff.",
        },
      ],
    },
    {
      id: "gray-zone",
      heading: "How accurate are the tests, and what is the gray zone?",
      blocks: [
        {
          type: "p",
          text: "In FDA's announcement, 91.7% of people with a positive Lumipulse result had amyloid on PET or CSF, and 97.3% with a negative result did not.{{cite:fda-lumipulse-2025}} The catch is the middle band. With Elecsys pTau217, 191 of 958 study participants (19.9%) had an intermediate result, and 37.7% of those were PET positive.{{cite:fda-k261686}} PrecivityAD2 put 17.3% of results in its likely positive band, where 77.3% were amyloid positive.{{cite:fda-k253240}}",
        },
        {
          type: "stats",
          items: [
            { value: "19.9%", label: "of Elecsys pTau217 study results were intermediate", cite: "fda-k261686" },
            { value: "22.4%", label: "positive predictive value of the single-cutoff pTau181 test", cite: "fda-k252163" },
            { value: "≥90% / ≥75%", label: "sensitivity and specificity the Alzheimer's Association sets for a triage test", cite: "palmqvist-2025" },
          ],
        },
        {
          type: "p",
          text: "The single-cutoff pTau181 test is a rule-out tool: its negative predictive value was 97.9%, but only 22.4% of positives were amyloid positive on PET.{{cite:fda-k252163}} The Alzheimer's Association's 2025 guideline sets thresholds of at least 90% sensitivity and 75% specificity for triage, and 90% for both to substitute for PET or CSF, for patients with cognitive impairment in specialized care. It warns that many commercial tests miss these thresholds, especially with a single cutoff, and it does not extend to cognitively unimpaired people.{{cite:palmqvist-2025}}",
        },
      ],
    },
    {
      id: "what-trials-learned",
      heading: "What have trials learned from blood pre-screening?",
      blocks: [
        {
          type: "p",
          text: "The case for a blood pre-screen is strongest in prevention trials, where most volunteers are amyloid negative. The Alzheimer's Association's 2022 appropriate use recommendations already endorsed blood tests as pre-screeners for disease-modifying trials, provided amyloid status is confirmed by PET or CSF. They note that the A4 trial took 3.5 years and more than 4,000 amyloid PET scans to randomize 1,169 participants.{{cite:hansson-2022}}",
        },
        {
          type: "p",
          text: "In AHEAD 3-45, 68.5% of 1,080 cognitively unimpaired volunteers who went to PET before plasma screening began did not qualify. Modeling on those samples, a p-tau217 ratio pre-screen would fill a 1,000-person trial with 3,885 people screened by blood and only 1,288 PET scans.{{cite:rissman-2024}}",
        },
        {
          type: "p",
          text: "TRAILBLAZER-ALZ 3 went further: it was the first trial to use plasma p-tau217 as the only biomarker of Alzheimer's pathology. It screened 63,124 people aged 55 to 80 and enrolled 2,196. Of those tested, 89.9% were ineligible on p-tau217, and screening of people aged 55 to 64 was stopped after one year because of the failure volume.{{cite:yaari-2025}}",
        },
        {
          type: "table",
          caption: "TRAILBLAZER-ALZ 3: share of people tested who were ineligible on plasma p-tau217, by age",
          columns: ["Age", "Ineligible on p-tau217"],
          rows: [
            ["55 to 59", "95.5% (5,316 of 5,564){{cite:yaari-2025}}"],
            ["65 to 69", "92.5% (17,783 of 19,221)"],
            ["75 to 79", "83.3% (7,321 of 8,785)"],
            ["80 to 84", "78.5% (798 of 1,016)"],
          ],
          note: "Sponsor-authored paper; one central assay at Lilly's laboratory. Selected age bands shown.{{cite:yaari-2025}}",
        },
        {
          type: "p",
          text: "Two operational lessons came with it. The mean gap from randomization to first dose was 68 days, because dosing waited on equipment shipment and baseline tests.{{cite:yaari-2025}} And screen failure did not fall evenly: Black or African American screenees had the highest overall screen-failure rate, 99.1%.{{cite:yaari-2025}}",
        },
      ],
    },
    {
      id: "how-many-trials",
      heading: "How many Alzheimer's trials now use blood biomarkers?",
      blocks: [
        {
          type: "p",
          text: "On October 5, 2026, 41 of the 593 recruiting or not-yet-recruiting interventional Alzheimer's studies on ClinicalTrials.gov mentioned p-tau217 in their eligibility text, against 144 that mentioned amyloid PET, a PET scan or CSF.{{cite:ctgov-ad-2026}} A keyword match is not proof of an inclusion criterion; some mentions are alternatives or exclusions.",
        },
        {
          type: "p",
          text: "Protocols also differ on whose result counts. AHEAD 3-45 accepts a plasma result at screening or prior PET, CSF or plasma testing. A UCL Phase 3 platform trial ([NCT07724132](https://clinicaltrials.gov/study/NCT07724132)) accepts a positive or intermediate pTau-217 result from validated assays within 365 days before screening.{{cite:ctgov-ad-2026}} TRAILBLAZER-ALZ 3 used the sponsor's central laboratory.{{cite:yaari-2025}}",
        },
      ],
    },
    {
      id: "what-blood-does-not-settle",
      heading: "What does a blood result not settle?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Kidney function.** In a Mayo Clinic study, an eGFR of 45 against 60 raised p-tau217 in amyloid-negative people by 31%, 55% or 19% depending on the assay, and the authors advise checking eGFR to avoid misclassification.{{cite:bornhorst-2025}}",
            "**Differences across groups.** In Bio-Hermes, run at 17 trial sites, amyloid positivity was 26.2% in non-Hispanic Black participants against 37.3% in non-Hispanic White participants.{{cite:mohs-2024}} Watch pass rates by group, not just overall.",
            "**Disclosure.** Bio-Hermes returned only lipid panel results from the blood draw to investigators.{{cite:mohs-2024}} The 2022 recommendations flag the ramifications of disclosing biomarker results to people without symptoms.{{cite:hansson-2022}}",
            "**The rest of the protocol.** Cognitive scores, MRI exclusions and the study partner still need checking; our [Alzheimer's recruitment page](/neurology-and-alzheimers) covers those criteria.",
          ],
        },
      ],
    },
    {
      id: "site-setup",
      heading: "How should a site set up a blood-first pre-screen?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Pin down what the protocol accepts",
              text: "Which assay, which laboratory, which cutoff and how old a result may be. Record the assay name, value, date and lab with every referral.",
            },
            {
              title: "Search the chart for results that already exist",
              text: "Plasma biomarker results, amyloid PET reports, CSF results and a recent eGFR, each with its date. Patients evaluated for cognitive symptoms are the population the cleared tests are labeled for.{{cite:openfda-set}}",
            },
            {
              title: "Agree a path for intermediate results",
              text: "Expect close to one result in five in the middle band with some tests.{{cite:fda-k261686}} Decide in advance whether those participants go to PET, CSF or a repeat draw, and script what staff tell them.",
            },
            {
              title: "Write the disclosure plan with the IRB",
              text: "Decide before the first draw what participants learn about a blood result, who tells them and what support follows.",
            },
            {
              title: "Target outreach by age and track the funnel by group",
              text: "In TRAILBLAZER-ALZ 3, p-tau217 eligibility rose with age.{{cite:yaari-2025}} Track blood pass rate, PET or CSF pass rate and enrollment by age and by race and ethnicity.",
            },
            {
              title: "Keep the gap to first dose short",
              text: "Line up baseline tests and equipment before randomization so eligible participants are not left waiting.",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's [Identify](/identify) stage reads lab results, clinical notes, imaging data and radiology reports, and shows criterion-by-criterion evidence for every match. A documented p-tau217 result, an amyloid PET report or a recent eGFR appears next to the criterion it answers, so a coordinator can confirm it before booking.{{cite:bond-site,bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring an Alzheimer's protocol. We will map its biomarker, cognitive and MRI criteria to your chart.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can an FDA-cleared blood test replace amyloid PET for trial eligibility?",
      a: "Only if the protocol says so. TRAILBLAZER-ALZ 3 used plasma p-tau217 alone, run at the sponsor's laboratory,{{cite:yaari-2025}} while the 2022 appropriate use recommendations call for PET or CSF confirmation after a blood pre-screen.{{cite:hansson-2022}} The cleared tests are labeled for people with cognitive symptoms.{{cite:openfda-set}}",
    },
    {
      q: "Are blood tests cheaper than amyloid PET?",
      a: "Generally. The Alzheimer's Association guideline says blood tests often cost 70% to 90% less than PET, though prices vary and US reimbursement is inconsistent.{{cite:palmqvist-2025}} Check the protocol budget for who pays for the draw and any repeat test.",
    },
    {
      q: "Should participants be told their blood biomarker result?",
      a: "Follow the protocol and your IRB-approved plan. Practices differ: Bio-Hermes did not return Alzheimer's blood biomarker results to investigators.{{cite:mohs-2024}} This is not legal or medical advice.",
    },
  ],
  sources: [
    {
      id: "openfda-set",
      title: "openFDA 510(k) records, product code SET (immunoassay blood test for amyloid pathology assessment)",
      publisher: "US Food and Drug Administration (openFDA)",
      url: "https://api.fda.gov/device/510k.json?search=product_code:SET&limit=50",
      year: "2026",
      note: "Queried October 2026; dataset last updated 2026-09-28. Four records, each \"Substantially Equivalent\", clearance type \"Traditional\", regulation 866.5840, device class 2: K242706 Lumipulse G pTau217/ß-Amyloid 1-42 Plasma Ratio (decision 2025-05-16); K252163 Elecsys Phospho-Tau (181P) Plasma (2025-10-08); K253240 PrecivityAD2 Test (2026-08-19); K261686 Elecsys Phospho-Tau (217P) Plasma (2026-08-19). Classification text: \"used to identify patients with amyloid pathology associated with Alzheimer's Disease who have signs and symptoms of cognitive decline.\"",
    },
    {
      id: "fda-lumipulse-2025",
      title: "FDA Clears First Blood Test Used in Diagnosing Alzheimer's Disease",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/news-events/press-announcements/fda-clears-first-blood-test-used-diagnosing-alzheimers-disease",
      year: "2025",
      note: "May 16, 2025. Quotes: \"adult patients, aged 55 years and older, exhibiting signs and symptoms of the disease\"; \"91.7% of individuals with Lumipulse G pTau217/ß-Amyloid 1-42 Plasma Ratio positive results had the presence of amyloid plaques by PET scan or CSF test result\"; \"97.3 % of individuals with negative results had a negative amyloid PET scan or CSF test result\"; \"Less than 20% of the 499 patients tested received an indeterminate ... result\"; \"not intended as a screening or stand-alone diagnostic test\". FDA's K242706 decision summary (accessdata.fda.gov/cdrh_docs/reviews/K242706.pdf) instead reads \"aged 50 years and older, presenting at a specialized care setting\" and gives the PPV as 91.8% (201/219); this page uses the press release figures.",
    },
    {
      id: "fda-k252163",
      title: "510(k) Substantial Equivalence Determination Decision Summary, K252163: Elecsys Phospho-Tau (181P) Plasma",
      publisher: "US Food and Drug Administration, CDRH",
      url: "https://www.accessdata.fda.gov/cdrh_docs/reviews/K252163.pdf",
      year: "2025",
      note: "Quotes: \"intended to aid in the initial assessment for Alzheimer’s disease and other causes of cognitive decline in adult patients aged 55 years and older\"; \"not recommended for patients with signs, symptoms, or complaints of cognitive decline, who are already referred to the specialist\"; \"The Negative Predictive Value (NPV) of the assay was 97.9% (139/142)\"; \"The Positive Predictive Value (PPV) was 22.4% (38/170)\". Study of 312 participants with 13.1% amyloid PET positivity.",
    },
    {
      id: "fda-k253240",
      title: "510(k) clearance letter and summary, K253240: PrecivityAD2 Test",
      publisher: "US Food and Drug Administration, CDRH",
      url: "https://www.accessdata.fda.gov/cdrh_docs/pdf25/K253240.pdf",
      year: "2026",
      note: "Letter dated August 19, 2026. Quotes: \"indicated for use in adults aged 40 years and older who present with signs or symptoms of cognitive impairment\"; \"The test is not intended as a screening or stand-alone diagnostic test.\"; \"performed at a single-site laboratory\"; \"Results are reported as Positive, Likely Positive, or Negative.\" Performance table: Likely Positive 77.3% positive, frequency 17.3% (198/1142); \"At the calculated amyloid prevalence of 52.7%, the PPV for APS2 Positive subjects is 97.6% and the NPV for APS2 Negative subjects is 93.1%.\"",
    },
    {
      id: "fda-k261686",
      title: "510(k) Substantial Equivalence Determination Decision Summary, K261686: Elecsys Phospho-Tau (217P) Plasma",
      publisher: "US Food and Drug Administration, CDRH",
      url: "https://www.accessdata.fda.gov/cdrh_docs/reviews/K261686.pdf",
      year: "2026",
      note: "Quotes: \"individuals aged 55 years and older. The assay is intended for use as an aid in identifying patients with amyloid pathology presenting with signs, symptoms, or complaints of cognitive decline associated with Alzheimer's disease.\"; \"there were 191 out 958 (19.9%) subjects with intermediate Elecsys Phospho- Tau (217P) Plasma results\"; \"The PV for intermediate Elecsys Phospho-Tau (217P) Plasma results was 37.7% (72/191)\". Positive results PPV 88.5% (285/322); NPV 95.3% (424/445). The summary contains copy errors (one sentence gives prevalence as 13.1% where its table shows 39.5%).",
    },
    {
      id: "palmqvist-2025",
      title: "Alzheimer's Association Clinical Practice Guideline on the use of blood-based biomarkers in the diagnostic workup of suspected Alzheimer's disease within specialized care settings",
      publisher: "Alzheimer's & Dementia (Palmqvist S et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12306682/",
      year: "2025",
      note: "Quotes: \"(1) BBM tests with ≥90% sensitivity and ≥75% specificity can be used as a triaging test and (2) BBM tests with ≥90% sensitivity and specificity can serve as a substitute for amyloid PET imaging or CSF AD biomarker testing\"; \"many commercially available BBM tests do not meet these thresholds, especially using a single cutoff\"; \"This guideline does not extend to cognitively unimpaired individuals\"; \"BBMs generally cost significantly less, often 70% to 90% lower than PET imaging\"; \"In places like the United States, savings are offset by inconsistent reimbursement\". Conditional recommendations, low-certainty evidence.",
    },
    {
      id: "hansson-2022",
      title: "The Alzheimer's Association appropriate use recommendations for blood biomarkers in Alzheimer's disease",
      publisher: "Alzheimer's & Dementia (Hansson O et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10087669/",
      year: "2022",
      note: "Quotes: \"We already now recommend use of BBMs as (pre-)screeners to identify individuals likely to have AD pathological changes for inclusion in trials evaluating disease-modifying therapies, provided the AD status is confirmed with positron emission tomography (PET) or cerebrospinal fluid (CSF) testing.\"; \"3.5 years and > 4000 amyloid PET scans to identify and randomize 1169 participants\"; \"It is important to consider the ramifications of disclosing biomarker results to individuals who are currently asymptomatic\".",
    },
    {
      id: "yaari-2025",
      title: "Donanemab in preclinical Alzheimer's disease: Screening and baseline data from TRAILBLAZER-ALZ 3",
      publisher: "Alzheimer's & Dementia (Yaari R et al., Eli Lilly), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12439032/",
      year: "2025",
      note: "Sponsor-authored. Quotes: \"TRAILBLAZER-ALZ 3 is the first clinical trial to use plasma p-tau217 as the only biomarker to establish AD pathology.\"; \"Participants 55–80 years of age were screened (N = 63,124). Plasma p-tau217-eligible participants were enrolled (N = 2196)\"; \"89.9% of all who had p-tau217 testing\"; \"Screening of individuals 55–64 years was stopped after 1 year because of the high volume of screen failures due to plasma p-tau217\"; \"Participants who identified as Black or African American (n = 6648) had the highest screen failure rate (99.1%)\"; \"The mean duration between randomization and the first dose was 68 days, as dosing could not proceed until shipment of testing equipment and completion of baseline testing.\" Table by age: 55–59 5316 (95.5) of 5564; 65–69 17,783 (92.5) of 19,221; 75–79 7321 (83.3) of 8785; 80–84 798 (78.5) of 1016.",
    },
    {
      id: "rissman-2024",
      title: "Plasma Aβ42/Aβ40 and phospho-tau217 concentration ratios increase the accuracy of amyloid PET classification in preclinical Alzheimer's disease",
      publisher: "Alzheimer's & Dementia (Rissman RA et al., AHEAD 3-45), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10916957/",
      year: "2024",
      note: "Quotes: samples \"were collected before plasma Aβ42/Aβ40 testing was implemented for screening into AHEAD\"; \"individuals with sufficient amyloid PET levels (N = 340; 31.5%) to be eligible for AHEAD and individuals who screen failed (N = 740; 68.5%)\". Table 2, p-tau217/np-tau217 row: \"Number of PET scans\" 1288, \"Total number of screens\" 3885, footnote \"Number needed to fill a trial of 1000 participants assuming a prevalence of 0.32.\" Retrospective model; mostly White sample; Eisai and C2N co-authors.",
    },
    {
      id: "mohs-2024",
      title: "The Bio-Hermes Study: Biomarker database developed to investigate blood-based and digital biomarkers in community-based, diverse populations clinically screened for Alzheimer's disease",
      publisher: "Alzheimer's & Dementia (Mohs RC et al., Global Alzheimer's Platform Foundation), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11032569/",
      year: "2024",
      note: "Quotes: \"From April 2021 through November 2022, 17 research sites recruited 1296 study participants from their community-based populations and were able to enroll 1001\"; \"Only the blood assay results of the lipid panel were returned to the PI\". Table: amyloid positive by PET or CSF, non-Hispanic White 271/727 (37.3%), non-Hispanic Black 27/103 (26.2%).",
    },
    {
      id: "bornhorst-2025",
      title: "Quantitative Assessment of the Effect of Chronic Kidney Disease on Plasma P-Tau217 Concentrations",
      publisher: "Neurology (Bornhorst JA et al., Mayo Clinic)",
      url: "https://pubmed.ncbi.nlm.nih.gov/39823562/",
      year: "2025",
      note: "Abstract read via PubMed. Quotes: \"For an eGFR of 45 vs 60 in the A- cohort, the calculated percentage changes were +31%, +55%, and +19%, for ALZpath p-tau217, C2N p-tau217, and C2N %p-tau217, respectively.\"; \"Determination of eGFR should be considered to avoid inaccurate classification of the presence of AD-related pathology by plasma p-tau217 in individuals with CKD.\" Small retrospective study.",
    },
    {
      id: "ctgov-ad-2026",
      title: "ClinicalTrials.gov API v2: recruiting and not-yet-recruiting interventional Alzheimer's disease studies, eligibility text search",
      publisher: "ClinicalTrials.gov, US National Library of Medicine",
      url: "https://clinicaltrials.gov/api/v2/studies?query.cond=Alzheimer+Disease&filter.overallStatus=RECRUITING%7CNOT_YET_RECRUITING&filter.advanced=AREA%5BStudyType%5DINTERVENTIONAL&countTotal=true",
      year: "2026",
      note: "Queried October 5, 2026 (US time). Base query returned 593 studies. Adding query.term=AREA[EligibilityCriteria](\"p-tau217\" OR \"ptau217\" OR \"p-tau 217\" OR \"ptau 217\" OR \"phosphorylated tau 217\" OR \"pTau-217\" OR \"p-tau-217\") returned 41; AREA[EligibilityCriteria](\"amyloid PET\" OR \"amyloid positron\" OR \"PET scan\" OR \"cerebrospinal fluid\" OR \"CSF\") returned 144. Records: AHEAD 3-45 (NCT04468659): \"with a plasma biomarker result that is predictive of intermediate or elevated brain amyloid at Screening or known before Screening to have elevated or intermediate amyloid according to previous PET, cerebrospinal fluid (CSF), or plasma testing\". NCT07724132 (University College London, Phase 3): \"Confirmatory blood biomarker testing (pTau-217) (positive or intermediate via validated assays) ≤ 365 days prior to screening or between screening and randomisation or a positive amyloid PET scan (if available)\".",
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
    { label: "Neurology and Alzheimer's trial recruitment", href: "/neurology-and-alzheimers", description: "Cognitive scores, MRI exclusions, study partners and screen failure." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads labs, notes and reports against each criterion." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Catching ineligible patients before the screening visit." },
    { label: "Pre-screening vs screening", href: "/guides/pre-screening-vs-screening", description: "What belongs before consent and what belongs at the screening visit." },
  ],
};

export default page;
