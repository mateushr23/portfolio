/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        maven: ["Maven Pro"],
        inconsolata: ["Inconsolata"],
        asap: ["Asap"],
      },
    },
    colors: {
      red: "#E3646E",
      purple: "#BB72E9",
      blue: "#3996DB",
      green: "#82BC4F",
      yellow: "#EABD5F",
      gray100: "#0D0E11",
      gray200: "#16181D",
      gray300: "#292C34",
      gray400: "#878EA1",
      gray500: "#C0C4CE",
      gray600: "#E2E4E9",
    },
  },
  plugins: [],
}
