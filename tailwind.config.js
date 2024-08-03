/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        gray: {
          900: "#212121",
          850: "#121214",
          800: "#343b41",
          700: "#212529",
          600: "#757575",
          500: "#9e9e9e",
          400: "#bdbdbd",
          300: "#e0e0e0",
          200: "#eeeeee",
          100: "#f5f5f5",
        },
      },
      fontSize: {
        base: "1.6rem",
        lg: "1.8rem",
      },
    },
  },
  plugins: [],
};
