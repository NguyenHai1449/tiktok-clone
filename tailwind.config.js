/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            ...colors,
            gray: '#1D1D1F',
            white: '#fff',
        },
        fontSize: {
            xs: '1.2rem',
            sm: '1.4rem',
            base: '1.6rem',
            lg: '1.8rem',
            xl: '2rem',
            '2xl': '2.4rem',
            '3xl': '3rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        container: {
            padding: '1.5rem',
        },
        extend: {},
    },
    plugins: [],
};
