import { Layers, Rocket, Sparkles } from "lucide-react";

const items = [
  {
    title: "More Than Just a Podcast",
    description:
      "Repurpose your episodes into clips, and posts to grow your brand everywhere.",
    icon: <Layers className="h-8 w-8 text-white" />,
  },
  {
    title: "Content That Grows Your Brand",
    description:
      "We turn your podcast into a marketing machine that builds your audience.",
    icon: <Rocket className="h-8 w-8 text-white" />,
  },
  {
    title: "Stress-Free Production",
    description:
      "Editing takes hours. We handle it. You focus on creating.",
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#050608] px-4 pb-28 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="font-display text-[56px] font-semibold leading-[1.04] tracking-normal text-white sm:text-[74px] lg:text-[66px]">
            <span>
              Podcasting, Made
            </span>{" "}
            <span className="accent-text font-semibold">
              Effortless.
            </span>
          </h2>

          <p className="mt-8 text-[20px] font-normal leading-none tracking-normal text-white">
            You talk. We handle the rest.
          </p>
        </div>

        <div className="mt-24 grid gap-y-16 md:grid-cols-3 md:gap-x-14">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col items-center text-center">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/20">
                {item.icon}
              </div>

              <h3 className="font-display mt-9 max-w-[330px] text-[35px] font-semibold leading-[38px] text-white">
                {item.title}
              </h3>

              <p className="mt-6 max-w-[390px] text-[20px] font-normal leading-[1.28] tracking-normal text-white">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
