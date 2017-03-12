import App from './app';
import Music from './music';
import Authorize from './authorize';

export const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: Authorize
    },
    childRoutes: [
        {
            path: 'music',
            component: Music
        }
    ]
};
