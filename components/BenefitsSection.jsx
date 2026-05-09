import { Layers, Rocket, Sparkles } from "lucide-react";

const items = [
  {
    title: "More Than Just Content",
    description:
      "Turn fans into creators. Curate authentic content that builds trust and drives engagement.",
    icon: <Layers className="h-8 w-8 text-white" />,
  },
  {
    title: "Content That Builds Communities",
    description:
      "We turn user-generated content into a growth engine that strengthens your brand.",
    icon: <Rocket className="h-8 w-8 text-white" />,
  },
  {
    title: "Stress-Free Production",
    description:
      "Editing takes hours. We handle it with precision and creativity, so you stay focused on growing.",
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
];

export default function BenefitsSection() {
  return (
    <section id="about" className="section-shell bg-[#030303] scroll-mt-28">
      <div className="section-inner max-w-[1240px]">
        <div className="section-stack section-center">
          <h2 className="section-title section-title--wide max-w-none text-white text-center">
            User-Generated Content, <br />
            <span className="accent-text">
              Made Effortless.
            </span>
          </h2>

          <p className="section-copy mx-auto max-w-[42rem] text-center">
            You record the ideas. We shape the clips, episodes, and visuals that help your audience keep watching.
          </p>
        </div>

        <div className="mt-16 sm:mt-[var(--section-content-gap)] grid gap-y-10 md:grid-cols-3 md:gap-x-12 lg:gap-x-14">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col items-center text-center group">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="font-display mt-8 max-w-[330px] text-[clamp(1.5rem,6vw,2rem)] font-semibold leading-tight text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-[390px] text-[clamp(0.9rem,3.8vw,1.1rem)] font-normal leading-relaxed tracking-normal text-white/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
