"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const FORMSPREE_ID = "mwvpokad";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          form: "newsletter",
          _subject: `Newsletter signup: ${email}`,
          _replyto: email,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-emerald-800">
        <CheckCircle className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm">You are on the list. The next issue goes out at the start of the month.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Work email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@yoursite.org"
        className="w-full flex-1 rounded-full border border-gray-200 px-5 py-3 text-gray-900 outline-none transition-all focus:border-bond-primary focus:ring-2 focus:ring-bond-primary/20"
      />
      <button type="submit" disabled={status === "sending"} className="btn-primary justify-center disabled:opacity-60">
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        Subscribe
      </button>
      {status === "error" && <p className="text-sm text-red-600 sm:w-full">Please check the address and try again.</p>}
    </form>
  );
}
