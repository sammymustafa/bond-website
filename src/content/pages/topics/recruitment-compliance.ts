import type { SeoPage } from "../../types";
import { ISO_27001_CLAUSE } from "../../compliance";

/** Topic hub: the rules that govern contacting patients about trials (HIPAA, IRB, TCPA, texting, AI disclosure, ads). */
const page: SeoPage = {
  path: "/topics/recruitment-compliance",
  category: "hub",
  title: "Clinical trial recruitment compliance: HIPAA, IRB, TCPA",
  description:
    "The rules for contacting patients about trials in one place: HIPAA, IRB review of ads and scripts, TCPA for calls and texts, 10DLC, AI disclosure laws.",
  keywords: [
    "clinical trial recruitment compliance",
    "HIPAA clinical trial recruitment",
    "IRB review of recruitment materials",
    "TCPA clinical trial recruitment calls",
    "AI disclosure patient calls",
  ],
  eyebrow: "Topic",
  h1: "Clinical trial recruitment compliance",
  intro:
    "Contacting patients about a study touches several sets of rules at once: HIPAA decides who may use the records, the IRB reviews what patients will see and hear, the TCPA and carrier rules govern calls and texts, state laws require telling patients when AI is used, and ad platforms have their own policies. This hub collects Bond Health's guides, explainers and templates on each.",
  summary: "HIPAA, IRB, TCPA, texting registration, AI disclosure and ad policy for trial recruitment outreach.",
  lastUpdated: "2026-11-08",
  sections: [
    {
      id: "which-rules",
      heading: "Which rules apply to trial recruitment outreach?",
      blocks: [
        {
          type: "ul",
          items: [
            "**HIPAA:** who may look at records to find candidates, and under which path a site may contact them. See [HIPAA and IRB rules for outreach](/guides/irb-hipaa-patient-outreach).",
            "**IRB review:** FDA expects IRBs to review recruitment advertising, and to check that telephone screening procedures protect prospective subjects.{{cite:fda-recruiting-1998}} See [what IRBs check in trial ads](/blog/irb-review-recruitment-ads).",
            "**TCPA and carrier rules:** consent and opt-out requirements for automated and AI-voice calls and texts, and carrier registration for business texting. See [TCPA compliance for AI calls and texts](/blog/tcpa-ai-outreach-2026).",
            "**State AI disclosure laws:** some states require telling patients when AI is used in a health communication. See [state AI disclosure laws](/blog/state-ai-disclosure-laws-healthcare).",
            "**Ad platform policies:** Google and Meta have their own rules for health and clinical trial ads. See [Google Ads policy for trial recruitment](/blog/google-ads-clinical-trial-policy).",
          ],
        },
      ],
    },
    {
      id: "start-here",
      heading: "Where should I start?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/guides/irb-hipaa-patient-outreach",
            "/blog/tcpa-ai-outreach-2026",
            "/templates/irb-submission-language-ai-outreach",
            "/blog/irb-review-recruitment-ads",
          ],
        },
      ],
    },
    {
      id: "texting",
      heading: "What are the rules for texting patients?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/blog/hipaa-texting-patients",
            "/blog/a2p-10dlc-sms-registration",
            "/blog/trial-lead-form-consent-language",
            "/templates/patient-outreach-sms-templates",
          ],
        },
      ],
    },
    {
      id: "ai-calls",
      heading: "What are the rules for AI calls and disclosure?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/blog/state-ai-disclosure-laws-healthcare",
            "/blog/patient-attitudes-ai-calls",
            "/templates/pre-screening-call-script",
          ],
        },
      ],
    },
    {
      id: "other-rules",
      heading: "Which other rules touch recruitment?",
      blocks: [
        {
          type: "pageCards",
          paths: [
            "/blog/google-ads-clinical-trial-policy",
            "/blog/ich-e6-r3-recruitment",
            "/blog/participant-payment-guidance",
            "/blog/fda-diversity-action-plans-status",
          ],
        },
      ],
    },
    {
      id: "how-bond-handles-it",
      heading: "How does Bond handle compliance in outreach?",
      blocks: [
        {
          type: "p",
          text: "Bond's voice and text agents tell patients that AI assistance is used, and patients can reach a person at any time: the agent transfers the call live to a coordinator or books a human callback, whichever the site prefers. Scripts are configured for each site and study, so the site's IRB reviews them before outreach starts.{{cite:bond-site,bond-product}}",
        },
        {
          type: "p",
          text: `Bond signs BAAs and is HIPAA compliant and SOC 2 Type I compliant, and ${ISO_27001_CLAUSE}.{{cite:bond-site,bond-product}} See [security](/security) and [Engage](/engage).`,
        },
      ],
    },
  ],
  sources: [
    {
      id: "fda-recruiting-1998",
      title: "Recruiting Study Subjects: Guidance for Institutional Review Boards and Clinical Investigators",
      publisher: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/recruiting-study-subjects",
      year: "1998",
      note: "Guidance dated January 1998. Quote: \"FDA expects IRBs to review the advertising to assure that it is not unduly coercive\" and, on receptionist screening scripts, \"The IRB should assure the procedures followed adequately protect the rights and welfare of the prospective subjects.\"",
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
    { label: "EHR screening", href: "/topics/ehr-screening", description: "Finding eligible patients in the EHR." },
    { label: "Enrollment metrics", href: "/topics/enrollment-metrics", description: "Funnel metrics, calculators and benchmarks." },
    { label: "Security", href: "/security", description: "Where PHI goes in a Bond deployment and the controls around it." },
  ],
};

export default page;
