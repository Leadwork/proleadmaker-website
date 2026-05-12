import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { tools, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Tools & Resources",
  description: "Free B2B tools: ICP Generator, Cold Email Template Generator, Subject Line Generator, Outreach Calculator, and more.",
};

export default function ToolsPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-800 to-brand-purple/15" />
        <div className="orb w-[400px] h-[400px] bg-brand-purple/15 top-[-100px] left-[10%]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 animate-fade-up">Free Tools & Resources</h1>
          <p className="text-white/60 text-lg animate-fade-up-delayed">Powerful free tools to supercharge your outreach and lead generation efforts.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-8 hover-glow cursor-default h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-brand-magenta/10 border border-brand-magenta/20 text-brand-magenta-light">Coming Soon</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{tool.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed flex-1">{tool.description}</p>
                  <button disabled className="mt-6 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/30 font-semibold text-sm cursor-not-allowed">Coming Soon</button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 glass rounded-3xl p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 font-display">Want Early Access?</h2>
              <p className="text-white/50 mb-6 max-w-lg mx-auto">Be the first to know when our free tools launch. In the meantime, get 100 free sample leads.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#free-sample" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-bold text-sm shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-0.5 transition-all">Get Free Sample Leads</Link>
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-xl border border-white/10 text-white/80 font-semibold text-sm hover:bg-white/5 transition-all">Schedule a Call</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
