import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/trial-landing-page-prescreener",
  category: "blog",
  title: "Trial landing pages and pre-screeners that convert",
  description:
    "Building a trial landing page and pre-screener that turn ad clicks into qualified leads: content, question design, tracking, fraud checks and handoff.",
  keywords: [
    "clinical trial landing page",
    "online pre-screener clinical trial",
    "trial recruitment landing page conversion",
    "pre-screening questionnaire design",
    "trial ad lead quality",
  ],
  eyebrow: "Blog",
  h1: "Landing pages and online pre-screeners that turn trial ad clicks into qualified leads",
  intro:
    "A trial landing page has two jobs: help the right person decide to raise a hand, and give the site what it needs to call them back fast. The published numbers show how much leaks along the way. In one weight-loss trial that invited 17,989 patients by portal message or email, 6.6% completed an online self-screener and 0.5% were randomized.{{cite:ziegenfuss-2025}} Evidence on specific page designs is thin, so this post separates sourced rules from things to test.",
  summary: "Content, pre-screener design, tracking, fraud checks and the post-submit handoff for trial ad landing pages.",
  lastUpdated: "2026-12-02",
  blog: { date: "2026-12-02", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Pre-screening call script", secondaryHref: "/templates/pre-screening-call-script" },
  sections: [
    {
      id: "page-content",
      heading: "What should a trial landing page include?",
      blocks: [
        {
          type: "p",
          text: "Start from what FDA says an IRB-approved ad may contain: the investigator or facility, the condition or purpose, a summary of eligibility, any participation benefits such as a no-cost health exam, the time commitment, the location and whom to contact. FDA suggests limiting ads to what people need to judge their eligibility and interest, and the same discipline suits a landing page.{{cite:fda-recruiting}}",
        },
        {
          type: "ul",
          items: [
            "**Write for phones first.** In Pew's 2025 survey, 91% of U.S. adults owned a smartphone.{{cite:pew-mobile-2025}}",
            "**Show a phone number too.** Smartphone ownership was 78% among adults 65 and older, and 16% of that group had a cellphone that is not a smartphone.{{cite:pew-mobile-2025}}",
            "**Say plainly that it is research**, that the product is investigational, and that taking part is voluntary.{{cite:fda-recruiting}}",
            "**Say what happens next**: who will call, from what number and how soon.",
          ],
        },
      ],
    },
    {
      id: "prescreener-design",
      heading: "How long should an online pre-screener be?",
      blocks: [
        {
          type: "p",
          text: "We found no trial study that tests screener length head to head, so there is no evidence-based number. A sensible rule is to ask only what a person can answer reliably about themselves and what rules out the most people: age range, diagnosis, location, a few major exclusions. Leave lab values, medication histories and anything that needs a chart for the phone call or the records review.",
        },
        {
          type: "p",
          text: "The LEAP weight-loss trial shows a common flow. Invited patients completed an online self-screener; those who looked eligible gave contact details and a good time to call; staff then called up to three times to run a 15 to 20 minute phone screen, followed by consent for those still interested.{{cite:ziegenfuss-2025}} Across 35 Facebook recruitment studies, a median of 61% of people who responded turned out to be eligible, with a range from 17% to 100%, so expect many screen-outs even with good targeting.{{cite:whitaker-2017}}",
        },
        {
          type: "p",
          text: "The screener needs IRB review. The revised Common Rule lets an IRB approve collecting screening information without consent when it comes through written or oral communication with the prospective subject.{{cite:cfr-46-116}} Our [pre-screening vs screening guide](/guides/pre-screening-vs-screening) covers where the line sits.",
        },
      ],
    },
    {
      id: "screen-outs",
      heading: "What should happen to people who screen out?",
      blocks: [
        {
          type: "p",
          text: "Tell them kindly and right away, and say whether you would like to contact them about other studies. FDA lists the data questions an IRB will ask about screening, and they apply directly to a web form: what happens to information if someone quits partway, whether a marketing company collects the data or sells names, whether records of ineligible people are kept for other studies, and how records are destroyed.{{cite:fda-recruiting}} Decide the answers before launch and put them in the IRB submission.",
        },
        {
          type: "ul",
          items: [
            "**Looks eligible**: confirm that a call is coming, from which number and roughly when.",
            "**Screened out**: thank them, say this study is not a fit, and offer future contact only through a separate opt-in.",
            "**Unsure answers**: offer \"not sure\" as a choice and route those people to a call instead of an automatic rejection, so a coordinator can clarify.",
          ],
        },
      ],
    },
    {
      id: "tracking",
      heading: "How do you keep tracking tags from leaking health data?",
      blocks: [
        {
          type: "p",
          text: "Assume screener answers are health information and keep them away from ad and analytics vendors. Meta's terms prohibit sending health information through its business tools, including in URL parameters and custom event names.{{cite:meta-prohibited-info}} Google says it does not offer business associate agreements for Google Analytics and that HIPAA-regulated entities should not place its tags on HIPAA-covered pages.{{cite:ga-hipaa}} HHS's tracking bulletin sets out the HIPAA rules, though a court vacated part of it in June 2024.{{cite:hhs-tracking}}",
        },
        {
          type: "checklist",
          items: [
            "No third-party pixels or session-replay scripts on screener pages.",
            "Condition-free URLs and event names.",
            "Answers stored in your own system, behind access controls.",
            "Ad conversions counted from your own records, not from the form itself.",
            "Counsel review of every tag on the page. This is not legal advice.",
          ],
        },
      ],
    },
    {
      id: "fraud",
      heading: "How do you filter out fraudulent and duplicate leads?",
      blocks: [
        {
          type: "p",
          text: "Fraud is a real risk when the study is remote and pays well. In a fully decentralized trial offering up to $100 in incentives, 62% of 2,781 eligible screeners were judged fraudulent before randomization, mostly through duplicate emails, phones or IP addresses and VPN or proxy detection. The rate was 85% from social media ads against 26% from survey panels.{{cite:moore-2025}}",
        },
        {
          type: "p",
          text: "Site-based trials with in-person screening visits may see less of this, though we found no study measuring it. The defenses are cheap either way: flag duplicate phones, emails and IP addresses, check answers that conflict, keep payment amounts out of large type as FDA advises anyway, and talk to every lead before booking.{{cite:moore-2025,fda-recruiting}} The study authors recommend personal contact to verify identity.{{cite:moore-2025}}",
        },
      ],
    },
    {
      id: "after-submit",
      heading: "What should happen right after someone submits?",
      blocks: [
        {
          type: "p",
          text: "The handoff is where online leads are won or lost. A 2020 meta-analysis found online recruitment cheaper per enrollee than offline methods but worse at converting screened people into enrollees.{{cite:brogger-mikkelsen-2020}} In Alzheimer's trial leads from Facebook and Google ads, the share reached fell as the first call slipped from within 24 hours to 48 to 72 hours.{{cite:starling-2025}}",
        },
        {
          type: "p",
          text: "Show a thank-you page that says when and from what number the site will call, send a text at once, and call fast. Bond is built for this step: its voice and SMS agents contact every new ad lead immediately, keep following up with every lead who has not responded, pre-screen patients and book them straight into the site's calendar.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond picks up every landing-page lead, pre-screens it and books the visit.",
          secondaryLabel: "Read about Engage",
          secondaryHref: "/engage",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Should pre-screening happen on the page or on the first call?",
      a: "Both, split by difficulty. Questions people can answer about themselves belong on the page; anything needing judgment or records belongs on the call. LEAP used an online self-screener followed by a phone screen.{{cite:ziegenfuss-2025}}",
    },
    {
      q: "Does the landing page itself need IRB approval?",
      a: "Treat it as recruitment material and submit it. FDA expects IRBs to review the methods and material used to recruit subjects.{{cite:fda-recruiting}}",
    },
    {
      q: "Should the page show how much participants are paid?",
      a: "It can state payment, but FDA says ads should not emphasize the payment or the amount, for example with larger or bold type.{{cite:fda-recruiting}}",
    },
  ],
  sources: [
    {
      id: "ziegenfuss-2025",
      title: "A randomized study comparing patient portal and email communications for trial recruitment",
      publisher: "Clinical Trials (Ziegenfuss JY et al., HealthPartners Institute), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12373006/",
      year: "2025",
      note: "Recruitment for the LEAP phentermine trial, May 2023 to February 2024. Read October 2026. Quote: \"17,989 potentially trial-eligible participants identified using EHR data were randomized to either portal or email recruitment communications.\" Quote: \"Overall, 6.6% (n=1191) completed the self-screener and 0.5% (n=85) were randomized into the LEAP trial.\" Quote: \"Patients eligible after completing the self-screener were asked to provide contact information and the best time to outreach. Study staff called self-screened eligible patients up to three times to conduct a phone screening visit, which took approximately 15–20 minutes to complete.\"",
    },
    {
      id: "whitaker-2017",
      title: "The Use of Facebook in Recruiting Participants for Health Research Purposes: A Systematic Review",
      publisher: "Journal of Medical Internet Research (Whitaker C, Stevelink S, Fear N), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5594255/",
      year: "2017",
      note: "35 studies, mostly young adult samples. Read October 2026. Quote: \"eligibility of 61% (range 17-100)\". Definition: \"Eligibility The percentage of participants who respond and are eligible for the trial.\"",
    },
    {
      id: "pew-mobile-2025",
      title: "Mobile Fact Sheet",
      publisher: "Pew Research Center",
      url: "https://www.pewresearch.org/internet/fact-sheet/mobile/",
      year: "2025",
      note: "Survey of 5,022 U.S. adults, Feb. 5 to June 18, 2025; fact sheet dated November 20, 2025. Read October 2026. Smartphone ownership: 91% of U.S. adults (June 18, 2025 data point). By age, 65+: cellphone 95%, smartphone 78%, \"Cellphone, but not a smartphone\" 16%.",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Information Sheet, Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Read October 2026. Quote: \"FDA believes that any advertisement to recruit subjects should be limited to the information the prospective subjects need to determine their eligibility and interest.\" Quote: \"Advertisements may state that subjects will be paid, but should not emphasize the payment or the amount to be paid, by such means as larger or bold type.\" Quote: \"What happens to personal information if the caller ends the interview or simply hangs up? Are the data gathered by a marketing company? If so, are names, etc. sold to others? Are names of non-eligibles maintained in case they would qualify for another study?\" Quote: \"The IRB should also review the methods and material that investigators propose to use to recruit subjects.\"",
    },
    {
      id: "cfr-46-116",
      title: "45 CFR 46.116: General requirements for informed consent",
      publisher: "Electronic Code of Federal Regulations (eCFR)",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116",
      year: "2026",
      note: "Read October 2026. Quote (paragraph (g)): \"An IRB may approve a research proposal in which an investigator will obtain information or biospecimens for the purpose of screening, recruiting, or determining the eligibility of prospective subjects without the informed consent of the prospective subject ... if ... (1) The investigator will obtain information through oral or written communication with the prospective subject or legally authorized representative\"",
    },
    {
      id: "meta-prohibited-info",
      title: "About prohibited information",
      publisher: "Meta Business Help Center",
      url: "https://www.facebook.com/business/help/361948878201809",
      year: "2026",
      note: "Read October 2026. Quote: \"This information should not be shared in Meta Business Tools data such as URL parameters, custom audiences, custom conversions, custom event names, and custom data.\" Prohibited examples include \"Diseases, medical conditions and injuries\".",
    },
    {
      id: "ga-hipaa",
      title: "HIPAA and Google Analytics",
      publisher: "Google Analytics Help",
      url: "https://support.google.com/analytics/answer/13297105?hl=en",
      year: "2026",
      note: "Read October 2026. Quote: \"Google makes no representations that Google Analytics satisfies HIPAA requirements and does not offer Business Associate Agreements in connection with this service.\" Quote: \"customers should not set Google Analytics tags on HIPAA-covered pages.\"",
    },
    {
      id: "hhs-tracking",
      title: "Use of Online Tracking Technologies by HIPAA Covered Entities and Business Associates",
      publisher: "U.S. Department of Health and Human Services, Office for Civil Rights",
      url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
      year: "2024",
      note: "Read October 2026. Quote: \"On June 20, 2024, the U.S. District Court for the Northern District of Texas issued an order declaring unlawful and vacating a portion of this guidance document.\" Quote: \"Websites commonly use tracking technologies such as cookies, web beacons or tracking pixels, session replay scripts, and fingerprinting scripts\".",
    },
    {
      id: "moore-2025",
      title: "Mitigating fraud in a fully decentralized clinical trial of a digital health intervention",
      publisher: "Annals of Behavioral Medicine (Moore JB et al., Stanford), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12205967/",
      year: "2025",
      note: "Read October 2026. Quote: \"The DCT offered incentives totaling up to $100 for completing assessments over the 12-week study.\" Quote: \"Of the 2,781 eligible screeners completed, 1,725 (62%) were determined to be fraudulent prior to randomization, detected most commonly by duplicate identifiers (65%) and/or VPN and proxy detection (47%).\" Quote: \"The fraudulent recruitment rate was higher for social media advertising (85%) than survey panels (26%).\" Quote: \"Researchers should consider making personal contact with a participant to verify identity\".",
    },
    {
      id: "brogger-mikkelsen-2020",
      title: "Online Patient Recruitment in Clinical Trials: Systematic Review and Meta-Analysis",
      publisher: "Journal of Medical Internet Research (Brøgger-Mikkelsen M et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7673977/",
      year: "2020",
      note: "Read October 2026. Quote: \"Online recruitment was both superior in regard to time efficiency and cost-effectiveness compared with offline recruitment. In contrast, offline recruitment outperformed online recruitment with respect to conversion rate.\"",
    },
    {
      id: "starling-2025",
      title: "Importance of Speed of First Attempted Contact in Alzheimer's Trial Participation",
      publisher: "Alzheimer's & Dementia (Starling S et al., Adams Clinical), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11714075/",
      year: "2025",
      note: "Conference abstract. Read October 2026. Quote: \"Calls made within 24 hours yielded a 47.9% success rate, compared to 42.7% for 24‐48 hours, and 39.4% for 48‐72 hours.\"",
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
    { label: "Pre-screening vs screening", href: "/guides/pre-screening-vs-screening", description: "What belongs before consent and what belongs at the screening visit." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "The phone screen that follows an online pre-screener." },
    { label: "Engage: ads, voice and text outreach", href: "/engage", description: "How Bond contacts every lead, pre-screens and books visits." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Catching ineligible patients before the first screening visit." },
  ],
};

export default page;
