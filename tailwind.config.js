module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                prime: "#1A1B1D"
            },
            backgroundImage: {
                "homepage": "url('../assets/img/homepage.png')",
            },
            width: {
                'custom': "1400px"
            }
        },
    },
    plugins: [],
}