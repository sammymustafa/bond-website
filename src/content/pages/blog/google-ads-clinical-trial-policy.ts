import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/google-ads-clinical-trial-policy",
  category: "blog",
  title: "Google Ads policy for clinical trial recruitment ads",
  description:
    "Where Google allows trial recruitment ads, the three content rules, why remarketing is off limits, and what cell and gene therapy trials run into.",
  keywords: [
    "Google Ads clinical trial recruitment policy",
    "Google Ads healthcare and medicines policy clinical trials",
    "clinical trial ads sensitive interest category",
    "Google Ads certification clinical trials",
    "search ads for patient recruitment",
  ],
  eyebrow: "Blog",
  h1: "Google Ads policies for clinical trial recruitment: what is allowed and what to avoid",
  intro:
    "Google allows clinical trial recruitment ads in the United States and 21 other listed locations, with three content rules: no promoting prescription drugs, no misleading expectations about the product being tested, and no implying it is safe.{{cite:google-ctr}} Trial recruitment is also a sensitive interest category, so remarketing lists, Customer Match and lookalikes are off limits.{{cite:google-sic-ctr}} This post walks through the rules as of October 2026 and what they mean for a site's campaigns.",
  summary: "Google's clinical trial recruitment policy, targeting limits, certification questions and landing page rules, as of October 2026.",
  lastUpdated: "2026-10-28",
  blog: { date: "2026-10-28", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "is-it-allowed",
      heading: "Does Google allow clinical trial recruitment ads?",
      blocks: [
        {
          type: "p",
          text: "In some places. Google's policy says it does not allow the promotion of clinical trial recruitment in most locations, then lists 22 where it is allowed, including the United States, Canada, the United Kingdom, Germany, France, Japan and Australia. Where it is allowed, three restrictions apply:{{cite:google-ctr}}",
        },
        {
          type: "ul",
          items: [
            "Prescription drugs may not be promoted.",
            "Promotions may not create misleading expectations or effects of a product being tested.",
            "Promotions may not imply that the products being tested are safe.",
          ],
        },
        {
          type: "p",
          text: "Those rules line up with FDA's guidance to IRBs, which says recruitment ads should make no claim, explicit or implicit, that an investigational product is safe or effective, and should not call it a \"new treatment\" without explaining it is investigational.{{cite:fda-recruiting}} Google also says violations of this policy will not lead to account suspension without a warning at least 7 days ahead.{{cite:google-ctr}}",
        },
      ],
    },
    {
      id: "certification",
      heading: "Does a site need Google certification to run trial ads?",
      blocks: [
        {
          type: "p",
          text: "Google's trial recruitment policy does not describe a certification program of its own. It tells advertisers whose ads were disapproved for lack of approval to apply for healthcare-related advertising.{{cite:google-ctr}} As of October 2026, the application form it links to asks what the organization is and offers prescription drug services providers, pharmaceutical manufacturers, government or established non-profit health advocacy groups, addiction services providers, U.S. health insurance advertisers, holders of FDA licenses for cell or gene therapies, and verified election advertisers. A research site is not on the list.{{cite:google-apply}}",
        },
        {
          type: "table",
          caption: "Situations that trigger other Google healthcare rules",
          columns: ["If your campaign...", "What Google's policy says"],
          rows: [
            ["Names a prescription drug in the ad or landing page", "The trial policy says prescription drugs may not be promoted. Separately, U.S. campaigns can use prescription drug terms in ads and landing pages without certification, but need certification to keyword-target them.{{cite:google-ctr,google-rdt}}"],
            ["Recruits for a cell or gene therapy study", "Promotion of speculative or experimental treatments and of cell or gene therapies is not allowed, except FDA-licensed or approved therapies promoted by the license holder, or purely educational ads.{{cite:google-speculative}}"],
            ["Is run by an online pharmacy, telemedicine or addiction treatment provider", "Those businesses have their own certification requirements, some through LegitScript.{{cite:google-healthcare}}"],
          ],
          note: "The cell and gene therapy row can affect oncology and rare disease studies testing those therapies. Expect disapprovals and plan other channels.",
        },
      ],
    },
    {
      id: "targeting",
      heading: "Which targeting can trial ads use?",
      blocks: [
        {
          type: "p",
          text: "Google lists clinical trial recruitment as a sensitive interest category. Advertisers in these categories cannot use advertiser-curated audiences, and can use predefined Google audiences, which Google configures without sensitive user signals.{{cite:google-sic-ctr}}",
        },
        {
          type: "table",
          caption: "Audience features for clinical trial recruitment ads",
          columns: ["Not allowed (advertiser-curated)", "Allowed (predefined Google audiences)"],
          rows: [
            ["Customer Match", "In-market segments and affinity"],
            ["Your data segments (remarketing)", "Demographics and detailed demographics"],
            ["Audience expansion", "Life events"],
            ["Lookalike segments", "Location targeting; custom segments with limits"],
          ],
          note: "Custom segments that use sensitive creative or point to sensitive landing pages serve only on Display, to non-sensitive audiences or contextually. Users under 18 get no personalized ads of any kind.{{cite:google-sic-ctr}}",
        },
        {
          type: "p",
          text: "So the main lever is search intent. The policy pages we reviewed restrict audience features, not bidding on condition words such as \"psoriasis clinical trial near me\", apart from the prescription drug term rule above. Search campaigns built on condition and location keywords are the natural starting point; judge them by your own cost per randomized patient.",
        },
      ],
    },
    {
      id: "landing-page",
      heading: "What do the policies require of the landing page?",
      blocks: [
        {
          type: "p",
          text: "Google's three trial rules apply to \"promotions\", so hold the landing page to the same standard as the ad. Its data policy also prohibits collecting sensitive numbers, healthcare numbers among them, on a page that is not protected by SSL.{{cite:google-ctr,google-data}} Ask for the minimum: name, phone, email, consent to be contacted and a few IRB-approved pre-screening questions.",
        },
        {
          type: "p",
          text: "Tracking needs care. Google says it does not offer business associate agreements for Google Analytics, that HIPAA-regulated entities must not expose protected health information to it, and that unauthenticated pages related to health care services are more likely to be HIPAA-covered.{{cite:ga-hipaa}} HHS's tracking-technology bulletin, part of which a federal court vacated in June 2024, sets out the HIPAA side.{{cite:hhs-tracking}} Count pre-screens and bookings in your own system, and have counsel review tags on any page that collects health answers. This is not legal advice.",
        },
      ],
    },
    {
      id: "launch-checklist",
      heading: "What should you check before launching a Google trial campaign?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Confirm the location** is on Google's allowed list for every place the campaign targets.{{cite:google-ctr}}",
            "**Strip prescription drug promotion** from ads, sitelinks and the landing page, and do not bid on drug-name keywords without certification.{{cite:google-rdt}}",
            "**Remove safety and outcome claims**, and say plainly that the study product is investigational.{{cite:fda-recruiting}}",
            "**Check the therapy type.** Cell and gene therapy studies may need channels other than Google Ads.{{cite:google-speculative}}",
            "**Remove remarketing lists, Customer Match and lookalikes** from campaigns, ad groups and asset groups.{{cite:google-sic-ctr}}",
            "**Get IRB approval for every headline and description**, not one sample ad. A responsive search ad can hold up to 15 headlines and 4 descriptions, and Google shows them in any order and combination.{{cite:google-rsa}}",
            "**Plan the handoff.** Decide who calls each lead and how fast before the first dollar is spent.",
          ],
        },
        {
          type: "p",
          text: "Bond creates and runs Google and Meta ad campaigns for each study, and its voice and text agents contact every new ad lead immediately, keep following up with every lead who has not responded, then pre-screen patients and book screening visits. Ad spend comes out of the site's own ad budget.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond builds a study's Google campaign and turns each search lead into a booked visit.",
          secondaryLabel: "See pricing",
          secondaryHref: "/pricing",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can we run Google trial ads outside the United States?",
      a: "Only in the locations Google lists, such as Canada, the United Kingdom, Germany, Japan and Australia. Elsewhere, trial recruitment ads are not allowed.{{cite:google-ctr}}",
    },
    {
      q: "Why was our trial ad disapproved?",
      a: "Common causes are promoting a prescription drug, implying the product is safe or effective, a cell or gene therapy study, or an advertiser-curated audience. After an edit, Google says re-review typically takes 24 to 48 hours, and policy decisions can be appealed.{{cite:google-ctr,google-speculative,google-sic-ctr}}",
    },
    {
      q: "Do we need LegitScript certification for trial ads?",
      a: "Google's policy ties LegitScript to businesses such as online pharmacies, telemedicine and addiction treatment, not to trial recruitment.{{cite:google-healthcare}}",
    },
  ],
  sources: [
    {
      id: "google-ctr",
      title: "Healthcare and medicines: Clinical trial recruitment",
      publisher: "Google Advertising Policies Help",
      url: "https://support.google.com/adspolicy/answer/15598648?hl=en",
      year: "2026",
      note: "Read October 2026. Quote: \"Google does not allow the promotion of clinical trial recruitment in most locations. For locations where promotion of clinical trial recruitment is allowed, the following restrictions apply: Prescription drugs may not be promoted. Promotions may not create misleading expectations or effects of a product being tested. Promotions may not imply that the products being tested are safe.\" Allowed locations listed: Australia, Belgium, Canada, China, France, Germany, Indonesia, Ireland, Israel, Italy, Japan, Korea, Malaysia, Netherlands, New Zealand, Philippines, Singapore, Taiwan, Thailand, United Kingdom, United States, Vietnam. Quote: \"A warning will be issued at least 7 days prior to any suspension of your account.\" Quote: \"Your ad or asset will be automatically re-reviewed, which typically takes 24-48 hours.\"",
    },
    {
      id: "google-sic-ctr",
      title: "Clinical trial recruitment in personalized advertising",
      publisher: "Google Advertising Policies Help",
      url: "https://support.google.com/adspolicy/answer/16700746?hl=en",
      year: "2026",
      note: "Read October 2026. Quote: \"Content related to Clinical trial recruitment is a sensitive interest category and includes promotion of clinical trial recruitment.\" Quote: \"You can use predefined Google audiences. You can't use advertiser-curated audiences.\" Advertiser-curated audiences listed: Customer match, Your data segments, Audience expansion, Lookalike segments. Predefined Google audiences listed: In-market segments, Affinity, Demographics, Detailed demographics, Life events, Location targeting, Custom segments. Quote: \"Custom Segment audiences using sensitive creative assets or pointing to sensitive landing pages will only serve with Display campaigns to non-sensitive audiences or contextually.\" Quote: \"Users under the age of 18 are not eligible for personalized advertising of any kind\".",
    },
    {
      id: "google-healthcare",
      title: "Healthcare and medicines policy",
      publisher: "Google Advertising Policies Help",
      url: "https://support.google.com/adspolicy/answer/176031?hl=en",
      year: "2026",
      note: "Read October 2026. Quote: \"Google allows telemedicine providers if they’re accredited by LegitScript’s Healthcare Merchant Certification Program\". The page also lists LegitScript certification for addiction services and online pharmacies.",
    },
    {
      id: "google-speculative",
      title: "Speculative and experimental medical treatment, cell therapies, and gene therapies",
      publisher: "Google Advertising Policies Help",
      url: "https://support.google.com/adspolicy/answer/15596627?hl=en",
      year: "2026",
      note: "Read October 2026. Quote: \"Except as provided below in relation to the promotion of cell or gene therapies in the United States, the following is not allowed: Promotion of speculative or experimental medical treatments ... Promotion of cell or gene therapies\". Quote: \"In the United States, Google allows the promotion of FDA licensed or approved cell or gene therapies by entities that hold the relevant FDA license or approval to market that product.\" Quote: \"Google allows ads for cell or gene therapies that are exclusively educational or informational in nature, regardless of regulatory approval status.\"",
    },
    {
      id: "google-rdt",
      title: "Healthcare and medicines: Restricted drug terms",
      publisher: "Google Advertising Policies Help",
      url: "https://support.google.com/adspolicy/answer/15595717?hl=en",
      year: "2026",
      note: "Read October 2026. Quote (campaigns targeting Canada, New Zealand or United States): \"While you don’t need to be certified in order to use prescription drug terms in ads and landing pages, you must be certified in order to keyword-target these terms.\"",
    },
    {
      id: "google-apply",
      title: "Apply for healthcare-related advertising",
      publisher: "Google Ads Help",
      url: "https://support.google.com/google-ads/troubleshooter/2897541?hl=en",
      year: "2026",
      note: "Read October 2026 (redirects to troubleshooter 6099627). The form asks \"Please select what your organization is\" with options: Prescription drug services provider (online pharmacy, telemedicine); Pharmaceutical Manufacturer; Governmental or well-established non-profit health advocacy organizations; Addiction Services Provider; Health Insurance Advertiser (Only for United States); Entity that holds an FDA-issued license or approval to market a cell or gene therapy (only for the United States); Verified Election Advertiser.",
    },
    {
      id: "google-data",
      title: "Data collection and use",
      publisher: "Google Advertising Policies Help",
      url: "https://support.google.com/adspolicy/answer/6020956?hl=en",
      year: "2026",
      note: "Read October 2026. Not allowed: \"Collecting numbers for credit or debit cards, bank and investment accounts, wire transfers, national identity, tax ID, pension, healthcare, driver's license, or social security numbers over an unsecured page that isn't SSL (Secure Sockets Layer) protected and without a valid SSL certificate\"",
    },
    {
      id: "google-rsa",
      title: "About responsive search ads",
      publisher: "Google Ads Help",
      url: "https://support.google.com/google-ads/answer/7684791?hl=en",
      year: "2026",
      note: "Read October 2026. Quote: \"you can provide up to 15 headlines and 4 descriptions for a single responsive search ad.\" Quote: \"Assets can be shown in any order, so make sure they make sense individually or in combinations, and don't violate our policies or local law.\"",
    },
    {
      id: "ga-hipaa",
      title: "HIPAA and Google Analytics",
      publisher: "Google Analytics Help",
      url: "https://support.google.com/analytics/answer/13297105?hl=en",
      year: "2026",
      note: "Read October 2026. Quote: \"Google makes no representations that Google Analytics satisfies HIPAA requirements and does not offer Business Associate Agreements in connection with this service.\" Quote: \"Unauthenticated pages that are related to the provision of health care services, including as described in the HHS bulletin, are more likely to be HIPAA-covered, and customers should not set Google Analytics tags on HIPAA-covered pages.\"",
    },
    {
      id: "hhs-tracking",
      title: "Use of Online Tracking Technologies by HIPAA Covered Entities and Business Associates",
      publisher: "U.S. Department of Health and Human Services, Office for Civil Rights",
      url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
      year: "2024",
      note: "Read October 2026. Quote: \"On June 20, 2024, the U.S. District Court for the Northern District of Texas issued an order declaring unlawful and vacating a portion of this guidance document.\"",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Information Sheet, Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Read October 2026. Quote: \"No claims should be made, either explicitly or implicitly, that the drug, biologic or device is safe or effective for the purposes under investigation\". Quote: \"should not use terms such as \"new treatment,\" \"new medication\" or \"new drug\" without explaining that the test article is investigational.\"",
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
    { label: "Engage: ads, voice and text outreach", href: "/engage", description: "How Bond runs ad campaigns and works every lead to a booked visit." },
    { label: "Bond vs media recruitment", href: "/compare/bond-vs-media-recruitment", description: "Ad-driven recruitment compared with Bond's approach." },
    { label: "IRB and HIPAA rules for patient outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact patients and under which approvals." },
    { label: "Pricing", href: "/pricing", description: "Per screened patient plus a share of randomization milestones; ad spend is separate." },
  ],
};

export default page;
