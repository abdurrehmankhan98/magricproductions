"use client";

import { useState } from "react";
import { Play } from "lucide-react";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "i-QhycnlSk0";

  // YouTube URL with optimized parameters:
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080&rel=0&modestbranding=1&controls=1&fs=1&mute=0&showinfo=0`;

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black shadow-2xl">
        <iframe
          width="100%"
          height="100%"
          src={youtubeUrl}
          title="Portfolio Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ display: 'block' }}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsPlaying(false)}
          className="absolute top-4 right-4 z-50 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black">
      {/* Thumbnail Preview (Facade Pattern - Lazy Loading) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>

      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className="absolute inset-0 w-full h-full flex items-center justify-center z-10 cursor-pointer group"
      >
        <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 blur-2xl group-hover:opacity-50 transition-opacity duration-500 w-20 h-20 sm:w-32 sm:h-32" />
          <div className="relative h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:bg-purple-600 group-hover:border-purple-400">
            <Play fill="white" className="text-white ml-1 sm:ml-1.5 w-7 h-7 sm:w-12 sm:h-12" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-shell scroll-mt-28">
      <div className="section-inner">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Production</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none text-[clamp(2.3rem,4.5vw,4.5rem)] font-semibold leading-[1.1] tracking-normal text-white">
            Premium Video Editing for <br />
            <span className="accent-text">High-Converting Content</span>
          </h2>
          <p className="section-copy max-w-[42rem]">
            We craft high-converting videos through strategic editing, storytelling, and performance-driven visuals—tailored to your brand, audience, and goals.
          </p>
        </div>

        <div className="relative mt-16 flex items-center justify-center">
          <div className="absolute left-[-20%] hidden w-[45%] scale-90 opacity-20 blur-[4px] lg:block grayscale">
            <div className="surface-card aspect-[16/9] w-full rounded-xl border border-white/5 bg-zinc-900/50" />
          </div>

          <div className="relative z-10 w-full max-w-[920px] group transition-transform duration-700 hover:scale-[1.02]">

            <article className="relative z-10 w-full rounded-xl overflow-hidden border border-[#9333ea]/30 shadow-[0_0_25px_rgba(147,51,234,0.45)] transition-all duration-500 isolation-auto" style={{ transform: 'translateZ(0)' }}>
              <VideoPlayer />
            </article>
          </div>

          <div className="absolute right-[-20%] hidden w-[45%] scale-90 opacity-20 blur-[4px] lg:block grayscale">
            <div className="surface-card aspect-[16/9] w-full rounded-xl border border-white/5 bg-zinc-900/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
