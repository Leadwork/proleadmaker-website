import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <ScrollReveal direction="scale">
          <div className="relative rounded-[3rem] overflow-hidden text-center shadow-3xl shadow-brand-purple/20">
            {/* Background */}
            <div className="absolute inset-0 bg-indigo-950" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-3xl" />
            <div className="absolute bottom-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-pink/10 blur-3xl" />

            <div className="relative z-10 py-20 px-8 md:px-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
                <span className="text-xs font-black tracking-widest uppercase text-white">
                  Start Today
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display tracking-tight leading-tight">
                Ready to Scale Your Outreach?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
                Join 600+ high-growth businesses using ProLeadMaker&apos;s 
                intelligence to fill their pipelines with triple-verified prospects.
              </p>
              <div className="flex flex-wrap gap-5 justify-center">
                <Link
                  href="/#free-sample"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-indigo-950 font-black text-base shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  🎁 Get FREE Sample Leads
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-purple text-white font-black text-base shadow-xl hover:bg-brand-magenta hover:-translate-y-1 transition-all duration-300"
                >
                  🚀 Start Growing Your Outreach
                </Link>
              </div>
              <p className="mt-8 text-white/60 text-xs font-bold uppercase tracking-widest">
                No credit card required · 24h delivery · 100% human verified
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
