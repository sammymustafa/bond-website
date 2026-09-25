import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/for/physician-groups",
  category: "audience",
  title: "Physician practice clinical research recruitment via the EHR",
  description:
    "How community and specialty practices find trial candidates in their own EHR, reach them outside the visit, and spend PI hours only where needed, with Bond.",
  keywords: [
    "physician practice clinical research recruitment",
    "clinical trials in private practice",
    "EHR patient identification for clinical trials",
    "physician as principal investigator",
    "athenahealth clinical trial recruitment",
    "eClinicalWorks clinical trial recruitment",
  ],
  eyebrow: "For physician groups",
  h1: "Recruit for your studies from your own patient panel",
  intro:
    "Bond Health reads your group's own EHR records against a study's criteria, contacts likely candidates by phone and text, and supports the consent conversation, so your staff spend less of the day on first-pass chart review, first calls and scheduling. You still need a PI and a coordinator, even part time.",
  summary: "How a community or specialty practice runs studies from its own patient panel while protecting clinic time and PI hours.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-it-is-hard",
      heading: "Why is research hard to fit into a physician practice?",
      blocks: [
        {
          type: "p",
          text: "For most physicians who do research, it is a side job. In a 2022 national survey, 14% of US physicians reported research engagement, and 83.6% of them spent 10% or less of their weekly hours on it. More than a third of them (37.6%) had no academic affiliation.{{cite:aamc-research}}",
        },
        {
          type: "p",
          text: "Many primary care physicians who would refer patients to trials never have. In a March 2026 Harris Poll of 503 US primary care physicians, 86% said they were likely to refer patients to trials, but only 37% had ever done so. Three in four (76%) did not feel well-equipped to support referrals, and 42% discussed trials only when the patient raised them.{{cite:pan-pcp-2026}}",
        },
        {
          type: "p",
          text: "Practices that run their own studies also have trouble finding patients. In WCG's 2025 survey of 611 sites, mostly in the US, 32% of smaller sites, a group WCG says includes independent sites and physician practices, named recruitment and retention a top challenge. WCG says this can stem from more limited resources and smaller patient databases.{{cite:wcg-2025}}",
        },
      ],
    },
    {
      id: "what-you-have",
      heading: "What does a practice already have that recruitment needs?",
      blocks: [
        {
          type: "p",
          text: "Two things: patients who trust their own doctor, and faster study start-up than hospitals and health systems report. What is often missing is the invitation.",
        },
        {
          type: "stats",
          items: [
            { value: "37%", label: "of US adults said they would be very likely to join a trial if their doctor recommended it (2017)", cite: "research-america-2017" },
            { value: "47%", label: "of US adults invited to a trial took part, though only 9% had ever been invited (2020)", cite: "hints-2021" },
            { value: "71%", label: "of US adults with a chronic condition say they would likely take part if given the chance; 64% say their provider never discussed trials (2026)", cite: "pan-patients-2026" },
            { value: "54%", label: "of independent sites and physician practices say they can start a study in under 60 days, vs 9% of academic centers, hospitals, health systems and site networks (2025)", cite: "wcg-2025" },
          ],
        },
      ],
    },
    {
      id: "day-to-day",
      heading: "What changes day to day with Bond?",
      blocks: [
        {
          type: "p",
          text: "Bond runs three stages in one workflow. Your PI and coordinator keep every decision that needs a clinician.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Identify candidates in your own panel",
              text: "[Identify](/identify) reads structured fields and clinical notes against the study's inclusion and exclusion criteria, ranks likely candidates and shows the chart evidence for each criterion. Your coordinator reviews a short list instead of opening charts one by one.{{cite:bond-site}}",
            },
            {
              title: "Reach patients outside the visit",
              text: "[Engage](/engage) calls and texts candidates with scripts configured for your practice and study, asks pre-screening questions and books screening visits on your calendar. Patients are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers. Clinical questions go to your coordinator.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Support the consent conversation",
              text: "[Consent](/consent) explains the study in plain language, answers questions and escalates to staff.{{cite:bond-site}}",
            },
          ],
        },
        {
          type: "p",
          text: "**Partners' patients are in scope.** Bond can screen the whole group's panel, so a partner's patient who fits one of your studies is flagged for your own study team. If partners want to approve outreach to their patients, your coordinator can share the ranked list with them before anyone is contacted. **Visits stay clinical.** The first conversation about a study can happen by phone or text instead of in a routine visit. The [outreach guide](/guides/irb-hipaa-patient-outreach) covers the HIPAA and IRB paths for contacting patients of physicians outside the study team.",
        },
        {
          type: "p",
          text: "When a study needs more patients than the group's panel holds, Bond sets up Meta and Google ad campaigns for it.{{cite:bond-product}} Leads from those ads flow straight into Bond's voice and text agents for pre-screening and scheduling, alongside patients found in your EHR.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "physician-as-pi",
      heading: "How does Bond fit a physician-as-PI model?",
      blocks: [
        {
          type: "p",
          text: "Most research-active physicians give research only a small share of their week, so PI hours are scarce.{{cite:aamc-research}} Plan to spend them only where a physician's judgment is needed.",
        },
        {
          type: "ul",
          items: [
            "**Before go-live**, the PI settles ambiguous criteria, and the coordinator should check a sample of matches against your own charts. See [validating eligibility logic before go-live](/blog/validating-eligibility-logic-before-go-live).",
            "**During enrollment**, the coordinator works the ranked list. The PI or a sub-investigator sees only the candidates the coordinator advances, with the chart evidence for each criterion.",
            "**At the screening visit**, the patient has already answered the pre-screening questions, so the visit starts with what the chart could not settle.",
            "**In a multi-physician group**, partners can serve as sub-investigators while Bond screens across all of their panels.",
          ],
        },
        {
          type: "p",
          text: "The PI stays responsible for eligibility, delegation and informed consent, as in any study. Bond supports the consent conversation but does not obtain consent.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "problems-and-measures",
      heading: "Which problems does Bond address, and what do you measure?",
      blocks: [
        {
          type: "table",
          caption: "Practice problem, what Bond does, and what you measure",
          columns: ["Problem in the practice", "What Bond does", "What you measure"],
          rows: [
            ["No one has time to search charts", "Screens structured data and notes against the criteria and ranks candidates with evidence", "Patients matched; matching accuracy on coordinator-reviewed matches; coordinator hours saved"],
            ["Trials rarely come up during visits", "Calls and texts candidates with scripts configured for your practice and pre-screens them", "Patients contacted and pre-screened"],
            ["Eligible patients on partners' panels are missed", "Screens the whole group's panel for studies the group runs", "Patients matched and contacted across the group"],
            ["Screening visits end in screen failure", "Shows chart evidence for each criterion and asks pre-screening questions before the visit", "Screen-failure signals; patients consented and randomized"],
            ["Sponsors ask how enrollment is going", "Keeps a real-time dashboard and an audit trail for every patient", "Time to enrollment; counts at each stage from match to randomization"],
          ],
          note: "Bond reports patients matched, contacted, pre-screened, consented and randomized, time to enrollment, matching accuracy, screen-failure signals and coordinator hours saved.{{cite:bond-site}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "What to hold Bond to",
          text: "Bond publishes three figures of its own, not from an independent study: more than 90% matching accuracy, at least 50% less chart review for coordinators, and up to 3x faster enrollment than manual recruitment.{{cite:bond-site}} Your reports show, study by study, whether your deployment meets them on your own patients.",
        },
      ],
    },
    {
      id: "ehr-paths",
      heading: "How does Bond connect to athenahealth, eClinicalWorks or another EHR?",
      blocks: [
        {
          type: "p",
          text: "In the federal 2024 National Electronic Health Record Survey, 27.7% of office-based physicians used an EHR from Epic, 7.5% from eClinicalWorks and 7.3% from athenahealth.{{cite:onc-nehrs-2024}} Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, through FHIR R4 APIs, HL7 v2 where applicable, or an integration partner.{{cite:bond-site,bond-product}} Its only vendor certification is [CRIO](/integrations/crio) Certified Partner.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "**athenahealth.** As of September 2026, athenahealth's published FHIR configuration supports the `client_credentials` grant used for server-to-server (backend) access, alongside user-launched apps.{{cite:athena-smart}} The [athenahealth](/integrations/athenahealth) page lists what your practice provides.",
            "**eClinicalWorks.** Your practice turns on FHIR access through the On-Demand Activation feature in eClinicalWorks. Per its website (September 2026), eClinicalWorks makes its certified FHIR APIs available to third-party developers at no cost at this time.{{cite:ecw-cert}} See [eClinicalWorks](/integrations/eclinicalworks).",
            "**Epic or Oracle Health.** Groups on these systems, including those on an affiliated hospital's instance, follow the approval steps of whoever runs the EHR. See [Epic](/integrations/epic) and [Oracle Health](/integrations/oracle-cerner).",
          ],
        },
      ],
    },
    {
      id: "implementation",
      heading: "What does implementation ask of a small team?",
      blocks: [
        {
          type: "p",
          text: "A full deployment with the EHR connected takes 48 hours, depending on the EHR, the IT review and the interface method.{{cite:bond-site}} The IT review and EHR access approval sit with your practice, so name an owner for each at kickoff. The [implementation plan](/implementation) lists each step.",
        },
        {
          type: "checklist",
          items: [
            "**A PI** who can settle ambiguous criteria.",
            "**A coordinator**, full or part time, to review matches and take escalations.",
            "**Whoever runs the EHR**: a practice administrator, an IT lead or an outside consultant.",
            "**A privacy contact** to sign the business associate agreement. No patient data moves before it is signed.",
            "**The protocol**, the IRB of record, and where you track screening visits: a calendar, CTMS or Google Sheet.",
          ],
        },
        {
          type: "p",
          text: "Draft your pre-screening questions from the [pre-screening call script](/templates/pre-screening-call-script). Your team owns the final wording.",
        },
      ],
    },
    {
      id: "pricing",
      heading: "How is Bond priced for a practice?",
      blocks: [
        {
          type: "p",
          text: "Pricing has two parts. A volume-based platform fee covers EHR integration, implementation and ongoing operation: the EHR connection, security review, audit logging setup, workflow configuration, and ongoing compute, monitoring and support. There is no separate integration fee. A success fee is charged per enrolled patient, where enrolled means randomized, and per-visit milestones can be added.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "The success fee moves with enrollment, not with charts screened or calls placed. Pricing is custom; the [pricing](/pricing) page lists what every engagement includes.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol and your EHR administrator's name. We will show how Bond screens against its criteria and which approvals you need.",
          secondaryLabel: "How implementation works",
          secondaryHref: "/implementation",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can we start before the EHR connection is approved?",
      a: "Yes. A list-based outreach pilot can work from a patient list your practice exports while the EHR connection is reviewed.{{cite:bond-site}}",
    },
    {
      q: "Is Bond an athenahealth or eClinicalWorks partner?",
      a: "No. Bond holds no certification from either vendor; its only vendor certification is CRIO Certified Partner. It connects through each vendor's FHIR APIs once your practice authorizes access.{{cite:bond-site}}",
    },
    {
      q: "Does Bond find new studies for our practice?",
      a: "Bond recruits for studies your group has agreed to run. For getting selected by sponsors, see [how to win more studies](/guides/win-more-studies).",
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
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, pricing and compliance status described by Bond Health, September 2026.",
    },
    {
      id: "aamc-research",
      title: "Prevalence and Characteristics of Physicians Engaged in Research in the US",
      publisher: "JAMA Network Open (AAMC National Sample Survey of Physicians)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11423164/",
      year: "2024",
      note: "Quote: \"In this study, 14% (95% CI, 12.6%-15.5%) of all physicians self-reported research engagement\" and \"most research-engaged physicians (83.6%; 95% CI, 79.2%-87.2%) dedicated 10% or less of their weekly hours to research\" and \"37.6% (95% CI, 32.3%-43.2%) were not academically affiliated\". 2022 survey of 5,917 US physicians, self-reported.",
    },
    {
      id: "pan-pcp-2026",
      title: "New national survey reveals gap between primary care provider support for clinical trials and real-world patient access",
      publisher: "Patient Advocate Foundation and PAN Foundation (PR Newswire)",
      url: "http://www.prnewswire.com/news-releases/new-national-survey-reveals-gap-between-primary-care-provider-support-for-clinical-trials-and-real-world-patient-access-302769917.html",
      year: "2026",
      note: "Quote: \"86 percent of PCPs say they are likely to refer patients to clinical trials, only 37 percent report ever having referred a patient\" and \"76 percent do not feel well-equipped to support referrals\" and \"more than two in five PCPs (42 percent) discuss clinical trials with patients only when the patient brings it up\". Harris Poll of 503 board-certified US primary care physicians, March 5 to 18, 2026.",
    },
    {
      id: "wcg-2025",
      title: "2025 Clinical Research Site Challenges Report",
      publisher: "WCG Clinical",
      url: "https://www.wcgclinical.com/wp-content/uploads/sites/2/2025/10/WCG-Site-Challenges-Report-2025.pdf",
      year: "2025",
      note: "Quote: \"Smaller sites, including independent sites and physician practices, face a unique set of challenges\" and \"32% of smaller sites cited recruitment and retention as a top challenge, which can stem from having more limited resources, less brand recognition, and smaller patient databases compared to larger sites\" and \"independent sites and physician practices tend to have faster start-up timelines, with 54% reporting that they can initiate studies in under 60 days. In contrast, academic medical centers, community hospitals, health systems, and site networks typically face longer timelines, with only 9% saying their study start-up timelines take less than 60 days.\" Global survey of 611 sites, July to September 2025; \"80% of the survey respondents were in the United States\". Top-three multi-select question.",
    },
    {
      id: "research-america-2017",
      title: "Americans say discussions about clinical trials should be part of standard of care",
      publisher: "Research!America and ACRO (EurekAlert!)",
      url: "https://www.eurekalert.org/news-releases/564254",
      year: "2017",
      note: "Quote: \"37% of Americans say they would 'very likely' participate in a clinical trial if their doctor recommended\". Zogby Analytics survey of 1,000 US adults, July 2017.",
    },
    {
      id: "hints-2021",
      title: "Demographic and Health Behavior Factors Associated With Clinical Trial Invitation and Participation in the United States",
      publisher: "JAMA Network Open (Health Information National Trends Survey, NCI)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34586365/",
      year: "2021",
      note: "Quote: \"Overall, 439 respondents (9%) had been invited to participate in any clinical trial. ... Of invited respondents, 199 (47%) participated.\" HINTS 2020, 3,689 US adults, weighted.",
    },
    {
      id: "pan-patients-2026",
      title: "Clinical Trials: Patient Interest and Access, 2026 National Polling",
      publisher: "PAN Foundation and The Harris Poll",
      url: "https://clinicaltrials.panfoundation.org/wp-content/uploads/2026/05/Clinical-Trials-Patient-Interest-and-Access-2026-National-Polling.pdf",
      year: "2026",
      note: "Quote: \"Nearly 2 in 3 adults with chronic conditions (64%) say that their provider has never discussed clinical trials with them, yet 7 in 10 (71%) say they would be likely to participate if given the opportunity.\" Online poll, April 9 to 13, 2026, 2,041 US adults including 1,322 with a chronic condition.",
    },
    {
      id: "onc-nehrs-2024",
      title: "Office-based Physician Electronic Health Record Adoption, 2008-2024",
      publisher: "ONC / ASTP, HealthIT.gov Data Brief",
      url: "https://healthit.gov/data/data-briefs/office-based-physician-electronic-health-record-adoption-2008-2024/",
      year: "2025",
      note: "Appendix Table 2, percent of all office-based physicians, 2024 National Electronic Health Record Survey. Quote: \"EHR Developer Market Size % of all physicians Epic Top 5 27.70% Meditech Top 5 11.10% eClinicalWorks Top 5 7.50% athenahealth Top 5 7.30% Cerner Top 5 5.50%\".",
    },
    {
      id: "athena-smart",
      title: "athenahealth SMART configuration (/.well-known/smart-configuration)",
      publisher: "athenahealth",
      url: "https://api.platform.athenahealth.com/fhir/r4/.well-known/smart-configuration",
      year: "2026",
      note: "Quote: \"grant_types_supported\":[\"authorization_code\",\"client_credentials\"]. Retrieved September 21, 2026.",
    },
    {
      id: "ecw-cert",
      title: "Certified EHR Technology",
      publisher: "eClinicalWorks",
      url: "https://www.eclinicalworks.com/resources/certified-ehr-technology/",
      year: "2026",
      note: "Quote: \"Certified FHIR APIs are available to third-party application developers and eClinicalWorks customers at no cost at this time.\" and \"Customers can learn more and enable FHIR APIs through the On-Demand Activation feature in the eClinicalWorks application.\" Retrieved September 2026.",
    },
  ],
  related: [
    { label: "athenahealth integration", href: "/integrations/athenahealth", description: "The FHIR path and approvals for groups on athenaOne." },
    { label: "eClinicalWorks integration", href: "/integrations/eclinicalworks", description: "How a practice turns on FHIR access and what Bond reads." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads charts and explains each match." },
    { label: "Implementation", href: "/implementation", description: "What your team and Bond do at each step of the 48-hour plan." },
    { label: "Pricing", href: "/pricing", description: "The platform fee and the success fee per randomized patient." },
    { label: "How to use your EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "Cohort queries, HIPAA paths and coordinator review, step by step." },
  ],
};

export default page;
