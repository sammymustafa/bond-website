import type { GlossaryTerm } from "./types";

/**
 * Glossary of clinical trial recruitment terms. Rendered at /glossary and
 * /glossary/[slug]. Each term links back to the product page it relates to.
 *
 * Rules (enforced by scripts/validate-content.ts): every number in a body
 * block carries a {{cite:id}} in that block, every term links to a product
 * page, and every internal link resolves.
 */
export const glossary: GlossaryTerm[] = [
  {
    slug: "baa",
    term: "Business associate agreement (BAA)",
    short:
      "A HIPAA contract between a covered entity, such as a hospital or research site, and a vendor that handles protected health information on its behalf.",
    body: [
      {
        type: "p",
        text: "Under HIPAA, a business associate is a person or company that creates, receives, maintains, or transmits protected health information (PHI) on behalf of a covered entity, other than as a member of its workforce.{{cite:ecfr-160-103}} The business associate agreement is the written contract that makes that arrangement permissible. Under 45 CFR 164.504(e), the contract must:{{cite:ecfr-164-504}}",
      },
      {
        type: "ul",
        items: [
          "Establish the permitted and required uses and disclosures of PHI by the vendor.",
          "Require appropriate safeguards, including the HIPAA Security Rule for electronic PHI.",
          "Require the vendor to report uses or disclosures the contract does not allow, including breaches.",
          "Require subcontractors that handle the PHI to agree to the same restrictions.",
          "Require the vendor to return or destroy the PHI when the contract ends, if feasible.",
        ],
      },
      {
        type: "p",
        text: "For recruitment, the BAA is usually the first document a privacy or IT office asks for. A vendor that reads charts to find eligible patients, or that calls and texts patients for a site, is handling PHI, so no data should move until the BAA is signed. Business associates are also bound by the minimum necessary standard, which limits the PHI used or requested to what the purpose requires.{{cite:ecfr-164-502}}",
      },
      {
        type: "p",
        text: "Practical note: ask each vendor which subcontractors, such as hosting, telephony or model providers, touch PHI, and confirm the BAA chain covers them. Bond signs BAAs with the sites and health systems it works with; see [Security](/security).",
      },
    ],
    sources: [
      {
        id: "ecfr-160-103",
        title: "45 CFR 160.103 Definitions (business associate)",
        publisher: "eCFR (HHS Office for Civil Rights)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103",
        year: "2026",
      },
      {
        id: "ecfr-164-504",
        title: "45 CFR 164.504(e) Business associate contracts",
        publisher: "eCFR (HHS Office for Civil Rights)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.504",
        year: "2026",
        note: 'Quote: "A contract between the covered entity and a business associate must: (i) Establish the permitted and required uses and disclosures of protected health information by the business associate." Also (ii)(J): "At termination of the contract, if feasible, return or destroy all protected health information received from, or created or received by the business associate on behalf of, the covered entity."',
      },
      {
        id: "ecfr-164-502",
        title: "45 CFR 164.502(b) Minimum necessary standard",
        publisher: "eCFR (HHS Office for Civil Rights)",
        url: "https://www.ecfr.gov/current/title-45/section-164.502",
        year: "2026",
      },
    ],
    related: [
      { label: "Security and compliance at Bond", href: "/security" },
      { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach" },
      { label: "AI recruitment vendor evaluation checklist", href: "/templates/ai-recruitment-vendor-evaluation-checklist" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "clinical-research-coordinator",
    term: "Clinical research coordinator (CRC)",
    short:
      "The study staff member who runs participation day to day, from pre-screening and scheduling to consent and visits, linking patient, investigator and sponsor.",
    body: [
      {
        type: "p",
        text: "The CDISC Glossary defines a clinical research coordinator as a qualified study staff member who manages the participation of subjects according to the study protocol. CRCs coordinate communication among the subject, investigator and sponsor, and their duties may include screening, enrollment, monitoring of potential participants and informed consent.{{cite:ncit-crc}} The investigator can delegate these activities to the coordinator but keeps responsibility for them.{{cite:ich-e6r3}}",
      },
      {
        type: "p",
        text: "Coordinators sit where most enrollment is won or lost. A 2024 DIA Global Forum article co-authored by Tufts CSDD researchers cites an estimate that 69% of patients identified and interested in participating are never pre-screened.{{cite:dia-last-mile}} That gap is usually a capacity problem: chart review, phone tag and scheduling compete with study visits, data entry and queries for the same hours.",
      },
      {
        type: "p",
        text: "Practical note: measure where coordinator time goes before adding tools or staff. If chart review and first-contact calls take most of the week, those are the steps [Identify](/identify) and [Engage](/engage) are built to take on, with patients handed back to the coordinator whenever a person is needed.",
      },
    ],
    sources: [
      {
        id: "ncit-crc",
        title: "NCI Thesaurus C51811: Clinical Coordinator (CDISC Glossary)",
        publisher: "National Cancer Institute EVS / CDISC",
        url: "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C51811",
        year: "2026",
        note: 'Quote: "A qualified study staff member who manages the participation of subjects according to the study protocol. NOTE: CRCs coordinate communication among the subject, investigator, and sponsor. Responsibilities may also include screening, enrollment, monitoring of potential participants, and informed consent."',
      },
      {
        id: "ich-e6r3",
        title: "ICH E6(R3) Guideline for Good Clinical Practice",
        publisher: "International Council for Harmonisation (ICH)",
        url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
        year: "2025",
      },
      {
        id: "dia-last-mile",
        title: 'Documenting the "Last Mile" Leak in the Patient Recruitment Pipeline',
        publisher: "DIA Global Forum",
        url: "https://globalforum.diaglobal.org/issue/september-2024/documenting-the-last-mile-leak-in-the-patient-recruitment-pipeline/",
        year: "2024",
        note: 'Quote: "69% of patients identified and interested in participating are never pre-screened" (the article attributes this figure to Clinical Leader). Authors: Ralic, Monreal, Vieyra (Ancora.ai); Ford, Getz (Tufts CSDD).',
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist" },
      { label: "Principal investigator (PI)", href: "/glossary/principal-investigator" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "ctms",
    term: "Clinical trial management system (CTMS)",
    short:
      "Software that sites, sponsors and CROs use to run studies, tracking participants, visits, staff tasks, budgets and recruitment status in one place.",
    body: [
      {
        type: "p",
        text: "A clinical trial management system is the operational record of a study. Site-focused CTMS products are built to cover trial execution end to end; RealTime, for example, describes its CTMS as purpose-built for research sites to streamline trial execution, including recruitment, coordinator activities, finances and site management.{{cite:realtime-ctms}} Sponsor and CRO versions focus more on oversight across many sites: activation status, monitoring visits and enrollment by site.",
      },
      {
        type: "p",
        text: "For enrollment, the CTMS is where recruitment status should end up: who was referred, pre-screened, scheduled, consented and randomized. When outreach lives in spreadsheets or a separate tool and never reaches the CTMS, the site loses its own funnel data, and its answers to the next feasibility questionnaire become estimates from memory.",
      },
      {
        type: "p",
        text: "Practical note: before adding a recruitment tool, decide which system is the source of truth for participant status and how referrals will reach it, whether by API, file import or manual entry. Bond is a CRIO Certified Partner and works alongside other CTMS platforms through API or file export where the vendor supports it; see [Implementation](/implementation).",
      },
    ],
    sources: [
      {
        id: "realtime-ctms",
        title: "RealTime-CTMS product page",
        publisher: "RealTime eClinical Solutions",
        url: "https://realtime-eclinical.com/ctms/",
        year: "2026",
      },
    ],
    related: [
      { label: "Implementation: how Bond connects to your systems", href: "/implementation" },
      { label: "eRegulatory binder (eISF)", href: "/glossary/eregulatory-eisf" },
      { label: "eSource (electronic source data)", href: "/glossary/esource" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "diversity-action-plan",
    term: "Diversity action plan",
    short:
      "A plan a drug sponsor must submit to FDA for a Phase 3 or other pivotal study, setting enrollment goals, the reasons for them and how it will meet them.",
    body: [
      {
        type: "p",
        text: "The Food and Drug Omnibus Reform Act of 2022 (FDORA) added diversity action plans to the Federal Food, Drug, and Cosmetic Act. For a Phase 3 study, or another pivotal study of a new drug, the sponsor must submit a plan that includes its goals for enrollment, its rationale for those goals, and an explanation of how it intends to meet them.{{cite:usc-355z}}",
      },
      {
        type: "p",
        text: "The plan is submitted in the form FDA specifies in guidance, no later than the date the sponsor submits the pivotal protocol. FDA may waive the requirement based on disease prevalence, impracticability, or a public health emergency. The requirement, and a parallel one for device studies, applies only to studies that begin enrollment more than 180 days after FDA publishes final guidance on diversity action plans.{{cite:usc-355z}}",
      },
      {
        type: "p",
        text: "Why it matters for enrollment: goals written at the protocol stage are met, or missed, at sites. That makes a site's real reach into the populations named in the plan a fair feasibility question, including patients at community clinics and health centers who are rarely offered trials.",
      },
      {
        type: "p",
        text: "Practical note: a site can support a sponsor's plan by tracking who was identified, contacted, pre-screened and enrolled, so gaps show up while there is still time to change outreach. Bond's dashboard reports each of those stages, and [Identify](/identify) screens patient records in the EHR against the study's criteria rather than relying only on patients a coordinator already knows.",
      },
    ],
    sources: [
      {
        id: "usc-355z",
        title: "21 U.S. Code 355(z) Diversity action plan for clinical studies",
        publisher: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/uscode/text/21/355",
        year: "2022",
        note: 'Effective date note, Pub. L. 117-328, div. FF, sec. 3602(c): "Sections 505(z) and 520(g)(9) of the Federal Food, Drug, and Cosmetic Act, as added by section 3601, shall apply only with respect to clinical investigations for which enrollment commences after the date that is 180 days after the publication of final guidance required under this section."',
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites" },
      { label: "Site feasibility assessment", href: "/glossary/site-feasibility" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "econsent",
    term: "Electronic informed consent (eConsent)",
    short:
      "Using electronic systems, such as tablets, web pages, video or interactive content, to present study information, check understanding and document consent.",
    body: [
      {
        type: "p",
        text: "FDA and the HHS Office for Human Research Protections define electronic informed consent (eIC) as the use of electronic systems and processes that may employ multiple electronic media, including text, graphics, audio, video, podcasts and interactive websites, to convey information about a study and to obtain and document informed consent. Their joint guidance was issued in 2016.{{cite:fda-eic}}",
      },
      {
        type: "p",
        text: "The guidance says an eIC may be used to provide the information usually contained in the written consent form, to evaluate the participant's comprehension, and to document consent, and notes that interactive electronic processes may help participants retain and understand the information.{{cite:fda-eic}} Comprehension matters for enrollment because consent is the gate between an interested patient and a screening visit, and a patient who leaves with open questions may not come back.",
      },
      {
        type: "p",
        text: "Practical note: eConsent changes how information is delivered, not who is responsible. The consent process is still conducted by the investigator or site staff the investigator delegates.{{cite:ich-e6r3}} [Consent](/consent) is Bond's comprehension support: plain-language explanations and patient Q&A, with escalation to staff, while the site obtains consent.",
      },
    ],
    sources: [
      {
        id: "fda-eic",
        title: "Use of Electronic Informed Consent in Clinical Investigations: Questions and Answers",
        publisher: "FDA and HHS Office for Human Research Protections",
        url: "https://www.fda.gov/media/116850/download",
        year: "2016",
      },
      {
        id: "ich-e6r3",
        title: "ICH E6(R3) Guideline for Good Clinical Practice",
        publisher: "International Council for Harmonisation (ICH)",
        url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
        year: "2025",
      },
    ],
    related: [
      { label: "Consent: AI-powered informed consent support", href: "/consent" },
      { label: "Informed consent", href: "/glossary/informed-consent" },
      { label: "What a consent form really costs", href: "/guides/consent-form-cost" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "ehr-phenotyping",
    term: "EHR phenotyping",
    short:
      "Finding patients with a specific condition or outcome in electronic health record data, using coded fields and clinical notes, by rules or machine learning.",
    body: [
      {
        type: "p",
        text: "Phenotyping is the task of finding patients with specific conditions or outcomes in EHR data. A 2018 review in the Annual Review of Biomedical Data Science calls it one of the most fundamental research problems in using EHR data, and the basis of translational research, comparative effectiveness studies, clinical decision support and population health analyses.{{cite:banda-2018}} Methods range from rule-based definitions, such as diagnosis codes, lab thresholds and medication lists, to supervised and unsupervised machine learning models.{{cite:banda-2018}}",
      },
      {
        type: "p",
        text: "Trial pre-screening is phenotyping with a protocol attached: each inclusion and exclusion criterion becomes a definition to test against the chart. Coded fields alone often miss what decides eligibility, such as disease stage, prior lines of therapy or a documented contraindication, because most digital data in healthcare are unstructured and need significant processing before research use.{{cite:plos-unstructured}}",
      },
      {
        type: "p",
        text: "Practical note: ask any phenotyping tool to show the evidence behind each criterion decision, so a coordinator can check it in seconds instead of re-reading the chart. [Identify](/identify) reads structured and unstructured records against the protocol and shows criterion-to-evidence rationale for each ranked candidate.",
      },
    ],
    sources: [
      {
        id: "banda-2018",
        title: "Advances in Electronic Phenotyping: From Rule-Based Definitions to Machine Learning Models",
        publisher: "Annual Review of Biomedical Data Science, via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/31218278/",
        year: "2018",
      },
      {
        id: "plos-unstructured",
        title: "Challenges and best practices for digital unstructured data enrichment in health research: A systematic narrative review",
        publisher: "PLOS Digital Health, via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/37819910/",
        year: "2023",
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "Unstructured clinical data", href: "/glossary/unstructured-clinical-data" },
      { label: "Using your EHR for recruitment", href: "/guides/ehr-for-recruitment" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "enrollment-rate",
    term: "Enrollment rate",
    short:
      "How fast a trial or site enrolls participants, usually expressed as patients enrolled per site per month and compared with the rate the plan assumed.",
    body: [
      {
        type: "p",
        text: "ClinicalTrials.gov regulations define enrollment as the estimated (target) or actual total number of human subjects enrolled in a clinical trial.{{cite:ecfr-42-11-10}} Enrollment rate adds time and site count to that number, so studies of different sizes can be compared. In the CREST-2 stroke prevention trial, for example, the recruitment rate was 0.26 patients per site per month.{{cite:crest2}}",
      },
      {
        type: "p",
        text: "Low rates are why so many studies miss their timelines. A 2018 review cited a study of 114 UK trials in which only 31% met their enrollment goals, and another analysis in which one-third of publicly funded trials required a time extension because they failed to meet initial recruitment goals.{{cite:fogel-2018}}",
      },
      {
        type: "p",
        text: "Practical note: track the rate by stage, not only the final count. Patients identified, contacted, pre-screened, consented and randomized each month show whether the constraint is finding patients, reaching them or converting them. Bond's dashboard reports each of those stages, and [Engage](/engage) adds outreach capacity when reaching patients is the bottleneck.",
      },
    ],
    sources: [
      {
        id: "ecfr-42-11-10",
        title: "42 CFR 11.10 Definitions (Clinical Trials Registration and Results Information Submission)",
        publisher: "eCFR (NIH/NLM)",
        url: "https://www.ecfr.gov/current/title-42/chapter-I/subchapter-A/part-11/subpart-A/section-11.10",
        year: "2026",
      },
      {
        id: "crest2",
        title: "Factors Associated With Time to Site Activation, Randomization, and Enrollment Performance in a Stroke Prevention Trial",
        publisher: "Stroke (American Heart Association), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/28768800/",
        year: "2017",
        note: 'Quote: "The recruitment rate was 0.26 (95% confidence interval, 0.23-0.28) patients per site per month."',
      },
      {
        id: "fogel-2018",
        title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
        publisher: "Contemporary Clinical Trials Communications, via PMC",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
        year: "2018",
        note: 'Quote: "A study of 114 trials in the UK indicated that only 31% met enrollment goals." Also: "In addition, Campbell et al. reported that one-third of publicly funded trials required a time extension because they failed to meet initial recruitment goals."',
      },
    ],
    related: [
      { label: "Engage: voice and text outreach", href: "/engage" },
      { label: "How sites win more studies", href: "/guides/win-more-studies" },
      { label: "Screen failure rate", href: "/glossary/screen-failure-rate" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "eregulatory-eisf",
    term: "eRegulatory binder (eISF)",
    short:
      "A digital investigator site file that holds a site's essential regulatory records, such as approvals, logs and training, and lets monitors review them remotely.",
    body: [
      {
        type: "p",
        text: "The investigator site file is the set of essential records a site keeps for each study: approvals, delegation and training logs, protocol versions, consent form versions and correspondence. An electronic investigator site file (eISF), also called an eRegulatory or eReg binder, keeps those records digitally. Florence Healthcare describes its eISF as allowing remote monitoring, document sharing, study management and compliance supervision in one place.{{cite:florence-ebinders}}",
      },
      {
        type: "p",
        text: "Recruitment creates regulatory records too. ICH E6(R3) lists records that document the recruitment, pre-trial screening and consenting process of trial participants among a trial's essential records.{{cite:ich-e6r3}} IRB-approved call scripts, text messages, advertisements and any AI disclosure language belong in the binder with their approval dates, next to the screening log.",
      },
      {
        type: "p",
        text: "Practical note: eISF platforms are now common; Florence says its eISF is trusted by more than 65,000 sites.{{cite:florence-home}} If a recruitment vendor produces logs or approved materials, agree up front how they will get into the site's eISF. Bond works alongside eRegulatory platforms such as Veeva SiteVault through export or API where the vendor supports it; see [Implementation](/implementation).",
      },
    ],
    sources: [
      {
        id: "florence-ebinders",
        title: "Florence eBinders (eISF) product page",
        publisher: "Florence Healthcare",
        url: "https://florencehc.com/products/ebinders/",
        year: "2026",
      },
      {
        id: "ich-e6r3",
        title: "ICH E6(R3) Guideline for Good Clinical Practice, Appendix C (Essential Records)",
        publisher: "International Council for Harmonisation (ICH)",
        url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
        year: "2025",
      },
      {
        id: "florence-home",
        title: "Florence Healthcare home page",
        publisher: "Florence Healthcare",
        url: "https://florencehc.com/",
        year: "2026",
      },
    ],
    related: [
      { label: "Implementation: how Bond connects to your systems", href: "/implementation" },
      { label: "Clinical trial management system (CTMS)", href: "/glossary/ctms" },
      { label: "eSource (electronic source data)", href: "/glossary/esource" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "esource",
    term: "eSource (electronic source data)",
    short:
      "Clinical trial data first recorded in electronic form, such as direct entry into a study system or an EHR, rather than transcribed from paper records.",
    body: [
      {
        type: "p",
        text: "FDA's guidance on electronic source data in clinical investigations, finalized in 2013, defines eSource as data initially recorded in electronic format. It can include information in original records and certified copies of original records of clinical findings, observations, or other activities captured before or during a clinical investigation and used to reconstruct and evaluate it.{{cite:fda-esource}}",
      },
      {
        type: "p",
        text: "For recruitment, the eSource that matters most is usually the EHR. The documentation showing that a participant met each inclusion and exclusion criterion, such as a pathology report, a lab value or a medication history, lives there, and monitors will trace eligibility back to it during source data verification. If pre-screening relied on a note the monitor cannot find, the eligibility decision is hard to defend.",
      },
      {
        type: "p",
        text: "Practical note: record the source document behind each eligibility criterion at the time of pre-screening, so the coordinator, the investigator and the monitor all verify the same evidence. [Identify](/identify) shows the chart evidence for each criterion it evaluates, which shortens that check.",
      },
    ],
    sources: [
      {
        id: "fda-esource",
        title: "Electronic Source Data in Clinical Investigations: Guidance for Industry",
        publisher: "U.S. Food and Drug Administration",
        url: "https://www.fda.gov/media/85183/download",
        year: "2013",
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "Clinical trial management system (CTMS)", href: "/glossary/ctms" },
      { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "fhir",
    term: "FHIR (Fast Healthcare Interoperability Resources)",
    short:
      "An HL7 standard for exchanging health data as modular resources over web APIs. Certified US EHRs must offer a FHIR API that approved outside apps can connect to.",
    body: [
      {
        type: "p",
        text: "FHIR, short for Fast Healthcare Interoperability Resources, is HL7's standard for exchanging healthcare information electronically. Its basic building block is the resource: all exchangeable content, such as a patient, a condition, a lab observation or a medication, is defined as a resource.{{cite:hl7-fhir-overview}} The specification also describes itself as RESTful and defines a web API for reading and exchanging those resources.{{cite:hl7-fhir-rest}}",
      },
      {
        type: "p",
        text: "FHIR matters to recruitment because regulation made it widely available. The ONC Health IT Certification Program adopts FHIR Release 4.0.1 as the standard for the certified standardized API for patient and population services, constrained by the US Core Implementation Guide.{{cite:ecfr-170-215}} That is why EHRs such as Epic and Oracle Health offer FHIR R4 APIs that an approved research application can connect to.",
      },
      {
        type: "p",
        text: "Practical note: what a site's FHIR API exposes varies, especially for clinical notes and scanned documents, so confirm the scope during IT review rather than after. Bond connects through FHIR R4 APIs, HL7 v2 feeds where applicable, or an integration partner; timelines depend on the EHR, the security review and the interface method. See [Implementation](/implementation).",
      },
    ],
    sources: [
      {
        id: "hl7-fhir-overview",
        title: "FHIR Overview (HL7 FHIR specification)",
        publisher: "HL7 International",
        url: "https://www.hl7.org/fhir/overview.html",
        year: "2026",
        note: 'Quote: "Welcome to the FHIR (Fast Healthcare Interoperability Resources) Specification, which is a standard for exchanging healthcare information electronically." Also: "The basic building block in FHIR is a Resource. All exchangeable content is defined as a resource."',
      },
      {
        id: "hl7-fhir-rest",
        title: "RESTful API (HL7 FHIR specification)",
        publisher: "HL7 International",
        url: "https://www.hl7.org/fhir/http.html",
        year: "2026",
        note: 'Quote: "FHIR is described as a \'RESTful\' specification based on common industry level use of the term REST."',
      },
      {
        id: "ecfr-170-215",
        title: "45 CFR 170.215 Application programming interfaces (API) standards and implementation specifications",
        publisher: "eCFR (HHS ONC / ASTP)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-B/section-170.215",
        year: "2026",
      },
    ],
    related: [
      { label: "Implementation: how Bond connects to your systems", href: "/implementation" },
      { label: "HL7 (Health Level Seven)", href: "/glossary/hl7" },
      { label: "Using your EHR for recruitment", href: "/guides/ehr-for-recruitment" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "first-patient-in",
    term: "First patient in (FPI)",
    short:
      "The milestone when the first participant enrolls in a study or at a site. Sponsors watch the time from site activation to first patient in closely.",
    body: [
      {
        type: "p",
        text: "First patient in (FPI), also called first subject in, marks the first participant enrolled in a clinical trial; the CDISC Glossary defines it as the first subject enrolled.{{cite:ncit-fsi}} Sponsors track FPI for the study as a whole and for each site, where the telling measure is the time from site activation to first enrollment. Check the protocol for what counts as enrolled, since some studies count signed consent and others count randomization.",
      },
      {
        type: "p",
        text: "The gap between activation and first enrollment is often long. In the CREST-2 trial, the median time from authorization to randomize to the first randomization at a site was 4.6 months.{{cite:crest2}} A 2024 DIA Global Forum article co-authored by Tufts CSDD researchers cites Tufts CSDD data that only 60% of activated sites in a trial enroll a patient.{{cite:dia-last-mile}}",
      },
      {
        type: "p",
        text: "Practical note: start finding candidates before activation. Counting likely patients during feasibility and getting outreach materials into the IRB submission means the site can contact candidates and book screening visits as soon as it is activated. [Identify](/identify) builds that ranked candidate list from the EHR.",
      },
    ],
    sources: [
      {
        id: "ncit-fsi",
        title: "NCI Thesaurus C142559: First Subject In Identity (CDISC Glossary)",
        publisher: "National Cancer Institute EVS / CDISC",
        url: "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C142559",
        year: "2026",
        note: 'Quote: "The first subject enrolled. See also enrollment."',
      },
      {
        id: "crest2",
        title: "Factors Associated With Time to Site Activation, Randomization, and Enrollment Performance in a Stroke Prevention Trial",
        publisher: "Stroke (American Heart Association), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/28768800/",
        year: "2017",
        note: 'Quote: "The median time between authorization to randomize and a randomization was 4.6 months (interquartile range, 2.6, 10.5)."',
      },
      {
        id: "dia-last-mile",
        title: 'Documenting the "Last Mile" Leak in the Patient Recruitment Pipeline',
        publisher: "DIA Global Forum",
        url: "https://globalforum.diaglobal.org/issue/september-2024/documenting-the-last-mile-leak-in-the-patient-recruitment-pipeline/",
        year: "2024",
        note: 'Quote: "Only 60% of activated investigative sites in any trial enroll a patient" (attributed in the article to Tufts CSDD).',
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "Site activation", href: "/glossary/site-activation" },
      { label: "Last patient in (LPI)", href: "/glossary/last-patient-in" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "hipaa-authorization",
    term: "HIPAA authorization",
    short:
      "A patient's signed permission for a covered entity to use or share their health information for a purpose, like research, that HIPAA does not otherwise allow.",
    body: [
      {
        type: "p",
        text: "Under the HIPAA Privacy Rule, a covered entity may not use or disclose protected health information without a valid authorization unless the rule otherwise permits or requires it. A valid authorization contains six core elements, including a specific description of the information, who may receive it, each purpose, an expiration, and the individual's signature and date. For research, the expiration can be the end of the research study or none.{{cite:ecfr-164-508}}",
      },
      {
        type: "p",
        text: "HIPAA also lets a research authorization be combined with the informed consent to take part in the same study, which is why many consent forms include a HIPAA section.{{cite:ecfr-164-508}} Recruitment usually happens before either is signed, so sites rely on other pathways to find and contact candidates: reviews preparatory to research, or an IRB or Privacy Board waiver or alteration of authorization, in whole or in part.{{cite:ecfr-164-512}}",
      },
      {
        type: "p",
        text: "Practical note: write down which pathway covers each recruitment step, from chart review to first call to consent, and make sure the IRB submission says the same thing. See the [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach) and how Bond handles PHI on the [Security](/security) page.",
      },
    ],
    sources: [
      {
        id: "ecfr-164-508",
        title: "45 CFR 164.508 Uses and disclosures for which an authorization is required",
        publisher: "eCFR (HHS Office for Civil Rights)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.508",
        year: "2026",
      },
      {
        id: "ecfr-164-512",
        title: "45 CFR 164.512(i) Uses and disclosures for research purposes",
        publisher: "eCFR (HHS Office for Civil Rights)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.512",
        year: "2026",
      },
    ],
    related: [
      { label: "Security and compliance at Bond", href: "/security" },
      { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach" },
      { label: "Waiver of HIPAA authorization", href: "/glossary/waiver-of-authorization" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "hl7",
    term: "HL7 (Health Level Seven)",
    short:
      "The standards organization behind the HL7 v2 messages, CDA documents and FHIR APIs that most EHRs use to exchange data with other systems.",
    body: [
      {
        type: "p",
        text: "Health Level Seven International (HL7), founded in 1987, is a not-for-profit, ANSI-accredited standards developing organization dedicated to the interoperability of healthcare data. Its standards include FHIR, Version 2 (V2) and CDA, and the name refers to the application layer, the seventh layer of the ISO networking model. HL7 reports community members from more than 50 countries, including more than 500 corporate members.{{cite:hl7-about}}",
      },
      {
        type: "p",
        text: "In hospital IT, \"HL7\" often means HL7 v2 messages: the event feeds for admissions, orders and lab results that systems inside a health system send one another. FHIR is HL7's newer, API-based standard, and certified EHRs must offer a FHIR Release 4.0.1 API.{{cite:ecfr-170-215}} For recruitment, either can carry the data a screening tool needs, and many health systems run both.",
      },
      {
        type: "p",
        text: "Practical note: ask the site's integration team which interfaces already exist before scoping a new one. Reusing an existing HL7 v2 feed or FHIR endpoint can shorten IT review. Bond connects via FHIR R4 APIs, HL7 v2 where applicable, or an integration partner; see [Implementation](/implementation).",
      },
    ],
    sources: [
      {
        id: "hl7-about",
        title: "About HL7",
        publisher: "HL7 International",
        url: "https://www.hl7.org/about/index.cfm",
        year: "2026",
      },
      {
        id: "ecfr-170-215",
        title: "45 CFR 170.215 Application programming interfaces (API) standards and implementation specifications",
        publisher: "eCFR (HHS ONC / ASTP)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-D/part-170/subpart-B/section-170.215",
        year: "2026",
      },
    ],
    related: [
      { label: "Implementation: how Bond connects to your systems", href: "/implementation" },
      { label: "FHIR (Fast Healthcare Interoperability Resources)", href: "/glossary/fhir" },
      { label: "Using your EHR for recruitment", href: "/guides/ehr-for-recruitment" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "inclusion-and-exclusion-criteria",
    term: "Inclusion and exclusion criteria",
    short:
      "The protocol rules that decide who can join a trial: inclusion criteria every participant must meet, and exclusion criteria any one of which rules a person out.",
    body: [
      {
        type: "p",
        text: "Federal regulations for ClinicalTrials.gov define eligibility criteria as a limited list of criteria for selecting human subjects to participate in a clinical trial, provided as inclusion and exclusion criteria.{{cite:ecfr-42-11-10}} Inclusion criteria describe who the study needs, such as diagnosis, disease stage, age or lab ranges. Exclusion criteria describe who must be left out, usually for safety or to keep the results interpretable.",
      },
      {
        type: "p",
        text: "Criteria also drive screen failure. In an audit of 15 randomized oncology studies at a cancer center in India, not meeting inclusion criteria was the most common reason, accounting for 54.9% of screen failures.{{cite:tata-audit}} Protocols are also getting harder to match: Tufts CSDD benchmarks show Phase II and III protocols averaging more eligibility criteria than before.{{cite:tufts-protocol-design}}",
      },
      {
        type: "p",
        text: "Practical note: before outreach, sort each criterion by where it can be settled:",
      },
      {
        type: "ul",
        items: [
          "In the chart, such as diagnosis, stage, prior therapy and recent labs. [Identify](/identify) evaluates these and shows the evidence.",
          "On a short call, such as willingness to travel or current medications.",
          "Only at the screening visit, such as protocol-specific labs or imaging.",
        ],
      },
    ],
    sources: [
      {
        id: "ecfr-42-11-10",
        title: "42 CFR 11.10 Definitions (Clinical Trials Registration and Results Information Submission)",
        publisher: "eCFR (NIH/NLM)",
        url: "https://www.ecfr.gov/current/title-42/chapter-I/subchapter-A/part-11/subpart-A/section-11.10",
        year: "2026",
      },
      {
        id: "tata-audit",
        title: "Audit of screen failure in 15 randomised studies from a low and middle-income country",
        publisher: "ecancermedicalscience, via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/36819805/",
        year: "2022",
        note: 'Single center (Tata Memorial Centre, India). Quote: "Out of these, 3,666 (49.0%) patients were enrolled into trials and 3,815 (51.0%) screen failed. The most common reason for screen failure was \'not meeting inclusion criteria\' (54.9%) followed by declining to take treatment (22.2%)."',
      },
      {
        id: "tufts-protocol-design",
        title: "Protocol Design and Performance Benchmarks by Phase and by Oncology and Rare Disease Subgroups",
        publisher: "Therapeutic Innovation & Regulatory Science (Tufts CSDD), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/35960455/",
        year: "2023",
        note: 'Quote: "The results show a continuing upward trend across all protocol design variables. Phase II and III protocols average more endpoints, eligibility criteria, protocol pages; investigative sites; countries and datapoints collected."',
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "How to reduce screen failure at your site", href: "/guides/reduce-screen-failure" },
      { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "informed-consent",
    term: "Informed consent",
    short:
      "The process through which a person learns about a trial, asks questions and voluntarily agrees to join. The signed form documents it but does not replace it.",
    body: [
      {
        type: "p",
        text: "ICH E6(R3) defines informed consent as a process by which a participant or their legally acceptable representative voluntarily confirms their willingness to participate in a trial, after having been informed and given the opportunity to discuss all aspects of the trial relevant to that decision.{{cite:ich-e6r3}} The consent discussion is conducted by the investigator or site staff the investigator delegates.{{cite:ich-e6r3}}",
      },
      {
        type: "p",
        text: "In the US, FDA regulations require legally effective informed consent before a person takes part in FDA-regulated research, sought in circumstances that give the person enough time to consider participation and that minimize coercion or undue influence, in language the person can understand.{{cite:ecfr-50-20}}",
      },
      {
        type: "p",
        text: "Consent is where interest turns into participation, and where some of it is lost. In an audit of 15 randomized oncology studies at a cancer center in India, declining treatment was the second most common reason for screen failure, accounting for 22.2% of failures.{{cite:tata-audit}} Practical note: give patients the consent document before the visit and a way to ask questions early. [Consent](/consent) supports that step with plain-language explanations and patient Q&A, with escalation to staff; the site still obtains consent.",
      },
    ],
    sources: [
      {
        id: "ich-e6r3",
        title: "ICH E6(R3) Guideline for Good Clinical Practice",
        publisher: "International Council for Harmonisation (ICH)",
        url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
        year: "2025",
      },
      {
        id: "ecfr-50-20",
        title: "21 CFR 50.20 General requirements for informed consent",
        publisher: "eCFR (FDA)",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20",
        year: "2026",
      },
      {
        id: "tata-audit",
        title: "Audit of screen failure in 15 randomised studies from a low and middle-income country",
        publisher: "ecancermedicalscience, via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/36819805/",
        year: "2022",
        note: 'Single center (Tata Memorial Centre, India). Quote: "Out of these, 3,666 (49.0%) patients were enrolled into trials and 3,815 (51.0%) screen failed. The most common reason for screen failure was \'not meeting inclusion criteria\' (54.9%) followed by declining to take treatment (22.2%)."',
      },
    ],
    related: [
      { label: "Consent: AI-powered informed consent support", href: "/consent" },
      { label: "Electronic informed consent (eConsent)", href: "/glossary/econsent" },
      { label: "What a consent form really costs", href: "/guides/consent-form-cost" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "irb",
    term: "Institutional review board (IRB)",
    short:
      "The committee that reviews and approves human research, including recruitment materials and outreach scripts, to protect participants' rights and welfare.",
    body: [
      {
        type: "p",
        text: "FDA regulations define an institutional review board as any board, committee, or other group formally designated by an institution to review, approve the initiation of, and conduct periodic review of biomedical research involving human subjects, with the primary purpose of protecting their rights and welfare.{{cite:ecfr-56-102}} Among the criteria an IRB must find before approving research are that selection of subjects is equitable and that privacy and confidentiality are adequately protected.{{cite:ecfr-56-111}}",
      },
      {
        type: "p",
        text: "Recruitment falls inside the IRB's scope. FDA treats direct advertising for study subjects as the start of the informed consent and subject selection process, and expects the IRB to review advertisements and to make sure the scripts staff use to check basic eligibility on first contact protect prospective subjects' rights and welfare.{{cite:fda-recruiting}}",
      },
      {
        type: "p",
        text: "Practical note: submit every outreach channel, not just the flyer. Include in the IRB packet:",
      },
      {
        type: "ul",
        items: [
          "Call and voicemail scripts, including any pre-screening questions.",
          "Text message templates and opt-out wording.",
          "Patient-facing web pages and advertisements.",
          "How patients are told an AI assistant is used and how they reach a person. [Engage](/engage) supports both.",
        ],
      },
    ],
    sources: [
      {
        id: "ecfr-56-102",
        title: "21 CFR 56.102 Definitions (Institutional Review Boards)",
        publisher: "eCFR (FDA)",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-56/subpart-A/section-56.102",
        year: "2026",
      },
      {
        id: "ecfr-56-111",
        title: "21 CFR 56.111 Criteria for IRB approval of research",
        publisher: "eCFR (FDA)",
        url: "https://www.ecfr.gov/current/title-21/section-56.111",
        year: "2026",
      },
      {
        id: "fda-recruiting",
        title: "Recruiting Study Subjects: Information Sheet for IRBs and Clinical Investigators",
        publisher: "U.S. Food and Drug Administration",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
        year: "1998",
        note: 'Quote: "FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process. Advertisements should be reviewed and approved by the IRB as part of the package for initial review." Also: "The first contact prospective study subjects make is often with a receptionist who follows a script to determine basic eligibility for the specific study. The IRB should assure the procedures followed adequately protect the rights and welfare of the prospective subjects."',
      },
    ],
    related: [
      { label: "Engage: voice and text outreach", href: "/engage" },
      { label: "IRB submission language for AI outreach", href: "/templates/irb-submission-language-ai-outreach" },
      { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "last-patient-in",
    term: "Last patient in (LPI)",
    short:
      "The milestone when the final participant enrolls and enrollment closes. The gap between planned and actual last patient in is a direct measure of recruitment.",
    body: [
      {
        type: "p",
        text: "Last patient in (LPI), also called last subject in, is the enrollment of the final participant in a trial; the CDISC Glossary defines it as the last subject enrolled in a clinical trial.{{cite:ncit-lsi}} LPI closes the enrollment period and starts the countdown to the last visit, database lock and results. For ClinicalTrials.gov, the registered enrollment must be updated from the target number to the actual number once the trial reaches its primary completion date.{{cite:ecfr-42-11-10}}",
      },
      {
        type: "p",
        text: "Missed LPI dates are common. A 2018 review cited a study of 114 UK trials in which only 31% met their enrollment goals, and another in which one-third of publicly funded trials required a time extension because they failed to meet initial recruitment goals.{{cite:fogel-2018}} Each extension keeps sites, monitors and vendors running longer and delays the data.",
      },
      {
        type: "p",
        text: "Practical note: a late LPI is usually visible months ahead in the per-site enrollment rate. Forecast LPI from the current rate, not the planned one, and add sites or outreach capacity early rather than in the final quarter. [Engage](/engage) handles first contact and scheduling so coordinators can spend their time on visits.",
      },
    ],
    sources: [
      {
        id: "ncit-lsi",
        title: "NCI Thesaurus C142597: Last Subject In Identity (CDISC Glossary)",
        publisher: "National Cancer Institute EVS / CDISC",
        url: "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C142597",
        year: "2026",
        note: 'Quote: "The last subject enrolled in a clinical trial."',
      },
      {
        id: "ecfr-42-11-10",
        title: "42 CFR 11.10 Definitions (Clinical Trials Registration and Results Information Submission)",
        publisher: "eCFR (NIH/NLM)",
        url: "https://www.ecfr.gov/current/title-42/chapter-I/subchapter-A/part-11/subpart-A/section-11.10",
        year: "2026",
        note: 'Quote, 11.10(b)(18): "Once the trial has reached the primary completion date, the responsible party must update the Enrollment data element to reflect the actual number of human subjects enrolled in the clinical trial."',
      },
      {
        id: "fogel-2018",
        title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
        publisher: "Contemporary Clinical Trials Communications, via PMC",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
        year: "2018",
        note: 'Quote: "In addition, Campbell et al. reported that one-third of publicly funded trials required a time extension because they failed to meet initial recruitment goals."',
      },
    ],
    related: [
      { label: "Engage: voice and text outreach", href: "/engage" },
      { label: "First patient in (FPI)", href: "/glossary/first-patient-in" },
      { label: "Enrollment rate", href: "/glossary/enrollment-rate" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "pre-screening",
    term: "Pre-screening",
    short:
      "Checking whether a person might qualify for and want to join a study before they sign consent, through a records review or a short conversation.",
    body: [
      {
        type: "p",
        text: "Pre-screening covers the steps before informed consent that decide whether someone might be eligible and interested. NIH's Office of Human Subjects Research Protections describes it as happening before a person signs a consent form, to see if someone might qualify and is interested in the study, and says it must not include research procedures; screening to determine further eligibility happens after consent.{{cite:nih-ohsrp-screening}}",
      },
      {
        type: "p",
        text: "Under the revised Common Rule, an IRB may approve obtaining information for screening, recruiting or determining eligibility without consent when the investigator communicates with the prospective subject or accesses records.{{cite:ecfr-46-116}} Pre-screening is also where many interested patients are lost: a 2024 DIA Global Forum article cites an estimate that 69% of patients identified and interested in participating are never pre-screened.{{cite:dia-last-mile}}",
      },
      {
        type: "p",
        text: "Practical note: keep a pre-screening log of who was reviewed, contacted, eligible for a screening visit, or ruled out and why, and follow your IRB's rules on what identifiable data you may keep for people who do not qualify. See the [pre-screening call script](/templates/pre-screening-call-script), and [Engage](/engage) for voice and text pre-screening.",
      },
    ],
    sources: [
      {
        id: "nih-ohsrp-screening",
        title: "Screening for Research Studies",
        publisher: "NIH Office of Human Subjects Research Protections",
        url: "https://irbo.nih.gov/conducting-your-study/screening-for-research-studies/",
        year: "2026",
        note: 'Quote: "Pre-screening happens before a person signs a consent form. Its purpose is to see if someone might qualify and is interested in the study." Also: "It must not include research procedures." and "Screening to determine further eligibility happens after consent is obtained (unless waived by the IRB)."',
      },
      {
        id: "ecfr-46-116",
        title: "45 CFR 46.116(g) Screening, recruiting, or determining eligibility",
        publisher: "eCFR (HHS OHRP)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116",
        year: "2026",
      },
      {
        id: "dia-last-mile",
        title: 'Documenting the "Last Mile" Leak in the Patient Recruitment Pipeline',
        publisher: "DIA Global Forum",
        url: "https://globalforum.diaglobal.org/issue/september-2024/documenting-the-last-mile-leak-in-the-patient-recruitment-pipeline/",
        year: "2024",
        note: 'Quote: "69% of patients identified and interested in participating are never pre-screened" (the article attributes this figure to Clinical Leader).',
      },
    ],
    related: [
      { label: "Engage: voice and text outreach", href: "/engage" },
      { label: "Pre-screening vs. screening", href: "/guides/pre-screening-vs-screening" },
      { label: "Pre-screening call script", href: "/templates/pre-screening-call-script" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "preparatory-to-research",
    term: "Reviews preparatory to research",
    short:
      "A HIPAA pathway that lets researchers review records to prepare a protocol or check feasibility without authorization, if no PHI leaves the covered entity.",
    body: [
      {
        type: "p",
        text: "Under 45 CFR 164.512(i)(1)(ii), a covered entity may let a researcher use or access protected health information without authorization when the researcher represents three things: the use is sought solely to review PHI as necessary to prepare a research protocol or for similar purposes preparatory to research, no PHI will be removed from the covered entity during the review, and the PHI is necessary for the research.{{cite:ecfr-164-512}}",
      },
      {
        type: "p",
        text: "Sites commonly rely on this pathway to answer feasibility questionnaires, for example by counting how many patients appear to meet a study's key criteria. FDA's 2023 informed consent guidance adds that a feasibility survey of patient records does not require informed consent under FDA regulations, but it must comply with HIPAA.{{cite:fda-ic-2023}}",
      },
      {
        type: "p",
        text: "Practical note: a preparatory review supports counting and planning. Contacting patients is a separate step with its own requirements, such as IRB approval of the recruitment plan and, where needed, a waiver of authorization, so check with your privacy office before any outreach. See the [feasibility questionnaire template](/templates/feasibility-questionnaire) and how Bond handles PHI on the [Security](/security) page.",
      },
    ],
    sources: [
      {
        id: "ecfr-164-512",
        title: "45 CFR 164.512(i)(1)(ii) Reviews preparatory to research",
        publisher: "eCFR (HHS Office for Civil Rights)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.512",
        year: "2026",
      },
      {
        id: "fda-ic-2023",
        title: "Informed Consent: Guidance for IRBs, Clinical Investigators, and Sponsors",
        publisher: "U.S. Food and Drug Administration",
        url: "https://www.fda.gov/media/88915/download",
        year: "2023",
      },
    ],
    related: [
      { label: "Security and compliance at Bond", href: "/security" },
      { label: "Site feasibility questionnaire template", href: "/templates/feasibility-questionnaire" },
      { label: "Waiver of HIPAA authorization", href: "/glossary/waiver-of-authorization" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "principal-investigator",
    term: "Principal investigator (PI)",
    short:
      "The person responsible for a study's scientific and technical direction and, at a site, for its conduct, staff and participants, even when tasks are delegated.",
    body: [
      {
        type: "p",
        text: "ClinicalTrials.gov regulations define the principal investigator as the individual responsible for the overall scientific and technical direction of the study.{{cite:ecfr-42-11-10}} At a site, the PI signs the regulatory commitments, supervises the study team, and is accountable for how participants are recruited, consented and treated. ICH E6(R3) lets the investigator delegate trial-related activities to other persons or parties while keeping responsibility for them.{{cite:ich-e6r3}}",
      },
      {
        type: "p",
        text: "PIs shape enrollment directly: their clinic, referral network and time for the study all affect how quickly a site enrolls, and sponsors weigh PI experience when choosing sites. In the CREST-2 trial, the PI's specialty was among the factors associated with faster recruitment in univariate analysis.{{cite:crest2}}",
      },
      {
        type: "p",
        text: "Practical note: delegation covers technology too. When a vendor tool reviews charts or contacts patients, the PI still owns those steps, so the delegation log, IRB approvals and vendor oversight should reflect them. [Identify](/identify) keeps an audit trail of screening decisions and the evidence behind them for that review.",
      },
    ],
    sources: [
      {
        id: "ecfr-42-11-10",
        title: "42 CFR 11.10 Definitions (Clinical Trials Registration and Results Information Submission)",
        publisher: "eCFR (NIH/NLM)",
        url: "https://www.ecfr.gov/current/title-42/chapter-I/subchapter-A/part-11/subpart-A/section-11.10",
        year: "2026",
      },
      {
        id: "ich-e6r3",
        title: "ICH E6(R3) Guideline for Good Clinical Practice",
        publisher: "International Council for Harmonisation (ICH)",
        url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
        year: "2025",
      },
      {
        id: "crest2",
        title: "Factors Associated With Time to Site Activation, Randomization, and Enrollment Performance in a Stroke Prevention Trial",
        publisher: "Stroke (American Heart Association), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/28768800/",
        year: "2017",
        note: 'Quote: "By univariate analysis, factors associated with faster recruitment were authorization to randomize in both trials, principal investigator specialties of interventional radiology and cardiology, pre-trial reported performance >50 carotid angioplasty and stenting procedures per year, status in the top half of recruitment in the CREST trial, and classification as a private health facility."',
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "Clinical research coordinator (CRC)", href: "/glossary/clinical-research-coordinator" },
      { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "protocol-deviation",
    term: "Protocol deviation",
    short:
      "Any departure from the processes or procedures a study protocol defines, from a visit outside its window to enrolling someone who missed a criterion.",
    body: [
      {
        type: "p",
        text: "The CDISC Glossary defines a protocol deviation as a variation from processes or procedures defined in a protocol. Deviations usually do not preclude the overall evaluability of subject data for efficacy or safety, and good clinical practice recommends summarizing them by site and by category in the study report.{{cite:ncit-protocol-deviation}}",
      },
      {
        type: "p",
        text: "They are frequent. A Tufts CSDD working group found that Phase II and Phase III protocols average 75 and 119 protocol deviations respectively, involving nearly one-third of enrolled patients, with oncology trials the highest. The study also found a strong positive relationship between the number of investigative sites and the number of deviations.{{cite:tufts-deviations}}",
      },
      {
        type: "p",
        text: "Eligibility deviations matter most for enrollment, because a participant enrolled without meeting an inclusion or exclusion criterion may have to be withdrawn or have their data questioned. Practical note: many of those trace back to evidence missed or misread during screening, so document the source for every criterion before randomization. [Identify](/identify) links each criterion decision to the chart evidence behind it.",
      },
    ],
    sources: [
      {
        id: "ncit-protocol-deviation",
        title: "NCI Thesaurus C50996: Protocol Deviation (CDISC Glossary)",
        publisher: "National Cancer Institute EVS / CDISC",
        url: "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C50996",
        year: "2026",
        note: 'Quote: "A variation from processes or procedures defined in a protocol. Deviations usually do not preclude the overall evaluability of subject data for either efficacy or safety, and are often acknowledged and accepted in advance by the sponsor. NOTE: Good clinical practice recommends that deviations be summarized by site and by category as part of the report of study results so that the possible importance of the deviations to the findings of the study can be assessed."',
      },
      {
        id: "tufts-deviations",
        title: "Benchmarking Protocol Deviations and Their Variation by Major Disease Categories",
        publisher: "Therapeutic Innovation & Regulatory Science (Tufts CSDD), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/35378712/",
        year: "2022",
        note: 'Quote: "The results of this working group study show that phase II and III protocols have a mean total of 75 and 119 protocol deviations, respectively, involving nearly one-third of all patients enrolled in each clinical trial." Also: "A strong positive relationship was shown between the number of investigative sites and the number of protocol deviations."',
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "Inclusion and exclusion criteria", href: "/glossary/inclusion-and-exclusion-criteria" },
      { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "randomization",
    term: "Randomization",
    short:
      "Assigning trial participants to treatment groups by chance to reduce bias. In many studies, randomization is also when a participant counts as enrolled.",
    body: [
      {
        type: "p",
        text: "ICH E6(R3) defines randomization as the process of deliberately including an element of chance when assigning participants to groups that receive different treatments, in order to reduce bias.{{cite:ich-e6r3}} Because neither the investigator nor the participant chooses the group, differences in outcomes can be attributed to the treatment rather than to who was picked for it. Methods include simple, block and stratified randomization, often run through an interactive response system.",
      },
      {
        type: "p",
        text: "Randomization is also the line between screening and enrollment in many protocols. A GSK protocol posted on ClinicalTrials.gov, for example, defines screen failures as participants who consent to participate but are not subsequently randomized.{{cite:gsk-protocol}} Enrollment targets, per-patient payments and site rankings are often counted at this milestone.",
      },
      {
        type: "p",
        text: "Practical note: agree with the sponsor, and with any recruitment vendor, on exactly what counts as enrolled before the study starts. Bond's performance fee is charged per enrolled patient, defined as successfully randomized, so payment follows the same milestone sponsors count. See [Pricing](/pricing).",
      },
    ],
    sources: [
      {
        id: "ich-e6r3",
        title: "ICH E6(R3) Guideline for Good Clinical Practice, Glossary",
        publisher: "International Council for Harmonisation (ICH)",
        url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
        year: "2025",
      },
      {
        id: "gsk-protocol",
        title: "Protocol 213744 (NCT04718103), section 5.5 Pre-screen/Screen/Run-in Failures",
        publisher: "GlaxoSmithKline, via ClinicalTrials.gov",
        url: "https://cdn.clinicaltrials.gov/large-docs/03/NCT04718103/Prot_000.pdf",
        year: "2021",
        note: "Section 5.5 defines pre-screen, screen and run-in failures as participants who consent to participate in the clinical study but are not subsequently randomized.",
      },
    ],
    related: [
      { label: "Pricing: platform fee plus per-enrollment success fee", href: "/pricing" },
      { label: "Screen failure rate", href: "/glossary/screen-failure-rate" },
      { label: "Screening", href: "/glossary/screening" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "screen-failure-rate",
    term: "Screen failure rate",
    short:
      "The share of patients who sign consent and start screening but do not qualify for randomization, usually because a protocol criterion is not met.",
    body: [
      {
        type: "p",
        text: "ICH and CDISC define a screen failure as a potential participant who does not meet the eligibility (inclusion or exclusion) criteria during the screening period.{{cite:ncit-screen-failure}} The screen failure rate is the number of screen failures divided by everyone screened. Sponsors compare sites on it because each failure costs a visit, coordinator time and often a reimbursed procedure, with nothing to show for it.",
      },
      {
        type: "p",
        text: "Rates vary widely with the protocol. In the SYMPLICITY HTN-3 resistant hypertension trial, 880 of 1,415 patients screened (62%) did not meet criteria for randomization, mostly on the blood pressure entry threshold.{{cite:htn3}} In an audit of 15 randomized oncology studies at a cancer center in India, 51% of screened patients failed screening, most often for not meeting inclusion criteria.{{cite:tata-audit}}",
      },
      {
        type: "p",
        text: "Practical note: many failures are knowable from the chart before the patient comes in, such as an excluded medication, an old lab outside the window or a documented comorbidity. Screening the full record first, including notes, is the job of [Identify](/identify); see the [guide to reducing screen failure](/guides/reduce-screen-failure).",
      },
    ],
    sources: [
      {
        id: "ncit-screen-failure",
        title: "NCI Thesaurus C49628: Trial Screen Failure (ICH and CDISC definitions)",
        publisher: "National Cancer Institute EVS / CDISC",
        url: "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C49628",
        year: "2026",
        note: 'Quote: "The potential participant who does not meet eligibility (inclusion/exclusion) criteria during the screening period."',
      },
      {
        id: "htn3",
        title: "High screen failure rate in patients with resistant hypertension: Findings from SYMPLICITY HTN-3",
        publisher: "American Heart Journal, via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/28938966/",
        year: "2017",
        note: 'Quote: "Among 1,415 patients screened, 880 (62%) did not meet criteria for randomization."',
      },
      {
        id: "tata-audit",
        title: "Audit of screen failure in 15 randomised studies from a low and middle-income country",
        publisher: "ecancermedicalscience, via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/36819805/",
        year: "2022",
        note: 'Single center (Tata Memorial Centre, India). Quote: "Out of these, 3,666 (49.0%) patients were enrolled into trials and 3,815 (51.0%) screen failed. The most common reason for screen failure was \'not meeting inclusion criteria\' (54.9%) followed by declining to take treatment (22.2%)."',
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "How to reduce screen failure at your site", href: "/guides/reduce-screen-failure" },
      { label: "Screening", href: "/glossary/screening" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "screening",
    term: "Screening",
    short:
      "The period after a participant signs consent when study procedures confirm whether they meet every eligibility criterion before enrollment or randomization.",
    body: [
      {
        type: "p",
        text: "Screening is the formal eligibility check that begins after informed consent. The CDISC Glossary's definition of the first-subject-screened milestone places it when the subject signs the informed consent form and is screened for potential enrollment or randomization, before being determined to meet the inclusion and exclusion criteria.{{cite:ncit-first-screened}} NIH's human subjects office draws the same line: pre-screening happens before a person signs a consent form.{{cite:nih-ohsrp-screening}}",
      },
      {
        type: "p",
        text: "The distinction matters because screening can include research procedures. FDA's position is that informed consent must be obtained before any clinical procedure performed solely to determine research eligibility, while procedures that are part of routine care and would be done anyway may be used for eligibility without research consent.{{cite:fda-screening-tests}}",
      },
      {
        type: "p",
        text: "Practical note: every screening visit costs coordinator time, clinic space and patient goodwill, so the fewer candidates who arrive with a disqualifier already in the chart, the better. A records review and a short pre-screening call before the visit, the work of [Identify](/identify) and [Engage](/engage), can catch many of those.",
      },
    ],
    sources: [
      {
        id: "ncit-first-screened",
        title: "NCI Thesaurus C142560: First Subject Screened Date Time (CDISC Glossary)",
        publisher: "National Cancer Institute EVS / CDISC",
        url: "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C142560",
        year: "2026",
        note: 'Quote: "The date and/or date and time the first subject signs the informed consent form and is screened for potential enrollment or randomization into a study, but has not yet been determined to meet the inclusion/exclusion criteria for the trial."',
      },
      {
        id: "nih-ohsrp-screening",
        title: "Screening for Research Studies",
        publisher: "NIH Office of Human Subjects Research Protections",
        url: "https://irbo.nih.gov/conducting-your-study/screening-for-research-studies/",
        year: "2026",
        note: 'Quote: "Pre-screening happens before a person signs a consent form. Its purpose is to see if someone might qualify and is interested in the study." Also: "It must not include research procedures." and "Screening to determine further eligibility happens after consent is obtained (unless waived by the IRB)."',
      },
      {
        id: "fda-screening-tests",
        title: "Screening Tests Prior to Study Enrollment: Information Sheet",
        publisher: "U.S. Food and Drug Administration",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
        year: "1998",
      },
    ],
    related: [
      { label: "Engage: voice and text outreach", href: "/engage" },
      { label: "Pre-screening vs. screening", href: "/guides/pre-screening-vs-screening" },
      { label: "Pre-screening", href: "/glossary/pre-screening" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "site-activation",
    term: "Site activation",
    short:
      "The point at which a selected site has finished contracts, budget, IRB approval and training, and the sponsor authorizes it to start enrolling participants.",
    body: [
      {
        type: "p",
        text: "Site activation is the end point of study start-up: the moment a selected site is authorized to enroll. Tufts CSDD measures the start-up process from site identification through site activation.{{cite:tufts-startup}} Before activation, a site typically needs an executed contract and budget, IRB approval, its essential regulatory documents in place, and a site initiation visit or training on the protocol.",
      },
      {
        type: "p",
        text: "Activation is slow and hard to predict. In the CREST-2 trial, across 147 sites, the median time from site selection to authorization to randomize was 9.9 months, and the investigators did not identify factors associated with early activation.{{cite:crest2}} Every month spent there is a month the site cannot enroll.",
      },
      {
        type: "p",
        text: "Practical note: use the time between selection and activation to prepare recruitment, not only paperwork. Getting outreach scripts into the IRB submission, and connecting records review while contracts are negotiated, lets the site contact candidates as soon as it is activated. See [Implementation](/implementation) for how Bond's setup runs alongside start-up.",
      },
    ],
    sources: [
      {
        id: "tufts-startup",
        title: "Assessing Study Start-up Practices, Performance, and Perceptions Among Sponsors and Contract Research Organizations",
        publisher: "Therapeutic Innovation & Regulatory Science (Tufts CSDD), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/29714558/",
        year: "2018",
      },
      {
        id: "crest2",
        title: "Factors Associated With Time to Site Activation, Randomization, and Enrollment Performance in a Stroke Prevention Trial",
        publisher: "Stroke (American Heart Association), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/28768800/",
        year: "2017",
        note: 'Quote: "For 147 sites, the median time between site selection to authorization to randomize was 9.9 months (interquartile range, 7.7, 12.4), and factors associated with early site activation were not identified."',
      },
    ],
    related: [
      { label: "Implementation: how Bond connects to your systems", href: "/implementation" },
      { label: "Study start-up", href: "/glossary/study-startup" },
      { label: "First patient in (FPI)", href: "/glossary/first-patient-in" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "site-feasibility",
    term: "Site feasibility assessment",
    short:
      "How sponsors and CROs check whether a site can run a specific trial: its patient population, staff, equipment, competing studies and past enrollment.",
    body: [
      {
        type: "p",
        text: "Feasibility assessments establish a site's capability to conduct clinical trials and its suitability for a specific trial.{{cite:asco-feasibility}} In practice, a sponsor or CRO sends a questionnaire asking how many eligible patients the site sees, what staff and equipment it has, which competing studies it runs, and how it has enrolled in similar studies.",
      },
      {
        type: "p",
        text: "Feasibility answers become the enrollment numbers a site is held to, so they should come from data rather than memory. An ASCO task force called the feasibility methods sponsors and CROs use costly, inefficient and unnecessarily burdensome, and recommended a uniform process, fewer and standardized questions, and technology to reduce redundancy.{{cite:asco-feasibility}} CTTI recommends moving recruitment planning upstream, alongside trial design.{{cite:ctti-recruitment}}",
      },
      {
        type: "p",
        text: "Practical note: base patient counts on a records query. Under HIPAA, reviews preparatory to research allow that kind of count without authorization if no PHI leaves the covered entity.{{cite:ecfr-164-512}} Start from the [feasibility questionnaire template](/templates/feasibility-questionnaire), and see [Identify](/identify), which screens EHR records against a study's criteria.",
      },
    ],
    sources: [
      {
        id: "asco-feasibility",
        title: "Recommendations to Streamline and Standardize Clinical Trial Site Feasibility Assessments: An ASCO Research Statement",
        publisher: "JCO Oncology Practice (ASCO), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/33405975/",
        year: "2021",
        note: 'Quote: "Feasibility assessments (FAs) are important to establish site capabilities to conduct clinical trials and their suitability for specific trials. However, current FA methods used by biotechnology and pharmaceutical (biotech-pharma) trial sponsors and contract research organizations (CROs) are costly, inefficient, unnecessarily burdensome, and resource intensive." Recommendations: "(1) implement a streamlined and uniform FA process across trials and sponsors; (2) minimize and standardize questions; and (3) leverage technology to centralize FAs, facilitate communications, and reduce redundancies."',
      },
      {
        id: "ctti-recruitment",
        title: "CTTI Recommendations: Planning for Successful Trial Recruitment",
        publisher: "Clinical Trials Transformation Initiative",
        url: "https://ctti-clinicaltrials.org/wp-content/uploads/2021/06/CTTI_Recruitment_Recs.pdf",
        year: "2018",
      },
      {
        id: "ecfr-164-512",
        title: "45 CFR 164.512(i)(1)(ii) Reviews preparatory to research",
        publisher: "eCFR (HHS Office for Civil Rights)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.512",
        year: "2026",
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "Site feasibility questionnaire template", href: "/templates/feasibility-questionnaire" },
      { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "study-startup",
    term: "Study start-up",
    short:
      "Everything between choosing sites and enrolling the first patient: site identification and selection, contracts, budgets, IRB review, documents and activation.",
    body: [
      {
        type: "p",
        text: "Study start-up covers site identification, site selection and the work needed to activate each site: confidentiality agreements, feasibility, contract and budget negotiation, IRB approval, essential documents and protocol training. In a Tufts CSDD survey of more than 400 pharmaceutical, biotech and CRO companies, start-up averaged 5 to 6 months in total, and cycle times were faster for repeat sites than for new ones.{{cite:tufts-startup}}",
      },
      {
        type: "p",
        text: "The same survey found that CROs completed all site-related start-up activities 6 to 11 weeks faster than sponsors.{{cite:tufts-startup}} Every month in start-up is a month without enrollment, which is why CTTI recommends moving recruitment planning upstream, in parallel with trial design.{{cite:ctti-recruitment}}",
      },
      {
        type: "p",
        text: "Practical note: recruitment tools add their own start-up steps. Run them in parallel with contracts and budget rather than after:",
      },
      {
        type: "ul",
        items: [
          "Security review and a signed BAA.",
          "EHR access approval and interface setup.",
          "IRB review of outreach scripts, texts and AI disclosure language.",
          "Workflow configuration with the coordinators. [Implementation](/implementation) shows how Bond's setup runs.",
        ],
      },
    ],
    sources: [
      {
        id: "tufts-startup",
        title: "Assessing Study Start-up Practices, Performance, and Perceptions Among Sponsors and Contract Research Organizations",
        publisher: "Therapeutic Innovation & Regulatory Science (Tufts CSDD), via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/29714558/",
        year: "2018",
      },
      {
        id: "ctti-recruitment",
        title: "CTTI Recommendations: Planning for Successful Trial Recruitment",
        publisher: "Clinical Trials Transformation Initiative",
        url: "https://ctti-clinicaltrials.org/wp-content/uploads/2021/06/CTTI_Recruitment_Recs.pdf",
        year: "2018",
      },
    ],
    related: [
      { label: "Implementation: how Bond connects to your systems", href: "/implementation" },
      { label: "Site activation", href: "/glossary/site-activation" },
      { label: "Site feasibility assessment", href: "/glossary/site-feasibility" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "tcpa",
    term: "Telephone Consumer Protection Act (TCPA)",
    short:
      "The US law that restricts autodialed, prerecorded and artificial-voice calls and texts to phones without prior consent, including calls made with AI voices.",
    body: [
      {
        type: "p",
        text: "The Telephone Consumer Protection Act of 1991 makes it unlawful to call a cell phone using an automatic telephone dialing system or an artificial or prerecorded voice without the prior express consent of the called party, unless the call is for emergency purposes. The statute lets people recover $500 in damages for each violation, and a court may triple that for willful or knowing violations.{{cite:usc-227}}",
      },
      {
        type: "p",
        text: "In February 2024 the FCC confirmed that the TCPA's restrictions on artificial or prerecorded voice cover current AI technologies that generate human voices, so AI voice calls need prior express consent unless an exemption applies.{{cite:fcc-24-17}} FCC rules also let people revoke consent by any reasonable means, including replying stop, and require callers to honor revocation within a reasonable time not to exceed 10 business days.{{cite:fcc-24-24}}",
      },
      {
        type: "p",
        text: "Practical note: for trial outreach, document how each phone number and consent were obtained, disclose AI assistance, and honor opt-outs across every channel. Review the approach with counsel. [Engage](/engage) tells patients AI assistance is used and lets them reach a person at any time, by live transfer to a coordinator or a human callback, whichever the site prefers; see also the [post on TCPA and AI outreach](/blog/tcpa-ai-outreach-2026).",
      },
    ],
    sources: [
      {
        id: "usc-227",
        title: "47 U.S. Code 227 Restrictions on use of telephone equipment",
        publisher: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/uscode/text/47/227",
        year: "1991",
      },
      {
        id: "fcc-24-17",
        title: "Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, Declaratory Ruling (FCC 24-17)",
        publisher: "Federal Communications Commission",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
        year: "2024",
      },
      {
        id: "fcc-24-24",
        title: "Rules and Regulations Implementing the Telephone Consumer Protection Act of 1991, Report and Order (FCC 24-24)",
        publisher: "Federal Communications Commission",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf",
        year: "2024",
      },
    ],
    related: [
      { label: "Engage: voice and text outreach", href: "/engage" },
      { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates" },
      { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach" },
    ],
    lastUpdated: "2026-09-24",
  },
  {
    slug: "unstructured-clinical-data",
    term: "Unstructured clinical data",
    short:
      "Clinical information recorded as free text, images or scanned documents rather than coded fields, such as progress notes, pathology reports and imaging reads.",
    body: [
      {
        type: "p",
        text: "Unstructured data are clinical records that do not fit predefined fields: progress notes, consult letters, pathology and radiology reports, discharge summaries and scanned outside records. A 2023 systematic review in PLOS Digital Health notes that most digital data in healthcare are unstructured and often not readily accessible for research, lacking standardization and needing significant preprocessing.{{cite:plos-unstructured}} A widely repeated estimate, drawn from industry sources, puts the unstructured share of medical data at about 80%.{{cite:hir-2019}}",
      },
      {
        type: "p",
        text: "For trial eligibility, the deciding evidence is often in that text: cancer stage and biomarker results in a pathology report, ejection fraction in an echo report, prior therapies and the reasons they stopped in clinic notes. Screening that reads only diagnosis codes and structured labs will miss eligible patients and pass along ineligible ones.",
      },
      {
        type: "p",
        text: "Practical note: when evaluating a screening tool, ask which document types it reads and whether it shows the passage that supports each criterion decision. [Identify](/identify) reads structured and unstructured records and shows criterion-to-evidence rationale. See also the [post on unstructured data as eligibility evidence](/blog/unstructured-data-eligibility-evidence).",
      },
    ],
    sources: [
      {
        id: "plos-unstructured",
        title: "Challenges and best practices for digital unstructured data enrichment in health research: A systematic narrative review",
        publisher: "PLOS Digital Health, via PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/37819910/",
        year: "2023",
      },
      {
        id: "hir-2019",
        title: "Managing Unstructured Big Data in Healthcare System",
        publisher: "Healthcare Informatics Research, via PMC",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6372467/",
        year: "2019",
      },
    ],
    related: [
      { label: "Identify: LLM-based EHR screening", href: "/identify" },
      { label: "EHR phenotyping", href: "/glossary/ehr-phenotyping" },
      { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist" },
    ],
    lastUpdated: "2026-09-21",
  },
  {
    slug: "waiver-of-authorization",
    term: "Waiver of HIPAA authorization",
    short:
      "IRB or Privacy Board approval to use or disclose protected health information for research without each patient's signed authorization, in whole or in part.",
    body: [
      {
        type: "p",
        text: "HIPAA allows a covered entity to use or disclose PHI for research without individual authorization when an IRB or Privacy Board has approved a waiver or alteration of authorization, in whole or in part.{{cite:ecfr-164-512}} A partial waiver can be limited to recruitment steps, such as identifying and contacting potential participants, with signed authorization collected later at consent.",
      },
      {
        type: "p",
        text: "The board must document three findings:{{cite:ecfr-164-512}}",
      },
      {
        type: "ul",
        items: [
          "The use of PHI involves no more than minimal risk to privacy, based on an adequate plan to protect identifiers, a plan to destroy them at the earliest opportunity unless keeping them is justified, and written assurances against reuse or further disclosure.",
          "The research could not practicably be conducted without the waiver.",
          "The research could not practicably be conducted without access to the PHI.",
        ],
      },
      {
        type: "p",
        text: "Why it matters: records-based recruitment, such as screening an EHR population for a trial, often depends on this pathway, because authorization cannot practicably be collected from patients before they are identified. Practical note: name the exact data elements, who sees them and how long they are kept in the request. [Security](/security) covers how Bond limits and logs access to PHI.",
      },
    ],
    sources: [
      {
        id: "ecfr-164-512",
        title: "45 CFR 164.512(i) Uses and disclosures for research purposes",
        publisher: "eCFR (HHS Office for Civil Rights)",
        url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.512",
        year: "2026",
      },
    ],
    related: [
      { label: "Security and compliance at Bond", href: "/security" },
      { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach" },
      { label: "HIPAA authorization", href: "/glossary/hipaa-authorization" },
    ],
    lastUpdated: "2026-09-21",
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossary.find((t) => t.slug === slug);
}
