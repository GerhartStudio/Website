import { pipelineSteps } from '@/lib/data';

export default function PipelineSection() {
  return (
    <section
      id="pipeline"
      aria-labelledby="pipeline-heading"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-500/30 rounded-full px-5 py-2 text-cyan-300 text-sm font-semibold mb-6">
            <span aria-hidden="true">📋</span>
            Proprietary Development Methodology™
          </div>
          <h2
            id="pipeline-heading"
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            The{' '}
            <span className="text-gradient-cyan">GerhartStudios</span>
            <br />
            Pipeline
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            Eight battle-tested steps from random idea to production incident. Refined over
            countless deploys. Zero regrets. Some regrets.
          </p>
        </div>

        {/* Desktop timeline / Mobile list */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute left-[28px] top-8 bottom-8 w-px"
            style={{
              background:
                'linear-gradient(to bottom, #a855f7, #22d3ee, #fb923c, #f472b6, #4ade80, #a855f7)',
            }}
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-5" role="list">
            {pipelineSteps.map((step, i) => (
              <li key={step.step}>
                <article
                  className={`relative md:ml-16 glass-card border ${step.borderColor} ${step.bgColor} p-5 md:p-6 hover:scale-[1.01] transition-all duration-300 group`}
                  aria-label={`Step ${step.step}: ${step.title}`}
                >
                  {/* Step number bubble (desktop) */}
                  <div
                    className={`hidden md:flex absolute -left-[52px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${step.bgColor} border-2 ${step.borderColor} items-center justify-center text-xs font-black text-white z-10`}
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Emoji */}
                    <div
                      className="text-3xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                      role="img"
                      aria-hidden="true"
                    >
                      {step.emoji}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        {/* Mobile step number */}
                        <span
                          className={`md:hidden text-[10px] font-black ${step.tagText} ${step.tagBg} px-2 py-0.5 rounded-full`}
                        >
                          Step {step.step}
                        </span>
                        <h3 className="font-heading font-bold text-white/90 text-base md:text-lg">
                          {step.title}
                        </h3>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider ${step.tagText} ${step.tagBg} px-2.5 py-1 rounded-full shrink-0`}
                        >
                          {step.tag}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="glass-card inline-block px-6 py-3 text-sm text-white/40">
            ⏱ Average time from idea to production:{' '}
            <strong className="text-orange-400">2.7 hours</strong>. Average time to first support
            ticket: <strong className="text-red-400">2.8 hours</strong>.
          </div>
        </div>
      </div>
    </section>
  );
}
