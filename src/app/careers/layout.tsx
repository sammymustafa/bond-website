import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Bond Health and help patients access life-changing clinical trials. We're hiring ML/AI Engineers, Full-Stack Engineers, Data Engineers, and Voice AI Engineers in Boston, MA.",
  keywords: [
    "Bond Health careers",
    "healthcare AI jobs",
    "clinical trial technology jobs",
    "ML engineer healthcare",
    "AI engineer Boston",
    "healthcare startup jobs",
    "NLP engineer jobs",
    "voice AI engineer",
    "data engineer healthcare",
    "full stack engineer Boston",
  ],
  openGraph: {
    title: "Careers at Bond Health",
    description: "Join Bond Health and help patients access life-changing clinical trials. We're building AI that helps research sites enroll the right patients faster.",
    url: "https://bondtrials.com/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Bond Health",
    description: "Join our team building AI for clinical trial patient recruitment.",
  },
  alternates: {
    canonical: "https://bondtrials.com/careers",
  },
};

// JSON-LD for job postings
const jobPostingsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "JobPosting",
      title: "ML/AI Engineer",
      description: "Build and improve our LLM-based EHR screening models. Work on clinical NLP, knowledge graph embeddings, and inference optimization.",
      datePosted: "2026-01-02",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Bond Health",
        sameAs: "https://bondtrials.com",
        logo: "https://bondtrials.com/images/logo/Bond health.png",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Boston",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      skills: "Machine Learning, NLP, LLMs, Python, PyTorch, TensorFlow, Healthcare AI",
      industry: "Healthcare Technology",
    },
    {
      "@type": "JobPosting",
      title: "Full-Stack Engineer",
      description: "Build the platform that research sites use daily. Work on our React/Next.js frontend, Node.js backend, and real-time dashboards.",
      datePosted: "2026-01-02",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Bond Health",
        sameAs: "https://bondtrials.com",
        logo: "https://bondtrials.com/images/logo/Bond health.png",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Boston",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      skills: "React, TypeScript, Node.js, PostgreSQL, AWS, GCP",
      industry: "Healthcare Technology",
    },
    {
      "@type": "JobPosting",
      title: "Data Engineer",
      description: "Build and maintain our clinical data pipelines. Work with EHR integrations, FHIR/HL7 standards, and our knowledge graph infrastructure.",
      datePosted: "2026-01-02",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Bond Health",
        sameAs: "https://bondtrials.com",
        logo: "https://bondtrials.com/images/logo/Bond health.png",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Boston",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      skills: "Data Pipelines, FHIR, HL7, SQL, Python, Graph Databases",
      industry: "Healthcare Technology",
    },
    {
      "@type": "JobPosting",
      title: "Voice AI Engineer",
      description: "Build and optimize our voice agent system for patient outreach and pre-screening. Work on speech recognition, dialog management, and telephony.",
      datePosted: "2026-01-02",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Bond Health",
        sameAs: "https://bondtrials.com",
        logo: "https://bondtrials.com/images/logo/Bond health.png",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Boston",
          addressRegion: "MA",
          addressCountry: "US",
        },
      },
      skills: "Voice AI, Conversational AI, Speech Recognition, Python, Telephony APIs",
      industry: "Healthcare Technology",
    },
  ],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsJsonLd) }}
      />
      {children}
    </>
  );
}

