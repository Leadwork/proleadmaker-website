import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/home/CTASection";
import { services, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Signal-based lead generation services: prospect list building, B2B lead intelligence, data enrichment, email verification, infrastructure setup, and warmup.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-6">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-purple">
                Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 mb-8 leading-tight tracking-tight">
              Premium Lead Intelligence
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              Signal-based services tailored to your high-growth agency or startup —
              delivered with manual precision and industrial speed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="space-y-32">
            {services.map((service, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    i % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Visual */}
                  <div
                    className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}
                  >
                    <div className="bg-slate-50 rounded-[3rem] p-16 md:p-24 text-center text-8xl hover:scale-[1.02] hover:-rotate-1 transition-all duration-500 border border-slate-100 shadow-3xl shadow-indigo-950/5 group">
                      <span className="inline-block group-hover:scale-110 transition-transform">{service.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-6">
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-purple">
                        Expertise {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-indigo-950 mb-6 tracking-tight leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-indigo-950 transition-colors"
                        >
                          <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-xs">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={siteConfig.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-indigo-950 text-white font-black text-sm hover:bg-brand-purple transition-all shadow-xl shadow-indigo-950/20"
                    >
                      Book Strategy Call →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
