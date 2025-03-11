const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaderUtils = require('loader-utils');

const getLocalIdentForCSSModules = require('./getLocalIdentForCSSModules');

/**
 * A few words on our build process...
 *
 * Why Webpack?
 *
 * While attempting to upgrade from Storybook 6.5 -> 8.5 and React 17 -> 18, we ran into some compatibility issues
 * with CSSModules, React, and our previous configuration with Rollup that itself hadn't been updated in quite
 * some time. Upgrading Rollup wasn't going to be straightforward, and a look around the ecosystem suggested
 * that it was no longer considered an optimal choice for libraries, so continued investment in that direction
 * wasn't particularly attractive. Since we already needed to maintain a Webpack config for Storybook, we decided
 * to keep things simple and reduce configuration overhead.
 *
 * Efficiency / Tree-Shaking
 *
 * Webpack is definitely not the fastest build system out there, and while it's not much of an issue for us given
 * Playbook's size, it's a known limitation for the time being. We're also not currently optimized for
 * Tree-Shaking (our Rollup config had a similar shortcoming) and using 'AMD' as a library target doesn't assist
 * with that concern. These are both areas that could be improved either through Webpack or alternative build tools,
 * but we're not really going to see much of an organizational advantage to doing either of those as long as Playbook
 * continues to be used (mostly) in-full by a very small number of projects. If we seek to improve this, we should
 * also consider the long-term direction of Playbook, and whether its standalone status is the best fit for the project.
 *
 * CSS Configuration
 *
 * The library is currently configured to build all of the CSS needed to use the library in one 'index.css' file that's
 * intended to be imported with the accompanying 'index.js' file. However, if the consuming project uses Tailwind
 * already, this will generally result in duplicate tailwind classnames being included in that project's
 * CSS output (this will happen so long as any tailwind classes used by Playbook are also used by the consuming project),
 * which can actually break Tailwind specificity! To account for that, we also export independent CSS files
 * representing both the CSS Modules + Tailwind styles, so the consuming project can manage accordingly.
 */

module.exports = {
    entry: {
        index: './src/index.ts',
        // This 'lib' entry mainly exists to separate CSS Modules + Tailwind styles
        lib: './src/lib.ts'
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
                use: {
                    loader: 'ts-loader',
                    options: {
                        // We use tsc to emit types via a build script
                        transpileOnly: true
                    }
                },
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
    externals: [
        '@radix-ui/react-dialog',
        '@radix-ui/react-visually-hidden',
        'classnames',
        'react',
        'react-dom',
        'react-intersection-observer'
    ],
    plugins: [new MiniCssExtractPlugin()]
};
