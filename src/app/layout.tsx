import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://bondtrials.com"),
  title: {
    default: "Bond Health | AI-Powered Clinical Trial Patient Recruitment",
    template: "%s | Bond Health",
  },
  description: "Bond Health enables hyper-accurate clinical trial patient recruitment using AI. LLM-based EHR screening, voice agents, and AI-powered informed consent help research sites enroll patients up to 3x faster with 90%+ matching accuracy.",
  keywords: [
    "clinical trial patient recruitment",
    "AI patient matching",
    "EHR screening",
    "clinical research recruitment",
    "voice agents healthcare",
    "informed consent AI",
    "clinical trial enrollment",
    "patient identification",
    "research site solutions",
    "CRO technology",
    "sponsor trial recruitment",
    "FHIR integration",
    "Epic EHR integration",
    "Cerner EHR integration",
    "healthcare AI",
    "clinical trial automation",
    "patient pre-screening",
    "trial feasibility",
    "enrollment acceleration",
    "Bond Health",
    "bondtrials",
  ],
  authors: [{ name: "Bond Health", url: "https://bondtrials.com" }],
  creator: "Bond Health",
  publisher: "Bond Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://bondtrials.com",
  },
  openGraph: {
    title: "Bond Health | AI-Powered Clinical Trial Patient Recruitment",
    description: "Enroll the right patients faster. Bond uses LLM EHR screening, voice agents, and AI-powered consent to help research sites enroll patients up to 3x faster with 90%+ matching accuracy.",
    url: "https://bondtrials.com",
    siteName: "Bond Health",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/Bond health.png",
        width: 1200,
        height: 630,
        alt: "Bond Health - AI-Powered Clinical Trial Patient Recruitment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bond Health | AI-Powered Clinical Trial Patient Recruitment",
    description: "Enroll the right patients faster. Up to 3x faster enrollment with 90%+ matching accuracy using AI.",
    images: ["/images/logo/Bond health.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Healthcare Technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bondtrials.com/#organization",
      name: "Bond Health",
      url: "https://bondtrials.com",
      logo: {
        "@type": "ImageObject",
        url: "https://bondtrials.com/images/logo/Bond health.png",
        width: 512,
        height: 512,
      },
      description: "Bond Health enables hyper-accurate clinical trial patient recruitment using AI. LLM-based EHR screening, voice agents, and AI-powered informed consent.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "MA",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.linkedin.com/company/bondtrials/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://bondtrials.com/#contact",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://bondtrials.com/#website",
      url: "https://bondtrials.com",
      name: "Bond Health",
      description: "AI-Powered Clinical Trial Patient Recruitment",
      publisher: {
        "@id": "https://bondtrials.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://bondtrials.com/#software",
      name: "Bond Health Platform",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web-based",
      description: "AI-powered platform for clinical trial patient recruitment featuring LLM-based EHR screening, voice agents for pre-screening and scheduling, and AI-powered informed consent.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Performance-based pricing with enrollment success fee",
      },
      featureList: [
        "LLM-based EHR screening",
        "Voice agents for pre-screening and scheduling",
        "AI-powered informed consent",
        "Real-time dashboard and audit trail",
        "EHR integration via FHIR",
        "90%+ matching accuracy",
        "Up to 3x faster enrollment",
      ],
      provider: {
        "@id": "https://bondtrials.com/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://bondtrials.com/#service",
      name: "Clinical Trial Patient Recruitment",
      provider: {
        "@id": "https://bondtrials.com/#organization",
      },
      description: "End-to-end clinical trial patient recruitment service using AI for patient identification, engagement, and consent.",
      serviceType: "Healthcare Technology Service",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bond Health Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Patient Identification",
              description: "LLM-based EHR screening to find eligible patients with ranked matches and evidence traceability",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Patient Engagement",
              description: "Voice agents for automated outreach, pre-screening, and scheduling",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Informed Consent",
              description: "AI-powered informed consent with plain-language support and staff escalation",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://bondtrials.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Bond Health connect to EHR data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bond Health integrates with major EHRs (including Epic and Cerner) using secure APIs and healthcare interoperability standards (FHIR and HL7, as applicable). Bond Health's implementation team handles the integration end-to-end, and full EHR integration typically completes in 4-6 weeks depending on site IT review and interface method.",
          },
        },
        {
          "@type": "Question",
          name: "How does Bond Health validate trial eligibility logic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bond Health configures study-specific inclusion and exclusion criteria with your team, then validates the eligibility logic against real-world patient records before go-live. Bond Health provides traceable match rationale (criteria-to-evidence) and runs pre-launch QA to confirm accuracy and reduce screen failures.",
          },
        },
        {
          "@type": "Question",
          name: "How does Bond Health's voice agent handle PHI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bond Health's voice agents follow HIPAA-aligned practices: encryption in transit, access controls, and audit logging. Patients are informed when AI assistance is used and can request a human callback at any time. Bond Health designs workflows to minimize PHI exposure and support compliant operations.",
          },
        },
        {
          "@type": "Question",
          name: "What is Bond Health's implementation timeline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bond Health typically implements in 4-6 weeks for full EHR integration. Implementation includes EHR connection, eligibility configuration, voice agent setup, analytics dashboards, and staff onboarding. Bond Health provides dedicated support throughout integration and launch.",
          },
        },
        {
          "@type": "Question",
          name: "What is Bond Health's security posture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bond Health uses encryption at rest and in transit (AES-256 where applicable), role-based access controls, comprehensive audit logging, and routine security testing. Bond Health can sign BAAs and is designed to support HIPAA-aligned workflows for PHI.",
          },
        },
        {
          "@type": "Question",
          name: "What outcomes does Bond Health measure for research sites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bond Health reports site-relevant outcomes including patients matched, patients contacted and pre-screened, patients consented, patients randomized (when available), time-to-enrollment, matching accuracy, screen failure rate signals, and coordinator hours saved. Bond Health provides real-time dashboards plus regular reporting for sponsors, CROs, and sites as needed.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo/Bond health.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
