/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        mobile: "90%",
        medium: "85%",
      },
      colors: {
        my_yellow: "#bda334",
        my_blue: "#4137a7",
        red: "#FF1E1E",
      },
    },
  },
  plugins: [require("daisyui")],
};
