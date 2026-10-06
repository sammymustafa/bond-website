import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/pediatric-trial-recruitment-parents",
  category: "blog",
  title: "Pediatric trial recruitment: parents, permission and assent",
  description:
    "Federal permission and assent rules for pediatric trials, what research shows about how parents decide, and a checklist for reaching and informing parents.",
  keywords: [
    "pediatric clinical trial recruitment",
    "parental permission and child assent",
    "21 CFR 50 subpart D",
    "recruiting parents for pediatric trials",
  ],
  eyebrow: "Blog",
  h1: "Recruiting children for trials starts with parents: permission, assent and the first conversation",
  intro:
    "In a pediatric trial, a parent usually decides, and the child must still agree when old enough to. Federal rules set when one parent's permission is enough and when a child's assent is required. Research on parents shows who should raise the study, how to explain it and why parents say no. Here is both, with a checklist a site can use.",
  summary: "Permission and assent rules for pediatric trials, how parents decide, and a site checklist for reaching and informing them.",
  lastUpdated: "2027-01-06",
  blog: { date: "2027-01-06", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Consent support", secondaryHref: "/consent" },
  sections: [
    {
      id: "why-pediatric-trials-struggle",
      heading: "Why do pediatric trials struggle to enroll?",
      blocks: [
        {
          type: "p",
          text: "Recruitment is the most common reason they stop. Of 559 pediatric randomized trials registered on ClinicalTrials.gov, 104 (19%) were discontinued early, and difficulty with patient accrual was the most cited reason, at 37%.{{cite:pica-2016}} A 2022 analysis of pediatric trials found 11.1% stopped early, with recruitment failure the predominant reason.{{cite:brewster-2022}}",
        },
        {
          type: "p",
          text: "Academic trials carried more of that risk: in the 2016 study, industry-funded trials were less likely to be discontinued than academic ones (odds ratio 0.46).{{cite:pica-2016}} Neither study breaks down why accrual failed, but both point to the same place a site can act on: how families first hear about a study, and what they understand when they are asked.",
        },
      ],
    },
    {
      id: "permission-and-assent-rules",
      heading: "What do federal rules require for permission and assent?",
      blocks: [
        {
          type: "p",
          text: "FDA's rules at 21 CFR 50 subpart D cover FDA-regulated investigations; HHS's 45 CFR 46 subpart D covers research HHS conducts or supports, with parallel text. Permission is the agreement of a parent or guardian. Assent is a child's affirmative agreement, and \"mere failure to object should not, absent affirmative agreement, be construed as assent.\" Who counts as a child depends on the law of the place where the study runs.{{cite:ecfr-21-50,ecfr-45-46d}}",
        },
        {
          type: "table",
          caption: "Risk category and parental permission (21 CFR 50.51 to 50.54; 45 CFR 46.404 to 46.407)",
          columns: ["Risk category", "Parental permission"],
          rows: [
            ["Not greater than minimal risk (50.51)", "The IRB may find one parent's permission sufficient{{cite:ecfr-21-50}}"],
            ["Greater than minimal risk with prospect of direct benefit (50.52)", "The IRB may find one parent's permission sufficient"],
            ["Minor increase over minimal risk, no direct benefit, knowledge about the child's condition (50.53)", "Both parents, unless one is deceased, unknown, incompetent or not reasonably available, or only one has legal responsibility"],
            ["Not otherwise approvable; serious problem affecting children (50.54)", "Both parents, with the same exceptions"],
          ],
          note: "45 CFR 46.408(b) sets the same one-parent and two-parent rules for 46.404 to 46.407.{{cite:ecfr-45-46d}}",
        },
        {
          type: "p",
          text: "On assent, the IRB must consider the children's ages, maturity and psychological state. Assent is not required if their capability is so limited that they cannot reasonably be consulted, or if the intervention offers an important direct benefit available only in the study. The IRB also decides whether and how assent is documented.{{cite:ecfr-21-50}} FDA's September 2022 draft guidance, still a draft as of October 2026, notes that children 7 and older are often considered capable of assent.{{cite:fda-peds-ethics-2022}} This is not legal advice; your IRB's determination controls.",
        },
      ],
    },
    {
      id: "who-should-reach-parents",
      heading: "Who should first tell parents about a trial?",
      blocks: [
        {
          type: "p",
          text: "Someone they already trust. In interviews for the Clinical Trials Transformation Initiative, all 24 parents said they would strongly prefer to first hear about a trial from their child's own pediatrician or a clinician caring for the child, rather than a stranger. Being \"cold called\" by a researcher was off-putting to many, even when the researcher was friendly and knowledgeable.{{cite:greenberg-2018}}",
        },
        {
          type: "p",
          text: "For a site, that means outreach under the treating clinician's name where the IRB allows it, and a first message that says who the child's doctor is and why the family is being contacted. See [HIPAA and IRB rules for outreach](/guides/irb-hipaa-patient-outreach) before contacting families from records.",
        },
      ],
    },
    {
      id: "why-parents-say-yes-or-no",
      heading: "What makes parents say yes or no?",
      blocks: [
        {
          type: "p",
          text: "A systematic review found that parents most often cited health benefit for the child, altruism, trust in research and their relationship with the researcher as reasons to join. Fear of risks, distrust of research, logistics and disruption of daily life were the most cited reasons to decline.{{cite:tromp-2016}}",
        },
        {
          type: "p",
          text: "Understanding matters as much as attitude. In a survey of parents approached for one randomized trial at 7 children's hospitals, those who consented had higher trust, better understanding of randomization and less decisional uncertainty; those who declined found the decision harder. Having a college degree and private insurance were associated with a lower likelihood of consent.{{cite:hoberman-2013}} Practical barriers, such as visit times and travel, are often the ones a site can change.",
        },
      ],
    },
    {
      id: "making-it-understood",
      heading: "How can a site make the explanation land?",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "50%", label: "of parents (68 of 137) did not understand randomization after childhood leukemia consent conferences", cite: "kodish-2004" },
            { value: "9.7", label: "grade level of consent documents for pediatric phase I oncology trials, against 6 for the conversations", cite: "koyfman-2016" },
          ],
        },
        {
          type: "p",
          text: "In observed childhood leukemia consent conferences, physicians explained randomization in 83% of cases, yet half of parents did not understand it afterward.{{cite:kodish-2004}} Written documents are harder still: in pediatric phase I oncology, consent documents averaged 6,364 words at a 9.7 grade level.{{cite:koyfman-2016}} In a randomized study using a hypothetical trial, consent documents with high processability, an 8th-grade reading level and graphics produced better understanding than forms without them.{{cite:tait-2013}}",
        },
        {
          type: "p",
          text: "FDA's consent rule requires that the person deciding has \"sufficient opportunity to consider\" and that information is given \"in language understandable\" to them.{{cite:ecfr-21-50}} For parents, that means time, plain language, the family's own language, and a check that randomization and the right to withdraw were understood.",
        },
      ],
    },
    {
      id: "site-checklist",
      heading: "What should a site do to reach and inform parents?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Ask the IRB early which risk category applies, whether one parent's permission is enough, and how assent will be sought and documented for each age band.",
            "Introduce the study through the child's clinician, and avoid unexplained calls from unknown numbers.",
            "Lead with what the child will experience: visits, procedures, time and what happens with school.",
            "Offer visit times outside school and work hours, and travel support where the budget allows.",
            "Explain randomization in one plain sentence, then ask the parent to say it back.",
            "Give families time to decide, and schedule a second conversation rather than pressing at the first.",
            "Prepare a separate, shorter assent form or script for the child's age group, as your IRB requires.",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's [Engage](/engage) voice and text agents contact families in their own language, pre-screen and book visits into the site's calendar, and tell people that AI is used, with a live transfer or callback to a coordinator at any time. After a visit is booked, [consent support](/consent) gives plain-language explanations and answers questions, escalating to staff; the site and PI obtain permission and assent.{{cite:bond-site,bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a pediatric protocol. We will show how outreach to parents and pre-screening would run for it.",
          secondaryLabel: "Consent support",
          secondaryHref: "/consent",
        },
      ],
    },
  ],
  faq: [
    {
      q: "When do both parents need to give permission for a pediatric trial?",
      a: "Under FDA's rules, when the study falls under 21 CFR 50.53 or 50.54, both parents must give permission unless one is deceased, unknown, incompetent or not reasonably available, or only one has legal responsibility for the child. For 50.51 and 50.52, the IRB may find one parent sufficient.{{cite:ecfr-21-50}}",
    },
    {
      q: "At what age must a child give assent?",
      a: "The rules set no fixed age. The IRB decides, considering age, maturity and psychological state; FDA's draft guidance notes that children 7 and older are often considered capable of assent.{{cite:ecfr-21-50,fda-peds-ethics-2022}}",
    },
    {
      q: "Does a child's silence count as assent?",
      a: "No. Both FDA and HHS rules say mere failure to object should not, absent affirmative agreement, be construed as assent.{{cite:ecfr-21-50,ecfr-45-46d}}",
    },
  ],
  sources: [
    {
      id: "ecfr-21-50",
      title: "21 CFR Part 50, Protection of Human Subjects (including subpart D, Additional Safeguards for Children in Clinical Investigations)",
      publisher: "Electronic Code of Federal Regulations",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-50",
      year: "2026",
      note: "Text read via the eCFR API, up to date as of October 2, 2026. Quotes: 50.3(n) \"Assent means a child's affirmative agreement to participate in a clinical investigation. Mere failure to object should not, absent affirmative agreement, be construed as assent.\"; 50.3(r) \"Permission means the agreement of parent(s) or guardian\"; 50.55(b) \"the IRB must take into account the ages, maturity, and psychological state of the children involved\"; 50.55(c) \"the capability of some or all of the children is so limited that they cannot reasonably be consulted\"; 50.55(e)(1) \"the IRB may find that the permission of one parent is sufficient for clinical investigations to be conducted under § 50.51 or § 50.52\"; 50.55(e)(2) \"both parents must give their permission unless one parent is deceased, unknown, incompetent, or not reasonably available, or when only one parent has legal responsibility for the care and custody of the child\"; 50.55(g) \"it must also determine whether and how assent must be documented\"; 50.20 \"sufficient opportunity to consider whether or not to participate\" and \"in language understandable to the subject or the representative\".",
    },
    {
      id: "ecfr-45-46d",
      title: "45 CFR Part 46, Subpart D: Additional Protections for Children Involved as Subjects in Research",
      publisher: "Electronic Code of Federal Regulations",
      url: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-D",
      year: "2026",
      note: "Text read via the eCFR API, October 2026. Quotes: 46.402(b) \"Assent means a child's affirmative agreement to participate in research. Mere failure to object should not, absent affirmative agreement, be construed as assent.\"; 46.408(b) \"the IRB may find that the permission of one parent is sufficient for research to be conducted under § 46.404 or § 46.405. Where research is covered by §§ 46.406 and 46.407 and permission is to be obtained from parents, both parents must give their permission unless one parent is deceased, unknown, incompetent, or not reasonably available\".",
    },
    {
      id: "fda-peds-ethics-2022",
      title: "Ethical Considerations for Clinical Investigations of Medical Products Involving Children (draft guidance)",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/ethical-considerations-clinical-investigations-medical-products-involving-children",
      year: "2022",
      note: "Draft guidance, September 2022; still listed as draft when checked in October 2026. Quotes from the PDF: \"Children 7 years of age and older are often considered capable of assent\"; \"Ultimately, the IRB determines whether assent is required and how assent is obtained.\"",
    },
    {
      id: "pica-2016",
      title: "Discontinuation and Nonpublication of Randomized Clinical Trials Conducted in Children",
      publisher: "Pediatrics (Pica N, Bourgeois F)",
      url: "https://pubmed.ncbi.nlm.nih.gov/27492817/",
      year: "2016",
      note: "Abstract read via PubMed. Trials registered on ClinicalTrials.gov 2008 to 2010. Quotes: \"Of 559 trials, 104 (19%) were discontinued early, accounting for an estimated 8369 pediatric participants. Difficulty with patient accrual (37%) was the most commonly cited reason for discontinuation. Trials were less likely to be discontinued if they were funded by industry compared with academic institutions (odds ratio [OR] 0.46, 95% confidence interval [CI] 0.27-0.77).\"",
    },
    {
      id: "brewster-2022",
      title: "Early Discontinuation, Results Reporting, and Publication of Pediatric Clinical Trials",
      publisher: "Pediatrics (Brewster R et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/35314864/",
      year: "2022",
      note: "Abstract read via PubMed. Quote: \"Overall, 11.1% trials were stopped early, with recruitment failure being the predominant reason for discontinuation.\"",
    },
    {
      id: "greenberg-2018",
      title: "Parents' perceived obstacles to pediatric clinical trial participation: Findings from the clinical trials transformation initiative",
      publisher: "Contemporary Clinical Trials Communications (Greenberg RG et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5898566/",
      year: "2018",
      note: "Qualitative interviews; n = 24 parents (19 whose children participated, 5 who declined). Quotes: \"All of the parents interviewed said they would strongly prefer to first hear about a clinical trial participation opportunity from either their child's own pediatrician or from a doctor or other health-care provider caring for them in the hospital, rather than being approached by a stranger.\"; \"Being “cold called” by a researcher about participating in a clinical trial was off-putting to many, even if the researcher was knowledgeable and friendly.\"",
    },
    {
      id: "tromp-2016",
      title: "Motivations of children and their parents to participate in drug research: a systematic review",
      publisher: "European Journal of Pediatrics (Tromp K et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4839044/",
      year: "2016",
      note: "Quotes: \"Most mentioned motivating factors for parents were: health benefit for child, altruism, trust in research, and relation to researcher.\"; \"Fear of risks, distrust in research, logistical aspects and disruption of daily life were mentioned most by parents as discouraging factors.\"",
    },
    {
      id: "hoberman-2013",
      title: "What Factors Influence Parental Decisions to Participate in Clinical Research: Consenters versus Non-consenters",
      publisher: "JAMA Pediatrics (Hoberman A et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3674159/",
      year: "2013",
      note: "Cross-sectional survey of parents approached for one randomized trial (RIVUR) at 7 children's hospitals, July 2008 to May 2011. Quotes: \"Having graduated from college and private health insurance were associated with lower likelihood of providing consent.\"; non-consenters \"found it harder to make their decision compared with consenting parents, who had higher levels of trust and altruism, perceived the potential for enhanced care, reflected better understanding of randomization, and exhibited low decisional uncertainty.\"",
    },
    {
      id: "kodish-2004",
      title: "Communication of randomization in childhood leukemia trials",
      publisher: "JAMA (Kodish E et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/14747504/",
      year: "2004",
      note: "Abstract read via PubMed; data from 1999 to 2001. Quotes: \"Randomization was explained by physicians in 83% of cases and a consent document was presented during the conference in 95% of cases. Interviews after the conference demonstrated that 68 (50%) of 137 parents did not understand randomization.\"",
    },
    {
      id: "koyfman-2016",
      title: "Informed Consent Conversations and Documents: A Quantitative Comparison",
      publisher: "Cancer (Koyfman SA et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4724216/",
      year: "2016",
      note: "Pediatric phase I oncology. Quote: \"ICCs contained fewer words (4,677 vs. 6,364; p=0.0016), had lower FKGL (6 vs. 9.7; p=<0.0001) and higher FRES (77.8 vs. 56.7; p<0.0001) than their respective ICDs, but were more likely to omit critical consent elements, such as voluntariness (55%)\". ICC = informed consent conversation; ICD = informed consent document.",
    },
    {
      id: "tait-2013",
      title: "Informing the Uninformed: Optimizing the Consent Message Using a Fractional Factorial Design",
      publisher: "JAMA Pediatrics (Tait AR et al., University of Michigan), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3700595/",
      year: "2013",
      note: "Parents randomized to 16 versions of a consent document for a hypothetical pain trial. Quote: \"Consent documents with high processability, 8th grade reading level, and graphics resulted in significantly greater gist and verbatim understanding compared with forms without these attributes\".",
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
    { label: "Consent support", href: "/consent", description: "Plain-language explanations and Q&A after a visit is booked." },
    { label: "Informed consent", href: "/glossary/informed-consent", description: "What informed consent requires and who obtains it." },
    { label: "HIPAA and IRB rules for outreach", href: "/guides/irb-hipaa-patient-outreach", description: "What a site needs approved before contacting families." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A template to adapt for calls with parents." },
  ],
};

export default page;
