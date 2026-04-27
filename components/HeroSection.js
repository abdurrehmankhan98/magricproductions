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
      className="relative overflow-hidden pb-0 pt-20 sm:pb-0 sm:pt-40 bg-transparent"
    >
      <div className="relative z-10 mx-auto flex max-w-245 flex-col items-center px-4 text-center">
        <div className="relative z-20 flex flex-col items-center text-center">
          <h1
            ref={titleRef}
            className="hero-heading-shadow relative z-20 hero-title-3d font-display mt-8 text-[3.05rem] font-semibold leading-[1.1] text-white opacity-0 sm:text-[4.5rem] lg:text-[6rem]"
          >
            Edits That Get You
            <br />
            <span
              ref={accentRef}
              className="hero-title-3d-accent inline-block bg-[linear-gradient(180deg,#FFFFFF_0%,#F8ECFF_46%,#B372CF_74%,#09040D_128%)] bg-clip-text text-transparent opacity-0"
            >
              Noticed
            </span>
          </h1>

          <p
            ref={subRef}
            className="relative z-20 mt-7 max-w-[42rem] text-[1rem] leading-8 text-white/72 opacity-0 sm:text-[1.1rem]"
          >
            Turning your raw footage into attention-grabbing content!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
