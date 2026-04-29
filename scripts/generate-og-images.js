/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = process.cwd();
const outputDir = path.join(root, "public", "og");

function imageData(filePath) {
  const absolutePath = path.join(root, "public", filePath);
  const ext = path.extname(filePath).toLowerCase();
  const mime =
    ext === ".jpg" || ext === ".jpeg"
      ? "image/jpeg"
      : ext === ".webp"
        ? "image/webp"
        : "image/png";

  return `data:${mime};base64,${fs.readFileSync(absolutePath).toString("base64")}`;
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const assets = {
  logo: imageData("magric-favicon.png"),
  content: imageData("Screenshot-2025-02-20-015931-min-e1739999114301.png"),
  service: imageData("Brown and Pink Minimal Icons Icon Set.png"),
  badge: imageData("verfied badge1.png"),
  reviewA: imageData("reviews/Bilal Haider.png"),
  reviewB: imageData("reviews/Joe Danna.png"),
  reviewC: imageData("reviews/Muhammad Etisham.png"),
  reviewD: imageData("reviews/Peter Thompson.png"),
  reviewE: imageData("reviews/Rayan.png"),
  reviewF: imageData("reviews/Sidra.png"),
};

const variants = {
  home: {
    eyebrow: "Premium Video Editing Studio",
    title: "Podcast & Video Edits",
    accent: "That Get Noticed",
    subtitle: "Brand-led content experiences",
    services: "Shorts • Podcasts • Trailers • Brand Videos",
    domain: "magricproductions.com",
    stat: "78M+ organic views",
    cards: [
      ["profile", assets.reviewD, "Hook-driven edits", "Creator Content", 650, 92, 258, 410],
      ["wide", assets.content, "Social-first cuts", "Podcast Clips", 842, 136, 300, 224],
      ["wide", assets.service, "Ready to publish", "Brand Videos", 800, 372, 318, 206],
    ],
  },
  services: {
    eyebrow: "Production Packages",
    title: "Editing Services",
    accent: "Built for Growth",
    subtitle: "Short-form, podcast, brand, and strategy support",
    services: "Shorts • Podcast Editing • Commercials • Growth Plan",
    domain: "magricproductions.com/services",
    stat: "4 service lanes",
    cards: [
      ["square", assets.service, "Reels, TikToks, Shorts", "Short-Form", 646, 112, 284, 284],
      ["wide", assets.content, "Multi-cam, audio, captions", "Podcast Editing", 850, 152, 310, 230],
      ["profile", assets.reviewF, "Commercial polish", "Brand Videos", 790, 398, 330, 196],
    ],
  },
  portfolio: {
    eyebrow: "Portfolio Showcase",
    title: "High-Impact Storytelling",
    accent: "For Long-Form Content",
    subtitle: "Proof-led video editing for creators and brands",
    services: "Talking Head • Corporate • Brand Promo • YouTube",
    domain: "magricproductions.com/portfolio",
    stat: "Retention-first edits",
    cards: [
      ["phone", assets.content, "Authority-building videos", "Long-Form Edits", 674, 88, 262, 414],
      ["profile", assets.reviewE, "Clean pacing and story", "Creator Portfolio", 860, 128, 302, 230],
      ["wide", assets.service, "Platform-ready delivery", "Branded Assets", 816, 374, 312, 202],
    ],
  },
  process: {
    eyebrow: "Simple 3-Step Workflow",
    title: "From Raw Footage",
    accent: "To Ready-to-Post",
    subtitle: "A clear production flow from planning to delivery",
    services: "Plan • Edit • Deliver",
    domain: "magricproductions.com/process",
    stat: "Fast delivery flow",
    steps: [
      ["01", "Understand & Plan", 660, 106, 260, 214],
      ["02", "Edit & Refine", 852, 210, 292, 238],
      ["03", "Deliver & Publish", 744, 364, 260, 206],
    ],
  },
  reviews: {
    eyebrow: "Creator & Brand Trust",
    title: "Client Feedback",
    accent: "That Speaks Clearly",
    subtitle: "Real creators and businesses trust the editing quality",
    services: "Creators • Founders • Brands • Podcasts",
    domain: "magricproductions.com/reviews",
    stat: "Verified client trust",
    cards: [
      ["review", assets.reviewA, "Highly recommended", "Bilal Haider", 666, 132, 276, 222],
      ["review", assets.reviewB, "Top-quality edits", "Joe Danna", 882, 230, 300, 236],
      ["review", assets.reviewC, "Detail-oriented work", "Muhammad Etisham", 812, 86, 280, 214],
    ],
  },
  contact: {
    eyebrow: "Book a Focused Content Plan",
    title: "Share Your Vision",
    accent: "We’ll Shape the Edit",
    subtitle: "Clear content plan for your next edit",
    services: "Podcast Clips • Trailers • Growth Plan",
    domain: "magricproductions.com/contact",
    stat: "Ready for new projects",
    cards: [
      ["profile", assets.reviewF, "Show, goals, and assets", "Project Brief", 672, 88, 258, 412],
      ["wide", assets.badge, "Clear plan, then edits", "Trusted Delivery", 852, 140, 300, 218],
      ["wide", assets.service, "Start your production flow", "Book a Call", 812, 386, 310, 196],
    ],
  },
};

function cardMarkup(card) {
  const [type, src, kicker, label, x, y, w, h] = card;
  const radius = type === "phone" || type === "profile" ? 30 : 24;
  const imageOpacity = type === "review" ? 0.42 : 0.8;
  const avatar = type === "review"
    ? `<image href="${src}" x="${x + 22}" y="${y + 22}" width="66" height="66" preserveAspectRatio="xMidYMid slice" clip-path="url(#avatarClip)" />`
    : "";

  return `
    <g filter="url(#cardShadow)">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
      <clipPath id="clip-${label.replace(/\W/g, "")}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" /></clipPath>
      <g clip-path="url(#clip-${label.replace(/\W/g, "")})">
        ${type === "profile" ? `
          <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#profileBg)" />
          <circle cx="${x + Math.round(w * 0.52)}" cy="${y + Math.round(h * 0.36)}" r="${Math.round(Math.min(w, h) * 0.35)}" fill="rgba(168,85,247,0.28)" />
          <image href="${src}" x="${x + Math.round(w * 0.12)}" y="${y + Math.round(h * 0.08)}" width="${Math.round(w * 0.76)}" height="${Math.round(h * 0.64)}" preserveAspectRatio="xMidYMid meet" opacity="0.96" />
          <rect x="${x + 24}" y="${y + Math.round(h * 0.62)}" width="${w - 48}" height="18" rx="9" fill="rgba(255,255,255,0.16)" />
          <rect x="${x + 24}" y="${y + Math.round(h * 0.62)}" width="${Math.round((w - 48) * 0.68)}" height="18" rx="9" fill="url(#purpleLine)" />
          <circle cx="${x + 42}" cy="${y + Math.round(h * 0.76)}" r="10" fill="#c084fc"/>
          <rect x="${x + 60}" y="${y + Math.round(h * 0.745)}" width="${Math.round(w * 0.42)}" height="12" rx="6" fill="rgba(255,255,255,0.64)" />
          <rect x="${x + 60}" y="${y + Math.round(h * 0.805)}" width="${Math.round(w * 0.58)}" height="10" rx="5" fill="rgba(255,255,255,0.28)" />
        ` : `
          <image href="${src}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" opacity="${imageOpacity}" />
        `}
        <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#cardFade)" />
        <rect x="${x + 18}" y="${y + 18}" width="${Math.min(116, w - 36)}" height="30" rx="15" fill="rgba(168,85,247,0.30)" stroke="rgba(216,180,254,0.36)" />
        <circle cx="${x + 39}" cy="${y + 33}" r="5" fill="#d8b4fe" />
        <rect x="${x + 54}" y="${y + 29}" width="${Math.min(56, w - 88)}" height="8" rx="4" fill="rgba(255,255,255,0.66)" />
        <circle cx="${x + w - 34}" cy="${y + 30}" r="4" fill="rgba(216,180,254,0.9)" />
        <circle cx="${x + w - 52}" cy="${y + 30}" r="4" fill="rgba(255,255,255,0.58)" />
        <circle cx="${x + w - 70}" cy="${y + 30}" r="4" fill="rgba(255,255,255,0.32)" />
        <rect x="${x + 22}" y="${y + h - 116}" width="${w - 44}" height="7" rx="4" fill="rgba(255,255,255,0.18)" />
        <rect x="${x + 22}" y="${y + h - 116}" width="${Math.max(76, Math.round((w - 44) * 0.58))}" height="7" rx="4" fill="url(#purpleLine)" />
        <circle cx="${x + 24 + Math.max(76, Math.round((w - 44) * 0.58))}" cy="${y + h - 112.5}" r="9" fill="#d8b4fe" stroke="rgba(0,0,0,0.45)" stroke-width="3" />
        ${avatar}
        <rect x="${x + 20}" y="${y + h - 86}" width="${w - 40}" height="66" rx="18" fill="rgba(0,0,0,0.58)" stroke="rgba(255,255,255,0.14)" />
        <text x="${x + 40}" y="${y + h - 54}" class="cardKicker">${esc(kicker)}</text>
        <text x="${x + 40}" y="${y + h - 25}" class="cardTitle">${esc(label)}</text>
      </g>
    </g>
  `;
}

function stepMarkup(step) {
  const [num, label, x, y, w, h] = step;
  return `
    <g filter="url(#cardShadow)">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="24" fill="url(#stepGradient)" stroke="rgba(255,255,255,0.18)" />
      <circle cx="${x + w - 38}" cy="${y + 34}" r="9" fill="rgba(216,180,254,0.82)" />
      <circle cx="${x + w - 64}" cy="${y + 34}" r="6" fill="rgba(255,255,255,0.42)" />
      <rect x="${x + 28}" y="${y + h - 38}" width="${w - 56}" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
      <rect x="${x + 28}" y="${y + h - 38}" width="${Math.round((w - 56) * 0.62)}" height="8" rx="4" fill="url(#purpleLine)" />
      <text x="${x + 28}" y="${y + 86}" class="stepNum">${num}</text>
      <rect x="${x + 31}" y="${y + 112}" width="68" height="6" rx="3" fill="#c084fc" />
      <text x="${x + 30}" y="${y + 162}" class="stepLabel">${esc(label)}</text>
    </g>
  `;
}

function svgForVariant(variant) {
  const rightVisuals = variant.steps
    ? variant.steps.map(stepMarkup).join("")
    : variant.cards.map(cardMarkup).join("");

  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#030303"/>
      <stop offset="45%" stop-color="#060509"/>
      <stop offset="100%" stop-color="#111018"/>
    </linearGradient>
    <radialGradient id="purpleGlow" cx="72%" cy="10%" r="54%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.38"/>
      <stop offset="58%" stop-color="#a855f7" stop-opacity="0.09"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="logoBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="56%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="purpleLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="55%" stop-color="#c084fc"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="cardFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.68"/>
    </linearGradient>
    <radialGradient id="profileBg" cx="50%" cy="36%" r="75%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.55"/>
      <stop offset="52%" stop-color="#34144c" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#080710"/>
    </radialGradient>
    <linearGradient id="stepGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.68"/>
      <stop offset="100%" stop-color="#181020" stop-opacity="0.95"/>
    </linearGradient>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#000" flood-opacity="0.48"/>
    </filter>
    <clipPath id="avatarClip"><circle cx="55" cy="55" r="33"/></clipPath>
    <style>
      .brand { font-family: Inter, Arial, sans-serif; font-size: 29px; font-weight: 800; letter-spacing: -1px; fill: #fff; }
      .eyebrow { font-family: Inter, Arial, sans-serif; font-size: 16px; font-weight: 800; letter-spacing: 5px; text-transform: uppercase; fill: #c084fc; }
      .title { font-family: Inter, Arial, sans-serif; font-size: 58px; font-weight: 900; letter-spacing: -3.4px; fill: #fff; }
      .accent { font-family: Inter, Arial, sans-serif; font-size: 58px; font-weight: 900; letter-spacing: -3.4px; fill: #c084fc; }
      .subtitle { font-family: Inter, Arial, sans-serif; font-size: 30px; font-weight: 800; letter-spacing: -1.5px; fill: rgba(255,255,255,0.92); }
      .services { font-family: Inter, Arial, sans-serif; font-size: 22px; font-weight: 760; fill: rgba(255,255,255,0.74); }
      .domain { font-family: Inter, Arial, sans-serif; font-size: 19px; font-weight: 800; fill: rgba(255,255,255,0.58); }
      .stat { font-family: Inter, Arial, sans-serif; font-size: 19px; font-weight: 800; fill: #c084fc; }
      .cardKicker { font-family: Inter, Arial, sans-serif; font-size: 15px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; fill: #d8b4fe; }
      .cardTitle { font-family: Inter, Arial, sans-serif; font-size: 27px; font-weight: 850; fill: #fff; }
      .stepNum { font-family: Inter, Arial, sans-serif; font-size: 76px; font-weight: 900; fill: rgba(255,255,255,0.92); }
      .stepLabel { font-family: Inter, Arial, sans-serif; font-size: 27px; font-weight: 850; fill: #fff; }
    </style>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect width="1200" height="630" fill="url(#purpleGlow)" />
  <g opacity="0.16">
    <path d="M650 78H1160" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M650 138H1160" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M650 198H1160" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M650 258H1160" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M650 318H1160" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M650 378H1160" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M650 438H1160" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M650 498H1160" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M704 40V596" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M784 40V596" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M864 40V596" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M944 40V596" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M1024 40V596" stroke="#d8b4fe" stroke-width="1"/>
    <path d="M1104 40V596" stroke="#d8b4fe" stroke-width="1"/>
  </g>
  <circle cx="790" cy="300" r="380" fill="none" stroke="rgba(168,85,247,0.48)" stroke-width="1.5"/>
  <circle cx="835" cy="300" r="360" fill="none" stroke="rgba(168,85,247,0.14)" stroke-width="32"/>
  <rect x="612" y="0" width="588" height="630" fill="rgba(168,85,247,0.06)" />

  <g transform="translate(68 78)">
    <rect x="0" y="0" width="76" height="76" rx="18" fill="url(#logoBg)" />
    <image href="${assets.logo}" x="11" y="11" width="54" height="54" preserveAspectRatio="xMidYMid meet"/>
    <text x="96" y="33" class="brand">Magric</text>
    <text x="198" y="33" class="brand" fill="#c084fc">Productions</text>
    <text x="96" y="76" class="eyebrow">${esc(variant.eyebrow)}</text>
  </g>

  <text x="68" y="276" class="title">${esc(variant.title)}</text>
  <text x="68" y="344" class="accent">${esc(variant.accent)}</text>
  <rect x="68" y="398" width="88" height="7" rx="4" fill="url(#purpleLine)"/>
  <text x="68" y="472" class="subtitle">${esc(variant.subtitle)}</text>
  <text x="68" y="532" class="services">${esc(variant.services)}</text>
  <text x="68" y="574" class="domain">${esc(variant.domain)}</text>
  <text x="68" y="604" class="stat">${esc(variant.stat)}</text>

  ${rightVisuals}
</svg>`;
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  await Promise.all(
    Object.entries(variants).map(async ([name, variant]) => {
      const svg = svgForVariant(variant);
      const outputPath = path.join(outputDir, `${name}.png`);
      await sharp(Buffer.from(svg)).png().toFile(outputPath);
      console.log(`created ${path.relative(root, outputPath)}`);
    })
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
