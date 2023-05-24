// tailwind.include lists tailwind classes that we always want included in the final bundle regardless of usage
module.exports = {
    content: ['./src/**/*.tsx', 'tailwind.include'],
    presets: [require('./tailwind.preset.js')]
};
