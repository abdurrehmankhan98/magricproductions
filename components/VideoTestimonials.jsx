"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
];


function TestimonialCard({ name, role, quote, videoId }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="surface-card flex flex-col items-center text-center p-3 sm:p-4 min-h-[400px] h-full"
      style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, transparent 50%), rgba(18, 18, 24, 0.5)' }}
    >
      {/* Video / Thumbnail Area */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/40 group cursor-pointer mb-5" onClick={() => !isPlaying && setIsPlaying(true)}>
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={youtubeUrl}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700" style={{ backgroundImage: `url(${thumbnailUrl})` }} />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 shadow-2xl">
                <Play fill="white" className="text-white ml-0.5 sm:ml-1 w-5 h-5 sm:w-7 sm:h-7" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Quote Area */}
      <div className="flex-1 w-full space-y-4 flex flex-col items-center text-center">
        <p className="text-[1rem] sm:text-[1.125rem] font-medium leading-relaxed text-white text-balance max-w-[32rem]">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="mt-auto pt-5 border-t border-white/5 w-full flex flex-col items-center text-center">
          <h4
            className="text-lg font-bold text-white leading-none mb-1"
            style={{ letterSpacing: '0.025em' }}
          >
            {name}
          </h4>
          <p className="text-sm text-white/40 font-medium uppercase tracking-wider text-[10px]">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoTestimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 1;

  const next = () => {
    if (startIndex + itemsPerPage < videoTestimonials.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const visibleTestimonials = videoTestimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="section-shell relative overflow-hidden py-32 bg-black">
      <div className="section-inner max-w-[1240px]">
        {/* Header Area */}
        <div id="testimonials" className="mb-20 px-4 flex flex-col items-center text-center scroll-mt-32">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="section-eyebrow mb-6 mx-auto">Success Stories</div>
            <h2 className="text-white text-[clamp(1.8rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.2] font-display text-balance">
              Trusted by Real Clients, <br className="hidden sm:block" />
              <span className="accent-text">Backed by Real Results.</span>
            </h2>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-[900px] mx-auto px-4 sm:px-10">
          {/* Navigation Controls - Side Positions */}
          <div className="absolute left-0 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 z-30">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className={`h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full border border-purple-400/30 transition-all duration-300 backdrop-blur-md ${startIndex === 0
                  ? "bg-purple-900/20 opacity-20 cursor-not-allowed text-white/50"
                  : "bg-purple-600 hover:bg-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]"
                }`}
            >
              <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>

          <div className="absolute right-0 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 z-30">
            <button
              onClick={next}
              disabled={startIndex + itemsPerPage >= videoTestimonials.length}
              className={`h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full border border-purple-400/30 transition-all duration-300 backdrop-blur-md ${startIndex + itemsPerPage >= videoTestimonials.length
                  ? "bg-purple-900/20 opacity-20 cursor-not-allowed text-white/50"
                  : "bg-purple-600 hover:bg-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]"
                }`}
            >
              <ChevronRight size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>

          <div className="grid grid-cols-1 max-w-3xl mx-auto gap-8 relative min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  layout
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Indicators - Bottom Center */}
          <div className="flex items-center justify-center gap-2 mt-16">
            {Array.from({ length: videoTestimonials.length - itemsPerPage + 1 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-500 rounded-full ${startIndex === i ? "w-10 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
