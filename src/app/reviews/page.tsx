import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { WhatsAppLightbox } from "@/components/reviews/WhatsAppLightbox";
import { LocalVideoReview } from "@/components/reviews/LocalVideoReview";
import { ReviewForm } from "@/components/forms/ReviewForm";
import { getApprovedReviewsServer } from "@/lib/reviews-data";

export const revalidate = 60; // Revalidate every 60s

export const metadata: Metadata = {
  title: "Mother Reviews & Testimonials — Astitva Garbhsanskar",
  description:
    "Read authentic reviews, watch video testimonials, and view WhatsApp messages from mothers who guided their pregnancy with Prajakta & Minal.",
};

export default async function ReviewsPage() {
  const approvedReviews = await getApprovedReviewsServer();

  // Calculate statistics
  const totalCount = approvedReviews.length;
  const avgRating =
    totalCount > 0
      ? (
          approvedReviews.reduce((acc, r) => acc + (r.rating || 5), 0) / totalCount
        ).toFixed(1)
      : "5.0";

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <Section bgColor="blush-100" className="pt-16 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3A5E2E] mb-2 block">
            AUTHENTIC MOTHER TESTIMONIALS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#8E2B5C] mb-4">
            Hear From Our Mothers
          </h1>

          {/* Rating Summary Badge */}
          <div className="inline-flex items-center gap-3 bg-[#FFF6EE] px-6 py-3 rounded-full shadow-warm border border-[#F3B6B2] mb-4">
            <span className="text-[#D4A373] text-2xl font-bold">★ {avgRating}</span>
            <span className="text-sm font-semibold text-[#36292E]">
              {totalCount > 0
                ? `Based on ${totalCount} verified mother review${totalCount > 1 ? "s" : ""}`
                : "5.0 Rating from 500+ mothers guided"}
            </span>
          </div>
        </div>
      </Section>

      {/* Video Review Section */}
      <Section bgColor="cream-50" id="video-review" className="pt-16 pb-12">
        <SectionHeading
          eyebrow="MOTHER VIDEO TESTIMONIAL"
          title="Watch a Real Mother's Experience"
          subtitle="Hear directly from an expecting mother about her personal journey with Astitva Garbhsanskar."
        />

        <LocalVideoReview
          videoSrc="/videos/mother_review.mp4"
          motherName="Mother's Personal Experience"
        />
      </Section>

      {/* WhatsApp Screenshots Section */}
      <Section bgColor="cream-100" id="whatsapp-screenshots" className="py-16">
        <SectionHeading
          eyebrow="UNFILTERED HAPPINESS"
          title="Straight from our mothers' phones"
          subtitle="Real WhatsApp feedback and messages shared by expecting mothers in our daily batches."
        />

        <WhatsAppLightbox />
      </Section>

      {/* Written Reviews Grid */}
      <Section bgColor="cream-50" id="written-reviews">
        <SectionHeading
          eyebrow="DETAILED EXPERIENCES"
          title="Written Reviews"
        />

        {approvedReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedReviews.map((review) => (
              <Card
                key={review.id}
                bgColor="bg-[#FFF6EE]"
                className="flex flex-col justify-between p-6 border border-[#F3B6B2]"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex text-[#D4A373] text-lg mb-3">
                    {"★".repeat(review.rating || 5)}
                  </div>

                  {/* Message in Fraunces italic */}
                  <p className="font-serif italic text-base text-[#8E2B5C] leading-relaxed mb-6">
                    "{review.message}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-[#F3B6B2] pt-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm text-[#8E2B5C] block">
                      {review.name}
                    </span>
                    {review.pregnancy_month && (
                      <span className="text-xs font-semibold text-[#3A5E2E]">
                        Month {review.pregnancy_month} of pregnancy
                      </span>
                    )}
                  </div>
                  {review.created_at && (
                    <span className="text-[11px] text-[#36292E] opacity-60">
                      {new Date(review.created_at).toLocaleDateString("en-IN", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* Warm Empty State */
          <div className="max-w-xl mx-auto text-center p-8 bg-[#FFF6EE] rounded-[16px] border border-[#F3B6B2] shadow-warm">
            <div className="text-4xl mb-3">🌸</div>
            <h3 className="font-serif text-xl font-bold text-[#8E2B5C] mb-2">
              Be the first to leave a written review!
            </h3>
            <p className="text-sm text-[#36292E] opacity-90 leading-relaxed">
              We are adding recent written feedback from our batch mothers. You can share your personal experience using the form below.
            </p>
          </div>
        )}
      </Section>

      {/* Submission Form Section */}
      <Section bgColor="cream-100" id="share-experience">
        <SectionHeading
          eyebrow="YOUR VOICE MATTERS"
          title="Share Your Experience"
          subtitle="Your honest review helps other expecting mothers make a confident choice for their baby."
        />

        <ReviewForm />
      </Section>
    </div>
  );
}
