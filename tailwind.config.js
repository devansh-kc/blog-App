/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "className",
  theme: {
    colors: {
      // ...
      tahiti: {
        light: "#fdf6e4",
        DEFAULT: "#fdf6e4",
        dark: "#16161d",
      },
      // ...
    },
  },
  plugins: [],
};
