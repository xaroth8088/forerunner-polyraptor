const webpack = require('webpack');
const path = require('path');

const autoprefixer = require('autoprefixer');
const browserslist = require('./browserslist.js');

const autoprefixerPlugin = autoprefixer({
    cascade: false,
    browsers: browserslist,
});


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        'main/index'
    ],
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, '..'),
                    path.resolve(__dirname, '../node_modules/@Wikia/react-design-system'),
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: browserslist
                                    },
                                    modules: false
                                }
                            ]
                        ],
                        plugins: [
                            'syntax-dynamic-import',
                            'transform-object-rest-spread',
                            'transform-class-properties',
                            'react-hot-loader/babel'
                        ]
                    }
                }]
            },
            {
                test: /\.s?css$/,
                include: [
                    path.resolve(__dirname, '../client'),
                    path.resolve(__dirname, '../node_modules/@wikia'),
                ],
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: () => [
                                autoprefixerPlugin,
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, '../client'),
            'node_modules'
        ],
        symlinks: false
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('client')
            }
        }),
    ],
    output: {
        publicPath: '/public/',
        filename: 'client.js'
    }
};

module.exports.serve = {
    dev: {
        publicPath: '/public/',
    },
    host: '0.0.0.0',
    port: 3001,
    hot: {
        host: '0.0.0.0',
        port: 3002,
        stats: {
            colors: true,
            cached: false,
            cachedAssets: false,
            depth: true,
            entrypoints: true,
        },
    }
};
