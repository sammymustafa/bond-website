import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/consent-form-cost",
  category: "guide",
  title: "Informed consent form length: costs and comprehension",
  description:
    "Long, dense informed consent forms cost reading time, comprehension and retention. What studies show about length and reading level, and which fixes work.",
  keywords: [
    "informed consent form length",
    "consent form reading level",
    "informed consent comprehension",
    "cost of long consent forms",
    "key information section",
  ],
  eyebrow: "Guide",
  h1: "What a long informed consent form costs you",
  intro:
    "Trial consent forms have grown longer for decades, and they are typically written well above the average reading level of the US adults asked to sign them.{{cite:berger-2009,duong-2021,mirza-2024}} The cost shows up as longer reading time, lower comprehension and, in observational data, higher dropout. Below are the numbers, the rules, and what a site can change without waiting on the sponsor.",
  summary: "The evidence on consent form length, reading level, comprehension and dropout, plus the fixes that work and how to measure them.",
  lastUpdated: "2026-09-21",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "See how Consent works",
    secondaryHref: "/consent",
  },
  sections: [
    {
      id: "length-trend",
      heading: "How long are consent forms, and why do they keep growing?",
      blocks: [
        {
          type: "p",
          text: "The [informed consent](/glossary/informed-consent) document has grown for decades. For oncology trials approved by one regional ethics committee in Norway, the mean consent document went from 338 words in 1987 to 1990 to 1,087 words in 2005 to 2007. The authors attribute the growth to greater complexity and especially to more material on formalities such as legal matters, financing, insurance and data storage.{{cite:berger-2009}}",
        },
        {
          type: "p",
          text: "US forms are long too. A 2004 review of 107 oncology consent documents at one cancer institute found a mean of 2,709 words, or 10.8 pages.{{cite:sharp-2004}} Across 315 solid-tumor trial forms at Mayo Clinic from 2004 to 2010, the median was 5,129 words, forms from pharmaceutical sponsors were longest at a median of 5,648 words, and wordiness rose steadily over the period.{{cite:duong-2021}}",
        },
        {
          type: "p",
          text: "Recent EU data point the same way. In a pilot study of 67 Phase III drug trials submitted in 2023, the median form ran 16 pages and 5,746 words, and industry-sponsored forms averaged 8.1 pages more than academic ones. Exploratory analyses suggested that formatting, repetition and expanded data protection sections explained more of the length differences than content did, a sign that the main drivers of length can be changed.{{cite:brunner-ziegler-2026}}",
        },
        {
          type: "stats",
          items: [
            { value: "16 pages", label: "Median length of consent forms in 67 EU Phase III trials submitted in 2023", cite: "brunner-ziegler-2026" },
            { value: "12.0", label: "Mean reading grade level of consent forms in 798 federally funded US trials", cite: "mirza-2024" },
            { value: "52.1%", label: "Pooled share of trial participants who understood randomization", cite: "tam-2015" },
            { value: "16%", label: "Higher dropout rate associated with each added grade of reading level", cite: "mirza-2024" },
          ],
        },
      ],
    },
    {
      id: "reading-level",
      heading: "Can patients read the forms they are asked to sign?",
      blocks: [
        {
          type: "p",
          text: "Often not easily. Across 798 federally funded US trials, consent forms averaged a Flesch-Kincaid grade level of 12.0, well above the 8th-grade average reading level of US adults.{{cite:mirza-2024}} In the 2003 national adult literacy assessment, about 22 percent of US adults had Basic health literacy and 14 percent had Below Basic.{{cite:naal-2006}}",
        },
        {
          type: "p",
          text: "Template language is part of the cause. A 2003 survey of 114 US medical school websites found that consent template text supplied by IRBs averaged a Flesch-Kincaid grade level of 10.6 and, on average, exceeded the IRBs' own stated readability standards by 2.8 grade levels.{{cite:paasche-orlow-2003}} In the 2004 oncology review, none of the 107 documents was written at or below an 8th-grade level.{{cite:sharp-2004}}",
        },
        {
          type: "quote",
          text: "Consent forms that are long, complex, legalistic, and have a high reading level may overwhelm prospective subjects and may inhibit reading of the full document and understanding of the relevant information.{{cite:fda-consent-2023}}",
          attribution: "FDA, Informed Consent guidance, 2023",
        },
      ],
    },
    {
      id: "what-it-costs",
      heading: "What does a long, dense form cost in comprehension, time and retention?",
      blocks: [
        {
          type: "p",
          text: "A meta-analysis of 103 studies found that only 52.1 percent of trial participants understood randomization and 53.3 percent understood placebo, and understanding did not improve across three decades of studies.{{cite:tam-2015}} Patients rarely say so. In CISCRP's 2017 survey of 2,194 participants, only about 10 percent reported difficulty understanding the form.{{cite:ciscrp-2017}} A self-rating is not a test.",
        },
        {
          type: "table",
          caption: "Where a long, dense consent form costs you",
          columns: ["Cost", "What the evidence shows", "Study type"],
          rows: [
            [
              "Reading time",
              "A 6,000-word cancer-trial form took a median 12 minutes to read, versus 8 minutes for a 2,000-word version.{{cite:almodallal-2021}}",
              "Randomized, double-blind, mock consent forms",
            ],
            [
              "Willingness to sign",
              "73 percent signed or said they would sign the 6,000-word form, versus 84 percent for the 2,000-word form.{{cite:almodallal-2021}}",
              "Same trial, secondary outcome",
            ],
            [
              "Comprehension",
              "A 21-page form from an actual industry trial, written just below an 11th-grade level, scored 65.7 percent on comprehension. A 14-page rewrite below a sixth-grade level scored 79.3 percent.{{cite:emanuel-2026}}",
              "Randomized, 334 US adults, hypothetical enrollment",
            ],
            [
              "Dropout",
              "Each added grade of reading level was associated with a 16 percent higher dropout rate.{{cite:mirza-2024}}",
              "Retrospective, 798 federally funded US trials",
            ],
            [
              "Early withdrawal",
              "35 percent of participants who dropped out early said the form was hard to understand, versus 16 percent of those who completed.{{cite:ciscrp-2013}}",
              "Participant survey, self-reported",
            ],
            [
              "Translation",
              "One translation vendor's website lists $25 per page to translate a consent form into Spanish, or $80 per page with back-translation (as of September 2026).{{cite:gts-translation}}",
              "Single vendor price list, not a benchmark",
            ],
            [
              "Language access",
              "The share of consent events involving patients with limited English proficiency was about half as high in non-industry trials as in industry trials, which the authors link to translation cost.{{cite:velez-2023}}",
              "Consent records at one US cancer center",
            ],
          ],
          note: "Associations from observational studies are not proof that length or reading level caused the outcome.",
        },
        {
          type: "p",
          text: "The conversation is not always the expensive part. In a VA COVID-19 trial, the consent discussion took about 10 minutes plus 5 minutes for questions, but documenting and completing paper consent averaged 4 hours.{{cite:woods-2021}} That reflects pandemic isolation rules, but it is a reason to time the whole consent process, not only the discussion.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Shorter is not automatically clearer",
          text: "In the same randomized study, a 3-page form adapted from FDA's 2024 draft summary template, also written below a sixth-grade level, scored 69.3 percent. The authors call that the same level of comprehension as the 21-page original, and more of its readers wanted information on study procedures. The 14-page version beat both.{{cite:emanuel-2026}} Cut repetition and boilerplate, not the procedures patients need.",
        },
      ],
    },
    {
      id: "regulatory-basis",
      heading: "What do the regulations ask for?",
      blocks: [
        {
          type: "p",
          text: "Under the revised Common Rule, [45 CFR 46.116(a)(5)(i)](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116) requires that consent \"begin with a concise and focused presentation of the key information\" most likely to help a person decide whether to take part. Section 46.116(a)(5)(ii) adds that consent must not merely provide lists of isolated facts.{{cite:ecfr-46-116}} These 2018 Requirements took general effect on January 21, 2019.{{cite:fr-common-rule-delay}}",
        },
        {
          type: "p",
          text: "For FDA-regulated trials, [21 CFR 50.20](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20) requires consent information in language understandable to the subject, with enough time to consider whether to take part.{{cite:ecfr-50-20}} [21 CFR 50.25](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.25) lists eight basic elements plus additional elements when appropriate.{{cite:ecfr-50-25}} Neither section sets a page count. FDA has proposed adding identical key information language at 21 CFR 50.20(e)(1), as its 2024 draft guidance notes.{{cite:fda-key-info-2024}}",
        },
        {
          type: "p",
          text: "The March 2024 FDA and OHRP draft guidance, which is nonbinding, goes further. It recommends a key information section that is \"relatively short (e.g., generally no more than a few pages)\" and plain language principles for the entire consent form, such as putting the most important points first and defining technical terms.{{cite:fda-key-info-2024}} Electronic consent has had joint FDA and OHRP guidance since December 2016.{{cite:fr-econsent-2016}}",
        },
      ],
    },
    {
      id: "remedies",
      heading: "Which fixes improve understanding?",
      blocks: [
        {
          type: "p",
          text: "Better documents and more conversation have the strongest evidence. A review of 54 consent interventions tested in randomized trials found that enhanced consent forms (standardized mean difference 1.73) and extended discussion (0.53) significantly improved understanding, while multimedia approaches did not reach significance.{{cite:nishimura-2013}} An earlier JAMA review concluded that one-on-one time with a study team member or neutral educator appeared to be the most effective approach.{{cite:flory-emanuel-2004}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Rewrite in plain language",
              text: "Put key information first, use short sentences and tables, and define terms. The 14-page version in the randomized study got below a sixth-grade level with simpler words, shorter sentences, less passive voice and tables.{{cite:emanuel-2026}}",
            },
            {
              title: "Use teach-back, not just a signature",
              text: "Ask the patient to explain randomization, placebo, risks and the right to withdraw in their own words, then re-teach what they missed. In a review of consent for low-literacy subjects, the two studies using teach-back or teach-to-goal reached the highest comprehension.{{cite:tamariz-2013}} Plan for repetition: in one low-literacy study, about 40 percent could teach back all eight key items on the first try.{{cite:kripalani-2008}}",
            },
            {
              title: "Offer eConsent where the IRB allows it",
              text: "A 2023 review of 35 studies with 13,281 participants found no study where paper beat [eConsent](/glossary/econsent) on comprehension, acceptability or usability, although eConsent cycle times ran longer. Three of its five authors work for AstraZeneca or Signant Health, an eConsent provider.{{cite:cohen-2023}} In CISCRP's 2023 survey, participants rated the electronic form easiest to understand, yet only 32 percent reported receiving one, down from 44 percent in 2021.{{cite:ciscrp-2023}}",
            },
            {
              title: "Support questions between visits",
              text: "Give patients a way to ask questions before and after the consent visit. In a pediatric genomic research program, families who chose a scripted chat-based consent tool reached consent a median 5 days after referral, versus 16 days for traditional consent, and about 96 percent of quiz takers passed its comprehension check. Families picked their own arm, so the comparison was not randomized.{{cite:gia-2023}}",
            },
          ],
        },
        {
          type: "p",
          text: "Question support is where [Bond Health's Consent stage](/consent) fits. Bond gives patients plain-language explanations, answers their questions, supports comprehension, and escalates to staff when a question needs a person. The site and PI still obtain consent.{{cite:bond-site}} If you add AI support to consent, describe it to your IRB. The [IRB submission language template](/templates/irb-submission-language-ai-outreach) is a starting point.",
        },
      ],
    },
    {
      id: "measure",
      heading: "How do you know if your consent process is working?",
      blocks: [
        {
          type: "p",
          text: "Track these measures per study and per consent version. Much of the raw data is already in your CTMS, regulatory binder or visit notes.",
        },
        {
          type: "table",
          caption: "Consent measures worth tracking",
          columns: ["Measure", "How to capture it", "What it tells you"],
          rows: [
            ["Pages, words and grade level", "Run each approved version through a readability tool", "Whether amendments are making the form harder to read"],
            ["Time from first contact to signed consent", "Dates from the pre-screening log and the consent record", "Where patients stall before the consent visit"],
            ["Consent visit length", "Coordinator logs start and end times", "Staff time per consent, and which studies consume it"],
            ["Teach-back first-pass rate", "Record which key concepts needed re-teaching", "Which sections of the form are not working"],
            ["Questions by topic", "Tally questions asked during and after the visit", "What belongs in the key information section"],
            ["Early withdrawals and reasons", "Withdrawal log with a reason code", "Whether misunderstanding is driving dropout"],
            ["Consents by preferred language", "Compare with the language mix of eligible patients", "Whether translation gaps are filtering patients out"],
          ],
        },
        {
          type: "p",
          text: "Bond's dashboard reports patients matched, contacted, pre-screened, consented and randomized, along with time to enrollment, so the consent step can be read against the funnel around it.{{cite:bond-site}} For what must be approved before any outreach starts, see the guide to [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
        },
      ],
    },
    {
      id: "this-week",
      heading: "What should I do this week?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Pull the consent form for your highest-enrolling study. Record its page count, word count and Flesch-Kincaid grade level.",
            "Compare its opening pages with the key information requirement in 45 CFR 46.116(a)(5)(i), or with the 2024 draft guidance for an FDA-only study. If key information is not up front and concise, raise it with the sponsor and IRB.",
            "Ask coordinators which sections they re-explain most often. Those are the first rewrite candidates.",
            "Add teach-back for randomization, placebo, risks and the right to withdraw to your consent visit checklist.",
            "Start logging consent visit length and withdrawal reasons for the next several consents.",
            "Ask the sponsor whether a plain-language or eConsent version exists, and whether your IRB has approved it.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond supports the consent process, from plain-language answers to staff escalation.",
          secondaryLabel: "Read about Consent",
          secondaryHref: "/consent",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is there a maximum page length for an informed consent form?",
      a: "No. FDA and Common Rule regulations set required elements, not a page count. The 2024 FDA and OHRP draft guidance recommends that the key information section itself be generally no more than a few pages.{{cite:fda-key-info-2024}}",
    },
    {
      q: "What reading level should a consent form target?",
      a: "There is no federal number, only a requirement that the language be understandable to the subject.{{cite:ecfr-50-20}} US adults read at an 8th-grade level on average, while federally funded trial forms average 12.0.{{cite:mirza-2024}} IRB standards vary; in a 2003 survey they ranged from 5th to 10th grade.{{cite:paasche-orlow-2003}}",
    },
    {
      q: "Does eConsent increase enrollment?",
      a: "The evidence is mixed. A 2023 systematic review of studies within randomized trials found inconsistent effects on enrollment, though electronic consent may improve comprehension and recall.{{cite:mazzochi-2023}}",
    },
    {
      q: "Can AI replace the consent discussion?",
      a: "No. Bond gives plain-language answers to patient questions and escalates to staff, but the site and PI still obtain consent.{{cite:bond-site}}",
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
      id: "berger-2009",
      title: "The length of consent documents in oncological trials is doubled in twenty years",
      publisher: "Annals of Oncology (Berger O et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/18922881/",
      year: "2009",
      note: "Quote: \"The mean length of the ICDs increased from 338 (range 276-464) words in 1987-1990 to 1087 words (range 399-2345) in 2005-2007.\" Also: \"The increased length of the ICDs is explained by an increased complexity of the documents and especially more information about formalities.\" Formal components are defined as \"juridical aspects, financing, insurance and storage of data\". 87 documents approved by the Regional Committee for Medical and Health Research Ethics in central Norway. Abstract read via NCBI E-utilities (September 2026).",
    },
    {
      id: "sharp-2004",
      title: "Consent documents for oncology trials: does anybody read these things?",
      publisher: "American Journal of Clinical Oncology (Sharp SM)",
      url: "https://pubmed.ncbi.nlm.nih.gov/15577434/",
      year: "2004",
      note: "Quote: \"The mean length +/- SD was 2709 +/- 971 words or 10.8 +/- 3.8 pages.\" and \"None of the consent documents were written at or below the 8th-grade reading level.\" 107 documents at Emory University Winship Cancer Institute. Abstract read via the PubMed record.",
    },
    {
      id: "duong-2021",
      title: "Understanding Verbosity: Funding Source and the Length of Consent Forms for Cancer Clinical Trials",
      publisher: "Journal of Cancer Education (Duong Q et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7648720/",
      year: "2021",
      note: "Quote: \"The overall median word count was 5,129 words per consent form\" and \"consent forms manifested a consistent increase in wordiness over time.\" 315 phase I to III solid-tumor trial consent forms, 2004 to 2010, single institution.",
    },
    {
      id: "brunner-ziegler-2026",
      title: "A Pilot Study to Explore Length and Readability Characteristics of Subject Information Sheets/Informed Consent Forms of Clinical Trial Applications in the EU",
      publisher: "Clinical and Translational Science (Brunner Ziegler S et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/42071174/",
      year: "2026",
      note: "Pilot study; \"The final dataset comprised 67 drug trials submitted between January 1, 2023, and November 16, 2023.\" Quote: \"Exploratory analyses suggested that formatting choices, repetition, and expanded data protection sections contributed more to length differences than content allocation or readability, thus indicating that the main drivers of SIS/ICF length are modifiable in nature.\"",
    },
    {
      id: "mirza-2024",
      title: "The literacy barrier in clinical trial consents: a retrospective analysis",
      publisher: "eClinicalMedicine (Mirza FN et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11701435/",
      year: "2024",
    },
    {
      id: "naal-2006",
      title: "The Health Literacy of America's Adults: Results From the 2003 National Assessment of Adult Literacy (NCES 2006-483)",
      publisher: "National Center for Education Statistics, US Department of Education",
      url: "https://ies.ed.gov/use-work/resource-library/report/statistical-analysis-report/health-literacy-americas-adults-results-2003-national-assessment-adult-literacy",
      year: "2006",
      note: "Quote: \"The majority of adults (53 percent) had Intermediate health literacy. About 22 percent had Basic and 14 percent had Below Basic health literacy.\"",
    },
    {
      id: "paasche-orlow-2003",
      title: "Readability standards for informed-consent forms as compared with actual readability",
      publisher: "New England Journal of Medicine (Paasche-Orlow MK, Taylor HA, Brancati FL)",
      url: "https://pubmed.ncbi.nlm.nih.gov/12594317/",
      year: "2003",
      note: "Quote: \"The average readability score for text provided by IRBs was 10.6 (95 percent confidence interval, 10.3 to 10.8) on the Flesch-Kincaid scale. Specific readability standards, found on 61 Web sites (54 percent), ranged from a 5th-grade reading level to a 10th-grade reading level. The mean Flesch-Kincaid scores for the readability of sample text provided by IRBs exceeded the stated standard by 2.8 grade levels.\" 114 US medical school websites surveyed. Abstract read via the PubMed record.",
    },
    {
      id: "fda-consent-2023",
      title: "Informed Consent: Guidance for IRBs, Clinical Investigators, and Sponsors",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/media/88915/download",
      year: "2023",
    },
    {
      id: "tam-2015",
      title: "Participants' understanding of informed consent in clinical trials over three decades: systematic review and meta-analysis",
      publisher: "Bulletin of the World Health Organization (Tam NT et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4371493/",
      year: "2015",
    },
    {
      id: "ciscrp-2017",
      title: "Report on The Participation Experience: 2017 Perceptions & Insights Study",
      publisher: "CISCRP",
      url: "https://www.ciscrp.org/wp-content/uploads/2019/06/2017-CISCRP-Perceptions-and-Insights-Study-Participation-Experience.pdf",
      year: "2017",
    },
    {
      id: "almodallal-2021",
      title: "Randomized, Double-Blind Trial on the Impact of Word Count in Cancer Clinical Trial Consent Forms",
      publisher: "JCO Oncology Practice (Almodallal Y et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9810143/",
      year: "2021",
    },
    {
      id: "emanuel-2026",
      title: "A randomized control trial of re-designed and shorter research informed consent forms to improve comprehension",
      publisher: "Clinical Trials (Emanuel EJ et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/41902712/",
      year: "2026",
      note: "Quote: \"The medium informed consent form (mean score of 79.3%) scored significantly higher on comprehension than the long informed consent form (65.7% mean score, p < 0.001) or the short informed consent form (69.3% mean score, p = 0.006).\" Also: \"more short informed consent form participants reported wanting more information on study procedures.\" Methods: the medium (14 pages) and short (3 pages) forms \"both used simpler words, shorter sentences, less passive voice, tables, and other patient-friendly edits to achieve below sixth-grade reading levels\"; the long form \"was written just below an 11th-grade level\". Conclusion: \"The short informed consent form produced the same level of comprehension as a long informed consent form used in approved clinical trials.\" 334 US adults reading forms for a hypothetical study. Abstract read via NCBI E-utilities (September 2026).",
    },
    {
      id: "ciscrp-2013",
      title: "Retention in Clinical Trials: Keeping Patients on Protocols (citing CISCRP 2013 Perceptions & Insights study)",
      publisher: "Advarra (secondary source)",
      url: "https://www.advarra.com/resources/retention-in-clinical-trials-keeping-patients-on-protocols/",
      year: "2013",
      note: "Quote: \"35% of patients who dropped out of a study early thought it was difficult to understand the Informed Consent Form compared to just 16% who completed the trial.\" Secondary source; the original CISCRP 2013 report it links to is no longer online.",
    },
    {
      id: "gts-translation",
      title: "Translation Service for Informed Consent Documents",
      publisher: "GTS Translation (vendor pricing page)",
      url: "https://www.gts-translation.com/services/medical_translation_services/translation-service-for-informed-consent-documents/",
      year: "2026",
      note: "Single vendor list price, accessed September 2026. Illustrative, not an industry benchmark.",
    },
    {
      id: "velez-2023",
      title: "Consent document translation expense hinders inclusive clinical trial enrolment",
      publisher: "Nature (Velez MA et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11046417/",
      year: "2023",
    },
    {
      id: "woods-2021",
      title: "Implementation of documented and written informed consent for clinical trials of communicable diseases: Lessons learned, barriers, solutions, future directions identified during the conduct of a COVID-19 clinical trial",
      publisher: "Contemporary Clinical Trials Communications (Woods P et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8234262/",
      year: "2021",
    },
    {
      id: "ecfr-46-116",
      title: "45 CFR 46.116 General requirements for informed consent",
      publisher: "eCFR, US Government Publishing Office",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116",
      year: "2026",
    },
    {
      id: "fr-common-rule-delay",
      title: "Federal Policy for the Protection of Human Subjects: Six Month Delay of the General Compliance Date of Revisions",
      publisher: "Federal Register (HHS and other federal departments and agencies)",
      url: "https://www.federalregister.gov/documents/2018/06/19/2018-13187/federal-policy-for-the-protection-of-human-subjects-six-month-delay-of-the-general-compliance-date",
      year: "2018",
    },
    {
      id: "ecfr-50-20",
      title: "21 CFR 50.20 General requirements for informed consent",
      publisher: "eCFR, US Government Publishing Office",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20",
      year: "2026",
    },
    {
      id: "ecfr-50-25",
      title: "21 CFR 50.25 Elements of informed consent",
      publisher: "eCFR, US Government Publishing Office",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.25",
      year: "2026",
    },
    {
      id: "fda-key-info-2024",
      title: "Key Information and Facilitating Understanding in Informed Consent: Draft Guidance for Sponsors, Investigators, and Institutional Review Boards",
      publisher: "US Food and Drug Administration and HHS Office for Human Research Protections",
      url: "https://www.fda.gov/media/176663/download",
      year: "2024",
      note: "Quote: \"We recommend that the key information section of a consent document be relatively short (e.g., generally no more than a few pages).\" Also: \"We recommend following plain language principles for the entire consent form.\" Those principles include \"organizing information with the most important points first, breaking complex information into understandable groups, using simple language, and defining technical terms.\" And: \"FDA's proposed regulations would add identical language to 21 CFR 50.20(e)(1).\" Draft dated March 2024; nonbinding. PDF text checked September 2026.",
    },
    {
      id: "fr-econsent-2016",
      title: "Use of Electronic Informed Consent: Questions and Answers; Guidance for Institutional Review Boards, Investigators, and Sponsors; Availability",
      publisher: "Federal Register (FDA and HHS OHRP)",
      url: "https://www.federalregister.gov/documents/2016/12/15/2016-30146/use-of-electronic-informed-consent-questions-and-answers-guidance-for-institutional-review-boards",
      year: "2016",
    },
    {
      id: "nishimura-2013",
      title: "Improving understanding in the research informed consent process: a systematic review of 54 interventions tested in randomized control trials",
      publisher: "BMC Medical Ethics (Nishimura A et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3733934/",
      year: "2013",
    },
    {
      id: "flory-emanuel-2004",
      title: "Interventions to improve research participants' understanding in informed consent for research: a systematic review",
      publisher: "JAMA (Flory J, Emanuel E)",
      url: "https://pubmed.ncbi.nlm.nih.gov/15467062/",
      year: "2004",
    },
    {
      id: "tamariz-2013",
      title: "Improving the informed consent process for research subjects with low literacy: a systematic review",
      publisher: "Journal of General Internal Medicine (Tamariz L et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3539038/",
      year: "2013",
    },
    {
      id: "kripalani-2008",
      title: "Clinical Research in Low-Literacy Populations: Using Teach-Back to Assess Comprehension of Informed Consent and Privacy Information",
      publisher: "IRB: Ethics & Human Research (Kripalani S et al.)",
      url: "https://www.thehastingscenter.org/irb_article/clinical-research-in-low-literacy-populations-using-teach-back-to-assess-comprehension-of-informed-consent-and-privacy-information/",
      year: "2008",
      note: "Quote: \"Approximately 40% were able to teach back the eight items initially; those with higher literacy levels did much better.\"",
    },
    {
      id: "cohen-2023",
      title: "Comparative Effectiveness of eConsent: Systematic Review",
      publisher: "Journal of Medical Internet Research (Cohen E et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10504628/",
      year: "2023",
      note: "Quote: \"EC is an employee at AstraZeneca. BB is an employee at Signant Health. AB is a contractor at Oxford PharmaGenesis. MJ-K is an employee and shareholder at AstraZeneca. AKM has no conflicts of interest to declare.\" and \"Cycle times were increased with eConsent, potentially reflecting greater patient engagement with the content.\"",
    },
    {
      id: "ciscrp-2023",
      title: "2023 Perceptions & Insights Study: Participation Experiences",
      publisher: "CISCRP",
      url: "https://www.ciscrp.org/wp-content/uploads/2023/11/2023PI_Participation-Experiences.pdf",
      year: "2023",
    },
    {
      id: "gia-2023",
      title: "Using a chat-based informed consent tool in large-scale genomic research",
      publisher: "Journal of the American Medical Informatics Association",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10797258/",
      year: "2023",
      note: "Quote: \"At the point of REDCap referral, prospective participants were given a choice: to schedule a time to speak with someone about the project in an informed consent conversation, or to receive a link to go through the consent with a chat-based tool online.\" The tool was a scripted, not generative, chatbot.",
    },
    {
      id: "mazzochi-2023",
      title: "Electronic informed consent: effects on enrolment, practical and economic benefits, challenges, and drawbacks: a systematic review of studies within randomized controlled trials",
      publisher: "Trials (Mazzochi AT, Dennis M, Chun HY)",
      url: "https://pubmed.ncbi.nlm.nih.gov/36810093/",
      year: "2023",
      note: "Quote: \"Few published studies have investigated the impact of e-IC on enrolment and findings were mixed. e-IC may improve participant's comprehension and recall of information.\" Abstract read via the PubMed record.",
    },
  ],
  related: [
    { label: "Consent: AI-powered consent support", href: "/consent", description: "Plain-language explanations, patient questions and staff escalation." },
    { label: "Informed consent", href: "/glossary/informed-consent", description: "What the term covers and who obtains consent." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What needs approval before you contact a patient." },
    { label: "IRB submission language for AI outreach", href: "/templates/irb-submission-language-ai-outreach", description: "Draft text for describing AI tools to your IRB." },
    { label: "eConsent", href: "/glossary/econsent", description: "What electronic consent is and how it is regulated." },
  ],
};

export default page;
