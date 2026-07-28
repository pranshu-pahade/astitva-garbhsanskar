import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 bg-[#FDF7F1]">
      <div className="w-16 h-16 rounded-full bg-[#FBE7EC] text-[#7D2352] font-serif text-3xl flex items-center justify-center mb-6 shadow-warm">
        🌸
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#5E1A3D] mb-4">
        Page Not Found
      </h1>
      <p className="text-base sm:text-lg text-[#4A3B42] max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been moved or does not exist. Let us take you back home safely.
      </p>
      <Button href="/" variant="primary" size="lg">
        Back to Home Page
      </Button>
    </div>
  );
}
