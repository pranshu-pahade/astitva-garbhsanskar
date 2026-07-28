import React from "react";
import type { Metadata } from "next";
import { checkAdminAuth } from "./actions";
import { getSupabaseServerClient } from "@/lib/supabase";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Portal — Astitva Garbhsanskar",
  robots: {
    index: false,
    follow: false,
  },
};

export const revalidate = 0; // Always fresh admin data

export default async function AdminPage() {
  const isAuthenticated = await checkAdminAuth();

  let pendingReviews: any[] = [];
  let approvedReviews: any[] = [];
  let enquiries: any[] = [];

  if (isAuthenticated) {
    const supabase = getSupabaseServerClient();
    if (supabase) {
      const [pendingRes, approvedRes, enquiryRes] = await Promise.all([
        supabase
          .from("reviews")
          .select("*")
          .eq("status", "pending")
          .order("created_at", { ascending: false }),
        supabase
          .from("reviews")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false }),
        supabase
          .from("enquiries")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

      pendingReviews = pendingRes.data || [];
      approvedReviews = approvedRes.data || [];
      enquiries = enquiryRes.data || [];
    }
  }

  return (
    <div className="w-full min-h-[80vh] bg-[#FDF7F1]">
      <AdminDashboard
        initialIsAuthenticated={isAuthenticated}
        initialPendingReviews={pendingReviews}
        initialApprovedReviews={approvedReviews}
        initialEnquiries={enquiries}
      />
    </div>
  );
}
