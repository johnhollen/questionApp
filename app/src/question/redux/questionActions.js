import {
    REQUEST_RANDOM_QUESTION,
    RECEIVE_RANDOM_QUESTION,
    SHOW_OR_HIDE_ADD_QUESTION,
    CREATE_QUESTION,
    QUESTION_POSTED,
    QUESTION_CREATED,
    CLEAR_UI_STATE
} from '../../actionConstants';

export const fetchRandomQuestion = () => ({
    type: REQUEST_RANDOM_QUESTION
});

export const receiveRandomQuestion = (data) => ({
    type: RECEIVE_RANDOM_QUESTION,
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
