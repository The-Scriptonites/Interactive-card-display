/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-desktop": "url('/public/images/bg-main-desktop.png')",
        "main-mobile": "url('/public/images/bg-main-mobile.png')",
        "card-front": "url('/public/images/bg-card-front.png')",
        "card-back": "url('/public/images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
