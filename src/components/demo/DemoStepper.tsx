import Link from "next/link";

const steps = [
  {
    id: "identify",
    label: "Identify",
    title: "LLM-based EHR screening",
    description: "Ranked matches with criteria-level justification from structured and unstructured data.",
  },
  {
    id: "engage",
    label: "Engage",
    title: "Voice agents for pre-screening",
    description: "Automated outreach, eligibility Q&A, and visit scheduling with escalation to staff.",
  },
  {
    id: "consent",
    label: "Consent",
    title: "AI-powered informed consent",
    description: "Plain-language consent summaries and chatbot delivery for better understanding.",
  },
];

export default function DemoStepper() {
  return (
    <div className="grid gap-4 md:gap-6 md:grid-cols-3">
      {steps.map((step) => (
        <Link
          key={step.id}
          href={`#${step.id}`}
          className="card group h-full flex flex-col justify-between cursor-pointer hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-bond-primary">
                {step.label}
              </span>
              <span className="inline-flex items-center justify-center rounded-full bg-bond-primary/5 text-bond-primary text-xs font-medium px-2 py-0.5">
                Step
              </span>
            </div>
            <h3 className="heading-sm mb-2">{step.title}</h3>
            <p className="body-sm text-gray-600">{step.description}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-sm text-bond-primary">
            <span className="link-underline">View this step</span>
            <span aria-hidden>→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

