import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/ehr-for-recruitment",
  category: "guide",
  title: "Using EHR for clinical trial recruitment: a site guide",
  description:
    "Using EHR for clinical trial recruitment: what structured data and notes show, HIPAA paths for review and contact, Epic cohort queries, and what to measure.",
  keywords: [
    "using EHR for clinical trial recruitment",
    "EHR cohort query for clinical trials",
    "preparatory to research HIPAA recruitment",
    "Epic SlicerDicer Reporting Workbench research",
    "LLM EHR eligibility screening",
  ],
  eyebrow: "Guide",
  h1: "Using your EHR to find trial patients",
  intro:
    "Many of the patients a site needs are already in its EHR. Finding them takes a legal basis for looking and reaching out, a query that returns a workable list, and a review step that catches what the query cannot read.",
  summary: "Structured data versus notes, HIPAA paths, cohort queries, LLM screening, coordinator review and the metrics that matter.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "See it on your protocol",
    href: "/book-a-demo",
    secondaryLabel: "How Identify reads the chart",
    secondaryHref: "/identify",
  },
  sections: [
    {
      id: "whats-in-the-ehr",
      heading: "What in the EHR can show that a patient is eligible?",
      blocks: [
        {
          type: "p",
          text: "An EHR holds two kinds of evidence. **Structured data** is coded: diagnoses, medications, labs, vitals, procedures and visit dates. Reporting tools can filter on it. **Unstructured data** is narrative: progress notes, consult notes, discharge summaries, and pathology and imaging reports. For recruitment, what matters is the share of a protocol's criteria that only a note can settle. Two studies measured it.",
        },
        {
          type: "stats",
          items: [
            { value: "59%", label: "of chronic lymphocytic leukemia trial criteria needed notes to resolve (Ohio State, 2014)", cite: "osu-2014" },
            { value: "77%", label: "of prostate cancer trial criteria needed notes (Ohio State, 2014)", cite: "osu-2014" },
            { value: "5 of 17", label: "COPILOT-HF heart failure trial exclusion criteria that structured data could settle (2024)", cite: "copilot-hf-2024" },
          ],
        },
        {
          type: "p",
          text: "Structured fields answer objective criteria such as age, a diagnosis code, a lab value or a current drug. Most of the rest needs a note. See [unstructured clinical data](/glossary/unstructured-clinical-data).",
        },
      ],
    },
    {
      id: "hipaa-paths",
      heading: "Which HIPAA path covers chart review and patient contact?",
      blocks: [
        {
          type: "p",
          text: "HIPAA has no single recruitment rule. Sizing a study, building a candidate list and calling a patient are separate uses of PHI, each needing its own permission. The [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach) covers contact rules.",
        },
        {
          type: "table",
          caption: "HIPAA and Common Rule paths for EHR-based recruitment",
          columns: ["Path", "Rule", "What it covers", "What to check"],
          rows: [
            [
              "[Preparatory to research](/glossary/preparatory-to-research)",
              "[45 CFR 164.512(i)(1)(ii)](https://www.ecfr.gov/current/title-45/section-164.512)",
              "Reviewing PHI to prepare a protocol or for similar purposes, such as feasibility, if the researcher represents that no PHI will leave the covered entity{{cite:ecfr-164-512}}",
              "Whether your privacy office extends it to contacting patients, and who may make contact",
            ],
            [
              "[Waiver of authorization](/glossary/waiver-of-authorization)",
              "[45 CFR 164.512(i)(1)(i)](https://www.ecfr.gov/current/title-45/section-164.512)",
              "Research use of PHI without authorization, in whole or in part, once an IRB or privacy board documents the required findings{{cite:ecfr-164-512}}",
              "Ask for a partial waiver limited to the fields needed to screen and contact",
            ],
            [
              "Treatment relationship",
              "[45 CFR 164.506](https://www.ecfr.gov/current/title-45/section-164.506)",
              "A covered entity's use of PHI for its own treatment, payment or health care operations{{cite:ecfr-164-506}}",
              "Whether a clinician raising a trial with their own patient counts as treatment. Study-wide lists pulled by research staff usually do not",
            ],
            [
              "[HIPAA authorization](/glossary/hipaa-authorization)",
              "[45 CFR 164.508](https://www.ecfr.gov/current/title-45/section-164.508)",
              "Any research use the patient signs off on; can be combined with the consent form{{cite:ecfr-164-508}}",
              "Usually signed at consent, so it rarely covers first contact",
            ],
            [
              "Common Rule screening provision",
              "[45 CFR 46.116(g)](https://www.ecfr.gov/current/title-45/section-46.116)",
              "IRB approval to screen, recruit or determine eligibility from records or conversations without consent{{cite:ecfr-46-116}}",
              "Applies under the Common Rule. For FDA-regulated studies, confirm with your IRB",
            ],
          ],
        },
        {
          type: "p",
          text: "Two more rules matter. Under the minimum necessary standard in [45 CFR 164.502(b)](https://www.ecfr.gov/current/title-45/section-164.502), a query should return the fields needed to screen and contact, not the whole chart. It does not apply to uses under an authorization or to disclosures to a provider for treatment.{{cite:ecfr-164-502}} A vendor that handles PHI on your behalf is generally a business associate under [45 CFR 160.103](https://www.ecfr.gov/current/title-45/section-160.103) and needs a [BAA](/glossary/baa) first.{{cite:ecfr-160-103,ecfr-164-502}}",
        },
        { type: "h3", text: "What will the IRB ask for?" },
        {
          type: "p",
          text: "FDA's 1998 recruiting guidance treats direct advertising as the start of informed consent and says the IRB should review its content and mode of communication.{{cite:fda-recruiting}} ICH E6(R3) says the investigator should have documented IRB approval of recruitment procedures before a trial starts.{{cite:ich-e6r3}} For EHR recruitment, expect to describe:",
        },
        {
          type: "checklist",
          items: [
            "The HIPAA path for each step: review, list building and contact.",
            "The data elements the query or model uses, and who sees its output.",
            "Each EHR tool used for contact. Washington University in St. Louis, for example, requires specific IRB approval for MyChart recruitment messages and for Epic recruitment alerts.{{cite:wustl-epic-tools}}",
            "Call scripts and messages, including any AI voice or text agent. FDA expects IRBs to review screening scripts.{{cite:fda-recruiting}}",
            "How selection stays equitable, which the IRB must find under [21 CFR 56.111(a)(3)](https://www.ecfr.gov/current/title-21/section-56.111).{{cite:ecfr-56-111}}",
          ],
        },
      ],
    },
    {
      id: "cohort-queries",
      heading: "How do you build a cohort query in Epic, Oracle Health or a registry?",
      blocks: [
        {
          type: "p",
          text: "A 2025 Washington University in St. Louis guide describes the main Epic research tools. SlicerDicer is the self-service tool for cohort metrics and feasibility. Reporting Workbench tracks study patients and can send MyChart recruitment requests. Clarity, the SQL reporting database, holds most Epic data and is queried by an informatics team.{{cite:wustl-epic-tools}}",
        },
        {
          type: "p",
          text: "For outside vendors, Epic's developer documentation (as of September 2026) says Bulk FHIR export needs the health system to build an analytics registry around the study's inclusion criteria.{{cite:epic-implementing}} Its API catalog exposes notes through FHIR DocumentReference and Binary resources.{{cite:epic-fhir}} For Oracle Health sites, Oracle Life Sciences announced a Patient Recruitment Cloud Service in October 2024 that tells authorized study teams which of their patients could potentially meet trial criteria.{{cite:oracle-prc}} Our [Epic](/integrations/epic) and [Oracle Health](/integrations/oracle-cerner) pages cover each connection.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Start from the protocol",
              text: "List every criterion and mark which ones a structured field can answer. The rest go to review.",
            },
            {
              title: "Query only on criteria you trust",
              text: "Diagnosis codes, age, active drugs and recent labs. Each extra filter drops patients whose chart lacks the code.",
            },
            {
              title: "Set time windows",
              text: "Apply the protocol's windows so an old diagnosis, stopped drug or stale lab qualifies no one.",
            },
            {
              title: "Remove opt-outs",
              text: "Exclude patients who asked not to be contacted for research, and any group your institution protects by policy.",
            },
            {
              title: "Validate on a sample",
              text: "Before outreach, have a coordinator review a sample of returned and excluded charts and record why each call was right or wrong.",
            },
          ],
        },
      ],
    },
    {
      id: "structured-query-limits",
      heading: "Where do structured queries fall short?",
      blocks: [
        {
          type: "p",
          text: "A structured query finds only what was coded. When the deciding fact sits in a note, the query misses the patient or returns them with many who do not qualify. At Brigham and Women's Hospital, a rule-based system that did not process clinical notes flagged heart failure patients who might be eligible for guideline-directed therapy. Of 5,460 flagged patients that staff screened by hand, 1,754 (32.1 percent) were truly eligible. Over 38 percent of the false positives came from misjudging symptomatic heart failure and medication history.{{cite:bwh-hf-2024}}",
        },
        {
          type: "p",
          text: "Carefully built algorithms do better. Across 13 [phenotyping](/glossary/ehr-phenotyping) algorithms at five sites in the eMERGE genomics network, positive predictive values ranged from 67.7 to 100 percent.{{cite:emerge-2013}} But each targeted one condition and was validated by chart review, an effort a single trial rarely justifies. The usual gaps:",
        },
        {
          type: "ul",
          items: [
            "**Symptoms and severity.** Functional class and performance status often live only in notes.",
            "**Rule-out and resolved codes.** A diagnosis entered to justify a test looks the same as an active one.",
            "**Reasons.** Why a drug was stopped is rarely coded.",
            "**Outside care.** Treatment elsewhere may exist only as a scanned document.",
          ],
        },
      ],
    },
    {
      id: "llm-screening",
      heading: "What does adding NLP or LLM screening change?",
      blocks: [
        {
          type: "p",
          text: "Natural language processing and large language models read the notes a structured query skips. Earlier EHR alerts raised referrals, and LLM prescreening now has a randomized trial.",
        },
        {
          type: "table",
          caption: "Published results from EHR-based recruitment",
          columns: ["Study", "What was tested", "Result"],
          rows: [
            [
              "Embi et al., 2005, US academic health system",
              "EHR alert prompting physicians when a patient's data met selected trial criteria",
              "Physician referrals rose from 5.7 to 59.5 per month; enrollments from 2.9 to 6.0 per month{{cite:embi-2005}}",
            ],
            [
              "Pfaff et al., 2019, ADAPTABLE at UNC",
              "EHR query plus patient portal and email messages",
              "12,254 recipients, 4.2% enrolled. In-clinic recruitment converted 16.8% of 339 patients, but 87.8% of UNC enrollees came through electronic outreach{{cite:adaptable-2019}}",
            ],
            [
              "Unlu et al., 2025, Mass General Brigham",
              "Randomized trial of LLM-assisted versus manual prescreening for a heart failure trial, 4,476 patients",
              "Eligible: 20.4% versus 12.7%. Enrolled: 35 (1.6%) versus 19 (0.9%){{cite:rectifier-rct-2025}}",
            ],
          ],
        },
        {
          type: "p",
          text: "Two cautions. A 2014 systematic review of 79 recruitment support systems concluded that success depends more on workflow integration than on sophisticated algorithms.{{cite:ctrss-review-2014}} And test for bias: a 2026 study of nine LLMs across 58 protocols, using clinical vignettes rather than real charts, found eligibility judgments largely stable across patient identities, with the largest negative shift for homelessness.{{cite:llm-bias-2026}}",
        },
        {
          type: "p",
          text: "[Identify](/identify), the screening stage of Bond Health's platform, takes this approach. Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through [FHIR](/glossary/fhir), HL7 or an aggregator.{{cite:bond-site,bond-product}} Identify reads structured fields, clinical notes, imaging data and other unstructured documents against each criterion, ranks candidates, and shows the chart evidence behind each decision.{{cite:bond-product}} Bond reports over 90 percent matching accuracy and at least 50 percent less chart review.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "coordinator-review",
      heading: "What should the coordinator review step look like?",
      blocks: [
        {
          type: "p",
          text: "A coordinator makes the final call before anyone is contacted, and that is where the hours go. In a 2012 study at one academic cancer center, the largest share of eligibility evaluations (35.8 percent) took 10 to 30 minutes, and more than 10 percent took 2 to 4 hours.{{cite:vcu-2012}} Finding, screening and enrolling one patient averaged 3.4 to 8.8 staff hours, depending on trial phase.{{cite:vcu-2012}}",
        },
        {
          type: "checklist",
          items: [
            "Work the list in rank order and stop at the number you can contact this week.",
            "Confirm each criterion against its source, not a summary.",
            "Record a decision per criterion: met, not met, or ask the patient.",
            "Log the reason for every rejection so the query or model can be corrected.",
            "Pass confirmed candidates to [pre-screening](/glossary/pre-screening) with the criteria still open.",
          ],
        },
        {
          type: "p",
          text: "The [coordinator chart review checklist](/templates/coordinator-chart-review-checklist) turns these steps into a form. In Bond, patients the site confirms can move to [Engage](/engage) for voice and text outreach.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "metrics",
      heading: "Which metrics show whether EHR recruitment is working?",
      blocks: [
        {
          type: "p",
          text: "Track the funnel from query to randomization for each protocol, monthly. Counting only referrals and enrollments hides the middle, where EHR recruitment succeeds or fails.",
        },
        {
          type: "table",
          caption: "EHR recruitment metrics to track per protocol",
          columns: ["Metric", "How to count it", "What it tells you"],
          rows: [
            ["Confirmed-eligible rate", "Patients confirmed divided by patients reviewed", "Precision, and how much review time is wasted"],
            ["Missed eligible patients", "Eligible patients found by other routes but not on the list", "What your query cannot see"],
            ["Review time per chart", "Coordinator minutes from opening a chart to a decision", "The baseline any tool must beat"],
            ["Time to first contact", "Days from appearing on the list to first outreach", "Whether patients are reached while still eligible"],
            ["Stage conversion", "Contacted, pre-screened, consented, randomized", "Where patients drop out"],
            ["Screen failures by reason", "Coded reason for each screen failure", "Criteria the chart could have predicted"],
          ],
        },
        {
          type: "p",
          text: "Bond's dashboard reports each stage from matched to randomized, plus time to enrollment, matching accuracy, screen-failure signals and coordinator hours saved.{{cite:bond-site}} Whatever tool you use, report [screen failure rate](/glossary/screen-failure-rate) by reason.",
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
            "Ask your privacy office which HIPAA path covers list building and contact for your open studies. Get the answer in writing.",
            "Pick one enrolling study and mark each criterion as structured or note-only.",
            "Query the structured criteria, have a coordinator review a sample, and log each rejection reason.",
            "Time those reviews. Minutes per chart is your baseline.",
            "Check that your IRB approvals name every EHR tool and contact method you use.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and see how Bond would screen its criteria.",
          secondaryLabel: "How implementation works",
          secondaryHref: "/implementation",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can we search the EHR for a study before IRB approval?",
      a: "For protocol design and feasibility, the preparatory-to-research provision lets a researcher review PHI if they represent that no PHI will leave the covered entity and that the PHI is necessary.{{cite:ecfr-164-512}} Building a contact list and reaching out usually needs an IRB-approved recruitment plan, and some institutions require specific IRB approval for MyChart recruitment.{{cite:wustl-epic-tools}}",
    },
    {
      q: "Does an AI screening vendor need a BAA?",
      a: "Generally, yes. A vendor that handles PHI on your behalf is a business associate under 45 CFR 160.103, and 45 CFR 164.502(e) requires assurances, documented in a BAA, before you share PHI with it.{{cite:ecfr-160-103,ecfr-164-502}} Bond signs BAAs, as described on the [security](/security) page.{{cite:bond-site}}",
    },
    {
      q: "Do LLMs replace coordinator chart review?",
      a: "No. The Mass General Brigham team that built the RECTIFIER screening tool recommends safeguards such as final clinician review before patient engagement.{{cite:copilot-hf-2024}} Bond shows the chart evidence behind each criterion decision so a coordinator can check it.{{cite:bond-site}}",
    },
    {
      q: "How long does it take to connect Bond to our EHR?",
      a: "Full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site}}",
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
      id: "osu-2014",
      title: "How essential are unstructured clinical narratives and information fusion to clinical trial recruitment?",
      publisher: "AMIA Joint Summits on Translational Science Proceedings (Raghavan P et al., Ohio State University)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25717416/",
      year: "2014",
      note: "Quote from the abstract: \"Unstructured data is essential to solving 59% of the CLL trial criteria and 77% of the prostate cancer trial criteria.\"",
    },
    {
      id: "copilot-hf-2024",
      title: "Retrieval Augmented Generation Enabled Generative Pre-Trained Transformer 4 (GPT-4) Performance for Clinical Trial Screening",
      publisher: "medRxiv preprint (Unlu O et al., Brigham and Women's Hospital and Mass General Brigham)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38370719/",
      year: "2024",
      note: "Quote from the abstract: \"Currently, structured data in the EHR can only be used to determine 5 out of 6 inclusion and 5 out of 17 exclusion criteria.\" Also: \"set up appropriate mitigation strategies such as final clinician review before patient engagement.\" DOI 10.1101/2024.02.08.24302376.",
    },
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512: Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "eCFR (Office of the Federal Register)",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Paragraph (i)(1)(i) covers IRB or privacy board waivers \"in whole or in part\"; (i)(1)(ii) covers reviews preparatory to research, including representations that no PHI will be removed from the covered entity and that the PHI is necessary. Text current as of 2026-09-01.",
    },
    {
      id: "ecfr-164-506",
      title: "45 CFR 164.506: Uses and disclosures to carry out treatment, payment, or health care operations",
      publisher: "eCFR (Office of the Federal Register)",
      url: "https://www.ecfr.gov/current/title-45/section-164.506",
      year: "2026",
      note: "Quote: \"A covered entity may use or disclose protected health information for its own treatment, payment, or health care operations.\"",
    },
    {
      id: "ecfr-164-508",
      title: "45 CFR 164.508: Uses and disclosures for which an authorization is required",
      publisher: "eCFR (Office of the Federal Register)",
      url: "https://www.ecfr.gov/current/title-45/section-164.508",
      year: "2026",
      note: "Paragraph (b)(3)(i) allows a research authorization to be combined with the consent to participate in the research.",
    },
    {
      id: "ecfr-46-116",
      title: "45 CFR 46.116: General requirements for informed consent",
      publisher: "eCFR (Office of the Federal Register)",
      url: "https://www.ecfr.gov/current/title-45/section-46.116",
      year: "2026",
      note: "Paragraph (g), screening, recruiting, or determining eligibility, added by the 2018 revised Common Rule.",
    },
    {
      id: "ecfr-164-502",
      title: "45 CFR 164.502: Uses and disclosures of protected health information: general rules",
      publisher: "eCFR (Office of the Federal Register)",
      url: "https://www.ecfr.gov/current/title-45/section-164.502",
      year: "2026",
      note: "Paragraph (b), minimum necessary; (b)(2) lists exceptions, including \"Disclosures to or requests by a health care provider for treatment\" and \"Uses or disclosures made pursuant to an authorization under § 164.508\". Paragraph (e): a covered entity may disclose PHI to a business associate \"if the covered entity obtains satisfactory assurance that the business associate will appropriately safeguard the information.\" Text current as of 2026-09-01.",
    },
    {
      id: "ecfr-160-103",
      title: "45 CFR 160.103: Definitions (business associate)",
      publisher: "eCFR (Office of the Federal Register)",
      url: "https://www.ecfr.gov/current/title-45/section-160.103",
      year: "2026",
      note: "Business associate: a person who, on behalf of a covered entity and not as workforce, \"creates, receives, maintains, or transmits protected health information for a function or activity regulated by this subchapter, including ... data analysis\", or provides services such as consulting or administrative services involving PHI.",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process.\" Also: \"the IRB should review the information contained in the advertisement and the mode of its communication\" and, on phone screening, \"The IRB should assure the procedures followed adequately protect the rights and welfare of the prospective subjects.\"",
    },
    {
      id: "ich-e6r3",
      title: "ICH Harmonised Guideline: Good Clinical Practice E6(R3)",
      publisher: "International Council for Harmonisation",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Section 2.4.2: before initiating a trial, the investigator/institution should have documented and dated IRB/IEC approval of participant recruitment procedures.",
    },
    {
      id: "ecfr-56-111",
      title: "21 CFR 56.111: Criteria for IRB approval of research",
      publisher: "eCFR (Office of the Federal Register)",
      url: "https://www.ecfr.gov/current/title-21/section-56.111",
      year: "2026",
      note: "Paragraph (a)(3): \"Selection of subjects is equitable.\"",
    },
    {
      id: "wustl-epic-tools",
      title: "Research Tools Available in Epic",
      publisher: "Washington University in St. Louis",
      url: "https://bpb-us-e2.wpmucdn.com/sites.wustl.edu/dist/1/4020/files/2025/11/Research-Recruitment-and-Reporting-Tools-in-Epic-1-1.pdf",
      year: "2025",
      note: "Quotes: \"SlicerDicer: Epic's self-service reporting tool that can be useful for study teams to gather metrics on a cohort to evaluate study feasibility.\" \"Clarity: Most Epic data can be retrieved from the analytical/SQL database (Clarity) and linked with other Clinical EHR data by the Informatics Core Services (ICS) team.\" MyChart Research Recruitment: \"This method requires specific IRB approval for Epic-MyChart recruitment.\" Institutional policies vary.",
    },
    {
      id: "epic-implementing",
      title: "Implementing Apps at Epic Customers",
      publisher: "Epic Systems Corporation (Epic on FHIR)",
      url: "https://fhir.epic.com/Documentation?docId=implementing",
      year: "2026",
      note: "Accessed September 2026. Quote: \"Using Bulk FHIR requires configuration from the health system, as they will need to create an analytics registry around specific inclusion criteria, within Epic.\"",
    },
    {
      id: "epic-fhir",
      title: "Epic on FHIR: API catalog",
      publisher: "Epic Systems Corporation",
      url: "https://fhir.epic.com/",
      year: "2026",
      note: "Accessed September 2026. Catalog lists \"DocumentReference (Clinical Notes) Read, Search, Create\" and Binary (Clinical Notes).",
    },
    {
      id: "oracle-prc",
      title: "New Oracle Cloud Services Help Pharmas Accelerate Clinical Trial Site Feasibility Assessment and Patient Recruitment",
      publisher: "Oracle via PR Newswire",
      url: "https://www.prnewswire.com/news-releases/new-oracle-cloud-services-help-pharmas-accelerate-clinical-trial-site-feasibility-assessment-and-patient-recruitment-302289032.html",
      year: "2024",
      note: "Oracle Life Sciences, October 29, 2024. Quote: \"Oracle Patient Recruitment Cloud Service can increase enrollment efficiency by informing authorized study teams of identified patients within their health system who could potentially meet trial criteria based on their clinical profile.\"",
    },
    {
      id: "bwh-hf-2024",
      title: "Identifying Patients with Heart Failure Eligible for Guideline-Directed Medical Therapy",
      publisher: "Population Health Management",
      url: "https://pubmed.ncbi.nlm.nih.gov/39630562/",
      year: "2024",
      note: "Quote: \"A total 5460 patients were manually screened, of which 1754 were found to be truly eligible with an accuracy of 32.1%. An analysis of the false-positive cases showed that over 38% of the false positives were due to incorrect determination of symptomatic HF and medication history of the patients.\"",
    },
    {
      id: "emerge-2013",
      title: "Validation of electronic medical record-based phenotyping algorithms: results and lessons learned from the eMERGE network",
      publisher: "Journal of the American Medical Informatics Association",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3715338/",
      year: "2013",
      note: "Quote: \"Most algorithms performed well, with PV+ values of 67.7-100%.\" 13 algorithms across five eMERGE sites, validated by manual chart review.",
    },
    {
      id: "embi-2005",
      title: "Effect of a clinical trial alert system on physician participation in trial recruitment",
      publisher: "Archives of Internal Medicine (Embi PJ et al., University of Cincinnati)",
      url: "https://pubmed.ncbi.nlm.nih.gov/16246994/",
      year: "2005",
      note: "Quote from the abstract: \"a 10-fold increase in those physicians' referral rate (5.7/mo before and 59.5/mo after; rate ratio, 10.44; 95% confidence interval, 7.98-13.68; P<.001), and a doubling of their enrollment rate (2.9/mo before and 6.0/mo after\". DOI 10.1001/archinte.165.19.2272.",
    },
    {
      id: "adaptable-2019",
      title: "Recruiting for a pragmatic trial using the electronic health record and patient portal: successes and lessons learned",
      publisher: "Journal of the American Medical Informatics Association (Pfaff E et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/30445631/",
      year: "2019",
      note: "Quote from the abstract: \"The electronic recruitment workflow sent electronic messages to 12 254 recipients; 13.5% of these recipients visited the study website, and 4.2% enrolled in the study.\" Also: \"Coordinators recruited 339 participants in clinic; 23.6% visited the study website, and 16.8% enrolled in the study. Five-hundred-nine of the 580 UNC enrollees (87.8%) were recruited using an electronic method.\" DOI 10.1093/jamia/ocy138.",
    },
    {
      id: "rectifier-rct-2025",
      title: "Manual vs AI-Assisted Prescreening for Trial Eligibility Using Large Language Models: A Randomized Clinical Trial",
      publisher: "JAMA (Unlu O et al., Mass General Brigham)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11833652/",
      year: "2025",
      note: "Verified on the JAMA article page (DOI 10.1001/jama.2024.28047). Quote: \"The eligibility rate was 20.4% (458/2242 patients) for the AI-assisted screening method vs 12.7% (284/2234 patients) for the manual screening method\". Also: \"there were 35 enrollments (1.6%) using the AI-assisted screening method compared with 19 enrollments (0.9%) using the manual screening method\" and \"Of the 4476 patients who were randomized\".",
    },
    {
      id: "ctrss-review-2014",
      title: "Employing computers for the recruitment into clinical trials: a comprehensive systematic review",
      publisher: "Journal of Medical Internet Research",
      url: "https://pubmed.ncbi.nlm.nih.gov/24985568/",
      year: "2014",
      note: "Review of 101 papers describing 79 clinical trial recruitment support systems. Quote: \"We conclude that the success of a CTRSS depends more on its successful workflow integration than on sophisticated reasoning and data processing algorithms.\"",
    },
    {
      id: "llm-bias-2026",
      title: "Sociodemographic bias in large language model clinical trial screening",
      publisher: "Journal of the American Medical Informatics Association",
      url: "https://pubmed.ncbi.nlm.nih.gov/42118957/",
      year: "2026",
      note: "Quote: \"Nine LLMs assessed eligibility and related domains.\" \"Across 58 protocols and 5.3 million evaluations, eligibility judgments were largely stable across identities.\" \"Homelessness produced the largest negative eligibility shift\". Evaluated on physician-validated vignettes, not real EHR notes.",
    },
    {
      id: "vcu-2012",
      title: "Effort Required in Eligibility Screening for Clinical Trials",
      publisher: "Journal of Oncology Practice",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Single academic cancer center (Virginia Commonwealth University). Quotes: \"The largest proportion of evaluations (35.8%) required 10 to 30 minutes, but more than 10% required between 2 to 4 hours for completion.\" \"The average number of hours spent to find, screen, and enroll a patient varied from 3.4 to 8.8 hours\" (by study phase).",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads structured data and notes and explains each match." },
    { label: "Epic integration", href: "/integrations/epic", description: "What a site provides to connect Bond to Epic." },
    { label: "Oracle Health (Cerner) integration", href: "/integrations/oracle-cerner", description: "The FHIR and HL7 path for Oracle Health sites." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What the rules allow once you have a list." },
    { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist", description: "A form for reviewing EHR matches criterion by criterion." },
    { label: "Implementation", href: "/implementation", description: "What an EHR-connected deployment involves, step by step." },
  ],
};

export default page;
