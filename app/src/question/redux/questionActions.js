import {
    REQUEST_RANDOM_QUESTION,
    RECEIVE_RANDOM_QUESTION,
    SHOW_OR_HIDE_ADD_QUESTION
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
