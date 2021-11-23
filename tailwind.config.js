module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
      display: ["dark"],
    },
  },
  plugins: [],
}
