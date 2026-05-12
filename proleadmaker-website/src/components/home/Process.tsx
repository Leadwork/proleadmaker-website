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
    title: "We Research & Verify",
    description:
      "We manually research signal-based prospects and triple-verify every contact using Apollo, SalesQL, and LinkedIn.",
  },
  {
    num: "03",
    icon: "✅",
    title: "You Review Free Sample",
    description:
      "Receive 20–100 sample leads first. Check quality before committing to a full order — no strings attached.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "We Deliver Full List",
    description:
      "Get your complete, outreach-ready list in Excel/CSV. Free replacement for any invalid contacts.",
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-dark-800 to-brand-magenta/5" />
      <div className="section-gradient-line absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="How It Works"
            title="Simple 4-Step Process"
            subtitle="From requirements to a verified, outreach-ready prospect list — fast, clean, accurate every time."
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass rounded-2xl p-6 text-center hover-glow cursor-default relative h-full">
                <div className="text-5xl font-bold text-white/[0.04] absolute top-4 right-4 leading-none">
                  {step.num}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
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
