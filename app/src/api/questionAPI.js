import request from './request';

const isDevelopment = process.env.NODE_ENV === 'development';

const BASE_URL = isDevelopment ? 'http://localhost:9000/api' : 'https://question-app-backend.herokuapp.com/api';
const QUESTIONS_URL = `${BASE_URL}/questions`;
const RANDOM_QUESTION_URL = `${QUESTIONS_URL}/random`;
const MY_QUESTIONS_URL = `${QUESTIONS_URL}/user`;

export const fetchRandomQuestion = () => request(RANDOM_QUESTION_URL);

export const fetchMyQuestions = (userId) => request(`${MY_QUESTIONS_URL}/${userId}`);

export const createQuestion = (questionToCreate) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(questionToCreate)
    };
    return request(QUESTIONS_URL, options);
};
