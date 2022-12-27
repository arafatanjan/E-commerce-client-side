/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // content: [
  //   "./node_modules/flowbite/**/*.js"],
  // plugins: [
  //   require('flowbite/plugin')
  // ],
}
