import request from './request';

console.log('Using Environment >>', process.env.NODE_ENV);

const isDevelopment = process.env.NODE_ENV === 'development';

const BASE_URL = isDevelopment ? 'http://localhost:9000/api' : '';
const RANDOM_QUESTION_URL = `${BASE_URL}/questions/random`;

export const fetchRandomQuestion = () => request(RANDOM_QUESTION_URL);
