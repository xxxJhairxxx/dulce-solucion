/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF408D",
        secundary: "#FFADCE",
        warning: "#FFC700",
        success: "#800452",
        gris: {
          100: "#A6A6A6",
          200: "#606060",
        },
        dark: {
          100: "#242424",
          200: "#202020",
        },
      },
      fontFamily: {
        primary: ["var(--font-outfit)"],
        secundary: ["var(--font-quicksand)"],
      },
      screens: {
        phone: "414px",
        tablet: "768px",
        tabletlg: "960px",
        tabletxl: "1024px",
        laptop: "1200px",
        laptoplg: "1400px",
        desktop: "1700px",
      },
    },
  },
  plugins: [],
};
