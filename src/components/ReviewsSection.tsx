import { Star } from "lucide-react";

const reviews = [
  { text: "I installed one plugin and suddenly my server had a business model.", author: "CraftLord_9000", role: "Minecraft Entrepreneur" },
  { text: "The code compiled, the economy inflated, and my life changed.", author: "StackOverflow_Refugee", role: "Former Manual Coder" },
  { text: "I asked for one feature and received a complete theological framework.", author: "PluginPastor", role: "Spiritual Code Reviewer" },
  { text: "You can literally smell the vibecoding through the config.", author: "SensoryDev", role: "Aromatic Engineer" },
  { text: "My server crashes at exactly the same time every day now. Consistency.", author: "ConsistencyKing", role: "Predictable Ops Lead" },
  { text: "I showed this to my CS professor. He cried. I think it was pride.", author: "FreshGrad42", role: "Aspiring Prompt Engineer" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-16 sm:py-24">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-mono px-2.5 py-1 rounded glass-card text-primary mb-3 inline-block">SOCIAL PROOF (SATIRICAL)</span>
        <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-foreground">Rave Reviews</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Totally real testimonials from extremely unbiased professionals (probably).
          <br /><span className="text-xs italic">None of these are real. This is satire.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card p-5 rounded-lg hover:border-primary/20 transition-colors">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground mb-4 leading-relaxed">"{r.text}"</p>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-primary">
                {r.author[0]}
              </div>
              <div>
                <div className="text-xs font-medium text-foreground">{r.author}</div>
                <div className="text-[10px] text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
