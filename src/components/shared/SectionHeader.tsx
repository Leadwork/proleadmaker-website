interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-6">
        <div className="w-2 h-2 rounded-full bg-brand-purple animate-blink" />
        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-purple">
          {label}
        </span>
      </div>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight mb-6 text-indigo-950`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-lg font-medium leading-relaxed text-slate-500 ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
