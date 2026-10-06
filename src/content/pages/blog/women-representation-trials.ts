import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/women-representation-trials",
  category: "blog",
  title: "Women in clinical trials: gaps by therapeutic area",
  description:
    "Women are well represented in some trial areas and not in others. FDA and peer-reviewed data by therapeutic area, what drives the gaps, and what sites can do.",
  keywords: [
    "women in clinical trials representation",
    "female enrollment clinical trials by therapeutic area",
    "participation to prevalence ratio women",
    "women cardiovascular trials underrepresentation",
  ],
  eyebrow: "Blog",
  h1: "Women in clinical trials: where representation falls short, and why",
  intro:
    "Women are not underrepresented in trials across the board. In the pivotal trials behind FDA's 2025 novel drug approvals, women were 55% of participants in autoimmune, inflammatory and lung disease programs but 36% in cancer programs.{{cite:fda-snapshots-2025}} The gaps sit in specific disease areas, and the fair comparison is with who has the disease.",
  summary: "Female enrollment by therapeutic area, how it compares with disease burden, what drives the gaps and what sites and sponsors can change.",
  lastUpdated: "2026-12-18",
  blog: { date: "2026-12-18", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "See how Engage works", secondaryHref: "/engage" },
  sections: [
    {
      id: "by-therapeutic-area",
      heading: "How many trial participants are women, by therapeutic area?",
      blocks: [
        {
          type: "p",
          text: "FDA's Drug Trials Snapshots report the sex of participants in the pivotal trials behind each novel drug approval. Excluding programs for sex-specific conditions, the share of female participants in 2025 ranged from 9% to 99% across programs.{{cite:fda-snapshots-2025}} In 2024 it ranged from 9% to 98%, and autoimmune, inflammatory and lung disease programs again enrolled the highest share, at 59%.{{cite:fda-snapshots-2024}}",
        },
        {
          type: "table",
          caption: "Female participants in pivotal trials for 2025 novel drug approvals",
          columns: ["Therapeutic area", "Programs analyzed", "Female participants"],
          rows: [
            ["Autoimmune, inflammatory and lung diseases", "9", "55%"],
            ["Heart, blood, kidney and endocrine diseases", "9", "45%"],
            ["Cancers", "14", "36%"],
          ],
          note: "FDA excluded sex-specific programs from these figures. Participants are counted worldwide.{{cite:fda-snapshots-2025}}",
        },
        {
          type: "p",
          text: "These are shares of participants, not comparisons with disease burden. A cancer program for a tumor that is more common in men can enroll mostly men and still be representative, and a heart program near parity can still fall short if most patients with that condition are women. That comparison needs a different measure.",
        },
      ],
    },
    {
      id: "disease-burden",
      heading: "How does enrollment compare with disease burden?",
      blocks: [
        {
          type: "p",
          text: "The participation-to-prevalence ratio (PPR) divides the share of women in a trial by the share of women among people with the disease. FDA reviewers applied it to trials supporting 36 cardiovascular drug approvals from 2005 to 2015, treating 0.8 to 1.2 as similar representation. Women made up 22% to 81% of participants, with a mean of 46%.{{cite:scott-2018}}",
        },
        {
          type: "table",
          caption: "Representation of women in cardiovascular approval trials, 2005 to 2015",
          columns: ["Condition", "PPR", "Reading"],
          rows: [
            ["Heart failure", "0.5 to 0.6", "Underrepresented"],
            ["Coronary artery disease", "0.6", "Underrepresented"],
            ["Acute coronary syndrome or heart attack", "0.6", "Underrepresented"],
            ["Atrial fibrillation", "0.8 to 1.1", "Similar"],
            ["Hypertension", "0.9", "Similar"],
            ["Pulmonary arterial hypertension", "1.4", "Overrepresented"],
          ],
          note: "PPR between 0.8 and 1.2 was treated as similar representation.{{cite:scott-2018}}",
        },
        {
          type: "p",
          text: "A broader 2021 analysis of 20,020 US trials with results, registered from 2000 to 2020, covering about 5.11 million participants, compared female enrollment with each disease's burden. Women were least represented relative to disability-adjusted life-years in oncology (46% of the burden, 43% of participants), neurology (56% and 53%), immunology (49% and 46%) and nephrology (45% and 42%). Men were underrepresented in 8 disease categories. Cardiology and pediatrics trials had the largest negative associations with female enrollment, while trials of preventive interventions were associated with higher female enrollment (adjusted relative difference, 8.48%).{{cite:steinberg-2021}}",
        },
      ],
    },
    {
      id: "how-rules-changed",
      heading: "How did the rules on women in trials change?",
      blocks: [
        {
          type: "p",
          text: "In 1977, an FDA guideline excluded women of childbearing potential from phase 1 and early phase 2 studies except for life-threatening illness, with a definition broad enough to include women using contraception. In 1993, FDA reversed it, leaving the decision to researchers, IRBs and women themselves, and said participants should represent the patients likely to be prescribed the drug once it is approved.{{cite:liu-mager-2016}} The NIH Revitalization Act, signed June 10, 1993, requires NIH to ensure that women are included in the clinical research it funds, and that its trials allow valid analysis of whether results differ for women.{{cite:nih-inclusion}}",
        },
        {
          type: "p",
          text: "Pregnancy remains the main exception. FDA's December 2025 guidance notes that pregnant and lactating women are frequently excluded when there is not enough information to assess risk to the fetus or infant, and its 2018 draft guidance on including pregnant women in trials was still a draft.{{cite:fda-enhancing-2025}}",
        },
      ],
    },
    {
      id: "what-drives-gaps",
      heading: "What drives the remaining gaps?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Eligibility criteria.** Pregnant and lactating women are frequently excluded when there is not enough data on fetal or infant risk, and FDA warns that template criteria often exclude groups without strong clinical or scientific justification.{{cite:fda-enhancing-2025}}",
            "**Perceived risk.** In a randomized study of hypothetical cardiovascular prevention trials, with 783 participants at 13 centers, men were more willing to take part than women (33.1% vs 28.7%). Differences in perceived risks and benefits explained the gap, and women perceived greater risk of harm from participating.{{cite:ding-2007}}",
            "**Time and caregiving.** FDA lists costs such as missing work and dependent care, and notes that study visits can interfere with jobs and family obligations.{{cite:fda-enhancing-2025}}",
          ],
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why does the gap matter after approval?",
      blocks: [
        {
          type: "p",
          text: "Sex differences can only be found if enough women are enrolled to look for them. A 2001 GAO review of the 10 prescription drugs withdrawn from the US market since January 1, 1997 found that 8 posed greater health risks for women. For 4 of those, the excess may reflect that they were prescribed more often to women; the other 4 caused more adverse events in women even though both sexes used them widely.{{cite:gao-2001}}",
        },
        {
          type: "p",
          text: "The evidence cuts both ways. FDA's review of cardiovascular approvals found little sign of clinically meaningful differences by sex in efficacy or safety, with sex differences described in the labeling of 4 drugs.{{cite:scott-2018}} The point of enrolling women in proportion to the disease is to be able to say that with confidence.",
        },
      ],
    },
    {
      id: "what-to-do",
      heading: "What can sites and sponsors do?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Calculate the PPR for your indication from US prevalence data, and treat 0.8 to 1.2 as the target range, as FDA's reviewers did.{{cite:scott-2018}}",
            "Ask the sponsor to justify pregnancy, lactation and contraception exclusions, and to limit them to what the risk data require.{{cite:fda-enhancing-2025}}",
            "Offer flexible visit windows and hours, and budget reimbursement for dependent care alongside travel.{{cite:fda-enhancing-2025}}",
            "Explain risks in plain language and leave time for questions, since perceived risk drives much of the difference in willingness.{{cite:ding-2007}}",
            "Track pre-screening, consent and enrollment by sex, so a gap shows up while recruitment is still open.",
            "Ask whether results will be analyzed by sex. For NIH-defined phase III trials, NIH requires a plan for valid analysis by sex or gender.{{cite:nih-inclusion}}",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Fewer steps for busy patients",
          text: "With Bond, one call can pre-screen a patient and book the visit straight into the site's calendar, with reminders by text, voice or email.{{cite:bond-product}} That removes some of the back-and-forth that is hardest for patients with jobs and caregiving duties. See [Engage](/engage).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Are women underrepresented in clinical trials overall?",
      a: "Not overall. Representation depends on the disease area. Relative to disease burden, women were underrepresented in oncology, neurology, immunology and nephrology trials, while men were underrepresented in 8 categories.{{cite:steinberg-2021}}",
    },
    {
      q: "What is a participation-to-prevalence ratio?",
      a: "The share of women among trial participants divided by the share of women among people with the disease. FDA reviewers treated 0.8 to 1.2 as similar representation.{{cite:scott-2018}}",
    },
    {
      q: "Can pregnant women be included in trials?",
      a: "Sometimes, but they are frequently excluded when there is not enough data on fetal or infant risk. FDA's 2018 draft guidance on the topic had not been finalized as of December 2025.{{cite:fda-enhancing-2025}}",
    },
  ],
  sources: [
    {
      id: "fda-snapshots-2025",
      title: "Drug Trials Snapshots Summary Report 2025",
      publisher: "US Food and Drug Administration, CDER",
      url: "https://www.fda.gov/media/193285/download?attachment",
      year: "2026",
      note: "Read October 2026. Quote: \"The percentage of females participating across all individual drug programs ranged from 9% to 99%. The therapeutic area evaluating Autoimmune, Inflammatory, and Lung Diseases enrolled the highest percentage of females at 55%.\" Figure alt text: \"In total, 45% female and 55% male participants were enrolled in the 9 drug programs\" (heart, blood, kidney and endocrine); \"In total, 36% female and 64% male participants were enrolled in the 14 drug programs\" (cancers); \"55% female and 45% male participants were enrolled in the 9 drug programs\" (autoimmune, inflammatory and lung).",
    },
    {
      id: "fda-snapshots-2024",
      title: "Drug Trials Snapshots Summary Report 2024",
      publisher: "US Food and Drug Administration, CDER",
      url: "https://www.fda.gov/media/187276/download?attachment",
      year: "2025",
      note: "Quote: \"The percentage of females participating across all individual drug programs ranged from 9% to 98%. The therapeutic area evaluating Autoimmune, Inflammatory, and Lung Diseases enrolled the highest percentage of females at 59%.\"",
    },
    {
      id: "scott-2018",
      title: "Participation of Women in Clinical Trials Supporting FDA Approval of Cardiovascular Drugs",
      publisher: "Journal of the American College of Cardiology (Scott PE et al., FDA)",
      url: "https://pubmed.ncbi.nlm.nih.gov/29724348/",
      year: "2018",
      note: "Quotes: \"the authors assessed enrollment of women in trials supporting 36 drug approvals from 2005 to 2015\"; \"with a range between 0.8 and 1.2 reflecting similar representation\"; \"The proportion of women enrolled ranged from 22% to 81% (mean 46%). The calculated PPR by disease area was within or above the desirable range for atrial fibrillation (0.8 to 1.1), hypertension (0.9), and pulmonary arterial hypertension (1.4); PPR was <0.8 for heart failure (0.5 to 0.6), coronary artery disease (0.6), and acute coronary syndrome/myocardial infarction (0.6).\"; \"Gender differences in efficacy or safety were described in labeling for 4 drugs.\"",
    },
    {
      id: "steinberg-2021",
      title: "Analysis of Female Enrollment and Participant Sex by Burden of Disease in US Clinical Trials Between 2000 and 2020",
      publisher: "JAMA Network Open (Steinberg JR et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34143192/",
      year: "2021",
      note: "Quotes: \"A total of 20 020 interventional studies enrolling approximately 5.11 million participants met inclusion criteria\"; \"Clinical trials in the fields of oncology (46% of disability-adjusted life-years [DALYs]; 43% of participants), neurology (56% of DALYs; 53% of participants), immunology (49% of DALYs; 46% of participants), and nephrology (45% of DALYs; 42% of participants) had the lowest female representation relative to corresponding DALYs. Male participants were underrepresented in 8 disease categories\"; \"Clinical trials of preventive interventions were associated with greater female enrollment (adjusted relative difference, 8.48%; 95% CI, 3.77%-13.00%).\"; \"Clinical trials in cardiology (adjusted relative difference, -18.68%; 95% CI, -22.87% to -14.47%) and pediatrics ... had the greatest negative association with female enrollment.\"",
    },
    {
      id: "liu-mager-2016",
      title: "Women's involvement in clinical trials: historical perspective and future implications",
      publisher: "Pharmacy Practice (Liu KA, Mager NA), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4800017/",
      year: "2016",
      note: "Review. Quotes: \"This guidance document stated that women of child-bearing potential should be excluded from Phase 1 and early Phase 2 research, except if these studies were being conducted to test a drug for a life-threatening illness.\"; \"The term “child-bearing potential” was defined widely as any woman capable of becoming pregnant, including premenopausal single abstinent women, women using contraceptives, or women with sterile partners.\"; \"In 1993, FDA reversed the 1977 guidance ... This guidance lifted the ban of women of child-bearing potential from participating in early phase research and left the decision to researchers, IRBs, and women themselves.\" Also: \"The guidance further specified that clinical trial participants should be representative of the patient population that is likely to be prescribed the drug once it is approved.\"",
    },
    {
      id: "nih-inclusion",
      title: "NIH Policy and Guidelines on the Inclusion of Women and Minorities as Subjects in Clinical Research",
      publisher: "National Institutes of Health, Grants & Funding",
      url: "https://grants.nih.gov/policy-and-compliance/policy-topics/inclusion/women-and-minorities/guideline",
      year: "2001",
      note: "Amended October 2001. Quote: \"The NIH Revitalization Act of 1993, PL 103-43, signed into law on June 10, 1993, directed the NIH to establish guidelines for inclusion of women and minorities in clinical research.\" Statute quoted: \"women are included as subjects in each project of such research\" and trials must be \"designed and carried out in a manner sufficient to provide for valid analysis of whether the variables being studied in the trial affect women or members of minority groups, as the case may be, differently than other subjects in the trial.\" Also: \"The Research Plan (for grant applications) or Proposal (for contract solicitations) must include a description of plans to conduct valid analysis by sex/gender, racial/ethnic groups, and relevant subpopulations, if applicable.\"",
    },
    {
      id: "fda-enhancing-2025",
      title: "Enhancing Participation in Clinical Trials — Eligibility Criteria, Enrollment Practices, and Trial Designs: Guidance for Industry (Revision 1)",
      publisher: "US Food and Drug Administration (CDER and CBER)",
      url: "https://www.fda.gov/media/190162/download",
      year: "2025",
      note: "Final guidance, December 2025. Quotes: \"Pregnant and lactating women are also frequently excluded when there is inadequate information to assess the risk to the fetus or infant.\"; footnote 8: \"draft guidance for industry Pregnant Women: Scientific and Ethical Considerations for Inclusion in Clinical Trials (April 2018). When final, this guidance will represent FDA’s current thinking on this topic.\"; \"sometimes excluding certain populations from trials without strong clinical or scientific justification\"; \"Financial costs (e.g., travel, missing work, dependent care) may also impede participation, and study visits may interfere with jobs and/or family and community obligations.\"; \"consider whether flexibility in visit windows is possible\"",
    },
    {
      id: "ding-2007",
      title: "Sex differences in perceived risks, distrust, and willingness to participate in clinical trials: a randomized study of cardiovascular prevention trials",
      publisher: "Archives of Internal Medicine (Ding EL et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/17502531/",
      year: "2007",
      note: "Hypothetical trial vignettes, randomized. Quotes: \"With 783 participants across 13 clinical centers, women showed lower distrust of medical researchers, perceived greater risk of myocardial infarction, and perceived greater risk of harm from trial participation than men. Men had 15% greater WTP than women (33.1% vs 28.7%...)\"; \"we found that sex differences in perceived risks and benefits explained the sex gap in WTP.\"",
    },
    {
      id: "gao-2001",
      title: "Drug Safety: Most Drugs Withdrawn in Recent Years Had Greater Health Risks for Women (GAO-01-286R)",
      publisher: "US Government Accountability Office",
      url: "https://www.gao.gov/products/gao-01-286r",
      year: "2001",
      note: "Published January 19, 2001. Read via WebFetch, October 2026 (GAO blocks scripted downloads). Quotes: \"10 prescription drugs have been withdrawn from the U.S. market since January 1, 1997.\"; \"Eight of the 10 prescription drugs posed greater health risks for women than for men.\"; \"four of these may have led to more adverse events in women because they were prescribed more often to women than to men\"; \"the other four had more adverse events in women even though they were widely prescribed to both men and women.\"",
    },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
  ],
  related: [
    { label: "Cardiology recruitment", href: "/cardiology", description: "How Bond supports enrollment in cardiovascular studies." },
    { label: "Oncology recruitment", href: "/oncology", description: "Screening and outreach for cancer trials." },
    { label: "Inclusion and exclusion criteria", href: "/glossary/inclusion-and-exclusion-criteria", description: "How eligibility criteria are written and applied." },
    { label: "Pre-screening call script", href: "/templates/pre-screening-call-script", description: "A template for the first call with an interested patient." },
  ],
};

export default page;
