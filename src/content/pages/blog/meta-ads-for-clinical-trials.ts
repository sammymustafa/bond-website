import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/meta-ads-for-clinical-trials",
  category: "blog",
  title: "Meta ads for clinical trial recruitment in 2026",
  description:
    "Health targeting is gone, health data sources face tracking limits and ad copy can't imply a condition. How to run Meta trial ads that pass review in 2026.",
  keywords: [
    "Facebook ads for clinical trials",
    "Meta ads clinical trial recruitment",
    "Instagram ads patient recruitment",
    "Meta health and wellness data restrictions",
    "IRB review of social media ads",
  ],
  eyebrow: "Blog",
  h1: "Running Meta ads for clinical trial recruitment in 2026",
  intro:
    "Facebook and Instagram ads still find trial participants, but the rules changed underneath them. Meta removed health-cause interest targeting in January 2022, can restrict the event data health advertisers send it, and rejects copy that implies the viewer has a condition.{{cite:meta-2021,meta-data-restrictions,meta-personal-attributes}} This post covers what still works, what the IRB needs to see, and how to measure results by randomizations rather than clicks.",
  summary: "Targeting limits, ad copy rules, tracking restrictions, IRB review and measurement for Facebook and Instagram trial ads.",
  lastUpdated: "2026-10-12",
  blog: { date: "2026-10-12", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "targeting",
      heading: "Who can you still target on Meta?",
      blocks: [
        {
          type: "p",
          text: "Not people grouped by health interest. On November 9, 2021, Meta announced that starting January 19, 2022 it would remove Detailed Targeting options relating to topics people may perceive as sensitive, with health causes such as \"Lung cancer awareness\", \"World Diabetes Day\" and \"Chemotherapy\" among its examples.{{cite:meta-2021}}",
        },
        {
          type: "p",
          text: "Uploaded patient lists are not a workaround. Meta's terms bar sharing health information through its business tools and say the criteria behind Custom Audiences must not reflect, imply or be based on prohibited information, which includes diseases and medical conditions.{{cite:meta-prohibited-info}} In practice most trial campaigns now lean on location, age and broad audiences, and let the ad's words and images find the right people. Meta also requires ads promoting health or weight-loss products and services to target people 18 or older, so plan pediatric campaigns around parents.{{cite:meta-health-wellness}}",
        },
      ],
    },
    {
      id: "ad-copy",
      heading: "What ad copy will Meta and the IRB accept?",
      blocks: [
        {
          type: "p",
          text: "Two rulebooks apply at once. Meta prohibits ads that assert or imply a person's physical or mental health, including medical conditions.{{cite:meta-personal-attributes}} FDA expects IRBs to make sure ads don't promise a certainty of cure, don't call an investigational product a \"new treatment\" without saying it is investigational, and don't promise \"free medical treatment\".{{cite:fda-recruiting}} Copy that passes one review can fail the other.",
        },
        {
          type: "table",
          caption: "Example lines checked against Meta's examples and FDA's guidance",
          columns: ["Ad line", "Meta's personal attributes policy", "FDA guidance for IRBs"],
          rows: [
            ["\"Do you have diabetes?\"", "Listed by Meta as not allowed{{cite:meta-personal-attributes}}", "Not addressed"],
            ["\"New diabetes treatment available\"", "Listed by Meta as allowed{{cite:meta-personal-attributes}}", "Avoid \"new treatment\" unless the ad explains the product is investigational{{cite:fda-recruiting}}"],
            ["\"Free treatment for qualified patients\"", "Not addressed", "Should not promise free medical treatment when the point is no charge for taking part{{cite:fda-recruiting}}"],
            ["\"Our study drug cures type 2 diabetes\"", "Claims to cure diabetes are prohibited{{cite:meta-health-wellness}}", "No claims that an investigational product is safe or effective{{cite:fda-recruiting}}"],
            ["\"Adults with type 2 diabetes may qualify for a research study of an investigational medicine\"", "Describes the study without saying the viewer has the condition; Meta's review decides", "States the condition and that the product is investigational"],
          ],
          note: "Meta's examples come from its Transparency Center policy page. Meta reviews each ad itself, so treat this as a drafting aid, not a guarantee.{{cite:meta-personal-attributes}}",
        },
      ],
    },
    {
      id: "tracking",
      heading: "How do Meta's health data rules affect tracking?",
      blocks: [
        {
          type: "p",
          text: "Meta assigns websites and apps that send it data to categories based on their topics and services, and some categories carry restrictions. There are three levels: **core setup**, which strips custom parameters and the parts of URLs after the domain; restriction of certain mid- and lower-funnel standard events; and full restriction, under which Meta's business tools cannot be used for ads purposes at all. An advertiser cannot change a category Meta assigned, though it can ask for a review.{{cite:meta-data-restrictions}}",
        },
        {
          type: "p",
          text: "Plan as if a study landing page will be restricted. Keep condition names out of URLs and custom event names, never send pre-screener answers to Meta, and count leads, pre-screens and bookings in your own system. If your organization is covered by HIPAA, HHS's tracking-technology bulletin also applies; a federal court vacated part of it in June 2024, the part about tracking on unauthenticated public pages that address specific health conditions, so have counsel confirm where your pages fall. This is not legal advice.{{cite:hhs-tracking}}",
        },
      ],
    },
    {
      id: "irb-review",
      heading: "What does the IRB need to see for a Meta campaign?",
      blocks: [
        {
          type: "p",
          text: "FDA treats direct advertising as the start of the informed consent process. The IRB should review the final copy of printed ads, including relative type size, and the final audio or video for broadcast ads. Ads added after initial approval can be treated as amendments, and the IRB chair or a designated member may approve them by expedited review when they are easy to compare with the approved consent form.{{cite:fda-recruiting}} On Meta, each image, headline, primary text and video cut is in effect its own ad.",
        },
        {
          type: "checklist",
          items: [
            "**Submit every variant** you plan to test, plus the landing page or form people reach after the click.",
            "**State the targeting**: locations, age range and the fact that no health-interest targeting is available.",
            "**Explain comment handling.** Who reads replies, how fast, and what happens to a comment that reveals health details.",
            "**Confirm the platform's terms are followed.** A 2017 ethics paper recommends that investigators certify compliance with site terms of use and avoid fake profiles or \"lurking\" in patient groups.{{cite:gelinas-2017}}",
            "**Describe what happens to lead data**: who calls, how fast, and how records of ineligible people are kept or destroyed, questions FDA lists for screening scripts.{{cite:fda-recruiting}}",
          ],
        },
      ],
    },
    {
      id: "measuring-results",
      heading: "How should you measure a Meta trial campaign?",
      blocks: [
        {
          type: "p",
          text: "Published figures are a weak benchmark. A 2017 review of 35 Facebook recruitment studies found a median cost per click of US $0.51 and a median cost per participant of $14.41, but most recruited young adults and many were surveys, not interventional trials.{{cite:whitaker-2017}} A 2020 meta-analysis found online recruitment cheaper per enrollee than offline methods (median $72 against $199), but in 9 of 13 studies offline methods converted screened people into enrollees significantly better.{{cite:brogger-mikkelsen-2020}}",
        },
        {
          type: "p",
          text: "So track your own funnel from spend to randomization: cost per lead, share of leads reached, share passing the pre-screen, cost per screening visit and cost per randomized patient. Meta's dashboard will stop at the click or the lead, and under data restrictions it may not see even that, so the later numbers have to come from your own records. Our [enrollment rate](/glossary/enrollment-rate) and [screen failure rate](/glossary/screen-failure-rate) definitions keep them consistent across studies.",
        },
        {
          type: "p",
          text: "The weak link is usually what happens after the lead arrives. Bond creates and runs Meta and Google ad campaigns for each study, and its voice and text agents contact every new ad lead immediately, keep following up with every lead who has not responded, then pre-screen patients and book screening visits. Ad spend is not included in Bond's fees; it comes out of the site's own ad budget.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond runs a study's Meta campaign and works every lead through to a booked screening visit.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can we upload a list of patients with a condition to build a Meta audience?",
      a: "Meta's terms say Custom Audience criteria must not reflect, imply or be based on prohibited information, and that includes medical conditions.{{cite:meta-prohibited-info}} HIPAA questions aside, a condition-based patient list breaks the platform's own rules.",
    },
    {
      q: "Does a boosted post about a study need IRB approval?",
      a: "If it is meant to be seen by prospective participants to invite them to take part, FDA treats it as direct advertising that the IRB should review.{{cite:fda-recruiting}} Check your IRB's own policy on social media posts as well.",
    },
    {
      q: "Should we use Meta's lead forms or our own landing page?",
      a: "We found no trial study comparing the two. Meta's terms limit the health information you can send it, so pre-screening questions are usually safer on an IRB-approved page you control.{{cite:meta-prohibited-info}}",
    },
  ],
  sources: [
    {
      id: "meta-2021",
      title: "Removing Certain Ad Targeting Options and Expanding Our Ad Controls",
      publisher: "Meta for Business",
      url: "https://www.facebook.com/business/news/removing-certain-ad-targeting-options-and-expanding-our-ad-controls",
      year: "2021",
      note: "Posted November 9, 2021. Read October 2026. Quote: \"Starting January 19, 2022 we will remove Detailed Targeting options that relate to topics people may perceive as sensitive, such as options referencing causes, organizations, or public figures that relate to health, race or ethnicity, political affiliation, religion, or sexual orientation.\" Example: \"Health causes (e.g., “Lung cancer awareness”, “World Diabetes Day”, “Chemotherapy”)\"",
    },
    {
      id: "meta-data-restrictions",
      title: "Understand data sharing restrictions based on data source categories",
      publisher: "Meta Business Help Center",
      url: "https://www.facebook.com/business/help/511197658391698",
      year: "2026",
      note: "Read October 2026. Quote: \"Core Setup: Restricts the sharing of custom parameters and parts of URLs following the domain. Restriction on certain standard events: Restricts the sharing of specific mid and lower funnel events. Full restrictions: Fully restrict the sharing of all events in specific regions or all regions. In these circumstances, Meta Business Tools cannot be used for ads purposes where restrictions are in place.\" Quote: \"you will not be able to modify a Meta-assigned categorization for your data source.\"",
    },
    {
      id: "meta-prohibited-info",
      title: "About prohibited information",
      publisher: "Meta Business Help Center",
      url: "https://www.facebook.com/business/help/361948878201809",
      year: "2026",
      note: "Read October 2026. Quote: \"This prohibited information includes health information, financial information, or other categories of information that may be considered as sensitive\". Quote: \"the names you choose and criteria you establish for your events, conversions, and Custom Audiences must not reflect, imply, or be based on any prohibited information.\" Listed examples include \"Diseases, medical conditions and injuries\".",
    },
    {
      id: "meta-personal-attributes",
      title: "Advertising Standards: Privacy Violations and Personal Attributes",
      publisher: "Meta Transparency Center",
      url: "https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/",
      year: "2026",
      note: "Read October 2026. Quote: \"ads must not contain content that asserts or implies personal attributes. This includes direct or indirect assertions or implications about a person’s ... physical or mental health (including medical conditions)\". Allowed examples include \"New diabetes treatment available\"; disallowed examples include \"Do you have diabetes?\"",
    },
    {
      id: "meta-health-wellness",
      title: "Advertising Standards: Health and Wellness",
      publisher: "Meta Transparency Center",
      url: "https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/",
      year: "2026",
      note: "Read October 2026. Quote: \"Ads promoting or marketing dietary, health, or weight loss or weight gain products and services must be targeted to people at least 18 years or older.\" Ads can't make \"Claims (including those from health professionals or health organizations) to cure, heal, or eliminate any of the following incurable diseases and/or terminal illnesses (exhaustive list): Diabetes, Herpes, Thyroid, Psoriasis, Ebola, Cancer, Autism, Alzheimer's, Parkinson's, Amyotrophic Lateral Sclerosis (ALS), Human immunodeficiency virus (HIV)\"",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Information Sheet, Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Final guidance, January 1998; page current as of September 5, 2018. Read October 2026. Quote: \"FDA considers direct advertising for study subjects to be the start of the informed consent and subject selection process.\" Quote: \"The IRB should review the final copy of printed advertisements to evaluate the relative size of type used and other visual effects.\" Quote: \"should not use terms such as \"new treatment,\" \"new medication\" or \"new drug\" without explaining that the test article is investigational.\" Quote: \"Advertisements should not promise \"free medical treatment,\" when the intent is only to say subjects will not be charged for taking part in the investigation.\" Quote: \"Are names of non-eligibles maintained in case they would qualify for another study?\"",
    },
    {
      id: "hhs-tracking",
      title: "Use of Online Tracking Technologies by HIPAA Covered Entities and Business Associates",
      publisher: "U.S. Department of Health and Human Services, Office for Civil Rights",
      url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
      year: "2024",
      note: "Read October 2026. Quote: \"On June 20, 2024, the U.S. District Court for the Northern District of Texas issued an order declaring unlawful and vacating a portion of this guidance document.\" Quote: \"the Court vacated the guidance to the extent it provides that HIPAA obligations are triggered in “circumstances where an online technology connects (1) an individual’s IP address with (2) a visit to a[n] [unauthenticated public webpage] addressing specific health conditions or healthcare providers.”\"",
    },
    {
      id: "gelinas-2017",
      title: "Using Social Media as a Research Recruitment Tool: Ethical Issues and Recommendations",
      publisher: "American Journal of Bioethics (Gelinas L et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5324729/",
      year: "2017",
      note: "Read October 2026. Investigator checklist items: \"Provide the IRB with a statement certifying compliance (or lack of noncompliance) with the policies and terms of use of relevant websites\"; \"Proposed recruitment does not involve deception or fabrication of online identities.\"; \"Proposed recruitment does not involve members of research team ‘lurking’ or ‘creeping’ social media sites in ways members are unaware of.\"",
    },
    {
      id: "whitaker-2017",
      title: "The Use of Facebook in Recruiting Participants for Health Research Purposes: A Systematic Review",
      publisher: "Journal of Medical Internet Research (Whitaker C, Stevelink S, Fear N), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5594255/",
      year: "2017",
      note: "35 studies. Read October 2026. Quote: \"median values being 264 recruited participants, a 3-month recruitment period, 3.3 million impressions, cost per click of US $0.51, conversion rate of 4% (range 0.06-29.50), eligibility of 61% (range 17-100), and cost per participant of US $14.41.\" Quote: \"Most recruited young age groups (16-24 years)\".",
    },
    {
      id: "brogger-mikkelsen-2020",
      title: "Online Patient Recruitment in Clinical Trials: Systematic Review and Meta-Analysis",
      publisher: "Journal of Medical Internet Research (Brøgger-Mikkelsen M et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7673977/",
      year: "2020",
      note: "Read October 2026. Quote: \"online recruitment had a significantly lower cost per enrollee compared with offline recruitment (US $72 vs US $199\". Quote: \"we found that 69% (9/13) of studies had significantly better offline conversion rates compared with online conversion rates\".",
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
    { label: "Engage: ads, voice and text outreach", href: "/engage", description: "How Bond runs ad campaigns and contacts every lead." },
    { label: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment", description: "Ad-driven recruitment compared with Bond's approach." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact patients, under which HIPAA path, with what IRB approval." },
    { label: "Pricing", href: "/pricing", description: "Per screened patient plus a share of randomization milestones; ad spend is separate." },
  ],
};

export default page;
