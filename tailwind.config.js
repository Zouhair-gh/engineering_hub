/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0b2545',
          muted: '#33526d',
          accent: '#b88f2a'
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f7fafc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif']
      },
    },
  },
  plugins: [],
};
