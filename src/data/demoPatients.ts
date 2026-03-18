export type DemoPatientId = "luisa-santana";

export interface ParsedEhrFact {
  label: string;
  value: string;
}

export interface DemoPatient {
  id: DemoPatientId;
  name: string;
  mrn: string;
  demographics: ParsedEhrFact[];
  diagnoses: ParsedEhrFact[];
  medications: ParsedEhrFact[];
  notesSummary: string;
  xmlSamplePath?: string;
}

export const demoPatients: DemoPatient[] = [
  {
    id: "luisa-santana",
    name: "Ana Luisa Santana",
    mrn: "EHR-894-6754",
    demographics: [
      { label: "Age", value: "52 years" },
      { label: "Sex", value: "Female" },
      { label: "Location", value: "Boston, MA" },
    ],
    diagnoses: [
      { label: "Primary diagnosis", value: "Type 2 diabetes mellitus" },
      { label: "Comorbidities", value: "Hypertension, hyperlipidemia" },
    ],
    medications: [
      { label: "Diabetes meds", value: "Metformin, basal insulin" },
      { label: "Other meds", value: "Lisinopril, atorvastatin" },
    ],
    notesSummary:
      "Synthetic EHR notes indicate long-standing Type 2 diabetes with suboptimal control, regular primary care follow-up, and no recent hospitalizations. Labs show HbA1c ~8.5%, normal liver function, and eGFR within inclusion thresholds for many diabetes trials.",
    xmlSamplePath: "/demo/ehr/ana_luisa_santana_sample.xml",
  },
];

