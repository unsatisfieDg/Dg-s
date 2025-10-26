export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '375px',     // iPhone SE, 12/13 mini
        'sm': '640px',     // Large phones, small tablets
        'md': '768px',     // iPad, tablets
        'lg': '1024px',    // iPad Pro, small laptops
        'xl': '1280px',    // Desktops
        '2xl': '1536px',   // Large desktops
      },
    },
  },
  plugins: [],
}