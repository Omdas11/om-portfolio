"use client";

import { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { submitContactMessage } from "@/app/actions";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; error?: string; warning?: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const res = await submitContactMessage(formData);
    
    setResult(res);
    setIsSubmitting(false);
    
    if (res.success) {
      (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="contact">
      <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-[80px]"></div>

        <div className="flex flex-col md:flex-row gap-12 relative z-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">
              Have a question or want to work together? Feel free to drop a message.
            </p>
            <div className="flex items-center gap-3 text-emerald-500 font-medium">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <a href="mailto:omdasg11@gmail.com" className="hover:underline">
                omdasg11@gmail.com
              </a>
            </div>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field */}
              <input type="text" name="bot-field" className="hidden" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {result?.error && (
                <p className="text-red-500 text-sm">{result.error}</p>
              )}
              {result?.warning && (
                <p className="text-yellow-500 text-sm">{result.warning}</p>
              )}
              {result?.success && !result?.warning && (
                <p className="text-emerald-500 text-sm font-medium">Message sent successfully!</p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
