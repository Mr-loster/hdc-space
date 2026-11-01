/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kraft: {
          50: '#FAF7F2',
          100: '#F5EFE6', // 温和浅牛皮纸主色
          150: '#EFE7DA',
          200: '#E8DEC8',
          250: '#E0D4BD',
          300: '#D5C3A5',
          400: '#BEA683',
          500: '#A48A64',
          600: '#876D49',
          700: '#6A5333',
          800: '#4D3B23',
          900: '#322515',
          950: '#1D160C',
        },
        brand: {
          50: '#fbf7ee',
          100: '#f5ecd6',
          200: '#ead7aa',
          300: '#debe7a',
          400: '#d0a24f',
          500: '#b88334',
          600: '#9d6828',
          700: '#7e4f20',
          800: '#673f1c',
          900: '#563519',
          950: '#321c0b',
        },
      },
    },
  },
  plugins: [],
};
