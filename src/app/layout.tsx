import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/lib/site-config";
import { LanguageProvider } from "@/context/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astitvagarbhsanskar.com"),
  title: {
    default: "Astitva Garbhsanskar — Live Online Prenatal Wellness & Garbhsanskar",
    template: "%s | Astitva Garbhsanskar",
  },
  description:
    "Live online Garbhsanskar classes guided by Prajakta Dhamane & Minal Purkar. Yoga, pranayam, mantra, Geeta & Ramraksha paath, and Vaidik sanskars from 3rd month of pregnancy.",
  keywords: [
    "garbhsanskar online",
    "live garbhsanskar classes",
    "prenatal yoga India",
    "Prajakta Dhamane",
    "Minal Purkar",
    "pregnancy yoga online",
    "vedic garbhsanskar",
  ],
  authors: [{ name: "Astitva Garbhsanskar" }],
  alternates: {
    canonical: "https://astitvagarbhsanskar.com",
  },
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
    description: "Live online Garbhsanskar and prenatal wellness sessions.",
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
        jobTitle: "Diploma in Garbhsanskar, Certified Garbhsanskar Educator",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.instagramUrl].filter(Boolean),
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFF6EE] text-[#36292E] selection:bg-[#8E2B5C] selection:text-[#FFF6EE]">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-16 sm:pb-0">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>

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
}
