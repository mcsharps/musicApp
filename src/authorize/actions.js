import {
    GET_BEARER_TOKEN, GET_BEARER_TOKEN_FUFILLED } from './action-types';

export const getBearerToken = () => ({
    type: GET_BEARER_TOKEN
});

export const getBearerTokenFufilled = payload => ({
    type: GET_BEARER_TOKEN_FUFILLED,
    payload
});
