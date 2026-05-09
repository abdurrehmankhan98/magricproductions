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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative group lg:cursor-pointer"
    >
      <article className="surface-card relative min-h-[260px] overflow-hidden rounded-xl px-6 pb-10 pt-16 text-center sm:min-h-[300px] sm:px-8">

        <div className="relative z-10 flex min-h-[140px] flex-col items-center justify-center mt-2 font-display">
          <h3 className="text-balance text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[1.75rem]">
            {title}
          </h3>
          <p className="mx-auto mt-5 max-w-[19rem] text-[0.98rem] font-normal leading-7 text-white/72 sm:max-w-[22rem] font-sans">
            {description}
          </p>
        </div>
      </article>

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
        className="absolute left-1/2 top-0 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#a855f7]/55 to-[#a855f7]/28 backdrop-blur-md"
      >
        <span className="font-display text-[1.15rem] font-semibold tracking-tight text-white">
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
          <div className="section-eyebrow">
            How it works
          </div>
          <h2 className="section-title max-w-[14ch] text-balance sm:max-w-none text-white">
            Our Simple <span className="accent-text">3-Step</span> Process
          </h2>
          <p className="section-copy max-w-[38rem]">
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
