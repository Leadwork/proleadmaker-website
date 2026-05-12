import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

interface VideoProps {
  videoUrl?: string;
  title?: string;
  poster?: string;
  isStandalone?: boolean;
}

const defaultVideos = [
  {
    title: "What is Pre-Qualified B2B Prospecting?",
    youtubeId: "dQw4w9WgXcQ",
    placeholder: true,
  },
  {
    title: "Our Triple-Verification Process",
    youtubeId: "dQw4w9WgXcQ",
    placeholder: true,
  },
  {
    title: "Client Success Stories & ROI",
    youtubeId: "dQw4w9WgXcQ",
    placeholder: true,
  },
];

export default function VideoSection({ 
  videoUrl, 
  title, 
  poster,
  isStandalone = true 
}: VideoProps) {
  // If not standalone (like in Hero), just render the player
  if (!isStandalone) {
    return (
      <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-inner group">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            title={title || "Video Player"}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-brand-purple/20 transition-all shadow-xl">
                <svg className="w-8 h-8 text-brand-purple ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-slate-400">Watch Intro Video</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Social Proof & Process"
            title="See ProLeadMaker in Action"
            subtitle="Learn why 600+ businesses trust us with their lead generation and outreach strategy."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {defaultVideos.map((video, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass rounded-3xl overflow-hidden hover-glow cursor-pointer group border border-slate-200">
                <div className="relative aspect-video bg-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-brand-purple group-hover:text-white transition-all shadow-lg">
                      <svg
                        className="w-6 h-6 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Coming Soon</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-base font-black text-indigo-950">
                    {video.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
