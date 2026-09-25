import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/unstructured-data-eligibility-evidence",
  category: "blog",
  title: "Why eligibility screening needs unstructured clinical data",
  description:
    "Structured EHR queries settle only part of a protocol. What studies measured about unstructured clinical data in eligibility screening, and what sites can do.",
  keywords: [
    "unstructured clinical data eligibility screening",
    "unstructured EHR data clinical trials",
    "structured EHR query eligibility criteria",
    "clinical notes trial recruitment",
  ],
  eyebrow: "Blog",
  h1: "Eligibility evidence often lives in the notes, not the codes",
  intro:
    "Ask a data warehouse for patients with a diagnosis code and a recent lab, and you get a list. Ask whether a patient's heart failure is symptomatic, why a drug was stopped, or whether disease progressed on the last scan, and the answer is often in a clinical note. Here is what studies have measured, and what to do about it.",
  summary: "What studies measured about trial criteria that only clinical notes can answer, and what that means for EHR queries.",
  lastUpdated: "2026-09-21",
  blog: { date: "2026-09-21", author: "Bond Health", readingMinutes: 5 },
  heroCta: { label: "See it on your protocol", href: "/book-a-demo", secondaryLabel: "Read about Identify", secondaryHref: "/identify" },
  sections: [
    {
      id: "the-80-percent-figure",
      heading: "Where does the 80 percent figure come from?",
      blocks: [
        {
          type: "p",
          text: "Articles on this topic often open with the claim that 80 percent of healthcare data is unstructured. The number is older and vaguer than it looks. A widely cited origin is a 1998 Merrill Lynch report about data in organizations generally, which said \"some estimates run as high as 80%\" with no clear source.{{cite:wiki-unstructured}} A 2019 Healthcare Informatics Research editorial repeats the figure for medical data, citing a 2015 trade article rather than a measurement.{{cite:hir-2019}}",
        },
        {
          type: "p",
          text: "For a site, the useful question is how many of a protocol's criteria a structured query can settle alone. That has been measured.",
        },
      ],
    },
    {
      id: "criteria-that-need-notes",
      heading: "How many eligibility criteria need a clinical note?",
      blocks: [
        {
          type: "p",
          text: "Two studies counted criteria directly. In a 2014 Ohio State study of chronic lymphocytic leukemia (CLL) and prostate cancer trials, unstructured data was essential to resolving 59 percent of the CLL criteria and 77 percent of the prostate cancer criteria.{{cite:osu-2014}} A 2024 preprint on the COPILOT-HF heart failure trial at Brigham and Women's Hospital reports that structured EHR data could determine 5 of 6 inclusion criteria but only 5 of 17 exclusion criteria, leaving the rest to chart review by study staff.{{cite:copilot-hf-2024}}",
        },
        {
          type: "stats",
          items: [
            { value: "59%", label: "of CLL trial criteria needed unstructured data", cite: "osu-2014" },
            { value: "77%", label: "of prostate cancer trial criteria needed unstructured data", cite: "osu-2014" },
            { value: "13 of 23", label: "COPILOT-HF criteria structured EHR data could not determine (1 inclusion, 12 exclusion)", cite: "copilot-hf-2024" },
          ],
        },
        {
          type: "p",
          text: "The COPILOT-HF split follows how many protocols are written. Inclusion criteria often name a diagnosis and a lab value, which are coded. Exclusions ask about history, severity and prior treatment, which are usually written in prose.",
        },
      ],
    },
    {
      id: "criteria-examples",
      heading: "Which criteria live in the note rather than the code?",
      blocks: [
        {
          type: "p",
          text: "Often the structured record holds a hint and the note holds the answer.",
        },
        {
          type: "table",
          caption: "Illustrative examples: where the deciding evidence usually is",
          columns: ["Criterion as written", "What a structured query sees", "Where the answer usually is"],
          rows: [
            ["Symptomatic heart failure", "A heart failure diagnosis code and an echocardiogram", "Notes describing symptoms and functional class"],
            ["ECOG performance status of 0 or 1", "Often nothing, unless the site records it as a discrete field", "Oncology visit notes"],
            ["Progression on prior platinum-based therapy", "Orders for carboplatin or cisplatin", "Imaging reports and oncology notes that state progression and when"],
            ["Stopped a prior drug for intolerance, not lack of effect", "An ended medication order with no reason attached", "The visit note that explains why"],
            ["No myocardial infarction within the past three months", "Coded encounter dates, which may not match the event date", "Discharge summaries and notes with the event date"],
            ["Willing to use contraception", "Nothing", "The patient"],
          ],
        },
        {
          type: "p",
          text: "Some criteria, like the last one, cannot be settled from any record and belong on the [pre-screening call](/guides/pre-screening-vs-screening).",
        },
      ],
    },
    {
      id: "what-structured-queries-miss",
      heading: "What does a structured query miss?",
      blocks: [
        {
          type: "p",
          text: "A query built on codes, labs and medication lists fails in two directions. It flags patients whose notes rule them out, and it skips patients whose eligibility is written down but never coded.",
        },
        {
          type: "ul",
          items: [
            "**False positives.** At Brigham and Women's Hospital, a rule-based EHR system flagged heart failure patients for guideline-directed therapy (a care program, not a trial). Of 5,460 flagged patients screened by hand, 1,754 (32.1 percent) were truly eligible. Over 38 percent of false positives came from misjudging symptomatic heart failure and medication history, and the 2024 paper calls for processing clinical notes.{{cite:bwh-hf-2024}}",
            "**Low precision.** In a 2009 Columbia evaluation of 125 patients for the ACCORD trial, electronic screening excluded ineligible patients with 100 percent negative predictive accuracy, but only 13 percent of the patients it flagged were eligible.{{cite:columbia-accord-2009}}",
            "**Silent misses.** A patient whose progression or prior therapy appears only in a note never matches a code-based filter, so nobody opens the chart, and the miss never reaches a screening log.",
          ],
        },
      ],
    },
    {
      id: "are-notes-reachable",
      heading: "Can software reach the notes at all?",
      blocks: [
        {
          type: "p",
          text: "Increasingly, yes. USCDI version 1, the data set certified EHR APIs had to support, includes a Clinical Notes class with eight note types, from history and physical to pathology and imaging narratives.{{cite:uscdi-v1}} Certified developers had until December 31, 2022 to roll out these FHIR APIs, and ONC reported in February 2023 that more than 95 percent met the deadline.{{cite:onc-cures-milestone}}",
        },
        {
          type: "p",
          text: "A site's IT and privacy teams still decide which notes a vendor may read. The harder part is reading: tying each note to the right criterion and time window, and showing a coordinator the sentence behind each decision. The [EHR recruitment guide](/guides/ehr-for-recruitment) covers interface and privacy options.",
        },
      ],
    },
    {
      id: "cost-of-reading-notes",
      heading: "What does manual screening cost a site?",
      blocks: [
        {
          type: "p",
          text: "When a query cannot answer a criterion, someone reads the chart. A 2012 study that tracked screening effort at one academic cancer center found that the largest share of eligibility evaluations (35.8 percent) took 10 to 30 minutes, and more than 10 percent took 2 to 4 hours. Finding, screening and enrolling one patient took an average of 3.4 to 8.8 staff hours depending on study phase, and screening cost $129.15 to $336.48 per enrolled patient, largely nonreimbursed.{{cite:vcu-2012}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "Why the cost compounds",
          text: "Every criterion a query cannot settle means chart review for every candidate it returns. Low precision multiplies that: in the ACCORD example, 13 percent of flagged patients were eligible, so most reviewed charts were dead ends.{{cite:columbia-accord-2009}}",
        },
      ],
    },
    {
      id: "what-sites-should-do",
      heading: "What should a site do about it?",
      blocks: [
        {
          type: "p",
          text: "Treat the structured query as a first pass, not the screen, and plan for the notes on purpose.",
        },
        {
          type: "checklist",
          items: [
            "Sort each criterion into three groups: settled by coded data, by notes or reports, or only by talking to the patient.",
            "Build the candidate pool from the coded group, but never let a missing code exclude someone on a criterion that lives in notes.",
            "For each note-based criterion, name the documents that count as evidence, such as pathology reports for receptor status or imaging reports for progression.",
            "Track screen-failure reasons. If they cluster on criteria the notes could have answered, the pre-screen is under-reading the chart ([more on screen failure](/guides/reduce-screen-failure)).",
            "When evaluating software, ask to see the note sentence behind each criterion decision, not only a score.",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond handles this",
          text: "The [Identify](/identify) stage reads structured and unstructured records against each criterion, ranks candidates, and shows the evidence behind each decision so a coordinator can check it. Bond's website reports over 90 percent matching accuracy and at least 50 percent less chart review.{{cite:bond-site}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol. We will walk through which of its criteria depend on notes and how Bond reads them.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Are structured EHR queries still worth running?",
      a: "Yes, as a first pass. In the small ACCORD evaluation, the query excluded ineligible patients with 100 percent negative predictive accuracy, so reviewers only opened flagged charts.{{cite:columbia-accord-2009}} The mistake is treating its output as the eligible list.",
    },
    {
      q: "Does software that reads notes remove the need for coordinator review?",
      a: "No. The COPILOT-HF authors recommend final clinician review before patient engagement.{{cite:copilot-hf-2024}} Bond shows the evidence behind each criterion decision so a coordinator can check it.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "wiki-unstructured",
      title: "Unstructured data",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Unstructured_data",
      year: "2024",
      note: "Quote: \"In 1998, Merrill Lynch said \"unstructured data comprises the vast majority of data found in an organization, some estimates run as high as 80%.\" It is unclear what the source of this number is, but nonetheless it is accepted by some.\"",
    },
    {
      id: "hir-2019",
      title: "Managing Unstructured Big Data in Healthcare System",
      publisher: "Healthcare Informatics Research",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6372467/",
      year: "2019",
      note: "Editorial. Quote: \"about 80% of medical data remains unstructured and untapped after it is created (e.g., text, image, signal, etc.)\". The figure cites reference 2, a 2015 HIT Consultant article.",
    },
    {
      id: "osu-2014",
      title: "How essential are unstructured clinical narratives and information fusion to clinical trial recruitment?",
      publisher: "AMIA Joint Summits on Translational Science Proceedings (Raghavan P et al., Ohio State University)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25717416/",
      year: "2014",
      note: "Quote: \"Unstructured data is essential to solving 59% of the CLL trial criteria and 77% of the prostate cancer trial criteria.\" Abstract read from the PubMed record via NCBI E-utilities, September 2026. PMCID PMC4333685.",
    },
    {
      id: "copilot-hf-2024",
      title: "Retrieval Augmented Generation Enabled Generative Pre-Trained Transformer 4 (GPT-4) Performance for Clinical Trial Screening",
      publisher: "medRxiv preprint (Unlu O et al., Brigham and Women's Hospital)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38370719/",
      year: "2024",
      note: "Quote: \"Currently, structured data in the EHR can only be used to determine 5 out of 6 inclusion and 5 out of 17 exclusion criteria.\" Also: \"set up appropriate mitigation strategies such as final clinician review before patient engagement.\" Abstract read from the PubMed record via NCBI E-utilities, September 2026. DOI 10.1101/2024.02.08.24302376.",
    },
    {
      id: "bwh-hf-2024",
      title: "Identifying Patients with Heart Failure Eligible for Guideline-Directed Medical Therapy",
      publisher: "Population Health Management (Subramaniam S et al., Brigham and Women's Hospital)",
      url: "https://pubmed.ncbi.nlm.nih.gov/39630562/",
      year: "2024",
      note: "Guideline-directed therapy eligibility, not trial screening. Quote: \"A total 5460 patients were manually screened, of which 1754 were found to be truly eligible with an accuracy of 32.1%. An analysis of the false-positive cases showed that over 38% of the false positives were due to incorrect determination of symptomatic HF and medication history of the patients.\" Also: \"there is a need to further optimize the system by integrating processing of clinical notes.\"",
    },
    {
      id: "columbia-accord-2009",
      title: "Electronic screening improves efficiency in clinical trial recruitment",
      publisher: "Journal of the American Medical Informatics Association (Thadani SR et al., Columbia University)",
      url: "https://pubmed.ncbi.nlm.nih.gov/19717797/",
      year: "2009",
      note: "Quote: \"For all of these 125 patients, the performance of E-screening was compared with investigator review. E-screening achieved a negative predictive accuracy of 100% (95% CI: 98-100%), a positive predictive accuracy of 13% (95% CI: 6-13%), a sensitivity of 100% (95% CI: 45-100%), and a specificity of 84% (95% CI: 82-84%).\" Abstract read from the PubMed record via NCBI E-utilities, September 2026. DOI 10.1197/jamia.M3119.",
    },
    {
      id: "uscdi-v1",
      title: "U.S. Core Data for Interoperability (USCDI) Version 1",
      publisher: "ASTP/ONC Interoperability Standards Platform",
      url: "https://isp.healthit.gov/sites/default/files/inline-files/USCDI-v1-2019.pdf",
      year: "2020",
      note: "Quote: \"Clinical Notes • Consultation Note • Discharge Summary Note • History & Physical • Imaging Narrative • Laboratory Report Narrative • Pathology Report Narrative • Procedure Note • Progress Note\"",
    },
    {
      id: "onc-cures-milestone",
      title: "Achieving a Major Milestone: Health IT Developers Certify to Cures Update",
      publisher: "HealthIT.gov blog (ASTP/ONC)",
      url: "https://healthit.gov/blog/interoperability/achieving-a-major-milestone-health-it-developers-certify-to-cures-update/",
      year: "2023",
      note: "Quote: \"More than 95 percent of Certified Health IT developers met the compliance deadline to update and provide their customers with new technology.\"",
    },
    {
      id: "vcu-2012",
      title: "Effort Required in Eligibility Screening for Clinical Trials",
      publisher: "Journal of Oncology Practice",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Single academic cancer center (Virginia Commonwealth University). Quote: \"The largest proportion of evaluations (35.8%) required 10 to 30 minutes, but more than 10% required between 2 to 4 hours for completion.\" Also: \"The average number of hours spent to find, screen, and enroll a patient varied from 3.4 to 8.8 hours\". Also: \"The cost of eligibility screening ranged by study phase from $129.15 to $336.48 per enrolled patient.\" and \"the largely nonreimbursed costs of eligibility screening\". 2012 dollars.",
    },
    {
      id: "bond-site",
      title: "Bond Health: platform overview, FAQ and pricing",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads notes and coded data and shows the evidence for each criterion." },
    { label: "Using the EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "Interfaces, permissions and what each EHR tool can and cannot query." },
    { label: "Unstructured clinical data", href: "/glossary/unstructured-clinical-data", description: "A short definition with examples of narrative record types." },
    { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist", description: "A manual checklist for the criteria that live in notes." },
    { label: "Reducing screen failure", href: "/guides/reduce-screen-failure", description: "Where screen failures come from and how pre-screening can catch them." },
  ],
};

export default page;
