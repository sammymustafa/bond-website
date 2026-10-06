import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/rare-disease-trial-recruitment",
  category: "blog",
  title: "Rare disease trial recruitment: registries, ads and EHRs",
  description:
    "What the evidence says about recruiting for rare disease trials through registries, advocacy groups, ads and EHR search, and a plan sites can use.",
  keywords: [
    "rare disease clinical trial recruitment",
    "rare disease patient registry recruitment",
    "rare disease EHR search ICD-10",
    "patient advocacy group trial recruitment",
  ],
  eyebrow: "Blog",
  h1: "Recruiting for rare disease trials: registries, advocacy groups, ads and EHR search",
  intro:
    "In a rare disease trial, the eligible population may be a few hundred people spread across the country, many undiagnosed or coded under a broader name. The channels with the best published yield reach people who are already engaged, through registries and advocacy groups, or find patients a site already treats, through EHR search that goes beyond diagnosis codes. Paid ads add reach, and every channel fails without fast follow-up. Here is the evidence and a plan.",
  summary: "Registries, advocacy groups, ads and EHR search for rare disease trials: what the evidence shows and a plan for sites.",
  lastUpdated: "2026-12-07",
  blog: { date: "2026-12-07", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Identify", secondaryHref: "/identify" },
  sections: [
    {
      id: "why-rare-trials-struggle",
      heading: "Why do rare disease trials struggle to enroll?",
      blocks: [
        {
          type: "p",
          text: "Under the Orphan Drug Act, a rare disease affects fewer than 200,000 people in the US. FDA estimates that more than 10,000 rare diseases together affect over 30 million Americans, about half of them children, and that most rare diseases have no FDA-approved treatment.{{cite:fda-rare-page}}",
        },
        {
          type: "stats",
          items: [
            { value: "30.2%", label: "of 659 randomized rare disease trials were discontinued", cite: "rees-2019" },
            { value: "31.2%", label: "of those discontinuations cited insufficient patient accrual, the top reason", cite: "rees-2019" },
            { value: "29 vs 62", label: "median enrollment in rare versus non-rare disease trials", cite: "bell-2014" },
          ],
        },
        {
          type: "p",
          text: "In a review of randomized rare disease trials registered from 2010 to 2012, insufficient accrual was the most common reason for stopping early (the abstract gives 32.1%, the results table 31.2%). Industry-funded trials were less likely than others to stop for poor accrual. The authors recommend working with disease experts and patient advocacy groups early to forecast enrollment.{{cite:rees-2019}} Rare disease trials are also small: a 2014 analysis of ClinicalTrials.gov found median enrollment of 29, against 62 in other trials, and early termination of 13.7% against 6.3%.{{cite:bell-2014}}",
        },
      ],
    },
    {
      id: "registries-and-advocacy",
      heading: "What do registries and advocacy groups add?",
      blocks: [
        {
          type: "p",
          text: "Engaged patients. The NIH Rare Diseases Clinical Research Network contact registry estimated study participation of 6% to 27% among its registrants, and over 40% for some diseases when counting only registrants living within 100 miles of a study site.{{cite:richesson-2009}}",
        },
        {
          type: "p",
          text: "A 2023 comparison across six network studies (PRISM) measured how many website visitors from each channel went on to consent to be contacted:",
        },
        {
          type: "table",
          caption: "PRISM: visitors who consented to be contacted, by recruitment channel (six rare disease studies)",
          columns: ["Channel", "Visitors", "Consented to contact"],
          rows: [
            ["Registry emails", "461", "84 (18.2%){{cite:applequist-2023}}"],
            ["Organic Facebook posts", "676", "46 (6.8%)"],
            ["Twitter", "160", "4 (2.5%)"],
            ["Paid Facebook ads", "97", "1 (1%)"],
          ],
          note: "Paid ads used a budget of US $585 over seven months. Across all six studies, 3 participants enrolled, and 97.8% of leads dropped off.{{cite:applequist-2023}}",
        },
        {
          type: "p",
          text: "The authors' fix was process, not channel: put the advocacy group at the center of the workflow and have site coordinators actively involved as soon as a person agrees to share contact details.{{cite:applequist-2023}} A lead that waits days for a call is often a lead lost.",
        },
      ],
    },
    {
      id: "where-ads-fit",
      heading: "Where do paid ads fit in rare disease recruitment?",
      blocks: [
        {
          type: "p",
          text: "As a supplement. PRISM's small paid budget produced one consented lead, while unpaid posts in community channels did better.{{cite:applequist-2023}} Ads earn their place when the diagnosed population is too scattered for a site's own patients and the registries to fill a trial, and when they are targeted to caregivers and communities rather than the general public.",
        },
        {
          type: "p",
          text: "The weak link in every channel is what happens after the click. Bond's [Engage](/engage) stage creates and runs Meta and Google campaigns for each study, and its voice and text agents contact every new lead immediately, keep following up with those who have not responded, pre-screen them and book visits into the site's calendar.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "ehr-search",
      heading: "Why do diagnosis codes miss rare disease patients?",
      blocks: [
        {
          type: "p",
          text: "Many rare diseases have no code of their own. Of 6,519 rare diseases, 1,386 (21%) matched an ICD-10-CM code and 2,848 (44%) a SNOMED CT concept.{{cite:fung-2014}} Others are undiagnosed: in two academic biobanks, 10 of 92 carriers of a hereditary transthyretin amyloidosis variant who had heart failure (11%) had been diagnosed with the disease.{{cite:damrauer-2019}}",
        },
        {
          type: "p",
          text: "Combining data types works better than codes alone. For a pediatric spondyloarthritis trial, the PEDSnet network built a computable phenotype and validated it at 90% recall and 99% precision. At one center over three months, finding the same 15 trial-eligible patients took 417 chart reviews by manual screening of all juvenile arthritis patients and 26 with the query, saving an estimated 19.5 hours.{{cite:weiss-2026}} The main source of disagreement was clinicians coding by clinical impression rather than classification criteria.",
        },
        {
          type: "checklist",
          items: [
            "Search SNOMED CT and ICD codes together, including broader parent codes.",
            "Add specialist visits, disease-specific medications and procedures.",
            "Search genetic test results and outside reports, which may hold a diagnosis the problem list lacks.",
            "Read notes for the clinical features the protocol names, since the diagnosis may be written but never coded.",
          ],
        },
      ],
    },
    {
      id: "travel-and-distance",
      heading: "How far will rare disease patients travel for a trial?",
      blocks: [
        {
          type: "p",
          text: "Less far than many protocols assume. In a survey of people with primary mitochondrial disease, 82.1% found a trial with no travel acceptable and 83.5% local travel, against 61.0% for domestic and 39.7% for international travel.{{cite:zolkipli-2018}} The registry data above point the same way: for some diseases, participation was over 40% among registrants within 100 miles of a site, against 6% to 27% overall.{{cite:richesson-2009}}",
        },
        {
          type: "p",
          text: "FDA's final guidance on decentralized elements (September 2024) says bringing trial activities to participants' homes may reduce the need for travel, and notes they can facilitate research on rare diseases. It does not consider obtaining informed consent an appropriate task for a local health care provider.{{cite:fda-dct-2024}}",
        },
      ],
    },
    {
      id: "site-plan",
      heading: "What should a site do before a rare disease trial opens?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Size the pool honestly",
              text: "FDA's December 2023 final guidance says enrollment feasibility depends on accurately estimated disease prevalence.{{cite:fda-rare-2023}} Count diagnosed patients in your catchment and the registry members within reasonable travel distance.",
            },
            {
              title: "Call the advocacy group and registry first",
              text: "Ask how they notify members, what they need from the site and how quickly they can send a study notice.",
            },
            {
              title: "Build an EHR phenotype, not a code list",
              text: "Combine codes, specialist visits, medications, genetic results and notes, and validate it on a sample of charts.",
            },
            {
              title: "Answer every lead the same day",
              text: "Assign a coordinator to registry and ad leads, and log every attempt until the person is screened or declines.",
            },
            {
              title: "Plan for distance",
              text: "Budget travel support and ask the sponsor which visits can be remote or local.",
            },
            {
              title: "Push back on narrow criteria",
              text: "FDA's guidance says inclusion and exclusion criteria should not unnecessarily constrain eligibility in rare diseases.{{cite:fda-rare-2023}} Report each criterion that screened out candidates to the sponsor.",
            },
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a rare disease protocol. We will show how Bond searches notes, reports and codes for it and follows up with every lead.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is a registry or an advocacy group better for rare disease recruitment?",
      a: "They work best together. Registry emails had the highest consent-to-contact rate in PRISM, and the authors recommend putting the advocacy group at the center of the workflow.{{cite:applequist-2023}}",
    },
    {
      q: "Can a site find rare disease patients with ICD-10 codes alone?",
      a: "Rarely. Only 21% of 6,519 rare diseases matched an ICD-10-CM code in one analysis, so searches should add SNOMED CT codes, medications, specialist visits, genetic results and notes.{{cite:fung-2014}}",
    },
    {
      q: "Can consent for a rare disease trial happen remotely?",
      a: "Under FDA's 2024 guidance on decentralized elements, investigators may obtain consent from participants at their remote locations, with IRB oversight, but FDA does not consider consent an appropriate task for a local health care provider.{{cite:fda-dct-2024}} This is not legal advice.",
    },
  ],
  sources: [
    {
      id: "fda-rare-page",
      title: "Rare Diseases at FDA",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/patients/rare-diseases-fda",
      year: "2026",
      note: "Read October 2026. Quotes: \"The Orphan Drug Act defines a rare disease as a disease or condition that affects less than 200,000 people in the United States. An estimated 10,000+ rare diseases affect more than 30 million people – approximately one out of every 10 people – in the U.S., and about half of these people are children.\"; \"most rare diseases do not have FDA-approved treatments.\"",
    },
    {
      id: "rees-2019",
      title: "Noncompletion and nonpublication of trials studying rare diseases: A cross-sectional analysis",
      publisher: "PLOS Medicine (Rees CA et al., Boston Children's Hospital), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6871779/",
      year: "2019",
      note: "Randomized rare disease trials registered 2010 to 2012. Quotes: \"Of the 659 trials, 30.2% (n = 199) were discontinued. The most common reasons for trial noncompletion were insufficient patient accrual (31.2%, n = 62), informative termination (22.6%, n = 45)\"; the abstract instead says \"Lack of patient accrual (n = 64, 32.1%)\"; \"Trials funded by industry were significantly less likely to be discontinued because of poor patient accrual than trials funded by nonindustry (OR 0.22; 95% CI 0.11–0.44, P < 0.001)\"; \"proactive collaboration with rare disease experts and patient advocacy groups should be prioritized to facilitate robust enrollment forecasting\".",
    },
    {
      id: "bell-2014",
      title: "A comparison of interventional clinical trials in rare versus non-rare diseases: an analysis of ClinicalTrials.gov",
      publisher: "Orphanet Journal of Rare Diseases (Bell SA, Tudur Smith C), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4255432/",
      year: "2014",
      note: "Quotes: \"Rare disease trials enrolled fewer participants (median 29 vs. 62)\"; \"A higher proportion of rare disease trials were terminated early (13.7% vs. 6.3%)\".",
    },
    {
      id: "richesson-2009",
      title: "An automated communication system in a contact registry for persons with rare diseases: scalable tools for identifying and recruiting clinical research participants",
      publisher: "Contemporary Clinical Trials (Richesson RL et al., RDCRN data center), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2640948/",
      year: "2009",
      note: "Quotes: \"The registry currently contains over 4,000 registrants, representing 40 rare diseases. Estimates of study participation range from 6–27% for all enrollees. Study participation rates for some disease areas are over 40% when considering only contact registry enrollees who live within 100 miles of a clinical research study site.\" Older data; estimates, not a controlled comparison.",
    },
    {
      id: "applequist-2023",
      title: "Direct-to-Consumer Recruitment Methods via Traditional and Social Media to Aid in Research Accrual for Clinical Trials for Rare Diseases: Comparative Analysis Study",
      publisher: "Journal of Medical Internet Research (Applequist J et al., RDCRN), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131902/",
      year: "2023",
      note: "Six studies in five RDCRN consortia. Table 6 (N=1465): organic Facebook 676 visitors, 46 (6.8%) consented; Twitter 160, 4 (2.5%); paid Facebook advertising 97, 1 (1%); RDCRN patient contact registry 461, 84 (18.2%). Quotes: \"a small advertising budget of US $585 was used toward paid Facebook advertisements over the 7-month data collection period\"; \"Across 6 studies, 3 participants were ultimately enrolled, meaning that 97.8% (133/136) of leads dropped off.\"; \"structuring the communicative workflow in such a way that PAG involvement is central to the process, with clinical site coordinators actively involved after an individual consents to share their contact information.\"",
    },
    {
      id: "fung-2014",
      title: "Coverage of rare disease names in standard terminologies and implications for patients, providers, and research",
      publisher: "AMIA Annual Symposium Proceedings (Fung KW, Richesson R, Bodenreider O)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25954361/",
      year: "2014",
      note: "Abstract read via PubMed. Quote: \"We estimate the coverage of the names of a set of 6,519 rare diseases. Using the UMLS, 697 (11%) diseases were matched to ICD-9-CM, 1,386 (21%) to ICD-10-CM and 2,848 (44%) to SNOMED CT.\" Name matching against 2014 code versions.",
    },
    {
      id: "damrauer-2019",
      title: "Association of the V122I Hereditary Transthyretin Amyloidosis Genetic Variant With Heart Failure Among Individuals of African or Hispanic/Latino Ancestry",
      publisher: "JAMA (Damrauer SM et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31821430/",
      year: "2019",
      note: "Abstract read via PubMed; Penn Medicine and Mount Sinai biobanks. Quote: \"Ten of 92 TTR V122I carriers with heart failure (11%) were diagnosed as having hATTR-CM; the median time from onset of symptoms to clinical diagnosis was 3 years.\"",
    },
    {
      id: "weiss-2026",
      title: "Leveraging the PEDSnet clinical research network and electronic health record data to enhance efficiency of trial enrollment for a rare pediatric rheumatic disease",
      publisher: "Pediatric Rheumatology (Weiss PF et al., Children's Hospital of Philadelphia), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12947445/",
      year: "2026",
      note: "BACK-OFF JSpA trial screening. Quotes: \"the final algorithm to identify patients with ERA demonstrated 94% agreement, with a recall of 90.0%, precision of 99%\"; \"The cumulative number of charts that required review based on the 4 methods over 3 months at a single center were 417, 64, 40, and 26, respectively, to identify the same 15 trial-eligible patients\"; \"Over 3-months at one institution, the query saved 19.5 h and 1.9 h of effort compared to manual screening of all juvenile arthritis or enthesitis-related arthritis patient charts, respectively.\"; \"The primary reason for discordance between the algorithm and chart review was due to providers using diagnosis codes as part of their clinical interpretation versus a classification definition\".",
    },
    {
      id: "zolkipli-2018",
      title: "Mitochondrial disease patient motivations and barriers to participate in clinical trials",
      publisher: "PLOS ONE (Zolkipli-Cunningham Z et al., Children's Hospital of Philadelphia), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5957366/",
      year: "2018",
      note: "Stated preferences, not behavior. Quote: \"acceptable designs included no requirement to travel (82.1%) or local travel (83.5%). Overnight stay (66.7%), domestic (61.0%) or international travel (39.7%) were less favored.\"",
    },
    {
      id: "fda-dct-2024",
      title: "Conducting Clinical Trials With Decentralized Elements: Guidance for Industry, Investigators, and Other Interested Parties",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/conducting-clinical-trials-decentralized-elements",
      year: "2024",
      note: "Final guidance, September 2024. Quotes from the PDF: \"DCTs may enhance convenience for trial participants, reduce the burden on caregivers, and facilitate research on rare diseases\"; \"Bringing trial-related activities to participants’ homes may reduce the need for travel and improve engagement, recruitment, and retention\"; \"FDA therefore does not consider obtaining informed consent to be an appropriate activity for a local HCP to perform.\"; \"Investigators may obtain informed consent (either electronically or on paper) from trial participants at their remote locations provided that all applicable regulatory requirements are met.\"",
    },
    {
      id: "fda-rare-2023",
      title: "Rare Diseases: Considerations for the Development of Drugs and Biological Products: Guidance for Industry",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/rare-diseases-considerations-development-drugs-and-biological-products",
      year: "2023",
      note: "Final guidance, December 2023. Quotes from the PDF: \"Evidence-based decisions about what is feasible in terms of rare disease drug clinical investigation enrollment depend on accurately estimated disease prevalence.\"; \"For rare diseases, it is especially important that inclusion and exclusion criteria do not unnecessarily constrain patient eligibility\".",
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
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads notes, reports and codes against each criterion." },
    { label: "Engage: ads, outreach and booking", href: "/engage", description: "How Bond runs study ads and follows up with every lead." },
    { label: "EHR phenotyping", href: "/glossary/ehr-phenotyping", description: "Combining codes, labs, medications and notes to find patients." },
    { label: "Using the EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "Interfaces, permissions and what EHR tools can query." },
  ],
};

export default page;
