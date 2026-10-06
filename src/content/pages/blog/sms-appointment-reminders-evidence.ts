import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/sms-appointment-reminders-evidence",
  category: "blog",
  title: "Text message appointment reminders: what the evidence says",
  description:
    "Randomized trials show text reminders raise attendance about as much as phone calls, at lower cost. What the evidence says on timing, wording and trial visits.",
  keywords: [
    "text message appointment reminders evidence",
    "SMS reminders attendance meta-analysis",
    "clinical trial visit reminders",
    "text vs phone call reminders",
    "appointment reminder wording",
  ],
  eyebrow: "Blog",
  h1: "What the evidence says about text message appointment reminders",
  intro:
    "Text reminders raise attendance. In a Cochrane review, attendance was 78.6% with text reminders against 67.8% with no reminder, close to the 80.3% seen with phone call reminders.{{cite:cochrane-sms-2013}} Nearly all of that evidence comes from routine clinics, much of it outside the US. The one trial-recruitment study we found showed texts and calls worked about equally at getting prescreened patients to a screening visit, and the text cost far less.{{cite:bracken-2019}}",
  summary: "Meta-analyses, a trial-recruitment experiment and a wording study, turned into a reminder setup a site can use.",
  lastUpdated: "2026-10-26",
  blog: { date: "2026-10-26", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Text message templates", secondaryHref: "/templates/patient-outreach-sms-templates" },
  sections: [
    {
      id: "how-much",
      heading: "How much do text reminders improve attendance?",
      blocks: [
        {
          type: "p",
          text: "The Cochrane review pooled randomized trials of mobile phone messaging reminders. It found moderate-quality evidence from 7 studies with 5,841 participants that text reminders improved attendance compared with no reminder, a risk ratio of 1.14. Low-quality evidence from one study of 291 people suggested that adding a text to a postal reminder also helped.{{cite:cochrane-sms-2013}}",
        },
        {
          type: "p",
          text: "A later meta-analysis by Robotham and colleagues pooled 21 randomized studies with 8,345 patients who received text-based notifications and 7,731 who received none. Attendance was 67% against 54%, and no-shows were 15% against 21%. Only one of those studies came from the Americas; most were from Europe and Asia.{{cite:robotham-2016}}",
        },
        {
          type: "stats",
          items: [
            { value: "78.6% vs 67.8%", label: "Attendance with text reminders vs no reminder, Cochrane review", cite: "cochrane-sms-2013" },
            { value: "15% vs 21%", label: "No-shows with electronic notifications vs none, 21 randomized studies", cite: "robotham-2016" },
            { value: "8.4% vs 11.1%", label: "Missed appointments with a specific-cost reminder vs the standard text, one London trust", cite: "hallsworth-2015" },
          ],
        },
      ],
    },
    {
      id: "text-vs-call",
      heading: "Are text reminders as effective as phone calls?",
      blocks: [
        {
          type: "p",
          text: "Roughly. In the Cochrane review, three studies with 2,509 participants compared the two directly and found a similar effect (risk ratio 0.99). Two studies reported that the cost per attended appointment was 55% and 65% lower for texts than for phone calls.{{cite:cochrane-sms-2013}} Robotham's review found that voice reminders appeared somewhat more effective than texts in the studies that compared them.{{cite:robotham-2016}}",
        },
        {
          type: "p",
          text: "The only direct test inside a trial that we found came from an Australian diabetes prevention study. Men aged 50 to 74 who were eligible on a prescreening questionnaire but had not attended screening within four weeks were randomized to a text or a phone reminder. Eight-week attendance was 18% after a text and 23% after a call, a difference that was not statistically significant, and both beat the 12% seen before reminders began. A call cost AU$6.21 against AU$0.53 for a text.{{cite:bracken-2019}}",
        },
        {
          type: "p",
          text: "Who gets the call matters. A 2023 rapid review found moderate-certainty evidence that phone reminders sent to patients a model rated high-risk reduced no-shows (median risk ratio 0.61, 3 trials), against a smaller effect for model-targeted texts (median risk ratio 0.91, 1 trial).{{cite:oikonomidi-2023}} A sensible default is a text for everyone and a call for patients who have missed before or have not replied.",
        },
      ],
    },
    {
      id: "how-many-when",
      heading: "How many reminders should a site send, and when?",
      blocks: [
        {
          type: "p",
          text: "More than one. In Robotham's analysis, multiple notifications raised the chance of attending by 25%, compared with 6% for a single notification, although the extra reminders did not significantly reduce no-shows. Most of the trials sent a single reminder, and timing varied: in nine studies reminders went out 48 hours or less before the appointment, and in three they went out earlier.{{cite:robotham-2016}}",
        },
        {
          type: "p",
          text: "The evidence does not settle exact timing. Our suggestion, not a tested rule: confirm by text when the visit is booked, remind a few days ahead so the patient still has time to rearrange, and send a short reminder the day before.",
        },
      ],
    },
    {
      id: "wording",
      heading: "Does the wording of a reminder matter?",
      blocks: [
        {
          type: "p",
          text: "Yes. Two randomized trials at Barts Health, a London NHS trust, tested reminder texts sent five days before outpatient appointments to 10,111 and then 9,848 patients. A text stating that a missed appointment costs the NHS about £160 cut the missed-appointment rate to 8.4%, against 11.1% for the standard reminder, and the second trial replicated the effect at 8.2%. Saying the same thing in general terms was less effective, at 9.9%.{{cite:hallsworth-2015}}",
        },
        {
          type: "p",
          text: "The trials ran at one trust, and only about 20% of eligible patients had usable mobile numbers on file.{{cite:hallsworth-2015}} A research site cannot quote NHS costs, but two lessons carry over. Specific wording beat general wording, and every new message the team tested put the phone number for rearranging in the text, where the old one pointed to a letter. Give the date, time, address, parking and a direct number to rearrange. Our [text message templates](/templates/patient-outreach-sms-templates) follow this pattern, and any wording change goes back through the IRB.",
        },
      ],
    },
    {
      id: "trial-participants",
      heading: "What do trial participants say about text reminders?",
      blocks: [
        {
          type: "p",
          text: "They find them useful. CISCRP's 2025 online survey, fielded April to June 2025, reached 12,887 people, 34% of whom had taken part in a clinical study. In its list of the most helpful services, text messaging for reminders and instructions came sixth at 66%, behind visits at or near home (76%) and transportation to and from the study center (72%).{{cite:ciscrp-2025}}",
        },
        {
          type: "p",
          text: "Rigorous evidence for follow-up visits is thinner. A 2021 Cochrane review of 81 trials of retention strategies found that most aimed to improve postal questionnaire response, that few evaluated ways to get participants back to trial sites, and that no comparison was supported by high-certainty evidence.{{cite:gillies-2021}} Reminders for in-person trial visits are a reasonable bet, but they are under-tested.",
        },
      ],
    },
    {
      id: "rules",
      heading: "What rules apply to text reminders about a study?",
      blocks: [
        {
          type: "p",
          text: "Get consent to text when the visit is booked, record it, and honor opt-outs in any wording the patient uses. Our post on [TCPA rules for AI calls and patient texts](/blog/tcpa-ai-outreach-2026) covers consent and revocation in detail. Keep the condition and the study drug out of the message, since others may see a phone's lock screen, and ask your IRB which reminder templates it needs to approve. This is not legal advice.",
        },
      ],
    },
    {
      id: "setup",
      heading: "How should a site set up text reminders?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Record consent to text at booking, along with the patient's preferred language.",
            "Send a confirmation with the date, time, address, parking and a direct number to rearrange.",
            "Send at least one more reminder before the visit, and call patients who have missed before or have not replied.",
            "Keep the condition and the study drug out of every message.",
            "Let patients reply to rearrange, and act on those replies the same day.",
            "Track the show rate for each reminder pattern so you can tell what works at your site.",
          ],
        },
        {
          type: "p",
          text: "For the patients Bond books, pre-screened patients go straight into the site's calendar and reminders follow by text, voice or email.{{cite:bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring one active study and see the booking and reminder sequence on your own calendar.",
          secondaryLabel: "Read about Engage",
          secondaryHref: "/engage",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do text reminders work in clinical trials?",
      a: "For screening visits, the best evidence is one randomized study: attendance among prescreened patients was 18% after a single text and 23% after a call, a non-significant difference, against 12% before reminders were used.{{cite:bracken-2019}} Evidence for follow-up visits during a trial is thin.{{cite:gillies-2021}}",
    },
    {
      q: "Are text reminders cheaper than phone calls?",
      a: "Yes. Two studies in the Cochrane review found the cost per attended appointment was 55% and 65% lower with texts.{{cite:cochrane-sms-2013}} In the Australian trial, a call cost AU$6.21 and a text AU$0.53.{{cite:bracken-2019}}",
    },
    {
      q: "Can a reminder text mention the study's condition?",
      a: "Better not. Phones show messages on lock screens and are shared within families. Put the site name, date, time and a callback number in the text, and leave the condition for the conversation.",
    },
  ],
  sources: [
    {
      id: "cochrane-sms-2013",
      title: "Mobile phone messaging reminders for attendance at healthcare appointments",
      publisher: "Cochrane Database of Systematic Reviews (Gurol-Urganci I et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6485985/",
      year: "2013",
      note: "Read October 2026. Eight RCTs, 6,615 participants. Quote: \"We found moderate quality evidence from seven studies (5841 participants) that mobile text message reminders improved the rate of attendance at healthcare appointments compared to no reminders (risk ratio (RR) 1.14 (95% confidence interval (CI) 1.03 to 1.26)). There was also moderate quality evidence from three studies (2509 participants) that mobile text message reminders had a similar impact to phone call reminders (RR 0.99 (95% CI 0.95 to 1.02).\" Quote: \"Overall, the attendance to appointment rates were 67.8% for the no reminders group, 78.6% for the mobile phone messaging reminders group and 80.3% for the phone call reminders group.\" Quote: \"Two studies reported that the costs per text message per attendance were respectively 55% and 65% lower than costs per phone call reminder.\"",
    },
    {
      id: "robotham-2016",
      title: "Using digital notifications to improve attendance in clinic: systematic review and meta-analysis",
      publisher: "BMJ Open (Robotham D et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5093388/",
      year: "2016",
      note: "Read October 2026. Quote: \"21 included in the primary meta-analysis (8345 patients receiving electronic text notifications, 7731 patients receiving no notifications). Studies were included from Europe (9), Asia (7), Africa (2), Australia (2) and America (1). Patients who received notifications were 23% more likely to attend clinic than those who received no notification (risk ratio=1.23, 67% vs 54%). Those receiving notifications were 25% less likely to 'no show' for appointments (risk ratio=.75, 15% vs 21%).\" Quote: \"Multiple notifications increased the risk of patients attending appointments by 25% (compared with 6% for patients receiving one notification), but multiple reminders did not make a significant difference in reducing 'no shows'.\" Quote: \"Voice notifications appeared more effective than text notifications at improving attendance.\" Quote: \"in nine studies notifications were sent 48 hours (or less) before the appointment. In three studies, notifications were sent over 48 hours before the appointment.\"",
    },
    {
      id: "bracken-2019",
      title: "Telephone call reminders did not increase screening uptake more than SMS reminders: a recruitment study within a trial",
      publisher: "Journal of Clinical Epidemiology (Bracken K et al.), via PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/31051248/",
      year: "2019",
      note: "Read October 2026. Australian diabetes prevention RCT, men aged 50 to 74 (N = 709 randomized to reminder type). Quote: \"Attendance was 18% (62/354) in the SMS reminder group, and 23% (80/355) in the phone reminder group, with no statistically significant difference in response according to reminder type (relative risk = 1.29, 95% confidence interval [CI]: 0.96-1.73, P = 0.09).\" Quote: \"did not include the 8-week attendance rate before this evaluation, 12%. Phone reminders cost substantially more than SMS reminders (AU$6.21 vs. AU$0.53 per reminder).\"",
    },
    {
      id: "oikonomidi-2023",
      title: "Predictive model-based interventions to reduce outpatient no-shows: a rapid systematic review",
      publisher: "Journal of the American Medical Informatics Association (Oikonomidi T et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9933067/",
      year: "2023",
      note: "Read October 2026. Quote: \"There was high certainty evidence that predictive model-based text message reminders reduced no-shows (1 RCT, median RR 0.91, interquartile range [IQR] 0.90, 0.92). There was moderate certainty evidence that predictive model-based phone call reminders (3 RCTs, median RR 0.61, IQR 0.49, 0.68) and patient navigators reduced no-shows\".",
    },
    {
      id: "hallsworth-2015",
      title: "Stating Appointment Costs in SMS Reminders Reduces Missed Hospital Appointments: Findings from Two Randomised Controlled Trials",
      publisher: "PLOS ONE (Hallsworth M et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4569397/",
      year: "2015",
      note: "Read October 2026. Barts Health NHS Trust, London; five outpatient specialties; reminders issued five days in advance. A 2015 correction changed only an author affiliation. Quote: \"In Trial One, a message including the cost of a missed appointment to the health system produced a DNA rate of 8.4%, compared to 11.1% for the existing message (OR 0.74, 95% CI 0.61-0.89, P<0.01). Trial Two replicated this effect (DNA rate 8.2%), but also found that expressing the same concept in general terms was significantly less effective (DNA rate 9.9%\". Quote (message text): \"Not attending costs NHS £160 approx.\" Quote: \"it required accurate phone records, which were only obtained for 20% of eligible patients.\"",
    },
    {
      id: "ciscrp-2025",
      title: "2025 Perceptions & Insights Study: Participation Experiences",
      publisher: "Center for Information and Study on Clinical Research Participation (CISCRP)",
      url: "https://www.ciscrp.org/wp-content/uploads/2025/11/2025-Perceptions-Insights-Participation-Experiences_FINAL.pdf",
      year: "2025",
      note: "Read October 2026. Quote: \"Between April and June 2025, CISCRP conducted an online international survey.\" Respondent profile: \"12,887 Survey Respondents\"; \"34% have participated\". Quote (Top 10 Most Helpful Services): \"1) Study visits at home or close to home (76%) 2) Transportation to/from study center (72%)\" and \"6) Text messaging for reminders/instructions (66%)\". Self-selected online sample recruited with partner organizations.",
    },
    {
      id: "gillies-2021",
      title: "Strategies to improve retention in randomised trials",
      publisher: "Cochrane Database of Systematic Reviews (Gillies K et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8092429/",
      year: "2021",
      note: "Read October 2026. Quote: \"We identified 70 eligible papers that reported data from 81 retention trials.\" Quote: \"Most of the interventions we identified aimed to improve retention in the form of postal questionnaire response. There were few evaluations of ways to improve participants returning to trial sites for trial follow-up. None of the comparisons are supported by high-certainty evidence.\"",
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
    { label: "Patient outreach text message templates", href: "/templates/patient-outreach-sms-templates", description: "Booking, reminder and missed-visit texts ready for IRB review." },
    { label: "TCPA rules for AI calls and patient texts", href: "/blog/tcpa-ai-outreach-2026", description: "Consent, opt-outs and the healthcare exemption in 2026." },
    { label: "Engage: outreach, booking and reminders", href: "/engage", description: "How Bond contacts, books and reminds patients." },
    { label: "HIPAA and IRB rules for recruitment outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What the IRB reviews before outreach starts." },
  ],
};

export default page;
