/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'fellowship-gold-button': '#A18844',
                'fellowship-gold-button-hover': '#C3AA66'
            },
            screens: {
                '3xl': '1792px',
                'LolFullContentScreenSize': '1800px'
            }
        }
    },
    plugins: [],
}
