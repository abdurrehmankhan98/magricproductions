"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({ label, options, placeholder, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <label className="grid gap-2 relative">
      <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
        {label}
      </span>
      <div ref={containerRef} className="relative">
        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="h-13 w-full rounded-[16px] border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#9333ea]/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(147,51,234,0.2)] hover:border-[#9333ea]/40 flex items-center justify-between cursor-pointer text-left"
        >
          <span className={selectedOption ? "text-white" : "text-white/28"}>
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDown
            size={18}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-[16px] border border-white/10 bg-white/[0.05] shadow-2xl overflow-hidden z-50 backdrop-blur-md">
            {options.map((option, index) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 transition-all ${
                  value === option.value
                    ? "bg-[#9333ea]/40 text-white border-l-2 border-l-[#9333ea]"
                    : "text-white/80 hover:text-white hover:bg-[#9333ea]/20"
                } ${index !== options.length - 1 ? "border-b border-white/5" : ""}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </label>
  );
}
