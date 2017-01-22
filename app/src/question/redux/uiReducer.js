import {combineReducers} from 'redux';
import {SHOW_OR_HIDE_ADD_QUESTION} from '../../actionConstants';
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
            }
        default:
            return state;
    }
}

export default combineReducers({
    addQuestion
});
