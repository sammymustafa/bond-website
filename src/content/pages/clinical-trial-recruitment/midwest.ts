import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/clinical-trial-recruitment/midwest",
  category: "geography",
  title: "Clinical trial recruitment for Midwest research sites",
  description:
    "Midwest research sites in Ohio, Illinois, Michigan and beyond: recruiting-trial counts, research hubs, health system EHRs, demographics and state laws.",
  keywords: [
    "clinical trial recruitment Midwest",
    "Midwest research sites",
    "clinical trials Ohio Illinois Michigan",
    "Illinois biometric privacy AI voice outreach",
    "Midwest patient recruitment",
  ],
  eyebrow: "Midwest",
  h1: "Recruiting for clinical trials in the Midwest",
  intro:
    "The Census Bureau's Midwest region covers 12 states and 69.8 million residents, about one in five people in the United States.{{cite:census-pop-2025}} On September 21, 2026, the recruiting-study counts for those states on ClinicalTrials.gov added up to 16,812, with a multi-state study counted once in each state.{{cite:ctgov-api}}",
  summary: "Midwest recruiting-trial counts, research hubs, health systems and their EHRs, demographics, and state AI, biometric and records rules.",
  lastUpdated: "2026-09-24",
  showLastUpdated: true,
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "All locations", secondaryHref: "/clinical-trial-recruitment" },
  sections: [
    {
      id: "trial-counts",
      heading: "How many trials are recruiting in the Midwest?",
      blocks: [
        {
          type: "p",
          text: "Of the areas tracked below, oncology has the largest summed count at 6,895 and cardiology is next at 2,690.{{cite:ctgov-api}} Because the regional figures sum 12 states while the US figures count each study once, skip the share-of-US column for this region. Compare [other states and regions](/clinical-trial-recruitment).",
        },
        { type: "trialCounts", geo: "midwest", cite: "ctgov-api" },
        {
          type: "p",
          text: "Counts show where sponsors placed studies, not which are enrolling on schedule. The examples below are recently updated studies from a cardiology keyword search with a site in Ohio. See [cardiology](/cardiology) and [oncology](/oncology) for Bond's approach to each area.",
        },
        { type: "trials", geo: "midwest", condition: "cardiology", cite: "ctgov-api" },
      ],
    },
    {
      id: "research-hubs",
      heading: "Where are the Midwest's main research hubs?",
      blocks: [
        {
          type: "table",
          caption: "Selected Midwest research hubs and what each reports",
          columns: ["Metro area", "Anchor institutions", "What they report"],
          rows: [
            [
              "Chicago, Illinois",
              "Northwestern's Feinberg School of Medicine and Lurie Comprehensive Cancer Center; UChicago Comprehensive Cancer Center{{cite:nci-centers}}",
              "Feinberg: about 7,126 clinical trials and clinical research studies and $695.4 million in research awards in the 2024-25 academic year{{cite:feinberg}}",
            ],
            [
              "Cleveland, Ohio",
              "Cleveland Clinic; Case Comprehensive Cancer Center{{cite:nci-centers}}",
              "Cleveland Clinic, systemwide including sites outside Ohio: $479 million in research funding, $157 million of it from NIH, and about 3,200 active research projects in 2025{{cite:cleveland-clinic}}",
            ],
            [
              "St. Louis, Missouri",
              "WashU Medicine; Siteman Cancer Center{{cite:nci-centers}}",
              "WashU Medicine says it ranks second in NIH funding and received more than $951 million in faculty grants and contracts in fiscal 2025{{cite:washu}}",
            ],
            [
              "Madison, Wisconsin",
              "UW School of Medicine and Public Health; UW Carbone Cancer Center{{cite:nci-centers}}",
              "UW: $703 million in extramural research support in 2024-25{{cite:uw-smph}}",
            ],
            [
              "Rochester and Minneapolis, Minnesota",
              "Mayo Clinic Cancer Center; the University of Minnesota's Masonic Cancer Center",
              "NCI comprehensive cancer centers{{cite:nci-centers}}",
            ],
            [
              "Detroit and Ann Arbor, Michigan",
              "Henry Ford Health; Karmanos Cancer Institute; Michigan Medicine's Rogel Cancer Center",
              "Karmanos and Rogel: NCI comprehensive cancer centers{{cite:nci-centers}}",
            ],
            [
              "Columbus, Ohio and Indianapolis, Indiana",
              "Ohio State Comprehensive Cancer Center; IU Simon Comprehensive Cancer Center",
              "NCI comprehensive cancer centers{{cite:nci-centers}}",
            ],
          ],
        },
        {
          type: "p",
          text: "NCI lists 16 designated cancer centers in the 12 states: 13 comprehensive, one clinical (Buffett in Omaha) and two basic laboratory centers. Holden in Iowa City and the University of Kansas Cancer Center complete the comprehensive list. The Dakotas have none.{{cite:nci-centers}}",
        },
      ],
    },
    {
      id: "health-systems-and-ehrs",
      heading: "Which health systems and EHRs hold the patients?",
      blocks: [
        {
          type: "table",
          caption: "EHRs at selected Midwest health systems, per vendor FHIR endpoint lists, September 2026",
          columns: ["System", "Where", "EHR"],
          rows: [
            [
              "Cleveland Clinic",
              "Northeast Ohio, with sites in other states and abroad{{cite:cleveland-clinic}}",
              "Epic{{cite:epic-r4}}",
            ],
            ["UChicago Medicine; Rush University Medical Center", "Chicago", "Epic{{cite:epic-r4}}"],
            ["UW Health; Froedtert Health", "Madison and Milwaukee, Wisconsin", "Epic{{cite:epic-r4}}"],
            [
              "Allina Health; Fairview Health Services; HealthPartners; Essentia Health",
              "Minnesota and neighboring states",
              "Epic{{cite:epic-r4}}",
            ],
            [
              "Indiana University Health",
              "Indiana",
              "Oracle Health (Cerner); moving to Epic, with go-live planned for mid-2027 per a February 2025 report{{cite:oracle-r4,iuh-epic}}",
            ],
            [
              "Cook County Health; University of Missouri Health Care",
              "Chicago; Columbia, Missouri",
              "Oracle Health (Cerner){{cite:oracle-r4}}",
            ],
          ],
        },
        {
          type: "p",
          text: "A listing shows the system publishes patient-access FHIR endpoints on that vendor's platform, not that a research interface exists, so confirm the route with IT. Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR R4 APIs, HL7 v2 where applicable, or an aggregator.{{cite:bond-site,bond-product}} A site changing EHRs, as IU Health is, should plan screening around the cutover. See [Epic](/integrations/epic) and [Oracle Health](/integrations/oracle-cerner).",
        },
      ],
    },
    {
      id: "population",
      heading: "Who lives in the Midwest, and what does that mean for outreach?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "69.8 million", label: "Residents on July 1, 2025, 20.4% of the US population", cite: "census-pop-2025" },
            { value: "71.4%", label: "Non-Hispanic White in 2025, against 56.1% nationally", cite: "census-asrh-2025" },
            { value: "19.5%", label: "Aged 65 or older in 2025, against 18.9% nationally", cite: "census-asrh-2025" },
            { value: "25.7%", label: "Lived in rural areas at the 2020 Census", cite: "census-rural-2020" },
          ],
        },
        {
          type: "p",
          text: "Illinois (12.7 million), Ohio (11.9 million) and Michigan (10.1 million) hold about half the region's residents. The region grew 1.1% from 2020 to 2025, against 3.1% nationally, and Illinois shrank 0.8%.{{cite:census-pop-2025}} The region is 10.5% non-Hispanic Black, 9.9% Hispanic and 4.0% non-Hispanic Asian. Illinois has the largest Hispanic (19.9%) and non-Hispanic Black (13.7%) shares, with Michigan (13.4%) and Ohio (12.8%) next on Black share. American Indian and Alaska Native residents are 9.0% of South Dakota and 5.4% of North Dakota.{{cite:census-asrh-2025}}",
        },
        {
          type: "p",
          text: "Rural shares ranged from 42.8% in South Dakota to 13.1% in Illinois, against 20.0% nationally.{{cite:census-rural-2020,census-rural-release}} In a 2020 national survey, rural adults had about one-third the odds of urban adults of ever being invited to a trial.{{cite:hints-2021}} Reaching them usually means working with community clinics, not only academic hubs. See [FQHCs and community sites](/for/fqhcs-and-community-sites).",
        },
      ],
    },
    {
      id: "site-networks",
      heading: "Which site networks and research partners work in the Midwest?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Meridian Clinical Research**, founded in Omaha in 1999, had more than 35 sites and 90 principal investigators when Velocity Clinical Research bought it in December 2022.{{cite:velocity-meridian}}",
            "**CAPriCORN**, a Chicago-area clinical data research network, lists a patient population of 12,817,589 across its members' 32 hospitals, 20 FQHC or community health center sites and 392 primary care clinics on its website.{{cite:capricorn}}",
            "**Henry Ford Health** in Detroit announced a trial partnership with Bayer in July 2026 and says it is one of four US academic health systems in that model.{{cite:henry-ford-bayer}}",
            "**Medpace**, a full-service CRO, lists its headquarters and central laboratories in Cincinnati on its website.{{cite:medpace}}",
          ],
        },
        {
          type: "p",
          text: "Bond is a CRIO Certified Partner.{{cite:bond-site}} See how Bond fits [research sites](/for/research-sites), [site networks](/for/site-networks) and [CRIO](/integrations/crio).",
        },
      ],
    },
    {
      id: "state-rules",
      heading: "Which Midwest laws apply to AI outreach and patient records?",
      blocks: [
        {
          type: "p",
          text: "None of these laws was written for trial recruitment, and how each applies is unsettled. This is a map for your counsel, not legal advice, current as of September 2026. For federal rules, see [TCPA and AI outreach in 2026](/blog/tcpa-ai-outreach-2026) and [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
        },
        {
          type: "ul",
          items: [
            "**Illinois Biometric Information Privacy Act.** A voiceprint is a biometric identifier. Collecting one requires written notice of the purpose and retention term and a written release. Liquidated damages are $1,000 per negligent and $5,000 per intentional or reckless violation. Information captured from a patient in a health care setting, or used for HIPAA treatment, payment or operations, is excluded.{{cite:il-bipa}} Ask any voice vendor, Bond included, whether it creates voiceprints.",
            "**Illinois eavesdropping law.** Recording a private conversation in a surreptitious manner is an offense even for a party to it, unless all other parties consent.{{cite:il-eavesdropping}} A recorded AI call to an Illinois patient should say at the start that it is recorded.",
            "**Illinois Wellness and Oversight for Psychological Resources Act** (Public Act 104-0054), in effect since August 1, 2025. No one may offer therapy or psychotherapy in Illinois, including through AI, unless a licensed professional provides it, with fines of up to $10,000 per violation. Licensed professionals may use AI for administrative support such as scheduling and reminders.{{cite:il-wopr}} For [psychiatry](/psychiatry) studies, keep agents to logistics, eligibility questions and scheduling.",
            "**Minnesota Health Records Act.** Before releasing records to an outside researcher, a provider must tell patients in writing that they may object and make reasonable efforts to get a written general research authorization.{{cite:mn-144-295}} Ask the site's privacy office how this applies to vendor-run pre-screening.",
            "**Nebraska Conversational Artificial Intelligence Safety Act** (LB 525), operative July 1, 2027. An AI service open to the general public that could mislead a reasonable person into thinking it is human must clearly disclose that it is AI. Programs designed for a narrow and discrete topic are among the exclusions. How it applies to a study pre-screening agent is untested.{{cite:ne-lb525}}",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond handles disclosure",
          text: "Bond's voice and text agents tell patients that AI assistance is being used, and patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}} Scripts are set per site and study, so a Midwest site can add its IRB-reviewed wording and, where calls are recorded, a recording notice for Illinois patients. See [IRB submission language for AI outreach](/templates/irb-submission-language-ai-outreach).",
        },
      ],
    },
    {
      id: "how-bond-deploys",
      heading: "How does Bond deploy with a Midwest site?",
      blocks: [
        {
          type: "p",
          text: "Full EHR integration usually takes 4 to 6 weeks, depending on the EHR, IT review and interface method. A pilot from a patient list, without EHR integration, can start in under 2 weeks.{{cite:bond-site}} See [implementation](/implementation) for the week-by-week plan.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Agree on scope and paperwork",
              text: "Bond signs a business associate agreement, and the site confirms its IRB or privacy board path, including Minnesota's research-release rules where they apply.",
            },
            {
              title: "Connect the EHR",
              text: "Confirm the interface method (FHIR, HL7 or an aggregator) and any planned EHR change with IT early.",
            },
            {
              title: "Configure and validate criteria",
              text: "Bond configures the protocol's criteria and shows criterion-to-evidence rationale for each ranked candidate, so coordinators can check early matches.{{cite:bond-site}} See [validating eligibility logic before go-live](/blog/validating-eligibility-logic-before-go-live).",
            },
            {
              title: "Screen, reach out and schedule",
              text: "Voice and text agents pre-screen and schedule, then hand off to coordinators. The dashboard reports patients matched, contacted, pre-screened, consented and randomized.{{cite:bond-site}}",
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
      q: "Does Illinois's biometric privacy law apply to AI voice calls?",
      a: "It applies when a voiceprint is collected. It excludes information captured from a patient in a health care setting or used for HIPAA treatment, payment or operations, but whether a recruitment call fits that exclusion is unsettled.{{cite:il-bipa}}",
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
      id: "census-pop-2025",
      title: "Annual Estimates of the Resident Population and Components of Change: April 1, 2020 to July 1, 2025 (NST-EST2025-ALLDATA)",
      publisher: "U.S. Census Bureau, Population Estimates Program",
      url: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/state/totals/NST-EST2025-ALLDATA.csv",
      year: "2026",
      note: "Downloaded September 2026 and read by Bond. Midwest Region (REGION 2): POPESTIMATE2025 69,762,666, ESTIMATESBASE2020 68,999,462 (+1.1%). United States: 341,784,857, base 331,516,113 (+3.1%). Midwest share 20.4%. POPESTIMATE2025: Illinois 12,719,141 (base 12,821,741, -0.8%), Ohio 11,900,510, Michigan 10,127,884; together 49.8% of the region. Division 3, East North Central: Illinois, Indiana, Michigan, Ohio, Wisconsin. Division 4, West North Central: Iowa, Kansas, Minnesota, Missouri, Nebraska, North Dakota, South Dakota.",
    },
    {
      id: "census-asrh-2025",
      title: "Annual State Resident Population Estimates for 6 Race Groups by Age, Sex, and Hispanic Origin: April 1, 2020 to July 1, 2025 (SC-EST2025-ALLDATA6)",
      publisher: "U.S. Census Bureau, Population Estimates Program",
      url: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/state/asrh/sc-est2025-alldata6.csv",
      year: "2026",
      note: "Downloaded September 2026 and summed by Bond, POPESTIMATE2025, both sexes, all ages. Midwest (REGION 2) of 69,762,666: non-Hispanic White alone 49,776,894 (71.4%); non-Hispanic Black alone 7,336,350 (10.5%); Hispanic 6,901,335 (9.9%); non-Hispanic Asian alone 2,812,726 (4.0%); 65 and over 13,626,957 (19.5%). US: 56.1%, 12.3%, 20.5%, 6.6% and 18.9%. Illinois: Hispanic 19.9%, non-Hispanic Black 13.7%. Non-Hispanic Black: Michigan 13.4%, Ohio 12.8%. American Indian and Alaska Native alone: South Dakota 9.0%, North Dakota 5.4%.",
    },
    {
      id: "census-rural-2020",
      title: "2020 Census State Urban and Rural Population (State_Urban_Rural_Pop_2020_2010.xlsx)",
      publisher: "U.S. Census Bureau, Geography Division",
      url: "https://www2.census.gov/geo/docs/reference/ua/State_Urban_Rural_Pop_2020_2010.xlsx",
      year: "2022",
      note: "Downloaded September 2026 and summed by Bond: the 12 Midwest states had 17,728,484 rural residents out of 68,985,454 in 2020 (25.7%). Rural shares: South Dakota 42.8%, North Dakota 39.0%, Iowa 36.8%, Illinois 13.1%.",
    },
    {
      id: "census-rural-release",
      title: "Nation's Urban and Rural Populations Shift Following 2020 Census",
      publisher: "U.S. Census Bureau",
      url: "https://www.census.gov/newsroom/press-releases/2022/urban-rural-populations.html",
      year: "2022",
      note: "Quote, on the rural population: \"increased as a percentage of the national population from 19.3% in 2010 to 20.0% in 2020.\"",
    },
    {
      id: "hints-2021",
      title: "Demographic and Health Behavior Factors Associated With Clinical Trial Invitation and Participation in the United States (JAMA Netw Open 2021;4(9):e2127792)",
      publisher: "JAMA Network Open, via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/34586365/",
      year: "2021",
      note: "Quote: \"Respondents residing in rural vs urban areas had 77% decreased odds of invitation to a clinical trial (aOR 0.33; 95% CI 0.17-0.65).\" The page uses the adjusted odds ratio. HINTS 2020, n=3,689 US adults.",
    },
    {
      id: "nci-centers",
      title: "Find a Cancer Center: NCI-Designated Cancer Centers",
      publisher: "National Cancer Institute",
      url: "https://www.cancer.gov/research/infrastructure/cancer-centers/find",
      year: "2026",
      note: "Read September 22, 2026. Midwest entries: Illinois: Cancer Center at Illinois (Basic Laboratory), Robert H. Lurie Comprehensive Cancer Center and The University of Chicago Comprehensive Cancer Center (Comprehensive). Indiana: IU Melvin and Bren Simon Comprehensive Cancer Center (Comprehensive), Purdue Institute for Cancer Research (Basic Laboratory). Iowa: Holden. Kansas: The University of Kansas Cancer Center. Michigan: Karmanos, Rogel. Minnesota: Masonic, Mayo Clinic Cancer Center. Missouri: Siteman. Ohio: Case, Ohio State. Wisconsin: UW Carbone (all Comprehensive). Nebraska: Fred and Pamela Buffett Cancer Center (Clinical). None in North or South Dakota.",
    },
    {
      id: "feinberg",
      title: "Research Facts",
      publisher: "Northwestern University Feinberg School of Medicine",
      url: "https://www.feinberg.northwestern.edu/about/facts/research-facts.html",
      year: "2025",
      note: "Quote: \"For the 2024-2025 academic year, Feinberg awards totaled $695.4 million.\" Also: \"Approximately 7,126 clinical trials and clinical research studies took place at Feinberg in 2024-2025.\"",
    },
    {
      id: "cleveland-clinic",
      title: "Facts & Figures",
      publisher: "Cleveland Clinic",
      url: "https://my.clevelandclinic.org/about/overview/who-we-are/facts-figures",
      year: "2026",
      note: "Year-end 2025 totals, worldwide (includes Florida, Nevada, London and Abu Dhabi). Quote: \"The statistics reflect official year-end totals as of Dec. 31, 2025, unless otherwise noted.\" Hospitals 23; outpatient locations 300; total research funding $479M; National Institutes of Health funding $157M; active research projects 3.2K.",
    },
    {
      id: "washu",
      title: "About WashU Medicine",
      publisher: "Washington University School of Medicine in St. Louis",
      url: "https://medicine.washu.edu/about/",
      year: "2026",
      note: "Quote: \"WashU Medicine is #2 in NIH funding and received more than $951 million in faculty grants and contracts during the 2025 fiscal year.\"",
    },
    {
      id: "uw-smph",
      title: "About Us",
      publisher: "University of Wisconsin School of Medicine and Public Health",
      url: "https://www.med.wisc.edu/about-us/",
      year: "2026",
      note: "Quote: \"$703M Extramural research support\", footnoted to the 2024-25 UW-Madison Office of Data, Academic Planning and Institutional Research.",
    },
    {
      id: "henry-ford-bayer",
      title: "Bayer and Henry Ford Health Announce Strategic Research Partnership to Expand Patient Access to Clinical Trials",
      publisher: "Henry Ford Health",
      url: "https://www.henryford.com/news/2026/07/bayer-and-henry-ford-health-announce-strategic-research-partnership-for-clinical-trials",
      year: "2026",
      note: "Release dated July 17, 2026. Quote: \"Henry Ford Health is one of only four academic health systems in the U.S. selected\" for Bayer's partnership model.",
    },
    {
      id: "medpace",
      title: "Medpace home page",
      publisher: "Medpace, Inc.",
      url: "https://www.medpace.com/",
      year: "2026",
      note: "Quote: \"our state-of-the-art central laboratories in Cincinnati, Ohio ... Medpace, Inc. 5375 Medpace Way, Cincinnati, Ohio 45227 USA\".",
    },
    {
      id: "epic-r4",
      title: "open.epic: FHIR R4 Endpoints",
      publisher: "Epic Systems (open.epic)",
      url: "https://open.epic.com/Endpoints/R4",
      year: "2026",
      note: "Read September 22, 2026. Entries include \"Cleveland Clinic\", \"UChicago Medicine\", \"Rush University Medical Center\", \"UW Health And Affiliates - Wisconsin\", \"Froedtert Health\", \"Allina Health System\", \"Fairview Health Services\", \"HealthPartners\" and \"Essentia Health\". A listing means the organization publishes patient-access FHIR endpoints on Epic.",
    },
    {
      id: "oracle-r4",
      title: "Oracle Health Millennium patient R4 FHIR endpoints (millennium_patient_r4_endpoints.json)",
      publisher: "Oracle (oracle-samples/ignite-endpoints on GitHub)",
      url: "https://raw.githubusercontent.com/oracle-samples/ignite-endpoints/main/oracle_health_fhir_endpoints/millennium_patient_r4_endpoints.json",
      year: "2026",
      note: "Downloaded September 2026; the file was last updated August 20, 2026 (quarterly update). Organization entries include \"Indiana University Health\" (Indianapolis, IN), \"Cook County Health and Hospitals System\" (Chicago, IL) and \"The Curators of the University of Missouri on behalf of University of Missouri Health Care\" (Columbia, MO).",
    },
    {
      id: "iuh-epic",
      title: "IU Health Gears Up for Major Epic EHR Transition by 2027",
      publisher: "This Week Health",
      url: "https://thisweekhealth.com/news/iu-health-gears-up-for-major-epic-ehr-transition-by-2027/",
      year: "2025",
      note: "Article dated February 16, 2025, summarizing Becker's Hospital Review. Quote: IU Health is \"undertaking a major transition to the Epic electronic health record (EHR) system, scheduled to go live in mid-2027.\" IU Health's own release (https://iuhealth.org/for-media/press-releases/iu-health-to-transition-ehr-platform) did not load during checking.",
    },
    {
      id: "velocity-meridian",
      title: "Velocity Clinical Research Acquires Meridian Clinical Research, Creates Largest Global Research Sites Business",
      publisher: "Velocity Clinical Research",
      url: "https://velocityclinical.com/velocity-clinical-research-acquires-meridian-clinical-research-creates-largest-global-research-sites-business/",
      year: "2022",
      note: "Release dated December 15, 2022. Quotes: \"Meridian Clinical Research was founded by Nicole Osborn in 1999 in Omaha, NE\"; \"a network of more than 35 clinical research sites and 90 principal investigators\"; Velocity has \"approximately 80 sites in the U.S. and Europe\". \"Largest\" is Velocity's own claim.",
    },
    {
      id: "capricorn",
      title: "CAPriCORN: Improving Healthcare Quality, Outcomes, and Equity",
      publisher: "Chicago Area Patient-Centered Outcomes Research Network (CAPriCORN)",
      url: "https://www.capricorncdrn.org/",
      year: "2026",
      note: "Read September 22, 2026. Home page figures: \"Patient Population: 12,817,589\"; hospitals 32; children's hospitals 5; FQHC or community health center sites 20; primary care clinics 392.",
    },
    {
      id: "il-bipa",
      title: "Biometric Information Privacy Act, 740 ILCS 14/10, 14/15 and 14/20",
      publisher: "Illinois General Assembly, via FindLaw",
      url: "https://codes.findlaw.com/il/chapter-740-civil-liabilities/il-st-sect-740-14-10/",
      year: "2026",
      note: "Section 10 quote: \"'Biometric identifier' means a retina or iris scan, fingerprint, voiceprint, or scan of hand or face geometry.\" and \"Biometric identifiers do not include information captured from a patient in a health care setting or information collected, used, or stored for health care treatment, payment, or operations under the federal Health Insurance Portability and Accountability Act of 1996.\" Section 15(b) (https://codes.findlaw.com/il/chapter-740-civil-liabilities/il-st-sect-740-14-15/) requires written notice of collection, written notice of \"the specific purpose and length of term\", and \"a written release\". Section 20 (https://codes.findlaw.com/il/chapter-740-civil-liabilities/il-st-sect-740-14-20/): \"liquidated damages of $1,000 or actual damages, whichever is greater\" for negligent violations and \"liquidated damages of $5,000 or actual damages, whichever is greater\" for intentional or reckless ones.",
    },
    {
      id: "il-eavesdropping",
      title: "720 ILCS 5/14-2: Eavesdropping, elements of the offense",
      publisher: "Illinois General Assembly",
      url: "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=072000050K14-2",
      year: "2026",
      note: "Quote: \"(a) A person commits eavesdropping when he or she knowingly and intentionally: ... (2) Uses an eavesdropping device, in a surreptitious manner, for the purpose of transmitting or recording all or any part of any private conversation to which he or she is a party\", unless all other parties consent.",
    },
    {
      id: "il-wopr",
      title: "Public Act 104-0054 (HB 1806): Wellness and Oversight for Psychological Resources Act",
      publisher: "Illinois General Assembly",
      url: "https://www.ilga.gov/Legislation/PublicActs/View/104-0054",
      year: "2025",
      note: "Section 20(a): an entity \"may not provide, advertise, or otherwise offer therapy or psychotherapy services, including through the use of Internet-based artificial intelligence, to the public in this State unless\" a licensed professional conducts them. Section 10 defines administrative support to include managing appointment scheduling and reminders. IDFPR release of August 4, 2025 (https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/news/2025/2025-08-04-idfpr-press-release-hb1806.pdf): \"All confirmed violations will result in a fine of up to $10,000\" and the Act \"goes into effect immediately with Governor Pritzker's signature\", signed on Friday, August 1, 2025.",
    },
    {
      id: "mn-144-295",
      title: "Minnesota Statutes 144.295, Disclosure of health records for external research",
      publisher: "Minnesota Office of the Revisor of Statutes",
      url: "https://www.revisor.mn.gov/statutes/cite/144.295",
      year: "2025",
      note: "Subdivision 1 quotes: the provider must \"disclose in writing to patients currently being treated by the provider that health records, regardless of when generated, may be released and that the patient may object\" and must \"use reasonable efforts to obtain the patient's written general authorization that describes the release of records\".",
    },
    {
      id: "ne-lb525",
      title: "Legislative Bill 525 (slip law), 109th Nebraska Legislature",
      publisher: "Nebraska Legislature",
      url: "https://nebraskalegislature.gov/FloorDocs/109/PDF/Slip/LB525.pdf",
      year: "2026",
      note: "Approved by the Governor April 14, 2026. Sec. 15: \"If a reasonable person interacting with a conversational artificial intelligence service would be misled to believe that the person is interacting with a human, an operator shall clearly and conspicuously disclose that the conversational artificial intelligence service is artificial intelligence.\" Sec. 13(2)(b)(iii) excludes a program \"Designed to provide outputs relating to a narrow and discrete topic\". Sec. 13(2)(a) covers a program \"accessible to the general public and that primarily simulates human conversation\". Sec. 18(1): \"The Attorney General may enforce the Conversational Artificial Intelligence Safety Act.\" Sec. 19: sections 12 to 18 \"become operative on July 1, 2027.\"",
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
    { label: "Clinical trial recruitment by location", href: "/clinical-trial-recruitment", description: "Registry counts, hubs and local rules for every state and region we cover." },
    { label: "Bond for research sites", href: "/for/research-sites", description: "How Bond fits a site's screening, outreach and scheduling workflow." },
    { label: "Implementation", href: "/implementation", description: "What a deployment involves, week by week." },
    { label: "Oncology trials", href: "/oncology", description: "The area with the largest summed recruiting count in the Midwest table above." },
    { label: "Epic integration", href: "/integrations/epic", description: "How Bond connects to Epic, which many Midwest systems run." },
  ],
};

export default page;
