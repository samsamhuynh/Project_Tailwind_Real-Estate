/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  pure: ["./*.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"'],
      },

      colors: {
        orangeff: "#FF9900",
        orangef8: "#F85A47",
        gray31: "#31353B",
        grayda: "DADADA",
      },

      gridTemplateColumns: {
        "grid-work": "repeat(auto-fit, minmax(300px, 1fr)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
