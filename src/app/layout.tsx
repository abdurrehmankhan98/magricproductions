import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BackgroundGlow from "../../components/BackgroundGlow";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Magric Productions",
  description: "Podcast growth landing page",
  icons: {
    icon: "/favicon2.png",
    shortcut: "/favicon2.png",
    apple: "/favicon2.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon2.png",
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
        className={`${poppins.variable} antialiased selection:bg-purple-500/30`}
      >
        <BackgroundGlow />
        {children}
      </body>
    </html>
  );
}
