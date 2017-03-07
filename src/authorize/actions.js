import {
    GET_BEARER_TOKEN, GET_BEARER_TOKEN_FUFILLED } from './action-types';

export const getBearerToken = payload => ({
    type: GET_BEARER_TOKEN,
    payload
});

export const getBearerTokenFufilled = payload => ({
    type: GET_BEARER_TOKEN_FUFILLED,
    payload
});
