const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaderUtils = require('loader-utils');
const getLocalIdentForCSSModules = require('./getLocalIdentForCSSModules');

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'amd'
        }
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            '@fieldlevel/playbook': path.resolve(__dirname, './src')
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false, // All url() statements in our CSS files are referencing their public/published file locations, so we don't want them locally resolved
                            modules: {
                                getLocalIdent: (context, localIdentName, localName, options) =>
                                    getLocalIdentForCSSModules(
                                        context,
                                        localIdentName,
                                        localName,
                                        options,
                                        loaderUtils
                                    ),
                                auto: (resourcePath) => resourcePath.endsWith('.module.css')
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    externals: {
        '@radix-ui/react-dialog': {
            amd: '@radix-ui/react-dialog',
            commonjs: '@radix-ui/react-dialog'
        },
        '@radix-ui/react-visually-hidden': {
            amd: '@radix-ui/react-visually-hidden',
            commonjs: '@radix-ui/react-visually-hidden'
        },
        classnames: {
            amd: 'classnames',
            commonjs: 'classnames'
        },
        react: {
            amd: 'react',
            commonjs: 'react'
        },
        'react-dom': {
            amd: 'react-dom',
            commonjs: 'react-dom'
        },
        'react-intersection-observer': {
            amd: 'react-intersection-observer',
            commonjs: 'react-intersection-observer'
        }
    },
    plugins: [new MiniCssExtractPlugin()]
};
