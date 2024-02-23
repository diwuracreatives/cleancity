/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green' : '#32E12E',
        'primary-text': '#010B01',
        'secondary-text' : '#6F736E',
        'secondary-bg': '#F5FAF4',
        'primary-red': '#FF3023'
      },
    },
  },
  plugins: [],
};
