import Image from "next/image";

export default function TransformationSection() {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute left-[-5rem] top-1/2 hidden h-[16rem] w-[16rem] -translate-y-1/2 rounded-full border border-dashed border-purple-400/35 lg:block" />
      <div className="pointer-events-none absolute right-[-5rem] top-1/2 hidden h-[14rem] w-[14rem] -translate-y-1/2 rounded-full border border-dashed border-purple-400/35 lg:block" />

      <div className="section-inner">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Before & After</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none text-[clamp(2.3rem,4.5vw,4.5rem)] font-semibold leading-[1.1] tracking-normal text-white">
            Turn your raw videos into <br />
            <span className="accent-text">masterpieces</span>
          </h2>
          <p className="section-copy max-w-[38rem]">
            Show the contrast clearly: one side feels unpolished, the other feels branded, strategic, and ready to perform on social.
          </p>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-[900px] flex-col items-center gap-10 md:flex-row md:items-stretch md:justify-center md:gap-6 lg:gap-12">

          {/* Before Column */}
          <div className="flex w-full max-w-[340px] flex-col items-center group">
            <article className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]/60 shadow-xl transition-all duration-500 group-hover:border-white/20">
              <Image
                src="/beforefull.gif"
                alt="Raw video"
                fill
                unoptimized
                className="object-cover"
              />
            </article>
            <div className="mt-6 flex flex-col items-center gap-1 transition-transform duration-500 group-hover:translate-y-[-4px]">
              <div className="font-display text-[0.85rem] font-medium uppercase tracking-widest text-[#a855f7]/80 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                Before
              </div>
              <div className="font-display text-[1.4rem] font-semibold tracking-normal text-white">
                Raw recording
              </div>
            </div>
          </div>

          {/* Transition Arrow */}
          <div className="flex shrink-0 items-center justify-center md:mt-[-80px]">
            <div className="flex h-14 w-14 rotate-90 md:rotate-0 md:h-16 md:w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md">
              <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* After Column */}
          <div className="flex w-full max-w-[340px] flex-col items-center group">
            <article className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl border border-purple-500/30 bg-[#0a0a0f]/60 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 group-hover:border-purple-400/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <div className="absolute inset-x-0 -top-20 h-40 rounded-full bg-purple-600/20 blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
              <Image
                src="/afterfull.gif"
                alt="Edited video"
                fill
                unoptimized
                className="object-cover opacity-95 transition-opacity duration-500 group-hover:opacity-100"
              />
            </article>
            <div className="mt-6 flex flex-col items-center gap-1 transition-transform duration-500 group-hover:translate-y-[-4px]">
              <div className="font-display text-[0.85rem] font-medium uppercase tracking-widest text-[#a855f7]/80 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                After
              </div>
              <div className="font-display text-[1.4rem] font-semibold tracking-normal text-white">
                Branded social asset
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
