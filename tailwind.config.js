/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layout/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "ping-mini": "ping 3s cubic-bezier(0, 0, 0, 0.1) infinite;",
            },
        },

        fontFamily: {
            lato: ["Lato", "sans-serif"],
        },
        colors: {
            primary: "#4AF27B",
            secondary: "#A8A8A8",
            white: "#FFFFFF",
            gray: "#A8A8A8",
            darkbg: "#162943",
            background: "#102542",
        },
    },
    plugins: [],
};
