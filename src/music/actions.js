import { GET_MUSIC_LIBRARY, GET_MUSIC_LIBRARY_FUFILLED,
    GET_BEARER_TOKEN, GET_BEARER_TOKEN_FUFILLED } from './action-types';

export const getMusicLibrary = () => ({
    type: GET_MUSIC_LIBRARY
});

export const getMusicLibraryFufilled = payload => ({
    type: GET_MUSIC_LIBRARY_FUFILLED,
    payload
});

export const getBearerToken = () => ({
    type: GET_BEARER_TOKEN
});

export const getBearerTokenFufilled = payload => ({
    type: GET_BEARER_TOKEN_FUFILLED,
    payload
});
