import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action-types';


export default function reducer (state = 0, action) {
    let change;

    switch (action.type) {
    case INCREMENT_COUNTER:
        change = action.payload || 1;
        break;
    case DECREMENT_COUNTER:
        change = -1 * (action.payload || 1);
        break;
    default:
        change = 0;
    }

    return state + change;
}
