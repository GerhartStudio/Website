import Image from 'next/image';

const footerLinks = [
  {
    heading: 'The Brand',
    links: [
      { label: 'Slop Meter™', href: '#slop-meter' },
      { label: 'The Pipeline', href: '#pipeline' },
      { label: 'Claudia AI', href: '#claudia' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Fake Reviews', href: '#reviews' },
      { label: 'Meme Gallery', href: '#memes' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Legal Vibes',
    links: [
      { label: 'This Is Satire', href: '#satire' },
      { label: 'Not Real Analytics', href: '#satire' },
      { label: 'Fictional Reviews', href: '#reviews' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-dark border-t border-white/[0.07] pt-16 pb-8 overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Main satire disclaimer banner */}
        <div className="glass-card neon-border-purple p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl" aria-hidden="true">⚠️</span>
            <h2 className="font-heading font-black text-lg text-red-400 uppercase tracking-wide">
              Satire / Parody Disclaimer
            </h2>
            <span className="text-2xl" aria-hidden="true">⚠️</span>
          </div>
          <p className="text-white/60 text-sm max-w-3xl mx-auto leading-relaxed">
            <strong className="text-white/80">This website is satire/parody</strong> and should not be
            interpreted as factual reporting, verified analysis, or professional advice of any kind.
            All metrics, reviews, statistics, and claims are fictional and comedic in nature.
            Any resemblance to real code quality is coincidental and possibly a cry for help.
          </p>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="GerhartStudios Logo"
                width={36}
                height={36}
              />
              <div>
                <div className="font-heading font-black text-sm text-gradient-purple">
                  GerhartStudios
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">
                  Satire Edition
                </div>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Built for humor, memes, and catastrophic levels of vibe-based software
              engineering. DonutPlugins sold separately (not really).
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="font-heading font-bold text-sm text-white/60 uppercase tracking-wider mb-4">
                {section.heading}
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-purple-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          id="satire"
        >
          <div className="text-white/30 text-xs text-center md:text-left">
            <span>© {new Date().getFullYear()} GerhartStudios (Satire Edition)</span>
            <span className="mx-2 text-white/15">·</span>
            <span>
              Not affiliated with, endorsed by, or responsible for any Minecraft server
              incidents.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center">
            <span className="text-[10px] text-white/25 font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
              🤖 Vibecoded
            </span>
            <span className="text-[10px] text-white/25 font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
              📦 DonutPlugins Inside™
            </span>
            <span className="text-[10px] text-white/25 font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
              🙏 0 Unit Tests
            </span>
            <span className="text-[10px] text-red-400/40 font-bold px-2.5 py-1 rounded-full bg-red-500/[0.06] border border-red-500/[0.15]">
              ⚠ THIS IS SATIRE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
