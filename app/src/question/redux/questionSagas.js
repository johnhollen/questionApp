import {fork, call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_RANDOM_QUESTION, CREATE_QUESTION} from '../../actionConstants';
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

function* createQuestionFlow(action) {
    console.log('ACTION >>', action);
}

export default function* fetchQuestionSagas() {
    yield fork(takeLatest, REQUEST_RANDOM_QUESTION, randomQuestionFetchFlow);
    yield fork(takeLatest, CREATE_QUESTION, createQuestionFlow);
}
