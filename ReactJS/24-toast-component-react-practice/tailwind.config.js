/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    "bg-red-300",
    "bg-red-400",
    "bg-blue-300",
    "bg-blue-400",
    "top-8",
    "bottom-8",
    "right-8",
    "left-8",
  ],
  plugins: [],
};
