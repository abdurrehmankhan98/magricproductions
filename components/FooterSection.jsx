"use client";
import Image from "next/image";

const quickLinks = ["Reviews", "Services", "Our Work"];

const contactItems = [
  {
    label: "Islamabad, Pakistan",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "info@magricproductions.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
        <rect x="3.5" y="5.5" width="17" height="13" rx="3" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    ),
  },
  {
    label: "+923127990883",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M20 12.1A8 8 0 1 1 6.4 6.4" />
        <path d="M20 4v5h-5" />
        <path d="M8.6 10.2c.4 2 2.1 3.7 4.1 4.1" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#050608] px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1120px]">
        <div className="grid gap-y-12 md:grid-cols-[1.1fr_1fr_1.45fr_1fr] md:items-start md:gap-x-10">
          <div className="flex items-start justify-center md:justify-start">
            <div 
              className="flex flex-row items-center gap-4 cursor-pointer md:ml-[-100px]" 
              onClick={handleScrollToTop}
            >
              <div className="relative h-16 w-16">
                <Image
                  src="/logo.png"
                  alt="Magric Productions Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[22px] font-bold tracking-[-0.04em] text-white">MagricProductions</span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-[18px] font-semibold tracking-[-0.04em] text-transparent">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[16px] font-normal tracking-[-0.02em] text-white/92 transition-colors duration-200 hover:text-purple-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-[18px] font-bold tracking-[-0.04em] text-transparent">
              Contact Details
            </h3>
            <ul className="mt-5 space-y-4">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-center justify-center gap-3 md:justify-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 text-white">
                    {item.icon}
                  </span>
                  <span className="text-[16px] font-normal tracking-[-0.02em] text-white/92">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <a
              href="https://www.linkedin.com/company/magric-productions/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[50px] items-center gap-3 rounded-[12px] border border-purple-400/50 bg-[#9333ea] px-5 text-[16px] font-bold tracking-[-0.03em] text-white transition duration-200 hover:brightness-105"
            >
              <span>Follow us on</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[11px] font-black text-purple-700">
                in
              </span>
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[rgba(147,51,234,0.72)] text-white shadow-[0_14px_36px_rgba(147,51,234,0.4)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[rgba(147,51,234,0.85)] active:scale-95 shadow-lg group"
          aria-label="Scroll to top"
        >
          <span className="mb-[2px] text-[22px] leading-none transition-transform group-hover:-translate-y-1">⌃</span>
        </button>
      </div>
    </footer>
  );
}
