import Image from "next/image";
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
        {/* Background Image */}
        <Image
          src="/make1.png"
          alt="Hero background"
          fill
          className="absolute inset-0 z-0 object-cover opacity-35"
          priority
        />

        {/* Purple accent gradients */}
        <div className="pointer-events-none absolute left-1/2 top-[-5rem] z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.48)_0%,rgba(107,14,206,0.24)_34%,rgba(107,14,206,0.1)_56%,rgba(107,14,206,0.03)_72%,transparent_84%)] blur-[130px] sm:h-[46rem] sm:w-[46rem]" />
        <div className="pointer-events-none absolute inset-x-0 top-[2rem] z-0 mx-auto h-[16rem] max-w-[78rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.18)_0%,rgba(107,14,206,0.08)_46%,transparent_78%)] blur-[95px]" />
        
        {/* Premium overlay layers */}
        {/* Dark gradient overlay with color tint */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(20,10,50,0.45)_0%,transparent_20%,transparent_70%,rgba(20,10,50,0.7)_100%)]" />
        
        {/* Vignette effect - dark edges */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.65)_100%)]" />
        
        {/* Subtle focal point - bright center spot */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.12)_0%,rgba(107,14,206,0.04)_35%,transparent_70%)] blur-[150px]" />

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
