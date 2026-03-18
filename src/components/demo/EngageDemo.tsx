import { demoPatients, type DemoPatientId } from "@/data/demoPatients";
import { demoTrialsByPatient } from "@/data/demoTrials";

interface EngageDemoProps {
  patientId?: DemoPatientId;
}

export default function EngageDemo({ patientId }: EngageDemoProps) {
  const fallbackPatient = demoPatients[0];
  const patient = demoPatients.find((p) => p.id === patientId) ?? fallbackPatient;
  const topTrial = (demoTrialsByPatient[patient.id] ?? [])[0];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="eyebrow mb-2">Step 2 · Engage</p>
          <h2 className="heading-lg">Voice AI pre-screening & scheduling</h2>
          <p className="body-md mt-3 max-w-2xl">
            Once patients are identified, Bond&apos;s voice agents call or text them, complete
            structured pre-screening, and book visits directly onto coordinator calendars—with a
            full audit trail.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-xs font-medium text-amber-700">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          Prototype UI · Voice agent integration coming soon
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* Conversation transcript */}
        <div className="card">
          <h3 className="heading-sm mb-1">Sample pre-screening call</h3>
          <p className="body-sm text-gray-600 mb-4">
            Scripted example of how a Bond voice agent might pre-screen{" "}
            <span className="font-medium">{patient.name}</span>
            {topTrial && (
              <>
                {" "}
                for <span className="font-medium">{topTrial.title}</span>.
              </>
            )}
          </p>

          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
            {conversation.map((turn, index) => (
              <div
                key={index}
                className={`flex ${
                  turn.speaker === "Agent" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm ${
                    turn.speaker === "Agent"
                      ? "bg-bond-primary text-white rounded-bl-sm"
                      : "bg-gray-50 text-gray-900 rounded-br-sm"
                  }`}
                >
                  <p className="text-xs opacity-80 mb-1">{turn.speaker}</p>
                  <p>{turn.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 text-gray-500 cursor-not-allowed text-xs font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-gray-400" />
              Play sample call (coming soon)
            </button>
            <p>
              In production, Bond plugs into your phone system and calendar and runs this workflow
              in real time, with escalation paths to site staff.
            </p>
          </div>
        </div>

        {/* Structured call outcome */}
        <div className="card bg-gradient-soft">
          <h3 className="heading-sm mb-3">Structured output</h3>
          <p className="body-sm text-gray-600 mb-4">
            Every call is converted into structured fields so coordinators can see who is pre-screen
            eligible and what next step was booked.
          </p>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500">Patient</dt>
              <dd className="font-medium text-gray-900 text-right">{patient.name}</dd>
            </div>
            {topTrial && (
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">Trial</dt>
                <dd className="font-medium text-gray-900 text-right">{topTrial.title}</dd>
              </div>
            )}
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500">Pre-screen result</dt>
              <dd className="font-medium text-emerald-700 text-right">Likely eligible</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500">Next step</dt>
              <dd className="font-medium text-gray-900 text-right">
                In-person screening visit scheduled
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500">Visit time</dt>
              <dd className="font-medium text-gray-900 text-right">
                Tue · 10:30am · Endocrinology clinic
              </dd>
            </div>
          </dl>
          <div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-white/60 px-3 py-2 text-xs text-gray-600">
            <p className="font-medium text-gray-700 mb-1">Voice agent integration placeholder</p>
            <p>
              This is where you can later embed your live voice AI widget or call playback UI while
              keeping the rest of the demo unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const conversation = [
  {
    speaker: "Agent" as const,
    text: "Hi Ana, this is Bond calling on behalf of your diabetes clinic about a research study. Is now still an okay time to talk?",
  },
  {
    speaker: "Patient" as const,
    text: "Yes, I have a few minutes.",
  },
  {
    speaker: "Agent" as const,
    text: "Great. I’ll ask a few quick questions to see if the study might be a fit. You can stop at any time. First, are you currently using insulin for your diabetes?",
  },
  {
    speaker: "Patient" as const,
    text: "Yes, I take a long-acting insulin at night plus metformin.",
  },
  {
    speaker: "Agent" as const,
    text: "Thank you. In the last year, have you had any serious pancreas or gallbladder problems, like pancreatitis or gallstones that required surgery?",
  },
  {
    speaker: "Patient" as const,
    text: "No, nothing like that.",
  },
  {
    speaker: "Agent" as const,
    text: "And are you able to come to the clinic about once a month for study visits over the next year?",
  },
  {
    speaker: "Patient" as const,
    text: "Yes, monthly visits should be fine.",
  },
  {
    speaker: "Agent" as const,
    text: "Based on your chart and your answers, you appear likely eligible. Would you like to schedule an in-person visit to review the study and consent form with the research team?",
  },
  {
    speaker: "Patient" as const,
    text: "Yes, I’d like to hear more.",
  },
  {
    speaker: "Agent" as const,
    text: "I have openings next Tuesday morning and Thursday afternoon. Which works better for you?",
  },
  {
    speaker: "Patient" as const,
    text: "Tuesday morning works.",
  },
  {
    speaker: "Agent" as const,
    text: "Perfect, I’ve booked you for Tuesday at 10:30am. You’ll receive a text with details and a link to a plain-language summary of the study you can review before your visit.",
  },
];

