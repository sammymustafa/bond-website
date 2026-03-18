import { demoPatients, type DemoPatient, type DemoPatientId } from "@/data/demoPatients";

export function getDemoPatients(): DemoPatient[] {
  return demoPatients;
}

export function getParsedEhrForPatient(patientId: DemoPatientId): DemoPatient {
  return demoPatients.find((p) => p.id === patientId) ?? demoPatients[0];
}

