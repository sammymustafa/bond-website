import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/rural-patients-trial-access",
  category: "blog",
  title: "Rural patients and clinical trial access: what helps",
  description:
    "One in five Americans is rural, but trial sites cluster in cities. Data on distance, invitations and enrollment, and the FDA-backed options that cut travel.",
  keywords: [
    "rural patients clinical trial access",
    "rural clinical trial enrollment",
    "travel distance clinical trial sites",
    "decentralized clinical trials rural patients",
  ],
  eyebrow: "Blog",
  h1: "Rural patients and clinical trials: distance, data and approaches that help",
  intro:
    "One in five Americans lived in a rural area in 2020, by the Census Bureau's definition.{{cite:census-rural-2020}} Rural adults are less likely to be invited to a trial, yet in a large set of cancer trials, rural patients enrolled in proportion to their share of US cancer patients.{{cite:hints-2021,unger-2018}} The problem is mainly access, so most of the fixes are logistics.",
  summary: "How many Americans are rural, how far they are from trial sites, whether they are asked, and the FDA-backed options that reduce travel.",
  lastUpdated: "2026-11-18",
  blog: { date: "2026-11-18", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See how Engage works", secondaryHref: "/engage" },
  sections: [
    {
      id: "how-many-rural",
      heading: "How many Americans live in rural areas?",
      blocks: [
        {
          type: "p",
          text: "The 2020 Census counted 80.0% of the US population in urban areas and 20.0% in rural areas, meaning anywhere outside an urban area. An urban area must have at least 2,000 housing units or 5,000 people. The rural share rose from 19.3% in 2010 mostly because the Census Bureau changed its criteria, not because people moved.{{cite:census-rural-2020}}",
        },
        {
          type: "p",
          text: "Studies of trial access usually use USDA's rural-urban codes instead, which classify counties or census tracts. Rural shares from different studies are therefore not directly comparable.{{cite:unger-2018,shriver-2025}}",
        },
      ],
    },
    {
      id: "distance",
      heading: "How far are rural patients from trial sites?",
      blocks: [
        {
          type: "p",
          text: "Research infrastructure is concentrated in cities. A 2025 geospatial study found that over 97% of NCI-designated cancer center and NCI Community Oncology Research Program (NCORP) facilities sit in urban-core census tracts, against 85% of cancer programs accredited by the Commission on Cancer.{{cite:shriver-2025}}",
        },
        {
          type: "stats",
          items: [
            { value: "~17%", label: "US residents over 35 who would drive more than 100 miles to an NCI-funded site", cite: "shriver-2025" },
            { value: "1.6%", label: "Who would drive that far once Commission on Cancer-accredited programs are added", cite: "shriver-2025" },
            { value: "58.3 mi", label: "Median one-way trip for UCSF trial enrollees from lower-income areas, vs 17.8 miles from higher-income areas", cite: "borno-2018" },
          ],
        },
        {
          type: "p",
          text: "The UCSF figures come from 1,600 patients enrolled in breast, genitourinary or gastrointestinal cancer trials from 1993 to 2014 at one center. Their median one-way trip was 25.8 miles, and phase 1 enrollees traveled furthest, at a median of 41.2 miles.{{cite:borno-2018}} The lesson for sites: the patients a trial reaches depend heavily on where its sites are.",
        },
      ],
    },
    {
      id: "are-they-asked",
      heading: "Are rural patients asked to join trials?",
      blocks: [
        {
          type: "p",
          text: "Less often. In a nationally representative 2020 survey of 3,689 US adults, 9% said they had ever been invited to a clinical trial. Rural respondents had lower adjusted odds of being invited than urban respondents (adjusted odds ratio 0.33). Of those who were invited, 47% took part.{{cite:hints-2021}}",
        },
        {
          type: "p",
          text: "The same survey found health care providers were the most trusted source of information about clinical trials, named by 70% of respondents.{{cite:hints-2021}} For many rural patients, that means a local primary care doctor or community hospital, not the academic center running the trial.",
        },
      ],
    },
    {
      id: "do-they-enroll",
      heading: "Do rural patients enroll when trials reach them?",
      blocks: [
        {
          type: "p",
          text: "Yes. In 36,995 patients from all 50 states enrolled in 44 SWOG phase 3 and phase 2/3 cancer treatment trials from 1986 to 2012, 19.4% lived in rural areas, the same as the rural share of US patients with cancer. Rural and urban patients had similar survival in nearly all comparisons.{{cite:unger-2018}}",
        },
        {
          type: "p",
          text: "Decentralized trials can reach rural patients too. The Veterans Health Administration's cancer decentralized trial program enrolled 134 veterans across 47 VA medical centers in 10 trials, and 31% of them were rural, mirroring veterans served by the VA's national teleoncology service. The authors caution that not every trial can be run this way.{{cite:friedman-2026}}",
        },
      ],
    },
    {
      id: "recent-programs",
      heading: "What have recent rural programs learned?",
      blocks: [
        {
          type: "p",
          text: "Patients name practical barriers first. In five focus groups with 30 residents of rural Florida counties, including cancer survivors, caregivers and people in treatment, the common barriers were unreliable transportation, financial concerns and mistrust of medical professionals and health systems. The authors recommend navigator-led outreach and presenting trials as part of routine care.{{cite:tagurum-2026}}",
        },
        {
          type: "p",
          text: "Community hospitals can take on more than referrals. UNC's Lineberger Comprehensive Cancer Center worked with nine North Carolina community hospitals that had no formal research network agreements to plan hybrid decentralized trials. Within 3 months, seven had begun planning, five were referring patients and two had enrolled patients. The visits also turned up local resources, such as patient transportation and tailored education materials, that the trials could use. The authors note that in 2022, 75% of US counties had no active cancer treatment trials.{{cite:morrison-2026}}",
        },
      ],
    },
    {
      id: "what-fda-allows",
      heading: "What does FDA guidance allow to cut travel?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Decentralized elements.** FDA's September 2024 final guidance covers telehealth visits, in-home visits by trial staff and visits with local health care providers. It notes that outreach through local pharmacies and clinics can help where there are few traditional sites, and that drugs with good stability are best suited to direct shipment to a participant's home.{{cite:fda-dct-2024}}",
            "**Fewer and closer visits.** FDA's December 2025 guidance recommends cutting visits to those needed for safety and efficacy, allowing flexible visit windows, and sending mobile nurses or phlebotomists to participants instead of requiring trips to distant sites.{{cite:fda-enhancing-2025}}",
            "**Travel costs.** The same guidance says FDA does not consider reimbursement for reasonable travel, parking and lodging to raise undue-influence concerns, and recommends telling participants about reimbursement during recruitment.{{cite:fda-enhancing-2025}}",
          ],
        },
        {
          type: "p",
          text: "Plan for connectivity, too. In Pew Research Center's 2025 survey, 71% of rural adults had home broadband, against 84% of suburban adults, and 20% of rural adults had a smartphone but no home broadband.{{cite:pew-broadband-2025}} A video-only step will miss some patients; phone calls and text messages reach more of them.",
        },
      ],
    },
    {
      id: "what-to-do",
      heading: "What can a site or sponsor do this month?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Map how far eligible patients live from the site before answering feasibility, and flag the share beyond a reasonable drive.",
            "Ask the sponsor which visits can move to telehealth, home visits, local labs or local health care providers, and get it into the protocol before activation.{{cite:fda-dct-2024}}",
            "Budget travel and lodging reimbursement in the clinical trial agreement and tell patients about it on the first call.{{cite:fda-enhancing-2025}}",
            "Build referral routes with rural primary care practices and community hospitals, since patients trust their own providers most, and ask what they already offer, such as transportation programs or navigators.{{cite:hints-2021,morrison-2026}}",
            "Combine procedures into fewer, longer visits where the protocol allows.",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's voice and text agents can pre-screen a patient and book a visit in one call, and its Meta and Google campaigns reach people outside a site's records. After enrollment, the same agents send visit reminders and book transportation.{{cite:bond-product}} See [Engage](/engage).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What counts as rural?",
      a: "For the Census Bureau, rural is any area outside an urban area, and an urban area needs at least 2,000 housing units or 5,000 people. Research studies often use USDA's rural-urban codes instead.{{cite:census-rural-2020,unger-2018}}",
    },
    {
      q: "Is reimbursing travel an undue influence?",
      a: "FDA says it does not consider reimbursement for reasonable travel to and from the site, parking and lodging to raise issues of undue influence.{{cite:fda-enhancing-2025}} Payment for participation itself is reviewed by the IRB.",
    },
    {
      q: "Are rural patients less willing to join trials?",
      a: "The evidence points to access rather than willingness. In SWOG cancer trials, rural patients enrolled in proportion to their share of US cancer patients.{{cite:unger-2018}}",
    },
  ],
  sources: [
    {
      id: "census-rural-2020",
      title: "Urban and Rural Populations Shift Following 2020 Census (press release CB22-CN.25)",
      publisher: "US Census Bureau",
      url: "https://www.census.gov/newsroom/press-releases/2022/urban-rural-populations.html",
      year: "2022",
      note: "December 29, 2022. Quotes: \"urban areas ... now account for 80.0% of the U.S. population, down from 80.7% in 2010\"; \"The rural population — the population in any areas outside of those classified as urban — increased as a percentage of the national population from 19.3% in 2010 to 20.0% in 2020. This is not a sign of substantial urban to rural migration\"; \"The minimum population threshold to qualify as urban increased from 2,500 to 5,000 or a minimum housing unit threshold of 2,000 housing units.\"",
    },
    {
      id: "shriver-2025",
      title: "Assessing populations with access to National Cancer Institute-funded sites using local distance-based service areas",
      publisher: "Journal of Clinical and Translational Science (Shriver SP et al., American Cancer Society Cancer Action Network), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12529631/",
      year: "2025",
      note: "Geospatial analysis using consolidated USDA RUCA codes at census-tract level. Quotes: \"Nearly 17% of the US population over 35 years old would have to drive over 100 miles to obtain care at an NCI-funded site; only 1.6% would be beyond that distance when non-funded sites are added.\"; \"Over 97% of NCICC + NCORP facilities are in cRUCA-1. In comparison, 85% of CoC facilities are in cRUCA-1.\" cRUCA-1 is \"Urban Core\".",
    },
    {
      id: "borno-2018",
      title: "At What Cost to Clinical Trial Enrollment? A Retrospective Study of Patient Travel Burden in Cancer Clinical Trials",
      publisher: "The Oncologist (Borno HT et al., UCSF)",
      url: "https://pubmed.ncbi.nlm.nih.gov/29700209/",
      year: "2018",
      note: "Single center, 1993 to 2014. Quotes: \"A total of 1,600 patients were enrolled in breast (55.8%), genitourinary (29.4%), or gastrointestinal (14.9%) cancer CTs. The overall median unidirectional distance traveled from home to study site was 25.8 miles\"; \"Phase I (8.4%) studies had the longest distance traveled, with a median of 41.2 miles\"; \"Patients from lower-income areas (n = 799) traveled longer distances compared with patients from higher-income areas (n = 773; 58.3 vs. 17.8 miles, respectively; p < .001).\"",
    },
    {
      id: "hints-2021",
      title: "Demographic and Health Behavior Factors Associated With Clinical Trial Invitation and Participation in the United States",
      publisher: "JAMA Network Open (Williams CP et al., NCI)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34586365/",
      year: "2021",
      note: "HINTS, February to June 2020, 3,689 US adults, self-reported. Quotes: \"Overall, 439 respondents (9%) had been invited to participate in any clinical trial.\"; \"Respondents residing in rural vs urban areas had 77% decreased odds of invitation to a clinical trial (aOR 0.33; 95% CI 0.17-0.65). Of invited respondents, 199 (47%) participated.\"; \"most trusted source: 2597 [70%]\". The page reports the aOR rather than the abstract's \"77% decreased odds\" wording.",
    },
    {
      id: "unger-2018",
      title: "Geographic Distribution and Survival Outcomes for Rural Patients With Cancer Treated in Clinical Trials",
      publisher: "JAMA Network Open (Unger JM et al., SWOG), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6324281/",
      year: "2018",
      note: "Rurality defined by USDA Rural-Urban Continuum Codes. Quotes: \"36 995 patients from all 50 states enrolled in 44 phase 3 and phase 2/3 SWOG ... treatment trials from January 1, 1986, to December 31, 2012\"; \"Of the total study population, 19.4% resided in rural areas, the same as the rural proportion of the US population with cancer.\"; \"Rural and urban patients with uniform access to cancer care through participation in a SWOG clinical trial had similar outcomes.\"",
    },
    {
      id: "friedman-2026",
      title: "Cancer decentralized clinical trials in the Veterans Health Administration",
      publisher: "Journal of the National Cancer Institute (Friedman DR et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/40990811/",
      year: "2026",
      note: "Program description. Quotes: \"Ten cancer decentralized clinical trials have been implemented\"; \"Across 47 VA medical centers, 134 Veterans enrolled\"; \"Demographic characteristics of enrolled participants mirrored that of Veterans receiving cancer care through the VA's National TeleOncology service, including rurality (31%) and non-White minority status (19%).\"; \"not every clinical trial can be conducted in a decentralized manner.\"",
    },
    {
      id: "tagurum-2026",
      title: "Understanding Cancer Clinical Trial Participation in Rural Communities: A Qualitative Focus Group Study",
      publisher: "Psycho-Oncology (Tagurum Y et al., Florida Cancer Specialists & Research Institute), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13453285/",
      year: "2026",
      note: "Qualitative study. Quotes: \"the study conducted five semi-structured focus groups with 30 participants recruited from rural Florida counties. Participants included cancer survivors, advocates, caregivers, and those currently in treatment.\"; \"commonly reported barriers to participation included limited access to reliable transportation, financial concerns, and mistrust of medical professionals and healthcare systems.\"; \"This study emphasizes the importance of viewing trials as routine care and suggests that navigator-led outreach and patient-centric technology are essential\".",
    },
    {
      id: "morrison-2026",
      title: "Building HOPE: operationalizing hybrid decentralized oncology clinical trials with community providers beyond traditional healthcare system networks",
      publisher: "The Oncologist (Morrison JK et al., UNC Lineberger Comprehensive Cancer Center), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13102172/",
      year: "2026",
      note: "Implementation report. Quotes: \"In 2022, 75% of U.S. counties had no active cancer treatment trials.\"; \"conducted an engagement initiative across nine community hospitals in NC without formal contractual research network agreements\"; \"Visits revealed critical local resources, such as patient transportation, culturally tailored educational materials, and advocacy\"; \"Within 3 months, seven of nine locations initiated hDCT planning, five began patient referrals, and two enrolled patients.\"",
    },
    {
      id: "fda-dct-2024",
      title: "Conducting Clinical Trials With Decentralized Elements: Guidance for Industry, Investigators, and Other Interested Parties",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/media/167696/download",
      year: "2024",
      note: "Final guidance, September 2024. Quotes: \"Outreach through local health care institutions (e.g., pharmacies, clinics) may facilitate recruitment of participants with diverse demographic characteristics more reflective of the intended patient population in areas where there are limited or no traditional clinical trial sites.\"; \"Bringing trial-related activities to participants’ homes may reduce the need for travel\"; \"Drugs best suited for direct shipment to the participant’s home include those with good stability profiles.\" Landing page lists \"telehealth visits with trial personnel, in-home visits with remote trial personnel, or visits with local health care providers.\"",
    },
    {
      id: "fda-enhancing-2025",
      title: "Enhancing Participation in Clinical Trials — Eligibility Criteria, Enrollment Practices, and Trial Designs: Guidance for Industry (Revision 1)",
      publisher: "US Food and Drug Administration (CDER and CBER)",
      url: "https://www.fda.gov/media/190162/download",
      year: "2025",
      note: "Final guidance, December 2025. Quotes: \"reduce the frequency of study visits to those needed to appropriately monitor safety and efficacy, and consider whether flexibility in visit windows is possible\"; \"Consider the use of mobile medical professionals, such as nurses and phlebotomists, to visit participants at their locations instead of requiring participants to visit distant clinical trial sites.\"; \"During recruitment, offer and make participants aware of financial reimbursements\"; \"FDA does not consider reimbursement for reasonable travel expenses to and from the clinical trial site and associated costs such as airfare, parking, and lodging to raise issues regarding undue influence.\"",
    },
    {
      id: "pew-broadband-2025",
      title: "Internet, Broadband Fact Sheet",
      publisher: "Pew Research Center",
      url: "https://www.pewresearch.org/internet/fact-sheet/internet-broadband/",
      year: "2025",
      note: "Fact sheet dated November 20, 2025; survey of 5,022 US adults, February 5 to June 18, 2025. Home broadband by community type, 6/18/2025: urban 75%, suburban 84%, rural 71%. Smartphone dependency by community type, 2025: urban 19%, suburban 12%, rural 20%. Definition: \"they own a smartphone but do not subscribe to a home broadband service.\"",
    },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
  ],
  related: [
    { label: "Engage: outreach and booking", href: "/engage", description: "Voice and text pre-screening, scheduling and reminders." },
    { label: "Bond for physician groups", href: "/for/physician-groups", description: "Running trials inside community practices." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "Text message templates for patient outreach." },
    { label: "Clinical trial recruitment by region", href: "/clinical-trial-recruitment", description: "Recruitment data and trial counts by state and region." },
  ],
};

export default page;
