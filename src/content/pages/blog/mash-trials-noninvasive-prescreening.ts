import type { SeoPage } from "../../types";

const page: SeoPage = {
  path: "/blog/mash-trials-noninvasive-prescreening",
  category: "blog",
  title: "Pre-screening MASH trial candidates with FIB-4 and FibroScan",
  description:
    "How FIB-4, FibroScan and composite scores work as MASH trial pre-screens, what they miss, what trial funnels and FDA say, and a sequence sites can run.",
  keywords: [
    "MASH trial pre-screening",
    "FIB-4 clinical trial screening",
    "FibroScan MASH trial eligibility",
    "MASH biopsy screen failure",
    "non-invasive tests NASH trial enrichment",
  ],
  eyebrow: "Blog",
  h1: "Pre-screening MASH trial candidates with non-invasive tests before the biopsy",
  intro:
    "Most MASH drug trials still enroll on a liver biopsy, and the non-invasive tests a site runs first decide who goes to that biopsy. FIB-4 from routine labs, then elastography and composite scores, can cut wasted biopsies, but a single FIB-4 cutoff used as a gate misses many eligible patients. Here is what the guidelines, trial funnels and FDA say, and a pre-screen sequence a site can run.",
  summary: "What FIB-4, FibroScan and composite scores catch and miss as MASH trial pre-screens, and a sequence sites can run before biopsy.",
  lastUpdated: "2026-11-06",
  blog: { date: "2026-11-06", author: "Rishabh Goel", readingMinutes: 5 },
  heroCta: { label: "Book a demo", href: "/book-a-demo", secondaryLabel: "IBD and MASH recruitment", secondaryHref: "/gastroenterology" },
  sections: [
    {
      id: "what-fib4-misses",
      heading: "What does FIB-4 tell you, and what does it miss?",
      blocks: [
        {
          type: "p",
          text: "FIB-4 needs only age, AST, ALT and platelet count: age times AST, divided by platelets times the square root of ALT.{{cite:sterling-2006}} AASLD guidance uses below 1.3 as low risk of advanced fibrosis, 1.3 to 2.67 as intermediate and above 2.67 as high.{{cite:aasld-2023}} The European guideline raises the threshold to 2.0 for people over 65, and warns that FIB-4 will miss around 10% of people with advanced fibrosis.{{cite:easl-2024}}",
        },
        {
          type: "p",
          text: "That design suits clinical care, where the goal is to rule out advanced disease. Trials want something narrower. FDA's draft guidance describes the accepted enrollment standard as an activity score of 4 or more with fibrosis above stage 1 and below stage 4, on a biopsy no more than 6 months old.{{cite:fda-nash-2018}} A low FIB-4 says little about that window.",
        },
        {
          type: "stats",
          items: [
            { value: "34.5%", label: "of the first 800 biopsy-confirmed ESSENCE participants had FIB-4 below 1.3", cite: "essence-2024" },
            { value: "58% vs 60%", label: "biopsy failure with a FIB-4 pathway versus RESOLVE-IT's actual screening pathway", cite: "ratziu-2024" },
            { value: "~10%", label: "of people with advanced fibrosis that FIB-4 misses, per the European guideline", cite: "easl-2024" },
          ],
        },
        {
          type: "p",
          text: "In ESSENCE, the semaglutide trial, 45.2% of randomized participants with stage 2 fibrosis and 29.6% with stage 3 had FIB-4 below 1.3. The authors note that up to a third of randomized participants would have been missed by a FIB-4 rule-out.{{cite:essence-2024}} Use a low FIB-4 to deprioritize, not to exclude.",
        },
      ],
    },
    {
      id: "second-step-tests",
      heading: "Which second-step tests narrow the biopsy pool?",
      blocks: [
        {
          type: "p",
          text: "Guidelines recommend a blood score first, then elastography.{{cite:easl-2024}} On vibration-controlled transient elastography (FibroScan), liver stiffness below 8 kPa can rule out advanced fibrosis, 8 to 12 kPa may go with fibrotic NASH, and above 12 kPa makes advanced fibrosis likely, though positive predictive value is low.{{cite:aasld-2023}}",
        },
        {
          type: "table",
          caption: "Common pre-screen tests and the cutoffs published for them",
          columns: ["Test", "Inputs", "Published cutoffs", "Watch for"],
          rows: [
            ["FIB-4", "Age, AST, ALT, platelets", "Below 1.3 low risk; above 2.67 high risk; 2.0 for people over 65{{cite:aasld-2023,easl-2024}}", "Built to rule out advanced fibrosis, not to find stage 2"],
            ["FibroScan stiffness (VCTE)", "Liver stiffness in kPa", "Below 8 rules out advanced fibrosis; above 12 likely advanced{{cite:aasld-2023}}", "Positive predictive value 0.34 to 0.71"],
            ["FAST score", "Stiffness, CAP and AST", "0.35 for at least 90% sensitivity; 0.67 for at least 90% specificity{{cite:newsome-2020}}", "39% of the derivation cohort fell between the cutoffs"],
            ["ESSENCE pre-qualification", "Any one of several tests", "ELF 9.8 or more, stiffness 9.1 kPa or more, MRE 3.2 kPa or more, FAST 0.67 or more, a qualifying biopsy, or FIB-4 1.3 or more{{cite:essence-2024}}", "Accepts historical results, so the chart matters"],
          ],
        },
        {
          type: "p",
          text: "FAST was built for the trial target. Its authors note that \"the presence of fibrosis alone is insufficient for recruitment to clinical trials,\" so the score targets MASH with an activity score of 4 or more and stage 2 or higher. In external validation, positive predictive value ranged from 0.33 to 0.81.{{cite:newsome-2020}} ESSENCE took an any-of approach instead of a single gate, and about 91% of its population had at least one positive test.{{cite:essence-2024}}",
        },
      ],
    },
    {
      id: "biopsy-failure",
      heading: "How much do non-invasive gates reduce biopsy failure?",
      blocks: [
        {
          type: "p",
          text: "Less than sites hope, and at a price. SYNERGY-NASH screened 1,583 people, sent 651 to biopsy and randomized 190, an overall screen-failure rate of 87%. A FAST criterion added by amendment moved the share of qualifying biopsies only from 27.5% to 28.9%.{{cite:vuppalanchi-2024}}",
        },
        {
          type: "p",
          text: "A retrospective simulation on RESOLVE-IT screening data shows the trade-off. A FIB-4 pathway gave a 58% biopsy failure rate, close to the trial's actual 60%; a blood-based NIS2+ pathway gave 39%. Per 1,000 patients included, unnecessary biopsies fell from 1,522 to 632, while the number of patients needed to screen rose from 3,220 to 4,033.{{cite:ratziu-2024}} Several authors work for Genfit, which makes NIS2+. The lesson holds regardless of test: a stricter gate means fewer biopsies and a bigger pre-screen pool.",
        },
      ],
    },
    {
      id: "fda-position",
      heading: "What has FDA said about non-invasive tests so far?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Enrollment still rests on histology.** FDA's December 2018 draft guidance, still a draft, says enrichment biomarkers can \"reduce the number of screening failures\" but keeps biopsy-confirmed disease for enrollment.{{cite:fda-nash-2018}}",
            "**Stiffness as a future endpoint.** On August 27, 2025, FDA accepted a letter of intent to qualify FibroScan liver stiffness as a reasonably likely surrogate endpoint. FDA called it the first step in qualification; it concerns efficacy endpoints, not enrollment.{{cite:fda-lsm-2025}}",
            "**A second approved drug.** On August 15, 2025, FDA granted Wegovy (semaglutide) accelerated approval for noncirrhotic MASH with stage F2 to F3 fibrosis.{{cite:fda-wegovy-2025}}",
          ],
        },
        {
          type: "p",
          text: "The last point changes pre-screening. In a German study of NAFLD patients with diabetes, more than 30% of those who would be biopsy candidates for NASH studies (stiffness of 8 kPa or more) were already taking a GLP-1 receptor agonist or SGLT2 inhibitor.{{cite:holzhey-2024}} Check start dates and dose changes against the protocol's stable-dose rule on the first call. This reflects FDA documents as of October 2026 and may change; it is not regulatory advice.",
        },
      ],
    },
    {
      id: "inputs-in-the-chart",
      heading: "Where are the pre-screen inputs in a site's chart?",
      blocks: [
        {
          type: "p",
          text: "Often scattered, and rarely acted on. In a Wake Forest primary care network, 52,006 of 91,914 at-risk patients had AST, ALT and platelets drawn on the same day in 2020, enough to compute FIB-4. Of the 11,980 at indeterminate or high risk, 78.7% had normal aminotransferases and only 0.95% had elastography. Coded NAFLD or NASH covered 5.3% of the cohort.{{cite:xiao-2025}}",
        },
        {
          type: "checklist",
          items: [
            "Do not filter on raised ALT. Most at-risk patients in the Wake Forest cohort had normal values.{{cite:xiao-2025}}",
            "Do not rely on a fatty liver diagnosis code; search labs, imaging reports and notes too.",
            "Look for historical FibroScan, MRE, ELF and biopsy reports with dates, since protocols such as ESSENCE accept them.",
            "Expect to offer FibroScan yourself. Few at-risk patients have had one.",
          ],
        },
      ],
    },
    {
      id: "pre-screen-sequence",
      heading: "What pre-screen sequence should a site run?",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Compute FIB-4 for at-risk patients",
              text: "Use same-day labs and the age-adjusted threshold. Rank by score, but keep low scorers with other signals, such as diabetes or a past stiffness reading, in the pool.",
            },
            {
              title: "Collect historical results",
              text: "Pull FibroScan, MRE, ELF and biopsy reports with dates, and check them against the protocol's accepted tests and lookback windows.",
            },
            {
              title: "Run FibroScan with CAP before biopsy",
              text: "Calculate FAST where AST is available, and apply the protocol's thresholds, not clinical-care ones.",
            },
            {
              title: "Settle exclusions on the first call",
              text: "Alcohol use, GLP-1 or pioglitazone start dates, cirrhosis history and willingness to have a biopsy.",
            },
            {
              title: "Track the funnel",
              text: "Record pre-screened, FibroScan-positive, biopsied and randomized counts each month, so the site can tell a sponsor its biopsy pass rate.",
            },
          ],
        },
        {
          type: "callout",
          tone: "bond",
          title: "Where Bond fits",
          text: "Bond's [Identify](/identify) stage reads lab results, prescriptions, imaging data, radiology and pathology reports and clinical notes, and shows criterion-by-criterion evidence for each match. A FibroScan report, a dated platelet count or a GLP-1 start date appears next to the criterion it answers.{{cite:bond-site,bond-product}}",
        },
        {
          type: "cta",
          label: "Book a demo",
          href: "/book-a-demo",
          text: "Bring a MASH protocol. We will map its non-invasive and histology criteria to your chart.",
          secondaryLabel: "Read about Identify",
          secondaryHref: "/identify",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Should a site exclude MASH candidates with FIB-4 below 1.3?",
      a: "Not on FIB-4 alone. In ESSENCE, 34.5% of biopsy-confirmed participants had FIB-4 below 1.3.{{cite:essence-2024}} Use it to rank and deprioritize, and let elastography or the protocol's other tests decide.",
    },
    {
      q: "Can FibroScan replace the screening biopsy?",
      a: "Not for enrollment in most efficacy trials, as of October 2026. FDA's draft guidance keeps biopsy-confirmed disease for enrollment, and its 2025 step on liver stiffness concerns endpoints and is not yet a qualification.{{cite:fda-nash-2018,fda-lsm-2025}}",
    },
    {
      q: "Does a patient taking semaglutide still qualify for MASH trials?",
      a: "It depends on the protocol's prior-therapy and stable-dose rules. Since August 2025, semaglutide has been approved for MASH with F2 to F3 fibrosis, so more candidates may already be taking it.{{cite:fda-wegovy-2025}}",
    },
  ],
  sources: [
    {
      id: "sterling-2006",
      title: "Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection",
      publisher: "Hepatology (Sterling RK et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/16729309/",
      year: "2006",
      note: "Abstract read via PubMed, October 2026. Quote: \"a simple index (FIB-4) was developed: age ([yr] x AST [U/L]) / ((PLT [10(9)/L]) x (ALT [U/L])(1/2)).\" Derived in HIV/HCV coinfection; the NAFLD cutoffs come from later work.",
    },
    {
      id: "aasld-2023",
      title: "AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease",
      publisher: "Hepatology (Rinella ME et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10735173/",
      year: "2023",
      note: "Quotes: \"low risk, eg, fibrosis-4 index (FIB-4) <1.3\"; \"low risk (< 1.3) to intermediate risk (1.3–2.67) to high risk (> 2.67)\"; \"FIB-4 is calculated using a simple algorithm based upon age, ALT, AST, and platelet count\"; \"a VCTE-derived liver stiffness measurement (LSM) <8 kPa can be used to rule out advanced fibrosis, especially if used sequentially after FIB-4\"; \"LSMs by VCTE between 8 and 12 kPa may be associated with fibrotic NASH, and LSM > 12 kPa is associated with a high likelihood of advanced fibrosis, although the positive predictive value is low (range: 0.34–0.71).\"",
    },
    {
      id: "easl-2024",
      title: "EASL-EASD-EASO Clinical Practice Guidelines on the Management of Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD)",
      publisher: "Obesity Facts (co-published with Journal of Hepatology), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11299976/",
      year: "2024",
      note: "European clinical-care guideline. Quotes: \"In adults with MASLD, a multi-step approach is recommended ... First, an established non-patented blood-based score, such as FIB-4, should be used. Thereafter, established imaging techniques, such as liver elastography, are recommended\"; \"clinicians should recognise that FIB-4 will miss around 10% of individuals with advanced fibrosis\"; \"If FIB-4 is >1.3 (or >2.0 in individuals aged >65), the risk for advanced fibrosis is increased.\"",
    },
    {
      id: "fda-nash-2018",
      title: "Noncirrhotic Nonalcoholic Steatohepatitis With Liver Fibrosis: Developing Drugs for Treatment (draft guidance)",
      publisher: "US Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/noncirrhotic-nonalcoholic-steatohepatitis-liver-fibrosis-developing-drugs-treatment",
      year: "2018",
      note: "Page checked October 2026: \"December 2018\", \"Draft Not for implementation\", \"Content current as of: 12/03/2018\". Quotes from the PDF: biomarkers \"can increase the likelihood of a confirmatory liver biopsy, reduce the number of screening failures, and expedite the screening of eligible patients\"; \"histological diagnosis of NASH with liver fibrosis made close to the time of trial enrollment (i.e., no more than 6 months before enrollment)\"; \"FDA has accepted as critical inclusion criteria in NASH trials a NASH activity score (NAS) greater than or equal to 4 with at least 1 point each in inflammation and ballooning along with a NASH Clinical Research Network (CRN) fibrosis score greater than stage 1 fibrosis but less than stage 4 fibrosis.\"",
    },
    {
      id: "essence-2024",
      title: "Semaglutide 2.4 mg in Participants With Metabolic Dysfunction-Associated Steatohepatitis: Baseline Characteristics and Design of the Phase 3 ESSENCE Trial",
      publisher: "Alimentary Pharmacology & Therapeutics (Newsome PN et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11599791/",
      year: "2024",
      note: "Baseline of the first 800 randomized participants; Novo Nordisk co-authors. Quotes: \"a pre-qualification approach is employed with the aim of increasing the likelihood of participants having fibrosis stage 2 or 3 and, hence, a decreased histological screen failure rate\"; options include \"enhanced liver fibrosis (ELF) ≥ 9.8, liver stiffness ≥ 9.1 kPa ..., magnetic resonance elastography ≥ 3.2 kPa, FibroScan-aspartate transaminase (FAST) score ≥ 0.67 ... or a fibrosis-4 (FIB-4) score ≥ 1.3 measured at first visit\"; \"In the total population, 34.5% of participants had FIB-4 < 1.3 (45.2% and 29.6% with fibrosis stage 2 and 3, respectively)\"; \"Approximately 91% of the trial population had at least one positive NIT\"; \"the proportion that would have been missed is as high as one third of randomised participants.\"",
    },
    {
      id: "newsome-2020",
      title: "FibroScan-AST (FAST) score for the non-invasive identification of patients with non-alcoholic steatohepatitis with significant activity and fibrosis: a prospective derivation and global validation study",
      publisher: "Lancet Gastroenterology & Hepatology (Newsome PN et al.), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7066580/",
      year: "2020",
      note: "Funded by Echosens, maker of FibroScan, and the UK National Institute for Health Research. Quotes: \"Cutoff was 0·35 for sensitivity of 0·90 or greater and 0·67 for specificity of 0·90 or greater in the derivation cohort ... In the external validation cohorts, PPV ranged from 0·33 to 0·81 and NPV from 0·73 to 1·0\"; \"136 (39%) of 350 patients were in the grey zone between the two cutoffs\"; \"the presence of fibrosis alone is insufficient for recruitment to clinical trials.\"",
    },
    {
      id: "vuppalanchi-2024",
      title: "Randomised clinical trial: Design of the SYNERGY-NASH phase 2b trial to evaluate tirzepatide as a treatment for metabolic dysfunction-associated steatohepatitis and modification of screening strategy to reduce screen failures",
      publisher: "Alimentary Pharmacology & Therapeutics (Vuppalanchi R et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38768298/",
      year: "2024",
      note: "Abstract read via PubMed. Quote: \"1583 participants were screened, 651 participants proceeded to liver biopsy and 190 participants were randomised with an overall screen fail rate of 87%.\" Also: \"the overall qualification rate for per-protocol biopsies was minimally changed from 27.5% to 28.9%\" after a FAST score above 0.35 was added by amendment. Several authors list Eli Lilly and Company affiliations.",
    },
    {
      id: "ratziu-2024",
      title: "NIS2+ as a screening tool to optimize patient selection in metabolic dysfunction-associated steatohepatitis clinical trials",
      publisher: "Journal of Hepatology (Ratziu V et al.)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38061448/",
      year: "2024",
      note: "Abstract read via PubMed. Retrospective simulation in the RESOLVE-IT screening pathway cohort (1,929 patients); several authors are Genfit employees. Quotes: \"The NIS2+™ pathway resulted in a significantly lower LBFR (39%) compared with the FIB-4 pathway (58%) or the RSP (60%)\"; \"For every 1,000 inclusions, NIS2+™ significantly reduced unnecessary LBs (632 vs. 1,522; -58%) ... while the number of patients needed to screen increased moderately (3,220 to 4,033)\"; \"the use of the Fibrosis-4 index alone did not lead to a significant improvement of the screening process\".",
    },
    {
      id: "fda-lsm-2025",
      title: "FDA accepts proposal for reasonably likely surrogate endpoint for \u2018MASH\u2019 all-cause mortality or liver-related events",
      publisher: "US Food and Drug Administration, Drug Alerts and Statements",
      url: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-accepts-proposal-reasonably-likely-surrogate-endpoint-mash-all-cause-mortality-or-liver-related",
      year: "2025",
      note: "Dated 8/27/2025. Quotes: \"has accepted a Letter of Intent for the qualification of Liver Stiffness Measurement by Vibration-Controlled Transient Elastography as a reasonably likely surrogate endpoint for clinical trials in adults with non-cirrhotic\" MASH; \"This acceptance represents the first step in the Drug Development Tool qualification process\".",
    },
    {
      id: "fda-wegovy-2025",
      title: "Supplement approval letter, NDA 215256/S-024 (Wegovy, semaglutide)",
      publisher: "US Food and Drug Administration",
      url: "https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2025/215256Orig1s024ltr.pdf",
      year: "2025",
      note: "Signed 08/15/2025. Quotes: \"provides for the addition of an indication for the treatment of noncirrhotic metabolic dysfunction-associated steatohepatitis (MASH), formerly known as nonalcoholic steatohepatitis (NASH), with moderate to advanced liver fibrosis (consistent with stages F2 to F3 fibrosis) in adults\"; \"It is approved under accelerated approval pursuant to section 506(c) of the Federal Food, Drug, and Cosmetic Act\".",
    },
    {
      id: "holzhey-2024",
      title: "Relevance of GLP-1 receptor agonists or SGLT-2 inhibitors on the recruitment for clinical studies in patients with NAFLD",
      publisher: "European Journal of Gastroenterology & Hepatology (Holzhey M et al., Leipzig University)",
      url: "https://pubmed.ncbi.nlm.nih.gov/37823453/",
      year: "2024",
      note: "Abstract read via PubMed. NAFLD patients with diabetes from a tertiary center and the population-based LIFE-Adult-Study, Germany. Quotes: \"GLP-1 RA or SGLT2i were used in 11.9% of the population-based cohort (LSM < 8 kPa), but in 32.0% with LSM ≥ 8 kPa\"; \"In candidates for liver biopsy for NASH studies (VCTE ≥ 8 kPa) the use of them exceeds 30%\".",
    },
    {
      id: "xiao-2025",
      title: "Identifying and Linking Patients At Risk for MASLD with Advanced Fibrosis to Care in Primary Care",
      publisher: "Journal of General Internal Medicine (Xiao TG et al., Wake Forest School of Medicine), via PubMed Central",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11861828/",
      year: "2025",
      note: "About 60 primary care practices, calendar year 2020. Quotes: \"Primary care patients at increased risk for MASLD with advanced fibrosis (n = 91,914)\"; \"The study cohort included patients with calculated FIB-4 score in 2020 (n = 52,006)\"; \"Inclusion into the study cohort required that laboratory parameters be drawn on the same day\"; \"Among indeterminate/high-risk patients (n = 11,980), 78.7% (n = 9433) had aminotransferases within normal limits, 0.95% (n = 114) had elastography, and 8.2% (n = 984) were referred\"; \"The prevalence of ICD-10 coded NAFLD or NASH in the cohort was 5.3%.\"",
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
    { label: "IBD and MASH trial recruitment", href: "/gastroenterology", description: "Biopsy criteria, screen failure and how Bond screens GI charts." },
    { label: "Obesity and metabolic trials", href: "/obesity-and-metabolic", description: "Where MASH candidates overlap with obesity and diabetes studies." },
    { label: "Identify: LLM-based EHR screening", href: "/identify", description: "How Bond reads labs, reports and notes against each criterion." },
    { label: "How to reduce screen failure", href: "/guides/reduce-screen-failure", description: "Catching ineligible patients before the screening visit." },
  ],
};

export default page;
