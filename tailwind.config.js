/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        desktop: '50px',
        mobile: '10px',
      },
      animation: {
        fade: 'fade 0.4s ease-in-out',
        slideDown: 'slideDown 1s ease-in-out',
      },
      keyframes: {
        fade:{
          '0%': {scale: 0, opacity:0},
          '100%': {scale: 1, opacity:100},
        },
        slideDown: {
          '0%': {opacity: 0, transform: 'translateY(-70px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
      },
    },
  },
  plugins: [],
}

