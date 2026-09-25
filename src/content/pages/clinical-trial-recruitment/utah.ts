import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/clinical-trial-recruitment/utah",
  category: "geography",
  title: "Clinical trial recruitment in Utah: Salt Lake City sites",
  description:
    "For Salt Lake City and Utah research sites: recruiting-trial counts, research hubs, health system EHRs, demographics and Utah's AI disclosure rules.",
  keywords: [
    "clinical trial recruitment Utah",
    "Salt Lake City research sites",
    "clinical trials Salt Lake City",
    "Utah AI disclosure law",
    "Utah health system EHRs",
  ],
  eyebrow: "Utah",
  h1: "Recruiting for clinical trials in Utah",
  intro:
    "As of September 21, 2026, 1,210 studies on ClinicalTrials.gov were recruiting at one or more Utah sites, about 5.5% of the 22,041 recruiting in the United States, from a state with about 1.0% of US residents.{{cite:ctgov-api,census-pop-2025}} This page is for research sites in Salt Lake City and the rest of the state.",
  summary: "Utah recruiting-trial counts, Salt Lake City research hubs, health systems and their EHRs, demographics, and Utah's AI disclosure rules.",
  lastUpdated: "2026-09-24",
  showLastUpdated: true,
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "All locations", secondaryHref: "/clinical-trial-recruitment" },
  sections: [
    {
      id: "trial-counts",
      heading: "How many trials are recruiting in Utah?",
      blocks: [
        {
          type: "p",
          text: "Utah sites appear on 487 of the 7,074 recruiting US oncology studies and 197 of the 2,845 cardiology studies, about 6.9% of each. The share is lower in neurology, at 47 of 987.{{cite:ctgov-api}} Compare [other states and regions](/clinical-trial-recruitment).",
        },
        { type: "trialCounts", geo: "utah", cite: "ctgov-api" },
        {
          type: "p",
          text: "Counts show where sponsors placed studies, not which enroll on schedule, and keyword matching can include off-target studies. The examples below are oncology, Utah's largest area.{{cite:ctgov-api}} See [oncology](/oncology) and [cardiology](/cardiology).",
        },
        { type: "trials", geo: "utah", condition: "oncology", cite: "ctgov-api" },
      ],
    },
    {
      id: "research-hubs",
      heading: "Where are Utah's research hubs?",
      blocks: [
        {
          type: "p",
          text: "In a September 22, 2026 registry query, 767 Utah studies listed a recruiting site in Salt Lake City, followed by Murray (83), home to Intermountain Medical Center, West Valley City (75) and Ogden (41).{{cite:ctgov-utah-sites}}",
        },
        {
          type: "table",
          caption: "Utah research institutions and what they report about themselves, as of September 2026",
          columns: ["Institution", "What it is", "What it reports"],
          rows: [
            [
              "University of Utah Health",
              "The only academic medical center in Utah and the Mountain West{{cite:uofu-about}}",
              "Five hospitals, 12 community health centers and a $492 million research enterprise{{cite:uofu-about}}",
            ],
            [
              "Huntsman Cancer Institute",
              "The only NCI-designated Comprehensive Cancer Center in the Mountain West, serving patients across Utah, Idaho, Montana, Nevada and Wyoming{{cite:huntsman-nci}}",
              "More than 400 clinical trials open to patients, and what it calls the largest Phase 1 program for all cancer types in the Mountain West{{cite:huntsman-facts}}",
            ],
            [
              "Utah Clinical and Translational Science Institute (CTSI)",
              "The university's NIH-funded translational research hub{{cite:utah-ctsi}}",
              "Trials it supported in 2024 reached nearly 7,000 participants{{cite:utah-ctsi}}",
            ],
            [
              "Primary Children's Hospital (Intermountain Health)",
              "A 289-bed academic pediatric center in Salt Lake City treating children from six states{{cite:primary-childrens}}",
              "A second campus in Lehi opened in early 2024{{cite:primary-childrens}}",
            ],
          ],
        },
      ],
    },
    {
      id: "health-systems-and-ehrs",
      heading: "Which EHRs do Utah's health systems run?",
      blocks: [
        {
          type: "table",
          caption: "EHRs at Utah's largest health systems, from public sources as of September 2026",
          columns: ["System", "Footprint", "EHR"],
          rows: [
            [
              "Intermountain Health (Salt Lake City)",
              "34 hospitals and about 400 clinics across Utah, Idaho, Nevada, Colorado, Montana and Wyoming{{cite:intermountain-about}}",
              "Epic, live across its hospitals by September 2025. It replaced Oracle Health (Cerner), which had run Intermountain's Utah facilities{{cite:dhn-intermountain-epic,techtarget-intermountain-epic}}",
            ],
            [
              "University of Utah Health (Salt Lake City)",
              "Five hospitals and 12 community health centers{{cite:uofu-about}}",
              "Epic. Its CTSI allows MyChart recruitment invitations when the study's IRB approval names MyChart as a recruitment method{{cite:utah-ctsi-mychart}}",
            ],
            [
              "Community health centers",
              "12 HRSA-funded awardees serving 139,551 patients in 2025{{cite:hrsa-ut}}",
              "Varies by center; confirm with each center's IT team",
            ],
          ],
        },
        {
          type: "p",
          text: "Both systems run Epic but approve outside connections separately, through their own IT and security review. Bond connects through FHIR R4 APIs, HL7 v2 where applicable, or an aggregator.{{cite:bond-site}} Smaller and rural hospitals vary, so the site's IT team confirms which FHIR access its vendor supports. See [Epic](/integrations/epic) and [Oracle Health (Cerner)](/integrations/oracle-cerner).",
        },
      ],
    },
    {
      id: "population",
      heading: "Who lives in Utah, and what does that mean for outreach?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "3.54 million", label: "Residents on July 1, 2025, up 1.0% in a year", cite: "census-pop-2025" },
            { value: "32.6", label: "Median age in 2025, the lowest of any state (US: 39.4)", cite: "census-age-2025" },
            { value: "26.1%", label: "Under 18 in 2025, the highest share of any state", cite: "census-asrh-2025" },
            { value: "17.6%", label: "Hispanic or Latino in 2025, up from 15.1% in April 2020", cite: "census-asrh-2025" },
          ],
        },
        {
          type: "p",
          text: "Only 13.0% of Utahns were 65 or older in 2025, the lowest share of any state or DC.{{cite:census-asrh-2025}} Studies in age-related conditions such as Alzheimer's disease or heart failure have a smaller older population to draw on, while pediatric studies have a large one. See [neurology and Alzheimer's](/neurology-and-alzheimers).",
        },
        {
          type: "p",
          text: "About 8.3% of Utahns were uninsured in 2024, close to the US rate of 8.2%, and 10.7% of adults aged 19 to 64.{{cite:census-acs-uninsured}} About 1.3% identify as Native Hawaiian or Other Pacific Islander alone, the third-highest share after Hawaii and Alaska.{{cite:census-asrh-2025}}",
        },
        {
          type: "p",
          text: "Community health centers see a different population. At Utah's HRSA-funded centers in 2025, 39.1% of patients were uninsured. Among patients whose ethnicity, language or race was recorded, 56.9% were Hispanic or Latino, 40.5% had limited English proficiency and 10.7% were American Indian or Alaska Native.{{cite:hrsa-ut}} A representative cohort usually needs those clinics and a plan for Spanish speakers. See [FQHCs and community sites](/for/fqhcs-and-community-sites).",
        },
      ],
    },
    {
      id: "site-networks",
      heading: "Which site networks and research sites work in Utah?",
      blocks: [
        {
          type: "p",
          text: "Community and network sites also recruit in Utah, as described on their websites as of September 2026:",
        },
        {
          type: "ul",
          items: [
            "**START Mountain Region** in West Valley City, established in 2020 and led with Utah Cancer Specialists, describes itself as the only dedicated community-based early-phase trial site in Utah.{{cite:start-mountain}}",
            "**Velocity Clinical Research** runs its Salt Lake City site in West Jordan, founded in 1984 as Advanced Clinical Research and acquired by Velocity in 2019.{{cite:velocity-slc}}",
          ],
        },
        {
          type: "p",
          text: "Other sites on recruiting Utah records in September 2026 include Alpine Research Organization (Clinton), Advanced Research Institute and Community Cancer Trials of Utah (Ogden), JBR Clinical Research and Wasatch Clinical Research (Salt Lake City), Cedar Clinical Research (Draper) and Pantheon Clinical Research (Bountiful).{{cite:ctgov-utah-sites}}",
        },
        {
          type: "p",
          text: "Bond is built for research sites, site networks, physician groups and community health centers, and is a CRIO Certified Partner.{{cite:bond-site}} See [research sites](/for/research-sites) and [site networks](/for/site-networks).",
        },
      ],
    },
    {
      id: "state-rules",
      heading: "Which Utah laws apply to AI outreach and patient contact?",
      blocks: [
        {
          type: "p",
          text: "None of these laws was written for trial recruitment; treat this list as a map for counsel, not legal advice.",
        },
        {
          type: "ul",
          items: [
            "**Artificial Intelligence Policy Act (SB 149, 2024).** From May 1, 2024, anyone using generative AI in a matter the Division of Consumer Protection enforces had to disclose it if asked, and people providing regulated-occupation services had to disclose it up front. The act also created the Office of Artificial Intelligence Policy, which can temporarily ease rules for AI companies through regulatory mitigation agreements.{{cite:ut-sb149}}",
            "**2025 amendments (SB 226, Utah Code 13-75-103).** Since May 7, 2025, people in occupations that need a Department of Commerce license or state certification must prominently disclose generative AI in high-risk interactions, including collecting health data and giving medical or mental health advice. The disclosure is spoken at the start of a verbal interaction and written before a written one. A supplier in a consumer transaction must disclose AI when a person clearly asks. The law defines generative AI as systems producing non-scripted outputs with limited or no human oversight. Fines run up to $2,500 per violation.{{cite:ut-sb226}} Whether an AI recruitment call is a regulated service is a question for counsel.",
            "**Safe harbor.** A person is not subject to enforcement under the disclosure section if its AI clearly and conspicuously discloses, at the outset and throughout the interaction, that it is AI and not human. SB 226 also moved the AI Policy Act's repeal date to July 1, 2027.{{cite:ut-sb226}}",
            "**Telehealth (Utah Code 26B-4-704).** A telemedicine provider may not diagnose, treat or prescribe based solely on an online questionnaire, an email or a patient-generated history.{{cite:ut-26b-4-704}} An online pre-screen can inform eligibility review, not replace the investigator's assessment.",
          ],
        },
        {
          type: "p",
          text: "Federal rules still apply. FDA expects the IRB to review recruitment advertising, including its mode of communication, and screening scripts.{{cite:fda-recruiting}} See [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond handles disclosure",
          text: "Bond's voice and text agents tell patients that AI assistance is being used, and patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}} Scripts are configured per site and study, so a Utah site can open every call and text with the disclosure wording its counsel and IRB approve.",
        },
      ],
    },
    {
      id: "how-bond-deploys",
      heading: "How does Bond deploy with a Utah site?",
      blocks: [
        {
          type: "p",
          text: "Full EHR integration typically takes 4 to 6 weeks, depending on the EHR, IT review and interface method. A pilot from a patient list, without EHR integration, can begin in under 2 weeks.{{cite:bond-site}} See [implementation](/implementation) for the week-by-week plan.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Agree on scope and paperwork",
              text: "Bond signs a business associate agreement, and the site confirms its IRB or privacy board path, including approval of the AI disclosure wording.",
            },
            {
              title: "Connect the EHR",
              text: "Connect Epic, Oracle Health or another EHR through FHIR, HL7 or an aggregator. Screen the site's own records.",
            },
            {
              title: "Check criteria before outreach",
              text: "Each match shows the chart evidence behind each inclusion and exclusion criterion, so coordinators can review a sample before any patient is contacted. See [validating eligibility logic before go-live](/blog/validating-eligibility-logic-before-go-live).",
            },
            {
              title: "Screen, reach out and schedule",
              text: "Voice and text agents disclose AI use, pre-screen and schedule in the patient's preferred language, including English, Spanish, Mandarin and many others, then hand off to coordinators.{{cite:bond-product}} Agree up front how Spanish speakers reach bilingual staff.",
            },
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one open protocol and tell us which EHR your patients are in.",
          secondaryLabel: "How implementation works",
          secondaryHref: "/implementation",
        },
      ],
    },
  ],
  faq: [
    {
      q: "How many clinical trials are recruiting in Utah?",
      a: "As of September 21, 2026, 1,210 studies on ClinicalTrials.gov listed a recruiting Utah site, 487 of them in oncology.{{cite:ctgov-api}}",
    },
    {
      q: "Does Utah require patients to be told when AI is used?",
      a: "Licensed professionals must disclose generative AI up front in high-risk interactions, which include collecting health data and giving medical advice; businesses must disclose it when a person clearly asks.{{cite:ut-sb226}} Bond's agents tell patients AI assistance is used.{{cite:bond-site}}",
    },
    {
      q: "Which EHR does Intermountain Health use?",
      a: "Epic. Intermountain had gone live on Epic across its hospitals by September 2025, replacing Oracle Health (Cerner).{{cite:dhn-intermountain-epic}}",
    },
  ],
  sources: [
    {
      id: "ctgov-api",
      title: "ClinicalTrials.gov API v2",
      publisher: "U.S. National Library of Medicine",
      url: "https://clinicaltrials.gov/data-api/api",
      year: "2026",
      note: "Queried September 21, 2026.",
    },
    {
      id: "ctgov-utah-sites",
      title: "ClinicalTrials.gov API v2: location records for recruiting studies with a Utah site",
      publisher: "U.S. National Library of Medicine",
      url: "https://clinicaltrials.gov/api/v2/studies?query.locn=AREA%5BLocationState%5D%22Utah%22&filter.overallStatus=RECRUITING&countTotal=true&pageSize=1000&fields=NCTId%2CprotocolSection.contactsLocationsModule.locations",
      year: "2026",
      note: "Queried September 22, 2026 and tallied by Bond: 1,207 studies with overall status Recruiting and a Utah location (this filter differs slightly from the 1,210 in the ClinicalTrials.gov API v2 source). Studies with a recruiting Utah site by city: Salt Lake City 767, Murray 83, West Valley City 75, Ogden 41. Murray facility entries include Intermountain Medical Center. Facilities with recruiting Utah records include Alpine Research Organization (Clinton), Advanced Research Institute (Ogden), Community Cancer Trials of Utah (Ogden), JBR Clinical Research (Salt Lake City), Wasatch Clinical Research, LLC (Salt Lake City), Cedar Clinical Research (Draper) and Pantheon Clinical Research (Bountiful).",
    },
    {
      id: "census-pop-2025",
      title: "U.S. Population Growth Slows Due to Historic Decline in Net International Migration (Press Release CB26-20)",
      publisher: "U.S. Census Bureau",
      url: "https://www.census.gov/newsroom/press-releases/2026/population-growth-slows.html",
      year: "2026",
      note: "Quote: \"Between July 1, 2024, and July 1, 2025, the U.S. population grew by 1.8 million (or 0.5%) to reach 341.8 million.\" and \"Utah (1.0%) grew mainly from natural change\". Table \"Top 10 States by Percent Growth\": Utah, rank 5, 3,538,904 on July 1, 2025. The 1.0% share of US residents is Bond's arithmetic.",
    },
    {
      id: "census-age-2025",
      title: "Populations in All Age Groups Growing in the South, Driven by Outlying Counties in Metro Areas (Release CB26-105)",
      publisher: "U.S. Census Bureau",
      url: "https://www.census.gov/newsroom/press-releases/2026/vintage-2025-pop-estimates.html",
      year: "2026",
      note: "Quote: \"The U.S. median age was 39.4 in July 2025 ... Maine had the highest median age in 2025 (44.9), while Utah had the lowest (32.6).\"",
    },
    {
      id: "census-asrh-2025",
      title: "Annual State Resident Population Estimates for 6 Race Groups by Age, Sex, and Hispanic Origin: April 1, 2020 to July 1, 2025 (SC-EST2025-ALLDATA6)",
      publisher: "U.S. Census Bureau, Population Estimates Program",
      url: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/state/asrh/sc-est2025-alldata6.csv",
      year: "2026",
      note: "Downloaded September 2026 and summed by Bond for Utah, POPESTIMATE2025, both sexes: total 3,538,904; under 18, 922,267 (26.1%, highest of 50 states and DC); 65 and over, 460,179 (13.0%, lowest); Hispanic origin 623,494 (17.6%), against 15.1% of the April 2020 estimates base; Native Hawaiian and Other Pacific Islander alone 44,469 (1.3%, third after Hawaii and Alaska); American Indian and Alaska Native alone 72,748 (2.1%).",
    },
    {
      id: "census-acs-uninsured",
      title: "Health Insurance Coverage by State: 2023 and 2024 (ACSBR-024)",
      publisher: "U.S. Census Bureau, American Community Survey Briefs",
      url: "https://www2.census.gov/library/publications/2025/demo/acsbr-024.pdf",
      year: "2025",
      note: "Quote: Appendix Table 2, \"United States 7.9 0.1 8.2 0.1\" and \"Utah 8.0 0.4 8.3 0.5\" (2023 and 2024 uninsured percent with margins of error). Appendix Table 3, adults aged 19 to 64: \"Utah 10.1 0.5 10.7 0.6\".",
    },
    {
      id: "hrsa-ut",
      title: "Utah Health Center Program Uniform Data System (UDS) Data",
      publisher: "Health Resources and Services Administration (HRSA), HHS",
      url: "https://data.hrsa.gov/tools/data-reporting/program-data/state/UT",
      year: "2026",
      note: "Quote: \"Total Number of Reporting Program Awardees: 12 Reporting Period: 2025 Total Patients Served: 139,551\". Patient characteristics on the same page, 2025: \"% Hispanic, Latino/a, or Spanish Origin Patients\" 56.91% (of patients with known ethnicity); \"Limited English Proficiency\" 40.51% (under \"Language (% known)\"); \"% None/Uninsured Patients\" 39.12% (of total patients); \"% American Indian/Alaska Native Patients\" 10.71% (of patients with known race). Read September 22, 2026.",
    },
    {
      id: "uofu-about",
      title: "About U of U Hospitals & Clinics",
      publisher: "University of Utah Health",
      url: "https://healthcare.utah.edu/about",
      year: "2026",
      note: "Quote: \"University of Utah Health is the only academic medical center in the state of Utah and the Mountain West\". The same page lists five hospitals, 12 community health centers and a $492 million research enterprise.",
    },
    {
      id: "huntsman-nci",
      title: "National Cancer Institute Designation",
      publisher: "Huntsman Cancer Institute, University of Utah Health",
      url: "https://healthcare.utah.edu/huntsmancancerinstitute/about-us/nci-designation",
      year: "2026",
      note: "Quote: \"Huntsman Cancer Institute is the only NCI-designated Comprehensive Cancer Center in the Mountain West, giving patients across Utah, Idaho, Montana, Nevada, Wyoming, and beyond access to the most advanced, research-backed care available today.\"",
    },
    {
      id: "huntsman-facts",
      title: "Quick Facts",
      publisher: "Huntsman Cancer Institute, University of Utah Health",
      url: "https://healthcare.utah.edu/huntsmancancerinstitute/about-us/quick-facts",
      year: "2026",
      note: "Quote: \"Huntsman Cancer Institute operates the largest and most comprehensive Phase 1 clinical trials program for all cancer types in the Mountain West. This includes more than 400 clinical trials open to patients.\" and \"The UPDB includes information on more than 11 million people, linked to genealogies and health, birth, death, and marriage records.\"",
    },
    {
      id: "utah-ctsi",
      title: "Utah Clinical and Translational Science Institute Federal Funding Restored",
      publisher: "University of Utah Health",
      url: "https://healthcare.utah.edu/newsroom/news/2025/03/utah-clinical-and-translational-science-institute-federal-funding-restored",
      year: "2025",
      note: "Quote: \"Utah CTSI maintained a biorepository of 557,000 samples and supported over 5,000 projects in 2024, including clinical trials reaching nearly 7,000 participants.\" and \"This award restores the project to an active status and rescinds the termination letter dated 03/12/2025\".",
    },
    {
      id: "utah-ctsi-mychart",
      title: "Epic MyChart Recruitment",
      publisher: "Utah Clinical and Translational Science Institute, University of Utah Health",
      url: "https://ctsi.utah.edu/crso/mychart-recruitment",
      year: "2026",
      note: "Quote: \"Epic MyChart is an approved recruitment mechanism for the study as outlined in the study IRB.\"",
    },
    {
      id: "intermountain-about",
      title: "About Intermountain Health",
      publisher: "Intermountain Health",
      url: "https://intermountainhealthcare.org/about",
      year: "2026",
      note: "Quote: \"34 Hospitals ... 400 Clinics ... Based in Salt Lake City, UT, Intermountain serves patients and communities in Utah, Idaho, Nevada, Colorado, Montana and Wyoming.\"",
    },
    {
      id: "primary-childrens",
      title: "About Primary Children's Hospital, Salt Lake City",
      publisher: "Intermountain Health",
      url: "https://intermountainhealthcare.org/locations/primary-childrens-salt-lake-city/about",
      year: "2026",
      note: "Quote: \"As a nationally ranked academic pediatric medical center, our 289-bed facility treats children with complex illness and injuries across six states. ... By early 2024, our doors opened to a brand-new Primary Children's Hospital in Lehi, Utah\".",
    },
    {
      id: "techtarget-intermountain-epic",
      title: "Intermountain Announces Epic EHR Implementation for Interoperability",
      publisher: "TechTarget (EHRIntelligence)",
      url: "https://www.techtarget.com/searchhealthit/news/366578073/Intermountain-Announces-Epic-EHR-Implementation-for-Interoperability",
      year: "2023",
      note: "Quote: \"Intermountain chose Epic as the single EHR for the organization\" and \"A Cerner contract that supports the current EHR at Intermountain's Utah facilities will end in November.\" Published September 11, 2023.",
    },
    {
      id: "dhn-intermountain-epic",
      title: "Intermountain Health goes live with Epic EHR across 33 hospitals",
      publisher: "Digital Health News",
      url: "https://www.digitalhealthnews.com/intermountain-health-goes-live-with-epic-ehr-across-33-hospitals",
      year: "2025",
      note: "Quote: \"Salt Lake City-based Intermountain Health has launched Epic across its 33 hospitals and six-state footprint.\" and \"The health system went live recently, two years after signing a deal to switch to the vendor from Oracle Health.\" Last updated September 21, 2025; the article gives no exact go-live date.",
    },
    {
      id: "start-mountain",
      title: "START - Mountain Region",
      publisher: "The START Center for Cancer Research",
      url: "https://startresearch.com/mountain-region/",
      year: "2026",
      note: "Quote: \"Established in 2020, the Salt Lake City site, led by Dr. Justin Call and Utah Cancer Specialists, serves the entire intermountain region, and is the only dedicated community-based early phase trial site in Utah.\"",
    },
    {
      id: "velocity-slc",
      title: "Salt Lake City (West Jordan), Utah",
      publisher: "Velocity Clinical Research",
      url: "https://velocityclinical.com/locations/velocity-clinical-research-salt-lake-city/",
      year: "2026",
      note: "Quote: \"Velocity's Salt Lake City research site was founded in 1984 by Werner Huck as Advanced Clinical Research, the first community based clinical research center in Idaho and Utah, and acquired by Velocity in 2019.\"",
    },
    {
      id: "ut-sb149",
      title: "S.B. 149 Artificial Intelligence Amendments (2024 General Session), enrolled copy",
      publisher: "Utah State Legislature",
      url: "https://le.utah.gov/~2024/bills/sbillenr/SB0149.pdf",
      year: "2024",
      note: "Quote: \"A person who uses, prompts, or otherwise causes generative artificial intelligence to interact with a person in connection with any act administered and enforced by the division ... shall clearly and conspicuously disclose to the person ... if asked or prompted by the person, that the person is interacting with generative artificial intelligence and not a human.\" ... \"A person who provides the services of a regulated occupation shall prominently disclose when a person is interacting with a generative artificial intelligence in the provision of regulated services.\" ... \"(a) verbally at the start of an oral exchange or conversation; and (b) through electronic messaging before a written exchange.\" ... \"creates the Office of Artificial Intelligence Policy\" ... \"establishes the Artificial Intelligence Learning Laboratory Program\" ... \"The office may grant, on a temporary basis, regulatory mitigation to a participant by entering into a regulatory mitigation agreement with the office and relevant agencies.\" ... \"This bill takes effect on May 1, 2024.\"",
    },
    {
      id: "ut-sb226",
      title: "S.B. 226 Artificial Intelligence Consumer Protection Amendments (2025 General Session), enrolled copy",
      publisher: "Utah State Legislature",
      url: "https://le.utah.gov/~2025/bills/sbillenr/SB0226.pdf",
      year: "2025",
      note: "Quote: \"'Generative artificial intelligence' means an artificial intelligence technology system that ... (c) generates non-scripted outputs similar to outputs created by a human, with limited or no human oversight.\" ... \"'Regulated occupation' means an occupation that: (a) is regulated by the Department of Commerce; and (b) requires an individual to obtain a license or state certification to practice the occupation.\" ... \"A person is not subject to an enforcement action for violating Section 13-75-103 if the person's generative artificial intelligence clearly and conspicuously discloses: (a) at the outset of any interaction ... and (b) throughout the interaction that it: (i) is generative artificial intelligence; (ii) is not human\" ... \"'High-risk artificial intelligence interaction' means an interaction with generative artificial intelligence that involves: (a) the collection of sensitive personal information, including: (i) health data\" ... \"(iii) medical advice or services; or (iv) mental health advice or services\" ... \"A disclosure required under Subsection (2) shall be provided: (a) verbally at the start of a verbal interaction; and (b) in writing before the start of a written interaction.\" ... \"the division director may impose an administrative fine of up to $2,500 for each violation of this chapter\" ... \"Artificial Intelligence Policy Act, is repealed [May 1, 2025] July 1, 2027.\" ... \"this bill takes effect on May 7, 2025.\"",
    },
    {
      id: "ut-26b-4-704",
      title: "Utah Code 26B-4-704. Scope of telehealth practice -- Enforcement (effective May 3, 2023)",
      publisher: "Utah State Legislature",
      url: "https://le.utah.gov/xcode/Title26B/Chapter4/C26B-4-S704_2023050320230503.pdf",
      year: "2023",
      note: "Quote: \"(2) A provider offering telehealth services shall: (a) at all times: ... (ii) be held to the same standards of practice as those applicable in traditional health care settings\" ... \"(4) A provider offering telemedicine services may not diagnose a patient, provide treatment, or prescribe a prescription drug based solely on one of the following: (a) an online questionnaire; (b) an email message; or (c) a patient-generated medical history.\"",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Quote: \"When direct advertising is to be used, the IRB should review the information contained in the advertisement and the mode of its communication\". Content current as of 2018.",
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
  ],
  related: [
    { label: "Recruitment by state and region", href: "/clinical-trial-recruitment", description: "Registry counts and local context for every location page." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What the IRB reviews and which HIPAA path covers recruitment contact." },
    { label: "Bond for research sites", href: "/for/research-sites", description: "How screening, outreach and consent support fit a site's workflow." },
    { label: "Oncology recruitment", href: "/oncology", description: "How Bond screens and contacts patients for cancer trials." },
    { label: "Epic integration", href: "/integrations/epic", description: "How Bond connects to Epic, which Intermountain and University of Utah Health both run." },
    { label: "Implementation", href: "/implementation", description: "What a deployment involves, week by week." },
  ],
};

export default page;
