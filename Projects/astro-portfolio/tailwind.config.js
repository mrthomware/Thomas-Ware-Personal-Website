// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1',
        secondary: '#4F46E5',
        accent: '#818CF8',
        dark: '#111827',
        light: '#F9FAFB',
        muted: '#9CA3AF',
      },
      spacing: {
        'header': '4.5rem',
        'section': '5rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0,0,0,0.1)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: { color: theme('colors.primary'), fontWeight: '500' },
            h1: { fontWeight: '700' },
            h2: { fontWeight: '600' },
            h3: { fontWeight: '600' },
            strong: { fontWeight: '600' },
            code: { backgroundColor: theme('colors.gray.100'), padding: '0.25rem 0.5rem' },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: { color: theme('colors.indigo.400') },
            code: { backgroundColor: theme('colors.gray.800') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
