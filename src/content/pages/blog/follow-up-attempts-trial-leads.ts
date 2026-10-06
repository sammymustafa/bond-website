import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/follow-up-attempts-trial-leads",
  category: "blog",
  title: "How many follow-up attempts should a trial lead get?",
  description:
    "What studies show about contact attempts, call versus text and call timing in trial recruitment, plus a two-week follow-up cadence a site can adapt.",
  keywords: [
    "clinical trial lead follow-up attempts",
    "how many times to call a trial lead",
    "trial recruitment contact attempts",
    "SMS vs phone recruitment reminders",
    "patient recruitment follow-up cadence",
  ],
  eyebrow: "Blog",
  h1: "How many follow-up attempts does a trial lead deserve?",
  intro:
    "More than one, spread over several days, times and channels, with a set stopping point. In one Alzheimer's program fewer than half of online applicants ever spoke with a recruiter, and a pediatric asthma study needed 3.1 contact attempts on average to recruit each family.{{cite:starling-2025,goldman-2018}} The evidence on the exact number is thin, so this post separates what studies show from what is a sensible default.",
  summary: "Evidence on contact attempts, channels and timing for trial leads, and a follow-up cadence to adapt and measure.",
  lastUpdated: "2026-10-19",
  blog: { date: "2026-10-19", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "attempt-evidence",
      heading: "What do studies say about the number of contact attempts?",
      blocks: [
        {
          type: "p",
          text: "Few studies report attempts per enrollee, and they come from different settings. Read them side by side rather than as one benchmark.",
        },
        {
          type: "table",
          caption: "Contact-attempt findings from three recruitment programs",
          columns: ["Study", "Who was contacted", "Finding"],
          rows: [
            ["Alzheimer's trials, Adams Clinical, 2023 data", "6,881 people who applied through Facebook and Google ads", "Calls, voicemail and an automated text over following days; 46% ever spoke with a recruiter{{cite:starling-2025}}"],
            ["Pediatric asthma studies, Rochester, NY", "Caregivers of 311 enrolled children, mostly on Medicaid", "3.1 attempts on average to recruit (range 1 to 15){{cite:goldman-2018}}"],
            ["Diabetes trial, Chicago safety-net hospital", "789 eligible patients, out of 30,772 screened, approached in person, by phone, by flyer or through community health workers", "Two-thirds of enrollees enrolled on the first or second attempt; success waned after two{{cite:barnick-2026}}"],
          ],
          note: "Only the first row involves people who responded to ads; the other programs approached patients and families the study teams identified, so their attempt counts may not transfer to ad leads.{{cite:barnick-2026,goldman-2018}}",
        },
        {
          type: "p",
          text: "The asthma team also reported that 52% of even the easier-to-reach families needed more than five attempts for at least one follow-up visit, and that worries about \"badgering\" did not bear out: once reached, families were engaged and agreeable.{{cite:goldman-2018}}",
        },
      ],
    },
    {
      id: "does-follow-up-work",
      heading: "Does following up with non-responders add enrollments?",
      blocks: [
        {
          type: "p",
          text: "Yes, and this is among the best-supported recruitment findings there is. The 2026 update of the Cochrane review of recruitment strategies, covering 91 randomized studies within trials, rated only five strategies as having high-certainty evidence. One was telephoning people who had not replied to a postal invitation, which raised recruitment by 6 percentage points (95% CI 3 to 9), in trials with low underlying recruitment.{{cite:cochrane-2026}}",
        },
        {
          type: "p",
          text: "The review notes that ethics committees often treat calling non-responders as cold-calling.{{cite:cochrane-2026}} An ad lead is different: the person filled in a form asking to hear about a study. That makes persistent, polite follow-up easier to justify, as long as the IRB has approved the approach and every opt-out is honored.",
        },
      ],
    },
    {
      id: "channels-and-timing",
      heading: "Which channels and times should follow-ups use?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Always leave a voicemail.** In a 2020 Pew survey, 67% of U.S. adults said they let unknown calls go unanswered but check voicemail, while 14% said they generally ignore voicemail as well.{{cite:pew-2020}}",
            "**Pair calls with texts.** In a single randomized comparison, phone reminders probably recruited 5 percentage points more than SMS reminders, but the difference was not statistically significant and calls cost more.{{cite:cochrane-2026}}",
            "**Write texts that give a reason to reply.** Single studies rated moderate certainty found that texts mentioning limited places (3 points) or quoting earlier participants (4 points) probably increased recruitment.{{cite:cochrane-2026}}",
            "**Vary the time of day.** The asthma team asked caregivers when to call and repeated attempts at different times, with emphasis on evenings and weekends, and collected extra contact numbers.{{cite:goldman-2018}}",
          ],
        },
        {
          type: "p",
          text: "We found no trial study that compares morning, afternoon and evening calls head to head for ad leads, so treat time of day as something to test on your own data.",
        },
      ],
    },
    {
      id: "when-to-stop",
      heading: "When should a site stop following up?",
      blocks: [
        {
          type: "p",
          text: "Immediately when the person asks, and otherwise at a point you set in advance. Under the federal TCPA rules, a consumer can revoke consent to automated calls and texts by any reasonable means, and the request must be honored within 10 business days.{{cite:cfr-47-64-1200}} Our [TCPA guide](/blog/tcpa-ai-outreach-2026) explains why the healthcare exemption, with its one-call-a-day limit, does not cover recruitment.",
        },
        {
          type: "p",
          text: "Some states add limits on sales calls. Florida's telemarketing law bars commercial telephone solicitation calls before 8 a.m. or after 8 p.m. and caps them at three per 24 hours on the same subject.{{cite:fl-501616}} Whether a study invitation counts as a commercial solicitation is a question for counsel, but those limits make a reasonable outer bound anywhere. This is not legal advice.",
        },
      ],
    },
    {
      id: "sample-cadence",
      heading: "What does a reasonable follow-up cadence look like?",
      blocks: [
        {
          type: "p",
          text: "This is a starting point built from the evidence above, not a tested standard. Put the attempt count, channels and contact hours in the IRB submission, since FDA expects IRBs to review the methods used to recruit subjects.{{cite:fda-recruiting}}",
        },
        {
          type: "steps",
          items: [
            { title: "Day 0", text: "Call within minutes of the form submission. If there is no answer, leave a voicemail with a callback number and send a short text naming the site and the study team." },
            { title: "Day 0, later", text: "A second call at a different time of day, such as early evening." },
            { title: "Day 1", text: "A morning call and a text that offers a choice of call times or a link to book one." },
            { title: "Day 3", text: "An evening call with voicemail." },
            { title: "Day 7", text: "A text with one new reason to reply, for example that screening places are limited, if that is true and IRB-approved." },
            { title: "Day 14", text: "A final call and a closing text saying the team will stop reaching out and how to get in touch later. Then close the lead." },
          ],
        },
        {
          type: "p",
          text: "Running a cadence like this by hand across hundreds of leads is where most sites fall behind. Bond's [Engage](/engage) agents contact every new ad lead immediately and keep following up with every lead who has not responded, by voice and SMS, before pre-screening patients and booking them into the site's calendar.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "tune-it",
      heading: "How do you know whether your cadence is working?",
      blocks: [
        {
          type: "checklist",
          items: [
            "**Log the attempt number on which each lead was first reached**, then chart the share reached by attempt. If attempts after the fourth add almost no one, shorten the cadence.",
            "**Break results down by lead source and age group.** Ad leads and referrals behave differently, as the studies above show.{{cite:barnick-2026,starling-2025}}",
            "**Count opt-outs and complaints by attempt.** A spike after a certain touch is the clearest sign of over-contact.",
            "**Track booked visits, not just conversations.** The goal is a pre-screened patient on the calendar.",
          ],
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "See how Bond's agents follow up with every lead by call and text, pre-screen them and book visits.",
          secondaryLabel: "Patient outreach SMS templates",
          secondaryHref: "/templates/patient-outreach-sms-templates",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is calling a trial lead several times harassment?",
      a: "Not when the person asked to be contacted, the calls are spaced out, and any request to stop is honored at once. In the Rochester asthma studies, families reached after many attempts were engaged and agreeable once connected.{{cite:goldman-2018}}",
    },
    {
      q: "Does the IRB need to approve our follow-up schedule?",
      a: "FDA says IRBs should review the methods and material investigators use to recruit subjects, so include the cadence, contact hours and scripts in the submission.{{cite:fda-recruiting}}",
    },
    {
      q: "Should texts or calls come first?",
      a: "Both, close together. The one randomized comparison found no statistically significant difference between phone and SMS reminders, and most people screen unknown calls.{{cite:cochrane-2026,pew-2020}}",
    },
  ],
  sources: [
    {
      id: "starling-2025",
      title: "Importance of Speed of First Attempted Contact in Alzheimer's Trial Participation",
      publisher: "Alzheimer's & Dementia (Starling S et al., Adams Clinical), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11714075/",
      year: "2025",
      note: "Conference abstract. Read October 2026. Quote: \"Our sample includes prospective AD trial participants recruited from January to November 2023 via Facebook and Google ads.\" Quote: \"A voicemail was left for non‐responsive participants, along with an automated text and additional follow‐up calls in the following days.\" Quote: \"6881 individuals applied to participate in AD trials through online advertisements\". Quote: \"46% of applicants eventually communicated with a recruiter.\"",
    },
    {
      id: "goldman-2018",
      title: "Recruitment and retention of the Hardest-to-Reach families in community-based asthma interventions",
      publisher: "Clinical Trials (Goldman H et al., University of Rochester), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6218290/",
      year: "2018",
      note: "Read October 2026. Quote: \"On average, 3.1 contact attempts were required for recruitment (range 1-15)\". Quote: \"even the Easier-to-Reach families required many contact attempts, with 52% having >5 attempts for at least one follow-up.\" Quote: \"We asked caregivers for their preferred time for calls, and repeated call attempts at various times, with emphasis on evening hours and weekends.\" Quote: \"While there may be concern about ‘badgering’ with repeated contact efforts, we found that once we connected with families they were consistently highly engaged and agreeable.\"",
    },
    {
      id: "barnick-2026",
      title: "Effectiveness of clinical trial recruitment strategies in a safety-net hospital",
      publisher: "Contemporary Clinical Trials (Barnick K et al., Sinai Urban Health Institute), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/42392502/",
      year: "2026",
      note: "Contemp Clin Trials 2026;168:108390, doi:10.1016/j.cct.2026.108390. Abstract read October 2026 through PubMed's record (the web page showed a browser check). Quote: \"We screened 30,772 patients for eligibility, contacted 789 patients who met eligibility criteria, and enrolled 104 patients into the study for an enrollment rate of 13.2%.\" Quote: \"Two-thirds of enrolled patients enrolled on the first or second contact attempt.\" Quote: \"Regardless of method, enrollment success waned after two contact attempts.\"",
    },
    {
      id: "cochrane-2026",
      title: "Strategies to improve recruitment to randomised trials (Cochrane review update)",
      publisher: "Cochrane Database of Systematic Reviews (Parker A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13576036/",
      year: "2026",
      note: "Published September 2026; 91 studies; searches to February 2023. Read October 2026. Quote: \"Telephone reminders to people who did not respond to an initial postal invitation boosted recruitment by 6% (95% CI 3% to 9%; 2 studies, 1450 participants), in trials with low underlying recruitment\". Quote: \"Contacting non‐responders is widely considered to be cold‐calling, and ethics committees often rule against it.\" Quote: \"Using telephone reminders probably increases recruitment compared to SMS reminders. RD = 5% (95% CI −1% to 11%)\". Quote: \"Mentioning the scarcity of trial places in SMS messages probably increased recruitment: RD = 3%\". Quote: \"Giving quotes from previous participants in SMS messages probably increased recruitment: RD = 4%\".",
    },
    {
      id: "pew-2020",
      title: "Most Americans don't answer cellphone calls from unknown numbers",
      publisher: "Pew Research Center",
      url: "https://www.pewresearch.org/short-reads/2020/12/14/most-americans-dont-answer-cellphone-calls-from-unknown-numbers/",
      year: "2020",
      note: "Survey of 10,211 U.S. adults, July 2020. Read October 2026. Quote: \"The majority of Americans (67%) say their general practice is to not answer the phone when an incoming call is from an unknown number but to check a voicemail if one is left. The share of Americans who say they generally ignore any voicemail left after not answering a call is relatively low (14%)\"",
    },
    {
      id: "cfr-47-64-1200",
      title: "47 CFR 64.1200: Delivery restrictions",
      publisher: "Legal Information Institute, Cornell Law School",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      year: "2026",
      note: "Read October 2026. Quote (paragraph (a)(10)): \"All requests to revoke prior express consent or prior express written consent made in any reasonable manner must be honored within a reasonable time not to exceed ten business days from receipt of such request.\" Healthcare exemption: \"no more than one call per day to each patient's residential line, up to a maximum of three calls combined per week\".",
    },
    {
      id: "fl-501616",
      title: "Florida Statutes 501.616: Unlawful acts and practices (Florida Telemarketing Act)",
      publisher: "The Florida Legislature",
      url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.616.html",
      year: "2026",
      note: "Read October 2026. Quote (subsection (6)): \"A commercial telephone solicitation phone call before 8 a.m. or after 8 p.m. local time in the called person’s time zone.\" and \"More than three commercial telephone solicitation phone calls from any number to a person over a 24-hour period on the same subject matter or issue, regardless of the phone number used to make the call.\"",
    },
    {
      id: "fda-recruiting",
      title: "Recruiting Study Subjects: Information Sheet, Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Read October 2026. Quote: \"The IRB should also review the methods and material that investigators propose to use to recruit subjects.\"",
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
    { label: "Engage: voice and text outreach", href: "/engage", description: "How Bond's agents follow up with every lead and book visits." },
    { label: "Patient outreach SMS templates", href: "/templates/patient-outreach-sms-templates", description: "First-contact, follow-up and opt-out wording for texts." },
    { label: "TCPA rules for AI voice calls and patient texts", href: "/blog/tcpa-ai-outreach-2026", description: "Consent, opt-out and contact-hour rules for automated outreach." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "What to say once a lead picks up." },
  ],
};

export default page;
