"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error Boundary caught error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 bg-[#FDF7F1]">
      <div className="w-16 h-16 rounded-full bg-[#FBE7EC] text-[#7D2352] font-serif text-3xl flex items-center justify-center mb-6 shadow-warm">
        🌿
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5E1A3D] mb-4">
        Something went wrong
      </h1>
      <p className="text-base text-[#4A3B42] max-w-md mb-8 leading-relaxed">
        We encountered a temporary issue. Please try refreshing the page or click below to retry.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button onClick={() => reset()} variant="primary" size="md">
          Try Again
        </Button>
        <Button href="/" variant="secondary" size="md">
          Go to Home
        </Button>
      </div>
    </div>
  );
}
