import { Search, Rocket, Bot, AlertTriangle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const stats = [
  { value: "∞", label: "Prompts Deployed" },
  { value: "0", label: "Tests Written" },
  { value: "99.7%", label: "AI Content" },
  { value: "1", label: "Human Involved" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-12">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full glass-card text-xs font-mono text-primary">
          <AlertTriangle className="w-3 h-3" />
          <span>THIS IS SATIRE — NOT REAL ACCUSATIONS</span>
          <AlertTriangle className="w-3 h-3" />
        </div>

        <div className="flex justify-center mb-6">
          <img src={logo} alt="GerhartStudios Logo" className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.15)]" />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 text-foreground leading-tight">
          GerhartStudios
        </h1>
        <p className="text-lg sm:text-xl text-primary font-medium mb-4">
          Enterprise-Grade Vibe Coding Since The First Hallucination
        </p>
        <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto mb-8">
          Powered by confidence, plugins, and suspicious amounts of AI assistance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          <a href="#slop-meter" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
            <Search className="w-4 h-4" /> Inspect the Slop
          </a>
          <a href="#pipeline" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass-card text-foreground font-medium text-sm hover:bg-secondary transition-colors">
            <Rocket className="w-4 h-4" /> Deploy the Vibes
          </a>
          <a href="#claudia" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass-card text-foreground font-medium text-sm hover:bg-secondary transition-colors">
            <Bot className="w-4 h-4" /> Trust the Prompt
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold font-mono text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
