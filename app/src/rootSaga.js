import {spawn} from 'redux-saga/effects';
import fetchQuestionSagas from './question/redux/fetchQuestionSagas';
import userSaga from './user/userSaga';

export default function* rootSaga() {
    yield spawn(fetchQuestionSagas);
    yield spawn(userSaga);
}
