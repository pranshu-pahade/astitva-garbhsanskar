"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export const HeroSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative w-full bg-[#FFF6EE] py-12 sm:py-20 md:py-24 px-5 sm:px-8 overflow-hidden">
      {/* Soft blush radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FCECE9] rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECE9] text-[#8E2B5C] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 border border-[#F3B6B2]">
            {t.hero.eyebrow}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#8E2B5C] leading-[1.18] mb-6">
            A calm, trusted home for the Garbhsanskar journey.
          </h1>

          <p className="text-lg sm:text-xl text-[#36292E] leading-relaxed mb-8 max-w-xl">
            Nurturing you and your baby with Yoga, Mantra, Vaidik Sanskars and expert guidance – from pregnancy to 2 years of your baby's life.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <Button href="/contact" variant="primary" size="lg">
              Enquire Now
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Astitva%20Garbhsanskar.`}
              variant="whatsapp"
              size="lg"
              external
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Social Proof Trust Line */}
          <div className="flex items-center gap-4 p-3 pr-6 rounded-full bg-[#FFF6EE] border border-[#D4A373] shadow-warm-sm">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#8E2B5C] flex-shrink-0">
              <Image
                src="/images/founders.webp"
                alt="Prajakta Dhamane and Minal Purkar"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#D4A373]">
                {"★".repeat(5)}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#8E2B5C]">
                {t.hero.trust}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Organic Arch Image Frame with Sage Leaf Accent */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-t-[200px] rounded-b-[40px] overflow-hidden border-4 border-[#FFF6EE] shadow-warm-lg">
            {/* Background Blob Glow */}
            <div className="absolute inset-0 bg-[#FCECE9] rounded-t-[200px]" />
            <Image
              src="/images/founders.webp"
              alt="Pregnant mother nurturing her baby"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>

          {/* Decorative Sage Leaf Branch Overlay Accent */}
          <div className="absolute -top-6 -right-6 w-24 h-24 text-[#9CAF8A] opacity-80 pointer-events-none hidden sm:block">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 C30 30, 20 60, 10 90 C30 80, 60 70, 90 50 C70 40, 60 20, 50 10 Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
