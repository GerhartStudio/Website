import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Background layers ───────────────────────────────────── */}
      <div className="absolute inset-0 bg-dark">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Radial gradient blobs */}
        <div
          className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-float"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full blur-3xl opacity-15 animate-float-delayed"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(circle, #fb923c 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        {/* Fade-out at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Floating decorative badges */}
      <div
        className="hidden lg:block absolute top-28 right-24 animate-float animation-delay-300 animate-fill-both"
        aria-hidden="true"
      >
        <div className="glass-card neon-border-purple px-4 py-2 text-xs font-bold text-purple-300 rotate-3">
          🤖 94% AI-Generated
        </div>
      </div>
      <div
        className="hidden lg:block absolute top-48 left-16 animate-float-slow animation-delay-500 animate-fill-both"
        aria-hidden="true"
      >
        <div className="glass-card px-4 py-2 text-xs font-bold text-cyan-300 -rotate-2">
          📦 DonutPlugins™ Inside
        </div>
      </div>
      <div
        className="hidden lg:block absolute bottom-32 right-32 animate-float animation-delay-700 animate-fill-both"
        aria-hidden="true"
      >
        <div className="glass-card px-4 py-2 text-xs font-bold text-orange-300 rotate-1">
          🙏 0 Unit Tests
        </div>
      </div>
      <div
        className="hidden lg:block absolute bottom-48 left-24 animate-float-delayed animation-delay-200 animate-fill-both"
        aria-hidden="true"
      >
        <div className="glass-card px-4 py-2 text-xs font-bold text-pink-300 -rotate-3">
          ✨ Enterprise Ready™
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 md:px-8 py-24">
        {/* Satire badge — above the fold, mandatory */}
        <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/40 rounded-full px-5 py-2.5 text-red-300 text-sm font-semibold mb-8 animate-fade-in-up animate-fill-both">
          <span aria-hidden="true">⚠️</span>
          <span>SATIRE / PARODY SITE — Not Actual Analysis or Factual Reporting</span>
        </div>

        {/* Logo */}
        <div
          className="flex justify-center mb-8 animate-fade-in-up animation-delay-100 animate-fill-both"
        >
          <div className="relative animate-float">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-60 animate-glow-pulse"
              style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 60%)' }}
              aria-hidden="true"
            />
            <Image
              src="/logo.svg"
              alt="GerhartStudios logo — a donut-shaped logo in purple and orange gradient"
              width={96}
              height={96}
              className="relative z-10"
              priority
            />
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 animate-fade-in-up animation-delay-200 animate-fill-both"
        >
          <span className="text-gradient-purple block">GerhartStudios</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-white/70 font-semibold mb-4 animate-fade-in-up animation-delay-300 animate-fill-both"
        >
          Enterprise Grade Vibe Coding Since The First Hallucination
        </p>

        {/* Body copy */}
        <p
          className="text-base md:text-lg text-white/45 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 animate-fill-both"
        >
          Powered by confidence, plugins, and{' '}
          <span className="text-orange-400/80 font-semibold">
            suspicious amounts of AI assistance.
          </span>{' '}
          Home of the DonutPlugins™ ecosystem — production-grade code that no human has read in full.
        </p>

        <p
          className="text-sm text-white/30 mb-12 animate-fade-in-up animation-delay-500 animate-fill-both"
        >
          *No humans were harmed in the making of this software. Some were mildly confused.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-600 animate-fill-both"
        >
          <a
            href="#slop-meter"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-dark"
          >
            <span>Inspect the Slop</span>
            <span className="ml-2 group-hover:scale-125 inline-block transition-transform" aria-hidden="true">🔍</span>
          </a>
          <a
            href="#pipeline"
            className="group px-8 py-4 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 hover:border-cyan-400/60 rounded-2xl text-cyan-300 font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-dark"
          >
            <span>Deploy the Vibes</span>
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform" aria-hidden="true">🚀</span>
          </a>
          <a
            href="#claudia"
            className="group px-8 py-4 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.12] hover:border-white/[0.22] rounded-2xl text-white/60 hover:text-white/80 font-bold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark"
          >
            <span>Trust the Prompt</span>
            <span className="ml-2" aria-hidden="true">🤖</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-bounce-slow opacity-50" aria-hidden="true">
          <span className="text-xs text-white/30 font-medium uppercase tracking-widest">
            Scroll to witness the slop
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M10 4v12M5 11l5 5 5-5"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
