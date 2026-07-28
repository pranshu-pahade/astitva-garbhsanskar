import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LeafDivider } from "@/components/ui/LeafDivider";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us & Founders — Prajakta Dhamane & Minal Purkar",
  description:
    "Learn about Astitva Garbhsanskar, founded by Prajakta Dhamane & Minal Purkar. Combining traditional Vaidik Garbhsanskar with modern yoga therapy.",
};

export default function AboutPage() {
  const missionPoints = [
    {
      title: "Educate & Empower",
      text: "To educate pregnant women about the science and spiritual depth of Garbhsanskar, removing fear and anxiety.",
    },
    {
      title: "Nurture Whole Body & Soul",
      text: "To nurture your baby mentally, emotionally, spiritually, and physically right from the early months in the womb.",
    },
    {
      title: "Keep Tradition Alive",
      text: "To keep ancient Indian Vaidik sanskars accessible and relevant for modern families, guided with medical care.",
    },
    {
      title: "Personal 1-to-1 Support",
      text: "To support every mother personally through pregnancy, delivery preparation, and baby care up to ~2 years.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <Section bgColor="blush-100" className="pt-16 pb-20">
        <SectionHeading
          eyebrow="OUR STORY & JOURNEY"
          title="Astitva began in our own family."
          subtitle="How two women turned a personal family experience into a supportive sanctuary for expecting mothers."
        />
      </Section>

      {/* 2. The Story */}
      <Section bgColor="cream-50" className="py-16">
        <div className="max-w-[680px] mx-auto space-y-6 text-base sm:text-lg text-[#36292E] leading-relaxed">
          <p className="font-serif text-xl sm:text-2xl text-[#8E2B5C] font-bold leading-snug">
            "When pregnancy entered our own household, we realized how overwhelming and lonely it can feel for a mother."
          </p>

          <p>
            Despite having loving family support, the sheer volume of conflicting advice, physical discomforts, and anxiety about the baby's health left us searching for genuine, grounded guidance. We turned to ancient Garbhsanskar texts and classical Yogashastra for answers.
          </p>

          <p>
            What we discovered was transformative: simple daily practices — 45 minutes of rhythmic breathing, sacred chanting, gentle stretching, and conscious connection — completely reshaped the pregnancy experience into one of deep calm and joy.
          </p>

          <p>
            In July 2025, we established Astitva Garbhsanskar to share this gift with every expecting mother. Since then, we have personally guided over 150 mothers from their 3rd month of pregnancy all the way through delivery and newborn care.
          </p>
        </div>
      </Section>

      {/* 3. Founders Section */}
      <Section bgColor="cream-100" id="founders-detail">
        <SectionHeading
          eyebrow="MEET YOUR TEACHERS"
          title="Guided Personally by Prajakta & Minal"
          subtitle="No hired instructors or recorded tapes. You meet us live every single day."
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* ONE Shared Photo */}
          <div className="relative w-full max-w-[450px] aspect-[679/906] rounded-[24px] overflow-hidden shadow-warm-lg border-4 border-[#FFF6EE] mb-12">
            <div className="absolute inset-0 bg-[#F3B6B2] rounded-[24px] transform rotate-2 -z-10" />
            <Image
              src="/images/founders.webp"
              alt="Prajakta Dhamane and Minal Purkar together in sarees"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </div>

          {/* Two Name Blocks Side by Side on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Prajakta Dhamane */}
            <Card bgColor="bg-[#FFF6EE]" className="flex flex-col items-start border border-[#F3B6B2]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3A5E2E] mb-1">
                CO-FOUNDER & LEAD YOGA THERAPIST
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#8E2B5C] mb-3">
                Prajakta Dhamane
              </h3>
              <p className="text-sm text-[#36292E] leading-relaxed mb-6">
                Specializes in prenatal medical yoga therapy, posture adjustments, and breathwork for smooth labor preparation.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 rounded-full bg-[#E2EAD8] text-[#8E2B5C] text-xs font-bold">
                  M.A. Yogashastra
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E2EAD8] text-[#8E2B5C] text-xs font-bold">
                  Medical Yoga Therapist
                </span>
              </div>
            </Card>

            {/* Minal Purkar */}
            <Card bgColor="bg-[#FFF6EE]" className="flex flex-col items-start border border-[#F3B6B2]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3A5E2E] mb-1">
                CO-FOUNDER & GARBHSANSKAR EDUCATOR
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#8E2B5C] mb-3">
                Minal Purkar
              </h3>
              <p className="text-sm text-[#36292E] leading-relaxed mb-6">
                Leads Vaidik Garbha sanskars, Geeta & Ramraksha paath, womb music therapy, and emotional bonding practices.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 rounded-full bg-[#E2EAD8] text-[#8E2B5C] text-xs font-bold">
                  MSc Qualified
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E2EAD8] text-[#8E2B5C] text-xs font-bold">
                  Certified Garbhsanskar Educator
                </span>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* 4. Our Mission */}
      <Section bgColor="cream-50" id="mission">
        <SectionHeading
          eyebrow="WHAT DRIVES US"
          title="Our Four Mission Pillars"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionPoints.map((item, idx) => (
            <Card key={idx} bgColor="bg-[#FFF6EE]" className="flex flex-col items-start p-6 border border-[#F3B6B2]">
              <div className="w-10 h-10 rounded-xl bg-[#E2EAD8] flex items-center justify-center text-[#8E2B5C] mb-4 shadow-warm-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#8E2B5C] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#36292E] leading-relaxed">
                {item.text}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. A Personal Note */}
      <Section bgColor="blush-100" id="personal-note">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-[16px] p-8 sm:p-12 bg-[#FFF6EE] border-l-8 border-[#D4A373] shadow-warm-lg">
            <h3 className="font-serif text-xl font-bold text-[#8E2B5C] mb-4 uppercase tracking-wider text-xs">
              A Personal Note to Every Mother
            </h3>

            <p className="font-serif italic text-lg sm:text-xl text-[#8E2B5C] leading-relaxed mb-6">
              "Dear Mother, pregnancy is not a period of fear or confinement. It is your baby's very first school and your most sacred journey. Take a deep breath, trust your body, and let us walk beside you every single morning."
            </p>

            <div className="flex justify-end font-serif font-bold text-lg text-[#8E2B5C]">
              — Prajakta & Minal
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Closing CTA */}
      <section className="w-full bg-[#8E2B5C] text-[#FFF6EE] py-16 px-5 sm:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <LeafDivider color="#F3B6B2" className="mb-6 opacity-80" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFF6EE] mb-4">
            Come meet us in a free demo session.
          </h2>
          <p className="text-base sm:text-lg text-[#FCECE9] mb-8">
            Experience our 45-minute live class, interact with Prajakta & Minal, and feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="light" size="lg">
              Book a Free Demo
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Astitva%20Garbhsanskar.`}
              variant="whatsapp"
              size="lg"
              external
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
