"use client";

import { useState } from "react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/lib/constants";

const contactItems = [
  { icon: "📧", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "📞", label: "Phone / WhatsApp", value: "+880 1315-739311", href: siteConfig.whatsapp },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(siteConfig.formspree, {
        method: "POST", body: formData, headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("sent"); (e.target as HTMLFormElement).reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-800 to-brand-magenta/15" />
        <div className="orb w-[400px] h-[400px] bg-brand-magenta/15 top-[-100px] left-[10%]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 animate-fade-up">Get In Touch</h1>
          <p className="text-white/60 text-lg animate-fade-up-delayed">Have a project in mind? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Contact Info */}
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-purple-light">Contact Info</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">Let&apos;s Talk Business</h2>
              <p className="text-white/50 leading-relaxed mb-8">We usually respond within a few hours. Choose the channel most convenient for you.</p>

              <div className="space-y-3 mb-8">
                {contactItems.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass rounded-xl p-4 hover-glow group">
                    <div className="w-11 h-11 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-white/30 font-semibold">{item.label}</div>
                      <div className="text-sm text-white/80 font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
                <div className="glass rounded-xl p-4">
                  <div className="text-[10px] uppercase tracking-wider text-white/30 font-semibold mb-2">Freelance Profiles</div>
                  <div className="space-y-1">
                    <a href={siteConfig.social.upworkPersonal} target="_blank" rel="noopener noreferrer" className="block text-sm text-brand-purple-light hover:text-white transition-colors">Personal Upwork Profile →</a>
                    <a href={siteConfig.social.upworkAgency} target="_blank" rel="noopener noreferrer" className="block text-sm text-brand-purple-light hover:text-white transition-colors">Agency Upwork Profile →</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "🏢 Company LinkedIn", href: siteConfig.social.linkedin },
                  { label: "📘 Facebook", href: siteConfig.social.facebook },
                  { label: "💼 Founder LinkedIn", href: siteConfig.social.founderLinkedin },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/50 hover:bg-brand-purple/10 hover:text-white hover:-translate-y-0.5 transition-all">{s.label}</a>
                ))}
              </div>

              {/* Calendly */}
              <div className="mt-8 glass rounded-2xl p-6 text-center">
                <h3 className="font-bold text-white mb-2">Schedule a Strategy Call</h3>
                <p className="text-sm text-white/40 mb-4">Book a free 30-minute call to discuss your lead generation needs.</p>
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-bold text-sm shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-0.5 transition-all">
                  📅 Book on Calendly
                </a>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal direction="right">
              <div className="glass rounded-2xl p-8">
                <h3 className="font-bold text-white text-xl mb-6 font-display">Send a Message</h3>
                <form onSubmit={handleSubmit} id="contact-form">
                  <input type="hidden" name="_subject" value="New General Message - ProLeadMaker" />
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/60 mb-1.5">Your Name</label>
                      <input type="text" name="Full Name" required placeholder="John Smith" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/60 mb-1.5">Email Address</label>
                      <input type="email" name="Email" required placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/60 mb-1.5">Subject</label>
                      <input type="text" name="Subject" placeholder="I need a lead list for..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/60 mb-1.5">Message</label>
                      <textarea name="Message" rows={5} placeholder="Tell us about your project, target niche, and requirements..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30 outline-none transition-all resize-y" />
                    </div>
                    <button type="submit" disabled={status === "sending"} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-bold text-sm shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:-translate-y-0.5 transition-all disabled:opacity-60">
                      {status === "sending" ? "Sending..." : status === "sent" ? "✅ Message Sent!" : "Send Message →"}
                    </button>
                    {status === "error" && <p className="text-red-400 text-xs text-center">Something went wrong. Try WhatsApp: +8801315739311</p>}
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
