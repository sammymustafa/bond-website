import type { SeoPage, Source } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { calComHref } from "../../nav";
import { BOND_SOURCES, REFERRAL_RESEARCH_SOURCES as R } from "./_referral-vendors";
import subjectwellPage from "./bond-vs-subjectwell";
import studykikPage from "./bond-vs-studykik";
import oneNHealthPage from "./bond-vs-1nhealth";
import mediaPage from "./bond-vs-media-recruitment";

/** Sources already verified on another page, picked by id so each note stays in one place. */
function pick(from: SeoPage | Source[], ...ids: string[]): Source[] {
  const list = Array.isArray(from) ? from : from.sources;
  return ids.map((id) => {
    const source = list.find((s) => s.id === id);
    if (!source) throw new Error(`Unknown source ${id}`);
    return source;
  });
}

/**
 * A "StudyKIK alternatives" listicle in the style of vanta.com's "Drata alternatives" pages, written for
 * research sites, StudyKIK's main buyers. Bond ranks first; SubjectWell (now Clariness), 1nHealth and
 * Antidote follow because they are the vendors with facts already checked on Bond's comparison pages.
 * Body copy says why Bond is better than StudyKIK, never that Bond is "an alternative".
 */
const page: SeoPage = {
  path: "/compare/studykik-alternatives",
  category: "comparison",
  title: "StudyKIK alternatives for research sites: top 4 in 2026",
  description:
    "StudyKIK compared with Bond Health, SubjectWell (now Clariness), 1nHealth and Antidote on lead follow-up, visit booking and pricing for research sites.",
  keywords: [
    "StudyKIK alternatives",
    "StudyKik alternatives",
    "StudyKIK competitors",
    "companies like StudyKIK",
    "StudyKIK vs SubjectWell",
    "StudyKIK pricing",
    "patient recruitment companies for research sites",
  ],
  eyebrow: "Comparison",
  h1: "The best StudyKIK alternatives for research sites in 2026",
  intro:
    "StudyKIK, a Syneos Health company, sells research sites recruitment plans priced per 30-day listing: it finds patients through its patient communities and social media outreach, its agents pre-screen new referrals, and the site works them in KIKsite.{{cite:syneos-acquires-studykik-2021,studykik-site-plans,studykik-sites-recruitment,studykik-kiksite}} We compared four recruitment companies that sites weigh against it, on where patients come from, who contacts and books them, consent support and pricing. Bond Health ranks first: it is the only one whose public materials describe software that screens a site's own EHR, runs its own Meta and Google ad campaigns, and contacts, pre-screens and books every patient itself.{{cite:bond-site,bond-product}}",
  summary: "Bond Health, SubjectWell (now Clariness), 1nHealth and Antidote compared with StudyKIK for research sites, and why Bond ranks first.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: calComHref, secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "what-is-studykik",
      heading: "What is StudyKIK?",
      blocks: [
        {
          type: "p",
          text: "StudyKIK launched in 2014 as a global network of patient-focused communities, and Syneos Health announced its acquisition in September 2021.{{cite:syneos-acquires-studykik-2021}} Its website has separate menus for research sites and sponsors (2026).{{cite:studykik-home}}",
        },
        {
          type: "ul",
          items: [
            "**For research sites:** plans priced per 30-day listing, Platinum $2,200, Diamond $3,800 and Ruby $5,800, each with StudyForms digital pre-screening and referral guarantees subject to the indication and study criteria (2026).{{cite:studykik-site-plans}} Agents trained on the protocol pre-screen all new referrals, and the site manages patients in KIKsite (2026).{{cite:studykik-sites-recruitment,studykik-kiksite}}",
            "**For sponsors:** CarePackage, which adds referrals from targeted marketing and study websites, a SupportHub of GCP-certified agents, call-center follow-up, eConsent powered by DocuSign and the PatientConnect app (2026).{{cite:studykik-carepackage}}",
            "**Integrations:** StudyKIK joined the CRIO Partners program in June 2024 with a two-way CRIO integration.{{cite:crio-studykik-partnership-2024}}",
          ],
        },
      ],
    },
    {
      id: "why-look",
      heading: "Why do sites look beyond StudyKIK?",
      blocks: [
        {
          type: "p",
          text: "We list only differences that show in StudyKIK's own public materials; we do not repeat reviews or anecdotes.",
        },
        {
          type: "ul",
          items: [
            "**The fee is per listing, not per patient.** Site plans cost $2,200 to $5,800 per 30-day listing, and referral guarantees are subject to the indication and study criteria (2026).{{cite:studykik-site-plans}}",
            "**The site still works every referral.** StudyKIK's agents pre-screen, then the site calls, texts or emails patients from KIKsite; whether StudyKIK or the site books the first visit is not spelled out (2026).{{cite:studykik-sites-recruitment,studykik-kiksite}} Clariness, another recruitment vendor, reported in 2024 that sites take an average of 17 days to make first contact with an interested patient and 30.5 days to schedule the first visit.{{cite:clariness-kpis-2024}}",
            "**First contact within a day, not immediately.** StudyKIK says it contacts new referrals within 24 hours of signup (2026).{{cite:studykik-sites-recruitment}}",
            "**EHR screening is not described.** Screening a site's EHR is not publicly documented in StudyKIK's materials (November 2026); sites can upload their existing patient database (2026).{{cite:studykik-sites-recruitment}}",
            "**eConsent and call-center follow-up are sold to sponsors.** They appear in StudyKIK's sponsor menu and its CarePackage bundle (2026).{{cite:studykik-home,studykik-carepackage}}",
          ],
        },
      ],
    },
    {
      id: "the-list",
      heading: "What are the best StudyKIK alternatives?",
      blocks: [
        {
          type: "ol",
          items: [
            "**[Bond Health](/what-is-bond-health): best overall, and best for sites that want patients booked rather than referrals to work.** It screens the site's EHR, creates and runs Meta and Google ad campaigns, and its agents contact every lead immediately, pre-screen them and book the screening visit.{{cite:bond-site,bond-product}}",
            "**SubjectWell (now Clariness): for sponsors, CROs and sites that want an outsourced service with outcome-based pricing.** Clariness pre-screens patients and schedules or live-transfers them to sites (2026).{{cite:clariness-merger-2026,clariness-faqs,clariness-clinlife}}",
            "**1nHealth: for sponsors and CROs that want direct-to-patient ads paid on milestones.** It pre-screens respondents at several levels before passing referrals to sites (2026).{{cite:1nhealth-for-cros,1nhealth-home}}",
            "**Antidote: for sponsors that want digital marketing plus a patient-partner network, on a risk-sharing model.** It prescreens patients before referring them (2026).{{cite:antidote-partners,antidote-sponsors}}",
          ],
        },
        { type: "h3", text: "1. Bond Health" },
        {
          type: "p",
          text: "Bond Health is better than StudyKIK because its agents do the work a referral leaves to your staff: they contact every lead immediately, keep following up, pre-screen and book the screening visit, for patients from your own EHR as well as from the Meta and Google ad campaigns Bond creates for your study.{{cite:bond-product,bond-site}} See [Bond vs StudyKIK](/compare/bond-vs-studykik).",
        },
        { type: "h3", text: "Bond Health key features" },
        {
          type: "ul",
          items: [
            "**EHR screening with evidence.** [Identify](/identify) reads clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, with chart evidence for every criterion, and checks each patient against every open study at the site.{{cite:bond-site,bond-product}}",
            "**Its own ad campaigns.** Bond creates and runs Meta and Google ad campaigns for each study. The ad spend comes out of the site's own advertising budget for the study, not out of Bond's fees.{{cite:bond-product}}",
            "**Every lead contacted immediately, then booked.** Voice and text agents contact every new lead immediately, follow up until they respond, pre-screen them and book the screening visit straight onto the site's calendar, in the patient's language ([Book](/book)).{{cite:bond-product,bond-site}}",
            "**Consent support and retention for sites.** Plain-language consent support with staff escalation, then visit reminders, transportation booking and dropout-risk alerts after enrollment. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
            "**Integrations.** The major EHRs, with full integration in 48 hours and no integration fee, and a two-way CRIO integration as a CRIO Certified Partner, plus Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault.{{cite:bond-site,bond-product}}",
            "**Pricing.** A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
          ],
        },
        { type: "h3", text: "Bond Health is ideal for" },
        {
          type: "p",
          text: "Research sites, physician groups, FQHCs and site networks that do not have coordinator hours to call, text and schedule every referral, plus CROs that want consistent metrics across sites and sponsors that want faster enrollment timelines, in any therapeutic area.{{cite:bond-site,bond-product}}",
        },
        { type: "h3", text: "2. SubjectWell (now Clariness)" },
        {
          type: "p",
          text: "SubjectWell pre-screened people who answered its online ads by phone and referred likely candidates to sites (2023). It merged with Clariness in January 2026, and the combined company operates under the Clariness name.{{cite:subjectwell-home-2023,subjectwell-approach-2023,clariness-merger-2026}}",
        },
        { type: "h3", text: "SubjectWell (Clariness) key features" },
        {
          type: "ul",
          items: [
            "Channels including paid social with Meta, search, display and patient communities, and the ClinLife portal (2026).{{cite:clariness-faqs}}",
            "Telephone pre-screening against IRB-approved questionnaires (2023), and digital smart-screening through ClinLife (2026).{{cite:subjectwell-approach-2023,clariness-clinlife}}",
            "Patients scheduled or live-transferred to their preferred site, and follow-up and recontact on behalf of sites (2026).{{cite:clariness-clinlife,clariness-sites}}",
            "The OneView recruitment portal (2025), and a RealTime-CTMS integration with its campaigns (2022).{{cite:subjectwell-oneview-2025,realtime-ctms-integrations-2022}}",
            "Outcome-based pricing, balanced across setup and systems, outreach and media, and performance delivery (2026).{{cite:clariness-faqs}}",
          ],
        },
        { type: "h3", text: "SubjectWell (Clariness) is ideal for" },
        {
          type: "p",
          text: "Sponsors, CROs and study sites that want an outsourced recruitment service with outcome-based pricing rather than a monthly listing fee (2026).{{cite:clariness-merger-2026,clariness-faqs}} Bond is better than SubjectWell for a site that wants its own patients screened and every lead booked by software; see [Bond vs SubjectWell](/compare/bond-vs-subjectwell).{{cite:bond-site,bond-product}}",
        },
        { type: "h3", text: "3. 1nHealth" },
        {
          type: "p",
          text: "1nHealth, founded in 2019 and based in Orlando, provides digital recruitment and enrollment management services to sponsors, biotech firms and CROs, and says it offers sites hands-on support and software (2026).{{cite:1nhealth-overview,1nhealth-about}}",
        },
        { type: "h3", text: "1nHealth key features" },
        {
          type: "ul",
          items: [
            "Direct-to-patient digital ads rather than patient databases; one case study names Facebook, Instagram, Google, Reddit, Snapchat and Pinterest (2025, 2026).{{cite:1nhealth-for-cros,1nhealth-colon-case}}",
            "Multiple levels of pre-screening before referrals pass to the site (2026).{{cite:1nhealth-for-cros}}",
            "1nData, which sends automated SMS and shows sponsors and sites how many referrals were disqualified and why (2026).{{cite:1nhealth-1ndata}}",
            "A retention platform that escalates from app nudges to an AI text agent, an AI voice agent that books visits, and a human coordinator (2026).{{cite:1nhealth-retention}}",
            "Pricing on milestones such as signed ICFs or randomization, with flexible models on request (2026).{{cite:1nhealth-home}}",
          ],
        },
        { type: "h3", text: "1nHealth is ideal for" },
        {
          type: "p",
          text: "Sponsors and CROs that want an outsourced direct-to-patient recruiter paid on milestones rather than per listing (2026).{{cite:1nhealth-overview,1nhealth-home}} Bond is better than 1nHealth for a site that wants its own patients screened as well as ads run, and the screening visit booked during recruitment; see [Bond vs 1nHealth](/compare/bond-vs-1nhealth).{{cite:bond-site,bond-product}}",
        },
        { type: "h3", text: "4. Antidote" },
        {
          type: "p",
          text: "Antidote describes itself as a precision recruitment company that connects patients with research through digital marketing and its partner network (2026).{{cite:antidote-partners}}",
        },
        { type: "h3", text: "Antidote key features" },
        {
          type: "ul",
          items: [
            "Prescreening before referral, down to labs when necessary, and services from initial outreach through to site engagement (2026).{{cite:antidote-sponsors}}",
            "Trial search technology that patient advocacy groups and research foundations host at no cost, and a contact center for patient support (2024).{{cite:antidote-seqster-2024}}",
            "A partnership with SEQSTER to match patients on their medical history, genomic data and lifestyle factors (2024).{{cite:antidote-seqster-2024}}",
            "A risk-sharing payment model (2026).{{cite:antidote-sponsors}}",
            "Recent therapeutic areas including allergy and immunology, cardiology, dermatology and rare disease (2026).{{cite:antidote-sponsors}}",
          ],
        },
        { type: "h3", text: "Antidote is ideal for" },
        {
          type: "p",
          text: "Sponsors that want patients reached through digital marketing and patient-advocacy partners, on a risk-sharing model rather than a listing fee (2024, 2026).{{cite:antidote-partners,antidote-sponsors,antidote-seqster-2024}} Bond is better than Antidote for a site that wants its own patients screened and every lead contacted immediately and booked by software; see [Bond vs media recruitment](/compare/bond-vs-media-recruitment).{{cite:bond-site,bond-product}}",
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do the five recruitment companies compare, side by side?",
      blocks: [
        {
          type: "p",
          text: "Years show each source's date. \"Not publicly documented\" means we found no public description in the materials we reviewed (October 2026 for Antidote, November 2026 for the others), not that the capability is absent.",
        },
        {
          type: "table",
          caption: "Bond Health, StudyKIK, SubjectWell (now Clariness), 1nHealth and Antidote, from each company's public materials",
          columns: ["Company", "Where patients come from", "First contact and booking", "Screens the site's EHR", "Consent support", "Pricing"],
          rows: [
            [
              "**Bond Health**",
              "The site's EHR, plus Meta and Google ad campaigns Bond creates and runs for each study.{{cite:bond-site,bond-product}}",
              "Every lead contacted immediately by voice and text, followed up, pre-screened and booked onto the site's calendar in the same conversation.{{cite:bond-product,bond-site}}",
              "Yes, including clinical notes, with evidence for every criterion.{{cite:bond-site,bond-product}}",
              "Yes: plain-language explanations, Q&A and staff escalation. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
              "A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
            ],
            [
              "**StudyKIK**",
              "Patient communities and social media outreach (2026).{{cite:studykik-site-plans}}",
              "New referrals contacted within 24 hours of signup; the site calls, texts and schedules patients from KIKsite (2026).{{cite:studykik-sites-recruitment,studykik-kiksite}}",
              "Not publicly documented (November 2026); sites can upload a patient database (2026).{{cite:studykik-sites-recruitment}}",
              "eConsent powered by DocuSign, for sponsors (2026).{{cite:studykik-econsent}}",
              "$2,200 to $5,800 per 30-day site listing (2026).{{cite:studykik-site-plans}}",
            ],
            [
              "**SubjectWell (now Clariness)**",
              "Non-study-specific online ads (2023); paid social including Meta, search, display and patient communities (2026).{{cite:subjectwell-home-2023,clariness-faqs}}",
              "Phone pre-screening (2023); patients scheduled or live-transferred to their preferred site (2026); sites asked to process referrals within 3 to 5 working days (2026).{{cite:subjectwell-approach-2023,clariness-clinlife,clariness-faqs}}",
              "Not publicly documented (November 2026).",
              "Not publicly documented (November 2026).",
              "Pay only for randomized patients (2023); now outcome-based, balanced across setup, media and performance (2026).{{cite:subjectwell-pricing-2023,clariness-faqs}}",
            ],
            [
              "**1nHealth**",
              "Direct-to-patient digital ads, and referrals from healthcare professionals (2026).{{cite:1nhealth-for-cros,1nhealth-enrollment-solutions}}",
              "Multiple levels of pre-screening, then referral to the site (2026). Booking the screening visit: not publicly documented (November 2026).{{cite:1nhealth-for-cros}}",
              "Not publicly documented (November 2026).",
              "Online consent processes in one case study (2025); otherwise not publicly documented (November 2026).{{cite:1nhealth-colon-case}}",
              "Milestones such as signed ICFs or randomization (2026).{{cite:1nhealth-home}}",
            ],
            [
              "**Antidote**",
              "Digital marketing and a partner network (2026).{{cite:antidote-partners}}",
              "Prescreens before referring (2026), with a contact center for patient support (2024). Booking: not publicly documented (October 2026).{{cite:antidote-sponsors,antidote-seqster-2024}}",
              "An EHR matching product was announced in 2016; screening a site's own records is not publicly documented (October 2026).{{cite:antidote-2016}}",
              "Not publicly documented (October 2026).",
              "A risk-sharing payment model (2026).{{cite:antidote-sponsors}}",
            ],
          ],
          note: "See [all recruitment companies, compared](/compare/patient-recruitment-companies) for the wider category.",
        },
      ],
    },
    {
      id: "how-to-choose",
      heading: "How should a site choose a recruitment vendor?",
      blocks: [
        {
          type: "p",
          text: "Start with who will work each lead. A listing service sends referrals for your coordinators to call, text and schedule; if they do not have those hours, choose a vendor whose software contacts, pre-screens and books patients itself.",
        },
        {
          type: "steps",
          items: [
            { title: "Start with your own patients", text: "Ask whether the vendor screens your EHR against the protocol and shows the evidence behind each criterion, before you pay for media or a listing." },
            { title: "Ask who contacts each lead, and when", text: "Ask how soon a new lead hears from the vendor, how follow-up works for patients who do not answer, and who puts the screening visit on your calendar." },
            { title: "Track every source to randomization", text: "Record leads, first contact, booked visits, screen failures and randomizations by source, with the days between each step." },
            {
              title: "Compare cost per randomized patient",
              text: "Add the listing or vendor fees for the months a study ran and the coordinator hours each source used, then divide by randomizations. The [cost per randomized patient calculator](/calculators/cost-per-randomized-patient) does the arithmetic.",
            },
            {
              title: "Check the paperwork",
              text: "Ad copy and outreach scripts need IRB review, because FDA treats advertising as the start of informed consent. Ask about BAAs, audit logs and who holds pre-screening data. Bond signs BAAs; see [security](/security).{{cite:fda-recruiting-1998,bond-site}}",
            },
          ],
        },
        {
          type: "p",
          text: "A Bond pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads or referrals, before the EHR is connected.{{cite:bond-site}} The [vendor evaluation checklist](/templates/ai-recruitment-vendor-evaluation-checklist) turns these steps into questions.",
        },
      ],
    },
    {
      id: "why-bond",
      heading: "Why is Bond better than StudyKIK?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond is better than StudyKIK because its agents do the work a referral leaves to your staff: they contact every lead immediately, keep following up, pre-screen and book the screening visit, for patients from your own EHR as well as from the Meta and Google ad campaigns Bond creates for your study. You pay for screened and randomized patients, not for a 30-day listing.{{cite:bond-product,bond-site,studykik-site-plans}}",
        },
        {
          type: "stats",
          items: [
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
            { value: "3x", label: "contact rate with voice and SMS/text outreach", cite: "bond-site" },
            { value: "48 hours", label: "to full EHR integration, with no integration fee", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**Immediate contact, not within a day.** StudyKIK says it contacts new referrals within 24 hours of signup.{{cite:studykik-sites-recruitment}} Bond's agents contact every new ad lead immediately and keep following up with every lead who has not responded.{{cite:bond-product}} See [why speed to lead matters](/blog/speed-to-lead-trial-ad-leads).",
            ADS_BULLET,
            "**Booked visits, not a dashboard of referrals.** With StudyKIK, the site calls, texts or emails patients from KIKsite.{{cite:studykik-kiksite}} Bond's agents pre-screen patients and book the screening visit straight onto your calendar in the same conversation.{{cite:bond-product,bond-site}}",
            "**Your own patients first.** Bond's [Identify](/identify) screens your EHR, reading clinical notes, prescriptions and lab results, with chart evidence for every criterion.{{cite:bond-site,bond-product}} Screening a site's EHR is not publicly documented in StudyKIK's materials (November 2026).{{cite:studykik-sites-recruitment,studykik-kiksite}}",
            "**Consent support for the site, not only the sponsor.** Bond's [Consent](/consent) support explains the consent form in plain language, answers patient questions and escalates to staff, while the site and PI obtain consent.{{cite:bond-site,bond-product}} StudyKIK's eConsent is part of its sponsor offering.{{cite:studykik-econsent,studykik-carepackage}}",
            "**A price that moves with enrollment.** A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
            "**Security you can check.** Bond is HIPAA compliant and SOC 2 Type I compliant, its information security management system is certified to ISO/IEC 27001:2022 by Advantage Partners, and its public Trust Center lists 73 HIPAA Security Rule controls, monitored continuously. See [security](/security).{{cite:bond-product,bond-trust-center}}",
          ],
        },
        ...testimonialBlocks(),
        {
          type: "p",
          text: "As of October 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that both reads EHR notes against a protocol and runs its own Meta and Google ad campaigns, then contacts patients by voice and text all the way to a booked study visit.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: calComHref,
          text: "Bring one protocol, or the referral list from your current listing. We will show how Bond finds patients in your EHR and through its own ads, and how its agents contact, pre-screen and book them.",
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
          text: "Bond Health, which sells recruitment software and competes with every company on this list, wrote this page in November 2026 and ranked itself first. Facts about StudyKIK, SubjectWell, Clariness and 1nHealth come from their own websites, Internet Archive copies, press releases, partner announcements and case studies, read on November 8, 2026; facts about Antidote come from its website and press releases, re-checked on October 23, 2026. Each is quoted in the sources below, and most were first checked for Bond's one-to-one comparison pages. We do not repeat any vendor's performance or audience-size claims, and where a vendor's materials are silent on a capability we say it is not publicly documented rather than guess. Statements about Bond come from Bond's website, product information and Trust Center. Company and product names are trademarks of their owners, StudyKIK is a Syneos Health company, and Bond Health is not affiliated with or endorsed by any of them.",
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
      q: "What are the best StudyKIK alternatives?",
      a: "Bond Health ranks first, followed by SubjectWell (now Clariness), 1nHealth and Antidote. Bond is the only one of the four whose public materials describe software that screens a site's EHR, runs its own Meta and Google ad campaigns, and contacts, pre-screens and books every patient.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How much does StudyKIK cost?",
      a: "As of November 8, 2026, StudyKIK lists three site plans priced per 30-day listing: Platinum $2,200, Diamond $3,800 and Ruby $5,800. Sponsor pricing is not published.{{cite:studykik-site-plans}} Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee; see [pricing](/pricing).{{cite:bond-product}}",
    },
    {
      q: "Who owns StudyKIK?",
      a: "Syneos Health, which announced its acquisition of StudyKIK in September 2021. StudyKIK launched in 2014.{{cite:syneos-acquires-studykik-2021}}",
    },
    {
      q: "Is Bond better than StudyKIK?",
      a: "Yes, for a site that wants patients booked rather than referrals to work. Bond finds eligible patients in your EHR and creates and runs Meta and Google ad campaigns for your study; its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, and Bond supports informed consent, with no integration fee.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Can Bond work the leads we already get from StudyKIK?",
      a: "Yes. A Bond pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads or referrals, before the EHR is connected. Patients are told AI is used and can reach a person at any time.{{cite:bond-site}}",
    },
  ],
  sources: [
    ...pick(
      studykikPage,
      "studykik-home",
      "studykik-sites-recruitment",
      "studykik-site-plans",
      "studykik-kiksite",
      "studykik-carepackage",
      "studykik-econsent",
      "syneos-acquires-studykik-2021",
      "crio-studykik-partnership-2024",
    ),
    ...pick(
      subjectwellPage,
      "subjectwell-home-2023",
      "subjectwell-pricing-2023",
      "subjectwell-approach-2023",
      "subjectwell-oneview-2025",
      "clariness-merger-2026",
      "clariness-faqs",
      "clariness-clinlife",
      "clariness-sites",
      "realtime-ctms-integrations-2022",
    ),
    ...pick(
      oneNHealthPage,
      "1nhealth-overview",
      "1nhealth-for-cros",
      "1nhealth-home",
      "1nhealth-about",
      "1nhealth-1ndata",
      "1nhealth-retention",
      "1nhealth-enrollment-solutions",
      "1nhealth-colon-case",
    ),
    ...pick(mediaPage, "antidote-partners", "antidote-sponsors", "antidote-seqster-2024", "antidote-2016"),
    R["clariness-kpis-2024"],
    R["fda-recruiting-1998"],
    ...pick(BOND_SOURCES, "bond-site", "bond-product", "bond-trust-center"),
    ...testimonialSources(),
  ],
  related: [
    { label: "Bond vs StudyKIK", href: "/compare/bond-vs-studykik", description: "A site-facing recruitment listing service, head to head." },
    { label: "Bond vs SubjectWell vs StudyKIK", href: "/compare/bond-vs-subjectwell-vs-studykik", description: "All three side by side, criterion by criterion." },
    { label: "SubjectWell alternatives", href: "/compare/subjectwell-alternatives", description: "Four recruitment companies compared with SubjectWell, now Clariness." },
    { label: "Bond vs 1nHealth", href: "/compare/bond-vs-1nhealth", description: "A direct-to-patient media recruiter, head to head." },
    { label: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment", description: "Antidote and 1nHealth side by side." },
    { label: "Recruitment companies compared", href: "/compare/patient-recruitment-companies", description: "Services firms and EHR-based platforms, in two tables." },
  ],
};

export default page;
