import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/home/CTASection";
import { testimonials, caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "See real results from 617+ clients. 430+ verified reviews, detailed case studies, and proof of our signal-based lead intelligence quality.",
};

export default function ResultsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-6">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-purple">
                Proven Success
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 mb-8 leading-tight tracking-tight">
              Results & Case Studies
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Real pipeline growth, verified reviews, and measurable business 
              outcomes from 600+ clients worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-16 relative bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "600+", label: "Clients Served" },
              { value: "430+", label: "Verified Reviews" },
              { value: "98%+", label: "Data Accuracy" },
              { value: "100K+", label: "Leads Delivered" },
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tighter">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-brand-purple mt-3">
                    {metric.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Deep Dives"
              title="Real Projects, Real Results"
              subtitle="Detailed breakdowns of how our signal-based approach delivered measurable business outcomes for high-growth teams."
            />
          </ScrollReveal>

          <div className="space-y-12 mt-16">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-3xl shadow-indigo-950/5 hover:shadow-brand-purple/10 transition-all duration-500 group">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 mb-8">
                        <span className="text-[10px] font-black tracking-widest uppercase text-brand-purple px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10">
                          {cs.industry}
                        </span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cs.client}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-indigo-950 mb-8 tracking-tight">
                        {cs.title}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                          <div className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-3">
                            Challenge
                          </div>
                          <p className="text-sm font-medium text-slate-500 leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <div className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-3">
                            Solution
                          </div>
                          <p className="text-sm font-medium text-slate-500 leading-relaxed">
                            {cs.solution}
                          </p>
                        </div>
                        <div>
                          <div className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-3">
                            Outcome
                          </div>
                          <ul className="space-y-2">
                            {cs.results.map((r) => (
                              <li key={r} className="text-sm font-bold text-indigo-950 flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px]">✓</span> {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Big metric */}
                    <div className="text-center bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 group-hover:bg-indigo-950 transition-colors duration-500 group-hover:border-indigo-950">
                      <div className="text-5xl md:text-6xl font-black text-brand-purple tracking-tighter group-hover:text-white transition-colors">
                        {cs.metric}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-4 group-hover:text-white/60 transition-colors">
                        {cs.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Review Screenshots */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Verified Proof"
              title="Straight From Our Clients"
              subtitle="400+ Fiverr reviews and 30+ Upwork reviews — all verified, all 5-star testimonials of our lead quality."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {["goodhumaninc", "marshman78", "modou_02", "s_hoefs"].map(
              (name, i) => (
                <ScrollReveal key={name} delay={i * 100}>
                  <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <Image
                      src={`/images/reviews/${name}.png`}
                      alt={`${name} review`}
                      width={600}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Feedback"
              title="Trusted Worldwide"
              subtitle="What our long-term clients say about our signal-based lead intelligence and data quality."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-500 h-full flex flex-col border border-slate-100">
                  <div className="text-5xl text-brand-purple/10 font-serif leading-none mb-4">
                    &ldquo;
                  </div>
                  <p className="text-base text-slate-500 font-medium leading-relaxed italic flex-1 mb-8">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-purple font-black text-sm flex-shrink-0">
                      {t.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-black text-indigo-950 text-sm">{t.author}</div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</div>
                    </div>
                    <div className="ml-auto flex text-brand-purple text-[10px]">
                      {"★".repeat(t.rating)}
                    </div>
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
