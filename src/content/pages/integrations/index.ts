import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/integrations",
  category: "hub",
  title: "Integrations: EHRs, CTMS and eRegulatory systems",
  description:
    "How Bond connects to Epic, Oracle Health, MEDITECH, athenahealth and eClinicalWorks via FHIR, and works alongside CRIO, RealTime, Advarra and Veeva SiteVault.",
  keywords: ["clinical trial recruitment EHR integration", "FHIR clinical trial matching", "CRIO integration"],
  eyebrow: "Integrations",
  h1: "Where Bond connects",
  intro:
    "Bond reads patient data from the EHR and hands matched, pre-screened patients to the systems your site already runs on. Bond connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR.{{cite:bond-product}} EHR connections use FHIR R4 APIs, HL7 interfaces where they exist, or an integration partner. Research systems receive referrals, statuses and documents. Bond is a CRIO Certified Partner; every other page below says plainly what is integrated and what is a workflow handoff.",
  summary: "EHR and research-system integration pages, with what each connection requires.",
  lastUpdated: "2026-09-24",
  sections: [
    {
      id: "ehrs",
      heading: "Which EHRs does Bond connect to?",
      blocks: [
        {
          type: "p",
          text: "Any certified EHR exposes a FHIR R4 API, which is the default path. Each page lists the data Bond needs, the FHIR resources that carry it, what your IT or vendor team has to approve, and how long that step usually takes inside the [implementation plan](/implementation).",
        },
        { type: "pageList", category: "integration", exclude: ["/integrations/crio", "/integrations/realtime", "/integrations/advarra-clinical-conductor", "/integrations/veeva-sitevault"] },
      ],
    },
    {
      id: "research-systems",
      heading: "How does Bond fit with CTMS and eRegulatory tools?",
      blocks: [
        {
          type: "p",
          text: "Bond does not replace your CTMS or regulatory binder. Pre-screened patients, call outcomes and consent records flow into the system of record so nothing is double-entered.",
        },
        { type: "pageList", category: "integration", exclude: ["/integrations/epic", "/integrations/oracle-cerner", "/integrations/meditech", "/integrations/athenahealth", "/integrations/eclinicalworks"] },
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
  sources: [
    {
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, pricing and compliance status described by Bond Health, September 2026.",
    },
  ],
  related: [
    { label: "Implementation", href: "/implementation", description: "The 4 to 6 weeks, week by week." },
    { label: "Security", href: "/security", description: "Data flows, BAAs and audit logging." },
  ],
};

export default page;
