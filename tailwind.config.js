// playbook library tailwind config
// tailwind.include lists tailwind classes that we always want included in the final bundle
// regardless of usage
module.exports = {
    purge: {
        content: ['./src/**/*.tsx', 'tailwind.include']
    },
    presets: [require('./tailwind.preset.js')]
};
