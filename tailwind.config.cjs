/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "brand": {
        "50": "#F9FEFD",
        "300": "#98EAD8",
        "600": "#3ECFAF",
        "800": "#1F7965"
      },
      "primary": {
        "50": "#F8FCFB",
        "300": "#84C3B5",
        "600": "#16856C",
        "800": "#0A4E3F"
      },
      "accent": {
        "50": "#FFF9F6",
        "300": "#FFCBB5",
        "600": "#FFA07A",
        "800": "#915942"
      },
      "carbon": {
        "50": "#B5BEBC",
        "300": "#7E8D8A",
        "600": "#485B57",
        "800": "#242E2C"
      },
      "carbon-light": {
        "50": "#F5F7F6",
        "300": "#C2CAC8",
        "600": "#919E9B",
        "800": "#656F6D"
      },
      "info": {
        "50": "#E6EFFC",
        "300": "#73A9E9",
        "600": "#0063CC",
        "800": "#003879"
      },
      "success": {
        "50": "#ECF7EA",
        "300": "#9ACF90",
        "600": "#4AA23A",
        "800": "#285F1E"
      },
      "warning": {
        "50": "#FFF9EB",
        "300": "#FFD575",
        "600": "#FFAC00",
        "800": "#BB8100"
      },
      "error": {
        "50": "#FAE6E6",
        "300": "#DD7979",
        "600": "#B91313",
        "800": "#6D0606"
      },
    },
    extend: {},
  },
  plugins: [],
}
