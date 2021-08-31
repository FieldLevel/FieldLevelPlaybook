// use a tailwind config for storybook that includes building classes from docs content
const config = {
    purge: {
        content: ['./src/**/*.tsx', './docs/**/*.tsx', './docs/**/*.mdx', './bullpen/Bullpen.tsx']
    },
    presets: [require('../tailwind.preset.js')]
};

module.exports = {
    plugins: { 'postcss-import': {}, tailwindcss: { config: config }, autoprefixer: {} }
};
