import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { LeafDivider } from "@/components/ui/LeafDivider";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#4A1230] text-[#FDF7F1] pt-12 pb-8 px-5 sm:px-8 mt-auto">
      <div className="max-w-[1120px] mx-auto">
        <LeafDivider color="#D5DEC6" className="mb-12 opacity-80" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-[#7D2352]">
          {/* Column 1: Logo & Taglines */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0 bg-[#FDF7F1] rounded-full p-1">
                <Image
                  src="/images/logo.webp"
                  alt="Astitva Garbhsanskar Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-[#FDF7F1] tracking-tight">
                  ASTITVA
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#FDF7F1] uppercase">
                  GARBHSANSKAR
                </span>
              </div>
            </div>

            <p className="font-serif text-xl text-[#FDF7F1] font-medium leading-snug mt-1">
              "{siteConfig.tagline}"
            </p>
            <p className="text-sm text-[#FBE7EC] italic">
              {siteConfig.taglineEn}
            </p>
            <p className="text-xs text-[#FBE7EC] mt-2">
              Guided personally by Prajakta Dhamane & Minal Purkar in Pune, India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg font-bold text-[#FDF7F1] mb-2">
              Explore Astitva
            </h3>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link
                  href="/"
                  className="text-[#FBE7EC] hover:text-[#FDF7F1] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#FBE7EC] hover:text-[#FDF7F1] transition-colors"
                >
                  About Us & Founders
                </Link>
              </li>
              <li>
                <Link
                  href="/program"
                  className="text-[#FBE7EC] hover:text-[#FDF7F1] transition-colors"
                >
                  Our Program & Batches
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-[#FBE7EC] hover:text-[#FDF7F1] transition-colors"
                >
                  Mother Reviews & Screenshots
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#FBE7EC] hover:text-[#FDF7F1] transition-colors"
                >
                  Contact & Book Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-bold text-[#FDF7F1] mb-2">
              Connect With Us
            </h3>
            <div className="flex flex-col gap-3 text-base">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-[#FBE7EC] hover:text-[#FDF7F1] transition-colors"
              >
                <svg
                  className="w-5 h-5 text-[#FBE7EC] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-[#FBE7EC] hover:text-[#FDF7F1] transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[#FBE7EC] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{siteConfig.email}</span>
                </a>
              )}

              {siteConfig.instagramUrl && (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FBE7EC] hover:text-[#FDF7F1] transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[#FBE7EC] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@astitva_garbhasanskar</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBE7EC]">
          <span>© 2026 Astitva Garbhsanskar. All rights reserved.</span>
          <span className="opacity-90">
            Pune, Maharashtra, India · Founded July 2025
          </span>
        </div>
      </div>
    </footer>
  );
};
