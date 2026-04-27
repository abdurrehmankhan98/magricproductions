"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 transition-all duration-500 ${isScrolled ? "translate-y-0" : "translate-y-2"}`}>
      <div className={`mx-auto w-full max-w-[1200px] rounded-full border transition-all duration-500 ${isScrolled
        ? "border-white/10 bg-[#081117]/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        : "border-transparent bg-transparent backdrop-blur-0"
        }`}>
        <div className="mx-auto flex h-[72px] items-center justify-between gap-3 px-3 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="relative h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] -ml-1 sm:ml-0">
              <Image
                src="/magric-logo.png"
                alt="Magric Productions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[16px] sm:text-[22px] font-bold tracking-[-0.04em] text-white">MagricProductions</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {["Portfolio", "Reviews", "Process", "Testimonials", "FAQs"].map((item) => (
              <a
                key={item}
                href={item === "Portfolio" ? "#long-form" : `#${item.toLowerCase()}`}
                className="relative text-[0.95rem] font-normal text-white/76 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:top-full after:mt-1.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-violet-400 after:via-purple-500 after:to-fuchsia-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button-primary !min-h-[2.2rem] sm:!min-h-[2.6rem] px-2.5 sm:px-5 text-[0.75rem] sm:text-[0.9rem] flex items-center whitespace-nowrap">
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
