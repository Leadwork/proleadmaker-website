interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-4">
        <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-purple-light">
          {label}
        </span>
      </div>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-4 ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-lg leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-white/50"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
