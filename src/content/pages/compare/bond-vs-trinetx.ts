import type { SeoPage } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { calComHref } from "../../nav";
import { trinetxSources } from "./_trinetx-sources";

const page: SeoPage = {
  path: "/compare/bond-vs-trinetx",
  category: "comparison",
  title: "Bond Health vs TriNetX for clinical trial recruitment",
  description:
    "Why Bond is better than TriNetX for enrolling patients: TriNetX counts patients and routes trials to sites; Bond contacts every patient and books visits.",
  keywords: [
    "Bond Health vs TriNetX",
    "TriNetX vs Bond Health",
    "TriNetX patient recruitment",
    "TriNetX clinical trial recruitment",
    "TriNetX Connect",
    "what is TriNetX",
    "TriNetX feasibility",
    "TriNetX alternatives",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs TriNetX",
  intro:
    "Bond Health is better than TriNetX for enrolling patients because TriNetX stops at a count of eligible patients and an invitation to the site, while Bond finds the patients in the site's own EHR, contacts every one by voice and text, pre-screens them and books them for study visits.{{cite:trinetx-connect,palchuk-2023,bond-site,bond-product}} TriNetX is a federated network of healthcare organizations' de-identified EHR data that sponsors and CROs query for protocol feasibility and site selection; when a member organization joins a study, it re-identifies the eligible patients itself.{{cite:trinetx-home,trinetx-live,trinetx-connect}}",
  summary: "How Bond compares with TriNetX, from feasibility and site selection to contacting, pre-screening and booking patients, and pricing.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: calComHref, secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "why-bond",
      heading: "Why is Bond better than TriNetX?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "For getting eligible patients into a study, Bond is better than TriNetX because it does the work that starts after the count. TriNetX shows sponsors aggregate patient counts at each member organization and sends study opportunities to sites; the organization then re-identifies its own patients.{{cite:palchuk-2023,trinetx-premium,trinetx-connect}} Bond screens the site's identified records with the evidence behind every criterion, then its voice and text agents contact every matched patient, pre-screen them and book the visit on the site's calendar, with no integration fee.{{cite:bond-site,bond-product}}",
        },
        {
          type: "stats",
          items: [
            { value: "48 hours", label: "typical time to go live with full EHR integration, handled by Bond's team with no integration fee", cite: "bond-site" },
            { value: "10,000+", label: "charts screened per hour", cite: "bond-site" },
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
          ],
        },
        {
          type: "ul",
          items: [
            "**Patients, not counts.** Bond returns ranked matches from the site's own records, each with the evidence behind every criterion decision and traceability to the chart, for the coordinator to review.{{cite:bond-site}} In TriNetX, industry users see aggregate counts per organization and cannot query an individual organization.{{cite:palchuk-2023}}",
            "**Every match contacted.** Bond's voice and SMS agents start from what Identify found in the chart, skip questions the chart already answers, and can pre-screen and book a visit in one conversation, in the patient's language.{{cite:bond-product}} TriNetX's own outreach goes to organizations and sites, not patients.{{cite:trinetx-premium}}",
            ADS_BULLET,
            "**Consent support and retention.** Plain-language consent support with staff escalation, then visit reminders, transportation booking, symptom and diary collection and dropout-risk alerts after enrollment. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
            "**Any research site, not only network members.** Bond connects to Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, and works with CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault, so physician groups and FQHCs can use it too.{{cite:bond-site,bond-product}}",
            "**A price that follows enrollment.** A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee. See [pricing](/pricing).{{cite:bond-product}}",
          ],
        },
        ...testimonialBlocks(),
        {
          type: "p",
          text: "As of October 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that both reads EHR notes against a protocol and runs its own Meta and Google ad campaigns, then contacts patients by voice and text all the way to a booked study visit.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond and TriNetX compare, capability by capability?",
      blocks: [
        {
          type: "p",
          text: "Years in the TriNetX column show each source's date. \"Not publicly documented\" means we found no public description in the materials we reviewed in November 2026, not that the capability is absent.",
        },
        {
          type: "table",
          caption: "Bond Health and TriNetX, from materials reviewed in November 2026",
          columns: ["Capability", "Bond Health", "TriNetX"],
          rows: [
            [
              "What it is",
              "A recruitment platform that works for the site, from EHR screening and ad campaigns to a booked study visit, in one workflow.{{cite:bond-site,bond-product}}",
              "A federated network that connects healthcare organizations and researchers through real-world EHR data, used for feasibility, site selection and research (2026).{{cite:trinetx-home,trinetx-live}}",
            ],
            [
              "Who uses it",
              "Research sites, physician groups, FQHCs, site networks, CROs and sponsors.{{cite:bond-site}}",
              "Sponsors and CROs query the network; member healthcare organizations contribute data and receive study invitations (2023, 2026).{{cite:palchuk-2023,trinetx-connect}}",
            ],
            [
              "What it reads",
              "Structured fields and clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
              "Demographics, diagnoses, procedures, medications and lab results, as discrete data or from natural language processing of notes and reports (2023). NLP-extracted facts sit next to the structured data (2026).{{cite:palchuk-2023,trinetx-live}}",
            ],
            [
              "Patient identities",
              "Works on the site's identified records under a business associate agreement, and returns named, ranked matches with the evidence behind each criterion.{{cite:bond-site}}",
              "De-identified, pseudo-anonymized or limited data sets (2023). Industry users see aggregate counts per organization; the organization re-identifies eligible patients itself (2023, 2026).{{cite:palchuk-2023,trinetx-connect}}",
            ],
            [
              "Feasibility and site selection",
              "Eligible-patient counts for a protocol from the same EHR screening, backed by chart evidence a coordinator can check, at the sites that run Bond.{{cite:bond-product}}",
              "Feasibility of eligibility criteria on real-world data, and site and PI-level insights for site selection (2026). A paid report adds patient counts, criteria analysis and organization names (2026).{{cite:trinetx-live,trinetx-premium}}",
            ],
            [
              "Outreach",
              "Voice and SMS agents contact every matched patient and every new ad lead immediately, and keep following up until they respond. Bond also creates and runs Meta and Google ad campaigns.{{cite:bond-product}}",
              "Sends study opportunities to selected organizations and sites and follows up with the sites (2026). Contacting patients: not publicly documented (November 2026).{{cite:trinetx-premium}}",
            ],
            [
              "Pre-screening and booking",
              "Pre-screens patients by phone and text and books screening visits straight into the site's calendar, with reminders.{{cite:bond-site,bond-product}}",
              "Not publicly documented (November 2026).",
            ],
            [
              "Consent and retention",
              "Plain-language consent support with staff escalation; visit reminders, transportation booking and dropout-risk alerts after enrollment.{{cite:bond-site,bond-product}}",
              "Not publicly documented (November 2026).",
            ],
            [
              "Connection",
              "Connects to the major EHRs via FHIR and HL7 or an aggregator, with full integration in 48 hours, handled end to end by Bond's team ([implementation](/implementation)).{{cite:bond-site}}",
              "Data sits on hardware in the organization's data center, with a cloud-hosted option (2023). In an NHS case study, TriNetX mapped the trust's local codes to standard terminologies (2026).{{cite:palchuk-2023,trinetx-elht}}",
            ],
            [
              "Pricing",
              "A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
              "Sponsors and CROs fund the platform; member organizations incur no financial costs and receive the software and hardware (2023). No public price list found (November 2026).{{cite:palchuk-2023}}",
            ],
          ],
        },
      ],
    },
    {
      id: "what-is-trinetx",
      heading: "What is TriNetX?",
      blocks: [
        {
          type: "p",
          text: "TriNetX connects healthcare organizations and researchers through real-world patient data. Its TriNetX LIVE™ platform lets sponsors and CROs test a protocol's eligibility criteria against the network's data, choose organizations and sites, and invite them to studies through TriNetX LIVE™ Connect.{{cite:trinetx-home,trinetx-live,trinetx-connect}} Member organizations keep their data on hardware in their own data center, or use a cloud-hosted option, and in return receive query and analytics tools at no financial cost; sponsors and CROs pay for access.{{cite:palchuk-2023}}",
        },
        {
          type: "p",
          text: "TriNetX is headquartered in Cambridge, Massachusetts.{{cite:trinetx-about}} Carlyle was its majority investor in January 2025, when its founding CEO announced he would step down.{{cite:trinetx-ceo-2025}} In April 2023, TriNetX announced it would acquire Clinerion from Norstella.{{cite:trinetx-clinerion-2023}}",
        },
      ],
    },
    {
      id: "after-the-count",
      heading: "What happens after TriNetX finds a site?",
      blocks: [
        {
          type: "p",
          text: "The study opportunity goes to the organization, and the organization decides whether to take it. TriNetX says Connect lets sponsors and CROs invite organizations to studies and lets the organization \"compliantly re-identify eligible patients\".{{cite:trinetx-connect}} From there, someone at the site still has to find each patient in the chart, call them, pre-screen them and book the visit.",
        },
        {
          type: "p",
          text: "Weill Cornell Medicine published its experience: over six years, TriNetX brought it 402 requests for sponsor-initiated trials, and local investigators were interested in 14% of them. Its authors found the network's effect on activation and enrollment hard to measure, because no common trial identifier was shared across TriNetX, the sponsor and the institution.{{cite:campion-2024}}",
        },
        {
          type: "p",
          text: "That last stretch, from an accepted study to booked screening visits, is what Bond does: [Identify](/identify) screens the site's records against the protocol, [Engage](/engage) contacts and pre-screens every match, and [Book](/book) puts them on the calendar.{{cite:bond-site,bond-product}}",
        },
      ],
    },
    {
      id: "what-trinetx-is-known-for",
      heading: "Can Bond do what TriNetX is known for?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Protocol feasibility counts: yes, at the sites that run Bond.** Bond runs feasibility from the same EHR screening, giving eligible-patient counts for a protocol backed by the chart evidence behind each match, which a coordinator can check.{{cite:bond-product}}",
            "**Criteria that live in clinical notes: yes.** Bond reads clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, and resolves terms through a terminology graph built from 18 biomedical vocabularies.{{cite:bond-site,bond-product,bond-whitepaper}}",
            "**De-identified queries across many health systems at once: no.** That is what TriNetX is built for.{{cite:trinetx-live,palchuk-2023}} Bond works inside each site's own records, which is why the two fit together.",
          ],
        },
      ],
    },
    {
      id: "use-together",
      heading: "Can a site use TriNetX and Bond together?",
      blocks: [
        {
          type: "p",
          text: "Yes. A sponsor or CRO can use TriNetX to judge feasibility and pick organizations, and a site that accepts the study can use Bond to find the eligible patients in its own EHR, contact and pre-screen every one, and book them for visits.{{cite:trinetx-live,trinetx-connect,bond-site,bond-product}} Bond screens each patient against every open study at the site, so a patient who screens out of one study can be matched to another.{{cite:bond-product}}",
        },
        {
          type: "steps",
          items: [
            { title: "Accept the study", text: "Review the opportunity the sponsor sent and confirm your site can run it." },
            { title: "Screen your own records", text: "Bond screens the EHR against the protocol and returns ranked matches with the chart evidence behind each criterion.{{cite:bond-site}}" },
            { title: "Contact and pre-screen", text: "Bond's agents call and text every match, and every lead from the Meta and Google ads Bond runs, then pre-screen them.{{cite:bond-product}}" },
            { title: "Book and report", text: "Pre-screened patients are booked into your calendar, and the dashboard reports patients matched, contacted, pre-screened, consented and randomized to the sponsor.{{cite:bond-site}}" },
          ],
        },
        {
          type: "p",
          text: "Before any outreach, the IRB reviews the scripts. Bond's [IRB submission language](/templates/irb-submission-language-ai-outreach) template covers AI-assisted outreach, and Bond signs BAAs and is HIPAA compliant ([security](/security)).{{cite:bond-site}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: calComHref,
          text: "Bring a study you were invited to. We will show how many eligible patients Bond finds in your records, with the evidence behind each one, and how the agents would reach them.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
    {
      id: "how-made",
      heading: "How was this comparison made?",
      blocks: [
        {
          type: "p",
          text: "Bond wrote this page in November 2026. TriNetX facts come from public sources read on November 8, 2026: TriNetX web pages, a TriNetX press release, a Norstella press release, a peer-reviewed paper written mostly by TriNetX staff and a Weill Cornell Medicine paper, each quoted in the sources below. We left out network-size figures, which TriNetX reports differently across its own pages. Bond's figures and capabilities come from its website, its technical report and product information Bond provided. We used no private or internal competitive material.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond better than TriNetX?",
      a: "For enrolling patients, yes. TriNetX helps sponsors find organizations with eligible patients and invite them to studies, and the organization re-identifies its own patients.{{cite:trinetx-connect,palchuk-2023}} Bond finds the patients in the site's EHR, contacts and pre-screens every one by voice and text, and books them for visits, for a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
    },
    {
      q: "Does TriNetX contact patients?",
      a: "We found no public description of TriNetX contacting patients as of November 2026. Its premium service sends study opportunities to selected organizations and sites and follows up with the sites.{{cite:trinetx-premium}} Bond's agents contact every matched patient and every ad lead immediately and keep following up until they respond.{{cite:bond-product}}",
    },
    {
      q: "Does TriNetX read clinical notes?",
      a: "Partly. TriNetX data may come from discrete data elements or from natural language processing of notes and reports, and its NLP-extracted facts sit next to the structured data.{{cite:palchuk-2023,trinetx-live}} Bond reads the clinical notes and reports in the site's own chart and shows the text behind every criterion decision.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Is TriNetX free for hospitals?",
      a: "TriNetX's 2023 paper says member organizations incur no financial costs and receive query and analytics tools and the hardware, while sponsors and CROs fund the platform.{{cite:palchuk-2023}} Bond has no integration fee: sites pay a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward.{{cite:bond-product}}",
    },
    {
      q: "Is Clinerion part of TriNetX?",
      a: "In April 2023, TriNetX and Norstella announced that TriNetX would acquire Norstella's Clinerion subsidiary.{{cite:trinetx-clinerion-2023}}",
    },
  ],
  sources: [
    ...trinetxSources(),
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
      note: "Capabilities, pricing and compliance status described by Bond Health, October 2026.",
    },
    {
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request.",
    },
    ...testimonialSources(),
  ],
  related: [
    { label: "Bond vs Tempus vs TriNetX", href: "/compare/bond-vs-tempus-vs-trinetx", description: "All three side by side." },
    { label: "Best EHR trial matching software", href: "/compare/ehr-patient-matching-software", description: "Bond, Tempus (Deep 6 AI), Triomics, Paradigm Health and TriNetX compared." },
    { label: "Bond for CROs", href: "/for/cros", description: "Chart-based feasibility counts and one enrollment funnel across sites." },
    { label: "Bond for sponsors", href: "/for/sponsors", description: "One enrollment funnel across a sponsor's sites." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a fee per screened patient plus a share of milestones from randomization on." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
    { label: "Site feasibility guide", href: "/guides/site-feasibility", description: "How sponsors and sites estimate enrollment before a study starts." },
  ],
};

export default page;
