import Image from "next/image";

const reviews = [
  {
    name: "Mahmoud Bartawi",
    role: "Host of BXB",
    quote:
      "Great work, easy to collaborate with, Highly recommended!",
    avatarSrc: "/Hector-Hughes.png",
  },
  {
    name: "Jay Lawrence",
    role: "Podcast Host & Wealth Manager",
    quote:
      "Podcutz deliver top-quality edits, and excellent client support every time!",
    avatarSrc: "/Adam-Biddlecombe.png",
  },
  {
    name: "Nausheen I. Chen",
    role: "Public Speaking Coach",
    quote:
      "Podcutz is talented, detail-oriented, high-quality work on time",
    avatarSrc: "/Nausheen-I.-Chen.png",
  },
  {
    name: "Adam Biddlecombe",
    role: "Head of Brand - Mindstream",
    quote:
      "We've worked with MagricProduction on podcast editing,",
    avatarSrc: "/Adam-Biddlecombe.png",
  },
];

function ReviewRailItem({ name, role, quote, avatarSrc }) {
  return (
    <article className="relative grid w-[660px] flex-none grid-cols-[150px_minmax(0,1fr)] items-center gap-6 px-6 py-10 sm:w-[760px] sm:grid-cols-[180px_minmax(0,1fr)] sm:px-8">
      {/* <div className="pointer-events-none absolute left-[92px] top-0 h-full w-px sm:left-[112px]" /> */}

      <div className="relative z-10 h-[120px] w-[128px] overflow-hidden rounded-[22px] border border-white bg-[#150d1f] shadow-[0_18px_44px_rgba(0,0,0,0.32)] sm:h-[170px] sm:w-[150px]">
        <Image src={avatarSrc} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(107,14,206,0.1),transparent_36%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      <div className="relative z-10 max-w-[26rem] sm:max-w-[30rem] text-left">
        <p className="text-[1.2rem] leading-[1.5] sm:text-[1.7rem] sm:leading-[1.4] tracking-[-0.03em] text-white ">
          “{quote}”
        </p>
        <div className="mt-6">
          <div className="text-[1rem] font-medium tracking-[-0.02em] text-white/92 sm:text-[1.05rem]">
            {name}
          </div>
          <div className="mt-1 text-[0.84rem] text-white/45 sm:text-[0.9rem]">
            {role}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsSection() {
  const loopedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="section-shell relative overflow-hidden scroll-mt-28">
      <div className="pointer-events-none absolute inset-x-0 top-[12%] mx-auto h-[22rem] max-w-[58rem] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.22)_0%,rgba(107,14,206,0.08)_48%,transparent_78%)] blur-[120px]" />

      <div className="section-inner max-w-[1180px]">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Proof</div>
          <h2 className="font-display max-w-none text-[clamp(2.2rem,5vw,4.1rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white">
            Hear Directly from our <span className="accent-text">Clients</span>
          </h2>
          <p className="section-copy max-w-[34rem]">
            Real feedback from creators and brands who trust Podcutz to make their podcast content sharper, faster, and easier to ship.
          </p>
        </div>

        <div className="relative mt-[4.5rem] py-8 sm:py-10">
          <div className="pointer-events-none absolute inset-x-3 top-[22%] h-px bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.18)_18%,rgba(255,255,255,0.18)_82%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-x-3 top-[80%] h-px bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.18)_18%,rgba(255,255,255,0.18)_82%,transparent_100%)]" />
          <div className="pointer-events-none absolute left-[14%] top-18 bottom-8 w-px bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.18)_18%,rgba(255,255,255,0.18)_82%,transparent_100%)]" />
          <div className="pointer-events-none absolute left-[36%] top-8 bottom-8 w-px bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.18)_18%,rgba(255,255,255,0.18)_82%,transparent_100%)]" />
          <div className="pointer-events-none absolute left-[63%] top-8 bottom-8 w-px bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.08)_18%,rgba(255,255,255,0.08)_82%,transparent_100%)]" />

          <div className="marquee relative z-10">
            <div className="marquee-track items-center gap-0">
              {loopedReviews.map((review, index) => (
                <ReviewRailItem
                  key={`${review.name}-${index}`}
                  {...review}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
