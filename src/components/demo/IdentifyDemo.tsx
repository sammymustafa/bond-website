import { demoPatients, type DemoPatient, type DemoPatientId } from "@/data/demoPatients";
import { demoTrialsByPatient } from "@/data/demoTrials";

function getPatientById(id: DemoPatientId): DemoPatient {
  return demoPatients.find((p) => p.id === id) ?? demoPatients[0];
}

interface IdentifyDemoProps {
  selectedPatientId: DemoPatientId;
  onChangePatient: (id: DemoPatientId) => void;
}

export default function IdentifyDemo({ selectedPatientId, onChangePatient }: IdentifyDemoProps) {
  const patient = getPatientById(selectedPatientId);
  const trials = demoTrialsByPatient[selectedPatientId] ?? [];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Step 1 · Identify</p>
          <h2 className="heading-lg">LLM-based EHR screening</h2>
          <p className="body-md mt-3 max-w-2xl">
            Bond connects to your EHR, reads structured fields and unstructured notes, and ranks
            eligible patients for each protocol with transparent criteria-level reasoning.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="patient-select" className="body-sm font-medium text-gray-700">
            Choose a sample patient
          </label>
          <select
            id="patient-select"
            className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-bond-primary/40 focus:border-bond-primary"
            value={selectedPatientId}
            onChange={(e) => onChangePatient(e.target.value as DemoPatientId)}
          >
            {demoPatients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          {patient.xmlSamplePath && (
            <p className="body-xs text-gray-500">
              Based on a synthetic CCDA XML file:&nbsp;
              <span className="font-mono text-xs text-gray-600">{patient.xmlSamplePath}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
        {/* EHR summary */}
        <div className="card">
          <h3 className="heading-sm mb-3">Parsed EHR summary</h3>
          <p className="body-sm text-gray-600 mb-4">
            Bond ingests the patient&apos;s CCDA / FHIR record and surfaces the key facts used to
            evaluate eligibility for each trial.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Demographics
              </h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {patient.demographics.map((item) => (
                  <div key={item.label} className="flex justify-between gap-2">
                    <dt className="text-gray-500">{item.label}</dt>
                    <dd className="font-medium text-gray-900 text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Diagnoses
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {patient.diagnoses.map((item) => (
                  <li key={item.label}>
                    <span className="font-medium">{item.label}:</span> {item.value}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Medications
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {patient.medications.map((item) => (
                  <li key={item.label}>
                    <span className="font-medium">{item.label}:</span> {item.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 border border-dashed border-gray-200 p-3 text-xs text-gray-600">
              <p className="font-medium mb-1 text-gray-700">Unstructured notes (LLM summary)</p>
              <p>{patient.notesSummary}</p>
            </div>
          </div>
        </div>

        {/* Trial matches */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="heading-sm">Matched trials</h3>
              <p className="body-sm text-gray-600">
                ClinicalTrials.gov trials ranked by match score, with inclusion/exclusion mapping
                back to EHR evidence.
              </p>
            </div>
            <span className="stat-chip">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Mocked data · no live PHI
            </span>
          </div>

          <div className="space-y-4">
            {trials.map((trial) => (
              <article key={trial.nctId} className="card border-gray-100">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">{trial.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {trial.phase} · {trial.location} · {trial.nctId}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="stat-number-sm">{trial.matchScore}%</div>
                    <p className="text-xs text-gray-500 mt-1">Match score</p>
                  </div>
                </div>
                <p className="body-sm text-gray-700 mb-4">{trial.summary}</p>

                <div className="mt-2">
                  <p className="body-xs font-medium text-gray-700 mb-2">
                    Criteria-level rationale (inclusion / exclusion)
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    {trial.relevanceJustification.map((row, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 rounded-lg bg-gray-50 border border-gray-100 px-3 py-2"
                      >
                        <span
                          className={`mt-0.5 h-2 w-2 rounded-full ${
                            row.status === "meets"
                              ? "bg-emerald-500"
                              : row.status === "does_not_meet"
                              ? "bg-rose-500"
                              : "bg-amber-400"
                          }`}
                        />
                        <div className="space-y-0.5">
                          <p className="font-medium text-gray-800">{row.criterion}</p>
                          <p className="text-gray-600">{row.evidence}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

