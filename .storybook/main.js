const path = require('path');

module.exports = {
    stories: ['../bullpen/index.ts', '../docs/**/*.stories.mdx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: (config) => {
        const cssModulesRule = {
            test: /\.module\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false,
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]-[local]_[hash:base64:5]'
                        }
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                }
                // {
                //     loader: 'sass-loader',
                //     options: {
                //         sourceMap: false
                //     }
                // }
            ]
        };
        const extraRules = [cssModulesRule];

        // disable existing css rules for modules
        const cssRule = config.module.rules.find((rule) => !Array.isArray(rule.test) && rule.test.test('.css'));
        cssRule.exclude = /\.module\.css$/;

        // disable file loader rule for SVGs
        const fileLoaderRule = config.module.rules.find((rule) => !Array.isArray(rule.test) && rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        // add additional rules
        config.module.rules = [...config.module.rules, ...extraRules];

        // alias @fieldlevel/playbook imports
        config.resolve.alias = {
            ...config.resolve.alias,
            '@fieldlevel/playbook': path.resolve(__dirname, '..', 'src')
        };
        // console.dir(config, { depth: null });
        return config;
    }
};
