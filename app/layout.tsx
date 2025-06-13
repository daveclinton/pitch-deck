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
  title: "David Clinton | Software Engineer & Technical Consultant",
  description:
    "Frontend & Full-stack Developer specializing in clean code, good design, and technical documentation. Building scalable solutions that feel human.",
  keywords: [
    "Frontend Development",
    "Full-stack Development",
    "Technical Documentation",
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "Express.js",
  ],
  openGraph: {
    title: "David Clinton - Developer & Consultant",
    description: "Building things that are clear, fast, and actually useful.",
    url: "https://pitch-deck.daveclintons.cc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
