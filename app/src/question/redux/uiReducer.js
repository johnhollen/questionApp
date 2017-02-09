import {combineReducers} from 'redux';
import {
    SHOW_OR_HIDE_ADD_QUESTION,
    QUESTION_POSTED,
    QUESTION_CREATED,
    CLEAR_UI_STATE
} from '../../actionConstants';
import {CREATING, LOADING, CREATED} from '../AddQuestion';

const INITIAL_ADD_QUESTION_STATE = {
    visible: false,
    viewMode: CREATING,
    message: ''
};

function addQuestion(state = INITIAL_ADD_QUESTION_STATE, action) {
    const {type, payload} = action;
    switch (type) {
        case SHOW_OR_HIDE_ADD_QUESTION:
            return {
                ...state,
                visible: payload.isShowing
            };
        case QUESTION_POSTED:
            return {
                ...state,
                viewMode: LOADING
            };
        case QUESTION_CREATED:
            return {
                ...state,
                viewMode: CREATED
            };
        case CLEAR_UI_STATE:
            return INITIAL_ADD_QUESTION_STATE;
        default:
            return state;
    }
}

export default combineReducers({
    addQuestion
});
