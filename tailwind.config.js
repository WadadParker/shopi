/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text:{
          DEFAULT:"#2F2F2F",
          grey:"#BBB"
        },
        border:{
          DEFAULT:"#D9D9D9"
        },
        bg:{
          DEFAULT:"#C00F0C",
          lightred:"#EC221F"
        }
      }
    },
  },
  plugins: [],
}

