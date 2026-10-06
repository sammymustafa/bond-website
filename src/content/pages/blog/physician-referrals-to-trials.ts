import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/physician-referrals-to-trials",
  category: "blog",
  title: "Why physicians don't refer patients to clinical trials",
  description:
    "What surveys and studies show about why physicians rarely refer patients to clinical trials, and which changes have measurably increased referrals.",
  keywords: [
    "physician referral clinical trials",
    "why doctors don't refer patients to clinical trials",
    "barriers to clinical trial referral",
    "increase physician referrals clinical trials",
    "clinical trial offer rate",
  ],
  eyebrow: "Blog",
  h1: "Why physicians do not refer patients to trials, and what helps",
  intro:
    "Most physicians say they are willing to refer patients to clinical trials, yet few referrals happen. Surveys point to time, paperwork, not knowing which trials are open and distance from a research site, while patients who are offered a trial often agree: in recorded oncology visits, 75 percent of patients who perceived a trial offer said yes.{{cite:albrecht-2008}} Here is what the evidence says about the barriers, and the fixes that have been measured.",
  summary: "Why physicians rarely refer patients to trials, from time and paperwork to distance and trust, and which interventions have measurably increased referrals.",
  lastUpdated: "2027-01-11",
  blog: { date: "2027-01-11", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "For physician groups", secondaryHref: "/for/physician-groups" },
  sections: [
    {
      id: "offer-rates",
      heading: "How often are patients offered a trial?",
      blocks: [
        {
          type: "p",
          text: "Less often than they would accept one. In 235 video-recorded outpatient visits at two NCI-designated comprehensive cancer centers, oncologists explicitly offered a trial in 20 percent of interactions. When an offer was made and the patient perceived it, 75 percent agreed.{{cite:albrecht-2008}} In an earlier study of breast cancer care, physicians offered a trial to 38.0 percent of 245 patients, and 52.7 percent of those offered agreed.{{cite:siminoff-2000}}",
        },
        {
          type: "p",
          text: "Physician behavior is not the only filter. A meta-analysis of 13 cancer studies with 8,883 patients found no trial available at the patient's institution 55.6 percent of the time, and another 21.5 percent of patients were ineligible for the trial that was available. Only 14.8 percent did not enroll for other reasons, and 8.1 percent enrolled.{{cite:unger-2019}}",
        },
        {
          type: "stats",
          items: [
            { value: "20%", label: "of recorded oncology visits included an explicit trial offer", cite: "albrecht-2008" },
            { value: "75%", label: "of patients who perceived an offer agreed to take part", cite: "albrecht-2008" },
            { value: "55.6%", label: "of the time, no trial was available at the patient's institution", cite: "unger-2019" },
          ],
        },
      ],
    },
    {
      id: "barriers",
      heading: "Why don't physicians refer?",
      blocks: [
        {
          type: "p",
          text: "Willingness is rarely the problem. A Tufts survey of 589 U.S. physicians and 1,255 nurses found very high shares interested in referring patients to appropriate trials and comfortable discussing them, yet most refer very few patients a year, largely because they cannot easily find trial information and lack the time and detail to evaluate options with confidence.{{cite:getz-2020}}",
        },
        {
          type: "table",
          caption: "Barriers reported in physician surveys{{cite:mahmud-2018,galvin-2009,kaplan-2013,siminoff-2000,mainous-2008}}",
          columns: ["Barrier", "What a study found"],
          rows: [
            ["Paperwork and time", "Among 207 Canadian oncology physicians, 77% cited extra paperwork, 54% patient education time and 53% extra follow-up visits"],
            ["Lack of time to discuss research", "Among physicians surveyed about Alzheimer's trials, lack of time was the strongest barrier to referral (odds ratio 6.8)"],
            ["Concern about patient burden", "The same survey found concern about uncomfortable procedures (odds ratio 4.7)"],
            ["Busy clinical schedules", "Breast cancer physicians who spent the most time in patient care were least likely to discuss trials"],
            ["Distance from a trial site", "Distance to the nearest trial site was inversely associated with referral; proximity to a research center predicted referral (odds ratio 4.0)"],
            ["Onerous entry requirements", "Oncologists were less likely to refer when paperwork seemed onerous or eligibility too stringent"],
            ["Trust in researchers", "Referral was associated with prior referral (odds ratio 4.24) and with higher trust in medical researchers"],
          ],
        },
        {
          type: "p",
          text: "Trust deserves attention. In a survey of physicians near Parkinson's disease trial sites in areas with large African American or Latino populations, trust in medical researchers was lower among African American physicians and physicians with many minority patients.{{cite:mainous-2008}}",
        },
        {
          type: "p",
          text: "Referral decisions also skew who gets asked. In the breast cancer study, older patients and those with a poorer prognosis were less likely to be referred, and surgeons referred more when they felt comfortable explaining trials.{{cite:siminoff-2000}} When the decision to mention a trial rests on one clinician's judgment in a busy visit, some eligible patients never hear about it.",
        },
      ],
    },
    {
      id: "awareness",
      heading: "Does physician awareness change enrollment?",
      blocks: [
        {
          type: "p",
          text: "Yes. At Kaiser Permanente Northern California, a network with an active trials program, oncologists' attitudes and practices were surveyed and then compared with their actual accrual over the next two years. The strongest predictor was awareness, meaning knowing which trials were open and which of their patients were eligible, and routinely raising trials with eligible patients. That construct correlated with enrollment at r = .51.{{cite:somkin-2013}}",
        },
        {
          type: "p",
          text: "Awareness is something a site can supply. A physician who receives a short note saying \"these two of your patients may fit this open study\" faces a smaller decision than one asked to remember a protocol during a short visit.",
        },
      ],
    },
    {
      id: "what-works",
      heading: "What has measurably increased referrals?",
      blocks: [
        {
          type: "p",
          text: "The evidence base is thinner than the barrier literature. A systematic review of interventions to raise clinicians' recruitment activity found eight quantitative studies, only one rated strong and one moderate. The approaches that worked used qualitative research to find and remove local barriers, reduced the clinical workload of taking part, and gave clinicians extra training and protected research time.{{cite:fletcher-2012}}",
        },
        {
          type: "p",
          text: "The same review pooled qualitative studies of clinicians' attitudes. The themes reported most often were difficulty explaining trial methods to patients, limited understanding of research, and putting the individual patient's well-being first.{{cite:fletcher-2012}} Each points to a fix a site controls: plain-language study summaries, a coordinator who explains randomization to the patient, and a clear answer to what happens to the patient's care.",
        },
        {
          type: "p",
          text: "Point-of-care prompts have the clearest numbers. When an academic health system added an EHR clinical trial alert with a secure message to the coordinator, the number of physicians making referrals rose from 5 to 42 and their referral rate rose about tenfold.{{cite:embi-2005}} Physicians themselves ask for this kind of support: 75 percent of surveyed Canadian oncology physicians favored a clinical trial alert system, 67 percent a screening log and 65 percent regular protocol review meetings.{{cite:mahmud-2018}}",
        },
      ],
    },
    {
      id: "site-actions",
      heading: "What can a site do to get more referrals?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Make referral a single step.** A name and a reason, sent by message or EHR, with the site doing everything after that. Extra paperwork is the time burden physicians cite most.{{cite:mahmud-2018}}",
            "**Send short, specific lists.** Tell each physician which open study their patients may fit, since awareness of open trials and eligible patients drives accrual.{{cite:somkin-2013}}",
            "**Do the pre-screening for them.** Review charts and call patients before asking the physician to confirm, so a referral costs minutes rather than a visit.",
            "**Close the loop.** Report back on every referred patient and return them to their physician's care; trust and past referral experience predict future referrals.{{cite:mainous-2008}}",
            "**Reach beyond your walls.** Distance cuts referrals, so give community practices a phone or remote pre-screen option.{{cite:kaplan-2013}}",
            "**Do not rely on referrals alone.** Many patients have no available trial at their own institution, so add direct outreach to patients the EHR identifies.{{cite:unger-2019}}",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond fits",
          text: "Bond's [Identify](/identify) stage screens the practice's EHR and gives coordinators criterion-by-criterion evidence for each match, and its [Engage](/engage) agents call and text patients, pre-screen them and book visits into the site's calendar. Physicians can then confirm candidates rather than search for them.{{cite:bond-site}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how a referral-light workflow would look for your practice and one of your open studies.",
          secondaryLabel: "For physician groups",
          secondaryHref: "/for/physician-groups",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do patients usually refuse when offered a trial?",
      a: "Not usually. In recorded oncology visits, 75 percent of patients who perceived a trial offer agreed, and in a breast cancer study 52.7 percent of those offered agreed.{{cite:albrecht-2008,siminoff-2000}} The bigger losses come from trials not being available or patients not being eligible.{{cite:unger-2019}}",
    },
    {
      q: "Are academic physicians more likely to refer than community physicians?",
      a: "In the breast cancer study, physicians in university settings and those with cooperative group support referred more.{{cite:siminoff-2000}} Across cancer studies, enrollment was 15.9 percent in academic settings versus 7.0 percent in community settings, while rates of trial unavailability, ineligibility and non-enrollment did not differ significantly.{{cite:unger-2019}}",
    },
  ],
  sources: [
    {
      id: "albrecht-2008",
      title: "Influence of clinical communication on patients' decision making on participation in clinical trials",
      publisher: "Journal of Clinical Oncology (Albrecht TL et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/18509178/",
      year: "2008",
      note: "Read October 2026 (PubMed abstract). Quote: \"We video recorded 235 outpatient interactions occurring among oncologists, patients, and family/companions (if present) at two comprehensive cancer centers.\" Also: \"Clinical trials were explicitly offered in 20% of the interactions. When offers were made and patients perceived they were offered a trial, 75% of patients assented.\" Centers were NCI-designated comprehensive cancer centers.",
    },
    {
      id: "siminoff-2000",
      title: "Factors that predict the referral of breast cancer patients onto clinical trials by their surgeons and medical oncologists",
      publisher: "Journal of Clinical Oncology (Siminoff LA et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/10715289/",
      year: "2000",
      note: "Read October 2026 (PubMed abstract). Study conducted 1993 to 1995. Quote: \"A total of 147 physicians discussed 245 patient cases\". Also: \"Ninety-three patients (38. 0%) were offered a trial, and 49 (52.7%) of them agreed to participate.\" And: \"physicians in university settings and who had formal support from a cooperative group were more likely to refer patients to trials\"; \"Oncologists were less likely to make referrals if they perceived the paperwork to be onerous or entry requirements to be too stringent.\" Also: \"Older patients and those with a poorer prognosis were less likely to be referred.\" and \"surgeons referred more patients to trials when they felt comfortable explaining trials\".",
    },
    {
      id: "unger-2019",
      title: "Systematic Review and Meta-Analysis of the Magnitude of Structural, Clinical, and Physician and Patient Barriers to Cancer Clinical Trial Participation",
      publisher: "Journal of the National Cancer Institute (Unger JM et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/30856272/",
      year: "2019",
      note: "Read October 2026 (PubMed abstract). Quote: \"We identified 13 studies (nine in academic and four in community settings) with 8883 patients. A trial was unavailable for patients at their institution 55.6% of the time ... Further, 21.5% ... of patients were ineligible for an available trial, 14.8% ... did not enroll, and 8.1% ... enrolled. Rates of trial enrollment in academic (15.9% ...) vs community (7.0% ...) settings differed, but not rates of trial unavailability, ineligibility, or non-enrollment.\" Confidence intervals omitted here.",
    },
    {
      id: "getz-2020",
      title: "US Physician and Nurse Proclivity to Refer Their Patients Into Clinical Trials",
      publisher: "Therapeutic Innovation & Regulatory Science (Getz KA, Tufts CSDD)",
      url: "https://pubmed.ncbi.nlm.nih.gov/32072594/",
      year: "2020",
      note: "Read October 2026 (PubMed abstract). Quote: \"the Tufts Center for the Study of Drug Development (Tufts CSDD) conducted a study of 589 US-based physicians and 1255 US-based nurses.\" Also: \"Very high percentages of multispecialty nurses and doctors view clinical trials as health care options, are interested in referring their patients into appropriate clinical trials\" and \"Yet US physicians and nurses refer very small numbers of patients each year largely because of the inability to access clinical trial information, and the lack of sufficient information and time to evaluate and confidently discuss clinical trial options with their patients.\"",
    },
    {
      id: "mahmud-2018",
      title: "Barriers to participation in clinical trials: a physician survey",
      publisher: "Current Oncology (Mahmud A et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/29719427/",
      year: "2018",
      note: "Read October 2026 (PubMed abstract). Canadian survey. Quote: \"The survey collected 207 anonymous responses.\" Also: \"Significant time constraints included extra paperwork (77%), patient education (54%), and extended follow-up or clinic visits (53%).\" And: \"Most respondents favoured clinical work credits (72%), academic credits (67%), a clinical trial alert system (75%), a regular meeting to review trial protocols (65%), and a screening log to aid in patient accrual (67%)\".",
    },
    {
      id: "galvin-2009",
      title: "Predictors of physician referral for patient recruitment to Alzheimer disease clinical trials",
      publisher: "Alzheimer Disease and Associated Disorders (Galvin JE et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/19561438/",
      year: "2009",
      note: "Read October 2026 (PubMed abstract). Quote: \"A survey was distributed to 3123 physicians in 3 states; 370 were returned.\" Also: \"Referral to clinical trials is predicted by close proximity to a research center [odds ratio (OR): 4.0 ...]\" and \"Primary barriers included concerns about exposure of patients to uncomfortable procedures (OR: 4.7 ...) and lack of time to discuss research participation (OR: 6.8\". 61% of respondents were primary care providers.",
    },
    {
      id: "kaplan-2013",
      title: "Clinical trial discussion, referral, and recruitment: physician, patient, and system factors",
      publisher: "Cancer Causes & Control (Kaplan CP et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/23420328/",
      year: "2013",
      note: "Read October 2026 (PubMed abstract). Breast cancer physicians in California, Florida, Illinois and New York. Quote: \"Surveys were completed by 706 of 1,534 eligible physicians (46 %).\" Also: \"Physicians who spent the most time in patient care were least likely to discuss clinical trials with their patients. Distance from a physician's practice to the nearest clinical trial site was inversely associated with referral and recruitment.\"",
    },
    {
      id: "mainous-2008",
      title: "Factors influencing physician referrals of patients to clinical trials",
      publisher: "Journal of the National Medical Association (Mainous AG et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/19024226/",
      year: "2008",
      note: "Read October 2026 (PubMed abstract). Quote: \"We surveyed 200 physicians from areas near the NET-PD clinics with > or =40% African Americans or Latinos.\" Also: \"The TIMRS was lower among African-American physicians and physicians with high proportions of minority patients. Likelihood of trial referral was associated with previous referral to trials (OR=4.24, 95% CI: 2.09-8.62) and higher TIMRS\". TIMRS is the Trust in Medical Researchers Scale.",
    },
    {
      id: "somkin-2013",
      title: "Effect of medical oncologists' attitudes on accrual to clinical trials in a community setting",
      publisher: "Journal of Oncology Practice (Somkin CP et al., Kaiser Permanente)",
      url: "https://pubmed.ncbi.nlm.nih.gov/24151327/",
      year: "2013",
      note: "Read October 2026 (PubMed abstract). Quote: \"we examined the effect of oncologists' attitudes, beliefs, experiences, sociodemographic factors, and practice characteristics on clinical trial accrual in the 2 years following the survey.\" Also: \"A construct combining questions that assessed oncologist attitudes, beliefs, and experiences substantially influenced OCT enrollment (r = .51; P < .0001). This construct included awareness of open clinical trials and specific eligible patients, as well as the practice of initiating a discussion about OCTs with most eligible patients.\" Setting: a large integrated health care delivery system; author affiliations are Kaiser Permanente Northern California.",
    },
    {
      id: "fletcher-2012",
      title: "Improving the recruitment activity of clinicians in randomised controlled trials: a systematic review",
      publisher: "BMJ Open (Fletcher B et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/22228729/",
      year: "2012",
      note: "Read October 2026 (PubMed abstract). Quote: \"Eight quantitative studies were included describing four interventions and a comparison of recruiting clinicians. One study was rated as strong, one as moderate and the remaining six as weak\". Also: \"Effective interventions included the use of qualitative research to identify and overcome barriers to recruitment, reduction of the clinical workload associated with participation in RCTs and the provision of extra training and protected research time.\" And: \"Metasummary analysis identified the most frequently reported subthemes to be: difficulty communicating trial methods, poor understanding of research and priority given to patient well-being.\"",
    },
    {
      id: "embi-2005",
      title: "Effect of a clinical trial alert system on physician participation in trial recruitment",
      publisher: "Archives of Internal Medicine (Embi PJ et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/16246994/",
      year: "2005",
      note: "Read October 2026 (PubMed abstract). Quote: \"The CTA intervention was associated with significant increases in the number of physicians generating referrals (5 before and 42 after; P < .001) ... a 10-fold increase in those physicians' referral rate (5.7/mo before and 59.5/mo after; rate ratio, 10.44\". The alert \"facilitated secure messaging to the trial's coordinator.\"",
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
    { label: "For physician groups", href: "/for/physician-groups", description: "How practices run research recruitment without adding clinician work." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond screens charts and shows the evidence for each criterion." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "How Bond's agents contact, pre-screen and book patients." },
    { label: "Pre-screening vs screening", href: "/guides/pre-screening-vs-screening", description: "What happens before the screening visit, and who does it." },
  ],
};

export default page;
