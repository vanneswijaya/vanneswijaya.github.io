module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      transitionProperty: ["hover", "focus"],
      spacing: {
        90: "22.5rem",
        112: "28rem",
        128: "32rem",
        160: "40rem",
      },
      colors: {
        kuning: "#fca311",
        birutua: "#14213d",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover", "group-hover", "even", "odd"],
      height: ["hover", "group-hover"],
      width: ["hover", "group-hover"],
      margin: ["hover", "group-hover"],
      borderWidth: ["hover", "group-hover"],
      fontWeight: ["hover", "group-hover"],
      transform: ["hover", "group-hover"],
      scale: ["hover", "group-hover"],
      translate: ["hover", "group-hover"],
      inset: ["hover", "group-hover"],
      space: ["hover", "group-hover"],
      transitionDelay: ["hover", "group-hover"],
      backgroundColor: ["even", "odd", "active"],
      flexDirection: ["even", "odd"],
      textColor: ["even", "odd"],
      backgroundImage: ["first", "last", "even", "odd"],
      gradientColorStops: ["first", "last", "even", "odd"],
    },
  },
  plugins: [],
};
