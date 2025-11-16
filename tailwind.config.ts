/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#4F46E5",
        accent: "#E11D48",
      },
      spacing: {
        18: "4.5rem",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(79,70,229,0.5)",
      }
    },
  },
  plugins: [],
};
