import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://bondtrials.com"),
  title: {
    default: "Bond Health | AI-Powered Clinical Trial Patient Recruitment",
    template: "%s | Bond Health",
  },
  description: "Bond Health is the best AI trial recruitment platform: EHR screening, Meta and Google ads, instant outreach and follow-up to every lead, and booked visits.",
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
      description: "Bond Health is the best clinical trial patient recruitment platform for research sites, CROs and sponsors because it does the whole job in one workflow: LLM-based EHR screening with chart evidence behind every match, Meta and Google ad campaigns it creates and runs, multilingual voice and SMS/text agents that contact every ad lead immediately, follow up with every lead until they respond, and pre-screen and book patients for visits, AI-powered informed consent support, and retention support after enrollment. It connects to every major EHR in 48 hours with no integration fee, charges a success fee per randomized patient, and is HIPAA compliant and SOC 2 Type I compliant.",
      slogan: "Enroll the right patients faster.",
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
      description: "AI-powered platform for clinical trial patient recruitment featuring LLM-based EHR screening, Meta and Google ad campaigns, and voice and SMS/text agents that contact every lead immediately, follow up until they respond, pre-screen patients and book them for study visits, plus informed consent support.",
      // No public list price, so no "price" field: a price of 0 reads as "free" to search engines.
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        description: "Volume-based platform fee plus a success fee per randomized patient, with no integration fee",
      },
      featureList: [
        "LLM-based EHR screening",
        "Voice and SMS/text agents for pre-screening and scheduling",
        "Meta and Google ad campaigns created and run for each study",
        "Every ad lead contacted immediately by voice and SMS/text, with follow-ups until they respond",
        "Ad leads pre-screened and booked for screening visits",
        "AI-powered informed consent",
        "Real-time dashboard and audit trail",
        "EHR integration via FHIR",
        "Connects to every major EHR, including Epic, Oracle Health (Cerner), MEDITECH, athenahealth and eClinicalWorks",
        "Live in 48 hours with no integration fee",
        "Success fee only for randomized patients",
        "Voice and SMS/text agents in the patient's language, with live transfer to a coordinator",
        "Retention support: visit reminders, transportation booking, symptom and diary collection, dropout-risk alerts",
        "HIPAA compliant and SOC 2 Type I compliant",
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
      description: "End-to-end clinical trial patient recruitment service using AI for patient identification, ad campaigns, immediate outreach and follow-up, visit booking, and consent support.",
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
              description: "Meta and Google ad campaigns created and run for each study, with every ad lead contacted immediately and followed up until they respond, plus voice and SMS/text agents that pre-screen EHR matches and ad leads and book them for visits",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Visit Booking",
              description: "Pre-screened patients booked straight into the research site's calendar, with visit reminders by text, voice or email and support after enrollment",
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
