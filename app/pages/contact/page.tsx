"use client";

import { useState } from "react";
import { FadeIn, ClickScale } from "@/components/ui/animations";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 pt-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Have a project in mind? Let's build something ready for the future.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input 
                id="name" name="name" required 
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-md bg-transparent focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input 
                id="email" name="email" type="email" required 
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-md bg-transparent focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea 
              id="message" name="message" required rows={5}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-md bg-transparent focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <ClickScale className="w-full">
            <button 
              disabled={status === "loading" || status === "success"}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all 
                ${status === "success" ? "bg-green-600 text-white" : "bg-foreground text-background hover:opacity-90"}
                ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}
              `}
            >
              {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === "success" && <CheckCircle2 className="w-4 h-4" />}
              {status === "idle" && <Send className="w-4 h-4" />}
              {status === "idle" ? "Send Message" : status === "success" ? "Message Sent" : "Sending..."}
            </button>
          </ClickScale>
          
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </FadeIn>
    </div>
  );
}