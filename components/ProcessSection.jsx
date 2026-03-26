const steps = [
  {
    title: "We Understand & Plan",
    description:
      "You share your goals, and we shape a clear content plan around your show.",
  },
  {
    title: "You Send Your Files",
    description:
      "Drop in your raw footage and assets, and we take over the editing flow.",
  },
  {
    title: "We Deliver, You Share",
    description:
      "We send polished content back, ready for posting, promotion, and growth.",
  },
];

function StepCard({ title, description, index }) {
  return (
    <div className="relative text-center">
      <article className="surface-card group relative min-h-[210px] overflow-visible rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(28,24,38,0.96),rgba(18,15,27,0.98))] px-6 pb-7 pt-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_40px_rgba(0,0,0,0.24)] sm:min-h-[220px] sm:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-0 z-[9] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#221c31]" />
        <div className="pointer-events-none absolute left-1/2 top-2 h-24 w-28 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.18)_0%,rgba(107,14,206,0.06)_55%,transparent_78%)] blur-2xl" />

        <div className="absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/30 bg-[linear-gradient(180deg,rgba(155,92,255,0.34),rgba(87,27,145,0.22))] shadow-[0_10px_24px_rgba(107,14,206,0.16)]">
          <span className="font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-white">
            0{index + 1}
          </span>
        </div>

        <div className="relative flex min-h-[112px] flex-col items-center justify-center mt-2">
          <h3 className="font-display text-[1.05rem] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-[1.15rem]">
            {title}
          </h3>
          <p className="mx-auto mt-3 max-w-[17rem] text-[0.95rem] leading-8 text-white/64 sm:max-w-[18rem]">
            {description}
          </p>
        </div>
      </article>

      {/* <div className="pointer-events-none mt-2 font-display text-[3.6rem] font-semibold leading-none tracking-[-0.08em] text-white/6">
        0{index + 1}
      </div> */}
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="section-shell scroll-mt-28">
      <div className="section-inner max-w-[1180px]">
        <div className="section-stack section-center">
          <div className="section-eyebrow">How it works</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-[clamp(1.9rem,4vw,3.7rem)] font-bold leading-[1] tracking-[-0.045em] text-white">
            Our Simple <span className="accent-text">3-Step</span> Process
          </h2>
          <p className="section-copy max-w-[38rem]">
            The workflow stays simple, visible, and easy to trust from first contact to final delivery.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1120px] gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard key={step.title} index={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
