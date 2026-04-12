'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Slop Meter', href: '#slop-meter' },
  { label: 'The Pipeline', href: '#pipeline' },
  { label: 'Claudia', href: '#claudia' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo + brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="GerhartStudios home"
        >
          <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Image
              src="/logo.svg"
              alt="GerhartStudios donut logo"
              width={36}
              height={36}
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-sm tracking-wide text-gradient-purple">
              GerhartStudios
            </span>
            <span className="text-[10px] text-white/40 font-medium tracking-widest uppercase">
              Vibe. Ship. Pray.
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white/90 hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs text-red-400/70 font-medium px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            ⚠ Satire Site
          </span>
          <button
            onClick={() => handleNavClick('#slop-meter')}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 rounded-xl text-white text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Inspect the Slop 🔍
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white/70 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-100/95 backdrop-blur-xl border-b border-white/[0.07] px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-white/[0.07] flex flex-col gap-2">
            <span className="text-xs text-red-400/70 font-medium px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-center">
              ⚠ Satire / Parody Site — Not Factual Reporting
            </span>
            <button
              onClick={() => handleNavClick('#slop-meter')}
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl text-white text-sm font-bold"
            >
              Inspect the Slop 🔍
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
