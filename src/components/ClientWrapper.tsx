"use client";

import { ReactNode } from "react";
import { DemoModalProvider } from "@/context/DemoModalContext";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <DemoModalProvider>{children}</DemoModalProvider>;
}

