import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/patient-portal-trial-invitations",
  category: "blog",
  title: "MyChart trial invitations: published response rates",
  description:
    "What studies report for patient portal (MyChart) trial invitations: response and enrollment rates, portal vs email trials, equity gaps and ways to raise yield.",
  keywords: [
    "patient portal recruitment clinical trials",
    "MyChart research recruitment response rate",
    "patient portal messages trial enrollment",
    "EHR portal recruitment",
    "portal vs email recruitment",
  ],
  eyebrow: "Blog",
  h1: "Patient portal trial invitations: what the published rates show",
  intro:
    "Patient portal messages reach many patients at low cost, but most go unanswered and few lead to enrollment. A Johns Hopkins pilot drew a 1.7 percent response from older adults, and in a randomized comparison of 17,989 invitations at HealthPartners, 0.5 percent of those invited were randomized into the trial.{{cite:plante-2020,ziegenfuss-2025}} Here is what the studies found, who the channel misses, and what raises yield.",
  summary: "Published response and enrollment rates for patient portal trial invitations, portal vs email trials, equity gaps and tactics that help.",
  lastUpdated: "2026-11-11",
  blog: { date: "2026-11-11", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "portal-reach",
      heading: "How many patients can a portal message reach?",
      blocks: [
        {
          type: "p",
          text: "Most U.S. patients, and more each year. Federal survey data show 77 percent of individuals were offered online access to their health information in 2024, up from 73 percent in 2022, and 65 percent accessed it at least once in the past year, up from 57 percent.{{cite:onc-2025}}",
        },
        {
          type: "p",
          text: "Reach inside a given health system can be lower. At Johns Hopkins, 40 percent of 1,308,820 patients had active secure messaging accounts, and those users were more often white and non-Hispanic than the rest of the patient population.{{cite:miller-2019}} Before planning a portal campaign, ask IT how many of your target patients have an active account.",
        },
      ],
    },
    {
      id: "published-rates",
      heading: "What response and enrollment rates have studies reported?",
      blocks: [
        {
          type: "p",
          text: "Rates vary with the study, the population and how \"response\" is defined, so compare like with like.",
        },
        {
          type: "table",
          caption: "Published patient portal recruitment results{{cite:plante-2020,miller-2019,pfaff-2019,beaton-2024,dykes-2024,ziegenfuss-2025}}",
          columns: ["Study", "Who was invited", "Response or interest", "Enrolled"],
          rows: [
            ["Johns Hopkins, STURDY vitamin D trial (2017)", "6,896 adults aged 70 and older, one message", "116 interested (1.7%)", "12 randomized (0.2%)"],
            ["Johns Hopkins, 13 studies", "Patients matching each study's EHR phenotype", "2.9% average; 3.4% condition-specific vs 1.4% general health", "Not reported"],
            ["UNC, ADAPTABLE aspirin trial", "12,254 by portal or email", "13.5% visited the study website", "4.2%"],
            ["Columbia, All of Us (2022 to 2023)", "59,592 patients", "41.0% opened; 15.1% responded; 6.3% interested", "About 2% (estimate)"],
            ["University of Rochester, many studies", "Patients across specialties", "23% responded; one third of them interested", "Not reported"],
            ["HealthPartners, LEAP weight-loss trial (2023 to 2024)", "17,989 randomized to portal or email", "6.6% completed the self-screener", "85 randomized (0.5%)"],
          ],
        },
        {
          type: "p",
          text: "Two things stand out. Interest is common enough to be worth the effort, and most of the drop happens between interest and enrollment, where someone has to call, pre-screen and book the patient. In the ADAPTABLE trial, coordinators recruiting in clinic enrolled 16.8 percent of the 339 patients they approached, far above the electronic yield, yet electronic methods still produced 509 of 580 local enrollees (87.8 percent) because they reached so many more people.{{cite:pfaff-2019}}",
        },
      ],
    },
    {
      id: "portal-vs-email",
      heading: "Is a portal message better than email, letters or phone calls?",
      blocks: [
        {
          type: "p",
          text: "Two randomized comparisons of portal and email point in different directions.",
        },
        {
          type: "ul",
          items: [
            "**Duke (published 2026).** Among 15,376 patients identified from the EHR for a virtual cardiovascular prevention study, 9.9 percent of those emailed logged on to the study website, against 5.9 percent of those sent a portal message (relative risk 1.68). Email did better in patients older than 60.{{cite:gouda-2026}}",
            "**HealthPartners (published 2025).** Patients sent a portal message were more likely to start the self-screener (odds ratio 2.4) and to complete later steps, but the difference in the share ultimately randomized was not significant (odds ratio 1.43, 95% CI 0.93 to 2.21).{{cite:ziegenfuss-2025}}",
          ],
        },
        {
          type: "p",
          text: "On cost, an Oregon Health & Science University study that randomized healthy volunteers to portal, letter or phone invitations found portal recruitment faster (2.7 days versus 19.3 for letters and 10.4 for calls) and cheaper per enrolled subject ($113 versus $559 and $435), with 3.0 staff hours per enrollee versus 17.3 and 13.6.{{cite:samuels-2017}} The practical reading: the portal is a cheap first touch, not a replacement for a person or an agent who follows up.",
        },
      ],
    },
    {
      id: "who-it-misses",
      heading: "Who does portal recruitment miss?",
      blocks: [
        {
          type: "p",
          text: "Portal-only recruitment can narrow a study population. At the University of Rochester, the response rate for Black and Hispanic patients was about half that of White patients.{{cite:dykes-2024}} In a Washington University test among patients with cancer, using an invitation to a fictitious survey study, 18 percent of non-Hispanic White patients responded with interest against 7 percent of African American or Black patients, patients 65 and older responded less (10 versus 17.1 percent), and a $20 incentive made no significant difference (15 versus 12 percent).{{cite:ping-2026}}",
        },
        {
          type: "p",
          text: "The gap is mostly early in the funnel. In Columbia's All of Us campaign, patients from underrepresented racial and ethnic groups had lower odds of consenting to be contacted and opening messages, but higher odds of showing interest once they responded.{{cite:beaton-2024}} That argues for adding phone and text outreach for patients who do not open the portal, rather than more portal messages.",
        },
      ],
    },
    {
      id: "raise-yield",
      heading: "What raises the yield of portal invitations?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Target with a real phenotype.** Condition-specific studies drew 3.4 percent responses versus 1.4 percent for general health studies at Johns Hopkins, and studies with more complete phenotypes did better.{{cite:miller-2019}}",
            "**Say why the study matters and who is asking.** A longer message with the study's significance and a personal invitation from the principal investigator raised response from 1.2 to 2.1 percent.{{cite:plante-2020}}",
            "**Expect few complaints.** The same pilot recorded two complaints and one unsubscribe request among 6,896 recipients, a useful data point for your IRB and privacy office.{{cite:plante-2020}}",
            "**Meet patients where they already act.** UCLA embedded a study information sheet and HIPAA authorization in the portal's pre-visit check-in and enrolled 308 of 843 patients (37 percent).{{cite:leuchter-2023}}",
            "**Plan for setup time.** At Rochester, the time from first consultation to the first message ranged from 84 to 442 days, and study teams needed help with EHR criteria and plain-language descriptions.{{cite:dykes-2024}}",
            "**Follow up fast, by phone and text.** Call or text every patient who responds, and reach the patients who never open the portal through other channels.",
          ],
        },
        {
          type: "p",
          text: "Measure each step separately: messages sent, opened, answered, pre-screened, booked and enrolled, broken out by age, race, ethnicity and language. Columbia tracked four stages, from consent to be contacted through expressed interest, and that is how it saw that underrepresented patients dropped off before opening the message rather than after reading it.{{cite:beaton-2024}} Without that breakdown, a low overall rate does not tell you whether to rewrite the message or add another channel.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's [Engage](/engage) voice and text agents contact patients found in the EHR in their own language, tell them AI is being used, pre-screen them and book visits into the site's calendar. A patient can reach a person at any time through a live transfer to a coordinator or a callback.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how portal invitations, calls and texts can work together for one of your studies.",
          secondaryLabel: "Read the IRB and HIPAA guide",
          secondaryHref: "/guides/irb-hipaa-patient-outreach",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What response rate should a site plan for?",
      a: "Expect wide variation and plan conservatively. Interest ranged from 1.7 percent in the Johns Hopkins pilot to 6.3 percent at Columbia, and in the LEAP comparison 0.5 percent of those invited were randomized.{{cite:plante-2020,beaton-2024,ziegenfuss-2025}} Adjust once you have your own data.",
    },
    {
      q: "Does the IRB have to approve portal recruitment messages?",
      a: "Treat the message as recruitment material and include it in your IRB submission. Institutions set their own rules for portal recruitment: Rochester built a working group of human subject protection, IT and privacy staff before sending its first message.{{cite:dykes-2024}} Our [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach) covers the HIPAA side.",
    },
    {
      q: "Should we send portal messages or emails?",
      a: "Test both if you can. Email beat the portal for website visits at Duke, while the portal led more patients to start screening at HealthPartners without changing final randomization.{{cite:gouda-2026,ziegenfuss-2025}}",
    },
  ],
  sources: [
    {
      id: "onc-2025",
      title: "How Digitization of Patient Access Empowered Patients",
      publisher: "HealthIT.gov blog (ASTP/ONC), Chelsea Richwine",
      url: "https://healthit.gov/blog/digital-dividends/how-digitization-of-patient-access-empowered-patients/",
      year: "2025",
      note: "Read October 2026. Posted July 2, 2025; based on HINTS data. Quote: \"more than three-quarters of individuals nationwide (77%) were offered online access to their health information in 2024—up from 73% in 2022—and nearly two-thirds (65%) accessed their information online at least once in the past year—up from 57% in 2022.\"",
    },
    {
      id: "miller-2019",
      title: "Electronic medical record-based cohort selection and direct-to-patient, targeted recruitment: early efficacy and lessons learned",
      publisher: "Journal of the American Medical Informatics Association (Miller HN et al., Johns Hopkins)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31553434/",
      year: "2019",
      note: "Read October 2026 (PubMed abstract). Quote: \"Of the 1 308 820 patients in the health network, 40% had active SM accounts. SM users had a greater proportion of white and non-Hispanic patients\". Also: \"The average SM response rate was 2.9%, with higher rates among condition-specific (3.4%) vs general health (1.4%) studies. Those studies with a more inclusive comprehensive phenotype had a higher response rate.\" Thirteen studies.",
    },
    {
      id: "plante-2020",
      title: "Recruitment of trial participants through electronic medical record patient portal messaging: A pilot study",
      publisher: "Clinical Trials (Plante TB et al., Johns Hopkins, STURDY trial)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31581836/",
      year: "2020",
      note: "Read October 2026 (PubMed abstract). Quote: \"a sample of 6896 met our inclusion criteria and were sent one patient portal recruitment message between 6 April 2017 and 3 August 2017.\" Also: \"There were 116 patients who expressed interest in the study (response rate: 1.7%). Twelve (0.2%) recipients were randomized. There were two complaints (0.03%) and one request to unsubscribe from future recruitment messages (0.01%). Response rate was higher with the longer message than the shorter message (2.1% vs 1.2%; p = 0.005).\" Inclusion: age 70 and older.",
    },
    {
      id: "pfaff-2019",
      title: "Recruiting for a pragmatic trial using the electronic health record and patient portal: successes and lessons learned",
      publisher: "Journal of the American Medical Informatics Association (Pfaff E et al., UNC)",
      url: "https://pubmed.ncbi.nlm.nih.gov/30445631/",
      year: "2019",
      note: "Read October 2026 (PubMed abstract). Quote: \"The electronic recruitment workflow sent electronic messages to 12 254 recipients; 13.5% of these recipients visited the study website, and 4.2% enrolled in the study.\" Also: \"Coordinators recruited 339 participants in clinic; 23.6% visited the study website, and 16.8% enrolled in the study. Five-hundred-nine of the 580 UNC enrollees (87.8%) were recruited using an electronic method.\" Electronic workflow combined direct email and patient portal messages.",
    },
    {
      id: "beaton-2024",
      title: "Using patient portals for large-scale recruitment of individuals underrepresented in biomedical research: an evaluation of engagement patterns throughout the patient portal recruitment process at a single site within the All of Us Research Program",
      publisher: "Journal of the American Medical Informatics Association (Beaton M et al., Columbia)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38917428/",
      year: "2024",
      note: "Read October 2026 (PubMed abstract). Quote: \"Between October 2022 and November 2023, a total of 59 592 patients received patient portal messages inviting them to join the AoURP. Among them, 24 445 (41.0%) opened the message, 8983 (15.1%) responded, and 3765 (6.3%) showed interest in joining the program.\" Also: \"we estimate about 2% of patients contacted ultimately enrolled\" and \"Patients from underrepresented race and ethnicity communities had lower odds of consenting to be contacted and opening messages, but higher odds of showing interest after responding.\"",
    },
    {
      id: "dykes-2024",
      title: "Implementation of MyChart for recruitment at an academic medical center",
      publisher: "Journal of Clinical and Translational Science (Dykes C et al., University of Rochester)",
      url: "https://pubmed.ncbi.nlm.nih.gov/39540113/",
      year: "2024",
      note: "Read October 2026 (PubMed abstract). Quote: \"The time from consultation to the first message(s) sent ranged from 84 to 442 days and declined slightly over time. The overall patient response rate to MyChart messages about available research studies was 23% with one third of those saying they were interested in learning more. The response rate for Black and Hispanic patients was about 50% that of White patients.\" Also: \"we established a working group comprised of representatives from human subject protection, information technology, and privacy\".",
    },
    {
      id: "ziegenfuss-2025",
      title: "A randomized study comparing patient portal and email communications for trial recruitment",
      publisher: "Clinical Trials (Ziegenfuss JY et al., HealthPartners)",
      url: "https://pubmed.ncbi.nlm.nih.gov/40836901/",
      year: "2025",
      note: "Read October 2026 (PubMed abstract). Quote: \"Between May 2023 and February 2024, 17,989 potentially trial-eligible participants identified using EHR data were randomized to either portal or email recruitment communications.\" Also: \"Overall, 6.6% (n = 1191) completed the self-screener and 0.5% (n = 85) were randomized into the LEAP trial. Individuals randomized to patient portal communication were more likely to start the self-screener (Odds Ratio [OR]= 2.4 [2.12, 2.73], p < 0.0001) and complete the subsequent four steps, however there was no significant difference in the percent ultimately randomized into the study (OR = 1.43 [0.93, 2.21], p = 0.10).\"",
    },
    {
      id: "gouda-2026",
      title: "Messaging Modality and Content for Recruitment of Research Participants: A Randomized Clinical Trial",
      publisher: "JAMA Network Open (Gouda P et al., Duke)",
      url: "https://pubmed.ncbi.nlm.nih.gov/42172031/",
      year: "2026",
      note: "Read October 2026 (PubMed abstract). Quote: \"Of 15 376 potential research participants ... identified through the electronic health records\". Also: \"The email recruitment modality led to a higher likelihood of the primary outcome than patient portal messages (768 [9.9%] vs 452 [5.9%]; RR, 1.68; 99% CI, 1.45-1.95)\" and \"email more effective than patient portal in those older than 60 years\". Primary outcome: logging onto the study website by clicking the link within 6 months.",
    },
    {
      id: "samuels-2017",
      title: "Effectiveness and cost of recruiting healthy volunteers for clinical research studies using an electronic patient portal: A randomized study",
      publisher: "Journal of Clinical and Translational Science (Samuels MH et al., Oregon Health & Science University)",
      url: "https://pubmed.ncbi.nlm.nih.gov/29707259/",
      year: "2017",
      note: "Read October 2026 (PubMed abstract). Quote: \"Recruitment rates were low, but occurred more quickly via the EHR patient portal than letters or phone calls (2.7 vs. 19.3 or 10.4 d). Effort and costs per enrolled subject were lower for the EHR patient portal (3.0 vs. 17.3 or 13.6 h, $113 vs. $559 or $435).\"",
    },
    {
      id: "ping-2026",
      title: "Impact of Financial Incentives on Electronic Health Record-Driven Recruitment of Underrepresented Communities in Research: Randomized Controlled Trial",
      publisher: "Journal of Medical Internet Research (Ping C et al., Washington University in St. Louis)",
      url: "https://pubmed.ncbi.nlm.nih.gov/42330542/",
      year: "2026",
      note: "Read October 2026 (PubMed abstract). Invitation was for a fictitious survey study. Quote: \"Response rates were higher (P<.001) among non-Hispanic White patients (108/600, 18%) than among African American or Black patients (32/456, 7%)\". Also: \"Older patients (≥65 years) were less likely to view the recruitment message ... and respond (72/720, 10% vs 82/480, 17.1%; P=.002)\" and \"No differences were observed in response rate for the incentive cohort compared to the cohort with no incentive (60/400, 15% vs 96/800, 12%; P=.21).\"",
    },
    {
      id: "leuchter-2023",
      title: "Embedding research study recruitment within the patient portal preCheck-in",
      publisher: "Journal of the American Medical Informatics Association (Leuchter RK et al., UCLA)",
      url: "https://pubmed.ncbi.nlm.nih.gov/37595575/",
      year: "2023",
      note: "Read October 2026 (PubMed abstract). Quote: \"We evaluated a new method of study enrollment by embedding a study information sheet and HIPAA authorization form (HAF) into the patient portal preCheck-in\". Also: \"A total of 386 of 843 patients completed preCheck-in, 308 of whom signed the HAF and enrolled in the study (37% enrollment rate).\"",
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
    { label: "Engage: voice and text outreach", href: "/engage", description: "How Bond's agents contact, pre-screen and book patients, with a person always available." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact which patients, under which HIPAA path, with what IRB approval." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "First-contact, reminder and opt-out wording for texts." },
    { label: "Using the EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "Interfaces, permissions and what each EHR tool can and cannot query." },
  ],
};

export default page;
