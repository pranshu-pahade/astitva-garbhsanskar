import React from "react";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { WhatIsGarbhsanskarSection } from "@/components/sections/home/WhatIsGarbhsanskarSection";
import { AstitvaDifferenceSection } from "@/components/sections/home/AstitvaDifferenceSection";
import { SessionGlimpseSection } from "@/components/sections/home/SessionGlimpseSection";
import { SocialProofBandSection } from "@/components/sections/home/SocialProofBandSection";
import { MeetFoundersSection } from "@/components/sections/home/MeetFoundersSection";
import { TestimonialCarouselSection } from "@/components/sections/home/TestimonialCarouselSection";
import { PricingTeaserSection } from "@/components/sections/home/PricingTeaserSection";
import { ClosingCTASection } from "@/components/sections/home/ClosingCTASection";
import { getApprovedReviewsServer } from "@/lib/reviews-data";

export const revalidate = 60; // Revalidate home page every 60s

export default async function HomePage() {
  const topReviews = await getApprovedReviewsServer(3);

  return (
    <div className="flex flex-col w-full">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: What is Garbhsanskar */}
      <WhatIsGarbhsanskarSection />

      {/* Section 3: The Astitva Difference */}
      <AstitvaDifferenceSection />

      {/* Section 4: A Glimpse of Your Sessions */}
      <SessionGlimpseSection />

      {/* Section 5: Social Proof Band */}
      <SocialProofBandSection />

      {/* Section 6: Meet Prajakta & Minal */}
      <MeetFoundersSection />

      {/* Section 7: Testimonial Carousel */}
      <TestimonialCarouselSection reviews={topReviews} />

      {/* Section 8: Pricing Teaser */}
      <PricingTeaserSection />

      {/* Section 9: Closing CTA */}
      <ClosingCTASection />
    </div>
  );
}
