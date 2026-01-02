"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Clock, Users, Zap, Heart, Brain, Code, Database, Headphones, X, CheckCircle, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const openRoles = [
  {
    title: "ML/AI Engineer",
    department: "Engineering",
    location: "Boston, MA",
    type: "Full-time",
    description: "Build and improve our LLM-based EHR screening models. Work on clinical NLP, knowledge graph embeddings, and inference optimization.",
    requirements: [
      "3+ years experience with ML/NLP systems in production",
      "Experience with LLMs, transformer architectures, and fine-tuning",
      "Strong Python skills and familiarity with PyTorch or TensorFlow",
      "Healthcare or clinical data experience is a plus",
    ],
    icon: Brain,
  },
  {
    title: "Full-Stack Engineer",
    department: "Engineering",
    location: "Boston, MA",
    type: "Full-time",
    description: "Build the platform that research sites use daily. Work on our React/Next.js frontend, Node.js backend, and real-time dashboards.",
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React, TypeScript, and Node.js",
      "Experience with PostgreSQL and cloud infrastructure (AWS/GCP)",
      "Strong attention to UX and product quality",
    ],
    icon: Code,
  },
  {
    title: "Data Engineer",
    department: "Engineering",
    location: "Boston, MA",
    type: "Full-time",
    description: "Build and maintain our clinical data pipelines. Work with EHR integrations, FHIR/HL7 standards, and our knowledge graph infrastructure.",
    requirements: [
      "3+ years experience building data pipelines",
      "Experience with FHIR, HL7, or healthcare interoperability standards",
      "Strong SQL and Python skills",
      "Familiarity with graph databases is a plus",
    ],
    icon: Database,
  },
  {
    title: "Voice AI Engineer",
    department: "Engineering",
    location: "Boston, MA",
    type: "Full-time",
    description: "Build and optimize our voice agent system for patient outreach and pre-screening. Work on speech recognition, dialog management, and telephony.",
    requirements: [
      "2+ years experience with voice/conversational AI",
      "Experience with speech-to-text, text-to-speech, and telephony APIs",
      "Strong Python skills",
      "Healthcare experience is a plus",
    ],
    icon: Headphones,
  },
];

const values = [
  {
    icon: Zap,
    title: "Move fast, stay focused",
    description: "We ship quickly and iterate based on real feedback from research sites.",
  },
  {
    icon: Heart,
    title: "Patient-first mindset",
    description: "Everything we build helps patients get access to trials that could change their lives.",
  },
  {
    icon: Users,
    title: "Small team, big impact",
    description: "We're a small team where everyone has outsized impact on our mission.",
  },
];

// Application Modal Component
function ApplicationModal({ 
  isOpen, 
  onClose, 
  roleTitle,
  formType 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  roleTitle?: string;
  formType: "application" | "talent";
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // Use different Formspree IDs for job applications vs talent network
      const FORMSPREE_ID = formType === "application" ? "xeeogqyz" : "mojvdqgn";
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name || "Not provided",
          linkedin: linkedin || "Not provided",
          message: message || (formType === "application" ? `Applying for ${roleTitle}` : "Interested in joining the talent network"),
          role: roleTitle || "General / Talent Network",
          _subject: formType === "application" 
            ? `Job Application: ${roleTitle} - ${name || email}`
            : `Talent Network: ${name || email}`,
          _replyto: email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
          setName("");
          setLinkedin("");
          setMessage("");
          onClose();
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Application Sent!</h3>
            <p className="text-gray-600">
              Thank you for your interest! We'll review your application and get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {formType === "application" ? `Apply for ${roleTitle}` : "Join Our Talent Network"}
              </h3>
              <p className="text-gray-600">
                {formType === "application" 
                  ? "Tell us about yourself and why you're interested in this role."
                  : "We're always looking for exceptional people. Let us know how you can help."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bond-primary focus:ring-2 focus:ring-bond-primary/20 outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bond-primary focus:ring-2 focus:ring-bond-primary/20 outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bond-primary focus:ring-2 focus:ring-bond-primary/20 outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {formType === "application" ? "Why are you interested?" : "How can you help?"}
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={formType === "application" 
                    ? "Tell us about your relevant experience and why you're excited about this role..."
                    : "Tell us about your skills and what type of role interests you..."}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bond-primary focus:ring-2 focus:ring-bond-primary/20 outline-none transition-all text-gray-900 resize-none"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting, you agree to our privacy policy.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | undefined>();
  const [formType, setFormType] = useState<"application" | "talent">("application");

  const openApplicationModal = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setFormType("application");
    setModalOpen(true);
  };

  const openTalentModal = () => {
    setSelectedRole(undefined);
    setFormType("talent");
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-bond-primary font-semibold mb-4">Careers at Bond Health</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help patients access <span className="text-bond-primary">life-changing trials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're building AI that helps research sites enroll the right patients faster. 
            Join us if you want to work on hard problems that matter.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How we work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-bond-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-bond-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Roles</h2>
            <p className="text-gray-600">
              We're looking for exceptional engineers who want to work on AI that impacts healthcare.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div 
                key={role.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-bond-primary/10 flex items-center justify-center flex-shrink-0">
                    <role.icon className="w-6 h-6 text-bond-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
                        <p className="text-sm text-gray-500">{role.department}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          <MapPin className="w-3 h-3" />
                          {role.location}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          <Clock className="w-3 h-3" />
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{role.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">What we're looking for:</p>
                      <ul className="space-y-1">
                        {role.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-bond-primary mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => openApplicationModal(role.title)}
                      className="inline-flex items-center gap-2 text-bond-primary font-medium hover:underline"
                    >
                      Apply now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't see a role that fits?
          </h2>
          <p className="text-gray-600 mb-8">
            We're always looking for exceptional people. Join our talent network and we'll reach out when we have the right opportunity.
          </p>
          <button
            onClick={openTalentModal}
            className="btn-primary inline-flex"
          >
            Join Talent Network
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        roleTitle={selectedRole}
        formType={formType}
      />
    </main>
  );
}
