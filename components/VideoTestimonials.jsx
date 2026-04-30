"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronRight, ChevronLeft } from "lucide-react";

const videoTestimonials = [
  {
    id: 1,
    name: "Rayan Ghazanfar",
    role: "Content Creator",
    quote: "High-retention editing and strategic pacing that transformed my channel into a growth machine.",
    videoId: "OrKEviUQdS4",
  },
  {
    id: 2,
    name: "Janerbik",
    role: "Youtuber",
    quote: "Absolutely impressed with the quality and creativity. They understood our vision perfectly and turned raw footage into a high-converting masterpiece. Will definitely work again",
    videoId: "gUj0sWZvq6Q",
  },
  {
    id: 3,
    name: "Creative Partner",
    role: "Brand Client",
    quote: "The final edit felt sharp, polished, and ready for the audience. Every cut, transition, and visual choice made the story easier to watch and remember.",
    videoId: "X7-m-Ai-ChQ",
  },
];

// Card geometry constants (px)
const CARD_W = 620;
const SLOT_PAD = 20;       // horizontal padding each side of the slot
const SLOT_W = CARD_W + SLOT_PAD * 2; // 660px per slot

function TestimonialCard({ name, role, quote, videoId, isActive }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const uniqueId = `testimonial-${videoId}`;

  // Pause when card leaves center
  useEffect(() => {
    if (!isActive) setIsPlaying(false);
  }, [isActive]);

  useEffect(() => {
    const handleOtherPlay = (e) => {
      if (e.detail !== uniqueId) setIsPlaying(false);
    };
    window.addEventListener("magric:play-video", handleOtherPlay);
    return () => window.removeEventListener("magric:play-video", handleOtherPlay);
  }, [uniqueId]);

  useEffect(() => {
    if (isPlaying) {
      window.dispatchEvent(new CustomEvent("magric:play-video", { detail: uniqueId }));
    }
  }, [isPlaying, uniqueId]);

  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col transition-opacity duration-500 ${
        isActive
          ? "border-2 border-purple-500 opacity-100"
          : "border border-white/10 opacity-50 pointer-events-none"
      }`}
      style={{
        width: `${CARD_W}px`,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%), rgba(18,18,24,0.5)",
      }}
    >
      {/* Portrait 9:16 video */}
      <div
        className="relative w-full bg-black group aspect-[21/9]"
        style={{ cursor: isActive ? "pointer" : "default" }}
        onClick={() => isActive && !isPlaying && setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={youtubeUrl}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            />
            {isActive && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-transform duration-300 group-hover:scale-110">
                  <Play fill="white" className="ml-1 w-7 h-7" />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Content below video — always in DOM to avoid height jumps, opacity fades in/out */}
      <div
        className={`flex flex-col items-center text-center px-5 py-4 gap-3 transition-opacity duration-400 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-[0.84rem] font-medium leading-relaxed text-white/90 text-balance">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="pt-3 border-t border-white/5 w-full flex flex-col items-center">
          <h4
            className="text-base font-bold text-white leading-none mb-1"
            style={{ letterSpacing: "0.025em" }}
          >
            {name}
          </h4>
          <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef(null);
  const [viewportW, setViewportW] = useState(1040);

  // Keep track x calculation responsive to container width
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    setViewportW(el.offsetWidth);
    const ro = new ResizeObserver(() => setViewportW(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const next = () => {
    setActiveIndex((i) => (i + 1) % videoTestimonials.length);
  };
  const prev = () => {
    setActiveIndex((i) => (i - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const previousIndex = (activeIndex - 1 + videoTestimonials.length) % videoTestimonials.length;
  const nextIndex = (activeIndex + 1) % videoTestimonials.length;
  const visibleTestimonials = [
    videoTestimonials[previousIndex],
    videoTestimonials[activeIndex],
    videoTestimonials[nextIndex],
  ];

  // Center the active card inside the viewport
  const trackX = viewportW / 2 - (SLOT_W + SLOT_W / 2);

  return (
    <section className="section-shell relative overflow-hidden bg-black">
      <div className="section-inner max-w-[1240px]">

        {/* Header */}
        <div
          id="testimonials"
          className="mb-[var(--section-content-gap)] flex flex-col items-center text-center scroll-mt-32"
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-[clamp(1rem,2vw,1.35rem)]">
            <div className="section-eyebrow mx-auto">Success Stories</div>
            <h2 className="text-white text-[clamp(1.8rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.2] font-display text-balance">
              Trusted by Real Clients,{" "}
              <br className="hidden sm:block" />
              <span className="accent-text">Backed by Real Results.</span>
            </h2>
          </div>
        </div>

        {/* Carousel viewport — clips side cards */}
        <div
          ref={viewportRef}
          className="relative mx-auto overflow-hidden"
          style={{ maxWidth: "1040px" }}
        >
          {/* Sliding track */}
          <motion.div
            className="flex"
            animate={{ x: trackX }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {visibleTestimonials.map((testimonial, i) => (
              <div key={`${testimonial.id}-${i}`} style={{ padding: `0 ${SLOT_PAD}px`, flexShrink: 0 }}>
                <TestimonialCard {...testimonial} isActive={i === 1} />
              </div>
            ))}
          </motion.div>

          {/* Left nav — overlaps left partial card */}
          <button
            onClick={prev}
            className="absolute left-3 top-[35%] -translate-y-1/2 z-30 h-12 w-12 flex items-center justify-center rounded-full border border-purple-400/30 bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md transition-all duration-300 hover:bg-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right nav — overlaps right partial card */}
          <button
            onClick={next}
            className="absolute right-3 top-[35%] -translate-y-1/2 z-30 h-12 w-12 flex items-center justify-center rounded-full border border-purple-400/30 bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md transition-all duration-300 hover:bg-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
          {videoTestimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                activeIndex === i
                  ? "w-10 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
