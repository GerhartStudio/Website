import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GerhartStudios — Enterprise Grade Vibe Coding Since The First Hallucination';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0f1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Background grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Satire badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(239,68,68,0.2)',
            border: '1px solid rgba(239,68,68,0.5)',
            borderRadius: '50px',
            padding: '8px 20px',
            marginBottom: '32px',
            color: '#fca5a5',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          ⚠️ SATIRE / PARODY SITE
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            background: 'linear-gradient(90deg, #a855f7, #fb923c, #22d3ee)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          GerhartStudios
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            marginBottom: '40px',
            maxWidth: '800px',
          }}
        >
          Enterprise Grade Vibe Coding Since The First Hallucination
        </div>

        {/* Tags row */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['DonutPlugins', 'AI Vibecoding', 'Minecraft Plugins', 'Claudia AI', 'Satire'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(168,85,247,0.15)',
                  border: '1px solid rgba(168,85,247,0.3)',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  color: '#c084fc',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
