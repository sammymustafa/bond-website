import type { SeoPage, Source } from "../../types";
import { testimonialBlocks, testimonialSources } from "../../testimonials";
import { ADS_BULLET } from "../../whyBond";
import { calComHref } from "../../nav";
import { BOND_SOURCES } from "./_referral-vendors";
import { deep6Sources } from "./_deep6-sources";
import { trinetxSources } from "./_trinetx-sources";

/** Bond's own sources, picked by id from the shared list so each note stays in one place. */
function pick(from: Source[], ...ids: string[]): Source[] {
  return ids.map((id) => {
    const source = from.find((s) => s.id === id);
    if (!source) throw new Error(`Unknown source ${id}`);
    return source;
  });
}

/**
 * A three-way comparison of Bond, Tempus (Deep 6 AI, TIME and Next Trials) and TriNetX, in the style of
 * vanta.com's multi-vendor pages. Tempus facts come from _deep6-sources.ts (re-checked October 23, 2026)
 * and TriNetX facts from _trinetx-sources.ts (read November 8, 2026). TriNetX network-size figures are
 * left out on purpose, as on /compare/bond-vs-trinetx.
 */
const page: SeoPage = {
  path: "/compare/bond-vs-tempus-vs-trinetx",
  category: "comparison",
  title: "Bond Health vs Tempus vs TriNetX: trial matching compared",
  description:
    "Bond, Tempus (Deep 6 AI, TIME, Next Trials) and TriNetX compared on what they read, identified patients, who acts on a match, outreach, booking and pricing.",
  keywords: [
    "Tempus vs TriNetX",
    "TriNetX vs Tempus",
    "Bond Health vs Tempus vs TriNetX",
    "Deep 6 AI vs TriNetX",
    "TriNetX alternatives",
    "Deep 6 AI alternatives",
    "EHR clinical trial matching software",
    "clinical trial feasibility vs patient recruitment",
  ],
  eyebrow: "Comparison",
  h1: "Bond Health vs Tempus (Deep 6 AI) vs TriNetX",
  intro:
    "For getting eligible patients into a study, Bond Health is better than Tempus and TriNetX because it takes every match to a booked screening visit. Tempus, which acquired Deep 6 AI in 2025, has a clinical team pre-screen matched patients and present them to each site in its TIME oncology network, and TriNetX invites organizations to studies and leaves each one to re-identify its own eligible patients.{{cite:tempus-10k-2025,tempus-time-site-2026,tempus-ttct-2026,trinetx-connect}} Bond screens a site's own EHR, including clinical notes, and its voice and text agents contact, pre-screen and book every matched patient.{{cite:bond-site,bond-product}} TriNetX does something Bond does not: de-identified feasibility queries across its network of healthcare organizations.{{cite:trinetx-live,palchuk-2023}}",
  summary:
    "Bond, Tempus (Deep 6 AI, TIME and Next Trials) and TriNetX side by side, from what each reads in the chart to who contacts and books the patient.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: calComHref, secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "contenders",
      heading: "Who are Bond Health, Tempus and TriNetX?",
      blocks: [
        { type: "h3", text: "Bond Health" },
        {
          type: "p",
          text: "Bond Health is an AI clinical trial recruitment platform that works for the site. [Identify](/identify) screens the site's EHR against each protocol, including clinical notes, and Bond creates and runs Meta and Google ad campaigns for each study. Its voice and text agents then contact every matched patient and ad lead, pre-screen them and book the screening visit, with consent support and retention after enrollment.{{cite:bond-site,bond-product}}",
        },
        { type: "h3", text: "Tempus (Deep 6 AI, TIME and Next Trials)" },
        {
          type: "p",
          text: "Tempus acquired Deep 6 AI on March 11, 2025.{{cite:tempus-10k-2025}} Deep 6 AI matched patients to trials by mining structured and unstructured EMR data, and health systems used it enterprise-wide, often run centrally by the Clinical Trials Office (2024, 2025).{{cite:tempus-deep6-acquisition,deep6-cassidy-2024}} Tempus now sells trial matching through TIME, its oncology trial network, where a Tempus clinical team pre-screens matched patients and presents them to each site, and Next Trials, which pre-screens for trials already open at a practice (2026).{{cite:tempus-time-site-2026,tempus-next-trials-2026}} deep6.ai itself no longer loaded in October 2026.{{cite:deep6-archive-2026}}",
        },
        { type: "h3", text: "TriNetX" },
        {
          type: "p",
          text: "TriNetX connects healthcare organizations and researchers through real-world patient data (2026).{{cite:trinetx-home}} Sponsors and CROs use TriNetX LIVE™ to test a study's eligibility criteria against the network's data, see site and PI-level insights, and invite organizations to studies through TriNetX LIVE™ Connect; each organization then re-identifies its own eligible patients (2026).{{cite:trinetx-live,trinetx-connect}} Member organizations keep the data on hardware in their own data center or use a cloud-hosted option, and receive the tools at no financial cost while sponsors and CROs fund the platform (2023).{{cite:palchuk-2023}}",
        },
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "These are three different tools. TriNetX is built for sponsors and CROs sizing a protocol and choosing sites; Tempus pairs EHR matching with its own clinical team, mainly for cancer trials; and Bond turns each match at a site into a booked screening visit.{{cite:trinetx-live,tempus-time-site-2026,tempus-ttct-2026,bond-site,bond-product}} For enrolling patients at your site, in any therapeutic area, Bond is the best of the three.",
        },
      ],
    },
    {
      id: "chart-reading",
      heading: "What does each one read in the chart?",
      blocks: [
        {
          type: "p",
          text: "**Bond** reads structured fields and clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, and shows the evidence behind every criterion decision, traceable to the chart.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "**Tempus.** Deep 6 AI applied natural language processing to structured and unstructured EMR data, such as physician notes and lab, radiology, pathology and genomics reports (2023), and Ohio State described it highlighting the text behind each inclusion and exclusion criterion (2024).{{cite:deep6-ttuhsc-2023,osu-aaci-2024}} Tempus says generative AI scans structured and unstructured clinical notes for pre-screening, and Next Trials works from clinical, imaging and molecular data (2026).{{cite:tempus-time-site-2026,tempus-next-trials-2026}}",
        },
        {
          type: "p",
          text: "**TriNetX** data may come from discrete data elements or from natural language processing of medical notes and reports (2023), and NLP-extracted facts from clinical notes are queryable next to the structured data for the same de-identified patients (2026).{{cite:palchuk-2023,trinetx-live}}",
        },
        {
          type: "p",
          text: "All three read beyond billing codes. The differences are in whose records they read, who sees the patients and what happens next.",
        },
      ],
    },
    {
      id: "identified-or-counts",
      heading: "Does each one return identified patients or de-identified counts?",
      blocks: [
        {
          type: "p",
          text: "**TriNetX works with de-identified data.** Organizations provide data as a de-identified, pseudo-anonymized or limited data set, and sponsors and CROs see aggregate patient counts at each organization and cannot query an individual one (2023). When an organization joins a study, it re-identifies its own eligible patients through TriNetX LIVE™ Connect (2026).{{cite:palchuk-2023,trinetx-connect}}",
        },
        {
          type: "p",
          text: "**Tempus works from the data a provider agrees to share.** Its tools connect to a provider's EHR, data warehouse or a third-party data provider to pull the structured and unstructured data the provider has agreed to provide (2026), and a Tempus nurse reviewed qualifying TIME matches before sending them to sites (2025).{{cite:tempus-10k-2025,tempus-time-asco-2025}} In Deep 6 AI's workflow, IRB-approved site staff identified each matched patient and validated eligibility with evidence in the EMR (2023).{{cite:deep6-life-sciences-2023}}",
        },
        {
          type: "p",
          text: "**Bond works on the site's own identified records** under a business associate agreement, and returns named, ranked matches with the evidence behind each criterion for the coordinator to review.{{cite:bond-site}}",
        },
        {
          type: "p",
          text: "To be fair to TriNetX: for a sponsor sizing a protocol across many organizations before choosing sites, its network queries do something Bond does not. Bond runs feasibility from the same EHR screening, with eligible-patient counts backed by chart evidence, at the sites that run Bond.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "who-acts",
      heading: "Who acts on a match?",
      blocks: [
        {
          type: "ul",
          items: [
            "**TriNetX: the organization.** TriNetX sends the study opportunity to selected organizations and sites and follows up with the sites (2026); the organization then re-identifies its eligible patients itself (2026).{{cite:trinetx-premium,trinetx-connect}} At Weill Cornell Medicine, TriNetX brought 402 requests for sponsor-initiated trials over six years, and local investigators were interested in 14% of them.{{cite:campion-2024}}",
            "**Tempus: its clinical team, then the site.** In TIME, a Tempus clinical team pre-screens matched patients and presents them to each site (2026), and where a contract requires, Tempus may help open the trial site and enroll the patient (2026).{{cite:tempus-time-site-2026,tempus-10k-2025}} Next Trials assists site clinicians in identifying, screening and enrolling eligible patients for TIME trials (2026).{{cite:tempus-next-trials-2026}}",
            "**Bond: its agents.** Bond's voice and text agents start from what [Identify](/identify) found in the chart, skip questions the chart already answers, and pre-screen and book the patient in one conversation, in the patient's language.{{cite:bond-product}}",
          ],
        },
      ],
    },
    {
      id: "outreach-and-booking",
      heading: "Who contacts, pre-screens and books the patient?",
      blocks: [
        {
          type: "p",
          text: "Bond does all three in software. Its voice and SMS agents contact every matched patient and every new ad lead immediately, keep following up with every lead who has not responded, pre-screen them and book the screening visit straight onto the site's calendar, then send reminders. Patients are told AI is used and can reach a person at any time, by live transfer to a coordinator or a callback, as the site prefers.{{cite:bond-product,bond-site}}",
        },
        {
          type: "p",
          text: "Tempus Nurse Navigators contact patients who ask about TIME trials and can speak with them and their doctors (2026).{{cite:tempus-ttct-2026}} For Tempus, automated calls or texts to EHR-matched patients, ad campaigns and visit booking are not publicly documented (October 2026). For TriNetX, contacting, pre-screening or booking patients is not publicly documented (November 2026).",
        },
      ],
    },
    {
      id: "who-uses",
      heading: "Who buys and uses each one?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Bond:** any research site, including physician groups and FQHCs, plus site networks, CROs and sponsors, in any therapeutic area. Screening is configured from each protocol's own criteria.{{cite:bond-site,bond-product}}",
            "**Tempus:** Deep 6 AI served health systems, often through the Clinical Trials Office, and life sciences companies (2024). TIME covers cancer trials, with the trial sponsor as the customer, and Next Trials serves practices for trials already open there, starting in oncology (2026).{{cite:deep6-cassidy-2024,tempus-ttct-2026,tempus-10k-2025,tempus-next-trials-2026}}",
            "**TriNetX:** sponsors and CROs query the network and fund the platform; member healthcare organizations contribute data, receive query and analytics tools at no financial cost, and receive study invitations (2023, 2026).{{cite:palchuk-2023,trinetx-connect}}",
          ],
        },
      ],
    },
    {
      id: "connection",
      heading: "How does each one connect to a site's data?",
      blocks: [
        {
          type: "p",
          text: "**Bond** connects to Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and the other major EHRs via FHIR and HL7 or an aggregator, with full integration in 48 hours handled end to end by Bond's team and no integration fee. It also works with CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault ([implementation](/implementation)).{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: "**Tempus** uses near real-time HL7 and FHIR connections and batch data exchanges to a provider's EHR, data warehouse or third-party data provider, and in certain circumstances covers the direct costs of the technical integration (2026).{{cite:tempus-10k-2025}} Deep 6 AI could also bring in genomics, cancer registry and CTMS data (2024).{{cite:osu-aaci-2024}}",
        },
        {
          type: "p",
          text: "**TriNetX** data sits on hardware in the organization's data center, with a cloud-hosted option (2023). In an NHS case study, the TriNetX appliance was hosted in the trust's data center and TriNetX mapped the trust's local codes to standard terminologies (2026).{{cite:palchuk-2023,trinetx-elht}}",
        },
      ],
    },
    {
      id: "pricing",
      heading: "How does each one charge?",
      blocks: [
        {
          type: "p",
          text: "**Bond** charges a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee. Ad spend for the Meta and Google campaigns is not included in Bond's fees; it comes out of the site's own advertising budget for the study.{{cite:bond-product}} See [pricing](/pricing).",
        },
        {
          type: "p",
          text: "**Tempus.** We found no public price list as of October 2026. Tempus's 10-K names the clinical trial sponsor as the TIME customer and says that, depending on the agreement, Tempus recognizes revenue when it notifies a physician of a match or when a patient enrolls (2026).{{cite:tempus-10k-2025}}",
        },
        {
          type: "p",
          text: "**TriNetX.** Sponsors and CROs fund the platform in return for access to network data, and member organizations incur no financial costs (2023). We found no public price list as of November 2026.{{cite:palchuk-2023}}",
        },
      ],
    },
    {
      id: "capabilities",
      heading: "How do Bond, Tempus and TriNetX compare, side by side?",
      blocks: [
        {
          type: "p",
          text: "Years in the Tempus and TriNetX columns show each source's date. \"Not publicly documented\" means we found no public description in the materials we reviewed (October 2026 for Tempus, November 2026 for TriNetX), not that the capability is absent.",
        },
        {
          type: "table",
          caption: "Bond Health, Tempus (Deep 6 AI, TIME and Next Trials) and TriNetX, from public materials",
          columns: ["Capability", "Bond Health", "Tempus (Deep 6 AI, TIME, Next Trials)", "TriNetX"],
          rows: [
            [
              "Reads clinical notes",
              "**Yes.** Clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports.{{cite:bond-site,bond-product}}",
              "**Yes.** NLP of physician notes and lab, radiology, pathology and genomics reports (2023); generative AI on clinical notes (2026).{{cite:deep6-ttuhsc-2023,tempus-time-site-2026}}",
              "**Yes.** NLP-extracted facts from clinical notes, queryable next to structured data (2023, 2026).{{cite:palchuk-2023,trinetx-live}}",
            ],
            [
              "Evidence behind each criterion, per patient",
              "**Yes.** Ranked matches with the evidence behind each criterion decision, traceable to the chart.{{cite:bond-site}}",
              "**Yes.** Deep 6 AI highlighted the patient data and text behind each criterion (2024).{{cite:osu-aaci-2024}}",
              "**Counts, not patients.** Sponsors see aggregate counts per organization (2023); a paid report adds patient counts, criteria analysis and organization names (2026).{{cite:palchuk-2023,trinetx-premium}}",
            ],
            [
              "Identified patients",
              "**Yes.** Named, ranked matches from the site's own records, under a BAA.{{cite:bond-site}}",
              "**Yes, at the site.** Site staff identified each matched patient and validated eligibility in the EMR (2023); a Tempus nurse reviewed TIME matches before sending them to sites (2025).{{cite:deep6-life-sciences-2023,tempus-time-asco-2025}}",
              "**Not for sponsors.** Data is de-identified, pseudo-anonymized or a limited data set (2023); each organization re-identifies its own eligible patients (2026).{{cite:palchuk-2023,trinetx-connect}}",
            ],
            [
              "Feasibility queries across many organizations",
              "**No.** Feasibility counts from the same EHR screening, backed by chart evidence, at the sites that run Bond.{{cite:bond-product}}",
              "**Not publicly documented (October 2026).**",
              "**Yes.** Tests a study's eligibility criteria on real-world data, with site and PI-level insights for site selection (2026).{{cite:trinetx-live}}",
            ],
            [
              "Pre-screens matched patients",
              "**Yes.** Voice and text agents pre-screen every match.{{cite:bond-product}}",
              "**Yes, by people.** A Tempus clinical team pre-screens TIME matches (2026); Next Trials supports pre-screening at the practice (2026).{{cite:tempus-time-site-2026,tempus-next-trials-2026}}",
              "**Not publicly documented (November 2026).**",
            ],
            [
              "Contacts every matched patient",
              "**Yes.** Immediately, by voice and text, with follow-up until they respond.{{cite:bond-product}}",
              "**Partial.** Nurse Navigators contact patients who ask about TIME trials (2026); automated calls or texts to EHR-matched patients: not publicly documented (October 2026).{{cite:tempus-ttct-2026}}",
              "**Not publicly documented (November 2026).** Study opportunities go to organizations and sites (2026).{{cite:trinetx-premium}}",
            ],
            [
              "Books the screening visit",
              "**Yes.** Straight onto the site's calendar, in the same conversation as pre-screening.{{cite:bond-product,bond-site}}",
              "**Not publicly documented (October 2026).** Where a contract requires, Tempus may help enroll the patient (2026).{{cite:tempus-10k-2025}}",
              "**Not publicly documented (November 2026).**",
            ],
            [
              "Runs ad campaigns for the study",
              "**Yes.** Creates and runs Meta and Google ad campaigns and contacts every ad lead immediately.{{cite:bond-product}}",
              "**Not publicly documented (October 2026).**",
              "**Not publicly documented (November 2026).**",
            ],
            [
              "Consent support and retention",
              "**Yes.** Plain-language consent support with staff escalation; reminders, transportation booking and dropout-risk alerts after enrollment. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
              "**Not publicly documented (October 2026).**",
              "**Not publicly documented (November 2026).**",
            ],
            [
              "Connection",
              "Major EHRs via FHIR and HL7 or an aggregator, with full integration in 48 hours and no integration fee.{{cite:bond-site}}",
              "HL7 and FHIR connections and batch exchanges to an EHR, data warehouse or third-party data provider (2026).{{cite:tempus-10k-2025}}",
              "Hardware in the organization's data center, or a cloud-hosted option (2023).{{cite:palchuk-2023}}",
            ],
            [
              "Pricing",
              "A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee ([pricing](/pricing)).{{cite:bond-product}}",
              "No public price list (October 2026). The trial sponsor is the TIME customer (2026).{{cite:tempus-10k-2025}}",
              "Sponsors and CROs fund the platform; member organizations incur no financial costs (2023).{{cite:palchuk-2023}}",
            ],
          ],
          note: "See [the best EHR clinical trial matching software](/compare/ehr-patient-matching-software) for Triomics and Paradigm Health as well.",
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
            "**Bond Health: best for research sites, physician groups, FQHCs, site networks, CROs and sponsors that want matches turned into booked visits, in any therapeutic area.** It is the only one of the three whose public materials describe software that contacts, pre-screens and books every matched patient.{{cite:bond-site,bond-product}}",
            "**Tempus: for oncology practices that want to join a sponsor-funded trial network,** with a Tempus clinical team pre-screening matched patients for the site (2026).{{cite:tempus-time-site-2026,tempus-10k-2025}}",
            "**TriNetX: for sponsors and CROs judging feasibility and choosing sites,** and for healthcare organizations that want query and analytics tools at no financial cost in return for contributing data (2023, 2026).{{cite:trinetx-live,palchuk-2023}}",
          ],
        },
        {
          type: "p",
          text: "TriNetX and Bond also fit together: a sponsor or CRO can use TriNetX to judge feasibility and pick organizations, and a site that accepts the study can use Bond to find the eligible patients in its own EHR, contact and pre-screen every one, and book them for visits.{{cite:trinetx-live,trinetx-connect,bond-site,bond-product}} See [Bond vs TriNetX](/compare/bond-vs-trinetx).",
        },
      ],
    },
    {
      id: "why-bond",
      heading: "Why is Bond better than Tempus and TriNetX?",
      blocks: [
        {
          type: "callout",
          tone: "bond",
          title: "The short answer",
          text: "Bond is better than Tempus and TriNetX because, for getting eligible patients into a study, it does the work that starts after the match. TriNetX gives sponsors aggregate counts and gives organizations study invitations, and Tempus's TIME program has its own clinical team pre-screen matches for sites (2023, 2026).{{cite:palchuk-2023,trinetx-connect,tempus-time-site-2026}} Bond screens the site's own records with the evidence behind every criterion, then its voice and text agents contact every matched patient, pre-screen them and book the screening visit on the site's calendar, in any therapeutic area, with no integration fee.{{cite:bond-site,bond-product}}",
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
            "**Patients, not counts or invitations.** Bond returns ranked matches from the site's own records, each with the evidence behind every criterion decision, for the coordinator to review.{{cite:bond-site}} In TriNetX, sponsors see aggregate counts per organization, and each organization re-identifies its own patients.{{cite:palchuk-2023,trinetx-connect}}",
            "**Every match contacted and booked by software.** Bond's voice and SMS agents start from what Identify found in the chart, skip questions the chart already answers, and pre-screen and book a visit in one conversation, in the patient's language.{{cite:bond-product}} Automated outreach and visit booking are not publicly documented for Tempus (October 2026) or TriNetX (November 2026).",
            ADS_BULLET,
            "**Any therapeutic area, any research site.** TIME covers cancer trials, and Next Trials starts in oncology (2026).{{cite:tempus-ttct-2026,tempus-next-trials-2026}} Bond's screening is configured from each protocol's own criteria, for drug and device studies alike, and it serves physician groups and FQHCs as well as site networks, CROs and sponsors.{{cite:bond-site,bond-product}}",
            "**Consent support and retention.** Plain-language consent support with staff escalation, then visit reminders, transportation booking, symptom and diary collection and dropout-risk alerts after enrollment. The site and PI obtain consent.{{cite:bond-site,bond-product}}",
            "**A price that follows enrollment.** A volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, with no integration fee. See [pricing](/pricing).{{cite:bond-product}}",
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
          text: "Bring one protocol. We will show how Bond handles its hardest criteria, the evidence behind each decision, and how its agents would reach, pre-screen and book the patients it finds.",
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
          text: "Bond Health, which sells recruitment software and competes with Tempus and TriNetX, wrote this page in November 2026. Tempus facts come from Tempus's 2025 Form 10-K, Tempus web pages and press releases, a Tempus-authored conference abstract, an Ohio State customer abstract and an archived copy of Deep 6 AI's website, re-checked on October 23, 2026. TriNetX facts come from TriNetX web pages, a peer-reviewed paper written mostly by TriNetX staff and a Weill Cornell Medicine paper, read on November 8, 2026. Each is quoted in the sources below. We left out network-size figures, which TriNetX reports differently across its own pages. Bond's figures and capabilities come from its website, Trust Center and product information Bond provided. We used no private or internal competitive material.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "Corrections",
          text: "If anything here is wrong or out of date, including anything about Tempus, Deep 6 AI or TriNetX, email [hello@bondtrials.com](mailto:hello@bondtrials.com). We will check it and update the page.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond better than Tempus and TriNetX?",
      a: "For enrolling patients, yes. Tempus pairs EHR matching with its own clinical team, mainly for cancer trials, and TriNetX helps sponsors find organizations and invite them to studies.{{cite:tempus-time-site-2026,trinetx-connect}} Bond finds the patients in the site's EHR, contacts and pre-screens every one by voice and text, and books them for visits, in any therapeutic area, for a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward ([pricing](/pricing)).{{cite:bond-site,bond-product}}",
    },
    {
      q: "What is the difference between Tempus and TriNetX?",
      a: "Tempus matches patients to trials from data providers agree to share, and in its TIME network a Tempus clinical team pre-screens matched patients and presents them to sites (2026).{{cite:tempus-10k-2025,tempus-time-site-2026}} TriNetX is a federated network of de-identified data that sponsors and CROs query for feasibility and site selection; each member organization re-identifies its own eligible patients (2023, 2026).{{cite:palchuk-2023,trinetx-live,trinetx-connect}}",
    },
    {
      q: "Do Tempus or TriNetX contact patients?",
      a: "Tempus Nurse Navigators contact patients who ask about TIME trials (2026); automated calls or texts to EHR-matched patients are not publicly documented (October 2026).{{cite:tempus-ttct-2026}} TriNetX sends study opportunities to organizations and sites, and contacting patients is not publicly documented (November 2026).{{cite:trinetx-premium}} Bond's agents contact every matched patient and every ad lead immediately and keep following up until they respond.{{cite:bond-product}}",
    },
    {
      q: "Is Deep 6 AI part of Tempus?",
      a: "Yes. Tempus's 2025 Form 10-K says it acquired Deep 6 AI, Inc. on March 11, 2025, and by January 2026 Deep 6 AI's website said it was a Tempus AI company.{{cite:tempus-10k-2025,deep6-archive-2026}} See [Bond vs Tempus (Deep 6 AI)](/compare/bond-vs-tempus-deep-6).",
    },
    {
      q: "Can a site use TriNetX and Bond together?",
      a: "Yes. A sponsor or CRO can use TriNetX to judge feasibility and invite organizations, and a site that accepts the study can use Bond to find the eligible patients in its own records, contact and pre-screen them and book them for visits. Bond screens each patient against every open study at the site.{{cite:trinetx-connect,bond-site,bond-product}}",
    },
  ],
  sources: [
    ...deep6Sources(
      "tempus-10k-2025",
      "tempus-deep6-acquisition",
      "tempus-time-site-2026",
      "tempus-next-trials-2026",
      "tempus-time-asco-2025",
      "tempus-ttct-2026",
      "deep6-cassidy-2024",
      "deep6-life-sciences-2023",
      "deep6-ttuhsc-2023",
      "osu-aaci-2024",
      "deep6-archive-2026",
    ),
    ...trinetxSources("trinetx-home", "trinetx-live", "trinetx-connect", "trinetx-premium", "trinetx-elht", "palchuk-2023", "campion-2024"),
    ...pick(BOND_SOURCES, "bond-site", "bond-product", "bond-trust-center"),
    ...testimonialSources(),
  ],
  related: [
    { label: "Bond vs Tempus (Deep 6 AI)", href: "/compare/bond-vs-tempus-deep-6", description: "EHR matching, outreach, booked visits and pricing, head to head." },
    { label: "Bond vs TriNetX", href: "/compare/bond-vs-trinetx", description: "A federated research network and a recruitment platform, head to head." },
    { label: "Best EHR trial matching software", href: "/compare/ehr-patient-matching-software", description: "Bond, Tempus (Deep 6 AI), Triomics, Paradigm Health and TriNetX compared." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and explains each match." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a fee per screened patient plus a share of milestones from randomization on." },
    { label: "Security", href: "/security", description: "How Bond handles PHI, BAAs and audit logging." },
  ],
};

export default page;
