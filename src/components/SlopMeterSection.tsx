'use client';

import { useEffect, useRef, useState } from 'react';
import { slopMetrics } from '@/lib/data';

function CircularGauge({
  value,
  color,
  glowColor,
  animated,
}: {
  value: number;
  color: string;
  glowColor: string;
  animated: boolean;
}) {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (value / 100) * circumference;

  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Track */}
      <circle
        cx="42"
        cy="42"
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="6"
      />
      {/* Glow ring */}
      <circle
        cx="42"
        cy="42"
        r={radius}
        fill="none"
        stroke={glowColor}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={animated ? targetOffset : circumference}
        strokeLinecap="round"
        transform="rotate(-90 42 42)"
        style={{
          transition: 'stroke-dashoffset 1.8s cubic-bezier(0.25,0.46,0.45,0.94)',
          filter: `drop-shadow(0 0 6px ${glowColor})`,
          opacity: 0.3,
        }}
      />
      {/* Main ring */}
      <circle
        cx="42"
        cy="42"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeDasharray={circumference}
        strokeDashoffset={animated ? targetOffset : circumference}
        strokeLinecap="round"
        transform="rotate(-90 42 42)"
        style={{
          transition: 'stroke-dashoffset 1.6s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      />
      {/* Center value */}
      <text
        x="42"
        y="46"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill="white"
        fontFamily="system-ui, sans-serif"
      >
        {animated ? `${value}%` : '0%'}
      </text>
    </svg>
  );
}

export default function SlopMeterSection() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="slop-meter"
      ref={sectionRef}
      aria-labelledby="slop-meter-heading"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-100">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/30 rounded-full px-5 py-2 text-purple-300 text-sm font-semibold mb-6">
            <span aria-hidden="true">🧪</span>
            Fictional Satirical Analytics™
          </div>

          <h2
            id="slop-meter-heading"
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            <span className="text-gradient-purple">AI Slop Meter</span>
          </h2>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white/60 mb-4">
            DonutPlugins™ Vibe Analysis Dashboard
          </h3>
          <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
            These metrics are{' '}
            <strong className="text-white/60">entirely fictional and comedic</strong>. No actual
            analysis was performed. Claudia generated these numbers with full confidence and zero
            citations.
          </p>
        </div>

        {/* Stats summary bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Lines Unreviewed', value: '47,291', icon: '📄', color: 'text-purple-400' },
            { label: 'APIs Hallucinated', value: '312', icon: '🔮', color: 'text-cyan-400' },
            {
              label: 'Commits Without Tests',
              value: '99.9%',
              icon: '💀',
              color: 'text-orange-400',
            },
            { label: 'Times Claudia Said "Done"', value: '∞', icon: '🤖', color: 'text-pink-400' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-4 text-center hover:bg-white/[0.07] transition-colors"
            >
              <div className="text-2xl mb-1" aria-hidden="true">
                {stat.icon}
              </div>
              <div className={`font-heading font-black text-2xl ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-white/40 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {slopMetrics.map((metric, i) => (
            <article
              key={metric.id}
              className="glass-card p-6 hover:bg-white/[0.07] transition-all duration-300 group"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
              aria-label={`${metric.label}: ${metric.value}%`}
            >
              <div className="flex items-start gap-5">
                {/* Circular gauge */}
                <CircularGauge
                  value={metric.value}
                  color={metric.gradientFrom}
                  glowColor={metric.glowColor}
                  animated={animated}
                />

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                    <h4 className="font-heading font-bold text-white/90 text-base leading-snug">
                      {metric.label}
                    </h4>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        background: `${metric.glowColor.replace('0.6', '0.15')}`,
                        color: metric.gradientFrom,
                        border: `1px solid ${metric.glowColor.replace('0.6', '0.3')}`,
                      }}
                    >
                      {metric.tag}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2.5 bg-white/[0.06] rounded-full overflow-hidden mb-3">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full progress-bar"
                      style={{
                        width: animated ? `${metric.value}%` : '0%',
                        background: `linear-gradient(90deg, ${metric.gradientFrom}, ${metric.gradientTo})`,
                        boxShadow: `0 0 8px ${metric.glowColor}`,
                        transitionDelay: `${i * 100}ms`,
                      }}
                      role="progressbar"
                      aria-valuenow={metric.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={metric.label}
                    />
                  </div>

                  <p className="text-white/35 text-xs leading-relaxed">{metric.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-white/25 text-xs max-w-md mx-auto">
            📊 Measurements conducted by Claudia using proprietary vibe-detection algorithms.
            Margin of error: ±100%. This is satire.
          </p>
        </div>
      </div>
    </section>
  );
}
