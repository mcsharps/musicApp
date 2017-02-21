import 'bootstrap/dist/css/bootstrap.min.css';
import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'rxjs';

// import { getMusicLibrary } from './music/actions';
import { routes } from './routes';
import { configureStore } from './store';
import { getConfig } from './config/config-service';
import './global.post.css';


getConfig()
    .catch(() => null)
    .then(config => {
        const preloadedState = {
            config
        };

        const store = configureStore(preloadedState);

        // store.dispatch(getMusicLibrary());

        const history = syncHistoryWithStore(browserHistory, store);

        render(
            <Provider store={store}>
                <Router history={history} routes={routes}>
                </Router>
            </Provider>,
            document.querySelector('#app')
        );
    });
