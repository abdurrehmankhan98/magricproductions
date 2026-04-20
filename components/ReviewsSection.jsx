"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { animate, useAnimate } from "framer-motion";

const reviews = [
  {
    name: "Bilal Haider",
    role: "Trader & Content Creator",
    quote:
      "Great work, easy to collaborate with, Highly recommended!",
    avatarSrc: "/reviews/Bilal Haider.png",
  },
  {
    name: "Joe Danna",
    role: "Candidate for HCS",
    quote:
      "MagricProductions deliver top-quality edits, and excellent client support every time!",
    avatarSrc: "/reviews/Joe Danna.png",
  },
  {
    name: "Muhammad Etisham",
    role: "Amazon PPC & Private Label Expert",
    quote:
      "MagricProductions is talented, detail-oriented, high-quality work on time",
    avatarSrc: "/reviews/Muhammad Etisham.png",
  },
  {
    name: "Peter Thompson",
    role: "Real Estate Broker",
    quote:
      "Professional edits that made my listings stand out. Quick turnaround. Highly recommended!",
    avatarSrc: "/reviews/Peter Thompson.png",
  },
  {
    name: "Rayan Ghazanfar",
    role: "Digital Marketing Specialist",
    quote:
      "Professional service and outstanding results, would definitely work again!",
    avatarSrc: "/reviews/Rayan.png",
  },
  {
    name: "Sidra",
    role: "Founder Social Digency",
    quote:
      "Professional and efficient with great creative ideas. Highly recommended!",
    avatarSrc: "/reviews/Sidra.png",
  },
  {
    name: "Talha Yaseen",
    role: "Content Creator",
    quote:
      "Building MagricProductions with a passion for quality and client satisfaction!",
    avatarSrc: "/reviews/Talha Yaseen.png",
  },
  {
    name: "Peter Thompson",
    role: "Real Estate Broker",
    quote:
      "Professional edits that made my listings stand out. Quick turnaround. Highly recommended!",
    avatarSrc: "/reviews/Peter Thompson.png",
  },
  {
    name: "Rayan Ghazanfar",
    role: "Digital Marketing Specialist",
    quote:
      "Professional service and outstanding results, would definitely work again!",
    avatarSrc: "/reviews/Rayan.png",
  },
  {
    name: "Sidra",
    role: "Founder Social Digency",
    quote:
      "Professional and efficient with great creative ideas. Highly recommended!",
    avatarSrc: "/reviews/Sidra.png",
  },
  {
    name: "Talha Yaseen",
    role: "Content Creator",
    quote:
      "Building MagricProductions with a passion for quality and client satisfaction!",
    avatarSrc: "/reviews/Talha Yaseen.png",
  },
];



function ReviewCard({ name, role, quote, avatarSrc }) {
  return (
    <article className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#121212] p-7 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 shadow-inner">
          <Image src={avatarSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-[1.1rem] font-bold text-white leading-tight tracking-tight">{name}</span>
          <span className="text-[0.85rem] text-white/50 font-medium leading-tight mt-1">{role}</span>
        </div>
      </div>
      <p className="text-[1.05rem] leading-relaxed text-white/80 italic font-medium">
        &ldquo;{quote}&rdquo;
      </p>
    </article>
  );
}

function ReviewColumn({ reviews, duration, direction = 'up', pauseOnHover = true }) {
  const [scope, animateScope] = useAnimate();
  const animationRef = useRef(null);
  const loopedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const yStart = direction === 'up' ? "0%" : "-50%";
    const yEnd = direction === 'up' ? "-50%" : "0%";

    animationRef.current = animate(
      scope.current,
      { y: [yStart, yEnd] },
      {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }
    );

    return () => animationRef.current?.stop();
  }, [duration, direction, scope]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.speed = 0.2;
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.speed = 1;
    }
  };

  return (
    <div
      className="relative h-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scope}
        className="flex flex-col gap-4 pb-4"
        style={{ willChange: 'transform' }}
      >
        {loopedReviews.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} {...review} />
        ))}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  // Distribute reviews into 3 columns
  const col1 = [reviews[0], reviews[1], reviews[2], reviews[3]];
  const col2 = [reviews[4], reviews[5], reviews[6], reviews[7]];
  const col3 = [reviews[8], reviews[9], reviews[10], reviews[0]];

  return (
    <section id="reviews" className="section-shell relative overflow-hidden scroll-mt-28">
      <div className="pointer-events-none absolute inset-x-0 top-[12%] mx-auto h-[22rem] max-w-[58rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.22)_0%,rgba(107,14,206,0.08)_48%,transparent_78%)] blur-[120px]" />

      <div className="section-inner max-w-[1200px]">
        <div className="section-stack section-center mb-16">
          <div className="section-eyebrow">Proof</div>
          <h2 className="font-display max-w-none text-[clamp(2.2rem,5vw,4.1rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white">
            Hear Directly from our <span className="accent-text">Clients</span>
          </h2>
          <p className="section-copy max-w-[34rem]">
            Real feedback from creators and brands who trust MagricProductions to make their podcast content sharper, faster, and easier to ship.
          </p>
        </div>

        {/* Triple-column Masonry Grid */}
        <div className="relative h-[720px] w-full overflow-hidden">
          {/* Black Fade Overlays */}
          <div className="absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

          {/* Subtle Edge Masking (Reduced from 5% to 3%) */}
          <div className="absolute inset-0 z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_3%,black_97%,transparent)]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full px-4">
            <div className="h-full">
              <ReviewColumn reviews={col1} duration={20} direction="up" />
            </div>
            <div className="hidden md:block h-full">
              <ReviewColumn reviews={col2} duration={25} direction="down" />
            </div>
            <div className="hidden lg:block h-full">
              <ReviewColumn reviews={col3} duration={22} direction="up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
