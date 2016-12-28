import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {AsyncStorage} from 'react-native';
import {CHECK_FOR_USER} from '../actionConstants';
import {storeUser} from './userActions';

const STORAGE_KEY = 'userId';
const delayAmount = 1700;

// Cred to http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const generateUserId = () => {
    const randomize = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return randomize() + randomize() + '-' + randomize() + '-' + randomize() + '-' +
        randomize() + '-' + randomize() + randomize() + randomize();
};

function* getUserFlow() {
    const userId = yield call(AsyncStorage.getItem, STORAGE_KEY);

    if (!userId) {
        const newUserId = yield call(generateUserId);
        yield call(AsyncStorage.setItem, STORAGE_KEY, newUserId);
        yield delay(delayAmount);
        yield put(storeUser(newUserId));
        return;
    }

    yield delay(delayAmount);
    yield put(storeUser(userId));
}

export default function* userSaga() {
    yield fork(takeLatest, CHECK_FOR_USER, getUserFlow);
}
