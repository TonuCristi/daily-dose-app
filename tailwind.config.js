/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-50": "rgb(242,104,34)",
        "gray-50": "rgb(153,153,153)",
        "gray-100": "rgb(70,66,66)",
        "gray-150": "rgb(44,43,43)",
        "gray-200": "rgb(37,33,33)",
      },
      fontFamily: {
        serif: [`"Source Serif 4", serif`],
      },
      borderColor: {
        "2bOpacity": "rgb(255, 255, 255, 0.2)",
        loader: "rgb(73, 80, 87,0.7)",
        "gray-50": "rgb(153,153,153)",
        "gray-100": "rgb(70,66,66)",
        "gray-150": "rgb(44,43,43)",
        "gray-200": "rgb(37,33,33)",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.4rem",
        "3xl": "1.9rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      maxWidth: {
        defaultWidth: "120rem",
      },
    },
  },
  plugins: [],
};
