import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { blogPosts } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert insights on signal-based prospecting, B2B lead generation, cold email, and outreach systems.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-800 to-brand-pink/10" />
        <div className="orb w-[400px] h-[400px] bg-brand-pink/15 top-[-100px] right-[10%]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 animate-fade-up">Blog & Insights</h1>
          <p className="text-white/60 text-lg animate-fade-up-delayed">Expert guides on signal-based prospecting, cold email, and outreach systems that convert.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Signal-Based Prospecting", "B2B Lead Generation", "Cold Email", "Email Deliverability", "LinkedIn Outreach"].map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${cat === "All" ? "bg-brand-purple/20 border border-brand-purple/40 text-white" : "bg-white/5 border border-white/10 text-white/50 hover:bg-brand-purple/10 hover:text-white"}`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="glass rounded-2xl overflow-hidden hover-glow h-full flex flex-col">
                    <div className="aspect-[16/9] bg-gradient-to-br from-brand-purple/20 via-brand-magenta/10 to-brand-pink/20 flex items-center justify-center">
                      <span className="text-5xl opacity-30">📝</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-purple-light px-2.5 py-0.5 rounded-full bg-brand-purple/10 border border-brand-purple/20">{post.category}</span>
                        <span className="text-[11px] text-white/30">{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2 group-hover:text-brand-purple-light transition-colors font-display">{post.title}</h2>
                      <p className="text-sm text-white/40 leading-relaxed flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                        <span className="text-xs text-white/30">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span className="text-xs text-brand-purple-light font-medium group-hover:translate-x-1 transition-transform">Read More →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
