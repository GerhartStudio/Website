import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="GerhartStudios Logo" className="w-7 h-7 rounded-md" />
          <span className="font-semibold text-sm text-foreground">GerhartStudios</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-destructive/10 text-destructive">SATIRE</span>
        </div>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <a href="#slop-meter" className="hover:text-primary transition-colors">Slop Meter</a>
          <a href="#pipeline" className="hover:text-primary transition-colors">Pipeline</a>
          <a href="#claudia" className="hover:text-primary transition-colors">Claudia</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <Link to="https://wwwleckmeinzeh.de/impressum" className="hover:text-primary transition-colors">Imprint</Link>
        </div>
      </div>

      <div className="glass-card rounded-lg p-4 text-center mb-6">
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] font-mono text-primary">MANDATORY DISCLAIMER</span>
          <AlertTriangle className="w-3.5 h-3.5 text-primary" />
        </div>
        <p className="text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed">
          This website is <strong className="text-foreground">satire/parody</strong> and should not be interpreted
          as factual reporting. All metrics, reviews, and claims are fictional and created for humor.
        </p>
      </div>

      <p className="text-center text-[10px] text-muted-foreground">
        © {new Date().getFullYear()} GerhartStudios (Satire Edition). No AI assistants were harmed.
      </p>
    </div>
  </footer>
);

export default Footer;
