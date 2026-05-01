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
            className="hero-heading-shadow relative z-20 hero-title-3d font-inter mt-8 font-bold text-[clamp(2.6rem,8vw,3.2rem)] leading-[1.05] tracking-[-0.04em] text-white opacity-0 sm:text-[clamp(4.6rem,9vw,6.2rem)] sm:leading-[0.86] sm:tracking-[-0.08em]"
          >
            Edits That Get You
            <br />
            <span
              ref={accentRef}
              className="hero-title-3d-accent mt-2 inline-block text-transparent"
            >
              Noticed
            </span>
          </h1>

          <p
            ref={subRef}
            className="relative z-20 mt-7 max-w-[46rem] text-[1rem] leading-[1.65] text-white/72 opacity-0 sm:text-[1.1rem] sm:leading-8"
          >
            Podcast editing, short-form clips, and branded videos that turn raw footage into attention-grabbing content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
