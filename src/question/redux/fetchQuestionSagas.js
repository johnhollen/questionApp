import {fork, call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_RANDOM_QUESTION} from '../../constants';
import {fetchRandomQuestion} from '../../api/questionAPI';
import {receiveRandomQuestion} from './questionActions';

function* randomQuestionFetchFlow() {
    let data;
    try {
        data = yield call(fetchRandomQuestion);
    } catch (error) {
        console.log(error);
        return;
    }
    yield put(receiveRandomQuestion(data));
}

export default function* fetchQuestionSagas() {
    yield fork(takeLatest, REQUEST_RANDOM_QUESTION, randomQuestionFetchFlow)
}
