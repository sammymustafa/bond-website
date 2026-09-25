import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/dermatology",
  category: "therapeutic",
  title: "Dermatology trial recruitment: psoriasis, atopic dermatitis",
  description:
    "How PASI, EASI, BSA, prior biologics and washouts decide psoriasis and atopic dermatitis trial eligibility, where each sits in the chart, and how Bond screens.",
  keywords: [
    "dermatology clinical trial recruitment",
    "psoriasis trial screening",
    "atopic dermatitis trial eligibility",
    "PASI EASI screening criteria",
    "biologic washout clinical trial",
  ],
  eyebrow: "Dermatology",
  h1: "Psoriasis and atopic dermatitis trials screen on a severity score taken at the visit",
  intro:
    "Psoriasis, atopic dermatitis and hidradenitis suppurativa trials screen on PASI, EASI or IGA scores, body surface area, prior biologics and washouts. Much of that evidence sits in exam notes rather than coded fields.{{cite:jaad-ehr-2019}} In two real-world cohorts, severity was the most common reason a treated patient would not have qualified.{{cite:alvarenga-2026,psobioteq-2020}} This page maps each criterion to the chart and shows how Bond Health screens for it.",
  summary: "How severity scores, biologic history and washouts map to the chart, and how Bond screens for them.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How Identify works", secondaryHref: "/identify" },
  sections: [
    {
      id: "how-dermatology-eligibility-works",
      heading: "How does eligibility work in dermatology trials?",
      blocks: [
        {
          type: "p",
          text: "Systemic dermatology trials enroll moderate to severe disease, scored by the investigator at screening or baseline, then narrow the pool with prior-drug exclusions and washouts. The examples below come from phase 3 protocols in psoriasis, atopic dermatitis, hidradenitis suppurativa and alopecia areata.",
        },
        {
          type: "table",
          caption: "Common dermatology criteria and where the evidence lives",
          columns: ["Criterion type", "Typical protocol language", "Where it lives in the chart", "Structured?"],
          rows: [
            ["Severity index", "PASI of at least 12 (psoriasis); EASI of at least 16 (atopic dermatitis){{cite:be-ready,advocate1}}", "Progress notes, if scored", "Rarely"],
            ["Global assessment", "IGA of at least 3 on a 0 to 4 scale{{cite:advocate1}}", "Exam section of the note", "Sometimes"],
            ["Body surface area", "At least 10% of body surface area{{cite:be-ready}}", "Exam notes; some templates have a BSA field", "Sometimes"],
            ["Disease duration", "Atopic dermatitis for at least 1 year before screening{{cite:advocate1}}", "First diagnosis code, history in notes", "Partly"],
            ["Prior topical failure", "Inadequate response to topicals, or topicals medically inadvisable{{cite:advocate1}}", "Prescriptions, plus the note recording the response", "Partly: the drug is coded, the response is not"],
            ["Prior biologic or JAK exposure", "No prior dupilumab or tralokinumab; no prior oral JAK inhibitor failure (alopecia areata){{cite:advocate1,brave-aa1}}", "Medication list, outside records, notes", "Partly"],
            ["Washout", "No systemic immunosuppressant or phototherapy within 4 weeks{{cite:advocate1}}", "Medication stop dates, phototherapy logs, notes", "Partly: stop dates are often missing"],
            ["Lesion counts and staging", "At least 5 inflammatory lesions; lesions in 2 or more anatomic areas, one at Hurley stage II or III (hidradenitis suppurativa){{cite:be-heard-1}}", "Exam notes", "No"],
            ["Extent of hair loss", "At least 50% scalp hair loss by SALT, current episode under 8 years (alopecia areata){{cite:brave-aa1}}", "Notes and clinical photographs", "No"],
            ["Safety exclusions", "Known tuberculosis; malignancy within 5 years{{cite:be-ready}}", "Problem list, labs, test results", "Mostly"],
          ],
          note: "Structured? describes typical documentation, not a measured rate; it varies by EHR and template.",
        },
        {
          type: "p",
          text: "Because severity is scored at the visit, a chart-based pre-screen can only estimate whether a patient will meet the threshold that day. The [therapeutic areas](/therapeutic-areas) pages cover the same pattern in other conditions.",
        },
      ],
    },
    {
      id: "screen-failure",
      heading: "What drives screen failure in dermatology trials?",
      blocks: [
        {
          type: "p",
          text: "Published screen failure data in dermatology is thin. Pivotal trials post screened and randomized counts, not a headline rate, and few site-level studies exist.",
        },
        {
          type: "stats",
          items: [
            { value: "246 of 917", label: "screened patients not randomized in the dupilumab SOLO 1 trial", cite: "solo-1" },
            { value: "23.9%", label: "of atopic dermatitis patients on biologics or JAK inhibitors who would not have met pivotal-trial criteria", cite: "alvarenga-2026" },
            { value: "78.4%", label: "of French psoriasis patients starting a first biologic who were ineligible for at least one phase III trial", cite: "psobioteq-2020" },
          ],
        },
        {
          type: "p",
          text: "These cohorts measure eligibility, not screen failure, but they show which criteria exclude. Across 16 dermatology centers in several countries, 514 of 2,154 atopic dermatitis patients were ineligible: EASI below 16 in 67.9% of them, age 75 or older in 21.8%, cardiovascular disease in 13.0%.{{cite:alvarenga-2026}} In the French PSOBIOTEQ psoriasis registry, 19.1% of patients starting a first biologic missed the PASI or PGA severity requirement. Non-plaque psoriasis (12.6%), a history of diabetes (9.2%) and significant cardiac disease (8.4%) were among the other common exclusions.{{cite:psobioteq-2020}}",
        },
        {
          type: "p",
          text: "Severity has to be checked close to the visit. Comorbidities are already in the chart and can be checked before anyone is called. For site-level fixes, see [how to reduce screen failure](/guides/reduce-screen-failure).",
        },
      ],
    },
    {
      id: "where-the-evidence-lives",
      heading: "Why is dermatology severity hard to find in the EHR?",
      blocks: [
        {
          type: "p",
          text: "Codes, prescriptions and labs are structured. Severity, when recorded, is often written into the exam note, and a psoriasis code says nothing about current BSA or the last biologic dose. A Journal of the American Academy of Dermatology commentary called most EHR clinical data unstructured and difficult to process.{{cite:jaad-ehr-2019}} Dermatology-specific EHRs can capture more: one US study took PGA and BSA values from the Modernizing Medicine Data Services database.{{cite:fitzgerald-2022}} We found no US study measuring how often PASI, EASI or BSA appear in routine notes.",
        },
        {
          type: "ul",
          items: [
            "**Exam notes:** BSA, IGA or PGA, lesion descriptions, sometimes a full PASI or EASI.",
            "**Medication records:** biologic, JAK inhibitor and systemic orders, with stop dates if entered.",
            "**Outside records and prior authorization letters:** earlier biologics, why they stopped, which topicals failed.",
          ],
        },
        {
          type: "p",
          text: "Self-reported severity is a different measure. A 2019 US adult study using patient-reported instruments classed 60.1% of atopic dermatitis as mild, 28.9% moderate and 11% severe.{{cite:chiesa-fuxench-2019}} Trials use investigator EASI and IGA, so a patient's account is a signal, not a qualifier. Codes can also lag: Novartis said in 2023 that hidradenitis suppurativa can take an average of up to 10 years to diagnose correctly, so an HS code search can miss patients.{{cite:novartis-hs-2023}}",
        },
      ],
    },
    {
      id: "biologic-history-and-washouts",
      heading: "How do prior biologics and washouts shape the candidate pool?",
      blocks: [
        {
          type: "p",
          text: "Treatment history sorts patients too. In a US dermatology EHR database, about half of moderate to severe psoriasis patients newly started on guselkumab, secukinumab or ixekizumab between 2017 and 2019 had used a biologic before, most often adalimumab (28.2% to 34.9%).{{cite:fitzgerald-2022}} Washouts, which differ by drug and protocol, set how long each must wait.",
        },
        {
          type: "table",
          caption: "Washout windows in two example protocols",
          columns: ["Prior treatment", "Psoriasis: ixekizumab phase 2, 2010 (NCT01107457)", "Atopic dermatitis: lebrikizumab ADvocate1, 2019 (NCT04146363)"],
          rows: [
            ["Topical therapy", "Stopped at least 2 weeks before randomization{{cite:lilly-psoriasis-2010}}", "At least 1 week{{cite:advocate1}}"],
            ["Systemic immunosuppressants and phototherapy", "At least 4 weeks{{cite:lilly-psoriasis-2010}}", "At least 4 weeks, JAK inhibitors included{{cite:advocate1}}"],
            ["TNF inhibitors", "Etanercept more than 28 days; infliximab or adalimumab more than 56 days{{cite:lilly-psoriasis-2010}}", "16 weeks or 5 half-lives, whichever is longer{{cite:advocate1}}"],
            ["Ustekinumab", "More than 8 months{{cite:lilly-psoriasis-2010}}", "16 weeks or 5 half-lives, whichever is longer{{cite:advocate1}}"],
            ["Same-class competitor drugs", "Not listed in the registry criteria", "Any prior dupilumab or tralokinumab excludes the patient{{cite:advocate1}}"],
          ],
        },
        {
          type: "p",
          text: "Competition adds to the effect. A 2024 review of ClinicalTrials.gov, searched in January 2024, counted 76 phase III and IV atopic dermatitis trials of biologics, led by dupilumab (34), lebrikizumab (14) and tralokinumab (10).{{cite:jcm-ad-biologics-2024}} A protocol that excludes prior dupilumab loses everyone already on it, so the current drug and last dose date are among the first facts a coordinator needs.",
        },
      ],
    },
    {
      id: "how-bond-screens",
      heading: "How does Bond screen dermatology charts?",
      blocks: [
        {
          type: "p",
          text: "Bond's [Identify](/identify) stage reads structured and unstructured records against each inclusion and exclusion criterion, ranks candidates, and shows the evidence behind each criterion-level decision.{{cite:bond-site}} It uses imaging data, clinical notes and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}} It connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR or HL7 interfaces or an aggregator.{{cite:bond-site,bond-product}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Match drug and condition names",
              text: "Bond's terminology graph, built from 18 vocabularies including RxNorm and SNOMED CT, links brand names, generic names and synonyms to the same concept.{{cite:bond-whitepaper}}",
            },
            {
              title: "Read severity from the notes",
              text: "A BSA, IGA, PASI or EASI value written in an exam note counts as evidence, and the coordinator can open that note and check its date. An old score shows past severity, not what the investigator will measure.",
            },
            {
              title: "Check treatment history and exclusions",
              text: "Biologic, JAK inhibitor, systemic and phototherapy history is checked against prior-drug exclusions and washouts, and tuberculosis, hepatitis, malignancy and cardiac exclusions against the problem list, labs and notes. A washout with no documented stop date stays open for the coordinator.",
            },
            {
              title: "Ask the patient what the chart cannot settle",
              text: "Current flare extent and treatment started elsewhere go to the pre-screening call, run by Bond's [Engage](/engage) voice and text agents or by site staff. Patients are told AI is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "What Bond has published, and what it has not",
          text: "Bond reports above 90% matching accuracy and at least 50% less chart review across its platform.{{cite:bond-site}} Bond has not published dermatology-specific screen failure or enrollment results.",
        },
      ],
    },
    {
      id: "recruiting-dermatology-trials",
      heading: "How many dermatology trials are recruiting in the US?",
      blocks: [
        {
          type: "p",
          text: "As of September 21, 2026, 214 recruiting studies with at least one US site matched a dermatology keyword search, about 1% of the 22,041 recruiting studies with a US site.{{cite:ctgov-api}} The search looks in the condition field for psoriasis, atopic dermatitis, eczema, hidradenitis, vitiligo or alopecia. It includes observational studies and leaves out acne, rosacea and skin cancers.",
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
          text: "Each bar is a separate keyword search, so a study can count twice: pain includes migraine and osteoarthritis, cardiology includes hypertension, obesity includes type 2 diabetes.",
        },
        {
          type: "p",
          text: "A short trial list does not mean a small patient pool. The National Psoriasis Foundation says more than 8 million people in the US have psoriasis, nearly one-quarter of them moderate to severe.{{cite:npf-statistics}} A 2019 study estimated 16.5 million US adults with atopic dermatitis, 6.6 million of them moderate to severe by patient-reported measures.{{cite:chiesa-fuxench-2019}} The work is finding who meets today's thresholds and has not started an excluding drug.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one dermatology protocol and we will walk through how its severity, prior-biologic and washout criteria map to your chart.",
          secondaryLabel: "Reduce screen failure",
          secondaryHref: "/guides/reduce-screen-failure",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can Bond find a PASI or EASI score if the clinician never recorded one?",
      a: "No. Bond reads what is documented. When a note records BSA or IGA but no full index, the match shows those findings and leaves the score to the investigator at screening.",
    },
    {
      q: "What screen failure rate should a dermatology site expect?",
      a: "Published data is thin. In the dupilumab SOLO 1 and SOLO 2 trials (2014 to 2016), 246 of 917 and 254 of 962 screened patients were not randomized, the closest registry proxy for screen failure.{{cite:solo-1,solo-2}} A single-center Danish actinic keratosis trial that recruited through social media reported a 33.3% in-clinic screen failure rate.{{cite:ortner-2024}} Bond can set up Meta and Google ad campaigns for a study and pre-screen those leads by voice and text before a clinic visit is booked.{{cite:bond-product}}",
    },
    {
      q: "Does Bond decide whether a patient is eligible?",
      a: "No. Bond ranks candidates and shows the evidence for each criterion. The coordinator reviews the match, and the investigator confirms eligibility at screening.",
    },
    {
      q: "How long does it take to start screening at a dermatology practice?",
      a: "Full EHR integration typically takes 4 to 6 weeks, depending on the EHR, IT review and interface method. A pilot without EHR integration, such as outreach to an existing patient list, can start in under 2 weeks.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "be-ready",
      title: "BE READY: Bimekizumab in Adult Subjects With Moderate to Severe Chronic Plaque Psoriasis (NCT03410992)",
      publisher: "ClinicalTrials.gov (UCB Biopharma)",
      url: "https://clinicaltrials.gov/study/NCT03410992",
      year: "2018",
      note: "Phase 3. Eligibility criteria read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"Psoriasis Area Severity Index (PASI) >=12 and body surface area (BSA) affected by PSO >=10% and Investigator's Global Assessment (IGA) score >=3 on a 5-point scale\" Exclusions: \"Subject has known tuberculosis (TB) infection\"; \"Subject has any active malignancy or history of malignancy within 5 years prior to the Screening Visit EXCEPT treated and considered cured cutaneous squamous or basal cell carcinoma, or in situ cervical cancer\"",
    },
    {
      id: "advocate1",
      title: "ADvocate1: Evaluation of the Efficacy and Safety of Lebrikizumab in Moderate to Severe Atopic Dermatitis (NCT04146363)",
      publisher: "ClinicalTrials.gov (Eli Lilly and Company)",
      url: "https://clinicaltrials.gov/study/NCT04146363",
      year: "2019",
      note: "Eligibility criteria read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"Chronic atopic dermatitis ... that has been present for ≥1 year before the screening visit\"; \"EASI score ≥16 at the baseline visit\"; \"IGA score ≥3 (scale of 0 to 4) at the baseline visit\"; \"≥10% body surface area (BSA) of atopic dermatitis involvement\"; \"History of inadequate response to treatment with topical medications; or determination that topical treatments are otherwise medically inadvisable\"; exclusion for \"Prior treatment with dupilumab or tralokinumab\". Washouts before baseline: 1 week for topical corticosteroids, calcineurin inhibitors or crisaborole; 4 weeks for systemic immunosuppressants including JAK inhibitors, and for phototherapy; 16 weeks or 5 half-lives, whichever is longer, for other biologics.",
    },
    {
      id: "be-heard-1",
      title: "BE HEARD I: Bimekizumab in Study Participants With Moderate to Severe Hidradenitis Suppurativa (NCT04242498)",
      publisher: "ClinicalTrials.gov (UCB Biopharma SRL)",
      url: "https://clinicaltrials.gov/study/NCT04242498",
      year: "2020",
      note: "Eligibility criteria read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"Study participant must have HS lesions present in at least 2 distinct anatomic areas (eg, left and right axilla), 1 of which must be at least Hurley Stage II or Hurley Stage III at both the Screening and Baseline visits\"; \"moderate to severe HS defined as a total of ≥5 inflammatory lesions (ie, number of abscesses plus number of inflammatory nodules) at both the Screening and Baseline visits\"",
    },
    {
      id: "brave-aa1",
      title: "BRAVE-AA1: A Study of Baricitinib in Adults With Severe or Very Severe Alopecia Areata (NCT03899259)",
      publisher: "ClinicalTrials.gov (Eli Lilly and Company)",
      url: "https://clinicaltrials.gov/study/NCT03899259",
      year: "2019",
      note: "Eligibility criteria read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"hair loss encompassing ≥50% of the scalp, as measured by SALT (AA-IGA of 3 or 4)\"; \"Current episode of severe or very severe AA of less than 8 years.\"; exclusion: \"Previously treated with an oral Janus kinase (JAK) inhibitor and had an inadequate response\"",
    },
    {
      id: "lilly-psoriasis-2010",
      title: "A Dose-Ranging and Efficacy Study of LY2439821 (an Anti-IL-17 Antibody) in Patients With Moderate-to-Severe Psoriasis (NCT01107457)",
      publisher: "ClinicalTrials.gov (Eli Lilly and Company)",
      url: "https://clinicaltrials.gov/study/NCT01107457",
      year: "2010",
      note: "Phase 2 ixekizumab study. Eligibility criteria read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"etanercept >28 days, infliximab or adalimumab >56 days, alefacept >60 days, ustekinumab >8 months\"; other biologics \">5 half-lives prior to baseline\". Systemic therapy and phototherapy are prohibited within 4 weeks before randomization, and topical psoriasis treatment within 2 weeks.",
    },
    {
      id: "solo-1",
      title: "Study of Dupilumab Monotherapy Administered to Adult Patients With Moderate-to-Severe Atopic Dermatitis (SOLO 1, NCT02277743): Results",
      publisher: "ClinicalTrials.gov (Regeneron Pharmaceuticals)",
      url: "https://clinicaltrials.gov/study/NCT02277743?tab=results",
      year: "2016",
      note: "Participant flow read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"The study was conducted in 10 countries between 28 Oct 2014 and 12 Feb 2016. A total of 917 participants were screened in the study.\" \"Out of 917 participants, 671 were randomized and 669 were treated in the study.\"",
    },
    {
      id: "solo-2",
      title: "Study of Dupilumab (REGN668/SAR231893) Monotherapy Administered to Adult Patients With Moderate-to-Severe Atopic Dermatitis (SOLO 2, NCT02277769): Results",
      publisher: "ClinicalTrials.gov (Regeneron Pharmaceuticals)",
      url: "https://clinicaltrials.gov/study/NCT02277769?tab=results",
      year: "2016",
      note: "Participant flow read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"The study was conducted in 10 countries between 03 December 2014 and 21 January 2016. A total of 962 participants were screened in the study.\" \"Out of 962 participants, 708 were randomized and 707 were treated in the study.\"",
    },
    {
      id: "alvarenga-2026",
      title: "Clinical Trial Eligibility in Atopic Dermatitis: Data from a Large Real-World International Cohort",
      publisher: "Dermatology and Therapy (Alvarenga JM, Torres T et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12936218/",
      year: "2026",
      note: "Abstract text checked via Europe PMC on September 22, 2026. Quote: \"adolescents and adults with AD treated with biologics (dupilumab, tralokinumab) or systemic JAKis (abrocitinib, baricitinib, upadacitinib) between October 2017 and March 2023 across 16 dermatology centers\" \"Among 2154 patients, 514 (23.9%) were ineligible. The most frequent reasons were Eczema Area and Severity Index (EASI) < 16 (67.9%), age ≥ 75 years (21.8%), and cardiovascular disease (13.0%).\"",
    },
    {
      id: "psobioteq-2020",
      title: "Users of biologics in clinical practice: would they be eligible for phase III clinical studies? Cohort Study in the French Psoriasis Registry PSOBIOTEQ",
      publisher: "Journal of the European Academy of Dermatology and Venereology (Masson Regnault M et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31419355/",
      year: "2020",
      note: "Non-US registry; patients who received a biologic for the first time between July 2012 and November 2017. Abstract text checked via PubMed on September 22, 2026. Quote: \"A total of 1267 patients were enrolled, of whom 993 (78.4%) were not eligible for at least one RCT (randomized controlled trial) and 251 (19.1%) did not meet the PASI/PGA severity requirements. Apart from disease severity, the most frequent criteria resulting in exclusion were as follows: non-plaque psoriasis (12.6%), significant cardiac disease (8.4%), significant liver disease (7.3%), elevated liver enzymes (4.9-9.6%) and personal history of diabetes (9.2%).\"",
    },
    {
      id: "fitzgerald-2022",
      title: "Characteristics of New Biologic Users Among the Moderate-to-Severe Psoriasis Population: Retrospective Cohort Study Leveraging the Modernizing Medicine Data Services Database",
      publisher: "Dermatology and Therapy (Fitzgerald T et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/35212934/",
      year: "2022",
      note: "US dermatology EHR data, July 2017 to March 2019. Abstract text checked via Europe PMC on September 22, 2026. Quote: \"Patients were required to have evidence of moderate-to-severe psoriasis, defined as Physician Global Assessment (PGA) score of 3 or 4, or body surface area (BSA) ≥ 10% on index date or within 12 months before index.\" \"About half of patients in each cohort had prior biologic use, of which adalimumab was most common (28.2-34.9%) across the cohorts.\"",
    },
    {
      id: "jcm-ad-biologics-2024",
      title: "A Comprehensive Review of Biologics in Phase III and IV Clinical Trials for Atopic Dermatitis",
      publisher: "Journal of Clinical Medicine",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11277805/",
      year: "2024",
      note: "ClinicalTrials.gov search dated January 11, 2024. Quote: \"There have been 76 clinical trials identified concerning biologic drugs: dupilumab (34 trials), lebrikizumab (14 trials), tralokinumab (10 trials)\"",
    },
    {
      id: "jaad-ehr-2019",
      title: "Leveraging the electronic health record to improve dermatologic care delivery: The importance of finding structure in data",
      publisher: "Journal of the American Academy of Dermatology (Park AJ, Weintraub GS, Asgari MM)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7714371/",
      year: "2019",
      note: "Published online November 2019. Quote: \"the majority of EHR clinical data remain unstructured and therefore, difficult to process and analyze\"",
    },
    {
      id: "chiesa-fuxench-2019",
      title: "Atopic Dermatitis in America Study: A Cross-Sectional Study Examining the Prevalence and Disease Burden of Atopic Dermatitis in the US Adult Population",
      publisher: "Journal of Investigative Dermatology (Chiesa Fuxench ZC et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/30389491/",
      year: "2019",
      note: "Severity classified with patient-reported instruments. Quote: \"Overall, 60.1% (56.1-64.1) of participants were classified as having mild, 28.9% (25.3-32.7) as having moderate, and 11% as having severe (8.6-13.7) disease.\" \"Based on our prevalence estimates, 16.5 million adults would have a diagnosis of atopic dermatitis, with 6.6 million meeting criteria for moderate to severe disease.\"",
    },
    {
      id: "npf-statistics",
      title: "Psoriasis Statistics",
      publisher: "National Psoriasis Foundation",
      url: "https://www.psoriasis.org/psoriasis-statistics/",
      year: "2024",
      note: "Quote: \"More than 8 million people in the U.S. have psoriasis.\" \"Nearly one-quarter of people with psoriasis have cases that are considered moderate to severe.\"",
    },
    {
      id: "novartis-hs-2023",
      title: "FDA approves Novartis Cosentyx as the first new biologic treatment option for hidradenitis suppurativa patients in nearly a decade",
      publisher: "Novartis",
      url: "https://www.novartis.com/news/media-releases/fda-approves-novartis-cosentyx-first-new-biologic-treatment-option-hidradenitis-suppurativa-patients-nearly-decade",
      year: "2023",
      note: "Sponsor press release. Quote: \"It may take people living with HS an average of up to 10 years to get a correct diagnosis\"",
    },
    {
      id: "ortner-2024",
      title: "Accelerating patient recruitment using social media: Early adopter experience from a good clinical practice-monitored randomized controlled phase I/IIa clinical trial on actinic keratosis",
      publisher: "Contemporary Clinical Trials Communications (Ortner VK et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38234709/",
      year: "2024",
      note: "Single-center Danish trial. Quote: \"The RCT's enrollment target of 60 patients ... was reached in 53 days after screening 90 participants in-clinic, corresponding to a screen failure rate of 33.3 %.\"",
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
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Goel R. Internal technical report (preprint), August 2026. Not peer reviewed; no public URL yet.",
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
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads structured data and notes against each criterion." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "Pre-screening calls that cover what the chart cannot settle." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Causes, benchmarks and fixes a site can apply." },
    { label: "Therapeutic areas", href: "/therapeutic-areas", description: "Eligibility and chart evidence in the other areas Bond covers." },
    { label: "Bond for physician groups", href: "/for/physician-groups", description: "Running trials alongside clinical care in a group practice." },
    { label: "Unstructured clinical data", href: "/glossary/unstructured-clinical-data", description: "What it is and why eligibility depends on it." },
  ],
};

export default page;
