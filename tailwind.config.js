// trigger autocompletion from Taiwind CSS Intellisense

module.exports = {
    content: ["./src/**/*.{html,js}"], // Adjust according to your file structure
    theme: {
        extend: {},
    },
    plugins: [
      require('flowbite/plugin'), // Add Flowbite plugin for carousel
    ],
};