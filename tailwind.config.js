/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",   // Jika pakai React/Nextjs
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",      // Indigo
        secondary: "#64748B",    // Slate
        danger: "#EF4444",       // Red
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      container: {
        center: true,
        padding: "1.2rem",
      },
    },
  },
  plugins: [],
};
