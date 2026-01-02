"use client";

import { useState } from "react";
import { X, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Validate email
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send form data to Formspree (free form backend)
      const FORMSPREE_ID = "mwvpokad";
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name || "Not provided",
          company: company || "Not provided",
          message: message || "I'd like to learn more about Bond Health.",
          _subject: `Contact Request from ${name || email}`,
          _replyto: email,
        }),
      });

      if (response.ok) {
        // Show success state
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after delay
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
          setName("");
          setCompany("");
          setMessage("");
          onClose();
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      // Fallback to mailto if Formspree fails
      const subject = encodeURIComponent(`Contact Request from ${name || email}`);
      const body = encodeURIComponent(
        `Name: ${name || "Not provided"}\n` +
        `Email: ${email}\n` +
        `Company: ${company || "Not provided"}\n` +
        `Message: ${message || "I'd like to learn more about Bond Health."}\n\n` +
        `---\nSent from Bond Health website contact form`
      );
      const cc = encodeURIComponent(email);
      
      window.location.href = `mailto:hello@bondtrials.com?cc=${cc}&subject=${subject}&body=${body}`;
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setName("");
        setCompany("");
        setMessage("");
        onClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          // Success state
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">
              Thank you! We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          // Form
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-600">
                Have questions or need pricing information? We'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bond-primary focus:ring-2 focus:ring-bond-primary/20 outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bond-primary focus:ring-2 focus:ring-bond-primary/20 outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your research site or company"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bond-primary focus:ring-2 focus:ring-bond-primary/20 outline-none transition-all text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your recruitment challenges..."
                  rows={3}
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
                    Send Message
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

