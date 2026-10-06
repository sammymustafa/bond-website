import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/central-vs-site-recruitment",
  category: "blog",
  title: "Central vs site-led trial recruitment: costs and conversion",
  description:
    "What published trials show about central recruitment campaigns versus site-led recruitment, where central referrals leak, and how to run a hybrid that converts.",
  keywords: [
    "central recruitment vs site recruitment",
    "centralized patient recruitment clinical trials",
    "site-led recruitment",
    "referral handoff clinical trial sites",
    "recruitment source tracking",
  ],
  eyebrow: "Blog",
  h1: "Central recruitment campaigns versus site-led recruitment: costs and conversion",
  intro:
    "Central campaigns are good at creating interest; sites are better at turning it into screened and randomized patients, and the handoff between them is where many candidates are lost. In the A4 Alzheimer's prevention trial, one nationally syndicated newspaper column generated more than 11,000 calls, which the authors trace to more than 700 referrals to sites and more than 200 screens, while sites' own sources accounted for 45.4% of screened participants with a recorded source.{{cite:a4-raman-2021}} The practical answer for most studies is a hybrid with explicit handoff rules.",
  summary: "Evidence on central versus site-led recruitment, where central referrals leak, and the handoff rules and metrics for a hybrid model.",
  lastUpdated: "2027-01-13",
  blog: { date: "2027-01-13", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Bond for sponsors", secondaryHref: "/for/sponsors" },
  sections: [
    {
      id: "definitions",
      heading: "What is the difference between central and site-led recruitment?",
      blocks: [
        {
          type: "p",
          text: "**Central recruitment** is run by the sponsor, CRO or a coordinating center for all sites: national media, call centers, registries and study websites that pass interested people to the nearest site. **Site-led recruitment** is run by each site: its patient database and EHR, its own physicians' referrals, community outreach and local ads.",
        },
        {
          type: "p",
          text: "Both are old tools. Tufts CSDD found sponsors and CROs relied on a limited set of traditional tactics, such as physician referrals and newspaper, television and radio ads.{{cite:tufts-2013}} The question is not which one to use but how to connect them.",
        },
      ],
    },
    {
      id: "evidence",
      heading: "What does the evidence say about conversion?",
      blocks: [
        {
          type: "p",
          text: "A detailed published breakdown comes from the A4 study, which screened 5,945 cognitively unimpaired older adults at North American sites from 2014 to 2017 and used both central and local strategies.{{cite:a4-raman-2021}}",
        },
        {
          type: "table",
          caption: "Recruitment sources of screened participants in the A4 study",
          columns: ["Source", "Share of screened participants"],
          rows: [
            ["Site internal sources (databases, clinics, other studies, outreach)", "45.4%"],
            ["Earned media (news coverage, local and national)", "39.9%"],
            ["Organization referrals", "11.1%"],
            ["Paid advertising", "7.0%"],
            ["Outside physician referrals", "2.9%"],
          ],
          note: "Source data for 5,812 participants; sites could record more than one source, so shares sum to more than 100%.{{cite:a4-raman-2021}}",
        },
        {
          type: "p",
          text: "The authors found that A4's local and national advertisements appeared less effective despite greater cost, and that site-local efforts produced the majority of Black (69.2%), Hispanic (59.7%) and Asian (55.5%) participants. They tied this to trust: outreach that involves site investigators may engage communities better than paid advertising.{{cite:a4-raman-2021}}",
        },
        {
          type: "p",
          text: "National campaigns do not always lose to local ones. When the Fit & Quit trial moved from local to national recruitment, national internet ads produced 60 randomized participants at $646.45 each, cheaper per randomization than local radio at $973.76, though radio produced more (112).{{cite:perez-munoz-2022}} Channel, message and follow-up matter more than the label.",
        },
      ],
    },
    {
      id: "where-referrals-leak",
      heading: "Where do central referrals leak?",
      blocks: [
        {
          type: "p",
          text: "At the handoff. The A4 newspaper column shows the shape: more than 11,000 calls, more than 700 referrals to sites and more than 200 screens.{{cite:a4-raman-2021}} Each step depends on someone calling the patient back.",
        },
        {
          type: "p",
          text: "Trial contact points are not always responsive. In a pilot summarized in DIA's Global Forum, 133 cancer patients tried to reach trials; using the contact details on ClinicalTrials.gov, only 46 got a response, 35%. Of the 26 who received accurate next steps, 7 were successfully referred.{{cite:dia-last-mile}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "Follow-up is one of the few proven levers",
          text: "In the 2026 Cochrane review of recruitment strategies, telephone reminders to people who had not responded to a postal invitation raised recruitment by 6%, one of only five strategies backed by high-certainty evidence.{{cite:cochrane-2026}}",
        },
      ],
    },
    {
      id: "costs",
      heading: "What does each model cost, and who pays?",
      blocks: [
        {
          type: "p",
          text: "Few trials publish cost per randomized patient by central and site channels; the Cochrane review found costs reported in only 17 of 91 recruitment studies.{{cite:cochrane-2026}} The A4 authors recommend that future studies quantify site and central efforts and the cost per enrolled and randomized participant for each strategy.{{cite:a4-raman-2021}}",
        },
        {
          type: "ul",
          items: [
            "**Central:** the sponsor pays for media, call centers and websites. Sites carry the follow-up work on every referral, which needs its own budget line.",
            "**Site-led:** the site pays mainly in staff time, and its reach is limited to its own patients and community. Those patients are under-asked: in a 2026 Harris Poll for the PAN Foundation, 64% of adults with chronic conditions said a provider had never discussed trials with them, while 71% said they would be likely to participate if given the chance.{{cite:pan-2026}}",
            "**Invitations convert.** In a nationally representative 2020 survey, 9% of US adults had been invited to a trial, and 47% of those invited took part.{{cite:williams-2021}}",
          ],
        },
      ],
    },
    {
      id: "hybrid",
      heading: "How should sponsors and sites split the work?",
      blocks: [
        {
          type: "table",
          caption: "A hybrid split that keeps each side on what it does best",
          columns: ["Activity", "Central team", "Site"],
          rows: [
            ["Awareness (national media, registries)", "Owns", "Supplies local details"],
            ["Database and EHR outreach", "Funds", "Owns"],
            ["Local ads and community outreach", "Provides IRB-approved templates and budget", "Runs and adapts"],
            ["First contact with an interested patient", "Hands off immediately", "Calls the same day"],
            ["Pre-screen, scheduling and reminders", "Supports with tools", "Owns"],
            ["Source tracking to randomization", "Owns the shared dashboard", "Updates status on every referral"],
          ],
        },
        {
          type: "checklist",
          items: [
            "**Set a written contact standard** for central referrals, such as same-day first contact and a set number of follow-ups, and fund the site time it takes.",
            "**Use shared status codes** (contacted, not reached, pre-screen pass, scheduled, screened, randomized, reason lost) so neither side guesses.",
            "**Report outcomes back** to the central team weekly, so they stop buying channels that do not randomize.",
            "**Let sites run local ads** from IRB-approved templates, since in A4 site-local efforts brought in most Black, Hispanic and Asian participants.{{cite:a4-raman-2021}}",
            "**Ask your own patients first.** A site's own patients are the audience it can reach directly, and many have never been asked.{{cite:pan-2026}}",
          ],
        },
        {
          type: "p",
          text: "Site-run campaigns can also get central-style speed. Bond creates and runs Meta and Google ads for each study at the site, its voice and text agents contact every new lead immediately and keep following up with everyone who has not responded, and pre-screened patients are booked straight into the site's calendar.{{cite:bond-product}} See [Engage](/engage) for how it works.",
        },
      ],
    },
    {
      id: "metrics",
      heading: "What metrics should both sides track?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Per source:** leads, patients reached, pre-screen passes, screening visits and randomizations.",
            "**Speed:** time from lead or referral to first contact, and from first contact to screening visit.",
            "**Cost per randomized patient** by source, including site staff time on central referrals.",
            "**Reasons lost** at each step, including patients never reached.",
          ],
        },
        {
          type: "p",
          text: "The A4 authors recommend a centralized prescreening database for exactly this: evaluating outreach and screening in real time and seeing the impact of central and local efforts side by side.{{cite:a4-raman-2021}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond runs ads for each study, contacts every lead immediately and books pre-screened patients into your calendar.",
          secondaryLabel: "Bond vs media recruitment",
          secondaryHref: "/compare/bond-vs-media-recruitment",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Are central recruitment campaigns worth it?",
      a: "They can create real volume: earned media brought in 39.9% of A4's screened participants. But volume only turns into screens when sites follow up quickly; one A4 column produced more than 11,000 calls and more than 200 screens.{{cite:a4-raman-2021}}",
    },
    {
      q: "Do patients prefer hearing about trials from their own doctor?",
      a: "Provider recommendation is a strong motivator: 43% of adults with chronic conditions named it in the 2026 PAN Foundation poll.{{cite:pan-2026}} That favors site-led outreach, or central campaigns that route people quickly to a named site team.",
    },
    {
      q: "Which is cheaper per randomized patient, central or site-led?",
      a: "Published head-to-head data are scarce, and few recruitment studies report costs at all.{{cite:cochrane-2026}} Track cost per randomized patient by source for your own studies, including site staff time spent on central referrals.",
    },
  ],
  sources: [
    {
      id: "a4-raman-2021",
      title: "Disparities by Race and Ethnicity Among Adults Recruited for a Preclinical Alzheimer Disease Trial",
      publisher: "JAMA Network Open (Raman R et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8261604/",
      year: "2021",
      note: "A4 study screening data, April 2014 to December 2017, 5,945 participants at North American sites. Read October 2026. Quote: \"Centralized (by the coordinating center) and local (by the sites) recruitment strategies were employed.\" Quote: \"The most frequent sources of recruitment were through site internal sources (2636 [45.4%]) and earned media (2321 [39.9%]).\" Quote: \"Additional recruitment sources included organizational referrals (645 [11.1%]), paid advertising (405 [7.0%]) and outside referrals (168 [2.9%]).\" Quote: \"a Dear Abby column featuring the study principle investigator was particularly effective, generating more than 11 000 calls, more than 700 referrals to sites, and more than 200 screens.\" Quote: \"the A4 study ran numerous local and national advertisements that appeared to be less effective despite greater cost.\" Quote: \"site local recruitment efforts resulted in the majority of Black (218 [69.2%]), Hispanic (154 [59.7%]), and Asian (61 [55.5%]) participants.\" Table 4: \"Quantify site and central recruitment efforts and costs\" and \"Establish centralized prescreening databases\".",
    },
    {
      id: "perez-munoz-2022",
      title: "Recruitment strategies for a post cessation weight management trial: A comparison of strategy cost-effectiveness and sample diversity",
      publisher: "Contemporary Clinical Trials Communications (Pérez-Muñoz A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9661419/",
      year: "2022",
      note: "Fit & Quit trial, 305 randomized. Read October 2026. Quote: \"The study initially recruited participants locally in the Memphis, TN area and later transitioned to national recruitment\". Quote: \"Internet advertisement resulted in the second most successful recruitment method (19.7%, n = 60) and was found to be less expensive ($38,787.00; 16.2% of direct costs) and more cost effective than radio advertisements ($646.45 and $973.76 per participant, respectively).\" Radio: n = 112.",
    },
    {
      id: "dia-last-mile",
      title: "Documenting the \"Last Mile\" Leak in the Patient Recruitment Pipeline",
      publisher: "DIA Global Forum (Ralic, Monreal, Vieyra of Ancora.ai; Ford, Getz of Tufts CSDD)",
      url: "https://globalforum.diaglobal.org/issue/september-2024/documenting-the-last-mile-leak-in-the-patient-recruitment-pipeline/",
      year: "2024",
      note: "Pilot study, 133 cancer patients. Read October 2026. Quote: \"Out of the 133 cancer patients that Ancora.ai supported, only 46 received a response when using contact information provided on ClinicalTrials.gov, yielding a 35% response rate.\" Quote: \"when patients received a response with accurate information on next steps, only 7 out of the 26 interested patients (or 27%) were successfully referred to a clinical trial.\"",
    },
    {
      id: "cochrane-2026",
      title: "Strategies to improve recruitment to randomised trials",
      publisher: "Cochrane Database of Systematic Reviews (Parker A et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/42742038/",
      year: "2026",
      note: "Abstract read October 2026. Quote: \"Only five strategies were supported by high-certainty evidence\". Quote: \"Telephone reminders to people who did not respond to an initial postal invitation boosted recruitment by 6% (95% CI 3% to 9%; 2 studies, 1450 participants), in trials with low underlying recruitment\". Quote: \"Costs were reported in only 17 of 91 studies.\"",
    },
    {
      id: "tufts-2013",
      title: "New Research From Tufts Center for the Study of Drug Development Characterizes Effectiveness and Variability of Patient Recruitment and Retention Practices",
      publisher: "Tufts CSDD press release via BioSpace",
      url: "https://www.biospace.com/new-research-from-tufts-center-for-the-study-of-drug-development-characterizes-effectiveness-and-variability-of-patient-recruitment-and-retention-prac",
      year: "2013",
      note: "Released January 15, 2013. Read October 2026. Quote: \"most drugs sponsors and contract research organizations rely on a limited number of traditional recruitment and retention tactics, such as physician referrals and newspaper, television, and radio ads, and have yet to embrace non-traditional approaches, including social media.\"",
    },
    {
      id: "pan-2026",
      title: "PAN Rapid Poll: Clinical Trials Among Adults Living with Chronic Conditions (April 2026)",
      publisher: "PAN Foundation (survey conducted by The Harris Poll)",
      url: "https://clinicaltrials.panfoundation.org/wp-content/uploads/2026/05/Clinical-Trials-Patient-Interest-and-Access-2026-National-Polling.pdf",
      year: "2026",
      note: "Online survey April 9-13, 2026, 2,041 US adults including 1,322 with a chronic condition. Read October 2026. Quote: \"Nearly 2 in 3 adults with chronic conditions (64%) say that their provider has never discussed clinical trials with them, yet 7 in 10 (71%) say they would be likely to participate if given the opportunity.\" Quote: \"led by compensation (52%), clear risk/benefit information (46%), and provider recommendation (43%).\"",
    },
    {
      id: "williams-2021",
      title: "Demographic and Health Behavior Factors Associated With Clinical Trial Invitation and Participation in the United States",
      publisher: "JAMA Network Open (Williams CP et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/34586365/",
      year: "2021",
      note: "HINTS 2020, 3,689 US adults, weighted. Abstract read October 2026. Quote: \"Overall, 439 respondents (9%) had been invited to participate in any clinical trial.\" Quote: \"Of invited respondents, 199 (47%) participated.\"",
    },
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
    { label: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment", description: "Paying for leads versus paying for outcomes." },
    { label: "Bond for sponsors", href: "/for/sponsors", description: "How sponsors use Bond across their sites." },
    { label: "Bond for site networks", href: "/for/site-networks", description: "Running recruitment across several sites." },
    { label: "Engage: ads, voice and text outreach", href: "/engage", description: "How Bond runs study ads and contacts every lead immediately." },
  ],
};

export default page;
