type TeamMember = {
  name: string;
  role: string;
  description: string;
  avatar: string;
  skills: string[];
  discord?: string;
};

const team: TeamMember[] = [
  {
    name: "Gerhart",
    role: "Founder & Lead Developer",
    description:
      "Der Kopf hinter Gerhart Studio. Java-Entwickler mit Leidenschaft für elegante Plugin-Architekturen und flüssiges Gameplay.",
    avatar: "G",
    skills: ["Java", "Spigot API", "Paper", "MySQL"],
    discord: "gerhart",
  },
  {
    name: "Alex",
    role: "Backend Developer",
    description:
      "Spezialist für Datenbank-Architekturen, Performance-Optimierung und komplexe System-Integrationen.",
    avatar: "A",
    skills: ["Java", "MongoDB", "Redis", "Netty"],
    discord: "alex_dev",
  },
  {
    name: "Mia",
    role: "UI/UX & Config Designer",
    description:
      "Sorgt für intuitive Benutzeroberflächen in Plugins, verständliche Konfigurationen und eine nahtlose User Experience.",
    avatar: "M",
    skills: ["Plugin Design", "Config", "Documentation", "Testing"],
    discord: "mia_craft",
  },
];

function AvatarCircle({ initials }: { initials: string }) {
  return (
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-grass-DEFAULT to-grass-dark flex items-center justify-center text-black font-black text-xl shadow-glow flex-shrink-0">
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grass-DEFAULT/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grass-DEFAULT/10 border border-grass-DEFAULT/20 text-grass-DEFAULT text-xs font-mono mb-4">
            / das team
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Hinter dem <span className="gradient-text">Studio</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Wir sind ein kleines, aber leidenschaftliches Team – Minecraft-Spieler
            und Entwickler in einem.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-[#141414] border border-[rgba(74,222,128,0.1)] rounded-xl p-6 hover:border-[rgba(74,222,128,0.3)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <AvatarCircle initials={member.avatar} />
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-grass-DEFAULT text-sm font-mono">
                    {member.role}
                  </p>
                  {member.discord && (
                    <p className="text-zinc-600 text-xs mt-0.5">
                      @{member.discord}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {member.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((skill) => (
                  <span key={skill} className="tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-grass-DEFAULT/10 to-emerald-500/10 border border-grass-DEFAULT/20 rounded-2xl p-10 text-center grid-bg">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-white font-black text-2xl sm:text-3xl mb-3">
              Werde Teil von Gerhart Studio
            </h3>
            <p className="text-zinc-400 max-w-lg mx-auto mb-6 text-sm sm:text-base">
              Du bist ein leidenschaftlicher Java-Entwickler oder Minecraft-Enthusiast?
              Wir wachsen – und suchen Talente, die mit uns die Plugin-Welt gestalten.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-grass-DEFAULT hover:bg-grass-dark text-black font-bold rounded transition-all duration-200 shadow-glow"
            >
              Bewirb dich jetzt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
