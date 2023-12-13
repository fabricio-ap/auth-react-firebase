/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DC7E40',
        onPrimary: '#FFFFFF',
        ghost: '#FFFFFF',
        border: '#dcdfe3',
        background: '#006541',
      },
    },
  },
};
