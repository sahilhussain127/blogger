/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGradientStart: "#ff4b2b",
        primaryGradientEnd: "#ff416c",
        grayLight: "#f6f5f7",
        darkText: "#333",
      },
    },
  },
  plugins: [],
};
