/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        porcelain: "#CEE5F2",
        beige: "#ACCBE1",
        palm: "#7C98B3",
        carbon: "#637081",
        onyx: "#536B78"
      }
    }
  },
  plugins: []
};

