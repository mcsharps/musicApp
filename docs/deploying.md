# Build and Deploy Process

This app is a SPA which can be deployed, independent of its backend, to any static file host.

## Build

Build the deployable artifact at `./dist` by running:
 
 ```
 NODE_ENV=production BUILD_VERSION=<build-version> npm run build
 ```
 
 Variables:
 * `NODE_ENV` - set to `production` to produce smaller builds
 * `BUILD_VERSION` - a build string hidden in the generated `index.html` for debugging, e.g. `1.0.0-4-846377a`
 

## Deploy

1. Copy release artifact to a static file host
2. Set default route to `index.html`
3. Set 404 route to `index.html` (we use html5 addresses, if this step is skipped, page refreshes will break).
4. (Optional) Consider disabling caching on `index.html`. See [caching doc](./caching.md)
