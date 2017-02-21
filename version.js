/* eslint-env node */
/* eslint no-console:0 */

const moment = require('moment'),
    compact = require('lodash/compact'),
    GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();


var gitVersionStamp;

try {
    gitVersionStamp = gitRevisionPlugin.version();
} catch (e) {

}


console.log(compact([
    process.env.npm_package_version,
    moment().format(),
    gitVersionStamp,
    process.env.NODE_ENV
]).join('-'));
