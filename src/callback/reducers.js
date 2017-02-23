import { GET_CALLBACK_TOKEN_FUFILLED, GET_CALLBACK_TOKEN } from './action-types';
import 'rxjs/observable/dom/ajax';
import 'rxjs/add/observable/of';

/* eslint no-console: 0 */

const initialState = {
    payload: undefined,
    bearer: undefined
};

export default function reducer (state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case GET_CALLBACK_TOKEN:
        return state;
    case GET_CALLBACK_TOKEN_FUFILLED:
        return { ...state,
            payload : action.payload };
    default:
        return state;
    }
}

// // later...
// dispatch(fetchUser('torvalds'));

// GET  https://api.discogs.com/users/{username}/collection/folders/0/releases
