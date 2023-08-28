/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    colors: {
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
    }
  },

  plugins: [],
};

module.exports = config;
