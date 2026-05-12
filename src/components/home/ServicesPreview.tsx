import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/lib/constants";

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="What We Offer"
            title="Signal-Based Lead Intelligence Services"
            subtitle="Every list is hand-built and triple-verified. We deliver pre-qualified prospect data based on real buying signals — not scraped junk."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group glass rounded-2xl p-6 hover-glow cursor-default relative overflow-hidden h-full">
                {/* Gradient bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-14 h-14 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-400">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Niche tags */}
        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-purple-light">
                Specialty Niches
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {[
                "💻 SaaS", "🏢 B2B", "🚀 Startups", "📈 Marketing Agencies",
                "💰 Venture Capital", "👨‍💼 Angel Investors", "💼 Consultants",
                "🏥 Healthcare", "🦷 Dentists", "🏠 Real Estate",
                "⚡ Electricians", "🔧 Plumbers", "📊 Financial Services",
              ].map((niche) => (
                <span
                  key={niche}
                  className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/50 hover:bg-brand-purple/10 hover:border-brand-purple/30 hover:text-white hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {niche}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
