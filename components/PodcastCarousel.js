"use client";
import { useEffect, useRef } from "react";

const clips = [
  {
    title: "Podcast Clip 01",
    textClass: "text-[#ff7a00]",
    cardClass:
      "bg-[radial-gradient(circle_at_80%_20%,rgba(255,120,0,0.6),transparent_18%),linear-gradient(180deg,#080808_0%,#101010_100%)]",
    video: "/1.mp4",
  },
  {
    title: "Podcast Clip 02",
    textClass: "text-white",
    cardClass: "bg-[linear-gradient(180deg,#17141c_0%,#242633_100%)]",
    video: "/2.mp4",
  },
  {
    title: "Podcast Clip 03",
    textClass: "text-[#cf5a23]",
    cardClass: "bg-[linear-gradient(180deg,#f7e39c_0%,#eddca6_42%,#9aabc0_100%)]",
    video: "/3.mp4",
  },
  {
    title: "Podcast Clip 04",
    textClass: "text-[#ff3b30]",
    cardClass: "bg-[linear-gradient(180deg,#413529_0%,#1a1a1a_100%)]",
    video: "/4.mp4",
  },
];

const cardLayouts = [
  "mt-6 h-[300px] w-[172px] rotate-[-10deg] rounded-[32px] sm:h-[370px] sm:w-[214px]",
  "mt-3 h-[242px] w-[144px] rotate-[-7deg] rounded-[26px] sm:h-[296px] sm:w-[174px]",
  "mt-10 h-[214px] w-[122px] rotate-[-3deg] rounded-[22px] sm:h-[258px] sm:w-[144px]",
  "mt-10 h-[214px] w-[122px] rotate-[3deg] rounded-[22px] sm:h-[258px] sm:w-[144px]",
  "mt-3 h-[242px] w-[144px] rotate-[7deg] rounded-[26px] sm:h-[296px] sm:w-[174px]",
  "mt-6 h-[300px] w-[172px] rotate-[10deg] rounded-[32px] sm:h-[370px] sm:w-[214px]",
];

const marqueeClips = [...clips, ...clips, ...clips];

function ShowcaseCard({ clip, layoutClass, index }) {
  return (
    <div className="flex flex-none flex-col items-center gap-5 px-2 sm:px-3">
      <article
        className={`group relative overflow-hidden border border-white/10 bg-[#130d1d]/88 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-[1.02] ${layoutClass}`}
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

      <div className="text-center">
        <div className="text-[0.9rem] font-semibold tracking-[-0.03em] text-[#f97316] sm:text-[1rem]">
          #{String((index % clips.length) + 1).padStart(2, "0")}
        </div>
        <div className="mt-1 max-w-[11rem] text-[0.86rem] leading-5 tracking-[-0.02em] text-white/68 sm:text-[0.95rem] sm:leading-6">
          {clip.title}
        </div>
      </div>
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
    <section className="relative -mt-8 w-full overflow-hidden pb-[4.5rem] pt-10">
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] z-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.42)_0%,rgba(107,14,206,0.22)_34%,rgba(107,14,206,0.08)_58%,transparent_82%)] blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[3rem] z-0 mx-auto h-[12rem] max-w-[76rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.18)_0%,rgba(107,14,206,0.07)_48%,transparent_78%)] blur-[90px]" />

      <div className="marquee relative z-10 mt-8 sm:mt-10">
        <div
          ref={scrollRef}
          className="marquee-track items-start gap-1 [animation-duration:34s] hover:[animation-play-state:paused]"
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
