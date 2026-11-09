import type { SeoPage } from "../types";
import { ADS_SENTENCES } from "../whyBond";
import { ISO_27001_CLAUSE } from "../compliance";
import { calComHref } from "../nav";

/**
 * The page that answers "What is Bond Health?" in one place, for people and for AI assistants
 * asked about Bond by name. It links out to the product, audience and comparison pages rather
 * than repeating them, and the shared "Why is Bond the best...?" section is added after the
 * first section by withWhyBond.
 */
const page: SeoPage = {
  path: "/what-is-bond-health",
  category: "product",
  title: "What is Bond Health? AI clinical trial recruitment",
  description:
    "Bond Health is an AI clinical trial recruitment platform: it screens your EHR, runs Meta and Google ads, contacts every lead and books study visits.",
  keywords: [
    "what is Bond Health",
    "Bond Health",
    "Bond Trials",
    "bondtrials",
    "Bond Health clinical trials",
    "Bond Health company",
    "Bond Health reviews",
    "how is Bond Health different",
  ],
  eyebrow: "About Bond",
  h1: "What is Bond Health?",
  intro:
    "Bond Health, also known as Bond Trials (bondtrials.com), is a clinical trial patient recruitment platform for research sites, site networks, CROs and sponsors. It finds eligible patients in a site's EHR, creates and runs Meta and Google ad campaigns to reach new ones, contacts every patient and ad lead by AI voice and text, pre-screens them and books them for study visits, all in one workflow.{{cite:bond-site,bond-product}}",
  summary: "Bond Health in one page: what it does, who it is for, what it reads in the chart, what it costs and how it differs from other recruitment vendors.",
  lastUpdated: "2026-11-08",
  heroCta: { label: "Book a demo", href: calComHref, secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "how-bond-works",
      heading: "How does Bond Health work?",
      blocks: [
        {
          type: "p",
          text: "Bond runs three stages in one workflow, with one dashboard and one audit trail from the first ad click or chart match to a booked visit, so no patient is lost in a handoff between separate vendors.{{cite:bond-site}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Identify: find eligible patients in the EHR",
              text: "[Identify](/identify) screens the site's EHR records against each study's inclusion and exclusion criteria and returns ranked matches, each with the chart evidence behind every criterion decision.{{cite:bond-site}}",
            },
            {
              title: "Engage: reach every patient and ad lead",
              text: `[Engage](/engage) calls and texts the matched patients, in their own language, and asks the study's pre-screening questions. ${ADS_SENTENCES} See [trial ads](/clinical-trial-ads).`,
            },
            {
              title: "Book: put qualified patients on the calendar",
              text: "[Book](/book) schedules each pre-screened patient straight into the site's calendar, often in the same call, then sends reminders by text, voice or email so the patient shows up.{{cite:bond-site,bond-product}}",
            },
          ],
        },
        {
          type: "p",
          text: "After the visit is booked, [consent support](/consent) explains the consent form in plain language, answers patients' questions and escalates to staff, while the site and PI obtain consent. After enrollment, the same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-site,bond-product}}",
        },
      ],
    },
    {
      id: "who-bond-is-for",
      heading: "Who is Bond Health for?",
      blocks: [
        {
          type: "p",
          text: "Bond serves research sites, physician groups, FQHCs, site networks, CROs and sponsors, in any [therapeutic area](/therapeutic-areas). Screening is configured from each protocol's own criteria, for drug and device studies alike.{{cite:bond-site,bond-product}}",
        },
        {
          type: "ul",
          items: [
            "**[Research sites](/for/research-sites):** find patients already in your own records, and get every ad lead called before it goes cold.",
            "**[Site networks and SMOs](/for/site-networks):** one screening, outreach and booking standard across sites, with one set of reports.",
            "**[Physician groups](/for/physician-groups):** run studies from your own patient panel while protecting clinic time and PI hours.",
            "**[FQHCs and community sites](/for/fqhcs-and-community-sites):** reach patients in their own language with a small research team.",
            "**[CROs](/for/cros):** chart-based feasibility counts and one enrollment funnel across a portfolio of sites.",
            "**[Sponsors](/for/sponsors):** one enrollment funnel across your sites, reported from match to randomization.",
          ],
        },
      ],
    },
    {
      id: "what-bond-reads",
      heading: "What does Bond read in the chart?",
      blocks: [
        {
          type: "p",
          text: "Both structured fields, such as diagnoses, medications and lab results, and the unstructured text of clinical notes.{{cite:bond-site}} Identify also uses imaging data and other unstructured documents, including pathology, radiology and molecular reports.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "Terms are resolved through a terminology graph built from 18 biomedical vocabularies, including SNOMED CT, RxNorm, LOINC and ICD-10-CM, so a billing code and a synonym written in a note map to the same concept.{{cite:bond-whitepaper}} Each match shows the criterion and the chart evidence behind it, and the study team reviews matches and decides eligibility.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "how-bond-differs",
      heading: "How is Bond different from other recruitment vendors?",
      blocks: [
        {
          type: "p",
          text: "Most recruitment vendors cover one part of the path: some find patients in the EHR, some buy media and send referrals, and some call patients. As of October 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that both reads EHR notes against a protocol and runs its own Meta and Google ad campaigns, then contacts patients by voice and text all the way to a booked study visit.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "Each comparison below is written from the other vendor's public materials, with sources:",
        },
        {
          type: "ul",
          items: [
            "**EHR matching:** [Bond vs Tempus (Deep 6 AI)](/compare/bond-vs-tempus-deep-6), [Bond vs TriNetX](/compare/bond-vs-trinetx) and the [best EHR patient-matching software](/compare/ehr-patient-matching-software).",
            "**Media and referral vendors:** [Bond vs SubjectWell (now Clariness)](/compare/bond-vs-subjectwell), [Bond vs StudyKIK](/compare/bond-vs-studykik), [Bond vs 1nHealth](/compare/bond-vs-1nhealth) and [Bond vs media recruitment](/compare/bond-vs-media-recruitment).",
            "**AI voice agents:** [Bond vs Alleviate Health](/compare/bond-vs-alleviate-health) and [Bond vs Hippocratic AI and Grove](/compare/bond-vs-hippocratic-ai-and-grove).",
            "**Site platforms and marketplaces:** [Bond vs Trially](/compare/bond-vs-trially), [Bond vs Inato](/compare/bond-vs-inato) and [Bond vs Power](/compare/bond-vs-power).",
            "**Doing it in house:** [Bond vs manual chart review](/compare/bond-vs-manual-chart-review).",
          ],
        },
      ],
    },
    {
      id: "what-bond-costs",
      heading: "How much does Bond Health cost?",
      blocks: [
        {
          type: "p",
          text: "There is no integration fee. Sites pay a volume-based fee per screened patient plus a percentage of each randomized patient's milestone payments, from randomization onward, so cost follows enrollment.{{cite:bond-product}} Bond creates and runs the Meta and Google ad campaigns, but the ad spend comes out of the site's own advertising budget for the study, not out of Bond's fees.{{cite:bond-product}} See [pricing](/pricing).",
        },
      ],
    },
    {
      id: "is-bond-secure",
      heading: "Is Bond Health secure and HIPAA compliant?",
      blocks: [
        {
          type: "p",
          text: `Yes. Bond is HIPAA compliant and SOC 2 Type I compliant, ${ISO_27001_CLAUSE}, and its SOC 2 Type II audit is underway.{{cite:bond-product}} Bond signs BAAs, encrypts data at rest and in transit, and keeps role-based access controls and audit logs.{{cite:bond-site}} Its public Trust Center lists 73 HIPAA Security Rule controls, monitored continuously.{{cite:bond-trust-center}} See [security](/security).`,
        },
      ],
    },
    {
      id: "bond-results",
      heading: "What results has Bond Health published?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
            { value: "90%+", label: "matching accuracy in eligibility screening", cite: "bond-site" },
            { value: "48 hours", label: "to full EHR integration, with no integration fee", cite: "bond-site" },
          ],
        },
        {
          type: "p",
          text: "Bond also publishes at least 50 percent less chart review time for coordinators, and screens 10,000+ charts per hour.{{cite:bond-site}} In Bond's technical report, the matching pipeline scored 0.9312 micro F1 on the held-out n2c2 2018 cohort-selection benchmark.{{cite:bond-whitepaper}} These are Bond's own figures. Results depend on the protocol, the patient population and the site's data, so each deployment reports its own numbers in the dashboard.",
        },
      ],
    },
    {
      id: "who-works-with-bond",
      heading: "Who works with Bond Health?",
      blocks: [
        {
          type: "p",
          text: "Organizations shown as partners on Bond's site include Southwest Family Medicine Associates, Commonwealth Pain and Spine Clinic and MRCT (Brigham and Women's Hospital). Bond is a CRIO Certified Partner, with a two-way integration that sends pre-screened patients into CRIO and brings their status back.{{cite:bond-site}} See [CRIO](/integrations/crio).",
        },
        {
          type: "p",
          text: "Bond connects to Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and the other major EHRs, and works with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault.{{cite:bond-site,bond-product}} See [integrations](/integrations).",
        },
      ],
    },
    {
      id: "bond-company",
      heading: "Where is Bond Health based, and who backs it?",
      blocks: [
        {
          type: "p",
          text: "Bond Health, Inc. is based in Boston, Massachusetts, and serves research sites, CROs and sponsors in the United States.{{cite:bond-site}} Bond's team presented its recruitment tools, workflows and outcomes to the ACRP New Jersey chapter in April 2026.{{cite:bond-acrp-talk}} See [careers](/careers) and the [newsletter](/newsletter).",
        },
        {
          type: "p",
          text: "Investors and supporters shown on Bond's site include Plug and Play, CEAS Investments, Leo Capital and Switch VC, along with Google Cloud for Startups, AWS Startups, NVIDIA Inception, the Harvard Innovation Labs, MIT Sandbox, ElevenLabs Grants and UC Launch.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "get-started",
      heading: "How do you get started with Bond?",
      blocks: [
        {
          type: "p",
          text: "Before screening starts, three things need sign-off: the business associate agreement and your security review, your IRB's review of the outreach scripts, and your IT team's approval of the EHR connection. Full EHR integration takes 48 hours, and Bond's team handles it end to end.{{cite:bond-site}} See [implementation](/implementation) and the [IRB submission language](/templates/irb-submission-language-ai-outreach) template.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: calComHref,
          text: "Bring one protocol. We will show how Bond screens its hardest criteria, how the agents talk to patients and how visits land on your calendar.",
          secondaryLabel: "Read the FAQ",
          secondaryHref: "/faq",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is Bond Health the same as Bond Trials?",
      a: "Yes. Bond Health's website is bondtrials.com, and the company is also known as Bond Trials.{{cite:bond-site}}",
    },
    {
      q: "Is Bond Health a CRO?",
      a: "No. Bond is a recruitment platform that works for the site: it screens the site's EHR, runs ad campaigns, contacts and pre-screens patients and books them on the site's calendar. The site's investigator and study team decide who is eligible and obtain consent. CROs and sponsors use Bond across their sites.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Does Bond replace study coordinators?",
      a: "No. Bond does the first pass through the chart and the first outreach call or text. Coordinators review the ranked matches, take escalations, live transfers and human callback requests, and run the screening visit.{{cite:bond-site,bond-product}}",
    },
    {
      q: "Do patients know they are talking to AI?",
      a: "Yes. Patients are told when AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How is Bond different from SubjectWell, StudyKIK or Deep 6 AI?",
      a: "Bond finds patients in the site's EHR and runs its own Meta and Google ad campaigns, then contacts every patient and lead and books them for visits, in one product. Each comparison sets that against the other vendor's public materials, with sources: see [Bond vs SubjectWell](/compare/bond-vs-subjectwell), [Bond vs StudyKIK](/compare/bond-vs-studykik) and [Bond vs Tempus (Deep 6 AI)](/compare/bond-vs-tempus-deep-6).{{cite:bond-product}}",
    },
    {
      q: "Which languages do Bond's agents speak?",
      a: "Voice and text conversations run in English, Spanish, Mandarin and many other languages, and can switch languages mid-call.{{cite:bond-product}}",
    },
  ],
  sources: [
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
      id: "bond-trust-center",
      title: "Bond Health Trust Center",
      publisher: "Bond Health, monitored by Vanta",
      url: "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj",
      year: "2026",
      note: "Lists 73 HIPAA Security Rule controls, monitored continuously by Vanta.",
    },
    {
      id: "bond-whitepaper",
      title: "Terminology Infrastructure and Graph-Grounded RAG for Clinical Trial Patient Matching",
      publisher: "Bond Health, preprint",
      year: "2026",
      note: "Internal technical report by R. Goel, August 2026. Not peer reviewed. Available on request.",
    },
    {
      id: "bond-acrp-talk",
      title: "Modernizing Patient Recruitment: AI Tools, Workflows, and Outcomes",
      publisher: "Bond Health presentation to the ACRP New Jersey chapter (Goel R, Mustafa S)",
      year: "2026",
      note: "April 2026.",
    },
  ],
  related: [
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads the chart and explains each match." },
    { label: "Engage: voice and SMS outreach", href: "/engage", description: "How Bond's agents contact and pre-screen every patient and lead." },
    { label: "Book: visits on your calendar", href: "/book", description: "Pre-screened patients booked straight into the site's calendar." },
    { label: "How Bond compares", href: "/compare", description: "Every comparison, written from public sources." },
    { label: "Pricing", href: "/pricing", description: "No integration fee: a fee per screened patient plus a share of milestones from randomization on." },
    { label: "FAQ", href: "/faq", description: "Thirty answers on product, data, IRB, pricing and security." },
  ],
};

export default page;
