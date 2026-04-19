"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const longFormVideos = [
  { id: "HpVXJLJlheY", title: "Productivity Strategy" },
  { id: "CJHXwa4B4gE", title: "Global Expansion" },
  { id: "CJHXwa4B4gE", title: "Financial Systems" },
  { id: "CJHXwa4B4gE", title: "Community Growth" },
];

function LongFormVideoPlayer({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080&rel=0&modestbranding=1&controls=1&fs=1&mute=0&showinfo=0`;

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black shadow-2xl">
        <iframe
          width="100%"
          height="100%"
          src={youtubeUrl}
          title="Long Form Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="block"
        />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(false);
          }}
          className="absolute top-3 right-3 z-50 h-8 w-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-md border border-white/10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#0c0c0c] group cursor-pointer" onClick={() => setIsPlaying(true)}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 blur-xl group-hover:opacity-60 transition-opacity duration-500" style={{ width: '64px', height: '64px' }} />
          <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:bg-purple-600 group-hover:border-purple-400">
            <Play size={28} fill="white" className="text-white ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LongFormSection() {
  return (
    <section id="long-form" className="section-shell scroll-mt-28 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="neon-glow-accent glow-purple top-1/4 left-1/4 scale-[2]" />
        <div className="neon-glow-accent glow-purple bottom-1/4 right-1/4 scale-[2]" />
      </div>

      <div className="section-inner relative z-10">
        <div className="section-stack section-center mb-16">
          <div className="section-eyebrow">Production</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-[-0.05em] text-white">
            Long Form <span className="accent-text">Videos</span>
          </h2>
          <p className="section-copy mt-6">
            High-fidelity edits for full-length content that keeps audiences engaged from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-[1100px] mx-auto">
          {longFormVideos.map((video, index) => (
            <div key={index} className="group transition-all duration-500 hover:-translate-y-1">
              <div className="relative">
                {/* Glow effect only on hover, otherwise kept clean */}
                <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                <LongFormVideoPlayer videoId={video.id} />
              </div>
              <div className="mt-5 px-1">
                <h3 className="text-white font-display text-xl font-medium tracking-tight group-hover:text-purple-400 transition-colors uppercase">{video.title}</h3>
                <div className="h-0.5 w-12 bg-purple-600 mt-2 rounded-full opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
