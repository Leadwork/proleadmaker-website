import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const audiences = [
  {
    icon: "📣",
    title: "Marketing Agencies",
    description:
      "Scale client campaigns with signal-based, verified prospect lists delivered fast.",
  },
  {
    icon: "👔",
    title: "CEOs & Founders",
    description:
      "Find your ideal customers and decision-makers showing real buying signals.",
  },
  {
    icon: "🏠",
    title: "Local Service Businesses",
    description:
      "Reach homeowners and businesses in your area with location-targeted leads.",
  },
  {
    icon: "💻",
    title: "SaaS Companies",
    description:
      "Get targeted lists of SMBs and enterprises that fit your product's ICP.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Ideal For"
            title="Built for Growth-Focused Teams"
            subtitle="Whether you're scaling an agency or running outreach solo, we deliver the pre-qualified data you need to win."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {audiences.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white rounded-3xl p-8 text-center border border-slate-100 hover:shadow-2xl hover:shadow-brand-purple/5 hover:-translate-y-2 transition-all duration-500 cursor-default h-full group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:bg-brand-purple/5 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-indigo-950 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
