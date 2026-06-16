/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        body: ['Inter', 'Sora', 'sans-serif'],
      },
      colors: {
        midnight: '#050816',
        ink: '#070A13',
        panel: '#0B1020',
        cyanx: '#20E7FF',
        violetx: '#8B5CF6',
      },
      boxShadow: {
        glow: '0 0 48px rgba(32, 231, 255, 0.24)',
        violet: '0 0 48px rgba(139, 92, 246, 0.24)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        orbit: 'orbit 16s linear infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
