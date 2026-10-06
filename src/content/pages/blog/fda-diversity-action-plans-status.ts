import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/fda-diversity-action-plans-status",
  category: "blog",
  title: "FDA diversity action plans: where they stand in 2026",
  description:
    "The FDORA law requiring diversity action plans is in force, but FDA's guidance is still a June 2024 draft. What applies as of October 2026 and how to prepare.",
  keywords: [
    "FDA diversity action plan status",
    "diversity action plan final guidance",
    "FDORA diversity action plan requirement",
    "diversity action plan 180 days final guidance",
  ],
  eyebrow: "Blog",
  h1: "Where FDA diversity action plans stand as of October 2026",
  intro:
    "The law that requires diversity action plans is on the books, but the requirement has not started. It applies only to studies that begin enrolling more than 180 days after FDA publishes final guidance, and as of early October 2026 the only guidance is a draft from June 2024.{{cite:usc-355,fda-dap-page}} Here is what is settled, what is not, and what sites and sponsors can do in the meantime.",
  summary: "The statute, the stalled guidance, the 2025 website episode and what sponsors and sites can do while the requirement waits on FDA.",
  lastUpdated: "2026-11-02",
  blog: { date: "2026-11-02", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Bond for sponsors", secondaryHref: "/for/sponsors" },
  sections: [
    {
      id: "what-the-law-requires",
      heading: "What does the law require?",
      blocks: [
        {
          type: "p",
          text: "The Food and Drug Omnibus Reform Act of 2022 (FDORA), enacted December 29, 2022, added diversity action plans to the Federal Food, Drug, and Cosmetic Act. Section 505(z) covers drugs: for a phase 3 study, or as appropriate another pivotal study, the sponsor must submit a plan with its enrollment goals, the rationale for those goals and an explanation of how it intends to meet them.{{cite:usc-355}} Section 520(g)(9) sets a parallel requirement for certain device studies.{{cite:fda-dap-report}}",
        },
        {
          type: "ul",
          items: [
            "**Timing.** For drugs, the plan is due as soon as practicable and no later than the date the sponsor submits the phase 3 or pivotal protocol to FDA.{{cite:usc-355}}",
            "**Goals.** FDA reads FDORA to require goals broken out by the race, ethnicity, sex and age group of the clinically relevant population. The statute adds that guidance may cover factors such as geographic location and socioeconomic status.{{cite:fda-dap-report,usc-355}}",
            "**Waivers.** FDA may waive the requirement based on the prevalence or incidence of the disease, if following a plan would be impracticable, or to protect public health during a public health emergency. It must answer a sponsor's waiver request within 60 days.{{cite:usc-355}}",
          ],
        },
      ],
    },
    {
      id: "when-it-takes-effect",
      heading: "When does the requirement take effect?",
      blocks: [
        {
          type: "p",
          text: "Not yet. Section 3602(c) of FDORA says the requirement applies only to clinical investigations for which enrollment commences after the date that is 180 days after FDA publishes the final guidance. Section 3602(b) gave FDA 12 months from enactment to issue draft guidance and 9 months after the comment period closed to finalize it.{{cite:usc-355}}",
        },
        {
          type: "table",
          caption: "FDORA's guidance timeline and what happened",
          columns: ["Step", "Statutory deadline", "What happened"],
          rows: [
            ["Draft guidance", "12 months after enactment (December 29, 2023)", "Draft issued June 2024{{cite:fr-2024-draft}}"],
            ["Comment period", "Not set in statute", "Closed September 26, 2024{{cite:fr-2024-draft}}"],
            ["Final guidance", "9 months after comments closed (late June 2025)", "Not issued as of early October 2026{{cite:fda-dap-page}}"],
            ["Plans required", "Studies that begin enrolling more than 180 days after final guidance", "Not yet triggered{{cite:usc-355}}"],
          ],
          note: "Deadlines are computed from sections 3602(b) and 3602(c) of FDORA.{{cite:usc-355}}",
        },
        {
          type: "p",
          text: "Final guidance matters more than usual here. FDA's notice for the draft says that because the statute requires FDA to specify the form and manner of submission in guidance, those parts will have binding effect once the guidance is finalized.{{cite:fr-2024-draft}} The draft also says FDA does not expect plans for drug studies whose protocols are submitted within 180 days after final guidance where enrollment is scheduled to begin after that 180-day point.{{cite:dap-draft}}",
        },
      ],
    },
    {
      id: "what-happened-in-2025",
      heading: "What happened to the draft guidance in 2025?",
      blocks: [
        {
          type: "p",
          text: "In early 2025, FDA removed its web pages on diversity action plans and on studying sex differences in clinical trials, in response to a memo from the Office of Personnel Management. A federal judge ordered the pages restored, and they were back online by February 12, 2025.{{cite:biopharmadive-2025}}",
        },
        {
          type: "p",
          text: "When we checked FDA's guidance page in early October 2026, it still listed the June 2024 document as a draft, \"Not for implementation,\" under docket FDA-2021-D-0789. It carried a notice that HHS is required by court order to restore the page to its January 29, 2025 version, along with a statement that the Administration rejects any content on the page promoting gender ideology. The page did not link to the guidance file, and the PDF address cited in FDA's own report returned a not-found page.{{cite:fda-dap-page,fda-dap-report}} The draft remains in the public docket on Regulations.gov, which listed no final guidance.{{cite:dap-draft}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "What the court order did and did not do",
          text: "The order restored a web page. It did not finalize the guidance, change its draft status or start the 180-day clock.{{cite:fda-dap-page,usc-355}}",
        },
      ],
    },
    {
      id: "related-fda-guidance",
      heading: "What else has FDA said about who enrolls in trials?",
      blocks: [
        {
          type: "p",
          text: "In December 2025, FDA issued Revision 1 of its final guidance on eligibility criteria and enrollment practices, now titled \"Enhancing Participation in Clinical Trials.\" The 2020 version was titled \"Enhancing the Diversity of Clinical Trial Populations.\"{{cite:fda-enhancing-2025,dap-draft}} The revision still recommends broadening eligibility criteria, placing sites where underrepresented patients receive care, offering materials in multiple languages, reimbursing travel and lodging, and using mobile nurses or phlebotomists to cut site visits.{{cite:fda-enhancing-2025}}",
        },
        {
          type: "p",
          text: "CDER's guidance agenda, updated July 2026, lists a planned draft guidance on including older adults in clinical trials and a revised draft on collecting race and ethnicity data. The agenda covers new and revised draft guidances, so it says nothing either way about finalizing the diversity action plan guidance.{{cite:cder-agenda-2026}}",
        },
      ],
    },
    {
      id: "voluntary-plans",
      heading: "Are sponsors submitting plans anyway?",
      blocks: [
        {
          type: "p",
          text: "Yes. FDORA also requires FDA to report to Congress each year on the plans it receives. The first report covers fiscal years 2023 and 2024 and counts plans that sponsors submitted voluntarily, since none were yet required.{{cite:fda-dap-report}}",
        },
        {
          type: "table",
          caption: "Voluntary diversity plans received by FDA",
          columns: ["FDA center", "FY 2023", "FY 2024"],
          rows: [
            ["Drugs (CDER)", "124", "161"],
            ["Biologics (CBER)", "9", "21"],
            ["Devices (CDRH)", "6", "24"],
          ],
          note: "Fiscal years run October 1 to September 30. FDA calls these \"diversity plans\" because they were not required.{{cite:fda-dap-report}}",
        },
      ],
    },
    {
      id: "what-to-do-now",
      heading: "What should sponsors and sites do while the rule is pending?",
      blocks: [
        {
          type: "p",
          text: "Plan as if final guidance could arrive at any time. A 180-day runway is short for a study already in start-up.{{cite:usc-355}} This is general information, not legal advice; check FDA's guidance page for the current status.",
        },
        {
          type: "checklist",
          items: [
            "**Sponsors:** keep writing enrollment goals by race, ethnicity, sex and age group, based on the prevalence of the disease in the US, with sources cited, as the 2024 draft describes.{{cite:dap-draft}}",
            "**Sponsors:** pick measures the draft names, such as community engagement, language assistance, transportation and dependent care support, flexible visit hours and fewer exclusion criteria, plus a plan to monitor enrollment against goals during the study.{{cite:dap-draft}}",
            "**Sites:** be ready to report your patient population by race, ethnicity, sex and age group for feasibility, and say where those fields are incomplete. The [site selection guide](/guides/how-sponsors-choose-sites) covers what sponsors ask.",
            "**Sites:** count patients at each step, from identified to contacted, pre-screened and enrolled, by the same four categories, so gaps show up while outreach can still change.",
            "**Both:** list the practical supports you can offer, such as interpreters, travel reimbursement and evening hours, before the sponsor asks.",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond does not set enrollment goals or write plans. It screens EHR records against a study's criteria, runs Meta and Google ad campaigns that reach people outside a site's own records, and contacts every new ad lead by voice and text in the patient's language.{{cite:bond-product}} See [Engage](/engage) for how outreach works.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Are diversity action plans required right now?",
      a: "No. As of early October 2026, FDA had not finalized its guidance, so the 180-day trigger in FDORA had not started. Sponsors can still submit plans voluntarily.{{cite:usc-355,fda-dap-page,fda-dap-report}}",
    },
    {
      q: "If FDA finalizes the guidance, when will plans be due?",
      a: "For drugs, a plan will be required for phase 3 or other pivotal studies that begin enrolling more than 180 days after final guidance, submitted no later than the protocol.{{cite:usc-355}} The final guidance may change details of the June 2024 draft.",
    },
    {
      q: "Did the 2025 court order revive the guidance?",
      a: "It restored FDA's web page about the draft. The page still says the guidance is a draft and not for implementation.{{cite:fda-dap-page}}",
    },
  ],
  sources: [
    {
      id: "usc-355",
      title: "21 U.S. Code 355 (section 505(z) and notes on Pub. L. 117-328, div. FF, sec. 3602)",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/uscode/text/21/355",
      year: "2022",
      note: "Read October 2026. Quote: \"shall apply only with respect to clinical investigations for which enrollment commences after the date that is 180 days after the publication of final guidance required under this section\". Also, sec. 3602(b): \"(1) not later than 12 months after the date of enactment of this Act [ Dec. 29, 2022 ], issue new draft guidance or update existing draft guidance described in subsection (a); and (2) not later than 9 months after closing the comment period on such draft guidance, finalize such guidance.\" Also: \"The Secretary shall issue a written response granting or denying a request from a sponsor for a waiver within 60 days of receiving such request.\"",
    },
    {
      id: "fr-2024-draft",
      title: "Diversity Action Plans To Improve Enrollment of Participants From Underrepresented Populations in Clinical Studies; Draft Guidance for Industry; Availability (89 FR, document 2024-14284)",
      publisher: "Federal Register (FDA notice)",
      url: "https://www.federalregister.gov/documents/2024/06/28/2024-14284/diversity-action-plans-to-improve-enrollment-of-participants-from-underrepresented-populations-in",
      year: "2024",
      note: "Published June 28, 2024; read via the Federal Register API, October 2026. Quote: \"Submit either electronic or written comments on the draft guidance by September 26, 2024\". Also: \"insofar as this draft guidance specifies the form and manner for submission of Diversity Action Plans, when this guidance is finalized, it will have binding effect.\"",
    },
    {
      id: "fda-dap-page",
      title: "Diversity Action Plans to Improve Enrollment of Participants from Underrepresented Populations in Clinical Studies (draft guidance page)",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/diversity-action-plans-improve-enrollment-participants-underrepresented-populations-clinical-studies",
      year: "2024",
      note: "Checked October 5, 2026: \"Draft Guidance for Industry June 2024\", \"Draft Not for implementation. Contains non-binding recommendations.\", docket FDA-2021-D-0789, \"Content current as of: 07/25/2025\". Quote: \"Per a court order, HHS is required to restore this website to its version as of 12:00 AM on January 29, 2025.\" Also: \"This page does not reflect reality and therefore the Administration and this Department reject it.\" The page had no link to a guidance file, and https://www.fda.gov/media/179593/download returned FDA's \"Page Not Found\" page.",
    },
    {
      id: "dap-draft",
      title: "Diversity Action Plans to Improve Enrollment of Participants from Underrepresented Populations in Clinical Studies: Draft Guidance for Industry (docket FDA-2021-D-0789-0111)",
      publisher: "US Food and Drug Administration, via Regulations.gov",
      url: "https://downloads.regulations.gov/FDA-2021-D-0789-0111/attachment_1.pdf",
      year: "2024",
      note: "26-page draft, June 2024. In October 2026 the Regulations.gov docket listed four documents, all from 2022 and 2024. Quote: \"FDA does not expect a Diversity Action Plan to be submitted for clinical studies where the following circumstances are present: • Clinical studies of drugs with protocols submitted within 180 days following the publication of the final guidance where enrollment is scheduled to begin 180 days after publication of the final guidance.\" Also lists measures including \"providing transportation assistance; providing dependent care; allowing flexible hours for study visits\" and \"providing language assistance for persons with limited English proficiency\". Also: \"Generally, enrollment goals should be informed by the estimated prevalence or incidence of the disease or condition in the U.S. intended use population\" and \"Sponsors should include citations for the sources of data and information\". Footnote 57 cites \"Enhancing the Diversity of Clinical Trial Populations — Eligibility Criteria, Enrollment Practices, and Trial Designs (November 2020)\".",
    },
    {
      id: "biopharmadive-2025",
      title: "Judge orders FDA, health agencies to restore removed webpages",
      publisher: "BioPharma Dive (Elise Reuter)",
      url: "https://www.biopharmadive.com/news/fda-hhs-lawsuit-removed-website-pages/740006/",
      year: "2025",
      note: "Published February 12, 2025. Quote: \"the FDA removed pages without notice on diversity action plans for clinical trials and on the study of sex differences in the clinical evaluation of medical products\". Also: \"A federal judge ruled that federal health agencies must restore webpages removed in response to a memo from the Office of Personnel Management.\" and \"As of Wednesday, the pages had been restored.\"",
    },
    {
      id: "fda-dap-report",
      title: "Report to Congress: Diversity Action Plans Summary FY 2023 and FY 2024",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/media/184768/download",
      year: "2025",
      note: "Quote: \"CDER received 124 diversity plans in FY 2023 and 161 diversity plans in FY 2024.\" Also: \"CBER received 9 diversity plans in FY 2023 and 21 diversity plans in FY 2024.\" and \"CDRH received 6 diversity plans in FY 2023 and 24 diversity plans in FY 2024.\" Also: \"Although the Diversity Action Plan submission requirement has not yet come into effect, FDA has received voluntary diversity plans\". Footnote 1 links the draft at https://www.fda.gov/media/179593/download.",
    },
    {
      id: "fda-enhancing-2025",
      title: "Enhancing Participation in Clinical Trials — Eligibility Criteria, Enrollment Practices, and Trial Designs: Guidance for Industry (Revision 1)",
      publisher: "US Food and Drug Administration (CDER and CBER)",
      url: "https://www.fda.gov/media/190162/download",
      year: "2025",
      note: "Final guidance, December 2025, Revision 1. Quotes: \"Ensure that clinical trial sites include geographic locations with a higher concentration of underrepresented racial and ethnic patients and indigenous populations\"; \"Consider providing trial resources and documents in multiple languages\"; \"Consider the use of mobile medical professionals, such as nurses and phlebotomists, to visit participants at their locations\"; \"FDA does not consider reimbursement for reasonable travel expenses to and from the clinical trial site and associated costs such as airfare, parking, and lodging to raise issues regarding undue influence.\"",
    },
    {
      id: "cder-agenda-2026",
      title: "CDER Guidance Agenda: New and Revised Draft Guidances Planned for Publication in Calendar Year 2026 (July 2026)",
      publisher: "US Food and Drug Administration, CDER",
      url: "https://www.fda.gov/media/185228/download",
      year: "2026",
      note: "Lists under Clinical/Medical: \"Collection of Race and Ethnicity Data in Clinical Trials and Clinical Studies for FDA-Regulated Medical Products; Revised Draft\" and \"Considerations for the Inclusion of Older Adults in Clinical Trials; Draft Guidance for Industry\".",
    },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
  ],
  related: [
    { label: "Diversity action plan", href: "/glossary/diversity-action-plan", description: "A short definition of the FDORA requirement." },
    { label: "How sponsors choose sites", href: "/guides/how-sponsors-choose-sites", description: "Feasibility questions, including demographic data sponsors ask for." },
    { label: "Bond for sponsors", href: "/for/sponsors", description: "How Bond supports enrollment for sponsor-run studies." },
    { label: "Bond for FQHCs and community sites", href: "/for/fqhcs-and-community-sites", description: "Research at health centers that serve patients rarely offered trials." },
  ],
};

export default page;
