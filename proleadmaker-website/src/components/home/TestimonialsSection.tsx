import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Client Reviews"
            title="What Our Clients Say"
            subtitle="430+ verified reviews across Fiverr and Upwork. Here's what real clients think about our signal-based lead intelligence."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass rounded-2xl p-6 hover-glow cursor-default h-full flex flex-col">
                {/* Quote */}
                <div className="text-4xl text-brand-purple/20 font-serif leading-none mb-2">
                  &ldquo;
                </div>
                <p className="text-sm text-white/60 leading-relaxed italic flex-1 mb-5">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border border-white/10"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-magenta flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-white text-sm">{t.author}</div>
                    <div className="text-xs text-white/40">
                      {t.role} · {t.location}
                    </div>
                    <div className="text-yellow-400 text-xs mt-0.5">
                      {"★".repeat(t.rating)}
                    </div>
                  </div>
                  {t.platform !== "Direct" && (
                    <span className="ml-auto text-[10px] uppercase tracking-wider text-brand-purple-light/60 font-semibold px-2 py-0.5 rounded-full bg-brand-purple/10">
                      {t.platform}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
