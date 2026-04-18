"use client";

import { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";

export default function ShareVisionSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    podcastBrand: "",
    serviceNeeded: "",
    budgetRange: "",
    projectDetails: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [errors, setErrors] = useState({});

  const serviceOptions = [
    { label: "Podcast trailers", value: "podcast-trailers" },
    { label: "Short-form clips", value: "short-clips" },
    { label: "Podcast management", value: "podcast-management" },
    { label: "Growth strategy", value: "growth-strategy" },
  ];

  const budgetOptions = [
    { label: "Less than $500/month", value: "less-500" },
    { label: "$500 - $1,500/month", value: "500-1500" },
    { label: "$1,500 - $3,000/month", value: "1500-3000" },
    { label: "$3,000+/month", value: "3000-plus" },
  ];

  // Auto-dismiss success messages after 4 seconds
  useEffect(() => {
    if (message.text && message.type === "success") {
      const timer = setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.podcastBrand.trim()) {
      newErrors.podcastBrand = "Podcast/Brand name is required";
    }

    if (!formData.serviceNeeded) {
      newErrors.serviceNeeded = "Please select a service";
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = "Please select a budget range";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    // Validate form
    if (!validateForm()) {
      setMessage({
        type: "error",
        text: "Please fill in all required fields correctly.",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xojpdweg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          podcastBrand: formData.podcastBrand,
          serviceNeeded: formData.serviceNeeded,
          budgetRange: formData.budgetRange,
          projectDetails: formData.projectDetails,
        }),
      });

      if (response.ok) {
        setMessage({
          type: "success",
          text: "✓ Inquiry sent successfully! We'll be in touch within 24 hours.",
        });

        // Clear form
        setFormData({
          fullName: "",
          email: "",
          podcastBrand: "",
          serviceNeeded: "",
          budgetRange: "",
          projectDetails: "",
        });
        setErrors({});
      } else {
        setMessage({
          type: "error",
          text: "Failed to send inquiry. Please try again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

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

        <div className="mx-auto mt-16 flex flex-col items-center max-w-[1100px] gap-8">
          <div className="surface-card flex flex-col justify-start gap-12 p-8 sm:p-10 w-full lg:max-w-[417px]">
            <div>
              <div className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white/42">
                What to expect
              </div>
              <h3 className="mt-4 font-display text-[2rem] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
                Clean process. <br /> Fast replies. <br /> No wasted calls.
              </h3>
              <p className="mt-5 max-w-[32rem] text-[1rem] leading-7 text-white/68">
                The form should feel simple and direct. Ask for enough context to qualify the lead, but not so much that completion drops.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="surface-card rounded-[20px] p-4">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.18em] text-white/42">
                  Timeline
                </div>
                <div className="mt-2 font-display text-[1.2rem] font-bold leading-[1.1] text-white">
                  24h <br /> reply
                </div>
              </div>
              <div className="surface-card rounded-[20px] p-4">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.18em] text-white/42">
                  Fit
                </div>
                <div className="mt-2 font-display text-[1.2rem] font-bold leading-[1.1] text-white">
                  Podcast- <br /> first
                </div>
              </div>
              <div className="surface-card rounded-[20px] p-4">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.18em] text-white/42">
                  Output
                </div>
                <div className="mt-2 font-display text-[1.2rem] font-bold leading-[1.1] text-white">
                  Trailers <br /> + clips
                </div>
              </div>
            </div>
          </div>


          <form onSubmit={handleSubmit} className="surface-panel grid gap-6 p-8 sm:p-10 w-full lg:max-w-[652px]">
            {/* Success/Error Message */}
            {message.text && (
              <div
                className={`rounded-[16px] px-4 py-3 text-[0.9rem] font-medium ${message.type === "success"
                  ? "bg-green-500/20 border border-green-500/40 text-green-200"
                  : "bg-red-500/20 border border-red-500/40 text-red-200"
                  }`}
              >
                {message.text}
              </div>
            )}

            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              <div className="grid gap-2">
                <label>
                  <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                    Name {errors.fullName && <span className="text-red-400">*</span>}
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Your name"
                  className={`h-13 rounded-[16px] border bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-white/28 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)] ${errors.fullName
                    ? "border-red-500/50 focus:border-red-500/70"
                    : "border-white/10 focus:border-purple-400/45"
                    }`}
                />
                {errors.fullName && (
                  <span className="text-[0.75rem] text-red-400">{errors.fullName}</span>
                )}
              </div>

              <div className="grid gap-2">
                <label>
                  <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                    Email Address {errors.email && <span className="text-red-400">*</span>}
                  </span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  className={`h-13 rounded-[16px] border bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-white/28 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)] ${errors.email
                    ? "border-red-500/50 focus:border-red-500/70"
                    : "border-white/10 focus:border-purple-400/45"
                    }`}
                />
                {errors.email && (
                  <span className="text-[0.75rem] text-red-400">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
              <div className="grid gap-2">
                <label>
                  <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                    Podcast Brand {errors.podcastBrand && <span className="text-red-400">*</span>}
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.podcastBrand}
                  onChange={(e) => handleChange("podcastBrand", e.target.value)}
                  placeholder="Show or company name"
                  className={`h-13 rounded-[16px] border bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-white/28 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)] ${errors.podcastBrand
                    ? "border-red-500/50 focus:border-red-500/70"
                    : "border-white/10 focus:border-purple-400/45"
                    }`}
                />
                {errors.podcastBrand && (
                  <span className="text-[0.75rem] text-red-400">{errors.podcastBrand}</span>
                )}
              </div>

              <div>
                <CustomSelect
                  label={`I need help with... ${errors.serviceNeeded ? " *" : ""}`}
                  options={serviceOptions}
                  placeholder="Select a service"
                  value={formData.serviceNeeded}
                  onChange={(value) => handleChange("serviceNeeded", value)}
                />
                {errors.serviceNeeded && (
                  <span className="text-[0.75rem] text-red-400 mt-1 block">{errors.serviceNeeded}</span>
                )}
              </div>
            </div>

            <div>
              <CustomSelect
                label={`Monthly Budget ${errors.budgetRange ? " *" : ""}`}
                options={budgetOptions}
                placeholder="Select your budget"
                value={formData.budgetRange}
                onChange={(value) => handleChange("budgetRange", value)}
              />
              {errors.budgetRange && (
                <span className="text-[0.75rem] text-red-400 mt-1 block">{errors.budgetRange}</span>
              )}
            </div>

            <div className="grid gap-2">
              <label>
                <span className="text-[0.82rem] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/52">
                  How can we help? {errors.projectDetails && <span className="text-red-400">*</span>}
                </span>
              </label>
              <textarea
                rows={6}
                value={formData.projectDetails}
                onChange={(e) => handleChange("projectDetails", e.target.value)}
                placeholder="Tell us about your show, your content goals, posting cadence, and what you want us to handle."
                className={`min-h-[170px] rounded-[18px] border bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)] ${errors.projectDetails
                  ? "border-red-500/50 focus:border-red-500/70"
                  : "border-white/10 focus:border-purple-400/45"
                  }`}
              />
              {errors.projectDetails && (
                <span className="text-[0.75rem] text-red-400">{errors.projectDetails}</span>
              )}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isLoading}
                className="button-primary min-w-[12rem] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? "Sending..." : "Send inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
