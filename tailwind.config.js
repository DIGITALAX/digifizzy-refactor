/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offBlack: "#111313",
        midWhite: "#FAF4E8",
        skyBlue: "#BBEEFF",
        offWhite: "#F2F2F2",
        dull: "#CDAAA4",
      },
      fontFamily: { 
        futur: "Futurist",
        mag: "Letter Magic",
        rain: "Internal Rainbows",
        lib: "Liberation Mono",
        libB: "Liberation Mono Bold",
        fut: "Futurist",
      },
      cursor: {
        sewing: "url('/images/sewingCursor.png'), auto",
        sewingH: "url('/images/sewingCursorH.png'), auto",
        sewingS: "url('/images/sewingCursorSmall.png'), auto",
        sewingHS: "url('/images/sewingCursorHSmall.png'), auto",
      },
    },
  },
  plugins: [],
}