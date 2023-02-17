/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
            fontFamily: {
                inter: ["Inter var", "sans-serif"],
            },
            boxShadow: {
                card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
                cardhover:
                    "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
            animation: {
                "spin-slow-30": "spin 30s linear infinite",
                "spin-slow-25": "spin 25s linear infinite",
                "spin-slow-10": "spin 10s linear infinite",
                "marquee-infinite": "marquee 25s linear infinite",
            },
        },
    },
    plugins: [],
};
