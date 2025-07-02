/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'serif': ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        'sage': '#9bb9bb',
        'cream': 'rgb(243, 240, 232)',
        'forest': '#3f4a3f',
        'text-primary': 'rgb(65, 65, 63)',
      },
    },
  },
  plugins: [],
}