 "use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoHero from "@/components/demo/DemoHero";
import DemoStepper from "@/components/demo/DemoStepper";
import IdentifyDemo from "@/components/demo/IdentifyDemo";
import EngageDemo from "@/components/demo/EngageDemo";
import ConsentDemo from "@/components/demo/ConsentDemo";
import type { DemoPatientId } from "@/data/demoPatients";

export const metadata = {
  title: "Interactive Demo | Bond Health",
  description:
    "Walk through how Bond Health uses AI to identify eligible patients, engage them with voice agents, and simplify informed consent for clinical trials.",
};

export default function DemoPage() {
  const [selectedPatientId, setSelectedPatientId] = useState<DemoPatientId>("luisa-santana");

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

