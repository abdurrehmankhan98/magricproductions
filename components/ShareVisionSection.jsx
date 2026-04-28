"use client";

import { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import { Mail, MapPin, Instagram, Linkedin, Youtube, Send } from "lucide-react";

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
          text: "✓ Inquiry sent successfully!",
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
    <section className="section-shell relative overflow-hidden !px-0 sm:!px-[1.25rem]">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-[20%] mx-auto h-[600px] max-w-[1200px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,rgba(124,58,237,0.06)_50%,transparent_100%)] blur-[140px]" />

      <div className="section-inner relative z-10 w-full max-w-none sm:max-w-[1200px] px-0 sm:px-6">

        {/* Section Heading — matches FAQ style */}
        <div id="contact" className="section-stack section-center mb-16 scroll-mt-32">
          <div className="section-eyebrow">Contact Us</div>
          <h2 className="font-display max-w-[14ch] text-balance sm:max-w-none text-[clamp(2.3rem,4.5vw,4.5rem)] font-semibold leading-[1] tracking-normal text-white">
            Tell us what you want to <span className="accent-text">build.</span>
          </h2>
          <p className="section-copy max-w-[42rem]">
            Share your show, your goals, and the type of content support you need. We&apos;ll come back with a focused plan instead of a generic pitch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Contact Info */}
          <div className="contact-surface p-8 lg:p-12 flex flex-col justify-between min-h-[400px]">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-normal text-white mb-4" style={{ letterSpacing: '0.0125em' }}>
                Contact Info
              </h2>
              <p className="text-white/40 text-lg lg:text-xl font-normal tracking-normal mb-12">
                Reach out directly or fill the form.
              </p>

              <div className="space-y-8">
                {/* Email Info */}
                <div className="flex items-center gap-5 group">
                  <div className="contact-info-box !rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-label !mb-0.5 !ml-0">Email</span>
                    <a href="mailto:founder.magricproductions@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors break-all">
                      founder.magricproductions@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-center gap-5 group">
                  <div className="contact-info-box !rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-label !mb-0.5 !ml-0">Location</span>
                    <p className="text-white font-medium">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-12">
              <div className="flex items-center gap-4">
                <a href="https://wa.me/923127990883" target="_blank" rel="noopener noreferrer" className="contact-info-box border-white/5 hover:border-white/20">
                  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.523 5.854L.057 23.882l6.184-1.62A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.001-1.368l-.36-.214-3.67.962.979-3.58-.234-.368A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" /></svg>
                </a>
                <a href="https://www.instagram.com/magricproductions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="contact-info-box border-white/5 hover:border-white/20">
                  <Instagram size={18} />
                </a>
                <a href="https://www.linkedin.com/company/magric-productions/" target="_blank" rel="noopener noreferrer" className="contact-info-box border-white/5 hover:border-white/20">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.youtube.com/@MagricProductions25" target="_blank" rel="noopener noreferrer" className="contact-info-box border-white/5 hover:border-white/20">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="contact-surface p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="grid gap-6">
              {/* Success/Error Message */}
              {message.text && (
                <div
                  className={`rounded-xl px-4 py-3 text-[0.9rem] font-medium transition-all ${message.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                >
                  {message.text}
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div className="space-y-0">
                  <label className="contact-label">Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Your Name"
                    className="contact-input"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1 ml-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="space-y-0">
                  <label className="contact-label">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="contact-input"
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1 ml-1">{errors.email}</p>}
                </div>
              </div>

              {/* Service Selection */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-0">
                  <label className="contact-label">Podcast/Brand</label>
                  <input
                    type="text"
                    value={formData.podcastBrand}
                    onChange={(e) => handleChange("podcastBrand", e.target.value)}
                    placeholder="Show or Brand name"
                    className="contact-input"
                  />
                  {errors.podcastBrand && <p className="text-[11px] text-red-400 mt-1 ml-1">{errors.podcastBrand}</p>}
                </div>

                <CustomSelect
                  label="Service"
                  options={serviceOptions}
                  placeholder="Select a service"
                  value={formData.serviceNeeded}
                  onChange={(value) => handleChange("serviceNeeded", value)}
                />
              </div>

              {/* Budget Selection */}
              <CustomSelect
                label="Monthly Budget"
                options={budgetOptions}
                placeholder="Select your budget range"
                value={formData.budgetRange}
                onChange={(value) => handleChange("budgetRange", value)}
              />

              {/* Project Details */}
              <div className="space-y-0">
                <label className="contact-label">Message</label>
                <textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => handleChange("projectDetails", e.target.value)}
                  placeholder="Tell us about your project..."
                  className="contact-input min-h-[140px] resize-none"
                />
                {errors.projectDetails && <p className="text-[11px] text-red-400 mt-1 ml-1">{errors.projectDetails}</p>}
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-contact-submit flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
