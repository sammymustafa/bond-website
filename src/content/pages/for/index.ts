import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/for",
  category: "hub",
  title: "Who Bond Health is for",
  description:
    "Bond Health serves research sites, site networks, physician groups, FQHCs and community sites, CROs and sponsors. Pick the page that matches how you run studies.",
  keywords: ["clinical trial recruitment for sites", "recruitment technology for CROs", "sponsor enrollment technology"],
  eyebrow: "Solutions",
  h1: "Built for the people who enroll patients",
  intro:
    "The same three-stage workflow, identify, engage and consent, fits differently depending on whether you run one site, a network, a clinic that is adding research, or a portfolio of studies. Each page below starts from that organization's problems and shows what changes day to day.",
  summary: "Audience pages for sites, networks, physician groups, FQHCs, CROs and sponsors.",
  lastUpdated: "2026-09-21",
  sections: [
    {
      id: "by-audience",
      heading: "Which page describes my organization?",
      blocks: [{ type: "pageList", category: "audience" }],
    },
    {
      id: "by-area",
      heading: "Do you also cover therapeutic areas and locations?",
      blocks: [
        {
          type: "p",
          text: "Yes. Eligibility looks different in [oncology](/oncology) than in [psychiatry](/psychiatry), and the research landscape in [Texas](/clinical-trial-recruitment/texas) differs from [Utah](/clinical-trial-recruitment/utah). See all [therapeutic areas](/therapeutic-areas) and [locations](/clinical-trial-recruitment).",
        },
      ],
    },
  ],
  sources: [],
  related: [
    { label: "Therapeutic areas", href: "/therapeutic-areas", description: "How eligibility works in eight areas." },
    { label: "By location", href: "/clinical-trial-recruitment", description: "Recruiting trials and research hubs by state." },
    { label: "Book a demo", href: "/book-a-demo", description: "See Bond on your own protocol." },
  ],
};

export default page;
