"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    id: 1,
    videoId: "OrKEviUQdS4",
    thumbnail: "https://img.youtube.com/vi/OrKEviUQdS4/maxresdefault.jpg",
  },
  {
    id: 2,
    videoId: "gUj0sWZvq6Q",
    thumbnail: "https://img.youtube.com/vi/gUj0sWZvq6Q/maxresdefault.jpg",
  },
  {
    id: 3,
    videoId: "X7-m-Ai-ChQ",
    thumbnail: "https://img.youtube.com/vi/X7-m-Ai-ChQ/maxresdefault.jpg",
  },
];

// 10 sets of items for a super-long buffer to handle fast clicking without hitting boundaries
const videoTestimonials = Array(10).fill(items).flat();
const TOTAL_REAL = items.length;
const START_INDEX = TOTAL_REAL * 5; // Start in the absolute middle

const CARD_W = 860;
const MARGIN = 40;
const SLOT_W = CARD_W + MARGIN;

function TestimonialCard({ videoId, thumbnail, isActive }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`;

  useEffect(() => {
    if (!isActive) {
      const timeoutId = window.setTimeout(() => setIsPlaying(false), 0);
      return () => window.clearTimeout(timeoutId);
    }
  }, [isActive]);

  return (
    <div
      className="relative"
      style={{
        width: `${CARD_W}px`,
        aspectRatio: "16 / 9.5",
      }}
    >
      {isActive && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -inset-3 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.28)_0%,rgba(107,14,206,0.1)_40%,transparent_75%)] blur-lg opacity-100" />
        </div>
      )}

      <div
        className={`relative z-10 w-full h-full rounded-[24px] overflow-hidden bg-black group cursor-pointer transition-all duration-500 ${isActive
          ? "border border-[#9333ea]/35 shadow-[0_0_15px_rgba(147,51,234,0.28),0_0_24px_rgba(107,14,206,0.14)]"
          : "border-white/5 opacity-40 blur-[2px]"
          }`}
        onClick={() => isActive && !isPlaying && setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={youtubeUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 z-10"
          />
        ) : (
          <>
            <Image
              src={thumbnail}
              alt="Testimonial"
              fill
              sizes="(max-width: 768px) 100vw, 860px"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-30">
              {isActive && (
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78" fill="none" className="w-[60px] h-[60px] md:w-[90px] md:h-[90px]">
                    <circle cx="39" cy="39" r="39" fill="#a855f7" fillOpacity="0.9"></circle>
                    <path d="M57.5 36.4019C59.5 37.5566 59.5 40.4434 57.5 41.5981L32 56.3205C30 57.4752 27.5 56.0318 27.5 53.7224L27.5 24.2776C27.5 21.9682 30 20.5248 32 21.6795L57.5 36.4019Z" fill="white"></path>
                  </svg>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);
  const [containerW, setContainerW] = useState(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Only jump back to middle if we've moved far away from it
    // This makes the jump rare and completely invisible
    if (activeIndex >= TOTAL_REAL * 8 || activeIndex <= TOTAL_REAL * 2) {
      setIsTransitioning(false);
      const offset = activeIndex % TOTAL_REAL;
      setActiveIndex(TOTAL_REAL * 5 + offset);
    }
  };

  const trackX = containerW / 2 - (activeIndex * SLOT_W + CARD_W / 2);

  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="max-w-[1600px] mx-auto px-4">

        <div id="testimonials" className="mb-12 flex flex-col items-center text-center">
          <div className="section-eyebrow mb-10">
            Success Stories
          </div>
          <h2 className="section-title section-title--wide mb-6 max-w-none text-white">
            Trusted by Real Clients, <br />
            <span className="text-purple-500">Backed by Real Results.</span>
          </h2>
        </div>

        <div className="relative w-full pt-10 pb-24" ref={containerRef}>
          <div className="overflow-hidden py-10 -my-10">
            <motion.div
              className="flex items-center"
              initial={false}
              animate={{ x: trackX }}
              onAnimationComplete={handleTransitionEnd}
              transition={{
                duration: isTransitioning ? 0.8 : 0,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {videoTestimonials.map((t, i) => (
                <div key={i} style={{ marginRight: `${MARGIN}px`, flexShrink: 0 }}>
                  <TestimonialCard {...t} isActive={activeIndex === i} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="relative h-full w-full max-w-[1300px] mx-auto">
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 pointer-events-auto flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-purple-500/50 w-[48px] h-[48px] md:w-[80px] md:h-[80px] transition-all duration-300 active:scale-90 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none" className="w-[32px] h-[32px] md:w-[52px] md:h-[52px]">
                  <path d="M37.3971 19.9688C38.2696 19.2316 38.3485 17.9146 37.5702 17.0785L36.9686 16.4322C36.2276 15.6362 34.9864 15.5782 34.1744 16.3015L20.6563 28.3438C19.7706 29.1328 19.7623 30.5149 20.6385 31.3145L34.1018 43.6005C34.9393 44.3648 36.2441 44.2807 36.9766 43.4151L37.7071 42.5519C38.421 41.7083 38.3154 40.4456 37.4712 39.7323L27.5475 31.3469C26.602 30.548 26.602 29.0906 27.5475 28.2916L37.3971 19.9688Z" fill="#a855f7"></path>
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 pointer-events-auto flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-purple-500/50 w-[48px] h-[48px] md:w-[80px] md:h-[80px] transition-all duration-300 active:scale-90 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none" className="w-[32px] h-[32px] md:w-[52px] md:h-[52px]">
                  <path d="M22.6029 19.9688C21.7304 19.2316 21.6515 17.9146 22.4298 17.0785L23.0314 16.4322C23.7724 15.6362 25.0136 15.5782 25.8256 16.3015L39.3437 28.3438C40.2294 29.1328 40.2377 30.5149 39.3615 31.3145L25.8982 43.6005C25.0607 44.3648 23.7559 44.2807 23.0234 43.4151L22.2929 42.5519C21.579 41.7083 21.6846 40.4456 22.5288 39.7323L32.4525 31.3469C33.398 30.548 33.398 29.0906 32.4525 28.2916L22.6029 19.9688Z" fill="#a855f7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-16">
          {items.map((_, i) => {
            const isCurrent = (activeIndex % TOTAL_REAL) === i;
            return (
              <button
                key={i}
                onClick={() => {
                  setIsTransitioning(true);
                  setActiveIndex(TOTAL_REAL * 5 + i);
                }}
                className={`h-2 transition-all duration-700 rounded-full ${isCurrent ? "w-16 bg-purple-500" : "w-3 bg-white/10 hover:bg-white/20"
                  }`}
              />
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-purple-900/4 blur-[180px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
