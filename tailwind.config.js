/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": 'var(--bg-color)',
        "form-bg": "var(--form-bg)",
        "text-color": "#A3AED0",
        "button-bg": "#CED4FE",
      },
      fontFamily: {
        "DM": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
}