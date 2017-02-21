/* eslint-env node */
/* eslint-disable prefer-template, no-process-env, global-require */

const moment = require('moment'),
    GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();


const preLoaders = [
    {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        loaders: ['eslint-loader']
    }
];

const loaders = [
    {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        loaders: ['react-hot']
    },
    {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel'
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'file'
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url?prefix=font/&limit=5000'
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
    },
    {
        test: /\.gif/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
    },
    {
        test: /\.jpg/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
    },
    {
        test: /\.png/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
    },
    {
        test: /\.ico/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
    }
];


var buildHash = null;

try {
    buildHash = gitRevisionPlugin.commithash();
} catch (e) {
    console.log('Failed to get git hash. Maybe you\'re not using git or don\'t have any commits.');
}


const html = {
    template: './src/template.html',
    title: process.env.npm_package_description,
    buildDate: moment().format(),
    buildHash: buildHash,
    buildVersion: process.env.BUILD_VERSION || process.env.npm_package_version,
    favicon: './src/favicon.ico'
};

module.exports = {
    html,
    preLoaders,
    loaders
};
