import { getSupabaseServerClient } from "./supabase";
import { ReviewItem } from "@/components/sections/home/TestimonialCarouselSection";

export async function getApprovedReviewsServer(limit?: number): Promise<ReviewItem[]> {
  try {
    const supabase = getSupabaseServerClient();
    if (!supabase) return [];

    let query = supabase
      .from("reviews")
      .select("id, name, pregnancy_month, rating, message, created_at")
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;
    if (error || !data) return [];
    return data as ReviewItem[];
  } catch (err) {
    console.error("Error fetching approved reviews:", err);
    return [];
  }
}
