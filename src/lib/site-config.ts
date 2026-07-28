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
  email: process.env.NEXT_PUBLIC_CLIENT_EMAIL || "", // TODO: confirm with client
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/astitva_garbhasanskar",
  feedbackVideoUrl: process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || "https://youtu.be/wt-zGqBut5A",
  priceMonthly: "₹1,300",
  pricePackage: "₹6,000",
  // TODO: confirm exact batch timings with client
  batchTimings: [
    {
      name: "Morning Batch",
      time: "8:00 AM – 8:45 AM",
      duration: "45 mins",
    },
    {
      name: "Afternoon Batch",
      time: "2:00 PM – 2:45 PM",
      duration: "45 mins",
    },
    {
      name: "Evening Batch",
      time: "6:30 PM – 7:15 PM",
      duration: "45 mins",
    },
  ] as BatchTiming[],
};
