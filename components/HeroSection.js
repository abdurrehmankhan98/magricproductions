"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

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
      className="relative isolate overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-5rem] z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.48)_0%,rgba(107,14,206,0.24)_34%,rgba(107,14,206,0.1)_56%,rgba(107,14,206,0.03)_72%,transparent_84%)] blur-[130px] sm:h-[46rem] sm:w-[46rem]" />
      <div className="pointer-events-none absolute inset-x-0 top-[2rem] z-0 mx-auto h-[16rem] max-w-[78rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.18)_0%,rgba(107,14,206,0.08)_46%,transparent_78%)] blur-[95px]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,transparent_24%,transparent_72%,rgba(0,0,0,0.2)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-245 flex-col items-center px-4 text-center">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1
            ref={titleRef}
            className="hero-title-3d font-display mt-8 text-[3.05rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white opacity-0 sm:text-[4.5rem] lg:text-[6rem]"
          >
            Edits That Get You
            <br />
            <span
              ref={accentRef}
              className="hero-title-3d-accent inline-block bg-[linear-gradient(90deg,#FFFFFF_0%,#B372CF_100%)] bg-clip-text text-transparent opacity-0"
            >
              Noticed
            </span>
          </h1>

          <p
            ref={subRef}
            className="mt-7 max-w-[42rem] text-[1rem] leading-8 text-white/72 opacity-0 sm:text-[1.1rem]"
          >
            Turning your raw footage into attention-grabbing content!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
