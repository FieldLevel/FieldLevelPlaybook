const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaderUtils = require('loader-utils');

module.exports = {
    stories: ['../bullpen/index.ts', '../docs/**/*.stories.mdx'],
    staticDirs: ['../static'],
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
    core: {
        disableTelemetry: true
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
                            // TODO: standardize this with generateScopedName in rollup.config.js
                            getLocalIdent: (context, localIdentName, localName, options) => {
                                let interpolatedName = loaderUtils.interpolateName(
                                    context,
                                    `Playbook-[name]__${localName}`,
                                    options
                                );
                                return interpolatedName.replace('.module', '');
                            }
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
                        sourceMap: true,
                        postcssOptions: {
                            config: path.resolve(__dirname, 'postcss.config.js')
                        }
                    }
                }
            ]
        };

        const supportMJSRule = {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto",
        }

        const extraRules = [cssModulesRule, globalCssRule, supportMJSRule];

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
