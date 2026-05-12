import Link from "next/link";
import { stats } from "@/lib/constants";
import VideoSection from "@/components/shared/VideoSection";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="bg-particles" />

      {/* Animated orbs */}
      <div className="orb w-[500px] h-[500px] bg-brand-purple/10 -top-[200px] right-[5%]" style={{ animationDelay: "0s" }} />
      <div className="orb w-[400px] h-[400px] bg-brand-pink/10 bottom-[-100px] left-[5%]" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-blink" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">
              Premium B2B Lead Generation
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight mb-6 animate-fade-up text-indigo-950" style={{ animationDelay: "0.1s" }}>
            Get Pre-Qualified B2B Leads That Actually{" "}
            <span className="gradient-text">Convert Into Clients</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Stop wasting time on bad data. We deliver triple-verified prospect lists that fill your pipeline with high-intent leads and outreach-ready intelligence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/#free-sample"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-brand text-white font-black text-base shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:-translate-y-1 transition-all duration-300 tracking-tight"
            >
              <span>🎁</span> Get FREE Sample Leads Before You Order
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 hover:border-brand-purple/30 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-slate-200/50"
            >
              <span>📞</span> Book a Strategy Call
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.slice(0, 3).map((stat, i) => (
              <div
                key={i}
                className="text-center lg:text-left"
              >
                <div className="text-3xl md:text-4xl font-black text-indigo-950 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-brand-purple/80 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Video Placeholder */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/20 border-8 border-white group">
            <VideoSection 
              poster="/images/video-placeholder.jpg"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              isStandalone={false}
            />
          </div>
          
          {/* Decorative Background for Video */}
          <div className="absolute inset-0 -m-8 bg-gradient-to-tr from-brand-purple/20 via-brand-magenta/10 to-brand-pink/20 blur-3xl opacity-50 -z-0" />
        </div>
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/50 to-transparent" />
    </section>
  );
}
