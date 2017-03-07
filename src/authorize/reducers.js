import { GET_MUSIC_LIBRARY, GET_MUSIC_LIBRARY_FUFILLED,
    GET_BEARER_TOKEN, GET_BEARER_TOKEN_FUFILLED } from './action-types';
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
    case GET_MUSIC_LIBRARY:
        return state;
    case GET_MUSIC_LIBRARY_FUFILLED:
        return { ...state,
            payload : action.payload };
    case GET_BEARER_TOKEN:
        return { ...state,
            payload : action.payload };
    case GET_BEARER_TOKEN_FUFILLED:
        return { ...state,
            bearer: action.payload };
    default:
        return state;
    }
}

// // later...
// dispatch(fetchUser('torvalds'));

// GET  https://api.discogs.com/users/{username}/collection/folders/0/releases
