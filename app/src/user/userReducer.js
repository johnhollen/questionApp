import {STORE_USER} from '../actionConstants';

function user(state = null, action) {
    const {type, payload} = action;
    switch (type) {
        case STORE_USER:
            return payload;
        default:
            return state;
    }
}

export default user;
