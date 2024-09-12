import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.davechbga.vercel.app/"),
  title: "David Chiriboga",
  description:
    "David Chiriboga is a frontend developer based in Ecuador. He specializes in building websites, web applications, and user interfaces.",
  generator: "Next.js",
  applicationName: "David Chiriboga",
  keywords: [
    "Portfolio template",
    "React",
    "developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
  ],

  openGraph: {
    title: "David Chiriboga",
    description:
      "David Chiriboga is a frontend developer based in Ecuador. He specializes in building websites, web applications, and user interfaces.",
    url: "https://www.davechbga.vercel.app/",
    siteName: "www.davechbga.vercel.app",
    images: [
      {
        url: "./public/metadata.jpg",
        width: 1200,
        height: 630,
        alt: "David Chiriboga",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Chiriboga",
    description:
      "David Chiriboga is a frontend developer based in Ecuador. He specializes in building websites, web applications, and user interfaces.",
    creator: "@davechbga",
    creatorId: "0000000000",
    images: ["./public/metadata.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
