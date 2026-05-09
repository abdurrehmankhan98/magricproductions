"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide video editing and graphic designing services. In editing we provide short form and long form editing and in graphic design we provide thumbnail and poster design.",
  },
  {
    question: "How long does it take to complete a video project?",
    answer:
      "Depending on the complexity, most projects are completed within 24-48 hours. You can also request faster turnaround times for urgent projects.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes! We offer 3 to 4 revisions per video to ensure it aligns with your vision and expectations.",
  },
  {
    question: "What platforms do you create videos for?",
    answer:
      "We specialize in creating videos for YouTube, Instagram, TikTok, Facebook, LinkedIn,",
  },
  {
    question: "How do I get started?",
    answer:
      "Its simple, just book a call with us where will have discuss about your goals and needs and suggest you package according it. after it you share the raw content and brand guidlines then we will start working on your content",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="surface-card group overflow-hidden rounded-[22px] transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        className="relative z-10 flex min-h-[84px] w-full items-center justify-between px-6 text-left sm:px-8"
        aria-expanded={isOpen}
      >
        <span className="font-display text-[1.12rem] font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-[1.2rem] transition-colors flex-1 text-left pr-6">
          {item.question}
        </span>
        <div
          className={`ml-6 flex flex-none items-center justify-center text-[28px] font-bold leading-none text-purple-500 transition-all duration-300 ${isOpen ? "rotate-45 text-purple-400" : "group-hover:text-purple-400"
            }`}
        >
          +
        </div>
      </button>

      <div
        className={`relative z-10 grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-2 sm:px-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
              <p className="text-[0.98rem] leading-7 text-white/74 text-left">
                {item.answer}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="section-shell">
      <div className="section-inner max-w-[960px]">
        <div id="faqs" className="section-stack section-center scroll-mt-32">
          <div className="section-eyebrow">FAQs</div>
          <h2 className="section-title max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-white">
            Got <span className="accent-text">questions</span>? We have answers.
          </h2>

        </div>

        <div className="mx-auto mt-[var(--section-content-gap)] max-w-[48rem] space-y-4">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
