"use client";

import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export default function FreeSampleOffer() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(siteConfig.formspree, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="free-sample" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal direction="scale">
          <div className="relative rounded-[3rem] overflow-hidden shadow-3xl shadow-indigo-950/10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-indigo-950" />
            <div className="absolute inset-0 opacity-20 bg-grid" />

            {/* Big watermark */}
            <div className="absolute -right-16 -top-16 text-[20rem] font-black text-white/[0.05] leading-none pointer-events-none select-none">
              FREE
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                  <span className="text-xs font-black tracking-widest uppercase text-white">
                    Try Before You Buy
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display tracking-tight leading-tight">
                  Get <span className="text-white/80">FREE Sample Leads</span> Before You Order
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-8 font-medium">
                  Test our triple-verified data quality before placing a full order.
                  Share your target audience and we&apos;ll send you 100 verified, 
                  outreach-ready leads — completely free, within 24 hours.
                </p>
                <ul className="space-y-4">
                  {[
                    "100 fully verified contacts",
                    "Valid emails + LinkedIn included",
                    "Custom matched to your exact niche",
                    "Delivered within 24 hours",
                    "No credit card or commitment",
                  ].map((perk) => (
                    <li key={perk} className="flex items-center gap-4 text-white font-bold text-sm">
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[12px] font-black flex-shrink-0">
                        ✓
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Form */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl">
                <h3 className="font-black text-indigo-950 text-xl mb-6 tracking-tight">
                  Request Your Free Sample
                </h3>
                <form onSubmit={handleSubmit} id="sample-form">
                  <input type="hidden" name="_subject" value="New Free Sample Request - ProLeadMaker" />
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="Full Name"
                          required
                          placeholder="John Smith"
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-indigo-950 text-sm font-bold focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all placeholder:text-slate-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="Email"
                          required
                          placeholder="john@company.com"
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-indigo-950 text-sm font-bold focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                        Target Niche
                      </label>
                      <select
                        name="Niche"
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-indigo-950 text-sm font-bold focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all"
                      >
                        <option value="">Select a niche...</option>
                        <option>SaaS Companies</option>
                        <option>Marketing Agencies</option>
                        <option>Startups</option>
                        <option>E-commerce</option>
                        <option>Business Consulting</option>
                        <option>Healthcare / Medical</option>
                        <option>Real Estate</option>
                        <option>Local Services (HVAC/Plumbing)</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                        Specific Requirements
                      </label>
                      <textarea
                        name="Requirements"
                        rows={3}
                        placeholder="e.g. CEOs of SaaS companies in the US with 10-50 employees..."
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-indigo-950 text-sm font-bold focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all resize-none placeholder:text-slate-300"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-5 rounded-2xl bg-indigo-950 text-white font-black text-base shadow-xl hover:bg-brand-purple hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 uppercase tracking-widest"
                    >
                      {status === "sending"
                        ? "Sending Request..."
                        : status === "sent"
                        ? "✅ Request Sent!"
                        : "🎁 Get My Free Sample Leads"}
                    </button>
                    {status === "sent" && (
                      <p className="text-emerald-500 text-xs font-bold text-center mt-2 animate-fade-up">
                        Success! We&apos;ll be in touch via email within 24 hours.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-red-500 text-xs font-bold text-center mt-2">
                        Something went wrong. Try WhatsApp: +880 1315-739311
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
