"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Video, Mic, Briefcase, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Wedding Cinema",
    description: "Luxury wedding films with advanced color science and emotional storytelling that preserves your moments forever.",
    points: ["HDR COLOR GRADING", "CINEMATIC STORYTELLING", "IMMERSIVE SOUND"],
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
      className="surface-card service-card-spotlight group flex flex-col gap-6 p-8 opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 relative overflow-hidden bg-[#0a0c10]"
    >
      {/* Border Beam Animation */}
      <div className="border-beam" />

      {/* Spotlight Glow Effect */}
      <div className="service-card-spotlight-glow" />

      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 h-32 w-32 bg-purple-600/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Icon Container with Gradient */}
      <div className="relative z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/10 border border-white/10">
        {service.icon}
      </div>

      <div className="relative z-10 space-y-3">
        <h3 className="font-display text-[1.6rem] font-bold text-white tracking-tight">
          {service.title}
        </h3>
        <p className="text-[0.95rem] leading-relaxed text-white/50 max-w-[28ch]">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-2 space-y-2.5">
        {service.points.map((point) => (
          <div key={point} className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            <span className="text-[0.75rem] font-bold tracking-widest text-[#c084fc] uppercase">
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
    <section id="services" className="section-shell relative overflow-hidden">
      {/* Optional Page Glow */}
      <div className="absolute top-[20%] left-[-10%] h-[600px] w-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-inner relative z-10">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Our Services</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-[clamp(2.3rem,4.5vw,4.5rem)] font-bold leading-[1] text-white">
            Transformative <span className="text-purple-500">Service</span> Packages
          </h2>
          <p className="section-copy max-w-[40rem]">
            Tailored production solutions designed to elevate your brand presence and drive meaningful engagement across every platform.
          </p>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
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
