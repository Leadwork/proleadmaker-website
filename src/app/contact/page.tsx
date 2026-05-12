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
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-6">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-purple">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 mb-8 leading-tight tracking-tight">
              Let&apos;s Start Building Your Pipeline
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Have a project in mind or need a custom lead list? 
              We&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Contact Info */}
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-black text-indigo-950 mb-6 tracking-tight">Contact Information</h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">We usually respond within a few hours. Choose the channel most convenient for you or book a direct strategy call.</p>

              <div className="space-y-4 mb-10">
                {contactItems.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-brand-purple/20 transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-sm">{item.icon}</div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</div>
                      <div className="text-base text-indigo-950 font-black">{item.value}</div>
                    </div>
                  </a>
                ))}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Freelance Platforms</div>
                  <div className="space-y-3">
                    <a href={siteConfig.social.upworkPersonal} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm font-bold text-indigo-950 hover:text-brand-purple transition-colors bg-white p-3 rounded-xl border border-slate-200">
                      <span>Hire on Upwork</span>
                      <span>→</span>
                    </a>
                    <a href={siteConfig.social.upworkAgency} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm font-bold text-indigo-950 hover:text-brand-purple transition-colors bg-white p-3 rounded-xl border border-slate-200">
                      <span>ProLeadMaker Agency</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: "LinkedIn", href: siteConfig.social.linkedin },
                  { label: "Facebook", href: siteConfig.social.facebook },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-xl text-xs font-black bg-slate-50 border border-slate-200 text-slate-500 uppercase tracking-widest hover:bg-indigo-950 hover:text-white transition-all">{s.label}</a>
                ))}
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-3xl shadow-indigo-950/5">
                <h3 className="text-2xl font-black text-indigo-950 mb-8 tracking-tight">Send a Message</h3>
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                  <input type="hidden" name="_subject" value="New General Message - ProLeadMaker" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                      <input type="text" name="Full Name" required placeholder="John Smith" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-indigo-950 text-sm font-bold placeholder:text-slate-300 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                      <input type="email" name="Email" required placeholder="john@company.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-indigo-950 text-sm font-bold placeholder:text-slate-300 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Subject</label>
                    <input type="text" name="Subject" placeholder="I need a lead list for..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-indigo-950 text-sm font-bold placeholder:text-slate-300 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Message</label>
                    <textarea name="Message" rows={5} placeholder="Tell us about your project, target niche, and requirements..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-indigo-950 text-sm font-bold placeholder:text-slate-300 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all resize-y" />
                  </div>
                  <button type="submit" disabled={status === "sending"} className="w-full py-5 rounded-2xl bg-brand-purple text-white font-black text-base shadow-xl shadow-brand-purple/20 hover:bg-brand-magenta hover:-translate-y-1 transition-all disabled:opacity-60">
                    {status === "sending" ? "Sending..." : status === "sent" ? "✅ Message Sent!" : "Send Message"}
                  </button>
                  {status === "error" && <p className="text-red-500 text-xs font-bold text-center">Something went wrong. Try WhatsApp: +8801315739311</p>}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
