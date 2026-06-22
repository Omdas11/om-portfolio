"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  // Basic honeypot check if added later
  const honeypot = formData.get("bot-field");
  if (honeypot) {
    return { error: "Spam detected" };
  }

  try {
    const supabase = await createClient();
    
    // Check if env vars are configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn("Supabase is not configured. Message would have been:", { name, email, message });
      return { success: true, warning: "Supabase not configured locally, but form submission simulated successfully." };
    }

    const { error } = await supabase.from("messages").insert([{ name, email, message }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return { error: "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Action error:", err);
    return { error: "An unexpected error occurred." };
  }
}
