import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LeafDivider } from "@/components/ui/LeafDivider";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { FAQAccordion } from "@/components/contact/FAQAccordion";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us & FAQ — Book a Free Demo",
  description:
    "Have questions about Garbhsanskar? Contact Prajakta Dhamane & Minal Purkar on WhatsApp or book a free live demo session in Pune.",
};

const faqItems = [
  {
    q: "When should I join?",
    a: "Ideally in your 3rd month of pregnancy, but you can join at any month (even in your 7th or 8th month). We adapt every posture and exercise to your current trimester.",
  },
  {
    q: "Are sessions live or recorded?",
    a: "Our sessions are 100% live on Zoom. You interact directly with Prajakta & Minal in real-time, get your posture checked, and ask questions immediately.",
  },
  {
    q: "What if I miss a session?",
    a: "We have 3 batch options daily (Morning, Afternoon, Evening). If you miss your regular slot, you can attend any of the other two slots or reach out to us personally on WhatsApp.",
  },
  {
    q: "Which language are sessions conducted in?",
    a: "Sessions are conducted simply and warmly in Marathi and Hindi, ensuring every mother feels comfortable and understood.",
  },
  {
    q: "How long is each session?",
    a: "Each session is 45 minutes long, running 6 days a week (Monday through Saturday). Sundays are kept off for rest and family time.",
  },
  {
    q: "Do you support me after delivery?",
    a: "Yes! Our package includes guidance for postpartum mother recovery, lactation preparation, baby massage tips, and mother care up to ~2 years of baby age.",
  },
  {
    q: "How do I pay?",
    a: "No online payment is required upfront. Send us an enquiry on WhatsApp, sit in on a free demo, and we will guide you on payment options (monthly ₹1,300 or full package ₹6,000).",
  },
  {
    q: "Can I try before joining?",
    a: "Yes, absolutely! You are warmly invited to book a free live demo session with zero commitment.",
  },
];

export default function ContactPage() {
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* 1. Hero */}
      <Section bgColor="blush-100" className="pt-16 pb-20">
        <SectionHeading
          eyebrow="WE'D LOVE TO HEAR FROM YOU"
          title="Have a question? Just ask."
          subtitle="There are no wrong questions. Message us on WhatsApp and Prajakta or Minal will reply personally."
        />
      </Section>

      {/* 2. Form + Contact Details (2 Columns Desktop, Stacked Mobile) */}
      <Section bgColor="cream-50" id="contact-info">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-4">
              Send Us an Enquiry
            </h3>
            <p className="text-sm text-[#4A3B42] mb-6">
              Fill out this form to request a free live demo or inquire about batch availability.
            </p>
            <EnquiryForm />
          </div>

          {/* Right Column: Direct Contact Info */}
          <div className="lg:col-span-5">
            <Card bgColor="bg-[#F7EDE3]" className="p-8 border border-[#F2C0CD] space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#5E1A3D]">
                Direct Contact
              </h3>

              {/* Tap to Call */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#5E1A3D] hover:border-[#9CAF88] transition-colors shadow-warm-sm group"
              >
                <div className="w-12 h-12 rounded-full bg-[#FBE7EC] text-[#7D2352] flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                  📞
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9CAF88] block">
                    Call Us Directly
                  </span>
                  <span className="font-serif text-xl font-bold text-[#5E1A3D]">
                    {siteConfig.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* WhatsApp Chat */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Astitva%20Garbhsanskar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#4CA771] text-white hover:bg-[#3D8B5D] transition-colors shadow-warm-sm group"
              >
                <div className="w-12 h-12 rounded-full bg-white text-[#4CA771] flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                  💬
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-90 block">
                    Instant WhatsApp Chat
                  </span>
                  <span className="font-bold text-lg">
                    Message Prajakta & Minal
                  </span>
                </div>
              </a>

              {/* Instagram */}
              {siteConfig.instagramUrl && (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#5E1A3D] hover:border-[#9CAF88] transition-colors shadow-warm-sm group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FBE7EC] text-[#9B2C6F] flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                    📸
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9CAF88] block">
                      Instagram Page
                    </span>
                    <span className="font-bold text-base text-[#5E1A3D]">
                      @astitva_garbhasanskar
                    </span>
                  </div>
                </a>
              )}

              <div className="pt-4 border-t border-[#F2C0CD] text-center">
                <span className="text-xs font-bold text-[#9CAF88] uppercase tracking-wider block">
                  ⚡ Response Time
                </span>
                <p className="text-sm text-[#4A3B42] font-semibold mt-1">
                  We usually reply within a few hours!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* 3. FAQ Accordion */}
      <Section bgColor="cream-100" id="faq">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before taking your first class."
        />

        <FAQAccordion items={faqItems} />
      </Section>

      {/* 4. Closing CTA */}
      <section className="w-full bg-[#4A1230] text-[#FDF7F1] py-16 px-5 sm:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <LeafDivider color="#F2C0CD" className="mb-6 opacity-75" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FDF7F1] mb-4">
            Still unsure? Come sit in on a free demo.
          </h2>
          <p className="text-base sm:text-lg text-[#F2C0CD] mb-8">
            Experience our 45-minute live class without any commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact-info" variant="primary" size="lg">
              Book a Free Demo
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Astitva%20Garbhsanskar.`}
              variant="whatsapp"
              size="lg"
              external
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
