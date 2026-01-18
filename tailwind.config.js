/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 ПРИВЯЗЫВАЕМ ТВОИ ШРИФТЫ
        // Теперь font-sans будет использовать Montserrat ARM
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"],
        // Теперь класс font-secondary будет использовать Adelle Sans
        secondary: ["var(--font-adelle)", "ui-serif", "Georgia"],
      },
      colors: {
        background: "#0a0b0d",
        primary: "#6366f1",
      },
    },
  },
  plugins: [],
}