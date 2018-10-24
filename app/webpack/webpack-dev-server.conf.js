const webpack = require('webpack');
const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        'webpack/hot/poll?1000',
        './server/index'
    ],
    watch: true,
    target: 'node',
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
                            'react',
                            [
                                'env',
                                {
                                    targets: {
                                        node: 'current'
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
                use: [{
                    loader: 'null-loader',
                }],
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
        new webpack.HotModuleReplacementPlugin(),
        new StartServerPlugin(
            {
                name: 'server.js',
                nodeArgs: ['--inspect=0.0.0.0:9230']
            }
        ),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        }),
    ],
    output: {
        publicPath: '../build/server',
        path: path.resolve(__dirname, '../build/server'),
        filename: 'server.js'
    },
};
