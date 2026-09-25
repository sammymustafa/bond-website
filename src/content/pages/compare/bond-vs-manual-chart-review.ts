import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";

const page: SeoPage = {
  path: "/compare/bond-vs-manual-chart-review",
  category: "comparison",
  title: "Bond vs manual chart review: trial pre-screening time, cost",
  description:
    "How Bond compares with manual chart review for trial pre-screening: 10,000+ charts per hour, evidence for every criterion and 50%+ less chart review.",
  keywords: [
    "manual chart review clinical trials",
    "manual chart review alternative",
    "clinical trial pre-screening cost",
    "coordinator chart review time",
    "AI pre-screening vs manual review",
    "EHR screening for clinical trials",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs manual chart review",
  intro:
    "Manual pre-screening means coordinators, research nurses or clinicians reading each chart against a study's criteria.{{cite:parikh-2026,penberthy-2012}} Bond Health reads the site's EHR, including clinical notes, against each study's criteria, ranks the matches with the chart evidence behind them, then contacts, pre-screens and schedules patients by voice and text and supports informed consent.{{cite:bond-site}} For any site with more charts than coordinator hours, that makes Bond the stronger choice: coordinators keep the final eligibility call and review the cited evidence instead of reading every chart.",
  summary: "Why sites move trial pre-screening from manual chart review to Bond: coverage, evidence for every criterion, coordinator time and cost.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over manual chart review?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond screens every chart in scope, shows the chart evidence for each criterion and carries matched patients through to consent support, with up to 3x faster enrollment than manual recruitment reported on its site.{{cite:bond-site}}",
        },
        {
          type: "stats",
          items: [
            { value: "10,000+", label: "Charts screened per hour", cite: "bond-site" },
            { value: "50%+", label: "Less chart review for coordinators", cite: "bond-site" },
            { value: "90%+", label: "Matching accuracy, with the chart evidence for every criterion", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**Every chart in scope, not only the ones staff can reach.** At 10,000+ charts per hour, coverage stops depending on coordinator hours.{{cite:bond-site}}",
            "**Notes, imaging and documents, not just structured fields.** Identify reads clinical notes, prescriptions and lab results, and uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
            "**Evidence for every criterion.** Each ranked match shows the chart evidence behind each decision, so coordinators confirm a match instead of rereading the chart.{{cite:bond-site}}",
            "**Every open study at once.** Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**From match to consent in one workflow.** Chart-aware voice and text agents pre-screen patients and book visits, and consent support gives plain-language explanations and answers patient questions. Bond's site cites a 3x contact rate and 90%+ completion for consent support.{{cite:bond-site,bond-product}}",
            "**Fees tied to results.** Bond charges a volume-based platform fee plus a success fee per randomized patient, with no integration fee; see [pricing](/pricing).{{cite:bond-site,bond-product}}",
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
      id: "side-by-side",
      heading: "How do Bond and manual review compare, area by area?",
      blocks: [
        {
          type: "p",
          text: "Rows run from chart screening in [Identify](/identify) through outreach in [Engage](/engage) and [consent](/consent) support, then reporting, integration, cost and setup.",
        },
        {
          type: "table",
          caption: "Bond and manual chart review, side by side (September 2026)",
          columns: ["Area", "Bond", "Manual review"],
          rows: [
            ["Workflow", "One workflow from EHR screening to outreach, scheduling and consent support{{cite:bond-site}}", "Chart review by staff; calls, booking and consent are further staff tasks"],
            ["Reading the chart", "LLM screening of structured fields, clinical notes, prescriptions and lab results, plus imaging data and other unstructured documents, including pathology, radiology and molecular reports{{cite:bond-site,bond-product}}", "Trained staff read each chart against the criteria{{cite:unlu-2024-rectifier}}"],
            ["Accuracy", "90%+ matching accuracy, with the chart evidence for every criterion{{cite:bond-site}}", "Varies by reviewer; expert annotators disagree on complex criteria{{cite:stubbs-2019}}"],
            ["Coverage", "Every record in scope, at 10,000+ charts per hour{{cite:bond-site}}", "What staff time allows{{cite:wiess-2023}}. In one randomized trial of an AI tool built by Mass General Brigham researchers, not Bond, AI-assisted screening found 458 eligible patients against 284 found manually{{cite:mgb-2025-rct}}"],
            ["Consistency", "The same configured criteria applied to every chart{{cite:bond-product}}", "Varies by reviewer: on the n2c2 2018 benchmark, two expert annotators most often disagreed because one found evidence the other missed{{cite:stubbs-2019}}"],
            ["Coordinator time", "Coordinators check the cited evidence on ranked matches instead of reading every chart; Bond's site reports 50%+ less chart review{{cite:bond-site}}", "Staff read each chart; published measurements run from minutes per patient to hours for a full evaluation{{cite:wiess-2023,penberthy-2012}}"],
            ["Cross-study matching", "Each patient screened against every open study at the site, so a patient who screens out of one study can be matched to another{{cite:bond-product}}", "Each trial's eligibility decision is its own manual review{{cite:penberthy-2012}}"],
            ["Outreach and scheduling", "Voice and text agents start from what Identify found in the chart, skip questions the chart already answers, explain why the patient was contacted, and pre-screen and book a visit in one conversation; Bond's site cites a 3x contact rate{{cite:bond-product,bond-site}}", "Staff time for each call, text and booking"],
            ["Consent", "Plain-language explanations and patient Q&A; checks the patient's understanding of key points and keeps an auditable record for the site; Bond's site cites 90%+ completion. The site and PI obtain consent{{cite:bond-site,bond-product}}", "Staff time with each patient; the site and PI obtain consent"],
            ["Reporting and audit trail", "Real-time dashboard and audit trail covering patients matched, contacted, pre-screened, consented and randomized, plus coordinator hours saved{{cite:bond-site}}", "The coordinator's recorded assessment and the site's screening log, which ICH E6(R3) lists among essential records{{cite:unlu-2024-rectifier,ich-e6r3}}"],
            ["Integrations", "All the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, via FHIR, HL7 or an aggregator; CRIO Certified Partner{{cite:bond-site,bond-product}}; direct Google Sheets, CTMS and calendar integrations{{cite:bond-acrp-talk}}", "Staff work directly in the EHR, screening log and CTMS"],
            ["Cost model", "A volume-based platform fee plus a success fee per randomized patient, with no integration fee{{cite:bond-site,bond-product}}", "Staff hours: $129 to $336 in personnel cost per enrolled patient at one center in 2012{{cite:penberthy-2012}}"],
            ["Setup", "48 hours for full EHR integration, depending on the EHR, IT review and interface method, with Bond's implementation team handling it end to end and no integration fee{{cite:bond-site,bond-product}}", "Trained staff and a screening log{{cite:unlu-2024-rectifier,ich-e6r3}}"],
          ],
          note: "Bond figures come from Bond's website and product information, September 2026. Manual review figures come from single published studies with different methods.",
        },
      ],
    },
    {
      id: "when-bond-pays-off",
      heading: "When does Bond pay off over manual review?",
      blocks: [
        {
          type: "p",
          text: "Bond pays off wherever there are more charts to read than coordinator hours to read them. It shows most clearly in four situations:",
        },
        {
          type: "ul",
          items: [
            "**Several studies at once.** By hand, deciding eligibility for each trial typically takes a lengthy manual review of the chart.{{cite:penberthy-2012}} Bond checks each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**Large EHR populations.** Bond screens 10,000+ charts per hour, so every record in scope is screened, not only the charts staff time allows.{{cite:bond-site}}",
            "**Criteria that live in notes.** In the COPILOT-HF heart failure trial, structured EHR data could settle only 5 of 17 exclusion criteria.{{cite:unlu-2024-rectifier}} Bond reads the notes, prescriptions, lab results and reports in the chart for every record in scope.{{cite:bond-site,bond-product}}",
            "**More charts than coordinator hours.** At one cancer center, finding, screening and enrolling one patient took 3.4 to 8.8 staff hours.{{cite:penberthy-2012}} With Bond, coordinators review ranked matches with the evidence for each criterion instead of reading every chart, and Bond's site reports 50%+ less chart review.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "A single small study with a short candidate list can be handled by hand, and Bond's agents can still contact, pre-screen and schedule the patients on that list.{{cite:bond-site}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where the time savings come from",
          text: "In a randomized evaluation on 355 oncology charts, the study design required coordinators to read every document in full, with or without AI help. The AI model raised coordinator accuracy from 71.1% to 76.5% but did not cut time per chart (37.4 against 37.8 minutes). The authors ask readers to interpret that efficiency result cautiously, noting that in practice many pre-screens move on from a chart as soon as an exclusion criterion turns up.{{cite:parikh-2026}} Time savings come when coordinators review the evidence the software cites instead of rereading the chart. That is how Bond's review works: each ranked match arrives with the chart evidence for every criterion, and Bond's site reports 50%+ less chart review.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "Other published work points the same way. At Yale's GI oncology clinic, a matching algorithm that exported the relevant patient data for staff to review cut eligibility review from 3.11 to 1.82 minutes per patient, and in a Mass General Brigham randomized trial, staff gave the charts the AI flagged as eligible a short, rapid review.{{cite:wiess-2023,mgb-2025-rct}} A 2014 review of 79 recruitment support systems concluded that success depends more on workflow integration than on the algorithm.{{cite:kopcke-2014}}",
        },
      ],
    },
    {
      id: "what-manual-review-is-known-for",
      heading: "Can Bond do what manual review is known for?",
      blocks: [
        {
          type: "p",
          text: "Sites value manual review for clinical judgment, for reading past structured fields, for a record of each decision, for working on any protocol and for starting without an EHR integration. Bond covers each one.",
        },
        {
          type: "ul",
          items: [
            "**Clinical judgment.** The RECTIFIER authors recommend final clinician review before patient engagement.{{cite:unlu-2024-rectifier}} Bond is built around that review: coordinators work from ranked matches with the evidence for each criterion, and the site and PI obtain consent.{{cite:bond-site}}",
            "**Reading past structured fields.** Bond reads clinical notes, prescriptions and lab results, and uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
            "**A record of each decision.** Every match carries its evidence and traceability, and Bond's real-time dashboard and audit trail report patients matched, contacted, pre-screened, consented and randomized.{{cite:bond-site}}",
            "**Any protocol.** Screening is configured from each protocol's own criteria, so it works for drug and device studies alike.{{cite:bond-product}}",
            "**Starting before any EHR connection.** A pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads, referrals or registry contacts. Full EHR integration takes 48 hours, and Bond's implementation team handles it end to end.{{cite:bond-site}}",
          ],
        },
      ],
    },
    {
      id: "manual-review-cost",
      heading: "How much staff time and money does manual chart review take?",
      blocks: [
        {
          type: "p",
          text: "Staff find candidates through physician referrals, clinic schedules or EHR queries, then read each chart against the protocol.{{cite:penberthy-2012,wiess-2023,unlu-2024-rectifier}} Structured fields settle some criteria; many others sit in notes, pathology and imaging reports. For the COPILOT-HF heart failure trial, run by Mass General Brigham researchers, structured EHR data could settle 5 of 6 inclusion and only 5 of 17 exclusion criteria, so trained, non-licensed staff reviewed charts by hand.{{cite:unlu-2024-rectifier,mgb-2025-rct}}",
        },
        {
          type: "table",
          caption: "Published measurements of manual screening time",
          columns: ["Setting", "What was measured", "Manual time"],
          rows: [
            ["Yale Cancer Center, GI oncology clinic", "Eligibility review per patient for one interventional trial", "3.11 minutes per patient{{cite:wiess-2023}}"],
            ["VCU Massey Cancer Center, 130 open trials", "One eligibility evaluation, from identifying a candidate to a final decision; includes record review, talks with patients and families, and requests for outside records", "10 to 30 minutes for the largest share (35.8%); 10.2% took 2 to 4 hours{{cite:penberthy-2012}}"],
            ["Randomized evaluation, 355 lung and colorectal cancer charts", "Every document in the chart read in full for all 12 criteria, as the study design required", "37.8 minutes per chart{{cite:parikh-2026}}"],
            ["VCU Massey Cancer Center", "Staff time to find, screen and enroll one patient", "3.4 to 8.8 hours per enrolled patient{{cite:penberthy-2012}}"],
          ],
          note: "The VCU hours per enrolled patient include time spent on patients who were never enrolled.{{cite:penberthy-2012}} The authors of the randomized evaluation ask readers to interpret its timing cautiously: coordinators read every document because the study required it, while in practice many pre-screens move on from a chart as soon as an exclusion criterion turns up.{{cite:parikh-2026}}",
        },
        {
          type: "p",
          text: "The same 2012 VCU study put the personnel cost of screening at $129 to $336 per enrolled patient, depending on the type of study, and about $90,500 a year for the center. Research nurses did about 80% of that screening and coordinators the rest.{{cite:penberthy-2012}}",
        },
        {
          type: "stats",
          items: [
            { value: "$54,992", label: "Average coordinator base salary before benefits, self-reported on Payscale (accessed September 2026)", cite: "payscale-crc" },
            { value: "35% to 61%", label: "Yearly patient-facing staff turnover sites reported to SCRS for 2022, against 10% to 37% in a typical year", cite: "scrs-2023" },
            { value: "6 to 12 months", label: "Time a site can need to get a study back on track after a coordinator leaves", cite: "scrs-2023" },
          ],
        },
        {
          type: "p",
          text: "O*NET, the federal occupation database, lists assessing eligibility through reviews of medical records among coordinator tasks.{{cite:onet-crc}} Coordinators are also hard to keep, and SCRS puts the cost of recruiting and training a replacement at about six months' pay.{{cite:scrs-2023}} With Bond, coordinators check the cited evidence on ranked matches instead of reading each chart in full, and Bond's site reports 50%+ less chart review.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "finding-eligible-patients",
      heading: "What does the evidence show about finding eligible patients?",
      blocks: [
        {
          type: "p",
          text: "Bond reports 90%+ matching accuracy, with the chart evidence for every criterion.{{cite:bond-site}} In Bond's technical report, a preprint available on request, its pipeline scored 0.9312 micro F1 on the held-out n2c2 2018 cohort-selection benchmark, and every model decision receives provenance-tagged evidence.{{cite:bond-whitepaper}}",
        },
        {
          type: "p",
          text: "Published studies of other teams' AI tools show what software adds to manual screening. Each comes from one center or health system, and in each the authors built or sell the tool tested.{{cite:unlu-2024-rectifier,mgb-2025-rct,calaprice-whitty-2020}}",
        },
        {
          type: "ul",
          items: [
            "**Heart failure, expert gold standard.** Scored against a blinded expert clinician, both trained study staff and RECTIFIER, a GPT-4-based tool the authors built, closely matched the expert on individual criteria. For overall eligibility, RECTIFIER reached 92.3% sensitivity and 93.9% specificity, against 90.1% and 83.6% for staff.{{cite:unlu-2024-rectifier}}",
            "**Heart failure, randomized.** The same Mass General Brigham team randomized 4,476 patients between manual and AI-assisted screening, with staff briefly reviewing each flagged chart. The AI-assisted arm found 458 eligible patients against 284, and enrolled 35 against 19.{{cite:mgb-2025-rct}}",
            "**Oncology, retrospective.** Applied after the fact to two completed trials at the Comprehensive Blood and Cancer Center, Mendel.ai found 24% to 50% more potentially eligible patients than standard pre-screening had, and missed none that standard practice found. Under standard practice, an average of 19 days (breast) and 263 days (lung) passed between a patient becoming eligible and being identified. On a third trial that never enrolled, neither approach found suitable patients.{{cite:calaprice-whitty-2020}}",
          ],
        },
        {
          type: "p",
          text: "Human reviewers also disagree with each other. Two annotators with medical expertise, labeling 288 patients for the n2c2 2018 benchmark, most often disagreed because one found evidence for a criterion that the other missed.{{cite:stubbs-2019}} Bond shows the chart evidence behind every criterion, so every reviewer checks the same cited text.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "test-on-your-data",
      heading: "How can you test Bond against manual review on your own data?",
      blocks: [
        {
          type: "p",
          text: "Published studies come from other sites. Bond welcomes a head-to-head run on one of yours: same protocol, same patient list, manual review in one lane and Bond in the other.",
        },
        {
          type: "steps",
          items: [
            { title: "Pick one active study", text: "Choose one whose criteria live in notes, and fix the patient list in advance." },
            { title: "Time the manual pass", text: "Coordinators log minutes and outcome per chart, following the [coordinator chart review checklist](/templates/coordinator-chart-review-checklist)." },
            { title: "Run Bond on the same list", text: "Bond signs a business associate agreement before any patient data is shared, and your IRB or privacy board makes its determination. The [security](/security) page covers data handling. Bond is HIPAA compliant and SOC 2 Type I compliant, and its public Trust Center lists 73 HIPAA Security Rule controls, monitored continuously by Vanta.{{cite:bond-site,bond-product,bond-trust-center}}" },
            { title: "Adjudicate and compare", text: "The PI or a senior coordinator resolves each disagreement. Compare eligible patients found, patients missed, the evidence behind each decision and coordinator minutes per eligible patient." },
            { title: "Follow the patients forward", text: "Compare contact rate, time to first visit and cost per randomized patient against your current process, setting Bond's [pricing](/pricing) model against your coordinator cost." },
          ],
        },
        {
          type: "p",
          text: "The [AI recruitment vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) lists the questions to ask any vendor, Bond included.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and we will walk through how Bond would screen its hardest criteria.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
    {
      id: "how-this-comparison-was-made",
      heading: "How was this comparison made?",
      blocks: [
        {
          type: "p",
          text: "This comparison was made in September 2026 from published studies and abstracts, a health system press release, an SCRS white paper, O*NET, Payscale, the ICH E6(R3) guideline, and Bond's website, Trust Center, product information, conference presentation and technical report. Most studies are in oncology or cardiology, and the VCU costs date from 2012, so treat the manual figures as ranges. The RECTIFIER, Mendel.ai and randomized oncology studies each had authors from the team that built or sells the tool tested.{{cite:unlu-2024-rectifier,mgb-2025-rct,calaprice-whitty-2020,parikh-2026}}",
        },
        {
          type: "p",
          text: "If a figure here is wrong or out of date, email hello@bondtrials.com and we will correct it.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a good alternative to manual chart review?",
      a: "Yes, for any site with more charts to read than coordinator hours. Bond screens every record in scope at 10,000+ charts per hour, reads clinical notes, prescriptions and lab results, and shows the chart evidence behind every criterion, so coordinators confirm matches instead of reading every chart. Its site reports 50%+ less chart review and up to 3x faster enrollment than manual recruitment.{{cite:bond-site}}",
    },
    {
      q: "Does Bond replace coordinator chart review?",
      a: "No. Coordinators review Bond's ranked matches, with the chart evidence for each criterion, instead of reading every chart; Bond's site reports 50%+ less chart review. The site and PI still confirm eligibility and obtain consent.{{cite:bond-site}}",
    },
    {
      q: "How long does manual chart review take per patient?",
      a: "Published figures run from about 3 minutes per patient for one GI oncology trial to about 38 minutes per chart in a study that required coordinators to read every document for 12 criteria; its authors note that in practice many pre-screens stop once an exclusion criterion turns up. At one cancer center, where each evaluation also covered talks with patients and families and requests for outside records, 10.2% took 2 to 4 hours.{{cite:wiess-2023,parikh-2026,penberthy-2012}} With Bond, coordinators check the cited evidence on ranked matches instead.{{cite:bond-site}}",
    },
    {
      q: "Can Bond screen for several studies at once?",
      a: "Yes. Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another. Screening is configured from each protocol's own criteria, so it works for drug and device studies alike.{{cite:bond-product}}",
    },
    {
      q: "How does Bond's pricing compare with the cost of manual review?",
      a: "Manual review is paid for in staff hours: one cancer center put the personnel cost of screening at $129 to $336 per enrolled patient in 2012.{{cite:penberthy-2012}} Bond charges a volume-based platform fee plus a success fee for each randomized patient, with no integration fee, so part of what a site pays depends on patients reaching randomization. The [pricing](/pricing) page explains the model.{{cite:bond-site,bond-product}}",
    },
  ],
  sources: [
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials (Penberthy LT, Dahman BA, Petkov VI, DeShazo JP)",
      publisher: "Journal of Oncology Practice (ASCO), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "VCU Massey Cancer Center; 3,467 eligibility evaluations on 2,315 patients for 130 open cancer trials over 18 months. Costs in 2012 dollars, personnel only. Read September 2026. Abstract quote (via PubMed, September 2026): \"Determining eligibility for a clinical trial (CT) typically requires a lengthy manual review of data for a single evaluation.\" Quote: \"The time required for eligibility determination was defined as the time recorded by CRS from identification of the patient as a potential study candidate through final eligibility determination.\" The evaluation covered \"review of the patient medical record to determine eligibility for the specific study, discussions with patient and family about the study, and time associated with efforts to obtain medical records from other locations.\" Time distribution: \"8.8% required less than 10 minutes, 35.8% required 10-30 minutes, 18.6% required 30 minutes, 15.3% required 30-60 minutes, 13.3% required 60-120 minutes, and 10.2% required 120-240 minutes.\" Quote: \"Approximately 80% of the screening was performed by the research nurses because of the complexity of the clinical requirements for cancer trials.\" Quote: \"The cost of eligibility screening ranged by study phase from $129.15 to $336.48 per enrolled patient\" ($129.15 is observational studies). Quote: \"The total estimated annual cost spent on the eligibility screening process for our center was $90,505.\"",
    },
    {
      id: "wiess-2023",
      title: "Automated Patient Pre-Screening Using a Clinical Trials Patient Matching Algorithm (Wiess C, Gong G, Kunz P)",
      publisher: "Association of American Cancer Institutes, Clinical Research Innovation abstracts",
      url: "https://www.aaci-cancer.org/Files/Admin/CRI/2023/77-Automated-Patient-Pre-Screening-Using-Clinical-Trials-Patient-Matching-Algorithm.pdf",
      year: "2023",
      note: "Yale Cancer Center GI oncology clinic, one interventional trial; retrospective cohort of 161 patients seen September 14-20, 2020. Read September 2026. Quote: \"The time for eligibility review per subject with and without the use of the CTPM was tracked, taking an average of 1.82 and 3.11 minutes respectively.\" Quote: \"a clinical trials patient matching (CTPM) algorithm was created using artificial intelligence (AI) and natural language processing (NLP) to filter patients based on defined eligibility criteria, extract relevant patient data, and export the data in an easily reviewable format for research staff.\" Quote: \"Pre-screening has become increasingly burdensome due to the growing breadth of clinical trials and limited staffing resources to dedicate to this endeavor.\" Quote: \"research staff conducted chart review without use of the CTPM for the randomly selected week of September 14-20, 2020, during which 161 patients visited Yale New Haven Hospital GI Oncology.\"",
    },
    {
      id: "parikh-2026",
      title: "Human-AI teaming to improve accuracy and efficiency of eligibility criteria prescreening for oncology trials: a randomized evaluation trial using retrospective electronic health records (Parikh RB et al.)",
      publisher: "Nature Communications, via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12976108/",
      year: "2026",
      note: "355 lung and colorectal cancer charts; NCT06561217. Authors include Mendel.ai staff, whose pipeline supplied the AI output. Abstract quote (re-read via Europe PMC, September 2026): \"Chart-level accuracy, the primary endpoint of Human+AI prescreening is noninferior and superior to Human-alone (76.5% vs. 71.1%). However, efficiency is unchanged with similar average time per chart review, the secondary endpoint, (37.4 vs. 37.8 min).\" The results section reports arm means of 76.1% (Human+AI) and 71.5% (Human-alone). Abstract quote: \"Prescreening is time-consuming, labor-intensive, and prone to human error, resulting in under-identification of eligible patients.\" Quote: \"Since our study was powered on chart-level accuracy, CRCs reviewed every EHR document in full for the presence or absence of all 12 criteria.\" Quote: \"Our efficiency result should be interpreted cautiously.\" Quote: \"However, in practice, many prescreens anchor to specific inclusion and exclusion criteria, allowing a CRC to quickly move on from a patient's EHR the moment an exclusion criterion is encountered.\" Quote: \"Prescreening is traditionally done by clinicians or clinical research coordinators (CRCs), who manually review health records to identify patients meeting eligibility criteria.\" Quote: \"This study was funded by Mendel.ai (to RBP).\" Full text read via Europe PMC, September 2026.",
    },
    {
      id: "unlu-2024-rectifier",
      title: "Retrieval Augmented Generation Enabled GPT-4 Performance for Clinical Trial Screening (Unlu O et al.)",
      publisher: "medRxiv preprint via PubMed Central; peer-reviewed version in NEJM AI",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10871450/",
      year: "2024",
      note: "Abstract read via the Europe PMC record for PMID 38370719, September 2026. Quote: \"Currently, structured data in the EHR can only be used to determine 5 out of 6 inclusion and 5 out of 17 exclusion criteria. Trained, but non-licensed, study staff complete manual chart review to determine patient eligibility and record their assessment of the inclusion and exclusion criteria.\" Quote: \"An expert clinician completed a blinded review of patients' charts to answer the eligibility questions and determine the 'gold standard' answers.\" Quote: \"Both RECTIFIER and study staff answers closely aligned with the expert clinician answers across criteria with accuracy ranging between 97.9% and 100% (MCC 0.837 and 1) for RECTIFIER and 91.7% and 100% (MCC 0.644 and 1) for study staff.\" Quote: \"Overall, the sensitivity and specificity of determining eligibility for the RECTIFIER was 92.3% (CI) and 93.9% (CI), and study staff was 90.1% (CI) and 83.6% (CI), respectively.\" Quote: \"As part of the screening process, a list of potentially eligible patients is created through an electronic health record (EHR) query.\" Quote: \"set up appropriate mitigation strategies such as final clinician review before patient engagement.\"",
    },
    {
      id: "mgb-2025-rct",
      title: "AI screening for heart failure clinical trial speeds up enrollment, study finds",
      publisher: "Mass General Brigham, via EurekAlert (AAAS)",
      url: "https://www.eurekalert.org/news-releases/1073636",
      year: "2025",
      note: "Press release (February 17, 2025) on Unlu O et al., Manual vs AI-Assisted Prescreening for Trial Eligibility Using Large Language Models: A Randomized Clinical Trial, JAMA 2025;333(12):1084-1087, doi:10.1001/jama.2024.28047 (PMID 39960745). Single trial at one health system. Re-read September 2026. Quote: \"research staff manually reviewed patients' charts to determine if they met the eligibility criteria\" Quote: \"The study randomized 4,476 patients to be either manually screened or screened using generative AI\" Quote: \"The AI-assisted screening process was far more efficient, screening 458 eligible patients compared to the 284 patients screened by study staff.\" Quote: \"In the AI group, 35 patients enrolled in the trial, compared to 19 patients in the manual group.\" Quote: \"Study staff then conducted a short and rapid review of the patient charts that the AI-generated tool assessed as eligible for any outstanding issues with being considered.\" Quote: \"eligible for the Co-Operative Program for Implementation of Optimal Therapy in Heart Failure (COPILOT-HF) trial.\" Quote: \"according to a new study published in JAMA and led by Mass General Brigham researchers.\" Quote: \"The study follows an earlier proof of concept study by Blood, Aronson, Unlu and colleagues, which was published in June in NEJM AI.\"",
    },
    {
      id: "calaprice-whitty-2020",
      title: "Improving Clinical Trial Participant Prescreening With Artificial Intelligence (AI): A Comparison of the Results of AI-Assisted vs Standard Methods in 3 Oncology Trials (Calaprice-Whitty D et al.)",
      publisher: "Therapeutic Innovation & Regulatory Science, via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/32008227/",
      year: "2020",
      note: "Abstract read via the Europe PMC record for PMID 32008227, September 2026. Four of five authors list Mendel AI (San Jose, CA); the fifth, Calaprice-Whitty Consulting. Quote: \"Mendel.ai was applied retroactively to 2 completed oncology studies (1 breast, 1 lung), and 1 study that failed to enroll (lung), at the Comprehensive Blood and Cancer Center\" Quote: \"For each trial that enrolled, use of Mendel.ai resulted in a 24% to 50% increase over standard practices in the number of patients correctly identified as potentially eligible. No patients correctly identified by standard practices were missed by Mendel.ai.\" Quote: \"An average of 19 days for breast and 263 days for lung cancer patients elapsed between actual patient eligibility (based on clinical chart information) and identification when the standard prescreening practice was used.\" Quote: \"For the nonenrolling trial, both approaches failed to identify suitable patients.\"",
    },
    {
      id: "stubbs-2019",
      title: "Cohort selection for clinical trials: n2c2 2018 shared task track 1 (Stubbs A, Filannino M, Soysal E, Henry S, Uzuner O)",
      publisher: "Journal of the American Medical Informatics Association, via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6798568/",
      year: "2019",
      note: "288 longitudinal patient records annotated against 13 criteria. Quote: \"Two annotators, both with medical expertise, independently annotated all the medical records.\" Quote: \"The average kappa score across all criteria was 0.54.\" Quote: \"Overall, the largest source of disparities in the annotations was that one annotator found evidence for a criterion that the other missed.\"",
    },
    {
      id: "payscale-crc",
      title: "Average Clinical Research Coordinator Salary",
      publisher: "Payscale",
      url: "https://www.payscale.com/research/US/Job=Clinical_Research_Coordinator/Salary",
      year: "2025",
      note: "Self-reported data, labeled Avg. Base Salary, accessed September 2026. Quote: \"The average salary for a Clinical Research Coordinator is $54,992 in 2026\" Quote: \"Base Salary $41k - $70k\" Quote: \"Based on 497 salary profiles (last updated Mar 01 2025)\"",
    },
    {
      id: "onet-crc",
      title: "11-9121.01 - Clinical Research Coordinators: Summary Report",
      publisher: "O*NET OnLine (U.S. Department of Labor)",
      url: "https://www.onetonline.org/link/summary/11-9121.01",
      year: "2025",
      note: "Task quote: \"Assess eligibility of potential subjects through methods such as screening interviews, reviews of medical records, or discussions with physicians and nurses.\" Accessed September 2026.",
    },
    {
      id: "scrs-2023",
      title: "Workforce Challenges at Clinical Research Sites (2022 Site Landscape Survey white paper)",
      publisher: "Society for Clinical Research Sites (SCRS)",
      url: "https://myscrs.org/wp-content/uploads/2024/07/SCRS-2023-whitepaper_v5.pdf",
      year: "2023",
      note: "Quote: \"Sites are averaging double the usual turnover rate of patient-facing staff from a range of 10%-37% in a typical year to current rates of 35%-61%.\" Quote: \"the cost of recruiting and training a new patient-facing staff member is approximately six months' pay.\" Quote: \"it can take 6-12 months for sites to get back on track with a study when a coordinator leaves.\"",
    },
    {
      id: "kopcke-2014",
      title: "Employing computers for the recruitment into clinical trials: a comprehensive systematic review (Köpcke F, Prokosch HU)",
      publisher: "Journal of Medical Internet Research, via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/24985568/",
      year: "2014",
      note: "101 papers on 79 clinical trial recruitment support systems. Quote: \"We conclude that the success of a CTRSS depends more on its successful workflow integration than on sophisticated reasoning and data processing algorithms.\"",
    },
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice, Appendix C (Essential Records)",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Read September 2026. Essential records include those that \"Documents the recruitment, pre-trial screening and consenting process of trial participants and their identity and chronological enrolment as appropriate\", and the list includes a \"Completed participants screening log\".",
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
      id: "bond-trust-center",
      title: "Bond Health Trust Center",
      publisher: "Bond Health, monitored by Vanta",
      url: "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj",
      year: "2026",
      note: "Lists 73 HIPAA Security Rule controls: infrastructure security (20), organizational security (14), internal security procedures (38), and data and privacy (1), monitored continuously by Vanta. Viewed September 23, 2026.",
    },
    {
      id: "bond-acrp-talk",
      title: "Modernizing Patient Recruitment: AI Tools, Workflows, and Outcomes",
      publisher: "Bond Health presentation to the ACRP New Jersey chapter (Goel R, Mustafa S)",
      year: "2026",
      note: "April 2026. Slides state \"1,000 patients screened in <2 hours\", \"Direct integrations with Google Sheets, CTMS, and Calendars\" and \"Flexible knowledge base for Voice Agents\".",
    },
    {
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request.",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "All comparisons", href: "/compare", description: "Bond beside EHR matching tools, engagement agents and media recruitment." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and shows the evidence for each match." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based platform fee plus a success fee per randomized patient." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "Coordinator chart review checklist", href: "/templates/coordinator-chart-review-checklist", description: "A consistent manual review, step by step." },
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "Scope, integrations and pricing models across vendors." },
  ],
};

export default page;
