import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY || "";

let browserClient: SupabaseClient | null = null;

// Browser client (public publishable key)
export function getSupabaseBrowserClient(): SupabaseClient {
  if (typeof window === "undefined") {
    return createClient(supabaseUrl, supabasePublishableKey);
  }
  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabasePublishableKey);
  }
  return browserClient;
}

// Server admin client (secret key - never expose to browser)
export function getSupabaseServerClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseSecretKey || supabaseUrl.includes("placeholder")) {
    return null;
  }
  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
