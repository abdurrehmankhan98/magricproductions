"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
    }`}>
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-[60px] items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-0 group">
            <div className="relative h-28 w-28 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Magric Productions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold tracking-normal text-white">
              Magric Productions
            </span>
          </a>

          {/* Right Side: Links + CTA */}
          <div className="flex items-center gap-8 lg:gap-12">
            <nav className="hidden items-center gap-8 xl:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[0.92rem] font-medium text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 px-7 text-[0.9rem] font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] active:scale-95"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
