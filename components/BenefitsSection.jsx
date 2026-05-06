import { Layers, Rocket, Sparkles } from "lucide-react";

const items = [
  {
    title: "More Than Just Content",
    description:
      "Turn fans into creators curate authentic content that builds trust and drives engagement.",
    icon: <Layers className="h-8 w-8 text-white" />,
  },
  {
    title: "Content That Builds Communities",
    description:
      "We turn user generated content into a growth engine that strengthens your brand.",
    icon: <Rocket className="h-8 w-8 text-white" />,
  },
  {
    title: "Stress-Free Production",
    description:
      "Editing takes hours. we handle it with precision and creativity, so you stay focused on growing.",
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
];

export default function BenefitsSection() {
  return (
    <section id="about" className="section-shell bg-[#030303] scroll-mt-28">
      <div className="section-inner max-w-[1240px]">
        <div className="section-stack section-center">
          <h2 className="font-display text-[56px] font-semibold leading-[1.04] tracking-normal text-white sm:text-[74px] lg:text-[66px]">
            User-Generated Content, <br />
            <span className="accent-text font-semibold">
              Made Effortless.
            </span>
          </h2>

          <p className="mx-auto max-w-[42rem] text-[clamp(1rem,3.8vw,1.25rem)] font-normal leading-relaxed tracking-normal text-white">
            You record the ideas. We shape the clips, episodes, and visuals that help your audience keep watching.
          </p>
        </div>

        <div className="mt-[var(--section-content-gap)] grid gap-y-12 md:grid-cols-3 md:gap-x-12 lg:gap-x-14">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col items-center text-center">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/20">
                {item.icon}
              </div>

              <h3 className="font-display mt-9 max-w-[330px] text-[clamp(1.75rem,7vw,2.2rem)] font-semibold leading-tight text-white">
                {item.title}
              </h3>

              <p className="mt-6 max-w-[390px] text-[clamp(1rem,4vw,1.25rem)] font-normal leading-relaxed tracking-normal text-white">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
