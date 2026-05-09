"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Video, Mic, Briefcase, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Short Form Mastery",
    description: "Viral Reels, TikToks, and YouTube Shorts engineered to stop the scroll and drive engagement.",
    points: ["HOOK-DRIVEN EDITS", "PLATFORM-READY PACE", "ENGAGEMENT FOCUS"],
    icon: <Video className="h-6 w-6 text-white" />,
  },
  {
    title: "Podcast Editing",
    description: "Multi-camera sync, noise removal, dynamic captions, and platform-ready cuts for YouTube and Spotify.",
    points: ["MULTI-CAM SYNC", "AUDIO ENHANCEMENT", "ANIMATED CAPTIONS"],
    icon: <Mic className="h-6 w-6 text-white" />,
  },
  {
    title: "Brand & Commercials",
    description: "High-converting ads, brand films, and corporate presentations designed to drive results.",
    points: ["BRAND IDENTITY", "MOTION GRAPHICS", "CTA OPTIMIZATION"],
    icon: <Briefcase className="h-6 w-6 text-white" />,
  },
  {
    title: "Growth Plan - $0/Month",
    description: "Pro edit, strategy, and expert guidance. All free for just 5 spots each month. Ready to claim yours?",
    points: ["STRATEGIC GUIDANCE", "PRO EDITING", "LIMITED SPOTS"],
    icon: <TrendingUp className="h-6 w-6 text-white" />,
  },
];

function ServiceCard({ service, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="surface-card group flex flex-col gap-6 p-8 opacity-100 transition-all duration-300 relative overflow-hidden bg-[#0a0c10]"
    >
      <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 border border-white/10">
        {service.icon}
      </div>

      <div className="relative z-10 space-y-4">
        <h3
          className="font-display text-[1.4rem] font-semibold leading-tight tracking-[-0.02em] text-white"
        >
          {service.title}
        </h3>
        <p className="text-[0.95rem] leading-relaxed text-white/68 max-w-[30ch]">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-2 space-y-2.5">
        {service.points.map((point) => (
          <div key={point} className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#c084fc] uppercase">
              {point}
            </span>
          </div>
        ))}
      </div>
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
        { y: 40 },
        {
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
    <section id="services" className="section-shell relative overflow-hidden">
      <div className="section-inner relative z-10">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Our Services</div>
          <h2
            className="section-title max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-white"
          >
            Service packages built for <span className="accent-text">real growth</span>
          </h2>
          <p className="section-copy max-w-[40rem]">
            High-retention editing systems tailored to your format, your audience, and your publishing goals.
          </p>
        </div>

        <div className="mt-[var(--section-content-gap)] grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
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
