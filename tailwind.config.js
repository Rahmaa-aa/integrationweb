/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  content: ["./*.html", "./src/**/*.html"],
  theme: {
    extend: {}
  },
  plugins: []
};
=======
module.exports = {
  content: ["./src/**/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        sidebar: "#0f172a",
        sidebarLight: "#111827",
        accent: "#f97316",
      },
    },
  },
  plugins: [],
};



>>>>>>> ala
