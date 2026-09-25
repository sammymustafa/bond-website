import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/gastroenterology",
  category: "therapeutic",
  title: "IBD clinical trial recruitment and MASH/NASH screening",
  description:
    "How Mayo score, SES-CD, liver biopsy and prior biologics decide IBD and MASH trial eligibility, why screen failure runs high, and how Bond screens the chart.",
  keywords: [
    "IBD clinical trial recruitment",
    "MASH trial screen failure",
    "NASH clinical trial screening",
    "ulcerative colitis trial eligibility",
    "Crohn's disease SES-CD screening",
  ],
  eyebrow: "Gastroenterology",
  h1: "Most IBD and MASH trials qualify patients on an endoscopy or a biopsy, not a diagnosis code",
  intro:
    "Beyond the endoscopy or biopsy, protocols add prior-therapy and safety rules, and many patients fail screening. In 17 phase 2 and 3 IBD trials run between 2012 and 2021, mean screen failure per trial was 43% in ulcerative colitis and 53% in Crohn's disease; published estimates for MASH trials are around 70% to 80%.{{cite:uzzan-2025,fichez-2025}}",
  summary: "How Mayo, SES-CD, biopsy and prior-therapy criteria map to the chart in IBD and MASH trials, and how Bond screens for them.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "How Identify works", secondaryHref: "/identify" },
  sections: [
    {
      id: "how-gi-eligibility-works",
      heading: "How does eligibility work in IBD and MASH trials?",
      blocks: [
        {
          type: "p",
          text: "The protocol language below comes from ClinicalTrials.gov entries read in September 2026: Janssen's recruiting icotrokinra trials ICONIC-UC (phase 3) and ICONIC-CD (phase 2b/3), and Madrigal's phase 3 resmetirom trial MAESTRO-NASH, now closed to recruitment.{{cite:icotrokinra-uc,icotrokinra-cd,maestro-nash-protocol}}",
        },
        {
          type: "table",
          caption: "Common IBD and MASH criteria and where the evidence lives",
          columns: ["Criterion type", "Typical protocol language", "Where it lives in the chart", "Structured?"],
          rows: [
            ["Ulcerative colitis activity", "Modified Mayo score of 5 to 9 with an endoscopic subscore of 2 or more, centrally read{{cite:icotrokinra-uc}}", "Endoscopy reports; stool frequency and bleeding in notes", "No"],
            ["Crohn's disease symptoms", "CDAI of 220 to 450, plus a minimum stool frequency or abdominal pain score{{cite:icotrokinra-cd}}", "Symptoms in notes; the diary is collected at screening", "No"],
            ["Crohn's disease endoscopy", "SES-CD of 6 or more, or 4 or more for isolated ileal disease, on centrally read ileocolonoscopy{{cite:icotrokinra-cd}}", "Ileocolonoscopy reports, scored only if the endoscopist did", "No"],
            ["Confirmed diagnosis", "Diagnosis at least 12 weeks before screening, backed by endoscopy and a histopathology report{{cite:icotrokinra-uc,icotrokinra-cd}}", "Problem list, endoscopy and pathology reports", "Partly"],
            ["Prior therapy", "Inadequate response to or intolerance of conventional therapy, or of biologics and advanced oral agents{{cite:icotrokinra-uc}}", "Medication history, prior authorization letters, notes", "Partly: the drug is coded, the response is not"],
            ["Surgery and complications", "No stoma, no colonic resection within 24 weeks, no complication likely to need surgery during the study{{cite:icotrokinra-uc,icotrokinra-cd}}", "Surgical history, operative notes, problem list", "Partly"],
            ["Infection and TB", "Meets TB screening criteria; no C. difficile or other intestinal infection at screening{{cite:uzzan-2025}}", "Lab and stool test results, TB test results", "Yes, but only for past tests"],
            ["MASH histology", "Biopsy within 6 months of randomization with NAS of 4 or more, at least 1 point each for steatosis, ballooning and lobular inflammation, and fibrosis stage 1 to 3{{cite:maestro-nash-protocol}}", "Pathology report, if a biopsy was ever done", "No"],
            ["Non-invasive fibrosis signal", "One of: FibroScan of 8.5 kPa or more with CAP of 280 dB/m or more, ELF of 9 or more, PRO-C3 above 14 ng/mL, or a qualifying biopsy from the past 2 years{{cite:maestro-nash-protocol}}", "Elastography reports, send-out lab results", "Sometimes"],
            ["MASH exclusions", "Cirrhosis, HbA1c of 9.0% or more, significant alcohol use, or a GLP-1 agonist or pioglitazone without 24 weeks of stable dosing{{cite:maestro-nash-protocol}}", "Labs, medication list, social history in notes", "Mostly; alcohol history is in notes"],
          ],
          note: "Structured? reflects typical documentation and varies by EHR and template.",
        },
        {
          type: "p",
          text: "Other conditions are mapped the same way on the [therapeutic areas](/therapeutic-areas) pages.",
        },
      ],
    },
    {
      id: "ibd-screen-failure",
      heading: "What drives screen failure in IBD trials?",
      blocks: [
        {
          type: "p",
          text: "A 2025 pooled analysis of 17 IBD trials, all run by one contract research organization (IQVIA), covers 16,913 screened patients.{{cite:uzzan-2025}}",
        },
        {
          type: "stats",
          items: [
            { value: "43%", label: "mean screen failure per trial, 12 ulcerative colitis trials", cite: "uzzan-2025" },
            { value: "53%", label: "mean screen failure per trial, 5 Crohn's disease trials", cite: "uzzan-2025" },
            { value: "1 in 3", label: "ulcerative colitis screen failures missed the Mayo or endoscopic subscore threshold", cite: "uzzan-2025" },
          ],
        },
        {
          type: "ul",
          items: [
            "**Disease activity below threshold.** This was the top cause in both diseases. In Crohn's disease, missing the CDAI criteria accounted for 23.1% of screen failures, followed by endoscopic scores and TB screening.{{cite:uzzan-2025}}",
            "**Infection and other illness.** In ulcerative colitis, the next most common causes were C. difficile or another intestinal infection (9.8% of screen failures), concurrent illness (9.75%) and a failed TB screen (9.4%).{{cite:uzzan-2025}}",
            "**Site versus central read.** In a mesalamine trial of 281 patients published in 2013, a central reader judged 31% of participants ineligible, although each had scored 2 or more on the site's sigmoidoscopy read.{{cite:feagan-2013}}",
          ],
        },
        {
          type: "p",
          text: "Some of this can be caught before the visit. A Belgian tertiary IBD center had 17.1% screen failure across 642 screenings from 2008 to 2021, against 39.2% for the same studies globally. Its researchers judged about one-quarter of those failures avoidable with a clinical exam and closer review of the history and available labs.{{cite:outtier-2023}}",
        },
        {
          type: "p",
          text: "Eligibility also removes patients before screening. In a 4-week prospective study at 10 centers worldwide, 106 patients with symptomatic IBD needed a treatment change. Of these, 65 were never offered a trial, mainly because of eligibility criteria, and 23 enrolled.{{cite:vieujean-2024}} For site-level fixes, see [how to reduce screen failure](/guides/reduce-screen-failure).",
        },
      ],
    },
    {
      id: "mash-screen-failure",
      heading: "Why is screen failure so high in MASH trials?",
      blocks: [
        {
          type: "p",
          text: "Published estimates put screen failure in MASH therapeutic trials at around 70% to 80%, mostly because the baseline biopsy does not show fibrotic MASH (an activity score of 4 or more with fibrosis stage 2 or higher), in large part for lack of ballooning.{{cite:fichez-2025,lawitz-2026}}",
        },
        {
          type: "p",
          text: "For Eli Lilly's phase 2b SYNERGY-NASH trial of tirzepatide, the authors report an overall screen failure rate of 87%.{{cite:synergy-nash-2024}}",
        },
        {
          type: "chart",
          title: "SYNERGY-NASH screening funnel (phase 2b, published 2024)",
          unit: "people",
          data: [
            { label: "Screened", value: 1583 },
            { label: "Went to liver biopsy", value: 651 },
            { label: "Randomized", value: 190 },
          ],
          cite: "synergy-nash-2024",
        },
        {
          type: "p",
          text: "Non-invasive tests do not replace the biopsy. When SYNERGY-NASH added a FibroScan-AST (FAST) score above 0.35 and a higher AST floor, the share of per-protocol biopsies that qualified moved only from 27.5% to 28.9%, and at gastroenterology and hepatology sites it fell, from 26.0% to 23.3%.{{cite:synergy-nash-2024}} In a 2025 study of 817 biopsied patients with MASLD, FAST detected fibrotic MASH better than FibroScan alone, with an AUROC of 0.774 against 0.728.{{cite:fichez-2025}}",
        },
        {
          type: "p",
          text: "The biopsy adds noise of its own: manual scoring, the standard for both enrollment and endpoints, varies from reader to reader.{{cite:pulaski-2025}}",
        },
      ],
    },
    {
      id: "what-a-chart-pre-screen-settles",
      heading: "What can a chart pre-screen settle, and what can it not?",
      blocks: [
        {
          type: "p",
          text: "Diagnosis codes find IBD and fatty liver patients but say nothing about current activity or histology. Reports and notes get further, but the deciding measurements are made at screening.",
        },
        {
          type: "ul",
          items: [
            "**Settled from the chart, if documented:** the confirmed diagnosis and its date, advanced therapies tried and why each stopped, a stoma or recent colectomy, cirrhosis on a past biopsy, and when a GLP-1 agonist or pioglitazone dose last changed.",
            "**Suggested but not settled:** current activity from the last colonoscopy report, calprotectin or CRP, a recent HbA1c, and fibrotic MASH from elastography or blood tests on file. Outside reports may exist only as scanned images.",
            "**Settled only by screening or the patient:** the centrally read endoscopy score, the activity score and fibrosis stage on the screening biopsy, the CDAI symptom diary, current TB and stool tests, and the patient's alcohol use and willingness to have the procedures.",
          ],
        },
        {
          type: "p",
          text: "Clinical care does not always produce a biopsy: at resmetirom's accelerated approval in March 2024, Madrigal noted that the drug's prescribing information does not require one for diagnosis.{{cite:madrigal-2024}} A candidate may also already take resmetirom or a GLP-1 agonist, which can trigger a prior-therapy or stable-dose rule.",
        },
      ],
    },
    {
      id: "how-bond-screens",
      heading: "How does Bond screen GI charts?",
      blocks: [
        {
          type: "p",
          text: "Bond's [Identify](/identify) stage reads structured and unstructured records against each criterion, ranks candidates, and shows the evidence behind each decision.{{cite:bond-site}} It uses imaging data, clinical notes and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}} It connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR, HL7 or an aggregator.{{cite:bond-site,bond-product}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Match condition, drug and procedure names",
              text: "Bond's terminology graph, built from 18 vocabularies including SNOMED CT and RxNorm, links brand names, generic names and synonyms, so vedolizumab and Entyvio count as one exposure.{{cite:bond-whitepaper}}",
            },
            {
              title: "Read endoscopy and pathology reports",
              text: "Endoscopy, pathology and elastography reports are read alongside labs, medications and codes, where the site's EHR connection makes them available. A Mayo subscore, a described ulcer or a fibrosis stage counts as evidence, and dates matter: MAESTRO-NASH required a biopsy within 6 months of randomization.{{cite:maestro-nash-protocol}}",
            },
            {
              title: "Check treatment history and exclusions",
              text: "Advanced therapy exposure is checked against prior-therapy and stable-dose rules, and TB and stool results, liver enzymes, HbA1c and surgical history against exclusions. The coordinator reviews each match, including anything the chart leaves open.",
            },
            {
              title: "Ask the patient what the chart cannot settle",
              text: "Questions only the patient can answer go to the pre-screening call, run by Bond's [Engage](/engage) voice and text agents or by site staff. Patients are told AI is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "What Bond has published, and what it has not",
          text: "Bond reports matching accuracy of 90% or more and at least 50% less chart review.{{cite:bond-site}} These are platform-wide figures. Bond has not published gastroenterology-specific screen failure or enrollment results.",
        },
      ],
    },
    {
      id: "recruiting-gi-trials",
      heading: "How many GI studies are recruiting in the US?",
      blocks: [
        {
          type: "p",
          text: "As of September 21, 2026, 285 recruiting studies with at least one US location matched a gastroenterology keyword search on ClinicalTrials.gov, about 1.3% of the 22,041 recruiting US studies.{{cite:ctgov-api}} The terms (Crohn, ulcerative colitis, NASH, MASH, irritable bowel, celiac, eosinophilic esophagitis) ran through the registry's condition search, which also matches study titles, keywords and MeSH terms. The count includes observational studies and leaves out GI cancers, GERD, pancreatitis and viral hepatitis. Each area below is a separate search, so a MASH study that also lists obesity counts in both.",
        },
        {
          type: "chart",
          title: "Recruiting studies with a US location, by area (keyword search, September 21, 2026)",
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
          text: "Patients are not the scarce part: one claims-based study estimates about 2.39 million Americans have diagnosed IBD, and in March 2024 FDA cited an estimate of about 6 to 8 million people in the US with NASH and moderate to advanced liver scarring.{{cite:lewis-2023,fda-resmetirom-2024}} The work is finding who meets a protocol's rules.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one IBD or MASH protocol and we will map its endoscopy, histology and prior-therapy criteria to your chart.",
          secondaryLabel: "Reduce screen failure",
          secondaryHref: "/guides/reduce-screen-failure",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can Bond tell whether a patient will meet the Mayo or SES-CD threshold at screening?",
      a: "No. Bond shows the endoscopy findings in the chart as evidence for that criterion; the screening endoscopy and the central reader decide, and a central read can overturn a site read.{{cite:feagan-2013}}",
    },
    {
      q: "Does a MASH candidate need a biopsy in the chart before Bond flags them?",
      a: "No. Bond can flag patients whose elastography, blood tests and risk factors fit the protocol's non-invasive criteria. The histology criterion stays open until the screening biopsy is read.",
    },
    {
      q: "How long does it take to start screening at a GI practice?",
      a: "Full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site}} The [implementation](/implementation) page sets out the steps.",
    },
  ],
  sources: [
    {
      id: "ctgov-api",
      title: "ClinicalTrials.gov API v2",
      publisher: "U.S. National Library of Medicine",
      url: "https://clinicaltrials.gov/data-api/api",
      year: "2026",
      note: "Queried September 21, 2026: condition search (query.cond) for Crohn OR ulcerative colitis OR NASH OR MASH OR irritable bowel OR celiac OR eosinophilic esophagitis, location United States, overall status Recruiting, all study types. The all-conditions total uses the same location and status filters.",
    },
    {
      id: "icotrokinra-uc",
      title: "ICONIC-UC: A Protocol of Icotrokinra Therapy in Adult and Adolescent Participants With Moderately to Severely Active Ulcerative Colitis (NCT07196748)",
      publisher: "ClinicalTrials.gov (Janssen Research & Development, LLC)",
      url: "https://clinicaltrials.gov/study/NCT07196748",
      year: "2025",
      note: "Phase 3, recruiting. Eligibility criteria read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"Moderately to severely active UC, defined as a baseline (Week I-0) modified Mayo score of 5 to 9, inclusive, using the endoscopy subscore obtained during the central review of the screening video endoscopy\"; \"An endoscopy subscore greater than or equal to (>=) 2 as obtained during central review of the screening video endoscopy\"; \"Diagnosis of ulcerative colitis (UC) established at least 12 weeks before screening including both endoscopic evidence and a histopathology report consistent with a diagnosis of UC\". Exclusions include \"fulminant colitis, toxic megacolon\", \"Presence of a stoma\" and \"Colonic resection within 24 weeks before baseline\".",
    },
    {
      id: "icotrokinra-cd",
      title: "ICONIC-CD: A Study of Icotrokinra in Participants With Moderately to Severely Active Crohn's Disease (NCT07196722)",
      publisher: "ClinicalTrials.gov (Janssen Research & Development, LLC)",
      url: "https://clinicaltrials.gov/study/NCT07196722",
      year: "2025",
      note: "Phase 2b/3, recruiting. Eligibility criteria read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"Moderately to severely active CD based on CDAI criteria, defined as baseline (Week I-0) CDAI score >=220 but <=450 and either mean daily SF count >=4, or mean daily AP score >=2\"; \"SES-CD >= 6 for participants with colonic or ileocolonic disease, and SES-CD >= 4 for participants with isolated ileal disease\"; \"Diagnosis of CD established at least 12 weeks before screening including both endoscopic evidence and a histopathology report consistent with a diagnosis of CD\".",
    },
    {
      id: "maestro-nash-protocol",
      title: "MAESTRO-NASH: A Phase 3 Study to Evaluate the Efficacy and Safety of MGL-3196 (Resmetirom) in Patients With NASH and Fibrosis (NCT03900429)",
      publisher: "ClinicalTrials.gov (Madrigal Pharmaceuticals, Inc.)",
      url: "https://clinicaltrials.gov/study/NCT03900429",
      year: "2019",
      note: "Phase 3, active, not recruiting; actual enrollment 1,759. Eligibility criteria read via the ClinicalTrials.gov API on September 22, 2026. Quote: \"Biopsy-proven NASH (baseline liver biopsy) based on a liver biopsy obtained ≤6 months before anticipated date of randomization ... with fibrosis stage 1A/1C, 1B, 2, or 3 on liver biopsy and NAS of ≥4 with a score of at least 1 in each of the following NAS components\"; \"FibroScan with transient elastography ≥8.5 kPa and controlled attenuation parameter ≥280 dB.m-1\"; \"Historical biochemical test for fibrosis: PRO-C3 >14 ng/mL or ELF ≥9\"; \"Historical liver biopsy obtained <2 years before expected randomization\"; \"MRI-PDFF fat fraction ≥8% obtained during the screening period\". Exclusions include \"HbA1c ≥ 9.0%\", \"Presence of cirrhosis on liver biopsy defined as stage 4 fibrosis\", \"History of significant alcohol consumption\" and \"Glucagon-like peptide 1 [GLP-1] agonist, high dose Vitamin E (> 400 IU/day), or pioglitazone therapy unless stable dose for 24 weeks prior to biopsy\".",
    },
    {
      id: "uzzan-2025",
      title: "Screen Failures and Causes in Inflammatory Bowel Disease Randomized Controlled Trials: A Study of 16 913 Screened Patients",
      publisher: "Inflammatory Bowel Diseases (Uzzan M et al.)",
      url: "https://academic.oup.com/ibdjournal/article/31/7/1811/7778241",
      year: "2025",
      note: "2025;31(7):1811-1818. Abstract read via the PubMed record and full text checked on September 23, 2026. Abstract: \"We analyzed SF-related data from 17 randomized controlled phase 2 or 3 IBD trials. Twelve trials were in ulcerative colitis (UC) and 5 trials were in Crohn's disease (CD) operated by a single contract research organization, IQVIA\"; \"We analyzed a total of 11 161 patients with UC and 5752 patients with CD. The mean SF proportion was 0.43 per trial in UC\"; \"In CD clinical trials, the mean SF proportion was at 0.53. The primary cause for SFs was not meeting the CDAI eligibility criteria (23.1% of all SFs).\" Methods: \"operated by the clinical research organization, IQVIA between 2012 and 2021.\" Results: \"not achieving the eligibility thresholds of the MS or its modified version (MMS) and/or the requested endoscopic subscore of at least 2 which in total represented one-third of all SF (32.6%). The next common causes were Clostridioides difficile or any other intestinal infection (9.8%), concurrent illnesses (9.75%), and not meeting tuberculosis screening (9.4%).\" The abstract gives 33.8% for the Mayo and endoscopic subscore category, so this page uses the authors' \"one-third\". In CD, CDAI was \"followed by inadequate endoscopic (sub)scores and tuberculosis screening abnormalities\". A September 2025 correction changed only an author's name.",
    },
    {
      id: "feagan-2013",
      title: "The role of centralized reading of endoscopy in a randomized controlled trial of mesalamine for ulcerative colitis",
      publisher: "Gastroenterology (Feagan BG et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/23528626/",
      year: "2013",
      note: "2013;145(1):149-157. Abstract read via the PubMed record on September 22, 2026. Quotes: \"a 10-week, randomized, double-blind, placebo-controlled study of 281 patients with mildly to moderately active UC\"; \"Thirty-one percent of participants, all of whom had a UCDAI sigmoidoscopy score ≥2 as read by the site investigator, were considered ineligible by the central reader.\"",
    },
    {
      id: "outtier-2023",
      title: "Screening Failure in a Large Clinical Trial Centre for Inflammatory Bowel Diseases: Rates, Causes, and Outcomes",
      publisher: "Inflammatory Bowel Diseases (Outtier A et al.)",
      url: "https://academic.oup.com/ibdjournal/article/29/9/1440/6815647",
      year: "2023",
      note: "2023;29(9):1440-1445. University Hospitals Leuven, Belgium. Abstract and full text checked on September 23, 2026. Quotes: \"We reviewed all IBD patients screened for sponsored multicenter phase 1-3 induction studies with available global SF rates between January 2008 and March 2021.\"; \"During the study period, 642 local screenings were performed as part of 53 studies. We identified an overall SF rate of 17.1%, compared with 39.2% in the global study population (P < .00001).\"; \"about one-quarter of SFs could have been avoided by thorough prescreening of the patient by clinical examination, more careful investigation of the patient's medical history, and available laboratory analyses.\"",
    },
    {
      id: "vieujean-2024",
      title: "Analysis of Clinical Trial Screen Failures in Inflammatory Bowel Diseases [IBD]: Real World Results from the International Organization for the study of IBD",
      publisher: "Journal of Crohn's and Colitis (Vieujean S et al.)",
      url: "https://academic.oup.com/ecco-jcc/article/18/4/548/7326696",
      year: "2024",
      note: "2024;18(4):548-559. Quote: \"We assess these in a 4-week prospective study including, consecutively, all patients with symptomatic disease for whom a treatment change was required.\"; \"A total of 106 patients (60 male [56.6%], 63 Crohn's disease [CD] [59.4%]), from ten centres across the world, were included in the prospective study.\"; \"An RCT has not been proposed to 65 of them [mainly due to eligibility criteria].\"; \"Of the 41 patients to whom an RCT was offered, eight refused [mainly due to reluctance to receive placebo]\"; \"23 were finally included in an RCT\".",
    },
    {
      id: "fichez-2025",
      title: "Non-invasive tests for fibrotic MASH for reducing screen failure in therapeutic trials",
      publisher: "JHEP Reports (Fichez J et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985113/",
      year: "2025",
      note: "2025;7(4):101351. 1,005 patients with biopsy-proven MASLD from cohorts in France, Belgium and China. Full text read via Europe PMC on September 23, 2026. Quotes: \"Therapeutic trials in metabolic dysfunction-associated steatohepatitis (MASH) are hampered by a high 70-80% screen failure rate mostly because of the absence of fibrotic MASH on baseline liver biopsies\"; \"biopsy-proven fibrotic MASH, that is, MASH with a MASLD activity score (MAS) ≥4 and a fibrosis stage F ≥2\"; \"Among elastography-based tests (n = 817), FAST had a significantly higher AUROC (0.774 [0.743-0.806]) than FibroScan (0.728 [0.694-0.763], p = 0.013) and Agile3+ (0.708 [0.672-0.744], p = 0.004).\"",
    },
    {
      id: "synergy-nash-2024",
      title: "Randomised clinical trial: Design of the SYNERGY-NASH phase 2b trial to evaluate tirzepatide as a treatment for metabolic dysfunction-associated steatohepatitis and modification of screening strategy to reduce screen failures",
      publisher: "Alimentary Pharmacology & Therapeutics (Vuppalanchi R et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38768298/",
      year: "2024",
      note: "2024;60(1):17-32. Several authors are Eli Lilly employees. Abstract read via the PubMed record on September 22, 2026. Quote: \"1583 participants were screened, 651 participants proceeded to liver biopsy and 190 participants were randomised with an overall screen fail rate of 87%. Following the protocol amendment, the overall qualification rate for per-protocol biopsies was minimally changed from 27.5% to 28.9% with considerable variation among different investigator medical speciality types: endocrinology: from 37.5% to 39.3%; gastroenterology/hepatology: from 26.0% to 23.3%\"; \"New inclusion criteria (FAST score >0.35 and an increase in AST inclusion criterion from >20 to >23 U/L) were adopted during the trial\".",
    },
    {
      id: "pulaski-2025",
      title: "Clinical validation of an AI-based pathology tool for scoring of metabolic dysfunction-associated steatohepatitis",
      publisher: "Nature Medicine (Pulaski H, Harrison SA et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/39496972/",
      year: "2025",
      note: "2025;31(1):315-322. Several authors are PathAI employees or contractors. Quote: \"Manual scoring of liver biopsies, currently the gold standard for clinical trial enrollment and endpoint assessment, suffers from high reader variability.\"",
    },
    {
      id: "lawitz-2026",
      title: "Liver Biopsy in Metabolic Dysfunction-Associated Steatohepatitis Clinical Trials: Potential Pitfalls and Solutions",
      publisher: "Liver International (Lawitz EJ, Poordad F, Goodman ZD)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13390309/",
      year: "2026",
      note: "2026;46(8):e70808. Full text checked on September 23, 2026. Quote: \"Screen failure rates of 70%-80% have been reported in MASH trials, driven in large part by the absence of ballooning on screening biopsies\".",
    },
    {
      id: "madrigal-2024",
      title: "Madrigal Pharmaceuticals Announces FDA Approval of Rezdiffra (resmetirom) for the Treatment of Patients with Noncirrhotic Nonalcoholic Steatohepatitis (NASH) with Moderate to Advanced Liver Fibrosis",
      publisher: "Madrigal Pharmaceuticals (press release)",
      url: "https://www.madrigalpharma.com/wp-content/uploads/2024/03/Approval-Press-Release-FINAL.pdf",
      year: "2024",
      note: "March 14, 2024, company announcement of FDA accelerated approval. Quotes: \"MAESTRO-NASH is an ongoing pivotal, multicenter, randomized, double-blind, placebo-controlled trial that enrolled 1,759 patients with biopsy-confirmed NASH.\"; \"The Rezdiffra prescribing information does not include a liver biopsy requirement for diagnosis.\"",
    },
    {
      id: "lewis-2023",
      title: "Incidence, Prevalence, and Racial and Ethnic Distribution of Inflammatory Bowel Disease in the United States",
      publisher: "Gastroenterology (Lewis JD et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/37481117/",
      year: "2023",
      note: "2023;165(5):1197-1205. Claims-based estimate. Abstract read via the PubMed record on September 22, 2026. Quote: \"The age-, sex- and insurance-standardized prevalence of IBD was 721 per 100,000 population (95% CI, 717-726). Extrapolated to the 2020 United States Census, an estimated 2.39 million Americans are diagnosed with IBD.\"",
    },
    {
      id: "fda-resmetirom-2024",
      title: "FDA Approves First Treatment for Patients with Liver Scarring Due to Fatty Liver Disease",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-patients-liver-scarring-due-fatty-liver-disease",
      year: "2024",
      note: "News release, March 14, 2024. Quote: \"By at least one estimate, approximately 6-8 million people in the U.S. have NASH with moderate to advanced liver scarring, with that number expected to increase.\"",
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
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "What Bond reads in the chart and how each match is explained." },
    { label: "Therapeutic areas", href: "/therapeutic-areas", description: "Eligibility, screen failure and trial counts in other conditions." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Site-level fixes for the causes that a chart can predict." },
    { label: "Obesity and metabolic trials", href: "/obesity-and-metabolic", description: "Where MASH candidates overlap with obesity and type 2 diabetes studies." },
    { label: "Pre-screening vs screening", href: "/guides/pre-screening-vs-screening", description: "What belongs in a chart pre-screen and what waits for the screening visit." },
  ],
};

export default page;
