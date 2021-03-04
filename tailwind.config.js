module.exports = {
    purge: {
        content: ['./src/**/*.tsx', './docs/**/*.tsx', './docs/**/*.mdx'],
        options: {
            safelist: [/^Playbook-/]
        }
    },
    presets: [require('./tailwind.preset.js')]
};
