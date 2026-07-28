"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface EnquiryFormProps {
  onSuccessRedirectWhatsApp?: boolean;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  onSuccessRedirectWhatsApp = true,
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pregnancy_month: "3",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please tell us your name";
    if (!formData.phone.trim()) {
      errs.phone = "Please provide your phone or WhatsApp number";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
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
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          pregnancy_month: parseInt(formData.pregnancy_month, 10),
          message: formData.message.trim() || undefined,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send enquiry");
      }

      setIsSuccess(true);

      if (onSuccessRedirectWhatsApp) {
        const text = encodeURIComponent(
          `Hi, I am ${formData.name.trim()}. I am in Month ${formData.pregnancy_month} of pregnancy. I would like to book a free demo session for Astitva Garbhsanskar.`
        );
        setTimeout(() => {
          window.open(`https://wa.me/919094950304?text=${text}`, "_blank");
        }, 1200);
      }
    } catch (err) {
      console.error(err);
      setErrors({ form: "Something went wrong. Please try again or message us directly on WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`rounded-[16px] bg-[#FBE7EC] p-8 text-center border-2 border-[#F2C0CD] shadow-warm ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#2E7D47] text-white flex items-center justify-center mx-auto mb-4 text-3xl">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-2">
          Thank you, {formData.name}!
        </h3>
        <p className="text-base text-[#36292E] leading-relaxed mb-4">
          We have received your details. Opening WhatsApp now to connect you directly with Prajakta & Minal...
        </p>
        <p className="text-xs text-[#4A6338] font-bold">
          If WhatsApp didn't open automatically, tap the WhatsApp button below.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-[16px] bg-[#F7EDE3] p-6 sm:p-8 shadow-warm border border-[#F2C0CD] space-y-5 ${className}`}
      noValidate
    >
      {errors.form && (
        <div className="p-3.5 rounded-xl bg-[#F2C0CD] text-[#7D2352] text-sm font-semibold">
          {errors.form}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="enquiry-name" className="block text-sm font-bold text-[#5E1A3D] mb-1.5">
          Your Name <span className="text-[#7D2352]">*</span>
        </label>
        <input
          id="enquiry-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Radhika Sharma"
          className="w-full px-4 py-3 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#36292E] placeholder-[#6B5B62] focus:border-[#4A6338] focus:ring-1 focus:ring-[#4A6338] outline-none text-base"
        />
        {errors.name && <p className="text-xs font-semibold text-[#8C4E1D] mt-1">{errors.name}</p>}
      </div>

      {/* Phone / WhatsApp */}
      <div>
        <label htmlFor="enquiry-phone" className="block text-sm font-bold text-[#5E1A3D] mb-1.5">
          Phone / WhatsApp Number <span className="text-[#7D2352]">*</span>
        </label>
        <input
          id="enquiry-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="e.g. 9094950304"
          className="w-full px-4 py-3 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#36292E] placeholder-[#6B5B62] focus:border-[#4A6338] focus:ring-1 focus:ring-[#4A6338] outline-none text-base"
        />
        {errors.phone && <p className="text-xs font-semibold text-[#8C4E1D] mt-1">{errors.phone}</p>}
      </div>

      {/* Month of Pregnancy */}
      <div>
        <label htmlFor="enquiry-month" className="block text-sm font-bold text-[#5E1A3D] mb-1.5">
          Month of Pregnancy
        </label>
        <select
          id="enquiry-month"
          value={formData.pregnancy_month}
          onChange={(e) => setFormData({ ...formData, pregnancy_month: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#36292E] focus:border-[#4A6338] focus:ring-1 focus:ring-[#4A6338] outline-none text-base cursor-pointer"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <option key={i + 1} value={i + 1}>
              Month {i + 1} of pregnancy
            </option>
          ))}
        </select>
      </div>

      {/* Optional Message */}
      <div>
        <label htmlFor="enquiry-message" className="block text-sm font-bold text-[#5E1A3D] mb-1.5">
          Any Questions or Message (Optional)
        </label>
        <textarea
          id="enquiry-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your batch preference or health queries..."
          className="w-full px-4 py-3 rounded-xl bg-[#FDF7F1] border border-[#F2C0CD] text-[#36292E] placeholder-[#6B5B62] focus:border-[#4A6338] focus:ring-1 focus:ring-[#4A6338] outline-none text-base resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Sending..." : "Book Free Demo Session"}
      </Button>
    </form>
  );
};
