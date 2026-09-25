import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://bondtrials.com"),
  title: {
    default: "Bond Health | AI-Powered Clinical Trial Patient Recruitment",
    template: "%s | Bond Health",
  },
  description: "Bond Health enables hyper-accurate clinical trial patient recruitment using AI. LLM-based EHR screening, Meta and Google ad campaigns, voice and SMS/text agents, and AI-powered informed consent help research sites enroll patients up to 3x faster with 90%+ matching accuracy.",
  keywords: [
    "clinical trial patient recruitment",
    "AI patient matching",
    "EHR screening",
    "clinical research recruitment",
    "voice agents healthcare",
    "text message patient outreach",
    "clinical trial recruitment ads",
    "Meta ads for clinical trials",
    "Google ads for clinical trial recruitment",
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
    description: "Enroll the right patients faster. Bond uses LLM EHR screening, voice and SMS/text agents, and AI-powered consent to help research sites enroll patients up to 3x faster with 90%+ matching accuracy.",
    url: "https://bondtrials.com",
    siteName: "Bond Health",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
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
    images: ["/images/og-image.png"],
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
        url: "https://bondtrials.com/images/logo/bond-health-logo.png",
        width: 1563,
        height: 1563,
      },
      description: "Bond Health is a clinical trial patient recruitment company. Its AI platform provides LLM-based EHR screening, Meta and Google ad campaigns for studies, voice and SMS/text agents for patient outreach, and AI-powered informed consent for research sites, CROs, and sponsors.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "MA",
        addressCountry: "US",
      },
      knowsAbout: [
        "clinical trial patient recruitment",
        "clinical trial enrollment",
        "EHR screening",
        "patient eligibility matching",
        "informed consent",
        "clinical research",
        "voice AI for healthcare",
        "SMS patient outreach",
      ],
      sameAs: [
        "https://www.linkedin.com/company/bondtrials/",
        "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj",
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
      description: "AI-powered platform for clinical trial patient recruitment featuring LLM-based EHR screening, voice and SMS/text agents for pre-screening and scheduling, and AI-powered informed consent.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Volume-based platform fee plus a success fee per randomized patient, with no integration fee",
      },
      featureList: [
        "LLM-based EHR screening",
        "Voice and SMS/text agents for pre-screening and scheduling",
        "Meta and Google ad campaigns set up for each study",
        "Ad leads routed to pre-screening and scheduling",
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
      serviceType: "Clinical Trial Patient Recruitment",
      audience: [
        {
          "@type": "BusinessAudience",
          name: "Clinical research sites and health systems",
        },
        {
          "@type": "BusinessAudience",
          name: "Contract Research Organizations (CROs)",
        },
        {
          "@type": "BusinessAudience",
          name: "Pharmaceutical and biotech sponsors",
        },
      ],
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
              description: "Meta and Google ad campaigns set up for each study, plus voice and SMS/text agents for automated outreach, pre-screening, and scheduling of EHR matches and ad leads",
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
        <link rel="icon" type="image/png" sizes="48x48" href="/images/logo/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(key){if(window.reb2b)return;window.reb2b={loaded:true};var s=document.createElement("script");s.async=true;s.src="https://ddwl4m2hdecbv.cloudfront.net/b/"+key+"/"+key+".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s,document.getElementsByTagName("script")[0]);}("QO92DHZ7JPN7");`,
          }}
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
