"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#plugins", label: "Plugins" },
  { href: "#features", label: "Features" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[rgba(74,222,128,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-grass-DEFAULT to-grass-dark rounded flex items-center justify-center font-mono font-bold text-black text-sm shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
              G
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Gerhart<span className="text-grass-DEFAULT">Studio</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-grass-DEFAULT transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#plugins"
              className="px-4 py-2 bg-grass-DEFAULT hover:bg-grass-dark text-black font-semibold text-sm rounded transition-all duration-200 shadow-glow hover:shadow-glow-lg"
            >
              Plugins entdecken
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-[#111]/95 backdrop-blur-md border-b border-[rgba(74,222,128,0.1)]`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-zinc-300 hover:text-grass-DEFAULT transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#plugins"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-2 bg-grass-DEFAULT text-black font-semibold text-sm rounded text-center"
          >
            Plugins entdecken
          </a>
        </div>
      </div>
    </nav>
  );
}
