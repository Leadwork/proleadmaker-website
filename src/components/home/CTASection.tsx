import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <ScrollReveal direction="scale">
          <div className="relative rounded-3xl overflow-hidden text-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-magenta/80 to-brand-pink" />
            <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] rounded-full bg-white/[0.04]" />

            <div className="relative z-10 py-16 px-8 md:px-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Ready to Grow Your Pipeline?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
                Join 617+ businesses already using Pro Lead Maker&apos;s signal-based
                intelligence to fill their pipelines with pre-qualified prospects.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/#free-sample"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-dark-900 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  🎁 Get Free Sample Leads
                </Link>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  📞 Schedule a Strategy Call
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
