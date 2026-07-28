import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FDF7F1] py-12 sm:py-20 md:py-24 px-5 sm:px-8 overflow-hidden">
      {/* Soft blush-100 radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FBE7EC] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FBE7EC] text-[#7D2352] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 border border-[#F2C0CD]">
            LIVE ONLINE GARBHSANSKAR
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#5E1A3D] leading-[1.15] mb-6">
            A calm, connected pregnancy — and a deeper bond with your baby.
          </h1>

          <p className="text-lg sm:text-xl text-[#36292E] leading-relaxed mb-8 max-w-xl">
            Live daily Zoom sessions with Prajakta & Minal. Yoga, pranayam, mantra, and Vaidik sanskars, guided personally — from your 3rd month through delivery and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <Button href="/contact" variant="primary" size="lg">
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

          {/* Social Proof Trust Line with circular crop of founders */}
          <div className="flex items-center gap-4 p-3 pr-6 rounded-full bg-[#F7EDE3] border border-[#F2C0CD] shadow-warm-sm">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#7D2352] flex-shrink-0">
              <Image
                src="/images/founders.jpg"
                alt="Prajakta Dhamane and Minal Purkar"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#8C4E1D]">
                {"★".repeat(5)}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#5E1A3D]">
                150+ mothers guided · 32 currently with us
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Elegant Organic Logo Display */}
        <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-[380px] aspect-square flex flex-col items-center justify-center p-8 text-center">
            {/* Soft Organic Circle Halo */}
            <div className="absolute inset-0 bg-[#FBE7EC] rounded-full blur-xl opacity-70" />
            <div className="absolute inset-4 bg-[#F7EDE3] rounded-full shadow-warm border border-[#F2C0CD]" />
            
            <div className="relative z-10 flex flex-col items-center justify-center p-4">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Astitva Garbhsanskar Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="font-serif text-xl font-bold text-[#5E1A3D] mb-1">
                "{siteConfig.tagline}"
              </p>
              <p className="text-xs text-[#4A6338] font-bold tracking-widest uppercase">
                {siteConfig.taglineEn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
