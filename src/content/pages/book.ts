import type { SeoPage } from "../types";

const page: SeoPage = {
  path: "/book",
  category: "product",
  title: "Book: trial screening visits booked onto your calendar",
  description:
    "Bond pre-screens every lead and books screening visits straight into your site's calendar, with reminders by text, voice or email and support after enrollment.",
  keywords: [
    "clinical trial visit scheduling",
    "screening visit booking clinical trials",
    "clinical trial appointment reminders",
    "reduce screening visit no-shows",
  ],
  eyebrow: "Book",
  h1: "Book: pre-screened patients booked straight into your calendar",
  intro:
    "Book is the stage where a lead becomes a booked study visit. Once a patient passes the pre-screening questions, Bond's voice and SMS agents book the screening visit straight into the site's calendar, often in the same call, then send reminders by text, voice or email so the patient shows up.{{cite:bond-site,bond-product}} After enrollment, the same agents keep supporting participants with visit reminders, transportation booking and check-ins.{{cite:bond-product}}",
  summary:
    "Pre-screened patients booked straight into the site's calendar, with reminders by text, voice or email and support after enrollment.",
  lastUpdated: "2026-10-05",
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See pricing", secondaryHref: "/pricing" },
  sections: [
    {
      id: "what-book-does",
      heading: "What does Book do?",
      blocks: [
        {
          type: "p",
          text: "Book turns pre-screened patients into visits on the calendar. It is the third stage of Bond's workflow: [Identify](/identify) finds eligible patients in the site's EHR, [Engage](/engage) reaches them and every lead from the Meta and Google ad campaigns Bond runs, and Book gets each qualified patient to a booked study visit.{{cite:bond-site,bond-product}}",
        },
        {
          type: "steps",
          items: [
            {
              title: "Pre-screen",
              text: "The agent asks the questions in the site's approved pre-screening script, skipping any the chart already answers for patients found by Identify.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Book",
              text: "A patient who qualifies is booked into an open slot on the site's calendar. One call can pre-screen a patient and book the visit.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Remind",
              text: "Reminders go out by text, voice or email before the visit.{{cite:bond-site,bond-product}}",
            },
            {
              title: "Support after enrollment",
              text: "The same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
            },
          ],
        },
      ],
    },
    {
      id: "lead-to-visit",
      heading: "How does a lead become a booked visit?",
      blocks: [
        {
          type: "p",
          text: "Most leads are lost between the first contact and the calendar. Bond closes that gap in one workflow. Leads from the Meta and Google ad campaigns Bond creates are contacted immediately, and the agents keep following up with every lead who has not responded, so more patients answer, pre-screen and get booked.{{cite:bond-product}} Patients found in the site's EHR go through the same pre-screening and booking.{{cite:bond-site}}",
        },
        {
          type: "ul",
          items: [
            "**The patient's language.** Conversations run in English, Spanish, Mandarin and many other languages, and can switch languages mid-call.{{cite:bond-product}}",
            "**A person whenever needed.** Patients are told AI is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
            "**Anything off-script goes to staff.** Questions the script does not cover are escalated to a coordinator rather than answered by the agent.{{cite:bond-site}}",
          ],
        },
      ],
    },
    {
      id: "coordinator-view",
      heading: "Where do bookings go, and what does the coordinator see?",
      blocks: [
        {
          type: "p",
          text: "Visits are booked into the site's calendar, and coordinators follow each patient in Bond's real-time dashboard, with an audit trail behind every step.{{cite:bond-site}} Status can also go to a Google Sheet or the site's CTMS.{{cite:bond-site}} The dashboard reports the same funnel a sponsor asks about: patients matched, contacted, pre-screened, consented and randomized.{{cite:bond-site}}",
        },
      ],
    },
    {
      id: "reminders",
      heading: "Do reminders actually reduce missed visits?",
      blocks: [
        {
          type: "p",
          text: "The evidence for reminders is solid outside of trials. A Cochrane review of randomized trials found moderate-quality evidence from seven studies (5,841 participants) that text message reminders improved attendance at healthcare appointments compared with no reminder (risk ratio 1.14, 95% CI 1.03 to 1.26), and that text reminders worked about as well as phone call reminders (risk ratio 0.99, 95% CI 0.95 to 1.02).{{cite:cochrane-sms-2013}}",
        },
        {
          type: "p",
          text: "Those studies covered routine healthcare appointments, not study visits, so treat them as a guide rather than a promise. Bond sends reminders by text, voice or email, so a site can match the channel to the patient.{{cite:bond-site,bond-product}}",
        },
      ],
    },
    {
      id: "after-enrollment",
      heading: "What happens after a patient enrolls?",
      blocks: [
        {
          type: "p",
          text: "Booking does not stop at the screening visit. After enrollment, the same voice and SMS agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out, so coordinators can step in early.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "pricing",
      heading: "How is booking priced?",
      blocks: [
        {
          type: "p",
          text: "Booking is not priced separately. Bond charges a volume-based fee per screened patient, meaning each patient Bond calls and texts to pre-screen for the study, plus a percentage of the randomization milestone payment for each patient, with no integration fee.{{cite:bond-product}} Ad spend for Meta and Google campaigns is not included; it comes out of the site's own advertising budget for the study.{{cite:bond-product}} See [pricing](/pricing).",
        },
      ],
    },
    {
      id: "limits",
      heading: "What does Book not do?",
      blocks: [
        {
          type: "ul",
          items: [
            "**It does not run the screening visit.** Site staff see the patient, and the PI decides eligibility.",
            "**It does not obtain consent.** [Consent](/consent) support explains the form in plain language and answers questions; the site and PI obtain consent.{{cite:bond-site}}",
            "**It does not guarantee attendance.** Reminders help, but a patient can still miss a visit, and the site decides how to reschedule.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can Bond book visits for leads from our own ads or lists?",
      a: "Yes. Bond's agents can pre-screen and book patients from a list the site already has, such as ad leads, referrals or registry contacts, as well as leads from the Meta and Google ad campaigns Bond runs and patients found in the site's EHR.{{cite:bond-site,bond-product}}",
    },
    {
      q: "How quickly can booking start?",
      a: "A pilot can start on a list the site already has before the EHR connection is in place. Full EHR integration typically takes 48 hours, depending on the EHR, IT review and interface method.{{cite:bond-site}} See [implementation](/implementation).",
    },
    {
      q: "Can a patient talk to a person before booking?",
      a: "Yes. Patients are told AI is used and can reach a person at any time, through a live transfer to a coordinator or a callback, whichever the site prefers.{{cite:bond-site,bond-product}}",
    },
  ],
  sources: [
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
    {
      id: "cochrane-sms-2013",
      title: "Mobile phone messaging reminders for attendance at healthcare appointments",
      publisher: "Cochrane Database of Systematic Reviews (Gurol-Urganci I, de Jongh T, Vodopivec-Jamsek V, Atun R, Car J)",
      url: "https://pubmed.ncbi.nlm.nih.gov/24310741/",
      year: "2013",
      note: "Read October 5, 2026. Quote: \"We found moderate quality evidence from seven studies (5841 participants) that mobile text message reminders improved the rate of attendance at healthcare appointments compared to no reminders (risk ratio (RR) 1.14 (95% confidence interval (CI) 1.03 to 1.26)). There was also moderate quality evidence from three studies (2509 participants) that mobile text message reminders had a similar impact to phone call reminders (RR 0.99 (95% CI 0.95 to 1.02).\"",
    },
  ],
  related: [
    { label: "Engage: ads, instant outreach and follow-up", href: "/engage", description: "How every ad lead is contacted immediately and followed up." },
    { label: "Identify: EHR screening", href: "/identify", description: "How Bond finds eligible patients in your records." },
    { label: "Pricing", href: "/pricing", description: "A fee per screened patient plus a share of each randomization milestone." },
    { label: "Implementation", href: "/implementation", description: "Live in 48 hours, step by step." },
  ],
};

export default page;
