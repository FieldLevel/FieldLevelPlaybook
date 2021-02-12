module.exports = {
    purge: {
        content: ['./src/**/*.tsx', './docs/**/*.tsx'],
        options: {
            safelist: [/^Playbook-/]
        }
    },
    presets: [require('./tailwind.preset.js')]
};
