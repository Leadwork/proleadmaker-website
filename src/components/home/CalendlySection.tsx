"use client";

import { useEffect } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/lib/constants";

export default function CalendlySection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book-call" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Get Started"
            title="Book Your Growth Strategy Call"
            subtitle="Let's discuss your ideal customer profile and how signal-based prospecting can scale your outreach. Choose a time that works for you."
          />
        </ScrollReveal>

        <div className="mt-14 glass rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl min-h-[700px] relative">
          {/* Calendly Inline Widget */}
          <div 
            className="calendly-inline-widget w-full h-[700px]" 
            data-url={`${siteConfig.calendly}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=7c3aed`}
          />
          
          {/* Loading State Overlay (if widget takes time) */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Loading Calendar...</p>
            </div>
          </div>
        </div>
        
        {/* Trust signals below calendar */}
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏳</span>
            <span className="text-sm font-bold text-slate-500">15-30 Minute Discovery Call</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            <span className="text-sm font-bold text-slate-500">No Hard Selling</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <span className="text-sm font-bold text-slate-500">Actionable Lead Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
