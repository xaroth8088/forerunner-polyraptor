const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        'index'
    ],
    target: 'web',
    module: {
        rules: [{
            test: /\.js?|.es6$/,
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
                                    browsers: ['last 2 versions']
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('client')
            }
        }),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 3001,
        historyApiFallback: true,
        hot: true
    },
    output: {
        publicPath: '/public/',
        filename: 'client.js'
    }
};
