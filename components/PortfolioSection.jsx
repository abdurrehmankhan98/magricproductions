"use client";

import { useState } from "react";
import { Play } from "lucide-react";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "CJHXwa4B4gE";

  // YouTube URL with optimized parameters:
  // autoplay=1: Start playing immediately
  // vq=hd1080: Request HD 1080p quality
  // rel=0: Hide related videos from other channels
  // modestbranding=1: Hide YouTube logo
  // controls=1: Show player controls
  // fs=1: Allow fullscreen
  // mute=0: Ensure audio is unmuted (browser may still enforce mute)
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080&rel=0&modestbranding=1&controls=1&fs=1&mute=0&showinfo=0`;

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-black">
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
    <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-black">
      {/* Thumbnail Preview (Facade Pattern - Lazy Loading) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Custom Play Button - Click to Initialize Iframe with Autoplay */}
      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className="absolute inset-0 w-full h-full flex items-center justify-center z-10 cursor-pointer transition-opacity duration-200 hover:opacity-90"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-80 blur-xl" style={{width: '96px', height: '96px'}} />
          <div className="relative h-24 w-24 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg hover:shadow-xl transition-shadow">
            <Play size={48} fill="white" className="text-white ml-1" />
          </div>
        </div>
      </button>
    </div>
  );
}

function DummyCard() {
  return (
    <div className="glass-hover-card aspect-[16/9] w-full rounded-[32px] border border-white/5 bg-zinc-900/50" />
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-shell scroll-mt-28">
      <div className="section-inner">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Portfolio</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-[clamp(1.9rem,4vw,3.7rem)] font-bold leading-[1] tracking-[-0.045em] text-white">
            What your <span className="accent-text">trailer</span> can feel like.
          </h2>
          <p className="section-copy max-w-[42rem]">
            This section should show one strong hero example, then suggest variety around it. That keeps the focus on quality while still signaling range.
          </p>
        </div>

        <div className="relative mt-16 flex items-center justify-center">
          <div className="absolute left-[-20%] hidden w-[45%] scale-90 opacity-20 blur-[2px] lg:block">
            <DummyCard />
          </div>

          <div className="relative z-10 w-full max-w-[760px]">
            {/* Neon Glow Background - Deep Purple */}
            <div className="absolute -inset-[8px] rounded-[32px] bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 opacity-40 blur-2xl" />
            <div className="absolute -inset-[4px] rounded-[32px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 opacity-25 blur-lg" />
            <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 opacity-15 blur-md" />

            <article className="portfolio-glass-card relative z-10 w-full rounded-[32px] border border-purple-400/50 bg-[#141d23] p-4 shadow-2xl sm:p-6 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[24px] bg-[#0e1822] shadow-inner">
                <VideoPlayer />
              </div>
            </article>
          </div>

          <div className="absolute right-[-20%] hidden w-[45%] scale-90 opacity-20 blur-[2px] lg:block">
            <DummyCard />
          </div>
        </div>
      </div>
    </section>
  );
}
