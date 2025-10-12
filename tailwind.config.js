/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C39A5C",
        secondary: "#fef9f3",
        border: "#e5e7eb",
        foreground: "#1f2937",
        "muted-foreground": "#6b7280",
      },
    },
  },
  plugins: [],
}
