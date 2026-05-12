import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/lib/constants";

export default function ServicesPreview() {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="What We Offer"
            title="Premium Lead Generation Services"
            subtitle="Every list is hand-built and triple-verified. We deliver pre-qualified prospect data that matches your ICP — not generic scraped junk."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-purple/10 hover:-translate-y-2 transition-all duration-500 cursor-default relative overflow-hidden h-full">
                {/* Gradient bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-sm group-hover:shadow-xl group-hover:border-brand-purple/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-indigo-950 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Niche tags */}
        <ScrollReveal delay={600}>
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-6">
              <span className="text-xs font-black tracking-widest uppercase text-brand-purple">
                Specialty Niches
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-4 max-w-4xl mx-auto">
              {[
                "💻 SaaS", "🏢 B2B", "🚀 Startups", "📈 Marketing Agencies",
                "💰 Venture Capital", "👨‍💼 Angel Investors", "💼 Consultants",
                "🏥 Healthcare", "🦷 Dentists", "🏠 Real Estate",
                "⚡ Electricians", "🔧 Plumbers", "📊 Financial Services",
              ].map((niche) => (
                <span
                  key={niche}
                  className="px-5 py-2.5 rounded-2xl text-xs font-bold bg-white border border-slate-200 text-slate-500 hover:border-brand-purple hover:text-brand-purple hover:-translate-y-1 transition-all cursor-default shadow-sm hover:shadow-lg"
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
