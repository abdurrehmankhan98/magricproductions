"use client";
import { useEffect, useRef, useState } from "react";
import { showcaseClips as clips } from "../src/lib/cloudinaryMedia";

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

const marqueeClips = [...clips, ...clips];

function ShowcaseCard({ clip, layoutClass, index }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(index < 4);
  const [isActive, setIsActive] = useState(index < 4);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsActive(visible);

        if (visible) {
          setShouldLoadVideo(true);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "160px 0px",
      }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => { 
    const video = videoRef.current;

    if (!video || !shouldLoadVideo) {
      return;
    }

    if (isActive) {
      const playPromise = video.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }

      return;
    }

    video.pause();
  }, [isActive, shouldLoadVideo]);

  return (
    <div
      ref={cardRef}
      className="flex flex-none flex-col items-center gap-5 px-2 sm:px-3"
    >
      <article
        className={`group relative overflow-hidden border border-white/10 bg-[#3d2461]/88 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-[1.02] ${layoutClass}`}
      >
        <div className={`absolute inset-0 ${clip.cardClass}`} />
        {shouldLoadVideo ? (
          <video
            ref={videoRef}
            className="relative z-10 h-full w-full object-cover"
            autoPlay={isActive}
            loop
            muted
            playsInline
            preload="none"
            aria-label={clip.title}
            poster={clip.poster || undefined}
          >
            <source src={clip.src} type="video/mp4" />
          </video>
        ) : (
          <div
            className="relative z-10 h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.16))] bg-cover bg-center"
            style={clip.poster ? { backgroundImage: `url('${clip.poster}')` } : undefined}
          />
        )}
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
