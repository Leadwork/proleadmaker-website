import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    num: "01",
    icon: "📝",
    title: "Share Your Target Audience",
    description:
      "Tell us your niche, location, company size, and job titles. We identify the signals that matter for your ICP.",
  },
  {
    num: "02",
    icon: "🔍",
    title: "We Research & Triple-Verify",
    description:
      "We manually research signal-based prospects and triple-verify every contact using premium data tools and manual checks.",
  },
  {
    num: "03",
    icon: "✅",
    title: "Review Your FREE Sample",
    description:
      "Receive 20–100 sample leads first. Check the quality before committing to a full order — total peace of mind.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Launch Your Outreach",
    description:
      "Get your complete, outreach-ready list in Excel/CSV. Ready to import and start converting immediately.",
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="How It Works"
            title="Simple 4-Step Process"
            subtitle="From requirements to a verified, outreach-ready prospect list — fast, clean, accurate every time."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-brand-purple/10 hover:-translate-y-2 transition-all duration-500 cursor-default relative h-full border border-slate-100 group">
                <div className="text-6xl font-black text-slate-100 absolute top-4 right-6 leading-none group-hover:text-brand-purple/10 transition-colors">
                  {step.num}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-brand-purple/5 flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 group-hover:bg-brand-purple/10 transition-all">
                  {step.icon}
                </div>
                <h3 className="text-lg font-black text-indigo-950 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
