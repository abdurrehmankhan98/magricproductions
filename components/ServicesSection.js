"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const services = [
  {
    title: "Engaging Podcast Trailers",
    bullets: [
      "Trailers that pack a punch and bring your brand to life.",
      "Branded edits that hook viewers from the start.",
    ],
    icon: (
      <svg viewBox="0 0 56 56" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="16" width="40" height="24" rx="2" />
        <path d="M8 22h40" />
        <path d="M13 10l7 6" />
        <path d="M23 10l7 6" />
        <path d="M33 10l7 6" />
        <path d="M23 27l10 5.5L23 38z" fill="currentColor" stroke="none" />
      </svg>
    ),
    gif: "/Trailer-Creation.gif",
  },
  {
    title: "Short Clips",
    bullets: [
      "Turn key moments into viral-ready clips.",
      "Branded videos that grab and hold attention.",
    ],
    icon: (
      <svg viewBox="0 0 56 56" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="12" width="30" height="32" rx="3" />
        <path d="m24 22 10 6-10 6z" fill="currentColor" stroke="none" />
        <path d="M43 18v20" />
        <path d="M46 18v20" />
      </svg>
    ),
    gif: "/Short-Clip-Edits.gif",
  },
  {
    title: "Podcast Management",
    bullets: [
      "From editing to publishing, we handle it all.",
      "High-quality, branded podcasts every time.",
    ],
    icon: (
      <svg viewBox="0 0 56 56" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="10" width="16" height="24" rx="8" />
        <path d="M15 24a13 13 0 0 0 26 0" />
        <path d="M28 37v7" />
        <path d="M20 46h16" />
      </svg>
    ),
    gif: "/Podcast-Management.gif",
  },
  {
    title: "Growth Plan - $0/Month",
    bullets: [
      "Pro edit, strategy, and expert guidance. All free.",
      "Just 5 spots each month. Ready to claim yours?",
    ],
    icon: (
      <svg viewBox="0 0 56 56" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="20" r="6" />
        <circle cx="38" cy="20" r="6" />
        <path d="M10 38c1.8-5.6 6.5-9 12.5-9S33.2 32.4 35 38" />
        <path d="M27 38c1.8-5.6 6.5-9 12.5-9 3.7 0 6.8 1.1 9 3.2" />
      </svg>
    ),
    gif: "/Growth-plan.gif",
  },
];

const bulletIcon = (
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#a855f7]">
    <svg viewBox="0 0 18 18" className="h-3 w-3 flex-none text-white" fill="currentColor">
      <path d="M4 2v14h2V9h7l-2-3 2-4H6V2z" />
    </svg>
  </div>
);

function ServiceCard({ service, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="surface-card service-card-spotlight group flex min-h-[320px] w-full min-w-0 flex-col items-start gap-5 p-7 opacity-0 transition-all duration-[220ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-purple-400/25 relative overflow-hidden"
    >
      {/* Border Beam Animation */}
      <div className="border-beam" />

      {/* Spotlight Glow Effect */}
      <div className="service-card-spotlight-glow" />

      <div
        className="relative z-20 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-[var(--accent-icon-bg)] shadow-[0_8px_16px_-4px_rgba(168,85,247,0.25)]"
      >
        <Image
          src={service.gif}
          alt={service.title}
          fill
          unoptimized
          className="object-cover mix-blend-luminosity opacity-90 transition-opacity group-hover:opacity-100"
        />
      </div>

      <div className="relative z-10 mt-1">
        <h3 className="font-display text-[1.9rem] font-bold leading-[1.04] tracking-[-0.04em] text-white whitespace-nowrap">
          {service.title}
        </h3>
      </div>

      <div className="relative z-10 mt-auto space-y-3">
        {service.bullets.map((bullet) => (
          <div key={bullet} className="flex items-start gap-[10px]">
            <span className="mt-[3px]">{bulletIcon}</span>
            <p className="text-[1rem] leading-7 text-white/70">
              {bullet}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="relative z-20 mt-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.12] px-5 py-2.5 text-[0.92rem] font-bold tracking-[-0.01em] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.05] hover:border-[#a855f7]/40 active:scale-[0.98]"
      >
        <span className="relative z-10">View Demo</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-[#a855f7] group-hover:text-white transition-colors duration-300">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default function ServicesSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    if (!cards.length) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Our Services</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-[clamp(1.9rem,4vw,3.7rem)] font-bold leading-[1] tracking-[-0.045em] text-white">
            We <span className="accent-text">offer</span> exactly what you want
          </h2>
          <p className="section-copy max-w-[40rem]">
            Each offer solves a specific growth job: launch stronger, publish faster, and repurpose every episode into assets people actually watch.
          </p>
        </div>

        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              cardRef={(element) => {
                cardsRef.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
