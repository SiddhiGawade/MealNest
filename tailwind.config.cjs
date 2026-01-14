/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ghibli: {
                    pink: '#ff99ac',
                    peach: '#FFD4D3',
                    dusty: '#F0B9B7',
                    green: '#88CCA4',
                    sky: '#A0D8EF',
                    teal: '#2C5F6D',
                    white: '#FFFFFF',
                    black: '#1A1A1A',
                    hero: '#fae0e4'
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            fontFamily: {
                heading: ['Mali', 'cursive'],
                body: ['Quicksand', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
