/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        instagram: {
          orange: "#F58529",
          pink: "#DD2A7B",
          purple: "#8134AF",
          blue: "#515BD4",
        },
      },
    },
  },
  plugins: [],
};
