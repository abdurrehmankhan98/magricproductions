"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 10, suffix: "X", label: "Credibility" },
  { target: 78, suffix: "M+", label: "Organic Views" },
  { target: 200, suffix: "+", label: "hrs/ month Time Saved" },
];

export default function StatsStrip() {
  const itemRefs = useRef([]);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const frameIds = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) {
        return;
      }

      const value = item.querySelector("[data-stat-value]");
      const label = item.querySelector("[data-stat-label]");

      [value, label].filter(Boolean).forEach((node, nodeIndex) => {
        node.animate(
          [
            { opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 650,
            delay: 120 + index * 120 + nodeIndex * 90,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards",
          }
        );
      });

      const startAt = performance.now() + 180 + index * 140;
      const duration = 1400;
      const target = stats[index].target;

      const tick = (now) => {
        if (now < startAt) {
          frameIds[index] = requestAnimationFrame(tick);
          return;
        }

        const progress = Math.min((now - startAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = Math.round(target * eased);

        setCounts((current) => {
          if (current[index] === nextValue) {
            return current;
          }

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
      frameIds.forEach((id) => {
        if (id) {
          cancelAnimationFrame(id);
        }
      });
    };
  }, []);

  return (
    <section className="section-shell pt-4">
      <div className="section-inner">
        <div className="surface-panel grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-3 lg:px-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className={`relative flex min-h-[112px] flex-col justify-center gap-3 text-center lg:text-left ${
                index < stats.length - 1 ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-16 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-white/10" : ""
              }`}
            >
              <div
                data-stat-value
                className="font-display text-[3rem] font-semibold leading-none tracking-[-0.05em] text-white opacity-0"
              >
                {counts[index]}
                {stat.suffix}
              </div>
              <div
                data-stat-label
                className="text-[0.95rem] font-medium uppercase tracking-[0.12em] text-white/56 opacity-0"
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
