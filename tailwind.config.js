/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        // 👇 УСКОРИЛИ ВРЕМЯ (Меньше секунд = быстрее)
        blob: "blob 4.5s infinite", // Было 7s
        "blob-fast": "blob 3s infinite", // Было 4s (очень быстро)
        "blob-slow": "blob 6s infinite", // Было 10s
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            // 👇 УВЕЛИЧИЛИ РАЗМАХ (Летит дальше)
            // Было 150px, стало 250px. Scale 1.5 (сильно раздувается)
            transform: "translate(250px, -150px) scale(1.5)", 
          },
          "66%": {
            // Было -120px, стало -200px.
            transform: "translate(-200px, 150px) scale(0.8)", 
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};