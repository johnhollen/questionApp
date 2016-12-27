import {CHECK_FOR_USER, STORE_USER} from '../actionConstants';

export const checkForUser = () => ({
    type: CHECK_FOR_USER
});

export const storeUser = (userId) => ({
    type: STORE_USER,
    payload: userId
});
