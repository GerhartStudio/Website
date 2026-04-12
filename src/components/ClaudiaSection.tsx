import { Bot, Code, Coffee, Bug, TestTube, PenLine } from "lucide-react";

const stats = [
  { label: "Lines Written", value: "847K", icon: Code },
  { label: "Lines Understood", value: "~12", icon: PenLine },
  { label: "Coffee Consumed", value: "N/A", icon: Coffee },
  { label: "Bugs Created", value: "Features™", icon: Bug },
  { label: "Tests Suggested", value: "Many", icon: TestTube },
  { label: "Tests Written", value: "lol", icon: TestTube },
];

const ClaudiaSection = () => (
  <section id="claudia" className="py-16 sm:py-24">
    <div className="container mx-auto">
      <div className="max-w-3xl mx-auto glass-card rounded-xl p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="flex-shrink-0 text-center">
            <div className="w-24 h-24 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <p className="text-[10px] font-mono text-muted-foreground mt-1.5">v3.5-opus-vibes</p>
          </div>

          <div>
            <span className="text-[10px] font-mono text-primary mb-1 inline-block">MEET THE TEAM</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Claudia</h2>
            <p className="text-sm text-primary font-medium mb-3">Chief Vibe Architecture Officer</p>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Writes code, invents APIs, refuses to elaborate, and occasionally hallucinates entire
              database schemas into existence. Responsible for 90% of the output and 10% emotional support.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="bg-muted/50 rounded-lg p-2.5 text-center">
                  <s.icon className="w-3 h-3 text-primary mx-auto mb-1" />
                  <div className="text-sm font-bold font-mono text-primary">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ClaudiaSection;
