/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Pretendard', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#ffffff',
        foreground: '#F9F9F9',
        primary: '#007AFF',
        secondary: '#EFEFF0',
        input: '#E6E6E7',
        text: '#222222',
        icon: '#808085',
      },
    },
  },
  plugins: [tailwindcssAnimate],
  corePlugins: {
    preflight: false,
  },
};
