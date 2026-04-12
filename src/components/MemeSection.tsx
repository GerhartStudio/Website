import { Construction, Monitor, Target, ScrollText, Fingerprint, TrendingUp, FileCode, Building } from "lucide-react";

const memes = [
  { icon: Construction, top: "CLIENT: Can you add one small feature?", bottom: "CLAUDIA: *generates 47 files, 3 new databases, and a microservice architecture*" },
  { icon: Monitor, top: "\"It works on my machine\"", bottom: "Narrator: It did not, in fact, work on any machine." },
  { icon: Target, top: "Prompt Engineer Interview:", bottom: "\"What's your greatest strength?\" \"I can ask Claude very nicely.\"" },
  { icon: ScrollText, top: "Me reading the AI-generated code I shipped to prod:", bottom: "\"I have no memory of this place.\" — Gandalf" },
  { icon: Fingerprint, top: "Git blame says I wrote this.", bottom: "My browser history says Claude did." },
  { icon: TrendingUp, top: "Day 1: I'll just use AI for boilerplate", bottom: "Day 30: Claudia is my tech lead, therapist, and spiritual guide" },
  { icon: FileCode, top: "Senior Dev: Let me review your PR", bottom: "The PR: 2000 lines of Claudia's stream of consciousness" },
  { icon: Building, top: "config.yml exists:", bottom: "Marketing: \"We are now an enterprise solution\"" },
];

const MemeSection = () => (
  <section id="memes" className="py-16 sm:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-mono px-2.5 py-1 rounded glass-card text-primary mb-3 inline-block">CULTURAL ARTIFACTS</span>
        <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-foreground">Meme Gallery</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">Priceless relics from the vibecoding trenches.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {memes.map((m, i) => (
          <div key={i} className="glass-card p-4 rounded-lg group hover:border-primary/20 transition-colors">
            <m.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-[10px] font-mono text-primary mb-1.5 uppercase leading-snug">{m.top}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{m.bottom}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MemeSection;
