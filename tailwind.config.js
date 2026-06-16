/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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

      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      
      // 2. Buat Class Animasinya
      animation: {
        'wave': 'wave 2.5s infinite', // Nama class jadi: animate-wave
        'marquee': 'marquee 36s linear infinite',
        'marquee-reverse': 'marqueeReverse 36s linear infinite',
      },
      
      // --- SELESAI TAMBAHAN ---
    },
  },
  plugins: [],
}
