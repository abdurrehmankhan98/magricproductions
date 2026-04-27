"use client";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

export default function FooterSection() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const quickLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-[#050608] border-t border-white/5 pt-20 pb-10 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12 lg:gap-16 mb-20">

          {/* Column 1: Logo & Newsletter */}
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex items-center justify-center gap-3">
              <div className="relative h-11 w-11">
                <Image
                  src="/magric-logo.png"
                  alt="Magric Productions Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-semibold text-white">Magric Productions</span>
            </div>

            <p className="text-white/50 text-[0.95rem] leading-relaxed max-w-[320px]">
              Transforming raw footage into cinematic digital masterpieces with precision and creativity. Each video is crafted to engage your audience and leave a lasting impression.
            </p>


          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center text-center gap-8">
            <span className="text-[0.75rem] font-semibold uppercase tracking-widest text-white/40">Quick Links</span>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-[1rem]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col items-center text-center gap-8">
            <span className="text-[0.75rem] font-semibold uppercase tracking-widest text-white/40">Company</span>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-[1rem]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="flex flex-col items-center text-center gap-8">
            <span className="text-[0.75rem] font-semibold uppercase tracking-widest text-white/40">Get In Touch</span>

            <div className="space-y-6">
              <div>
                <span className="block text-[0.7rem] font-bold text-white/30 uppercase mb-1">Email</span>
                <a href="mailto:founder.magricproductions@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors">
                  founder.magricproductions@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[0.7rem] font-bold text-white/30 uppercase mb-1">Address</span>
                <p className="text-white font-medium">Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-4">
              <a href="https://wa.me/923127990883" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.523 5.854L.057 23.882l6.184-1.62A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.001-1.368l-.36-.214-3.67.962.979-3.58-.234-.368A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" /></svg>
              </a>
              <a href="https://www.instagram.com/magricproductions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/magric-productions/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/@MagricProductions25" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex items-center justify-center w-full text-center px-4">
          <span className="text-white/30 text-[0.8rem] sm:text-[0.85rem] uppercase tracking-widest font-medium w-full text-center">
            © 2026 Magric Productions — Built for the Bold.
          </span>
        </div>
      </div>
    </footer>
  );
}
