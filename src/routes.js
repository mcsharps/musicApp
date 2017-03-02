import App from './app';
import Music from './music';
import Callback from './callback';
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
        },
        {
            path: 'callback',
            component: Callback,
        }
    ]
};
