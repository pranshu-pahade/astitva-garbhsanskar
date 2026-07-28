"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.program, href: "/program" },
    { name: t.nav.reviews, href: "/reviews" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-[#FDF7F1] transition-all duration-300 ${
        scrolled ? "shadow-warm py-3" : "py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo + Text */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Astitva Garbhsanskar Logo"
              fill
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#5E1A3D] leading-tight tracking-tight">
              ASTITVA
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#4A6338] uppercase leading-none">
              GARBHSANSKAR
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-base transition-colors relative py-1 ${
                  isActive
                    ? "text-[#7D2352] font-bold"
                    : "text-[#36292E] hover:text-[#7D2352]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A6338] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls (Language Switcher + CTA Button) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Top Right Language Switcher Button */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FBE7EC] border border-[#F2C0CD] text-[#7D2352] font-bold text-sm hover:bg-[#7D2352] hover:text-white transition-all shadow-warm-sm cursor-pointer"
            aria-label="Switch Language / भाषा बदला"
            title="Switch Language / भाषा बदला"
          >
            <span>🌐</span>
            <span>{t.nav.langSwitch}</span>
          </button>

          <Button href="/contact" variant="primary" size="md">
            {t.nav.bookDemo}
          </Button>
        </div>

        {/* Mobile Control Area */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language Switcher Button */}
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-full bg-[#FBE7EC] border border-[#F2C0CD] text-[#7D2352] font-bold text-xs hover:bg-[#7D2352] hover:text-white transition-all"
            aria-label="Switch Language"
          >
            🌐 {t.nav.langSwitch}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#5E1A3D] hover:bg-[#FBE7EC] focus-visible:outline-3 focus-visible:outline-[#4A6338]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-50 bg-[#FDF7F1] flex flex-col justify-between p-6 sm:p-8 animate-fadeIn md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-4 mt-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-serif text-2xl font-bold py-3.5 px-4 rounded-2xl transition-colors min-h-[56px] flex items-center ${
                    isActive
                      ? "bg-[#FBE7EC] text-[#7D2352]"
                      : "text-[#5E1A3D] hover:bg-[#F7EDE3]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-[#F2C0CD] flex flex-col gap-4 mb-6">
            <Button href="/contact" variant="primary" size="lg" className="w-full">
              {t.nav.bookDemo}
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Astitva%20Garbhsanskar.`}
              variant="whatsapp"
              size="lg"
              external
              className="w-full"
            >
              {t.nav.chatWhatsapp}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
