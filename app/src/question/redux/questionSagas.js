import {fork, call, put, takeLatest, select} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import {REQUEST_RANDOM_QUESTION, CREATE_QUESTION} from '../../actionConstants';
import {fetchRandomQuestion, createQuestion} from '../../api/questionAPI';
import {receiveRandomQuestion} from './questionActions';
import {getUser} from '../../user/userSelectors';

function* randomQuestionFetchFlow() {
    let data;
    try {
        data = yield call(fetchRandomQuestion);
    } catch (error) {
        // TODO: error handling
        return;
    }
    yield put(receiveRandomQuestion(data));
}

function* createQuestionFlow(action) {
    const {payload} = action;

    if (isEmpty(payload.questionText) || isEmpty(payload.firstAnswer) || isEmpty(payload.secondAnswer)) return;
    const user = yield select(getUser);

    const requestBody = {
        question: {
            text: payload.questionText,
            owner: user,
            options: [
                {text: payload.firstAnswer},
                {text: payload.secondAnswer}
            ]
        }
    };

    let response;
    try {
        response = yield call(createQuestion, requestBody);
    } catch (error) {
        // TODO: error handling
        return;
    }
    // TODO: Dispatch appropriate action
}

export default function* fetchQuestionSagas() {
    yield fork(takeLatest, REQUEST_RANDOM_QUESTION, randomQuestionFetchFlow);
    yield fork(takeLatest, CREATE_QUESTION, createQuestionFlow);
}
