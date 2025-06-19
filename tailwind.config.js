
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          DEFAULT: "#3b82f6",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#f97316",
          foreground: "#ffffff"
        }
      },
      borderRadius: {
        lg: "1rem",
        md: "0.5rem",
        sm: "0.25rem"
      }
    }
  },
  plugins: []
};
