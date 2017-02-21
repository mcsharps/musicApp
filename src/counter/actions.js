import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action-types';

const counterAction = type => size => ({
    type,
    payload: size
});


export const increment = counterAction(INCREMENT_COUNTER);

export const decrement = counterAction(DECREMENT_COUNTER);
