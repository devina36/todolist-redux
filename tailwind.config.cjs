/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-75px)' },
          '70%': { transform: 'translateY(0)' },
          '85%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-down': 'slide-down 300ms ease-in-out',
        'slide-up': 'slide-up 500ms ease-in-out',
      },
    },
  },
  plugins: [],
};
