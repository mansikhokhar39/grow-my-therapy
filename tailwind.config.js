/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E3A2F",
        background: "#F9F8F5",
        accent: "#C47A4A",
        muted: "#6B776B",
      },
    },
  },
  plugins: [],
};
