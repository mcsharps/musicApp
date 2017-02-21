/* eslint-env node */
/* eslint-disable prefer-template, no-process-env, global-require */


const _ = require('lodash');


const getConfig = function (isProd) {
    return {
        parser: require('postcss-comment'),
        plugins: _.compact([
            // inline @imports (for custom-properties, only inlines the ones actually used)
            require('postcss-import'),

            require('postcss-mixins'),

            // nested selectors: `.parent-class { .child-class-1 { ... }, child-class-2 { ... }}`
            require('postcss-nested'),

            // variable / property plugins must be specified in a specific order
            // see: https://www.npmjs.com/package/postcss-media-variables
            require('postcss-media-variables'),

            // variables: `:root { --white: #fff; }` and `background-color: var(--white);`
            require('postcss-custom-properties')(),

            require('postcss-color-function'),

            // second include of this is intentional
            // see: https://www.npmjs.com/package/postcss-media-variables
            require('postcss-media-variables'),

            // automatically add vendor prefixes where needed
            require('autoprefixer')({browsers: ['last 2 version', 'IE 10']}),

            // minification
            isProd && require('cssnano')
        ])
    };
};

module.exports = {
    dev:  getConfig(false),
    prod: getConfig(true)
};
