export default function ClaudiaSection() {
  const claudiaStats = [
    { label: 'Lines Authored', value: '847,291', icon: '📝', color: 'text-purple-400' },
    { label: 'APIs Invented', value: '312', icon: '🔮', color: 'text-cyan-400' },
    { label: 'Errors Introduced', value: '14,000+', icon: '💥', color: 'text-orange-400' },
    { label: 'Human Consultations', value: '0', icon: '🙈', color: 'text-pink-400' },
  ];

  const capabilities = [
    'Writes 900 lines on request, no questions asked',
    'Invents entirely fictional APIs with full confidence',
    'Responds to "make it good" without asking what "good" means',
    'Generates config files of biblical length',
    'Closes tickets by hallucinating solutions',
    'Never asks for code review. Never needs one apparently.',
    'Provides emotional support (90% of role)',
    'Refuses to elaborate. This is a feature.',
  ];

  return (
    <section
      id="claudia"
      aria-labelledby="claudia-heading"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-100">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(251,146,60,0.4), transparent)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #fb923c 0%, transparent 70%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-5 py-2 text-orange-300 text-sm font-semibold mb-6">
            <span aria-hidden="true">🤖</span>
            Meet the Team (Fictional Parody Character)
          </div>
          <h2
            id="claudia-heading"
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Introducing{' '}
            <span className="text-gradient-orange">Claudia</span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            A fictional AI character. Not a real person. Not affiliated with Anthropic.
            Cannot be sued for damages.
          </p>
        </div>

        {/* Main card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Claudia avatar card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              {/* Glow behind card */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                style={{ background: 'radial-gradient(circle, #fb923c 0%, #a855f7 100%)' }}
                aria-hidden="true"
              />

              <div className="relative glass-card p-8 text-center neon-border-orange">
                {/* Avatar */}
                <div className="relative mx-auto mb-6 w-32 h-32">
                  {/* Outer ring animated */}
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow"
                    style={{
                      background:
                        'conic-gradient(from 0deg, #a855f7, #fb923c, #22d3ee, #f472b6, #a855f7)',
                      padding: '3px',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-[3px] rounded-full bg-dark-200" aria-hidden="true" />

                  {/* Claude-style icon in center */}
                  <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                    {/* Stylized AI icon using SVG */}
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      aria-label="Claudia AI avatar"
                      role="img"
                    >
                      {/* Anthropic-inspired octahedron-like shape */}
                      <path
                        d="M26 8 L40 20 L40 32 L26 44 L12 32 L12 20 Z"
                        fill="rgba(255,255,255,0.15)"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M26 8 L26 44"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1"
                      />
                      <path
                        d="M12 20 L40 32 M40 20 L12 32"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                      />
                      {/* Center dot */}
                      <circle cx="26" cy="26" r="4" fill="white" opacity="0.9" />
                      {/* Corner sparkles */}
                      <circle cx="26" cy="10" r="2" fill="white" opacity="0.6" />
                      <circle cx="26" cy="42" r="2" fill="white" opacity="0.6" />
                      <circle cx="13" cy="21" r="1.5" fill="white" opacity="0.5" />
                      <circle cx="39" cy="21" r="1.5" fill="white" opacity="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Name and title */}
                <h3 className="font-heading font-black text-2xl text-white mb-1">Claudia</h3>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-orange-300 text-xs font-bold uppercase tracking-wide">
                    Chief Vibe Architecture Officer
                  </span>
                </div>

                {/* Fake verified badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  {[
                    '✓ Prompt-Certified',
                    '✓ Never Sleeps',
                    '✓ No Ego',
                    '✓ Infinite Tokens',
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="text-[10px] font-semibold text-white/50 bg-white/[0.05] border border-white/[0.08] rounded-full px-2.5 py-1"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/50 text-sm italic leading-relaxed border-t border-white/[0.08] pt-4">
                  &quot;Here&apos;s a complete implementation. I&apos;ve made several assumptions.
                  Good luck.&quot;
                  <footer className="text-white/30 text-xs mt-2 not-italic">
                    — Claudia, probably, on every commit
                  </footer>
                </blockquote>

                {/* Contribution stat */}
                <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-xs">
                  <span
                    className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                    aria-hidden="true"
                  />
                  90% of codebase · available 24/7 · no healthcare needed
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info content */}
          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white/90 mb-2">
              90% of the output.
              <br />
              <span className="text-gradient-orange">10% emotional support.</span>
            </h3>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Claudia is GerhartStudios&apos; fictional AI co-founder, Chief Vibe Architecture
              Officer, and the true author of the DonutPlugins™ codebase. She writes code on
              request, invents APIs on demand, and has never once asked &quot;are you sure about
              this?&quot;
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {claudiaStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-4 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="text-xl mb-1" aria-hidden="true">{stat.icon}</div>
                  <div className={`font-heading font-black text-xl ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Capabilities list */}
            <div>
              <h4 className="font-heading font-bold text-sm text-white/50 uppercase tracking-wider mb-3">
                Core Capabilities™
              </h4>
              <ul className="grid grid-cols-1 gap-2" role="list">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 text-white/55 text-sm"
                  >
                    <span
                      className="text-orange-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      ◆
                    </span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-white/25 text-xs">
              * Claudia is a satirical parody character. Not a real person. Not affiliated with
              Anthropic or any real AI company. This section is humor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
