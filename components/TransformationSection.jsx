import Image from "next/image";

export default function TransformationSection() {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-5rem] top-1/2 hidden h-[16rem] w-[16rem] -translate-y-1/2 rounded-full border border-dashed border-purple-400/35 lg:block" />
      <div className="pointer-events-none absolute right-[-5rem] top-1/2 hidden h-[14rem] w-[14rem] -translate-y-1/2 rounded-full border border-dashed border-purple-400/35 lg:block" />

      <div className="section-inner">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Before & After</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-[clamp(1.9rem,4vw,3.7rem)] font-bold leading-[1] tracking-[-0.045em] text-white">
            Turn your raw videos into <span className="accent-text">masterpieces</span>
          </h2>
          <p className="section-copy max-w-[38rem]">
            Show the contrast clearly: one side feels unpolished, the other feels branded, strategic, and ready to perform on social.
          </p>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-[860px] gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Before Column */}
          <div className="flex flex-col items-center group">
            <article className="relative w-full overflow-hidden rounded-[20px]">
              <div className="absolute inset-0 bg-[#0a0a0f]/60 backdrop-blur-[32px] transition-colors duration-500 group-hover:bg-[#0a0a0f]/80" />
              <div className="relative z-10 w-full overflow-hidden bg-black/20">
                <Image
                  src="/beforefull.gif"
                  alt="Raw video"
                  width={320}
                  height={564}
                  unoptimized
                  className="h-auto w-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </article>
            <div className="mt-8 flex flex-col items-center gap-1 transition-transform duration-500 group-hover:translate-y-[-4px]">
              <div className="font-display text-[0.85rem] font-bold uppercase tracking-[0.25em] text-[#a855f7]/80 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                Before
              </div>
              <div className="font-display text-[1.4rem] font-bold tracking-[-0.02em] text-white">
                Raw recording
              </div>
            </div>
          </div>

          {/* Transition Arrow */}
          <div className="flex justify-center relative z-10 -mt-20 sm:mt-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/5 bg-white/5 text-purple-400/80 shadow-xl backdrop-blur-md">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* After Column */}
          <div className="flex flex-col items-center group">
            <article className="relative w-full overflow-hidden rounded-[20px]">
              <div className="absolute inset-0 bg-[#0a0a0f]/60 backdrop-blur-[32px] transition-colors duration-500 group-hover:bg-[#0a0a0f]/80" />
              <div className="absolute inset-x-0 -top-20 h-40 rounded-full bg-purple-600/15 blur-[80px] opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 w-full overflow-hidden bg-black/20">
                <Image
                  src="/afterfull.gif"
                  alt="Edited video"
                  width={320}
                  height={569}
                  unoptimized
                  className="h-auto w-full object-cover transition-opacity duration-500 opacity-95 group-hover:opacity-100"
                />
              </div>
            </article>
            <div className="mt-8 flex flex-col items-center gap-1 transition-transform duration-500 group-hover:translate-y-[-4px]">
              <div className="font-display text-[0.85rem] font-bold uppercase tracking-[0.25em] text-[#a855f7]/80 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                After
              </div>
              <div className="font-display text-[1.4rem] font-bold tracking-[-0.02em] text-white">
                Branded social asset
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
