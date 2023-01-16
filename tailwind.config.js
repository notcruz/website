/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans]
            },
            colors: {
                gray: {
                    0: "#fff",
                    100: "#fafafa",
                    200: "#eaeaea",
                    300: "#999999",
                    400: "#888888",
                    500: "#666666",
                    600: "#444444",
                    700: "#333333",
                    800: "#222222",
                    900: "#111111",
                },
                "primary": {
                    100: "#FFC8C8",
                    300: "#FF5858"
                }
            },
        },
    },
};
