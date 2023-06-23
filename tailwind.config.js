module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  // theme: {
  //   fontFamily: {
  //     sans: ['Roboto', 'system-ui', 'sans-serif'],
  //     serif: ['Roboto', 'Georgia', 'serif'],
  //     // Add more font families if needed
  //   }},
  plugins: [
    require('@tailwindcss/forms')
  ],
}