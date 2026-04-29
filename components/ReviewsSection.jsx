"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, useAnimate } from "framer-motion";

const reviews = [
  {
    name: "Bilal Haider",
    role: "Trader & Content Creator",
    quote: "Great work, easy to collaborate with, Highly recommended!",
    avatarSrc: "/reviews/Bilal Haider.png",
  },
  {
    name: "Joe Danna",
    role: "Candidate for HCS",
    quote: "MagricProductions deliver top-quality edits, and excellent client support every time!",
    avatarSrc: "/reviews/Joe Danna.png",
  },
  {
    name: "Muhammad Etisham",
    role: "Amazon PPC & Private Label Expert",
    quote: "MagricProductions is talented, detail-oriented, high-quality work on time",
    avatarSrc: "/reviews/Muhammad Etisham.png",
  },
  {
    name: "Peter Thompson",
    role: "Real Estate Broker",
    quote: "Professional edits that made my listings stand out. Quick turnaround. Highly recommended!",
    avatarSrc: "/reviews/Peter Thompson.png",
  },
  {
    name: "Rayan Ghazanfar",
    role: "Digital Marketing Specialist",
    quote: "Professional service and outstanding results, would definitely work again!",
    avatarSrc: "/reviews/Rayan.png",
  },
  {
    name: "Sidra",
    role: "Founder Social Digency",
    quote: "Professional and efficient with great creative ideas. Highly recommended!",
    avatarSrc: "/reviews/Sidra.png",
  },
  {
    name: "Talha Yaseen",
    role: "Content Creator",
    quote: "Working with this team was a game-changer. They didn’t just edit videos — they elevated our entire brand presence",
    avatarSrc: "/reviews/Talha Yaseen.png",
  },
  {
    name: "Janerbik",
    role: "Youtuber",
    quote: "Absolutely impressed with the quality and creativity. They understood our vision perfectly and turned raw footage into a high-converting masterpiece. Will definitely work again",
    avatarSrc: "/reviews/Janerbik.png",
  },
  {
    name: "Zain Abbasi",
    role: "Music Producer",
    quote: "These guys know exactly how to turn content into conversions. Every detail was handled with precision — from pacing to visuals. Super reliable and easy to work with",
    avatarSrc: "/reviews/Zain Abbasi.jpeg",
  },
  {
    name: "Abdur Rehman",
    role: "Web Developer",
    quote: "Incredible experience from start to finish. They took our basic footage and transformed it into a polished, high-impact video that truly stands out. Great communication, fast delivery, and results that exceeded expectations.",
    avatarSrc: "/reviews/Abdur Rehman.jpeg",
  },
  {
    name: "Talha Malik",
    role: "AI Engineer",
    quote: "Incredible experience from start to finish. They took our basic footage and transformed it into a polished, high-impact video that truly stands out. Great communication, fast delivery, and results that exceeded expectations.",
    avatarSrc: "/reviews/Talha Malik.jpeg",
  },
];

import VerifiedBadge from "./VerifiedBadge";

function ReviewCard({ name, role, quote, avatarSrc }) {
  return (
    <article className="group relative flex flex-col gap-5 rounded-lg border border-white/10 bg-[#121212] p-7 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 shadow-inner">
          <Image src={avatarSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-[1.1rem] font-semibold text-white leading-tight tracking-normal">{name}</span>
            <VerifiedBadge size={20} />
          </div>
          <span className="text-[0.85rem] text-white/50 font-normal leading-tight mt-1 tracking-normal">{role}</span>
        </div>
      </div>
      <p className="text-[1.05rem] leading-relaxed text-white/80 font-normal">
        &ldquo;{quote}&rdquo;
      </p>
    </article>
  );
}

function ReviewColumn({ reviews, duration, direction = 'up' }) {
  const [scope] = useAnimate();
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
        autoplay: true,
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
  // Distribute unique reviews across 3 columns with offsets to avoid duplication
  const col1 = [...reviews];
  const col2 = [...reviews.slice(4), ...reviews.slice(0, 4)];
  const col3 = [...reviews.slice(8), ...reviews.slice(0, 8)];

  return (
    <section className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[12%] mx-auto h-[22rem] max-w-[58rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.22)_0%,rgba(107,14,206,0.08)_48%,transparent_78%)] blur-[120px]" />

      <div className="section-inner max-w-[1200px]">
        <div id="reviews" className="section-stack section-center mb-16 scroll-mt-32">
          <div className="section-eyebrow">Reviews</div>
          <h2 className="font-display max-w-none text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[1.1] tracking-normal text-white">
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
              <ReviewColumn reviews={col1} duration={60} direction="up" />
            </div>
            <div className="hidden md:block h-full">
              <ReviewColumn reviews={col2} duration={60} direction="down" />
            </div>
            <div className="hidden lg:block h-full">
              <ReviewColumn reviews={col3} duration={60} direction="up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
