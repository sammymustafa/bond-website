import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/templates/recruitment-plan",
  category: "template",
  title: "Free clinical trial recruitment and retention plan template",
  description:
    "Free, editable recruitment and retention plan for clinical trials: enrollment target, backward funnel, sources, IRB-approved outreach, retention and monitoring.",
  keywords: [
    "clinical trial recruitment plan template",
    "patient recruitment plan template",
    "recruitment and retention plan clinical trial",
    "clinical trial recruitment strategy template",
    "site recruitment plan",
  ],
  eyebrow: "Template",
  h1: "Clinical trial recruitment plan template",
  intro:
    "A recruitment plan turns an enrollment target into the work needed to reach it: how many patients to find, where they come from, who contacts them, what the IRB must approve first, how they stay in the study, and what happens when the numbers fall behind. This template takes a site or study team through each part, with fields to fill in and a funnel worksheet that works backward from the number of patients you need to randomize.",
  summary: "An editable recruitment and retention plan with a backward funnel worksheet, source plan, IRB checklist, retention steps and monitoring triggers.",
  lastUpdated: "2026-10-25",
  heroCta: {
    label: "Download the Word file",
    href: "/downloads/recruitment-plan.docx",
    secondaryLabel: "Book a demo",
    secondaryHref: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true",
  },
  sections: [
    {
      id: "what-it-is",
      heading: "What is a clinical trial recruitment plan?",
      blocks: [
        {
          type: "p",
          text: "A recruitment plan is the written answer to how a study will reach its enrollment target. Sponsors usually write one for the whole study; each site needs its own version, because the patients, staff and referral partners are local. ICH E6(R3) expects the investigator to be able to demonstrate, for example from retrospective or current data, a potential for recruiting the agreed number of eligible participants within the recruitment period, and it lists reviewing recruitment and retention rates as part of monitoring.{{cite:ich-e6r3}} CTTI's recruitment recommendations ask study teams to set realistic expectations for enrollment and to map out anticipated events early, even with rough estimates, to find bottlenecks.{{cite:ctti-recruitment}}",
        },
        {
          type: "stats",
          items: [
            { value: "37%", label: "of sites in a typical trial under-enroll; 11% enroll no one", cite: "tufts-2013" },
            { value: "81.5%", label: "of 764 NCI-sponsored cancer trials missed projected accrual in the planned period", cite: "cheng-2011" },
            { value: "56%", label: "of 151 UK publicly funded trials reached their recruitment target", cite: "walters-2017" },
          ],
        },
        {
          type: "p",
          text: "Even trials that meet their goals usually run late: Tufts CSDD found that reaching enrollment targets typically means nearly doubling the original timeline.{{cite:tufts-2013}} A methods paper on accrual planning puts the cause plainly: projected recruitment rates are often over-estimated, and the time to recruit is often under-estimated.{{cite:carter-2005}} A plan built from your own data, with a named owner for each source, is the defense against both.",
        },
        {
          type: "download",
          label: "Recruitment plan template (Word)",
          href: "/downloads/recruitment-plan.docx",
          format: "Word document (.docx), editable",
        },
      ],
    },
    {
      id: "how-to-use",
      heading: "How should you use the template?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Start from the target and work backward",
              text: "Write down how many patients the site must randomize and by when, then use the funnel worksheet to find how many candidates that takes.",
            },
            {
              title: "Put a count and an owner next to every source",
              text: "Records, referrals, advertising and registries each get an expected number, a person responsible and a start date.",
            },
            {
              title: "Get the materials approved before outreach starts",
              text: "Ads, scripts, text messages and landing pages go to the IRB with the rest of the recruitment package.",
            },
            {
              title: "Plan retention at the same time",
              text: "A patient who drops out after randomization has to be replaced, so the plan covers keeping patients as well as finding them.",
            },
            {
              title: "Review the funnel weekly and re-forecast",
              text: "Once real numbers come in, replace the assumed rates with actual ones and update the plan.",
            },
          ],
        },
      ],
    },
    {
      id: "target-and-funnel",
      heading: "How do you work backward from the enrollment target?",
      blocks: [
        {
          type: "form",
          title: "Section A. Study and target",
          fields: [
            { label: "Protocol title and number", hint: "[Sponsor], [protocol number], [phase], [indication]", kind: "text" },
            { label: "Enrollment target at this site", hint: "Patients randomized, not screened.", kind: "number" },
            { label: "Enrollment period", hint: "[Planned site activation date] to [enrollment close date]", kind: "text" },
            { label: "Date of first patient screened", hint: "The date the plan commits to.", kind: "text" },
            {
              label: "Rates from similar past studies",
              hint: "Contact-to-reach, reach-to-booked, show rate, screen-pass rate. Name the studies they come from.",
              kind: "textarea",
            },
            { label: "Competing studies at the site", hint: "Open or planned studies that draw on the same patients.", kind: "textarea" },
          ],
        },
        {
          type: "p",
          text: "Divide the target by each stage's conversion rate, starting from randomization and moving up the funnel. Use your own screening log and outreach history for the rates. Where you have no history, say so and choose a cautious assumption rather than the sponsor's estimate.",
        },
        {
          type: "table",
          caption: "Backward funnel worksheet, with a worked example",
          columns: ["Stage", "Rate to the stage above", "Example: patients needed"],
          rows: [
            ["Randomized", "Site target", "10"],
            ["Screening visits completed", "50% pass screening: 10 ÷ 50%", "20"],
            ["Screening visits booked", "80% attend: 20 ÷ 80%", "25"],
            ["Patients reached", "35% agree to book: 25 ÷ 35%", "72"],
            ["Candidates contacted", "50% are reached: 72 ÷ 50%", "144"],
          ],
          note: "The rates are hypothetical; replace each with your own. In this example the site needs about 14 chart-confirmed candidates for each randomized patient, or 12 new candidates a month over a 12-month enrollment period. Real ratios vary by study type: at one cancer center, staff screened 3 to 13 patients for every enrollment.{{cite:penberthy-2012}}",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Plan for a slow start",
          text: "In an analysis of 764 NCI-sponsored cancer trials, trials that took longer than 2 months to enroll their first patient were significantly less likely to reach their accrual goals.{{cite:cheng-2011}} Put the first-patient date in the plan, start the early months at a partial rate, and cap each month at the screening visits your staff can run.",
        },
      ],
    },
    {
      id: "sources",
      heading: "Where will the patients come from?",
      blocks: [
        {
          type: "p",
          text: "List every source with a count, not a hope. For most sites the first source is their own records. Reviewing records to judge whether enough patients exist is usually handled under the HIPAA provision for reviews [preparatory to research](/glossary/preparatory-to-research), which requires that no protected health information leave the covered entity during the review.{{cite:ecfr-164-512}} The [feasibility questionnaire template](/templates/feasibility-questionnaire) has a worksheet for turning a diagnosis count into a likely-eligible count.",
        },
        {
          type: "table",
          caption: "Recruitment source plan",
          columns: ["Source", "Expected candidates", "Owner", "Approval needed", "Start date"],
          rows: [
            ["Your EHR: records query and chart review", "[n]", "[Name, role]", "Privacy office rules for the query; IRB approval before contact", "[Date]"],
            ["Referrals from physicians inside and outside your organization", "[n]", "[Name, role]", "IRB-approved referral letter or materials", "[Date]"],
            ["Past participants who agreed to future contact", "[n]", "[Name, role]", "Consent on file for future contact", "[Date]"],
            ["Online advertising, such as Meta and Google", "[n]", "[Name, role]", "IRB-approved ads and landing page", "[Date]"],
            ["Registries and community outreach", "[n]", "[Name, role]", "IRB-approved materials; registry rules", "[Date]"],
            ["Sponsor-run central campaigns", "[n]", "[Sponsor contact]", "Sponsor confirms IRB approval", "[Date]"],
          ],
          note: "If the sources add up to fewer candidates than the funnel worksheet needs, the plan has a gap. Close it now, before activation, not after the first slow month.",
        },
        {
          type: "p",
          text: "Advertising works on a different clock from records: leads arrive whenever the ad runs, and they cool quickly. Our posts on [running Meta ads for clinical trials](/blog/meta-ads-for-clinical-trials) and [speed to lead](/blog/speed-to-lead-trial-ad-leads) cover the setup and the follow-up.",
        },
      ],
    },
    {
      id: "outreach-and-irb",
      heading: "What outreach needs IRB approval before it starts?",
      blocks: [
        {
          type: "p",
          text: "Recruitment materials are reviewed before they are used. FDA's guidance treats direct advertising for study subjects as the start of the informed consent and subject selection process, and says advertisements should be reviewed and approved by the IRB.{{cite:fda-recruiting}} ICH E6(R3) asks for a documented, dated IRB approval of participant recruitment procedures, such as advertisements, before the trial starts.{{cite:ich-e6r3}}",
        },
        {
          type: "checklist",
          items: [
            "Ads, flyers, posters and social media posts",
            "Landing page and online pre-screening questionnaire",
            "Phone script and voicemail ([pre-screening call script template](/templates/pre-screening-call-script))",
            "Text messages ([patient outreach SMS templates](/templates/patient-outreach-sms-templates))",
            "Letters and emails to patients and referring physicians",
            "AI disclosure wording, if an AI agent calls or texts ([IRB language template](/templates/irb-submission-language-ai-outreach))",
            "Translated versions of each item, for every language you will recruit in",
          ],
        },
        {
          type: "p",
          text: "Automated calls and texts carry their own consent rules under the TCPA, and contacting a site's own patients raises HIPAA questions about who may reach whom. The [IRB and HIPAA guide to patient outreach](/guides/irb-hipaa-patient-outreach) and our [TCPA post on AI outreach](/blog/tcpa-ai-outreach-2026) cover both.",
        },
        {
          type: "form",
          title: "Section B. Contact plan",
          fields: [
            { label: "Channels and order of contact", hint: "For example: call, then text, then letter. Note which require prior consent.", kind: "textarea" },
            { label: "Response time to new leads", hint: "Target time from an ad lead or referral arriving to first contact.", kind: "text" },
            { label: "Follow-up attempts before closing a lead", hint: "[Number of attempts] over [period], across [channels]", kind: "text" },
            { label: "Languages offered", hint: "Languages for outreach, pre-screening and consent.", kind: "text" },
            { label: "Where outcomes are logged", hint: "Screening log, CTMS or recruitment platform.", kind: "text" },
          ],
        },
      ],
    },
    {
      id: "retention",
      heading: "What goes in the retention plan?",
      blocks: [
        {
          type: "p",
          text: "Retention belongs in the same document because it uses the same funnel: every randomized patient who drops out has to be replaced from the top. E6(R3) treats the two together, listing recruitment and retention rates among the things monitoring reviews.{{cite:ich-e6r3}} Our [participant retention guide](/guides/participant-retention) covers the evidence behind each step below.",
        },
        {
          type: "checklist",
          items: [
            "Visit reminders by the patient's preferred channel ([why screening visits get missed](/blog/screening-visit-no-shows))",
            "Transportation, parking and travel reimbursement, arranged before the first visit",
            "Participant payments and when they are made, as approved by the IRB",
            "Scheduling that fits work and caregiving, including early or late appointments where possible",
            "A named study contact the patient can reach between visits",
            "Check-ins between visits for side effects and questions",
            "A rule for spotting patients at risk of dropping out, such as missed calls or a rescheduled visit, and who follows up",
          ],
        },
      ],
    },
    {
      id: "roles-and-budget",
      heading: "Who owns each task, and what will it cost?",
      blocks: [
        {
          type: "form",
          title: "Section C. Roles",
          fields: [
            { label: "Recruitment lead", hint: "[Name, role]. Owns the plan and the weekly review.", kind: "text" },
            { label: "Chart review", hint: "Who reviews records against the criteria, and how many hours a week.", kind: "text" },
            { label: "First contact and pre-screening", hint: "Coordinator, call center, vendor or AI agent.", kind: "text" },
            { label: "Scheduling and reminders", hint: "Who books screening visits and confirms them.", kind: "text" },
            { label: "PI oversight", hint: "How the PI reviews recruitment activities delegated to staff or vendors.", kind: "textarea" },
          ],
        },
        {
          type: "form",
          title: "Section D. Budget",
          fields: [
            { label: "Advertising spend", hint: "[Amount] per month, by channel", kind: "text" },
            { label: "Recruitment vendor or software fees", hint: "Fee model: per patient, per milestone, or flat.", kind: "text" },
            { label: "Coordinator time for pre-screening", hint: "Hours per week multiplied by your loaded hourly rate.", kind: "text" },
            { label: "Materials and translation", hint: "Printing, translation and IRB review fees for recruitment materials.", kind: "text" },
            { label: "Retention costs", hint: "Travel, parking, meals and participant payments.", kind: "text" },
            { label: "Who pays", hint: "Which lines the sponsor budget covers and which the site absorbs.", kind: "textarea" },
          ],
        },
        {
          type: "p",
          text: "Our guide to [what recruitment software costs](/guides/clinical-trial-recruitment-software-cost) compares the common fee models.",
        },
      ],
    },
    {
      id: "monitoring",
      heading: "How do you know if the plan is working?",
      blocks: [
        {
          type: "table",
          caption: "Funnel metrics to review weekly",
          columns: ["Metric", "How to count it"],
          rows: [
            ["Candidates identified", "Patients flagged as likely eligible, by source"],
            ["Contacted and reached", "First attempts made, and patients who answered"],
            ["Screening visits booked and attended", "Booked visits, and the share that happened"],
            ["Screen failures", "Patients screened who did not qualify, with the reason for each"],
            ["Randomized", "Against the plan for the month, and cumulative"],
            ["Dropouts", "Randomized patients who left the study, with the reason"],
          ],
          note: "Count each patient once per stage, by date, so weekly numbers can be compared with the funnel worksheet.",
        },
        {
          type: "form",
          title: "Section E. Triggers and contingencies",
          fields: [
            { label: "When the plan is behind", hint: "If randomizations are below [share of plan] by [date], we will: [action].", kind: "textarea" },
            { label: "Backup sources not yet used", hint: "Sources from the source plan held in reserve, with the approvals each needs.", kind: "textarea" },
            { label: "Who can approve added spend", hint: "[Name, role] at the site; [name, role] at the sponsor.", kind: "text" },
            { label: "First re-forecast date", hint: "When real funnel rates replace the assumptions.", kind: "text" },
          ],
        },
        {
          type: "p",
          text: "When the funnel stalls, the stage where it stalls points to the fix: few candidates means a sourcing or criteria problem, low reach means contact timing or channels, and high screen failure means candidates are not being checked carefully enough before the visit. Our guide to [reducing screen failure](/guides/reduce-screen-failure) covers the last one.",
        },
      ],
    },
    {
      id: "where-bond-fits",
      heading: "Where does Bond fit?",
      blocks: [
        {
          type: "p",
          text: "Bond Health does not write recruitment plans. It runs the parts of one that take the most coordinator time. [Identify](/identify) screens structured and unstructured EHR records against a study's inclusion and exclusion criteria and shows the chart evidence behind each criterion decision. [Engage](/engage) runs voice and SMS outreach, pre-screening and scheduling, with scripts configured per site and study so it can use the wording the site's IRB approved. For studies that need patients beyond the site's records, Bond creates and runs Meta and Google ad campaigns, contacts every ad lead immediately and follows up until they respond.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "After randomization, Bond sends visit reminders, books transportation, runs side-effect check-ins and flags patients at risk of dropping out.{{cite:bond-product}} Full EHR integration usually takes 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site}} See [Bond for research sites](/for/research-sites), or browse the other [templates](/templates).",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true",
          text: "Bring a study you are planning for. We will show how Bond screens your records against its criteria and runs outreach with your IRB-approved wording.",
          secondaryLabel: "Bond for research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the difference between a recruitment plan and a feasibility assessment?",
      a: "Feasibility asks whether a site can enroll for a study: whether it has the patients, staff and equipment. The recruitment plan says how it will: which sources, which people, which approved materials, and on what schedule. A good feasibility answer becomes the first draft of the plan. See the [guide to site feasibility](/guides/site-feasibility).",
    },
    {
      q: "Does the IRB review the recruitment plan?",
      a: "The IRB reviews information on the recruitment process along with any advertisements, under ICH E6(R3), and recruitment procedures need its documented approval before the trial starts.{{cite:ich-e6r3}} FDA's guidance also expects advertisements to be reviewed and approved by the IRB.{{cite:fda-recruiting}} Check your IRB's submission requirements for how much of the plan itself to include.",
    },
    {
      q: "How many candidates should we plan to contact for each enrollment?",
      a: "Use your own history from similar studies, worked backward through each stage of the funnel. Published ratios vary widely: at one cancer center, staff screened 3 to 13 patients per enrollment depending on study type.{{cite:penberthy-2012}}",
    },
    {
      q: "What if the sponsor already has a recruitment plan?",
      a: "The sponsor's plan covers the study as a whole and often includes central campaigns. Your site plan adds what only the site knows: its patients, referral partners, staff time and local materials. Ask the sponsor which central materials are already IRB-approved and how leads from central campaigns will reach you.",
    },
    {
      q: "How often should we update the plan?",
      a: "Review the funnel every week and update the plan when the real rates differ from the assumed ones, when a source underperforms, or when the protocol is amended.",
    },
  ],
  sources: [
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice (Step 4)",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Read October 2026. Quote (2.2.1): \"The investigator should be able to demonstrate (e.g., based on retrospective or currently available data) a potential for recruiting the proposed number of eligible participants within the recruitment period as agreed with the sponsor.\" Quote (1.2.2(e)): \"Advertisement for participant recruitment (if used) and information on the recruitment process\". Quote (2.4.2): \"Before initiating a trial, the investigator/institution should have a documented and dated approval/favourable opinion from the IRB/IEC for the trial protocol, informed consent materials, participant recruitment procedures (e.g., advertisements)\". Quote (3.11.4.5.2(h)): \"Reviewing and reporting the participant recruitment and retention rates.\"",
    },
    {
      id: "ctti-recruitment",
      title: "CTTI Recommendations: Planning for Successful Trial Recruitment",
      publisher: "Clinical Trials Transformation Initiative (CTTI)",
      url: "https://ctti-clinicaltrials.org/wp-content/uploads/2021/06/CTTI_Recruitment_Recs.pdf",
      year: "2016",
      note: "Published May 2016, updated July 2018. Read October 2026. Quote: \"Set realistic expectations for completing trial enrollment by anticipating key factors that will influence site activation, screening, and enrollment trajectories. Map out anticipated events, even if estimations are rough, to identify potential pitfalls and bottlenecks.\"",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013. Read October 2026. Quote: \"11% of sites in a given trial typically fail to enroll a single patient, 37% under-enroll, 39% meet their enrollment targets, and 13% exceed their targets.\" Quote: \"While nine out of 10 clinical trials worldwide meet their patient enrollment goals, reaching those targets typically means that drug developers need to nearly double their original timelines\".",
    },
    {
      id: "cheng-2011",
      title: "Predicting accrual achievement: monitoring accrual milestones of NCI-CTEP-sponsored clinical trials",
      publisher: "Clinical Cancer Research (Cheng SK, Dietrich MS, Dilts DM), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/21447723/",
      year: "2011",
      note: "Abstract read October 2026; 764 trials, 2000 to 2007. Quote: \"A total of 81.5% (n = 623) of the trials did not achieve the projected accrual goals within the anticipated accruing period.\" Quote: \"Trials that accrue the first enrollment beyond 2 months (n = 379, 49.6%) are significantly less likely to achieve the accrual performance than those trials that enroll patients under 2 months\".",
    },
    {
      id: "walters-2017",
      title: "Recruitment and retention of participants in randomised controlled trials: a review of trials funded and published by the United Kingdom Health Technology Assessment Programme",
      publisher: "BMJ Open (Walters SJ et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/28320800/",
      year: "2017",
      note: "Abstract read October 2026; trials published 2004 to April 2016. Quote: \"This review identified 151 individually RCTs from 787 NIHR HTA reports. The final recruitment target sample size was achieved in 56% (85/151) of the RCTs\".",
    },
    {
      id: "carter-2005",
      title: "Practical considerations for estimating clinical trial accrual periods: application to a multi-center effectiveness study",
      publisher: "BMC Medical Research Methodology (Carter RE, Sonne SC, Brady KT), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/15796782/",
      year: "2005",
      note: "Abstract read October 2026. Quote: \"Projected recruitment rates are often over-estimated, and the time to recruit the target population (accrual period) is often under-estimated.\"",
    },
    {
      id: "penberthy-2012",
      title: "Effort required in eligibility screening for clinical trials",
      publisher: "Journal of Oncology Practice (Penberthy LT et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3500483/",
      year: "2012",
      note: "Read October 2026. Quote: \"The average number of patients screened per enrolled patient ranged from three for observational studies to 13 for phase I studies.\"",
    },
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512: Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/section-164.512",
      year: "2026",
      note: "Paragraph (i)(1)(ii), reviews preparatory to research. Quote: \"No protected health information is to be removed from the covered entity by the researcher in the course of the review\". Accessed September 2026; re-checked October 23, 2026.",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Issued January 1998. Quotes: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process.\" \"Advertisements should be reviewed and approved by the IRB as part of the package for initial review.\"",
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
      description: "A master answer file with an EHR patient-count worksheet.",
    },
    {
      label: "Pre-screening call script",
      href: "/templates/pre-screening-call-script",
      description: "A complete phone script with AI disclosure, voicemail and objections.",
    },
    {
      label: "Patient outreach SMS templates",
      href: "/templates/patient-outreach-sms-templates",
      description: "Text messages for first contact, follow-up and reminders.",
    },
    {
      label: "IRB and HIPAA rules for patient outreach",
      href: "/guides/irb-hipaa-patient-outreach",
      description: "Who may contact which patients, and what the IRB reviews.",
    },
    {
      label: "Engage: voice and SMS agents",
      href: "/engage",
      description: "How Bond's agents handle outreach, pre-screening, scheduling and escalation.",
    },
    {
      label: "All templates",
      href: "/templates",
      description: "Editable templates for feasibility, pre-screening, outreach and IRB language.",
    },
  ],
};

export default page;
