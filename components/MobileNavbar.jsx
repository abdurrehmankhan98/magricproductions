"use client";
import { Home, Video, Layers, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function MobileNavbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={20} />, href: "#" },
    { id: "portfolio", label: "Portfolio", icon: <Video size={20} />, href: "#long-form" },
    { id: "process", label: "Process", icon: <Layers size={20} />, href: "#process" },
    { id: "testimonials", label: "Testimonials", icon: <MessageSquare size={20} />, href: "#testimonials" },
    { id: "contact", label: "Contact", icon: <Phone size={20} />, href: "#contact" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex w-[90%] max-w-[400px] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#081117]/40 px-6 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] md:hidden">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setActive(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors duration-300 ${active === item.id ? "text-purple-400" : "text-white/50 hover:text-white"
            }`}
        >
          {item.icon}
          <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
        </a>
      ))}
    </div>
  );
}
