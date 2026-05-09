"use client";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const accentRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const nodes = [titleRef.current, accentRef.current, subRef.current].filter(Boolean);

    nodes.forEach((node, index) => {
      node.animate(
        [
          { opacity: 0, transform: index === 1 ? "scale(0.92)" : "translateY(28px)" },
          { opacity: 1, transform: "translateY(0) scale(1)" },
        ],
        {
          duration: index === 1 ? 900 : 750,
          delay: 180 + index * 120,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
        }
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pb-0 pt-20 sm:pb-0 sm:pt-40 bg-transparent"
    >
      <div className="relative z-10 mx-auto flex max-w-245 flex-col items-center px-4 text-center">
        <div className="relative z-20 flex flex-col items-center text-center">
          <h1
            ref={titleRef}
            className="hero-heading-shadow relative z-20 hero-title-3d font-inter mt-8 font-semibold text-[clamp(2.4rem,8vw,3.4rem)] leading-[1.02] tracking-[-0.045em] text-white opacity-0 sm:text-[clamp(4.2rem,8.8vw,5.8rem)] sm:leading-[0.9] sm:tracking-[-0.065em]"
          >
            Premium Podcast & Video
            <br />
            <span
              ref={accentRef}
              className="hero-title-3d-accent mt-2 inline-block text-transparent"
            >
              Editing That Converts
            </span>
          </h1>

          <p
            ref={subRef}
            className="relative z-20 mt-7 max-w-[44rem] text-[1rem] leading-[1.75] text-white/72 opacity-0 sm:text-[1.08rem] sm:leading-8"
          >
            We turn raw footage into platform-ready episodes, shorts, and brand videos that build trust, increase retention, and drive qualified leads.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href="#contact" className="button-primary px-6 sm:px-7">
              Book a call
            </a>
            <a href="#portfolio" className="button-secondary px-6 sm:px-7">
              View work
            </a>
          </div>

          <p className="mt-4 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-[0.8rem]">
            Trusted by creators, coaches, and growth-focused brands
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
