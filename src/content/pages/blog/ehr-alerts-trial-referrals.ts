import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/ehr-alerts-trial-referrals",
  category: "blog",
  title: "Do EHR alerts increase clinical trial referrals?",
  description:
    "What studies found when health systems used EHR alerts (best practice advisories) to prompt trial referrals: gains, alert fatigue, bias risks and design tips.",
  keywords: [
    "clinical trial alert EHR",
    "best practice advisory clinical trial recruitment",
    "BPA trial referrals",
    "EHR alerts patient recruitment",
    "silent best practice alert research",
  ],
  eyebrow: "Blog",
  h1: "Do EHR alerts increase trial referrals? What the studies found",
  intro:
    "In the studies that measured it, yes: when one academic health system switched on an EHR clinical trial alert, the participating physicians' referral rate rose about tenfold and their enrollment rate doubled.{{cite:embi-2005}} But most of the evidence comes from single sites, clinicians override most alerts of any kind, and one study found alerts dismissed more often for some groups of patients. Here is what was measured, and how to design an alert that helps rather than annoys.",
  summary: "What clinical trial alerts and best practice advisories did for referrals and enrollment, why clinicians ignore them, and how to design one.",
  lastUpdated: "2026-11-25",
  blog: { date: "2026-11-25", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "See it on your protocol", href: "/book-a-demo", secondaryLabel: "Read about Identify", secondaryHref: "/identify" },
  sections: [
    {
      id: "first-studies",
      heading: "What did the first clinical trial alert studies find?",
      blocks: [
        {
          type: "p",
          text: "The best-known study, published in 2005, ran in outpatient clinics of a large U.S. academic health system. After 12 months of traditional recruitment to a trial, the team turned on an alert that fired when a patient's EHR data met selected criteria, prompted the physician to consider eligibility and let them send a secure message to the coordinator. Over the 4-month intervention, among 114 physicians, the number generating referrals rose from 5 to 42, and the referral rate of those physicians rose from 5.7 to 59.5 a month.{{cite:embi-2005}}",
        },
        {
          type: "stats",
          items: [
            { value: "10x", label: "referral rate after the alert went live (rate ratio 10.44)", cite: "embi-2005" },
            { value: "2x", label: "enrollment rate, from 2.9 to 6.0 a month (rate ratio 2.06)", cite: "embi-2005" },
            { value: "35 vs 0", label: "physician referrals, alert vs control physicians, in a neurology trial at a second institution", cite: "khan-2013" },
          ],
        },
        {
          type: "p",
          text: "The gap between those two ratios matters: referrals rose much faster than enrollments. A later cluster randomized trial at a second institution with a different EHR reported, in an interim analysis of its first 4 months, 35 referrals from intervention physicians and none from controls.{{cite:khan-2013}}",
        },
      ],
    },
    {
      id: "recent-results",
      heading: "How have best practice alerts performed more recently?",
      blocks: [
        {
          type: "table",
          caption: "Published EHR alert recruitment results{{cite:simon-2023,scott-2026,heinemann-2011}}",
          columns: ["Setting", "What the alert did", "Result"],
          rows: [
            ["Pediatric clinics, Houston-based team, SPARK autism study, one year", "Epic Best Practice Alert prompted providers to refer families", "1,203 patients (64.0%) marked interested; 223 enrolled; 58.3% of alert-referred participants completed participation vs 35.5% of others"],
            ["Duke pediatric primary care, obesity trial, 2018 to 2020", "Alert at well-child visits for children with BMI at or above the 95th percentile", "Fired for 2,121 patients; providers responded to 85%; 52% of patients interested; produced 177 of 261 participants (68%)"],
            ["25 German general practices, osteoporosis survey", "Tool flagged at-risk patients for practice staff to review and contact", "16,067 flagged; 5,161 (32%) reviewed; 1,526 enrolled, 80% of those contacted"],
          ],
        },
        {
          type: "p",
          text: "In the Duke study the alert accounted for most of the trial's enrollment, and in the autism study families referred through the alert were more likely to finish.{{cite:scott-2026,simon-2023}} None of these studies had a randomized control group, so they show what an alert can produce, not how much it adds over other methods.",
        },
      ],
    },
    {
      id: "why-ignored",
      heading: "Why do clinicians ignore trial alerts?",
      blocks: [
        {
          type: "p",
          text: "The same team surveyed the physicians from its alert study; 69 of 114 responded. Most were receptive: 77 percent appreciated being reminded about a trial, though 27 percent found the alert more than somewhat intrusive. Among physicians who ignored every alert, the most common reasons were lack of time (37 percent), knowing the patient was ineligible (28 percent) and limited knowledge of the trial (13 percent). Thirty-eight percent wanted more trial information in the alert.{{cite:embi-2008}}",
        },
        {
          type: "p",
          text: "Trial alerts also compete with every other alert in the chart. A 2024 meta-analysis of drug-drug interaction alerts found physicians overrode 90 percent of them.{{cite:felisberto-2024}} A trial alert that fires too often, or for patients a physician knows are wrong for the study, will be clicked away with the rest.",
        },
      ],
    },
    {
      id: "bias",
      heading: "Can a trial alert introduce bias?",
      blocks: [
        {
          type: "p",
          text: "It can let existing bias through. In the autism alert program, pediatric primary care practices serving diverse communities dismissed the alert for 30.1 percent of patients with public insurance, against 20.0 percent for the same group in subspecialty clinics, even though those practices recorded more interest from non-white families (47.7 versus 33.3 percent). The authors read this as possible selection by some pediatricians about who should hear about research.{{cite:duhon-2023}} In the German practices, men and older patients ended up underrepresented.{{cite:heinemann-2011}}",
        },
        {
          type: "p",
          text: "An alert puts the decision to mention a trial back in one clinician's hands, one patient at a time. Track who gets dismissed, not only who gets referred.",
        },
      ],
    },
    {
      id: "silent-alerts",
      heading: "What about alerts that go to the research team instead?",
      blocks: [
        {
          type: "p",
          text: "Some sites route the alert to coordinators and leave clinicians alone. A Boston team built a silent best practice alert for a COPD study that notified research staff in real time. Compared with their earlier Epic Reporting Workbench search, it was about four times faster, was projected to save 442.5 hours over the study, and found the equivalent of three more potential participants a week. Of patients found only by the silent alert, 30 of 42 (71.4 percent) were eligible, against 12 of 99 (12.1 percent) found only by the report.{{cite:devoe-2019}}",
        },
        {
          type: "p",
          text: "Vanderbilt went further and monitored clinical notes. A text-processing system emailed study staff about possible cases of two rare drug reactions; over two years it captured 138 true cases, raised recall from 43 to 93 percent, and kept working through a move to Epic.{{cite:delozier-2021}} Silent alerts avoid clinician fatigue, but someone on the research team has to act on them quickly, and the treating physician should still hear about a referral before the patient is approached.",
        },
      ],
    },
    {
      id: "design",
      heading: "How should a site design a trial alert?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Fire narrowly.** Ignored alerts often came from physicians who already knew the patient was ineligible, so tune the rule for precision before go-live.{{cite:embi-2008}}",
            "**Put the study in the alert.** Show a two-line summary, the key criteria and a coordinator's name, since many physicians wanted more trial information.{{cite:embi-2008}}",
            "**Make referral one click.** The original alert let physicians send a secure message to the coordinator from the alert itself.{{cite:embi-2005}}",
            "**Decide who receives it.** Physician alerts draw more clinicians into referring; silent alerts to coordinators save staff time. Many sites will want both.",
            "**Audit dismissals by group.** Review dismissal rates by insurance, race, ethnicity, age and sex every month.",
            "**Retire it on time.** Turn the alert off when enrollment closes, and review firing volume with the clinic so it does not become noise.",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond fits",
          text: "Bond's [Identify](/identify) stage works like a silent alert with the evidence attached. It screens charts against the protocol, reading notes, labs and reports, and gives coordinators criterion-by-criterion evidence for each match, so the team can confirm a candidate before involving the treating physician or contacting the patient.{{cite:bond-site}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how a match list with evidence compares with the alerts you run today.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do trial alerts raise enrollment, or only referrals?",
      a: "Both, but not equally. In the 2005 study the referral rate rose about tenfold while the enrollment rate doubled, so most extra referrals did not enroll.{{cite:embi-2005}} Plan coordinator time for the screening that follows.",
    },
    {
      q: "Should the alert go to the physician or to the coordinator?",
      a: "It depends on the bottleneck. Physician alerts drew many more clinicians into referring (from 5 to 42 physicians in the 2005 study), while a silent alert to research staff was about four times faster than report-based screening in Boston.{{cite:embi-2005,devoe-2019}}",
    },
    {
      q: "Will clinicians accept another alert?",
      a: "Many say yes: 77 percent of surveyed physicians appreciated trial reminders.{{cite:embi-2008}} But physicians override 90 percent of drug interaction alerts, so a trial alert has to be rare and relevant to be read.{{cite:felisberto-2024}}",
    },
  ],
  sources: [
    {
      id: "embi-2005",
      title: "Effect of a clinical trial alert system on physician participation in trial recruitment",
      publisher: "Archives of Internal Medicine (Embi PJ et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/16246994/",
      year: "2005",
      note: "Read October 2026 (PubMed abstract). Quote: \"After 12 months of traditional recruitment to a clinical trial, we activated our electronic health record (EHR)-based clinical trial alert (CTA) system\". Also: \"significant increases in the number of physicians generating referrals (5 before and 42 after; P < .001) and enrollments (5 before and 11 after; P = .03), a 10-fold increase in those physicians' referral rate (5.7/mo before and 59.5/mo after; rate ratio, 10.44 ...), and a doubling of their enrollment rate (2.9/mo before and 6.0/mo after; rate ratio, 2.06\". Subjects were 114 physicians; 4-month intervention period. Setting described as outpatient clinics of a large US academic health care system; several authors were at the Cleveland Clinic Foundation.",
    },
    {
      id: "khan-2013",
      title: "EHR-based Clinical Trial Alert Effects on Recruitment to a Neurology Trial across Institutions: Interim Analysis of a Randomized Controlled Study",
      publisher: "AMIA Joint Summits on Translational Science Proceedings (Khan Y et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/24303248/",
      year: "2013",
      note: "Read October 2026 (PubMed abstract). Quote: \"a cluster randomized controlled trial of the CTA approach applied to a neurology study at a second institution to test the efficacy of the approach across institutions with a different EHR. During the first phase (4 months) of our study, the CTA significantly improved physician-generated referrals among intervention physicians vs. control physicians (35 vs. 0).\"",
    },
    {
      id: "embi-2008",
      title: "Physicians' perceptions of an electronic health record-based clinical trial alert approach to subject recruitment: a survey",
      publisher: "BMC Medical Informatics and Decision Making (Embi PJ et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/18384682/",
      year: "2008",
      note: "Read October 2026 (PubMed abstract). Quote: \"Sixty-nine physicians (61%) responded\". Also: \"77% appreciated being reminded about a trial via a CTA. Only 11% percent felt the CTA was difficult to use, and 27% felt it was more than somewhat intrusive. Among those who ignored all CTAs, 37% cited a lack of time, 28% knowledge of the patient's ineligibility, and 13% limited knowledge about the trial as their most common reason. Thirty-eight percent wanted more information about the trial presented in the CTA\".",
    },
    {
      id: "simon-2023",
      title: "Utilization of a Best Practice Alert (BPA) at Point-of-Care for Recruitment into a US-Based Autism Research Study",
      publisher: "Journal of Autism and Developmental Disorders (Simon AR et al., Baylor College of Medicine)",
      url: "https://pubmed.ncbi.nlm.nih.gov/35089434/",
      year: "2023",
      note: "Read October 2026 (PubMed abstract). Quote: \"we adapted the Best Practice Alert (BPA) in the EPIC Electronic Health Record and assessed its utility in recruiting pediatric patients with autism spectrum disorder for the national SPARK study. During a year-long surveillance, 1203 (64.0%) patients were Interested in SPARK and 223 enrolled. Another 754 participants not recruited via the BPA also enrolled; 35.5% of these participants completed their participation compared to 58.3% of BPA-referred participants.\" Authors are in Houston, Texas.",
    },
    {
      id: "scott-2026",
      title: "The Feasibility of Using Best Practice Alerts in Pediatric Primary Care for Obesity Research",
      publisher: "Academic Pediatrics (Scott AB et al., Duke)",
      url: "https://pubmed.ncbi.nlm.nih.gov/41903777/",
      year: "2026",
      note: "Read October 2026 (PubMed abstract). Quote: \"The BPA was designed to identify eligible patients aged 5 to 17 years with a body mass index ≥95th percentile during their annual well-child visits. Between January 2018 and March 2020, the BPA was utilized in 4 primary care clinics.\" Also: \"The BPA was deployed to 2121 individual patients, and providers responded to 85% of alerts. Over half (52%) of patients indicated interest in further contact by the study team. The BPA facilitated recruitment 68% (177/261) of participants\".",
    },
    {
      id: "heinemann-2011",
      title: "A clinical trial alert tool to recruit large patient samples and assess selection bias in general practice research",
      publisher: "BMC Medical Research Methodology (Heinemann S et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/21320358/",
      year: "2011",
      note: "Read October 2026 (PubMed abstract). Osteoporosis survey in 25 German general practices. Quote: \"The CTA tool identified a net sample of 16,067 patients (range 162 to 1,316 per practice), of which the practice staff reviewed 5,161 (32%) cases for eligibility. They excluded 3,248 patients and contacted 1,913 patients. Of these, 1,526 patients (range 4 to 202 per practice) were successfully enrolled and surveyed. This made up 9% of the net sample and 80% of the patients contacted. Men and older patients were underrepresented in the study population.\"",
    },
    {
      id: "duhon-2023",
      title: "Use of a Best Practice Alert (BPA) to Increase Diversity Within a US-Based Autism Research Cohort",
      publisher: "Journal of Autism and Developmental Disorders (Duhon GF, Simon AR et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34997882/",
      year: "2023",
      note: "Read October 2026 (PubMed abstract). Quote: \"Compared to subspecialty clinics, TCPs had higher proportions of Interested responses for patients with private insurance (60.9% vs. 46.2%), Dismissed responses for patients with public insurance (30.1% vs. 20.0%), and Interested responses for non-white patients (47.7% vs. 33.3%).\" Also: \"select groups more often had their alert dismissed, suggesting possible selection bias among some pediatricians regarding who should receive information about study opportunities.\" TCPs are pediatric primary care practices serving diverse communities.",
    },
    {
      id: "devoe-2019",
      title: "Use of Electronic Health Records to Develop and Implement a Silent Best Practice Alert Notification System for Patient Recruitment in Clinical Research: Quality Improvement Initiative",
      publisher: "JMIR Medical Informatics (Devoe C et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31025947/",
      year: "2019",
      note: "Read October 2026 (PubMed abstract). Emerald-COPD study. Quote: \"Of those identified by the Epic Reporting Workbench, only 12 (of 99, 12.12%) were considered eligible. Of those identified by the sBPA method, 30 (of 42, 71.43%) were considered eligible.\" Also: \"the sBPA screening method was shown to be approximately four times faster than our previous screening method and estimated a projected 442.5 hours saved over the duration of the study. Additionally, since implementation, the sBPA system identified the equivalent of three additional potential participants per week.\" Counts refer to patients found by only one of the two methods. Authors are with Partners HealthCare Pivot Labs, Boston.",
    },
    {
      id: "delozier-2021",
      title: "Real-time clinical note monitoring to detect conditions for rapid follow-up: A case study of clinical trial enrollment in drug-induced torsades de pointes and Stevens-Johnson syndrome",
      publisher: "Journal of the American Medical Informatics Association (DeLozier S et al., Vanderbilt)",
      url: "https://pubmed.ncbi.nlm.nih.gov/33120413/",
      year: "2021",
      note: "Read October 2026 (PubMed abstract). Quote: \"A text processing system searched clinical notes from the electronic health record (EHR) for relevant keywords and alerted study personnel via email of potential patients for chart review or in-person evaluation. Between 2016 and 2018, the automated recruitment system resulted in capture of 138 true cases of drug-induced rare events, improving recall from 43% to 93%.\" Also: \"including across an EHR migration from a bespoke system to Epic.\"",
    },
    {
      id: "felisberto-2024",
      title: "Override rate of drug-drug interaction alerts in clinical decision support systems: A brief systematic review and meta-analysis",
      publisher: "Health Informatics Journal (Felisberto M et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38899788/",
      year: "2024",
      note: "Read October 2026 (PubMed abstract). Quote: \"the overall prevalence of alert override by physicians was 90% (CI95% 85-95%, p-value <0.0001, I^2 = 100%).\" Sixteen articles included. Drug interaction alerts, not trial alerts.",
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
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond screens charts and shows coordinators the evidence for each criterion." },
    { label: "For physician groups", href: "/for/physician-groups", description: "How practices run research recruitment without adding clinician work." },
    { label: "Using the EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "Interfaces, permissions and what each EHR tool can and cannot query." },
    { label: "Epic integration", href: "/integrations/epic", description: "How Bond connects to Epic." },
  ],
};

export default page;
