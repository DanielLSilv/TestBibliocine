import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const url = process.env.SUPABASE_CLIENT_URL;
const public_anon_key = process.env.SUPABASE_PUBLIC_ANON_KEY;
export const supabase = createClient(url, public_anon_key);
