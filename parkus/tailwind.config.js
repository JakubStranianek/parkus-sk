
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        custom: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
      },
      rotate: {
        '180': '180deg',
      },
      transitionProperty: {
        'rotate': 'transform',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-down': 'fade-down 0.5s ease-in-out',
        'fade-down-header': 'fade-down 1.5s ease-in-out',
        'opacity': 'opacity 1s ease-in-out'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translate(-150px, -150px)' },
          '100%': { opacity: 1, transform: 'translate(0, 0)' }
        },
        'fade-down': {
          '0%': { opacity: 0, transform: 'translate(0px, -20px)' },
          '100%': { opacity: 1, transform: 'translate(0, 0)' }
        },
        'opacity': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
