module.exports = {
    typescript: true,
    ext: 'tsx',
    svgo: true,
    svgoConfig: {
        plugins: [{ removeViewBox: false }, { removeAttrs: { attrs: 'fill' } }]
    }
};
