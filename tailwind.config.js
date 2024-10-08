/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./components/CustomButton.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#fc425e",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },

      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        pdblack : ["PlayflairDisplay-Black", "sans-serif"],
        pdbold: ["PlayflairDisplay-Bold", "sans-serif"],
        pdsemibold: ["PlayfairDisplay-SemiBold", "sans-serif"],
        pdextrabold: ["PlayfairDisplay-ExtraBold", "sans-serif"],
        pdregular: ["PlayfairDisplay-Regular", "sans-serif"],
        pdmedium: ["PlayfairDisplay-Medium", "sans-serif"],
      },

      backgroundImage: {
        'logo': "url('../assets/images/s1.png')",
      },
    },
  },
  plugins: [],
}

