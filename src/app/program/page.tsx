import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LeafDivider } from "@/components/ui/LeafDivider";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Program & Daily Sessions — Live Garbhsanskar Zoom Classes",
  description:
    "Explore the 45-minute daily Zoom sessions by Astitva Garbhsanskar in Pune. Live yoga, Geeta & Ramraksha paath, music therapy, Vaidik sanskars, and batch timings.",
};

export default function ProgramPage() {
  const programBlocks = [
    {
      title: "Live Daily Sessions",
      icon: "🧘‍♀️",
      items: [
        "Pregnancy Yoga & Pranayam (tailored trimester movements)",
        "Geeta & Ramraksha Paath (soothing sacred recitations)",
        "Womb Music Therapy (calming frequencies for baby)",
        "Garbha Prarthana (heartfelt daily prayer to your child)",
        "Vedic Mantra Chanting (positive mental vibrations)",
      ],
    },
    {
      title: "Special Celebrations & Rituals",
      icon: "🪔",
      items: [
        "Moral & Spiritual Storytelling for the baby",
        "Full Moon (Purnima) Womb Meditation sessions",
        "Traditional Indian Festival & Sanskar Celebrations",
        "Vaidik Garbha Pujan & Sanskar Ritual Guidance",
      ],
    },
    {
      title: "Expert Guided Workshops",
      icon: "🌿",
      items: [
        "Pregnancy Diet & Trimester Nutrition Counseling",
        "Lactation & Breastfeeding Preparation",
        "Normal Delivery Breathwork & Labor Prep",
        "Postpartum Mother Care & 0–2 Year Baby Nurturing",
      ],
    },
  ];

  const timelineStops = [
    {
      stage: "3rd Month",
      title: "You Join Us",
      desc: "Welcome session, posture safety assessment, and initiating daily gentle habits.",
    },
    {
      stage: "4th–6th Month",
      title: "Building the Womb Bond",
      desc: "Baby begins responding to sound. Active music therapy, stories, and Geeta paath.",
    },
    {
      stage: "7th–9th Month",
      title: "Preparing for Birth",
      desc: "Pelvic opening exercises, labor breathwork, anxiety relief, and hospital prep.",
    },
    {
      stage: "Delivery",
      title: "We're With You",
      desc: "Warm wishes, birth blessings, and phone support from Prajakta & Minal.",
    },
    {
      stage: "0–2 Years",
      title: "Mother & Baby Care",
      desc: "Postpartum recovery guidance, baby massage tips, and mother support circle.",
    },
  ];

  const stepsToJoin = [
    { num: 1, title: "Enquire", text: "Fill out our short form or send a message on WhatsApp." },
    { num: 2, title: "We Talk", text: "Prajakta or Minal calls you to understand your pregnancy month & health." },
    { num: 3, title: "Demo Video & Material", text: "Receive demo session video & starter Garbhsanskar guidance." },
    { num: 4, title: "Join Your Batch", text: "Pick Morning, Afternoon, or Evening Zoom batch." },
    { num: 5, title: "WhatsApp Group", text: "Get daily session links, mantras, and 1-on-1 access." },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <Section bgColor="blush-100" className="pt-16 pb-20">
        <SectionHeading
          eyebrow="WHAT YOU RECEIVE"
          title="Everything in your Garbhsanskar journey."
          subtitle="Live, interactive Zoom sessions 6 days a week — designed specifically for pregnant women by qualified therapists."
        />
      </Section>

      {/* 2. Three Programme Blocks */}
      <Section bgColor="cream-50" id="curriculum">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programBlocks.map((block, idx) => (
            <Card key={idx} bgColor="bg-[#F7EDE3]" className="flex flex-col justify-between p-6 sm:p-8 border border-[#F2C0CD]">
              <div>
                <div className="text-4xl mb-4">{block.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-6 border-b border-[#F2C0CD] pb-3">
                  {block.title}
                </h3>
                <ul className="space-y-3.5 mb-6">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#4A3B42]">
                      <span className="w-5 h-5 rounded-full bg-[#9CAF88] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. Month-by-Month Journey Timeline */}
      <Section bgColor="cream-100" id="timeline">
        <SectionHeading
          eyebrow="TRIMESTER TO NEWBORN"
          title="Your Month-by-Month Timeline"
          subtitle="We walk beside you every single week until long after your baby arrives."
        />

        <div className="relative max-w-5xl mx-auto py-4">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 border-t-2 border-dashed border-[#9CAF88] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {timelineStops.map((stop, idx) => (
              <div key={idx} className="flex flex-col items-center text-center bg-[#FDF7F1] p-6 rounded-[16px] shadow-warm border border-[#F2C0CD]">
                <div className="w-10 h-10 rounded-full bg-[#7D2352] text-[#FDF7F1] font-serif font-bold text-lg flex items-center justify-center mb-3 shadow-warm-sm border-2 border-[#FDF7F1]">
                  {idx + 1}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CAF88] mb-1">
                  {stop.stage}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#5E1A3D] mb-2 leading-snug">
                  {stop.title}
                </h4>
                <p className="text-xs text-[#4A3B42] leading-relaxed">
                  {stop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Batch Timings */}
      <Section bgColor="cream-50" id="batches">
        <SectionHeading
          eyebrow="CONVENIENT DAILY SLOTS"
          title="Daily Zoom Batch Timings"
          subtitle="Select the slot that best fits your daily routine. Switch slots whenever needed."
        />

        {/* Desktop Table View */}
        <div className="hidden sm:block max-w-3xl mx-auto bg-[#FDF7F1] rounded-[16px] overflow-hidden shadow-warm border border-[#F2C0CD] mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FBE7EC] border-b border-[#F2C0CD] text-[#7D2352]">
                <th className="py-4 px-6 font-serif text-lg font-bold">Batch Name</th>
                <th className="py-4 px-6 font-serif text-lg font-bold">Time Slot</th>
                <th className="py-4 px-6 font-serif text-lg font-bold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F7EDE3]">
              {siteConfig.batchTimings.map((batch, idx) => (
                <tr key={idx} className="hover:bg-[#F7EDE3]/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#5E1A3D]">{batch.name}</td>
                  <td className="py-4 px-6 text-[#4A3B42] font-semibold">{batch.time}</td>
                  <td className="py-4 px-6 text-[#9CAF88] font-bold">{batch.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden grid grid-cols-1 gap-4 mb-6">
          {siteConfig.batchTimings.map((batch, idx) => (
            <Card key={idx} bgColor="bg-[#FDF7F1]" className="p-5 border border-[#F2C0CD]">
              <h4 className="font-serif text-lg font-bold text-[#5E1A3D] mb-1">
                {batch.name}
              </h4>
              <p className="text-base font-bold text-[#7D2352] mb-1">{batch.time}</p>
              <p className="text-xs text-[#9CAF88] font-semibold">{batch.duration} live session</p>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm font-semibold text-[#7D2352] bg-[#FBE7EC] max-w-md mx-auto py-2.5 px-4 rounded-full border border-[#F2C0CD]">
          📌 Sessions run 6 days a week — Sundays off for rest.
        </p>
      </Section>

      {/* 5. Pricing Details */}
      <Section bgColor="cream-100" id="pricing">
        <SectionHeading
          eyebrow="TRANSPARENT FEES"
          title="Simple, Low-Pressure Pricing"
          subtitle="Choose the option that feels most comfortable for your family."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-6">
          {/* Monthly */}
          <Card bgColor="bg-[#FDF7F1]" className="p-8 border border-[#F2C0CD] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9CAF88] mb-2 block">
                MONTHLY PLAN
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-3">
                Monthly Subscription
              </h3>
              <div className="font-serif text-4xl font-bold text-[#7D2352] mb-4">
                {siteConfig.priceMonthly} <span className="text-sm font-sans text-[#4A3B42] font-normal">/ month</span>
              </div>
              <ul className="space-y-2.5 text-sm text-[#4A3B42] mb-6">
                <li>✓ Access to all 3 daily Zoom batches</li>
                <li>✓ Daily live yoga & pranayam</li>
                <li>✓ Geeta & Ramraksha recitations</li>
                <li>✓ Cancel or renew anytime</li>
              </ul>
            </div>
            <Button href="#enquire" variant="secondary" size="md" className="w-full">
              Join Monthly
            </Button>
          </Card>

          {/* Full Package */}
          <Card bgColor="bg-[#FDF7F1]" className="p-8 border-2 border-[#7D2352] relative shadow-warm-lg flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 bg-[#F2C0CD] text-[#7D2352] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Best Value
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7D2352] mb-2 block">
                FULL 3RD–9TH MONTH PACKAGE
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#5E1A3D] mb-3">
                Complete Pregnancy Journey
              </h3>
              <div className="font-serif text-4xl font-bold text-[#7D2352] mb-4">
                {siteConfig.pricePackage} <span className="text-sm font-sans text-[#4A3B42] font-normal">(one-time)</span>
              </div>
              <ul className="space-y-2.5 text-sm text-[#4A3B42] mb-6">
                <li>✓ Full coverage from 3rd month through delivery</li>
                <li>✓ Save ₹3,100 compared to paying monthly</li>
                <li>✓ Special festival & Purnima workshops included</li>
                <li>✓ Post-delivery baby care & lactation support</li>
              </ul>
            </div>
            <Button href="#enquire" variant="primary" size="md" className="w-full">
              Choose Full Package
            </Button>
          </Card>
        </div>

        <p className="text-center text-sm text-[#4A3B42] italic">
          💚 No online payment required upfront. We will explain payment options calmly on WhatsApp.
        </p>
      </Section>

      {/* 6. See a Real Session (Video Embed if non-empty) */}
      {siteConfig.feedbackVideoUrl && (
        <Section bgColor="cream-50" id="video">
          <SectionHeading
            eyebrow="SAMPLE DEMO SESSION"
            title="See a Real Session in Action"
            subtitle="Watch how Prajakta & Minal guide mothers gently during live Zoom sessions."
          />

          <div className="max-w-3xl mx-auto rounded-[16px] overflow-hidden shadow-warm-lg border-4 border-[#FDF7F1] bg-[#FBE7EC] aspect-video relative">
            <iframe
              src={siteConfig.feedbackVideoUrl.replace("youtu.be/", "www.youtube.com/embed/").replace("watch?v=", "embed/")}
              title="Astitva Garbhsanskar Demo Session"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Section>
      )}

      {/* 7. How to Join (5 Numbered Steps) */}
      <Section bgColor="blush-100" id="how-to-join">
        <SectionHeading
          eyebrow="EASY 5-STEP PROCESS"
          title="How to Join Astitva"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {stepsToJoin.map((step) => (
            <Card key={step.num} bgColor="bg-[#FDF7F1]" className="p-5 text-center flex flex-col items-center border border-[#F2C0CD]">
              <div className="w-12 h-12 rounded-full bg-[#7D2352] text-[#FDF7F1] font-serif font-bold text-xl flex items-center justify-center mb-3 shadow-warm-sm">
                {step.num}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#5E1A3D] mb-1">
                {step.title}
              </h4>
              <p className="text-xs text-[#4A3B42] leading-relaxed">
                {step.text}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 8. Enquiry CTA Form */}
      <Section bgColor="cream-50" id="enquire">
        <SectionHeading
          eyebrow="START YOUR JOURNEY"
          title="Book Your Free Demo Session"
          subtitle="Fill out your details below. Prajakta & Minal will reach out on WhatsApp to welcome you."
        />

        <div className="max-w-xl mx-auto">
          <EnquiryForm />
        </div>
      </Section>
    </div>
  );
}
