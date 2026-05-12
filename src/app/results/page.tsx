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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-800 to-brand-magenta/15" />
        <div className="orb w-[400px] h-[400px] bg-brand-magenta/15 top-[-100px] right-[10%]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 animate-fade-up">
            Results & Case Studies
          </h1>
          <p className="text-white/60 text-lg animate-fade-up-delayed">
            Real results, real reviews, real business outcomes from 617+ clients worldwide.
          </p>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "617+", label: "Clients Served" },
              { value: "430+", label: "Verified Reviews" },
              { value: "98%+", label: "Data Accuracy" },
              { value: "100K+", label: "Leads Delivered" },
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center hover-glow">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">
                    {metric.value}
                  </div>
                  <div className="text-xs text-white/40 mt-2">{metric.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative bg-dark-900/50">
        <div className="section-gradient-line absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Case Studies"
              title="Real Projects, Real Results"
              subtitle="Detailed breakdowns of how our signal-based approach delivered measurable business outcomes."
            />
          </ScrollReveal>

          <div className="space-y-8 mt-14">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="glass rounded-3xl p-8 md:p-10 hover-glow">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-8 items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-[10px] uppercase tracking-widest text-brand-purple-light font-semibold px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
                          {cs.industry}
                        </span>
                        <span className="text-xs text-white/30">{cs.client}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">
                        {cs.title}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-white/30 font-semibold mb-2">
                            Challenge
                          </div>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-white/30 font-semibold mb-2">
                            Solution
                          </div>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {cs.solution}
                          </p>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-white/30 font-semibold mb-2">
                            Results
                          </div>
                          <ul className="space-y-1.5">
                            {cs.results.map((r) => (
                              <li key={r} className="text-sm text-white/70 flex items-center gap-2">
                                <span className="text-brand-purple text-xs">✓</span> {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Big metric */}
                    <div className="text-center glass rounded-2xl p-6">
                      <div className="text-4xl md:text-5xl font-bold gradient-text">
                        {cs.metric}
                      </div>
                      <div className="text-xs text-white/40 mt-2">
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Verified Reviews"
              title="Straight From Our Clients"
              subtitle="400+ Fiverr reviews and 30+ Upwork reviews — all verified, all 5-star."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {["goodhumaninc", "marshman78", "modou_02", "s_hoefs"].map(
              (name, i) => (
                <ScrollReveal key={name} delay={i * 100}>
                  <div className="glass rounded-2xl overflow-hidden hover-glow">
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
      <section className="py-24 relative bg-dark-900/50">
        <div className="section-gradient-line absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Client Testimonials"
              title="Trusted Worldwide"
              subtitle="What our long-term clients say about our signal-based lead intelligence."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="glass rounded-2xl p-6 hover-glow h-full flex flex-col">
                  <div className="text-3xl text-brand-purple/20 font-serif leading-none mb-2">
                    &ldquo;
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed italic flex-1 mb-4">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-purple to-brand-magenta flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {t.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{t.author}</div>
                      <div className="text-[11px] text-white/40">{t.role}</div>
                    </div>
                    <div className="ml-auto text-yellow-400 text-xs">
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
