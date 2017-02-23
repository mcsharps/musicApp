const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    // parser: 'babel-eslint',
    env: {
        browser: true
    },
    extends: [
        'eslint:all', // or easy mode: 'eslint:recommended'
        'plugin:ava/recommended',
        'plugin:react/recommended' // or hard mode: 'plugin:react/all'
    ],
    plugins:   [
        'ava',
        'react'
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            'jsx': true,
            'spread': true,
            'experimentalObjectRestSpread': true
        }
    },
    globals: {
        'process': true // we use 'babel-plugin-transform-inline-environment-variables'
    },
    // if 'rules' section gets too large, consider switching to 'eslint:recommended'
    rules: {
        'no-unused-expressions': 0,
        'no-negated-condition': 0,
        'arrow-parens': 0,
        'class-methods-use-this': 0, // HMR means we can't use React pure functional components
        'dot-location': 0,
        'func-names': 0,
        'func-style': 0, // requires assigning func to a const to avoid hoisting; this makes debugging harder (unless you duplicate func name)
        'id-length': 0,
        'init-declarations': 0, // separate rule for use before init
        'key-spacing': 0,
        'max-len': [2, { code: 120, tabWidth: 4 }], // default: { code: 80, ... }
        'multiline-ternary': 0,
        'no-console': 0,
        'comma-dangle': 0,
        'no-debugger': isDev ? 1 : 2,
        'no-extra-parens': 0,
        'no-magic-numbers': 0, // rule is too extreme: '0', '1', and param defaults count as 'magic numbers'
        'no-plusplus': 0,
        'no-process-env': 0,
        'no-ternary': 0,
        'no-undefined': 0,
        'no-underscore-dangle': 0, // pseudo private methods (this._foo) match this rule
        'no-warning-comments': 1,
        'object-curly-spacing': [2, 'always'],
        'object-curly-newline': 0,
        'one-var': 0,
        'padded-blocks': 0,
        'quote-props': 0,
        'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        'require-jsdoc': 0,
        'sort-keys': 0,
        'sort-vars': 0,
        'sort-imports': 0,
        // 'comma-dangle': ['error', {
        //     arrays: 'always-multiline',
        //     objects: 'always-multiline',
        //     imports: 'always-multiline',
        //     exports: 'always-multiline',
        //     functions: 'only-multiline'
        // }]
    }
};
