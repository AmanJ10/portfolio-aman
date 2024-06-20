/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        github: "0 0 20px rgba(0, 0, 0, 1.0)", // increased to 20px
        leetcode: "0 0 20px rgba(234, 179, 8, 1.0)", // increased to 20px
        gfg: "0 0 20px rgba(34, 197, 94, 1.0)", // increased to 20px
        tensorflow:
          "0 4px 8px -1px rgba(237, 131, 53, 1.0), 0 4px 6px -1px rgba(237, 131, 53, 0.06)", // increased spread
        mongodb:
          "0 4px 8px -1px rgba(75, 174, 79, 1.0), 0 4px 6px -1px rgba(75, 174, 79, 0.06)", // increased spread
        python:
          "0 4px 8px -1px rgba(53, 114, 201, 1.0), 0 4px 6px -1px rgba(53, 114, 201, 0.06)", // increased spread
        html: "0 4px 8px -1px rgba(227, 79, 38, 1.0), 0 4px 6px -1px rgba(227, 79, 38, 0.06)", // increased spread
        css: "0 4px 8px -1px rgba(38, 77, 228, 1.0), 0 4px 6px -1px rgba(38, 77, 228, 0.06)", // increased spread
        javascript:
          "0 4px 8px -1px rgba(240, 219, 79, 1.0), 0 4px 6px -1px rgba(240, 219, 79, 0.06)", // increased spread
        react:
          "0 4px 8px -1px rgba(97, 218, 251, 1.0), 0 4px 6px -1px rgba(97, 218, 251, 0.06)", // increased spread
        tailwind:
          "0 4px 8px -1px rgba(56, 189, 248, 1.0), 0 4px 6px -1px rgba(56, 189, 248, 0.06)", // increased spread
        nodejs:
          "0 4px 8px -1px rgba(101, 163, 13, 1.0), 0 4px 6px -1px rgba(101, 163, 13, 0.06)", // increased spread
        expressjs: "0 0 20px rgba(0, 0, 0, 1.0)", // increased to 20px
        firebase:
          "0 4px 8px -1px rgba(255, 204, 77, 1.0), 0 4px 6px -1px rgba(255, 204, 77, 0.06)", // increased spread
        java: "0 4px 8px -1px rgba(176, 114, 25, 1.0), 0 4px 6px -1px rgba(176, 114, 25, 0.06)", // increased spread
        cplusplus:
          "0 4px 8px -1px rgba(43, 90, 157, 1.0), 0 4px 6px -1px rgba(43, 90, 157, 0.06)", // increased spread
      },
      colors: {
        "bg-shade": "#f5fcff",
        primary: "#1d4ed8",
        darkblue: "#1e3a8a",
      },
      backgroundImage: (theme) => ({
        "orange-gradient": "linear-gradient(90deg, #BB1900, #FD6F01, #FFB000)",
      }),
    },
  },
  plugins: [],
};
