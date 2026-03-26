export default function ShareVisionSection() {
  return (
    <section id="contact" className="section-shell relative overflow-hidden scroll-mt-28">
      <div className="pointer-events-none absolute inset-x-0 top-[8%] mx-auto h-[420px] max-w-[1080px] rounded-full bg-[radial-gradient(circle,rgba(107,14,206,0.22)_0%,rgba(107,14,206,0.1)_38%,transparent_72%)] blur-[120px]" />

      <div className="section-inner">
        <div className="section-stack section-center">
          <div className="section-eyebrow">Contact Us</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none sm:whitespace-nowrap text-[clamp(1.9rem,4vw,3.7rem)] font-bold leading-[1] tracking-[-0.045em] text-white">
            Tell us what you want to <span className="accent-text">build</span>.
          </h2>
          <p className="section-copy max-w-[40rem]">
            Share your show, your goals, and the type of content support you need. We&apos;ll come back with a focused plan instead of a generic pitch.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1100px] gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="surface-card flex flex-col justify-between gap-8 p-8 sm:p-10">
            <div>
              <div className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white/42">
                What to expect
              </div>
              <h3 className="mt-4 font-display text-[2rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
                Clean process. Fast replies. No wasted calls.
              </h3>
              <p className="mt-5 max-w-[32rem] text-[1rem] leading-7 text-white/68">
                The form should feel simple and direct. Ask for enough context to qualify the lead, but not so much that completion drops.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="surface-card rounded-[20px] p-4">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.18em] text-white/42">
                  Timeline
                </div>
                <div className="mt-2 font-display text-[1.2rem] font-semibold text-white">
                  24h reply
                </div>
              </div>
              <div className="surface-card rounded-[20px] p-4">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.18em] text-white/42">
                  Fit
                </div>
                <div className="mt-2 font-display text-[1.2rem] font-semibold text-white">
                  Podcast-first
                </div>
              </div>
              <div className="surface-card rounded-[20px] p-4">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.18em] text-white/42">
                  Output
                </div>
                <div className="mt-2 font-display text-[1.2rem] font-semibold text-white">
                  Trailers + clips
                </div>
              </div>
            </div>
          </div>

          <form className="surface-panel grid gap-6 p-8 sm:p-10">
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="h-13 rounded-[16px] border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-purple-400/45 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-13 rounded-[16px] border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-purple-400/45 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)]"
                />
              </label>
            </div>

            <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                  Podcast / Brand
                </span>
                <input
                  type="text"
                  placeholder="Show or company name"
                  className="h-13 rounded-[16px] border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-purple-400/45 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                  Service Needed
                </span>
                <select className="h-13 rounded-[16px] border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition focus:border-purple-400/45 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)]">
                  <option className="bg-black">Podcast trailers</option>
                  <option className="bg-black">Short-form clips</option>
                  <option className="bg-black">Podcast management</option>
                  <option className="bg-black">Growth strategy</option>
                </select>
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                Budget Range
              </span>
              <select className="h-13 rounded-[16px] border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition focus:border-purple-400/45 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)]">
                <option className="bg-black">Less than $500/month</option>
                <option className="bg-black">$500 - $1,500/month</option>
                <option className="bg-black">$1,500 - $3,000/month</option>
                <option className="bg-black">$3,000+/month</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                Project Details
              </span>
              <textarea
                rows={6}
                placeholder="Tell us about your show, your content goals, posting cadence, and what you want us to handle."
                className="min-h-[170px] rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-purple-400/45 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)]"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="button-primary min-w-[12rem]">
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
