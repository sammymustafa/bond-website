import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/prescreening-question-design",
  category: "blog",
  title: "Writing pre-screening questions that predict eligibility",
  description:
    "How to turn protocol criteria into pre-screening questions patients answer accurately, which criteria to leave to the chart, and what IRB and FDA rules allow.",
  keywords: [
    "clinical trial pre-screening questions",
    "pre-screening questionnaire design",
    "pre-screening IRB approval",
    "self-reported eligibility accuracy",
    "pre-screening before informed consent",
  ],
  eyebrow: "Blog",
  h1: "Designing pre-screening questions that predict eligibility and respect IRB limits",
  intro:
    "Good pre-screening questions ask about things patients reliably know, such as a past heart attack or stroke, and leave what they often do not know, such as their latest lab values, to the chart or the screening visit.{{cite:okura-2004,heisler-2005}} Keep the questions to eligibility, get the script approved by the IRB, and stop before anything that counts as a study procedure needing consent.{{cite:fda-screening-1998}}",
  summary: "Which criteria patients can answer, how to word the questions, what the rules allow before consent, and how to test the pre-screen.",
  lastUpdated: "2026-12-23",
  blog: { date: "2026-12-23", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Pre-screening call script", secondaryHref: "/templates/pre-screening-call-script" },
  sections: [
    {
      id: "before-consent",
      heading: "What can a pre-screen collect before consent?",
      blocks: [
        {
          type: "p",
          text: "Conversation and records, with IRB approval. Under the revised Common Rule, an IRB may approve research in which an investigator gathers information to screen, recruit or determine the eligibility of prospective subjects without their informed consent, if the information comes from oral or written communication with the person or from accessing records.{{cite:ecfr-46-116}}",
        },
        {
          type: "p",
          text: "FDA draws the line at procedures. Its information sheet on screening tests says an investigator may discuss the availability of studies and the possibility of entry with a prospective subject without first obtaining consent, but consent must come before any clinical procedure performed solely to determine eligibility, including a medication washout. Tests that would be done as part of care anyway can be used.{{cite:fda-screening-1998}}",
        },
        {
          type: "p",
          text: "The script itself is part of recruitment. FDA considers direct advertising the start of the informed consent and subject selection process, and expects the IRB to look at the scripts used to check basic eligibility, including what happens to personal information if a caller hangs up and whether names of people who do not qualify are kept for other studies.{{cite:fda-recruiting-1998}}",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Not legal advice",
          text: "Which rules apply depends on whether the study is FDA-regulated, federally funded or both, on HIPAA's rules for record review, and on your IRB. Our guides on [pre-screening vs screening](/guides/pre-screening-vs-screening) and [HIPAA and IRB rules for outreach](/guides/irb-hipaa-patient-outreach) go further.",
        },
      ],
    },
    {
      id: "what-patients-know",
      heading: "Which criteria can patients answer reliably?",
      blocks: [
        {
          type: "p",
          text: "Major diagnoses, mostly. In a Mayo Clinic study of 2,037 Olmsted County residents aged 45 and over, self-report agreed substantially with the medical record for diabetes, hypertension, heart attack and stroke (kappa 0.71 to 0.80), but only moderately for heart failure (kappa 0.46). Specificity was above 90% for all five conditions, so few people without a condition said they had it. Sensitivity was low for heart failure (69%) and diabetes (66%), so a no missed about a third of the people whose records showed those conditions. Agreement was better in people under 65, women, people with more than 12 years of education and those without other illnesses.{{cite:okura-2004}}",
        },
        {
          type: "p",
          text: "Lab values, mostly not. In a survey of 686 adults with type 2 diabetes in five health systems, all with an HbA1c test in the previous six months, 66% said they did not know their last result and only 25% reported it accurately.{{cite:heisler-2005}}",
        },
        {
          type: "table",
          caption: "Where each kind of criterion is best checked",
          columns: ["Criterion type", "Ask the patient?", "Better source"],
          rows: [
            ["Past heart attack, stroke, diagnosed diabetes", "Yes; false yeses are rare", "Chart, to confirm dates"],
            ["Heart failure and other loosely labeled conditions", "Ask, but do not exclude on a no", "Problem list, echo and discharge reports"],
            ["Lab thresholds such as HbA1c or kidney function", "No", "Chart, or labs at the screening visit"],
            ["Current medicines and doses", "Ask them to read the labels", "Medication list and pharmacy fills"],
            ["Willingness to attend visits, travel, contraception", "Yes; only the patient knows", "The patient"],
          ],
          note: "Based on self-report accuracy for diagnoses and patients' knowledge of their own lab results.{{cite:okura-2004,heisler-2005}}",
        },
      ],
    },
    {
      id: "writing-questions",
      heading: "How should a protocol criterion become a question?",
      blocks: [
        {
          type: "ul",
          items: [
            "**One idea per question.** \"Have you had a heart attack or stroke?\" is two questions, and the answers lead in different directions.",
            "**Use the patient's words.** \"Heart attack\", not \"myocardial infarction\"; \"water pill\" next to the drug name.",
            "**Anchor time windows to something memorable.** A date, a season or an event is easier to place than a count of months.",
            "**Allow \"not sure\".** Send \"not sure\" to chart review instead of scoring it as a no.",
            "**Ask about behavior, not judgment.** \"How many days a week do you walk for exercise?\" beats \"Do you exercise regularly?\"",
            "**Skip what the chart already settles.** Date of birth and recorded diagnoses do not need a phone call.",
          ],
        },
        {
          type: "table",
          caption: "From criterion to question",
          columns: ["Protocol criterion", "Weak question", "Better approach"],
          rows: [
            ["HbA1c between 7.0% and 10.5%", "\"What was your last A1c?\"", "Ask whether a doctor has said they have type 2 diabetes and what they take for it; check HbA1c in the chart or at screening"],
            ["No heart attack in the past six months", "\"Have you had an MI recently?\"", "\"Since [month and year], have you stayed in a hospital for a heart attack?\""],
            ["Able to attend weekly visits", "\"Can you make the visits?\"", "Name the day, the length of each visit and the location, then ask"],
          ],
          note: "Most patients with diabetes in one survey did not know their last HbA1c, so lab criteria belong with the chart.{{cite:heisler-2005}}",
        },
      ],
    },
    {
      id: "order-and-length",
      heading: "Which questions should come first, and how many should there be?",
      blocks: [
        {
          type: "p",
          text: "Put hard knockouts first: the diagnosis, the age range, and whether the person can come to the site on the schedule. Then ask about the exclusions that fail most often in your screening log, and stop at the first clear fail with a thank-you. Sensitive questions belong in the pre-screen only if they decide eligibility, and they go after rapport is built.",
        },
        {
          type: "p",
          text: "We found no evidence-based number of questions. What is known is that criteria add friction at the protocol level: among 2,579 phase 2 and 3 trials closed in 2011, 19% were terminated for poor accrual or finished below 85% of planned enrollment, and a greater number of eligibility criteria was one of the factors associated with that failure.{{cite:carlisle-2015}} A pre-screen that asks only what the chart cannot answer is shorter and easier to finish.",
        },
      ],
    },
    {
      id: "testing",
      heading: "How do you know whether the pre-screen predicts eligibility?",
      blocks: [
        {
          type: "p",
          text: "Track what happens to the people it passes. For every screen failure, record which criterion failed and whether the pre-screen asked about it; the SEAR framework for recruitment logs is built around recording reasons for non-participation at each stage.{{cite:sear-2018}} A criterion that keeps failing at the screening visit needs a rewritten question or a move to chart review. Our guide to [reducing screen failure](/guides/reduce-screen-failure) covers the review.",
        },
        {
          type: "p",
          text: "Bond divides the work along these lines. [Identify](/identify) checks chart-based criteria such as labs, prescriptions and pathology reports against the EHR, with evidence for each criterion, and the voice and text agents pre-screen patients on the rest.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "irb-package",
      heading: "What should the IRB submission include?",
      blocks: [
        {
          type: "checklist",
          items: [
            "The full script, including the opening, any AI disclosure and the close.",
            "Every question, mapped to the protocol criterion it checks.",
            "What happens to information from people who do not qualify or hang up partway, which FDA lists among the issues for IRB review.{{cite:fda-recruiting-1998}}",
            "Whether contact details of people who do not qualify are kept for other studies, and on what basis.",
            "Who asks the questions (site staff, a vendor or an AI agent) and how a patient reaches a person.",
            "How opt-outs are recorded and honored.",
          ],
        },
        {
          type: "p",
          text: "Our [pre-screening call script](/templates/pre-screening-call-script) and [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach) are starting points.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and see which criteria can be checked in the chart and which belong on the call.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does a pre-screening call need written consent?",
      a: "Usually not. The Common Rule lets an IRB approve gathering eligibility information through conversation or records without consent, and FDA allows discussing a study before consent. Any procedure done only to check eligibility needs consent first, and your IRB makes the call.{{cite:ecfr-46-116,fda-screening-1998}}",
    },
    {
      q: "Can we ask patients for their lab values?",
      a: "You can, but do not rely on the answer. In one survey of adults with type 2 diabetes, 66% did not know their last HbA1c and 25% reported it accurately.{{cite:heisler-2005}}",
    },
    {
      q: "Should we keep details of patients who do not qualify?",
      a: "Only as your IRB approves. FDA lists whether names of people who do not qualify are kept for other studies among the questions an IRB should ask about screening scripts.{{cite:fda-recruiting-1998}}",
    },
  ],
  sources: [
    {
      id: "ecfr-46-116",
      title: "45 CFR 46.116 General requirements for informed consent",
      publisher: "Electronic Code of Federal Regulations",
      url: "https://www.ecfr.gov/current/title-45/section-46.116",
      year: "2026",
      note: "Read October 2026 via the eCFR versioner API. Quote (paragraph (g)): \"An IRB may approve a research proposal in which an investigator will obtain information or biospecimens for the purpose of screening, recruiting, or determining the eligibility of prospective subjects without the informed consent of the prospective subject or the subject's legally authorized representative, if either of the following conditions are met: (1) The investigator will obtain information through oral or written communication with the prospective subject or legally authorized representative, or (2) The investigator will obtain identifiable private information or identifiable biospecimens by accessing records or stored identifiable biospecimens.\"",
    },
    {
      id: "fda-screening-1998",
      title: "Screening Tests Prior to Study Enrollment: Information Sheet for IRBs and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
      year: "1998",
      note: "Read October 2026. Final, January 1998. Quote: \"While an investigator may discuss availability of studies and the possibility of entry into a study with a prospective subject without first obtaining consent, informed consent must be obtained prior to initiation of any clinical procedures that are performed solely for the purpose of determining eligibility for research, including withdrawal from medication (wash-out).\" Quote: \"Procedures that are to be performed as part of the practice of medicine and which would be done whether or not study entry was contemplated\" may be used for eligibility without first obtaining consent.",
    },
    {
      id: "fda-recruiting-1998",
      title: "Recruiting Study Subjects: Information Sheet for IRBs and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Read October 2026. Final, January 1998. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process.\" Quote: \"The first contact prospective study subjects make is often with a receptionist who follows a script to determine basic eligibility for the specific study.\" Quote: \"What happens to personal information if the caller ends the interview or simply hangs up? ... Are names of non-eligibles maintained in case they would qualify for another study?\"",
    },
    {
      id: "okura-2004",
      title: "Agreement between self-report questionnaires and medical record data was substantial for diabetes, hypertension, myocardial infarction and stroke but not for heart failure",
      publisher: "Journal of Clinical Epidemiology (Okura Y et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/15528061/",
      year: "2004",
      note: "Read October 2026. Quote: \"A total of 2,037 Olmsted County, Minnesota residents > or =45 years of age were randomly selected.\" Quote: \"Self-report of disease showed >90% specificity for all these diseases, but sensitivity was low for heart failure (69%) and diabetes (66%). Agreement between self-report and medical record was substantial (kappa 0.71-0.80) for diabetes, hypertension, MI, and stroke but not for heart failure (kappa 0.46). Factors associated with high total agreement by multivariate analysis were age <65 years, female sex, education >12 years, and zero Charlson Index score\".",
    },
    {
      id: "heisler-2005",
      title: "The relationship between knowledge of recent HbA1c values and diabetes care understanding and self-management",
      publisher: "Diabetes Care (Heisler M et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/15793179/",
      year: "2005",
      note: "Read October 2026. Quote: \"We conducted a cross-sectional survey of a sample of 686 U.S. adults with type 2 diabetes in five health systems who had HbA(1c) checked in the previous 6 months.\" Quote: \"Of the respondents, 66% reported that they did not know their last HbA(1c) value and only 25% accurately reported that value.\"",
    },
    {
      id: "carlisle-2015",
      title: "Unsuccessful trial accrual and human subjects protections: an empirical analysis of recently closed trials",
      publisher: "Clinical Trials (Carlisle B et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4516407/",
      year: "2015",
      note: "Read October 2026. Phase 2 and 3 interventional trials registered as closed in 2011. Quote: \"Of 2579 eligible trials, 481 (19%) either terminated for failed accrual or completed with less than 85% expected enrolment, seriously compromising their statistical power. Factors associated with unsuccessful accrual included greater number of eligibility criteria (p=0.013)\".",
    },
    {
      id: "sear-2018",
      title: "Development of a framework to improve the process of recruitment to randomised controlled trials (RCTs): the SEAR (Screened, Eligible, Approached, Randomised) framework",
      publisher: "Trials (Wilson C et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5775609/",
      year: "2018",
      note: "Read October 2026. Quote: \"A framework to facilitate clearer recording of the recruitment process and reasons for non-participation was developed\". Quote: \"The SEAR framework encourages the collection of information to identify recruitment obstacles and facilitate improvements to the recruitment process.\"",
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
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A call script with eligibility questions and an attempt log." },
    { label: "Pre-screening vs screening", href: "/guides/pre-screening-vs-screening", description: "What can happen before consent and what requires it." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Catching ineligible patients before the first screening visit." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond checks chart-based criteria with evidence." },
  ],
};

export default page;
