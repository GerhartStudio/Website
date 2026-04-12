const footerLinks = {
  Plugins: [
    { label: "GerhartCombat", href: "#plugins" },
    { label: "GerhartHomes", href: "#plugins" },
    { label: "GerhartEconomy", href: "#plugins" },
    { label: "GerhartQuests", href: "#plugins" },
    { label: "Alle Plugins", href: "#plugins" },
  ],
  Studio: [
    { label: "Über uns", href: "#team" },
    { label: "Das Team", href: "#team" },
    { label: "Features", href: "#features" },
    { label: "Kontakt", href: "#contact" },
  ],
  Legal: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "Nutzungsbedingungen", href: "#" },
    { label: "Lizenz (MIT)", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[rgba(74,222,128,0.1)] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-grass-DEFAULT to-grass-dark rounded flex items-center justify-center font-mono font-bold text-black text-sm">
                G
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Gerhart<span className="text-grass-DEFAULT">Studio</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6">
              Wir entwickeln leistungsstarke Minecraft Plugins, die Servern Leben
              einhauchen. Made with ❤️ und Java.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[rgba(74,222,128,0.1)] hover:border-grass-DEFAULT/40 flex items-center justify-center text-zinc-400 hover:text-grass-DEFAULT transition-all duration-200"
                aria-label="Discord"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </a>
              <a
                href="https://github.com/gerhartstudio"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[rgba(74,222,128,0.1)] hover:border-grass-DEFAULT/40 flex items-center justify-center text-zinc-400 hover:text-grass-DEFAULT transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="mailto:hello@gerhartstudio.dev"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[rgba(74,222,128,0.1)] hover:border-grass-DEFAULT/40 flex items-center justify-center text-zinc-400 hover:text-grass-DEFAULT transition-all duration-200"
                aria-label="Email"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-500 hover:text-grass-DEFAULT text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(74,222,128,0.1)] to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>
            © {new Date().getFullYear()} GerhartStudio. Alle Rechte vorbehalten.
          </p>
          <p className="font-mono">
            Built with{" "}
            <span className="text-grass-DEFAULT">Next.js</span> &{" "}
            <span className="text-grass-DEFAULT">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
