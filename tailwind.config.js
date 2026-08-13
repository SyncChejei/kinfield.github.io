// tailwind.config.js

module.exports = {
  content: [
    "./*.html",
    "./components/**/*.html",
    "./partials/**/*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7D0000",
        secondary: "#125432",
        heading:"#01293A"
      },
      borderColor: {
        default: "#FFFFFF1F",
        gray: "#EBF2F5",
      },
    },
    container: {
        center: true,
        screens: {
            '2xl': '1440px',
        },
    },
  },
  plugins: [],
};