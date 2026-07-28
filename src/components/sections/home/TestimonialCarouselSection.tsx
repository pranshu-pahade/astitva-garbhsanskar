"use client";

import React, { useState, useEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export interface ReviewItem {
  id?: string;
  name: string;
  pregnancy_month?: number | null;
  rating: number;
  message: string;
  created_at?: string;
}

const fallbackReviews: ReviewItem[] = [
  {
    id: "1",
    name: "Pooja Kulkarni",
    pregnancy_month: 7,
    rating: 5,
    message:
      "Joining Astitva in my 4th month was the best decision of my pregnancy. Prajakta Ma'am and Minal Ma'am explain everything so lovingly. The morning yoga and Geeta paath make my entire day calm and positive.",
  },
  {
    id: "2",
    name: "Sneha Joshi",
    pregnancy_month: 6,
    rating: 5,
    message:
      "I used to feel very anxious about labor. The daily pranayam and Garbha prarthana gave me immense confidence. My baby literally responds when we chant mantras together during session!",
  },
  {
    id: "3",
    name: "Anagha Deshpande",
    pregnancy_month: 9,
    rating: 5,
    message:
      "The personal 1-on-1 guidance is priceless. They remember every mother's health condition and give personalized modifications. Highly recommended to every expecting mother in Maharashtra!",
  },
];

interface TestimonialCarouselSectionProps {
  reviews?: ReviewItem[];
}

export const TestimonialCarouselSection: React.FC<TestimonialCarouselSectionProps> = ({
  reviews = [],
}) => {
  const activeReviews = reviews.length > 0 ? reviews : fallbackReviews;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused || activeReviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, activeReviews.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swipe Left -> Next
      setCurrentIndex((prev) => (prev + 1) % activeReviews.length);
    } else if (diff < -50) {
      // Swipe Right -> Prev
      setCurrentIndex((prev) => (prev - 1 + activeReviews.length) % activeReviews.length);
    }
    touchStartX.current = null;
  };

  const currentItem = activeReviews[currentIndex];

  return (
    <Section bgColor="blush-100" id="testimonials">
      <SectionHeading
        eyebrow="WORDS FROM OUR MOTHERS"
        title="Real Stories & Experiences"
        subtitle="Hear how Astitva Garbhsanskar brings peace and connection to expecting mothers."
      />

      <div
        className="max-w-3xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Card bgColor="bg-[#FDF7F1]" className="p-8 sm:p-12 text-center shadow-warm-lg relative border border-[#F2C0CD]">
          {/* Star Rating */}
          <div className="flex justify-center gap-1.5 text-[#8C4E1D] text-2xl mb-6">
            {Array.from({ length: currentItem.rating || 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Quote text */}
          <blockquote className="font-serif italic text-lg sm:text-2xl text-[#5E1A3D] leading-relaxed mb-8">
            "{currentItem.message}"
          </blockquote>

          {/* Author Details */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg text-[#5E1A3D]">
              {currentItem.name}
            </span>
            {currentItem.pregnancy_month && (
              <span className="text-sm font-bold text-[#4A6338]">
                Month {currentItem.pregnancy_month} of pregnancy
              </span>
            )}
          </div>
        </Card>

        {/* Carousel Dot Navigation */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {activeReviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-[#7D2352]"
                  : "w-3 bg-[#F2C0CD] hover:bg-[#4A6338]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
