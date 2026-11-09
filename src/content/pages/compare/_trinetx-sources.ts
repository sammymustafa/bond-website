import type { Source } from "../../types";

/**
 * TriNetX facts, shared by /compare/bond-vs-trinetx and the EHR trial matching roundup.
 * Every note records when the page was read and quotes the passage the site relies on.
 * Network-size figures are left out on purpose (comparison-page rule: no stronger competitor stats).
 */
const TRINETX_SOURCES: Source[] = [
  {
    id: "trinetx-home",
    title: "TriNetX homepage",
    publisher: "TriNetX (trinetx.com)",
    url: "https://trinetx.com/",
    year: "2026",
    note: "Read November 8, 2026. Quotes: \"The Global Truth Engine for Better Human Health®\"; \"TriNetX connects healthcare organizations and researchers across the globe so they can see what's happening in real patient populations\".",
  },
  {
    id: "trinetx-live",
    title: "TriNetX LIVE™",
    publisher: "TriNetX (trinetx.com)",
    url: "https://trinetx.com/solutions/trinetx-live/",
    year: "2026",
    note: "Read November 8, 2026. Quotes: \"Assess the feasibility of your study's eligibility criteria with real-world data on millions of current patients\"; \"Easily target and engage with the healthcare organizations and sites best aligned to your study with site and PI-level insights and communication tools\"; \"NLP-extracted Facts from Clinical Notes make clinical detail queryable in TriNetX LIVE™, next to the structured EHR data for the same de-identified patients.\"",
  },
  {
    id: "trinetx-connect",
    title: "TriNetX LIVE™ Connect: clinical trials and research recruitment",
    publisher: "TriNetX (trinetx.com)",
    url: "https://trinetx.com/solutions/trinetx-live/connect/",
    year: "2026",
    note: "Read November 8, 2026. Quotes: \"TriNetX LIVE™ Connect brings sponsors, contract research organizations (CROs), and healthcare organizations (HCOs) together\"; \"allowing sponsors and CROs to invite HCOs to participate in their studies and HCOs to compliantly re-identify eligible patients and bring new treatment opportunities to the bedside.\"",
  },
  {
    id: "trinetx-premium",
    title: "TriNetX LIVE™ Premium Services",
    publisher: "TriNetX (trinetx.com)",
    url: "https://trinetx.com/solutions/trinetx-live/premium-services/",
    year: "2026",
    note: "Read November 8, 2026. Quotes: a \"Select Report with patient counts, criteria analysis, and HCO names\"; \"We use TriNetX LIVE™ Connect to send your study opportunity to selected HCOs and sites under consideration, leveraging our close relationships to drive responses. We then actively follow up with sites\".",
  },
  {
    id: "trinetx-about",
    title: "About TriNetX and contact details",
    publisher: "TriNetX (trinetx.com)",
    url: "https://trinetx.com/about/",
    year: "2026",
    note: "Read November 8, 2026. About page: \"Founded in 2013, TriNetX was built on the idea that better access to real-world data could transform research and improve patient lives.\" Contact page (https://trinetx.com/contact/): \"Worldwide headquarters 100 Cambridgepark Drive, Suite 501 Cambridge, MA 02140 USA\". A January 2025 press release says the founder started TriNetX in 2014.",
  },
  {
    id: "trinetx-elht",
    title: "East Lancashire Hospitals NHS Trust case study",
    publisher: "TriNetX (trinetx.com)",
    url: "https://trinetx.com/case-studies/east-lancashire-hospitals-nhs-trust/",
    year: "2026",
    note: "Undated case study, read November 8, 2026. Quotes: \"Patient identifiable data does not leave the Trust since the TriNetX appliance is physically hosted within ELHT's data center\"; \"the TriNetX team mapped the local coding catalogue to platform standard terminologies\".",
  },
  {
    id: "trinetx-ceo-2025",
    title: "TriNetX's Founding CEO Announces Plans to Step Down",
    publisher: "TriNetX (PR Newswire)",
    url: "https://www.prnewswire.com/in/news-releases/trinetxs-founding-ceo-announces-plans-to-step-down-302347367.html",
    year: "2025",
    note: "Press release dated January 9, 2025, read November 8, 2026. Quotes: \"Gadi founded TriNetX in 2014\"; Gadi Lachman \"will be an Advisor to Carlyle, TriNetX's majority investor.\"",
  },
  {
    id: "trinetx-clinerion-2023",
    title: "TriNetX and Clinerion Unite as TriNetX and Norstella Announce Strategic Partnership",
    publisher: "Norstella press release",
    url: "https://www.norstella.com/press-releases/trinetx-and-clinerion-unite-as-trinetx-and-norstella-announce-strategic-partnership/",
    year: "2023",
    note: "Dated April 4, 2023, read November 8, 2026. Quote: \"As part of the strategic partnership between Norstella and TriNetX, TriNetX will acquire Norstella's Clinerion subsidiary.\"",
  },
  {
    id: "palchuk-2023",
    title: "A global federated real-world data and analytics platform for research",
    publisher: "Palchuk MB, London JW, Perez-Rey D, et al. JAMIA Open 2023;6(2):ooad035 (most authors are TriNetX employees)",
    url: "https://doi.org/10.1093/jamiaopen/ooad035",
    year: "2023",
    note: "Read in full text on Europe PMC (PMC10182857), November 8, 2026. Quotes: the network's data covers \"primarily the demographics, diagnoses, procedures, medications, and laboratory results found in the HCO's electronic medical record\", expanded to include oncology-specific data; HCOs \"provide healthcare data as a de-identified, pseudo-anonymized, or limited data set\"; data \"may be acquired as discrete data elements or from natural language processing of medical notes and reports\"; industry participants \"can run queries against the entire network to capture aggregate patient counts at each HCO\" and \"cannot run queries against individual HCOs\"; \"Industry participants provide the financial resources to support, expand, and improve the technology platform in return for access to network data\"; \"HCOs incur no financial costs and receive data query, analytic, and visualization capabilities, as well as the hardware needed to execute the software\"; \"the data resides on hardware located within the HCO's data center. A cloud-hosted option is also available.\"",
  },
  {
    id: "campion-2024",
    title: "Implementation of a commercial federated network of electronic health record data to enable sponsor-initiated clinical trials at an academic medical center",
    publisher: "Campion TR, Sholle ET, Abedian S, et al. (Weill Cornell Medicine). International Journal of Medical Informatics, 2024",
    url: "https://doi.org/10.1016/j.ijmedinf.2023.105322",
    year: "2024",
    note: "Abstract read on Europe PMC, November 8, 2026. Quotes: \"TriNetX integrated into existing institutional workflows enabled 402 requests for sponsor-initiated clinical trials, 14 % (n = 56) of which local investigators expressed interest in conducting\" over a six-year period; \"measurement of impact of institutional participation in the network was challenging due to lack of a common trial identifier shared across TriNetX, sponsor, and our institution.\"",
  },
];

/** All TriNetX sources, or only the ones named. */
export function trinetxSources(...ids: string[]): Source[] {
  if (!ids.length) return TRINETX_SOURCES;
  return ids.map((id) => {
    const source = TRINETX_SOURCES.find((s) => s.id === id);
    if (!source) throw new Error(`Unknown TriNetX source: ${id}`);
    return source;
  });
}
