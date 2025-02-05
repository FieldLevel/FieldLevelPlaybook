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
            // The react-dom + react resolutions here seem to be necessary for proper function. At the time of implementation,
            // there were a few mentions of this issue in Storybook's GitHub repo, and it seemed to be unresolved, but none of the issues matched
            // exactly what we're seeing so there's no appropriate link to provide. It ultimately seems to be related to the fact that
            // Storybook renders its "preview" (iframe) using react, and the version being used there can be out of alignment with either the MDX library
            // or your local project (or both). When this happens, multiple versions of React are loaded into the DOM and various side effects ensue.
            // Anyway, let's just keep an eye on this!
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
