import {spawn} from 'redux-saga/effects';
import questionSagas from './question/redux/questionSagas';
import userSaga from './user/userSaga';

export default function* rootSaga() {
    yield spawn(questionSagas);
    yield spawn(userSaga);
}
