/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        porcelain: "#F7F7F2",
        beige: "#E4E6C3",
        palm: "#899878",
        carbon: "#222725",
        onyx: "#121113"
      }
    }
  },
  plugins: []
};

