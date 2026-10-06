import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/oncology-biomarker-trial-matching",
  category: "blog",
  title: "Matching patients to biomarker-driven oncology trials",
  description:
    "Where patients drop out between NGS testing and a genomically matched trial, why reports and rare alterations make matching hard, and what sites can do.",
  keywords: [
    "biomarker-driven oncology trial matching",
    "NGS report clinical trial matching",
    "genomically matched trial enrollment",
    "rare alteration oncology trial recruitment",
  ],
  eyebrow: "Blog",
  h1: "Biomarker-driven oncology trials: why matching patients to NGS results is still hard",
  intro:
    "A biomarker-selected trial can only enroll patients whose tumor was sequenced, whose report someone can search, and who are still eligible when a slot is open. Each step loses patients: in NCI-MATCH, 37.6% of sequenced patients had an alteration that matched a treatment arm, but 17.8% were assigned to one.{{cite:flaherty-2020}} Here is where the losses happen, and what a site can do about each.",
  summary: "Where patients drop out between NGS testing and a genomically matched trial, and what sites can do at each step.",
  lastUpdated: "2026-11-20",
  blog: { date: "2026-11-20", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Oncology trial recruitment", secondaryHref: "/oncology" },
  sections: [
    {
      id: "matched-trial-funnel",
      heading: "How many sequenced patients end up on a matched trial?",
      blocks: [
        {
          type: "p",
          text: "Few, even in programs built for matching. NCI-MATCH registered 6,391 patients at 1,117 sites between August 2015 and May 2017, and sequenced 5,540 tumors centrally.{{cite:flaherty-2020}}",
        },
        {
          type: "table",
          caption: "NCI-MATCH screening funnel, share of 5,540 sequenced patients",
          columns: ["Step", "Share", "What removed patients"],
          rows: [
            ["Alteration matching a treatment arm", "37.6%{{cite:flaherty-2020}}", "No targetable alteration on the panel"],
            ["Matched after exclusions", "26.4%", "Prior treatment and cancer-type exclusions"],
            ["Assigned to an arm", "17.8%", "Arm closed, full or capped for that histology"],
            ["Treated on an arm", "70% of those assigned", "Not reported in detail"],
          ],
        },
        {
          type: "p",
          text: "A single cancer center saw the same gap. At Memorial Sloan Kettering, 37% of patients sequenced with MSK-IMPACT had a clinically relevant alteration, and 11% of the first 5,009 tested enrolled on a genomically matched trial.{{cite:zehir-2017}} The difference is not mainly biology. It is reports nobody searched, trials that were full and patients who were no longer eligible when a slot opened.",
        },
      ],
    },
    {
      id: "who-gets-tested",
      heading: "How many patients are sequenced in the first place?",
      blocks: [
        {
          type: "p",
          text: "More than before, but not everyone. Among 27,050 patients with advanced non-small cell lung cancer in a national EHR-derived database, 61.4% received NGS. One-year testing rose from 41.9% for patients diagnosed in 2018 to 74.5% for those diagnosed in 2022. In metastatic breast cancer it was 26.2% at one year.{{cite:hage-chehade-2026}}",
        },
        {
          type: "p",
          text: "The same study found longer waits for testing among Black and Hispanic patients, patients with low socioeconomic status, and those covered by Medicaid or Medicare in some cancers.{{cite:hage-chehade-2026}} An untested patient never reaches a matching tool, so a site's candidate list should include a \"no NGS on file\" flag for cancers where testing is standard.",
        },
      ],
    },
    {
      id: "reports-hard-to-search",
      heading: "Why are NGS reports hard to search?",
      blocks: [
        {
          type: "p",
          text: "Most results arrive as documents, not data. Penn Medicine's genomics team wrote in 2021 that \"most genetic results are reported in unstructured PDF documents.\"{{cite:lau-min-2021}} A 2019 review by authors from Harvard, Vanderbilt and ASCO calls for sequencing laboratories to commit to providing structured genomic data for clinical use.{{cite:conway-2019}} Even Dana-Farber's matching platform, MatchMiner, has staff enter genomic and clinical features from external reports by hand.{{cite:klein-2022}}",
        },
        {
          type: "p",
          text: "Interpretation adds a second filter. In MD Anderson's decision-support program, over half of the alterations annotated were of unknown significance or not actionable. Trial enrollment was 27.6% for patients with actionable or potentially actionable alterations, against 11.8% for unknown and 3% for non-actionable ones.{{cite:johnson-2017}}",
        },
        {
          type: "checklist",
          items: [
            "Match on the gene and the specific change the protocol names, such as an exon, codon or fusion partner, not on the gene alone.",
            "Record the report date, the specimen (tissue or blood) and the lab, since protocols differ on what they accept.",
            "Keep variants of unknown significance on file. Reclassification can make an unknown variant actionable later.",
          ],
        },
      ],
    },
    {
      id: "rare-alterations",
      heading: "What makes rare alterations so hard to enroll?",
      blocks: [
        {
          type: "p",
          text: "Their frequency. In the AACR GENIE database, BRAF V600E appeared in 2.9% of samples, NTRK fusions in 0.24% and RET fusions in 0.26%, while 15.2% had high tumor mutational burden.{{cite:gouda-2023}} In NCI-MATCH, no treatment arm whose target had a prevalence below 1.5% reached its accrual goal, which covered 18 arms; NCI then began accepting results from outside academic and commercial labs, confirmed with its own assays.{{cite:flaherty-2020}}",
        },
        {
          type: "p",
          text: "FDA's final guidance on low-frequency molecular subsets allows sponsors to group patients with different alterations when there is a strong scientific rationale for similar responses, and notes that the clinical trial assay itself \"may limit who is eligible.\"{{cite:fda-lowfreq-2018}} For a site, the practical point is simple: a rare-alteration trial needs every sequenced patient searched, including those tested years ago and those tested elsewhere.",
        },
      ],
    },
    {
      id: "do-alerts-work",
      heading: "Do automated match alerts raise enrollment?",
      blocks: [
        {
          type: "p",
          text: "Matching alone does not. Dana-Farber's MatchMiner facilitated 166 trial consents for 159 patients over five years, 20% of all possible consents, and those patients consented 55 days earlier than others.{{cite:klein-2022}} But genomics alone generated 60,199 patient-trial matches for 2,150 patients in one pilot, far more than staff can review. A model predicting treatment change cut the matches needing review by 95%. Of 74 patients whose oncologists were then contacted, 5 enrolled, and a trial with no open slots accounted for 14% of the reasons flagged matches went no further.{{cite:kehl-2024}}",
        },
        {
          type: "p",
          text: "A randomized trial of 20,707 patients then tested emailing oncologists lists of genomically matched trials when AI read of imaging reports suggested progression. Enrollment was 2.20% with notifications and 2.03% without, a difference that was not significant.{{cite:mazor-2025}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "What the alert studies suggest",
          text: "Timing matters, since a match is only useful when treatment is about to change. Slots matter, since a full arm wastes the match. And an email to a busy oncologist is not follow-up: in the pilot, 10 of the 74 patients whose oncologists the team contacted had a trial consult.{{cite:kehl-2024,mazor-2025}}",
        },
      ],
    },
    {
      id: "consent-and-prescreening",
      heading: "What consent does biomarker pre-screening need?",
      blocks: [
        {
          type: "p",
          text: "It depends on whose test it is. FDA's information sheet says consent must come before any procedure done solely to determine research eligibility, while results of procedures done as part of medical care may be used for eligibility without first obtaining consent.{{cite:fda-screening-1998}} So a site can check existing clinical NGS results against a protocol under its usual HIPAA and IRB rules, but a sponsor's research-only central test needs consent first, often a separate pre-screening consent. See [HIPAA and IRB rules for outreach](/guides/irb-hipaa-patient-outreach). This is not legal advice.",
        },
      ],
    },
    {
      id: "what-sites-should-do",
      heading: "What should a site do to match more biomarker-positive patients?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Make every report searchable",
              text: "Include outside lab PDFs and scanned reports, and re-search the whole pool each time a biomarker trial opens.",
            },
            {
              title: "Flag untested patients",
              text: "For cancers where NGS is standard, list patients with no report on file and raise testing with their oncologist.",
            },
            {
              title: "Re-run matches at treatment change",
              text: "Progression on imaging, a new line of therapy or a stopped drug is the moment a match becomes actionable.",
            },
            {
              title: "Check slots before calling",
              text: "Confirm the arm or cohort is open for that histology before contacting a patient or oncologist.",
            },
            {
              title: "Give each match a named owner",
              text: "A coordinator who calls the oncologist and the patient turns a match into a consult; a notification alone did not.{{cite:mazor-2025}}",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's [Identify](/identify) stage reads pathology, radiology and molecular reports alongside clinical notes, prescriptions and labs, and shows criterion-by-criterion evidence for every match, so a coordinator sees the alteration, the report date and the progression note behind each candidate. It connects to OncoEMR and other major EHRs.{{cite:bond-site,bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a biomarker-selected protocol. We will show how Bond reads your molecular reports against it.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can a site use a patient's existing NGS report to pre-screen for a trial?",
      a: "Generally yes, under the site's HIPAA and IRB rules for reviewing records, because results from routine care may be used for eligibility without first obtaining consent. A research-only test needs consent first.{{cite:fda-screening-1998}}",
    },
    {
      q: "What share of sequenced patients should a site expect to enroll on a matched trial?",
      a: "Published programs report low figures: 17.8% of sequenced NCI-MATCH patients were assigned to an arm, and 11% of the first 5,009 patients sequenced at Memorial Sloan Kettering enrolled on a genomically matched trial.{{cite:flaherty-2020,zehir-2017}}",
    },
    {
      q: "Do protocols accept local NGS results?",
      a: "Many do, but check each one. NCI-MATCH moved to accepting outside lab results for rare targets and confirmed them with its own assays.{{cite:flaherty-2020}}",
    },
  ],
  sources: [
    {
      id: "flaherty-2020",
      title: "Molecular Landscape and Actionable Alterations in a Genomically Guided Cancer Clinical Trial: National Cancer Institute Molecular Analysis for Therapy Choice (NCI-MATCH)",
      publisher: "Journal of Clinical Oncology (Flaherty KT et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7676882/",
      year: "2020",
      note: "Read October 2026 via NCBI full text. Quotes: \"NCI-MATCH opened on August 12, 2015; 1,117 sites registered 6,391 patients until registration for centralized molecular screening closed on May 22, 2017\"; \"Of the 5,954 samples submitted, 5,540 (93.0%) were sequenced successfully.\"; \"Molecular alterations for assignment to an NCI-MATCH subprotocol were present in 37.6% of patients\"; \"When molecular, prior treatment, and specific cancer exclusions were accounted for, the match rate was 26.4%. Lack of subprotocol availability ... led to a treatment assignment rate of 17.8% (n = 985 of 5,540\"; \"Seventy percent of assigned patients received treatment on a subprotocol.\"; \"No subprotocol whose targeted alteration had a prevalence of < 1.5% reached the accrual goal in this phase of the trial (18 subprotocols).\"; \"we have now used external academic and commercial sequencing platforms that are being used in routine practice, to continue accrual in NCI-MATCH, and will confirm the outside NGS result with the NCI-MATCH assays.\"",
    },
    {
      id: "zehir-2017",
      title: "Mutational landscape of metastatic cancer revealed from prospective clinical sequencing of 10,000 patients",
      publisher: "Nature Medicine (Zehir A et al., Memorial Sloan Kettering), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5461196/",
      year: "2017",
      note: "Quote: \"We observed that 37% of patients harbored a clinically relevant alteration, and 11% of the first 5,009 patients to receive MSK-IMPACT testing were subsequently enrolled on a genomically matched clinical trial.\"",
    },
    {
      id: "hage-chehade-2026",
      title: "Trends and Disparities in the Use of Next-Generation Sequencing in Patients With Cancer in the United States",
      publisher: "JAMA Network Open (Hage Chehade C et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13058762/",
      year: "2026",
      note: "Retrospective cohort, 280 US cancer clinics, EHR-derived database, diagnoses 2018 to 2022; 27,050 patients with advanced NSCLC. Quotes: \"A total of 16 599 (61.4%) received NGS after aNSCLC diagnosis.\"; \"For patients diagnosed in 2018, cumulative incidence was 41.9% (95% CI, 40.7%-43.1%) at 1 year\"; \"For those diagnosed in 2022, cumulative incidence was 74.5% (95% CI, 72.8%-76.0%) at 1 year\"; \"The cumulative incidence of NGS was 26.2% (95% CI, 25.4%-27.0%) at 1 year after mBC diagnosis\"; \"Patients with low socioeconomic status, Black or Hispanic patients, and those covered by Medicaid or Medicare experienced significantly longer time to testing in some of these cancers\". The PubMed abstract describes the cohort as patients \"who underwent NGS\", which conflicts with the full text; the full-text wording is used here.",
    },
    {
      id: "lau-min-2021",
      title: "Real-world integration of genomic data into the electronic health record: the PennChart Genomics Initiative",
      publisher: "Genetics in Medicine (Lau-Min KS et al., Penn Medicine), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8026392/",
      year: "2021",
      note: "Quotes: \"Currently, most genetic results are reported in unstructured PDF documents.\"; \"it is preferable to store them in discrete, computable format to enable electronic searching, clinical decision support (CDS), and secondary use\". Mostly germline genetics.",
    },
    {
      id: "conway-2019",
      title: "Next-Generation Sequencing and the Clinical Oncology Workflow: Data Challenges, Proposed Solutions, and a Call to Action",
      publisher: "JCO Precision Oncology (Conway JR, Warner JL, Rubinstein WS, Miller RS; Harvard, Vanderbilt and ASCO)",
      url: "https://pubmed.ncbi.nlm.nih.gov/32923847/",
      year: "2019",
      note: "Abstract read via PubMed. Quotes: \"the electronic health records of today seem ill suited for managing genomic data\"; \"along with a commitment on the part of sequencing laboratories to consistently provide structured genomic data for clinical use.\" Narrative review.",
    },
    {
      id: "klein-2022",
      title: "MatchMiner: an open-source platform for cancer precision medicine",
      publisher: "npj Precision Oncology (Klein H et al., Dana-Farber Cancer Institute), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9537311/",
      year: "2022",
      note: "Built and evaluated by the same center; March 2016 to March 2021. Quotes: \"MatchMiner facilitated 166 trial consents (MatchMiner consents, MMC) for 159 patients\"; \"We found MMC consented to trials 55 days (22%) earlier than non-MMC.\"; \"MatchMiner facilitated 20% (166 out of 847) of all possible MMC.\"; \"Genomic and clinical features from the external report are inputted manually and all available trials are searched.\"",
    },
    {
      id: "johnson-2017",
      title: "Clinical Use of Precision Oncology Decision Support",
      publisher: "JCO Precision Oncology (Johnson A et al., MD Anderson Cancer Center)",
      url: "https://pubmed.ncbi.nlm.nih.gov/30320296/",
      year: "2017",
      note: "Abstract read via PubMed. Quotes: \"Trial enrolment was significantly higher for patients with actionable/potentially actionable alterations (92/333, 27.6%) than those with unknown (16/136, 11.8%) and non-actionable (2/66, 3%) alterations\"; \"Over half of alterations annotated were of unknown significance or non-actionable.\"",
    },
    {
      id: "gouda-2023",
      title: "Tumor-Agnostic Precision Medicine from the AACR GENIE Database: Clinical Implications",
      publisher: "Clinical Cancer Research (Gouda MA et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10390861/",
      year: "2023",
      note: "Quote from the results: \"4,912 samples harbored BRAF V600E mutations (2.9%), 410 harbored NTRK fusions (0.24% of all samples and 1.6% of samples profiled for structural variants), and 396 harbored RET fusions (0.26% of all samples and 1.5% of samples profiled for structural variants). In addition, 25,527 samples (15.2%) were classified as having high TMB.\" The abstract swaps the NTRK and RET percentages; the results text is used here.",
    },
    {
      id: "fda-lowfreq-2018",
      title: "Developing Targeted Therapies in Low-Frequency Molecular Subsets of a Disease: Guidance for Industry",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/developing-targeted-therapies-low-frequency-molecular-subsets-disease",
      year: "2018",
      note: "Final guidance, October 2018. Quotes from the PDF: \"the FDA will accept grouping patients with different molecular alterations if it is reasonable to expect that the grouped patients will have similar pharmacological responses based on a strong scientific rationale\"; \"The FDA recognizes that the clinical trial assay method may limit who is eligible for clinical trials.\"",
    },
    {
      id: "kehl-2024",
      title: "Identifying Oncology Clinical Trial Candidates Using Artificial Intelligence Predictions of Treatment Change: A Pilot Implementation Study",
      publisher: "JCO Precision Oncology (Kehl KL et al., Dana-Farber Cancer Institute), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10965204/",
      year: "2024",
      note: "Single-center pilot, no control group. Quotes: \"60,199 patient-trial matches were generated for 2,150 patients on the basis of genomics alone. Of these, 3,168 patient-trial matches (5%) corresponding to 525 patients were flagged for ONN review by our model, representing a 95% reduction\"; \"the trial had no slots (14%)\"; \"Of 74 patients whose oncologists were contacted, 10 (14%) had a consult regarding a trial and five (7%) enrolled.\"",
    },
    {
      id: "mazor-2025",
      title: "Clinical Trial Notifications Triggered by Artificial Intelligence-Detected Cancer Progression: A Randomized Trial",
      publisher: "JAMA Network Open (Mazor T et al., Dana-Farber Cancer Institute), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12013351/",
      year: "2025",
      note: "Quotes: \"Of 20 707 patients randomized ..., 13 802 were randomized to the intervention arm and 6905 to the control arm. The intervention had no significant impact on the trial enrollment rate (intervention, 2.20% [95% CI, 1.97%-2.46%]; control, 2.03% [95% CI, 1.72%-2.39%] ... P = .41)\"; \"The intervention consisted of emailing lists of genomically matched trials to physicians treating patients who became trial ready\"; notifications \"for patients with tumor progression based on AI interpretation of imaging reports did not increase therapeutic trial enrollment.\"",
    },
    {
      id: "fda-screening-1998",
      title: "Screening Tests Prior to Study Enrollment: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
      year: "1998",
      note: "Information sheet, January 1998, final. Quotes: \"informed consent must be obtained prior to initiation of any clinical procedures that are performed solely for the purpose of determining eligibility for research\"; \"Procedures that are to be performed as part of the practice of medicine and which would be done whether or not study entry was contemplated, such as for diagnosis or treatment of a disease or medical condition, may be performed and the results subsequently used for determining study eligibility without first obtaining consent.\"",
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
    { label: "Oncology trial recruitment", href: "/oncology", description: "Where stage, biomarkers, ECOG and line of therapy live in the chart." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads molecular, pathology and radiology reports against each criterion." },
    { label: "Unstructured clinical data", href: "/glossary/unstructured-clinical-data", description: "Why reports and notes hold most eligibility evidence." },
    { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist", description: "A manual checklist for criteria that live in reports and notes." },
  ],
};

export default page;
