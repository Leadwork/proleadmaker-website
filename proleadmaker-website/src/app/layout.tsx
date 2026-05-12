import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import CursorEffect from "@/components/shared/CursorEffect";
import BackgroundEffects from "@/components/shared/BackgroundEffects";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Pro Lead Maker — Signal-Based B2B Lead Intelligence",
    template: "%s | Pro Lead Maker",
  },
  description: siteConfig.description,
  keywords: [
    "B2B lead generation",
    "signal-based prospecting",
    "prospect contact list",
    "email verification",
    "LinkedIn prospecting",
    "data enrichment",
    "cold email leads",
    "pre-qualified leads",
    "outreach-ready data",
    "lead intelligence",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Pro Lead Maker — Signal-Based B2B Lead Intelligence",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pro Lead Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@proleadmaker",
    title: "Pro Lead Maker — Signal-Based B2B Lead Intelligence",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Logo.png`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      url: siteConfig.social.founderLinkedin,
    },
    foundingDate: "2019",
    areaServed: "Worldwide",
    priceRange: "$$",
    serviceType: [
      "Signal-Based Lead Generation",
      "B2B Lead Intelligence",
      "Prospect List Building",
      "Data Enrichment",
      "Email Verification",
      "LinkedIn Prospecting",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "957",
      bestRating: "5",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.upworkAgency,
      siteConfig.social.upworkPersonal,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.ga}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <BackgroundEffects />
        <CursorEffect />
        <Navbar />
        <main className="relative z-10 pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
