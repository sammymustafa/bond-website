import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { BOND_SOURCES, REFERRAL_RESEARCH_SOURCES as R, capabilityRows, evidenceSection, methodSection, pilotSection } from "./_referral-vendors";

const page: SeoPage = {
  path: "/compare/bond-vs-subjectwell",
  category: "comparison",
  title: "Bond Health vs SubjectWell (now Clariness), compared",
  description:
    "Why Bond is better than SubjectWell, now part of Clariness: Bond screens your EHR, runs study ads, contacts every lead immediately and books the visit itself.",
  keywords: [
    "SubjectWell",
    "Bond Health vs SubjectWell",
    "SubjectWell vs Bond Health",
    "SubjectWell Clariness merger",
    "SubjectWell pricing",
    "SubjectWell patient recruitment",
    "Clariness patient recruitment",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs SubjectWell (now Clariness)",
  intro:
    "SubjectWell built a patient marketplace: general online ads drew people in, SubjectWell pre-screened them by phone and referred likely candidates to research sites, charging only for patients who randomized.{{cite:subjectwell-home-2023,subjectwell-approach-2023}} In January 2026 it merged with Clariness, and the combined company operates under the Clariness name.{{cite:clariness-merger-2026}} Bond Health starts from the patients a site already treats, screening its EHR against each protocol, and creates and runs Meta and Google ad campaigns for each study. Its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, then support consent.{{cite:bond-site,bond-product}} For a site, CRO or sponsor that wants one platform from chart match or ad click to a booked visit, rather than referrals for staff to follow up, Bond is the stronger choice.",
  summary:
    "Why Bond is better than SubjectWell, now Clariness: EHR screening, study-specific ads, every lead contacted immediately and booked, and consent support.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why is Bond better than SubjectWell?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond is better than SubjectWell because it takes every patient all the way to a booked screening visit itself, whether they come from your EHR or from the Meta and Google ad campaigns Bond creates for your study, instead of handing referrals to your staff. It does this in one platform, with chart evidence behind every EHR match, consent support and no integration fee.{{cite:bond-site,bond-product}}",
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
            "**It starts with patients your site already knows.** SubjectWell's model began with people who answered general-interest ads.{{cite:subjectwell-home-2023}} Bond's [Identify](/identify) screens your EHR first, reading clinical notes, prescriptions and lab results, with chart evidence for every criterion.{{cite:bond-site,bond-product}} Published research favors that starting point: in one trial, 30.3% of provider referrals were randomized, against 4.3% of Facebook self-referrals.{{cite:ajgp-depression-2023}}",
            ADS_BULLET,
            "**The visit is booked, not handed off.** In 2023 SubjectWell connected the patient to the site, and the site continued screening and scheduled the first visit; Clariness now asks sites to process referrals within 3 to 5 working days.{{cite:subjectwell-approach-2023,clariness-faqs}} Bond's agents pre-screen patients and book the screening visit in the same conversation.{{cite:bond-product}}",
            "**Consent support in the same workflow.** Bond's [Consent](/consent) support explains the consent form in plain language, answers patient questions and escalates to staff, while the site and PI obtain consent.{{cite:bond-site}} Trial consent support is not publicly documented in SubjectWell's or Clariness's materials (November 2026).{{cite:clariness-faqs,subjectwell-services-2025}}",
            "**Every open study at once, from the chart.** SubjectWell screened marketplace patients against several studies at once.{{cite:subjectwell-home-2023}} Bond screens each patient in your records against every open study at your site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
            "**No integration fee, and a price that moves with enrollment.** Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and SubjectWell compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "SubjectWell entries come from SubjectWell's archived pages (2023 to 2025) and Clariness's current pages, read on November 8, 2026. \"Not publicly documented\" means we found no public description, not that the capability does not exist.",
        },
        {
          type: "table",
          caption: "Bond Health and SubjectWell (now Clariness), from each company's materials",
          columns: ["Capability", "Bond Health", "SubjectWell (now Clariness)"],
          rows: capabilityRows({
            workflow:
              "Recruitment services: advertising and a patient marketplace, phone pre-screening, then referral to sites. In 2025, Patient Companions also offered warm transfers and site visit scheduling as services.{{cite:subjectwell-approach-2023,subjectwell-services-2025}}",
            sources:
              "Non-study-specific online advertising feeding a patient marketplace (2023). Since the merger, Clariness's ClinLife portal, paid social, search and patient communities.{{cite:subjectwell-home-2023,clariness-faqs,clariness-clinlife}}",
            ehr: "Not publicly documented. With the patient's consent, SubjectWell retrieved full medical records to confirm eligibility (2025).{{cite:subjectwell-services-2025}}",
            prescreen:
              "Online questions, then telephone pre-screening against IRB-approved questionnaires (2023). Clariness describes digital smart-screening through ClinLife.{{cite:subjectwell-approach-2023,clariness-clinlife}}",
            contact:
              "SubjectWell called each patient to confirm their online answers (2023). Clariness says it follows up and recontacts patients on behalf of sites.{{cite:subjectwell-approach-2023,clariness-sites}}",
            scheduling:
              "In 2023, sites scheduled the first visit after the hand-off. By 2025, Patient Companions scheduled the site screening call, and a scheduling service synced with site calendars. Clariness asks sites to process referrals within 3 to 5 working days.{{cite:subjectwell-approach-2023,subjectwell-home-2025,subjectwell-services-2025,clariness-faqs}}",
            consent: "Not publicly documented (November 2026).{{cite:clariness-faqs,subjectwell-services-2025}}",
            retention:
              "Appointment reminders from its concierge team (2023), and patient support to reduce drop-off (2025).{{cite:subjectwell-approach-2023,subjectwell-services-2025}}",
            reporting:
              "A reporting portal with weekly site status updates (2023), the Performance Portal (2024) and the OneView portal, launched in February 2025.{{cite:subjectwell-approach-2023,subjectwell-home-2024,subjectwell-oneview-2025}}",
            integration:
              "RealTime-CTMS integrates with SubjectWell's advertising campaigns, and SubjectWell referrals flowed into Reify Health's StudyTeam from 2021. Clariness describes API connectivity into site systems without naming a CTMS. Site EHR integration: not publicly documented.{{cite:realtime-ctms-integrations-2022,reify-subjectwell-2021,clariness-faqs}}",
            pricing:
              "SubjectWell: pay only for patients who randomize (2023). Clariness: outcome-based pricing, balanced across setup and systems, outreach and media, and performance delivery. No published prices.{{cite:subjectwell-pricing-2023,clariness-faqs}}",
            serves: "Biopharma sponsors, CROs and study sites, under the Clariness name since January 2026.{{cite:clariness-merger-2026}}",
          }),
        },
      ],
    },
    {
      id: "clariness",
      heading: "What changed when SubjectWell became Clariness?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Ownership.** WindRose Health Investors acquired SubjectWell in April 2024. SubjectWell acquired PatientCentra in November 2023 and Trials24 in September 2024.{{cite:subjectwell-windrose-2024,subjectwell-patientcentra-2023,subjectwell-trials24-2024}}",
            "**The merger.** On January 27, 2026, Clariness and SubjectWell announced their merger; the combined organization operates under the Clariness name. Clariness named Jim Corrigan chief executive in March 2026.{{cite:clariness-merger-2026,clariness-ceo-2026}}",
            "**The website.** As of November 8, 2026, subjectwell.com redirects to the Clariness homepage, and Clariness's ClinLife portal is one of three enrollment platforms in the Clariness Hub.{{cite:clariness-home,clariness-faqs}}",
            "**Pricing.** Clariness's FAQ answers whether it will keep the 100% randomization commercial models SubjectWell was known for: it remains committed to outcome-based pricing, but balanced across setup and systems, outreach and media, and performance delivery.{{cite:clariness-faqs}}",
          ],
        },
        {
          type: "p",
          text: "If you used SubjectWell, ask Clariness which fees now apply before randomization, which site systems its API connects to, and who books the first visit. Bond's terms are on its [pricing](/pricing) page: a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "known-for",
      heading: "Can Bond do what SubjectWell is known for?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Paying for randomized patients.** SubjectWell charged only for patients who randomized.{{cite:subjectwell-pricing-2023}} Bond ties part of its price to randomization, a percentage of each randomized patient's milestone payments, alongside a volume-based fee per screened patient.{{cite:bond-site,bond-product}}",
            "**Screening for several studies at once.** SubjectWell screened patients against multiple studies' criteria at once.{{cite:subjectwell-home-2023}} Bond screens each patient against every open study at your site.{{cite:bond-product}}",
            "**Medical records behind eligibility.** SubjectWell retrieved records with patient consent to confirm eligibility.{{cite:subjectwell-services-2025}} Bond reads the record where it already lives, in your EHR, and shows the chart evidence for every criterion.{{cite:bond-site}}",
            "**Warm transfers to sites.** SubjectWell's Patient Companions offered warm transfers.{{cite:subjectwell-services-2025}} Bond's agents transfer calls live to your coordinators or book a callback, whichever your site prefers.{{cite:bond-product}}",
            "**RealTime integration.** RealTime-CTMS integrates with SubjectWell's campaigns.{{cite:realtime-ctms-integrations-2022}} Bond's referrals, recruitment status and outcomes move through RealTime's API or a file export; see [Bond and RealTime](/integrations/realtime).{{cite:bond-site}}",
          ],
        },
      ],
    },
    {
      id: "site-work",
      heading: "What does a marketplace referral ask of the site?",
      blocks: [
        {
          type: "p",
          text: "Each referral still has to be reached, screened and booked, and when the vendor hands off, that work falls to site staff. Clariness's own 2024 data put the average time for sites to make first patient contact at 17 days, and to schedule a patient's first visit at 30.5 days.{{cite:clariness-kpis-2024}} In a May 2026 survey of 100 US sites, 52% said at least one in five referrals is ruled ineligible before formal screening.{{cite:mytomorrows-2026}}",
        },
        {
          type: "p",
          text: "Bond moves that work to its agents. Every lead from the Meta and Google ad campaigns Bond creates for your study is contacted immediately, followed up until they respond, pre-screened and booked, and each EHR match arrives with its chart evidence.{{cite:bond-product,bond-site}} Like any recruitment material, the ads go to your IRB first: FDA treats advertising as the start of informed consent.{{cite:fda-recruiting-1998}}",
        },
      ],
    },
    evidenceSection(),
    pilotSection("SubjectWell"),
    methodSection({
      vendor: "SubjectWell",
      sources: "Internet Archive copies of SubjectWell's website from 2023 to 2025, Clariness's current website and FAQ, press releases, and RealTime's and Reify Health's announcements",
      trademark: "SubjectWell, Clariness and ClinLife are trademarks of their owners.",
    }),
  ],
  faq: [
    {
      q: "Is Bond better than SubjectWell?",
      a: "Yes. Bond finds eligible patients in your EHR, with chart evidence for every criterion, and creates and runs Meta and Google ad campaigns for your study. Its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, and Bond supports informed consent, all in one platform with no integration fee.{{cite:bond-site,bond-product}}",
    },
    {
      q: "What happened to SubjectWell?",
      a: "SubjectWell merged with Clariness in January 2026, and the combined company operates under the Clariness name.{{cite:clariness-merger-2026}} As of November 8, 2026, subjectwell.com redirects to the Clariness homepage.{{cite:clariness-home}}",
    },
    {
      q: "Does SubjectWell still charge only for randomized patients?",
      a: "Clariness says it remains committed to outcome-based pricing, but with models balanced across setup and systems, outreach and media, and performance delivery, rather than the 100% randomization model SubjectWell was known for.{{cite:clariness-faqs}} Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Can Bond follow up leads we already have from SubjectWell or Clariness?",
      a: "Yes. A Bond pilot can run outreach, pre-screening and scheduling on a list the site already has, such as ad leads or referrals, before the EHR is connected. Patients are told AI is used and can reach a person at any time.{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "subjectwell-home-2023",
      title: "SubjectWell: Risk-Free Recruitment (homepage, archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20230117030702/https://www.subjectwell.com/",
      year: "2023",
      note: "Captured January 17, 2023; read November 8, 2026. Quotes: \"Pay only for patients who randomize\"; \"Our non-study-specific online advertising is running on tens of thousands of general interest websites\"; \"following up with telephone-based prescreening\"; \"we contact these patients to screen them against criteria for multiple studies at once\".",
    },
    {
      id: "subjectwell-pricing-2023",
      title: "SubjectWell pricing (archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20230207090433/https://www.subjectwell.com/pricing/",
      year: "2023",
      note: "Captured February 7, 2023; read November 8, 2026. Quote: \"if we don't randomize a patient into your trial, you pay absolutely nothing\".",
    },
    {
      id: "subjectwell-approach-2023",
      title: "SubjectWell: Our Approach (archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20230207082835/https://www.subjectwell.com/our-approach/",
      year: "2023",
      note: "Captured February 7, 2023; read November 8, 2026. Quotes: \"we call the patient, confirm the information already provided online, and proceed to screen them\" ... \"using IRB-approved questionnaires\"; \"sites continue the screening discussion and schedule the patient's first visit\"; \"we ask the site to provide a weekly update on the patient's status\"; \"our concierge team stays in touch with them, providing additional support and appointment reminders\".",
    },
    {
      id: "subjectwell-home-2024",
      title: "SubjectWell: The Patient Access Marketplace (homepage, archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20240708060721/https://subjectwell.com/",
      year: "2024",
      note: "Captured July 8, 2024; read November 8, 2026. Quote: \"a unique Performance Portal™ for tracking progress, all supported by our private contact center\".",
    },
    {
      id: "subjectwell-services-2025",
      title: "SubjectWell: Services (archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20250208025855/https://subjectwell.com/solutions/patient-recruitment-solutions/services/",
      year: "2025",
      note: "Captured February 8, 2025; read November 8, 2026. Quotes: \"allows for warm transfers to sites\"; \"Our Site Visit Scheduling service streamlines patient appointments by syncing directly with site calendars\"; \"With patient consent, SubjectWell retrieves full medical records to confirm eligibility\"; \"we minimize dropoff rates and support adherence.\" No description of trial informed consent support.",
    },
    {
      id: "subjectwell-home-2025",
      title: "Rethink patient recruitment with SubjectWell (homepage, archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20250710133051/https://subjectwell.com/",
      year: "2025",
      note: "Captured July 10, 2025; read November 8, 2026. Quote: \"SubjectWell's Patient Companions schedule the site screening call for patients.\"",
    },
    {
      id: "subjectwell-oneview-2025",
      title: "SubjectWell Launches OneView Portal to Transform and Streamline Patient Recruitment (archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20250208042539/https://subjectwell.com/subjectwell-launches-oneview-portal-to-transform-and-streamline-patient-recruitment/",
      year: "2025",
      note: "Press release dated February 4, 2025; read November 8, 2026. Quote: \"today announced the launch of its OneView recruitment portal and company rebrand\".",
    },
    {
      id: "subjectwell-windrose-2024",
      title: "WindRose Health Investors Completes Majority Growth Investment in SubjectWell (archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20250120215753/https://subjectwell.com/news/windrose-health-investors-completes-majority-growth-investment-in-subjectwell/",
      year: "2024",
      note: "News post dated April 30, 2024; read November 8, 2026. Quote: \"announced that it has completed the acquisition of SubjectWell, the patient access marketplace\".",
    },
    {
      id: "subjectwell-patientcentra-2023",
      title: "SubjectWell Acquires PatientCentra (archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20250212081856/https://subjectwell.com/subjectwell-acquires-patientcentra/",
      year: "2023",
      note: "Dated November 2, 2023; read November 8, 2026. Quote: \"announced the acquisition of PatientCentra\".",
    },
    {
      id: "subjectwell-trials24-2024",
      title: "SubjectWell Announces Strategic Acquisition of Trials24 to Expand Global Patient Recruitment Capabilities (archived)",
      publisher: "SubjectWell, via the Internet Archive",
      url: "https://web.archive.org/web/20250115085518/https://subjectwell.com/news/subjectwell-announces-strategic-acquisition-of-trials24-to-expand-global-patient-recruitment-capabilities/",
      year: "2024",
      note: "Dated September 2024 (September 17 in SubjectWell's news list); read November 8, 2026.",
    },
    {
      id: "clariness-merger-2026",
      title: "Clariness and SubjectWell Merge to Form Global, Full-Service Patient Recruitment Platform",
      publisher: "Clariness and SubjectWell (PR Newswire)",
      url: "https://www.prnewswire.com/news-releases/clariness-and-subjectwell-merge-to-form-global-full-service-patient-recruitment-platform-302670793.html",
      year: "2026",
      note: "Press release dated January 27, 2026; read November 8, 2026. Quotes: \"Clariness and SubjectWell announced their merger\"; WindRose, \"which previously acquired SubjectWell in April 2024\"; \"The combined organization will operate under the Clariness name.\" Customers are described as \"biopharma sponsors, CROs, and study sites across the globe\".",
    },
    {
      id: "clariness-faqs",
      title: "FAQs",
      publisher: "Clariness",
      url: "https://clariness.com/faqs/",
      year: "2026",
      note: "Read November 8, 2026. Question: \"Will you continue to offer 100% randomization commercial models that SubjectWell is known for?\" Answer: \"We are fully committed to outcome-based pricing\", with models \"more balanced across three key areas: setup and systems, outreach and media, and performance delivery\". Also: \"ClinLife is now one of three enrollment platforms that make the Clariness Hub\"; channels include \"paid social including Meta and other platforms, search, display, patient communities\"; \"We request that sites process referrals within 3-5 working days\"; \"API connectivity into existing site systems\". No description of trial informed consent support.",
    },
    {
      id: "clariness-clinlife",
      title: "ClinLife® powers patient recruitment",
      publisher: "Clariness",
      url: "https://clariness.com/technology/clinlife/",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"Digital smart-screening of patients, assessing eligibility and site fit\"; patients \"are scheduled or live transferred to their preferred site\".",
    },
    {
      id: "clariness-sites",
      title: "Giving sites the support they need to accelerate enrollment",
      publisher: "Clariness",
      url: "https://clariness.com/who-we-help/sites/",
      year: "2026",
      note: "Read November 8, 2026. Quote: \"Follow-up and recontact patients on behalf of sites\".",
    },
    {
      id: "clariness-home",
      title: "Clariness homepage",
      publisher: "Clariness",
      url: "https://clariness.com/",
      year: "2026",
      note: "Read November 8, 2026. Quote: \"Following our merger with SubjectWell, we've combined our capabilities, technologies, global infrastructure\". On November 8, 2026, https://subjectwell.com/ returned a 301 redirect to this page.",
    },
    {
      id: "clariness-ceo-2026",
      title: "Clariness announces Jim Corrigan as CEO to lead next phase of growth",
      publisher: "Clariness",
      url: "https://clariness.com/news/clariness-announces-jim-corrigan-as-ceo-to-lead-next-phase-of-growth/",
      year: "2026",
      note: "Dated March 31, 2026; read November 8, 2026. Quote: \"announced Jim Corrigan as Chief Executive Officer\".",
    },
    {
      id: "realtime-ctms-integrations-2022",
      title: "CTMS Integrations",
      publisher: "RealTime eClinical Solutions (blog)",
      url: "https://realtime-eclinical.com/2022/06/28/ctms-integrations/",
      year: "2022",
      note: "Dated June 28, 2022; read November 8, 2026. Quote: \"RealTime-CTMS integrates with SubjectWell's study-specific advertising campaigns.\"",
    },
    {
      id: "reify-subjectwell-2021",
      title: "Reify Health and SubjectWell Launch Partnership to Boost Patient Recruitment for Clinical Trials",
      publisher: "Business Wire release, reposted by Frontier Venture Capital",
      url: "https://frontiervc.com/news/2021/4/9/reify-health-and-subjectwell-launch-partnership-to-boost-patient-recruitment-for-clinical-trials",
      year: "2021",
      note: "Original release dated March 31, 2021; read November 8, 2026. Quote: \"referrals from SubjectWell's marketplace are delivered directly into Reify Health's StudyTeam™\".",
    },
    R["clariness-kpis-2024"],
    R["mytomorrows-2026"],
    R["ajgp-depression-2023"],
    R["fda-recruiting-1998"],
    ...BOND_SOURCES,
    ...testimonialSources(),
  ],
  related: [
    { label: "SubjectWell alternatives", href: "/compare/subjectwell-alternatives", description: "Bond, StudyKIK, 1nHealth and Antidote, ranked." },
    { label: "Bond vs SubjectWell vs StudyKIK", href: "/compare/bond-vs-subjectwell-vs-studykik", description: "All three side by side." },
    { label: "Recruitment companies compared", href: "/compare/patient-recruitment-companies", description: "Services firms and EHR-based platforms, in two tables." },
    { label: "Pricing", href: "/pricing", description: "A fee per screened patient plus a share of milestone payments from randomization on." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Trial ads", href: "/clinical-trial-ads", description: "Meta and Google campaigns, every lead contacted immediately." },
    { label: "Bond vs 1nHealth", href: "/compare/bond-vs-1nhealth", description: "Another media recruiter, compared." },
    { label: "Bond vs StudyKIK", href: "/compare/bond-vs-studykik", description: "A site-facing recruitment listing service, compared." },
    { label: "Clinical trial patient recruitment", href: "/clinical-trial-patient-recruitment", description: "How recruitment works, which methods convert and what it costs." },
  ],
};

export default page;
