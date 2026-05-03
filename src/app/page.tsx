"use client";
import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import PodcastCarousel from "../../components/PodcastCarousel";
import StatsStrip from "../../components/StatsStrip";
import ServicesSection from "../../components/ServicesSection";
import BenefitsSection from "../../components/BenefitsSection";
import PortfolioSection from "../../components/PortfolioSection";
import LongFormSection from "../../components/LongFormSection";
import TransformationSection from "../../components/TransformationSection";
import ProcessSection from "../../components/ProcessSection";
import ReviewsSection from "../../components/ReviewsSection";
import FaqSection from "../../components/FaqSection";
import VideoTestimonials from "../../components/VideoTestimonials";
import ShareVisionSection from "../../components/ShareVisionSection";
import FooterSection from "../../components/FooterSection";
import ScrollToTopButton from "../../components/ScrollToTopButton";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

const MotionSection = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function Home() {

  const { scrollYProgress } = useScroll();
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main className="page-shell relative pb-24 md:pb-0">
      <Navbar />

      <section className="relative overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/make1.png"
          alt="Hero background"
          fill
          className="absolute inset-0 z-0 object-cover opacity-20"
          priority
        />

        {/* Purple accent gradients with Parallax */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="pointer-events-none absolute left-1/2 top-[-5rem] z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.35)_0%,rgba(107,14,206,0.18)_34%,rgba(107,14,206,0.07)_56%,rgba(107,14,206,0.02)_72%,transparent_84%)] blur-[130px] sm:h-[46rem] sm:w-[46rem]"
        />
        <motion.div
          style={{ y: yParallaxSlow }}
          className="pointer-events-none absolute inset-x-0 top-[2rem] z-0 mx-auto h-[16rem] max-w-[78rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.18)_0%,rgba(107,14,206,0.08)_46%,transparent_78%)] blur-[95px]"
        />

        {/* Premium overlay layers */}
        {/* Dark gradient overlay with color tint */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(20,10,50,0.45)_0%,transparent_20%,transparent_70%,rgba(20,10,50,0.9)_100%)]" />

        {/* Vignette effect - dark edges */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.65)_100%)]" />

        {/* Focused stage light behind heading */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="pointer-events-none absolute left-1/2 top-[10%] z-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.45)_0%,rgba(107,14,206,0.2)_45%,transparent_70%)] blur-[80px]"
        />

        {/* Pink accent bloom behind Noticed */}
        <div className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-[180px] w-[580px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(232,121,249,0.14)_0%,rgba(192,132,252,0.07)_45%,transparent_70%)] blur-[55px]" />

        {/* Noise texture overlay */}
        <div className="hero-noise pointer-events-none absolute inset-0 z-0" />

        {/* Content sections */}
        <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <HeroSection />
        </div>

        <div className="relative z-10">
          <PodcastCarousel />
        </div>
      </section>

      <MotionSection>
        <PortfolioSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <LongFormSection />
      </MotionSection>

      <MotionSection>
        <StatsStrip />
      </MotionSection>

      <MotionSection>
        <ServicesSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <BenefitsSection />
      </MotionSection>

      <MotionSection>
        <ReviewsSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <TransformationSection />
      </MotionSection>

      <MotionSection>
        <ProcessSection />
      </MotionSection>

      <MotionSection>
        <VideoTestimonials />
      </MotionSection>

      <MotionSection>
        <FaqSection />
      </MotionSection>

      <MotionSection>
        <ShareVisionSection />
      </MotionSection>

      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}
