"use client";
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaGithub, FaInstagram, FaYoutube, FaTiktok, FaDiscord } from 'react-icons/fa';

// The main landing page component
const MinecraftBotLanding = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-minecraft">
      <Helmet>
        <title>Minecraft Bot - Neural Network Automation</title>
        <meta name="description" content="An advanced open-source Minecraft bot powered by neural networks" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Navigation */}
      <nav className="bg-gray-800 px-6 py-4 border-b-2 border-green-500">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">Minecraft<span className="text-yellow-400">Bot</span></div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-green-400 transition">Features</a>
            <a href="#videos" className="hover:text-green-400 transition">Videos</a>
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="https://github.com/your-username/minecraft-bot" className="hover:text-green-400 transition">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6">
        {/* Pixel art background overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/minecraft-bg.png')] bg-repeat"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-400">
            <span className="block">The Future of</span>
            <span className="text-yellow-400">Minecraft Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            An advanced open-source bot that uses neural networks to automate complex tasks in Minecraft.
            <span className="block mt-4 text-yellow-400 font-semibold">Coming Soon</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/your-username/minecraft-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-md font-medium flex items-center gap-2 border-2 border-green-500 transition"
            >
              <FaGithub size={24} /> GitHub Repository
            </a>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-yellow-500 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-4">Subscribe to get notified when we launch!</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">Bot Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-green-500 transform hover:-translate-y-2 transition duration-300">
              <div className="bg-green-900 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <img src="/images/build-icon.png" alt="Building" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-green-400">Automated Building</h3>
              <p className="text-gray-300 text-center">
                Construct complex structures automatically with neural network-powered precision
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-green-500 transform hover:-translate-y-2 transition duration-300">
              <div className="bg-green-900 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <img src="/images/mine-icon.png" alt="Mining" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-green-400">Intelligent Mining</h3>
              <p className="text-gray-300 text-center">
                Efficiently gather resources with smart pathfinding and priority systems
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-green-500 transform hover:-translate-y-2 transition duration-300">
              <div className="bg-green-900 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <img src="/images/combat-icon.png" alt="Combat" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-green-400">Combat Assistant</h3>
              <p className="text-gray-300 text-center">
                Advanced combat strategies to keep you safe from mobs and other players
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section (Placeholders) */}
      <section id="videos" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">See It In Action</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-8 border-2 border-green-500">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-gray-700 mb-4">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <p className="text-xl">Video coming soon!</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-400">Automated House Building</h3>
            <p className="text-gray-300">
              Watch as the bot builds a complete house from scratch, including interior decoration.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-green-500">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-gray-700 mb-4">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <p className="text-xl">Video coming soon!</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-400">Resource Gathering Expedition</h3>
            <p className="text-gray-300">
              See how efficiently the bot can gather resources while navigating hazardous terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">Follow Our Progress</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://youtube.com/channel/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg p-6 text-center border-2 border-red-500 hover:bg-gray-700 transition"
            >
              <FaYoutube size={40} className="mx-auto mb-4 text-red-500" />
              <p className="font-medium">YouTube</p>
            </a>
            
            <a
              href="https://tiktok.com/@your-account"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg p-6 text-center border-2 border-pink-500 hover:bg-gray-700 transition"
            >
              <FaTiktok size={40} className="mx-auto mb-4 text-pink-500" />
              <p className="font-medium">TikTok</p>
            </a>
            
            <a
              href="https://instagram.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg p-6 text-center border-2 border-purple-500 hover:bg-gray-700 transition"
            >
              <FaInstagram size={40} className="mx-auto mb-4 text-purple-500" />
              <p className="font-medium">Instagram</p>
            </a>
            
            <a
              href="https://discord.gg/your-server"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg p-6 text-center border-2 border-indigo-500 hover:bg-gray-700 transition"
            >
              <FaDiscord size={40} className="mx-auto mb-4 text-indigo-500" />
              <p className="font-medium">Discord</p>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">About the Developer</h2>
          
          <div className="bg-gray-800 rounded-lg p-8 border-2 border-green-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                <img
                  src="/images/avatar.png"
                  alt="Rob Shavnickov"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Rob Shavnickov</h3>
                <p className="text-gray-300 mb-4">
                  Software developer with more than 10 years of experience. Passionate about gaming, automation, and neural networks.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://charminkov.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition"
                  >
                    charminkov.dev
                  </a>
                  <a
                    href="https://github.com/your-username"
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

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 border-t-2 border-green-500">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            This project is not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang Synergies AB.
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Rob Shavnickov. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MinecraftBotLanding;
