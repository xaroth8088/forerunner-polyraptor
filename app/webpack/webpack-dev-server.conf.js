const webpack = require('webpack');
const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/poll?1000',
        './server/index'
    ],
    watch: true,
    target: 'node',
    module: {
        rules: [{
            test: /\.jsx?|.es6$/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, '..'),
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
                        'transform-class-properties'
                    ]
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6', '.css'],
        modules: [
            path.resolve(__dirname, '../client'),
            'node_modules'
        ],
        symlinks: false
    },
    plugins: [
        new StartServerPlugin(
            {
                name: 'server.js',
                nodeArgs: ['--inspect=0.0.0.0:9230']
            }
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../build/server'),
        filename: 'server.js'
    }
};
