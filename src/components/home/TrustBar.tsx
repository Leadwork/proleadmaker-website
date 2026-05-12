import { trustBadges } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="relative border-y border-white/5 bg-dark-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/40 text-sm font-medium hover:text-white/70 transition-colors"
            >
              <span>{badge.icon}</span>
              <span className="font-semibold text-white/60">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
