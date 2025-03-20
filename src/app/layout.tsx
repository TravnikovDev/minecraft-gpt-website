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
  title: "MinecraftBot - Neural Network Automation",
  description: "An advanced open-source Minecraft bot powered by neural networks to automate building, mining, and combat",
  keywords: "minecraft, bot, automation, AI, neural network, gaming, minecraft mod",
  authors: [{ name: "Rob Shavnickov" }],
  openGraph: {
    title: "MinecraftBot - Neural Network Automation",
    description: "Advanced Minecraft automation using neural networks",
    url: "https://minecraft-bot.dev",
    siteName: "MinecraftBot",
    images: [
      {
        url: "https://minecraft-bot.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "MinecraftBot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MinecraftBot - Neural Network Automation",
    description: "Advanced Minecraft automation using neural networks",
    images: ["https://minecraft-bot.dev/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}