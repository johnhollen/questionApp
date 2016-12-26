import {REQUEST_RANDOM_QUESTION, RECEIVE_RANDOM_QUESTION} from '../../constants';

export const fetchRandomQuestion = () => ({
    type: REQUEST_RANDOM_QUESTION
});

export const receiveRandomQuestion = (data) => ({
    type: RECEIVE_RANDOM_QUESTION,
    payload: data
});
