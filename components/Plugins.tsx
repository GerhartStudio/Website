"use client";

type Plugin = {
  icon: string;
  name: string;
  description: string;
  tags: string[];
  version: string;
  badge?: string;
  badgeColor?: string;
};

const plugins: Plugin[] = [
  {
    icon: "⚔️",
    name: "GerhartCombat",
    description:
      "Erweitertes Kampfsystem mit custom Combos, Knockback-Control und PvP-Balancing für ein faires und spannendes Spielerlebnis.",
    tags: ["PvP", "Combat", "Spigot"],
    version: "v2.4.1",
    badge: "Beliebt",
    badgeColor: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  },
  {
    icon: "🏠",
    name: "GerhartHomes",
    description:
      "Intuitives Home-System mit Teleport-Cooldowns, Gruppenberechtigungen und unbegrenzten Home-Slots per Permission.",
    tags: ["Utility", "Homes", "Paper"],
    version: "v1.9.0",
  },
  {
    icon: "💰",
    name: "GerhartEconomy",
    description:
      "Vollständiges Wirtschaftssystem mit Player-Shops, Auktionshaus, Währungsverwaltung und Bank-Integration.",
    tags: ["Economy", "Shops", "Vault"],
    version: "v3.1.2",
    badge: "Neu",
    badgeColor: "bg-grass-DEFAULT/10 text-grass-DEFAULT border-grass-DEFAULT/20",
  },
  {
    icon: "🗺️",
    name: "GerhartQuests",
    description:
      "Umfangreiches Quest-System mit Story-Linien, custom Rewards, NPC-Interaktionen und Fortschritts-Tracking.",
    tags: ["Quests", "RPG", "NPC"],
    version: "v1.5.3",
  },
  {
    icon: "🛡️",
    name: "GerhartGuard",
    description:
      "Leistungsstarkes Anti-Cheat und Grief-Prevention Plugin mit automatischer Erkennung und konfigurierbaren Strafen.",
    tags: ["Security", "Anti-Cheat", "Protection"],
    version: "v4.0.0",
    badge: "Premium",
    badgeColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
  {
    icon: "🌍",
    name: "GerhartWorlds",
    description:
      "Multi-World-Manager mit custom Generatoren, Welt-Portalen, Permissions pro Welt und einfacher Konfiguration.",
    tags: ["Worlds", "Multiverse", "Generator"],
    version: "v2.2.0",
  },
];

function PluginCard({ plugin }: { plugin: Plugin }) {
  return (
    <div className="relative bg-[#141414] border border-[rgba(74,222,128,0.12)] rounded-xl p-6 card-hover group">
      {/* Badge */}
      {plugin.badge && (
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded border ${plugin.badgeColor}`}
        >
          {plugin.badge}
        </span>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-[#1e1e1e] border border-[rgba(74,222,128,0.15)] flex items-center justify-center text-2xl mb-4 group-hover:border-grass-DEFAULT/40 transition-colors duration-300">
        {plugin.icon}
      </div>

      {/* Name & Version */}
      <div className="flex items-baseline gap-2 mb-2">
        <h3 className="text-white font-bold text-lg">{plugin.name}</h3>
        <span className="text-zinc-600 text-xs font-mono">{plugin.version}</span>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
        {plugin.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {plugin.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Plugins() {
  return (
    <section id="plugins" className="py-24 px-4 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grass-DEFAULT/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grass-DEFAULT/10 border border-grass-DEFAULT/20 text-grass-DEFAULT text-xs font-mono mb-4">
            / plugins
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Unsere <span className="gradient-text">Plugins</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Von Kampfsystemen bis zur Wirtschaft – jedes Plugin wird mit Präzision
            entwickelt und getestet.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plugins.map((plugin) => (
            <PluginCard key={plugin.name} plugin={plugin} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-zinc-500 text-sm mb-4">
            Braucht dein Server ein individuelles Plugin?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-grass-DEFAULT/30 hover:border-grass-DEFAULT text-grass-DEFAULT text-sm font-semibold rounded transition-all duration-200 hover:bg-grass-DEFAULT/5"
          >
            Custom Plugin anfragen →
          </a>
        </div>
      </div>
    </section>
  );
}
