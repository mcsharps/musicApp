/* eslint-env node */
/* eslint-disable prefer-template, no-process-env, global-require */


const webpack = require('webpack'),
    path = require('path'),
    common = require('./webpack.common'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackCleanupPlugin = require('webpack-cleanup-plugin');


common.loaders.push({
    test:   /\.post\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css-loader!postcss-loader')
});

// global css files
common.loaders.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css')
});


module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: common.preLoaders,
        loaders: common.loaders
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,     // eslint-disable-line camelcase
                drop_console: true,  // eslint-disable-line camelcase
                drop_debugger: true  // eslint-disable-line camelcase
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('[contenthash].css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin(common.html),
        new webpack.optimize.DedupePlugin()
    ],
    postcss: require('./postcss.config').prod
};
