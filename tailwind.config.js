/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        iBlue: 'hsl(259, 98%, 20%)',
        iBlue2: 'hsl(260, 98%, 17%)',
        orangeAccent: 'hsl(356, 100%, 71%)',
        blueAccent: 'hsl(263, 99%, 46%)',
      },
      fontFamily:{
        sans: ['Epilogue', 'sans-serif'],
        roboto:['Roboto', 'sans-serif'],
      },
      backgroundImage:(theme) => ({
        'logo-dark-mode': "url('../assets/logo-white.svg')",
        'logo-light-mode': "url('../assets/logo.svg')",
        'curvy-dark-mode': "url('../assets/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../assets/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants:{
    extend:{
      background:['dark'],
    },
  },
  plugins: [],
}
