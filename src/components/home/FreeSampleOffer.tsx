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
    <section id="free-sample" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal direction="scale">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-magenta/80 to-brand-pink" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            {/* Big watermark */}
            <div className="absolute -right-10 -top-10 text-[14rem] font-black text-white/[0.04] leading-none pointer-events-none select-none">
              100
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12">
              {/* Left */}
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-3">
                  Try Before You Buy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                  Get <span className="text-white/90">100 FREE</span> Sample Leads
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Test our signal-based data quality before placing a full order.
                  Share your target niche and we&apos;ll send you 100 verified, 
                  outreach-ready leads — completely free, within 24 hours.
                </p>
                <ul className="space-y-3">
                  {[
                    "100 fully verified contacts",
                    "Valid emails + LinkedIn included",
                    "Signal-matched to your exact niche",
                    "Delivered within 24 hours",
                    "No strings attached",
                  ].map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-white/80 text-sm">
                      <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                        ✓
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Form */}
              <div className="bg-white/95 backdrop-blur rounded-2xl p-6 md:p-8">
                <h3 className="font-bold text-dark-900 text-lg mb-5">
                  Request Your Free Sample
                </h3>
                <form onSubmit={handleSubmit} id="sample-form">
                  <input type="hidden" name="_subject" value="New Free Sample Request - ProLeadMaker" />
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark-800 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="Full Name"
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-dark-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-800 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="Email"
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-dark-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-800 mb-1.5">
                        Target Niche
                      </label>
                      <select
                        name="Niche"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-dark-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                      >
                        <option value="">Select a niche...</option>
                        <option>SaaS Companies</option>
                        <option>Software & IT Services</option>
                        <option>Marketing Agencies</option>
                        <option>E-commerce Businesses</option>
                        <option>Business Consulting</option>
                        <option>Financial Services</option>
                        <option>Healthcare Professionals</option>
                        <option>Real Estate Agencies</option>
                        <option>Startups</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-800 mb-1.5">
                        Requirements
                      </label>
                      <textarea
                        name="Requirements"
                        rows={3}
                        placeholder="e.g. CEOs of SaaS companies in the US with 10-50 employees..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-dark-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all resize-y"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-bold text-sm shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
                    >
                      {status === "sending"
                        ? "Sending..."
                        : status === "sent"
                        ? "✅ Sent! We'll deliver within 24h"
                        : "🎁 Get My Free Sample Leads"}
                    </button>
                    {status === "error" && (
                      <p className="text-red-500 text-xs text-center">
                        Something went wrong. Try WhatsApp: +8801315739311
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
