"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

interface StatCard {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  decimal?: boolean;
  hasBar?: boolean;
}

const statCards: StatCard[] = [
  { icon: "👥", value: 617, suffix: "+", label: "Happy Clients" },
  { icon: "📊", value: 100, suffix: "K+", label: "Verified Leads Delivered" },
  { icon: "⭐", value: 49, suffix: "/5", label: "Client Rating", decimal: true },
  { icon: "💼", value: 1000, suffix: "+", label: "Completed Orders" },
  { icon: "🎯", value: 98, suffix: "%", label: "Data Accuracy", hasBar: true },
  { icon: "🏢", value: 150, suffix: "+", label: "Industries Covered" },
  { icon: "⚡", value: 0, suffix: "", label: "Fast Delivery" },
  { icon: "🛡️", value: 100, suffix: "%", label: "Manual Verified Data", hasBar: true },
];

function AnimatedCounter({ target, suffix, decimal, trigger }: {
  target: number;
  suffix: string;
  decimal?: boolean;
  trigger: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!trigger || target === 0) return;
    let start = performance.now();
    const duration = 2000;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setVal(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target]);

  if (target === 0) return <span className="text-3xl font-bold text-white">24–48h</span>;

  const displayed = decimal
    ? (val / 10).toFixed(1)
    : Math.floor(val).toLocaleString();

  return (
    <span className="text-3xl font-bold text-white">
      {displayed}
      {suffix}
    </span>
  );
}

function ProgressBar({ target, trigger }: { target: number; trigger: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const timer = setTimeout(() => setWidth(target), 300);
    return () => clearTimeout(timer);
  }, [trigger, target]);

  return (
    <div className="mt-2">
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-pink transition-all duration-[1800ms] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative bg-dark-900/50">
      <div className="section-gradient-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Our Track Record"
            title="Why Clients Trust Us"
            subtitle="Trusted by agencies, startups, and businesses worldwide on Fiverr, Upwork, and direct clients."
          />
        </ScrollReveal>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
        >
          {statCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="glass rounded-2xl p-5 text-center hover-glow cursor-default h-full">
                <div className="text-2xl mb-2">{card.icon}</div>
                <AnimatedCounter
                  target={card.value}
                  suffix={card.suffix}
                  decimal={card.decimal}
                  trigger={triggered}
                />
                <div className="text-xs text-white/40 mt-1">{card.label}</div>
                {card.hasBar && (
                  <ProgressBar target={card.value} trigger={triggered} />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Platform badges */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { icon: "⭐", name: "Fiverr", status: "Level 2 Seller · 5.0 Rating" },
              { icon: "🏆", name: "Upwork", status: "Top Rated · 100% Job Success" },
              { icon: "🎯", name: "Research Method", status: "Signal-Based + Manual Verified" },
              { icon: "🔄", name: "Guarantee", status: "Free Replacement on Invalid Data" },
            ].map((platform) => (
              <div
                key={platform.name}
                className="glass rounded-xl p-4 flex items-center gap-3 hover-glow cursor-default"
              >
                <span className="text-2xl">{platform.icon}</span>
                <div>
                  <div className="font-bold text-white text-sm">{platform.name}</div>
                  <div className="text-xs text-brand-purple-light">{platform.status}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
