# react-starter
This is a simple build for a new React web app. It can be used as a starting for other web apps.

This was forked from [alicoding/react-webpack-babel](https://github.com/alicoding/react-webpack-babel). 

## Getting Started

1. Clone this repo
2. Delete the .git folder
3. `git init`
4. Update the [README](./README.md)
5. Update the [package.json](./package.json)
6. `yarn install` or `npm i`

## Technologies

- [x] React
- [x] Redux (with dev tools middleware and React bindings)
- [x] React-Router (with Redux bindings)
- [x] Babel (ES2015, stage-2 presets, React, and transform-inline-environment-variables)
- [x] Browser Polyfills (fetch, babel-polyfill for ES6)
- [x] Hot Module Reloading for js / jsx / css (only for regular React components, pure functional components will require a browser refresh)
- [x] Webpack
- [x] PostCSS (autoprefixer and various plugins, mostly targeting future CSS syntax)
- [x] ESLint
- [x] Git hooks (test and lint before committing)


## Developing

After following the Getting Started instructions, run:

```
> $ npm start
```


The app should automatically launch in your browser. If you use a different dev server,
the default / 404 route should be configured to `index.html`.

Eslint runs as a webpack preLoader. This means webpack lints the `*.js` and `*.jsx`
files prior to transpiling them with Babel.

Run tests with `npm test`.

This project uses [husky](https://www.npmjs.com/package/husky) to add githooks to block
commits that don't pass `npm run validate`.

Before working on a feature, consult our [versioning doc](./docs/versioning.md).

## Production Build

```
> $ npm run build
```

For details see the [deploying doc](./docs/deploying.md)
