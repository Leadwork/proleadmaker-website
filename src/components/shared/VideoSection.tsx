import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const videos = [
  {
    title: "What is Signal-Based Prospecting?",
    youtubeId: "dQw4w9WgXcQ",
    placeholder: true,
  },
  {
    title: "How We Build Pre-Qualified Lead Lists",
    youtubeId: "dQw4w9WgXcQ",
    placeholder: true,
  },
  {
    title: "Client Success Stories & Results",
    youtubeId: "dQw4w9WgXcQ",
    placeholder: true,
  },
];

export default function VideoSection() {
  return (
    <section className="py-24 relative bg-dark-900/50">
      <div className="section-gradient-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Watch & Learn"
            title="See How We Work"
            subtitle="Learn about our signal-based approach to B2B lead intelligence. Custom videos coming soon."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {videos.map((video, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass rounded-2xl overflow-hidden hover-glow cursor-pointer group">
                {/* Video placeholder */}
                <div className="relative aspect-video bg-dark-700 flex items-center justify-center">
                  {video.placeholder ? (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-brand-purple/30 transition-all">
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-xs text-white/30">Video Coming Soon</p>
                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white">
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
