import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";

const page: SeoPage = {
  path: "/compare/bond-vs-media-recruitment",
  category: "comparison",
  title: "Media recruitment vs Bond: ads and EHR in one workflow",
  description:
    "Bond screens your EHR and sets up Meta and Google ad campaigns, then pre-screens, schedules and supports consent in one workflow. Compare Antidote and 1nHealth.",
  keywords: [
    "Antidote alternative",
    "1nHealth alternative",
    "patient recruitment advertising vs EHR screening",
    "cost per enrolled patient clinical trial",
    "Antidote clinical trial recruitment",
    "1nHealth patient recruitment",
    "digital patient recruitment conversion rate",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs media recruitment: Antidote and 1nHealth",
  intro:
    "Media recruiters such as Antidote and 1nHealth find patients through digital marketing, pre-screen the people who respond and refer likely candidates to sites.{{cite:antidote-partners,antidote-sponsors,1nhealth-pharma}} Bond Health [screens the site's EHR](/identify), including clinical notes, against each protocol and sets up Meta and Google ad campaigns to reach patients beyond it; chart matches and ad leads then go to the same voice and text agents for pre-screening and scheduling, and on to informed consent support.{{cite:bond-site,bond-product}} If you want one platform from ad click or chart match to consent, rather than referrals for your staff to follow up, Bond is the stronger choice.",
  summary:
    "Why sites choose Bond's EHR screening, ad campaigns and voice and text agents over media referrals, with published cost and conversion data.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why do sites choose Bond over media recruitment?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "One platform from ad click or chart match to consent: Bond screens your EHR, sets up Meta and Google ad campaigns for your studies, and sends every lead to the same voice and text agents for pre-screening and scheduling, with chart evidence behind every EHR match and pricing tied to randomized patients.{{cite:bond-site,bond-product}}",
        },
        {
          type: "stats",
          items: [
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
            { value: "90%+", label: "matching accuracy in EHR screening", cite: "bond-site" },
            { value: "50%+", label: "less chart review for coordinators", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**EHR screening and ad campaigns in one platform.** Bond starts with the patients the site already treats, screening its EHR against each protocol, and sets up Meta and Google ad campaigns for your studies to reach patients beyond the site's records. Leads from those ads flow straight into Bond's voice and SMS/text agents for pre-screening and scheduling, alongside patients found in your EHR.{{cite:bond-site,bond-product}}",
            "**Eligibility checked in the chart first.** [Identify](/identify) reads clinical notes, prescriptions and lab results, plus imaging data and other unstructured documents, including pathology, radiology and molecular reports, and ranks each match with the evidence for every criterion, for fewer screen failures.{{cite:bond-site,bond-product}}",
            "**Agents that start from the chart.** Bond's voice agents start from what Identify found, so they skip questions the chart already answers, can explain why the patient was contacted, and can pre-screen and book a visit in one conversation, in the patient's language and with a live transfer to your coordinators when the site wants one. Bond reports a 3x contact rate.{{cite:bond-product,bond-site}}",
            "**Every open study at once.** Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**Consent support in the same workflow.** Plain-language explanations, patient Q&A and staff escalation, with 90%+ completion reported for consent support. The site and PI obtain consent ([Consent](/consent)).{{cite:bond-site}}",
            "**Support until close-out.** After enrollment, the same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out, and Bond keeps improving outreach messaging until study close-out.{{cite:bond-product}}",
            "**No integration fee.** A volume-based platform fee plus a success fee per randomized patient, with no integration fee ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
          ],
        },
        ...testimonialBlocks(),
        {
          type: "p",
          text: "As of September 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that reads EHR notes against a protocol, contacts patients by voice and text, and supports informed consent.",
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond, Antidote and 1nHealth compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Competitor entries come from each vendor's public materials, reviewed in September 2026. \"Not publicly documented\" means we found no public description, not that the capability does not exist; ask each vendor directly.",
        },
        {
          type: "table",
          caption: "Bond Health, Antidote and 1nHealth, September 2026",
          columns: ["Capability", "Bond Health", "Antidote", "1nHealth"],
          rows: [
            [
              "One workflow from chart match or ad lead to consent",
              "EHR screening, voice and text outreach, pre-screening, scheduling and consent support in one workflow, with complete visibility from first match to signed consent. Leads from the Meta and Google ad campaigns Bond sets up flow into the same workflow.{{cite:bond-site,bond-product}}",
              "Services \"from initial outreach through to site engagement\".{{cite:antidote-sponsors}}",
              "Digital recruitment and enrollment management services.{{cite:1nhealth-overview}}",
            ],
            [
              "Where patients come from",
              "The site's own EHR, screened by LLM against each protocol, including clinical notes, prescriptions and lab results, plus imaging data and other unstructured documents, such as pathology, radiology and molecular reports. Each patient is screened against every open study at the site, so one who screens out of one study can be matched to another ([Identify](/identify)).{{cite:bond-site,bond-product}} Beyond the site's records, Bond sets up Meta and Google ad campaigns for your studies, and their leads flow straight into the same voice and text pre-screening and scheduling as EHR matches.{{cite:bond-product}}",
              "People reached through digital marketing and a partner network; SEQSTER medical-history matching announced July 2024. Reading a site's clinical notes: not publicly documented (September 2026).{{cite:antidote-partners,antidote-seqster-2024}}",
              "Direct-to-patient digital recruitment rather than patient databases. Reading a site's clinical notes: not publicly documented (September 2026).{{cite:1nhealth-pharma}}",
            ],
            [
              "How eligibility is checked",
              "EHR matches are checked against the chart before anyone contacts them, and ranked matches show the evidence for every criterion. Ad leads are pre-screened by Bond's voice and text agents.{{cite:bond-site,bond-product}}",
              "Prescreens patients before referral, \"all the way down to labs when necessary\".{{cite:antidote-sponsors}}",
              "\"Multiple levels of pre-screening\" before referrals reach sites.{{cite:1nhealth-pharma}}",
            ],
            [
              "Outreach and follow-up",
              "Voice and text agents. Voice agents start from what Identify found, skip questions the chart already answers and can explain why the patient was contacted. They speak the patient's language, with mid-call switching, and transfer live to a coordinator or book a callback, as the site prefers. Bond reports a 3x contact rate ([Engage](/engage)).{{cite:bond-product,bond-site}}",
              "A contact center for patient support.{{cite:antidote-seqster-2024}}",
              "Automated SMS follow-ups and email notifications in its 1nData platform.{{cite:1nhealth-pharma,1nhealth-home}}",
            ],
            [
              "Scheduling",
              "Voice agents can pre-screen and book a visit in one conversation, with a scheduling handoff to coordinators.{{cite:bond-product,bond-site}}",
              "Not publicly documented (September 2026).{{cite:antidote-sponsors}}",
              "Not publicly documented (September 2026).{{cite:1nhealth-home,1nhealth-pharma}}",
            ],
            [
              "Informed consent",
              "AI-powered consent support: plain-language explanations, patient Q&A, checks on understanding of key points and staff escalation, with 90%+ completion and an auditable record for the site. The site and PI obtain consent ([Consent](/consent)).{{cite:bond-site,bond-product}}",
              "Not publicly documented (September 2026).{{cite:antidote-sponsors}}",
              "Not publicly documented (September 2026).{{cite:1nhealth-home}}",
            ],
            [
              "Support after enrollment",
              "The same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
              "Not publicly documented (September 2026).{{cite:antidote-sponsors}}",
              "Retention strategies tailored to each trial and patient population.{{cite:1nhealth-home}}",
            ],
            [
              "EHR, CTMS and CRIO integration",
              "All the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, via FHIR and HL7 or an aggregator; direct integrations with CTMS, calendars and Google Sheets; CRIO Certified Partner.{{cite:bond-site,bond-product,bond-acrp-talk}}",
              "EHR matching product announced in 2016; 2024 partner SEQSTER cites nationwide EHR coverage. Site EHR or CTMS integration: not publicly documented (September 2026).{{cite:antidote-2016,antidote-seqster-2024,antidote-sponsors}}",
              "Not publicly documented (September 2026).{{cite:1nhealth-home}}",
            ],
            [
              "Pricing",
              "A volume-based platform fee plus a success fee per randomized patient, with no integration fee ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
              "Risk-sharing payment model.{{cite:antidote-sponsors}}",
              "Milestones such as signed ICFs or randomization, with flexible models on request.{{cite:1nhealth-home}}",
            ],
            [
              "Who it serves",
              "Research sites, plus CROs that want consistent metrics across sites and sponsors that want faster enrollment timelines.{{cite:bond-site}}",
              "Sponsors; patient organizations host its trial search at no cost.{{cite:antidote-sponsors,antidote-partners,antidote-seqster-2024}}",
              "Sponsors, biotech firms and CROs; research sites use its 1nData platform.{{cite:1nhealth-overview,1nhealth-home}}",
            ],
          ],
        },
      ],
    },
    {
      id: "known-for",
      heading: "Can Bond do what media recruiters are known for?",
      blocks: [
        {
          type: "p",
          text: "Antidote and 1nHealth promote several strengths on their own sites. Here is how Bond covers each one.",
        },
        {
          type: "ul",
          items: [
            "**Reaching patients through digital marketing.** Antidote connects patients with research through digital marketing and its partner network, and 1nHealth recruits direct to patient.{{cite:antidote-partners,1nhealth-pharma}} Bond sets up Meta and Google ad campaigns for your studies, and leads from those ads flow straight into its voice and SMS/text agents for pre-screening and scheduling, alongside patients found in your EHR. Bond keeps improving outreach messaging until study close-out.{{cite:bond-product}}",
            "**Pre-screening before the site gets involved.** Antidote says it prescreens patients before referring them, and 1nHealth describes multiple levels of pre-screening.{{cite:antidote-sponsors,1nhealth-pharma}} For patients found in your EHR, Bond checks every criterion against the chart first; its voice agents then skip questions the chart already answers and can pre-screen and book a visit in one conversation.{{cite:bond-site,bond-product}}",
            "**Patient conversations and support.** Antidote describes a contact center for patient support, and 1nHealth sends automated SMS follow-ups.{{cite:antidote-seqster-2024,1nhealth-pharma}} Bond's voice and text agents tell patients that AI is used, and patients can reach a person at any time, by live transfer to a coordinator or a callback, as the site prefers. Conversations and consent Q&A run in the patient's preferred language, including English, Spanish and Mandarin, with mid-call switching.{{cite:bond-site,bond-product}}",
            "**One place to track enrollment.** 1nHealth puts its 1nData tools in a single login.{{cite:1nhealth-pharma}} Bond's real-time dashboard and audit trail report patients matched, contacted, pre-screened, consented and randomized, along with time to enrollment and coordinator hours saved.{{cite:bond-site}}",
            "**Keeping participants engaged.** 1nHealth says its retention strategies are tailored to each trial and patient population.{{cite:1nhealth-home}} After enrollment, Bond's same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out, and reminders can also go by email.{{cite:bond-product}}",
            "**Paying for results.** Antidote describes a risk-sharing payment model, and 1nHealth prices by milestones such as signed ICFs or randomization.{{cite:antidote-sponsors,1nhealth-home}} Bond charges its success fee per randomized patient, on top of a volume-based platform fee, and charges no integration fee.{{cite:bond-site,bond-product}}",
            "**Many therapeutic areas.** Both list a range of areas, including dermatology and immunology.{{cite:antidote-sponsors,1nhealth-pharma}} Bond's screening is configured from each protocol's own criteria, so it works for drug and device studies alike.{{cite:bond-product}}",
          ],
        },
      ],
    },
    {
      id: "cost-and-conversion",
      heading: "What does published research show about ad-driven cost and conversion?",
      blocks: [
        {
          type: "p",
          text: "In a 2023 late-life depression trial, provider referrals converted to randomization at 30.3%, against 4.3% for Facebook self-referrals.{{cite:ajgp-depression-2023}} A 2020 meta-analysis found that offline recruitment turned screened people into enrollees at a higher rate than online recruitment, and its authors suggest this could be because sites already hold health records of suitable patients.{{cite:jmir-online-2020}} Both findings favor starting from patients already known to their care team or site. Bond starts there, with the site's own EHR, and sets up Meta and Google ad campaigns to fill the gaps.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "Ads also take most of the outreach budget. In a 2026 Tufts CSDD study of 32 studies from eight sponsors and CROs, social media, including Facebook, Instagram and Google ads, averaged 64.7% of centralized patient-outreach budgets.{{cite:tufts-outreach-2026}} The figures below describe ad-driven and online recruitment in general, not Antidote or 1nHealth, and settings vary widely.",
        },
        {
          type: "table",
          caption: "Published cost and conversion figures for online and ad-driven recruitment",
          columns: ["Study and setting", "What was measured", "Result"],
          rows: [
            [
              "Late-life depression drug trial, 2023",
              "Referral to randomization",
              "Provider referrals 30.3% (10 of 33) vs Facebook 4.3% (14 of 323); US$956 in Facebook ads per enrollee{{cite:ajgp-depression-2023}}",
            ],
            [
              "Meta-analysis, 2020: online vs offline recruitment",
              "Screened to enrolled",
              "Offline converted better (risk ratio 0.8); the authors suggest sites' existing health records of suitable patients as a possible reason{{cite:jmir-online-2020}}",
            ],
            [
              "Same meta-analysis: 13 studies with cost data",
              "Cost per enrolled participant",
              "Median $72 online vs $199 offline, significantly lower online; 4 of 13 studies found online less cost-effective{{cite:jmir-online-2020}}",
            ],
            [
              "Tufts CSDD, 2026: 32 studies from eight sponsors and CROs",
              "Centralized outreach cost per patient (the abstract does not define \"patient\")",
              "Median $143 (vaccines) to $11,392 (immunology){{cite:tufts-outreach-2026}}",
            ],
            [
              "Facebook review, 2017: 35 recruitment-feasibility studies in health research, mostly ages 16 to 24",
              "Ad click to recruited participant",
              "Median 4% conversion; $14.41 per recruited participant{{cite:jmir-facebook-2017}}",
            ],
            [
              "Actinic keratosis Phase I/IIa trial, one site, 2023 (vendor co-authors)",
              "Full funnel",
              "27,814 clicks, 556 reviewed online, 90 screened in clinic, 60 randomized; $238 per randomized patient{{cite:ccct-ak-2023}}",
            ],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "What ad cost figures leave out",
          text: "Most of these cost figures count ad or outreach spend and leave out the staff time spent contacting and screening self-referrals. The depression trial's US$956 per enrollee covers the Facebook ads alone, not the research staff time needed to contact and screen.{{cite:ajgp-depression-2023}} With Bond, leads from the Meta and Google ad campaigns it sets up go straight to its voice and SMS/text agents, which handle outreach, pre-screening and the scheduling handoff, as they do for patients found in your EHR.{{cite:bond-product,bond-site}}",
        },
      ],
    },
    {
      id: "site-work",
      heading: "What does a media referral ask of the site?",
      blocks: [
        {
          type: "p",
          text: "Each referral still has to be reached, confirmed and booked, and unless the vendor handles those steps, the work falls to site staff. Clariness, a recruitment vendor, reported in 2024 from its global data that sites take an average of 17 days to first contact a patient who has expressed interest and 30.5 days to schedule the first visit.{{cite:clariness-kpis-2024}} In a May 2026 myTomorrows survey of 100 US site staff, 52% said at least one in five referrals is ruled ineligible before formal screening; the survey does not break referrals down by source.{{cite:mytomorrows-2026}}",
        },
        {
          type: "p",
          text: "Bond moves that work earlier and hands much of it to its agents. Leads from the Meta and Google ad campaigns Bond sets up flow straight into its voice and SMS/text agents for pre-screening and scheduling, alongside patients found in your EHR, instead of arriving at the site as referrals.{{cite:bond-product}} Each EHR match arrives with its chart evidence, and Bond's voice agents can pre-screen and book a visit in one conversation, with a human callback whenever a patient asks for one.{{cite:bond-site,bond-product}} An SCRS article notes that coordinators already juggle upwards of 22 logins for a single study; Bond puts EHR screening, patient outreach and consent tracking in one workflow instead of three vendors.{{cite:scrs-landscape-2025,bond-site}}",
        },
        {
          type: "p",
          text: "Bond signs a [business associate agreement](/glossary/baa), and its implementation team handles the EHR integration end to end, with no integration fee; full integration takes 4 to 6 weeks, depending on the EHR, IT review and interface method.{{cite:bond-site,bond-product}} Bond is HIPAA compliant and SOC 2 Type I compliant, and its public [Trust Center](https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj) lists 73 HIPAA Security Rule controls, monitored continuously by Vanta.{{cite:bond-product,bond-trust-center}} See [security](/security), and the [outreach guide](/guides/irb-hipaa-patient-outreach) for IRB and privacy review of outreach.",
        },
      ],
    },
    {
      id: "beyond-your-records",
      heading: "What if your study needs patients beyond your records?",
      blocks: [
        {
          type: "p",
          text: "Some studies need patients outside the site's records, for example in a rare disease, where patients and caregivers seek out studies online, or where a site has no patients for the indication.{{cite:scrs-landscape-2025}} Bond sets up Meta and Google ad campaigns for those studies itself, and leads from those ads flow straight into its voice and SMS/text agents for pre-screening and scheduling, alongside patients found in your EHR.{{cite:bond-product}} Like any recruitment material, ad copy needs IRB review before it runs.{{cite:fda-recruiting-1998}} If you already have leads from a media vendor, a pilot can run outreach, pre-screening and scheduling on that list too.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "test-on-your-data",
      heading: "How can you test Bond against media recruitment on your own data?",
      blocks: [
        {
          type: "p",
          text: "Bond welcomes a head-to-head pilot. Run it on the same protocol and the same lead list, then compare evidence quality, contact rate, time to first visit and cost per randomized patient.",
        },
        {
          type: "steps",
          items: [
            { title: "Pick one protocol", text: "Choose a study your media vendor is already recruiting for, so both sources work the same criteria." },
            { title: "Screen your EHR with Bond", text: "Identify ranks matches with chart evidence for each criterion. Have coordinators adjudicate a sample, including borderline cases, under a BAA." },
            { title: "Give Bond's agents part of the same leads", text: "A pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads. Compare contact rate and time to first visit against your usual follow-up.{{cite:bond-site}}" },
            { title: "Track every source to randomization", text: "Record referrals, first contact, screening visits, screen failures and randomizations by source. In trials that combined social media with traditional recruitment, social media's share of enrollees ranged from 0% to 49%, so the mix is worth measuring.{{cite:jmir-social-2020}}" },
            { title: "Compare cost per randomized patient", text: "Add ad spend, vendor fees and coordinator hours, then divide by randomizations. Bond's dashboard reports coordinator hours saved.{{cite:bond-site}}" },
            { title: "Check the paperwork", text: "FDA guidance treats recruitment ads as the start of informed consent and expects the IRB to approve them. Confirm IRB review of ads and outreach scripts, who holds prescreening data, and audit logs.{{cite:fda-recruiting-1998}}" },
          ],
        },
        {
          type: "p",
          text: "Ask for Bond's technical report, available on request, which reports benchmark results on public datasets, including 0.9312 micro F1 on the held-out n2c2 2018 cohort-selection benchmark.{{cite:bond-whitepaper}} The [vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) turns these steps into questions, and the [recruitment software comparison](/compare/clinical-trial-recruitment-software) covers other tools.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol. We will show how Bond screens its hardest criteria, the chart evidence behind each decision, and how its agents pre-screen and schedule patients.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
    {
      id: "how-made",
      heading: "How was this comparison made?",
      blocks: [
        {
          type: "p",
          text: "Bond Health, which sells recruitment software covering EHR screening, ad campaigns and patient outreach and competes with the vendors named, wrote this page in September 2026. Competitor information comes from the vendors' public websites and press releases, accessed that month. Cost, conversion and workload figures come from peer-reviewed studies, a Tufts CSDD analysis, FDA guidance, an SCRS article and data published by recruitment vendors. Bond's capabilities come from its website, its April 2026 ACRP chapter presentation, its Trust Center, its technical report and product information provided by Bond. Vendor figures are self-reported and were not independently checked. We used no internal competitive material.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, whether you are a reader or one of the companies named, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond a good alternative to Antidote or 1nHealth?",
      a: "Yes. Bond gives a site one platform from ad click or chart match to consent. It finds eligible patients in the site's EHR, including clinical notes, and sets up Meta and Google ad campaigns for your studies; its voice and text agents then pre-screen and schedule patients from both, and Bond supports informed consent, with pricing tied to randomized patients.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Does Bond run ad campaigns?",
      a: "Yes. Bond sets up Meta and Google ad campaigns for your studies, and leads from those ads flow straight into Bond's voice and SMS/text agents for pre-screening and scheduling, alongside patients found in your EHR.{{cite:bond-product}} Like any recruitment material, ad copy needs IRB review before it runs: FDA treats recruitment ads as the start of informed consent and expects the IRB to review and approve them.{{cite:fda-recruiting-1998}}",
    },
    {
      q: "Can Bond pre-screen leads from our media vendor?",
      a: "Yes. A pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads, referrals or registry contacts. Patients are told AI is used and can reach a person at any time, by live transfer to a coordinator or a callback, as the site prefers.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How does the cost model differ?",
      a: "Antidote describes a risk-sharing payment model, and 1nHealth prices by milestones such as signed ICFs or randomization, with flexible models on request.{{cite:antidote-sponsors,1nhealth-home}} Bond charges a volume-based platform fee plus a success fee for each patient randomized into your study, with no integration fee.{{cite:bond-site,bond-product}} See [pricing](/pricing) for how the fees work.",
    },
    {
      q: "Does Antidote or 1nHealth support informed consent?",
      a: "Consent support is not publicly documented for either vendor as of September 2026.{{cite:antidote-sponsors,1nhealth-home}} Bond's consent support gives patients plain-language explanations and Q&A, checks their understanding of key points and escalates to staff, with 90%+ completion; the site and PI obtain consent.{{cite:bond-site,bond-product}}",
    },
  ],
  sources: [
    {
      id: "antidote-partners",
      title: "Partner with Antidote",
      publisher: "Antidote Technologies",
      url: "https://www.antidote.me/partners",
      year: "2026",
      note: "Accessed September 2026. Quote: \"A precision recruitment company that connects patients with research and educational resources through digital marketing and our partner network.\" For partners: \"Receive free, dynamic content for your site that requires no expertise to install or use\".",
    },
    {
      id: "antidote-sponsors",
      title: "Antidote for Sponsors",
      publisher: "Antidote Technologies",
      url: "https://www.antidote.me/sponsors",
      year: "2026",
      note: "Accessed September 2026. Quotes: \"We thoroughly prescreen patients before referring them\" and \"all the way down to labs when necessary\"; \"We offer services from initial outreach through to site engagement\"; \"Our payment model is a risk-sharing one that aligns your objectives\". Under the heading \"Recent therapeutic areas of focus\" it lists areas including \"Allergy and Immunology\", \"Cardiology\", \"Dermatology\" and \"Rare disease\".",
    },
    {
      id: "antidote-seqster-2024",
      title: "Antidote Partners with SEQSTER to Accelerate Patient Identification & Enrollment for Clinical Trials",
      publisher: "SEQSTER PDM Inc. and Antidote Technologies via Business Wire (BioSpace)",
      url: "https://www.biospace.com/antidote-partners-with-seqster-to-accelerate-patient-identification-enrollment-for-clinical-trials",
      year: "2024",
      note: "Press release dated July 8, 2024, accessed September 2026. Quote: \"Antidote can more accurately match patients to clinical trials based on a 360° view of their medical history, genomic data, and lifestyle factors.\" Also: \"contact center for patient support\"; Antidote provides \"patient-centric clinical search technology\" to \"patient advocacy groups and research foundations at no cost\"; and \"SEQSTER has nationwide coverage of EHRs from hospitals and medical groups, genomic DNA, wearables, pharmacy and social determinants of health data.\"",
    },
    {
      id: "antidote-2016",
      title: "TrialReach Rebrands as Antidote and Expands its Products to Include EHR Matching",
      publisher: "Antidote Technologies (press release)",
      url: "https://www.antidote.me/press/press-release/trialreach-rebrands-as-antidote-and-expands-its-products-to-include-ehr-matching",
      year: "2016",
      note: "Press release dated September 20, 2016, accessed September 2026. The title announces EHR matching; the body says: \"Antidote will be announcing details of their new EHR product shortly.\"",
    },
    {
      id: "1nhealth-overview",
      title: "Company Overview",
      publisher: "1nHealth",
      url: "https://1nhealth.com/company-overview/",
      year: "2026",
      note: "Accessed September 2026. Quote: \"The company provides digital recruitment and enrollment management services to sponsors, biotech firms, and CROs.\"",
    },
    {
      id: "1nhealth-home",
      title: "1nHealth: We own enrollment (homepage and FAQ)",
      publisher: "1nHealth",
      url: "https://1nhealth.com/",
      year: "2026",
      note: "Accessed September 2026. Quotes: \"Our pricing is based on specific milestones\" and \"such as signed ICFs or patient randomization.\" Also: \"if milestone-pricing doesn't work for you, we offer flexible pricing models based on your unique study.\" On retention: \"Our retention strategies are tailored to each trial and patient population\". 1nData features listed include \"Automated SMS\" and \"Email Notifications\", and the page refers to \"Research sites using 1nData\". Site navigation includes pages for Biotech, CROs, Pharma and Sites.",
    },
    {
      id: "1nhealth-pharma",
      title: "Patient Recruitment For Pharma",
      publisher: "1nHealth",
      url: "https://1nhealth.com/patient-recruitment-for-pharma/",
      year: "2026",
      note: "Accessed September 2026. Quotes: \"Our team conducts multiple levels of pre-screening before passing referrals on to your clinical sites.\"; \"We didn't choose direct-to-patient recruitment over databases because we wanted to be different. We did it because it works.\"; 1nData offers \"automated SMS follow-ups, and more all in an intuitive, single login interface.\" Therapeutic areas listed: \"Cardiovascular, Gastrointestinal, Neurological, Infectious Diseases, Dermatology, Immunology, Pulmonary, Oncology\".",
    },
    {
      id: "tufts-outreach-2026",
      title: "Measuring Centralized Patient Outreach Recruitment Strategies and their Costs in Clinical Trials",
      publisher: "Kim JY, Lamberti MJ, Do H (Tufts CSDD). Therapeutic Innovation & Regulatory Science 2026;60(5):1344-1351",
      url: "https://pubmed.ncbi.nlm.nih.gov/42360616/",
      year: "2026",
      note: "Epub June 26, 2026; doi:10.1007/s43441-026-00991-3. Data from eight sponsor and CRO organizations covering 32 studies. Quote: \"Across six therapeutic areas, the median budget for centralized patient outreach recruitment was $1,334,821.00. Social media, which included Facebook ads, Instagram, and Google ads was widely used across all studies, with an average allocation of 64.7% of the total centralized patient outreach recruitment budget. The median centralized outreach recruitment cost-per-patient ranged from $143 in vaccine studies to $11,392 in immunology studies.\"",
    },
    {
      id: "jmir-online-2020",
      title: "Online Patient Recruitment in Clinical Trials: Systematic Review and Meta-Analysis",
      publisher: "Brøgger-Mikkelsen M, et al. Journal of Medical Internet Research 2020;22(11):e22179",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7673977/",
      year: "2020",
      note: "Abstract: \"online recruitment had a significantly lower cost per enrollee compared with offline recruitment (US $72 vs US $199, P=.04)\". Quote: \"The median cost per enrollee for online recruitment strategies was US $72 (range US $3.9-251.2), while the median cost per enrollee for offline recruitment strategies was US $199 (range US $19.1-839.0).\" And: \"Offline conversion rates were found to be significantly higher than online conversion rates ( P= .02), as originally hypothesized. This could be due to sites having existing health records of suited patients for specific studies.\" Also: \"Of the 23 articles included for the meta-analyses, 13 studies reported data on the cost per enrolled participant\"; \"In total, 4 out of the 13 included studies reported online recruitment to be less cost-effective compared with offline recruitment\"; conversion \"(RR 0.8, 95% CI 0.67-0.96, P=.02)\". Costs adjusted to US$ at 2020 exchange rates.",
    },
    {
      id: "jmir-facebook-2017",
      title: "The Use of Facebook in Recruiting Participants for Health Research Purposes: A Systematic Review",
      publisher: "Whitaker C, Stevelink S, Fear N. Journal of Medical Internet Research 2017;19(8):e290",
      url: "https://pubmed.ncbi.nlm.nih.gov/28851679/",
      year: "2017",
      note: "Quote: \"Information from the 35 studies was analyzed with median values being 264 recruited participants, a 3-month recruitment period, 3.3 million impressions, cost per click of US $0.51, conversion rate of 4% (range 0.06-29.50), eligibility of 61% (range 17-100), and cost per participant of US $14.41.\" Also: \"All focused on the feasibility of recruitment via Facebook\" and \"Most recruited young age groups (16-24 years)\".",
    },
    {
      id: "ajgp-depression-2023",
      title: "Recruiting for a Randomized Clinical Trial for Late-Life Depression During COVID-19: Outcomes of Provider Referrals Versus Facebook Self-Referrals",
      publisher: "Ainsworth NJ, et al. American Journal of Geriatric Psychiatry 2023;31(5):366-371",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9893767/",
      year: "2023",
      note: "Quote: \"Provider referrals had a significantly higher yield (10 of 33 referrals; 30.3%) versus Facebook self-referrals (14 of 323; 4.3%) (p <0.00001).\" And: \"we estimate that enrolling one participant via online referrals had a direct cost of $956 USD per enrolled participant; this cost is only for the Facebook ads and does not include the cost of research staff time needed to contact and screen\".",
    },
    {
      id: "ccct-ak-2023",
      title: "Accelerating patient recruitment using social media: Early adopter experience from a good clinical practice-monitored randomized controlled phase I/IIa clinical trial on actinic keratosis",
      publisher: "Ortner VK, et al. Contemporary Clinical Trials Communications 2023;37:101245",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10792556/",
      year: "2023",
      note: "Single-center trial in Copenhagen; several co-authors are from a digital recruitment company. Quote: \"generated 27,814 clicks. A total of 556 users underwent eligibility review, leading to 140 pre-evaluated potential study subjects. The RCT's enrollment target of 60 patients (68.8 ± 7.1 years, 43.3 % female) was reached in 53 days after screening 90 participants in-clinic, corresponding to a screen failure rate of 33.3 %. The total cost of this online recruitment campaign was 14,285 USD i.e. 238 USD per randomized patient.\"",
    },
    {
      id: "jmir-social-2020",
      title: "The Role of Social Media in Enhancing Clinical Trial Recruitment: Scoping Review",
      publisher: "Darmawan I, et al. Journal of Medical Internet Research 2020;22(10):e22810",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7652693/",
      year: "2020",
      note: "Scoping review of trials that combined social media with traditional recruitment. Quote: \"A total of 17 studies reported enrollment outcomes, of which 9 achieved or exceeded their enrollment target. The proportion of participants enrolled from social media in these studies ranged from 0% to 49%.\"",
    },
    {
      id: "clariness-kpis-2024",
      title: "The 3 KPIs to follow for clinical trial site success",
      publisher: "Clariness",
      url: "https://clariness.com/insights/the-3-kpis-to-follow-for-clinical-trial-site-success/",
      year: "2024",
      note: "Vendor blog dated May 29, 2024, based on Clariness's global site experience. Quotes: \"Our data shows that on average, it takes sites 17 days to make first patient contact.\" and \"sites take an average of 30.5 days to schedule the first visit of a patient.\"",
    },
    {
      id: "mytomorrows-2026",
      title: "The Referral Readiness Gap: What 100 U.S. Clinical Trial Sites Told Us About Referral Quality",
      publisher: "myTomorrows",
      url: "https://mytomorrows.com/blog/healthcare-professionals/the-referral-readiness-gap-what-100-u-s-clinical-trial-sites-told-us-about-referral-quality/",
      year: "2026",
      note: "Vendor-sponsored survey of 100 US site professionals, fielded May 2026, published July 14, 2026; the post does not break referrals down by source. Quote: \"In our survey, 52% of sites said at least one in five referrals are ruled ineligible before formal screening even begins\".",
    },
    {
      id: "scrs-landscape-2025",
      title: "Navigating the Patient Recruitment Landscape: A Framework for Sites, Sponsors, and CROs",
      publisher: "Society for Clinical Research Sites (SCRS) InFocus",
      url: "https://myscrs.org/resources/patient-recruitment-landscape/",
      year: "2025",
      note: "Published October 22, 2025; authors are from a recruitment vendor. Quote: \"in general, the greater the disease prevalence and patient ability to self-qualify, the more likely direct-to-patient outreach is to be successful. The exceptions are conditions where a clinical trial is the only care option (e.g., rare disease). In this case, patients or their caregivers actively seek studies online and will travel vast distances to participate.\" Also: \"Coordinators already juggle several systems with upwards of 22 logins for a single study\".",
    },
    {
      id: "fda-recruiting-1998",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Guidance dated January 1998, accessed September 2026. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process. Advertisements should be reviewed and approved by the IRB as part of the package for initial review.\" Also: \"Are the data gathered by a marketing company? If so, are names, etc. sold to others? Are names of non-eligibles maintained in case they would qualify for another study?\"",
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
    {
      id: "bond-acrp-talk",
      title: "Modernizing Patient Recruitment: AI Tools, Workflows, and Outcomes",
      publisher: "Bond Health presentation to the ACRP New Jersey chapter (Goel R, Mustafa S)",
      year: "2026",
      note: "April 2026. Slides state \"1,000 patients screened in <2 hours\", \"Direct integrations with Google Sheets, CTMS, and Calendars\" and \"Flexible knowledge base for Voice Agents\".",
    },
    {
      id: "bond-trust-center",
      title: "Bond Health Trust Center",
      publisher: "Bond Health, monitored by Vanta",
      url: "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj",
      year: "2026",
      note: "Lists 73 HIPAA Security Rule controls: infrastructure security (20), organizational security (14), internal security procedures (38), and data and privacy (1), monitored continuously by Vanta. Viewed September 23, 2026.",
    },
    {
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request.",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "Recruitment software compared", href: "/compare/clinical-trial-recruitment-software", description: "The wider category, vendor by vendor." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a volume-based platform fee plus a success fee per randomized patient." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and explains each match." },
    { label: "Engage: voice and text agents", href: "/engage", description: "Outreach, pre-screening and scheduling by voice and text." },
    { label: "All comparisons", href: "/compare", description: "Every comparison page, grouped by the kind of tool." },
  ],
};

export default page;
