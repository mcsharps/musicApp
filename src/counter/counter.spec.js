import test from 'ava';


import { increment } from './actions';
import reducer from './reducers';


test('is initially zero', t => {
    const state = reducer(undefined, {});

    t.is(state, 0);
});


test('increments by one as default', t => {
    let state = reducer(undefined, {});

    t.is(state, 0);

    state = reducer(state, increment());
    t.is(state, 1);

    state = reducer(state, increment());
    t.is(state, 2);
});


test('increments by specified value', t => {
    let state = reducer(undefined, {});

    t.is(state, 0);

    state = reducer(state, increment(7));
    t.is(state, 7);

    state = reducer(state, increment(8));
    t.is(state, 15);
});
