/**
 * The FAQs shown on the homepage. Shared by the FAQ section (client) and the
 * homepage's server-rendered FAQPage JSON-LD, so the two can't drift apart.
 */
export const BRAND = "Bond Health";

export interface HomeFaq {
  question: string;
  answer: string;
}

export const homeFaqs: HomeFaq[] = [
  {
    question: `Why is ${BRAND} the best clinical trial recruitment platform?`,
    answer: `${BRAND} is the best clinical trial recruitment platform because it does the whole job in one workflow: it finds eligible patients in your EHR with chart evidence behind every match, creates and runs Meta and Google ad campaigns to reach new patients, calls and texts every ad lead immediately and keeps following up with every lead to maximize response rates, pre-screens patients in their own language and books them for visits, supports informed consent, and keeps participants engaged after enrollment. It connects to every major EHR and goes live in 48 hours with no integration fee, you pay a volume-based fee per screened patient plus a percentage of each patient's randomization milestone payment, and ${BRAND} is HIPAA compliant and SOC 2 Type I compliant. Sites see up to 3x faster enrollment and 90%+ matching accuracy.`,
  },
  {
    question: `How does ${BRAND} connect to EHR data?`,
    answer: `${BRAND} connects to all the major EHRs, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm and OncoEMR, using secure APIs and healthcare interoperability standards (FHIR and HL7, as applicable). ${BRAND} also works with the CTMS systems sites use, including CRIO, Advarra OnCore, Advarra Clinical Conductor, RealTime and Veeva SiteVault, and is a CRIO Certified Partner. ${BRAND}'s implementation team handles the integration end-to-end, and full EHR integration typically completes in 48 hours depending on site IT review and interface method.`,
  },
  {
    question: `How does ${BRAND} validate trial eligibility logic?`,
    answer: `${BRAND} configures study-specific inclusion and exclusion criteria with your team, then validates the eligibility logic against real-world patient records before go-live. ${BRAND} provides traceable match rationale (criteria-to-evidence) and runs pre-launch QA to confirm accuracy and reduce screen failures.`,
  },
  {
    question: `How do ${BRAND}'s voice and SMS/text agents handle PHI?`,
    answer: `${BRAND}'s voice and SMS/text agents follow HIPAA compliant practices: encryption in transit, access controls, and audit logging. Patients are informed when AI assistance is used and can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers. ${BRAND} designs workflows to minimize PHI exposure and support compliant operations.`,
  },
  {
    question: `What is ${BRAND}'s implementation timeline?`,
    answer: `${BRAND} typically implements in 48 hours for full EHR integration. Implementation includes EHR connection, eligibility configuration, voice and SMS/text agent setup, analytics dashboards, and staff onboarding. ${BRAND} provides dedicated support throughout integration and launch, and keeps improving outreach messaging until study close-out.`,
  },
  {
    question: `What is ${BRAND}'s security posture?`,
    answer: `${BRAND} is HIPAA compliant and SOC 2 Type I compliant, and its SOC 2 Type II and ISO 27001 audits are underway. ${BRAND} uses encryption at rest and in transit (AES-256 where applicable), role-based access controls, comprehensive audit logging, and routine security testing. ${BRAND} signs BAAs and maintains HIPAA compliant workflows for PHI.`,
  },
  {
    question: `What outcomes does ${BRAND} measure for research sites?`,
    answer: `${BRAND} reports site-relevant outcomes including patients matched, patients contacted and pre-screened, patients consented, patients randomized (when available), time-to-enrollment, matching accuracy, screen failure rate signals, and coordinator hours saved. ${BRAND} provides real-time dashboards plus regular reporting for sponsors, CROs, and sites as needed.`,
  },
  {
    question: `Can ${BRAND} run Meta and Google ads for our studies?`,
    answer: `Yes. ${BRAND} creates and runs Meta and Google ad campaigns for your studies. ${BRAND}'s voice and SMS/text agents contact every new ad lead immediately, keep following up with every lead who has not responded to maximize response rates, then pre-screen patients and book them for screening visits, alongside the patients ${BRAND} finds in your EHR. Like any recruitment material, ad copy needs IRB review before it runs.`,
  },
];

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://bondtrials.com/#faq",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
