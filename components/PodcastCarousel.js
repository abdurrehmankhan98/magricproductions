"use client";
import { useEffect, useRef } from "react";

const clips = [
  {
    title: "Podcast Clip 01",
    textClass: "text-[#ff7a00]",
    cardClass: "bg-[#3d2461]",
    video: "/1.mp4",
  },
  {
    title: "Podcast Clip 02",
    textClass: "text-white",
    cardClass: "bg-[#3d2461]",
    video: "/2.mp4",
  },
  {
    title: "Podcast Clip 03",
    textClass: "text-[#cf5a23]",
    cardClass: "bg-[#3d2461]",
    video: "/3.mp4",
  },
  {
    title: "Podcast Clip 04",
    textClass: "text-[#ff3b30]",
    cardClass: "bg-[#3d2461]",
    video: "/4.mp4",
  },
  {
    title: "Podcast Clip 05",
    textClass: "text-[#00d9ff]",
    cardClass: "bg-[#3d2461]",
    video: "/5.mp4",
  },
  {
    title: "Podcast Clip 06",
    textClass: "text-[#ff00ff]",
    cardClass: "bg-[#3d2461]",
    video: "/6.mp4",
  },
  {
    title: "Podcast Clip 07",
    textClass: "text-[#00ff88]",
    cardClass: "bg-[#3d2461]",
    video: "/7.mp4",
  },
  {
    title: "Podcast Clip 08",
    textClass: "text-[#ffaa00]",
    cardClass: "bg-[#3d2461]",
    video: "/8.mp4",
  },
];

const cardLayouts = [
  "mt-6 h-[320px] w-[180px] rounded-[26px] sm:h-[400px] sm:w-[225px] sm:rounded-[32px]",
  "mt-6 h-[320px] w-[180px] rounded-[26px] sm:h-[400px] sm:w-[225px] sm:rounded-[32px]",
  "mt-6 h-[320px] w-[180px] rounded-[26px] sm:h-[400px] sm:w-[225px] sm:rounded-[32px]",
  "mt-6 h-[320px] w-[180px] rounded-[26px] sm:h-[400px] sm:w-[225px] sm:rounded-[32px]",
  "mt-6 h-[320px] w-[180px] rounded-[26px] sm:h-[400px] sm:w-[225px] sm:rounded-[32px]",
  "mt-6 h-[320px] w-[180px] rounded-[26px] sm:h-[400px] sm:w-[225px] sm:rounded-[32px]",
  "mt-6 h-[320px] w-[180px] rounded-[26px] sm:h-[400px] sm:w-[225px] sm:rounded-[32px]",
  "mt-6 h-[320px] w-[180px] rounded-[26px] sm:h-[400px] sm:w-[225px] sm:rounded-[32px]",
];

const marqueeClips = [...clips, ...clips, ...clips];

function ShowcaseCard({ clip, layoutClass, index }) {
  return (
    <div className="flex flex-none flex-col items-center gap-5 px-2 sm:px-3">
      <article
        className={`group relative overflow-hidden border border-white/10 bg-[#3d2461]/88 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-[1.02] ${layoutClass}`}
      >
        <div className={`absolute inset-0 ${clip.cardClass}`} />
        <video
          className="relative z-10 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={clip.title}
        >
          <source src={clip.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%,rgba(0,0,0,0.18)_100%)]" />
      </article>
    </div>
  );
}

const PodcastCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    Array.from(scrollRef.current.children).forEach((card, index) => {
      card.animate(
        [
          { opacity: 0, transform: "translateY(36px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 700,
          delay: 120 + index * 60,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
        }
      );
    });
  }, []);

  return (
    <section className="relative -mt-8 w-full overflow-hidden pb-[4.5rem] pt-10 bg-transparent">
      <div className="marquee relative z-10 mt-8 sm:mt-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[8%] before:bg-[linear-gradient(to_right,rgba(0,0,0,1),transparent)] before:z-20 before:pointer-events-none after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[8%] after:bg-[linear-gradient(to_left,rgba(0,0,0,1),transparent)] after:z-20 after:pointer-events-none">
        <div
          ref={scrollRef}
          className="marquee-track items-start gap-1 [animation-duration:48s] hover:[animation-play-state:paused]"
        >
          {marqueeClips.map((clip, index) => (
            <ShowcaseCard
              key={`${clip.title}-${index}`}
              clip={clip}
              index={index}
              layoutClass={cardLayouts[index % cardLayouts.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastCarousel;
