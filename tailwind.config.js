module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        fontFamily: {
            sans: ["satoshi", "sans-serif"],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
