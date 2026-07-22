import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your access to and use of Bond Health's website and AI-powered clinical trial patient recruitment platform.",
  alternates: {
    canonical: "https://bondtrials.com/terms-of-service",
  },
};

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-2xl font-display font-bold text-bond-primary mt-10 mb-4"
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600 leading-relaxed mb-4">{children}</p>;
}

function BulletList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-3 mb-6 ml-1">{children}</ul>;
}

function BulletItem({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-gray-600 leading-relaxed">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-bond-primary flex-shrink-0" />
      <span>
        {label && <strong className="text-gray-800">{label}</strong>} {children}
      </span>
    </li>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <article className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-bond-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-bond-primary" />
              </div>
              <span className="text-sm font-medium text-bond-primary tracking-wide uppercase">
                Legal
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Bond Health, Inc. &middot;{" "}
              <Link
                href="https://bondtrials.com"
                className="text-bond-primary hover:text-bond-primary-dark transition-colors"
              >
                bondtrials.com
              </Link>
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bond-primary/10 text-bond-primary text-sm font-medium">
                Effective Date: July 19, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                Last Reviewed: July 19, 2026
              </span>
            </div>
          </div>

          {/* Intro */}
          <Paragraph>
            Welcome to Bond Health, Inc. (&ldquo;Bond Health,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms of Service (the
            &ldquo;Terms&rdquo;) govern your access to and use of our website at{" "}
            <Link href="https://bondtrials.com" className="text-bond-primary hover:underline">
              bondtrials.com
            </Link>{" "}
            (the &ldquo;Site&rdquo;) and our AI-powered clinical trial patient recruitment
            platform and related services (collectively, the &ldquo;Service&rdquo;). By accessing
            or using the Site or Service, you agree to be bound by these Terms. If you do not
            agree, please do not use the Site or Service.
          </Paragraph>
          <Paragraph>
            If you are using the Service on behalf of a clinical research site, health system,
            contract research organization (CRO), sponsor, or other organization, you represent
            that you have authority to bind that organization, and &ldquo;you&rdquo; refers to
            that organization. If your organization has entered into a separate written agreement
            with Bond Health (such as a master services agreement, order form, or Business
            Associate Agreement), that agreement controls to the extent it conflicts with these
            Terms.
          </Paragraph>

          {/* 1. Use of Service */}
          <SectionHeading id="use-of-service">1. Use of the Service</SectionHeading>
          <Paragraph>
            You agree to use the Site and Service only for lawful purposes and in accordance with
            all applicable local, state, and federal laws and regulations, including laws
            governing the protection of health information. You are responsible for maintaining
            the confidentiality of any account credentials issued to you and for all activity
            occurring under your account. You agree not to:
          </Paragraph>
          <BulletList>
            <BulletItem>
              Access or attempt to access the Service by any means other than the interfaces we
              provide, or circumvent any access or security controls;
            </BulletItem>
            <BulletItem>
              Use the Service to transmit unlawful, harmful, or misleading content, or to infringe
              the rights of any third party;
            </BulletItem>
            <BulletItem>
              Probe, scan, or test the vulnerability of our systems without prior written
              authorization;
            </BulletItem>
            <BulletItem>
              Reverse engineer, decompile, or create derivative works of the Service, except where
              such restriction is prohibited by law;
            </BulletItem>
            <BulletItem>
              Use the Service to develop a competing product or service.
            </BulletItem>
          </BulletList>

          {/* 2. Communications */}
          <SectionHeading id="communications">
            2. Communications &amp; Messaging (SMS, Voice &amp; Email)
          </SectionHeading>
          <Paragraph>
            The Service includes patient outreach features, such as text messages (SMS/RCS) and
            calls from AI-powered voice agents, used to support clinical trial pre-screening,
            scheduling, and related coordination.
          </Paragraph>
          <BulletList>
            <BulletItem label="Opt-In:">
              You may receive messages or calls when you provide your phone number to us, or when
              a participating research site or healthcare organization submits your phone number
              in connection with a clinical trial for which you may be eligible. Message frequency
              varies based on your interaction with the applicable study.
            </BulletItem>
            <BulletItem label="Opt-Out:">
              You can cancel SMS/RCS messages at any time by replying &ldquo;STOP&rdquo; to any
              message. After you send &ldquo;STOP,&rdquo; we will send a final message confirming
              that you have been unsubscribed. During voice calls, you may request to stop
              receiving calls or ask to speak with a human at any time.
            </BulletItem>
            <BulletItem label="Help:">
              If you are experiencing issues with the messaging program, reply with the keyword
              &ldquo;HELP&rdquo; for assistance, or contact us at{" "}
              <a href="mailto:hello@bondtrials.com" className="text-bond-primary hover:underline">
                hello@bondtrials.com
              </a>
              .
            </BulletItem>
            <BulletItem label="Rates:">
              Message and data rates may apply for any messages sent to you from us and to us from
              you. Carriers are not liable for delayed or undelivered messages.
            </BulletItem>
            <BulletItem label="AI Disclosure:">
              When our voice agents use AI assistance, patients are informed of that fact and may
              request a human callback at any time.
            </BulletItem>
          </BulletList>
          <Paragraph>
            Information collected through these communications is handled in accordance with our{" "}
            <Link href="/privacy-policy" className="text-bond-primary hover:underline">
              Privacy Policy
            </Link>
            . Mobile opt-in data and consent are not shared with third parties for marketing
            purposes.
          </Paragraph>

          {/* 3. No Medical Advice */}
          <SectionHeading id="no-medical-advice">3. No Medical Advice</SectionHeading>
          <Paragraph>
            The Service supports clinical trial eligibility screening and recruitment logistics.
            It does not provide medical advice, diagnosis, or treatment, and nothing in the
            Service is a substitute for the professional judgment of a qualified healthcare
            provider. Any indication that you may match a clinical trial is preliminary and does
            not guarantee eligibility or enrollment; final eligibility determinations and all
            decisions about trial participation are made by the applicable study team, the
            principal investigator, and you in consultation with your healthcare providers.
          </Paragraph>

          {/* 4. Health Information */}
          <SectionHeading id="health-information">
            4. Health Information &amp; HIPAA
          </SectionHeading>
          <Paragraph>
            Where Bond Health processes protected health information (PHI) as a Business
            Associate of a covered entity under the Health Insurance Portability and
            Accountability Act (HIPAA), that processing is governed by the applicable Business
            Associate Agreement. Our collection and use of personal information, including
            health-related information, is described in our{" "}
            <Link href="/privacy-policy" className="text-bond-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </Paragraph>

          {/* 5. Intellectual Property */}
          <SectionHeading id="intellectual-property">5. Intellectual Property</SectionHeading>
          <Paragraph>
            The Site and Service, including all software, models, designs, text, graphics, logos,
            and other content (excluding data provided by you or your organization), are owned by
            Bond Health or its licensors and are protected by intellectual property laws. Subject
            to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable
            license to access and use the Site and Service for their intended purpose. No other
            rights are granted.
          </Paragraph>

          {/* 6. Third-Party Services */}
          <SectionHeading id="third-party">6. Third-Party Services and Links</SectionHeading>
          <Paragraph>
            The Site and Service may link to or interoperate with third-party websites and
            services (for example, scheduling tools or electronic health record systems) that we
            do not control. We are not responsible for the content, policies, or practices of any
            third party, and your use of third-party services is governed by their own terms.
          </Paragraph>

          {/* 7. Disclaimers */}
          <SectionHeading id="disclaimers">7. Disclaimers</SectionHeading>
          <Paragraph>
            THE SITE AND SERVICE ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, BOND HEALTH DISCLAIMS
            ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR
            THAT ANY SCREENING OR MATCHING RESULTS WILL BE ACCURATE OR COMPLETE IN EVERY CASE.
          </Paragraph>

          {/* 8. Limitation of Liability */}
          <SectionHeading id="limitation-of-liability">8. Limitation of Liability</SectionHeading>
          <Paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, BOND HEALTH AND ITS OFFICERS, DIRECTORS,
            EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR
            GOODWILL, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SITE OR SERVICE. IN NO
            EVENT SHALL BOND HEALTH&apos;S AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE
            TERMS EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO BOND HEALTH FOR THE SERVICE
            IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS
            (US$100). SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO SOME OF THE ABOVE
            MAY NOT APPLY TO YOU.
          </Paragraph>

          {/* 9. Indemnification */}
          <SectionHeading id="indemnification">9. Indemnification</SectionHeading>
          <Paragraph>
            You agree to indemnify and hold harmless Bond Health and its officers, directors,
            employees, and agents from and against any claims, liabilities, damages, losses, and
            expenses (including reasonable attorneys&apos; fees) arising out of or related to your
            violation of these Terms or your misuse of the Site or Service.
          </Paragraph>

          {/* 10. Termination */}
          <SectionHeading id="termination">10. Termination</SectionHeading>
          <Paragraph>
            We may suspend or terminate your access to the Site or Service at any time, with or
            without notice, if we reasonably believe you have violated these Terms or if necessary
            to protect the Service or its users. Provisions that by their nature should survive
            termination (including intellectual property, disclaimers, limitation of liability,
            and indemnification) will survive.
          </Paragraph>

          {/* 11. Governing Law */}
          <SectionHeading id="governing-law">11. Governing Law</SectionHeading>
          <Paragraph>
            These Terms are governed by the laws of the Commonwealth of Massachusetts, without
            regard to its conflict of law principles. Any dispute arising out of or relating to
            these Terms or the Service shall be resolved exclusively in the state or federal
            courts located in Boston, Massachusetts, and you consent to the personal jurisdiction
            of such courts.
          </Paragraph>

          {/* 12. Changes */}
          <SectionHeading id="changes">12. Changes to These Terms</SectionHeading>
          <Paragraph>
            We reserve the right to modify these Terms at any time. When we make material changes,
            we will post the updated Terms on this page with a revised effective date and, where
            appropriate, provide additional notice. Your continued use of the Site or Service
            after changes become effective constitutes acceptance of the revised Terms.
          </Paragraph>

          {/* 13. Contact */}
          <SectionHeading id="contact">13. Contact Us</SectionHeading>
          <Paragraph>
            For any questions regarding these Terms, please contact us at:
          </Paragraph>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mt-4 mb-8">
            <p className="font-display font-bold text-gray-900 text-lg mb-3">Bond Health, Inc.</p>
            <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <p>50 Brown Circle, Paramus, NJ 07652</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@bondtrials.com"
                  className="text-bond-primary hover:underline"
                >
                  hello@bondtrials.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+13108491687" className="text-bond-primary hover:underline">
                  +1 (310) 849-1687
                </a>
              </p>
              <p>
                Website:{" "}
                <Link
                  href="https://bondtrials.com"
                  className="text-bond-primary hover:underline"
                >
                  bondtrials.com
                </Link>
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 text-center border-t border-gray-100 pt-8">
            &copy; 2026 Bond Health, Inc. All rights reserved.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
