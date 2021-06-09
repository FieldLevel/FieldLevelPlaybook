const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    stories: ['../bullpen/index.ts', '../docs/**/*.stories.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        }
    ],
    // workaround for babel issue supposedly fixed in storybook 6.3: https://github.com/storybookjs/storybook/issues/14805
    babel: async (options) => {
        const { plugins = [] } = options;
        return {
            ...options,
            plugins: [
                ...plugins,
                [require.resolve('@babel/plugin-proposal-private-property-in-object'), { loose: true }]
            ]
        };
    },
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
        config.module.rules = config.module.rules.filter((rule) => rule.test && !rule.test.test('.css'));

        // disable file loader rule for SVGs
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test && !Array.isArray(rule.test) && rule.test.test('.svg')
        );
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
