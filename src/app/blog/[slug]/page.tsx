import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            <Link href="/blog" className="hover:text-brand-purple transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brand-purple">{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 mb-12 py-6 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-xl">✍️</div>
              <div>
                <div className="text-sm font-black text-indigo-950">{post.author}</div>
                <div className="text-xs font-bold text-slate-400">Founder & CEO</div>
              </div>
            </div>
            <div className="flex gap-6 text-xs font-black uppercase tracking-widest text-slate-400">
              <div className="flex items-center gap-2">
                <span>📅</span> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️</span> {post.readTime}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-3xl shadow-brand-purple/10 mb-16 border-8 border-slate-50">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>

        <div className="prose prose-lg max-w-none prose-indigo prose-headings:font-black prose-headings:text-indigo-950 prose-p:text-slate-600 prose-p:font-medium prose-li:text-slate-600 prose-strong:text-indigo-950 prose-a:text-brand-purple hover:prose-a:text-brand-magenta transition-colors">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Newsletter / CTA Section */}
        <div className="mt-24 p-12 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-black text-indigo-950 mb-4">Want more insights like this?</h3>
            <p className="text-slate-500 font-medium mb-8">
              Subscribe to our monthly newsletter for the latest B2B lead generation signals and growth strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-grow px-6 py-4 rounded-2xl bg-white border border-slate-200 text-indigo-950 font-bold focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all"
                required
              />
              <button className="px-8 py-4 rounded-2xl bg-indigo-950 text-white font-black hover:bg-brand-purple transition-all shadow-xl shadow-indigo-950/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-black text-slate-400 hover:text-brand-purple transition-colors uppercase tracking-widest">
            <span>←</span> Back to all posts
          </Link>
        </div>
      </div>
    </article>
  );
}
