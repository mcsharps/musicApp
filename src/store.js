import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import identity from 'lodash/identity';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
// import { rootEpic } from './modules/root';
// import logger from 'redux-logger';
import counter from './counter/reducers';
import yasonified from './yason/reducers';
import albums from './music/reducers';
import { browserHistory } from 'react-router';
import { getMusicLibrary, getBearerToken } from './music/epics';
const rootReducer = combineReducers({
    // set with preloaded state
    config: s => s || null,

    counter,
    yasonified,
    albums,
    routing: routerReducer
});

export const rootEpic = combineEpics(
  getMusicLibrary,
  getBearerToken
);
const epicMiddleware = createEpicMiddleware(rootEpic);

// middleware for these redux devtools (if present):
//  https://github.com/zalmoxisus/redux-devtools-extension
const getDevToolsExtension = () => {
    if (typeof window === 'undefined') {
        return identity;
    }

    const tools = window.devToolsExtension;

    return tools ? tools() : identity;
};


export const configureStore = (preloadedState = null) => {
    const middleware = compose(
        // placeholder - custom middleware here
        applyMiddleware(epicMiddleware, routerMiddleware(browserHistory)),
        // rootEpic
        getDevToolsExtension()
    );

    let store;

    if (preloadedState) {
        store = createStore(
            rootReducer,
            preloadedState,
            middleware
        );
    } else {
        store = createStore(
            rootReducer,
            middleware
        );
    }

    return store;
};
