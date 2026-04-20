"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, ChevronLeft } from "lucide-react";

const videoTestimonials = [
  {
    id: 1,
    name: "William Nazarkewich",
    role: "Content Creator",
    quote: "My results and online presence went through the roof more or less overnight, mind-blowing!",
    videoId: "q_p04Jmdxzs",
  },
  {
    id: 2,
    name: "Scott Henry",
    role: "Lead Generation Consultant",
    quote: "These guy don't mess around. we saw results from month one. If you want to grow your business, look no further.",
    videoId: "CJHXwa4B4gE",
  },
  {
    id: 3,
    name: "Joe Danna",
    role: "Candidate for HCS",
    quote: "MagricProductions deliver top-quality edits, and excellent client support every time!",
    videoId: "q_p04Jmdxzs", // Placeholder ID
  },
  {
    id: 4,
    name: "Bilal Haider",
    role: "Trader & Content Creator",
    quote: "Great work, easy to collaborate with, Highly recommended!",
    videoId: "CJHXwa4B4gE", // Placeholder ID
  }
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
      className="surface-card flex flex-col p-6 min-h-[520px] h-full"
    >
      {/* Video / Thumbnail Area */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40 group cursor-pointer mb-8" onClick={() => !isPlaying && setIsPlaying(true)}>
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
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${thumbnailUrl})` }} />
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-purple-600 transition-all duration-300 group-hover:border-purple-400 group-hover:scale-110 shadow-2xl">
                <Play size={28} fill="white" className="text-white ml-1" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Quote Area */}
      <div className="flex-1 space-y-6 flex flex-col">
        <p className="text-xl font-medium leading-relaxed text-white/90">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="mt-auto pt-6 border-t border-white/5">
          <h4 className="text-lg font-bold text-white tracking-tight leading-none mb-1">{name}</h4>
          <p className="text-sm text-white/40 font-medium uppercase tracking-wider text-[10px]">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoTestimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

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
        <div className="mb-20 px-4 flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto">
              <div className="section-eyebrow mb-6">Success Stories</div>
            <h2 className="text-white text-[clamp(1.8rem,3.5vw,3.8rem)] font-bold tracking-tight leading-[1.1] font-display whitespace-nowrap">
              Don't just take our word for it, <br />
              <span className="accent-text">real clients, real results.</span>
            </h2>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="relative px-4">
          {/* Navigation Controls - Side Positions */}
          <div className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-30">
            <button 
              onClick={prev}
              disabled={startIndex === 0}
              className={`h-14 w-14 flex items-center justify-center rounded-full border border-purple-400/30 transition-all duration-300 backdrop-blur-md ${
                startIndex === 0 
                ? "bg-purple-900/20 opacity-20 cursor-not-allowed text-white/50" 
                : "bg-purple-600 hover:bg-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]"
              }`}
            >
              <ChevronLeft size={28} />
            </button>
          </div>

          <div className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-30">
            <button 
              onClick={next}
              disabled={startIndex + itemsPerPage >= videoTestimonials.length}
              className={`h-14 w-14 flex items-center justify-center rounded-full border border-purple-400/30 transition-all duration-300 backdrop-blur-md ${
                startIndex + itemsPerPage >= videoTestimonials.length
                ? "bg-purple-900/20 opacity-20 cursor-not-allowed text-white/50" 
                : "bg-purple-600 hover:bg-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]"
              }`}
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative min-h-[520px]">
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
