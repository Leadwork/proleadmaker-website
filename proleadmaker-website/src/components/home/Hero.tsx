import Link from "next/link";
import Image from "next/image";
import { stats } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-800 to-brand-purple/20" />

      {/* Animated orbs */}
      <div className="orb w-[500px] h-[500px] bg-brand-purple/20 -top-[200px] right-[5%]" style={{ animationDelay: "0s" }} />
      <div className="orb w-[400px] h-[400px] bg-brand-pink/15 bottom-[-100px] left-[5%]" style={{ animationDelay: "-4s" }} />
      <div className="orb w-[300px] h-[300px] bg-brand-magenta/10 top-[30%] right-[30%]" style={{ animationDelay: "-8s" }} />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-blink" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
              Signal-Based Lead Intelligence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Pre-Qualified Leads That Drive{" "}
            <span className="gradient-text">Real Pipeline</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We deliver outreach-ready, signal-based prospect data — not generic scraped lists. 
            Verified contact intelligence matched to your ICP with 98%+ accuracy.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/#free-sample"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-bold text-sm shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-1 transition-all duration-300"
            >
              <span>🎁</span> Get 100 Free Sample Leads
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>📞</span> Book a Strategy Call
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${
                  i < stats.length - 1
                    ? "pr-8 border-r border-white/10"
                    : ""
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Founder Image */}
        <div className="hidden lg:flex justify-center relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <Image
              src="/images/Team-Founder.jpg"
              alt="MD. Al Amin – B2B Lead Intelligence Expert"
              width={380}
              height={480}
              className="rounded-2xl shadow-2xl shadow-brand-purple/20 border-2 border-white/10 hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-500"
              priority
            />

            {/* Floating Card - Leads Delivered */}
            <div className="absolute -bottom-4 -left-8 glass rounded-2xl p-4 min-w-[180px] animate-float shadow-lg">
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                Leads Delivered
              </div>
              <div className="text-2xl font-bold text-white mt-1">100K+</div>
              <div className="text-xs text-brand-purple-light font-medium">
                across 150+ industries
              </div>
            </div>

            {/* Floating Badge - Rating */}
            <div className="absolute -top-2 -right-4 glass rounded-xl p-3 text-center animate-float-delayed shadow-lg">
              <div className="text-lg font-bold text-white">⭐ 5.0</div>
              <div className="text-[9px] uppercase tracking-wider text-white/50 font-semibold">
                Top Rated
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
