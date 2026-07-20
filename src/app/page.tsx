"use client";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaYoutube, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import { RiSwordFill, RiRobot2Fill } from "react-icons/ri";
import { GiMineralPearls, GiWoodCabin } from "react-icons/gi";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#videos", label: "Videos" },
  { href: "#about", label: "About" },
  { href: "https://github.com/TravnikovDev/minecraft-gpt", label: "GitHub" },
];

// The main landing page component
const MinecraftBotLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1D1F21] text-white font-minecraft">
      {/* Navigation */}
      <nav className="bg-[#232B2B] px-6 py-4 border-b-2 border-[#5D7C15]">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#7DAF2B]">
            Minecraft<span className="text-[#E7A83B]">-GPT</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#7DAF2B] transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 text-[#E7A83B]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 pb-2 flex flex-col space-y-3 border-t-2 border-[#2F2F2F] pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#7DAF2B] transition text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6">
        {/* Minecraft-style dirt background overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/dirt-bg.png')] bg-repeat"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#7DAF2B]">
            <span className="block">The Future of</span>
            <span className="text-[#E7A83B]">Minecraft Automation</span>
          </h1>

          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            An advanced open-source Minecraft bot powered by GPT that accepts
            commands through chat and implements them in-game.
          </p>

          <span className="inline-block mb-8 px-4 py-1 text-lg font-semibold text-[#1D1F21] bg-[#E7A83B] pixel-border">
            Coming Soon
          </span>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/TravnikovDev/minecraft-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button bg-[#4C4C4C] hover:bg-[#5D7C15] text-white py-3 px-8 font-medium flex items-center gap-2 border-t-2 border-l-2 border-[#828282] border-b-2 border-r-2 border-[#2F2F2F] transition"
            >
              <FaGithub size={24} /> GitHub Repository
            </a>
          </div>

          <div className="bg-[#4C4C4C] p-6 pixel-border max-w-md mx-auto border-2 border-[#828282]">
            <h2 className="text-xl font-bold mb-4 text-[#E7A83B]">
              Stay Connected
            </h2>
            <p className="mb-6">
              Follow us on social media for updates and early access!
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://youtube.com/@minecraft-gpt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#B93333] hover:text-[#FF0000] transition"
              >
                <FaYoutube size={32} />
              </a>
              <a
                href="https://tiktok.com/@minecraft-gpt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#3BABE7] hover:text-[#69C9FF] transition"
              >
                <FaTiktok size={28} />
              </a>
              <a
                href="https://instagram.com/minecraft-gpt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#C13584] hover:text-[#E1306C] transition"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://twitter.com/minecraft_gpt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-[#1DA1F2] hover:text-[#4EBEFC] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 px-6 bg-[#2F2F2F] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">
            Bot Capabilities
          </h2>

          <div className="relative">
            {/* Left shadow gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#2F2F2F] to-transparent z-10 pointer-events-none"></div>

            {/* Right shadow gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#2F2F2F] to-transparent z-10 pointer-events-none"></div>

            <button
              type="button"
              aria-label="Scroll capabilities left"
              onClick={() =>
                document
                  .getElementById("features-rail")
                  ?.scrollBy({ left: -320 })
              }
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-[#4C4C4C] hover:bg-[#5D7C15] text-white text-2xl pixel-border transition"
            >
              &lsaquo;
            </button>
            <button
              type="button"
              aria-label="Scroll capabilities right"
              onClick={() =>
                document
                  .getElementById("features-rail")
                  ?.scrollBy({ left: 320 })
              }
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-[#4C4C4C] hover:bg-[#5D7C15] text-white text-2xl pixel-border transition"
            >
              &rsaquo;
            </button>

            <div
              id="features-rail"
              className="flex overflow-x-auto pb-8 hide-scrollbar space-x-6"
            >
              {/* Feature 1 */}
              <div className="flex-shrink-0 w-[300px]">
                <div className="bg-[#232B2B] p-6 pixel-border transform hover:-translate-y-2 transition duration-300 h-full">
                  <div className="bg-[#5D7C15] w-16 h-16 flex items-center justify-center mb-4 mx-auto pixel-border">
                    <GiWoodCabin size={36} className="text-[#E7A83B]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-[#7DAF2B]">
                    Automated Building
                  </h3>
                  <p className="text-gray-300 text-center">
                    Construct complex structures automatically with GPT-powered
                    precision
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex-shrink-0 w-[300px]">
                <div className="bg-[#232B2B] p-6 pixel-border transform hover:-translate-y-2 transition duration-300 h-full">
                  <div className="bg-[#5D7C15] w-16 h-16 flex items-center justify-center mb-4 mx-auto pixel-border">
                    <GiMineralPearls size={36} className="text-[#3BABE7]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-[#7DAF2B]">
                    Intelligent Mining
                  </h3>
                  <p className="text-gray-300 text-center">
                    Efficiently gather resources with smart pathfinding and
                    priority systems
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex-shrink-0 w-[300px]">
                <div className="bg-[#232B2B] p-6 pixel-border transform hover:-translate-y-2 transition duration-300 h-full">
                  <div className="bg-[#5D7C15] w-16 h-16 flex items-center justify-center mb-4 mx-auto pixel-border">
                    <RiSwordFill size={36} className="text-[#B93333]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-[#7DAF2B]">
                    Combat Assistant
                  </h3>
                  <p className="text-gray-300 text-center">
                    Advanced combat strategies to keep you safe from mobs and
                    other players
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex-shrink-0 w-[300px]">
                <div className="bg-[#232B2B] p-6 pixel-border transform hover:-translate-y-2 transition duration-300 h-full">
                  <div className="bg-[#5D7C15] w-16 h-16 flex items-center justify-center mb-4 mx-auto pixel-border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E7A83B"
                      strokeWidth="2"
                    >
                      <path d="M12 2v8m0 0v6m0-6h9m-18 0h9"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-[#7DAF2B]">
                    Natural Language Commands
                  </h3>
                  <p className="text-gray-300 text-center">
                    Control your bot with simple chat messages like &quot;build
                    a castle&quot; or &quot;mine for diamonds&quot;
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex-shrink-0 w-[300px]">
                <div className="bg-[#232B2B] p-6 pixel-border transform hover:-translate-y-2 transition duration-300 h-full">
                  <div className="bg-[#5D7C15] w-16 h-16 flex items-center justify-center mb-4 mx-auto pixel-border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3BABE7"
                      strokeWidth="2"
                    >
                      <path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0M4 12a8 8 0 0 1 16 0M4 12a8 8 0 0 0 16 0M6 12a6 6 0 0 1 12 0M6 12a6 6 0 0 0 12 0"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-[#7DAF2B]">
                    Adaptive Learning
                  </h3>
                  <p className="text-gray-300 text-center">
                    Bot learns from your preferences and playing style to become
                    more efficient over time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Videos Section - UPDATED */}
      <section id="videos" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#E7A83B]">
            Featured bot actions
          </h2>
          <p className="mb-12 text-center max-w-3xl mx-auto">
            See MinecraftBot in action with these short demonstrations. Watch
            how it handles various tasks automatically using neural network
            technology.
          </p>

          <div className="relative">
            {/* Left shadow gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#1D1F21] to-transparent z-10 pointer-events-none"></div>

            {/* Right shadow gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#1D1F21] to-transparent z-10 pointer-events-none"></div>

            <button
              type="button"
              aria-label="Scroll videos left"
              onClick={() =>
                document
                  .getElementById("videos-rail")
                  ?.scrollBy({ left: -320 })
              }
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-[#4C4C4C] hover:bg-[#5D7C15] text-white text-2xl pixel-border transition"
            >
              &lsaquo;
            </button>
            <button
              type="button"
              aria-label="Scroll videos right"
              onClick={() =>
                document
                  .getElementById("videos-rail")
                  ?.scrollBy({ left: 320 })
              }
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-[#4C4C4C] hover:bg-[#5D7C15] text-white text-2xl pixel-border transition"
            >
              &rsaquo;
            </button>

            <div
              id="videos-rail"
              className="flex overflow-x-auto pb-8 hide-scrollbar space-x-6"
            >
              {/* Video Card 1 - UPDATED */}
              <div className="flex-shrink-0 video-card">
                <div className="bg-[#232B2B] overflow-hidden pixel-border aspect-9/18 flex flex-col h-full">
                  <div className="relative flex-grow">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-[#1D1F21] h-full">
                      <div className="absolute inset-0 bg-[url('/images/video1.jpg')] bg-cover bg-center"></div>
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Absolutely centered play button */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9.5 7.5L16.5 12L9.5 16.5V7.5Z"
                            fill="white"
                            stroke="white"
                          />
                        </svg>
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        0:42
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-[#5D7C15] text-white text-xs px-2 py-1 pixel-border">
                      <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Building
                    </div>
                  </div>

                  {/* Content positioned at the bottom */}
                  <div className="p-4 mt-auto">
                    <h3 className="text-lg font-bold text-[#7DAF2B]">
                      Automated House Construction
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Complete house building with interior decoration in under
                      a minute
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Card 2 - UPDATED */}
              <div className="flex-shrink-0 video-card">
                <div className="bg-[#232B2B] overflow-hidden pixel-border aspect-9/18 flex flex-col h-full">
                  <div className="relative flex-grow">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-[#1D1F21] h-full">
                      <div className="absolute inset-0 bg-[url('/images/video2.jpg')] bg-cover bg-center"></div>
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Absolutely centered play button */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9.5 7.5L16.5 12L9.5 16.5V7.5Z"
                            fill="white"
                            stroke="white"
                          />
                        </svg>
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        0:57
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-[#3BABE7] text-[#1D1F21] text-xs px-2 py-1 pixel-border">
                      <span className="inline-block w-2 h-2 bg-[#1D1F21] rounded-full mr-1"></span>{" "}
                      Mining
                    </div>
                  </div>

                  {/* Content positioned at the bottom */}
                  <div className="p-4 mt-auto">
                    <h3 className="text-lg font-bold text-[#7DAF2B]">
                      Diamond Mining Expedition
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Smart pathfinding through caves to locate and mine
                      diamonds
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Card 3 - UPDATED */}
              <div className="flex-shrink-0 video-card">
                <div className="bg-[#232B2B] overflow-hidden pixel-border aspect-9/18 flex flex-col h-full">
                  <div className="relative flex-grow">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-[#1D1F21] h-full">
                      <div className="absolute inset-0 bg-[url('/images/video3.jpg')] bg-cover bg-center"></div>
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Absolutely centered play button */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9.5 7.5L16.5 12L9.5 16.5V7.5Z"
                            fill="white"
                            stroke="white"
                          />
                        </svg>
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        1:24
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-[#993333] text-white text-xs px-2 py-1 pixel-border">
                      <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Combat
                    </div>
                  </div>

                  {/* Content positioned at the bottom */}
                  <div className="p-4 mt-auto">
                    <h3 className="text-lg font-bold text-[#7DAF2B]">
                      Creeper Defense System
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      AI combat tactics to protect your base from hostile mobs
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Card 4 - UPDATED */}
              <div className="flex-shrink-0 video-card">
                <div className="bg-[#232B2B] overflow-hidden pixel-border aspect-9/18 flex flex-col h-full">
                  <div className="relative flex-grow">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-[#1D1F21] h-full">
                      <div className="absolute inset-0 bg-[url('/images/video4.jpg')] bg-cover bg-center"></div>
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Absolutely centered play button */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9.5 7.5L16.5 12L9.5 16.5V7.5Z"
                            fill="white"
                            stroke="white"
                          />
                        </svg>
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        0:38
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-[#E7A83B] text-[#1D1F21] text-xs px-2 py-1 pixel-border">
                      <span className="inline-block w-2 h-2 bg-[#1D1F21] rounded-full mr-1"></span>{" "}
                      Farming
                    </div>
                  </div>

                  {/* Content positioned at the bottom */}
                  <div className="p-4 mt-auto">
                    <h3 className="text-lg font-bold text-[#7DAF2B]">
                      Automated Crop Farming
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Efficient planting, growing, and harvesting of crops
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Card 5 - UPDATED */}
              <div className="flex-shrink-0 video-card">
                <div className="bg-[#232B2B] overflow-hidden pixel-border aspect-9/18 flex flex-col h-full">
                  <div className="relative flex-grow">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-[#1D1F21] h-full">
                      <div className="absolute inset-0 bg-[url('/images/video5.jpg')] bg-cover bg-center"></div>
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Absolutely centered play button */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9.5 7.5L16.5 12L9.5 16.5V7.5Z"
                            fill="white"
                            stroke="white"
                          />
                        </svg>
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        1:05
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-[#5D7C15] text-white text-xs px-2 py-1 pixel-border">
                      <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Redstone
                    </div>
                  </div>

                  {/* Content positioned at the bottom */}
                  <div className="p-4 mt-auto">
                    <h3 className="text-lg font-bold text-[#7DAF2B]">
                      Redstone Contraption Builder
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Constructing complex redstone mechanisms automatically
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View all button */}
          <div className="text-center mt-8">
            <a
              href="https://youtube.com/@minecraft-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button inline-block bg-[#4C4C4C] hover:bg-[#5D7C15] text-white py-2 px-6 font-medium transition"
            >
              View All Videos
            </a>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 px-6 bg-[#2F2F2F]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">
            About The Project
          </h2>

          <div className="bg-[#232B2B] p-6 pixel-border overflow-hidden">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">
                Minecraft-GPT is an intelligent Minecraft bot designed to
                interact with the Minecraft world and players in an engaging,
                natural manner. The objective of this project is to create a bot
                that behaves like a new player—learning, exploring, and
                interacting with both the environment and other players.
              </p>

              <h3 className="text-xl font-bold text-[#7DAF2B] mt-8 mb-4">
                Features
              </h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-6 mb-6">
                <li>
                  <strong className="text-[#E7A83B]">
                    Autonomous Interaction:
                  </strong>{" "}
                  The bot can interact with the Minecraft world, including
                  chatting with players, gathering resources, and building
                  structures.
                </li>
                <li>
                  <strong className="text-[#E7A83B]">Survival Skills:</strong>{" "}
                  It performs essential survival tasks such as finding food,
                  crafting tools, and defending against enemies.
                </li>
                <li>
                  <strong className="text-[#E7A83B]">Custom Commands:</strong>{" "}
                  The bot&apos;s capabilities can easily be extended with custom
                  commands.
                </li>
                <li>
                  <strong className="text-[#E7A83B]">
                    Intelligent Conversations:
                  </strong>{" "}
                  Powered by OpenAI&apos;s ChatGPT, the bot can engage in meaningful
                  conversations with players.
                </li>
                <li>
                  <strong className="text-[#E7A83B]">
                    Multilingual Support:
                  </strong>{" "}
                  The bot can accept commands in multiple languages, making it
                  accessible to a broader audience.
                </li>
                <li>
                  <strong className="text-[#E7A83B]">
                    Bot-to-Bot Interaction:
                  </strong>{" "}
                  Bots can interact with each other, simulating natural player
                  behavior within the game world.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#7DAF2B] mt-8 mb-4">
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#1D1F21] p-4 pixel-border text-center">
                  <div className="text-[#7DAF2B] font-bold mb-1">
                    TypeScript
                  </div>
                  <div className="text-xs text-gray-400">Language</div>
                </div>
                <div className="bg-[#1D1F21] p-4 pixel-border text-center">
                  <div className="text-[#7DAF2B] font-bold mb-1">Bun.js</div>
                  <div className="text-xs text-gray-400">Runtime</div>
                </div>
                <div className="bg-[#1D1F21] p-4 pixel-border text-center">
                  <div className="text-[#7DAF2B] font-bold mb-1">
                    Mineflayer
                  </div>
                  <div className="text-xs text-gray-400">Bot Framework</div>
                </div>
                <div className="bg-[#1D1F21] p-4 pixel-border text-center">
                  <div className="text-[#7DAF2B] font-bold mb-1">OpenAI</div>
                  <div className="text-xs text-gray-400">AI Integration</div>
                </div>
              </div>

              <div className="bg-[#1D1F21] p-4 border-l-4 border-[#E7A83B] mt-6">
                <p className="italic text-gray-300">
                  &quot;The author (Roman Travnikov) is not an experienced Minecraft
                  player, thus the bot is designed to behave like a beginner
                  exploring the Minecraft world.&quot;
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/TravnikovDev/minecraft-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="minecraft-button inline-block bg-[#4C4C4C] hover:bg-[#5D7C15] text-white py-2 px-6 font-medium transition"
              >
                <FaGithub className="inline-block mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6 bg-[#232B2B]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">
            Follow Our Progress
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://youtube.com/@minecraft-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D1F21] rounded p-6 text-center pixel-border hover:bg-[#2F2F2F] transition"
            >
              <FaYoutube size={40} className="mx-auto mb-4 text-[#B93333]" />
              <p className="font-medium">YouTube</p>
              <p className="text-xs text-gray-400 mt-1">Build Tutorials</p>
            </a>

            <a
              href="https://tiktok.com/@minecraft-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D1F21] rounded p-6 text-center pixel-border hover:bg-[#2F2F2F] transition"
            >
              <FaTiktok size={40} className="mx-auto mb-4 text-[#3BABE7]" />
              <p className="font-medium">TikTok</p>
              <p className="text-xs text-gray-400 mt-1">Quick Tips</p>
            </a>

            <a
              href="https://instagram.com/minecraft_gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D1F21] rounded p-6 text-center pixel-border hover:bg-[#2F2F2F] transition"
            >
              <FaInstagram size={40} className="mx-auto mb-4 text-[#C13584]" />
              <p className="font-medium">Instagram</p>
              <p className="text-xs text-gray-400 mt-1">Build Showcases</p>
            </a>

            <a
              href="https://twitter.com/minecraft_gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D1F21] rounded p-6 text-center pixel-border hover:bg-[#2F2F2F] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mx-auto mb-4 text-[#1DA1F2]"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              <p className="font-medium">Twitter</p>
              <p className="text-xs text-gray-400 mt-1">Latest Updates</p>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">
            About the Developer
          </h2>

          <div className="bg-[#232B2B] p-8 pixel-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 overflow-hidden flex-shrink-0 pixel-border">
                <img
                  src="/images/developer-avatar.png"
                  alt="Pixel-art portrait of Roman Travnikov"
                  className="w-full h-full object-cover pixelated"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#7DAF2B]">
                  Roman Travnikov
                </h3>
                <p className="text-gray-300 mb-4">
                  Software developer specializing in AI and game automation.
                  Previously contributed to multiple Minecraft mods with over
                  500K+ downloads. Passionate about combining neural networks
                  with game environments.
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="https://travnikov.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7DAF2B] hover:text-[#9CCF4A] transition"
                  >
                    travnikov.dev
                  </a>
                  <a
                    href="https://github.com/TravnikovDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-game chat section */}
      <section className="py-16 px-6 bg-[#2F2F2F]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">
            Heard in Chat
          </h2>

          <div className="bg-black/70 p-4 md:p-6 pixel-border space-y-4">
            {[
              {
                avatar: "/images/steve-avatar.png",
                name: "DiamondMiner64",
                color: "text-[#7DAF2B]",
                hearts: 5,
                text: "This bot built a better house in 5 minutes than I could in an hour. The mining optimization is insane!",
              },
              {
                avatar: "/images/alex-avatar.png",
                name: "RedstoneWizard",
                color: "text-[#3BABE7]",
                hearts: 4,
                text: "Been testing the combat system — it can handle multiple creepers better than most players.",
              },
              {
                avatar: null,
                name: "Minecraft-GPT",
                color: "text-[#E7A83B]",
                hearts: 0,
                text: "Task complete: shelter built before nightfall.",
              },
            ].map((msg) => (
              <div key={msg.name} className="flex items-start gap-3">
                <div className="w-8 h-8 mt-1 overflow-hidden flex-shrink-0 pixel-border bg-[#1D1F21] flex items-center justify-center">
                  {msg.avatar ? (
                    <img
                      src={msg.avatar}
                      alt=""
                      className="w-full h-full object-cover pixelated"
                    />
                  ) : (
                    <RiRobot2Fill size={20} className="text-[#3BABE7]" />
                  )}
                </div>
                <p className="text-lg leading-snug">
                  <span className={`font-bold ${msg.color}`}>
                    &lt;{msg.name}&gt;
                  </span>{" "}
                  <span className="text-gray-100">{msg.text}</span>
                  {msg.hearts > 0 && (
                    <span
                      className="ml-2 tracking-widest align-middle"
                      role="img"
                      aria-label={`rated ${msg.hearts} of 5 hearts`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < msg.hearts ? "text-[#B93333]" : "text-[#4C4C4C]"
                          }
                        >
                          {"♥"}
                        </span>
                      ))}
                    </span>
                  )}
                </p>
              </div>
            ))}

            {/* Fake chat input line */}
            <div className="border-t-2 border-[#2F2F2F] pt-3 text-lg text-gray-400">
              &gt; <span className="chat-cursor">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1F21] py-8 px-6 border-t-2 border-[#5D7C15]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            This project is not affiliated with Mojang or Microsoft. Minecraft
            is a trademark of Mojang Synergies AB.
          </p>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Roman Travnikov. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MinecraftBotLanding;
