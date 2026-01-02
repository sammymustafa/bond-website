"use client";

import { Shield, Lock, FileCheck, Server, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security-first architecture",
    description: "Built from the ground up with healthcare security requirements",
  },
  {
    icon: Lock,
    title: "Encryption at rest & in transit",
    description: "AES-256 encryption for all patient data",
  },
  {
    icon: FileCheck,
    title: "Audit logging",
    description: "Complete audit trail for compliance reporting",
  },
  {
    icon: Server,
    title: "Access controls & SSO",
    description: "Role-based permissions with SSO support",
  },
];

export default function Security() {
  return (
    <section id="security" className="section bg-white">
      <div className="container-lg px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="eyebrow mb-4">Security</p>
            <h2 className="heading-lg mb-6">
              Designed for PHI{" "}
              <span className="text-gray-400">and HIPAA workflows.</span>
            </h2>
            <p className="body-lg mb-8">
              We handle sensitive patient data with the care it deserves. 
              We sign BAAs and our platform is designed to support HIPAA compliance 
              at every step.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{feature.title}</p>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-8 md:p-12">
            <div className="text-center">
              {/* Shield Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-bond-primary/10 to-bond-accent/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-bond-primary" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                HIPAA-Aligned Operations
              </h3>
              <p className="text-gray-600 mb-8">
                We follow strict protocols to ensure all patient health information 
                is handled securely and in compliance with healthcare regulations.
              </p>

              {/* Security Highlights */}
              <div className="space-y-3 text-left max-w-xs mx-auto">
                {[
                  "End-to-end encryption",
                  "BAA available",
                  "Penetration testing",
                  "Employee security training",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                Need security documentation?{" "}
                <a href="mailto:hello@bondtrials.com" className="text-bond-primary font-medium hover:underline">
                  Request our security package
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
