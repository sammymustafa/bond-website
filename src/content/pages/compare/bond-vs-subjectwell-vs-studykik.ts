import type { SeoPage, Source } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { calComHref } from "../../nav";
import { BOND_SOURCES, REFERRAL_RESEARCH_SOURCES as R } from "./_referral-vendors";
import subjectwellPage from "./bond-vs-subjectwell";
import studykikPage from "./bond-vs-studykik";

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
 * A three-way comparison in the style of vanta.com's multi-vendor pages: meet the contenders, one
 * section per buying criterion, a side-by-side table, who each is best for, and why Bond. Every
 * SubjectWell and StudyKIK fact comes from the sources already checked for the head-to-head pages.
 */
const page: SeoPage = {
  path: "/compare/bond-vs-subjectwell-vs-studykik",
  category: "comparison",
  title: "Bond Health vs SubjectWell vs StudyKIK: 2026 comparison",
  description:
    "Bond, SubjectWell (now Clariness) and StudyKIK compared on where patients come from, lead follow-up, visit booking, site workload and pricing.",
  keywords: [
    "SubjectWell vs StudyKIK",
    "StudyKIK vs SubjectWell",
    "Bond Health vs SubjectWell vs StudyKIK",
    "SubjectWell Clariness vs StudyKIK",
    "patient recruitment companies compared",
    "SubjectWell alternatives",
    "StudyKIK alternatives",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs SubjectWell (now Clariness) vs StudyKIK",
  intro:
    "SubjectWell, now part of Clariness, and StudyKIK both find patients through online advertising and patient communities, pre-screen the people who respond and pass them to research sites as referrals.{{cite:subjectwell-home-2023,clariness-merger-2026,studykik-site-plans,studykik-sites-recruitment}} Bond Health starts with the patients a site already treats, screening its EHR against each protocol, and also creates and runs Meta and Google ad campaigns for each study. Its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit.{{cite:bond-site,bond-product}} We compared the three on six things a site buys recruitment for. For a site that wants patients booked rather than referrals to work, Bond is the best of the three.",
  summary:
    "Bond, SubjectWell (now Clariness) and StudyKIK side by side: patient sources, lead follow-up, booking, site workload, pricing and reporting.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: calComHref, secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "contenders",
      heading: "Who are Bond Health, SubjectWell and StudyKIK?",
      blocks: [
        { type: "h3", text: "Bond Health" },
        {
          type: "p",
          text: "Bond Health is an AI clinical trial recruitment platform for research sites, physician groups, FQHCs, site networks, CROs and sponsors. It screens the site's EHR against each protocol, reading clinical notes, prescriptions and lab results, and creates and runs Meta and Google ad campaigns for each study. Its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, then support informed consent and keep participants engaged after enrollment.{{cite:bond-site,bond-product}}",
        },
        { type: "h3", text: "SubjectWell (now Clariness)" },
        {
          type: "p",
          text: "SubjectWell built a patient marketplace: non-study-specific online advertising drew people in, SubjectWell pre-screened them by phone and referred likely candidates to sites, and customers paid only for patients who randomized (2023).{{cite:subjectwell-home-2023,subjectwell-approach-2023,subjectwell-pricing-2023,subjectwell-home-2024}} WindRose Health Investors acquired it in April 2024, and in January 2026 it merged with Clariness. The combined company operates under the Clariness name, and subjectwell.com now redirects to Clariness (2026).{{cite:subjectwell-windrose-2024,clariness-merger-2026,clariness-home}}",
        },
        { type: "h3", text: "StudyKIK" },
        {
          type: "p",
          text: "StudyKIK, a Syneos Health company since September 2021, sells research sites recruitment plans priced per 30-day listing. It finds patients through its patient communities and social media outreach, its agents pre-screen new referrals, and the site works them in its KIKsite dashboard (2026).{{cite:syneos-acquires-studykik-2021,studykik-site-plans,studykik-sites-recruitment,studykik-kiksite}} It also sells sponsors a CarePackage bundle with eConsent and call-center support (2026).{{cite:studykik-carepackage}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond is the best of the three for a site that wants patients booked, not referrals to work. It is the only one whose public materials describe screening the site's own EHR, contacting every new lead immediately, and pre-screening and booking the screening visit in the same conversation.{{cite:bond-site,bond-product}} Neither SubjectWell's nor StudyKIK's public materials describe screening a site's EHR (November 2026).{{cite:subjectwell-services-2025,clariness-faqs,studykik-sites-recruitment,studykik-kiksite}}",
        },
      ],
    },
    {
      id: "patient-sources",
      heading: "Where do patients come from with each one?",
      blocks: [
        {
          type: "p",
          text: "SubjectWell's 2023 model started with people who answered non-study-specific online ads on general-interest websites. Since the merger, Clariness lists paid social including Meta, search, display and patient communities among its channels, and its ClinLife portal is one of three enrollment platforms in the Clariness Hub (2026).{{cite:subjectwell-home-2023,clariness-faqs}} StudyKIK draws patients from its patient communities and social media outreach, adds targeted marketing and study websites for sponsors, and lets sites upload their existing patient database (2026).{{cite:studykik-site-plans,studykik-carepackage,studykik-sites-recruitment}}",
        },
        {
          type: "p",
          text: "Bond starts with the patients the site already treats. [Identify](/identify) screens the EHR against each protocol, reading clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, with chart evidence for every criterion, and checks each patient against every open study at the site. Bond also creates and runs Meta and Google ad campaigns for each study to reach patients beyond the site's records.{{cite:bond-site,bond-product}} Published research favors starting with known patients: in one late-life depression trial, 30.3% of provider referrals were randomized, against 4.3% of Facebook self-referrals.{{cite:ajgp-depression-2023}}",
        },
      ],
    },
    {
      id: "speed-to-lead",
      heading: "How fast is each new lead contacted, and who follows up?",
      blocks: [
        {
          type: "p",
          text: "StudyKIK says it contacts new referrals within 24 hours of signup (2026).{{cite:studykik-sites-recruitment}} In 2023, SubjectWell called each patient to confirm the answers they gave online, and Clariness now says it follows up and recontacts patients on behalf of sites (2026). How soon a new Clariness lead is first contacted is not publicly documented (November 2026).{{cite:subjectwell-approach-2023,clariness-sites}}",
        },
        {
          type: "p",
          text: "Bond's voice and text agents contact every new ad lead immediately and keep following up with every lead who has not responded, to maximize response rates.{{cite:bond-product}} See [why speed to lead matters](/blog/speed-to-lead-trial-ad-leads) for trial ad leads.",
        },
      ],
    },
    {
      id: "prescreen-and-book",
      heading: "Who pre-screens patients and books the screening visit?",
      blocks: [
        {
          type: "p",
          text: "All three pre-screen. SubjectWell pre-screened by telephone against IRB-approved questionnaires (2023), and Clariness describes digital smart-screening through ClinLife (2026).{{cite:subjectwell-approach-2023,clariness-clinlife}} StudyKIK uses StudyForms digital pre-screening, and its agents, trained on the study's protocol, pre-screen all new referrals (2026).{{cite:studykik-site-plans,studykik-sites-recruitment}}",
        },
        {
          type: "p",
          text: "Booking is where they differ. In 2023, SubjectWell's sites continued the screening discussion and scheduled the first visit; by 2025, its Patient Companions scheduled the site screening call, and Clariness says ClinLife patients are scheduled or live-transferred to their preferred site (2026).{{cite:subjectwell-approach-2023,subjectwell-home-2025,clariness-clinlife}} StudyKIK's KIKsite gives the site direct scheduling and calendar integration, but whether StudyKIK or the site books the first visit is not spelled out (2026).{{cite:studykik-kiksite,studykik-sites-recruitment}}",
        },
        {
          type: "p",
          text: "Bond's agents pre-screen the patient and book the screening visit straight onto the site's calendar in the same conversation, or transfer live to a coordinator or book a callback, as the site prefers ([Book](/book)). For patients found in the EHR, they skip questions the chart already answers.{{cite:bond-product,bond-site}}",
        },
      ],
    },
    {
      id: "site-work",
      heading: "What work is left for the site?",
      blocks: [
        {
          type: "p",
          text: "With a referral, the site's staff pick up where the vendor stops. Clariness asks sites to process referrals within 3 to 5 working days (2026), and StudyKIK's sites call, text or email patients from KIKsite (2026).{{cite:clariness-faqs,studykik-kiksite}} Clariness's own 2024 data put the average time for sites to make first patient contact at 17 days, and to schedule a patient's first visit at 30.5 days.{{cite:clariness-kpis-2024}} In a May 2026 survey of 100 US sites, 52% said at least one in five referrals is ruled ineligible before formal screening.{{cite:mytomorrows-2026}}",
        },
        {
          type: "p",
          text: "With Bond, the agents carry that work: contact, follow-up, pre-screening and booking, for EHR matches and ad leads alike, and each EHR match arrives with chart evidence for every criterion. Patients are told AI is used and can reach a person at any time.{{cite:bond-product,bond-site}} Ad copy and outreach scripts still go to your IRB first, because FDA treats advertising as the start of informed consent.{{cite:fda-recruiting-1998}}",
        },
      ],
    },
    {
      id: "pricing",
      heading: "How does pricing compare?",
      blocks: [
        {
          type: "p",
          text: "SubjectWell was known for charging only for patients who randomized (2023). Clariness says it remains committed to outcome-based pricing, now balanced across setup and systems, outreach and media, and performance delivery (2026); we found no published price list.{{cite:subjectwell-pricing-2023,clariness-faqs}} StudyKIK's site plans are flat fees per 30-day listing: Platinum $2,200, Diamond $3,800 and Ruby $5,800, with referral guarantees subject to the indication and study criteria. Sponsor pricing is not published (2026).{{cite:studykik-site-plans}}",
        },
        {
          type: "p",
          text: "Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee. Ad spend for the Meta and Google campaigns is not included in Bond's fees; it comes out of the site's own advertising budget for the study.{{cite:bond-product}} See [pricing](/pricing).",
        },
        {
          type: "p",
          text: "The fair test across all three is cost per randomized patient: every fee plus the coordinator hours each source used, divided by the patients randomized from it. The [cost per randomized patient calculator](/calculators/cost-per-randomized-patient) does the arithmetic.",
        },
      ],
    },
    {
      id: "reporting",
      heading: "What reporting does each one give the site?",
      blocks: [
        {
          type: "p",
          text: "SubjectWell asked sites for a weekly update on each patient's status (2023), offered a Performance Portal (2024) and launched its OneView recruitment portal in February 2025.{{cite:subjectwell-approach-2023,subjectwell-home-2024,subjectwell-oneview-2025}} RealTime-CTMS integrates with SubjectWell's advertising campaigns (2022), and Clariness describes API connectivity into existing site systems (2026).{{cite:realtime-ctms-integrations-2022,clariness-faqs}} StudyKIK's KIKsite tracks patients and media sources for the site, sponsors get trial reporting (2026), and StudyKIK has a two-way CRIO integration (2024).{{cite:studykik-kiksite,studykik-home,crio-studykik-partnership-2024}}",
        },
        {
          type: "p",
          text: "Bond's real-time dashboard and audit trail report patients matched, contacted, pre-screened, consented and randomized, plus time to enrollment and coordinator hours saved.{{cite:bond-site}} Bond is a CRIO Certified Partner with a two-way CRIO integration, and works with Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault.{{cite:bond-site,bond-product}}",
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond, SubjectWell and StudyKIK compare, side by side?",
      blocks: [
        {
          type: "p",
          text: "Years in the SubjectWell and StudyKIK columns show each source's date. \"Not publicly documented (November 2026)\" means we found no public description in the materials we read on November 8, 2026, not that the capability is absent.",
        },
        {
          type: "table",
          caption: "Bond Health, SubjectWell (now Clariness) and StudyKIK, from each company's public materials",
          columns: ["Capability", "Bond Health", "SubjectWell (now Clariness)", "StudyKIK"],
          rows: [
            [
              "Screens the site's own EHR against the protocol",
              "**Yes.** Reads clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, with chart evidence for every criterion, and checks each patient against every open study at the site.{{cite:bond-site,bond-product}}",
              "**Not publicly documented (November 2026).** With the patient's consent, SubjectWell retrieved full medical records to confirm eligibility (2025).{{cite:subjectwell-services-2025,clariness-faqs}}",
              "**Not publicly documented (November 2026).** Sites can upload and manage their existing patient database (2026).{{cite:studykik-sites-recruitment}}",
            ],
            [
              "Runs ad campaigns to find new patients",
              "**Yes.** Creates and runs Meta and Google ad campaigns for each study.{{cite:bond-product}}",
              "**Yes.** Non-study-specific online advertising feeding a patient marketplace (2023, 2024); paid social including Meta, search, display and patient communities (2026).{{cite:subjectwell-home-2023,subjectwell-home-2024,clariness-faqs}}",
              "**Yes.** Patient communities and social media outreach (2026), with IRB ad creation in KIKsite (2026).{{cite:studykik-site-plans,studykik-kiksite}}",
            ],
            [
              "Contacts every new lead immediately",
              "**Yes.** Voice and text agents contact every new ad lead immediately.{{cite:bond-product}}",
              "**Not publicly documented (November 2026).** SubjectWell called each patient to confirm their online answers (2023).{{cite:subjectwell-approach-2023}}",
              "**Partial.** Contacts new referrals within 24 hours of signup (2026).{{cite:studykik-sites-recruitment}}",
            ],
            [
              "Keeps following up until the patient responds",
              "**Yes.** The agents keep following up with every lead who has not responded.{{cite:bond-product}}",
              "**Yes.** Clariness follows up and recontacts patients on behalf of sites (2026).{{cite:clariness-sites}}",
              "**Partial.** Call-center support for continuous follow-up is part of the sponsor CarePackage (2026).{{cite:studykik-carepackage}}",
            ],
            [
              "Pre-screening",
              "**Yes.** Voice and text agents pre-screen chart matches and ad leads alike, skipping questions the chart already answers.{{cite:bond-product}}",
              "**Yes.** Telephone pre-screening against IRB-approved questionnaires (2023); digital smart-screening through ClinLife (2026).{{cite:subjectwell-approach-2023,clariness-clinlife}}",
              "**Yes.** StudyForms digital pre-screening, and agents trained on the protocol pre-screen all new referrals (2026).{{cite:studykik-site-plans,studykik-sites-recruitment}}",
            ],
            [
              "Books the screening visit in the same conversation",
              "**Yes.** Pre-screens and books the visit straight onto the site's calendar, or transfers live to a coordinator, as the site prefers.{{cite:bond-product,bond-site}}",
              "**Partial.** Patient Companions scheduled the site screening call (2025); ClinLife patients are scheduled or live-transferred to their preferred site (2026); sites are asked to process referrals within 3 to 5 working days (2026).{{cite:subjectwell-home-2025,clariness-clinlife,clariness-faqs}}",
              "**Partial.** KIKsite offers direct scheduling and calendar integration; whether StudyKIK or the site books the first visit is not spelled out (2026).{{cite:studykik-kiksite,studykik-sites-recruitment}}",
            ],
            [
              "Informed consent support",
              "**Yes.** Plain-language explanations, patient Q&A in the patient's language, checks of understanding and staff escalation. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
              "**Not publicly documented (November 2026).**{{cite:clariness-faqs,subjectwell-services-2025}}",
              "**For sponsors.** eConsent powered by DocuSign, with video chat for patient questions (2026).{{cite:studykik-econsent,studykik-carepackage}}",
            ],
            [
              "Support after enrollment",
              "**Yes.** Visit reminders, transportation booking, symptom and diary collection, side-effect check-ins and dropout-risk alerts.{{cite:bond-product}}",
              "**Yes.** Appointment reminders from its concierge team (2023) and patient support to reduce drop-off (2025).{{cite:subjectwell-approach-2023,subjectwell-services-2025}}",
              "**Yes.** Appointment reminders and patient transportation services (2026), plus a patient app and call-center follow-up for sponsors (2026).{{cite:studykik-sites-recruitment,studykik-carepackage}}",
            ],
            [
              "Reporting and CTMS integration",
              "**Yes.** Real-time dashboard and audit trail; CRIO Certified Partner with a two-way CRIO integration; works with Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault.{{cite:bond-site,bond-product}}",
              "**Yes.** OneView recruitment portal (2025); RealTime-CTMS integrates with its campaigns (2022); API connectivity into site systems (2026).{{cite:subjectwell-oneview-2025,realtime-ctms-integrations-2022,clariness-faqs}}",
              "**Yes.** KIKsite tracks patients and media sources (2026), with a two-way CRIO integration (2024).{{cite:studykik-kiksite,crio-studykik-partnership-2024}}",
            ],
            [
              "Pricing",
              "A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
              "Pay only for patients who randomize (2023). Clariness: outcome-based pricing balanced across setup and systems, outreach and media, and performance delivery (2026). No published price list.{{cite:subjectwell-pricing-2023,clariness-faqs}}",
              "Flat fees per 30-day site listing: $2,200, $3,800 or $5,800 (2026). Sponsor pricing is not published.{{cite:studykik-site-plans}}",
            ],
            [
              "Who it serves",
              "Research sites, physician groups, FQHCs, site networks, CROs and sponsors.{{cite:bond-site}}",
              "Biopharma sponsors, CROs and study sites, under the Clariness name since January 2026.{{cite:clariness-merger-2026}}",
              "Research sites and sponsors; a Syneos Health company since 2021.{{cite:studykik-home,syneos-acquires-studykik-2021}}",
            ],
          ],
          note: "See [all recruitment companies, compared](/compare/patient-recruitment-companies) for the wider category.",
        },
      ],
    },
    {
      id: "best-for",
      heading: "Who is each one best for?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Bond Health: best for research sites, site networks, CROs and sponsors that want patients booked rather than referrals to work.** It finds patients in the site's own EHR and through its own Meta and Google ad campaigns, then contacts, pre-screens and books every one, in any therapeutic area.{{cite:bond-site,bond-product}}",
            "**SubjectWell (now Clariness): for sponsors and CROs that want an outsourced recruitment service with outcome-based pricing.** Clariness serves biopharma sponsors, CROs and study sites, and balances its outcome-based pricing across setup, media and performance (2026).{{cite:clariness-merger-2026,clariness-faqs}}",
            "**StudyKIK: for sites that want a flat listing fee and have coordinators to work each referral.** Plans are priced per 30-day listing with no long-term contracts, and the site calls, texts and schedules patients from KIKsite (2026).{{cite:studykik-site-plans,studykik-home,studykik-kiksite}}",
          ],
        },
      ],
    },
    {
      id: "why-bond",
      heading: "Why is Bond better than SubjectWell and StudyKIK?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond is better than SubjectWell and StudyKIK because it does the work their referrals leave to your staff. It finds patients in your own EHR as well as through the Meta and Google ad campaigns it creates for each study, and its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, with consent support after, in one platform with no integration fee.{{cite:bond-site,bond-product}}",
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
            "**Your own patients first, then ads.** SubjectWell and StudyKIK start with people who respond to online advertising or patient communities.{{cite:subjectwell-home-2023,clariness-faqs,studykik-site-plans}} Bond's [Identify](/identify) screens your EHR first, with chart evidence for every criterion, and checks each patient against every open study at your site.{{cite:bond-site,bond-product}}",
            ADS_BULLET,
            "**Booked, not referred.** SubjectWell's sites scheduled the first visit after the hand-off in 2023, Clariness now asks sites to process referrals within 3 to 5 working days, and StudyKIK's sites call, text and schedule patients from KIKsite.{{cite:subjectwell-approach-2023,clariness-faqs,studykik-kiksite}} Bond's agents pre-screen patients and book the screening visit in the same conversation.{{cite:bond-product}}",
            "**Consent and retention in the same workflow.** Bond's [Consent](/consent) support explains the consent form in plain language, answers patient questions and escalates to staff, while the site and PI obtain consent. After enrollment, the same agents send visit reminders, book transportation and flag participants at risk of dropping out.{{cite:bond-site,bond-product}}",
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
          text: "Bring one protocol. We will show how Bond finds patients for it in your EHR and through its own ads, and how its agents contact, pre-screen and book them.",
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
          text: "Bond Health, which sells recruitment software and competes with SubjectWell, Clariness and StudyKIK, wrote this page in November 2026. Statements about SubjectWell come from Internet Archive copies of SubjectWell's website from 2023 to 2025, Clariness's current website and FAQ, press releases and RealTime's announcement. Statements about StudyKIK come from StudyKIK's website, Syneos Health's acquisition announcement and CRIO's partnership announcement. All were read on November 8, 2026, and each is quoted in the sources below. We do not repeat either vendor's performance or audience-size claims, and where their materials are silent on a capability we say it is not publicly documented rather than guess. Statements about Bond come from Bond's website, product information and Trust Center. SubjectWell, Clariness, ClinLife, StudyKIK and KIKsite are trademarks of their owners, and Bond Health is not affiliated with or endorsed by any of them.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, including anything about SubjectWell, Clariness or StudyKIK, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond better than SubjectWell and StudyKIK?",
      a: "Yes, for a site that wants patients booked rather than referrals to work. Bond finds eligible patients in your EHR, with chart evidence for every criterion, and creates and runs Meta and Google ad campaigns for each study. Its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, with consent support and no integration fee.{{cite:bond-site,bond-product}}",
    },
    {
      q: "What is the difference between SubjectWell and StudyKIK?",
      a: "SubjectWell ran a patient marketplace: it pre-screened people by phone, referred them to sites and charged only for randomized patients (2023). It is now part of Clariness, which balances its outcome-based pricing across setup, media and performance (2026).{{cite:subjectwell-approach-2023,subjectwell-pricing-2023,clariness-merger-2026,clariness-faqs}} StudyKIK sells research sites flat-fee 30-day listings, pre-screens referrals with its own agents and gives the site KIKsite to work them (2026).{{cite:studykik-site-plans,studykik-sites-recruitment,studykik-kiksite}}",
    },
    {
      q: "Do SubjectWell or StudyKIK screen a site's EHR?",
      a: "Not that their public materials describe, as of November 2026. SubjectWell retrieved full medical records with the patient's consent to confirm eligibility (2025), and StudyKIK lets sites upload their existing patient database (2026).{{cite:subjectwell-services-2025,studykik-sites-recruitment}} Bond screens the site's EHR against every criterion, including clinical notes.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How do SubjectWell, StudyKIK and Bond charge?",
      a: "Clariness, which now includes SubjectWell, prices on outcomes balanced across setup and systems, outreach and media, and performance delivery (2026). StudyKIK charges sites $2,200 to $5,800 per 30-day listing (2026).{{cite:clariness-faqs,studykik-site-plans}} Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee; see [pricing](/pricing).{{cite:bond-product}}",
    },
    {
      q: "Can Bond work the leads we already get from SubjectWell or StudyKIK?",
      a: "Yes. A Bond pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads or referrals, before the EHR is connected. Patients are told AI is used and can reach a person at any time.{{cite:bond-site}}",
    },
  ],
  sources: [
    ...pick(
      subjectwellPage,
      "subjectwell-home-2023",
      "subjectwell-pricing-2023",
      "subjectwell-approach-2023",
      "subjectwell-home-2024",
      "subjectwell-services-2025",
      "subjectwell-home-2025",
      "subjectwell-oneview-2025",
      "subjectwell-windrose-2024",
      "clariness-merger-2026",
      "clariness-faqs",
      "clariness-clinlife",
      "clariness-sites",
      "clariness-home",
      "realtime-ctms-integrations-2022",
    ),
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
    R["clariness-kpis-2024"],
    R["mytomorrows-2026"],
    R["ajgp-depression-2023"],
    R["fda-recruiting-1998"],
    ...pick(BOND_SOURCES, "bond-site", "bond-product", "bond-trust-center"),
    ...testimonialSources(),
  ],
  related: [
    { label: "Bond vs SubjectWell", href: "/compare/bond-vs-subjectwell", description: "The patient marketplace, now part of Clariness, head to head." },
    { label: "Bond vs StudyKIK", href: "/compare/bond-vs-studykik", description: "A site-facing recruitment listing service, head to head." },
    { label: "SubjectWell alternatives", href: "/compare/subjectwell-alternatives", description: "Four recruitment companies compared with SubjectWell, now Clariness." },
    { label: "StudyKIK alternatives", href: "/compare/studykik-alternatives", description: "Four recruitment companies compared with StudyKIK, for research sites." },
    { label: "Recruitment companies compared", href: "/compare/patient-recruitment-companies", description: "Services firms and EHR-based platforms, in two tables." },
    { label: "Pricing", href: "/pricing", description: "A fee per screened patient plus a share of milestone payments from randomization on." },
  ],
};

export default page;
