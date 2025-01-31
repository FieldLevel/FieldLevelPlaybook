import { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import loaderUtils from 'loader-utils';
import remarkGfm from 'remark-gfm';

import getLocalIdentForCSSModules from '../getLocalIdentForCSSModules';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            legacyRootApi: false,
            strictMode: true
        }
    },
    stories: ['../bullpen/*.stories.ts', '../docs/**/*.mdx', '../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    staticDirs: ['../static'],
    typescript: {
        reactDocgen: 'react-docgen-typescript'
    },
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                docs: false // This is configured via @storybook/addon-docs directly below, so we set to false
            }
        },
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm]
                    }
                }
            }
        },
        '@storybook/addon-webpack5-compiler-babel',
        '@chromatic-com/storybook'
    ],

    core: {
        disableTelemetry: true
    },
    webpackFinal: async (config, { configType }) => {
        const isDev = configType === 'DEVELOPMENT';

        config.resolve.alias = {
            '@fieldlevel/playbook': path.resolve(__dirname, '..', 'src'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
            react: path.resolve(__dirname, '../node_modules/react')
        };

        // Remove any existing rules for styles
        config.module.rules = config.module.rules.filter((rule) => !rule?.test?.test?.('.css'));

        config.module.rules.push({
            test: /\.css$/,
            sideEffects: true,
            use: [
                isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            auto: (path) => path.endsWith('.module.css'),
                            getLocalIdent: (context, localIdentName, localName, options) =>
                                getLocalIdentForCSSModules(context, localIdentName, localName, options, loaderUtils)
                        }
                    }
                },
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
        });

        config.plugins = [...config.plugins, ...(isDev ? [] : [new MiniCssExtractPlugin()])];
        return config;
    }
};

export default config;
