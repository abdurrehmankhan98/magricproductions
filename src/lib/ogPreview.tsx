/* eslint-disable @next/next/no-img-element */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";
const logoDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/magric-favicon.png")
).toString("base64")}`;

type OgVariant = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  metric: string;
  chips: string[];
  panelLabel: string;
  panelAccent: string;
};

export const ogVariants = {
  home: {
    eyebrow: "Built for creators, podcasts, and brands",
    title: "Podcast & Video Edits That Get You",
    accent: "Noticed.",
    description:
      "High-retention shorts, podcast clips, trailers, and branded videos ready for every platform.",
    metric: "78M+ Organic Views",
    chips: ["Short-form clips", "Podcast editing", "Brand videos"],
    panelLabel: "Ready to publish",
    panelAccent: "+78M views",
  },
  services: {
    eyebrow: "Video editing service packages",
    title: "Editing Systems for Podcasts, Shorts &",
    accent: "Brand Growth.",
    description:
      "Short-form mastery, podcast editing, brand videos, and growth plans shaped around your content goals.",
    metric: "Multi-platform edits",
    chips: ["Shorts", "Podcasts", "Commercials"],
    panelLabel: "Service stack",
    panelAccent: "4 packages",
  },
  portfolio: {
    eyebrow: "See the editing quality",
    title: "High-Impact Storytelling for",
    accent: "Long-Form Content.",
    description:
      "Portfolio-ready video edits built with sharper pacing, cleaner visuals, stronger hooks, and branded polish.",
    metric: "Retention-first edits",
    chips: ["Talking head", "Brand promo", "YouTube"],
    panelLabel: "Portfolio preview",
    panelAccent: "HD edits",
  },
  process: {
    eyebrow: "Simple 3-step workflow",
    title: "From Raw Footage to Ready-to-Post",
    accent: "Content.",
    description:
      "Plan the content, send the files, receive polished edits built for publishing, promotion, and growth.",
    metric: "Clear delivery flow",
    chips: ["Plan", "Edit", "Deliver"],
    panelLabel: "Workflow",
    panelAccent: "3 steps",
  },
  reviews: {
    eyebrow: "Trusted by creators and brands",
    title: "Real Client Feedback for",
    accent: "Real Results.",
    description:
      "Creators, founders, and businesses trust Magric Productions for fast, polished, conversion-focused editing.",
    metric: "Client-approved edits",
    chips: ["Creators", "Founders", "Brands"],
    panelLabel: "Client trust",
    panelAccent: "Verified",
  },
  contact: {
    eyebrow: "Book a focused content plan",
    title: "Share Your Vision. We’ll Shape the",
    accent: "Edit Plan.",
    description:
      "Send your show, brand, goals, and content needs. Get a clear plan for clips, episodes, trailers, or campaigns.",
    metric: "Ready for new projects",
    chips: ["Podcast clips", "Trailers", "Growth plan"],
    panelLabel: "Next step",
    panelAccent: "Book a call",
  },
} satisfies Record<string, OgVariant>;

export type OgVariantKey = keyof typeof ogVariants;

export function getOgVariant(slug: string | undefined): OgVariant {
  if (slug && slug in ogVariants) {
    return ogVariants[slug as OgVariantKey];
  }

  return ogVariants.home;
}

export function createOgImage(variant: OgVariant) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#030306",
          color: "#ffffff",
          fontFamily:
            'Inter, "Helvetica Neue", Arial, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 18%, rgba(168,85,247,0.42) 0, transparent 28%), radial-gradient(circle at 86% 20%, rgba(236,72,153,0.28) 0, transparent 24%), radial-gradient(circle at 70% 92%, rgba(59,130,246,0.18) 0, transparent 26%), linear-gradient(135deg, #05050a 0%, #111019 46%, #050509 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            opacity: 0.16,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 64,
            right: 72,
            bottom: 64,
            display: "flex",
            border: "1px solid rgba(255,255,255,0.13)",
            borderRadius: 34,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))",
            boxShadow:
              "0 30px 120px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.22)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "76px 86px",
            gap: 54,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 668,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 18,
                  background:
                    "linear-gradient(135deg, #a855f7 0%, #7c3aed 56%, #ec4899 100%)",
                  boxShadow: "0 16px 48px rgba(168,85,247,0.35)",
                }}
              >
                <img
                  src={logoDataUrl}
                  alt="Magric Productions"
                  width={42}
                  height={42}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: -1 }}>
                  Magric Productions
                </div>
                <div
                  style={{
                    marginTop: 2,
                    fontSize: 15,
                    color: "rgba(255,255,255,0.62)",
                    textTransform: "uppercase",
                    letterSpacing: 3,
                  }}
                >
                  Podcast & Video Editing Agency
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  padding: "10px 17px",
                  borderRadius: 999,
                  border: "1px solid rgba(192,132,252,0.38)",
                  background: "rgba(168,85,247,0.12)",
                  color: "#d8b4fe",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {variant.eyebrow}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 24,
                  fontSize: 69,
                  lineHeight: 0.96,
                  fontWeight: 900,
                  letterSpacing: -4,
                }}
              >
                {variant.title}
                <span
                  style={{
                    display: "block",
                    color: "#c084fc",
                  }}
                >
                  {variant.accent}
                </span>
              </div>
              <div
                style={{
                  marginTop: 28,
                  maxWidth: 642,
                  fontSize: 25,
                  lineHeight: 1.38,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                {variant.description}
              </div>
            </div>

            <div style={{ display: "flex", gap: 14 }}>
              {variant.chips.map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    padding: "10px 15px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.11)",
                    color: "rgba(255,255,255,0.76)",
                    fontSize: 18,
                    fontWeight: 650,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 390,
                height: 390,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.55), rgba(168,85,247,0.14) 48%, transparent 70%)",
                filter: "blur(14px)",
              }}
            />
            <div
              style={{
                width: 350,
                height: 426,
                display: "flex",
                position: "relative",
                borderRadius: 30,
                border: "1px solid rgba(255,255,255,0.16)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.13), rgba(255,255,255,0.045))",
                boxShadow:
                  "0 28px 78px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    height: 206,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 22,
                    background:
                      "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(236,72,153,0.22)), linear-gradient(180deg, #1f102d, #090911)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <div
                    style={{
                      width: 78,
                      height: 78,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.16)",
                      border: "1px solid rgba(255,255,255,0.26)",
                      fontSize: 36,
                      paddingLeft: 5,
                    }}
                  >
                    ▶
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[88, 58, 78].map((width, index) => (
                    <div
                      key={index}
                      style={{
                        height: 15,
                        width: `${width}%`,
                        borderRadius: 999,
                        background:
                          index === 0
                            ? "linear-gradient(90deg, #c084fc, rgba(192,132,252,0.18))"
                            : "rgba(255,255,255,0.16)",
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "12px 14px",
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.68)",
                    fontSize: 17,
                    fontWeight: 700,
                  }}
                >
                  <span>{variant.panelLabel}</span>
                  <span style={{ color: "#c084fc", marginLeft: "auto" }}>
                    {variant.panelAccent}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                right: 8,
                bottom: 34,
                display: "flex",
                padding: "13px 16px",
                borderRadius: 18,
                background: "rgba(3,3,6,0.72)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#ffffff",
                fontSize: 19,
                fontWeight: 800,
                boxShadow: "0 20px 46px rgba(0,0,0,0.35)",
              }}
            >
              {variant.metric}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
    }
  );
}
