import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const reviewImages = [
  "adedamola00.png", "aishvaryaa_pooj-.png", "aishvaryaa_pooj.png", 
  "blackbirdhealth.png", "daniellemolitor.png", "deltataxllc.png", 
  "devonhector.png", "goodhumaninc-.png", "goodhumaninc.png", 
  "jononsighteyes.png", "joshdedmon.png", "keybaby3.png", 
  "leadatlas.png", "marshman78.png", "matthewboye.png", 
  "mikailatiyeh.png", "modou_02-.png", "modou_02.png", 
  "mo_mo_smith.png", "mustangdeet.png", "parkerwarren955.png", 
  "rmarstonaoa.png", "sachar07.png", "sandralee81.png", 
  "sauvaa.png", "smithbaaron.png", "s_hoefs.png", 
  "tbrew811.png", "trexlh99.png", "Upwork_Review_1.png", 
  "Upwork_Review_10.png", "Upwork_Review_11.png", "Upwork_Review_12.png", 
  "Upwork_Review_2.png", "Upwork_Review_3.png", "Upwork_Review_4.png", 
  "Upwork_Review_5.png", "Upwork_Review_6.png", "Upwork_Review_7.png", 
  "Upwork_Review_8.png", "Upwork_Review_9.png", "wheninrome.png"
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Wall of Trust"
            title="Proof That Our Leads Actually Convert"
            subtitle="We've helped 600+ businesses grow their pipeline. Here's a glimpse of the feedback from our clients on Fiverr and Upwork."
          />
        </ScrollReveal>

        {/* Masonry-style grid for reviews */}
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {reviewImages.map((img, i) => (
            <ScrollReveal key={i} delay={i % 10 * 50} direction="up">
              <div className="break-inside-avoid rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-purple/20 transition-all duration-300 group">
                <Image
                  src={`/images/reviews/${img}`}
                  alt={`Client Review ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Stats Footer */}
        <ScrollReveal delay={500}>
          <div className="mt-20 p-10 rounded-[3rem] bg-indigo-950 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-4">Ready to be our next success story?</h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto font-medium">Join 600+ businesses that are consistently booking meetings with our pre-qualified lead lists.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#free-sample" className="px-8 py-4 rounded-2xl bg-brand-purple text-white font-black hover:bg-brand-magenta transition-all hover:-translate-y-1 shadow-xl shadow-brand-purple/20">
                  🎁 Get FREE Sample Leads
                </a>
                <a href="/contact" className="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-black hover:bg-white/20 transition-all hover:-translate-y-1">
                  📞 Book a Strategy Call
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
