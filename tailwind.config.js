/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(45, 74, 170, 0.08) 0px 8px 24px 0px",
        solid_l: "0px 10px 120px 0px rgba(45, 74, 170, 0.1)",
        "solid-8":
          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(45, 74, 170, 0.06) 0px 12px 120px 0px",
        "solid-9":
          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(45, 74, 170, 0.06) 0px 12px 30px 0px",

        "solid-10":
          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(45, 74, 170, 0.06) 0px 8px 30px 0px",
        "shadow-two": "",
      },
      backgroundColor: {
        primary: "#006bff",
        dark: "#181c31",
        blacksection: "#1c2136",
        hoverdark: "#252a42",
        titlebgdark: "#46495a",
        btndark: "#292e45",
        blackho: "#2c3149",
        strokedark: "#2d2f40",
        stroke: "#eee",
      },
      borderColor: {
        strokedark: "#2d2f40",
        stroke: "#eeeeee",
        primary: "#006bff",
        waterloo: "#757693",
        manatee: "#999aa1",
      },
      textColor: {
        primary: "#006bff",
      },
      fontSize: {
        hero: "44px",
        sectiontitle2: ["40px", "52px"],
      },
      lineHeight: {
        hero: "58px",
      },
      stroke: {
        strokedark: "#2d2f40",
      },
      padding: {
        7.5: "1.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
        15.5: "12.5rem",
        25: "6.25rem",
        30: "7.5rem",
        32.5: "8.125rem",
        37.5: "9.375rem",
        45: "11.25rem",
        50: "12.5rem",
        55: "13.75rem",
      },
      zIndex: {
        1: "1",
      },
      inset: {
        17.5: "4.375rem",
      },
      margin: {
        7.5: "1.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
        15.5: "12.5rem",
        25: "6.25rem",
        32.5: "8.125rem",
        37.5: "9.375rem",
        45: "11.25rem",
        50: "12.5rem",
        55: "13.75rem",
      },
      gap: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
