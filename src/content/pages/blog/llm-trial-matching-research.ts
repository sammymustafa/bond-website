import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/llm-trial-matching-research",
  category: "blog",
  title: "What studies show about LLMs for clinical trial matching",
  description:
    "TrialGPT, RECTIFIER and two randomized evaluations: what published studies show about LLMs for trial pre-screening, and what sites should test first.",
  keywords: [
    "large language models clinical trial matching",
    "LLM patient trial matching studies",
    "TrialGPT",
    "RECTIFIER GPT-4 clinical trial screening",
    "AI pre-screening clinical trials evidence",
  ],
  eyebrow: "Blog",
  h1: "What published studies show about LLMs for trial matching",
  intro:
    "Large language models can now read charts against trial criteria about as well as trained staff, and in a 2025 randomized trial at Mass General Brigham, AI-assisted pre-screening found more eligible patients and produced more enrollments than manual review.{{cite:jama-rct-2025}} The evidence is weaker on time savings and on what happens after a match, and much of the early work used benchmarks or synthetic patients. Here is what the studies measured, and what a site should check before relying on a tool.",
  summary: "TrialGPT, RECTIFIER and newer randomized evaluations: what LLM trial-matching studies measured, where they fall short, and how to test a tool.",
  lastUpdated: "2026-10-07",
  blog: { date: "2026-10-07", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "See it on your protocol", href: "/book-a-demo", secondaryLabel: "Read about Identify", secondaryHref: "/identify" },
  sections: [
    {
      id: "what-has-been-tested",
      heading: "What have LLM trial-matching studies tested so far?",
      blocks: [
        {
          type: "p",
          text: "Most early studies are benchmarks: a set of patient records with answers agreed by experts, and a score for how often a system agrees. The best-known public set comes from the 2018 n2c2 shared task, which annotated records for 288 patients against 13 criteria taken from real trials. Of 47 teams, the top system reached a micro F1 score of 0.91 with a rule-based approach, before LLMs were part of the picture.{{cite:n2c2-2019,beattie-2024}}",
        },
        {
          type: "p",
          text: "In 2024 a UT Southwestern team ran GPT-4 over 202 records from that challenge and reported accuracy of 0.87, sensitivity of 0.85 and specificity of 0.89, up from 0.81 accuracy with GPT-3.5 Turbo. They also noted that some labels in the answer key appeared to be wrong.{{cite:beattie-2024}}",
        },
        {
          type: "p",
          text: "TrialGPT, from the National Library of Medicine, matched 183 synthetic patients to trials. On 1,015 patient-criterion pairs checked by hand, its criterion-level accuracy was 87.3 percent, and in a user study it cut screening time by 42.6 percent.{{cite:trialgpt-2024}} A 2025 scoping review found 24 studies of LLM-based matching published between December 2022 and December 2024, 21 of them in 2024, and named performance variability, interpretability and reliance on synthetic data sets as open problems.{{cite:chen-scoping-2025}}",
        },
      ],
    },
    {
      id: "rectifier",
      heading: "What did the RECTIFIER studies at Mass General Brigham show?",
      blocks: [
        {
          type: "p",
          text: "RECTIFIER pairs GPT-4 with retrieval of the relevant note passages. It was built for COPILOT-HF, a heart failure trial in which structured EHR data could settle only 5 of 6 inclusion and 5 of 17 exclusion criteria. On a test set of 1,894 patients, judged against an expert clinician, its accuracy ranged from 97.9 to 100 percent across criteria, versus 91.7 to 100 percent for trained study staff. It beat staff on the key inclusion criterion, symptomatic heart failure.{{cite:rectifier-2024}} The health system estimated the model cost about $0.11 per patient screened.{{cite:mgb-rectifier-2024}}",
        },
        {
          type: "p",
          text: "The team then ran a randomized trial. Between May 31 and September 28, 2024, after removing 193,616 patients who met exclusion criteria, it randomized 4,476 patients to AI-assisted or manual pre-screening, with study staff given equal time for each method.{{cite:jama-rct-2025}}",
        },
        {
          type: "stats",
          items: [
            { value: "20.4% vs 12.7%", label: "of patients found eligible, AI-assisted vs manual pre-screening", cite: "jama-rct-2025" },
            { value: "35 vs 19", label: "enrollments by the end of the trial (1.6% vs 0.9% of each arm)", cite: "jama-rct-2025" },
            { value: "97.9% vs 91.7%", label: "accuracy on \"symptomatic heart failure\", RECTIFIER vs study staff", cite: "rectifier-2024" },
          ],
        },
        {
          type: "p",
          text: "The authors state the limits plainly: a single center, and one heart failure trial as the use case.{{cite:jama-rct-2025}}",
        },
      ],
    },
    {
      id: "time-savings",
      heading: "Does AI assistance make chart review faster?",
      blocks: [
        {
          type: "p",
          text: "Not always. A randomized evaluation from Penn and Emory, published in 2026, assigned retrospective charts of 355 patients with non-small cell lung or colorectal cancer to research staff working alone or with a pretrained language model. Chart-level accuracy rose from 71.1 to 76.5 percent with AI assistance, but average review time did not change (37.8 versus 37.4 minutes per chart). The gains were largest on biomarker, staging and response criteria, and automation bias limited performance in some domains.{{cite:parikh-2026}}",
        },
        {
          type: "p",
          text: "At UT Health San Antonio, a locally hosted adaptation of TrialGPT was checked against an expert-adjudicated set of 149 patients: sensitivity 81.8 percent, specificity 97.8 percent and positive predictive value 75.0 percent. Compared with manual screening on 55 patients, it found 81.8 percent of the truly eligible patients, against 36.4 percent for manual review.{{cite:uthscsa-trialgpt-2026}}",
        },
        {
          type: "p",
          text: "The pattern so far: the clearest gains are in finding eligible patients that people miss. Time savings depend on the workflow. If staff still read every chart from start to finish, the model adds a second opinion rather than removing work.",
        },
      ],
    },
    {
      id: "match-to-enrollment",
      heading: "Does a match turn into an enrollment?",
      blocks: [
        {
          type: "p",
          text: "A match is a lead, not a participant. At the Medical College of Wisconsin, a fine-tuned oncology LLM screened 514 patients in surgical oncology clinics between July and December 2024 and produced 34 trial matches across 32 patients. Nine matches (26.5 percent) led to enrollment.{{cite:mcw-oncollm-2025}}",
        },
        {
          type: "table",
          caption: "Why 25 LLM trial matches did not enroll (Medical College of Wisconsin, 2024){{cite:mcw-oncollm-2025}}",
          columns: ["Reason", "Matches", "Share"],
          rows: [
            ["Patient was ineligible on review", "9", "36%"],
            ["Patient declined", "5", "20%"],
            ["Provider discretion", "4", "16%"],
            ["No documented reason", "7", "28%"],
          ],
        },
        {
          type: "p",
          text: "In the Mass General Brigham trial, AI assistance raised enrollments, yet 1.6 percent of patients in the AI arm enrolled.{{cite:jama-rct-2025}} Most of the loss happens after the match: reaching the patient, explaining the study, pre-screening by phone and getting a visit on the calendar. A site that improves matching without fixing outreach mostly gets a longer list.",
        },
      ],
    },
    {
      id: "failure-modes",
      heading: "What failure modes do the studies report?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Benchmarks that are not your charts.** TrialGPT was evaluated on synthetic patients, and the scoping review lists reliance on synthetic data sets as a key limitation of the field.{{cite:trialgpt-2024,chen-scoping-2025}}",
            "**Imperfect answer keys.** The UT Southwestern team found apparently mislabeled criteria in the n2c2 ground truth, so a model can be scored wrong when it is right, and the reverse.{{cite:beattie-2024}}",
            "**Automation bias.** In the Penn and Emory evaluation, reviewers leaning on AI output limited accuracy in some domains.{{cite:parikh-2026}}",
            "**Missed nuance and bias.** Mass General Brigham's researchers warned that AI could introduce bias and miss nuances in notes, and recommended keeping the clinician's final eligibility check.{{cite:mgb-rectifier-2024}}",
            "**Narrow settings.** Each randomized result so far comes from one or two academic health systems and one disease area or a small set of cancers, so performance on another site's charts and protocol is unproven.{{cite:jama-rct-2025,parikh-2026}}",
          ],
        },
      ],
    },
    {
      id: "how-to-evaluate",
      heading: "How should a site evaluate an LLM screening tool?",
      blocks: [
        {
          type: "p",
          text: "Ask for evidence that looks like your use, then check it on your own charts.",
        },
        {
          type: "checklist",
          items: [
            "**Test on your records and your protocol.** Run a pilot on your own charts, scored against an answer key your coordinators and PI adjudicate, as the UT Health San Antonio team did before relying on its tool.{{cite:uthscsa-trialgpt-2026}}",
            "**Get criterion-level numbers.** Ask for sensitivity and positive predictive value for each criterion, not one overall accuracy figure. Exclusions that live in notes are where tools differ most.",
            "**See the evidence.** Each decision should point to the sentence, lab or report behind it, so a coordinator can verify it quickly.",
            "**Measure time as well as accuracy.** Time per chart did not move in the Penn and Emory study, so record minutes per reviewed candidate before and after go-live.{{cite:parikh-2026}}",
            "**Audit for automation bias.** Have a second reviewer check a sample of AI-accepted and AI-rejected patients every month.",
            "**Track the whole funnel.** Count matches, contacts, pre-screens, booked visits and enrollments, so weak outreach does not hide better matching.",
          ],
        },
        {
          type: "p",
          text: "Our post on [validating eligibility logic before go-live](/blog/validating-eligibility-logic-before-go-live) walks through this loop, and the [vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) turns it into questions for a demo.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond fits",
          text: "Bond's [Identify](/identify) stage reads clinical notes, prescriptions, labs and pathology, radiology and molecular reports against each criterion and shows criterion-by-criterion evidence for every match. Bond reports 90%+ matching accuracy and 50%+ less chart review, and its [Engage](/engage) agents then contact, pre-screen and book matched patients, the step where the studies above lose most candidates.{{cite:bond-site,bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol and a set of charts your team has already screened. We will show the evidence behind each match.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Are LLMs more accurate than coordinators at pre-screening?",
      a: "On some criteria, in some studies. RECTIFIER scored 97.9 percent on symptomatic heart failure against 91.7 percent for study staff, while in the Penn and Emory evaluation staff working with AI beat staff alone by a smaller margin, 76.5 versus 71.1 percent.{{cite:rectifier-2024,parikh-2026}} No study supports letting a model make the final eligibility call alone.",
    },
    {
      q: "Can accuracy numbers be compared across studies?",
      a: "Rarely. Studies score at different levels (per criterion, per chart or per patient), use different answer keys and test different diseases. TrialGPT's 87.3 percent is criterion-level accuracy on synthetic patients, which is not the same measure as RECTIFIER's per-question accuracy on real charts.{{cite:trialgpt-2024,rectifier-2024}}",
    },
    {
      q: "Do these tools replace coordinator review?",
      a: "No. The RECTIFIER authors recommend final clinician review before patient engagement.{{cite:rectifier-2024}} Bond shows the evidence behind each criterion decision so coordinators can check matches quickly.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "n2c2-2019",
      title: "Cohort selection for clinical trials: n2c2 2018 shared task track 1",
      publisher: "Journal of the American Medical Informatics Association (Stubbs A et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31562516/",
      year: "2019",
      note: "Read October 2026 (PubMed abstract). Quote: \"we annotated American English clinical narratives for 288 patients according to whether they met these criteria.\" Also: \"A total of 47 teams participated in this shared task\" and \"The best-performing system achieved a micro F1 score of 0.91 using a rule-based approach.\" The count of 13 criteria comes from the beattie-2024 abstract, which used the same records.",
    },
    {
      id: "beattie-2024",
      title: "Utilizing Large Language Models for Enhanced Clinical Trial Matching: A Study on Automation in Patient Screening",
      publisher: "Cureus (Beattie J et al., UT Southwestern Medical Center)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38854210/",
      year: "2024",
      note: "Read October 2026 (PubMed abstract). Quote: \"we utilized 202 longitudinal patient records. These records were annotated by medical professionals and evaluated against 13 selection criteria\". Also: \"an accuracy of 0.87, sensitivity of 0.85, specificity of 0.89, and micro F1 score of 0.86 using GPT-4\" and \"some criteria in the ground truth appeared mislabeled\".",
    },
    {
      id: "trialgpt-2024",
      title: "Matching patients to clinical trials with large language models",
      publisher: "Nature Communications (Jin Q et al., National Library of Medicine, NIH)",
      url: "https://pubmed.ncbi.nlm.nih.gov/39557832/",
      year: "2024",
      note: "Read October 2026 (PubMed abstract). Quote: \"We evaluate TrialGPT on three cohorts of 183 synthetic patients with over 75,000 trial annotations.\" Also: \"Manual evaluations on 1015 patient-criterion pairs show that TrialGPT-Matching achieves an accuracy of 87.3% with faithful explanations\" and \"our user study reveals that TrialGPT can reduce the screening time by 42.6% in patient recruitment.\"",
    },
    {
      id: "chen-scoping-2025",
      title: "Enhancing Patient-Trial Matching With Large Language Models: A Scoping Review of Emerging Applications and Approaches",
      publisher: "JCO Clinical Cancer Informatics (Chen H et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/40489722/",
      year: "2025",
      note: "Read October 2026 (PubMed abstract). Quote: \"Of the 2,357 studies initially identified, 24 met the inclusion criteria. The majority (21/24) were published in 2024\". Also: \"challenges such as performance variability, interpretability, and reliance on synthetic data sets remain significant.\" Search covered December 1, 2022 to December 31, 2024.",
    },
    {
      id: "rectifier-2024",
      title: "Retrieval Augmented Generation Enabled Generative Pre-Trained Transformer 4 (GPT-4) Performance for Clinical Trial Screening",
      publisher: "medRxiv preprint (Unlu O et al., Brigham and Women's Hospital); later published in NEJM AI",
      url: "https://pubmed.ncbi.nlm.nih.gov/38370719/",
      year: "2024",
      note: "Read October 2026 (PubMed abstract of the preprint). Quote: \"structured data in the EHR can only be used to determine 5 out of 6 inclusion and 5 out of 17 exclusion criteria.\" Also: \"1894 patients as a test set\"; \"accuracy ranging between 97.9% and 100% (MCC 0.837 and 1) for RECTIFIER and 91.7% and 100% (MCC 0.644 and 1) for study staff\"; \"RECTIFIER performed better than study staff to determine the inclusion criteria of \"symptomatic heart failure\" with an accuracy of 97.9% vs 91.7%\"; and \"final clinician review before patient engagement.\"",
    },
    {
      id: "mgb-rectifier-2024",
      title: "AI Screens Heart Failure Patients for Clinical Trial Eligibility",
      publisher: "Mass General Brigham news release",
      url: "https://news.massgeneralbrigham.org/en/ai-screens-heart-failure-patients-for-clinical-trial-eligibility",
      year: "2024",
      note: "Read October 2026. Undated page describing the NEJM AI article (DOI 10.1056/AIoa2400181). Quote: \"The researchers estimated the AI model costs about $0.11 to screen each patient.\" Also: \"It could introduce bias and miss nuances in medical notes.\" and \"the researchers recommended that this final check continue with AI screening.\"",
    },
    {
      id: "jama-rct-2025",
      title: "Manual vs AI-Assisted Prescreening for Trial Eligibility Using Large Language Models: A Randomized Clinical Trial",
      publisher: "JAMA (Unlu O et al., Mass General Brigham)",
      url: "https://jamanetwork.com/journals/jama/fullarticle/2830514",
      year: "2025",
      note: "Read October 2026. Research letter, JAMA 2025;333(12):1084-1087, PMID 39960745. Quote: \"The eligibility rate was 20.4% (458/2242 patients) for the AI-assisted screening method vs 12.7% (284/2234 patients) for the manual screening method\". Also: \"there were 35 enrollments (1.6%) using the AI-assisted screening method compared with 19 enrollments (0.9%) using the manual screening method\" and \"Limitations include a single center and a randomized clinical HF trial as the use case.\" Also: \"After removing 193 616 patients who met exclusion criteria in this trial, 4476 were randomized\" and \"Equal time for the study staff was allocated to each screening method.\" Conducted from May 31, 2024, to September 28, 2024. The page blocks automated browsers; read via WebFetch.",
    },
    {
      id: "parikh-2026",
      title: "Human-AI teaming to improve accuracy and efficiency of eligibility criteria prescreening for oncology trials: a randomized evaluation trial using retrospective electronic health records",
      publisher: "Nature Communications (Parikh RB, Kolla L et al., Penn and Emory)",
      url: "https://pubmed.ncbi.nlm.nih.gov/41634037/",
      year: "2026",
      note: "Read October 2026 (PubMed abstract). Quote: \"Chart-level accuracy, the primary endpoint of Human+AI prescreening is noninferior and superior to Human-alone (76.5% vs. 71.1%). However, efficiency is unchanged with similar average time per chart review, the secondary endpoint, (37.4 vs. 37.8 min).\" Also: \"among a cohort of 355 patients with non-small cell lung or colorectal cancer\"; \"AI-assisted abstraction most improves accuracy for biomarker, staging, and response criteria. Performance is limited in some domains due to automation bias.\" Some authors are employees of the AI vendor.",
    },
    {
      id: "uthscsa-trialgpt-2026",
      title: "Translating evidence into practice: adapting TrialGPT for real-world clinical trial eligibility screening",
      publisher: "Journal of the American Medical Informatics Association (Syed M et al., UT Health San Antonio)",
      url: "https://pubmed.ncbi.nlm.nih.gov/41637159/",
      year: "2026",
      note: "Read October 2026 (PubMed abstract). Quote: \"Against the expert-adjudicated corpus, the system achieved 81.8% sensitivity, 97.8% specificity, and a positive predictive value of 75.0%. Compared with manual screening, it identified more than twice as many truly eligible patients (81.8% vs 36.4%) while preserving equivalent specificity.\" Gold corpus n = 149; manual comparison n = 55.",
    },
    {
      id: "mcw-oncollm-2025",
      title: "Understanding unrealized trial enrollments following patient-to-trial matching with large language models",
      publisher: "Surgery (Verhagen CT et al., Medical College of Wisconsin)",
      url: "https://pubmed.ncbi.nlm.nih.gov/41318261/",
      year: "2025",
      note: "Read October 2026 (PubMed abstract). Quote: \"Using OncoLLM-MCW, 514 patients were evaluated, resulting in 34 trial matches across 32 patients. Of these, 9 matches (26.5%) resulted in enrollment, whereas 25 (73.5%) did not. Among the 25 non-enrolling matches, 9 (36%) patients were ineligible, 5 (20%) declined participation, 4 (16%) were not enrolled due to provider discretion, and 7 (28%) had no documented reason.\" Pilot ran July to December 2024.",
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
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads notes, labs and reports and shows the evidence for each criterion." },
    { label: "How we validate eligibility logic before go-live", href: "/blog/validating-eligibility-logic-before-go-live", description: "The configure, test and adjudicate loop that runs before live screening." },
    { label: "AI recruitment vendor evaluation checklist", href: "/templates/ai-recruitment-vendor-evaluation-checklist", description: "Questions to ask any AI screening or outreach vendor." },
    { label: "Why eligibility screening needs unstructured data", href: "/blog/unstructured-data-eligibility-evidence", description: "What studies measured about criteria that only notes can answer." },
  ],
};

export default page;
