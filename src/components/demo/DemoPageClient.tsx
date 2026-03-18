"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoHero from "@/components/demo/DemoHero";
import DemoStepper from "@/components/demo/DemoStepper";
import IdentifyDemo from "@/components/demo/IdentifyDemo";
import EngageDemo from "@/components/demo/EngageDemo";
import ConsentDemo from "@/components/demo/ConsentDemo";
import type { DemoPatientId } from "@/data/demoPatients";

export default function DemoPageClient() {
  const [selectedPatientId, setSelectedPatientId] = useState<DemoPatientId>("luisa-santana");

  // #region agent log
  useEffect(() => {
    fetch("http://127.0.0.1:7242/ingest/bd8b3023-8eb4-4082-9580-b3b7d230da7b", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: "log_demo_page_mount",
        timestamp: Date.now(),
        runId: "pre-fix",
        hypothesisId: "H1",
        location: "DemoPageClient.tsx:18",
        message: "DemoPageClient mounted",
        data: {},
      }),
    }).catch(() => {});
  }, []);
  // #endregion

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 md:pt-28">
        <section className="section bg-gradient-soft">
          <div className="container-lg">
            <DemoHero />
            <div className="mt-10 md:mt-12">
              <DemoStepper />
            </div>
          </div>
        </section>

        <section className="section bg-gradient-section" id="identify">
          <div className="container-lg">
            <IdentifyDemo
              selectedPatientId={selectedPatientId}
              onChangePatient={setSelectedPatientId}
            />
          </div>
        </section>

        <section className="section bg-white" id="engage">
          <div className="container-lg">
            <EngageDemo patientId={selectedPatientId} />
          </div>
        </section>

        <section className="section bg-gradient-section" id="consent">
          <div className="container-lg">
            <ConsentDemo patientId={selectedPatientId} />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

