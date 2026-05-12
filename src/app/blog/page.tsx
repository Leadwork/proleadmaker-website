import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata = {
  title: "Insights & Strategy Blog",
  description: "Expert advice on B2B lead generation, signal-based prospecting, and scaling your outbound sales.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="ProLeadMaker Blog"
            title="Insights to Fuel Your Growth"
            subtitle="Expert strategy and data intelligence tips from the frontline of B2B lead generation."
          />
        </ScrollReveal>

        {/* Featured Post */}
        <div className="mt-16">
          <ScrollReveal>
            <Link href={`/blog/${blogPosts[0].slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 hover:shadow-3xl hover:shadow-brand-purple/10 transition-all duration-500">
              <div className="relative aspect-[16/9] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-black uppercase tracking-widest">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-indigo-950 mb-6 group-hover:text-brand-purple transition-colors leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-slate-500 text-lg mb-8 font-medium leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-xl">✍️</div>
                  <div>
                    <div className="text-sm font-black text-indigo-950">{blogPosts[0].author}</div>
                    <div className="text-xs font-bold text-slate-400">{blogPosts[0].date}</div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogPosts.slice(1).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 100}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-brand-purple/10 hover:-translate-y-2 transition-all duration-500">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-purple">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-indigo-950 mb-4 group-hover:text-brand-purple transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-black text-indigo-950 uppercase tracking-widest">Read Article</span>
                    <span className="text-xs font-bold text-slate-400">{post.date}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
