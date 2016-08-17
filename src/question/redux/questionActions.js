import questionApi from '../../api/questionAPI';
import createFetchActions from '../../api/createFetchActions';
import {REQUEST_RANDOM_QUESTION, RECEIVE_RANDOM_QUESTION} from '../../constants';

export const fetchRandomQuestion = createFetchActions({
    apiCall: questionApi.random,
    requestKey: REQUEST_RANDOM_QUESTION,
    receiveKey: RECEIVE_RANDOM_QUESTION
});