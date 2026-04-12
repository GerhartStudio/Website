import { memeCards } from '@/lib/data';

const styleMap = {
  purple: {
    bg: 'from-purple-900/40 to-purple-800/20',
    border: 'border-purple-500/30',
    topColor: 'text-purple-300',
    bottomColor: 'text-white',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
  },
  cyan: {
    bg: 'from-cyan-900/40 to-cyan-800/20',
    border: 'border-cyan-500/30',
    topColor: 'text-cyan-300',
    bottomColor: 'text-white',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
  },
  orange: {
    bg: 'from-orange-900/40 to-orange-800/20',
    border: 'border-orange-500/30',
    topColor: 'text-orange-300',
    bottomColor: 'text-white',
    glow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]',
  },
  pink: {
    bg: 'from-pink-900/40 to-pink-800/20',
    border: 'border-pink-500/30',
    topColor: 'text-pink-300',
    bottomColor: 'text-white',
    glow: 'hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]',
  },
  green: {
    bg: 'from-green-900/40 to-green-800/20',
    border: 'border-green-500/30',
    topColor: 'text-green-300',
    bottomColor: 'text-white',
    glow: 'hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]',
  },
  red: {
    bg: 'from-red-900/40 to-red-800/20',
    border: 'border-red-500/30',
    topColor: 'text-red-300',
    bottomColor: 'text-white',
    glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]',
  },
};

// Expanding brain meme, fully text-based
function ExpandingBrainMeme() {
  const panels = [
    {
      brain: '🧠',
      opacity: 'opacity-60',
      bgClass: 'bg-gray-800/60',
      text: 'Writing the Minecraft plugin yourself',
      glow: '',
    },
    {
      brain: '🧠',
      opacity: 'opacity-80',
      bgClass: 'bg-blue-900/40',
      text: 'Asking an AI to write the plugin',
      glow: 'text-blue-300',
    },
    {
      brain: '🌟',
      opacity: 'opacity-90',
      bgClass: 'bg-purple-900/50',
      text: "Shipping the AI's output without reading it",
      glow: 'text-purple-300',
    },
    {
      brain: '🌌',
      opacity: 'opacity-100',
      bgClass: 'bg-gradient-to-br from-purple-900/60 to-cyan-900/60',
      text: 'Calling it "enterprise-grade AI-assisted development"',
      glow: 'text-cyan-300',
    },
  ];

  return (
    <div
      className="glass-card border border-purple-500/30 overflow-hidden col-span-1 md:col-span-2 lg:col-span-1 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300"
      aria-label="Expanding brain meme about vibecoding levels"
    >
      <div className="px-4 pt-4 pb-2 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
          The Galaxy Brain Scale™
        </span>
      </div>
      {panels.map((panel, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 p-3 border-t border-white/[0.05] ${panel.bgClass} ${panel.opacity}`}
        >
          <div className="text-2xl shrink-0 w-10 text-center" aria-hidden="true">
            {panel.brain}
          </div>
          <p className={`text-sm font-bold meme-text flex-1 ${panel.glow || 'text-white/70'}`}>
            {panel.text}
          </p>
        </div>
      ))}
      <div className="px-4 py-3 bg-purple-900/20 text-center">
        <span className="text-[10px] text-white/25">satire · original content · no copyright</span>
      </div>
    </div>
  );
}

export default function MemesSection() {
  return (
    <section
      id="memes"
      aria-labelledby="memes-heading"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-100">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(244,114,182,0.3), transparent)',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/15 border border-pink-500/30 rounded-full px-5 py-2 text-pink-300 text-sm font-semibold mb-6">
            <span aria-hidden="true">🎭</span>
            Original Satirical Content — No Copyrighted Assets
          </div>
          <h2
            id="memes-heading"
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            The{' '}
            <span className="text-gradient-purple">Meme Vault</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            Original satirical cards inspired by vibecoding, AI dependency, and the
            noble art of shipping without reading.
          </p>
        </div>

        {/* Memes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Expanding brain meme (spans wider) */}
          <ExpandingBrainMeme />

          {/* Regular meme cards */}
          {memeCards.map((meme) => {
            const styles = styleMap[meme.style];
            return (
              <article
                key={meme.id}
                className={`glass-card bg-gradient-to-br ${styles.bg} border ${styles.border} p-0 overflow-hidden group ${styles.glow} transition-all duration-300 hover:scale-[1.02]`}
                aria-label={`Meme: ${meme.topText} ${meme.bottomText}`}
              >
                {/* Top text */}
                <div className="px-5 pt-5 pb-3">
                  <p
                    className={`meme-text text-sm md:text-base ${styles.topColor} leading-tight`}
                  >
                    {meme.topText}
                  </p>
                </div>

                {/* Emoji center */}
                <div className="flex items-center justify-center py-4 bg-black/20">
                  <div
                    className="text-5xl group-hover:scale-110 transition-transform duration-300"
                    role="img"
                    aria-label="meme emoji"
                  >
                    {meme.emoji}
                  </div>
                </div>

                {/* Bottom text */}
                <div className="px-5 pt-3 pb-2">
                  <p
                    className={`meme-text text-lg md:text-xl ${styles.bottomColor} leading-tight`}
                  >
                    {meme.bottomText}
                  </p>
                </div>

                {/* Sub text */}
                {meme.subText && (
                  <div className="px-5 pb-4">
                    <p className="text-white/40 text-xs italic">{meme.subText}</p>
                  </div>
                )}

                {/* Satire tag */}
                <div
                  className={`px-5 py-2 border-t ${styles.border} bg-black/20`}
                >
                  <span className="text-[10px] text-white/25 font-medium">
                    satire · original content
                  </span>
                </div>
              </article>
            );
          })}

          {/* Bonus meme: "Works on my machine" certificate */}
          <div
            className="glass-card border border-yellow-500/30 p-0 overflow-hidden hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-300 hover:scale-[1.02]"
            aria-label="Works on my machine certificate"
          >
            <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/20 p-6 text-center">
              <div
                className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/60 mb-3"
              >
                ✦ Official Certificate of Deployment ✦
              </div>
              <div className="text-4xl mb-3" aria-hidden="true">🏅</div>
              <h3 className="meme-text text-2xl text-yellow-300 mb-2">
                Works on My Machine
              </h3>
              <p className="text-white/50 text-sm mb-4">
                This software has been tested in exactly one environment. That environment no
                longer exists.
              </p>
              <div className="border border-yellow-500/30 rounded-xl p-3 bg-yellow-500/5">
                <div className="text-white/40 text-xs">Certified by:</div>
                <div className="font-bold text-yellow-300 text-sm mt-0.5">
                  GerhartStudios QA Department
                </div>
                <div className="text-white/25 text-[10px] mt-0.5">
                  (department does not exist)
                </div>
              </div>
              <div className="mt-3 text-[10px] text-white/20">satire · parody · not real</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
