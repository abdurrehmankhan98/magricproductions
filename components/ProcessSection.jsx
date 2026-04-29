"use client";

import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative group lg:cursor-pointer"
    >
      {/* The actual glass card */}
      <article className="surface-card service-card-spotlight relative min-h-[260px] overflow-hidden rounded-xl px-6 pb-10 pt-16 text-center sm:min-h-[300px] sm:px-8 shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.25)]">
        {/* Dynamic Glass Spotlight */}
        <div className="service-card-spotlight-glow" />

        {/* Subtle top reflection */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />

        <div className="relative z-10 flex min-h-[140px] flex-col items-center justify-center mt-2 font-display">
          <h3 className="text-balance text-[1.55rem] font-extrabold leading-[1.12] tracking-normal text-white sm:text-[1.85rem] group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="mx-auto mt-5 max-w-[19rem] text-[1rem] font-normal leading-7 text-white/60 sm:max-w-[22rem] font-sans">
            {description}
          </p>
        </div>
      </article>

      {/* Step Badge - Positioned outside the clipped article */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 10px 30px -5px rgba(168,85,247,0.4)",
            "0 10px 40px 0px rgba(168,85,247,0.6)",
            "0 10px 30px -5px rgba(168,85,247,0.4)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2 // Stagger the pulses slightly
        }}
        className="absolute left-1/2 top-0 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#a855f7]/60 to-[#a855f7]/30 backdrop-blur-md transition-all duration-300 group-hover:border-purple-300/50"
      >
        <span className="font-display text-[1.4rem] font-bold tracking-tight text-white drop-shadow-md">
          0{index + 1}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function ProcessSection() {
  return (
    <section className="section-shell bg-black/20">
      <div className="section-inner max-w-[1280px]">
        <div id="process" className="section-stack section-center scroll-mt-32">
          <div className="section-eyebrow px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest inline-block mb-2">
            How it works
          </div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1] tracking-normal text-white">
            Our Simple <span className="accent-text">3-Step</span> Process
          </h2>
          <p className="section-copy max-w-[38rem] text-gray-400">
            A workflow designed for clarity and trust, from initial planning to ready-to-post delivery.
          </p>
        </div>

        <div className="mx-auto mt-[var(--section-content-gap)] grid max-w-[1200px] gap-8 md:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => (
            <StepCard key={step.title} index={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
