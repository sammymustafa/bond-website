import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/guides/pre-screening-vs-screening",
  category: "guide",
  title: "Pre-screening vs screening in clinical trials: definitions",
  description:
    "Where pre-screening ends and screening begins: what FDA, the Common Rule and HIPAA allow before consent, who counts as a screen failure, what to log, who pays.",
  keywords: [
    "pre-screening vs screening clinical trial definition",
    "clinical trial pre-screening before consent",
    "screen failure definition",
    "pre-screening log",
    "screening procedures informed consent",
  ],
  eyebrow: "Guide",
  h1: "Pre-screening vs screening: where consent draws the line",
  intro:
    "Pre-screening is how a site finds and sorts candidates before anyone signs a consent form. Screening confirms eligibility under the protocol after consent. The line between them decides what needs IRB approval, which log a person goes on, who counts as a screen failure, and who pays.",
  summary: "Definitions from FDA, NIH and ICH, what can happen before consent, how screen failures are counted, and what to log.",
  lastUpdated: "2026-09-24",
  heroCta: {
    label: "See pre-screening on your protocol",
    href: "/book-a-demo",
    secondaryLabel: "How Identify works",
    secondaryHref: "/identify",
  },
  sections: [
    {
      id: "definitions",
      heading: "What is the difference between pre-screening and screening?",
      blocks: [
        {
          type: "p",
          text: "[Pre-screening](/glossary/pre-screening) happens before a person signs a consent form. NIH's Office of Human Subjects Research Protections describes its purpose as finding out whether someone might qualify and is interested. [Screening](/glossary/screening) to determine further eligibility happens after consent, unless the IRB waives it.{{cite:nih-ohsrp-screening}} UMBC's IRB adds that pre-screening may not include research procedures.{{cite:umbc-screening}}",
        },
        {
          type: "p",
          text: "Both stages are part of recruitment and need IRB oversight.{{cite:miami-screening}} FDA says the IRB should receive a written outline of the screening procedure and how screening consent will be obtained.{{cite:fda-screening-tests}} ICH E6(R3) lists the \"mechanism for pre-screening, where appropriate, and screening of participants\" as protocol content.{{cite:ich-e6r3}}",
        },
        {
          type: "table",
          caption: "Pre-screening and screening at a glance",
          columns: ["Question", "Pre-screening", "Screening"],
          rows: [
            ["When does it happen?", "Before informed consent", "After informed consent"],
            ["Typical activities", "Chart or registry review, a scripted call or text, a check of interest", "Protocol history, exams, labs, imaging, washout"],
            ["Research procedures allowed?", "No", "Yes, as the protocol specifies"],
            ["What approval is needed?", "IRB-approved method and script, plus a HIPAA pathway", "The IRB-approved protocol and consent form"],
            ["If the person does not qualify", "Pre-screen exclusion, not a screen failure", "Screen failure"],
            ["What data can be kept?", "Limited. Identifiable data on ineligible people generally cannot be kept", "Data the consent form says will be kept"],
          ],
          note: "From NIH, UMBC and University of Miami guidance.{{cite:nih-ohsrp-screening,umbc-screening,miami-screening}} Your IRB's policy governs.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Read the protocol's own terms",
          text: "Some sponsors use \"pre-screen\" for a step after consent. GSK protocol 213744 defines pre-screen failures as participants who sign consent at a pre-screen visit but never reach screening.{{cite:gsk-213744}} Map the sponsor's terms to your logs before the first patient.",
        },
      ],
    },
    {
      id: "before-consent",
      heading: "What can happen before consent?",
      blocks: [
        { type: "h3", text: "Can staff review charts before consent?" },
        {
          type: "p",
          text: "For research under the Common Rule, [45 CFR 46.116(g)](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116) lets an IRB approve obtaining information to screen, recruit or determine eligibility without consent. That covers talking with the prospective subject and accessing records or stored identifiable biospecimens.{{cite:ecfr-46-116}} The 2017 final rule calls this an exception to consent, not a waiver, so the IRB no longer has to waive consent first.{{cite:fr-common-rule-2017}}",
        },
        {
          type: "p",
          text: "FDA's regulations have no provision worded like 46.116(g). Its 2023 informed consent guidance says reviewing records for eligibility, and recording limited information, is preparation for a clinical investigation and needs no consent under FDA rules. If the record lacks what is needed, consent may be required before collecting more.{{cite:fda-ic-guidance-2023}} Results of procedures done for routine care may be used for eligibility.{{cite:fda-screening-tests}}",
        },
        {
          type: "p",
          text: "HIPAA offers two common pathways. One is a review [preparatory to research](/glossary/preparatory-to-research) under [45 CFR 164.512(i)(1)(ii)](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.512): the researcher represents that the review is only to prepare a protocol or for a similar purpose, that no PHI will leave the covered entity, and that the PHI is necessary. The other is a [waiver of authorization](/glossary/waiver-of-authorization), in whole or in part, approved by an IRB or privacy board under 164.512(i)(1)(i).{{cite:ecfr-164-512}} The right one can depend on who does the review; the [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach) covers the choice.",
        },
        { type: "h3", text: "What can a pre-screening call ask?" },
        {
          type: "p",
          text: "A scripted call or text about diagnoses, medications or willingness to travel is pre-screening, and the script goes to the IRB first. FDA treats recruitment advertising as the start of the consent process and expects the IRB to confirm that phone screening scripts protect prospective subjects and handle sensitive information properly.{{cite:fda-recruiting}}",
        },
        {
          type: "p",
          text: "Collect as little as the decision needs: health history gathered by phone creates new protected health information.{{cite:miami-screening}} NIH OHSRP's guidance is that identifiable data collected before consent cannot be kept if the person is ineligible.{{cite:nih-ohsrp-screening}}",
        },
      ],
    },
    {
      id: "requires-consent",
      heading: "What requires consent?",
      blocks: [
        {
          type: "p",
          text: "Any clinical procedure performed only to determine research eligibility needs informed consent first, including withdrawal from medication.{{cite:fda-screening-tests}} The basis is [21 CFR 50.20](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20): no one may be a subject in FDA-regulated research without legally effective informed consent, apart from narrow exceptions.{{cite:ecfr-50-20}} For drug studies under an IND, [21 CFR 312.62(b)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.62) requires each subject's case history to document that consent came before participation.{{cite:ecfr-312-62}}",
        },
        {
          type: "ul",
          items: [
            "Blood draws, ECGs, imaging or biopsies ordered because the protocol requires them, not because clinical care does.",
            "Stopping, changing or starting a medication to meet an eligibility window.",
            "Collecting information the chart does not hold and the approved pre-screening questions do not cover. FDA says this may require consent.{{cite:fda-ic-guidance-2023}}",
          ],
        },
        {
          type: "p",
          text: "Consent for screening is not always the full study consent. For screening tests that are minimal risk and would not need written consent outside research, FDA lets the IRB decide that subjects need not sign a consent document.{{cite:fda-screening-tests}} Some sites use a separate screening consent. WCG, a central IRB, advises that it describe the tests, why they are needed and the study in brief.{{cite:wcg-prescreening}}",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Check the date order",
          text: "Consent must be documented before participation, so an eligibility lab drawn before the consent date is a problem even if the patient signs later.{{cite:ecfr-312-62}} When a routine-care result is used, note in the source that it was ordered for care.",
        },
      ],
    },
    {
      id: "screen-failures",
      heading: "Who counts as a screen failure?",
      blocks: [
        {
          type: "p",
          text: "University of Miami IRB guidance defines a screen failure as someone who consented and then failed eligibility criteria on screening procedures done after consent.{{cite:miami-screening}} Some sponsor protocols widen it to anyone who consents but is not randomized, as GSK protocol 213744 does.{{cite:gsk-213744}}",
        },
        {
          type: "p",
          text: "Under the consent-based definition, a person ruled out at pre-screening is not a screen failure. Counting them as one inflates the [screen failure rate](/glossary/screen-failure-rate) and hides where candidates are lost.",
        },
        {
          type: "stats",
          items: [
            { value: "51.0%", label: "of 7,481 patients on screening logs for 15 randomized studies at one Indian cancer center screen failed", cite: "tata-2022" },
            { value: "23%", label: "mean screen failure rate among consented patients in early-phase oncology trials at three French centers, 2020 to 2022", cite: "esmo-open-2025" },
          ],
        },
        {
          type: "p",
          text: "The two rates use different denominators: the Indian audit counted every patient on its screening logs, and the French study counted only consented patients.{{cite:tata-2022,esmo-open-2025}} The audit's leading reasons were not meeting inclusion criteria (54.9%) and declining treatment (22.2%).{{cite:tata-2022}} Compare rates only when denominators match, and check how many of your own inclusion failures the chart already showed. See [how to reduce screen failure](/guides/reduce-screen-failure) for tactics.",
        },
      ],
    },
    {
      id: "logs-and-metrics",
      heading: "What should pre-screening and screening logs record?",
      blocks: [
        {
          type: "p",
          text: "ICH E6(R3) lists a completed participant screening log, plus records of the recruitment, pre-trial screening and consent process, as essential records.{{cite:ich-e6r3}} FDA published E6(R3) as final guidance in September 2025.{{cite:fr-e6r3-2025}} FDA inspectors collect screening and enrollment logs and confirm the counts match the subjects screened and enrolled.{{cite:fda-bimo}}",
        },
        {
          type: "p",
          text: "A pre-screening log can hold counts rather than names. NIMH's template covers everyone who completed a phone or online screen, typically before consent, and records how many were eligible for a screening visit, how many were not, and why.{{cite:nimh-toolbox}} University of Miami guidance says keeping identifiable details on people ruled out needs a HIPAA authorization or an IRB waiver of authorization.{{cite:miami-screening}} Without one, key each row to a pre-screen number, not a name.",
        },
        {
          type: "checklist",
          items: [
            "Candidate source: chart query, referral, advertisement or registry.",
            "Date identified and date first contacted.",
            "Pre-screen outcome: eligible for a screening visit, ineligible, not interested or unreachable.",
            "Reason for exclusion, tied to the protocol criterion it failed.",
            "Consent date, which opens the screening log entry.",
            "Screening outcome: randomized, screen failure with reason, or withdrawn.",
          ],
        },
        { type: "h3", text: "How do you measure each stage?" },
        {
          type: "p",
          text: "Measure the stages separately. Pre-screen yield is candidates sent to a screening visit divided by candidates pre-screened. The screen failure rate is screen failures divided by people consented. Falling yield suggests the chart query is too broad. A rising screen failure rate suggests pre-screening is missing a criterion.",
        },
      ],
    },
    {
      id: "billing",
      heading: "Who pays for pre-screening and screening?",
      blocks: [
        {
          type: "p",
          text: "Pre-screening is staff time, not a billable clinical service, so the study budget has to cover it.",
        },
        {
          type: "p",
          text: "Medicare's clinical trial policy, [NCD 310.1](https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?ncdid=1&ncdver=2), covers routine costs in qualifying trials. Routine costs include conventional care that would happen without the trial and treatment of complications. They exclude the investigational item, items provided solely for data collection and analysis that are not used in the patient's clinical management, and items the sponsor usually provides free.{{cite:cms-ncd-310-1}}",
        },
        {
          type: "p",
          text: "A Medicare coverage analysis applies that policy to the protocol and assigns each billable service a path: routine cost billed to insurance, or research-only paid by the sponsor. USC's Keck School of Medicine requires one for any trial with billable patient-care services, even if no Medicare beneficiaries are expected.{{cite:usc-mca}} Under the data-collection exclusion, a test needed only for eligibility usually lands on the research-only side.",
        },
        {
          type: "table",
          caption: "Common activities before and after consent",
          columns: ["Activity", "Stage", "Consent first?", "Usual billing path"],
          rows: [
            ["EHR or registry query against the criteria", "Pre-screening", "No, but needs a HIPAA pathway and IRB-approved method", "Staff time, study budget"],
            ["Scripted call or text about history and interest", "Pre-screening", "No, but the script needs IRB approval", "Staff time, study budget"],
            ["Reading a lab or scan already done for clinical care", "Pre-screening", "No", "Already billed as clinical care"],
            ["Lab, ECG or imaging required only for eligibility", "Screening", "Yes", "Usually research-only, sponsor budget"],
            ["Medication washout", "Screening", "Yes", "Set by the coverage analysis and budget"],
          ],
          note: "Based on FDA's screening information sheet and NCD 310.1.{{cite:fda-screening-tests,cms-ncd-310-1}} Your IRB, coverage analysis and clinical trial agreement decide the details.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Put screen failures in the budget",
          text: "Ask the sponsor to pay for screen failure visits and procedures at the screening-visit rate. Better pre-screening lowers the count. It will not reach zero.",
        },
      ],
    },
    {
      id: "bond-stages",
      heading: "How do Bond's stages map to pre-screening and screening?",
      blocks: [
        {
          type: "p",
          text: "Bond Health works before consent and supports the consent step; the site keeps screening and obtains consent. Bond signs a business associate agreement, and the site's HIPAA pathway and IRB approvals still set what outreach may happen.{{cite:bond-site}}",
        },
        {
          type: "table",
          caption: "Where each Bond stage sits",
          columns: ["Bond stage", "Regulatory stage", "What happens", "Who decides"],
          rows: [
            ["[Identify](/identify)", "Pre-screening: record review", "LLM review of structured and unstructured EHR records, with ranked candidates and the evidence for each criterion {{cite:bond-site}}", "Site staff, with the evidence in view"],
            ["[Engage](/engage)", "Pre-screening: questions and scheduling", "Voice and text outreach on scripts configured per site and study; patients are told AI is used and can reach a person at any time, by live transfer or human callback {{cite:bond-site,bond-product}}", "Coordinators take escalations and booked visits"],
            ["[Consent](/consent)", "Consent", "Plain-language explanations and patient Q&A that support the consent discussion {{cite:bond-site}}", "The PI or delegated staff obtain consent"],
            ["Site team", "Screening", "Protocol screening procedures and final eligibility", "The investigator"],
          ],
        },
        {
          type: "p",
          text: "Bond's dashboard reports patients matched, contacted, pre-screened, consented and randomized, the stage counts a pre-screening log needs, and keeps an audit trail.{{cite:bond-site}} Full EHR integration typically takes 48 hours, depending on the EHR and IT review.{{cite:bond-site}} [Implementation](/implementation) and [security](/security) explain how a deployment is set up.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one protocol. We will show which criteria can be checked in the chart and which belong on the pre-screening call.",
          secondaryLabel: "Pre-screening call script",
          secondaryHref: "/templates/pre-screening-call-script",
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
            "Write down which HIPAA pathway your site uses for chart pre-screening and who it covers.",
            "Check that coordinators ask only what each study's IRB-approved pre-screening script contains. No script yet? Start from the [pre-screening call script](/templates/pre-screening-call-script).",
            "For each active study, compare a recent consent date with the first protocol-only procedure date.",
            "Split the logs: pre-screen exclusions on one, consented screen failures on the other, each with a protocol-criterion reason.",
            "Confirm each study's coverage analysis and budget say who pays for eligibility-only tests and screen failure visits.",
            "Review your most recent screen failures and mark the ones the chart could have predicted.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does an AI voice or text agent change any of this?",
      a: "The consent line does not move, but some states add AI disclosure rules. As of September 2026, California's AB 3030 requires a disclaimer and a way to reach a human when generative AI writes patient communications about clinical information, unless a licensed provider reviews them. Texas HB 149, in effect since January 1, 2026, requires providers to disclose AI used in health care services or treatment.{{cite:ca-ab-3030,tx-hb-149}} Ask counsel whether your outreach is covered. Bond's [Engage](/engage) agents tell patients AI is used and let them reach a person at any time, by live transfer to a coordinator or a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
    },
  ],
  sources: [
    {
      id: "nih-ohsrp-screening",
      title: "Screening for Research Studies",
      publisher: "NIH Office of Human Subjects Research Protections",
      url: "https://irbo.nih.gov/conducting-your-study/screening-for-research-studies/",
      year: "2026",
    },
    {
      id: "umbc-screening",
      title: "Participant Screening",
      publisher: "University of Maryland, Baltimore County, Office of Research Protections and Compliance",
      url: "https://research.umbc.edu/participant-screening/",
      year: "2026",
    },
    {
      id: "miami-screening",
      title: "Guidance on Screening Research Subjects for Recruitment: Screening Process and Documentation",
      publisher: "University of Miami Human Subject Research Office",
      url: "https://www.hsro.uresearch.miami.edu/_assets/pdf/guidance-screening-process-and-documentation-10.14.2011.pdf",
      year: "2011",
    },
    {
      id: "fda-screening-tests",
      title: "Screening Tests Prior to Study Enrollment: Information Sheet for IRBs and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/screening-tests-prior-study-enrollment",
      year: "1998",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Information Sheet for IRBs and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
    },
    {
      id: "fda-ic-guidance-2023",
      title: "Informed Consent: Guidance for IRBs, Clinical Investigators, and Sponsors",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/88915/download",
      year: "2023",
    },
    {
      id: "ecfr-46-116",
      title: "45 CFR 46.116 General requirements for informed consent",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116",
      year: "2018",
      note: "Paragraph (g), added by the revised Common Rule. Text current as of September 2026.",
    },
    {
      id: "fr-common-rule-2017",
      title: "Federal Policy for the Protection of Human Subjects (final rule), 82 FR 7149",
      publisher: "Federal Register",
      url: "https://www.federalregister.gov/documents/2017/01/19/2017-01058/federal-policy-for-the-protection-of-human-subjects",
      year: "2017",
    },
    {
      id: "ecfr-164-512",
      title: "45 CFR 164.512 Uses and disclosures for which an authorization or opportunity to agree or object is not required",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.512",
      year: "2026",
      note: "Paragraphs (i)(1)(i) and (i)(1)(ii). Text current as of September 2026.",
    },
    {
      id: "ecfr-50-20",
      title: "21 CFR 50.20 General requirements for informed consent",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20",
      year: "2026",
    },
    {
      id: "ecfr-312-62",
      title: "21 CFR 312.62 Investigator recordkeeping and record retention",
      publisher: "eCFR, Office of the Federal Register",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-D/section-312.62",
      year: "2026",
    },
    {
      id: "wcg-prescreening",
      title: "What elements of informed consent must we include when pre-screening?",
      publisher: "WCG",
      url: "https://www.wcgclinical.com/insights/what-elements-of-informed-consent-must-we-include-when-pre-screening/",
      year: "n.d.",
      note: "Undated article, accessed September 2026. Quote: \"The screening consent form must include a description of the tests, why the testing is needed, and a brief summary description of the study or type of studies in which the patient may later be asked to participate.\"",
    },
    {
      id: "gsk-213744",
      title: "Protocol 213744 (NCT04718103), section 5.5 Pre-screen/Screen/Run-in Failures",
      publisher: "GlaxoSmithKline, via ClinicalTrials.gov",
      url: "https://cdn.clinicaltrials.gov/large-docs/03/NCT04718103/Prot_000.pdf",
      year: "2021",
      note: "Protocol amendment 02, section 5.5. Pre-screen failures are \"Participants who are assigned a study number at the time of signing the informed consent (pre-screen visit) but do not progress to the screening visit.\"",
    },
    {
      id: "tata-2022",
      title: "Audit of screen failure in 15 randomised studies from a low and middle-income country",
      publisher: "ecancermedicalscience",
      url: "https://pubmed.ncbi.nlm.nih.gov/36819805/",
      year: "2022",
    },
    {
      id: "esmo-open-2025",
      title: "Addressing screening failures in early-phase clinical trials in oncology: impact on patient outcomes and strategies for improvement",
      publisher: "ESMO Open",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12362514/",
      year: "2025",
    },
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice",
      publisher: "International Council for Harmonisation",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Appendix B.5.3 (protocol content) and Appendix C (essential records).",
    },
    {
      id: "fr-e6r3-2025",
      title: "E6(R3) Good Clinical Practice; International Council for Harmonisation; Guidance for Industry; Availability",
      publisher: "Federal Register",
      url: "https://www.federalregister.gov/documents/2025/09/09/2025-17311/e6r3-good-clinical-practice-international-council-for-harmonisation-guidance-for-industry",
      year: "2025",
    },
    {
      id: "fda-bimo",
      title: "Compliance Program 7348.811: Clinical Investigators and Sponsor-Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/media/75927/download",
      year: "2020",
    },
    {
      id: "nimh-toolbox",
      title: "NIMH Clinical Research Toolbox: Screening and Enrollment Logs and Materials",
      publisher: "National Institute of Mental Health",
      url: "https://www.nimh.nih.gov/funding/clinical-research/clinical-research-toolbox/nimh-clinical-research-toolbox",
      year: "2026",
    },
    {
      id: "cms-ncd-310-1",
      title: "NCD 310.1 Routine Costs in Clinical Trials",
      publisher: "Centers for Medicare & Medicaid Services",
      url: "https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?ncdid=1&ncdver=2",
      year: "2007",
    },
    {
      id: "usc-mca",
      title: "Medicare Coverage Analysis",
      publisher: "Keck School of Medicine of USC, Clinical Trials Office",
      url: "https://keck.usc.edu/clinical-trials-office/medicare-coverage-analysis/",
      year: "2026",
    },
    {
      id: "ca-ab-3030",
      title: "AB-3030 Health care services: artificial intelligence (Chapter 848, Statutes of 2024)",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3030",
      year: "2024",
      note: "Health and Safety Code 1339.75, operative January 1, 2025. Exempts communications read and reviewed by a licensed or certified provider, and excludes administrative matters such as appointment scheduling.",
    },
    {
      id: "tx-hb-149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act (enrolled), Business & Commerce Code Sec. 552.051",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
      note: "Takes effect January 1, 2026. Disclosure is due no later than the date the service or treatment is first provided.",
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
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Chart pre-screening with the evidence for each criterion shown." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "Pre-screening calls, texts and scheduling on scripts configured per study." },
    { label: "Pre-screening", href: "/glossary/pre-screening", description: "The glossary definition, in two sentences." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Which approvals cover chart review, calls and texts." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A starting script to adapt and submit to your IRB." },
    { label: "IRB language for AI outreach", href: "/templates/irb-submission-language-ai-outreach", description: "Model protocol paragraphs for AI pre-screening, voice and text outreach." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Benchmarks, root causes and a pre-screening routine." },
  ],
};

export default page;
