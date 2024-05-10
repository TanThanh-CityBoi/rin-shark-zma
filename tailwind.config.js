module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--zmp-primary-color)",
        gray: "#767A7F",
        divider: "#E9EBED",
        green: "#288F4E",
        background: "#ffffff",
        skeleton: "rgba(0, 0, 0, 0.1)",
        warning: {
          100: "#FFF8EC",
          200: "#FFD596",
          300: "#FFC670",
          400: "#FFB240",
          500: "#FFA826",
          600: "#E48900",
          700: "#FF6500",
        },
        pricore: {
          100: "#EEF5FC",
          200: "#DBEDFF",
          300: "#28AAE1",
          400: "#2893E1",
          500: "#0671E0",
          600: "#2A3B8E",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".neumorphism-flat-xs": {
            boxShadow: "5px 5px 7px #bababa,-5px -5px 7px #f2f2f2",
          },
        },
        ["responsive", "hover", "focus", "active"]
      );
    },
  ],
};
