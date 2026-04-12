"use client";

import { useEffect, useState } from "react";

const floatingBlocks = [
  { emoji: "🧱", top: "15%", left: "8%", delay: "0s", size: "text-3xl" },
  { emoji: "💎", top: "25%", right: "10%", delay: "1.5s", size: "text-2xl" },
  { emoji: "⚔️", top: "60%", left: "5%", delay: "0.8s", size: "text-2xl" },
  { emoji: "🪄", top: "70%", right: "8%", delay: "2s", size: "text-3xl" },
  { emoji: "🛡️", top: "40%", left: "3%", delay: "1s", size: "text-xl" },
  { emoji: "🌿", top: "80%", right: "5%", delay: "0.5s", size: "text-2xl" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-grass-DEFAULT/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Floating Minecraft elements */}
      {mounted &&
        floatingBlocks.map((block, i) => (
          <div
            key={i}
            className="absolute hidden lg:block select-none opacity-20 hover:opacity-60 transition-opacity duration-300"
            style={{
              top: block.top,
              left: block.left,
              right: block.right,
              animationDelay: block.delay,
            }}
          >
            <span
              className={`${block.size} animate-float inline-block`}
              style={{ animationDelay: block.delay }}
            >
              {block.emoji}
            </span>
          </div>
        ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-grass-DEFAULT/10 border border-grass-DEFAULT/20 text-grass-DEFAULT text-sm font-mono mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-grass-DEFAULT animate-pulse-slow inline-block" />
          Minecraft Plugin Development Studio
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-white">Baue deinen</span>
          <br />
          <span className="gradient-text glow-text">Traumserver</span>
          <br />
          <span className="text-white">mit uns.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Gerhart Studio entwickelt leistungsstarke, maßgeschneiderte Minecraft
          Plugins – von innovativen Gameplay-Features bis hin zu
          Server-Management-Tools. Crafted with passion. Deployed with precision.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#plugins"
            className="px-8 py-3.5 bg-grass-DEFAULT hover:bg-grass-dark text-black font-bold rounded transition-all duration-200 shadow-glow hover:shadow-glow-lg text-base"
          >
            Plugins ansehen
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-transparent border border-grass-DEFAULT/40 hover:border-grass-DEFAULT text-white font-semibold rounded transition-all duration-200 hover:bg-grass-DEFAULT/5 text-base"
          >
            Kontakt aufnehmen
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-20 flex flex-col items-center gap-2 text-zinc-600 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-grass-DEFAULT/50 to-transparent animate-pulse-slow" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
