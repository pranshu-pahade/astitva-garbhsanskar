import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astitvagarbhsanskar.com"),
  title: {
    default: "Astitva Garbhsanskar — Live Online Prenatal Wellness & Garbhsanskar",
    template: "%s | Astitva Garbhsanskar",
  },
  description:
    "Live online Garbhsanskar classes guided by Prajakta Dhamane & Minal Purkar in Pune. Yoga, pranayam, mantra, Geeta & Ramraksha paath, and Vaidik sanskars from 3rd month of pregnancy.",
  keywords: [
    "garbhsanskar online",
    "live garbhsanskar classes",
    "prenatal yoga India",
    "garbhsanskar Pune",
    "Prajakta Dhamane",
    "Minal Purkar",
    "pregnancy yoga online",
    "vedic garbhsanskar",
  ],
  authors: [{ name: "Astitva Garbhsanskar" }],
  openGraph: {
    title: "Astitva Garbhsanskar — Live Online Prenatal Wellness",
    description:
      "Turning the baby of your dreams into reality. Live 45-minute daily Zoom sessions for pregnant mothers.",
    url: "https://astitvagarbhsanskar.com",
    siteName: "Astitva Garbhsanskar",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Astitva Garbhsanskar",
    description: "Live online Garbhsanskar and prenatal wellness sessions in Pune, India.",
    url: "https://astitvagarbhsanskar.com",
    telephone: siteConfig.phoneDisplay,
    founder: [
      {
        "@type": "Person",
        name: "Prajakta Dhamane",
        jobTitle: "M.A. Yogashastra, Medical Yoga Therapist",
      },
      {
        "@type": "Person",
        name: "Minal Purkar",
        jobTitle: "MSc, Certified Garbhsanskar Educator",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.instagramUrl].filter(Boolean),
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FDF7F1] text-[#4A3B42] selection:bg-[#F2C0CD] selection:text-[#5E1A3D]">
        <Header />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />

        {/* GA4 Script */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
};
