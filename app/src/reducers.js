import {combineReducers} from 'redux';
import randomQuestion from './question/redux/questionReducer';
import user from './user/userReducer';
import UI from './question/redux/uiReducer';

export default combineReducers({
    randomQuestion,
    user,
    UI
});
