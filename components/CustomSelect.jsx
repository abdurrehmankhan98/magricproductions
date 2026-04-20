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
    <label className="grid gap-2 relative group">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 transition-colors group-focus-within:text-purple-400/80">
        {label}
      </span>
      <div ref={containerRef} className="relative">
        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`h-13 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-white outline-none transition-all duration-200 flex items-center justify-between cursor-pointer text-left hover:border-white/20 ${
            isOpen ? "border-purple-500/40 ring-4 ring-purple-500/5 bg-white/[0.05]" : ""
          }`}
        >
          <span className={selectedOption ? "text-white font-medium" : "text-white/28"}>
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDown
            size={18}
            className={`text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-400" : ""}`}
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
