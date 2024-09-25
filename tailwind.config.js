/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'railway': ['Raleway', 'sans-serif',]
    },
    colors: {
      transparent: '#eff6f8',
      current: '#eaa958',
      hover:'#00abd9',
      'white': '#ffffff',
     'nav':'#07192d',

    },
    backgroundImage: {
      'hero-pattern': "url('https://i.ibb.co.com/1QK8SwD/bg45-2.jpg')",
      
    },
    extend: {},
  },
  plugins: [],
}

