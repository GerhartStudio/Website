import { Lightbulb, Bot, Pencil, FileText, Building2, Rocket, HandHelping } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Get Random Plugin Idea", desc: "Usually at 3 AM. Usually bad. Proceed anyway." },
  { icon: Bot, title: "Ask Claudia for 900 Lines", desc: "\"Make me a plugin that does everything.\" She sighs digitally." },
  { icon: Pencil, title: "Rename Variables", desc: "Change 'x' to 'playerHandler'. Call it refactoring." },
  { icon: FileText, title: "Add config.yml", desc: "Now it's configurable. Now it's enterprise." },
  { icon: Building2, title: "Call It Enterprise Software", desc: "Slap a version number on it. Preferably 3.0." },
  { icon: Rocket, title: "Ship to Production", desc: "No staging. No QA. Just vibes and prayers." },
  { icon: HandHelping, title: "Open Support Ticket & Pray", desc: "The code is in God's hands now. And Claudia's." },
];

const PipelineSection = () => (
  <section id="pipeline" className="py-16 sm:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-mono px-2.5 py-1 rounded glass-card text-primary mb-3 inline-block">TOP SECRET METHODOLOGY</span>
        <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-foreground">The Vibe Pipeline</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Our battle-tested (completely fictional) 7-step process for shipping plugins that technically compile.
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-3">
        {steps.map((s, i) => (
          <div key={i} className="glass-card p-4 rounded-lg flex gap-3 items-start group hover:border-primary/30 transition-colors">
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <s.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-primary">STEP {i + 1}</span>
              <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PipelineSection;
