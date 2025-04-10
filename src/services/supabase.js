import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wsxzmevyoljfevoorfoe.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzeHptZXZ5b2xqZmV2b29yZm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMjg5NDMsImV4cCI6MjA0ODkwNDk0M30.ZvVc9c5alj41BW1uiKP-HJYjQFoTbsZNML7ezasfTCQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
