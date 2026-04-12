import { reviews } from '@/lib/data';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < count ? '#fbbf24' : 'rgba(255,255,255,0.12)'}
          aria-hidden="true"
        >
          <path d="M7 0.5l1.8 3.7 4.1.6-3 2.9.7 4.1L7 9.9l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 .5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #4ade80 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(74,222,128,0.3), transparent)',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-yellow-500/15 border border-yellow-500/30 rounded-full px-5 py-2 text-yellow-300 text-sm font-semibold mb-6">
            <span aria-hidden="true">⭐</span>
            100% Real Reviews From Extremely Unbiased Professionals (Probably)
          </div>
          <h2
            id="reviews-heading"
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            What{' '}
            <span className="shimmer-text">People Are Saying</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            Totally real testimonials from completely real people. Definitely not fabricated for
            satirical purposes.{' '}
            <strong className="text-white/60">These are fictional, comedic reviews.</strong>
          </p>
        </div>

        {/* Average rating display */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 glass-card inline-flex mx-auto px-8 py-5">
          <div className="text-center">
            <div className="font-heading font-black text-6xl text-yellow-400 leading-none">
              5.0
            </div>
            <div className="flex justify-center mt-2">
              <StarRating count={5} />
            </div>
            <div className="text-white/30 text-xs mt-1">out of 5 ★ (fictional)</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-white/[0.08]" aria-hidden="true" />
          <div className="text-center sm:text-left">
            <div className="text-white/60 text-sm">
              <strong className="text-white/80">6 reviews</strong> — all 5 stars
            </div>
            <div className="text-white/35 text-xs mt-1">
              (100% satisfaction, 0% of reviewers read the code)
            </div>
            <div className="flex gap-1.5 mt-3 flex-wrap">
              {['Vibes: 10/10', 'Code: N/A', 'Docs: What docs?'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold bg-yellow-500/10 border border-yellow-500/25 text-yellow-400/70 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="glass-card-hover p-6 flex flex-col gap-4"
              aria-label={`Review by ${review.name}`}
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600/40 to-cyan-600/40 border border-white/[0.1] flex items-center justify-center text-xl shrink-0"
                  role="img"
                  aria-label={`${review.name} avatar`}
                >
                  {review.avatar}
                </div>

                {/* Name + role */}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white/90 text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs truncate">{review.role}</div>
                </div>

                {/* Verified badge */}
                <div
                  className="text-[10px] font-bold text-green-400/70 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5 shrink-0"
                  title="Verified by Claudia (not actually verified)"
                >
                  ✓ Verified*
                </div>
              </div>

              {/* Stars */}
              <StarRating count={review.stars} />

              {/* Review text */}
              <blockquote className="text-white/65 text-sm leading-relaxed flex-1 italic">
                &quot;{review.text}&quot;
              </blockquote>

              {/* Footer */}
              <div className="text-[10px] text-white/25 border-t border-white/[0.06] pt-3">
                *Verification performed by a fictional AI. Take accordingly.
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-white/20 text-xs">
            These reviews are{' '}
            <strong className="text-white/35">fictional parody</strong> created for humor. No real
            persons were quoted without consent. All names are fictional.
          </p>
        </div>
      </div>
    </section>
  );
}
