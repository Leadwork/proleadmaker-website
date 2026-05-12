import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, siteConfig } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

const blogContent: Record<string, string[]> = {
  "signal-based-prospecting": [
    "Signal-based prospecting is a modern approach to B2B lead generation that identifies potential buyers based on real-time buying signals — not static demographic data.",
    "Unlike traditional list building, which relies on generic filters like industry and company size, signal-based prospecting looks for indicators that a company or person is actively in a buying cycle.",
    "These signals include: recent funding rounds, new executive hires, technology adoption changes, company expansion announcements, job postings indicating growth, and engagement with relevant content.",
    "At Pro Lead Maker, we combine these signals with manual research and verification to deliver prospect lists that are not just accurate, but genuinely ready for outreach.",
    "The result? Higher response rates, more booked meetings, and a dramatically shorter sales cycle for our clients.",
  ],
  "cold-email-deliverability-guide": [
    "Cold email deliverability is the foundation of any outbound campaign. If your emails don't reach the inbox, nothing else matters.",
    "The key factors affecting deliverability include: domain reputation, email authentication (SPF, DKIM, DMARC), sending volume, content quality, and list hygiene.",
    "Start by setting up proper DNS authentication. SPF tells receiving servers which IPs can send on your behalf. DKIM adds a cryptographic signature. DMARC ties them together with a policy.",
    "Next, warm up your email accounts gradually. Don't send 500 emails on day one. Start with 5-10 per day and increase over 2-4 weeks.",
    "List quality is equally critical. Using verified, signal-based leads (like those from Pro Lead Maker) ensures you're reaching real people at real companies — dramatically reducing bounces.",
  ],
  "build-icp-that-converts": [
    "Your Ideal Customer Profile (ICP) is the foundation of every successful B2B campaign. Without a clear ICP, you're essentially spraying and praying.",
    "A strong ICP goes beyond basic demographics. It includes firmographic data (industry, size, revenue), technographic data (tools they use), and behavioral signals (buying intent indicators).",
    "Start by analyzing your best existing customers. What do they have in common? Look at deal size, sales cycle length, retention rates, and expansion revenue.",
    "Then, layer in signal data: Are they hiring for roles that indicate a need for your solution? Have they recently raised funding? Are they using competing products?",
    "At Pro Lead Maker, we help clients build ICPs that drive real pipeline — not vanity metrics. Our signal-based approach ensures your prospect lists match your ICP precisely.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug] || [];

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-800 to-brand-purple/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-purple-light px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">{post.category}</span>
            <span className="text-xs text-white/30">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-4 animate-fade-up">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-white/40">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {content.map((para, i) => (
              <p key={i} className="text-white/60 leading-relaxed mb-6">{para}</p>
            ))}
          </div>

          <div className="mt-16 glass rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3 font-display">Need Pre-Qualified Leads?</h3>
            <p className="text-white/50 mb-6">Get 100 free signal-based sample leads matched to your ICP.</p>
            <Link href="/#free-sample" className="inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-bold text-sm shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-0.5 transition-all">
              Get Free Sample Leads
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <Link href="/blog" className="text-sm text-brand-purple-light hover:text-white transition-colors">← Back to Blog</Link>
          </div>
        </div>
      </article>
    </>
  );
}
