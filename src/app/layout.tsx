import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundGlow from "../../components/BackgroundGlow";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://magricproductions.com";
const siteName = "Magric Productions";
const siteDescription =
  "Podcast and video editing agency turning raw footage into high-retention shorts, long-form videos, trailers, and branded content for creators and businesses.";
const ogImage = `${siteUrl}/og/home.png?v=3`;
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/magric-logo.png`,
  image: ogImage,
  description: siteDescription,
  email: "founder.magricproductions@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Podcast editing",
    "Short-form video editing",
    "Long-form video editing",
    "Podcast trailers",
    "Brand video production",
  ],
  sameAs: [
    "https://www.instagram.com/magricproductions",
    "https://www.linkedin.com/company/magric-productions/",
    "https://www.youtube.com/@MagricProductions25",
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Podcast & Video Editing Agency`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "podcast editing",
    "video editing agency",
    "short form video editing",
    "YouTube video editing",
    "podcast trailers",
    "social media video editing",
    "Magric Productions",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: `${siteName} | Podcast & Video Editing Agency`,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} professional podcast and video editing preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Podcast & Video Editing Agency`,
    description: siteDescription,
    images: [ogImage],
  },
  category: "video production",
  icons: {
    icon: "/magric-favicon.png",
    shortcut: "/magric-favicon.png",
    apple: "/magric-favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/magric-favicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased selection:bg-purple-500/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <BackgroundGlow />
        {children}
      </body>
    </html>
  );
}
