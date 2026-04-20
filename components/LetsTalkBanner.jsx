"use client";
import { motion } from "framer-motion";

export default function LetsTalkBanner() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      {/* Background atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.18)_0%,rgba(109,40,217,0.08)_45%,transparent_75%)] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[900px] flex flex-col items-center text-center gap-10">

        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-5 py-2 backdrop-blur-md"
        >
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
            Let&apos;s Talk
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white"
        >
          Ready to Make Your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
            Content Unforgettable?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[1.05rem] leading-relaxed text-white/50 max-w-[520px]"
        >
          Let&apos;s build something that stops the scroll, earns the click, and keeps them coming back.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 px-9 py-4 text-[1rem] font-bold text-white shadow-[0_0_40px_-8px_rgba(147,51,234,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_-8px_rgba(147,51,234,0.7)] hover:scale-[1.03] active:scale-[0.98]"
        >
          {/* Shimmer */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative z-10">Get In Touch</span>
          <svg viewBox="0 0 20 20" fill="currentColor" className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </motion.a>

      </div>
    </section>
  );
}
