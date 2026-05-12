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
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-6">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-purple">
                Resources
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 mb-8 leading-tight tracking-tight">
              Free Sales Tools
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Powerful free resources to supercharge your outreach and optimize 
              your lead generation strategy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-slate-50 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-3xl hover:shadow-indigo-950/5 transition-all duration-500 h-full flex flex-col border border-slate-100 group relative overflow-hidden">
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple">Soon</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">{tool.icon}</div>
                  <h3 className="text-xl font-black text-indigo-950 mb-4 tracking-tight">{tool.title}</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed flex-grow">{tool.description}</p>
                  
                  <div className="mt-10 pt-6 border-t border-slate-100">
                    <Link 
                      href="/contact?subject=Notify me about tool: "
                      className="inline-flex items-center gap-2 text-xs font-black text-brand-purple uppercase tracking-widest group/link"
                    >
                      Get Early Access <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-20 p-12 md:p-16 rounded-[3rem] bg-indigo-950 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-10" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Want Early Access?</h2>
                <p className="text-white/70 text-lg font-medium mb-10">Be the first to know when our premium tools launch. In the meantime, start growing with a free sample list.</p>
                <div className="flex flex-wrap gap-5 justify-center">
                  <Link href="/#free-sample" className="px-8 py-4 rounded-2xl bg-brand-purple text-white font-black text-sm hover:bg-brand-magenta transition-all hover:-translate-y-1 shadow-xl shadow-brand-purple/20">🎁 Get FREE Sample Leads</Link>
                  <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-black text-sm hover:bg-white/20 transition-all hover:-translate-y-1">📅 Book Strategy Call</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
