import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/patient-attitudes-ai-calls",
  category: "blog",
  title: "How patients feel about AI in health care communication",
  description:
    "Survey evidence on how patients feel about AI in health care, why disclosure and a human option matter, and what it means for AI calls and texts about trials.",
  keywords: [
    "patient attitudes AI health care survey",
    "patients AI disclosure",
    "AI phone calls patients",
    "trust in AI health systems",
    "AI voice agent patient acceptance",
  ],
  eyebrow: "Blog",
  h1: "How patients feel about AI in health care communications: what the surveys show",
  intro:
    "Patients are wary of AI in their own care and want to be told when it is used. In a December 2022 Pew survey, 60% of US adults said they would be uncomfortable if their provider relied on AI, and in a 2019 national survey 66% said it was very important to be told when AI played a big role in their care.{{cite:pew-2023,khullar-2022}} Almost none of this research covers recruitment calls, so the safest design follows from what it does show: disclose plainly, lead with a name the patient trusts, and make a person easy to reach.",
  summary: "What national surveys and early studies say about patient comfort with AI, disclosure and trust, applied to AI recruitment calls and texts.",
  lastUpdated: "2027-01-08",
  blog: { date: "2027-01-08", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Read about Engage", secondaryHref: "/engage" },
  sections: [
    {
      id: "comfort",
      heading: "How comfortable are patients with AI in their care?",
      blocks: [
        {
          type: "p",
          text: "Not very, when it comes to their own care. Pew surveyed 11,004 US adults in December 2022: six in ten said they would feel uncomfortable if their own provider relied on AI to diagnose disease and recommend treatments, and 39% said they would be comfortable. Asked about the effect on the patient-provider relationship, 57% said AI would make it worse and 13% better. On the security of health records, 37% expected AI to make it worse and 22% better.{{cite:pew-2023}}",
        },
        {
          type: "p",
          text: "Comfort depends on the task. In a nationally representative survey of 926 adults in December 2019, 12.3% were very comfortable and 42.7% somewhat comfortable with AI reading a chest X-ray, but only 6.0% and 25.2% with AI diagnosing cancer. Most respondents were concerned about misdiagnosis (91.5%), privacy breaches (70.8%), less time with clinicians (69.6%) and higher costs (68.4%).{{cite:khullar-2022}}",
        },
      ],
    },
    {
      id: "disclosure",
      heading: "Do patients want to be told when AI is involved?",
      blocks: [
        {
          type: "p",
          text: "Yes, consistently. In the 2019 survey, 66.0% said it was very important to be told when AI played a big role in their diagnosis or treatment and 29.8% said it was somewhat important; even for a small role, 45.6% said very important.{{cite:khullar-2022}}",
        },
        {
          type: "p",
          text: "Disclosure seems to cost little. At Duke, 1,455 members of a patient advisory panel rated replies to portal messages in late 2023. They slightly preferred AI-drafted replies, and satisfaction dipped only slightly when AI authorship was disclosed: 0.13 points on a 5-point scale against a human-author label, and 0.09 points against no label. More than 75% were satisfied whoever wrote the reply, and the authors concluded disclosure should be kept.{{cite:cavalier-2025}} Respondents were older and more educated than the panel as a whole.",
        },
        {
          type: "p",
          text: "Interviews in 2025 with 40 patients from the same health system, all previously surveyed about AI-drafted messages, found they broadly endorsed AI disclosure as important for trust but differed on when and how it should be made, and their comfort with AI-drafted messages depended on a clinician reviewing them.{{cite:owens-2026}}",
        },
      ],
    },
    {
      id: "trust",
      heading: "Who trusts health systems to use AI?",
      blocks: [
        {
          type: "p",
          text: "A minority. In a national survey of 2,039 adults in June and July 2023, 65.8% reported low trust that their health care system would use AI responsibly and 57.7% low trust that it would make sure an AI tool would not harm them. General trust in the health system was the strongest predictor of trusting its AI (odds ratio 4.29), while people who had experienced discrimination in care were less trusting (odds ratio 0.66). Health literacy and knowledge of AI were not associated with trust.{{cite:nong-platt-2025}}",
        },
        {
          type: "p",
          text: "Our reading: explaining how the AI works is unlikely to move trust much, while the institution behind the call matters a great deal. An AI call that opens with the patient's own clinic or doctor starts from that clinic's trust; one that opens with an unfamiliar company does not.",
        },
      ],
    },
    {
      id: "real-calls",
      heading: "What happens when patients actually talk to an AI on the phone?",
      blocks: [
        {
          type: "p",
          text: "The best evidence comes from UK eye surgery follow-up, not recruitment. In a 2021 to 2022 study at two NHS hospitals, an AI agent phoned patients about three weeks after cataract surgery to ask about symptoms. In interviews with 20 of the patients, acceptability was generally good for routine cases, but patients worried about the lack of a human element when there were complications.{{cite:meinert-2024}}",
        },
        {
          type: "p",
          text: "In routine use at two NHS trusts from October 2022 to April 2023, 1,269 patients completed calls with a later version of the agent. Their median age was 77, call outcomes did not differ significantly by age, gender or ethnicity, and the patient Net Promoter Score was 47.{{cite:higham-2026}} Several authors of both studies are affiliated with the company that makes the agent.",
        },
        {
          type: "p",
          text: "We found no published study of how patients respond to AI calls about clinical trials specifically. Until one exists, sites should measure their own: opt-outs, requests for a person, and early hang-ups.",
        },
      ],
    },
    {
      id: "design",
      heading: "What should an AI recruitment call do differently?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Say it is AI at the start.** Patients across these studies want to know, and disclosure appears to cost little satisfaction.{{cite:khullar-2022,cavalier-2025}}",
            "**Lead with a name the patient trusts.** Name the site, clinic or doctor first, because trust in the institution predicted trust in its AI.{{cite:nong-platt-2025}}",
            "**Make a person easy to reach.** Offer a transfer or callback at any point, and send anything clinical to staff, since patients worried most about the missing human element when things were not routine.{{cite:meinert-2024}}",
            "**Keep the AI on narrow tasks.** Comfort in the 2019 survey was highest for narrow jobs such as reading an X-ray and lowest for diagnosing cancer. Scheduling and eligibility questions are narrow; medical advice belongs with staff.{{cite:khullar-2022}}",
            "**Speak the patient's language, and stop when asked.**",
            "**Check the rules.** Our post on [TCPA rules for AI calls and texts](/blog/tcpa-ai-outreach-2026) covers the FCC's AI voice ruling and state disclosure laws. This is not legal advice.",
          ],
        },
        {
          type: "p",
          text: "Bond's agents are built this way: they tell every patient that AI is being used, let the patient reach a person at any time through a live transfer to a coordinator or a callback, and work in the patient's language, switching mid-call if needed.{{cite:bond-product}}",
        },
      ],
    },
    {
      id: "limits",
      heading: "What do these surveys not tell us?",
      blocks: [
        {
          type: "p",
          text: "Quite a lot. The national surveys are from 2019 to 2023 and mostly ask about AI in diagnosis, not a call to book a visit. Attitudes also shift with familiarity: among Pew respondents who had heard a lot about AI, 50% were comfortable with it in their own care, against majorities uncomfortable among those who had heard a little (63%) or nothing (70%).{{cite:pew-2023}} The Duke studies come from one health system's advisory panel.",
        },
        {
          type: "p",
          text: "The practical answer is to ask your own patients. Add one optional question at the end of AI calls, review a sample of transcripts each month, and report opt-out and transfer rates to your IRB if it asks.",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Hear how an AI pre-screening call discloses itself, hands off to a coordinator and books a visit.",
          secondaryLabel: "Read about Engage",
          secondaryHref: "/engage",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do patients hang up when told a call is AI?",
      a: "We found no published data on this for recruitment calls. In the Duke portal-message study, disclosing AI authorship lowered satisfaction only slightly, and more than 75% of respondents were satisfied either way.{{cite:cavalier-2025}} Track early hang-ups and transfer requests on your own calls.",
    },
    {
      q: "Are older patients less comfortable with AI?",
      a: "Not clearly. In the 2019 national survey, answers about disclosure and AI diagnosis were similar across age groups, and in routine use of an AI follow-up call after cataract surgery, patients had a median age of 77 and call outcomes did not differ by age.{{cite:khullar-2022,higham-2026}}",
    },
    {
      q: "Is AI disclosure legally required on recruitment calls?",
      a: "It depends on the channel, the state and how the call is classified. Our post on [TCPA rules for AI calls and texts](/blog/tcpa-ai-outreach-2026) covers the federal ruling and state laws. This is not legal advice.",
    },
  ],
  sources: [
    {
      id: "pew-2023",
      title: "60% of Americans Would Be Uncomfortable With Provider Relying on AI in Their Own Health Care",
      publisher: "Pew Research Center",
      url: "https://www.pewresearch.org/science/2023/02/22/60-of-americans-would-be-uncomfortable-with-provider-relying-on-ai-in-their-own-health-care/",
      year: "2023",
      note: "Read October 2026. American Trends Panel survey of 11,004 US adults, December 12 to 18, 2022. Quote: \"Six-in-ten U.S. adults say they would feel uncomfortable if their own health care provider relied on artificial intelligence to do things like diagnose disease and recommend treatments; a significantly smaller share (39%) say they would feel comfortable with this.\" Quote: \"57% say the use of artificial intelligence to do things like diagnose disease and recommend treatments would make the patient-provider relationship worse. Only 13% say it would be better.\" Quote: \"37% think using AI in health and medicine would make the security of patients' records worse, compared with 22% who think it would improve security.\" Quote: \"Among those who say they have heard a lot about artificial intelligence, 50% are comfortable with the use of AI in their own health care ... majorities of those who have heard a little (63%) or nothing at all (70%) about AI say they would be uncomfortable\".",
    },
    {
      id: "khullar-2022",
      title: "Perspectives of Patients About Artificial Intelligence in Health Care",
      publisher: "JAMA Network Open (Khullar D et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9069257/",
      year: "2022",
      note: "Read October 2026. Nationally representative online panel, December 3 to 18, 2019; 926 respondents. Quote: \"Regarding being informed if AI played a big role in their diagnosis or treatment, 66% of respondents deemed it very important and 29.8% stated it was somewhat important.\" Small role, very important: 422 (45.6%). Quote: \"12.3% of respondents were very comfortable and 42.7% were somewhat comfortable with AI reading chest radiographs, but only 6.0% were very comfortable and 25.2% were somewhat comfortable about AI making cancer diagnoses. Most respondents were very concerned or somewhat concerned about AI's unintended consequences, including misdiagnosis (91.5%), privacy breaches (70.8%), less time with clinicians (69.6%), and higher health care costs (68.4%).\" Quote: \"Responses were similar by age and race and ethnicity.\"",
    },
    {
      id: "cavalier-2025",
      title: "Ethics in Patient Preferences for Artificial Intelligence-Drafted Responses to Electronic Messages",
      publisher: "JAMA Network Open (Cavalier JS et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11897835/",
      year: "2025",
      note: "Read October 2026. Duke University Health System patient advisory committee, surveys October 31 to December 11, 2023. Quote: \"Of the 2511 members surveyed, 1455 (57.9%) responded, with respondents being older ... more educated\". Quote: \"Participants tended to have higher satisfaction with a human disclosure over AI disclosure, with a mean difference of 0.13 (95% CI, 0.05-0.22) points, and with no disclosure over AI authorship disclosure, with a mean difference of 0.09 (95% CI, 0.01-0.17) points. Regardless of author or disclosure type, more than 75% of respondents were satisfied\". Quote: \"Although AI disclosure may slightly reduce satisfaction, disclosure should be maintained to uphold patient autonomy and empowerment.\"",
    },
    {
      id: "owens-2026",
      title: "Patient Perspectives on AI-Drafted Electronic Portal Messages",
      publisher: "JAMA Network Open (Owens K et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13343239/",
      year: "2026",
      note: "Read October 2026. Qualitative interviews with 40 adult patients, April to August 2025. Quote: \"Patients expressed high comfort with AI-drafted messages, conditional on clinician oversight.\" Quote: \"Participants broadly endorsed AI disclosure, describing transparency as important for trust, but differed in preferred disclosure timing and format.\"",
    },
    {
      id: "nong-platt-2025",
      title: "Patients' Trust in Health Systems to Use Artificial Intelligence",
      publisher: "JAMA Network Open (Nong P, Platt J), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11829222/",
      year: "2025",
      note: "Read October 2026. NORC AmeriSpeak panel, June to July 2023; 2,039 respondents. Quote: \"Most respondents reported low trust in their health care system to use AI responsibly (65.8%) and low trust that their health care system would make sure an AI tool would not harm them (57.7%).\" Quote: \"respondents with higher trust were more likely to believe ... use AI responsibly (OR, 4.29; 95% CI, 3.25-5.67)\". Quote: \"Experiences of discrimination while seeking care were negatively associated with trust in systems using AI responsibly (OR, 0.66; 95% CI, 0.48-0.92)\". Quote: \"There was no association between health literacy or AI knowledge and trust in health care systems using AI.\"",
    },
    {
      id: "meinert-2024",
      title: "Accuracy and safety of an autonomous artificial intelligence clinical assistant conducting telemedicine follow-up assessment for cataract surgery",
      publisher: "eClinicalMedicine (Meinert E et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11266473/",
      year: "2024",
      note: "Read October 2026. Two UK teaching hospitals, September 2021 to January 2022; several authors affiliated with Ufonia Limited, which makes the agent. Quote: \"Acceptability, from interviews with 20 participants, was generally good in routine circumstances but patients were concerned about the lack of a 'human element' in cases with complications.\"",
    },
    {
      id: "higham-2026",
      title: "Evaluation of Routine Clinical Deployment of an Autonomous Artificial Intelligence Assistant for Cataract Follow-Up in the National Health Service",
      publisher: "Clinical Ophthalmology (Higham A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13098554/",
      year: "2026",
      note: "Read October 2026. Oxford University Hospitals and Buckinghamshire Healthcare NHS trusts, October 2022 to April 2023; several authors affiliated with Ufonia Limited. Quote: \"Of 1580 eligible patients, 1269 (78%) completed the Dora R2 call.\" Quote: \"The median patient age was 77 years, with 84% identifying as white. There were no significant differences in call outcomes based on demographic factors (at 5% significance level). The Net Promoter Score for patient acceptability was 47\".",
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
    { label: "Engage: AI voice and text outreach", href: "/engage", description: "How Bond's agents disclose AI use and hand off to coordinators." },
    { label: "TCPA rules for AI calls and patient texts", href: "/blog/tcpa-ai-outreach-2026", description: "The FCC's AI voice ruling, opt-outs and state disclosure laws." },
    { label: "IRB submission language for AI outreach", href: "/templates/irb-submission-language-ai-outreach", description: "Template wording for describing AI calls and texts to an IRB." },
    { label: "HIPAA and IRB rules for recruitment outreach", href: "/guides/irb-hipaa-patient-outreach", description: "Who may contact patients about a study, and how." },
  ],
};

export default page;
