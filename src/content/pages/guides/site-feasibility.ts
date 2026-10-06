import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/site-feasibility",
  category: "guide",
  title: "Site feasibility in clinical trials: assessment & checklist",
  description:
    "What site feasibility is, how the assessment runs from CDA to selection visit, the criteria sponsors check, how to count eligible patients, and a checklist.",
  keywords: [
    "site feasibility",
    "clinical trial site feasibility",
    "site feasibility in clinical trials",
    "site feasibility assessment",
    "clinical trial site feasibility assessment",
    "site feasibility study in clinical trials",
    "clinical trial feasibility checklist",
    "site feasibility checklist",
    "site feasibility meaning",
    "what is site feasibility in clinical research",
    "what is clinical trial site feasibility and how is it conducted",
    "site feasibility assessment criteria",
    "site feasibility assessment metrics",
    "site feasibility report",
    "feasibility and site selection",
  ],
  eyebrow: "Guide",
  h1: "Site feasibility in clinical trials: how the assessment works and how to answer it",
  intro:
    "Site feasibility is the process a sponsor or CRO uses to decide whether a research site can run a specific trial and enroll the patients it needs, usually through a feasibility questionnaire and a site qualification visit.{{cite:bruneau-2024,asco-post-2021}} For the site, it is also an internal decision: whether it has the patients, staff, equipment and time to take the study on and deliver the number it promises. This guide covers each step, the criteria sponsors assess, how to count eligible patients from records, the metrics that show whether feasibility was right, and a checklist.",
  summary:
    "What site feasibility means, how the assessment is conducted, the criteria and metrics sponsors use, and a checklist for research sites.",
  lastUpdated: "2026-10-06",
  heroCta: {
    label: "Book a demo",
    href: "/book-a-demo",
    secondaryLabel: "Feasibility questionnaire template",
    secondaryHref: "/templates/feasibility-questionnaire",
  },
  sections: [
    {
      id: "what-is-site-feasibility",
      heading: "What is site feasibility in clinical trials?",
      blocks: [
        {
          type: "p",
          text: "A 2024 task force of sites, site networks, sponsors and CROs describes three stages of feasibility: program feasibility (disease prevalence, competition and geography for a development program), study or protocol feasibility (whether one protocol can meet its timelines, targets and costs), and site feasibility. Site feasibility means identifying and assessing potential sites for a specific study. It may also be called a feasibility assessment, site qualification or site selection.{{cite:bruneau-2024}}",
        },
        {
          type: "p",
          text: "The regulatory basis is the sponsor's duty to choose qualified investigators. For drug studies under an IND, [21 CFR 312.53(a)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.53) says a sponsor \"shall select only investigators qualified by training and experience.\"{{cite:ecfr-312-53}} ICH E6(R3), which FDA published as final guidance in September 2025, says an investigator should be able to demonstrate \"(e.g., based on retrospective or currently available data)\" a potential for recruiting the agreed number of eligible participants.{{cite:ich-e6r3,fr-e6r3-2025}} In other words, the patient number should rest on data.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Site feasibility vs site selection",
          text: "Feasibility is the assessment; selection is the decision that follows it, though the terms are sometimes used interchangeably.{{cite:bruneau-2024}} This guide is written for the site answering the assessment. The sponsor's side, including how site lists are built, is in [how sponsors choose sites](/guides/how-sponsors-choose-sites).",
        },
      ],
    },
    {
      id: "how-it-is-conducted",
      heading: "How is a site feasibility assessment conducted?",
      blocks: [
        {
          type: "p",
          text: "ASCO describes the typical process as \"a comprehensive and lengthy site feasibility questionnaire and an in-person prestudy site visit prior to selecting the site.\"{{cite:asco-post-2021}} The University of Rochester Medical Center's April 2026 start-up manual lays out the usual sequence.{{cite:urmc-2026}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Candidate sites identified",
              text: "In a 2021 interview study, sponsors mostly used databases on previous trial performance to identify countries and sites.{{cite:laaksonen-2021}} The site hears of the study when asked whether the investigator is interested.",
            },
            {
              title: "Confidential disclosure agreement (CDA)",
              text: "The site signs a CDA before the sponsor shares proprietary information. Once it is fully executed, the sponsor sends the protocol synopsis or the protocol.{{cite:urmc-2026}}",
            },
            {
              title: "Protocol or synopsis review",
              text: "The PI and coordinator review the criteria, schedule of activities and procedures. The task force warns that a synopsis is \"only valuable to determine initial site interest, not accurate site feasibility.\"{{cite:bruneau-2024}}",
            },
            {
              title: "Feasibility questionnaire",
              text: "The site completes the sponsor's survey, sent as an attachment or online form.{{cite:urmc-2026}} In an ASCO task force survey of 113 oncology practices, each questionnaire took 4 hours on average.{{cite:asco-aaci-2020}}",
            },
            {
              title: "Site qualification visit",
              text: "A virtual or onsite pre-selection visit, also called a site qualification visit, reviews the answers and clarifies open items. The sponsor or CRO then writes a report on the site's feasibility.{{cite:urmc-2026}} These visits took 10 hours on average in the ASCO survey.{{cite:asco-aaci-2020}}",
            },
            {
              title: "Selection and start-up",
              text: "A selected site receives a selection letter and moves into budget, contract and IRB work.{{cite:urmc-2026}} For IND studies, the sponsor must collect a signed Form FDA 1572 and the investigator's CV before the investigator begins.{{cite:ecfr-312-53}}",
            },
          ],
        },
        {
          type: "p",
          text: "Formats vary. ASCO recommended a short questionnaire plus a pre-study visit, a long questionnaire alone, or a visit or teleconference alone.{{cite:asco-post-2021}} The task force also saw feasibility start before protocols were final, and CROs start it before winning the study, so ask where the study stands.{{cite:bruneau-2024}}",
        },
        {
          type: "h3",
          text: "What should the site's own feasibility review cover?",
        },
        {
          type: "p",
          text: "Run an internal go/no-go in parallel. URMC's research office weighs the study pipeline, staffing, enrollment under that PI, competing studies in the same disease and past timelines with the sponsor, uses cohort discovery tools in its risk assessment, and can add a break-even analysis of the budget.{{cite:urmc-2026}} The task force's advice to sites is direct: decline if you are not interested.{{cite:bruneau-2024}}",
        },
      ],
    },
    {
      id: "criteria",
      heading: "What criteria do sponsors assess in site feasibility?",
      blocks: [
        {
          type: "p",
          text: "The task force groups them into four areas: site profile, site capability, site performance, and protocol-specific assessment such as patient population estimates, referral patterns and standard of care.{{cite:bruneau-2024}} CTTI's ideal site profile covers investigator experience, site capabilities, infrastructure, institutional resources and access to the target population.{{cite:ctti-recruitment}}",
        },
        {
          type: "table",
          caption: "Site feasibility assessment criteria",
          columns: ["Criterion", "What the sponsor asks", "Evidence the site should have ready"],
          rows: [
            ["Patient population", "How many patients meet the key criteria, and how many new ones appear each month", "A dated records query with the count after each criterion, plus a chart-reviewed sample"],
            ["Referrals and standard of care", "Where patients come from, and whether local care fits the protocol", "Referring clinics; current treatment pathways"],
            ["Investigator and staff", "Who will run the study, and whether they have time", "CVs, GCP training dates, coordinator study loads. ICH E6(R3) expects sufficient time and adequate qualified staff.{{cite:ich-e6r3}}"],
            ["Past performance", "Whether the site delivered on similar studies", "Enrolled against committed, screen failure rates, audit and inspection outcomes"],
            ["Facilities and equipment", "Whether the site can do every procedure and lab step", "Equipment list with calibration dates; pharmacy, storage and local lab capability"],
            ["Competing studies", "Which studies draw on the same patients", "Overlapping open and planned studies, and referral priority"],
            ["Start-up", "How fast the site can open", "Review committees, IRB route, recent budget, contract and IRB turnaround"],
          ],
          note: "Based on the task force's four areas and CTTI's site profile.{{cite:bruneau-2024,ctti-recruitment}}",
        },
      ],
    },
    {
      id: "sponsor-view",
      heading: "What do sponsors and CROs look for in a feasibility response?",
      blocks: [
        {
          type: "p",
          text: "Mostly, a number they can believe. ASCO recommended keeping questions to what sponsors need to know: site capability and the feasibility of the specific protocol.{{cite:asco-post-2021}} In the 2021 interview study, sponsors validated investigators' estimates against other data and seemed to favor sites that backed patient counts with EHR data, because they answered faster and more reliably.{{cite:laaksonen-2021}} Track record counts too: a site that has run 6 to 10 trials is more likely to enroll on time than one with fewer, according to a 2018 review.{{cite:fogel-2018}} See [how sponsors choose sites](/guides/how-sponsors-choose-sites) and [how to win more studies](/guides/win-more-studies).",
        },
      ],
    },
    {
      id: "estimate-eligible-patients",
      heading: "How should a site estimate eligible patient numbers?",
      blocks: [
        {
          type: "p",
          text: "From the records, not from memory. \"Lasagna's Law\" is the observation that investigators overestimate the number of patients available for a study.{{cite:van-der-wouden-2007}} A 2018 review calls it a repeated pattern that study centers report fewer eligible patients than anticipated.{{cite:fogel-2018}} In the 2021 Nordic interview study, most sites were seen to base counts solely on previous experience, and sites that reviewed EHR data were considered more accurate.{{cite:laaksonen-2021}} Memory recalls the diagnosis, not the lab threshold or washout window that removes most candidates.",
        },
        {
          type: "ol",
          items: [
            "**Get the full criteria.** Sites cannot project enrollment accurately without all the [inclusion and exclusion criteria](/glossary/inclusion-and-exclusion-criteria).{{cite:bruneau-2024}} If you have only a synopsis, say so.",
            "**Sort the criteria by where the answer lives:** structured fields, notes and reports, or nowhere in the chart.",
            "**Run the count as a funnel,** reporting the number left after each criterion, with the query date and lookback window.",
            "**Check a sample of charts** from the bottom of the funnel and record how many hold up.",
            "**Estimate new patients per month** from a stated recent period.",
            "**Convert to an enrollment estimate last,** using your own pre-screen, consent and [screen failure](/glossary/screen-failure-rate) rates, and show the arithmetic.",
          ],
        },
        {
          type: "p",
          text: "The chart review behind a count is often done as a review [preparatory to research](/glossary/preparatory-to-research) under [45 CFR 164.512(i)(1)(ii)](https://www.ecfr.gov/current/title-45/section-164.512), which requires the covered entity to obtain the researcher's representations that the review is solely to prepare a protocol or similar, that no protected health information will leave the covered entity, and that the information is necessary.{{cite:ecfr-164-512}} Send sponsors aggregate counts only and follow your privacy office's process. This is not legal advice.",
        },
        {
          type: "h3",
          text: "Why is the eligible count not the enrollment number?",
        },
        {
          type: "p",
          text: "Eligible patients still have to be reached, interested, consented and confirmed at screening. A 2019 meta-analysis of 13 studies covering 8,883 cancer patients found a trial was unavailable at the patient's institution 55.6% of the time; 21.5% of patients were ineligible for an available trial, 14.8% did not enroll, and 8.1% enrolled.{{cite:unger-2019}} Among patients with an available trial who were eligible, more did not enroll than enrolled. Use the stage-by-stage rates in your own pre-screening and screening logs, and if you have none, say so and give a range.",
        },
      ],
    },
    {
      id: "metrics",
      heading: "What metrics show whether feasibility was accurate?",
      blocks: [
        {
          type: "p",
          text: "The core test is enrolled against promised, and the industry record is poor.",
        },
        {
          type: "stats",
          items: [
            { value: "11%", label: "of sites in a typical trial enrolled no patients (Tufts CSDD, 2013)", cite: "tufts-2013" },
            { value: "37%", label: "of sites under-enrolled against target (Tufts CSDD, 2013)", cite: "tufts-2013" },
            { value: "18.2%", label: "of 811 centers met their enrollment target in one phase III trial (2017 analysis)", cite: "van-den-bor-2017" },
          ],
        },
        {
          type: "p",
          text: "The Tufts figures cover more than 150 studies and nearly 16,000 sites.{{cite:tufts-2013}} In the phase III AleCardio trial, the median center target was 10.1 patients and the median enrolled was 4.0. The same analysis found that 59 candidate predictors, mostly feasibility questionnaire answers, predicted which centers would meet target only marginally better than a model with no predictors.{{cite:van-den-bor-2017}} A questionnaire is only as predictive as the data behind it.",
        },
        {
          type: "table",
          caption: "Site feasibility assessment metrics",
          columns: ["Metric", "How to calculate it", "What it tells you"],
          rows: [
            ["Enrolled vs committed", "Randomized divided by committed, per study", "Whether the estimate was right"],
            ["Time to [first patient in](/glossary/first-patient-in)", "Days from activation to first patient screened or enrolled", "Whether the patients were findable. CRIO's 2026 benchmark median is 20 days from activation to first patient screened.{{cite:crio-2026}}"],
            ["[Screen failure rate](/glossary/screen-failure-rate)", "Screen failures divided by patients consented", "Whether the count applied the criteria that matter"],
            ["Pre-screen yield", "Sent to screening divided by pre-screened", "Whether the records query was too broad"],
            ["[Enrollment rate](/glossary/enrollment-rate)", "Enrolled per month, against your projection", "Whether new-patient flow was estimated well"],
          ],
          note: "A 2018 review links time to first patient with better overall site performance.{{cite:fogel-2018}} CTTI recommends setting realistic enrollment metrics and milestones and monitoring site performance.{{cite:ctti-recruitment}} Keep a dated copy of each response to compare at close-out.",
        },
      ],
    },
    {
      id: "checklist",
      heading: "What should a site feasibility checklist include?",
      blocks: [
        {
          type: "p",
          text: "Use this for each feasibility request. It follows the steps above, the materials the task force says sponsors should provide, and URMC's questions for sponsors.{{cite:bruneau-2024,urmc-2026}}",
        },
        {
          type: "checklist",
          items: [
            "PI wants to proceed; CDA routed through your contracts office.",
            "Full protocol or detailed synopsis received, with all eligibility criteria and the schedule of activities.",
            "Lab, pharmacy and imaging manuals (draft or final) and the equipment list requested.",
            "Site enrollment target, overall target, enrollment period and current enrollment confirmed with the sponsor.",
            "Records query run against the criteria, with query date, lookback window and a count at each step.",
            "Chart-reviewed sample completed and the hold-up rate recorded.",
            "New eligible patients per month estimated.",
            "Enrollment estimate calculated from your own consent and screen failure rates.",
            "Competing studies listed and referral priority set.",
            "Staff time and equipment checked, including satellite locations.",
            "Start-up timeline stated: review committees, IRB, budget and contract.",
            "Internal go/no-go decided, including whether the budget covers the work.",
            "PI sign-off on the count, method and projection; dated copy saved.",
          ],
        },
        {
          type: "cta",
          label: "Start from the feasibility questionnaire template",
          href: "/templates/feasibility-questionnaire",
          text: "An editable master answer file with an EHR patient-count worksheet, so each new response takes less time.",
          secondaryLabel: "Download the Word file",
          secondaryHref: "/downloads/feasibility-questionnaire.docx",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "What are the most common site feasibility mistakes?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Answering from memory.** Investigators tend to overestimate available patients, and sponsors find EHR-backed counts more reliable.{{cite:van-der-wouden-2007,laaksonen-2021}}",
            "**Committing the eligible pool.** Patients who might qualify are not patients who will be randomized.",
            "**Answering from a synopsis without saying so.** In the task force's examples, sites learned at initiation that a study needed a refrigerated centrifuge, an on-site lab test their satellites could not run, or a hazardous compound hood. One site withdrew after finishing all start-up work.{{cite:bruneau-2024}}",
            "**Ignoring competing studies** that split the pool you counted.",
            "**Contacting patients to test interest.** That is recruitment, not feasibility. ICH E6(R3) lists recruitment advertisements and the recruitment process among what an IRB reviews.{{cite:ich-e6r3}} See [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
            "**Never checking the answer** against actual enrollment, so the next estimate repeats the last one's errors.",
          ],
        },
      ],
    },
    {
      id: "how-bond-helps",
      heading: "How does Bond help sites answer feasibility with data?",
      blocks: [
        {
          type: "p",
          text: "Bond Health gives a site the data behind its feasibility answers and then delivers the enrollment; the site still completes the questionnaire itself. [Identify](/identify) screens the site's EHR against the study's inclusion and exclusion criteria, reading clinical notes, prescriptions, lab results, imaging data and pathology, radiology and molecular reports. It processes 10,000+ charts per hour with 90%+ matching accuracy and shows criterion-by-criterion evidence for every match, so the count in a feasibility response comes from the records rather than memory. Full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "Once the study is awarded and its recruitment materials are approved, Bond creates and runs Meta and Google ad campaigns for it. Its voice and text agents contact every new ad lead immediately, keep following up with every lead who has not responded, pre-screen patients and book them into the site's calendar, alongside the patients Identify found. That is how a site hits the number it promised. Pricing is a volume-based fee per screened patient plus a percentage of the randomization milestone payment, with no integration fee; ad spend comes from the site's own budget ([pricing](/pricing)).{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a protocol you are evaluating and see Bond screen your records against each criterion, with the chart evidence behind every match.",
          secondaryLabel: "Bond for research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is site feasibility in clinical research?",
      a: "Site feasibility is the assessment a sponsor or CRO uses to decide whether a research site is qualified, capable and has access to enough eligible patients to run a specific study. It usually involves a confidentiality agreement, a feasibility questionnaire and a site qualification visit.{{cite:bruneau-2024,urmc-2026}}",
    },
    {
      q: "What is the difference between site feasibility and site selection?",
      a: "Feasibility is the assessment of whether a site can run the study; selection is the sponsor's decision, usually communicated by a selection letter after the qualification visit.{{cite:urmc-2026}} The terms are sometimes used interchangeably.{{cite:bruneau-2024}}",
    },
    {
      q: "What should a site feasibility checklist include?",
      a: "The full protocol and manuals, the site-specific enrollment target, a records-based patient count with its method, staff and equipment checks, competing studies, start-up timelines, an internal go/no-go and PI sign-off. The [checklist above](#checklist) lists each item.",
    },
    {
      q: "How long does a feasibility questionnaire take?",
      a: "In an ASCO task force survey of 113 oncology practices, each feasibility questionnaire took 4 hours on average and each pre-study site visit took 10 hours.{{cite:asco-aaci-2020}} Sites are typically not paid for this work.{{cite:bruneau-2024}}",
    },
    {
      q: "What is a site feasibility report?",
      a: "After the qualification visit, the sponsor or CRO writes a report summarizing the site and its feasibility to participate, before the selection decision.{{cite:urmc-2026}} Sites should keep their own dated record of what they submitted.",
    },
  ],
  sources: [
    {
      id: "bruneau-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Bruneau et al., Site Enablement League task force (43% sites, 20% site networks, plus sponsors and CROs). Read October 2026. Quote: \"Site Feasibility - This entails identifying and assessing potential sites for a specific study. The process may also be called a Feasibility Assessment (FA), Site Qualification or Site Selection. The process may include a survey or feasibility questionnaire (FQ) as well as a site visit (known as pre-selection visit (PSV), pre-study site visit (PSSV), or site qualification visit (SQV)).\" Also: \"A draft/synopsis is only valuable to determine initial site interest, not accurate site feasibility.\"; \"Sites should decline if they are not interested.\"; \"sites are typically not compensated for feasibility assessment work\"",
    },
    {
      id: "asco-post-2021",
      title: "New Research Statement Recommends Streamlining and Standardizing Clinical Trial Site Feasibility Assessments",
      publisher: "The ASCO Post",
      url: "https://ascopost.com/issues/march-10-2021/new-research-statement-recommends-streamlining-and-standardizing-clinical-trial-site-feasibility-assessments/",
      year: "2021",
      note: "Summary of Kurbegov et al., JCO Oncology Practice 17:41-51, 2021. Read October 2026. Quote: \"The feasibility assessment process typically includes completion of a comprehensive and lengthy site feasibility questionnaire and an in-person prestudy site visit prior to selecting the site for a trial.\" Also lists the three recommended formats and the two factors questions should focus on.",
    },
    {
      id: "asco-aaci-2020",
      title: "Reducing Burdens of Site Feasibility Assessments for Conducting Clinical Trials",
      publisher: "Association of American Cancer Institutes, Clinical Research Innovation meeting abstract (ASCO task force: Byatt, Hurley, Kurbegov et al.)",
      url: "https://www.aaci-cancer.org/Files/Admin/CRI/2020/76-Reducing-Burdens-of-Site-Feasibility-Assessments-for-Conducting-Clinical-Trials.pdf",
      year: "2020",
      note: "Oncology practices only; survey date not stated. Read October 2026. Quote: \"113 oncology practices (66 community, 47 academic) reported completing 11 FQs and 4 pre-study site visits (PSSVs) on average per month. Each FQ took 4 hours and PSSVs took 10 hours on average to complete.\"",
    },
    {
      id: "urmc-2026",
      title: "URMC Clinical Research Study Start-Up Manual (V2)",
      publisher: "University of Rochester Medical Center, Office of Clinical Research",
      url: "https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/ctsi/Study-Start-Up-Manual-V2_04-2026.pdf",
      year: "2026",
      note: "April 2026 version; one institution's process. Read October 2026. Quote: \"A Feasibility Survey is a long and detailed process for a Sponsor/CRO to assess a site and is generally started after the CDA is executed, and the PI received the Protocol or Synopsis for review.\" Also: \"the Sponsor/CRO will likely schedule a virtual or onsite Pre-Site Selection Visit (PSV, aka Site Qualification Visit) to review the responses submitted and to clarify any outstanding information\" and \"At the conclusion of the PSV, the Sponsor/CRO will create a report summarizing our site and feasibility to participate in the study.\"",
    },
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice",
      publisher: "International Council for Harmonisation",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Sections 1.2.2(e), 2.2.1, 2.2.2, 3.7.1 and 3.7.2. Read October 2026. Quote: \"The investigator should be able to demonstrate (e.g., based on retrospective or currently available data) a potential for recruiting the proposed number of eligible participants within the recruitment period as agreed with the sponsor.\" Also: \"The sponsor should provide the potential investigator(s)/institution(s) with the protocol and an up-to-date Investigator's Brochure as well as sufficient time for the review of the protocol\"",
    },
    {
      id: "fr-e6r3-2025",
      title: "E6(R3) Good Clinical Practice; International Council for Harmonisation; Guidance for Industry; Availability",
      publisher: "Federal Register",
      url: "https://www.federalregister.gov/documents/2025/09/09/2025-17311/e6r3-good-clinical-practice-international-council-for-harmonisation-guidance-for-industry",
      year: "2025",
      note: "Published September 9, 2025. Read October 2026. Quote: \"The Food and Drug Administration (FDA or Agency) is announcing the availability of a final guidance for industry entitled 'E6(R3) Good Clinical Practice.'\"",
    },
    {
      id: "ecfr-312-53",
      title: "21 CFR 312.53: Selecting investigators and monitors",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.53",
      year: "2026",
      note: "Paragraphs (a) and (c). Read October 2026. Quote: \"A sponsor shall select only investigators qualified by training and experience as appropriate experts to investigate the drug.\" Also: \"Before permitting an investigator to begin participation in an investigation, the sponsor shall obtain the following: (1) A signed investigator statement (Form FDA-1572)\"",
    },
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512: Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Paragraph (i)(1)(ii), reviews preparatory to research. Read October 2026. Quote: \"No protected health information is to be removed from the covered entity by the researcher in the course of the review\"",
    },
    {
      id: "ctti-recruitment",
      title: "CTTI Recommendations: Planning for Successful Trial Recruitment",
      publisher: "Clinical Trials Transformation Initiative",
      url: "https://ctti-clinicaltrials.org/wp-content/uploads/2021/06/CTTI_Recruitment_Recs.pdf",
      year: "2018",
      note: "Published May 2016, updated July 2018. Read October 2026. Quotes: \"Conduct an evidence-based trial feasibility analysis\"; \"Establish realistic metrics and milestones\"; ideal site profile describes \"necessary investigator experience, site capabilities, site infrastructure, institutional resources, access to the relevant target population\"",
    },
    {
      id: "laaksonen-2021",
      title: "Clinical trial site identification practices and the use of electronic health records in feasibility evaluations: An interview study in the Nordic countries",
      publisher: "Clinical Trials (SAGE)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8592101/",
      year: "2021",
      note: "Qualitative interviews with 21 participants from pharmaceutical companies and CROs in Finland, Sweden, Denmark and Norway. Read October 2026. Quote: \"For estimating the sites' recruitment projections, most sites were seen to base their patient count estimates solely on their previous experience.\" Also: \"Sponsors seem to favour sites who could support their patient count estimates with electronic health record data as they were quicker in providing the estimates and more reliable\"",
    },
    {
      id: "van-der-wouden-2007",
      title: "Survey among 78 studies showed that Lasagna's law holds in Dutch primary care research",
      publisher: "Journal of Clinical Epidemiology, via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/17606178/",
      year: "2007",
      note: "Abstract read October 2026. Quote: \"Lasagna's Law states that medical investigators overestimate the number of patients available for a research study.\"",
    },
    {
      id: "fogel-2018",
      title: "Factors associated with clinical trials that fail and opportunities for improving the likelihood of success: A review",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6092479/",
      year: "2018",
      note: "Read October 2026. Quotes: \"A repeated problematic pattern in the literature is that study centers report fewer eligible patients than anticipated\"; \"A site that has conducted between 6 and 10 clinical trials has a greater probability of meeting enrollment within the required time than does a site with a history of fewer trials\"; \"An additional indicator is time to enroll the first patient, which is correlated with better overall performance.\"",
    },
    {
      id: "unger-2019",
      title: "Systematic Review and Meta-Analysis of the Magnitude of Structural, Clinical, and Physician and Patient Barriers to Cancer Clinical Trial Participation",
      publisher: "Journal of the National Cancer Institute",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6410951/",
      year: "2019",
      note: "13 studies, 8,883 cancer patients; percentages are of all patients. Read October 2026. Quote: \"A trial was unavailable for patients at their institution 55.6% of the time (95% confidence interval [CI] = 43.7% to 67.3%). Further, 21.5% (95% CI = 10.9% to 34.6%) of patients were ineligible for an available trial, 14.8% (95% CI = 9.0% to 21.7%) did not enroll, and 8.1% (95% CI = 6.3% to 10.0%) enrolled.\"",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts Center for the Study of Drug Development, press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013; more than 150 studies and nearly 16,000 sites, global, pre-2013 data. Read October 2026. Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\"",
    },
    {
      id: "van-den-bor-2017",
      title: "Predicting enrollment performance of investigational centers in phase III multi-center clinical trials",
      publisher: "Contemporary Clinical Trials Communications",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5898520/",
      year: "2017",
      note: "Single trial (AleCardio, NCT01042769), 811 initiated centers with an enrollment target. Read October 2026. Quote: \"It can be seen that only few centers (18.2%, 95% Wilson's CI: 15.7–21.1) met their enrollment target.\" Also: \"The median center-specific enrollment target equals 10.1 (Q1: 7.5, Q3: 11.5). The median number of actually recruited subjects equals 4.0\" and \"it may be unjustified to base operational decisions on the responses to the feasibility questionnaire items.\"",
    },
    {
      id: "crio-2026",
      title: "What It Takes to Start a Study: Site Start-up Benchmarks",
      publisher: "CRIO",
      url: "https://clinicalresearch.io/blog/what-it-takes-to-start-a-study-site-start-up-benchmarks/",
      year: "2026",
      note: "Published July 30, 2026; vendor analysis performed for the Site Accreditation and Standards Institute (SASI), sample size not stated. Read October 2026. Quote: \"The median time from activation to first patient screened is 20 days, but top-quartile performance is observed at just 8 days, or a little over a week.\"",
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
      note: "Capabilities, pricing and compliance status described by Bond Health, October 2026.",
    },
  ],
  related: [
    {
      label: "Feasibility questionnaire template",
      href: "/templates/feasibility-questionnaire",
      description: "An editable master answer file with an EHR patient-count worksheet.",
    },
    {
      label: "How sponsors choose sites",
      href: "/guides/how-sponsors-choose-sites",
      description: "The sponsor's selection process and the performance metrics it weighs.",
    },
    {
      label: "Site feasibility",
      href: "/glossary/site-feasibility",
      description: "The short glossary definition.",
    },
    {
      label: "Identify: LLM-based EHR screening",
      href: "/identify",
      description: "Screens EHR records against trial criteria and shows the chart evidence for each match.",
    },
  ],
};

export default page;
