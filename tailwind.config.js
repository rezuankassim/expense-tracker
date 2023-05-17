/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      h1: ['3rem', '3.5rem'],
      h2: ['2.25rem', '2.875rem'],
      h3: ['1.875rem', '2.375rem'],
      h4: ['1.5rem', '2rem'],
      h5: ['1.25rem', '1.75rem'],
      h6: ['1.125rem', '1.5rem'],
      base: ['1rem', '1.5rem'],
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.313rem'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: 'rgb(174, 122, 255)',
        hover: 'rgb(139, 97, 203)',
        soft: 'rgb(239, 228, 255)',
      },
      secondary: {
        'accent-1': 'rgb(250, 232, 164)',
        'accent-1-soft': 'rgb(255, 250, 237)',
        'accent-2': 'rgb(233, 152, 152)',
        'accent-2-soft': 'rgb(251, 234, 234)',
        'accent-3': 'rgb(152, 233, 171)',
        'accent-3-soft': 'rgb(234, 252, 238)',
      },
      gray: {
        DEFAULT: 'rgb(95, 100, 109)',
        soft: 'rgb(231, 232, 233)',
      },
      stone: {
        DEFAULT: 'rgb(250, 244, 240)',
      },
      dark: {
        DEFAULT: 'rgb(0, 0, 0)',
        soft: 'rgb(22, 22, 22)',
        softer: 'rgb(37, 37, 36)',
      },
      black: 'rgb(0, 0, 0)',
      white: 'rgb(255, 255, 255)',
    },
    boxShadow: {
      'primary-sm': '4px 4px 0px 0px rgb(0, 0, 0)',
      primary: '6px 6px 0px 0px rgb(0, 0, 0)',
      'primary-md': '8px 8px 0px 0px rgb(0, 0, 0)',
      'primary-dark-sm': '4px 4px 0px 0px rgba(255, 255, 255, 0.25)',
      'primary-dark': '6px 6px 0px 0px rgba(255, 255, 255, 0.25)',
      'primary-dark-md': '8px 8px 0px 0px rgba(255, 255, 255, 0.25)',
      'secondary-sm': '4px -4px 0px 0px rgb(0, 0, 0)',
      secondary: '6px -6px 0px 0px rgb(0, 0, 0)',
      'secondary-md': '8px -8px 0px 0px rgb(0, 0, 0)',
      'secondary-dark-sm': '4px -4px 0px 0px rgba(255, 255, 255, 0.25)',
      'secondary-dark': '6px -6px 0px 0px rgba(255, 255, 255, 0.25)',
      'secondary-dark-md': '8px -8px 0px 0px rgba(255, 255, 255, 0.25)',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
