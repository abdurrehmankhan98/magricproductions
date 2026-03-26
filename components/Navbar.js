import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px] rounded-full border border-white/10 bg-[#081117]/1 backdrop-blur-lg">
        <div className="mx-auto flex h-[72px] items-center justify-between px-5 sm:px-6">
          <a href="#" className="flex items-center">
            <div className="relative h-[108px] w-[350px] sm:h-[64px] sm:w-[230px]">
              <Image
                src="/logo.png"
                alt="Magric Productions"
                fill
                className="object-contain object-left translate-y-[2px]"
                priority
              />
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {["Portfolio", "Reviews", "Process", "FAQs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-[0.95rem] font-medium text-white/76 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:top-full after:mt-1.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-violet-400 after:via-purple-500 after:to-fuchsia-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="button-primary px-5 text-[0.9rem]">
            Book a call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
