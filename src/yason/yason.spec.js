import test from 'ava';


import { toggle } from './actions';
import reducer from './reducers';


test('is initially disabled', t => {
    const state = reducer(undefined, {});

    t.false(state);
});


test('toggle action toggles state', t => {
    let state = reducer(undefined, {});

    t.false(state);

    state = reducer(state, toggle());
    t.true(state);

    state = reducer(state, toggle());
    t.false(state);
});
