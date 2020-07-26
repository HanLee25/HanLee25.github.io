// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      "-30": "-30deg",
      "-15": "-15deg",
      "-5": "-5deg",
      "0": "0",
      "5": "5deg",
      "15": "15deg",
      "30": "30deg",
      "45": "45deg",
      "90": "90deg",
      "180": "180deg",
    },
    textShadow: {
      default: "0 2px 0 #000",
      md: "0 2px 2px #000",
      h1: "0 0 3px #FF0000, 0 0 5px #0000FF",
      xl: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
      none: "none",
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/10": "10%",
      "1/20": "5%",
      "1/50": "2.5%",
      "1/100": "1%",
      full: "100%",
      screen: "100vh",
    }),
    opacity: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "90": "0.90",
      "100": "1",
    },
  },
  variants: {
    textShadow: ["responsive", "hover"],
  },
  plugins: [
    require("@tailwindcss/custom-forms"), // https://github.com/tailwindcss/custom-forms
    require("tailwindcss-textShadow"), // https://github.com/iunteq/tailwindcss-textShadow
  ],
};
