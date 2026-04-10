"use client";

import Image from "next/image";
import { useState } from "react";

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

/* Split reviews into two rows */
const row1 = [reviews[0], reviews[1], reviews[2]];
const row2 = [reviews[3], reviews[4], reviews[5], reviews[6]];

function ReviewRailItem({ name, role, quote, avatarSrc }) {
  return (
    <article className="relative flex w-[520px] flex-none items-center gap-6 sm:gap-8 rounded-[24px] border border-white/8 bg-white/[0.03] px-5 py-6 backdrop-blur-sm sm:w-[680px] sm:rounded-[28px] sm:px-7 sm:py-8 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/[0.05]">
      <div className="relative z-10 h-[90px] w-[90px] flex-none overflow-hidden rounded-[18px] border border-white/10 bg-[#150d1f] shadow-[0_14px_36px_rgba(0,0,0,0.32)] sm:h-[120px] sm:w-[120px] sm:rounded-[20px]">
        <Image src={avatarSrc} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(107,14,206,0.1),transparent_36%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      <div className="relative z-10 min-w-0 flex-1 text-left">
        <p className="text-[1rem] leading-[1.55] tracking-[-0.02em] text-white/90 sm:text-[1.2rem] sm:leading-[1.5]">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-4">
          <div className="text-[0.92rem] font-medium tracking-[-0.02em] text-white/92 sm:text-[1rem]">
            {name}
          </div>
          <div className="mt-0.5 text-[0.8rem] text-white/42 sm:text-[0.85rem]">
            {role}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsSection() {
  /* Each row is duplicated for seamless marquee loop */
  const loopedRow1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const loopedRow2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

  return (
    <section id="reviews" className="section-shell relative overflow-hidden scroll-mt-28">
      <div className="pointer-events-none absolute inset-x-0 top-[12%] mx-auto h-[22rem] max-w-[58rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.22)_0%,rgba(107,14,206,0.08)_48%,transparent_78%)] blur-[120px]" />

      <div className="section-inner max-w-[1400px]">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Proof</div>
          <h2 className="font-display max-w-none text-[clamp(2.2rem,5vw,4.1rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white">
            Hear Directly from our <span className="accent-text">Clients</span>
          </h2>
          <p className="section-copy max-w-[34rem]">
            Real feedback from creators and brands who trust MagricProductions to make their podcast content sharper, faster, and easier to ship.
          </p>
        </div>

        <div className="relative mt-[4.5rem] flex flex-col gap-5">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-black to-transparent sm:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-black to-transparent sm:w-36" />

          {/* Row 1 — slides LEFT (standard direction → visually moves right-to-left) */}
          <div className="marquee">
            <div className="marquee-track items-center gap-6 sm:gap-8 [animation-duration:20s] hover:[animation-play-state:paused]">
              {loopedRow1.map((review, index) => (
                <ReviewRailItem
                  key={`r1-${review.name}-${index}`}
                  {...review}
                />
              ))}
            </div>
          </div>

          {/* Row 2 — slides RIGHT (reverse direction → visually moves left-to-right) */}
          <div className="marquee">
            <div className="marquee-track-right items-center gap-6 sm:gap-8 [animation-duration:27s] hover:[animation-play-state:paused]">
              {loopedRow2.map((review, index) => (
                <ReviewRailItem
                  key={`r2-${review.name}-${index}`}
                  {...review}
                />
              ))}
            </div>
          </div>
          <div className="marquee">
            <div className="marquee-track items-center gap-5 [animation-duration:20s] hover:[animation-play-state:paused]">
              {loopedRow1.map((review, index) => (
                <ReviewRailItem
                  key={`r1-${review.name}-${index}`}
                  {...review}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
