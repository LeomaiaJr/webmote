/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gamepad: {
          constrast: '#414141',
          red: '#FF3A39',
          green: '#51B74A',
          yellow: '#F4E300',
          blue: '#3574FF',
        },
      },
    },
  },
  plugins: [],
};
