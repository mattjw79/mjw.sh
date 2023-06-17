/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mjw-dark': '#1a1a1a',
        'mjw-mid': '#2a2a2a',
        'mjw-mid-highlight': '#4a4a4a',
        'mjw-light': '#cfd8dc',
      },
    },
  },
  plugins: [],
}
