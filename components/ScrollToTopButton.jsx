"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`hidden md:flex fixed bottom-8 right-8 z-50 h-14 w-14 items-center justify-center transition-all duration-500 group
        ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-75 pointer-events-none"}`}
    >
      {/* Progress Ring */}
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
      >
        {/* Track */}
        <circle
          cx="24" cy="24" r={radius}
          fill="none"
          stroke="rgba(168,85,247,0.15)"
          strokeWidth="2"
        />
        {/* Progress */}
        <circle
          cx="24" cy="24" r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-150"
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Button Background */}
      <div className="relative z-10 h-10 w-10 flex items-center justify-center rounded-full bg-[rgba(15,15,20,0.85)] border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-purple-500/40 group-hover:shadow-[0_4px_24px_rgba(147,51,234,0.3)] transition-all duration-300">
        <ArrowUp
          size={18}
          className="text-white/70 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300"
        />
      </div>
    </button>
  );
}
