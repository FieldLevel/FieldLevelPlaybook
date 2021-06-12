// playbook library tailwind config
module.exports = {
    purge: {
        content: ['./src/**/*.tsx']
    },
    presets: [require('./tailwind.preset.js')]
};
