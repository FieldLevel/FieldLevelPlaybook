module.exports = {
    typescript: true,
    ext: 'tsx',
    svgo: true,
    svgoConfig: {
        plugins: [
            {
                name: 'removeAttrs',
                params: { attrs: 'fill' }
            }
        ]
    }
};
