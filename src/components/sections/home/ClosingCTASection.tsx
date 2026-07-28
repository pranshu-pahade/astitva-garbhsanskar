import React from "react";
import { Button } from "@/components/ui/Button";
import { LeafDivider } from "@/components/ui/LeafDivider";
import { siteConfig } from "@/lib/site-config";

export const ClosingCTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#4A1230] text-[#FDF7F1] py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden text-center">
      {/* Soft blush radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9B2C6F] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <LeafDivider color="#F2C0CD" className="mb-6 opacity-75" />

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FDF7F1] leading-tight mb-6">
          Your baby is already listening.
        </h2>

        <p className="text-lg sm:text-xl text-[#F2C0CD] leading-relaxed mb-10 max-w-2xl mx-auto">
          Begin your daily journey of gentle yoga, peaceful mantras, and Vaidik sanskars. Sit in on a free demo session to experience the warmth of Astitva.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto bg-[#9B2C6F] border-[#9B2C6F]">
            Book a Free Demo
          </Button>
          <Button
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Astitva%20Garbhsanskar.`}
            variant="whatsapp"
            size="lg"
            external
            className="w-full sm:w-auto"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
