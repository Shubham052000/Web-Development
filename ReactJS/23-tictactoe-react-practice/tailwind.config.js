/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  safelist: [
    {
      pattern: /grid-cols-./,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
