import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FDF7F1] py-12 sm:py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
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

          <p className="text-lg sm:text-xl text-[#4A3B42] leading-relaxed mb-8 max-w-xl">
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
              <div className="flex items-center gap-1 text-[#B5703A]">
                {"★".repeat(5)}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#5E1A3D]">
                150+ mothers guided · 32 currently with us
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Decorative Olive Leaf & Soft Blob Art */}
        <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center min-h-[420px]">
          <div className="absolute inset-0 bg-[#FBE7EC] rounded-[32px] transform rotate-3 shadow-warm opacity-80" />
          <div className="absolute inset-0 bg-[#F7EDE3] rounded-[32px] transform -rotate-2 border-2 border-[#D5DEC6]" />
          
          <div className="relative z-10 p-8 text-center flex flex-col items-center justify-center">
            {/* SVG Decorative Motif inspired by logo leaves */}
            <svg
              className="w-40 h-40 text-[#9CAF88] mb-6 opacity-90"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="50" cy="50" r="38" stroke="#7D2352" strokeWidth="2" strokeDasharray="4 4" fill="#FDF7F1" />
              <path d="M50 20 C35 35 35 65 50 80 C65 65 65 35 50 20 Z" fill="#9CAF88" opacity="0.25" stroke="#9CAF88" strokeWidth="2" />
              <path d="M30 50 C40 40 60 40 70 50 C60 60 40 60 30 50 Z" fill="#DDB380" opacity="0.3" stroke="#B5703A" strokeWidth="1.5" />
            </svg>
            <p className="font-serif text-2xl font-bold text-[#5E1A3D] mb-1">
              "स्वप्नातील बाळ सत्यात"
            </p>
            <p className="text-sm text-[#9CAF88] font-semibold tracking-wider uppercase">
              Astitva Garbhsanskar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
