import {spawn} from 'redux-saga/effects';
import fetchQuestionSagas from './question/redux/fetchQuestionSagas';

export default function* rootSaga() {
    yield spawn(fetchQuestionSagas);
}
