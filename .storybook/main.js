const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    stories: ['../bullpen/index.ts', '../docs/**/*.stories.mdx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: (config) => {
        const cssModulesRule = {
            test: /\.module\.css$/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1,
                        modules: {
                            // TODO: use shared class name creation?
                            localIdentName: '[name]-[local]_[hash:base64:5]'
                        }
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        };

        const globalCssRule = {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: 'css-loader', options: { sourceMap: true } },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        };
        const extraRules = [cssModulesRule, globalCssRule];

        // remove the existing css loader rule
        config.module.rules = config.module.rules.filter((rule) => !rule.test.test('.css'));

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

        config.plugins = [...config.plugins, new MiniCssExtractPlugin()];
        // console.dir(config, { depth: null });
        return config;
    }
};
