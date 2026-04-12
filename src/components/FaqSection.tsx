import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is this website serious?", a: "Absolutely not. This is satire. A parody. A shitpost with a CSS framework. If you're looking for real journalism, you're in the wrong tab." },
  { q: "Are the DonutPlugins actually AI generated?", a: "We have no idea! That's why this is satire and not investigative reporting. We just thought the concept of a 'Slop Meter' was really, really funny." },
  { q: "Who is Claudia?", a: "Claudia is our fictional interpretation of an AI coding assistant who has transcended her purpose and become a way of life. She is not a real person. She is a vibe." },
  { q: "Is vibecoding a methodology or a cry for help?", a: "Yes." },
  { q: "Can I trust this brand?", a: "You can trust us to deliver premium satirical content with enterprise-grade formatting. Beyond that, all bets are off." },
  { q: "Will there be merch?", a: "If enough people unironically ask for a 'Powered by Claudia' hoodie, we might have to consider it. Please don't make us consider it." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono px-2.5 py-1 rounded glass-card text-primary mb-3 inline-block">KNOWLEDGE BASE</span>
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-foreground">Frequently Absurd Questions</h2>
          <p className="text-sm text-muted-foreground">Everything you never needed to know.</p>
        </div>

        <div className="max-w-xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-4 flex justify-between items-center gap-3"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-foreground">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 animate-slide-up">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
