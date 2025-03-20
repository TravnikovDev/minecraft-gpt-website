"use client";
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaGithub, FaInstagram, FaYoutube, FaTiktok, FaDiscord } from 'react-icons/fa';
import { RiSwordFill } from 'react-icons/ri';
import { GiMineralPearls, GiWoodCabin } from 'react-icons/gi';

// The main landing page component
const MinecraftBotLanding = () => {
  return (
    <div className="min-h-screen bg-[#1D1F21] text-white font-minecraft">
      <Helmet>
        <title>MinecraftBot - AI Neural Automation</title>
        <meta name="description" content="An advanced open-source Minecraft bot powered by neural networks" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <style>{`
          .font-minecraft {
            font-family: 'VT323', monospace;
            letter-spacing: 0.5px;
          }
          .pixelated {
            image-rendering: pixelated;
          }
          .minecraft-button {
            position: relative;
            transition: all 0.1s;
            box-shadow: inset -2px -4px 0 0 rgba(0,0,0,0.6);
          }
          .minecraft-button:active {
            top: 2px;
            box-shadow: inset -1px -2px 0 0 rgba(0,0,0,0.6);
          }
          .pixel-border {
            box-shadow: 0 0 0 2px #000,
                       inset 0 0 0 2px #000;
            image-rendering: pixelated;
          }
        `}</style>
      </Helmet>

      {/* Navigation */}
      <nav className="bg-[#232B2B] px-6 py-4 border-b-2 border-[#5D7C15]">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#5D7C15]">Minecraft<span className="text-[#E7A83B]">Bot</span></div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-[#5D7C15] transition">Features</a>
            <a href="#videos" className="hover:text-[#5D7C15] transition">Videos</a>
            <a href="#about" className="hover:text-[#5D7C15] transition">About</a>
            <a href="https://github.com/your-username/minecraft-bot" className="hover:text-[#5D7C15] transition">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6">
        {/* Minecraft-style dirt background overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://i.imgur.com/FJtIlxSl.png')] bg-repeat"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#5D7C15]">
            <span className="block">The Future of</span>
            <span className="text-[#E7A83B]">Minecraft Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            An advanced open-source bot that uses neural networks to automate complex tasks in Minecraft.
            <span className="block mt-4 text-[#E7A83B] font-semibold">Coming Soon</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/your-username/minecraft-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button bg-[#4C4C4C] hover:bg-[#5D7C15] text-white py-3 px-8 rounded font-medium flex items-center gap-2 border-t-2 border-l-2 border-[#828282] border-b-2 border-r-2 border-[#2F2F2F] transition"
            >
              <FaGithub size={24} /> GitHub Repository
            </a>
          </div>
          
          <div className="bg-[#4C4C4C] p-6 rounded pixel-border max-w-md mx-auto border-2 border-[#828282]">
            <h2 className="text-xl font-bold mb-4 text-[#E7A83B]">Stay Updated</h2>
            <p className="mb-4">Subscribe to get notified when we launch!</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded bg-[#2F2F2F] text-white border-2 border-[#1D1F21] focus:outline-none focus:border-[#5D7C15]"
                style={{fontFamily: 'VT323, monospace'}}
              />
              <button
                type="submit"
                className="minecraft-button bg-[#5D7C15] hover:bg-[#7DAF2B] px-6 py-2 rounded font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-[#2F2F2F]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">Bot Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#232B2B] rounded p-6 pixel-border transform hover:-translate-y-2 transition duration-300">
              <div className="bg-[#5D7C15] w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto pixel-border">
                <GiWoodCabin size={36} className="text-[#E7A83B]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-[#5D7C15]">Automated Building</h3>
              <p className="text-gray-300 text-center">
                Construct complex structures automatically with neural network-powered precision
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#232B2B] rounded p-6 pixel-border transform hover:-translate-y-2 transition duration-300">
              <div className="bg-[#5D7C15] w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto pixel-border">
                <GiMineralPearls size={36} className="text-[#3BABE7]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-[#5D7C15]">Intelligent Mining</h3>
              <p className="text-gray-300 text-center">
                Efficiently gather resources with smart pathfinding and priority systems
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#232B2B] rounded p-6 pixel-border transform hover:-translate-y-2 transition duration-300">
              <div className="bg-[#5D7C15] w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto pixel-border">
                <RiSwordFill size={36} className="text-[#B93333]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-[#5D7C15]">Combat Assistant</h3>
              <p className="text-gray-300 text-center">
                Advanced combat strategies to keep you safe from mobs and other players
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section (Improved Placeholders) */}
      <section id="videos" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">See It In Action</h2>
          
          <div className="bg-[#232B2B] rounded p-6 mb-8 pixel-border">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded bg-[#1D1F21] mb-4 pixel-border relative">
              <div className="absolute inset-0 bg-[url('https://i.imgur.com/wKJ54qU.jpg')] bg-cover bg-center opacity-60"></div>
              <div className="flex items-center justify-center h-full relative z-10">
                <div className="bg-black bg-opacity-60 p-4 rounded">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" fill="black" fillOpacity="0.5" />
                      <path d="M9.5 7.5L16.5 12L9.5 16.5V7.5Z" fill="white" stroke="white" />
                    </svg>
                    <p className="text-xl mt-2 font-minecraft">VIDEO DROPS APRIL 5</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#5D7C15]">Automated House Building</h3>
            <p className="text-gray-300">
              Watch as the bot builds a complete house from scratch, including interior decoration and lighting systems.
            </p>
          </div>
          
          <div className="bg-[#232B2B] rounded p-6 pixel-border">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded bg-[#1D1F21] mb-4 pixel-border relative">
              <div className="absolute inset-0 bg-[url('https://i.imgur.com/gkPMIne.jpg')] bg-cover bg-center opacity-60"></div>
              <div className="flex items-center justify-center h-full relative z-10">
                <div className="bg-black bg-opacity-60 p-4 rounded">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" fill="black" fillOpacity="0.5" />
                      <path d="M9.5 7.5L16.5 12L9.5 16.5V7.5Z" fill="white" stroke="white" />
                    </svg>
                    <p className="text-xl mt-2 font-minecraft">VIDEO DROPS APRIL 12</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#5D7C15]">Resource Gathering Expedition</h3>
            <p className="text-gray-300">
              See how efficiently the bot can gather resources while navigating hazardous terrain and avoiding dangerous mobs.
            </p>
          </div>
        </div>
      </section>

      {/* Code Sample Preview */}
      <section className="py-16 px-6 bg-[#2F2F2F]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">Command Interface Preview</h2>
          
          <div className="bg-[#232B2B] rounded p-6 pixel-border overflow-hidden">
            <div className="bg-[#1D1F21] p-4 rounded font-mono text-sm md:text-base overflow-x-auto pixel-border">
              <pre className="text-gray-300">
{`// Command the bot to build structures
bot.command("build cabin medium oak")
bot.command("build castle large stone")
bot.command("build farm wheat 10x10")

// Instruct the bot to gather resources
bot.command("mine diamonds efficiency=3 duration=20m")
bot.command("harvest wood oak amount=64")
bot.command("collect ores depth=12 radius=30")

// Combat and protection commands
bot.command("defend perimeter radius=50")
bot.command("attack nearest hostile")
bot.command("follow player steve distance=5")`}
              </pre>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-gray-400 text-sm">Simple text commands control the bot&apos;s neural network</p>
              <a href="#" className="text-[#5D7C15] hover:text-[#7DAF2B] transition text-sm">View full documentation →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6 bg-[#232B2B]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">Follow Our Progress</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://youtube.com/channel/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D1F21] rounded p-6 text-center pixel-border hover:bg-[#2F2F2F] transition"
            >
              <FaYoutube size={40} className="mx-auto mb-4 text-[#B93333]" />
              <p className="font-medium">YouTube</p>
              <p className="text-xs text-gray-400 mt-1">Build Tutorials</p>
            </a>
            
            <a
              href="https://tiktok.com/@your-account"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D1F21] rounded p-6 text-center pixel-border hover:bg-[#2F2F2F] transition"
            >
              <FaTiktok size={40} className="mx-auto mb-4 text-[#3BABE7]" />
              <p className="font-medium">TikTok</p>
              <p className="text-xs text-gray-400 mt-1">Quick Tips</p>
            </a>
            
            <a
              href="https://instagram.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D1F21] rounded p-6 text-center pixel-border hover:bg-[#2F2F2F] transition"
            >
              <FaInstagram size={40} className="mx-auto mb-4 text-[#C13584]" />
              <p className="font-medium">Instagram</p>
              <p className="text-xs text-gray-400 mt-1">Build Showcases</p>
            </a>
            
            <a
              href="https://discord.gg/your-server"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D1F21] rounded p-6 text-center pixel-border hover:bg-[#2F2F2F] transition"
            >
              <FaDiscord size={40} className="mx-auto mb-4 text-[#5865F2]" />
              <p className="font-medium">Discord</p>
              <p className="text-xs text-gray-400 mt-1">Join Community</p>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">About the Developer</h2>
          
          <div className="bg-[#232B2B] rounded p-8 pixel-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 rounded-lg overflow-hidden flex-shrink-0 pixel-border">
                {/* Replace with actual developer image */}
                <img
                  src="https://i.imgur.com/J7RfQlI.png"
                  alt="Rob Shavnickov"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#5D7C15]">Rob Shavnickov</h3>
                <p className="text-gray-300 mb-4">
                  Software developer with 10+ years experience specializing in AI and game automation. 
                  Previously contributed to multiple Minecraft mods with over 500K+ downloads.
                </p>
                
                {/* GitHub Activity Graph */}
                <div className="bg-[#1D1F21] p-3 rounded-lg mb-4 pixel-border">
                  <div className="h-8 bg-[#0D1117] rounded overflow-hidden flex items-end">
                    <div className="h-2 w-1/12 bg-[#5D7C15]"></div>
                    <div className="h-3 w-1/12 bg-[#7DAF2B]"></div>
                    <div className="h-4 w-1/12 bg-[#5D7C15]"></div>
                    <div className="h-6 w-1/12 bg-[#7DAF2B]"></div>
                    <div className="h-5 w-1/12 bg-[#5D7C15]"></div>
                    <div className="h-7 w-1/12 bg-[#7DAF2B]"></div>
                    <div className="h-8 w-1/12 bg-[#5D7C15]"></div>
                    <div className="h-6 w-1/12 bg-[#7DAF2B]"></div>
                    <div className="h-4 w-1/12 bg-[#5D7C15]"></div>
                    <div className="h-5 w-1/12 bg-[#7DAF2B]"></div>
                    <div className="h-7 w-1/12 bg-[#5D7C15]"></div>
                    <div className="h-3 w-1/12 bg-[#7DAF2B]"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 text-center">GitHub Contributions (Last 12 Months)</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href="https://charminkov.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5D7C15] hover:text-[#7DAF2B] transition"
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

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-[#2F2F2F]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E7A83B]">Early Tester Feedback</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#232B2B] rounded p-6 pixel-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 pixel-border">
                  <img 
                    src="https://i.imgur.com/qwFQ1im.png" 
                    alt="Steve Avatar" 
                    className="w-full h-full object-cover pixelated" 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#5D7C15]">DiamondMiner64</h4>
                  <div className="flex gap-1 my-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#E7A83B]">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300">&quot;This bot built a better house in 5 minutes than I could in an hour. The mining optimization is insane!&quot;</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#232B2B] rounded p-6 pixel-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 pixel-border">
                  <img 
                    src="https://i.imgur.com/FjQUMJv.png" 
                    alt="Alex Avatar" 
                    className="w-full h-full object-cover pixelated" 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#5D7C15]">RedstoneWizard</h4>
                  <div className="flex gap-1 my-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-[#E7A83B]">★</span>
                    ))}
                    <span className="text-gray-500">★</span>
                  </div>
                  <p className="text-gray-300">&quot;Been testing the combat system - it can handle multiple creepers better than most players. Really impressive AI!&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1F21] py-8 px-6 border-t-2 border-[#5D7C15]">
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