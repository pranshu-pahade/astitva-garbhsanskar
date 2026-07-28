"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getSupabaseServerClient } from "@/lib/supabase";

const ADMIN_COOKIE_NAME = "astitva_admin_session";

export async function loginAdminAction(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD || "Pranshu@astitva@123";
  if (password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });
    return { success: true };
  }
  return { success: false, error: "Incorrect admin password" };
}

export async function logoutAdminAction() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  return { success: true };
}

export async function checkAdminAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME);
  return session?.value === "authenticated";
}

export async function approveReviewAction(id: string) {
  const isAdmin = await checkAdminAuth();
  if (!isAdmin) throw new Error("Unauthorized");

  const supabase = getSupabaseServerClient();
  if (!supabase) return { success: false, error: "Database not connected" };

  const { error } = await supabase
    .from("reviews")
    .update({ status: "approved" })
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/reviews");
  revalidatePath("/");
  return { success: true };
}

export async function deleteReviewAction(id: string) {
  const isAdmin = await checkAdminAuth();
  if (!isAdmin) throw new Error("Unauthorized");

  const supabase = getSupabaseServerClient();
  if (!supabase) return { success: false, error: "Database not connected" };

  const { error } = await supabase.from("reviews").delete().eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/reviews");
  revalidatePath("/");
  return { success: true };
}
