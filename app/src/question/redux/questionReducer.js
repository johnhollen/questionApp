import {combineReducers} from 'redux';
import {
    REQUEST_RANDOM_QUESTION,
    RECEIVE_RANDOM_QUESTION,
    REQUEST_MY_QUESTIONS,
    RECEIVE_MY_QUESTIONS
} from '../../actionConstants';

const INITIAL_RANDOM_QUESTION_LOADING_STATE = {
    randomQuestionIsLoading: true
};

function randomQuestionLoadingStatus(state = INITIAL_RANDOM_QUESTION_LOADING_STATE, action) {
    const {type} = action;
    switch (type) {
        case REQUEST_RANDOM_QUESTION:
            return {randomQuestionIsLoading: true};
        case RECEIVE_RANDOM_QUESTION:
            return {randomQuestionIsLoading: false};
        default:
            return state;
    }
}

function randomQuestionData(state = {}, action) {
    const {type, payload} = action;
    switch (type) {
        case RECEIVE_RANDOM_QUESTION:
            return payload;
        default:
            return state;
    }
}

const INITIAL_MY_QUESTIONS_LOADING_STATE = {
    myQuestionsAreLoading: true
};

function myQuestionsLoadingStatus(state = INITIAL_MY_QUESTIONS_LOADING_STATE, action) {
    const {type} = action;
    switch (type) {
        case REQUEST_MY_QUESTIONS:
            return {myQuestionsAreLoading: true};
        case RECEIVE_MY_QUESTIONS:
            return {myQuestionsAreLoading: false};
        default:
            return state;
    }
}

function myQuestionsData(state = [], action) {
    const {type, payload} = action;
    switch (type) {
        case RECEIVE_MY_QUESTIONS:
            return payload;
        default:
            return state;
    }
}

export const randomQuestion = combineReducers({
    loadingStatus: randomQuestionLoadingStatus,
    data: randomQuestionData
});

export const myQuestions = combineReducers({
    loadingStatus: myQuestionsLoadingStatus,
    data: myQuestionsData
});
