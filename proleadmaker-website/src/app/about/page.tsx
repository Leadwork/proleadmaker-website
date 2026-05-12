import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Pro Lead Maker — a signal-based B2B lead intelligence agency founded by MD. Al Amin. 617+ clients, 100K+ leads, Fiverr Level 2 & Upwork Top Rated.",
};

const whyCards = [
  { icon: "✅", title: "Accurate & Verified Data", desc: "Every contact is manually researched and triple-verified with 98%+ accuracy." },
  { icon: "⚡", title: "Fast Delivery", desc: "Most projects delivered within 2-5 business days. Rush delivery available." },
  { icon: "🤝", title: "Client-Focused", desc: "We understand your exact targeting needs for conversion-ready leads." },
  { icon: "🔄", title: "Free Replacement", desc: "Invalid or incorrect data is replaced at no cost. Complete peace of mind." },
  { icon: "🎯", title: "Signal-Based Research", desc: "We use real buying signals, not just demographics, for pre-qualified prospects." },
  { icon: "🌍", title: "Global Coverage", desc: "We target prospects across the US, UK, Europe, Australia, and more." },
  { icon: "📬", title: "Outreach-Ready Data", desc: "Leads optimized for cold email and LinkedIn with verified contacts." },
  { icon: "💼", title: "Highly Targeted", desc: "Advanced filters like location, role, company size, and intent signals." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-800 to-brand-purple/15" />
        <div className="orb w-[400px] h-[400px] bg-brand-purple/15 top-[-100px] right-[10%]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 animate-fade-up">About Pro Lead Maker</h1>
          <p className="text-white/60 text-lg animate-fade-up-delayed">A results-driven lead intelligence agency helping businesses scale with signal-based, verified data.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <Image src="/images/Team-Founder.jpg" alt="MD. Al Amin – Founder of Pro Lead Maker" width={500} height={600} className="rounded-3xl shadow-2xl shadow-brand-purple/10 border border-white/10 w-full h-auto hover:scale-[1.02] transition-transform duration-500" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-purple-light">Our Story</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">About Pro Lead Maker</h2>
              <p className="text-white/50 leading-relaxed mb-4">Pro Lead Maker is a results-driven B2B lead intelligence agency helping businesses scale with pre-qualified, signal-based prospect data. Founded by MD. Al Amin, we&apos;ve grown from a solo operation into a trusted data partner for 617+ clients worldwide.</p>
              <p className="text-white/50 leading-relaxed mb-6">Unlike generic list providers, we take a signal-based approach — personally researching and verifying every contact based on real buying intent indicators. This is why our data consistently achieves 98%+ accuracy and why clients keep coming back.</p>
              <div className="glass rounded-2xl p-5 border-l-4 border-brand-purple">
                <p className="text-white/80 font-semibold text-sm">🎯 Our Mission: To provide pre-qualified, signal-based lead intelligence that helps businesses grow faster — with accuracy you can trust and speed you can count on.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900/50">
        <div className="section-gradient-line absolute left-0 right-0" />
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader label="Meet the Founder" title="The Person Behind the Data" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="glass rounded-3xl p-8 mt-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
              <Image src="/images/Team-Founder.jpg" alt="MD. Al Amin" width={150} height={150} className="w-[150px] h-[150px] rounded-full object-cover border-2 border-brand-purple mx-auto md:mx-0" />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white font-display">MD. Al Amin</h3>
                <div className="text-sm text-brand-purple-light font-semibold mb-3">Founder & Lead Intelligence Specialist</div>
                <p className="text-sm text-white/50 leading-relaxed mb-4">With 7+ years of B2B data experience, Al Amin has delivered over 100,000+ verified leads across 150+ industries. As a Fiverr Level 2 Seller and Upwork Top Rated freelancer, he brings a signal-based, quality-obsessed approach to every project.</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {["🏆 Upwork Top Rated", "⭐ Fiverr Level 2", "🎯 Signal-Based Leads", "🔗 LinkedIn Prospecting", "📊 Data Enrichment", "📧 Email Verification", "🚀 100K+ Leads"].map((badge) => (
                    <span key={badge} className="px-3 py-1 rounded-full text-xs font-medium bg-brand-purple/10 border border-brand-purple/20 text-white/60 hover:bg-brand-purple/20 hover:text-white transition-all">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader label="Why Choose Us" title="What Makes Us Different" />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {whyCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="glass rounded-2xl p-5 hover-glow h-full">
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-2">{card.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{card.desc}</p>
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
