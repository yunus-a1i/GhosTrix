/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './index.html',
    "professional-platform.html", // Include the main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS and TS files inside the src folder
  ],
  theme: {
    extend: {
      screens: {
        ssm:'550px',
        xs: '420px',    // Custom breakpoint for 420px
        'sm-xs': '375px', // Custom breakpoint for 375px
        xxs: '320px',   // Custom breakpoint for 320px
      },
      animation: {
        rotate: 'rotate 4s linear infinite',
      },
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(1turn)' },
        }
      }
    },
  },
  plugins: [],
};
