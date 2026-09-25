import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/for/fqhcs-and-community-sites",
  category: "audience",
  title: "FQHC and community health center clinical trial recruitment",
  description:
    "How FQHCs and community health centers can offer trials to more of their patients: EHR screening, outreach, consent support, what to measure, setup and pricing.",
  keywords: [
    "FQHC clinical trial recruitment",
    "community health center research",
    "clinical trial diversity recruitment",
    "diversity action plan research sites",
    "eClinicalWorks clinical trials",
  ],
  eyebrow: "For FQHCs and community sites",
  h1: "Trial access for the patients community health centers serve",
  intro:
    "Community health centers serve many of the patients that clinical trials enroll least, yet only about a quarter of centers reported using EHR data for research in 2025.{{cite:hrsa-uds-ehr-2025}} Bond Health finds eligible patients in your EHR, contacts them and supports the consent conversation, so a small research team can offer studies to more of its patients.",
  summary: "How Bond helps FQHCs and community sites find eligible patients, contact them and support consent with a small research team.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See the implementation plan", secondaryHref: "/implementation" },
  sections: [
    {
      id: "why-community-sites",
      heading: "Why do community health centers matter for trial diversity?",
      blocks: [
        {
          type: "p",
          text: "Trial participants and health center patients look different. In the trials behind FDA's 53 novel drug approvals in 2020 (about 32,000 participants worldwide), participation averaged 75% White, 8% Black or African American and 11% Hispanic, with 54% at US sites.{{cite:fda-snapshots-2020}} Among 2025 health center patients with known race or ethnicity, HRSA reports 20.6% were Black or African American and 39.3% Hispanic or Latino.{{cite:hrsa-uds-2025}}",
        },
        {
          type: "p",
          text: "Few patients are ever asked. In a 2020 national survey, only 9% of US adults had ever been invited to join a clinical trial, but 47% of those invited took part.{{cite:hints-2021}} In a 2024 poll for the PAN Foundation, only 22% of people of color said they had talked with their healthcare provider about taking part in a trial.{{cite:pan-2024}}",
        },
        {
          type: "p",
          text: "The Food and Drug Omnibus Reform Act of 2022 (FDORA) requires sponsors to submit a [Diversity Action Plan](/glossary/diversity-action-plan) for Phase 3 and other pivotal studies of drugs and certain devices that start enrolling more than 180 days after FDA publishes final guidance.{{cite:fda-dap-report}} As of September 2026 that guidance is still a June 2024 draft, restored to FDA's website under a court order.{{cite:fda-dap-guidance}} Sponsors have filed plans voluntarily: FDA's drug center received 124 in fiscal 2023 and 161 in fiscal 2024.{{cite:fda-dap-report}}",
        },
      ],
    },
    {
      id: "what-is-different",
      heading: "What makes research at a health center different?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "32.7M", label: "Patients served by HRSA-funded health centers in 2025", cite: "hrsa-uds-2025" },
            { value: "63.7%", label: "Patients from a racial or ethnic minority group (of those with known data)", cite: "hrsa-uds-2025" },
            { value: "27.0%", label: "Patients with limited English proficiency", cite: "hrsa-uds-2025" },
            { value: "17.2%", label: "Patients without insurance", cite: "hrsa-uds-2025" },
          ],
        },
        {
          type: "p",
          text: "The patients are there. The research capacity often is not:",
        },
        {
          type: "ul",
          items: [
            "**EHR data.** In 2025, 1,340 of 1,356 health centers used EHR data for quality improvement such as outreach, but only 364 used it for research.{{cite:hrsa-uds-ehr-2025}}",
            "**Staff time.** In a 2022 survey of all US physicians, not only health center staff, 14% reported doing research, and 83.6% of those spent 10% or less of their weekly hours on it.{{cite:browne-2024}}",
            "**Referrals.** In a March 2026 poll of 503 US primary care physicians, 86% said they were likely to refer patients to trials, but only 37% ever had.{{cite:harris-pcp-2026}}",
            "**Language.** Of 14,367 trials registered on ClinicalTrials.gov in 2019 and 2020, 18.98% required the ability to read, speak or understand English, and 2.71% mentioned translation into another language.{{cite:mrct-english-2021}}",
            "**Reading level.** Consent forms from 798 federally funded US trials averaged a 12th-grade reading level, against an 8th-grade average for US adults.{{cite:mirza-2024}}",
          ],
        },
      ],
    },
    {
      id: "ehr-landscape",
      heading: "Which EHRs do health centers run, and how does Bond connect?",
      blocks: [
        {
          type: "p",
          text: "eClinicalWorks said in March 2024 that it was the EHR vendor for more than 800 health centers, roughly 60% of the national total.{{cite:ecw-uds-approval}} As of September 2026, NextGen Healthcare says on its FQHC software page that more than 300 community health centers choose it.{{cite:nextgen-fqhc}} OCHIN offers OCHIN Epic to community health organizations; in January 2026 it reported a network of more than 43,000 providers caring for nearly 8 million people.{{cite:ochin-2026}} athenahealth launched athenaOne for Community Health Centers in May 2025.{{cite:athena-chc-2025}} A center affiliated with a health system may instead use that system's Epic through Epic's Community Connect model.{{cite:hctec-community-connect}} Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR.{{cite:bond-product}}",
        },
        {
          type: "table",
          caption: "How Bond connects, by EHR setup",
          columns: ["EHR setup", "How Bond connects", "What the health center provides"],
          rows: [
            [
              "eClinicalWorks",
              "FHIR R4 access through eClinicalWorks' APIs. See the [eClinicalWorks page](/integrations/eclinicalworks).",
              "An administrator turns on FHIR access through On-Demand Activation and authorizes Bond's connection.{{cite:ecw-cert}}",
            ],
            ["athenahealth", "FHIR-based access. See [athenahealth](/integrations/athenahealth).", "Administrator approval of the connection and the data scope."],
            [
              "Epic through OCHIN or Community Connect",
              "FHIR R4 or HL7 v2, arranged with the organization that hosts the instance. See [Epic](/integrations/epic).",
              "Sign-off from the host organization as well as your own.",
            ],
            ["NextGen or another EHR", "FHIR R4 where the EHR supports it, or through an integration partner.{{cite:bond-site}}", "Confirmation of the interface during scoping."],
            ["No integration yet", "Outreach from a patient list the health center exports.", "The list, plus IRB approval of the outreach."],
          ],
          note: "Bond holds no certification or marketplace listing with these EHR vendors. What each build exposes is confirmed during scoping.",
        },
      ],
    },
    {
      id: "day-to-day",
      heading: "What changes day to day with Bond?",
      blocks: [
        {
          type: "p",
          text: "Each of Bond's three stages takes one task off a small team.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Identify: the chart review",
              text: "[Identify](/identify) reads structured fields and notes against the study's criteria, ranks candidates, and shows the chart evidence behind each decision. A coordinator reviews a ranked list instead of opening charts one by one.{{cite:bond-site}}",
            },
            {
              title: "Engage: the first contact",
              text: "[Engage](/engage) calls or texts each candidate, runs the pre-screening script your IRB approved and books the visit. Patients are told AI is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers. Scripts are configured per study.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Consent: the conversation before the signature",
              text: "[Consent](/consent) explains the approved form in plain language, answers questions, helps the patient understand points such as randomization, and hands anything else to staff. The investigator or delegated staff still obtain consent.{{cite:bond-site}}",
            },
            {
              title: "Coordinator: the exceptions",
              text: "Escalations, booked visits and status changes appear in one dashboard with an audit trail.{{cite:bond-site}}",
            },
          ],
        },
        {
          type: "p",
          text: "To reach community members who are not yet your patients, Bond sets up Meta and Google ad campaigns for a study.{{cite:bond-product}} Leads from those ads flow straight into Bond's voice and text agents for pre-screening and scheduling, alongside patients found in your EHR.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "What Bond does not change",
          text: "Bond does not edit the consent form or replace your interpreter policy, and study payments are outside its scope.",
        },
      ],
    },
    {
      id: "problems-and-measures",
      heading: "Which problems does Bond address, and what should you measure?",
      blocks: [
        {
          type: "table",
          caption: "Problem, what Bond does, what you measure",
          columns: ["Problem at a health center", "What Bond does", "What you measure"],
          rows: [
            [
              "No staff time to screen charts for each protocol",
              "Screens data and notes, ranks candidates with evidence",
              "Patients matched, coordinator hours saved, matching accuracy",
            ],
            ["Eligible patients are never asked", "Calls or texts each candidate and runs the pre-screen", "Patients contacted and pre-screened"],
            [
              "Patients who prefer a language other than English",
              "Voice and text conversations and consent Q&A in the patient's preferred language, including English, Spanish, Mandarin and many others, with mid-call language switching{{cite:bond-product}}",
              "Patients contacted and consented, by preferred language (from your EHR)",
            ],
            [
              "Consent forms written above patients' reading level",
              "Plain-language explanation, answers to questions, escalation to staff",
              "Patients consented",
            ],
            [
              "Screen failures after a patient travels in",
              "Pre-screens on criteria the chart cannot settle",
              "Screen-failure signals",
            ],
            [
              "A sponsor asks what you can deliver for a diversity plan",
              "Funnel dashboard and reports for site and sponsor",
              "Patients randomized and time to enrollment",
            ],
          ],
        },
        {
          type: "p",
          text: "Bond publishes up to 3x faster enrollment than manual recruitment, over 90% matching accuracy and 50%+ less chart review.{{cite:bond-site}} None of these come from a health center, so test them in your own pilot rather than treat them as a forecast.",
        },
      ],
    },
    {
      id: "implementation",
      heading: "What does implementation ask of your team?",
      blocks: [
        {
          type: "p",
          text: "Full EHR integration takes 48 hours, depending on the EHR, your IT review and the interface method.{{cite:bond-site}} See the [implementation plan](/implementation).",
        },
        {
          type: "checklist",
          items: [
            "A signed business associate agreement before any PHI moves.",
            "An EHR administrator to enable access, plus sign-off from OCHIN or your Community Connect host if either runs your Epic.",
            "IRB approval of scripts, texts and translations. Start from the [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach) and the [SMS templates with Spanish versions](/templates/patient-outreach-sms-templates).",
            "A research lead to review matches and take escalations.",
            "A PI or delegated staff member available for consent visits.",
            "Contact windows, opt-outs and the consent basis for calls and texts, decided with counsel. See the [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach).",
          ],
        },
        {
          type: "p",
          text: "Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}} On Bond's side, data is protected with encryption in transit and at rest, role-based access and an audit log.{{cite:bond-site}} See [security](/security).",
        },
      ],
    },
    {
      id: "pricing",
      heading: "How does pricing work for a health center?",
      blocks: [
        {
          type: "p",
          text: "Pricing has two parts. A volume-based platform fee covers EHR integration, implementation and ongoing operation, including the EHR connection, security review, workflow setup and ongoing support; there is no separate integration fee. A success fee is charged per enrolled, meaning randomized, patient; per-visit milestones can be added.{{cite:bond-site}} Amounts are custom; see [pricing](/pricing).",
        },
        {
          type: "p",
          text: "For a center new to research, the platform fee is the commitment to weigh. The success fee, and any visit milestones you agree to, follows enrollment.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "About grants",
          text: "Bond gives no advice on using Health Center Program or other grant funds. Ask your grants and compliance staff how research costs fit your grant terms.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your EHR's name. We will walk through the criteria and your team's part.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can Bond contact patients in Spanish or other languages?",
      a: "Yes. Voice and text conversations and consent Q&A run in the patient's preferred language, including English, Spanish, Mandarin and many others, and can switch languages mid-call.{{cite:bond-product}} Scripts are configured per study,{{cite:bond-site}} and translated scripts need IRB approval too.",
    },
    {
      q: "Does Bond work with eClinicalWorks?",
      a: "The path is eClinicalWorks' FHIR R4 APIs, which your administrator turns on through On-Demand Activation.{{cite:ecw-cert}} Bond holds no eClinicalWorks certification or partner status.",
    },
    {
      q: "Does Bond help with a sponsor's Diversity Action Plan?",
      a: "The plan is the sponsor's. Bond reports to site and sponsor how many patients were matched, contacted, consented and randomized, which supports feasibility answers and enrollment reports.{{cite:bond-site}} Ask during scoping which demographic fields those reports can include.",
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
      id: "hrsa-uds-2025",
      title: "National Health Center Program Uniform Data System (UDS) Awardee Data, 2025",
      publisher: "Health Resources and Services Administration (HRSA)",
      url: "https://data.hrsa.gov/topics/healthcenters/uds/overview/national",
      year: "2026",
      note: "Data table, read September 22, 2026. Race, ethnicity and income percentages are of patients with known values. Quote: \"Total Patients Served: 32,746,392\"; \"Total Number of Reporting Program Awardees: 1,356\"; \"% Racial and/or Ethnic Minority Patients: 63.70%\"; \"% Hispanic, Latino/a, or Spanish Origin Patients: 39.26%\"; \"% Black or African American Patients: 20.63%\"; \"Limited English Proficiency: 26.97%\"; \"% None/Uninsured Patients: 17.21%\".",
    },
    {
      id: "hrsa-uds-ehr-2025",
      title: "Table EHR: Health Center Information Technology (Health IT) Capabilities, 2025",
      publisher: "Health Resources and Services Administration (HRSA)",
      url: "https://data.hrsa.gov/topics/healthcenters/uds/overview/national/table?tableName=EHR&year=2025",
      year: "2026",
      note: "Data table, read September 22, 2026. Quote: \"How does your health center utilize health IT and EHR data beyond direct patient care? (Select all that apply.)\" ... \"a. Quality improvement (e.g., outreach, health education): 1,340 | 98.82%\" ... \"d. Research: 364 | 26.84%\". Also: \"Do you use more than one EHR, data collection, and/or data analytics system across your organization?: 582 | 43.11%\" and \"Total Health Centers reported (Sum 1a + 1b +1c): 1,356\".",
    },
    {
      id: "fda-snapshots-2020",
      title: "2020 Drug Trials Snapshots Summary Report",
      publisher: "US Food and Drug Administration, Center for Drug Evaluation and Research",
      url: "https://www.fda.gov/media/145718/download",
      year: "2021",
      note: "Participants enrolled worldwide; checked September 22, 2026. Quote: \"In 2020, CDER approved 53 novel drugs ... Overall, 32,000 patients participated in these trials.\" Table 1 (percent participation, row labeled \"AVERAGE\"): White 75%, Black or African American 8%, Asian 6%, Hispanic 11%, United States 54%.",
    },
    {
      id: "hints-2021",
      title: "Demographic and Health Behavior Factors Associated With Clinical Trial Invitation and Participation in the United States",
      publisher: "JAMA Network Open (Williams CP et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34586365/",
      year: "2021",
      note: "Health Information National Trends Survey (HINTS) 2020, 3,689 US adults, weighted. Quote: \"Overall, 439 respondents (9%) had been invited to participate in any clinical trial. ... Of invited respondents, 199 (47%) participated.\"",
    },
    {
      id: "pan-2024",
      title: "Underrepresented groups are interested in clinical trials, but aren't being asked",
      publisher: "PAN Foundation",
      url: "https://www.panfoundation.org/underrepresented-groups-are-interested-in-clinical-trials-but-arent-being-asked/",
      year: "2024",
      note: "The Harris Poll for the PAN Foundation, July 2024, 4,492 US adults. Quote: \"only 22% of people of color and 20% of LGBTQ+ respondents have talked to their healthcare provider about participating in a clinical trial.\"",
    },
    {
      id: "fda-dap-report",
      title: "Report to Congress: Diversity Action Plans Summary FY 2023 and FY 2024",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/media/184768/download",
      year: "2025",
      note: "Quote: \"The requirement to submit Diversity Action Plans will apply to certain studies for which enrollment commences after 180 days from the publication of the final guidance.\" Also: \"Although the Diversity Action Plan submission requirement has not yet come into effect, FDA has received voluntary diversity plans\" and \"CDER received 124 diversity plans in FY 2023 and 161 diversity plans in FY 2024.\"",
    },
    {
      id: "fda-dap-guidance",
      title: "Diversity Action Plans to Improve Enrollment of Participants from Underrepresented Populations in Clinical Studies (draft guidance)",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/diversity-action-plans-improve-enrollment-participants-underrepresented-populations-clinical-studies",
      year: "2024",
      note: "Checked September 22, 2026: status Draft, issued June 2024. Quote: \"Per a court order, HHS is required to restore this website to its version as of 12:00 AM on January 29, 2025.\" Also: \"Not for implementation. Contains non-binding recommendations.\"",
    },
    {
      id: "browne-2024",
      title: "Prevalence and Characteristics of Physicians Engaged in Research in the US",
      publisher: "JAMA Network Open (Browne A et al., AAMC)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11423164/",
      year: "2024",
      note: "AAMC 2022 National Sample Survey of Physicians, 5,917 US physicians, self-reported. Quote: \"In this study, 14% (95% CI, 12.6%-15.5%) of all physicians self-reported research engagement ... Most research-engaged physicians (83.6%; 95% CI, 79.2%-87.2%) dedicated 10% or less of their weekly hours to research\"",
    },
    {
      id: "harris-pcp-2026",
      title: "New national survey reveals gap between primary care provider support for clinical trials and real-world patient access",
      publisher: "Patient Advocate Foundation and PAN Foundation (PR Newswire)",
      url: "https://www.prnewswire.com/news-releases/new-national-survey-reveals-gap-between-primary-care-provider-support-for-clinical-trials-and-real-world-patient-access-302769917.html",
      year: "2026",
      note: "Harris Poll of 503 board-certified US primary care physicians, March 2026. Quote: \"86 percent of PCPs say they are likely to refer patients to clinical trials, only 37 percent report ever having referred a patient ... 76 percent do not feel well-equipped to support referrals\"",
    },
    {
      id: "mrct-english-2021",
      title: "Evaluating the frequency of English language requirements in clinical trial eligibility criteria: A systematic analysis using ClinicalTrials.gov",
      publisher: "PLOS Medicine (Muthukumar AV, Morrell W, Bierer BE)",
      url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003758",
      year: "2021",
      note: "Registry text analysis; eligibility criteria only. Quote: \"Of the 14,367 clinical trials registered on ClinicalTrials.gov between 1 January 2019 and 1 December 2020 ... 18.98% ... required the ability to read, speak, and/or understand English, and 2.71% ... (n = 390) specifically mentioned accommodation of translation to another language.\"",
    },
    {
      id: "mirza-2024",
      title: "The literacy barrier in clinical trial consents: a retrospective analysis",
      publisher: "eClinicalMedicine (Mirza FN et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11701435/",
      year: "2024",
      note: "Quote: \"Across 798 included federally funded trials, the mean (±SD) Flesch-Kincaid Grade Level of their consent forms was 12.0 ± 1.3, equivalent to a high school graduate reading level and significantly higher than the 8th grade average reading level of adults\".",
    },
    {
      id: "ecw-uds-approval",
      title: "eClinicalWorks EHR Receives HRSA Approval for UDS+ Submissions for Health Centers Nationwide",
      publisher: "eClinicalWorks (press release, March 25, 2024)",
      url: "https://www.eclinicalworks.com/eclinicalworks-ehr-receives-hrsa-approval-for-uds-submissions-for-health-centers-nationwide/",
      year: "2024",
      note: "Vendor-reported figure. Quote: \"vendor of choice for over 800, or roughly 60% of the nation's health centers\"",
    },
    {
      id: "nextgen-fqhc",
      title: "FQHC EHR/EMR Software",
      publisher: "NextGen Healthcare",
      url: "https://www.nextgen.com/markets/specialties/fqhc",
      year: "2026",
      note: "Vendor-reported figure, undated page read September 22, 2026. Quote: \"Learn why more than 300 community health centers choose NextGen Healthcare to power their care delivery.\"",
    },
    {
      id: "ochin-2026",
      title: "32 organizations implemented OCHIN Epic EHR in 2025, driving automation and transforming outcomes",
      publisher: "OCHIN",
      url: "https://ochin.org/news/32-new-health-orgs-join-ochin-2025/",
      year: "2026",
      note: "News release dated January 27, 2026. Quote: \"The new members join OCHIN's expanding network of more than 43,000 providers caring for nearly 8 million people across over 2,200 care delivery sites.\"",
    },
    {
      id: "athena-chc-2025",
      title: "athenahealth Launches athenaOne for Community Health Centers",
      publisher: "HIT Consultant (May 19, 2025)",
      url: "https://hitconsultant.net/2025/05/19/athenahealth-launches-athenaone-for-community-health-centers/",
      year: "2025",
      note: "Trade press report of a vendor announcement, read September 22, 2026. Quote: \"a provider of network-enabled software and services for healthcare practices and systems nationwide launches athenaOne® for Community Health Centers.\"",
    },
    {
      id: "hctec-community-connect",
      title: "Epic Community Connect: Strengthening Health Systems and Affiliates",
      publisher: "HCTec",
      url: "https://hctec.com/resource-center/strengthening-health-systems-with-epic-community-connect/",
      year: "2026",
      note: "Undated page, read September 22, 2026. Quote: \"Epic's Community Connect model is gaining momentum as health systems seek to extend their electronic health record (EHR) platforms to affiliated clinics, hospitals, and physician groups.\"",
    },
    {
      id: "ecw-cert",
      title: "Certified EHR Technology",
      publisher: "eClinicalWorks",
      url: "https://www.eclinicalworks.com/resources/certified-ehr-technology/",
      year: "2026",
      note: "Quote: \"Customers can learn more and enable FHIR APIs through the On-Demand Activation feature in the eClinicalWorks application.\"",
    },
  ],
  related: [
    { label: "Engage: outreach and pre-screening", href: "/engage", description: "Voice and text outreach, scripts and IRB review." },
    { label: "Consent support", href: "/consent", description: "How Bond explains the approved form while the site obtains consent." },
    { label: "eClinicalWorks integration", href: "/integrations/eclinicalworks", description: "The FHIR path for health centers on eClinicalWorks." },
    { label: "Implementation", href: "/implementation", description: "What a deployment involves, step by step." },
    { label: "Pricing", href: "/pricing", description: "The volume-based platform fee and per-enrollment success fee." },
    { label: "For physician groups", href: "/for/physician-groups", description: "How Bond fits a practice that is adding research." },
  ],
};

export default page;
