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
import { heroBackgroundVideo } from "../lib/cloudinaryMedia";

export default function Home() {
  const heroVideoSrc = heroBackgroundVideo.src ?? undefined;
  const heroVideoPoster = heroBackgroundVideo.poster ?? undefined;

  return (
    <main className="page-shell">
      <Navbar />

      <section className="relative overflow-hidden bg-black">
        {/* Background and overlay layers */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            className="h-full w-full object-cover opacity-35 object-[center_-40px]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            poster={heroVideoPoster}
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.15)_40%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.28)_18%,transparent_50%)]" />
        </div>

        {/* Purple accent gradients */}
        <div className="pointer-events-none absolute left-1/2 top-[-5rem] z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.48)_0%,rgba(107,14,206,0.24)_34%,rgba(107,14,206,0.1)_56%,rgba(107,14,206,0.03)_72%,transparent_84%)] blur-[130px] sm:h-[46rem] sm:w-[46rem]" />
        <div className="pointer-events-none absolute inset-x-0 top-[2rem] z-0 mx-auto h-[16rem] max-w-[78rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.18)_0%,rgba(107,14,206,0.08)_46%,transparent_78%)] blur-[95px]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,transparent_24%,transparent_72%,rgba(0,0,0,0.2)_100%)]" />

        {/* Content sections */}
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
