import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations",
  category: "hub",
  title: "Integrations: EHRs, CTMS and eRegulatory systems",
  description:
    "How Bond connects to Epic, Oracle Health, MEDITECH, NextGen and other EHRs via FHIR, and works with CRIO, OnCore, Clinical Conductor, RealTime and SiteVault.",
  keywords: ["clinical trial recruitment EHR integration", "FHIR clinical trial matching", "CRIO integration", "CTMS integration patient recruitment", "OnCore integration"],
  eyebrow: "Integrations",
  h1: "Where Bond connects",
  intro:
    "Bond reads patient data from the EHR and hands matched, pre-screened patients to the systems your site already runs on. Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR.{{cite:bond-product}} It also works with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault.{{cite:bond-product}} EHR connections use FHIR R4 APIs, HL7 interfaces where they exist, or an integration partner. Research systems receive referrals, statuses and documents. Bond is a CRIO Certified Partner; every other page below says plainly what is integrated and what is a workflow handoff.",
  summary: "EHR and research-system integration pages, with what each connection requires.",
  lastUpdated: "2026-10-05",
  sections: [
    {
      id: "ehrs",
      heading: "Which EHRs does Bond connect to?",
      blocks: [
        {
          type: "p",
          text: "Any certified EHR exposes a FHIR R4 API, which is the default path. Each page lists the data Bond needs, the FHIR resources that carry it, what your IT or vendor team has to approve, and how long that step usually takes inside the [implementation plan](/implementation).",
        },
        { type: "pageList", category: "integration", exclude: ["/integrations/crio", "/integrations/realtime", "/integrations/advarra-clinical-conductor", "/integrations/oncore", "/integrations/veeva-sitevault"] },
      ],
    },
    {
      id: "research-systems",
      heading: "Which CTMS and eRegulatory systems does Bond work with?",
      blocks: [
        {
          type: "p",
          text: "Bond works with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault.{{cite:bond-site}} It does not replace your CTMS or regulatory binder. Pre-screened patients, call outcomes and consent records flow into the system of record so nothing is double-entered.",
        },
        {
          type: "callout",
          tone: "bond",
          title: "CRIO: a certified, two-way integration",
          text: "Bond is a CRIO Certified Partner, its only vendor certification. With CRIO, pre-screened patients go straight into CRIO through its API and their status comes back to Bond. With the other CTMS systems, Bond works through the site's own API access or file exports. See [Bond and CRIO](/integrations/crio).{{cite:bond-site}}",
        },
        { type: "pageList", category: "integration", exclude: ["/integrations/epic", "/integrations/oracle-cerner", "/integrations/meditech", "/integrations/athenahealth", "/integrations/eclinicalworks", "/integrations/nextgen", "/integrations/veradigm", "/integrations/oncoemr"] },
      ],
    },
    {
      id: "not-listed",
      heading: "What if my system is not listed?",
      blocks: [
        {
          type: "p",
          text: "Bond also works from exported patient lists and spreadsheets for pilots that start before the EHR connection is approved, and connects to site calendars for scheduling. Ask about your system when you [book a demo](/book-a-demo).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Which recruitment platforms integrate with trial management systems?",
      a: "Bond Health integrates recruitment with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault.{{cite:bond-site}} Bond is a CRIO Certified Partner: pre-screened patients go straight into CRIO through its API and their status comes back to Bond. With the other systems, Bond works through the site's own API access or file exports, so pre-screened patients, call outcomes and consent records reach the system of record without double entry.{{cite:bond-site}}",
    },
    {
      q: "Which EHRs does Bond integrate with?",
      a: "Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and other major EHRs, through FHIR, HL7 or an integration partner; NextGen connects through FHIR. Full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method, and there is no integration fee.{{cite:bond-site,bond-product}}",
    },
  ],
  sources: [
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
    { label: "What is a CTMS?", href: "/guides/what-is-a-ctms", description: "What a clinical trial management system does and how recruitment data gets in." },
    { label: "Implementation", href: "/implementation", description: "Live in 48 hours, step by step." },
    { label: "Security", href: "/security", description: "Data flows, BAAs and audit logging." },
  ],
};

export default page;
