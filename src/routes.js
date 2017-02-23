import App from './app';
import Counter from './counter';
import Yason from './yason';
import Music from './music';
import Callback from './callback';

export const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: Music
    },
    childRoutes: [
        {
            path: 'counter',
            component: Counter
        },
        {
            path: 'yason',
            component: Yason
        },
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
