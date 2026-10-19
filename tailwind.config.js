import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'on-secondary-fixed': '#351000',
        surface: '#ffffff',
        'error-container': '#ffdad6',
        'secondary-container': '#fe8d56',
        'primary-container': '#339cc5',
        'surface-variant': '#e4e4e7',
        'tertiary-container': '#9c8f8b',
        'inverse-on-surface': '#f8efed',
        // Brand palette (Brand Guidelines 2026)
        primary: '#319fcc', // Blue
        'surface-tint': '#319fcc',
        secondary: '#e97d49', // Peach
        'inverse-surface': '#231f20', // Black — dark panels
        tertiary: '#52525b', // Neutral gray — muted text
        'on-surface': '#231f20', // Black — body text
        background: '#ffffff',
        'on-primary': '#ffffff',
        outline: '#6f787f',
        'surface-container': '#f4f4f5',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '16px',
        xl: '80px',
        base: '8px',
        gutter: '24px',
        lg: '48px',
        xs: '4px',
        md: '24px',
        sm: '12px',
      },
      fontFamily: {
        // Brand: Poppins (primary / headings), Raleway (secondary / body).
        'headline-md': ['Poppins', 'sans-serif'],
        'title-lg': ['Poppins', 'sans-serif'],
        'display-lg': ['Poppins', 'sans-serif'],
        'body-md': ['Raleway', 'sans-serif'],
        'label-md': ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'title-lg': ['22px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
      },
    },
  },
  plugins: [forms, containerQueries],
}
