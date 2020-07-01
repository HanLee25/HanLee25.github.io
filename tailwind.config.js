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
  },
  variants: {
    textShadow: ["responsive", "hover"],
  },
  plugins: [
    require("@tailwindcss/custom-forms"), // https://github.com/tailwindcss/custom-forms
    require("tailwindcss-textShadow"), // https://github.com/iunteq/tailwindcss-textShadow
  ],
};
