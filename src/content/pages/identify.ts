import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/identify",
  category: "product",
  title: "Identify: AI EHR screening for clinical trial eligibility",
  description:
    "How Bond reads structured EHR data and clinical notes against a study's criteria, ranks candidates, and links each eligibility decision to chart evidence.",
  keywords: [
    "EHR screening clinical trial eligibility AI",
    "LLM clinical trial patient matching",
    "automated clinical trial pre-screening",
    "clinical trial eligibility chart review",
  ],
  eyebrow: "Product: Identify",
  h1: "Identify: LLM-based EHR screening with the evidence attached",
  intro:
    "Identify is the first stage of Bond Health's recruitment workflow. Bond reads a site's EHR records, from structured fields to clinical notes, imaging data and other unstructured documents, against a study's inclusion and exclusion criteria, ranks the patients most likely to qualify, and shows the chart evidence behind each criterion decision.{{cite:bond-site,bond-product}} Coordinators review a ranked, explained list instead of opening charts one at a time.",
  summary: "LLM-based EHR screening that ranks candidates and links every criterion decision to chart evidence.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "what-bond-reads",
      heading: "What does Bond read in the EHR?",
      blocks: [
        {
          type: "p",
          text: "Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR,{{cite:bond-product}} through FHIR R4 APIs, HL7 v2 feeds where applicable, or an integration partner.{{cite:bond-site}} The [integrations](/integrations) page lists what each EHR needs from site IT. What Bond reads depends on what the site's connection exposes:",
        },
        {
          type: "ul",
          items: [
            "**Structured data:** diagnoses and problem lists, medications and prescriptions, lab results, vitals, procedures and demographics. These settle criteria like age, a lab threshold or a current prescription.",
            "**Clinical notes and reports:** progress notes, history and physicals, discharge summaries, and pathology and imaging narratives. All five are among the eight clinical note types in version 1 of the federal USCDI data standard.{{cite:uscdi-v1}}",
            "**Imaging data and other documents:** Identify also uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}}",
          ],
        },
        {
          type: "p",
          text: "Notes matter because many criteria are never coded; the answer sits in [unstructured clinical data](/glossary/unstructured-clinical-data). For a heart failure trial at Mass General Brigham, the team behind the RECTIFIER screening tool found that structured EHR data could determine 5 of 6 inclusion criteria but only 5 of 17 exclusion criteria. The rest required manual chart review.{{cite:unlu-2024}}",
        },
      ],
    },
    {
      id: "how-matching-works",
      heading: "How does Bond decide whether a patient meets a criterion?",
      blocks: [
        {
          type: "p",
          text: "Bond's matching pipeline, described in its August 2026 technical report (an internal preprint), runs in three stages. Each language-model stage receives an evidence packet: the clinical concepts involved, their synonyms, their mappings across coding systems and their hierarchy relations, each tagged with where it came from.{{cite:bond-whitepaper}}",
        },
        {
          type: "ol",
          items: [
            "**Relevance.** The first pass asks whether the study concerns this patient's condition at all.",
            "**Criterion-level evaluation.** Each inclusion and exclusion criterion is checked against the patient's record and the graph-grounded evidence, and the evidence used is kept with the decision.",
            "**Ranking.** Criterion results are combined into graded ranking signals. Scoring and gating follow deterministic rules rather than free-form model output.{{cite:bond-whitepaper}}",
          ],
        },
        {
          type: "p",
          text: "The terminology layer lets one check catch the many ways a chart says the same thing. Bond's ClinText Graph holds 3,270,078 nodes drawn from 18 biomedical terminologies, including SNOMED CT, RxNorm, LOINC, ICD-10-CM and MeSH. Tested on 51,055 eligibility criteria from ClinicalTrials.gov, it resolved at least one exact multi-token concept in 82.0 percent of criteria, against 5.7 percent for ICD-10-CM alone.{{cite:bond-whitepaper}}",
        },
      ],
    },
    {
      id: "configure-and-validate",
      heading: "How are the criteria configured and validated?",
      blocks: [
        {
          type: "p",
          text: "Screening starts from the study's own inclusion and exclusion criteria. Setting them up is part of the workflow configuration covered by Bond's platform fee, and it happens inside the [implementation](/implementation) plan, which takes 4 to 6 weeks for full EHR integration depending on the EHR, IT review and interface method.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Settle ambiguous criteria",
              text: "Phrases like \"adequate organ function\" need the thresholds the sponsor actually uses. The PI and study team decide those interpretations, not the software, and write them down.",
            },
            {
              title: "Resolve criteria to concepts",
              text: "Bond's terminology graph maps each criterion to concepts, synonyms and codes across vocabularies.{{cite:bond-whitepaper}} State time windows explicitly so that an old lab or a resolved diagnosis does not count.",
            },
            {
              title: "Check a sample against the chart",
              text: "Before relying on the ranked list, coordinators check a sample of criterion decisions against the evidence each one cites. Spend the most time on criteria that depend on dates or on combining several findings.",
            },
            {
              title: "Keep measuring after launch",
              text: "Matching accuracy, screen-failure signals and coordinator hours saved are among the outcomes Bond reports, and decisions stay in the audit trail.{{cite:bond-site}} When an amendment changes eligibility, repeat the sample check on the changed criteria.",
            },
          ],
        },
      ],
    },
    {
      id: "coordinator-review",
      heading: "What does the coordinator see when reviewing matches?",
      blocks: [
        {
          type: "p",
          text: "Coordinators work from a ranked list in Bond's real-time dashboard. Each candidate comes with the criteria, the decision on each, and the note, lab or medication behind it, so the coordinator checks that evidence rather than re-reading the whole record.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "**Gaps the chart cannot fill.** Some criteria, such as willingness to use contraception, are rarely documented. Those still have to be asked in pre-screening, by the voice and SMS/text agents in [Engage](/engage) or by staff.",
            "**Audit trail.** Decisions and their rationale are recorded, which helps when a monitor asks why a patient was or was not approached.",
          ],
        },
        {
          type: "p",
          text: "How the output fits the coordinator's workflow matters as much as the model. In a 2026 randomized evaluation of 355 oncology charts from a community practice, AI assistance raised coordinators' chart-level accuracy from 71.1 to 76.5 percent but did not shorten full chart abstraction: 37.4 versus 37.8 minutes per chart.{{cite:parikh-2026}} A 2014 systematic review of 79 recruitment support systems concluded that success depends more on workflow integration than on sophisticated algorithms.{{cite:jmir-2014-review}}",
        },
        {
          type: "quote",
          text: "Reduced our chart review time significantly while improving the quality of patients we bring in for screening.",
          attribution: "Research coordinator, academic medical center, oncology trial (quoted on bondtrials.com)",
        },
      ],
    },
    {
      id: "accuracy-evidence",
      heading: "How accurate is LLM-based eligibility screening?",
      blocks: [
        {
          type: "p",
          text: "Bond publishes two kinds of numbers: a matching accuracy figure on its website, and benchmark results from a technical report that is an internal preprint, not a peer-reviewed paper.{{cite:bond-site,bond-whitepaper}} Independent results are listed alongside.",
        },
        {
          type: "stats",
          items: [
            { value: "90%+", label: "matching accuracy for eligibility screening, as reported by Bond", cite: "bond-site" },
            { value: "0.9312", label: "micro F1 on the held-out n2c2 2018 cohort selection set", cite: "bond-whitepaper" },
            { value: "82.0%", label: "of 51,055 trial criteria resolved to an exact concept, vs 5.7% with ICD-10-CM alone", cite: "bond-whitepaper" },
          ],
        },
        {
          type: "table",
          caption: "Published results for LLM-based eligibility screening",
          columns: ["System and study", "Setting", "Reported result"],
          rows: [
            ["Bond (internal preprint, 2026)", "Held-out n2c2 2018 cohort selection set, organizers' scorer", "0.9312 overall micro F1{{cite:bond-whitepaper}}"],
            ["Bond (internal preprint, 2026)", "TREC Clinical Trials 2021 and 2022 fixed judged subsets", "nDCG@10 up 0.1315 and 0.1316 over TrialGPT's criterion-count ranking{{cite:bond-whitepaper}}"],
            ["n2c2 2018 shared task (JAMIA, 2019)", "288 patient records, 13 criteria, 47 teams", "Best system micro F1 of 0.91, rule-based{{cite:n2c2-2019}}"],
            ["TrialGPT, NIH (Nature Communications, 2024)", "1,015 patient-criterion pairs, manual evaluation", "87.3% criterion-level accuracy; screening time down 42.6% in a user study{{cite:trialgpt-2024}}"],
            ["RECTIFIER, Mass General Brigham (2024)", "Test set of 1,894 heart failure patients, scored against a blinded expert clinician", "Sensitivity 92.3% and specificity 93.9%, vs 90.1% and 83.6% for trained study staff{{cite:unlu-2024}}"],
            ["RECTIFIER randomized trial, Mass General Brigham (JAMA, 2025)", "4,476 patients randomized to AI-assisted or manual prescreening", "20.4% vs 12.7% found eligible; 35 vs 19 enrollments{{cite:unlu-2025}}"],
          ],
          note: "Benchmark sets use de-identified or synthetic records. They show what a method can do under test conditions, not what it will do on your protocol and EHR.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Human reviewers disagree too",
          text: "When two medical experts annotated the n2c2 2018 records, their average agreement was a kappa of 0.54, and lower on criteria that needed reasoning about time or several pieces of evidence.{{cite:n2c2-2019}} A benchmark score is not a promise about your protocol. Ask any vendor, Bond included, how agreement will be measured on your own records, with your coordinators as the reference.",
        },
      ],
    },
    {
      id: "manual-vs-bond",
      heading: "How does manual chart review compare with Bond screening?",
      blocks: [
        {
          type: "p",
          text: "In a 2012 prospective study at Virginia Commonwealth University's cancer center, the largest share of eligibility evaluations (35.8 percent) took 10 to 30 minutes, and more than 10 percent took 2 to 4 hours. Finding, screening and enrolling one patient took an average of 3.4 to 8.8 staff hours, depending on study phase.{{cite:penberthy-2012}}",
        },
        {
          type: "table",
          caption: "Manual chart review vs Bond screening",
          columns: ["Task", "Manual chart review", "Bond screening"],
          rows: [
            ["Finding candidates", "Coordinator runs an EHR report or scans clinic schedules, then opens charts one at a time", "Bond reads every record in scope against the configured criteria; its site cites 10,000+ charts per hour{{cite:bond-site}}"],
            ["Reading notes", "Limited by coordinator time; long histories are hard to read in full", "Notes, reports and structured fields are read for every record in scope"],
            ["Time per candidate", "The largest share (35.8%) of evaluations took 10 to 30 minutes in one 2012 cancer center study{{cite:penberthy-2012}}", "Coordinator checks the cited evidence; Bond reports 50%+ less chart review{{cite:bond-site}}"],
            ["Consistency", "Two trained coordinators agreed at a kappa of 0.72 on eight calibration charts in one oncology study{{cite:parikh-2026}}", "The same configured criteria and deterministic scoring rules apply to every record{{cite:bond-whitepaper}}"],
            ["Record of reasoning", "Screening log or spreadsheet, with as much detail as time allows", "Criterion-to-evidence rationale kept in the audit trail"],
            ["Final eligibility call", "Coordinator and investigator", "Coordinator and investigator, unchanged"],
          ],
        },
      ],
    },
    {
      id: "phi-handling",
      heading: "How is PHI handled during screening?",
      blocks: [
        {
          type: "p",
          text: "Screening reads protected health information. Bond signs a business associate agreement with the site.{{cite:bond-site}} Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}}",
        },
        {
          type: "checklist",
          items: [
            "Encryption at rest and in transit, AES-256 where applicable{{cite:bond-site}}",
            "Role-based access control with SSO support",
            "Audit logging",
            "Penetration testing and employee security training",
            "A Trust Center hosted on Vanta",
          ],
        },
        {
          type: "p",
          text: "As of September 2026, the HIPAA Privacy Rule's research provisions include two routes for reviewing records before patient contact: review [preparatory to research](/glossary/preparatory-to-research), where the researcher represents that no PHI will leave the covered entity during the review, and a [waiver of authorization](/glossary/waiver-of-authorization) approved by an IRB or privacy board.{{cite:hipaa-164-512}} Which route applies, and how it covers an outside vendor's processing, is for the site, its privacy office and its IRB to decide, not Bond. See [security](/security) and [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
        },
      ],
    },
    {
      id: "limits",
      heading: "What does Bond not do?",
      blocks: [
        {
          type: "p",
          text: "Identify narrows the search. It does not replace the people who run the study.",
        },
        {
          type: "ul",
          items: [
            "**It does not decide eligibility.** Bond ranks and explains. The coordinator and investigator make the call, and the screening visit confirms it.",
            "**It does not see what is not in the chart.** Care received elsewhere and anything never documented still need a conversation.",
            "**It does not contact patients.** Outreach is a separate step in [Engage](/engage), with scripts the site configures.",
            "**It does not obtain consent.** [Consent](/consent) supports the process; the site and PI still obtain consent.",
            "**It does not screen charts without data access.** Sites that want to start before the EHR connection is live can begin with list-based outreach, which Bond's site says can be set up in under 2 weeks.{{cite:bond-site}}",
            "**It does not remove the need to watch for bias.** A 2026 JAMIA study of nine LLMs, using physician-validated patient vignettes, found eligibility judgments largely stable across patient identities. Homelessness produced the largest negative shift, and disparities appeared where a model had to infer behavior or resources.{{cite:jamia-2026-bias}} Criteria that turn on adherence or resources are good candidates for human review.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol. We will walk through how Bond would approach its hardest criteria and what your coordinators would see.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Identify work with Epic and Oracle Health (Cerner)?",
      a: "Yes. Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR.{{cite:bond-product}} Full EHR integration typically takes 4 to 6 weeks depending on the EHR, IT review and interface method.{{cite:bond-site}} See [integrations](/integrations).",
    },
    {
      q: "Is Identify priced separately?",
      a: "No. LLM EHR screening is included in every engagement, alongside outreach, consent support and the dashboard. Pricing combines a volume-based platform fee with a success fee per enrolled (randomized) patient, and there is no integration fee, as described on the [pricing](/pricing) page.{{cite:bond-site}}",
    },
    {
      q: "Can Identify support feasibility answers?",
      a: "Yes. Bond runs feasibility from the same EHR screening, giving eligible-patient counts for a protocol backed by the chart evidence behind each match.{{cite:bond-product}} The [feasibility questionnaire template](/templates/feasibility-questionnaire) shows where those counts go in a sponsor's questionnaire.",
    },
    {
      q: "What happens when the protocol is amended?",
      a: "The criteria configuration is updated to match the amended protocol; workflow configuration and ongoing support are covered by the platform fee.{{cite:bond-site}} Before relying on the updated list, have coordinators re-check a sample of decisions on the changed criteria.",
    },
    {
      q: "When does Bond start reading real patient records?",
      a: "Under a signed business associate agreement, once the EHR connection and security review that are part of implementation are complete.{{cite:bond-site}} The HIPAA research route is the site's and its IRB's call, as described above.",
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
      note: "Goel R. Internal technical report (preprint), August 2026. Not peer reviewed; no public URL yet.",
    },
    {
      id: "unlu-2024",
      title: "Retrieval Augmented Generation Enabled Generative Pre-Trained Transformer 4 (GPT-4) Performance for Clinical Trial Screening",
      publisher: "medRxiv preprint via PubMed Central (Unlu O et al.); peer-reviewed version in NEJM AI",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10871450/",
      year: "2024",
      note: "Quote: \"the sensitivity and specificity of determining eligibility for the RECTIFIER was 92.3% (CI) and 93.9% (CI), and study staff was 90.1% (CI) and 83.6% (CI), respectively.\" Also: \"Currently, structured data in the EHR can only be used to determine 5 out of 6 inclusion and 5 out of 17 exclusion criteria.\" Test set of 1,894 patients; an expert clinician completed a blinded chart review as the reference.",
    },
    {
      id: "unlu-2025",
      title: "Manual vs AI-Assisted Prescreening for Trial Eligibility Using Large Language Models: A Randomized Clinical Trial",
      publisher: "JAMA (Unlu O et al.), full text via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11833652/",
      year: "2025",
      note: "Quote: \"The eligibility rate was 20.4% (458/2242 patients) for the AI-assisted screening method vs 12.7% (284/2234 patients)\" and \"there were 35 enrollments (1.6%) using the AI-assisted screening method compared with 19 enrollments (0.9%) using the manual screening method\". 4,476 patients randomized; enrollment subdistribution hazard ratio 1.79 (95% CI 1.02 to 3.15). Checked against the JAMA full text, September 2026.",
    },
    {
      id: "trialgpt-2024",
      title: "Matching Patients to Clinical Trials with Large Language Models",
      publisher: "Nature Communications (Jin Q et al., NIH National Library of Medicine); preprint via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10418514/",
      year: "2024",
      note: "Quote (arXiv preprint 2307.15051 as deposited in PMC): \"Manual evaluations on 1,015 patient-criterion pairs show that TrialGPT-Matching achieves an accuracy of 87.3% with faithful explanations, close to the expert performance.\" Also: \"our user study reveals that TrialGPT can reduce the screening time by 42.6% in patient recruitment.\"",
    },
    {
      id: "n2c2-2019",
      title: "Cohort selection for clinical trials: n2c2 2018 shared task track 1",
      publisher: "Journal of the American Medical Informatics Association (Stubbs A et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6798568/",
      year: "2019",
      note: "Quote: \"The best-performing system achieved a micro F1 score of 0.91 using a rule-based approach.\" Also: \"The average kappa score across all criteria was 0.54.\" Dataset: records of 288 patients, 13 selection criteria, 47 teams.",
    },
    {
      id: "penberthy-2012",
      title: "Effort Required in Eligibility Screening for Clinical Trials",
      publisher: "Journal of Oncology Practice (Penberthy LT et al.), full text via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Single academic cancer center (VCU Massey), 3,467 evaluations over 18 months. Quote: \"The largest proportion of evaluations (35.8%) required 10 to 30 minutes, but more than 10% required between 2 to 4 hours for completion.\" Also: \"The average time spent to find, screen, and enroll a patient varied from 3.4 to 8.8 hours\".",
    },
    {
      id: "parikh-2026",
      title: "Human-AI teaming to improve accuracy and efficiency of eligibility criteria prescreening for oncology trials: a randomized evaluation trial using retrospective electronic health records",
      publisher: "Nature Communications (Parikh RB et al.), full text via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12976108/",
      year: "2026",
      note: "355 retrospective charts from a 15-physician community oncology practice in California; University of Pennsylvania IRB. Quote: \"Chart-level accuracy, the primary endpoint of Human+AI prescreening is noninferior and superior to Human-alone (76.5% vs. 71.1%). However, efficiency is unchanged with similar average time per chart review, the secondary endpoint, (37.4 vs. 37.8 min).\" Calibration on eight charts: \"Cohen's Kappa was 0.72 and percent agreement was 86.1%\".",
    },
    {
      id: "jmir-2014-review",
      title: "Employing computers for the recruitment into clinical trials: a comprehensive systematic review",
      publisher: "Journal of Medical Internet Research",
      url: "https://pubmed.ncbi.nlm.nih.gov/24985568/",
      year: "2014",
      note: "Review of 101 papers on 79 clinical trial recruitment support systems.",
    },
    {
      id: "uscdi-v1",
      title: "United States Core Data for Interoperability (USCDI) Version 1",
      publisher: "ASTP/ONC Interoperability Standards Platform",
      url: "https://isp.healthit.gov/sites/default/files/inline-files/USCDI-v1-2019.pdf",
      year: "2020",
      note: "Quote: \"Clinical Notes • Consultation Note • Discharge Summary Note • History & Physical • Imaging Narrative • Laboratory Report Narrative • Pathology Report Narrative • Procedure Note • Progress Note\"",
    },
    {
      id: "jamia-2026-bias",
      title: "Sociodemographic bias in large language model clinical trial screening",
      publisher: "Journal of the American Medical Informatics Association (Soffer S et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/42118957/",
      year: "2026",
      note: "Physician-validated vignettes, 33 identity variants, nine LLMs, 58 US Phase II-III protocols. Quote: \"Across 58 protocols and 5.3 million evaluations, eligibility judgments were largely stable across identities. ... Homelessness produced the largest negative eligibility shift\" and \"disparities emerged in domains requiring inference about behavior or resources\".",
    },
    {
      id: "hipaa-164-512",
      title: "45 CFR 164.512(i): Uses and disclosures for research purposes",
      publisher: "Code of Federal Regulations, via Legal Information Institute (Cornell Law School)",
      url: "https://www.law.cornell.edu/cfr/text/45/164.512",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Reviews preparatory to research. The covered entity obtains from the researcher representations that ... No protected health information is to be removed from the covered entity by the researcher in the course of the review\". Waiver route: documentation that an alteration to or waiver of authorization \"has been approved by either\" an IRB or a privacy board.",
    },
  ],
  related: [
    { label: "Engage", href: "/engage", description: "Voice and SMS/text agents that pre-screen and schedule the patients Identify finds." },
    { label: "Implementation", href: "/implementation", description: "What happens between signing and live screening." },
    { label: "Integrations", href: "/integrations", description: "How Bond connects to Epic, Oracle Health (Cerner) and the other major EHRs." },
    { label: "Bond vs manual chart review", href: "/compare/bond-vs-manual-chart-review", description: "A side-by-side of coordinator time, consistency and audit trail." },
    { label: "Using the EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "What a site's EHR can and cannot tell you about eligibility." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
  ],
};

export default page;
