import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase";

const enquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  pregnancy_month: z.number().int().min(1).max(9).optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, phone, email, pregnancy_month, message } = parsed.data;

    const supabase = getSupabaseServerClient();
    if (supabase) {
      const { error } = await supabase.from("enquiries").insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          email: email?.trim() || null,
          pregnancy_month: pregnancy_month || null,
          message: message?.trim() || null,
        },
      ]);

      if (error) {
        console.error("Enquiry insert error:", error);
      }
    }

    return NextResponse.json(
      { success: true, message: "Enquiry recorded successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Enquiry endpoint error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
