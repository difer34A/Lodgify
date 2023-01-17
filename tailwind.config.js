/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "500px",
      md: "600px",
      lg: "850px",
      xl: "1124px",
      "2xl": "1436px",
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
    },
    colors: {
        transparent: "transparent",
        current: "currentColor",
        pBlue: {
            100: "#f0f8ff",
            200: "#e1f1ff",
            300: "#d1eaff",
            400: "#c2e3ff",
            500: "#b3dcff",
            600: "#8fb0cc",
            700: "#6b8499",
            800: "#485866",
            900: "#242c33"
        },
        pGreen: {
            100: "#dff5e0",
            200: "#bfebc0",
            300: "#9ee0a1",
            400: "#7ed681",
            500: "#5ecc62",
            600: "#4ba34e",
            700: "#387a3b",
            800: "#265227",
            900: "#132914"
        },
        pDGreen: {
            100: "#ccefda",
            200: "#99deb5",
            300: "#66ce8f",
            400: "#33bd6a",
            500: "#00ad45",
            600: "#008a37",
            700: "#006829",
            800: "#00451c",
            900: "#00230e"
        },
        soft: {
            black: {
                100: "#d1d1d1",
                200: "#a2a4a3",
                300: "#747675",
                400: "#454947",
                500: "#171b19",
                600: "#121614",
                700: "#0e100f",
                800: "#090b0a",
                900: "#050505"
            },
            white: {
                100: "#fffefd",
                200: "#fefcfb",
                300: "#fefbfa",
                400: "#fdf9f8",
                500: "#fdf8f6",
                600: "#cac6c5",
                700: "#989594",
                800: "#656362",
                900: "#333231",
            },
            darkwhite: "#fdf1ed",
        },
        sugarmilk: "#fdf5f2",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        1: "#b3dcff",
        2: "#5ecc62",
        3: "#00ad45",
    },
  },
  plugins: [],
};
