import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/spanish-language-trial-outreach",
  category: "blog",
  title: "Reaching Spanish-speaking patients for clinical trials",
  description:
    "How many patients prefer Spanish, why trials screen them out, what consent and language-access rules require, and outreach steps a site can take now.",
  keywords: [
    "Spanish-speaking patients clinical trials",
    "Hispanic Latino clinical trial recruitment",
    "limited English proficiency clinical trial consent",
    "Spanish informed consent short form",
  ],
  eyebrow: "Blog",
  h1: "Reaching Spanish-speaking patients for clinical trials: data, language access and outreach",
  intro:
    "In 2024, 44,867,699 US residents age 5 and older spoke Spanish at home, and 41.1% of them spoke English less than \"very well.\"{{cite:census-acs-2024}} Many trials still screen these patients out, by requiring English or by opening without a Spanish consent form. The fixes are concrete: translate early, use qualified interpreters and reach patients in Spanish from the first contact.",
  summary: "Census data on Spanish speakers, the trial rules and costs that exclude them, what consent and Section 1557 require, and outreach that works.",
  lastUpdated: "2026-10-16",
  blog: { date: "2026-10-16", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See how Engage works", secondaryHref: "/engage" },
  sections: [
    {
      id: "how-many",
      heading: "How many patients does this affect?",
      blocks: [
        {
          type: "p",
          text: "The American Community Survey asks people who speak another language at home how well they speak English: very well, well, not well or not at all. Census says the main purpose of the language questions is to measure how many people may need help understanding English.{{cite:census-acs50}} Its tables report how many speak English less than \"very well.\"{{cite:census-acs-2024}}",
        },
        {
          type: "stats",
          items: [
            { value: "13.9%", label: "US residents age 5 and older who speak Spanish at home (2024)", cite: "census-acs-2024" },
            { value: "41.1%", label: "Of those Spanish speakers, the share who speak English less than \"very well\"", cite: "census-acs-2024" },
            { value: "58.4%", label: "The same share among Spanish speakers 65 and older", cite: "census-acs-2024" },
          ],
        },
        {
          type: "p",
          text: "The age split matters for trials. Among the 4,928,480 Spanish speakers 65 and older, 2,879,306 spoke English less than \"very well,\" and many therapeutic areas skew toward older patients.{{cite:census-acs-2024}} These are survey estimates of self-reported ability, so treat them as a guide to demand, not a count of a site's patients.",
        },
      ],
    },
    {
      id: "representation",
      heading: "How well are Hispanic and Latino patients represented?",
      blocks: [
        {
          type: "p",
          text: "A study of 20,692 US trials with results on ClinicalTrials.gov from 2000 to 2020 found that only 43% reported any race or ethnicity data. Among those that did, median Hispanic or Latino enrollment was 6.0%, against a 2010 Census population share of 16.3%, the largest gap of any group studied. A quarter of the trials (1,027 of 4,105 in that analysis) reported no Latino participants at all.{{cite:turner-2022}}",
        },
        {
          type: "p",
          text: "Ethnicity and language are not the same thing: many Hispanic and Latino patients speak English fluently, and enrollment gaps have several causes. But language rules and missing translations are among the easiest to measure and to fix.",
        },
      ],
    },
    {
      id: "why-screened-out",
      heading: "Why are Spanish-speaking patients screened out?",
      blocks: [
        {
          type: "ul",
          items: [
            "**English requirements.** Of 14,367 trials with US sites registered on ClinicalTrials.gov from January 2019 to December 2020, 18.98% required the ability to read, speak or understand English, and 2.71% mentioned accommodating another language. Federally funded trials required English far more often than industry-funded trials (28.86% vs 5.30%).{{cite:muthukumar-2021}}",
            "**Missing translations.** At UCLA's cancer center from 2013 to 2018, only 261 of 758 studies (34.4%) had any IRB-approved translated consent document. Patients whose primary language was Spanish had much higher odds of signing consent for studies that opened with a Spanish consent form (odds ratio 5.7).{{cite:velez-2023}}",
            "**Who pays.** In the same center, patients with limited English proficiency made up about half as large a share of consent events in non-industry studies, where the investigator pays for translation, as in industry studies, where the sponsor does. The authors estimated $1,498 to translate a median-length initial consent form at twenty cents per word.{{cite:velez-2023}}",
            "**Time.** In a University of Washington gynecologic oncology practice, 7.5% of fluent English speakers enrolled in trials against 2.2% of patients with limited English proficiency. Providers named missing translated consent forms and the extra time needed to enroll as the main barriers.{{cite:jorge-2023}}",
          ],
        },
      ],
    },
    {
      id: "consent-rules",
      heading: "What do the consent rules require?",
      blocks: [
        {
          type: "p",
          text: "FDA's regulations require that consent information be in language understandable to the subject, and its 2023 consent guidance says people \"should not routinely be excluded from participating in research simply because they do not understand English.\"{{cite:fda-consent-2023}}",
        },
        {
          type: "ul",
          items: [
            "**Translate before the IRB's first review** when you expect to enroll people who speak a particular language, either a full translated consent or a translated short form with a written summary.{{cite:fda-consent-2023}}",
            "**Adding translations later** to an approved study may count as a minor change eligible for expedited IRB review.{{cite:fda-consent-2023}}",
            "**The short form route** needs a translated short form, an IRB-approved written summary and a witness to the oral presentation, and FDA strongly recommends the witness be fluent in the language used. If a non-English speaker is enrolled unexpectedly, with the English consent serving as the written summary, the investigator must promptly obtain a translated copy of it for the participant.{{cite:fda-consent-2023}}",
            "**Interpreters throughout.** FDA recommends interpreter services for the whole course of the study, not just the consent visit.{{cite:fda-consent-2023}}",
          ],
        },
      ],
    },
    {
      id: "section-1557",
      heading: "What does Section 1557 require of research sites?",
      blocks: [
        {
          type: "p",
          text: "HHS's 2024 rule under Section 1557 of the Affordable Care Act requires covered entities, which include recipients of federal financial assistance, to take reasonable steps to give people with limited English proficiency meaningful access. Its definition of a health program or activity includes health or clinical research. When interpretation or translation is needed, covered entities must use a qualified interpreter or translator, and machine translation of critical or technical text must be reviewed by a qualified human translator.{{cite:ecfr-92-201}}",
        },
        {
          type: "p",
          text: "As of October 2026 these language provisions remain in force. In June 2026, HHS published notice that a federal court had vacated parts of the rule that expanded sex discrimination to include gender identity, and that the other provisions remain in force.{{cite:fr-1557-vacatur}} Whether a given site is covered depends on its funding; this is not legal advice.",
        },
      ],
    },
    {
      id: "what-works",
      heading: "Which outreach approaches have evidence?",
      blocks: [
        {
          type: "p",
          text: "The CODA appendicitis trial, run at 25 US centers from 2016 to 2020, set out to include Spanish speakers, with bilingual, multicultural staff, certified interpreters and the option to complete surveys by phone with a coordinator's help. Of eligible patients, 45% of Spanish speakers consented, against 27% of English speakers.{{cite:serrano-2023}} The strategy was not tested against a control, but it suggests that Spanish speakers enroll when a trial is built for them.",
        },
        {
          type: "p",
          text: "Interpreter quality matters too. In audiotaped pediatric emergency visits, 12% of errors by professional interpreters had potential clinical consequences, against 22% for ad hoc interpreters and 20% with no interpreter; interpreters with at least 100 hours of training had 2%.{{cite:flores-2012}} That study covered clinical care, but consent conversations carry the same risk.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's voice and text agents contact every new lead in the patient's language, including switching languages mid-call, and patients can reach a person at any time through a live transfer or a callback.{{cite:bond-product}} Consent itself stays with the site's staff and qualified interpreters. See [Engage](/engage).",
        },
      ],
    },
    {
      id: "what-to-do",
      heading: "What should a site do before the next study opens?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Pull preferred-language data from your EHR to estimate how many eligible patients prefer Spanish.",
            "At feasibility, ask the sponsor whether Spanish consent forms and recruitment materials will be ready at activation, and who pays for translation.{{cite:velez-2023}}",
            "Challenge English-only eligibility criteria unless the protocol has a stated reason, such as an instrument validated only in English.{{cite:fda-consent-2023}}",
            "Keep an IRB-approved Spanish short form on file, with a plan for a fluent witness.{{cite:fda-consent-2023}}",
            "Use qualified interpreters rather than family members, and have qualified translators review any machine translation of consent materials.{{cite:ecfr-92-201}}",
            "Track pre-screening, consent and enrollment by preferred language, so a drop-off shows up while it can still be fixed.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can a trial exclude people who do not speak English?",
      a: "FDA says people should not routinely be excluded simply because they do not understand English, citing the requirement that subject selection be equitable.{{cite:fda-consent-2023}} The IRB weighs any language restriction.",
    },
    {
      q: "Is a Spanish short form enough for consent?",
      a: "It is allowed with an IRB-approved written summary and a witness. When the English consent served as the summary for an unexpected enrollment, FDA says the investigator must promptly obtain a translated copy for the participant.{{cite:fda-consent-2023}}",
    },
    {
      q: "Can machine translation be used for consent forms?",
      a: "For entities covered by HHS's Section 1557 rule, machine translation of critical or technical text must be reviewed by a qualified human translator.{{cite:ecfr-92-201}}",
    },
  ],
  sources: [
    {
      id: "census-acs-2024",
      title: "Language Spoken at Home, American Community Survey 1-Year Estimates, Table S1601 (2024)",
      publisher: "US Census Bureau",
      url: "https://data.census.gov/table/ACSST1Y2024.S1601?g=010XX00US",
      year: "2025",
      note: "Read via the data.census.gov API, October 2026; 2025 1-year tables were not yet posted. Values: S1601_C01_001E \"Population 5 years and over\" 321745943; S1601_C01_004E Spanish 44867699; S1601_C02_004E percent 13.9; S1601_C05_004E \"Speak English less than \"very well\"\" Spanish 18432221; S1601_C06_004E \"Percent speak English less than \"very well\"\" 41.1; 65 years and over: C01_007E 4928480, C05_007E 2879306, C06_007E 58.4. Survey estimates with margins of error. Column labels as given by Census.",
    },
    {
      id: "census-acs50",
      title: "Language Use in the United States: 2019 (American Community Survey Reports, ACS-50)",
      publisher: "US Census Bureau (Dietrich S, Hernandez E)",
      url: "https://www.census.gov/content/dam/Census/library/publications/2022/acs/acs-50.pdf",
      year: "2022",
      note: "Quotes: \"The third question of the series asks how well the person speaks English; respondents select from “very well,” “well,” “not well,” or “not at all.” The primary purpose of collecting language data is to measure the proportion of the U.S. population that may need help in understanding English.\"",
    },
    {
      id: "turner-2022",
      title: "Race/ethnicity reporting and representation in US clinical trials: a cohort study",
      publisher: "The Lancet Regional Health – Americas (Turner BE et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9302767/",
      year: "2022",
      note: "Trials registered March 2000 to March 2020. Quotes: \"Among 20,692 US-based trials with reported results (representing ~4·76 million enrollees), only 43% (8,871/20,692) reported any race/ethnicity data.\"; \"with the largest discrepancy observed for Latinos (median 6·0%, IQR 0·4–15·4%; US Census population 16·3%)\"; \"(compared to 44% (1807/4105), 25% (1027/4105), 74% (3035/4105) and 2% (76/4105) for Asian, Latino, American Indian, and White enrollees, respectively)\" (trials reporting 0 enrollees of each group). Figures are medians of per-trial percentages.",
    },
    {
      id: "muthukumar-2021",
      title: "Evaluating the frequency of English language requirements in clinical trial eligibility criteria: A systematic analysis using ClinicalTrials.gov",
      publisher: "PLOS Medicine (Muthukumar AV, Morrell W, Bierer BE)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34520467/",
      year: "2021",
      note: "Registry text analysis. Quotes: \"Of the 14,367 clinical trials registered on ClinicalTrials.gov between 1 January 2019 and 1 December 2020 that met baseline search criteria, 18.98% (95% CI 18.34%-19.62%; n = 2,727) required the ability to read, speak, and/or understand English, and 2.71% (95% CI 2.45%-2.98%; n = 390) specifically mentioned accommodation of translation to another language.\"; \"Of 2,585 federally funded clinical trials, 28.86% ... required English language proficiency\"; \"of the 5,286 industry-funded trials, 5.30% (95% CI 4.69%-5.90%; n = 280) required English\".",
    },
    {
      id: "velez-2023",
      title: "Consent document translation expense hinders inclusive clinical trial enrolment",
      publisher: "Nature (Velez MA et al., UCLA), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11046417/",
      year: "2023",
      note: "Single cancer center, 2013 to 2018, 12,082 consent events analyzed; Nature 620:855-862, PMID 37532930. Quotes: \"Of 758 studies for which patients signed consent documents, 261 (34.4%) had any available IRB-approved translated consent documents.\"; \"Patients with Spanish as their primary language had higher odds of signing consent documents for studies that had Spanish consent documents at study opening than those without (OR, 5.7, 95% CI, 3.8 to 8.5, p<0.001)\"; \"the proportion of consent events for patients with limited English proficiency in studies not sponsored by industry was approximately half of that seen in industry-sponsored studies\"; \"(for which the principal investigator pays the translation costs)\"; \"The median number of words in the initial English consent document was 7,491.5 (range 598 to 20,382 words), with an estimated cost of $1,498 per translation.\"; \"translated at twenty cents per word\".",
    },
    {
      id: "jorge-2023",
      title: "Participation of Patients With Limited English Proficiency in Gynecologic Oncology Clinical Trials",
      publisher: "Journal of the National Comprehensive Cancer Network (Jorge S et al., University of Washington)",
      url: "https://pubmed.ncbi.nlm.nih.gov/36634612/",
      year: "2023",
      note: "Single academic practice. Quotes: \"Clinical trial enrollment was 7.5% among fluent English speakers and 2.2% among patients with LEP (risk ratio, 0.29; 95% CI, 0.11-0.78; P=.007)\"; \"Providers reported that the most significant barriers to enrollment of patients with LEP in research were unavailability of translated consent forms and increased time needed to enroll patients.\"",
    },
    {
      id: "fda-consent-2023",
      title: "Informed Consent: Guidance for IRBs, Clinical Investigators, and Sponsors",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/media/88915/download",
      year: "2023",
      note: "Final guidance, August 2023; FAQs on subjects who do not understand English. Quotes: \"understandable to the subject (21 CFR 50.20)\"; \"Consistent with the requirement that selection of subjects be equitable (21 CFR 56.111(a)(3)), individuals should not routinely be excluded from participating in research simply because they do not understand English.\"; \"the investigator should submit to the IRB, prior to its initial review, appropriately translated consent documents (i.e., either a long form or a short form with written summary)\"; \"may be considered no more than a minor change to the research and may qualify for an expedited review procedure\"; \"FDA recommends that whenever subjects who do not understand English are involved in research, appropriate interpreter services be made available throughout the course of the research.\"; \"FDA strongly recommends the witness be fluent in the language of the oral presentation.\"; FAQ 5, on enrollment that was not expected: \"The investigator must obtain a translated copy of the IRB-approved English version of the long form that served as the written summary, which should be done promptly.\"",
    },
    {
      id: "ecfr-92-201",
      title: "45 CFR 92.201, Meaningful access for individuals with limited English proficiency (Section 1557 rule)",
      publisher: "Electronic Code of Federal Regulations",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-92/subpart-C/section-92.201",
      year: "2024",
      note: "Text current in eCFR, October 2026. Quotes: \"A covered entity must take reasonable steps to provide meaningful access to each individual with limited English proficiency\"; \"a covered entity must offer a qualified interpreter\"; \"a covered entity must utilize the services of a qualified translator\"; \"If a covered entity uses machine translation when the underlying text is critical to the rights, benefits, or meaningful access of an individual with limited English proficiency, when accuracy is essential, or when the source documents or materials contain complex, non-literal or technical language, the translation must be reviewed by a qualified human translator.\" 45 CFR 92.4 defines a health program or activity to include any undertaking to \"(iv) Engage in health or clinical research\" and says \"Covered entity means: (1) A recipient of Federal financial assistance; (2) The Department; and (3) An entity established under title I of the ACA.\"",
    },
    {
      id: "fr-1557-vacatur",
      title: "Notice of Vacatur Regarding Certain Provisions of the 2024 Nondiscrimination in Health Programs and Activities Final Rule (91 FR 32887)",
      publisher: "Federal Register (HHS Office for Civil Rights)",
      url: "https://www.federalregister.gov/documents/2026/06/02/2026-11015/notice-of-vacatur-regarding-certain-provisions-of-the-2024-nondiscrimination-in-health-programs-and",
      year: "2026",
      note: "Published June 2, 2026; read via the Federal Register API. Quote: \"the court vacated certain provisions of the regulation to the extent they expand Title IX's definition of sex discrimination to include gender-identity discrimination. Pursuant to the court's order, the vacated provisions are legally void. The other provisions of the Section 1557 Rule remain in force.\"",
    },
    {
      id: "serrano-2023",
      title: "Trial Participation and Outcomes Among English-Speaking and Spanish-Speaking Patients With Appendicitis Randomized to Antibiotics",
      publisher: "JAMA Surgery (Serrano E et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10308294/",
      year: "2023",
      note: "Secondary analysis of the CODA trial, 25 US centers, May 2016 to February 2020. Quotes: \"Among eligible patients 476 of 1050 Spanish speakers (45%) and 1076 of 3982 of English speakers (27%) consented\"; \"This strategy included bilingual, multicultural research staff, and certified interpreters during recruitment and follow-up. Additionally, participants were offered to complete surveys via phone or online and with the assistance of a research coordinator if preferred.\"",
    },
    {
      id: "flores-2012",
      title: "Errors of medical interpretation and their potential clinical consequences: a comparison of professional versus ad hoc versus no interpreters",
      publisher: "Annals of Emergency Medicine (Flores G et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/22424655/",
      year: "2012",
      note: "57 audiotaped encounters in the 2 largest pediatric emergency departments in Massachusetts; \"Participants were Spanish-speaking limited-English-proficient patients, caregivers, and their interpreters.\" Quotes: \"The proportion of errors of potential consequence was significantly lower for professional (12%) versus ad hoc (22%) versus no interpreters (20%).\"; \"Those with greater than or equal to 100 hours of training committed significantly lower proportions of errors of potential consequence overall (2% versus 12%)\".",
    },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
  ],
  related: [
    { label: "Engage: outreach and booking", href: "/engage", description: "Voice and text pre-screening in the patient's language, scheduling and reminders." },
    { label: "Consent support", href: "/consent", description: "Plain-language explanations and Q&A after the booked visit; the site obtains consent." },
    { label: "Bond for FQHCs and community sites", href: "/for/fqhcs-and-community-sites", description: "Research at health centers that serve patients rarely offered trials." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "Text message templates for patient outreach." },
  ],
};

export default page;
