"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export const ReviewForm: React.FC = () => {
  const [name, setName] = useState("");
  const [pregnancyMonth, setPregnancyMonth] = useState<string>("3");
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your name";
    if (rating < 1 || rating > 5) errs.rating = "Please select a star rating";
    if (message.trim().length < 20) {
      errs.message = "Review must be at least 20 characters long";
    } else if (message.trim().length > 800) {
      errs.message = "Review cannot exceed 800 characters";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          pregnancy_month: parseInt(pregnancyMonth, 10),
          rating,
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit review");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrors({ form: err.message || "Failed to submit review. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-[16px] bg-[#FBE7EC] p-8 text-center border-2 border-[#F2C0CD] shadow-warm max-w-xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-[#4A6338] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-3">
          Thank you, {name}!
        </h3>
        <p className="text-base text-[#36292E] leading-relaxed">
          Thank you — your words will help another mother. We'll publish this shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[16px] bg-[#F7EDE3] p-6 sm:p-8 shadow-warm border border-[#F2C0CD] max-w-xl mx-auto space-y-5"
      noValidate
    >
      {errors.form && (
        <div className="p-3.5 rounded-xl bg-[#F2C0CD] text-[#7D2352] text-sm font-semibold">
          {errors.form}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="review-name" className="block text-sm font-bold text-[#5E1A3D] mb-1.5">
          Your Name <span className="text-[#7D2352]">*</span>
        </label>
        <input
          id="review-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Sneha Patil"
          className="w-full px-4 py-3 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#36292E] placeholder-[#6B5B62] focus:border-[#4A6338] focus:ring-1 focus:ring-[#4A6338] outline-none text-base"
        />
        {errors.name && <p className="text-xs font-semibold text-[#8C4E1D] mt-1">{errors.name}</p>}
      </div>

      {/* Pregnancy Month */}
      <div>
        <label htmlFor="review-month" className="block text-sm font-bold text-[#5E1A3D] mb-1.5">
          Month of Pregnancy During Classes (Optional)
        </label>
        <select
          id="review-month"
          value={pregnancyMonth}
          onChange={(e) => setPregnancyMonth(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#36292E] focus:border-[#4A6338] focus:ring-1 focus:ring-[#4A6338] outline-none text-base cursor-pointer"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <option key={i + 1} value={i + 1}>
              Month {i + 1} of pregnancy
            </option>
          ))}
        </select>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-bold text-[#5E1A3D] mb-1.5">
          Your Rating <span className="text-[#7D2352]">*</span>
        </label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="text-3xl transition-transform hover:scale-110 p-1 focus-visible:outline-none"
              aria-label={`Rate ${star} stars`}
            >
              <span
                className={
                  star <= (hoverRating || rating)
                    ? "text-[#8C4E1D]"
                    : "text-[#D5DEC6]"
                }
              >
                ★
              </span>
            </button>
          ))}
        </div>
        {errors.rating && <p className="text-xs font-semibold text-[#8C4E1D] mt-1">{errors.rating}</p>}
      </div>

      {/* Message */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label htmlFor="review-message" className="block text-sm font-bold text-[#5E1A3D]">
            Your Experience & Words <span className="text-[#7D2352]">*</span>
          </label>
          <span className={`text-xs font-semibold ${message.length > 800 ? "text-[#8C4E1D]" : "text-[#4A6338]"}`}>
            {message.length} / 800 chars
          </span>
        </div>
        <textarea
          id="review-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share how the sessions helped your mind, body, and baby..."
          className="w-full px-4 py-3 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#36292E] placeholder-[#6B5B62] focus:border-[#4A6338] focus:ring-1 focus:ring-[#4A6338] outline-none text-base resize-none"
        />
        {errors.message && <p className="text-xs font-semibold text-[#8C4E1D] mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Submitting..." : "Submit Experience"}
      </Button>
    </form>
  );
};
