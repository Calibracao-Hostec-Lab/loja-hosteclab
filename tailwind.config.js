/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "800px",
        cols5: "1545px",
        cols4: "1240px",
        cols3: "975px",
      },
    },
  },
  plugins: [],
};
