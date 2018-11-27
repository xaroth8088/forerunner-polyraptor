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
    devServer: {
        contentBase: path.resolve(__dirname, '../public/'),
        host: '0.0.0.0',
        port: 3001,
        disableHostCheck: true,
        hot: true
    },
    entry: [
        'main/index'
    ],
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, '..')
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: browserslist
                                    },
                                    modules: false
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-class-properties',
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
            'process.env': {
                BUILD_TARGET: JSON.stringify('client')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        publicPath: '/public/',
        filename: 'client.js'
    }
};
