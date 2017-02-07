import request from './request';

const isDevelopment = process.env.NODE_ENV === 'development';

const BASE_URL = isDevelopment ? 'http://localhost:9000/api' : 'https://question-app-backend.herokuapp.com/api';
const QUESTIONS_URL = `${BASE_URL}/questions`;
const RANDOM_QUESTION_URL = `${QUESTIONS_URL}/random`;

export const fetchRandomQuestion = () => request(RANDOM_QUESTION_URL);

export const createQuestion = (questionToCreate) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(questionToCreate)
    };
    return request(QUESTIONS_URL, options);
};
