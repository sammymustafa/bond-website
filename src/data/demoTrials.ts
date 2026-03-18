import type { DemoPatientId } from "./demoPatients";

export interface DemoTrial {
  nctId: string;
  title: string;
  phase: string;
  location: string;
  summary: string;
  matchScore: number;
  relevanceJustification: {
    criterion: string;
    status: "meets" | "does_not_meet" | "unknown";
    evidence: string;
  }[];
}

export const demoTrialsByPatient: Record<DemoPatientId, DemoTrial[]> = {
  "luisa-santana": [
    {
      nctId: "NCT00000001",
      title: "Once-Weekly GLP-1 Agonist for Adults With Type 2 Diabetes",
      phase: "Phase 3",
      location: "Boston, MA",
      summary:
        "Randomized, double-blind study evaluating an investigational once-weekly GLP-1 agonist compared to standard of care in adults with Type 2 diabetes and suboptimal glycemic control.",
      matchScore: 94,
      relevanceJustification: [
        {
          criterion: "Age 18–75 years",
          status: "meets",
          evidence: "Patient age is 52 years in the EHR demographics.",
        },
        {
          criterion: "Documented diagnosis of Type 2 diabetes for ≥ 1 year",
          status: "meets",
          evidence:
            "Problem list includes Type 2 diabetes with diagnosis date > 5 years ago in structured conditions.",
        },
        {
          criterion: "Baseline HbA1c between 7.0% and 10.0%",
          status: "meets",
          evidence: "Most recent lab panel shows HbA1c 8.5% in the last 60 days.",
        },
        {
          criterion: "eGFR ≥ 45 mL/min/1.73m²",
          status: "meets",
          evidence: "EHR labs show eGFR 72 mL/min/1.73m² with stable renal function.",
        },
        {
          criterion: "No history of pancreatitis",
          status: "meets",
          evidence:
            "Problem list, past medical history, and recent encounter notes contain no codes or mentions of pancreatitis.",
        },
      ],
    },
    {
      nctId: "NCT00000002",
      title: "Digital Coaching Plus Basal Insulin Optimization in Type 2 Diabetes",
      phase: "Phase 2",
      location: "Providence, RI",
      summary:
        "Interventional study testing whether digital coaching combined with insulin titration algorithms improves glycemic control compared to standard clinic-based titration.",
      matchScore: 86,
      relevanceJustification: [
        {
          criterion: "On basal insulin for at least 3 months",
          status: "meets",
          evidence: "Medication list shows basal insulin active for > 6 months.",
        },
        {
          criterion: "At least one HbA1c ≥ 8.0% in last 6 months",
          status: "meets",
          evidence: "Lab history shows HbA1c 8.5% three months ago.",
        },
        {
          criterion: "Access to smartphone or computer",
          status: "unknown",
          evidence:
            "EHR does not explicitly document device access; would be confirmed during pre-screening.",
        },
      ],
    },
  ],
};

