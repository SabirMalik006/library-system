/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#e8f5ec',
          100: '#c8e6d3',
          200: '#a8d7bb',
          300: '#76c79a',
          400: '#4db87a',
          500: '#0f6a3d',
          600: '#0d4d2c',
          700: '#0a3d23',
          800: '#072e1a',
          900: '#051f11',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          card:    'var(--color-surface-card)',
          border:  'var(--color-surface-border)',
          'border-soft': 'var(--color-surface-border-soft)',
          'border-half': 'var(--color-surface-border-half)',
          hover:   'var(--color-surface-hover)',
          'hover-soft': 'var(--color-surface-hover-soft)',
          'hover-light': 'var(--color-surface-hover-light)',
        },
        accent: {
          green:  '#2fa66a',
          amber:  '#f59e0b',
          rose:   '#ef4444',
          purple: '#8b5cf6',
        },
        text: {
          primary:   'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted:     'var(--color-text-muted)',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '1.25rem',
      },
    },
  },
  plugins: [],
}
