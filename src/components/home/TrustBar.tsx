import { trustBadges } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="relative border-y border-slate-100 bg-slate-50/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-slate-400 text-sm font-bold hover:text-brand-purple transition-colors group"
            >
              <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{badge.icon}</span>
              <span className="text-slate-500 group-hover:text-indigo-950 transition-colors uppercase tracking-tight">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
