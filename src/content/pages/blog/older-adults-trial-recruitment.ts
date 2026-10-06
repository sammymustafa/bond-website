import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/older-adults-trial-recruitment",
  category: "blog",
  title: "Recruiting adults over 75 for clinical trials",
  description:
    "Adults 75 and older remain underrepresented in trials. The data, the eligibility rules and logistics that keep them out, and outreach that reaches them.",
  keywords: [
    "older adults clinical trial recruitment",
    "adults over 75 clinical trials underrepresentation",
    "upper age limit clinical trials",
    "FDA inclusion of older adults cancer trials",
  ],
  eyebrow: "Blog",
  h1: "Recruiting adults over 75: the data, the barriers and what works",
  intro:
    "Most cancer trials have no upper age limit, yet FDA says adults 75 and older remain underrepresented in them.{{cite:fda-older-2022}} The causes are mostly eligibility criteria, logistics and how outreach is done, and sites and sponsors control much of that. Here is the evidence and a practical plan.",
  summary: "How underrepresented adults over 75 are, which criteria and logistics keep them out, which channels reach them, and what to change.",
  lastUpdated: "2027-01-04",
  blog: { date: "2027-01-04", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See how Engage works", secondaryHref: "/engage" },
  sections: [
    {
      id: "how-underrepresented",
      heading: "How underrepresented are adults over 75?",
      blocks: [
        {
          type: "p",
          text: "The clearest numbers come from cancer. An FDA analysis of 28,766 patients in 55 registration trials for cancer drugs approved from 1995 to 2002 found that 9% were 75 or older, against 31% of the US cancer population. For 65 and older the figures were 36% and 60%, and for 70 and older 20% and 46%.{{cite:talarico-2004}}",
        },
        {
          type: "stats",
          items: [
            { value: "9%", label: "Cancer registration trial patients aged 75 or older, 1995 to 2002", cite: "talarico-2004" },
            { value: "31%", label: "US cancer patients aged 75 or older in the same comparison", cite: "talarico-2004" },
            { value: "6.49 years", label: "How much younger trial participants were than the patient population, on average, in 302 phase 3 cancer trials", cite: "ludmir-2019" },
          ],
        },
        {
          type: "p",
          text: "The gap has not closed. A 2019 study of 302 phase 3 trials in breast, prostate, colorectal and lung cancer, with 262,354 participants, found the median participant was on average 6.49 years younger than the median patient with the disease. The gap was wider in industry-funded trials and grew by about 0.19 years each year.{{cite:ludmir-2019}}",
        },
      ],
    },
    {
      id: "why-now",
      heading: "Why does the 75-plus group matter now?",
      blocks: [
        {
          type: "p",
          text: "The 2020 Census counted 55.8 million people aged 65 and over, 16.8% of the population. The 75-to-84 group grew 25.1% over the decade and is expected to grow faster as baby boomers age into it; by 2030, all baby boomers will be 65 or older.{{cite:census-older-2023}}",
        },
        {
          type: "p",
          text: "Regulators have asked for this for decades. The ICH E7 guideline of 1993 discourages arbitrary maximum ages, and its 2012 questions and answers, adopted by FDA, encourage including patients 75 or older.{{cite:fda-enhancing-2025}} For applications due on or after January 25, 2019, NIH requires the research it funds to include people of all ages unless there is a scientific or ethical reason not to, and to report each participant's age at enrollment.{{cite:nih-lifespan}} CDER's July 2026 guidance agenda lists a planned draft guidance on including older adults in clinical trials generally, beyond cancer.{{cite:cder-agenda-2026}}",
        },
      ],
    },
    {
      id: "eligibility",
      heading: "Which eligibility criteria keep older adults out?",
      blocks: [
        {
          type: "p",
          text: "Some trials still set explicit upper age limits. In interventional studies registered on ClinicalTrials.gov that began enrolling from January 2010 to October 2021, an upper age limit appeared in 32.77% of phase 3 cancer trials, 34.94% of phase 3 cardiovascular trials and 36.75% of phase 3 type 2 diabetes trials, with no significant change after NIH's lifespan policy.{{cite:nguyen-2022}} A narrower review of 742 completed phase 3 cancer trials found upper age limits in 10.1%, with a median cutoff of 72 years, and a falling trend.{{cite:ludmir-2020}}",
        },
        {
          type: "p",
          text: "Indirect exclusions matter as much. Performance-status cutoffs were associated with wider age gaps in the 2019 study.{{cite:ludmir-2019}} FDA's December 2025 guidance names older adults among the groups that template criteria exclude without strong clinical or scientific justification, and says exclusions for comorbidities and concomitant medications should narrow as safety data accumulate.{{cite:fda-enhancing-2025}}",
        },
      ],
    },
    {
      id: "logistics",
      heading: "What gets in the way besides eligibility?",
      blocks: [
        {
          type: "p",
          text: "FDA's 2022 guidance on older adults in cancer trials lists challenges that sponsors can mitigate, particularly for patients 75 and older. It also asks sponsors to seek input on recruitment from geriatricians, geriatric oncologists and patient navigators, and to keep sites updated on how enrollment of older adults is going.{{cite:fda-older-2022}}",
        },
        {
          type: "table",
          caption: "Barriers FDA names for older adults, and practical responses",
          columns: ["Barrier", "Practical response"],
          rows: [
            ["Site location", "Community-based sites, which FDA notes may be more accessible than urban academic centers"],
            ["Format and content of trial information", "Paper and phone options alongside digital materials, in plain language"],
            ["Caregiver support", "Invite a caregiver to calls and visits when the patient wants one"],
            ["Visual, mobility and other impairments", "Large print, accessible rooms, help with forms"],
            ["Travel and logistics", "Transportation, fewer visits, remote monitoring where feasible"],
          ],
          note: "Barriers from FDA's guidance; the responses are our suggestions.{{cite:fda-older-2022}}",
        },
        {
          type: "p",
          text: "FDA's 2025 guidance adds that frequent site visits weigh most on older adults who need transportation or caregiver assistance, and suggests mobile nurses or phlebotomists who visit participants instead.{{cite:fda-enhancing-2025}}",
        },
      ],
    },
    {
      id: "channels",
      heading: "Which outreach channels reach people over 75?",
      blocks: [
        {
          type: "p",
          text: "Plan around the phone. In Pew Research Center's 2025 survey, 95% of adults 65 and older owned a cellphone and 78% a smartphone, while 16% had a cellphone that was not a smartphone. Pew does not break out adults over 75.{{cite:pew-mobile-2025}} Voice calls and plain text messages reach more older patients than apps or portals.",
        },
        {
          type: "p",
          text: "Following up also works. A 2026 Cochrane review of 91 recruitment studies found high-certainty evidence that telephone reminders to people who had not responded to a mailed invitation increased recruitment by 6 percentage points, in trials with low baseline recruitment and participants with a mean age of 58. Optimized information leaflets and pre-invitation letters made little or no difference.{{cite:cochrane-2026}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "How Bond handles this",
          text: "Bond's voice and text agents contact every new lead and keep following up with those who have not responded. Patients are told AI is used and can reach a person at any time through a live transfer to a coordinator or a callback. Reminders go out by text, voice or email, and after enrollment the agents can book transportation.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "what-to-change",
      heading: "What can a site or sponsor change?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Ask the sponsor to justify any upper age limit, which ICH E7 discourages, and any performance-status cutoff.{{cite:fda-enhancing-2025,ludmir-2019}}",
            "Agree on enrollment goals for older adults with the sponsor, as FDA recommends, and report enrollment in bands such as 65 to 74, 75 to 84 and 85 and older.{{cite:fda-older-2022}}",
            "Make the phone the default for outreach and pre-screening, and send printed materials in large type.",
            "Invite a family member or caregiver to the consent conversation when the patient asks for one.",
            "Book midday visits, arrange transportation and combine procedures into fewer visits.",
            "Ask whether follow-up visits can use mobile nurses or phlebotomists at home, which FDA suggests for participants who find site visits hard.{{cite:fda-enhancing-2025}}",
            "Ask whether geriatric assessment elements, such as functional status and cognition, can be collected, as FDA suggests.{{cite:fda-older-2022}}",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does FDA require trials to enroll people over 75?",
      a: "No rule sets a quota. FDA's 2022 cancer guidance recommends including adults 75 and older and discussing enrollment goals with investigators.{{cite:fda-older-2022}} For NIH-funded research, the lifespan policy requires including people of all ages unless there is a scientific or ethical reason not to.{{cite:nih-lifespan}}",
    },
    {
      q: "Do upper age limits still appear in trials?",
      a: "Yes, though less in cancer than in some other areas. One review found limits in about a third of phase 3 trials in cancer, cardiovascular disease and type 2 diabetes that began enrolling from 2010 to 2021.{{cite:nguyen-2022}}",
    },
    {
      q: "Is texting enough to reach older patients?",
      a: "Not on its own. Most adults 65 and older own a smartphone, but 16% have a cellphone that is not a smartphone, so a phone call should be part of the plan.{{cite:pew-mobile-2025}}",
    },
  ],
  sources: [
    {
      id: "fda-older-2022",
      title: "Inclusion of Older Adults in Cancer Clinical Trials: Guidance for Industry",
      publisher: "US Food and Drug Administration (OCE, CBER, CDER)",
      url: "https://www.fda.gov/media/156616/download",
      year: "2022",
      note: "Final guidance, March 2022. Quotes: \"Most cancer trials do not have an upper age limit for exclusion; however, adults 75 years of age and older are underrepresented in cancer clinical trials.\"; \"Possible challenges with recruiting older adults that could be mitigated, particularly among patients 75 years of age and older, include: location of clinical trial sites (e.g., sites in community-based settings may be more accessible to older adults than sites located in urban academic centers), format (e.g. digital) and content of informational material for the trial, caregiver support, accommodations needed for impairment (e.g., visual, mobility, etc.), and travel and other logistics. Where feasible, remote monitoring approaches should be considered.\"; \"Sponsors should discuss specific goals for enrollment of older adults with clinical investigators and keep the clinical trial sites updated on the progress of enrolling older adults in the trial.\"; \"sponsors should consider getting input on trial design, trial conduct and recruitement strategies from geriatricians, geriatric oncologists, social and behavioral scientists with expertise in treating older adults. Additional input from patient advocates/navigators should also be sought.\" (spelling as in source); \"elements from geriatric assessment tools (e.g. functional status, cognitive function)\".",
    },
    {
      id: "talarico-2004",
      title: "Enrollment of elderly patients in clinical trials for cancer drug registration: a 7-year experience by the US Food and Drug Administration",
      publisher: "Journal of Clinical Oncology (Talarico L, Chen G, Pazdur R; FDA)",
      url: "https://pubmed.ncbi.nlm.nih.gov/15542812/",
      year: "2004",
      note: "Registration trials for approvals 1995 to 2002; SEER comparison. Quotes: \"The data on 28,766 cancer patients from 55 registration trials were analyzed\"; \"The proportions of the overall patient populations aged > or = 65, > or = 70, and > or = 75 years were 36%, 20%, and 9% compared with 60%, 46%, and 31%, respectively, in the US cancer population.\"",
    },
    {
      id: "ludmir-2019",
      title: "Factors Associated With Age Disparities Among Cancer Clinical Trial Participants",
      publisher: "JAMA Oncology (Ludmir EB et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31158272/",
      year: "2019",
      note: "Quotes: \"Three hundred two trials met inclusion criteria. The trials collectively enrolled 262 354 participants\"; \"the trial median age of trial participants was a mean of 6.49 years younger than the population median age\"; \"Age disparities were heightened among industry-funded trials compared with non-industry-funded trials (mean DMA, -6.84 vs -4.72 years; P = .002). Enrollment criteria restrictions based on performance status or age cutoffs were associated with age disparities\"; \"a widening gap between trial and population median ages over time at a rate of -0.19 years annually\".",
    },
    {
      id: "ludmir-2020",
      title: "Decreasing incidence of upper age restriction enrollment criteria among cancer clinical trials",
      publisher: "Journal of Geriatric Oncology (Ludmir EB et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/31711757/",
      year: "2020",
      note: "Quote: \"Seven hundred and forty-two trials met inclusion criteria, with a total combined enrollment of 449,720 patients. Upper age restriction enrollment criteria were identified for 10.1% of RCTs; the median age cutoff for restricted trials was 72 years (interquartile range 70-80 years). Linear regression modeling revealed decreasing incidence of age restriction criteria over time\".",
    },
    {
      id: "nguyen-2022",
      title: "Age-based exclusions in clinical trials: A review and new perspectives",
      publisher: "Contemporary Clinical Trials (Nguyen D, Mika G, Ninh A)",
      url: "https://pubmed.ncbi.nlm.nih.gov/35051661/",
      year: "2022",
      note: "ClinicalTrials.gov interventional studies starting January 2010 to October 2021. Quotes: \"Cancer trials have the lowest percentage of age capped enrollment, with 22.18%, 24.13%, and 32.77% of the studies listing an upper age limit in Phases 1, 2, and 3, respectively. In comparison, cardiovascular disease trials are age capped in 51.32%, 39.9%, and 34.94% of trials, and type 2 diabetes capped in 90.3%, 74.42%, and 36.75% of trials\"; \"no significant changes in the percentage of trials with upper age limits pre- and post- NIH Inclusion Across the Lifespan Policy.\"",
    },
    {
      id: "census-older-2023",
      title: "U.S. Older Population Grew From 2010 to 2020 at Fastest Rate Since 1880 to 1890",
      publisher: "US Census Bureau (Zoe Caplan)",
      url: "https://www.census.gov/library/stories/2023/05/2020-census-united-states-older-population-grew.html",
      year: "2023",
      note: "May 25, 2023. Quotes: \"The older population reached 55.8 million or 16.8% of the population of the United States in 2020.\"; \"The 75-to-84 age group grew at about half that rate (25.1%) but is expected to pick up the pace in the next decade as baby boomers age into this group.\"; \"By 2030, all baby boomers will be age 65 and over\".",
    },
    {
      id: "fda-enhancing-2025",
      title: "Enhancing Participation in Clinical Trials — Eligibility Criteria, Enrollment Practices, and Trial Designs: Guidance for Industry (Revision 1)",
      publisher: "US Food and Drug Administration (CDER and CBER)",
      url: "https://www.fda.gov/media/190162/download",
      year: "2025",
      note: "Final guidance, December 2025. Quotes: \"ICH ... issued a guideline titled Studies in Support of Special Populations: Geriatrics E7, which discourages arbitrary maximum age requirements in clinical trial protocols\"; \"In February 2012, an ICH guidance for industry, adopted by FDA, clarifies ICH E7 and encourages the participation of older adults jin clinical trials, especially patients 75 years or older.\" (typo in source); \"sometimes excluding certain populations from trials without strong clinical or scientific justification (e.g., older adults ...)\"; \"As data on excretory and metabolic pathways and drug-drug interactions become available during the drug development program, allowing appropriate dose adjustments, there should be fewer exclusions related to concomitant medications or comorbidities.\"; \"especially older adults, children, disabled and cognitively impaired individuals who require transportation or caregiver assistance\"; \"Consider the use of mobile medical professionals, such as nurses and phlebotomists\".",
    },
    {
      id: "nih-lifespan",
      title: "Inclusion Across the Lifespan in Human Subjects Research",
      publisher: "National Institutes of Health, Grants & Funding",
      url: "https://grants.nih.gov/policy-and-compliance/policy-topics/inclusion/lifespan",
      year: "2019",
      note: "Quotes: \"All human subjects research supported by NIH must include participants of all ages, including children and older adults, unless there are scientific or ethical reasons not to include them.\"; \"The Inclusion Across the Lifespan policy applies to all grant applications submitted for due dates on or after January 25, 2019.\"; \"NIH recipients/offerors must submit individual-level data on participant age at enrollment in Progress Reports.\"",
    },
    {
      id: "cder-agenda-2026",
      title: "CDER Guidance Agenda: New and Revised Draft Guidances Planned for Publication in Calendar Year 2026 (July 2026)",
      publisher: "US Food and Drug Administration, CDER",
      url: "https://www.fda.gov/media/185228/download",
      year: "2026",
      note: "Lists under Clinical/Medical: \"Considerations for the Inclusion of Older Adults in Clinical Trials; Draft Guidance for Industry\". The agenda notes CDER is not bound to issue every listed guidance.",
    },
    {
      id: "pew-mobile-2025",
      title: "Mobile Fact Sheet",
      publisher: "Pew Research Center",
      url: "https://www.pewresearch.org/internet/fact-sheet/mobile/",
      year: "2025",
      note: "Fact sheet dated November 20, 2025; survey of 5,022 US adults, February 5 to June 18, 2025. Ownership by age, 65+: \"Cellphone 99 99 98 95 Smartphone 97 96 90 78 Cellphone, but not a smartphone 2 3 7 16\" (columns 18-29, 30-49, 50-64, 65+).",
    },
    {
      id: "cochrane-2026",
      title: "Strategies to improve recruitment to randomised trials",
      publisher: "Cochrane Database of Systematic Reviews (Parker A et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/42742038/",
      year: "2026",
      note: "Published September 15, 2026; search to February 2023. Quotes: \"We identified 91 eligible studies\"; \"Telephone reminders to people who did not respond to an initial postal invitation boosted recruitment by 6% (95% CI 3% to 9%; 2 studies, 1450 participants), in trials with low underlying recruitment ... The studies involved people with a mean age of 58 years in Canada and Norway.\"; \"Pre-recruitment letters and leaflets designed to encourage participation made little or no difference to recruitment\"; \"Optimising participant information leaflets ... made little or no difference to recruitment\". Effects are reported as risk differences, so the 6% is in percentage points.",
    },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
  ],
  related: [
    { label: "Engage: outreach and booking", href: "/engage", description: "Voice and text pre-screening, scheduling and reminders." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A template for the first call with an interested patient." },
    { label: "Neurology and Alzheimer's recruitment", href: "/neurology-and-alzheimers", description: "Recruitment in conditions that mostly affect older adults." },
    { label: "Inclusion and exclusion criteria", href: "/glossary/inclusion-and-exclusion-criteria", description: "How eligibility criteria are written and applied." },
  ],
};

export default page;
