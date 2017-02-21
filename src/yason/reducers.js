import { TOGGLE_YASON } from './action-types';


export default function reducer (state = false, action) {
    if (action.type !== TOGGLE_YASON) {
        return state;
    }

    return !state;
}
