import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import PodcastCarousel from "../../components/PodcastCarousel";
import StatsStrip from "../../components/StatsStrip";
import ServicesSection from "../../components/ServicesSection";
import BenefitsSection from "../../components/BenefitsSection";
import PortfolioSection from "../../components/PortfolioSection";
import TransformationSection from "../../components/TransformationSection";
import ProcessSection from "../../components/ProcessSection";
import ReviewsSection from "../../components/ReviewsSection";
import FaqSection from "../../components/FaqSection";
import ShareVisionSection from "../../components/ShareVisionSection";
import FooterSection from "../../components/FooterSection";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            className="h-full w-full object-cover opacity-35 object-[center_65px]"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.38)_46%,rgba(0,0,0,0.9)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.28)_18%,rgba(0,0,0,0.2)_62%,rgba(0,0,0,0.82)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <HeroSection />
        </div>

        <div className="relative z-10">
          <PodcastCarousel />
        </div>
      </section>

      <PortfolioSection />
      
      <StatsStrip />
      <ServicesSection />
        <BenefitsSection />
        <ReviewsSection />
        <TransformationSection />
        <ProcessSection />
        <FaqSection />
        <ShareVisionSection />
        <FooterSection />
    </main>
  );
}
