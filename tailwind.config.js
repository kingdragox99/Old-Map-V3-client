/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `error.{js,ts,vue}`,
  ],
  theme: {
    fontFamily: {
      noto: ['Noto Serif', 'serif'],
      inco: ['Inconsolata', 'monospace'],
    },
    extend: {
      colors: {
        logo: 'var(--logo)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        neutral: 'var(--neutral)',
        other: 'var(--other)',
        background: 'var(--background)',
        info: 'var(--info)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
      },
      padding: {
        '0dot5': '0.125rem',
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      width: {
        '1of2': '50%',
        '1of3': '33.3333%',
        '2of3': '66.6666%',
        '1of4': '25%',
        '3of4': '75%',
        '1of5': '20%',
        '2of5': '40%',
        '3of5': '60%',
        '4of5': '80%',
        '1of6': '16.6666%',
        '1of12': '8.3333%',
      },
    },
  },
  separator: '_',
  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
    darkTheme: 'dark',
  },
};
