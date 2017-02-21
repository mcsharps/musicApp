/* eslint-env node */
/* eslint-disable prefer-template, no-process-env, global-require */


const webpack = require('webpack'),
    path = require('path'),
    common = require('./webpack.common'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


const host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || '8888',
    devtool = process.env.WEBPACK_DEVTOOL || 'source-map';


// global css
common.loaders.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loaders: [
        'style?sourceMap',
        'css'
    ]
});

common.loaders.push({
    test:   /\.post\.css$/,
    loader: 'style-loader!css-loader!postcss-loader'
});


module.exports = {
    entry: [
        `webpack-dev-server/client?http://${host}:${port}`,
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    devtool,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: common.preLoaders,
        loaders: common.loaders
    },
    devServer: {
        contentBase: './dist',
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port,
        host
    },
    proxy: {
    "**": "http://localhost:7777"
    },
    plugins: [
        // new webpack.NoErrorsPlugin(), // (okay to disable in dev, errors still show in console)
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin(common.html)
    ],
    postcss: require('./postcss.config').dev
};
