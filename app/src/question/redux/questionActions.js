import {
    REQUEST_RANDOM_QUESTION,
    RECEIVE_RANDOM_QUESTION,
    SHOW_OR_HIDE_ADD_QUESTION,
    CREATE_QUESTION,
    QUESTION_POSTED,
    QUESTION_CREATED,
    CLEAR_UI_STATE,
    REQUEST_MY_QUESTIONS,
    RECEIVE_MY_QUESTIONS
} from '../../actionConstants';

export const fetchRandomQuestion = () => ({
    type: REQUEST_RANDOM_QUESTION
});

export const receiveRandomQuestion = (data) => ({
    type: RECEIVE_RANDOM_QUESTION,
    payload: data
});

export const fetchMyQuestions = () => ({
    type: REQUEST_MY_QUESTIONS
});

export const receiveMyQuestions = (data) => ({
    type: RECEIVE_MY_QUESTIONS,
    payload: data
});

export const showOrHideAddQuestionModal = (isShowing) => ({
    type: SHOW_OR_HIDE_ADD_QUESTION,
    payload: {
        isShowing
    }
});

export const createQuestion = (inputData) => ({
    type: CREATE_QUESTION,
    payload: inputData
});

export const postQuestion = () => ({
    type: QUESTION_POSTED
});

export const questionCreated = () => ({
    type: QUESTION_CREATED
});

export const clearUIState = () => ({
    type: CLEAR_UI_STATE
});
