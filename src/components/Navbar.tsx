import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Slop Meter", href: "#slop-meter" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Claudia", href: "#claudia" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card border-b py-2.5" : "py-4"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="GerhartStudios Logo" className="w-8 h-8 rounded-lg" />
          <span className="font-semibold text-foreground">GerhartStudios</span>
          <span className="hidden sm:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary">SATIRE</span>
        </a>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card mt-2 mx-4 p-3 rounded-lg animate-slide-up">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
