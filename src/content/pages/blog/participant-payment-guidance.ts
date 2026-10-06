import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/participant-payment-guidance",
  category: "blog",
  title: "Paying research participants: what FDA and OHRP allow",
  description:
    "What FDA and OHRP guidance says about paying participants, from amounts and timing to ads and travel costs, what the evidence shows, and the 2026 tax threshold.",
  keywords: [
    "paying research participants FDA guidance",
    "OHRP payment to research subjects",
    "clinical trial participant compensation undue influence",
    "research participant reimbursement travel",
  ],
  eyebrow: "Blog",
  h1: "Paying research participants: what FDA and OHRP guidance allows and how payment affects recruitment",
  intro:
    "FDA and OHRP both call paying research participants \"a common and, in general, acceptable practice,\" and FDA says reimbursing travel and lodging does not raise undue-influence concerns.{{cite:fda-payment,ohrp-faq}} What IRBs weigh is how much, for what and when. The evidence suggests fair payment helps recruitment without the harms people fear. This is general information, not legal or tax advice.",
  summary: "FDA and OHRP positions on participant payment, the difference between reimbursement and incentives, what trials of payment found, and tax and SSI basics.",
  lastUpdated: "2027-01-15",
  blog: { date: "2027-01-15", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "IRB and HIPAA guide", secondaryHref: "/guides/irb-hipaa-patient-outreach" },
  sections: [
    {
      id: "what-fda-says",
      heading: "What does FDA say about paying participants?",
      blocks: [
        {
          type: "p",
          text: "FDA's regulations require consent to be sought in circumstances that \"minimize the possibility of coercion or undue influence.\"{{cite:cfr-50-20}} Its 2018 information sheet on payment explains how that applies to money.{{cite:fda-payment}}",
        },
        {
          type: "ul",
          items: [
            "**Payment is not a benefit.** It is a recruitment incentive, so it is not weighed against the study's risks.{{cite:fda-payment}}",
            "**Travel reimbursement is fine.** FDA does not consider reimbursement for travel to and from the site, or for airfare, parking and lodging, to raise undue-influence issues.{{cite:fda-payment}}",
            "**The IRB sees everything up front.** The amount and schedule of all payments go to the IRB at initial review, and the IRB checks the amount, method and timing.{{cite:fda-payment}}",
            "**Credit accrues as the study goes.** Payment should not depend on finishing the whole study, though a small completion bonus is acceptable if it is not coercive.{{cite:fda-payment}}",
            "**It goes in the consent form.** All payment information, including amount and schedule, belongs in the informed consent document.{{cite:fda-payment}}",
          ],
        },
      ],
    },
    {
      id: "what-ohrp-adds",
      heading: "What does OHRP add for HHS-funded research?",
      blocks: [
        {
          type: "p",
          text: "The Common Rule uses the same \"coercion or undue influence\" standard in 45 CFR 46.116. OHRP's guidance asks investigators to justify the level and purpose of payments to the IRB, and to explain in the consent process when a participant would receive partial or no payment, for example after withdrawing or being removed from the study.{{cite:ohrp-faq}}",
        },
        {
          type: "p",
          text: "For long studies, OHRP recommends prorating payment rather than paying at the end, because delayed payment could discourage people from exercising their right to withdraw. Its examples are monthly payments over a 6-month study, or payment after every two sessions of a 12-session study.{{cite:ohrp-faq}} OHRP has also revised its FAQ to say that payment may include compensation for research risks and can be an acceptable reason to take part, although IRBs should not treat payment as offsetting risk.{{cite:ohrp-faq}}",
        },
      ],
    },
    {
      id: "types-of-payment",
      heading: "How do reimbursement, compensation and incentives differ?",
      blocks: [
        {
          type: "p",
          text: "HHS's Secretary's Advisory Committee on Human Research Protections (SACHRP) proposed a framework in 2019. Its recommendations advise HHS; they are not binding guidance.{{cite:sachrp-2019}}",
        },
        {
          type: "table",
          caption: "Types of payment in SACHRP's 2019 recommendations",
          columns: ["Type", "What it covers", "SACHRP's view"],
          rows: [
            ["Reimbursement", "Out-of-pocket costs such as transportation, lodging, childcare, extra medical costs and meals", "Does not raise undue-influence concerns; agrees with FDA"],
            ["Compensation", "Time, effort, burden and inconvenience", "Fair compensation is not an undue influence"],
            ["Appreciation", "Small payments or gifts to say thank you", "Does not raise concerns"],
            ["Incentive", "Payment meant to encourage enrollment or completion, such as a completion bonus", "Can be appropriate, with safeguards"],
          ],
          note: "Summarized from SACHRP's recommendations to HHS.{{cite:sachrp-2019}}",
        },
      ],
    },
    {
      id: "does-payment-work",
      heading: "Does payment change who enrolls?",
      blocks: [
        {
          type: "p",
          text: "Two randomized trials tested this directly, embedded in real studies: one at smoking cessation clinics in two health systems and one on wards of the Hospital of the University of Pennsylvania. In the smoking cessation trial, consent rates were 21.8% with no incentive, 35.9% with $200 and 47.1% with $500. In the ambulation trial, incentives of $100 or $300 made no difference (45.4%, 48.1% and 43.0%). Neither trial found evidence that larger payments blunted sensitivity to risk or drew in lower-income people disproportionately, and incentive size did not change time spent reading the risk sections of consent forms or understanding of the trial.{{cite:halpern-2021}}",
        },
        {
          type: "stats",
          items: [
            { value: "21.8%", label: "Consented with no incentive (smoking trial)", cite: "halpern-2021" },
            { value: "47.1%", label: "Consented with a $500 incentive (smoking trial)", cite: "halpern-2021" },
          ],
        },
        {
          type: "p",
          text: "Costs are a barrier in their own right. In a survey of 5,499 cancer patients from 2007 to 2011, income remained a significant predictor of trial participation after adjustment (odds ratio 0.73). Lower income predicted lower participation even among patients 65 and older, who have Medicare, and lower-income patients voiced more concerns about cost.{{cite:unger-2013}} Bierer and colleagues argue that payment policies that leave participants financially worse off are unjust, because they shape enrollment by socioeconomic status.{{cite:bierer-2021}}",
        },
      ],
    },
    {
      id: "ads-and-payment",
      heading: "Can recruitment ads mention payment?",
      blocks: [
        {
          type: "p",
          text: "Yes, plainly. FDA treats direct advertising as the start of the consent process and expects the IRB to review it. Ads may say participants will be paid, but should not emphasize the payment or the amount, for example with larger or bold type, and should not promise \"free medical treatment\" when the point is only that participants will not be charged.{{cite:fda-recruiting}}",
        },
        {
          type: "p",
          text: "Social media ads fit FDA's description of direct advertising: material meant to be seen or heard by prospective subjects to solicit their participation.{{cite:fda-recruiting}} Bond creates and runs Meta and Google ad campaigns for each study, and its agents contact every new lead.{{cite:bond-product}} Whoever writes the ads, the copy goes to the site's IRB, and payment, if mentioned, should be stated in ordinary type alongside the time commitment.",
        },
      ],
    },
    {
      id: "taxes-and-benefits",
      heading: "What about taxes and public benefits?",
      blocks: [
        {
          type: "p",
          text: "IRS instructions list payments made to individuals for participating in a medical research study among the items reported in box 3, Other income, of Form 1099-MISC. For tax years beginning after 2025, the reporting threshold for these payments rose to $2,000, with inflation adjustments possible from 2027.{{cite:irs-1099}} Check with your institution's tax office before changing practice.",
        },
        {
          type: "p",
          text: "For participants on Supplemental Security Income (SSI), Social Security excludes the first $2,000 per calendar year of compensation from a clinical trial that is IRB-approved, tests medical treatments and targets a rare disease. Reimbursement for expenses such as travel and meals is handled separately and does not count toward the $2,000. SSA treats the informed consent form as primary evidence.{{cite:ssa-poms}}",
        },
      ],
    },
    {
      id: "what-to-put-in-place",
      heading: "What should a site put in place?",
      blocks: [
        {
          type: "checklist",
          items: [
            "A payment schedule that accrues per visit, prorated for long studies, with any completion bonus kept small.{{cite:fda-payment,ohrp-faq}}",
            "Reimbursement budgeted separately from compensation, in the clinical trial agreement and in the consent form.",
            "A line in the first call telling patients that travel and lodging costs are reimbursed, as FDA recommends.{{cite:fda-enhancing-2025}}",
            "Ad copy that mentions payment, if at all, without emphasis.{{cite:fda-recruiting}}",
            "A copy of the consent form, or a summary letter, ready for participants on SSI in rare disease trials.{{cite:ssa-poms}}",
            "A process for paying promptly after each visit, so participants are not out of pocket for long.",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Removing the travel problem",
          text: "After enrollment, Bond's agents send visit reminders and book transportation, so getting to the site does not depend on the patient arranging it.{{cite:bond-product}} See [Engage](/engage).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is paying research participants allowed?",
      a: "Yes. FDA and OHRP both call it a common and, in general, acceptable practice. The IRB reviews the amount, method and timing to make sure payment is not an undue influence.{{cite:fda-payment,ohrp-faq}}",
    },
    {
      q: "Can payment depend on completing the study?",
      a: "Not entirely. FDA says credit should accrue as the study progresses, but a small completion bonus is acceptable if it is not coercive.{{cite:fda-payment}}",
    },
    {
      q: "Do participants receive a Form 1099?",
      a: "Research participation payments are reported as other income on Form 1099-MISC once they reach the reporting threshold, which is $2,000 for tax years beginning after 2025.{{cite:irs-1099}} This is not tax advice.",
    },
  ],
  sources: [
    {
      id: "fda-payment",
      title: "Payment and Reimbursement to Research Subjects: Guidance for Institutional Review Boards and Clinical Investigators (information sheet)",
      publisher: "US Food and Drug Administration, Office of Good Clinical Practice",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/payment-and-reimbursement-research-subjects",
      year: "2018",
      note: "January 2018. Quotes: \"Paying research subjects in exchange for their participation is a common and, in general, acceptable practice. Payment to research subjects for participation in studies is not considered a benefit that would be part of the weighing of benefits or risks; it is a recruitment incentive.\"; \"FDA does not consider reimbursement for travel expenses to and from the clinical trial site and associated costs such as airfare, parking, and lodging to raise issues regarding undue influence.\"; \"The amount and schedule of all payments should be presented to the IRB at the time of initial review.\"; \"Any credit for payment should accrue as the study progresses and not be contingent upon the subject completing the entire study.\"; \"payment of a small proportion as an incentive for completion of the study is acceptable to FDA, providing that such incentive is not coercive.\"; \"All information concerning payment, including the amount and schedule of payment(s), should be set forth in the informed consent document.\"",
    },
    {
      id: "cfr-50-20",
      title: "21 CFR 50.20, General requirements for informed consent",
      publisher: "Electronic Code of Federal Regulations",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50/subpart-B/section-50.20",
      year: "2026",
      note: "Quote: \"An investigator shall seek such consent only under circumstances that provide the prospective subject or the representative sufficient opportunity to consider whether or not to participate and that minimize the possibility of coercion or undue influence.\"",
    },
    {
      id: "ohrp-faq",
      title: "Informed Consent FAQs: When does compensating subjects undermine informed consent or parental permission?",
      publisher: "HHS Office for Human Research Protections",
      url: "https://www.hhs.gov/ohrp/regulations-and-policy/guidance/faq/informed-consent/index.html",
      note: "Read October 5, 2026 (hhs.gov rejects some automated requests; loads in a browser). Quotes the 45 CFR 46.116 standard. Also: \"Paying research subjects in exchange for their participation is a common and, in general, acceptable practice.\"; \"Information submitted to IRBs should indicate and justify proposed levels and purposes of remuneration\"; \"including a description of the conditions under which a subject would receive partial or no payment (e.g., what will happen if he or she withdraws part way through the research or the investigator removes a subject from the study for medical or noncompliance reasons)\"; \"OHRP recommends that payment be prorated for the time of participation in the study rather than delayed until study completion\"; \"if the study is conducted over a period of 6 months, there might be a monthly or bi-monthly payment. Or, if the study involves 12 sessions, there might be payment after every two sessions.\"; \"remuneration to subjects may include compensation for risks associated with their participation in research and that compensation may be an acceptable motive for agreeing to participate in research\"; \"OHRP continues to assert that IRBs should not consider remuneration as a way of offsetting risks.\"",
    },
    {
      id: "sachrp-2019",
      title: "Attachment A: Addressing Ethical Concerns Regarding Offers of Payment to Research Participants",
      publisher: "Secretary's Advisory Committee on Human Research Protections (SACHRP), HHS",
      url: "https://www.hhs.gov/ohrp/sachrp-committee/recommendations/attachment-a-september-30-2019/index.html",
      year: "2019",
      note: "September 30, 2019 recommendations; page content last reviewed October 18, 2019; read October 5, 2026. Quotes: \"Reimbursing participants (or their caregivers) for out-of-pocket costs incurred as a result of study participation, such as transportation, lodging, childcare, additional medical expenses, and meals outside the home\"; \"2. SACHRP recommends that OHRP and FDA clarify that compensating participants for their time and effort is not an undue influence.\"; \"3. SACHRP recommends that OHRP and FDA acknowledge that appreciation payments to research participants do not raise concerns about undue influence.\"; \"8. SACHRP recommends that OHRP and FDA guidance clarify that incentives paid as completion bonuses can be appropriate and are not necessarily unduly influential.\"",
    },
    {
      id: "halpern-2021",
      title: "Effectiveness and Ethics of Incentives for Research Participation: 2 Randomized Clinical Trials",
      publisher: "JAMA Internal Medicine (Halpern SD et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34542553/",
      year: "2021",
      note: "Two incentive RCTs embedded in parent trials, 2017 to 2019. Quotes: \"Incentives significantly increased consent rates among those in the smoking trial in 47 of 216 (21.8%), 78 of 217 (35.9%), and 104 of 221 (47.1%) in the $0, $200, and $500 groups, respectively\"; \"Incentives did not increase consent among those in the ambulation trial: 98 of 216 (45.4%), 102 of 212 (48.1%), and 92 of 214 (43.0%) in the $0, $100, and $300 groups\"; \"In neither trial was there evidence of undue or unjust inducement\"; \"There were no significant effects of incentive size on the secondary outcomes in either trial, including time spent reviewing the risk sections of consent forms, perceived research risks, trial understanding, perceived coercion, or therapeutic misconceptions.\"",
    },
    {
      id: "unger-2013",
      title: "Patient income level and cancer clinical trial participation",
      publisher: "Journal of Clinical Oncology (Unger JM et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/23295802/",
      year: "2013",
      note: "Internet-based survey, 2007 to 2011. Quotes: \"From 2007 to 2011, 5,499 patients were successfully surveyed.\"; \"In a multivariable model, income remained a statistically significant predictor of clinical trial participation (odds ratio, 0.73; 95% CI, 0.57 to 0.94; P = .01). Even in patients age ≥ 65 years, who have universal access to Medicare, lower income predicted lower trial participation. Cost concerns were much more evident among lower-income patients\".",
    },
    {
      id: "bierer-2021",
      title: "Fair payment and just benefits to enhance diversity in clinical research",
      publisher: "Journal of Clinical and Translational Science (Bierer BE et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34527298/",
      year: "2021",
      note: "Commentary. Quote: \"approaches to payment that leave participants financially worse off as a consequence of taking part in research are inherently unjust as they have a differential impact on recruitment and retention based on socioeconomic status.\"",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators (information sheet)",
      publisher: "US Food and Drug Administration, Office of Good Clinical Practice",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "January 1998. Quotes: \"Direct advertising for research subjects, i.e., advertising that is intended to be seen or heard by prospective subjects to solicit their participation in a study, is not in and of itself, an objectionable practice.\"; \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process. Advertisements should be reviewed and approved by the IRB\"; \"Advertisements should not promise \\\"free medical treatment,\\\" when the intent is only to say subjects will not be charged for taking part in the investigation. Advertisements may state that subjects will be paid, but should not emphasize the payment or the amount to be paid, by such means as larger or bold type.\"",
    },
    {
      id: "fda-enhancing-2025",
      title: "Enhancing Participation in Clinical Trials — Eligibility Criteria, Enrollment Practices, and Trial Designs: Guidance for Industry (Revision 1)",
      publisher: "US Food and Drug Administration (CDER and CBER)",
      url: "https://www.fda.gov/media/190162/download",
      year: "2025",
      note: "Final guidance, December 2025. Quote: \"During recruitment, offer and make participants aware of financial reimbursements for expenses associated with costs incurred by participation in clinical trials (e.g., travel and lodging expenses).\"",
    },
    {
      id: "irs-1099",
      title: "Instructions for Forms 1099-MISC and 1099-NEC",
      publisher: "Internal Revenue Service",
      url: "https://www.irs.gov/instructions/i1099mec",
      year: "2026",
      note: "Read October 2026. Quotes: \"For tax years beginning after 2025, the minimum threshold amount for reporting certain payments required to be reported on certain information returns and/or perform backup withholding on those payments increased to $2,000 and may be adjusted for inflation beginning in calendar year 2027.\"; \"At least $2,000 in: ... Other income payments ( box 3 )\"; \"Other items required to be reported in box 3 include the following. ... A payment or series of payments made to individuals for participating in a medical research study or studies.\"",
    },
    {
      id: "ssa-poms",
      title: "POMS SI 00830.735 Payments for Clinical Trial Participation",
      publisher: "Social Security Administration",
      url: "https://secure.ssa.gov/poms.nsf/lnx/0500830735",
      year: "2023",
      note: "Effective 01/13/2023 to present. Quotes: \"exclude from income the first $2,000 paid during a calendar year to an SSI beneficiary, spouse, or deemor as compensation for participation in a clinical trial, but only if the clinical trial meets the following requirements : • must be reviewed and approved by an IRB; • must involve research and testing of medical treatments; and • must target a rare disease or condition.\"; \"Payments to reimburse clinical trial participants for expenses incurred while participating in the trial do not reduce the $2,000 calendar year maximum.\"; \"The informed consent form is primary evidence.\"",
    },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
  ],
  related: [
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What an IRB reviews before outreach starts." },
    { label: "IRB submission language for AI outreach", href: "/templates/irb-submission-language-ai-outreach", description: "Template text for describing AI-assisted outreach to an IRB." },
    { label: "Informed consent", href: "/glossary/informed-consent", description: "What informed consent requires and who obtains it." },
    { label: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment", description: "How ad-driven recruitment compares with Bond's approach." },
  ],
};

export default page;
