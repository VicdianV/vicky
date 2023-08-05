/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "640px",
        md: "800px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        primary: "#645133",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
}

