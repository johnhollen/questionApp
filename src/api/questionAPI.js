import request from './request';

const BASE_URL = 'http://192.168.99.100/api';
const RANDOM_QUESTION_URL = `${BASE_URL}/questions/random`;

const BASE_OPTIONS = {
    method: 'GET'
};

export const fetchRandomQuestion = () => request(RANDOM_QUESTION_URL);
