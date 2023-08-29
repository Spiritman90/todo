/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Work Sans, sans-serif",
    },
    extend: {
      colors: {
        lightGray: "#475467",
        gray: "#344054",
        whitishGray: "#EAECF0",
      },
    },
  },
  plugins: [],
};
