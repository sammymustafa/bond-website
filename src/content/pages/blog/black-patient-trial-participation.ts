import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/black-patient-trial-participation",
  category: "blog",
  title: "Black patients in clinical trials: FDA data and what works",
  description:
    "FDA Snapshots data on Black participation in 2024 and 2025 trials, why the disease population is the right benchmark, and approaches with evidence behind them.",
  keywords: [
    "Black patients clinical trial participation",
    "African American representation clinical trials FDA",
    "Drug Trials Snapshots Black participants",
    "Duffy null neutrophil count trial eligibility",
  ],
  eyebrow: "Blog",
  h1: "Black patient participation in clinical trials: what FDA data shows and what has evidence",
  intro:
    "In the trials behind FDA's 46 novel drug approvals of 2025, the share of Black or African American participants ranged from 0% to 55% by program.{{cite:fda-snapshots-2025}} The research points less to unwillingness than to who is asked, where trials run and which eligibility rules apply. Here is the data, and what sites and sponsors can change.",
  summary: "FDA Snapshots data on Black participation, the disease-population benchmark, eligibility rules that exclude without a clinical reason, and approaches with evidence.",
  lastUpdated: "2026-12-04",
  blog: { date: "2026-12-04", author: "Rishabh Goel", readingMinutes: 4 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "Bond for community sites", secondaryHref: "/for/fqhcs-and-community-sites" },
  sections: [
    {
      id: "what-snapshots-show",
      heading: "What do FDA's Drug Trials Snapshots show?",
      blocks: [
        {
          type: "p",
          text: "Drug Trials Snapshots describe who took part in the pivotal trials behind each novel drug approval. In 2025, about 26,000 participants supported 46 approvals. Black or African American participants ranged from 0% to 55% across programs, which FDA describes as the lowest enrollment among the race groups in its tables. Infectious disease programs enrolled the highest share.{{cite:fda-snapshots-2025}} In 2024, across 50 approvals and about 31,000 participants, the range was 0% to 68%, with neurological and psychiatric programs highest.{{cite:fda-snapshots-2024}}",
        },
        {
          type: "table",
          caption: "Selected 2025 programs: share of Black or African American participants",
          columns: ["Drug (use)", "Participants", "Black or African American", "Enrolled in the US"],
          rows: [
            ["Journavx (acute pain)", "2,447", "24%", "100%"],
            ["Nuzolvence (gonorrhea)", "744", "55%", "19%"],
            ["Lynkuet (menopause symptoms)", "796", "17%", "51%"],
            ["Lerochol (high LDL cholesterol)", "2,322", "16%", "22%"],
            ["Lynozyfic (multiple myeloma)", "80", "14%", "78%"],
            ["Vizz (presbyopia)", "698", "5%", "100%"],
            ["Datroway (breast cancer)", "732", "2%", "8%"],
          ],
          note: "Read from the report's per-drug tables. Percentages are of each program's participants worldwide.{{cite:fda-snapshots-2025}}",
        },
        {
          type: "p",
          text: "Two points of context. The 2020 Census counted 12.4% of US residents as Black or African American alone and 14.2% alone or in combination with another race.{{cite:census-2020-race}} But Snapshots count participants worldwide, and in 2025 programs for cancers and for heart, blood, kidney and endocrine diseases, 80% of participants were enrolled outside the US.{{cite:fda-snapshots-2025}}",
        },
      ],
    },
    {
      id: "right-benchmark",
      heading: "Why compare with the disease population, not the census?",
      blocks: [
        {
          type: "p",
          text: "Census share understates the right target for diseases that affect Black Americans more often. FDA's own report says trial enrollment should be compared with the demographic makeup of US patients with the disease.{{cite:fda-snapshots-2025}} Multiple myeloma shows why. In an FDA pooled analysis of 19 trials with 10,157 patients that supported myeloma approvals from 2006 to 2019, Black patients were 4% of participants. African Americans make up about 13% of the US population but about 20% of US patients with myeloma.{{cite:kanapuru-2022}}",
        },
        {
          type: "stats",
          items: [
            { value: "4%", label: "Black patients in trials behind myeloma approvals, 2006 to 2019", cite: "kanapuru-2022" },
            { value: "~20%", label: "African Americans among US patients with myeloma", cite: "kanapuru-2022" },
            { value: "17%", label: "Patients in those trials who were enrolled in the US", cite: "kanapuru-2022" },
          ],
        },
        {
          type: "p",
          text: "The same analysis found Black patients were primarily enrolled in the US.{{cite:kanapuru-2022}} When most of a trial's sites are abroad, its US sites carry most of the chance to enroll Black Americans.",
        },
      ],
    },
    {
      id: "willingness",
      heading: "Are Black patients less willing to join trials?",
      blocks: [
        {
          type: "p",
          text: "Most of the evidence says no, once they are asked. A 2006 review of 20 studies covering more than 70,000 people found consent rates for clinical intervention studies of 45.3% among African Americans and 41.8% among non-Hispanic whites.{{cite:wendler-2006}} A 2021 meta-analysis of 35 US cancer studies found that 55.0% of patients offered a trial enrolled, with similar rates for Black patients (58.4%) and White patients (55.1%).{{cite:unger-2021}}",
        },
        {
          type: "p",
          text: "Survey data adds a caution. In a nationally representative 2020 survey of 3,689 adults, non-Hispanic Black respondents were more likely than non-Hispanic White respondents to report being invited to a trial (adjusted odds ratio 1.85) but less likely to report taking part once invited (adjusted odds ratio 0.28).{{cite:hints-2021}} The survey covers self-reported invitations to any trial and does not say why. How the offer is made, trust and practical costs still matter.",
        },
      ],
    },
    {
      id: "eligibility-rules",
      heading: "Which eligibility rules exclude Black patients without a clinical reason?",
      blocks: [
        {
          type: "p",
          text: "Neutrophil cutoffs are the clearest example. About two-thirds of self-identified African Americans have the Duffy null phenotype, which is associated with lower neutrophil counts but not with a higher risk of infection. Of those, 10% to 17% have an absolute neutrophil count (ANC) below 1,500/μL.{{cite:hibbs-2024}}",
        },
        {
          type: "p",
          text: "A 2024 study of 289 phase 3 trials in five common cancers, started between November 2021 and November 2023, found that 221 (76.5%) excluded patients whose ANC was within the Duffy null reference range. Colorectal cancer trials excluded most often (86.4%) and prostate cancer trials least often (47.8%).{{cite:hibbs-2024}}",
        },
        {
          type: "p",
          text: "FDA's December 2025 guidance makes the broader point: some eligibility criteria have become template language that excludes people without strong clinical or scientific justification, and they should be broadened in later-phase trials.{{cite:fda-enhancing-2025}}",
        },
      ],
    },
    {
      id: "what-has-evidence",
      heading: "Which approaches have evidence behind them?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Patient navigation.** At the University of Alabama at Birmingham, trained lay navigators worked with 424 African American patients with cancer referred from 2007 to 2014. Of 378 who were eligible, 304 (80.4%) enrolled. Among enrollees, 74.5% of those who used navigation completed their trial, against 37.5% of those who did not, and African American participation in the center's therapeutic cancer trials rose from 9% to 16%. This was one center, without a randomized comparison.{{cite:fouad-2016}}",
            "**Community health advisors.** In an Alabama study that randomly assigned two matched communities, volunteer community health advisors raised adherence to scheduled visits among 632 mostly low-income, minority women in a cervical screening trial from 65% to 80%.{{cite:fouad-2014}}",
            "**Site location and staff.** FDA recommends placing sites in neighborhoods where underrepresented patients receive care, involving coordinators and providers who reflect participants, and holding recruitment events in trusted places such as places of worship and community centers, including on evenings and weekends.{{cite:fda-enhancing-2025}}",
            "**Asking everyone.** Since Black and White patients agree at similar rates once offered a trial, making sure every eligible patient is offered one may matter more than persuasion.{{cite:unger-2021}}",
          ],
        },
      ],
    },
    {
      id: "what-to-do",
      heading: "What can a site or sponsor do next quarter?",
      blocks: [
        {
          type: "checklist",
          items: [
            "Set the enrollment benchmark from US data on the disease, not the census, and put it in the feasibility response.{{cite:fda-snapshots-2025}}",
            "Screen every chart in the eligible population against the criteria, so the offer does not depend on which patients a coordinator happens to see.",
            "Ask the sponsor whether ANC and other lab thresholds allow for Duffy null-associated neutrophil counts.{{cite:hibbs-2024}}",
            "Give each interested patient one named contact who explains the trial, schedules visits and follows up.",
            "Count patients identified, contacted, pre-screened, consented and enrolled by race and ethnicity, so drop-off points show up early.",
            "Budget for travel reimbursement and evening or weekend visit hours.",
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's [Identify](/identify) stage screens EHR records criterion by criterion, including clinical notes, and Bond's Meta and Google campaigns reach people who are not in a site's records.{{cite:bond-product}} Both widen the pool of people who are asked. Neither changes who enrolls on its own; navigation, eligibility review and practical support still do that work.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What share of US trial participants are Black?",
      a: "There is no single official figure. FDA's Snapshots report ranges by program and count participants worldwide: 0% to 55% in 2025 and 0% to 68% in 2024.{{cite:fda-snapshots-2025,fda-snapshots-2024}} Compare each trial with the US population that has the disease.",
    },
    {
      q: "Are Black patients less likely to agree when offered a trial?",
      a: "Not in the largest analysis. Across 35 US cancer studies, 58.4% of Black patients and 55.1% of White patients who were offered a trial enrolled.{{cite:unger-2021}}",
    },
    {
      q: "What is Duffy null-associated neutrophil count?",
      a: "A common, benign trait in people with African or Middle Eastern ancestry that lowers circulating neutrophil counts without raising infection risk. Standard ANC cutoffs can exclude these patients from trials.{{cite:hibbs-2024}}",
    },
  ],
  sources: [
    {
      id: "fda-snapshots-2025",
      title: "Drug Trials Snapshots Summary Report 2025",
      publisher: "US Food and Drug Administration, CDER",
      url: "https://www.fda.gov/media/193285/download?attachment",
      year: "2026",
      note: "Read October 2026. Quotes: \"About 26,000 study participants contributed to the pivotal trials supporting these approvals.\"; \"Black or African American (herein referred to as Black participants) accounted for the lowest enrollment, ranging from 0% to 55% across all therapeutic areas. The drug programs evaluating Infectious Diseases enrolled the highest percentage of Black participants.\"; \"drugs evaluating Heart, Blood, Kidney, and Endocrine Diseases (80%) and Cancers (80%) enrolled the highest number of participants outside the United States.\"; \"compare these findings to the demographic makeup of patients with the disease in the United States.\" Table rows (Total N, % Black, % U.S.): Journavx 2447, 24, 100; Nuzolvence 744, 55, 19; Lynkuet 796, 17, 51; Lerochol 2322, 16, 22; Lynozyfic 80, 14, 78; Vizz 698, 5, 100; Datroway 732, 2, 8.",
    },
    {
      id: "fda-snapshots-2024",
      title: "Drug Trials Snapshots Summary Report 2024",
      publisher: "US Food and Drug Administration, CDER",
      url: "https://www.fda.gov/media/187276/download?attachment",
      year: "2025",
      note: "Quotes: \"CDER approved 50 novel therapies for a range of diseases in 2024. About 31,000 study participants contributed to the pivotal trials\"; \"Black or African American (herein referred to as Black) participants accounted for the lowest enrollment, ranging from 0% to 68% across all therapeutic areas. The drug programs evaluating Neurological and Psychiatric Disorders enrolled the highest percentage of Black participants.\"",
    },
    {
      id: "census-2020-race",
      title: "Improved Race and Ethnicity Measures Reveal U.S. Population Is Much More Multiracial",
      publisher: "US Census Bureau",
      url: "https://www.census.gov/library/stories/2021/08/improved-race-ethnicity-measures-reveal-united-states-population-much-more-multiracial.html",
      year: "2021",
      note: "Quote: \"In 2020, the Black or African American alone population (41.1 million) accounted for 12.4% of all people living in the United States\" and \"the Black or African American alone or in combination population totaled 46.9 million people (14.2% of the total population) in 2020.\"",
    },
    {
      id: "kanapuru-2022",
      title: "Analysis of racial and ethnic disparities in multiple myeloma US FDA drug approval trials",
      publisher: "Blood Advances (Kanapuru B et al., FDA), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8941450/",
      year: "2022",
      note: "Pooled analysis of 19 trials, 2006 to 2019. Quotes: \"Nineteen global trials comprising 10 157 patients were pooled. White, Asian, and Black patients comprised 84%, 7%, and 4% of the dataset\"; \"Although AAs represent 13% of the US population and ∼20% of patients with MM in the United States, they represented only 4% of patients included in the trials used to support drug approval.\"; \"Among the 10 157 patients included in the pooled data set, 1719 patients (17%) were enrolled in the United States\"; \"Black patients were primarily enrolled in the United States.\"",
    },
    {
      id: "wendler-2006",
      title: "Are racial and ethnic minorities less willing to participate in health research?",
      publisher: "PLoS Medicine (Wendler D et al., NIH)",
      url: "https://pubmed.ncbi.nlm.nih.gov/16318411/",
      year: "2006",
      note: "Review of 20 studies. Quote: \"These 20 studies reported the enrollment decisions of over 70,000 individuals\" and \"For the ten clinical intervention studies, African-Americans' overall consent rate was nonsignificantly higher than that of non-Hispanic whites (45.3% versus 41.8%; OR = 1.06; 95% CI 0.78-1.45).\"",
    },
    {
      id: "unger-2021",
      title: "\"When Offered to Participate\": A Systematic Review and Meta-Analysis of Patient Agreement to Participate in Cancer Clinical Trials",
      publisher: "Journal of the National Cancer Institute (Unger JM et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/33022716/",
      year: "2021",
      note: "Studies from 2000 to 2020, US only. Quote: \"We identified 35 studies ... among which 9759 patients were offered trial participation. Overall, 55.0% (95% confidence interval [CI] = 49.4% to 60.5%) of patients agreed to enroll.\" Also: \"Black patients participated at similar rates (58.4%, 95% CI = 46.8% to 69.7%) compared with White patients (55.1%, 95% CI = 44.3% to 65.6%; P = .88).\"",
    },
    {
      id: "hints-2021",
      title: "Demographic and Health Behavior Factors Associated With Clinical Trial Invitation and Participation in the United States",
      publisher: "JAMA Network Open (Williams CP et al., NCI)",
      url: "https://pubmed.ncbi.nlm.nih.gov/34586365/",
      year: "2021",
      note: "HINTS, February to June 2020, 3,689 US adults, self-reported. Quotes: \"Respondents with increased odds of invitation were non-Hispanic Black compared with non-Hispanic White (adjusted odds ratio [aOR], 1.85; 95% CI, 1.13-3.02)\" and \"Compared with non-Hispanic White respondents, non-Hispanic Black respondents had 72% decreased odds of clinical trial participation (aOR, 0.28; 95% CI, 0.09-0.87).\"",
    },
    {
      id: "hibbs-2024",
      title: "Cancer Trial Eligibility and Therapy Modifications for Individuals With Duffy Null-Associated Neutrophil Count",
      publisher: "JAMA Network Open (Hibbs SP et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391325/",
      year: "2024",
      note: "Cross-sectional study of phase 3 trials in prostate, breast, melanoma, colorectal and lung cancer starting November 1, 2021 to November 1, 2023. Quotes: \"For CCTs, 289 of 382 trials (75.7%) were eligible, of which 221 (76.5% [95% CI, 71.1%-81.2%]) excluded patients with ANC values within the DANC reference range. Colorectal CCTs had the highest (38 of 44 [86.4% ...]) and prostate CCTs had the lowest (11 of 23 [47.8% ...]) proportions of exclusions.\" Also: \"two-thirds of self-identified African American individuals have the Duffy null phenotype, of whom 10% to 17% have an ANC less than 1500/μL at baseline\" and the phenotype \"is not associated with an increased risk of infection.\"",
    },
    {
      id: "fda-enhancing-2025",
      title: "Enhancing Participation in Clinical Trials — Eligibility Criteria, Enrollment Practices, and Trial Designs: Guidance for Industry (Revision 1)",
      publisher: "US Food and Drug Administration (CDER and CBER)",
      url: "https://www.fda.gov/media/190162/download",
      year: "2025",
      note: "Final guidance, December 2025. Quotes: \"some eligibility criteria have become commonly accepted over time or used as a template across trials, sometimes excluding certain populations from trials without strong clinical or scientific justification\"; \"Ensure that clinical trial sites include geographic locations with a higher concentration of underrepresented racial and ethnic patients and indigenous populations, as well as locations within the neighborhoods where these populations receive their health care\"; \"Consider selecting health care providers and study coordinators who also reflect the demographics of participants\"; \"Consider holding the events in non-clinical but trusted locations (such as places of worship or community centers)\"; \"Make recruitment events accessible by holding them often, as well as offering them during evening and weekend hours.\"",
    },
    {
      id: "fouad-2016",
      title: "Patient Navigation As a Model to Increase Participation of African Americans in Cancer Clinical Trials",
      publisher: "Journal of Oncology Practice (Fouad MN et al., University of Alabama at Birmingham)",
      url: "https://pubmed.ncbi.nlm.nih.gov/27189356/",
      year: "2016",
      note: "Single NCI-designated cancer center, 2007 to 2014, no randomized control. Quote: \"Between 2007 and 2014, 424 African American patients with cancer were referred ... Of those eligible for a clinical trial (N = 378), 304 (80.4%) enrolled in a trial and 272 (72%) consented to receive patient navigation support. Of those receiving patient navigation support, 74.5% completed the trial, compared with 37.5% of those not receiving patient navigation support.\" Also: \"Participation of African Americans in therapeutic cancer clinical trials increased from 9% to 16%.\"",
    },
    {
      id: "fouad-2014",
      title: "Adherence and retention in clinical trials: a community-based approach",
      publisher: "Cancer (Fouad MN et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/24643648/",
      year: "2014",
      note: "Two matched Jefferson County, Alabama communities randomly assigned; 632 participants in the ALTS trial. Quote: \"Adherence rates for scheduled clinic visits were significantly higher in the intervention group (80%) compared with the control group (65%; P < .0001).\" Population described as \"minority and low-income women\".",
    },
    { id: "bond-product", title: "Bond Health product information", publisher: "Bond Health", url: "https://bondtrials.com", year: "2026", note: "Capabilities, pricing and compliance status described by Bond Health, October 2026." },
  ],
  related: [
    { label: "Bond for FQHCs and community sites", href: "/for/fqhcs-and-community-sites", description: "Research at health centers that serve patients rarely offered trials." },
    { label: "Inclusion and exclusion criteria", href: "/glossary/inclusion-and-exclusion-criteria", description: "How eligibility criteria are written and applied." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "Screening every chart against a protocol, with evidence for each criterion." },
    { label: "Diversity action plan", href: "/glossary/diversity-action-plan", description: "The FDORA requirement for enrollment goals by race, ethnicity, sex and age." },
  ],
};

export default page;
