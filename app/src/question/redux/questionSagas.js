import {delay} from 'redux-saga';
import {fork, call, put, takeLatest, select} from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import {REQUEST_RANDOM_QUESTION, CREATE_QUESTION} from '../../actionConstants';
import {fetchRandomQuestion, createQuestion} from '../../api/questionAPI';
import {
    receiveRandomQuestion,
    postQuestion,
    questionCreated,
    clearUIState
} from './questionActions';
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

    yield put(postQuestion());
    try {
        yield call(createQuestion, requestBody); // TODO: Do something with the response
    } catch (error) {
        // TODO: error handling
        return;
    }

    yield put(questionCreated());
    yield call(delay, 2000);
    yield put(clearUIState());
}

export default function* fetchQuestionSagas() {
    yield fork(takeLatest, REQUEST_RANDOM_QUESTION, randomQuestionFetchFlow);
    yield fork(takeLatest, CREATE_QUESTION, createQuestionFlow);
}
