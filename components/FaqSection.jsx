"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How secure is my podcast data?",
    answer:
      "Your files stay private and organized throughout the workflow. We only work with the assets you share for your project and keep delivery structured and secure.",
  },
  {
    question: "How fast will I get my edited content?",
    answer:
      "Turnaround depends on scope, but most podcast clips and trailers are delivered on a fast weekly cadence so your posting schedule stays consistent.",
  },
  {
    question: "How much time will I save with your service?",
    answer:
      "Most clients save multiple hours every week by offloading edit prep, clip cutting, packaging, revisions, and delivery.",
  },
  {
    question: "What if I need changes to my final episode?",
    answer:
      "Revisions are part of the process. We gather your notes, make the updates, and make sure the final result is aligned with your direction.",
  },
  {
    question: "Can you help launch my podcast from scratch?",
    answer:
      "Yes. We can support launches with branded trailers, short clips, rollout assets, and content systems built to help your show start strong.",
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
