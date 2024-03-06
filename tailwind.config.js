/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        banner_title: "36px",
      },
      colors: {
        gogoro_black: {
          50: "#f1f0f2",
          100: "#e7e6e8",
          200: "#c1bec4",
          300: "#9a97a1",
          400: "#54535c",
          500: "#121215",
          600: "#0e0e12",
          700: "#0a0a0f",
          800: "#07070d",
          900: "#04040a",
          950: "#010105",
        },
        gogoro_blue: {
          50: "#f5fbff",
          100: "#ebf8ff",
          200: "#cae7fc",
          300: "#aad5fa",
          400: "#6da9f7",
          500: "#3172f6",
          600: "#2760db",
          700: "#1c48b8",
          800: "#123494",
          900: "#0a216e",
          950: "#041347",
        },
      },
    },
  },
  plugins: [],
};
