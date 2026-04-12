const contactOptions = [
  {
    icon: "💬",
    title: "Discord",
    description: "Tritt unserem Discord-Server bei und chatte direkt mit dem Team.",
    action: "Discord beitreten",
    href: "#",
    highlight: true,
  },
  {
    icon: "📧",
    title: "E-Mail",
    description: "Schreib uns für Business-Anfragen oder Custom Plugin-Aufträge.",
    action: "E-Mail schreiben",
    href: "mailto:hello@gerhartstudio.dev",
    highlight: false,
  },
  {
    icon: "🐙",
    title: "GitHub",
    description: "Open-Source Projekte, Issues melden und am Code mitarbeiten.",
    action: "GitHub ansehen",
    href: "https://github.com/gerhartstudio",
    highlight: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grass-DEFAULT/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grass-DEFAULT/10 border border-grass-DEFAULT/20 text-grass-DEFAULT text-xs font-mono mb-4">
            / kontakt
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Lass uns <span className="gradient-text">reden</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Ob Fragen, Feature-Wünsche oder Custom-Aufträge – wir sind für dich da.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {contactOptions.map((opt) => (
            <div
              key={opt.title}
              className={`relative rounded-xl p-6 border transition-all duration-300 group ${
                opt.highlight
                  ? "bg-grass-DEFAULT/5 border-grass-DEFAULT/30 hover:border-grass-DEFAULT/60"
                  : "bg-[#141414] border-[rgba(74,222,128,0.1)] hover:border-[rgba(74,222,128,0.3)]"
              }`}
            >
              <div className="text-4xl mb-4">{opt.icon}</div>
              <h3 className="text-white font-bold text-xl mb-2">{opt.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                {opt.description}
              </p>
              <a
                href={opt.href}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                  opt.highlight
                    ? "text-grass-DEFAULT hover:text-grass-light"
                    : "text-zinc-400 hover:text-grass-DEFAULT"
                }`}
              >
                {opt.action} →
              </a>
            </div>
          ))}
        </div>

        {/* Discord banner */}
        <div className="rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/30 p-8 sm:p-12 text-center">
          <div className="text-5xl mb-4">🎮</div>
          <h3 className="text-white font-black text-2xl sm:text-3xl mb-3">
            Unsere Community auf Discord
          </h3>
          <p className="text-zinc-400 max-w-lg mx-auto mb-6 text-sm sm:text-base">
            Hunderte von Serveradmins und Entwicklern tauschen sich in unserem Discord
            aus. Hole dir Hilfe, teile deine Server-Projekte und bleib mit Updates
            auf dem Laufenden.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded transition-all duration-200 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Discord Server beitreten
          </a>
        </div>
      </div>
    </section>
  );
}
