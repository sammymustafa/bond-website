"use client";

import { MessageCircle } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function ContactButton({ label = "Contact us", className = "btn-secondary" }: { label?: string; className?: string }) {
  const { openDemoModal } = useDemoModal();
  return (
    <button type="button" onClick={openDemoModal} className={className}>
      <MessageCircle className="h-4 w-4" />
      {label}
    </button>
  );
}
