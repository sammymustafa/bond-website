import { demoTrialsByPatient, type DemoTrial } from "@/data/demoTrials";
import type { DemoPatientId } from "@/data/demoPatients";

export function getDemoTrialsForPatient(patientId: DemoPatientId): DemoTrial[] {
  return demoTrialsByPatient[patientId] ?? [];
}

// In production, this function can be updated to fetch from ClinicalTrials.gov
// and apply Bond's matching logic, while keeping the UI layer unchanged.

