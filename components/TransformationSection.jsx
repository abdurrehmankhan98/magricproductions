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

        <div className="relative mx-auto mt-16 grid max-w-[860px] gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <article className="surface-card relative overflow-hidden rounded-[28px] p-3">
            <div className="relative overflow-hidden rounded-[22px] bg-[#10171c]">
              <Image
                src="/beforefull.gif"
                alt="Raw podcast video before editing"
                width={320}
                height={564}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="px-2 pb-2 pt-4">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/42">
                Before
              </div>
              <div className="mt-2 font-display text-[1.4rem] font-semibold tracking-[-0.04em] text-white">
                Raw recording
              </div>
            </div>
          </article>

          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </div>
          </div>

          <article className="surface-panel relative overflow-hidden rounded-[28px] p-3">
            <div className="absolute inset-x-10 top-6 h-24 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,transparent_72%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[22px] bg-[#dde4ef]">
              <Image
                src="/afterfull.gif"
                alt="Edited podcast social video after design and branding"
                width={320}
                height={569}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="px-2 pb-2 pt-4">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-purple-300">
                After
              </div>
              <div className="mt-2 font-display text-[1.4rem] font-semibold tracking-[-0.04em] text-white">
                Branded social asset
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
