import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/speed-to-lead-trial-ad-leads",
  category: "blog",
  title: "How fast to contact a clinical trial ad lead",
  description:
    "Lead-response research and a 6,881-applicant Alzheimer's trial dataset both say the same thing: call trial ad leads fast. What the data shows and what to set.",
  keywords: [
    "speed to lead clinical trials",
    "clinical trial lead response time",
    "how fast to call trial ad leads",
    "trial recruitment ad lead follow-up",
    "patient recruitment lead handling",
  ],
  eyebrow: "Blog",
  h1: "How fast should you contact a clinical trial ad lead?",
  intro:
    "As fast as you can, and on the same day at the latest. In 6,881 Alzheimer's trial applicants who came in through Facebook and Google ads, the share a recruiter went on to reach fell with every day the first call was delayed.{{cite:starling-2025}} Sales research points the same way: firms that tried to reach web leads within an hour were nearly seven times as likely to qualify them as firms that waited even an hour longer.{{cite:hbr-2011}}",
  summary: "What lead-response research and trial data say about how quickly to call a trial ad lead, and the response standard a site should set.",
  lastUpdated: "2026-10-05",
  blog: { date: "2026-10-05", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "lead-response-research",
      heading: "What does lead-response research say?",
      blocks: [
        {
          type: "p",
          text: "The most cited work is a 2011 Harvard Business Review article by James Oldroyd, Kristina McElheran and David Elkington. The authors audited 2,241 U.S. companies by submitting a web test lead to each. Only 37% responded within an hour; 16% took one to 24 hours, 24% took longer than 24 hours, and 23% never responded. Among companies that responded within 30 days, the average response time was 42 hours.{{cite:hbr-2011}}",
        },
        {
          type: "p",
          text: "In a separate analysis of 1.25 million leads received by 42 U.S. companies, firms that tried to contact a lead within an hour were nearly seven times as likely to qualify it as firms that tried an hour later, and more than 60 times as likely as firms that waited 24 hours or longer. \"Qualify\" meant having a meaningful conversation with a decision maker.{{cite:hbr-2011}}",
        },
        {
          type: "callout",
          tone: "info",
          title: "Read it as direction, not a benchmark",
          text: "These were sales leads, not patients asking about a study. The finding that transfers is the shape of the curve: interest fades within hours, not weeks. The specific multipliers should not be quoted as trial benchmarks.{{cite:hbr-2011}}",
        },
      ],
    },
    {
      id: "trial-evidence",
      heading: "Is there evidence from clinical trial ad leads?",
      blocks: [
        {
          type: "p",
          text: "Some, and it is consistent. Adams Clinical, a research site group in Watertown, Massachusetts, analyzed 6,881 people who applied for Alzheimer's disease trials through Facebook and Google ads in 2023. Each submitted contact details online and a recruiter then called for a phone interview, leaving a voicemail, an automated text and further calls for people who did not answer. Time to the first call attempt ranged from under an hour to 227 days, though 95.4% of first attempts came within 72 hours.{{cite:starling-2025}}",
        },
        {
          type: "stats",
          items: [
            { value: "47.9%", label: "Success rate when the first call came within 24 hours", cite: "starling-2025" },
            { value: "42.7%", label: "Success rate when it came at 24 to 48 hours", cite: "starling-2025" },
            { value: "39.4%", label: "Success rate when it came at 48 to 72 hours", cite: "starling-2025" },
          ],
        },
        {
          type: "p",
          text: "Longer delays lowered the chance of ever reaching the applicant, both across all calls and within the first 72 hours. Delay did not predict whether the first call was answered, but it did correlate with more business days before the team finally spoke with the person. Overall, only 46% of applicants ever spoke with a recruiter.{{cite:starling-2025}}",
        },
        {
          type: "p",
          text: "The limits matter. This is a conference abstract from one site group and one disease area, and it is observational, so leads called later may have differed in other ways. We found no published trial study that compares calling within minutes against calling within an hour. The evidence supports \"same day beats next day\"; finer claims about minutes rest on the sales research above.",
        },
      ],
    },
    {
      id: "why-speed-matters",
      heading: "Why does a delay cost so much with trial leads?",
      blocks: [
        {
          type: "p",
          text: "Two reasons. First, people screen their calls. In a 2020 Pew Research Center survey of 10,211 U.S. adults, eight in ten said they generally do not answer their cellphone when an unknown number calls. Most (67%) said they let it ring but check any voicemail, while only 14% said they generally ignore voicemail too.{{cite:pew-2020}} A call that arrives minutes after someone submits a form is the one call they are most likely to expect.",
        },
        {
          type: "p",
          text: "Second, online leads already convert less well than other referrals. A 2020 meta-analysis found online recruitment enrolled patients faster per active day and at a lower median cost per enrollee (US $72 against $199 for offline methods), but in 9 of the 13 studies that reported it, offline methods converted screened people into enrollees significantly better.{{cite:brogger-mikkelsen-2020}} Ads are cheap to start; the loss happens in the handoff from form to conversation, which is exactly where response time sits.",
        },
      ],
    },
    {
      id: "response-standard",
      heading: "What response standard should a site set?",
      blocks: [
        {
          type: "p",
          text: "Write a standard down, give it an owner and measure it weekly. A reasonable starting point, built on the evidence above:",
        },
        {
          type: "table",
          caption: "A starting response standard for trial ad leads",
          columns: ["When the lead arrives", "First touch", "If no answer"],
          rows: [
            ["Staffed hours", "A call within minutes, with a short text naming the site and study team sent alongside", "Leave a voicemail with a callback number, then retry later the same day"],
            ["Evenings", "An immediate text that names the site and offers a call time", "First call of the next morning, ahead of older leads"],
            ["Weekends and holidays", "The same immediate text, or a staffed or automated call if your IRB-approved process allows it", "Call at the start of the next staffed day"],
          ],
          note: "Texts and automated calls need the right consent and an opt-out; see our [TCPA guide for AI outreach](/blog/tcpa-ai-outreach-2026). The Adams Clinical team used voicemail, an automated text and follow-up calls for non-responders.{{cite:starling-2025}}",
        },
        {
          type: "p",
          text: "Getting below a few minutes reliably is hard for a coordinator who is also running visits. That is the gap Bond's [Engage](/engage) stage is built for: Bond creates and runs Meta and Google ad campaigns for each study, and its voice and SMS agents contact every new ad lead immediately, keep following up with every lead who has not responded, then pre-screen patients and book them into the site's calendar.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "measure-it",
      heading: "How do you measure your own speed to lead?",
      blocks: [
        {
          type: "p",
          text: "Most sites cannot answer \"how long do our leads wait?\" because the form submission and the first call live in different systems. Fix that first, then copy the Adams Clinical analysis on your own data.",
        },
        {
          type: "checklist",
          items: [
            "**Timestamp every step**: form submitted, first attempt, first conversation, pre-screen completed, visit booked.",
            "**Report the median wait and the slowest tenth of leads**, by ad source and by day of week. Averages hide the leads that waited all weekend.",
            "**Bucket leads by delay** (same hour, same day, next day, later) and compare the share reached and booked in each, as the Adams Clinical team did by 24-hour band.{{cite:starling-2025}}",
            "**Count leads never attempted.** In the HBR audit, 23% of companies never responded at all; a lead stuck in an inbox is the same failure.{{cite:hbr-2011}}",
            "**Review weekly with whoever owns the ad budget**, so spend moves toward the hours and sources your team can actually answer.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond's agents call and text new ad leads the moment they arrive, pre-screen them and book visits into your calendar.",
          secondaryLabel: "Pre-screening call script",
          secondaryHref: "/templates/pre-screening-call-script",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is a text as good as a call for the first touch?",
      a: "The evidence is thin. In the one randomized comparison in the 2026 Cochrane review, telephone reminders probably recruited more people than SMS reminders (5 percentage points), but the result was not statistically significant.{{cite:cochrane-2026}} Use both: a text so the person recognizes you, and a call to have the conversation.",
    },
    {
      q: "Is there a legal deadline for calling back a trial lead?",
      a: "No federal rule sets one. The rules that do apply are about consent: automated or AI-voice calls and texts need the right consent and an opt-out path. Our [TCPA guide](/blog/tcpa-ai-outreach-2026) covers them; it is not legal advice.",
    },
    {
      q: "What if most of our leads come in at night?",
      a: "Send an immediate text that names the site and offers a call time, put those leads first in the next morning's queue, and track their reach rate separately. If night leads keep converting worse, staff or automate that window.",
    },
  ],
  sources: [
    {
      id: "hbr-2011",
      title: "The Short Life of Online Sales Leads",
      publisher: "Harvard Business Review (Oldroyd JB, McElheran K, Elkington D)",
      url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      year: "2011",
      note: "Read October 2026. Quote: \"We audited 2,241 U.S. companies, measuring how long each took to respond to a web-generated test lead. Although 37% responded to their lead within an hour, and 16% responded within one to 24 hours, 24% took more than 24 hours—and 23% of the companies never responded at all. The average response time, among companies that responded within 30 days, was 42 hours.\" Quote: \"1.25 million sales leads received by 29 B2C and 13 B2B companies in the U.S. Firms that tried to contact potential customers within an hour of receiving a query were nearly seven times as likely to qualify the lead (which we defined as having a meaningful conversation with a key decision maker) as those that tried to contact the customer even an hour later—and more than 60 times as likely as companies that waited 24 hours or longer.\"",
    },
    {
      id: "starling-2025",
      title: "Importance of Speed of First Attempted Contact in Alzheimer's Trial Participation",
      publisher: "Alzheimer's & Dementia (Starling S et al., Adams Clinical), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11714075/",
      year: "2025",
      note: "Conference abstract, Alzheimer's & Dementia 2024;20(Suppl 6):e088352, published January 2025. Read October 2026. Quote: \"From January to December 2023, 6881 individuals applied to participate in AD trials through online advertisements. Time to first attempted call ranged from under an hour to 227 days, with 95.4% occurring within 72 hours. 46% of applicants eventually communicated with a recruiter.\" Quote: \"Calls made within 24 hours yielded a 47.9% success rate, compared to 42.7% for 24‐48 hours, and 39.4% for 48‐72 hours. Unlike for MDD, time to the first attempted call wasn't predictive of participants answering the first call\". Quote: \"A voicemail was left for non‐responsive participants, along with an automated text and additional follow‐up calls in the following days.\"",
    },
    {
      id: "pew-2020",
      title: "Most Americans don't answer cellphone calls from unknown numbers",
      publisher: "Pew Research Center",
      url: "https://www.pewresearch.org/short-reads/2020/12/14/most-americans-dont-answer-cellphone-calls-from-unknown-numbers/",
      year: "2020",
      note: "Survey of 10,211 U.S. adults, July 13-19, 2020. Read October 2026. Quote: \"Eight-in-ten Americans say they don't generally answer their cellphone when an unknown number calls\". Quote: \"The majority of Americans (67%) say their general practice is to not answer the phone when an incoming call is from an unknown number but to check a voicemail if one is left. The share of Americans who say they generally ignore any voicemail left after not answering a call is relatively low (14%)\"",
    },
    {
      id: "brogger-mikkelsen-2020",
      title: "Online Patient Recruitment in Clinical Trials: Systematic Review and Meta-Analysis",
      publisher: "Journal of Medical Internet Research (Brøgger-Mikkelsen M et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7673977/",
      year: "2020",
      note: "61 studies reviewed, 23 in the meta-analyses. Read October 2026. Quote: \"online recruitment had a significantly lower cost per enrollee compared with offline recruitment (US $72 vs US $199\". Quote: \"we found that 69% (9/13) of studies had significantly better offline conversion rates compared with online conversion rates\".",
    },
    {
      id: "cochrane-2026",
      title: "Strategies to improve recruitment to randomised trials (Cochrane review update)",
      publisher: "Cochrane Database of Systematic Reviews (Parker A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13576036/",
      year: "2026",
      note: "Published September 2026; searches to February 2023. Read October 2026. Quote: \"Using telephone reminders probably increases recruitment compared to SMS reminders. RD = 5% (95% CI −1% to 11%); GRADE: moderate (−1 level: imprecision – single study)\". Quote: \"the effectiveness of this strategy is not statistically significant.\"",
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
    { label: "Engage: voice and text outreach", href: "/engage", description: "How Bond's agents contact, pre-screen and book every new ad lead." },
    { label: "TCPA rules for AI voice calls and patient texts", href: "/blog/tcpa-ai-outreach-2026", description: "Consent and opt-out rules for automated calls and texts about a study." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A script for the first conversation with a trial lead." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "First-contact and follow-up text wording with opt-out language." },
  ],
};

export default page;
