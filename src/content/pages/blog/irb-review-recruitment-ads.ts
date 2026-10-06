import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/irb-review-recruitment-ads",
  category: "blog",
  title: "What IRBs check in trial ads and landing pages",
  description:
    "FDA treats recruitment ads as the start of informed consent. What IRBs check in ad copy, landing pages and pre-screeners, and the edits they ask for most.",
  keywords: [
    "IRB review of recruitment advertisements",
    "FDA guidance recruiting study subjects ads",
    "clinical trial ad IRB approval",
    "IRB landing page pre-screener review",
    "recruitment material IRB amendment",
  ],
  eyebrow: "Blog",
  h1: "What IRBs check in clinical trial recruitment ads and landing pages",
  intro:
    "IRBs review recruitment ads because FDA considers direct advertising the start of the informed consent process.{{cite:fda-recruiting}} They check three things: what the ad claims, how it looks in its final form, and what happens to the information people submit. Landing pages and online pre-screeners get the same scrutiny, and knowing the usual objections before you submit saves an amendment cycle.",
  summary: "The FDA guidance behind IRB review of recruitment ads, the edits IRBs ask for most, and how to package ads, landing pages and pre-screeners for faster approval.",
  lastUpdated: "2026-11-04",
  blog: { date: "2026-11-04", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "IRB submission language", secondaryHref: "/templates/irb-submission-language-ai-outreach" },
  sections: [
    {
      id: "why-irbs-review-ads",
      heading: "Why do IRBs review recruitment ads at all?",
      blocks: [
        {
          type: "p",
          text: "FDA's information sheet on recruiting study subjects, issued as final guidance in 1998 and still posted on FDA's site, says IRBs should review the methods and material investigators use to recruit subjects. It treats direct advertising, meaning material meant to be seen or heard by prospective subjects to solicit their participation, as the start of informed consent and subject selection. The IRB's job is to confirm the ad is not unduly coercive and does not promise a certainty of cure beyond the consent form and protocol.{{cite:fda-recruiting}}",
        },
        {
          type: "p",
          text: "Some material falls outside that review. FDA does not count communications aimed at health professionals or news stories as direct advertising, and says trial listings limited to basic information such as title, purpose, eligibility, location and contact details do not need IRB approval.{{cite:fda-recruiting}} Institutions add their own rules: UCSF's IRB, for example, does not re-review a sponsor's national campaign that a central or commercial IRB has approved, but still reviews local materials carrying UCSF contact details.{{cite:ucsf-recruitment}}",
        },
      ],
    },
    {
      id: "what-content",
      heading: "What can an approved ad say?",
      blocks: [
        {
          type: "p",
          text: "FDA suggests limiting an ad to what prospective subjects need to judge their eligibility and interest, and lists items that may be included, while noting none is required:{{cite:fda-recruiting}}",
        },
        {
          type: "ul",
          items: [
            "The name and address of the investigator or research facility.",
            "The condition under study or the purpose of the research.",
            "A summary of the eligibility criteria.",
            "A brief list of participation benefits, if any, such as a no-cost health examination.",
            "The time or other commitment required.",
            "Where the research takes place and whom to contact for more information.",
          ],
        },
        {
          type: "p",
          text: "Many IRBs turn that list into a rule. UCSF's guidelines say ad content \"must be limited to\" these items, plus a reference to UCSF.{{cite:ucsf-ads}} Writing to the list from the start is the simplest way to avoid edits.",
        },
      ],
    },
    {
      id: "common-edits",
      heading: "What edits do IRBs ask for most often?",
      blocks: [
        {
          type: "table",
          caption: "Common objections and where they come from",
          columns: ["What the draft says", "Why the IRB objects"],
          rows: [
            ["\"Try a new treatment for knee pain\"", "\"New treatment\" without saying the product is investigational implies proven worth{{cite:fda-recruiting}}"],
            ["\"Free medical care\"", "Should not promise free treatment when the point is that taking part costs nothing{{cite:fda-recruiting}}"],
            ["Payment in large or bold type", "Ads may say subjects are paid, but should not emphasize the payment or amount{{cite:fda-recruiting}}"],
            ["Payment listed under benefits", "FDA treats payment as a recruitment incentive, not a benefit{{cite:fda-payment}}"],
            ["\"A safe, effective option\" or \"better than current drugs\"", "Investigators may not represent an investigational drug as safe or effective in a promotional context{{cite:cfr-312-7,fda-recruiting}}"],
            ["Wording that the team is not liable for problems", "Listed among content UCSF's IRB does not allow{{cite:ucsf-ads}}"],
          ],
        },
        {
          type: "p",
          text: "Format matters too. The IRB should see the final printed ad to judge relative type size and other visual effects, and the final audio or video for broadcast.{{cite:fda-recruiting}} UCSF advises getting a video concept or script approved before major production spending.{{cite:ucsf-recruitment}}",
        },
      ],
    },
    {
      id: "landing-pages-prescreeners",
      heading: "How do IRBs review landing pages and online pre-screeners?",
      blocks: [
        {
          type: "p",
          text: "As recruitment material. UCSF, for example, states that advertisements, including web-based recruitment materials, need IRB submission and approval, and asks for scripts used in phone recruitment.{{cite:ucsf-recruitment}} Under the revised Common Rule, which governs federally funded research, an IRB may approve collecting information to screen or determine eligibility without informed consent when it is obtained through oral or written communication with the prospective subject, as an online pre-screener does.{{cite:cfr-46-116}} FDA-regulated studies follow FDA's own rules, so ask your IRB which framework it applies.",
        },
        {
          type: "p",
          text: "Expect questions about the data. FDA's guidance on screening scripts asks what happens to personal information if someone stops partway, whether a marketing company gathers the data and sells names, whether records of ineligible people are kept for other studies, and how paper records are destroyed. It also says that \"confidentiality will be maintained\" alone does not tell the IRB enough.{{cite:fda-recruiting}} For a web form, answer the same questions about partial submissions, vendors, retention and any tracking tags on the page.",
        },
      ],
    },
    {
      id: "digital-ads",
      heading: "What is different about social and search ads?",
      blocks: [
        {
          type: "p",
          text: "Regulators have not issued guidance specific to social media recruitment; a 2017 ethics paper noted the gap and offered checklists, including certifying compliance with each site's terms of use and avoiding fake profiles.{{cite:gelinas-2017}} Two practical issues come up with every digital campaign:",
        },
        {
          type: "ul",
          items: [
            "**Variants.** A Google responsive search ad can hold up to 15 headlines and 4 descriptions shown in any combination, so submit every line, not one sample ad.{{cite:google-rsa}}",
            "**Platform rules.** Meta rejects copy that implies the viewer has a condition, such as \"Do you have diabetes?\", even if the IRB approved it.{{cite:meta-personal-attributes}} Check platform rules first so you do not need a second amendment.",
          ],
        },
        {
          type: "p",
          text: "If calls or texts after the ad use AI, IRBs will also want the script and the disclosure wording. Bond's agents tell each patient that AI is being used and connect them to a person at any time, by live transfer to a coordinator or a callback.{{cite:bond-product}} Our [IRB submission language](/templates/irb-submission-language-ai-outreach) has draft paragraphs.",
        },
      ],
    },
    {
      id: "faster-approval",
      heading: "How can a site get recruitment ads approved faster?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Draft from the consent form.** FDA allows the IRB chair or a designee to approve later ads by expedited review when they are easy to compare with the approved consent document.{{cite:fda-recruiting}}",
            "**Submit a complete package**: every ad variant, the landing page text and screenshots, pre-screener questions and logic, call and text scripts, and a short data-handling statement.",
            "**Describe targeting and channels**: platforms, locations, age ranges and dates.",
            "**Keep payment plain**: amount and schedule if needed, normal type, never under benefits.{{cite:fda-payment}}",
            "**Log every approved version** with its approval date, so a team member cannot launch an old or edited variant.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond's ad campaigns, AI disclosure and live handoff to coordinators fit into an IRB-approved recruitment plan.",
          secondaryLabel: "IRB and HIPAA outreach guide",
          secondaryHref: "/guides/irb-hipaa-patient-outreach",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does a ClinicalTrials.gov listing need IRB approval?",
      a: "Not when the format limits it to basic trial information such as title, purpose, eligibility, location and contact details. If extra description can be added, IRB review helps make sure it does not promise benefit.{{cite:fda-recruiting}}",
    },
    {
      q: "Can a trial ad mention how much participants are paid?",
      a: "Yes. FDA says ads may state that subjects will be paid but should not emphasize the payment or amount, for example with larger or bold type.{{cite:fda-recruiting}}",
    },
    {
      q: "Is changing an ad image a new IRB submission?",
      a: "Usually it is an amendment. FDA says new ads after initial approval may be treated as amendments, with expedited review possible when they are easy to compare with the consent document. Check your IRB's own policy.{{cite:fda-recruiting}}",
    },
  ],
  sources: [
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Information Sheet, Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Final, January 1998; content current as of September 5, 2018. Read October 2026. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process.\" Quote: \"IRB review and approval of listings of clinical trials on the internet would provide no additional safeguard and is not required when the system format limits the information provided to basic trial information\". Quote: \"When such advertisements are easily compared to the approved consent document, the IRB chair, or other designated IRB member, may review and approve by expedited means\". Quote: \"Advertisements may state that subjects will be paid, but should not emphasize the payment or the amount to be paid, by such means as larger or bold type.\" Quote: \"A simple statement such as \"confidentiality will be maintained\" does not adequately inform the IRB of the procedures that will be used.\" Quote: \"What happens to personal information if the caller ends the interview or simply hangs up? Are the data gathered by a marketing company? If so, are names, etc. sold to others? Are names of non-eligibles maintained in case they would qualify for another study? Are paper copies of records shredded or are readable copies put out as trash?\"",
    },
    {
      id: "fda-payment",
      title: "Payment and Reimbursement to Research Subjects: Information Sheet",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/payment-and-reimbursement-research-subjects",
      year: "2018",
      note: "Final, January 2018. Read October 2026. Quote: \"Payment to research subjects for participation in studies is not considered a benefit that would be part of the weighing of benefits or risks; it is a recruitment incentive.\"",
    },
    {
      id: "cfr-312-7",
      title: "21 CFR 312.7: Promotion of investigational drugs",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-A/section-312.7",
      year: "2026",
      note: "Read October 2026. Quote: \"A sponsor or investigator, or any person acting on behalf of a sponsor or investigator, shall not represent in a promotional context that an investigational new drug is safe or effective for the purposes for which it is under investigation or otherwise promote the drug.\"",
    },
    {
      id: "cfr-46-116",
      title: "45 CFR 46.116: General requirements for informed consent",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116",
      year: "2026",
      note: "Read October 2026. Quote (paragraph (g)): \"An IRB may approve a research proposal in which an investigator will obtain information or biospecimens for the purpose of screening, recruiting, or determining the eligibility of prospective subjects without the informed consent of the prospective subject or the subject's legally authorized representative, if either of the following conditions are met: (1) The investigator will obtain information through oral or written communication with the prospective subject or legally authorized representative\"",
    },
    {
      id: "ucsf-recruitment",
      title: "Recruitment Methods",
      publisher: "UCSF Human Research Protection Program",
      url: "https://irb.ucsf.edu/recruitment",
      year: "2026",
      note: "Read October 2026. Quote: \"Reminder: IRB submission and approval is still required for other types of advertisements, including web-based recruitment materials.\" Quote: \"Investigators should obtain IRB approval for a concept or script before making a major investment in video production.\" Quote: \"The UCSF IRB does NOT have to review a study sponsor’s national recruitment campaign materials ... provided that these materials will be reviewed and approved by a central IRB or commercial IRB.\" Quote: \"The UCSF IRB should still review any local recruitment materials that will have UCSF contact info on it\". Quote: \"Submit scripts or guides that will be used for in-person or telephone recruitment interviews.\"",
    },
    {
      id: "ucsf-ads",
      title: "Advertising and Recruitment Letter Guidelines",
      publisher: "UCSF Human Research Protection Program",
      url: "https://irb.ucsf.edu/advertising-and-recruitment-letter-guidelines",
      year: "2026",
      note: "Read October 2026. Quote: \"The content of any advertisements, notices and/or media materials must be limited to the following information\". Items to exclude include: \"Characterize payment for participation as a benefit of the research\" and \"Include any language that announces the investigator cannot be held liable or at fault for any research related event\".",
    },
    {
      id: "gelinas-2017",
      title: "Using Social Media as a Research Recruitment Tool: Ethical Issues and Recommendations",
      publisher: "American Journal of Bioethics (Gelinas L et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5324729/",
      year: "2017",
      note: "Read October 2026. Quote: \"there is no specific regulatory guidance and few resources to guide IRBs, investigators, and others on the use of social media for research recruitment.\" Checklist items: \"Provide the IRB with a statement certifying compliance (or lack of noncompliance) with the policies and terms of use of relevant websites\"; \"Proposed recruitment does not involve deception or fabrication of online identities.\"",
    },
    {
      id: "google-rsa",
      title: "About responsive search ads",
      publisher: "Google Ads Help",
      url: "https://support.google.com/google-ads/answer/7684791?hl=en",
      year: "2026",
      note: "Read October 2026. Quote: \"you can provide up to 15 headlines and 4 descriptions for a single responsive search ad.\" Quote: \"Assets can be shown in any order, so make sure they make sense individually or in combinations\".",
    },
    {
      id: "meta-personal-attributes",
      title: "Advertising Standards: Privacy Violations and Personal Attributes",
      publisher: "Meta Transparency Center",
      url: "https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/",
      year: "2026",
      note: "Read October 2026. Quote: \"ads must not contain content that asserts or implies personal attributes. This includes direct or indirect assertions or implications about a person’s ... physical or mental health (including medical conditions)\". Disallowed example: \"Do you have diabetes?\"",
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
    { label: "IRB submission language for AI outreach", href: "/templates/irb-submission-language-ai-outreach", description: "Draft paragraphs that describe AI outreach in an IRB application." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact patients, under which HIPAA path, with what IRB approval." },
    { label: "IRB", href: "/glossary/irb", description: "What an institutional review board does and when it reviews recruitment." },
    { label: "Engage: ads, voice and text outreach", href: "/engage", description: "How Bond runs ad campaigns and discloses AI use to patients." },
  ],
};

export default page;
