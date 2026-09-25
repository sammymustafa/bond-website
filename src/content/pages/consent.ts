import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/consent",
  category: "product",
  title: "AI informed consent support for clinical trials and eConsent",
  description:
    "Bond explains the IRB-approved consent form in plain language, answers patient questions, checks understanding and escalates to staff. The site obtains consent.",
  keywords: [
    "AI informed consent clinical trial",
    "eConsent support",
    "informed consent comprehension",
    "plain-language consent",
    "clinical trial consent software",
  ],
  eyebrow: "Product: Consent",
  h1: "Consent support that leaves the investigator in charge",
  intro:
    "Bond Health's Consent stage helps patients understand the consent form the study's IRB already approved. It explains the form in plain language, answers questions, checks understanding of key points and hands anything it should not answer to study staff. The investigator or delegated site staff still obtain consent, on paper or through eConsent, and the form itself does not change.",
  summary: "How Bond explains the approved consent form, answers patient questions and escalates to staff while the site obtains consent.",
  lastUpdated: "2026-09-24",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "what-bond-does",
      heading: "What does Bond do in the consent process?",
      blocks: [
        {
          type: "p",
          text: "Consent is the third stage of Bond's workflow. [Identify](/identify) finds candidates in the EHR, [Engage](/engage) contacts and pre-screens them, and Consent helps each patient understand the study and its consent form.{{cite:bond-site}} Bond does four things at this stage:",
        },
        {
          type: "ul",
          items: [
            "**Plain-language explanations.** Bond reads the approved informed consent form (ICF) and explains what each part means in everyday words. The form is not edited.",
            "**Patient questions.** The patient can ask about visits, procedures, time commitment, the risks the form describes, or how to withdraw. Bond answers from the approved ICF and the study materials the site provides. Consent Q&A runs in the patient's preferred language, including English, Spanish, Mandarin and many others.{{cite:bond-product}}",
            "**Comprehension support.** Bond asks short check-back questions on key points, such as randomization, placebo and the right to withdraw, and explains a point again when an answer shows a gap.",
            "**Escalation to staff.** Questions about the patient's own health, eligibility or whether to take part go to the study team. As with outreach, patients are told AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
          ],
        },
        {
          type: "p",
          text: "Bond's site cites 90%+ completion for its consent support, with faster consent completion and fewer drop-offs as the outcomes it aims for.{{cite:bond-site}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "What stays the same",
          text: "The investigator, or site staff the investigator delegates, conducts the consent process, as ICH E6(R3) describes.{{cite:ich-e6r3}} The patient reads and signs the IRB-approved ICF word for word. Bond adds explanation around it.",
        },
      ],
    },
    {
      id: "why-support",
      heading: "Why do consent forms need support?",
      blocks: [
        {
          type: "p",
          text: "Consent forms are long and hard to read. Across 315 solid-tumor trial consent forms from 2004 to 2010 at one US institution, the median length was 5,129 words.{{cite:duong-2021}} Consent forms from 798 federally funded US trials had a mean Flesch-Kincaid grade level of 12.0, against an 8th-grade average reading level for US adults.{{cite:mirza-2024}}",
        },
        {
          type: "stats",
          items: [
            { value: "12.0", label: "Mean reading grade level of consent forms in 798 federally funded US trials", cite: "mirza-2024" },
            { value: "5,129", label: "Median words per consent form in 315 solid-tumor trials at one US center", cite: "duong-2021" },
            { value: "52.1%", label: "Pooled share of participants who understood randomization, across 103 studies", cite: "tam-2015" },
          ],
        },
        {
          type: "p",
          text: "In the same 798 trials, each one-grade increase in a form's reading level was associated with a 16% higher dropout rate, an association rather than proof of cause.{{cite:mirza-2024}}",
        },
        {
          type: "p",
          text: "Understanding is uneven, and it has not improved. A meta-analysis of 103 studies found that 52.1% of participants understood randomization and 53.3% understood placebo, with no increase in understanding over 30 years.{{cite:tam-2015}} FDA's final informed consent guidance (August 2023) says that long, complex, legalistic forms with a high reading level may overwhelm prospective subjects and may inhibit reading of the full document.{{cite:fda-ic-2023}}",
        },
        {
          type: "p",
          text: "Better forms help. In a 2026 randomized study of healthy adult volunteers, a redesigned 14-page form written below a sixth-grade level scored 79.3% mean comprehension, against 65.7% for the original 21-page industry form.{{cite:emanuel-2026}} Rewriting the form is up to the sponsor and the IRB; Bond helps the patient through the form the study already has.",
        },
      ],
    },
    {
      id: "evidence",
      heading: "What does research say about chat-based and electronic consent?",
      blocks: [
        {
          type: "p",
          text: "In a US pediatric genomic research program reported in JAMIA in 2023, median time from referral to consent was 5 days with a chat-based consent tool and 16 days with staff-led consent, and about 96% of the 59 chat users who took its comprehension quiz passed.{{cite:jamia-chat-consent}} Families chose their arm and this was not a drug trial, so treat it as a signal, not a benchmark.",
        },
        {
          type: "table",
          caption: "Selected studies on consent format and understanding",
          columns: ["Study", "What was compared", "Result", "Caveat"],
          rows: [
            ["Cohen et al., JMIR, 2023", "eConsent vs paper across 35 studies and 13,281 participants", "No study found paper better on comprehension, acceptability or usability{{cite:cohen-2023}}", "Cycle times were longer with eConsent; authors industry-affiliated"],
            ["Emanuel et al., Clinical Trials, 2026", "21-page form vs redesigned 14-page form", "Mean comprehension 65.7% vs 79.3%{{cite:emanuel-2026}}", "Healthy adults read sample forms; not real enrollment"],
            ["Almodallal et al., JCO Oncology Practice, 2021", "6,000-word vs 2,000-word mock form", "Median reading time 12 vs 8 minutes; 73% vs 84% willing to sign{{cite:almodallal-2021}}", "Primary endpoint not met; willingness to sign was secondary"],
          ],
        },
        {
          type: "p",
          text: "Two reviews point to what helps most. A JAMA systematic review concluded that more one-on-one time with a study team member or neutral educator appears to be the most effective way to improve understanding.{{cite:flory-2004}} A review of six studies in low-literacy populations found the highest comprehension in the two that used teach-back or teach-to-goal, though its authors call the evidence extremely limited.{{cite:tamariz-2013}} Neither review tested an AI tool. Bond borrows the check-back idea.",
        },
      ],
    },
    {
      id: "manual-vs-bond",
      heading: "How does Bond compare with the manual consent process?",
      blocks: [
        {
          type: "p",
          text: "The consent discussion itself does not change. What changes is the help the patient gets while working through the form, and how much of that the coordinator can see.",
        },
        {
          type: "table",
          caption: "The consent workflow with and without Bond",
          columns: ["Step", "Manual process", "With Bond"],
          rows: [
            ["Reading the form", "Patient reads the ICF alone, at home or in the clinic", "Patient reads the same ICF with plain-language explanations of each part"],
            ["Questions", "Saved for the visit or a call back from staff", "Answered from the approved ICF and study materials; the rest routed to staff"],
            ["Checking understanding", "Done by staff during the consent discussion", "Check-back questions on key points before the discussion"],
            ["Escalation", "Patient calls or messages the site", "Topics set with the study team go to staff; patients can reach a person through a live transfer or a human callback, as the site prefers{{cite:bond-product}}"],
            ["Consent discussion and signature", "Investigator or delegated staff", "Unchanged: investigator or delegated staff"],
            ["Record", "Notes in source documents", "Bond audit trail; the site still documents consent in its own records"],
            ["Status", "Spreadsheet or CTMS entry", "Consent status in Bond's real-time dashboard"],
          ],
          note: "Bond column: the Consent stage as Bond describes it, configured per study.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "regulations",
      heading: "Which rules govern AI support in informed consent?",
      blocks: [
        {
          type: "p",
          text: "As of September 2026, these rules set what consent must contain, who conducts it and how electronic tools fit.",
        },
        {
          type: "ul",
          items: [
            "**21 CFR 50.20.** Consent information must be in language understandable to the subject, who must have sufficient opportunity to consider whether to take part.{{cite:cfr-50-20}}",
            "**21 CFR 50.25.** Lists the basic elements every FDA-regulated consent must include, starting with a statement that the study involves research.{{cite:cfr-50-25}}",
            "**45 CFR 46.116(a)(5)(i).** For research covered by the revised Common Rule, consent must begin with a concise, focused presentation of the key information most likely to help a person decide.{{cite:cfr-46-116}}",
            "**FDA and OHRP eConsent guidance.** Joint December 2016 guidance on electronic systems used to obtain informed consent in FDA-regulated and HHS-regulated research.{{cite:fda-ohrp-econsent-2016}}",
            "**ICH E6(R3).** The consent process should be conducted by the investigator or delegated staff, no one at the site should coerce or unduly influence participation, and the IRB should approve informed consent materials before the trial starts.{{cite:ich-e6r3}}",
          ],
        },
        {
          type: "p",
          text: "Some states also regulate AI in patient communications. California AB 3030, operative since January 1, 2025, requires health facilities, clinics, physician offices and group practices that use generative AI to write communications about a patient's clinical information to include an AI disclaimer and instructions for reaching a human, unless a licensed or certified provider reads and reviews the message.{{cite:ca-ab-3030}} Texas HB 149, effective January 1, 2026, requires a provider that uses AI in relation to health care services to disclose that use to the patient.{{cite:tx-hb-149}} Whether a given law covers consent support is a question for the site's counsel. For the outreach side, see [IRB and HIPAA rules for patient outreach](/guides/irb-hipaa-patient-outreach).",
        },
      ],
    },
    {
      id: "configuration",
      heading: "How is consent support configured and reviewed?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Start from the approved documents",
              text: "The site shares the current IRB-approved ICF and approved study materials, and Bond works from that version. When the IRB approves an amended ICF, the site sends the new version.",
            },
            {
              title: "Set escalation rules with the study team",
              text: "The coordinator and PI decide which topics always go to a person, such as the patient's own medical history.",
            },
            {
              title: "Choose the points to check",
              text: "The team picks the concepts that matter most for the study. Randomization and placebo are good candidates: in the meta-analysis above, they were the two components participants understood least.{{cite:tam-2015}}",
            },
            {
              title: "Review before any patient sees it",
              text: "Coordinators and the PI review the explanations and try sample conversations before go-live. Ask the IRB early whether it wants to review the consent support materials, since ICH E6(R3) expects IRB approval of informed consent materials before a trial starts.{{cite:ich-e6r3}}",
            },
          ],
        },
        {
          type: "p",
          text: "Once live, the coordinator sees each patient's consent status and any escalations to staff in the same real-time dashboard used for screening and outreach, with the activity behind them in Bond's audit trail.{{cite:bond-site}} Consent support is configured during [implementation](/implementation), which takes 48 hours for full EHR integration, depending on the EHR, IT review and interface method.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "phi",
      heading: "How does Bond handle patient information?",
      blocks: [
        {
          type: "p",
          text: "Consent conversations can include protected health information, so they run under the same controls as the rest of Bond.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "Bond is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway.{{cite:bond-product}}",
            "Bond signs a business associate agreement (BAA) with the site.{{cite:bond-site}}",
            "Data is encrypted at rest and in transit, using AES-256 where applicable.{{cite:bond-site}}",
            "Role-based access control limits who on the study team can see a conversation, and sign-in supports SSO.{{cite:bond-site}}",
            "Audit logging tracks access to records.{{cite:bond-site}}",
          ],
        },
        {
          type: "p",
          text: "Penetration testing, employee security training and the Trust Center are covered on the [security](/security) page.",
        },
      ],
    },
    {
      id: "limits",
      heading: "What does Bond not do in consent?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**It does not obtain consent.** The investigator or delegated staff conduct and document it under the site's procedures.{{cite:ich-e6r3}}",
            "**It does not edit, shorten or translate the ICF.** Changes to the form go through the sponsor and the IRB as usual. If cost is the issue, see [what a consent form costs](/guides/consent-form-cost).",
            "**It does not give medical advice.** Bond does not tell a patient whether to join or whether the study is right for them. Those questions go to staff.",
            "**It does not replace the consent discussion.** The evidence favors one-on-one discussion with the study team, and Bond is built to prepare patients for it.{{cite:flory-2004}}",
            "**It does not carry regulatory approvals of its own.** Bond does not hold FDA clearance for consent support and does not claim IRB approval of any study material. Each study's IRB decides what it reviews.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond explains a consent form, answers patient questions and hands off to staff, and how it would fit your consent workflow.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does Bond obtain informed consent from patients?",
      a: "No. The investigator or site staff the investigator delegates conduct the consent process, as ICH E6(R3) describes.{{cite:ich-e6r3}} Bond helps the patient understand the form, and the site obtains and documents consent.",
    },
    {
      q: "Is Bond an eConsent platform?",
      a: "No. Bond supports patient understanding and tracks consent status alongside the study's paper or electronic consent process, and does not replace that documentation. The sponsor, site and IRB choose the process; FDA and OHRP guidance covers electronic consent.{{cite:fda-ohrp-econsent-2016}}",
    },
    {
      q: "What happens when a patient asks something Bond should not answer?",
      a: "The question goes to the study team under escalation rules the coordinator and PI set. The patient can also reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How much does consent support cost?",
      a: "AI consent support is included in every Bond engagement. Pricing is custom and has two parts: a volume-based platform fee, plus a success fee per randomized patient. There is no integration fee. See [pricing](/pricing).{{cite:bond-site}}",
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
      id: "ich-e6r3",
      title: "ICH Harmonised Guideline: Guideline for Good Clinical Practice E6(R3)",
      publisher: "International Council for Harmonisation",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Final version adopted January 6, 2025. Sections 2.4.2 (IRB approval of informed consent materials), 2.8.3 and 2.8.5.",
    },
    {
      id: "duong-2021",
      title: "Understanding Verbosity: Funding Source and the Length of Consent Forms for Cancer Clinical Trials",
      publisher: "Journal of Cancer Education (Duong Q et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7648720/",
      year: "2021",
      note: "Single US institution (Mayo Clinic), phase I to III solid-tumor trials, 2004 to 2010.",
    },
    {
      id: "mirza-2024",
      title: "The literacy barrier in clinical trial consents: a retrospective analysis",
      publisher: "eClinicalMedicine (Mirza FN et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11701435/",
      year: "2024",
      note: "Federally funded interventional US trials with consent forms posted on ClinicalTrials.gov. Dropout finding is a risk-adjusted association.",
    },
    {
      id: "tam-2015",
      title: "Participants' understanding of informed consent in clinical trials over three decades: systematic review and meta-analysis",
      publisher: "Bulletin of the World Health Organization (Tam NT et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4371493/",
      year: "2015",
      note: "Quote: \"The analysis included 103 studies evaluating 135 cohorts of participants. ... 53.3% for placebo and 52.1% for randomization.\" The abstract also reports that the proportion who understood informed consent had not increased over 30 years.",
    },
    {
      id: "fda-ic-2023",
      title: "Informed Consent: Guidance for IRBs, Clinical Investigators, and Sponsors",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/media/88915/download",
      year: "2023",
      note: "Final guidance, August 2023. Quote: \"Consent forms that are long, complex, legalistic, and have a high reading level may overwhelm prospective subjects and may inhibit reading of the full document and understanding of the relevant information.\"",
    },
    {
      id: "emanuel-2026",
      title: "A randomized control trial of re-designed and shorter research informed consent forms to improve comprehension",
      publisher: "Clinical Trials (Emanuel EJ et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/41902712/",
      year: "2026",
      note: "Quote: \"The medium informed consent form (mean score of 79.3%) scored significantly higher on comprehension than the long informed consent form (65.7% mean score, p < 0.001)\". 334 healthy US adults from a survey panel were randomized to a 21-page, 14-page or 3-page form; the shorter forms were written below a sixth-grade level. Not a real enrollment setting.",
    },
    {
      id: "jamia-chat-consent",
      title: "Using a chat-based informed consent tool in large-scale genomic research",
      publisher: "Journal of the American Medical Informatics Association",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10797258/",
      year: "2023",
      note: "Savage et al. Published online September 4, 2023; JAMIA 2024;31(2):472-478. Chat-based consent (n=54) vs traditional staff-led consent (n=74) in a US pediatric genomic research program; families chose their arm. Quote: \"Of the 59 chat users who took the quiz, ∼96% passed.\"",
    },
    {
      id: "cohen-2023",
      title: "Comparative Effectiveness of eConsent: Systematic Review",
      publisher: "Journal of Medical Internet Research (Cohen E et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10504628/",
      year: "2023",
      note: "Authors employed by AstraZeneca and Signant Health.",
    },
    {
      id: "almodallal-2021",
      title: "Randomized, Double-Blind Trial on the Impact of Word Count in Cancer Clinical Trial Consent Forms",
      publisher: "JCO Oncology Practice (Almodallal Y et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9810143/",
      year: "2021",
    },
    {
      id: "flory-2004",
      title: "Interventions to improve research participants' understanding in informed consent for research: a systematic review",
      publisher: "JAMA (Flory J, Emanuel E)",
      url: "https://pubmed.ncbi.nlm.nih.gov/15467062/",
      year: "2004",
    },
    {
      id: "tamariz-2013",
      title: "Improving the informed consent process for research subjects with low literacy: a systematic review",
      publisher: "Journal of General Internal Medicine (Tamariz L et al.)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3539038/",
      year: "2013",
    },
    {
      id: "cfr-50-20",
      title: "21 CFR 50.20 General requirements for informed consent",
      publisher: "eCFR, US Government Publishing Office",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20",
      year: "2026",
    },
    {
      id: "cfr-50-25",
      title: "21 CFR 50.25 Elements of informed consent",
      publisher: "eCFR, US Government Publishing Office",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.25",
      year: "2026",
    },
    {
      id: "cfr-46-116",
      title: "45 CFR 46.116 General requirements for informed consent",
      publisher: "eCFR, US Government Publishing Office",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116",
      year: "2026",
    },
    {
      id: "fda-ohrp-econsent-2016",
      title: "Use of Electronic Informed Consent: Questions and Answers; Guidance for Institutional Review Boards, Investigators, and Sponsors; Availability",
      publisher: "Federal Register (FDA and HHS OHRP)",
      url: "https://www.federalregister.gov/documents/2016/12/15/2016-30146/use-of-electronic-informed-consent-questions-and-answers-guidance-for-institutional-review-boards",
      year: "2016",
    },
    {
      id: "ca-ab-3030",
      title: "AB-3030 Health care services: artificial intelligence (Chapter 848, Statutes of 2024)",
      publisher: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3030",
      year: "2024",
      note: "Health and Safety Code 1339.75, operative January 1, 2025. Does not apply where a licensed or certified provider reads and reviews the communication. Checked September 2026.",
    },
    {
      id: "tx-hb-149",
      title: "H.B. No. 149, Texas Responsible Artificial Intelligence Governance Act (enrolled), Business & Commerce Code Sec. 552.051",
      publisher: "Texas Legislature Online",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm",
      year: "2025",
      note: "Effective January 1, 2026. Checked September 2026. Quote: \"(d) A disclosure under Subsection (b): (1) must be clear and conspicuous; (2) must be written in plain language; and (3) may not use a dark pattern.\" Subsection (f) applies the disclosure duty to AI used in relation to health care services or treatment.",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond finds candidates in the chart and explains each match." },
    { label: "Engage: voice and text outreach", href: "/engage", description: "Pre-screening and scheduling before the consent stage." },
    { label: "What a consent form costs", href: "/guides/consent-form-cost", description: "Drafting, IRB review, translation and amendment costs." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What the IRB and privacy rules require before contacting patients." },
    { label: "Security", href: "/security", description: "BAAs, encryption, access control and audit logging." },
    { label: "Pricing", href: "/pricing", description: "Platform fee plus a success fee per randomized patient." },
  ],
};

export default page;
