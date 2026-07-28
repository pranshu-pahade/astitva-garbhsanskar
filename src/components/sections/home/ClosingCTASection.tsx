import React from "react";
import { Button } from "@/components/ui/Button";
import { LeafDivider } from "@/components/ui/LeafDivider";
import { siteConfig } from "@/lib/site-config";

export const ClosingCTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#8E2B5C] text-[#FFF6EE] py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden text-center">
      {/* Soft blush radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#A0336B] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <LeafDivider color="#F3B6B2" className="mb-6 opacity-80" />

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFF6EE] leading-tight mb-4 tracking-normal">
          Begin your journey to a positive, peaceful pregnancy.
        </h2>

        <p className="text-lg sm:text-xl text-[#FCECE9] leading-relaxed mb-10 max-w-xl mx-auto font-normal">
          Join Astitva today and experience the warmth of live, personal Garbhsanskar guidance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto bg-[#FFF6EE] text-[#8E2B5C] hover:bg-[#FCECE9] border-[#FFF6EE]">
            Enquire Now
          </Button>
          <Button
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Astitva%20Garbhsanskar.`}
            variant="whatsapp"
            size="lg"
            external
            className="w-full sm:w-auto bg-transparent text-[#FFF6EE] border-[#D4A373] hover:bg-[#A0336B]"
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
};
