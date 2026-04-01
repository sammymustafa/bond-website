import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Bond Health's privacy policy describes how we collect, use, and protect your personal information in connection with our clinical trial recruitment platform.",
  alternates: {
    canonical: "https://bondtrials.com/privacy-policy",
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg sm:text-xl font-display font-semibold text-gray-800 mt-8 mb-3">
      {children}
    </h3>
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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <article className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-bond-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-bond-primary" />
              </div>
              <span className="text-sm font-medium text-bond-primary tracking-wide uppercase">
                Legal
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Bond Health, Inc. &mdash;{" "}
              <Link
                href="https://bondtrials.com"
                className="text-bond-primary hover:text-bond-primary-dark transition-colors"
              >
                bondtrials.com
              </Link>
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bond-primary/10 text-bond-primary text-sm font-medium">
                Effective Date: April 1, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                Last Reviewed: April 1, 2026
              </span>
            </div>
          </div>

          {/* Intro */}
          <Paragraph>
            Bond Health, Inc. (&ldquo;Bond Health,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is committed to protecting the privacy and security of personal
            information entrusted to us. Bond Health operates an AI-powered clinical trial patient
            recruitment platform (the &ldquo;Platform&rdquo;) accessible at{" "}
            <Link
              href="https://bondtrials.com"
              className="text-bond-primary hover:underline"
            >
              bondtrials.com
            </Link>{" "}
            (the &ldquo;Site&rdquo;). This Privacy Policy describes how we collect, use, disclose,
            and safeguard information when you visit our Site, use our Platform, or otherwise
            interact with our services.
          </Paragraph>

          <Paragraph>
            By accessing or using our Site and services, you acknowledge that you have read and
            understood this Privacy Policy. If you do not agree with the practices described herein,
            please do not use our Site or services.
          </Paragraph>

          {/* 1. Information We Collect */}
          <SectionHeading id="information-we-collect">1. Information We Collect</SectionHeading>
          <Paragraph>We collect information in the following categories:</Paragraph>

          <SubHeading>1.1 Personal Information</SubHeading>
          <Paragraph>
            Personal information you provide directly to us may include:
          </Paragraph>
          <BulletList>
            <BulletItem label="Contact Information:">
              Name, email address, phone number, and mailing address.
            </BulletItem>
            <BulletItem label="Account Information:">
              Login credentials and account preferences.
            </BulletItem>
            <BulletItem label="Health-Related Information:">
              When voluntarily provided in connection with clinical trial matching, this may include
              demographic information, medical history, diagnoses, medications, and other
              health-related data relevant to determining clinical trial eligibility. We treat all
              health-related information with heightened security controls.
            </BulletItem>
            <BulletItem label="Professional Information:">
              For clinical research site personnel, sponsors, and partners: job title, institutional
              affiliation, and professional credentials.
            </BulletItem>
            <BulletItem label="Communications:">
              Records of correspondence when you contact us for support, inquiries, or feedback.
            </BulletItem>
          </BulletList>

          <SubHeading>1.2 Usage and Technical Data</SubHeading>
          <Paragraph>
            We automatically collect certain technical information when you interact with our Site
            and Platform:
          </Paragraph>
          <BulletList>
            <BulletItem label="Device and Browser Information:">
              IP address, browser type and version, operating system, device identifiers, and screen
              resolution.
            </BulletItem>
            <BulletItem label="Usage Data:">
              Pages viewed, features used, access times, session duration, referring URLs, and
              clickstream data.
            </BulletItem>
            <BulletItem label="Log Data:">
              Server logs that record requests made to our systems, including timestamps and error
              information.
            </BulletItem>
          </BulletList>

          <SubHeading>1.3 Cookies and Tracking Technologies</SubHeading>
          <Paragraph>
            We use cookies, web beacons, and similar tracking technologies to enhance your experience
            and gather analytical data. These may include:
          </Paragraph>
          <BulletList>
            <BulletItem label="Essential Cookies:">
              Required for Site functionality, such as session management and security.
            </BulletItem>
            <BulletItem label="Analytics Cookies:">
              Help us understand how visitors interact with our Site to improve performance and
              usability.
            </BulletItem>
            <BulletItem label="Preference Cookies:">
              Store your settings and preferences for future visits.
            </BulletItem>
          </BulletList>
          <Paragraph>
            You may manage cookie preferences through your browser settings. Disabling certain
            cookies may limit the functionality of our Site.
          </Paragraph>

          <SubHeading>1.4 Information from Third Parties</SubHeading>
          <Paragraph>
            We may receive information from third-party sources, including clinical research
            organizations, healthcare providers, electronic health record (EHR) systems (such as
            Epic, Cerner, AthenaHealth, Meditech, and eClinicalWorks) with appropriate
            authorizations, and publicly available databases, solely for the purpose of facilitating
            clinical trial matching.
          </Paragraph>

          {/* 2. How We Use Your Information */}
          <SectionHeading id="how-we-use-information">
            2. How We Use Your Information
          </SectionHeading>
          <Paragraph>We use the information we collect for the following purposes:</Paragraph>
          <BulletList>
            <BulletItem label="Clinical Trial Matching:">
              To evaluate eligibility for clinical trials using our AI-powered matching engine and to
              facilitate connections between patients and research sites.
            </BulletItem>
            <BulletItem label="Platform Operations:">
              To provide, maintain, and improve the functionality and performance of our Site and
              Platform.
            </BulletItem>
            <BulletItem label="Communications:">
              To respond to your inquiries, send service-related notices, and provide updates about
              our services or relevant clinical trial opportunities.
            </BulletItem>
            <BulletItem label="Analytics and Improvement:">
              To analyze usage patterns, monitor performance, and develop new features and services.
            </BulletItem>
            <BulletItem label="Security and Compliance:">
              To detect, prevent, and address security incidents, fraud, and technical issues, and to
              comply with applicable legal and regulatory obligations.
            </BulletItem>
            <BulletItem label="Legal Obligations:">
              To comply with applicable laws, regulations, legal processes, or enforceable
              governmental requests.
            </BulletItem>
          </BulletList>
          <Paragraph>
            We do not use personal information for automated decision-making that produces legal or
            similarly significant effects without appropriate safeguards and human oversight.
          </Paragraph>

          {/* 3. Data Sharing and Disclosure */}
          <SectionHeading id="data-sharing">3. Data Sharing and Disclosure</SectionHeading>
          <Paragraph>
            We do not sell, rent, or trade your personal information to third parties. We may share
            your information in the following limited circumstances:
          </Paragraph>
          <BulletList>
            <BulletItem label="Clinical Research Partners:">
              With clinical research sites, sponsors, and contract research organizations (CROs) as
              necessary to facilitate your participation in clinical trials, and only with your
              consent or as authorized.
            </BulletItem>
            <BulletItem label="Service Providers:">
              With third-party vendors who perform services on our behalf (e.g., cloud hosting, data
              analytics, customer support). These providers are contractually bound to protect your
              information and may only use it to perform services for us.
            </BulletItem>
            <BulletItem label="EHR Integration Partners:">
              With electronic health record system providers solely to the extent necessary to
              retrieve authorized health data for clinical trial eligibility matching.
            </BulletItem>
            <BulletItem label="Legal Requirements:">
              When required by law, regulation, subpoena, court order, or other legal process, or to
              protect the rights, property, or safety of Bond Health, our users, or the public.
            </BulletItem>
            <BulletItem label="Business Transfers:">
              In connection with a merger, acquisition, reorganization, or sale of assets, your
              information may be transferred as part of the transaction. We will notify you of any
              such change in ownership or control.
            </BulletItem>
            <BulletItem label="With Your Consent:">
              In any other situation, we will share your personal information only with your explicit
              consent.
            </BulletItem>
          </BulletList>

          {/* 4. Data Security */}
          <SectionHeading id="data-security">4. Data Security</SectionHeading>
          <Paragraph>
            We implement industry-standard technical and organizational measures to safeguard your
            personal information, including:
          </Paragraph>
          <BulletList>
            <BulletItem label="Encryption:">
              Data is encrypted in transit (TLS 1.2+) and at rest using AES-256 or equivalent
              encryption standards.
            </BulletItem>
            <BulletItem label="Access Controls:">
              Role-based access controls restrict data access to authorized personnel on a
              need-to-know basis.
            </BulletItem>
            <BulletItem label="Infrastructure Security:">
              Our systems are hosted on SOC 2-compliant cloud infrastructure with network
              segmentation, intrusion detection, and continuous monitoring.
            </BulletItem>
            <BulletItem label="Security Assessments:">
              We conduct regular vulnerability assessments, penetration testing, and security audits.
            </BulletItem>
            <BulletItem label="Incident Response:">
              We maintain a documented incident response plan to detect, respond to, and recover
              from security incidents.
            </BulletItem>
            <BulletItem label="Employee Training:">
              All personnel with access to personal data receive regular training on data protection
              and security best practices.
            </BulletItem>
          </BulletList>
          <Paragraph>
            While we employ robust safeguards, no method of transmission or storage is completely
            secure. If you have reason to believe your information has been compromised, please
            contact us immediately at{" "}
            <a
              href="mailto:hello@bondtrials.com"
              className="text-bond-primary hover:underline"
            >
              hello@bondtrials.com
            </a>
            .
          </Paragraph>

          {/* 5. Data Retention */}
          <SectionHeading id="data-retention">5. Data Retention</SectionHeading>
          <Paragraph>
            We retain personal information only as long as necessary to fulfill the purposes for
            which it was collected, to comply with legal and regulatory obligations, to resolve
            disputes, and to enforce our agreements. Specific retention periods depend on the nature
            of the data and the purpose for its collection. When personal information is no longer
            required, we securely delete or anonymize it in accordance with our data retention
            policies.
          </Paragraph>

          {/* 6. Your Rights and Choices */}
          <SectionHeading id="your-rights">6. Your Rights and Choices</SectionHeading>
          <Paragraph>
            Depending on your jurisdiction, you may have the following rights regarding your personal
            information:
          </Paragraph>
          <BulletList>
            <BulletItem label="Right to Access:">
              Request a copy of the personal information we hold about you.
            </BulletItem>
            <BulletItem label="Right to Correction:">
              Request correction of inaccurate or incomplete personal information.
            </BulletItem>
            <BulletItem label="Right to Deletion:">
              Request deletion of your personal information, subject to applicable legal retention
              requirements.
            </BulletItem>
            <BulletItem label="Right to Data Portability:">
              Request a machine-readable copy of your personal data.
            </BulletItem>
            <BulletItem label="Right to Restrict Processing:">
              Request that we limit how we process your personal information under certain
              circumstances.
            </BulletItem>
            <BulletItem label="Right to Object:">
              Object to certain types of processing, including processing for direct marketing
              purposes.
            </BulletItem>
            <BulletItem label="Right to Withdraw Consent:">
              Where processing is based on your consent, you may withdraw consent at any time
              without affecting the lawfulness of prior processing.
            </BulletItem>
          </BulletList>
          <Paragraph>
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:hello@bondtrials.com"
              className="text-bond-primary hover:underline"
            >
              hello@bondtrials.com
            </a>
            . We will respond to your request within the timeframe required by applicable law.
          </Paragraph>

          {/* 7. California Privacy Rights */}
          <SectionHeading id="ccpa">
            7. California Privacy Rights (CCPA/CPRA)
          </SectionHeading>
          <Paragraph>
            If you are a California resident, you have additional rights under the California
            Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
          </Paragraph>
          <BulletList>
            <BulletItem label="Right to Know:">
              You may request disclosure of the categories and specific pieces of personal
              information we have collected about you, the sources of collection, our business
              purposes for collecting it, and the categories of third parties with whom we share it.
            </BulletItem>
            <BulletItem label="Right to Delete:">
              You may request that we delete personal information we have collected from you, subject
              to certain exceptions.
            </BulletItem>
            <BulletItem label="Right to Opt-Out:">
              You have the right to opt out of the sale or sharing of your personal information. Bond
              Health does not sell personal information.
            </BulletItem>
            <BulletItem label="Right to Non-Discrimination:">
              We will not discriminate against you for exercising your CCPA rights.
            </BulletItem>
          </BulletList>
          <Paragraph>
            To submit a request, contact us at{" "}
            <a
              href="mailto:hello@bondtrials.com"
              className="text-bond-primary hover:underline"
            >
              hello@bondtrials.com
            </a>{" "}
            or call{" "}
            <a href="tel:+13108491687" className="text-bond-primary hover:underline">
              +1 (310) 849-1687
            </a>
            . We will verify your identity before fulfilling your request.
          </Paragraph>

          {/* 8. GDPR */}
          <SectionHeading id="gdpr">
            8. European Data Subject Rights (GDPR)
          </SectionHeading>
          <Paragraph>
            If you are located in the European Economic Area (EEA), the United Kingdom, or
            Switzerland, you have rights under the General Data Protection Regulation (GDPR) or
            equivalent legislation. In addition to the rights listed in Section 6, you may lodge a
            complaint with your local data protection authority if you believe your rights have been
            violated.
          </Paragraph>
          <Paragraph>
            We process personal data under one or more of the following lawful bases: your consent,
            performance of a contract, compliance with a legal obligation, or our legitimate
            interests (provided these do not override your fundamental rights and freedoms).
          </Paragraph>
          <Paragraph>
            Where we transfer personal data outside the EEA, we rely on appropriate safeguards such
            as Standard Contractual Clauses approved by the European Commission.
          </Paragraph>

          {/* 9. HIPAA */}
          <SectionHeading id="hipaa">9. Health Information and HIPAA</SectionHeading>
          <Paragraph>
            Bond Health may process protected health information (PHI) in its capacity as a Business
            Associate to covered entities under the Health Insurance Portability and Accountability
            Act (HIPAA). In such cases, our handling of PHI is governed by applicable Business
            Associate Agreements (BAAs) and HIPAA regulations, which impose strict requirements on
            the use, disclosure, and safeguarding of PHI.
          </Paragraph>
          <Paragraph>
            To the extent that health-related data is provided to us outside the scope of a BAA, we
            treat such data with the same level of care and apply equivalent security controls.
          </Paragraph>

          {/* 10. Children's Privacy */}
          <SectionHeading id="childrens-privacy">10. Children&apos;s Privacy</SectionHeading>
          <Paragraph>
            Our Site and services are not directed to individuals under the age of 18. We do not
            knowingly collect personal information from children under 18. If you become aware that a
            child has provided us with personal information without parental consent, please contact
            us at{" "}
            <a
              href="mailto:hello@bondtrials.com"
              className="text-bond-primary hover:underline"
            >
              hello@bondtrials.com
            </a>{" "}
            and we will take steps to remove such information from our systems.
          </Paragraph>
          <Paragraph>
            Where Bond Health facilitates clinical trial matching for pediatric trials, all data
            collection and processing is conducted through the child&apos;s parent or legal guardian
            with appropriate consent.
          </Paragraph>

          {/* 11. Third-Party Links */}
          <SectionHeading id="third-party-links">
            11. Third-Party Links and Services
          </SectionHeading>
          <Paragraph>
            Our Site may contain links to third-party websites or services that are not operated by
            us. We are not responsible for the privacy practices of these third parties. We encourage
            you to review the privacy policies of any third-party site or service before providing
            personal information.
          </Paragraph>

          {/* 12. International Data Transfers */}
          <SectionHeading id="international-transfers">
            12. International Data Transfers
          </SectionHeading>
          <Paragraph>
            Your information may be transferred to, stored, and processed in the United States or
            other jurisdictions where our service providers operate. By using our Site and services,
            you acknowledge that your information may be transferred to countries with data
            protection laws that may differ from those in your jurisdiction. We take appropriate
            measures to ensure that your personal information remains protected in accordance with
            this Privacy Policy and applicable law.
          </Paragraph>

          {/* 13. Changes */}
          <SectionHeading id="changes">13. Changes to This Privacy Policy</SectionHeading>
          <Paragraph>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            legal requirements, or operational needs. When we make material changes, we will post the
            updated policy on our Site with a revised effective date and, where appropriate, notify
            you by email or through our Platform. We encourage you to review this Privacy Policy
            periodically.
          </Paragraph>
          <Paragraph>
            This Privacy Policy is reviewed at least annually to ensure continued accuracy and
            compliance.
          </Paragraph>

          {/* 14. Contact Us */}
          <SectionHeading id="contact">14. Contact Us</SectionHeading>
          <Paragraph>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our
            data practices, please contact us at:
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
