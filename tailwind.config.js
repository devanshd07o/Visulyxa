/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'void': '#000000',
        'neon-blue': '#00F7FF',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'tech': ['Space Grotesk', 'sans-serif'],
        'code': ['JetBrains Mono', 'monospace'],
        'syncopate': ['Syncopate', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spinSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 1.5s ease-out forwards',
        'spin-slow': 'spinSlow 20s linear infinite',
      }
    },
  },
  plugins: [],
}