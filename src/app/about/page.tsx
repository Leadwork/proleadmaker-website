import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import VideoSection from "@/components/shared/VideoSection";
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
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-6">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-purple">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 mb-8 leading-tight tracking-tight">
              A Results-Driven Lead Intelligence Agency
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              Helping businesses scale with pre-qualified, signal-based, 
              and manually verified prospect data since 2019.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-brand blur-2xl opacity-10 rounded-[3rem]" />
                <Image 
                  src="/images/Team-Founder.jpg" 
                  alt="MD. Al Amin – Founder of Pro Lead Maker" 
                  width={500} 
                  height={600} 
                  className="relative z-10 rounded-[2.5rem] shadow-3xl shadow-indigo-950/10 border-8 border-white w-full h-auto" 
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl md:text-4xl font-black text-indigo-950 mb-8 tracking-tight">The ProLeadMaker Difference</h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">ProLeadMaker is a premier B2B lead intelligence agency specialized in delivering pre-qualified, signal-based prospect data. Founded by MD. Al Amin, we&apos;ve evolved into a trusted growth partner for over 600+ businesses worldwide.</p>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">Unlike automated list providers, we take a signal-based approach — personally researching and verifying every contact based on real buying intent. This human-in-the-loop verification is why we guarantee 98%+ accuracy on every project.</p>
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 border-l-8 border-l-brand-purple">
                <p className="text-indigo-950 font-black text-lg leading-relaxed">
                  "Our mission is to empower outbound teams with the most accurate, intent-driven contact data in the market, enabling them to focus on closing, not chasing."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Integrated Video Section for About Page */}
      <VideoSection />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader label="Meet the Founder" title="Expertise You Can Trust" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-[3rem] p-10 md:p-14 mt-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-center border border-slate-100 shadow-2xl shadow-indigo-950/5">
              <div className="relative">
                <div className="absolute -inset-2 bg-brand-purple/20 blur-xl rounded-full" />
                <Image src="/images/Team-Founder.jpg" alt="MD. Al Amin" width={200} height={200} className="relative z-10 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full object-cover border-8 border-white shadow-xl mx-auto md:mx-0" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black text-indigo-950 mb-2 tracking-tight">MD. Al Amin</h3>
                <div className="text-sm font-black text-brand-purple uppercase tracking-widest mb-6">Founder & Lead Intelligence Specialist</div>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">With over 7 years of B2B data expertise, Al Amin has delivered 100,000+ verified leads across 150+ industries. As a Top-Rated specialist on both Upwork and Fiverr, he brings a signal-based, quality-first philosophy to every client engagement.</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["🏆 Upwork Top Rated", "⭐ Fiverr Level 2", "🎯 Signal-Based Specialist", "📧 Delivery Expert"].map((badge) => (
                    <span key={badge} className="px-5 py-2 rounded-xl text-xs font-black bg-slate-50 border border-slate-100 text-slate-500 uppercase tracking-widest">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader label="Values" title="What Drives ProLeadMaker" />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {whyCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-500 h-full border border-slate-100 group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                  <h3 className="text-lg font-black text-indigo-950 mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{card.desc}</p>
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
