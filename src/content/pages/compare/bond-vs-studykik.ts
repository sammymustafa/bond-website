import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { BOND_SOURCES, REFERRAL_RESEARCH_SOURCES as R, capabilityRows, evidenceSection, methodSection, pilotSection } from "./_referral-vendors";

const page: SeoPage = {
  path: "/compare/bond-vs-studykik",
  category: "comparison",
  title: "Bond Health vs StudyKIK: patient recruitment compared",
  description:
    "Why Bond is better than StudyKIK for sites: Bond screens your EHR, contacts every lead immediately, books the visit and prices on screened and randomized patients.",
  keywords: [
    "StudyKIK",
    "StudyKik",
    "Bond Health vs StudyKIK",
    "StudyKIK vs Bond Health",
    "StudyKIK pricing",
    "StudyKIK KIKsite",
    "StudyKIK patient recruitment",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs StudyKIK",
  intro:
    "StudyKIK, a Syneos Health company, sells patient recruitment to research sites as 30-day plans: it finds patients through its patient communities and social media outreach, has agents pre-screen new referrals, and gives the site a dashboard, KIKsite, to call, text and schedule them.{{cite:studykik-site-plans,studykik-sites-recruitment,studykik-kiksite,syneos-acquires-studykik-2021}} Bond Health starts with the patients a site already treats, screening its EHR against each protocol, and creates and runs Meta and Google ad campaigns for each study. Its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, then support consent.{{cite:bond-site,bond-product}} For a site that wants patients booked rather than referrals to work, Bond is the stronger choice.",
  summary: "Why Bond is better than StudyKIK for sites: EHR screening plus ads, every lead contacted immediately and booked, and pricing tied to screened and randomized patients.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why is Bond better than StudyKIK?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond is better than StudyKIK because its agents do the work a referral leaves to your staff: they contact every lead immediately, keep following up, pre-screen and book the screening visit, for patients from your own EHR as well as from the Meta and Google ad campaigns Bond creates for your study. You pay for screened and randomized patients, not for a 30-day listing.{{cite:bond-product,bond-site}}",
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
            "**Booked visits, not a dashboard of referrals.** With StudyKIK, the site calls, texts or emails patients from KIKsite and manages them there.{{cite:studykik-kiksite}} Bond's agents pre-screen patients and book the screening visit straight onto your calendar in the same conversation.{{cite:bond-product,bond-site}}",
            "**Your own patients first.** Bond's [Identify](/identify) screens your EHR, reading clinical notes, prescriptions and lab results, with chart evidence for every criterion.{{cite:bond-site,bond-product}} Screening a site's EHR is not publicly documented in StudyKIK's materials (November 2026).{{cite:studykik-sites-recruitment,studykik-kiksite}}",
            "**A price that moves with enrollment.** StudyKIK's site plans are flat fees per 30-day listing.{{cite:studykik-site-plans}} Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
          ],
        },
        ...testimonialBlocks(),
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and StudyKIK compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "StudyKIK entries come from StudyKIK's website, Syneos Health's acquisition announcement and CRIO's partnership announcement, read on November 8, 2026. \"Not publicly documented\" means we found no public description, not that the capability does not exist.",
        },
        {
          type: "table",
          caption: "Bond Health and StudyKIK, from each company's materials",
          columns: ["Capability", "Bond Health", "StudyKIK"],
          rows: capabilityRows({
            workflow:
              "A recruitment service for sites and sponsors: patient communities and social media outreach, agent pre-screening, then the site works referrals in its KIKsite dashboard. Sponsor bundles add eConsent, study apps and call-center support.{{cite:studykik-sites-recruitment,studykik-kiksite,studykik-carepackage}}",
            sources:
              "Patient communities, social media outreach, targeted marketing and study websites. Sites can also upload their existing patient database.{{cite:studykik-site-plans,studykik-carepackage,studykik-sites-recruitment}}",
            ehr: "Not publicly documented (November 2026).{{cite:studykik-sites-recruitment,studykik-kiksite}}",
            prescreen: "StudyForms digital pre-screening, and agents trained on the study's protocol pre-screen all new referrals.{{cite:studykik-site-plans,studykik-sites-recruitment}}",
            contact:
              "StudyKIK says it contacts new referrals within 24 hours of signup, with agents speaking to patients around the clock. Sites can call, text or email patients from KIKsite.{{cite:studykik-sites-recruitment,studykik-kiksite}}",
            scheduling:
              "Direct scheduling and calendar integration in KIKsite, with appointment reminders. Whether StudyKIK or the site books the first visit is not spelled out.{{cite:studykik-sites-recruitment,studykik-kiksite}}",
            consent: "eConsent powered by DocuSign, with video chat for patient questions, offered to sponsors.{{cite:studykik-econsent,studykik-carepackage}}",
            retention:
              "Appointment reminders, patient transportation services, a patient companion app and call-center follow-up in its sponsor bundle.{{cite:studykik-sites-recruitment,studykik-carepackage}}",
            reporting: "KIKsite tracks patients and media sources for the site; sponsors get trial reporting.{{cite:studykik-kiksite,studykik-home}}",
            integration:
              "A two-way CRIO integration, announced in June 2024 when StudyKIK joined the CRIO Partners program. EHR, RealTime or Clinical Conductor integration: not publicly documented.{{cite:crio-studykik-partnership-2024}}",
            pricing:
              "Site plans are flat fees per 30-day listing: Platinum $2,200, Diamond $3,800 and Ruby $5,800, with no long-term contracts and referral guarantees subject to indication and criteria. Sponsor pricing is not published.{{cite:studykik-site-plans,studykik-home}}",
            serves: "Research sites and sponsors. StudyKIK launched in 2014 and was acquired by Syneos Health in September 2021.{{cite:studykik-home,syneos-acquires-studykik-2021}}",
          }),
        },
      ],
    },
    {
      id: "pricing",
      heading: "How does StudyKIK's pricing compare with Bond's?",
      blocks: [
        {
          type: "p",
          text: "They charge for different things. A StudyKIK site plan is a flat fee for a 30-day listing, from $2,200 to $5,800 depending on the tier, renewed each period; StudyKIK offers referral guarantees, subject to the indication and study criteria.{{cite:studykik-site-plans}} Bond charges a volume-based fee per screened patient, a patient its agents call and text to pre-screen, plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "The fair test is cost per randomized patient. Add the plan fees for the months a study ran, and the coordinator hours spent calling, texting and scheduling its referrals, then divide by the patients randomized from it. Do the same for Bond. The [cost per randomized patient calculator](/calculators/cost-per-randomized-patient) does the arithmetic, and [pricing](/pricing) explains Bond's fees.",
        },
      ],
    },
    {
      id: "known-for",
      heading: "Can Bond do what StudyKIK is known for?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Social media outreach.** StudyKIK reaches patients through its communities and social media.{{cite:studykik-site-plans}} Bond creates and runs Meta and Google ad campaigns for each study.{{cite:bond-product}} See [trial ads](/clinical-trial-ads).",
            "**Agents available around the clock.** StudyKIK's agents speak with interested patients 24 hours a day.{{cite:studykik-sites-recruitment}} Bond's voice and text agents contact every new lead immediately, in the patient's language, and transfer live to a coordinator or book a callback when the patient wants a person.{{cite:bond-product}}",
            "**A site dashboard.** KIKsite lets the site track patients and media sources.{{cite:studykik-kiksite}} Bond's dashboard and audit trail report patients matched, contacted, pre-screened, consented and randomized, and each referral can go into your CTMS.{{cite:bond-site}}",
            "**CRIO integration.** StudyKIK has a two-way CRIO integration.{{cite:crio-studykik-partnership-2024}} So does Bond, a CRIO Certified Partner, and once the site activates API access Bond also screens the patient records kept in CRIO; see [Bond and CRIO](/integrations/crio).{{cite:bond-site}}",
            "**eConsent and transport.** StudyKIK offers DocuSign-based eConsent and patient transportation services.{{cite:studykik-econsent,studykik-sites-recruitment}} Bond's [Consent](/consent) support explains the consent form in plain language, answers patient questions and checks understanding, while the site and PI obtain consent, and its agents book transportation for enrolled participants.{{cite:bond-site,bond-product}}",
            "**IRB-ready ads.** KIKsite includes IRB ad creation.{{cite:studykik-kiksite}} Bond configures each outreach script from the wording your IRB approved, and its free [IRB submission language template](/templates/irb-submission-language-ai-outreach) covers AI-assisted outreach.{{cite:bond-site}}",
          ],
        },
      ],
    },
    {
      id: "site-work",
      heading: "What does a StudyKIK referral ask of the site?",
      blocks: [
        {
          type: "p",
          text: "StudyKIK's agents pre-screen each referral, then the site takes over in KIKsite: calling, texting or emailing the patient and scheduling the visit.{{cite:studykik-sites-recruitment,studykik-kiksite}} That follow-up is where many referrals are lost. Clariness, another recruitment vendor, reported in 2024 that sites take an average of 17 days to make first contact with an interested patient and 30.5 days to schedule the first visit.{{cite:clariness-kpis-2024}} In a May 2026 survey of 100 US sites, 52% said at least one in five referrals is ruled ineligible before formal screening.{{cite:mytomorrows-2026}}",
        },
        {
          type: "p",
          text: "Bond's agents carry that work: they pre-screen patients against the protocol, and for patients found in your EHR the chart has been checked against every criterion first, so fewer reach a screening visit only to fail it.{{cite:bond-site,bond-product}} Ad copy and scripts still go to your IRB before they run, because FDA treats advertising as the start of informed consent.{{cite:fda-recruiting-1998}}",
        },
      ],
    },
    evidenceSection(),
    pilotSection("StudyKIK"),
    methodSection({
      vendor: "StudyKIK",
      sources: "StudyKIK's homepage and its pages for site recruitment, site plans, KIKsite, CarePackage and eConsent, Syneos Health's 2021 acquisition announcement and CRIO's 2024 partnership announcement",
      trademark: "StudyKIK, KIKsite and CarePackage are trademarks of their owners, and StudyKIK is a Syneos Health company.",
    }),
  ],
  faq: [
    {
      q: "Is Bond better than StudyKIK?",
      a: "Yes, for a site that wants patients booked rather than referrals to work. Bond finds eligible patients in your EHR and creates and runs Meta and Google ad campaigns for your study; its voice and text agents contact every lead immediately, follow up until they respond, pre-screen them and book the screening visit, and Bond supports informed consent, with no integration fee.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How much does StudyKIK cost?",
      a: "As of November 8, 2026, StudyKIK lists three site plans priced per 30-day listing: Platinum $2,200, Diamond $3,800 and Ruby $5,800. Sponsor pricing is not published.{{cite:studykik-site-plans}} Bond charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward; see [pricing](/pricing).{{cite:bond-product}}",
    },
    {
      q: "Who owns StudyKIK?",
      a: "Syneos Health, which announced its acquisition of StudyKIK in September 2021. StudyKIK launched in 2014.{{cite:syneos-acquires-studykik-2021}}",
    },
    {
      q: "Do Bond and StudyKIK both work with CRIO?",
      a: "Yes. StudyKIK announced a two-way CRIO integration in June 2024.{{cite:crio-studykik-partnership-2024}} Bond is a CRIO Certified Partner with a two-way CRIO integration; see [Bond and CRIO](/integrations/crio).{{cite:bond-site}}",
    },
  ],
  sources: [
    {
      id: "studykik-home",
      title: "StudyKIK: Full Service Patient Recruitment and Retention Technology Company",
      publisher: "StudyKIK",
      url: "https://studykik.com/",
      year: "2026",
      note: "Read November 8, 2026 in a browser (the site renders with JavaScript). Quote: \"start recruiting qualified patients in as little as 24 hours, with no long-term contracts.\" Footer menus for sites (\"KIKSite Platform\", \"Enrollment Plans\") and sponsors (\"CarePackage\", \"eConsent\", \"Trial Reporting\").",
    },
    {
      id: "studykik-sites-recruitment",
      title: "Accelerate Your Site's Enrollment",
      publisher: "StudyKIK",
      url: "https://studykik.com/sites/recruitment",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"Our agents prescreen all new referrals and are specifically trained for your study's protocol.\"; \"We'll contact your new referrals within 24 hours of signup\"; \"speaking with interested patients 24 hours a day, 7 days a week\"; \"send appointment reminders directly from your PatientTracker\"; features \"Direct Scheduling & Calendar Integration\" and \"Patient Transportation Services\"; \"Easily upload and manage your existing patient database\". No description of screening a site's EHR.",
    },
    {
      id: "studykik-site-plans",
      title: "Find the StudyKIK recruitment plan that's right for your site",
      publisher: "StudyKIK",
      url: "https://studykik.com/sites/plans",
      year: "2026",
      note: "Read November 8, 2026. Quote: \"eligible patients within 24 hours from StudyKIK's unique patient communities and social media outreach\". Listed prices: \"Platinum $2,200 / 30 days\", \"Diamond $3,800 / 30 days\", \"Ruby $5,800 / 30 days\". Included in every plan: \"StudyForms Digital Pre-Screening\" and \"Referral Guarantees *\", footnoted \"Subject to change based on indication and study criteria\".",
    },
    {
      id: "studykik-kiksite",
      title: "KIKsite",
      publisher: "StudyKIK",
      url: "https://studykik.com/sites/portal",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"StudyKIK's KIKsite organizes everything you need to track, manage and stay connected with patients.\"; \"You can instantly call, text or email patients directly from KIKsite\". Features: \"Direct Scheduling\", \"IRB Ad creation\", \"Patient Database\", \"Media Source Tracking\".",
    },
    {
      id: "studykik-carepackage",
      title: "CarePackage",
      publisher: "StudyKIK",
      url: "https://studykik.com/sponsors/care-package",
      year: "2026",
      note: "Read November 8, 2026. Quotes: referrals from \"patient communities, targeted marketing, and study websites\"; \"SupportHub is staffed with GCP-certified agents\" ... \"ready to prescreen new referrals, 24 hours a day\"; \"global call center support for continuous follow-up\"; eConsent \"Powered by DocuSign\"; PatientConnect app.",
    },
    {
      id: "studykik-econsent",
      title: "eConsent Made Easy",
      publisher: "StudyKIK",
      url: "https://studykik.com/sponsors/econsent",
      year: "2026",
      note: "Read November 8, 2026. Quotes: \"Our eConsent platform is powered by DocuSign\"; \"answer patient questions in real time via video chat and live note collaboration\".",
    },
    {
      id: "syneos-acquires-studykik-2021",
      title: "Syneos Health Acquires StudyKIK",
      publisher: "Syneos Health via GlobeNewswire",
      url: "https://www.globenewswire.com/news-release/2021/09/14/2297100/0/en/Syneos-Health-Acquires-StudyKIK.html",
      year: "2021",
      note: "Press release dated September 14, 2021; read November 8, 2026. Quotes: \"today announced the acquisition of StudyKIK\"; \"Launched in 2014 as a global network of patient-focused communities\".",
    },
    {
      id: "crio-studykik-partnership-2024",
      title: "CRIO Announces Partnership with StudyKIK to Bring Integrated Solution to Clinical Research Sites",
      publisher: "CRIO (blog)",
      url: "https://clinicalresearch.io/blog/crio-announces-partnership-with-studykik-to-bring-integrated-solution-to-clinical-research-sites/",
      year: "2024",
      note: "Dated June 19, 2024; read November 8, 2026. Quotes: \"StudyKIK, a Syneos Health Company, as an inaugural member of the CRIO Partners program\"; \"our seamless, two-way integration eliminates that handoff risk\".",
    },
    R["clariness-kpis-2024"],
    R["mytomorrows-2026"],
    R["fda-recruiting-1998"],
    ...BOND_SOURCES,
    ...testimonialSources(),
  ],
  related: [
    { label: "StudyKIK alternatives", href: "/compare/studykik-alternatives", description: "Bond, SubjectWell (Clariness), 1nHealth and Antidote, ranked." },
    { label: "Bond vs SubjectWell vs StudyKIK", href: "/compare/bond-vs-subjectwell-vs-studykik", description: "All three side by side." },
    { label: "Recruitment companies compared", href: "/compare/patient-recruitment-companies", description: "Services firms and EHR-based platforms, in two tables." },
    { label: "Pricing", href: "/pricing", description: "A fee per screened patient plus a share of milestone payments from randomization on." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Book: visits on your calendar", href: "/book", description: "Screening visits booked straight onto the site's calendar." },
    { label: "Bond vs SubjectWell", href: "/compare/bond-vs-subjectwell", description: "The patient marketplace, now part of Clariness." },
    { label: "Bond vs 1nHealth", href: "/compare/bond-vs-1nhealth", description: "A direct-to-patient media recruiter, compared." },
    { label: "Clinical trial patient recruitment", href: "/clinical-trial-patient-recruitment", description: "How recruitment works, which methods convert and what it costs." },
  ],
};

export default page;
