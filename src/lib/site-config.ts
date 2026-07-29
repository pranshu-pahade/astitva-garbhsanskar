export interface BatchTiming {
  name: string;
  time: string;
  duration: string;
}

export const siteConfig = {
  siteName: "Astitva Garbhsanskar",
  tagline: "स्वप्नातील बाळ सत्यात",
  taglineEn: "turning the baby of your dreams into reality",
  phone: "9094950304",
  phoneDisplay: "+91 90949 50304",
  whatsappNumber: "919094950304",
  email: process.env.NEXT_PUBLIC_CLIENT_EMAIL || "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/astitva_garbhasanskar",
  feedbackVideoUrl: process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || "https://youtu.be/wt-zGqBut5A",
  priceMonthly: "₹1,500",
  pricePackage: "₹9,000",
  priceThirdTrimesterMonthly: "₹1,700",
  priceThirdTrimesterPackage: "₹4,500",
  batchTimings: [
    {
      name: "Morning Batch",
      time: "7:15 AM – 8:00 AM",
      duration: "45 mins",
    },
    {
      name: "Afternoon Batch",
      time: "4:00 PM – 4:45 PM",
      duration: "45 mins",
    },
    {
      name: "Evening Batch",
      time: "6:00 PM – 6:45 PM",
      duration: "45 mins",
    },
  ] as BatchTiming[],
};
