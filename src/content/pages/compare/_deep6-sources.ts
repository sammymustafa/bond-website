import type { Source } from "../../types";

/**
 * Deep 6 AI and Tempus sources shared by the "Deep 6 AI vs ..." comparison pages, based on
 * bond-vs-tempus-deep-6.ts and re-checked October 23, 2026. Pages pick the ones they cite with
 * deep6Sources(), so none is listed uncited.
 */
const DEEP6_SOURCES: Source[] = [
    {
      id: "tempus-10k-2025",
      title: "Tempus AI, Inc. Form 10-K for fiscal year ended December 31, 2025",
      publisher: "Tempus AI, Inc. / U.S. Securities and Exchange Commission",
      url: "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
      year: "2026",
      note: "Filed February 2026, accessed September 2026. Quote: \"On March 11, 2025, the Company acquired all of the issued and outstanding interests of Deep 6 AI, Inc.\" Revenue: \"The Company's Trials product includes TIME clinical trial matching services and other clinical trial services\"; \"To the extent the contract requires, the Company may also assist in opening the clinical trial site and enrolling the patient in the clinical trial\"; \"depending on the type of agreement\"; \"revenue is recognized upon one of the following: delivery of a notification to the physician alerting them to a clinical trial match, or once a patient is enrolled in a trial\"; \"the customer, which is the clinical trial sponsor\". Data connections: \"We use a variety of near real-time connections (e.g., HL7, FHIR) and batch data exchanges\"; \"Our proprietary tools connect to a provider's EHR system, data warehouse, or third-party data provider to pull out relevant structured and unstructured data that the provider has agreed to provide to Tempus\"; \"In certain circumstances, we cover the actual direct costs associated with the technical integrations needed to create a data connection.\"",
    },
    {
      id: "tempus-deep6-acquisition",
      title: "Tempus Announces Acquisition of Deep 6 AI",
      publisher: "Tempus AI, Inc. press release",
      url: "https://www.tempus.com/news/pr/tempus-announces-acquisition-of-deep-6-ai/",
      year: "2025",
      note: "Press release dated March 11, 2025, read October 23, 2026. Quotes: \"today announced it has acquired Deep 6 AI, a leading AI-powered precision research platform for healthcare organizations and life sciences companies\" and \"Its AI-powered software matches patients to clinical trials by mining real-time structured and unstructured electronic medical record (EMR) data\".",
    },
    {
      id: "tempus-time-site-2026",
      title: "Clinical Trial Matching for Oncology | TIME Trial Network",
      publisher: "Tempus AI, Inc. (tempus.com)",
      url: "https://www.tempus.com/oncology/clinical-trial-matching/",
      year: "2026",
      note: "Re-checked on tempus.com October 23, 2026. Quote: trial matching \"with a clinical team of experts pre-screening the matched patients and presenting potentially eligible patients with a white-glove service to each site\" and, under enhanced patient pre-screening, \"Generative AI scans structured and unstructured clinical notes, enhancing identification of patients who may be eligible for trial participation.\"",
    },
    {
      id: "tempus-next-trials-2026",
      title: "Tempus Next Trials",
      publisher: "Tempus AI, Inc. (tempus.com)",
      url: "https://www.tempus.com/about-us/tempus-tech/next-trials/",
      year: "2026",
      note: "Read October 23, 2026. Quotes: \"AI-enabled platform supports clinical trial pre-screening based on your patients' multimodal, structured and unstructured health information (clinical, imaging and molecular data)\"; \"Accelerate accrual to trials already open at your practice\"; \"AI-enhanced workflows are designed to assist site clinicians in identifying, screening and enrolling eligible patients for TIME trials.\"; \"When ready, Next Trials can be expanded to pre-screen patients across additional disease groups beyond oncology.\"",
    },
    {
      id: "tempus-time-asco-2025",
      title: "A technology-enabled clinical trial program's impact on patient screening and trial enrollment in 2024",
      publisher: "Mallahan S, et al. (Tempus authors), ASCO Annual Meeting 2025, abstract 1506; Tempus publication page",
      url: "https://www.tempus.com/publications/a-technology-enabled-clinical-trial-programs-impact-on-patient-screening-and-trial-enrollment-in-2024/",
      year: "2025",
      note: "Journal of Clinical Oncology 43(16_suppl), https://doi.org/10.1200/JCO.2025.43.16_suppl.1506. Describes the TIME workflow in 2024. Read from the Internet Archive copy of February 13, 2026 (https://web.archive.org/web/20260213063526/https://www.tempus.com/publications/a-technology-enabled-clinical-trial-programs-impact-on-patient-screening-and-trial-enrollment-in-2024/). Quote: \"Qualifying matches were then reviewed by a Tempus nurse and sent to sites if confirmed eligible.\" Also: \"structured and unstructured data generated from Electronic Medical Record integration, next generation sequencing results, and natural language processing models.\"",
    },
    {
      id: "tempus-ttct-2026",
      title: "Clinical Trials for Patients | Tempus TIME",
      publisher: "Tempus AI, Inc. (tempus.com)",
      url: "https://www.tempus.com/ttct/",
      year: "2026",
      note: "Read from the Internet Archive copy of March 16, 2026 (https://web.archive.org/web/20260316114747/https://www.tempus.com/ttct/) because tempus.com returned HTTP 429 when we checked in September 2026. Quote: \"A Tempus Nurse Navigator will contact you within 1 business day to share information about trials in our network that may be a match for you\"; \"Our Nurse Navigators can also speak with you and your doctor\"; \"The cancer clinical trials in the TIME program cover various cancer types, cancer stages, and biomarkers.\"",
    },
    {
      id: "deep6-cassidy-2024",
      title: "Doug Cassidy Appointed President of the Deep 6 AI Precision Research Ecosystem",
      publisher: "Deep 6 AI (PR Newswire)",
      url: "https://www.prnewswire.com/news-releases/doug-cassidy-appointed-president-of-the-deep-6-ai-precision-research-ecosystem-the-largest-network-of-sites-and-sponsors-using-ai-to-accelerate-research-302205332.html",
      year: "2024",
      note: "Company press release, July 24, 2024. Quote: \"Healthcare organizations that become part of the Ecosystem use the company's AI-powered software platform enterprise-wide for investigator-initiated, government-funded, and sponsored trials. Often, the technology is managed centrally (i.e., by the Clinical Trials Office)\" and \"the launch of our life sciences vertical in 2021\".",
    },
    {
      id: "deep6-life-sciences-2023",
      title: "Deep 6 AI Expands its Recruitment Acceleration Solution for Life Sciences",
      publisher: "Deep 6 AI (PR Newswire)",
      url: "https://www.prnewswire.com/news-releases/deep-6-ai-expands-its-recruitment-acceleration-solution-for-life-sciences-to-shorten-the-time-from-determining-patient-eligibility-to-enrollment-302006758.html",
      year: "2023",
      note: "Company press release, December 6, 2023. Quote: \"Life sciences companies can share AI-matched patient cohorts with IRB-approved site staff across the Deep 6 AI ecosystem. This allows sites to identify each patient, validate their eligibility with evidence in the EMR, and track their recruitment statuses\" and \"The site's research team can easily identify eligible patients treated by physicians other than the principal investigator, validate them, and track referrals inside the EMR.\"",
    },
    {
      id: "deep6-ttuhsc-2023",
      title: "Texas Tech University Health Sciences Center Partners with Deep 6 AI to Launch an AI Program for Clinical Trials",
      publisher: "Deep 6 AI (PR Newswire)",
      url: "https://www.prnewswire.com/news-releases/texas-tech-university-health-sciences-center-partners-with-deep-6-ai-to-launch-an-ai-program-for-clinical-trials-301885663.html",
      year: "2023",
      note: "Company press release, August 1, 2023. Quote: Deep 6 AI uses natural language processing to search \"structured and unstructured EMR data points, such as physician notes, lab reports, outpatient notes, radiology reports, genomics results, and pathology reports\" and \"By integrating with TTUHSC's EMR, Deep 6 AI's software platform can precision-match patients to trials\".",
    },
    {
      id: "osu-aaci-2024",
      title: "Integrating AI-Enabled Clinical Trial Matching into Operations",
      publisher: "Stillman R, Campbell A, Humphries K, Schweitzer C. The Ohio State University Comprehensive Cancer Center; AACI CRI 2024 abstract",
      url: "https://www.aaci-cancer.org/Files/Admin/CRI/2024/120---Integrating-AI-Enabled-Clinical-Trials-Matching-into-Operations.pdf",
      year: "2024",
      note: "Customer work-in-progress abstract on Deep 6 AI at Ohio State, accessed September 2026. Quote: \"a user interface that speeds patient screening by presenting and highlighting patient data related to the inclusion/exclusion criteria across a longitudinal patient record\"; \"to be able to reference the text in which the NLP identified the keywords to view the keywords in context to confirm the finding\"; \"Deep 6 AI can incorporate multiple data sources beyond the electronic medical records (EMR), such as genomics, custom databases, cancer registries, CTMS, etc.\"",
    },
    {
      id: "deep6-archive-2026",
      title: "Deep 6 AI homepage (archived)",
      publisher: "Deep 6 AI, via the Internet Archive",
      url: "https://web.archive.org/web/20260103153921/https://deep6.ai/",
      year: "2026",
      note: "Internet Archive copy of January 3, 2026. Quotes: \"Deep 6 AI has joined Tempus.\" and \"Deep 6 AI is now a Tempus AI company\". deep6.ai itself did not load when we checked on October 23, 2026.",
    },
];

export function deep6Sources(...ids: string[]): Source[] {
  return ids.map((id) => {
    const source = DEEP6_SOURCES.find((s) => s.id === id);
    if (!source) throw new Error(`Unknown Deep 6 source: ${id}`);
    return source;
  });
}
