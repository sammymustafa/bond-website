import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { BOND_SOURCES, REFERRAL_RESEARCH_SOURCES as R, capabilityRows, evidenceSection, methodSection, pilotSection } from "./_referral-vendors";

const page: SeoPage = {
  path: "/compare/bond-vs-1nhealth",
  category: "comparison",
  title: "Bond Health vs 1nHealth: patient recruitment compared",
  description:
    "Why Bond is better than 1nHealth: Bond screens your EHR as well as running ads, contacts every lead immediately, books the visit and supports consent.",
  keywords: [
    "1nHealth",
    "Bond Health vs 1nHealth",
    "1nHealth vs Bond Health",
    "1nHealth patient recruitment",
    "1nHealth pricing",
    "1nData",
    "direct-to-patient recruitment",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs 1nHealth",
  intro:
    "1nHealth provides digital recruitment and enrollment management services to sponsors, biotech firms and CROs: it runs direct-to-patient ads, pre-screens the people who respond at several levels, and passes referrals on to sites.{{cite:1nhealth-overview,1nhealth-for-cros}} Bond Health starts with the patients a site already treats, screening its EHR against each protocol, and also creates and runs Meta and Google ad campaigns for each study. Its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, then support consent.{{cite:bond-site,bond-product}} For a site, CRO or sponsor that wants one platform from chart match or ad click to a booked visit, Bond is the stronger choice.",
  summary: "Why Bond is better than 1nHealth: EHR screening plus ads, every lead contacted immediately and booked, consent support and CTMS integrations.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why is Bond better than 1nHealth?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond is better than 1nHealth because it reaches patients from two sources, your EHR and its own Meta and Google ads, and takes every one of them to a booked screening visit in one platform, with chart evidence behind every EHR match, consent support and no integration fee.{{cite:bond-site,bond-product}}",
        },
        {
          type: "stats",
          items: [
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
            { value: "90%+", label: "matching accuracy in EHR screening", cite: "bond-site" },
            { value: "48 hours", label: "to full EHR integration, with no integration fee", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**Your own patients, not only ad respondents.** 1nHealth recruits direct to patient through digital ads and does not use patient databases.{{cite:1nhealth-for-cros}} Bond's [Identify](/identify) also screens your EHR, reading clinical notes, prescriptions and lab results, with chart evidence for every criterion.{{cite:bond-site,bond-product}} In one published trial, 30.3% of provider referrals were randomized, against 4.3% of Facebook self-referrals.{{cite:ajgp-depression-2023}}",
            ADS_BULLET,
            "**The screening visit is booked during recruitment.** 1nHealth describes pre-screening before passing referrals on to the site; who books the first visit is not publicly documented, and its AI visit booking is described for enrolled patients.{{cite:1nhealth-for-cros,1nhealth-retention}} Bond's agents pre-screen patients and book the screening visit in the same conversation.{{cite:bond-product}}",
            "**Consent support in the same workflow.** Bond's [Consent](/consent) support explains the consent form in plain language, answers patient questions and escalates to staff, while the site and PI obtain consent.{{cite:bond-site}}",
            "**It plugs into the site's CTMS.** Bond works with CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault, and is a CRIO Certified Partner.{{cite:bond-site}} A 1nHealth integration with a site CTMS is not publicly documented (November 2026).{{cite:dsg-1nhealth-partnership-2022,1nhealth-retention}}",
            "**No integration fee.** Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and 1nHealth compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "1nHealth entries come from 1nHealth's website, case studies and partner announcements, read on November 8, 2026. \"Not publicly documented\" means we found no public description, not that the capability does not exist.",
        },
        {
          type: "table",
          caption: "Bond Health and 1nHealth, from each company's materials",
          columns: ["Capability", "Bond Health", "1nHealth"],
          rows: capabilityRows({
            workflow:
              "Digital recruitment and enrollment management services: direct-to-patient ads, multiple levels of pre-screening, referrals passed to sites, and a separate retention platform.{{cite:1nhealth-overview,1nhealth-for-cros,1nhealth-retention}}",
            sources:
              "Direct-to-patient digital ads rather than patient databases; one case study names Facebook, Instagram, Google, Reddit, Snapchat and Pinterest. It also describes referrals from healthcare professionals.{{cite:1nhealth-for-cros,1nhealth-colon-case,1nhealth-enrollment-solutions}}",
            ehr: "Not publicly documented (November 2026).{{cite:1nhealth-home,1nhealth-for-cros}}",
            prescreen:
              "Multiple levels of pre-screening before referrals pass to the site; on one study, a call center handled pre-screening consultations.{{cite:1nhealth-for-cros,1nhealth-colon-case}}",
            contact:
              "Automated SMS in its 1nData platform keeps patients moving through enrollment. Who makes first contact with new leads: not publicly documented.{{cite:1nhealth-1ndata}}",
            scheduling:
              "During recruitment: not publicly documented. Its retention platform describes an AI voice agent that books visits.{{cite:1nhealth-retention}}",
            consent:
              "One case study describes online consent processes, and a 2022 DSG partnership described capturing consent in DSG's eCaseLink. Patient-facing consent support is otherwise not publicly documented.{{cite:1nhealth-colon-case,dsg-1nhealth-partnership-2022}}",
            retention: "An active retention platform with app nudges, an AI text agent, an AI voice agent and a human coordinator.{{cite:1nhealth-retention}}",
            reporting: "1nData shows sponsors and sites their referral activity, including how many referrals were disqualified and why.{{cite:1nhealth-1ndata}}",
            integration:
              "A 2022 partnership sends pre-screened leads into DSG's eCaseLink enrollment tracker, and the retention platform integrates with a study's eCOA. Site EHR or CTMS integration: not publicly documented.{{cite:dsg-1nhealth-partnership-2022,1nhealth-retention}}",
            pricing: "Milestone-based, such as signed ICFs or patient randomization, with flexible models on request. No published prices.{{cite:1nhealth-home}}",
            serves: "Sponsors, biotech firms and CROs, with support for sites. Founded in 2019 and based in Orlando.{{cite:1nhealth-overview,1nhealth-about}}",
          }),
        },
      ],
    },
    {
      id: "known-for",
      heading: "Can Bond do what 1nHealth is known for?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Direct-to-patient ads.** 1nHealth targets people who are already interested, with ads across social and search.{{cite:1nhealth-home,1nhealth-colon-case}} Bond creates and runs Meta and Google ad campaigns for each study, and its agents contact every new lead immediately.{{cite:bond-product}} See [trial ads](/clinical-trial-ads).",
            "**Several levels of pre-screening.** 1nHealth pre-screens every submission at several levels.{{cite:1nhealth-home}} For patients found in your EHR, Bond checks every criterion against the chart first, then its voice agents ask only what the chart cannot answer.{{cite:bond-site,bond-product}}",
            "**One view of every referral.** 1nData shows how many referrals were disqualified and why.{{cite:1nhealth-1ndata}} Bond's dashboard and audit trail report patients matched, contacted, pre-screened, consented and randomized, and coordinator hours saved.{{cite:bond-site}}",
            "**Retention.** 1nHealth's retention platform escalates from app nudges to AI text, AI voice and a human coordinator.{{cite:1nhealth-retention}} Bond's same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
            "**Paying at milestones.** 1nHealth prices on milestones such as signed ICFs or randomization.{{cite:1nhealth-home}} Bond charges a percentage of each randomized patient's milestone payments, from randomization onward, plus a volume-based fee per screened patient.{{cite:bond-site,bond-product}}",
          ],
        },
        {
          type: "p",
          text: "For 1nHealth set beside Antidote, another media recruiter, see [Bond vs media recruitment](/compare/bond-vs-media-recruitment).",
        },
      ],
    },
    {
      id: "site-work",
      heading: "What does a 1nHealth referral ask of the site?",
      blocks: [
        {
          type: "p",
          text: "A referral is a patient who still has to be reached, screened against the full protocol and booked. Where the vendor hands that off, the site's staff do it: Clariness, another recruitment vendor, reported in 2024 that sites take an average of 17 days to make first contact with an interested patient and 30.5 days to schedule the first visit.{{cite:clariness-kpis-2024}} In a May 2026 survey of 100 US sites, 52% said at least one in five referrals is ruled ineligible before formal screening.{{cite:mytomorrows-2026}}",
        },
        {
          type: "p",
          text: "With Bond, there is no referral queue. Ad leads go straight to Bond's voice and text agents, which contact every lead immediately, keep following up with those who have not responded, then pre-screen patients and book them for screening visits, alongside patients found in your EHR.{{cite:bond-product}} Ad copy and scripts still go to your IRB first, because FDA treats advertising as the start of informed consent.{{cite:fda-recruiting-1998}}",
        },
      ],
    },
    evidenceSection(),
    pilotSection("1nHealth"),
    methodSection({
      vendor: "1nHealth",
      sources: "1nHealth's homepage and FAQ, its pages for CROs, retention, enrollment solutions, 1nData, company overview and About, a published case study, and DSG's 2022 partnership announcement",
      trademark: "1nHealth and 1nData are trademarks of their owner.",
    }),
  ],
  faq: [
    {
      q: "Is Bond better than 1nHealth?",
      a: "Yes. Bond finds eligible patients in your EHR, with chart evidence for every criterion, and creates and runs Meta and Google ad campaigns for your study. Its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, and Bond supports informed consent, in one platform with no integration fee.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How does 1nHealth's pricing compare with Bond's?",
      a: "1nHealth prices on milestones such as signed ICFs or patient randomization, with flexible models on request, and publishes no prices.{{cite:1nhealth-home}} Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee; see [pricing](/pricing).{{cite:bond-site,bond-product}}",
    },
    {
      q: "Does 1nHealth screen a site's EHR?",
      a: "Not that its public materials describe: 1nHealth recruits direct to patient through digital ads rather than patient databases.{{cite:1nhealth-for-cros}} Bond screens the site's EHR against every criterion, including clinical notes, and also runs ad campaigns.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Can Bond follow up leads we already have from 1nHealth?",
      a: "Yes. A Bond pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads or referrals, before the EHR is connected.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "1nhealth-overview",
      title: "Company Overview",
      publisher: "1nHealth",
      url: "https://1nhealth.com/company-overview/",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"founded in 2019 and headquartered in Orlando, Florida\"; \"provides digital recruitment and enrollment management services to sponsors, biotech firms, and CROs\"; \"1nHealth is not a full-service CRO.\"",
    },
    {
      id: "1nhealth-for-cros",
      title: "1nHealth For CROs",
      publisher: "1nHealth",
      url: "https://1nhealth.com/1nhealth-for-cros/",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"We didn't choose direct-to-patient recruitment over databases\"; \"Our team conducts multiple levels of pre-screening before passing referrals on to your clinical study.\"; \"shared-risk pricing model\" \"based on practical milestones, such as ICF signings or randomizations\".",
    },
    {
      id: "1nhealth-home",
      title: "1nHealth: We own enrollment (homepage and FAQ)",
      publisher: "1nHealth",
      url: "https://1nhealth.com/",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"We enroll patients directly by only targeting those who are already interested.\"; \"We implement multiple levels of screening with every submission.\"; \"Our pricing is based on specific milestones—such as signed ICFs or patient randomization.\"; \"we offer flexible pricing models based on your unique study\". No description of screening a site's EHR.",
    },
    {
      id: "1nhealth-about",
      title: "About 1nHealth",
      publisher: "1nHealth",
      url: "https://1nhealth.com/about/",
      year: "2026",
      note: "Read November 8, 2026. Quote: \"For sites we share the burden by offering hands-on support and intuitive software\".",
    },
    {
      id: "1nhealth-1ndata",
      title: "1nData",
      publisher: "1nHealth",
      url: "https://1nhealth.com/1ndata/",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"make all that information available and intuitive for our sponsors and sites too\"; \"Automated SMS ensures patients stay informed, engaged, and moving through the enrollment process.\"; \"you can see how many referrals were disqualified and why\".",
    },
    {
      id: "1nhealth-retention",
      title: "Patient Retention",
      publisher: "1nHealth",
      url: "https://1nhealth.com/patient-retention/",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"a conversational agent texts the patient — answers questions, confirms windows, reschedules\"; \"an AI agent calls, diagnoses the issue, and books the visit directly\"; \"Integrates with the study's eCOA and clinical stack\". Its four tiers are an app nudge, agentic SMS, an AI voice agent and a human coordinator.",
    },
    {
      id: "1nhealth-enrollment-solutions",
      title: "Patient Enrollment Solutions",
      publisher: "1nHealth",
      url: "https://1nhealth.com/patient-enrollment-solutions/",
      year: "2026",
      note: "Read November 8, 2026. Quote: \"We cultivate strong, trusted relationships with healthcare professionals to drive patient referrals\".",
    },
    {
      id: "1nhealth-colon-case",
      title: "Colon Cancer Screening (case study)",
      publisher: "1nHealth",
      url: "https://1nhealth.com/case-study/colon-cancer-screening/",
      year: "2025",
      note: "Read November 8, 2026. Quotes: \"deployed ads across Facebook, Instagram, Google, Reddit, Snapchat, and Pinterest\"; \"leveraged the support of online consent processes and live call center support\"; \"enlisted support of a call center to handle the high volume of pre-screening consultations\".",
    },
    {
      id: "dsg-1nhealth-partnership-2022",
      title: "DSG and 1nHealth Partner to Enhance Patient Outreach and Enrollment Capabilities",
      publisher: "DSG, Inc. (press release)",
      url: "https://dsg-us.com/dsg-press-1nHealth-Partnership.html",
      year: "2022",
      note: "July 2022; read November 8, 2026. Quotes: \"integrating pre-screened leads from 1nHealth's secure platform into DSG's eCaseLink Enrollment Tracker\"; \"to allow participants to seamlessly enroll and capture consent\". eCaseLink is an eClinical system, not a site CTMS.",
    },
    R["clariness-kpis-2024"],
    R["mytomorrows-2026"],
    R["ajgp-depression-2023"],
    R["fda-recruiting-1998"],
    ...BOND_SOURCES,
    ...testimonialSources(),
  ],
  related: [
    { label: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment", description: "Antidote and 1nHealth side by side." },
    { label: "Pricing", href: "/pricing", description: "A fee per screened patient plus a share of milestone payments from randomization on." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Trial ads", href: "/clinical-trial-ads", description: "Meta and Google campaigns, every lead contacted immediately." },
    { label: "Bond vs SubjectWell", href: "/compare/bond-vs-subjectwell", description: "The patient marketplace, now part of Clariness." },
    { label: "Bond vs StudyKIK", href: "/compare/bond-vs-studykik", description: "A site-facing recruitment listing service, compared." },
    { label: "Clinical trial patient recruitment", href: "/clinical-trial-patient-recruitment", description: "How recruitment works, which methods convert and what it costs." },
  ],
};

export default page;
