import type { SeoPage } from "../../types";

/**
 * Case study from Bond's October 2026 one-pager. The sponsor is not named: Rishabh was not sure the
 * sponsor may be named (Nov 11, 2026), so the page also leaves out the registry number, product name,
 * comparator vaccine and site count, any of which would identify the trial. Add them back only once
 * the sponsor has agreed. Results are Bond program data; do not round them up or extend them.
 */
const page: SeoPage = {
  path: "/case-studies/vaccine-trial-enrollment",
  category: "report",
  title: "Case study: 193 randomized in two weeks",
  description:
    "How an independent Texas research site randomized 193 patients in two weeks in a Phase 3 adult vaccine trial with Bond, twice its own recruiting rate.",
  keywords: [
    "clinical trial recruitment case study",
    "patient recruitment case study",
    "vaccine trial recruitment",
    "AI patient recruitment results",
    "research site enrollment case study",
  ],
  eyebrow: "Case study",
  h1: "193 patients randomized in two weeks at one research site",
  intro:
    "An independent research site in the Dallas–Fort Worth area joined a large pharmaceutical sponsor's Phase 3 vaccine trial in healthy adults. With Bond running recruitment, the site randomized 193 patients in two weeks, twice the enrollment it reached with its own recruiting over the same window.{{cite:bond-case-study}}",
  summary: "An independent Texas site randomized 193 patients in two weeks in a Phase 3 vaccine trial, twice its own recruiting rate.",
  lastUpdated: "2026-11-11",
  showLastUpdated: true,
  heroCta: {
    label: "Book a demo",
    href: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true",
    secondaryLabel: "See how outreach is kept safe",
    secondaryHref: "/outreach-safeguards",
  },
  sections: [
    {
      id: "results",
      heading: "What did the site achieve with Bond?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "193", label: "patients randomized in two weeks", cite: "bond-case-study" },
            { value: "2x", label: "the site's enrollment from its own recruiting over the same window", cite: "bond-case-study" },
          ],
        },
        {
          type: "p",
          text: "The comparison is with the same site, in the same study, over the same two weeks, so it isolates what Bond added rather than comparing one site with another.{{cite:bond-case-study}}",
        },
      ],
    },
    {
      id: "site-and-study",
      heading: "Who was the site, and what was the study?",
      blocks: [
        {
          type: "table",
          caption: "The site and the study",
          columns: ["", "Details"],
          rows: [
            ["Site", "Independent, women-owned clinic in the Dallas–Fort Worth area of Texas"],
            ["Experience", "More than 100 completed trials, extensive vaccine experience, a Phase I unit and multilingual staff{{cite:bond-case-study}}"],
            ["Study", "Phase 3, randomized and double-blind, run by a large pharmaceutical sponsor at sites across the United States{{cite:bond-case-study}}"],
            ["Participants", "Healthy adults"],
            ["What participants do", "One injection in the arm, then about six months in the study{{cite:bond-case-study}}"],
          ],
          note: "The sponsor and trial are not named here.",
        },
        {
          type: "p",
          text: "Healthy-volunteer vaccine studies need many participants quickly. The patients are not defined by a diagnosis buried in the chart, so the work is reaching enough eligible people, answering their questions and getting them booked before the enrollment window closes.",
        },
      ],
    },
    {
      id: "what-bond-did",
      heading: "What did Bond do at each step?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Identify",
              text: "Bond screened the site's patient database against the protocol to find people who were likely to qualify.{{cite:bond-case-study}} See [Identify](/identify).",
            },
            {
              title: "Engage and book",
              text: "Bond's voice agents called the matched patients, pre-screened them and booked their study visits.{{cite:bond-case-study}} See [Engage](/engage).",
            },
            {
              title: "Consent support",
              text: "Bond gave participants plain-language support with the consent form, with escalation to site staff for anything the agent could not answer.{{cite:bond-case-study}} See [Consent](/consent).",
            },
          ],
        },
        {
          type: "p",
          text: "Outreach followed the same rules as every Bond deployment: calls inside the calling hours Bond sets for each state, follow-ups stopped at the limit the site chose, and anyone who opted out was put on the do-not-contact list right away and never contacted again.{{cite:bond-product}} See [outreach safeguards](/outreach-safeguards).",
        },
      ],
    },
    {
      id: "why-it-worked",
      heading: "Why did the site enroll faster with Bond?",
      blocks: [
        {
          type: "ul",
          items: [
            "**It started from patients the site already had.** Bond screened the site's own patient database against the protocol, so outreach began with people the site already knew.{{cite:bond-case-study}}",
            "**The calling and booking were done for the site.** Bond's voice agents called matched patients and booked their visits, work that otherwise falls on the site's coordinators.{{cite:bond-case-study}}",
            "**Questions about consent did not stall enrollment.** Plain-language consent support answered routine questions, and anything else went to site staff.{{cite:bond-case-study}}",
          ],
        },
      ],
    },
    {
      id: "beyond-ehr",
      heading: "Is Bond only for studies that need chart review?",
      blocks: [
        {
          type: "p",
          text: "No. This study recruited healthy adults, and Bond's work was reaching and booking people quickly rather than searching notes for a diagnosis.{{cite:bond-case-study}} For studies that need patients beyond the site's own records, Bond also creates and runs Meta and Google ad campaigns, contacts every ad lead immediately and follows up until they respond.{{cite:bond-product}}",
        },
        {
          type: "p",
          text: "Bond recruits across therapeutic areas, including [oncology](/oncology), [obesity and metabolic](/obesity-and-metabolic), [cardiology](/cardiology), [neurology and Alzheimer's](/neurology-and-alzheimers), [dermatology](/dermatology), [pain](/pain), [gastroenterology](/gastroenterology), [psychiatry](/psychiatry) and vaccines. See [all therapeutic areas](/therapeutic-areas).{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "your-study",
      heading: "What should a site expect on its own study?",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "One site, one study",
          text: "These are results from one study at one site. What a site sees depends on the protocol, its patient population, how many patients it can see and the outreach rules it sets. Plan with your own dashboard numbers once a study is live.",
        },
        {
          type: "p",
          text: "Bond charges a volume-based fee per screened patient plus a percentage of the milestone payments for each randomized patient, with no integration fee, so most of the cost follows enrollment.{{cite:bond-product}} See [pricing](/pricing).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "How many patients did the site randomize with Bond?",
      a: "193 in two weeks, twice the enrollment the site reached with its own recruiting over the same window.{{cite:bond-case-study}}",
    },
    {
      q: "What kind of study was it?",
      a: "A Phase 3, randomized, double-blind vaccine trial in healthy adults, run by a large pharmaceutical sponsor at sites across the United States. Each participant received one injection and stayed in the study for about six months.{{cite:bond-case-study}}",
    },
    {
      q: "Which parts of recruitment did Bond run?",
      a: "Bond screened the site's patient database against the protocol, called matched patients with voice agents, booked their visits and gave plain-language consent support with escalation to site staff.{{cite:bond-case-study}}",
    },
  ],
  sources: [
    {
      id: "bond-case-study",
      title: "Bond Health case study: Phase 3 adult vaccine trial (one-pager)",
      publisher: "Bond Health",
      year: "2026",
      note: "October 2026. Results are Bond Health program data for one site. Study details are from the trial's public registry record; the sponsor and trial are not named here.",
    },
    {
      id: "bond-product",
      title: "Bond Health product information",
      publisher: "Bond Health",
      url: "https://bondtrials.com",
      year: "2026",
      note: "Capabilities, outreach rules, pricing and compliance status described by Bond Health, November 2026.",
    },
  ],
  related: [
    { label: "Outreach safeguards", href: "/outreach-safeguards", description: "Calling hours by state, follow-up limits and opt-outs." },
    { label: "For research sites", href: "/for/research-sites", description: "How Bond works inside an independent site." },
    { label: "Engage", href: "/engage", description: "AI voice and SMS pre-screening and follow-up." },
    { label: "For sponsors", href: "/for/sponsors", description: "What Bond adds across a sponsor's sites." },
    { label: "Pricing", href: "/pricing", description: "Per screened patient, plus a share of milestones from randomization on." },
  ],
};

export default page;
