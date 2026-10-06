import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/researchmatch-and-registries",
  category: "blog",
  title: "ResearchMatch and volunteer registries: what the data show",
  description:
    "How ResearchMatch and other volunteer registries work, how many contacts become participants, what they cost, who is missing, and how sites should use them.",
  keywords: [
    "ResearchMatch clinical trial recruitment",
    "volunteer registry trial recruitment",
    "research registry enrollment rate",
    "Brain Health Registry referrals",
  ],
  eyebrow: "Blog",
  h1: "What volunteer registries like ResearchMatch add to trial recruitment, by the numbers",
  intro:
    "Volunteer registries give a site a list of people who have already said yes to research. The published data show they are cheap per enrollee for studies that fit their volunteers, convert poorly into in-clinic drug trials, skew toward White, female and college-educated volunteers, and pay off only when someone follows up quickly. Here is what ResearchMatch and other registries report, and how to use them.",
  summary: "How ResearchMatch and other registries work, their published conversion and cost data, who they miss, and how sites should use them.",
  lastUpdated: "2027-01-18",
  blog: { date: "2027-01-18", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Bond for research sites", secondaryHref: "/for/research-sites" },
  sections: [
    {
      id: "how-researchmatch-works",
      heading: "How does ResearchMatch work, and who can use it?",
      blocks: [
        {
          type: "p",
          text: "ResearchMatch is a nonprofit program funded by the National Institutes of Health. In October 2026 its home page showed 120,102 volunteers, 18,779 researchers, 1,412 studies and 284 institutions.{{cite:rm-home}}",
        },
        {
          type: "ul",
          items: [
            "**Who can search it.** Only researchers at participating sites may register, and invitations to join the network are limited to nonprofit sites.{{cite:rm-faq,rm-institutions}}",
            "**What contact needs.** Recruitment access requires IRB approval and an IRB-approved contact message. Researchers can message up to 1,500 volunteers at a time.{{cite:rm-faq}}",
            "**How volunteers respond.** Each volunteer can reply yes, no or not at all, and only a yes releases contact details to the study team.{{cite:rm-faq}}",
            "**Cost.** It is free for volunteers and for participating institutions and their researchers.{{cite:rm-faq}}",
          ],
        },
        {
          type: "p",
          text: "Sites outside the network can still hear from volunteers. Its \"Send My Information\" tool lets volunteers express interest in studies not registered on ResearchMatch, including industry-sponsored trials at nonacademic sites. In its first two years volunteers sent 12,251 requests, each of which had to be accepted within 14 days, and on average 20% were accepted, producing 2,399 connections.{{cite:dunkel-2022}}",
        },
      ],
    },
    {
      id: "conversion",
      heading: "How many registry contacts become participants?",
      blocks: [
        {
          type: "p",
          text: "Interest is high; enrollment into in-clinic trials is low. In ResearchMatch's first 19 months, researchers sent 68,673 emails to 13,462 volunteers, and about one in five contacted volunteers expressed interest. Known enrollment was 1,841 overall, and 83 across the 299 studies labeled clinical trials.{{cite:harris-2012}} Reporting enrollment was voluntary, so the authors call these figures a very conservative estimate.",
        },
        {
          type: "table",
          caption: "Published registry funnels",
          columns: ["Registry and study", "Referred or contacted", "Enrolled"],
          rows: [
            ["ResearchMatch, studies labeled clinical trials, 2009 to 2011", "16,207 contacted; 1,987 interested", "83 known{{cite:harris-2012}}"],
            ["Brain Health Registry, all referral programs", "259,142 referred; 19% responded", "25,997 (10%){{cite:weiner-2023}}"],
            ["Brain Health Registry to ADNI3, an in-clinic study", "16,153 referred", "82 (1%)"],
            ["Brain Health Registry to the A4 prevention trial", "1,212 referred", "11 (1%)"],
            ["GeneMatch to one Kentucky site", "250 invited; 86 passed to the site", "19 in the interventional phase{{cite:bardach-2021}}"],
          ],
        },
        {
          type: "p",
          text: "The registries' own data have gaps. The Brain Health Registry team writes that without data linkage it is not possible to quantify the success of referrals, and that industry-sponsored trial protocols often prevent release of any protected health information back to the registry.{{cite:weiner-2023}} The Kentucky site found that 60% of its GeneMatch referrals (52 of 86) had no prior contact with the site, so the registry reached new people.{{cite:bardach-2021}}",
        },
        {
          type: "p",
          text: "Registry size also overstates the reachable pool. As of December 1, 2019, the Alzheimer's Prevention Registry had 346,661 members, of whom 86,175 were considered actively engaged. Its team notes that some profiles may be out of date and that a person may join more than once with different email addresses, and it urges sites and sponsors to pre-screen referrals.{{cite:langbaum-2020}} Ask any registry how many members opened a message recently, not just how many signed up.",
        },
      ],
    },
    {
      id: "cost-and-channels",
      heading: "How do registries compare with other channels on cost and yield?",
      blocks: [
        {
          type: "table",
          caption: "Studies that compared ResearchMatch with other channels",
          columns: ["Study", "ResearchMatch result", "Comparison"],
          rows: [
            ["Remote smoking-cessation trial, 2017 to 2019", "356 enrolled; $12.47 per enrolled and $17.48 per retained; 71% retained{{cite:faro-2021}}", "Facebook ads: 505 enrolled; $68.75 per enrolled and $173.60 per retained; 40% retained"],
            ["Survey of women at high risk of breast cancer, 2020 to 2021", "11% of 646 respondents eligible; $52.56 per eligible participant{{cite:conley-2024}}", "Facebook: $9.84 per eligible participant"],
            ["Bronx diet trial to reduce dementia risk", "68 calls led to 27 randomized, 9.3% of the total{{cite:katz-2025}}", "EHR clinic lists: 16,271 calls led to 188 randomized, 64.8% of the total"],
          ],
          note: "Costs are mostly staff time; ResearchMatch charges no fee to participating institutions.{{cite:faro-2021,conley-2024}}",
        },
        {
          type: "p",
          text: "The pattern is consistent. Registry volunteers who fit a study are cheap to enroll and stay enrolled, but the work shifts to staff: the smoking-cessation team found ResearchMatch required the most personnel time, to sift through candidates, send emails and make follow-up calls.{{cite:faro-2021}} Broad registries also cannot target narrowly; the breast cancer team could filter only on age range and medical conditions.{{cite:conley-2024}} And for volume, the diet trial relied on EHR lists, while the registry added efficient extras.{{cite:katz-2025}}",
        },
      ],
    },
    {
      id: "who-is-missing",
      heading: "Who is in volunteer registries, and who is missing?",
      blocks: [
        {
          type: "p",
          text: "Registry volunteers are not a cross-section of patients. In 2012, ResearchMatch volunteers were 81.2% White against 75.1% of the US population, 9.9% African American against 12.3%, 4.7% Hispanic or Latino against 12.5%, and 72.7% female against 50.9%.{{cite:harris-2012}} In the Brain Health Registry, 61.6% of participants reported a four-year college degree or higher and 4.6% identified as Black or African American.{{cite:weiner-2023}} At the Kentucky GeneMatch site, everyone who enrolled in the disclosure phase was non-Hispanic White.{{cite:bardach-2021}}",
        },
        {
          type: "p",
          text: "Online pools carry a newer risk too. When one team contacted 63,284 ResearchMatch accounts for a survey of young, low-income parents, about 46% of the 928 responses were judged fraudulent.{{cite:pageau-2025}} That was a paid online survey, the case most exposed to bots, but it argues for confirming identity on a phone pre-screen before booking a visit.",
        },
      ],
    },
    {
      id: "how-to-use",
      heading: "How should a site use volunteer registries?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Check access first",
              text: "Confirm your institution participates in ResearchMatch and get IRB approval for the contact message before you plan around it. For-profit sites should plan to respond to volunteer-initiated requests instead.",
            },
            {
              title: "Filter as tightly as the registry allows",
              text: "Use age, conditions and medications to cut the list, then pre-screen by phone for the criteria a profile cannot hold.",
            },
            {
              title: "Answer within a day",
              text: "Volunteer requests through ResearchMatch expire after 14 days, and the tool's authors note that rapid follow-up builds rapport and trust.{{cite:dunkel-2022}}",
            },
            {
              title: "Track the funnel by source",
              text: "Count contacted, interested, pre-screened, screened and enrolled for each registry, and report outcomes back where the protocol allows.",
            },
            {
              title: "Pair registries with your own patients",
              text: "Registries add motivated volunteers but skew in who they reach. Use EHR outreach and community channels to reach the patients they miss.",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's [Identify](/identify) stage finds candidates among a site's own patients by reading EHR records against each criterion, with criterion-by-criterion evidence. Its [Engage](/engage) stage runs Meta and Google ads for each study and contacts every new ad lead immediately, following up until they respond, then pre-screens and books visits.{{cite:bond-site,bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring an enrolling study. We will show how Bond finds candidates in your EHR and follows up with every ad lead.",
          secondaryLabel: "Bond for research sites",
          secondaryHref: "/for/research-sites",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can an industry sponsor or for-profit site use ResearchMatch?",
      a: "Only researchers at participating sites can register, and invitations to join are limited to nonprofit sites.{{cite:rm-faq,rm-institutions}} Volunteers can still send their information to studies not registered on ResearchMatch, including industry-sponsored trials at nonacademic sites.{{cite:dunkel-2022}}",
    },
    {
      q: "Does a site need IRB approval to use ResearchMatch?",
      a: "Not to register: ResearchMatch says researchers do not need IRB approval to sign up. Recruitment access, which lets a team search for and contact volunteers, requires IRB approval and an IRB-approved contact message.{{cite:rm-faq}}",
    },
    {
      q: "What share of registry volunteers enroll in a trial?",
      a: "Published figures are low for in-clinic trials: about 1% of Brain Health Registry referrals enrolled in ADNI3 and in the A4 trial, against 10% across all its referral programs.{{cite:weiner-2023}}",
    },
  ],
  sources: [
    {
      id: "rm-home",
      title: "ResearchMatch home page",
      publisher: "ResearchMatch (Vanderbilt University Medical Center)",
      url: "https://www.researchmatch.org/",
      year: "2026",
      note: "Read October 2026; the counters carry no as-of date. Quotes: \"Volunteers 120,102 Researchers 18,779 Studies 1,412 Institutions 284\"; \"ResearchMatch is a nonprofit program funded by the National Institutes of Health (NIH).\" Earlier published counts were higher: 154,906 volunteers as of July 2021 (Dunkel et al. 2022); the site gives no reason for the change.",
    },
    {
      id: "rm-faq",
      title: "ResearchMatch Researcher FAQ",
      publisher: "ResearchMatch (Vanderbilt University Medical Center)",
      url: "https://www.researchmatch.org/researchers/faq",
      year: "2026",
      note: "Read October 2026. Quotes: \"Only researchers at participating sites are allowed to register with ResearchMatch.\"; \"In order to have recruitment access, you will need IRB approval and an IRB approved contact message when you are ready to search for and contact Volunteers.\"; \"they will have the option of replying Yes, No, or not responding\"; \"ResearchMatch will let you contact up to 1,500 Volunteers at a time.\"; \"ResearchMatch is a nonprofit activity and is free for volunteers, and any participating institution and their researchers.\"; \"Currently, ResearchMatch Volunteers are not able to search for studies that are registered in ResearchMatch.\" The Researchers page (researchmatch.org/researchers/) adds: \"You do not need IRB approval to register.\" and calls ResearchMatch \"a free participant recruitment and feasibility analysis tool for researchers at participating institutions\".",
    },
    {
      id: "rm-institutions",
      title: "ResearchMatch Institutions FAQ",
      publisher: "ResearchMatch (Vanderbilt University Medical Center)",
      url: "https://www.researchmatch.org/network/institutions/faq",
      year: "2026",
      note: "Read October 2026. Quote: \"Currently, invitations to participate in ResearchMatch are limited to only those sites that are nonprofit.\"",
    },
    {
      id: "dunkel-2022",
      title: "\"Send My Information\": Increasing public accessibility to clinical trials by facilitating participant expression of interest",
      publisher: "Journal of Clinical and Translational Science (Dunkel L et al., Vanderbilt University Medical Center), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8922290/",
      year: "2022",
      note: "Written by the ResearchMatch team. Quotes: \"Within the first 2 years of use (July 2019–July 2021), ResearchMatch Volunteers sent 12,251 requests to study teams. On average, 20% of these requests were accepted by the study teams.\"; \"This request must be accepted within 14 days.\"; \"the SMI tool provided 2399 successful initial connections\"; \"express interest in studies which may not be registered on the ResearchMatch platform such as industry sponsored trials occurring at nonacademic research institutions\"; \"Ideally, rapid follow-up will improve the potential to establish rapport and trust between study teams and the Volunteer.\"",
    },
    {
      id: "harris-2012",
      title: "ResearchMatch: A National Registry to Recruit Volunteers for Clinical Research",
      publisher: "Academic Medicine (Harris PA et al., Vanderbilt), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3688834/",
      year: "2012",
      note: "Written by the registry's developers; November 2009 to June 2011. Quotes: \"researchers sent 68,673 e-mails to 13,462 volunteers\"; \"approximately one of every five contacted volunteers expressing interest\"; \"whites are overrepresented (81.2% ResearchMatch versus 75.1% U.S.), while African Americans (9.9% versus 12.3%) and Hispanic/Latinos (4.7% versus 12.5%) are underrepresented\"; \"females are clearly overrepresented (72.7% versus 50.9%)\"; \"we ask but do not require researchers to let us know when ResearchMatch volunteers are enrolled\". Table 2: Clinical trials 299 studies, 16,207 contacted, 1,987 interested, 83 enrolled; Total 540 studies, 68,673, 12,991, 1,841. Study-type categories overlap.",
    },
    {
      id: "weiner-2023",
      title: "Brain health registry updates: An online longitudinal neuroscience platform",
      publisher: "Alzheimer's & Dementia (Weiner MW et al., UCSF), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10518371/",
      year: "2023",
      note: "Written by the registry team. Table 4 rows: \"Total 259142 50249 19% 25997 10%\"; ADNI3 \"16153 3033 19% 82 1%\"; A4 \"1212 297 25% 11 1%\". Quotes: \"without such linkage it’s not possible to quantify the success of the referral program\"; \"especially for industry-sponsored randomized clinical trials, the protocol prevents release of any Protected Health Information to an outside source\"; \"4191 (4.6%) identifed as Black or African American, 55,854 (61.6%) of participants reported a 4-year college degree or higher\".",
    },
    {
      id: "bardach-2021",
      title: "Real-world site experiences with GeneMatch: The role of a recruitment-related registry in the context of local site effort to support Alzheimer's disease prevention research",
      publisher: "Alzheimer Disease & Associated Disorders (Bardach SH et al., University of Kentucky), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8137512/",
      year: "2021",
      note: "One site, one prevention program; a GeneMatch (Banner) author is a co-author. Quotes: \"147 (58.8%) never responded to their invitation. Ultimately, 91 (36.4%) agreed to have their information passed on to the site, and 86 of those individuals were passed on to the site\"; \"ultimately 19 enrolled in the interventional portion of the Generation Program\"; \"The majority of referrals (52/86, 60.47%) did not have prior contact with the site\"; \"all individuals who enrolled in the initial disclosure portion of the Generation Program were non-Hispanic, White.\" GeneMatch invited 250 of 1,415 Kentucky enrollees.",
    },
    {
      id: "faro-2021",
      title: "Comparing recruitment strategies for a digital smoking cessation intervention: Technology-assisted peer recruitment, social media, ResearchMatch, and smokefree.gov",
      publisher: "Contemporary Clinical Trials (Faro JM et al., University of Massachusetts Medical School), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8089044/",
      year: "2021",
      note: "Remote digital intervention, not a site-based drug trial; enrollment August 2017 to March 2019. Table 4: \"Facebook Ad 505 $68.75 200 40% $173.60\"; \"ResearchMatch 356 $12.47 254 71% $17.48\"; costs \"Based on research assistants time and salary ... Includes start-up cost of the ads/platforms.\" Quote: \"ResearchMatch was also very cost-effective. However, it required the most personnel time to sift through potentially eligible participants, send emails and conduct follow-up phone calls.\" The abstract gives ResearchMatch retention as 70%; the table gives 71%.",
    },
    {
      id: "conley-2024",
      title: "Strategies for Identifying and Recruiting Women at High Risk for Breast Cancer for Research Outside of Clinical Settings: Observational Study",
      publisher: "Journal of Medical Internet Research (Conley CC et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11406107/",
      year: "2024",
      note: "Observational survey study; recruitment August 2020 to January 2021. Quotes: \"ResearchMatch had the lowest proportion of eligible respondents (73/646, 11%)\"; \"ResearchMatch did not allow us to focus on users with specific interests; we were able to specify only the age range and medical conditions of the participants.\" Cost table: Facebook cost per eligible participant 9.84; ResearchMatch 52.56 (direct cost 0.00).",
    },
    {
      id: "katz-2025",
      title: "Recruitment of mid-life adults to a randomized clinical trial: The multicultural healthy diet study to reduce cognitive decline and Alzheimer's disease risk",
      publisher: "Alzheimer's & Dementia: Translational Research & Clinical Interventions (Katz MJ et al., Albert Einstein College of Medicine), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12617438/",
      year: "2025",
      note: "Table 2 (calls made, calls completed, enrolled, randomized, % of total randomized): \"Montefiore EHR clinics 16,271 671 248 188 64.8\"; \"Online registry: Research match 68 64 36 27 9.3\". Quote: \"Online registries (e.g., ResearchMatch) and outreach activities yielded efficient enrollment.\"",
    },
    {
      id: "langbaum-2020",
      title: "The Alzheimer's Prevention Registry: a large internet-based participant recruitment registry to accelerate referrals to Alzheimer's-focused studies",
      publisher: "Journal of Prevention of Alzheimer's Disease (Langbaum JB et al., Banner Alzheimer's Institute), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7534299/",
      year: "2020",
      note: "Written by the registry team. Quotes: \"As of December 1, 2019, 346,661 individuals had joined the APR.\"; \"As of December 1, 2019, 86,175 people were considered \u201cactively engaged\u201d members of the APR.\"; \"some members\u2019 profiles may be inaccurate and there may be cases in which a person joins the APR more than once using different email addresses\"; \"emphasizes to study sites and sponsors the importance of prescreening\"; \"only anecdotal data about APR member enrollment into in-person studies is available.\"",
    },
    {
      id: "pageau-2025",
      title: "Improving data credibility in online recruitment: Signs and strategies for detecting fraudulent participants when using ResearchMatch",
      publisher: "Contemporary Clinical Trials (Pageau LM, Ling J; Michigan State University)",
      url: "https://pubmed.ncbi.nlm.nih.gov/40300714/",
      year: "2025",
      note: "Abstract read via PubMed; online survey. Quotes: \"We contacted 63,284 accounts through ResearchMatch and received 928 survey responses. About 46 % (n = 425) of responses were deemed fraudulent.\"",
    },
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
  ],
  related: [
    { label: "Bond for research sites", href: "/for/research-sites", description: "How Bond fits a site's recruitment workflow and staff." },
    { label: "Using the EHR for recruitment", href: "/guides/ehr-for-recruitment", description: "Finding candidates among a site's own patients." },
    { label: "Engage: ads, outreach and booking", href: "/engage", description: "How Bond runs study ads and follows up with every lead." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A template for the phone pre-screen after a registry lead." },
  ],
};

export default page;
