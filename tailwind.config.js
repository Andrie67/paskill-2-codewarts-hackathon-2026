/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1565C0",
        accent: "#F57C00",
        background: {
          light: "#f3f4f6", // Outer frame background
          DEFAULT: "#ffffff",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem', // For the phone frame
      }
    },
  },
  plugins: [],
}
