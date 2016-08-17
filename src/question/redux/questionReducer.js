import {combineReducers} from 'redux';
import {REQUEST_RANDOM_QUESTION, RECEIVE_RANDOM_QUESTION} from '../../constants'; 

const INITIAL_LOADING_STATE = {
    loading: false
};

function loadingStatus(state = INITIAL_LOADING_STATE, action) {
    const {type} = action;
    switch(type) {
        case REQUEST_RANDOM_QUESTION:
            return {loading: true};
        case RECEIVE_RANDOM_QUESTION:
            return {loading: false};
        default:
            return state;
    }
}

function randomQuestionData(state = {}, action) {
    const {type, payload} = action;
    switch(type) {
        case RECEIVE_RANDOM_QUESTION:
            return payload;
        default:
            return state;
    }
}

export default combineReducers({
    loadingStatus,
    data: randomQuestionData
});
