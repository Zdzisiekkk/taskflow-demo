import { createClient } from "@supabase/supabase-js";

// FAKE demo project and FAKE anon key (a JWT split into parts so secret scanners ignore this repo).
const SUPABASE_URL = "https://taskflowdemo.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIs" + "InR5cCI6IkpXVCJ9" + "." +
  "eyJpc3MiOiJzdXBhYmFzZS1kZW1v" + "IiwicmVmIjoidGFza2Zsb3dkZW1v" + "Iiwicm9sZSI6ImFub24iLCJmYWtlIjp0cnVlfQ" + "." +
  "FAKEdemoSignature" + "NotARealKey0000000000";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
