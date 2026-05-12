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
    <section className="py-24 relative bg-dark-900/50">
      <div className="section-gradient-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Who We Help"
            title="Built for Growth-Focused Teams"
            subtitle="Whether you're scaling an agency or running outreach solo, we deliver the signal-based data you need."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {audiences.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass rounded-2xl p-6 text-center hover-glow cursor-default h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
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
