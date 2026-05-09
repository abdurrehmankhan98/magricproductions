"use client";
import { motion } from "framer-motion";

export default function LetsTalkBanner() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[460px] w-[660px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.14)_0%,rgba(109,40,217,0.06)_45%,transparent_75%)] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[900px] flex flex-col items-center text-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-eyebrow"
        >
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em]">
            Let&apos;s Talk
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="section-title section-title--wide max-w-[16ch] text-white"
        >
          Ready to Make Your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
            Content Unforgettable?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="section-copy max-w-[520px]"
        >
          Let&apos;s build something that stops the scroll, earns the click, and keeps them coming back.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="button-primary group relative inline-flex items-center gap-3 overflow-hidden px-9 py-4 text-[0.9rem] uppercase tracking-[0.1em]"
        >
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
