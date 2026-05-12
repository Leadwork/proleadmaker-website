import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import Process from "@/components/home/Process";
import FreeSampleOffer from "@/components/home/FreeSampleOffer";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideoSection from "@/components/shared/VideoSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhoWeHelp />
      <Process />
      <FreeSampleOffer />
      <StatsSection />
      <TestimonialsSection />
      <VideoSection />
      <CTASection />
    </>
  );
}
