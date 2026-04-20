import Image from "next/image";

const items = [
  {
    title: "More Than Just a Podcast",
    description:
      "Repurpose your episodes into clips, and posts to grow your brand everywhere.",
    gif: "/Nothing-is-unbranded.gif",
  },
  {
    title: "Content That Grows Your Brand",
    description:
      "We turn your podcast into a marketing machine that builds your audience.",
    gif: "/Videos-that-drive-engagements.gif",
  },
  {
    title: "Stress-Free Production",
    description:
      "Editing takes hours. We handle it. You focus on creating.",
    gif: "/Removing-all-the headaches.gif",
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
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-[#a855f7]">
                <Image
                  src={item.gif}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover mix-blend-luminosity opacity-90"
                />
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
