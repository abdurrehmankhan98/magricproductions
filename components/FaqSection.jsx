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
    <div className="surface-card overflow-hidden rounded-[22px] transition-colors duration-300 hover:border-purple-400/25">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-[84px] w-full items-center justify-between px-6 text-left sm:px-8"
        aria-expanded={isOpen}
      >
        <span className="font-display text-[1.2rem] font-medium leading-[1.2] tracking-[-0.025em] text-white sm:text-[1.3rem]">
          {item.question}
        </span>
        <span
          className={`ml-6 flex-none text-[30px] font-semibold leading-none text-purple-400 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-0 text-[1rem] leading-7 text-white/68 sm:px-8">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faqs" className="section-shell scroll-mt-28">
      <div className="section-inner max-w-[960px]">
        <div className="section-stack section-center">
          <div className="section-eyebrow">FAQs</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-[clamp(1.9rem,4vw,3.7rem)] font-bold leading-[1] tracking-[-0.045em] text-white">
            Got <span className="accent-text">Question</span>? We’ve Answers!
          </h2>
          <p className="section-copy max-w-[38rem]">
            We turn your best moments into scroll-stopping trailers that boost engagement.ould reduce friction: speed, process, revisions, and security need to be instantly scannable on desktop and mobile.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[48rem] space-y-4">
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
