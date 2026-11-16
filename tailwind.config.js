/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          navy: "#0F172A",
          lightBlue: "#EFF6FF",
          cyan: "#06B6D4",
          slate: "#64748B",
          border: "#E2E8F0",
          softBg: "#F8FAFC",
          orange: "#F97316",
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};