import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minecraft-GPT — AI Minecraft Bot",
  description:
    "An advanced open-source Minecraft bot powered by GPT that accepts commands through chat and automates building, mining, farming, and combat",
  keywords: "minecraft, bot, automation, AI, GPT, gaming, mineflayer",
  authors: [{ name: "Roman Travnikov" }],
  openGraph: {
    title: "Minecraft-GPT — AI Minecraft Bot",
    description:
      "Open-source Minecraft automation powered by GPT: chat commands for building, mining, farming, and combat",
    url: "https://travnikovdev.github.io/minecraft-gpt-website/",
    siteName: "Minecraft-GPT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Minecraft-GPT — AI Minecraft Bot",
    description:
      "Open-source Minecraft automation powered by GPT: chat commands for building, mining, farming, and combat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}