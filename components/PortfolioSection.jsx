"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

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

          <article className="portfolio-glass-card relative z-10 w-full max-w-[760px] rounded-[32px] border border-white/10 bg-[#141d23] p-4 shadow-2xl sm:p-6">
            <div className="relative overflow-hidden rounded-[24px] bg-[#0e1822] shadow-inner">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/Screenshot-2025-02-20-015931-min-e1739999114301.png"
                  alt="Podcast trailer example"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.08))]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    className="portfolio-glass-button group flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 text-white shadow-[0_0_50px_rgba(168,85,247,0.32)] transition-all hover:scale-110 hover:shadow-[0_0_60px_rgba(168,85,247,0.48)]"
                  >
                    <Play
                      size={32}
                      fill="currentColor"
                      className="ml-1 transition-transform group-hover:scale-110"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="absolute right-[-20%] hidden w-[45%] scale-90 opacity-20 blur-[2px] lg:block">
            <DummyCard />
          </div>

          <div className="absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 justify-between px-2 sm:-mx-6 sm:px-0">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-gradient-to-r hover:from-violet-400 hover:via-purple-500 hover:to-fuchsia-400 hover:text-white">
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-gradient-to-r hover:from-violet-400 hover:via-purple-500 hover:to-fuchsia-400 hover:text-white">
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
