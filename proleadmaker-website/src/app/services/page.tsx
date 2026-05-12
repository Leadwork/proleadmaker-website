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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-800 to-brand-purple/15" />
        <div className="orb w-[400px] h-[400px] bg-brand-purple/15 top-[-100px] right-[10%]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 animate-fade-up">
            Our Services
          </h1>
          <p className="text-white/60 text-lg animate-fade-up-delayed">
            Signal-based lead intelligence services tailored to your business —
            delivered with precision and speed.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    i % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Visual */}
                  <div
                    className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}
                  >
                    <div className="glass rounded-3xl p-12 text-center text-7xl hover:scale-[1.02] hover:-rotate-1 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-purple-light">
                        Service {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
                      {service.title}
                    </h2>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-white/70 hover:translate-x-1 transition-transform"
                        >
                          <span className="text-brand-purple font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={siteConfig.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple-light hover:text-white transition-colors"
                    >
                      Book a call to discuss →
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
