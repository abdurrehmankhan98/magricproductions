"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Proof", href: "#proof" },
    { label: "Reviews", href: "#reviews" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
  ];

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
        <div className="mx-auto flex h-[72px] items-center justify-between gap-3 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] ml-0.5 sm:ml-0">
              <Image
                src="/magric-logo.png"
                alt="Magric Productions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[18px] sm:text-[22px] font-bold tracking-[-0.04em] text-white whitespace-nowrap">Magric Productions</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-[0.95rem] font-normal text-white/76 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:top-full after:mt-1.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-violet-400 after:via-purple-500 after:to-fuchsia-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="!hidden md:!flex button-primary !min-h-[2.2rem] sm:!min-h-[2.6rem] px-2.5 sm:px-5 text-[0.75rem] sm:text-[0.9rem] items-center whitespace-nowrap">
              Book a call
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden items-center justify-center p-2 text-purple-400 hover:text-purple-300 transition-all duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mt-3 mx-auto w-[92%] max-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#081117]/40 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col gap-1 p-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-white/80 transition-all hover:bg-white/5 hover:text-white"
                >
                  <span>{item.label}</span>
                  <div className="h-1 w-1 rounded-full bg-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
              <div className="mt-1 pt-2 border-t border-white/5">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="button-primary w-full text-center py-2.5 text-sm flex items-center justify-center gap-2"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav aria-label="Call to action" className={`fixed inset-x-0 bottom-4 z-40 px-4 md:hidden ${isOpen ? "hidden" : "block"}`}>
        <a
          href="#contact"
          className="button-primary mx-auto flex h-12 w-full max-w-[340px] items-center justify-center text-[0.84rem] uppercase tracking-[0.12em]"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
