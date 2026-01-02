"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import DemoModal from "@/components/DemoModal";

interface DemoModalContextType {
  openDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDemoModal = () => setIsOpen(true);
  const closeDemoModal = () => setIsOpen(false);

  return (
    <DemoModalContext.Provider value={{ openDemoModal }}>
      {children}
      <DemoModal isOpen={isOpen} onClose={closeDemoModal} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (context === undefined) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}

