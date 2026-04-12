import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#a855f7',
        'brand-cyan': '#22d3ee',
        'brand-orange': '#fb923c',
        'brand-green': '#4ade80',
        'brand-pink': '#f472b6',
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#111118',
          200: '#1a1a26',
          300: '#252538',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
        heading: ['Arial Black', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'float-slow': 'float 10s ease-in-out 1s infinite',
        'spin-slow': 'spin 15s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'scanline': 'scanline 4s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(168,85,247,0.1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(168,85,247,0.3)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(1.5deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};

export default config;
