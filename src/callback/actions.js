import { GET_CALLBACK_TOKEN, GET_CALLBACK_TOKEN_FUFILLED } from './action-types';

export const getCallbackToken = () => ({
    type: GET_CALLBACK_TOKEN
});

export const getCallbackTokenFufilled = payload => ({
    type: GET_CALLBACK_TOKEN_FUFILLED,
    payload
});
