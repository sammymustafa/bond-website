import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/ich-e6-r3-recruitment",
  category: "blog",
  title: "ICH E6(R3): what it means for trial recruitment",
  description:
    "What ICH E6(R3) says about recruitment materials, pre-screening, recruitment vendors and investigator oversight, with a checklist for sites and sponsors.",
  keywords: [
    "ICH E6(R3) recruitment",
    "ICH E6(R3) pre-screening",
    "ICH E6(R3) service providers",
    "GCP recruitment vendor oversight",
    "ICH E6(R3) effective date",
  ],
  eyebrow: "Blog",
  h1: "What ICH E6(R3) means for recruitment, pre-screening and site oversight",
  intro:
    "ICH E6(R3) does not add a separate recruitment rulebook, but it places recruitment inside the GCP record: the investigator should be able to show recruitment potential, the IRB reviews recruitment procedures, the protocol can describe pre-screening, and a vendor that recruits on the investigator's behalf is a service provider the investigator oversees.{{cite:ich-e6r3}} The principles and Annex 1 took effect in the EU on 23 July 2025, and FDA published them as final guidance in September 2025.{{cite:ema-e6r3,fda-fr-e6r3}} This is not legal or regulatory advice.",
  summary: "The E6(R3) sections that touch recruitment, how they treat recruitment vendors and systems, and a checklist for sites and sponsors.",
  lastUpdated: "2026-10-14",
  blog: { date: "2026-10-14", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Security and compliance", secondaryHref: "/security" },
  sections: [
    {
      id: "status",
      heading: "What is ICH E6(R3), and when does it apply?",
      blocks: [
        {
          type: "p",
          text: "E6(R3) is the third revision of the ICH guideline for good clinical practice, endorsed by the regulatory members of the ICH Assembly at Step 4 on 6 January 2025. It is organized as overarching principles plus annexes: Annex 1 covers interventional clinical trials, and Annex 2 adds considerations for non-traditional designs such as pragmatic and decentralized trials and those using real-world data.{{cite:ich-e6r3,ema-e6r3}}",
        },
        {
          type: "table",
          caption: "Status by region, as of October 2026",
          columns: ["Region", "Principles and Annex 1", "Annex 2"],
          rows: [
            ["European Union (EMA)", "In effect since 23 July 2025{{cite:ema-e6r3}}", "Reached ICH Step 4 in June 2026; EU effective date 15 January 2027{{cite:ema-e6r3}}"],
            ["United States (FDA)", "Final guidance announced 9 September 2025{{cite:fda-fr-e6r3}}", "A separate draft guidance at that time; check FDA's guidance page for current status{{cite:fda-fr-e6r3}}"],
          ],
          note: "FDA guidance describes the agency's current thinking and is not binding; an alternative approach can be used if it satisfies the applicable statutes and regulations.{{cite:fda-fr-e6r3}}",
        },
        {
          type: "p",
          text: "The theme throughout is proportionality: quality built into the design, and effort focused on what matters most to participant safety and reliable results. FDA's notice also highlights clearer responsibilities for delegating work to service providers, which is where recruitment vendors sit.{{cite:fda-fr-e6r3}}",
        },
      ],
    },
    {
      id: "what-it-says",
      heading: "What does E6(R3) say about recruitment?",
      blocks: [
        {
          type: "table",
          caption: "Recruitment-related provisions in E6(R3)",
          columns: ["Section", "What it says"],
          rows: [
            ["2.2.1", "The investigator should be able to demonstrate, for example from retrospective or current data, a potential for recruiting the agreed number of eligible participants in the recruitment period.{{cite:ich-e6r3}}"],
            ["2.2.2", "The investigator should have sufficient time, qualified staff and facilities for the trial.{{cite:ich-e6r3}}"],
            ["1.2.2(e) and 2.4.2", "The IRB/IEC reviews advertisements and information on the recruitment process, and approval of recruitment procedures should be in place before the trial starts.{{cite:ich-e6r3}}"],
            ["B.5.3", "The protocol covers the mechanism for pre-screening, where appropriate, and screening of participants.{{cite:ich-e6r3}}"],
            ["3.11.4.5.2(h)", "Monitoring includes reviewing and reporting participant recruitment and retention rates.{{cite:ich-e6r3}}"],
            ["Appendix C", "Recruitment advertisements and the completed screening log are listed as essential records, and essential records include those documenting recruitment, pre-trial screening and consent.{{cite:ich-e6r3}}"],
          ],
        },
        {
          type: "p",
          text: "In practice, a feasibility number now needs evidence behind it, recruitment materials and scripts need IRB approval before use, and pre-screening is something the protocol can describe and the records should document. The advertising part is not new in the US: FDA has long treated advertising as the start of the informed consent process and expects the IRB to review it.{{cite:fda-recruiting}} Our [IRB and HIPAA outreach guide](/guides/irb-hipaa-patient-outreach) covers the US rules on who may contact which patients.",
        },
      ],
    },
    {
      id: "vendors",
      heading: "How does E6(R3) treat recruitment vendors?",
      blocks: [
        {
          type: "p",
          text: "As service providers. The investigator may delegate trial-related activities to other people or parties and may get help from the sponsor in choosing them, but retains the final decision and the ultimate responsibility, with oversight proportionate to the importance of the data and the risks to participants (section 2.3.1). Agreements with service providers should be documented (2.3.4).{{cite:ich-e6r3}}",
        },
        {
          type: "ul",
          items: [
            "**Sponsor-chosen vendors working under the investigator:** the sponsor should tell the investigator about any service provider it identifies for activities under the investigator's responsibility, and that responsibility stays with the investigator (3.6.5).{{cite:ich-e6r3}}",
            "**Vendors working for the sponsor,** such as a central call center: the sponsor keeps ultimate responsibility, selects and oversees the provider, and the provider should run appropriate quality management (3.6.6 to 3.6.9).{{cite:ich-e6r3}}",
            "**Paperwork:** Appendix C lists signed agreements between the investigator or institution and service providers, and documentation of selection, assessment and oversight of service providers doing important trial-related activities.{{cite:ich-e6r3}}",
          ],
        },
        {
          type: "p",
          text: "So before a recruitment vendor calls or texts a single patient, a site should know whose service provider it is, have an agreement on file, and decide how it will oversee the vendor's work: script approval, call samples, opt-out handling and escalation to staff.",
        },
      ],
    },
    {
      id: "systems",
      heading: "What does E6(R3) expect of recruitment software and data?",
      blocks: [
        {
          type: "p",
          text: "Computerised systems used in trials should be fit for purpose, for example through risk-based validation where appropriate (principle 9.3). For systems a site deploys specifically for a trial, the investigator should ensure secure and attributable access, address the data governance requirements in section 4 in proportion to the risks and the importance of the data, and report significant incidents to the sponsor and, where applicable, the IRB (2.12.10).{{cite:ich-e6r3}}",
        },
        {
          type: "p",
          text: "For EHR screening and outreach tools, that translates into a short list of questions: who can access what, how matches are documented, how the vendor was assessed, and how incidents reach the site. Bond's [Identify](/identify) stage shows criterion-by-criterion evidence for every match, and Bond is HIPAA compliant and SOC 2 Type I compliant, signs BAAs and encrypts data at rest and in transit, with SOC 2 Type II and ISO 27001 audits underway.{{cite:bond-product}} Details are on our [security page](/security).",
        },
      ],
    },
    {
      id: "consent",
      heading: "What changes for informed consent?",
      blocks: [
        {
          type: "p",
          text: "E6(R3) allows varied approaches to consent, such as text, images, videos and other interactive methods, and says remote consent may be considered where appropriate. When computerised systems are used, the population's familiarity with them should be considered, and participants may be offered a paper alternative (2.8.1).{{cite:ich-e6r3}}",
        },
        {
          type: "p",
          text: "Recruitment and consent stay separate steps. Outreach and pre-screening find and prepare candidates; the investigator's team obtains consent under the approved process. Our [consent page](/consent) shows how Bond supports patients after a visit is booked while the site and PI obtain consent.",
        },
      ],
    },
    {
      id: "checklist",
      heading: "What should sites and sponsors do now?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Keep evidence of recruitment potential:** past enrollment, screening logs and EHR counts with their definitions (2.2.1).{{cite:ich-e6r3}}",
            "**Send every recruitment material to the IRB** before use, including ads, landing pages, call scripts and text wording (1.2.2, 2.4.2).{{cite:ich-e6r3}}",
            "**Write down the pre-screening mechanism** in the protocol or recruitment plan (B.5.3).{{cite:ich-e6r3}}",
            "**Treat recruitment vendors as service providers:** agreement on file, delegation where required, and a documented oversight plan (2.3, Appendix C).{{cite:ich-e6r3}}",
            "**Keep the screening log and recruitment records** as essential records (Appendix C).{{cite:ich-e6r3}}",
            "**Review recruitment systems proportionately:** access, documentation of matches and incident reporting (2.12.10).{{cite:ich-e6r3}}",
            "**Expect monitors to ask about recruitment and retention rates** and have them ready (3.11.4.5.2).{{cite:ich-e6r3}}",
            "**Sponsors: reduce burden at the source.** E6(R3) asks sponsors to avoid unnecessary complexity, procedures and data collection, and not to place unnecessary burden on participants and investigators (3.1.4).{{cite:ich-e6r3}} A task force of sites, sponsors and CROs points to section 3.1.3 in recommending that sites give protocol feedback through formal consulting agreements.{{cite:redefining-feasibility-2024}}",
            "**Track Annex 2** if you run decentralized or pragmatic designs; its EU effective date is 15 January 2027.{{cite:ema-e6r3}}",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Walk through how Bond's screening evidence, outreach scripts and escalation fit your site's oversight plan.",
          secondaryLabel: "Security and compliance",
          secondaryHref: "/security",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Does E6(R3) replace E6(R2)?",
      a: "EMA describes the principles and Annex 1 as a comprehensive package that can serve as a replacement for E6(R2), in effect in the EU since 23 July 2025.{{cite:ema-e6r3}} In the US, FDA's September 2025 notice finalized the E6(R3) guidance, which is nonbinding.{{cite:fda-fr-e6r3}}",
    },
    {
      q: "Is a recruitment vendor a service provider under E6(R3)?",
      a: "If it performs trial-related activities delegated by the investigator or transferred by the sponsor, E6(R3) treats it as a service provider: the agreement should be documented and the responsible party keeps oversight.{{cite:ich-e6r3}} Confirm the specifics with your regulatory team; this is not legal advice.",
    },
    {
      q: "Does E6(R3) mention pre-screening?",
      a: "Yes. The protocol content in Appendix B includes the mechanism for pre-screening, where appropriate, and essential records include those documenting recruitment and pre-trial screening.{{cite:ich-e6r3}}",
    },
  ],
  sources: [
    {
      id: "ich-e6r3",
      title: "ICH E6(R3) Guideline for Good Clinical Practice (Step 4)",
      publisher: "International Council for Harmonisation (ICH)",
      url: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
      year: "2025",
      note: "Read October 2026. Quote: \"Endorsement by the Regulatory Members of the ICH Assembly under Step 4.\" (dated 06 January 2025). Quote (2.2.1): \"The investigator should be able to demonstrate (e.g., based on retrospective or currently available data) a potential for recruiting the proposed number of eligible participants within the recruitment period as agreed with the sponsor.\" Quote (1.2.2(e)): \"Advertisement for participant recruitment (if used) and information on the recruitment process\". Quote (2.4.2): \"Before initiating a trial, the investigator/institution should have a documented and dated approval/favourable opinion from the IRB/IEC for the trial protocol, informed consent materials, participant recruitment procedures (e.g., advertisements)\". Quote (2.3.1): \"The investigator retains the ultimate responsibility and should maintain appropriate oversight of the persons or parties undertaking the activities delegated\". Quote (3.6.5): \"The sponsor should provide information to the investigator on any service provider identified by the sponsor to undertake any activities under the responsibility of the investigator. The responsibility for such activities remains with the investigator\". Quote (B.5.3): \"Mechanism for pre-screening, where appropriate, and screening of participants.\" Quote (3.11.4.5.2(h)): \"Reviewing and reporting the participant recruitment and retention rates.\" Quote (C.3.1(z)): \"Documents the recruitment, pre-trial screening and consenting process of trial participants\". Appendix C table lists \"Advertisement for participant recruitment\", \"Completed participants screening log\" and \"Documentation of selection, assessment* and oversight of service providers conducting important trial-related activities\". Quote (9.3): \"Computerised systems used in clinical trials should be fit for purpose (e.g., through risk-based validation, if appropriate)\". Quote (2.8.1(d)): \"Obtaining consent remotely may be considered where appropriate.\" Quote (3.1.4): \"The sponsor should not place unnecessary burden on participants and investigators.\"",
    },
    {
      id: "ema-e6r3",
      title: "ICH E6 Good clinical practice: scientific guideline",
      publisher: "European Medicines Agency",
      url: "https://www.ema.europa.eu/en/ich-e6-good-clinical-practice-scientific-guideline",
      year: "2026",
      note: "Read October 2026. Quote: \"The overarching principles and Annex 1 adopted by ICH and CHMP came into effect on 23 July 2025.\" Quote: \"Annex 2 reached Step 4 following ICH adoption on 3 June 2026 and CHMP adoption on 25 June 2026 and will come into effect on 15 January 2027.\" Quote: \"a comprehensive package that can serve as a replacement for ICH E6(R2).\" Quote: \"Annex 2 covers designs such as pragmatic clinical trials and decentralized clinical trials, as well as those trials that incorporate real world data sources.\"",
    },
    {
      id: "fda-fr-e6r3",
      title: "E6(R3) Good Clinical Practice; International Council for Harmonisation; Guidance for Industry; Availability",
      publisher: "US Food and Drug Administration, Federal Register",
      url: "https://www.federalregister.gov/documents/2025/09/09/2025-17311/e6r3-good-clinical-practice-international-council-for-harmonisation-guidance-for-industry",
      year: "2025",
      note: "Published September 9, 2025; Docket FDA-2023-D-1955. Read October 2026. Quote: \"The guidance includes a principles document and annex 1 and is the precursory guidance to the draft guidance entitled “E6(R3) Good Clinical Practice: Annex 2.”\" Quote: \"the guidance clarifies the responsibilities of the investigators and sponsors regarding delegating clinical trial conduct responsibilities to service providers\". Quote: \"It does not establish any rights for any person and is not binding on FDA or the public. You can use an alternative approach if it satisfies the requirements of the applicable statutes and regulations.\"",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Information sheet guidance, January 1998. Read October 2026. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process.\" Quote: \"The IRB should also review the methods and material that investigators propose to use to recruit subjects.\"",
    },
    {
      id: "redefining-feasibility-2024",
      title: "Redefining feasibility in clinical trials: Collaborative approaches for improved site selection",
      publisher: "Contemporary Clinical Trials Communications (Site Enablement League task force), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11298845/",
      year: "2024",
      note: "Read October 2026. Quote: \"This recommendation is specifically stated in section 3.1.3 of the recently updated ICH Harmonised Guideline for Good Clinical Practice, R3 [12] as part of the Trial Design process\". Quote: \"However, this feedback should occur via formal consulting agreements, not as part of the Site Feasibility process\".",
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
    { label: "Security and compliance", href: "/security", description: "Bond's HIPAA, SOC 2 and encryption posture." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact which patients, and with what approval." },
    { label: "IRB submission language for AI outreach", href: "/templates/irb-submission-language-ai-outreach", description: "Draft paragraphs that describe AI outreach in an IRB application." },
    { label: "Pre-screening", href: "/glossary/pre-screening", description: "What counts as pre-screening and how it is documented." },
  ],
};

export default page;
