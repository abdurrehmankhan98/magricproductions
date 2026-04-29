import { Layers, Rocket, Sparkles } from "lucide-react";

const items = [
  {
    title: "More Than Just Content",
    description:
      "Turn your audience into creators—collect, curate, and repurpose authentic content that builds trust and drives engagement.",
    icon: <Layers className="h-8 w-8 text-white" />,
  },
  {
    title: "Content That Builds Communities",
    description:
      "We turn user-generated content into a growth engine that strengthens your brand and connects with your audience.",
    icon: <Rocket className="h-8 w-8 text-white" />,
  },
  {
    title: "Stress-Free Production",
    description:
      "Editing takes hours we handle the entire process with precision and creativity, so you can stay focused on creating and growing your content.",
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
];

export default function BenefitsSection() {
  return (
    <section id="about" className="bg-[#030303] px-4 pb-28 pt-16 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="font-display text-[56px] font-semibold leading-[1.04] tracking-normal text-white sm:text-[74px] lg:text-[66px]">
            User-Generated Content, <br />
            <span className="accent-text font-semibold">
              Made Effortless.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[42rem] text-[clamp(1rem,3.8vw,1.25rem)] font-normal leading-relaxed tracking-normal text-white">
            You record the ideas. We shape the clips, episodes, and visuals that help your audience keep watching.
          </p>
        </div>

        <div className="mt-24 grid gap-y-16 md:grid-cols-3 md:gap-x-14">
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
