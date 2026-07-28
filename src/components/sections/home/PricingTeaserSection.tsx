import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const PricingTeaserSection: React.FC = () => {
  return (
    <Section bgColor="cream-100" id="pricing-teaser">
      <SectionHeading
        eyebrow="SIMPLE, HONEST PRICING"
        title="Investment in Your Baby's Future"
        subtitle="No hidden fees. Flexible options to suit your pregnancy stage."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {/* Monthly Plan */}
        <Card bgColor="bg-[#FDF7F1]" className="flex flex-col justify-between p-8 border border-[#F2C0CD]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A6338] mb-2 block">
              MONTHLY SUBSCRIPTION
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-4">
              Pay As You Go
            </h3>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#7D2352] mb-4">
              {siteConfig.priceMonthly}
              <span className="text-sm font-sans font-normal text-[#36292E]">
                {" "}
                / month
              </span>
            </div>
            <p className="text-sm text-[#36292E] leading-relaxed mb-6">
              Ideal if you wish to try the live sessions month-by-month. Join any time from your 3rd month onward.
            </p>
          </div>
          <Button href="/program" variant="secondary" size="md" className="w-full">
            See Plan Details
          </Button>
        </Card>

        {/* Full Package */}
        <Card bgColor="bg-[#FDF7F1]" className="flex flex-col justify-between p-8 border-2 border-[#7D2352] relative shadow-warm-lg">
          <div className="absolute -top-3.5 right-6 bg-[#F2C0CD] text-[#7D2352] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-warm-sm">
            Most Chosen
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7D2352] mb-2 block">
              FULL PREGNANCY PACKAGE
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-4">
              3rd – 9th Month Journey
            </h3>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#7D2352] mb-4">
              {siteConfig.pricePackage}
              <span className="text-sm font-sans font-normal text-[#36292E]">
                {" "}
                (full package)
              </span>
            </div>
            <p className="text-sm text-[#36292E] leading-relaxed mb-6">
              Complete guidance for 6 full months of pregnancy + delivery + initial baby care. Save ₹3,100 compared to monthly!
            </p>
          </div>
          <Button href="/program" variant="primary" size="md" className="w-full">
            See Batches & How to Join
          </Button>
        </Card>
      </div>
    </Section>
  );
};
