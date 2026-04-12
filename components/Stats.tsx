const stats = [
  { value: "50+", label: "Plugins entwickelt", icon: "🔌" },
  { value: "10K+", label: "Server-Installationen", icon: "🖥️" },
  { value: "99.9%", label: "Uptime garantiert", icon: "⚡" },
  { value: "24/7", label: "Support verfügbar", icon: "🛠️" },
];

const features = [
  {
    icon: "⚡",
    title: "High Performance",
    description:
      "Jedes Plugin wird auf minimale Serverlast optimiert. Async-Tasks, effiziente Datenbank-Queries und intelligentes Caching halten deinen TPS stabil.",
  },
  {
    icon: "🔧",
    title: "Vollständig konfigurierbar",
    description:
      "Umfangreiche config.yml Dateien geben Serveradmins die Kontrolle. Jedes Feature lässt sich anpassen, aktivieren oder deaktivieren.",
  },
  {
    icon: "🔗",
    title: "Nahtlose Integration",
    description:
      "Kompatibel mit Spigot, Paper, Purpur und gängigen Plugins wie Vault, PlaceholderAPI, LuckPerms und WorldGuard.",
  },
  {
    icon: "📦",
    title: "Einfache Installation",
    description:
      "Drag & Drop in den plugins-Ordner, Server neustarten – fertig. Kein kompliziertes Setup, klare Dokumentation inklusive.",
  },
  {
    icon: "🛡️",
    title: "Aktive Weiterentwicklung",
    description:
      "Regelmäßige Updates mit neuen Features, Bug-Fixes und Kompatibilität für die neuesten Minecraft-Versionen.",
  },
  {
    icon: "💬",
    title: "Persönlicher Support",
    description:
      "Direkte Hilfe über Discord. Kein Ticket-System, kein Wartezimmer – echte Menschen, echte Antworten.",
  },
];

export default function Stats() {
  return (
    <section id="features" className="py-24 px-4 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grass-DEFAULT/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grass-DEFAULT/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-[#141414] border border-[rgba(74,222,128,0.1)] hover:border-[rgba(74,222,128,0.25)] transition-colors duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grass-DEFAULT/10 border border-grass-DEFAULT/20 text-grass-DEFAULT text-xs font-mono mb-4">
            / warum gerhart studio
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Crafted with <span className="gradient-text">Precision</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Nicht nur Plugins – wir liefern Qualität, Zuverlässigkeit und echten Support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="p-6 rounded-xl bg-[#141414] border border-[rgba(74,222,128,0.08)] hover:border-[rgba(74,222,128,0.25)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-grass-DEFAULT/10 flex items-center justify-center text-xl mb-4 group-hover:bg-grass-DEFAULT/20 transition-colors duration-300">
                {feat.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feat.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
