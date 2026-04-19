"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 10, suffix: "X", label: "Credibility" },
  { target: 78, suffix: "M+", label: "Organic Views" },
  { target: 200, suffix: "+", label: "hrs/ month Time Saved" },
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
    <section className="section-shell pt-4">
      <div className="section-inner">
        <div 
          ref={containerRef}
          className="surface-panel service-card-spotlight grid gap-6 px-6 py-12 sm:px-8 lg:grid-cols-3 lg:px-12 relative group overflow-hidden"
        >
          {/* Enhanced Glass Spotlight */}
          <div className="service-card-spotlight-glow" />
          
          {/* Internal Neon Accents */}
          <div className="neon-glow-accent glow-purple -top-24 -left-24 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-1000" />
          <div className="neon-glow-accent glow-purple -bottom-24 -right-24 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-1000" />
          
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className={`relative z-10 flex min-h-[112px] flex-col justify-center gap-2 text-center lg:text-left ${
                index < stats.length - 1 ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-20 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-white/10 lg:after:to-transparent" : ""
              }`}
            >
              <div
                data-stat-value
                className="font-display text-[3.8rem] font-bold leading-none tracking-[-0.06em] text-white opacity-0"
              >
                {counts[index]}
                <span className="text-[#a855f7]">{stat.suffix}</span>
              </div>
              <div
                data-stat-label
                className="text-[0.85rem] font-bold uppercase tracking-[0.25em] text-white/50 opacity-0"
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
