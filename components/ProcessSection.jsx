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
    <div className="relative group transition-all duration-500 hover:-translate-y-3">
      {/* The actual glass card */}
      <article className="surface-card service-card-spotlight relative min-h-[260px] overflow-hidden rounded-[32px] px-6 pb-10 pt-16 text-center sm:min-h-[300px] sm:px-8">
        {/* Dynamic Glass Spotlight */}
        <div className="service-card-spotlight-glow" />

        {/* Subtle top reflection */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />

        <div className="relative z-10 flex min-h-[140px] flex-col items-center justify-center mt-2 font-display">
          <h3 className="whitespace-nowrap text-[1.6rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[1.85rem] group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="mx-auto mt-5 max-w-[19rem] text-[1rem] font-normal leading-7 text-white/60 sm:max-w-[22rem] font-sans">
            {description}
          </p>
        </div>
      </article>

      {/* Step Badge - Positioned outside the clipped article */}
      <div className="absolute left-1/2 top-0 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#a855f7]/40 to-[#a855f7]/10 backdrop-blur-md shadow-[0_10px_30px_-5px_rgba(168,85,247,0.4)] transition-all duration-300 group-hover:border-purple-300/50">
        <span className="font-display text-[1.3rem] font-bold tracking-tight text-white drop-shadow-sm">
          0{index + 1}
        </span>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="section-shell scroll-mt-28">
      <div className="section-inner max-w-[1280px]">
        <div className="section-stack section-center">
          <div className="section-eyebrow">How it works</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-[clamp(1.9rem,4vw,3.7rem)] font-bold leading-[1] tracking-[-0.045em] text-white">
            Our Simple <span className="accent-text">3-Step</span> Process
          </h2>
          <p className="section-copy max-w-[38rem]">
            The workflow stays simple, visible, and easy to trust from first contact to final delivery.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1200px] gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard key={step.title} index={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
