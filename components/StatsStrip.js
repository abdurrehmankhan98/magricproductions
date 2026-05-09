"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 10, suffix: "X", label: "Audience Trust Growth" },
  { target: 78, suffix: "M+", label: "Organic Views Generated" },
  { target: 200, suffix: "+", label: "Monthly Hours Saved" },
];

export default function StatsStrip() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const frameIds = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const value = item.querySelector("[data-stat-value]");
      const label = item.querySelector("[data-stat-label]");

      [value, label].filter(Boolean).forEach((node, nodeIndex) => {
        node.animate(
          [
            { opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 800,
            delay: index * 120 + nodeIndex * 90,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards",
          }
        );
      });

      const startAt = performance.now() + index * 140;
      const duration = 2000;
      const target = stats[index].target;

      const tick = (now) => {
        const progress = Math.min((now - startAt) / duration, 1);
        if (progress < 0) {
          frameIds[index] = requestAnimationFrame(tick);
          return;
        }

        const eased = 1 - Math.pow(1 - progress, 4); // Smoother cubic-out
        const nextValue = Math.round(target * eased);

        setCounts((current) => {
          if (current[index] === nextValue) return current;
          const next = [...current];
          next[index] = nextValue;
          return next;
        });

        if (progress < 1) {
          frameIds[index] = requestAnimationFrame(tick);
        }
      };

      frameIds[index] = requestAnimationFrame(tick);
    });

    return () => {
      frameIds.forEach((id) => id && cancelAnimationFrame(id));
    };
  }, [isInView]);

  return (
    <section id="proof" className="section-shell scroll-mt-28">
      <div className="section-inner">
        <div className="section-stack section-center mb-10">
          <div className="section-eyebrow">Proof</div>
          <h2 className="section-title section-title--wide max-w-[14ch] text-white">
            Outcomes our clients can measure
          </h2>
        </div>
        <div 
          ref={containerRef}
          className="contact-surface grid gap-6 px-6 py-10 sm:px-8 lg:grid-cols-3 lg:px-12"
        >
          
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className={`relative z-10 flex min-h-[112px] flex-col justify-center gap-2 text-center lg:text-center ${
                index < stats.length - 1 ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-20 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-white/10 lg:after:to-transparent" : ""
              }`}
            >
              <div
                data-stat-value
                className="font-display text-[3.2rem] font-semibold leading-none tracking-[-0.02em] text-white opacity-0 sm:text-[3.6rem]"
              >
                {counts[index]}
                <span className="text-[#a855f7]">{stat.suffix}</span>
              </div>
              <div
                data-stat-label
                className="text-[0.74rem] font-semibold uppercase tracking-[0.15em] text-white/58 opacity-0"
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
