/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        surface: {
          DEFAULT: '#0f1117',
          card:    '#161b27',
          border:  '#1e2536',
          hover:   '#1c2333',
        },
        accent: {
          cyan:   '#22d3ee',
          lime:   '#a3e635',
          amber:  '#fbbf24',
          rose:   '#fb7185',
          violet: '#a78bfa',
        }
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40L40 0M0 0l40 40' stroke='%231e2536' stroke-width='.5'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in':    'fadeIn .4s ease forwards',
        'slide-up':   'slideUp .5s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(.4,0,.6,1) infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
