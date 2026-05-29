/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // User requested color palette
        gold: {
          light: '#D4C27A',
          DEFAULT: '#C8A94D',
          dark: '#B0933C',
        },
        dark: {
          pure: '#000000',
          rich: '#0a0a0a',
          card: '#1c1c1c',
          border: '#222222',
        },
        light: {
          text: '#E0E0E0',
          muted: '#B8B8B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(200, 169, 77, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(200, 169, 77, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
