import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase";

// In-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const limit = 3;

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= limit) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  pregnancy_month: z.number().int().min(1).max(9).optional().nullable(),
  rating: z.number().int().min(1).max(5),
  message: z
    .string()
    .min(20, "Review message must be at least 20 characters")
    .max(800, "Review message cannot exceed 800 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "You have submitted too many reviews recently. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = reviewSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, pregnancy_month, rating, message } = parsed.data;

    // Spam URL check
    const urlPattern = /(https?:\/\/|www\.|\.[a-z]{2,3}\b)/i;
    if (urlPattern.test(name) || urlPattern.test(message)) {
      return NextResponse.json(
        { error: "Link sharing is not permitted in reviews." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json(
        { success: true, message: "Review recorded (demo mode)" },
        { status: 201 }
      );
    }

    const { error } = await supabase.from("reviews").insert([
      {
        name: name.trim(),
        pregnancy_month: pregnancy_month || null,
        rating,
        message: message.trim(),
        status: "pending", // ALWAYS forced to pending
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Database error occurred while submitting review." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Review submitted successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Review endpoint error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
