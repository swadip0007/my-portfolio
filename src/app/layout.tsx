import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swadip Patra | Full Stack & Frontend Developer",
  description:
    "Portfolio of Swadip Patra. Web developer passionate about building responsive websites and full stack applications with React, Next.js, TypeScript, and modern technologies.",
  keywords: [
    "Swadip Patra",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Swadip Patra", url: "https://github.com/swadip0007" }],
  creator: "Swadip Patra",
  openGraph: {
    title: "Swadip Patra |Frontend Developer",
    description:
      "Web developer passionate about creating responsive websites and full stack applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swadip Patra | Full Stack & Frontend Developer",
    description:
      "Web developer passionate about creating responsive websites and full stack applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
