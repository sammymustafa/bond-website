import { demoPatients, type DemoPatientId } from "@/data/demoPatients";
import { demoConsentByPatient } from "@/data/demoConsent";

interface ConsentDemoProps {
  patientId?: DemoPatientId;
}

const fallbackPatient = demoPatients[0];

export default function ConsentDemo({ patientId }: ConsentDemoProps) {
  const patient = demoPatients.find((p) => p.id === patientId) ?? fallbackPatient;
  const consent = demoConsentByPatient[patient.id];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Step 3 · Consent</p>
          <h2 className="heading-lg">AI-powered informed consent</h2>
          <p className="body-md mt-3 max-w-2xl">
            Bond takes long, complex ICFs and turns them into trial-specific plain-language
            summaries and chatbot flows so patients actually understand what they&apos;re
            signing—while preserving full regulatory language for coordinators and IRBs.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-700">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          Demo content generated from a representative ICF
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Original vs simplified consent */}
        <div className="card">
          <h3 className="heading-sm mb-3">From 20–40 page ICF to something patients can skim</h3>
          <p className="body-sm text-gray-600 mb-4">
            On the left is language similar to what appears in many ICFs. On the right is how Bond
            simplifies it for patients like {patient.name}.
          </p>
          <div className="grid gap-4">
            {consent.sections.map((section) => (
              <div key={section.id} className="border border-gray-100 rounded-xl overflow-hidden">
                <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    {section.title}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="p-4 text-xs leading-relaxed text-gray-600 bg-white max-h-40 overflow-y-auto">
                    {section.original}
                  </div>
                  <div className="p-4 text-sm leading-relaxed text-gray-900 bg-bond-primary/3">
                    {section.simplified}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chatbot-style explanation */}
        <div className="card bg-gradient-soft flex flex-col">
          <h3 className="heading-sm mb-2">Chatbot delivery</h3>
          <p className="body-sm text-gray-600 mb-4">
            Patients can review consent via a conversational chatbot that answers questions in
            plain language before they meet with the coordinator.
          </p>

          <div className="flex-1 rounded-2xl bg-white border border-gray-100 p-3 sm:p-4 max-h-[360px] overflow-y-auto">
            <div className="space-y-3">
              {consent.chatbotScript.map((turn, index) => (
                <div
                  key={index}
                  className={`flex ${
                    turn.role === "bondAgent" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm ${
                      turn.role === "bondAgent"
                        ? "bg-bond-primary text-white rounded-bl-sm"
                        : "bg-gray-50 text-gray-900 rounded-br-sm"
                    }`}
                  >
                    <p className="text-xs opacity-80 mb-1">
                      {turn.role === "bondAgent" ? "Bond consent assistant" : patient.name}
                    </p>
                    <p>{turn.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="body-xs text-gray-500 mt-4">
            In production, Bond can personalize consent explanations by language, health literacy,
            and patient-specific risk factors, while logging every version and interaction for
            audit.
          </p>
        </div>
      </div>
    </div>
  );
}

