import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";

const page: SeoPage = {
  path: "/compare/bond-vs-tempus-deep-6",
  category: "comparison",
  title: "Deep 6 AI alternative: Bond Health vs Tempus trial matching",
  description:
    "Looking for a Deep 6 AI alternative? Bond finds eligible patients in your EHR, calls or texts them, books visits and supports consent in one product.",
  keywords: [
    "Deep 6 AI alternative",
    "Tempus trial matching",
    "Tempus TIME program",
    "Tempus Next Trials",
    "Deep 6 AI Tempus acquisition",
    "EHR clinical trial matching software",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs Tempus (Deep 6 AI)",
  intro:
    "Tempus AI acquired Deep 6 AI on March 11, 2025, and offers EHR-based trial matching through Deep 6 AI, its TIME oncology trial network, and Next Trials pre-screening for trials already open at a practice.{{cite:tempus-10k-2025,tempus-time-site-2026,tempus-next-trials-2026}} Bond Health reads a site's own EHR, including clinical notes, against each protocol, then contacts, pre-screens and schedules matched patients by voice and text and supports informed consent.{{cite:bond-site}} For sites running their own studies in any therapeutic area, Bond covers finding, contacting, scheduling and consent in one product.",
  summary: "How Bond compares with Tempus's Deep 6 AI, TIME and Next Trials, from EHR matching to outreach, consent and pricing.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over Tempus and Deep 6 AI?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "For sites running their own studies in any therapeutic area, Bond is one product that finds eligible patients in the EHR, contacts and schedules them by voice and text, and supports consent, with a success fee paid per randomized patient.{{cite:bond-site,bond-product}}",
        },
        {
          type: "stats",
          items: [
            { value: "4 to 6 weeks", label: "typical time to go live with full EHR integration, handled by Bond's team with no integration fee", cite: "bond-site" },
            { value: "10,000+", label: "charts screened per hour", cite: "bond-site" },
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**One product from chart to consent.** Bond automates EHR screening, patient outreach and consent tracking in one workflow, with \"no data silos, no manual handoffs, and complete visibility from first match to signed consent.\"{{cite:bond-site}} In Deep 6 AI's published workflow, matches go to site staff to validate and track, and in TIME's 2024 workflow a Tempus nurse reviewed matches before sending them to sites.{{cite:deep6-life-sciences-2023,tempus-time-asco-2025}}",
            "**Agents that start from the chart.** Bond's voice agents start from what Identify found in the chart, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation. They speak the patient's language, switch languages mid-call, and transfer live to a coordinator when the site wants that.{{cite:bond-product}} Bond's site cites a 3x contact rate.{{cite:bond-site}}",
            "**Consent support for patients.** Plain-language explanations, patient Q&A and escalation to staff, with checks on the patient's understanding of key points and an auditable record for the site. Bond's site cites 90%+ completion for consent support. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
            "**Support after enrollment.** The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
            "**Any study, any site.** Screening is configured from each protocol's own criteria, so it works for drug and device studies alike, in any [therapeutic area](/therapeutic-areas).{{cite:bond-product,bond-site}} Bond serves research sites, physician groups, FQHCs, site networks, CROs and sponsors.{{cite:bond-site}}",
            "**No integration fee.** A volume-based platform fee plus a success fee per randomized patient, with no integration fee. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
            "**Ads when you need more patients.** For studies that need patients beyond your records, Bond sets up Meta and Google ad campaigns, and those leads flow into the same pre-screening and scheduling as EHR matches.{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
        {
          type: "p",
          text: "As of September 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that reads EHR notes against a protocol, contacts patients by voice and text, and supports informed consent.",
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and Tempus compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Years in the Tempus column show each source's date. \"Not publicly documented\" means we found no public description in the materials we reviewed in September 2026, not that the capability is absent.",
        },
        {
          type: "table",
          caption: "Bond Health and Tempus (Deep 6 AI, TIME and Next Trials), from materials reviewed in September 2026",
          columns: ["Capability", "Bond Health", "Tempus (Deep 6 AI, TIME, Next Trials)"],
          rows: [
            [
              "One workflow from chart to consent",
              "Yes. [Identify](/identify), [Engage](/engage) and [Consent](/consent) run as one workflow, with \"no manual handoffs\" from first match to signed consent.{{cite:bond-site}}",
              "Deep 6 AI: matched patients go to site staff, who validate eligibility in the EMR and track recruitment status (2023). TIME: a Tempus nurse reviewed qualifying matches and sent confirmed ones to sites (2025), and Tempus describes a clinical team that pre-screens matched patients and presents them to each site (2026).{{cite:deep6-life-sciences-2023,tempus-time-asco-2025,tempus-time-site-2026}}",
            ],
            [
              "EHR identification",
              "LLM-based screening of the site's EHR against each protocol's criteria, returning ranked matches: 10,000+ charts per hour and 90%+ matching accuracy.{{cite:bond-site}}",
              "Deep 6 AI mines real-time structured and unstructured EMR data (2025). TIME matched on EMR data, sequencing results and NLP output (2025). Next Trials pre-screens on clinical, imaging and molecular data (2026).{{cite:tempus-deep6-acquisition,tempus-time-asco-2025,tempus-next-trials-2026}}",
            ],
            [
              "Unstructured notes",
              "Reads clinical notes, prescriptions and lab results, and uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
              "Deep 6 AI applies NLP to physician notes, lab, radiology and pathology reports, and genomics results (2023). Tempus says generative AI scans structured and unstructured clinical notes for pre-screening (2026).{{cite:deep6-ttuhsc-2023,tempus-time-site-2026}}",
            ],
            [
              "Evidence behind each criterion",
              "Yes. Ranked matches come with the evidence behind each criterion decision and traceability to the chart.{{cite:bond-site}}",
              "Yes. Ohio State describes Deep 6 AI highlighting the patient data related to the inclusion and exclusion criteria and showing the text where its NLP found each keyword (2024).{{cite:osu-aaci-2024}}",
            ],
            [
              "Outreach and scheduling",
              "Voice and SMS agents contact matched patients, starting from what Identify found in the chart, and can pre-screen and book a visit in one conversation, in the patient's language. Bond's site cites a 3x contact rate. Patients are told AI is used and can reach a person at any time, by live transfer to a coordinator or a callback, as the site prefers.{{cite:bond-site,bond-product}}",
              "Deep 6 AI: site staff validate matches and track referrals in the EMR (2023). TIME: Tempus Nurse Navigators contact patients who ask about TIME trials and can speak with their doctors (2026). Automated calls or texts to EHR-matched patients, and visit booking: not publicly documented (September 2026).{{cite:deep6-life-sciences-2023,tempus-ttct-2026}}",
            ],
            [
              "Consent",
              "Plain-language explanations, patient Q&A and staff escalation. Consent support checks the patient's understanding of key points and keeps an auditable record for the site. Bond's site cites 90%+ completion for consent support. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
              "Patient-facing consent support: not publicly documented (September 2026).",
            ],
            [
              "Matching across studies",
              "Screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
              "Deep 6 AI is used enterprise-wide across a health system's investigator-initiated, government-funded and sponsored trials, often run centrally by the Clinical Trials Office (2024).{{cite:deep6-cassidy-2024}}",
            ],
            [
              "Support after enrollment",
              "The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
              "Not publicly documented (September 2026).",
            ],
            [
              "Therapeutic breadth",
              "Any [therapeutic area](/therapeutic-areas). Screening is configured from each protocol's own criteria, for drug and device studies alike.{{cite:bond-site,bond-product}}",
              "TIME: oncology trials (2026). Next Trials: oncology, expandable to other disease groups (2026). Deep 6 AI: used enterprise-wide across a health system's trials (2024).{{cite:tempus-ttct-2026,tempus-next-trials-2026,deep6-cassidy-2024}}",
            ],
            [
              "Who it serves",
              "Any research site, including physician groups and FQHCs, plus site networks, CROs and sponsors.{{cite:bond-site}}",
              "Deep 6 AI: health systems, often through the Clinical Trials Office, and life sciences companies (2024). TIME: oncology sites, with the trial sponsor as the customer (2026). Next Trials: provider practices, for trials already open there (2026).{{cite:deep6-cassidy-2024,tempus-time-site-2026,tempus-10k-2025,tempus-next-trials-2026}}",
            ],
            [
              "Integrations",
              "All the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, via FHIR and HL7 or an aggregator. [CRIO](/integrations/crio) Certified Partner. Direct integrations with CTMS and calendars.{{cite:bond-site,bond-product,bond-acrp-talk}}",
              "Tempus connects to a provider's EHR, data warehouse or a third-party data provider, using near real-time HL7 and FHIR connections and batch data exchange (2026). Deep 6 AI integrates with the health system's EMR (2023) and can bring in genomics, cancer registry and CTMS data (2024).{{cite:tempus-10k-2025,deep6-ttuhsc-2023,osu-aaci-2024}}",
            ],
            [
              "Implementation",
              "4 to 6 weeks for full EHR integration, depending on the EHR, IT review and interface method. Bond's implementation team handles the integration end to end, with no integration fee, and keeps improving outreach messaging until study close-out ([implementation](/implementation)).{{cite:bond-site,bond-product}}",
              "In certain circumstances, Tempus covers the direct cost of the technical integration (2026). One Edge SDX connection can power both TIME and Next Trials (2026). Timeline to connect a site's EHR: not publicly documented in the materials we reviewed (September 2026).{{cite:tempus-10k-2025,tempus-next-trials-2026}}",
            ],
            [
              "Pricing",
              "A volume-based platform fee plus a success fee per randomized patient, with no integration fee ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
              "No public price list found (September 2026). Tempus's 10-K names the trial sponsor as the TIME customer. Depending on the agreement, Tempus recognizes revenue when it notifies a physician of a match or when a patient enrolls, and where the contract requires, it may help open the trial site and enroll the patient (2026).{{cite:tempus-10k-2025}}",
            ],
          ],
        },
      ],
    },
    {
      id: "what-tempus-is-known-for",
      heading: "Can Bond do what Tempus is known for?",
      blocks: [
        {
          type: "p",
          text: "Each strength below appears in the Tempus column above. Here is how Bond covers it.",
        },
        {
          type: "ul",
          items: [
            "**Evidence behind each criterion: yes.** Bond ranks matches with the evidence behind each criterion decision and traceability to the chart, and its site cites 50%+ less chart review.{{cite:bond-site}} In Bond's technical report, every model decision receives provenance-tagged evidence.{{cite:bond-whitepaper}}",
            "**Imaging, pathology and molecular data in the chart: yes.** Identify uses imaging data and other unstructured documents, including pathology, radiology and molecular reports, alongside clinical notes, prescriptions and lab results.{{cite:bond-product,bond-site}}",
            "**Oncology screening: yes.** Oncology studies are set up from each protocol's own criteria, like any other study, Bond connects to oncology EHRs such as OncoEMR as well as Epic and Oracle Health, and the same product that screens the chart also pre-screens the patient and books the screening visit.{{cite:bond-product,bond-site}} See [oncology recruitment](/oncology) for where oncology criteria sit in the chart.",
            "**Use across a health system's or network's studies: yes.** Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}} Across sites, Bond offers network-wide standardization and consistent metrics, with a real-time dashboard of patients matched, contacted, pre-screened, consented and randomized.{{cite:bond-site}}",
          ],
        },
      ],
    },
    {
      id: "evaluate",
      heading: "How can you test Bond against Tempus on your own data?",
      blocks: [
        {
          type: "p",
          text: "Bond welcomes a head-to-head pilot. A demo shows an interface; a pilot on your own records, under a [business associate agreement](/glossary/baa), shows which vendor gets more eligible patients to a screening visit.",
        },
        {
          type: "steps",
          items: [
            { title: "Pick a study with a known answer", text: "Use a closed or mature study where coordinators know who enrolled, who screen-failed and why." },
            { title: "Give both vendors the same protocol and patient list", text: "Same criteria, same records. Ask each for the chart evidence behind every criterion decision, not only a score." },
            { title: "Compare evidence quality", text: "Adjudicate clear matches, clear exclusions and borderline cases separately, so easy cases do not hide errors in hard ones." },
            {
              title: "Compare contact rate and time to first visit",
              text: "Track who contacts each matched patient, how fast, how many are reached and how many reach a screening visit. A Bond pilot can also run outreach, pre-screening and scheduling on a list you already have, such as ad leads, referrals or registry contacts.{{cite:bond-site}}",
            },
            {
              title: "Compare cost per randomized patient",
              text: "Add platform, integration and staff time, then divide by randomized patients. Bond's success fee is charged per randomized patient ([pricing](/pricing)).{{cite:bond-site}}",
            },
            {
              title: "Compare the paperwork",
              text: "BAA, audit logging, data-use terms and who does the IT work. Ask each vendor, Bond included, whether data from your connection is de-identified, retained or licensed to others. Bond signs BAAs, is HIPAA compliant and SOC 2 Type I compliant, and its public Trust Center lists 73 HIPAA Security Rule controls monitored continuously by Vanta ([security](/security)).{{cite:bond-site,bond-product,bond-trust-center}}",
            },
          ],
        },
        {
          type: "p",
          text: "Outreach needs IRB review with any vendor. FDA guidance expects IRBs to review recruitment advertising and to check that telephone screening procedures protect prospective subjects.{{cite:fda-recruiting-1998}} Bond's [IRB submission language](/templates/irb-submission-language-ai-outreach) template covers AI-assisted outreach, and the [vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) turns these steps into questions.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol. We will show how Bond handles its hardest criteria and the evidence behind each decision, and plan a head-to-head pilot on your records.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
    {
      id: "how-made",
      heading: "How was this comparison made?",
      blocks: [
        {
          type: "p",
          text: "Bond wrote this page in September 2026. Tempus facts come from public sources: Tempus's 2025 Form 10-K, company press releases, a Tempus-authored conference abstract, an Ohio State customer abstract, an ACRP exhibitor listing and Tempus web pages. tempus.com returned rate-limit errors (HTTP 429) to our requests that month, so we read its pages from Internet Archive copies dated February to April 2026; the live pages may have changed since. Bond's figures and capabilities come from its website, its Trust Center, its technical report, an April 2026 ACRP presentation and product information Bond provided, each cited where used. We used no private or internal competitive material.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a Deep 6 AI alternative?",
      a: "Yes. Like Deep 6 AI, Bond screens the site's EHR, including unstructured notes, and shows the evidence behind each criterion.{{cite:bond-site,osu-aaci-2024}} Bond then contacts, pre-screens and schedules matched patients by voice and text, supports informed consent, and charges a success fee per randomized patient ([pricing](/pricing)).{{cite:bond-site}}",
    },
    {
      q: "Is Deep 6 AI part of Tempus now?",
      a: "Yes. Tempus's 2025 Form 10-K says it acquired Deep 6 AI, Inc. on March 11, 2025.{{cite:tempus-10k-2025}} The Deep 6 AI name is still in use: ACRP listed Deep 6 AI as an exhibitor at its 2026 meeting.{{cite:acrp-2026-deep6}} Tempus also runs TIME, its oncology trial network, and Next Trials, which pre-screens for trials already open at a practice.{{cite:tempus-time-site-2026,tempus-next-trials-2026}}",
    },
    {
      q: "Does Bond work for oncology trials?",
      a: "Yes. Screening is configured from each protocol's own criteria, and Identify uses imaging data and other unstructured documents, including pathology, radiology and molecular reports, along with clinical notes, prescriptions and lab results. Bond connects to OncoEMR as well as Epic, Oracle Health and the other major EHRs.{{cite:bond-product,bond-site}} Bond's agents then contact matched patients, pre-screen them and book screening visits.{{cite:bond-site}} See [oncology recruitment](/oncology).",
    },
    {
      q: "How does pricing compare?",
      a: "Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee ([pricing](/pricing)).{{cite:bond-site,bond-product}} We found no public price list for Deep 6 AI, TIME or Next Trials as of September 2026. Tempus's 10-K names the trial sponsor as the TIME customer and says that, depending on the agreement, Tempus recognizes revenue when it notifies a physician of a match or when a patient enrolls.{{cite:tempus-10k-2025}}",
    },
  ],
  sources: [
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
      publisher: "Tempus AI, Inc. press release, republished by MemorialCare Innovation Fund",
      url: "https://memorialcareinnovationfund.com/tempus-announces-acquisition-of-deep-6-ai/",
      year: "2025",
      note: "Press release dated March 11, 2025, accessed September 2026. The original on Tempus's own website did not load when we checked. Quote: \"Its AI-powered software matches patients to clinical trials by mining real-time structured and unstructured electronic medical record (EMR) data\".",
    },
    {
      id: "tempus-time-site-2026",
      title: "Clinical Trial Matching for Oncology | TIME Trial Network",
      publisher: "Tempus AI, Inc. (tempus.com)",
      url: "https://www.tempus.com/oncology/clinical-trial-matching/",
      year: "2026",
      note: "Read from the Internet Archive copy of April 11, 2026 (https://web.archive.org/web/20260411055140/https://www.tempus.com/oncology/clinical-trial-matching/) because tempus.com returned HTTP 429 when we checked in September 2026. Quote: trial matching \"with a clinical team of experts pre-screening the matched patients and presenting potentially eligible patients with a white-glove service to each site\" and, under enhanced patient pre-screening, \"Generative AI scans structured and unstructured clinical notes, enhancing identification of patients who may be eligible for trial participation.\"",
    },
    {
      id: "tempus-next-trials-2026",
      title: "Tempus Next Trials",
      publisher: "Tempus AI, Inc. (tempus.com)",
      url: "https://www.tempus.com/about-us/tempus-tech/next-trials/",
      year: "2026",
      note: "Read from the Internet Archive copy of April 17, 2026 (https://web.archive.org/web/20260417184842/https://www.tempus.com/about-us/tempus-tech/next-trials/) because tempus.com returned HTTP 429 when we checked in September 2026. Quote: \"AI-enabled platform supports clinical trial pre-screening based on your patients' multimodal, structured and unstructured health information (clinical, imaging and molecular data)\"; \"Accelerate accrual to trials already open at your practice\"; \"Extend the value of your Edge SDX connection by using it to power both the TIME Trial Network and Next Trials\"; \"When ready, Next Trials can be expanded to pre-screen patients across additional disease groups beyond oncology.\"",
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
      id: "acrp-2026-deep6",
      title: "ACRP 2026: Deep 6 AI exhibitor listing",
      publisher: "Association of Clinical Research Professionals (ACRP)",
      url: "https://2026.acrpnet.org/deep-6-ai",
      year: "2026",
      note: "Accessed September 2026. Exhibitor page titled \"ACRP 2026 | Deep 6 AI\".",
    },
    {
      id: "fda-recruiting-1998",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Guidance dated January 1998, accessed September 2026. Quote: \"FDA expects IRBs to review the advertising to assure that it is not unduly coercive\" and, on receptionist screening scripts, \"The IRB should assure the procedures followed adequately protect the rights and welfare of the prospective subjects.\"",
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
      note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request.",
    },
    {
      id: "bond-acrp-talk",
      title: "Modernizing Patient Recruitment: AI Tools, Workflows, and Outcomes",
      publisher: "Bond Health presentation to the ACRP New Jersey chapter (Goel R, Mustafa S)",
      year: "2026",
      note: "April 2026. Slides state \"1,000 patients screened in <2 hours\", \"Direct integrations with Google Sheets, CTMS, and Calendars\" and \"Flexible knowledge base for Voice Agents\".",
    },
    {
      id: "bond-trust-center",
      title: "Bond Health Trust Center",
      publisher: "Bond Health, monitored by Vanta",
      url: "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj",
      year: "2026",
      note: "Lists 73 HIPAA Security Rule controls: infrastructure security (20), organizational security (14), internal security procedures (38), and data and privacy (1), monitored continuously by Vanta. Viewed September 23, 2026.",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, vendor by vendor." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based platform fee plus a per-randomized-patient success fee." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "How Bond's agents contact, pre-screen and schedule matched patients." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and explains each match." },
    { label: "Oncology recruitment", href: "/oncology", description: "Where oncology criteria sit in the chart, and how Bond screens for them." },
  ],
};

export default page;
