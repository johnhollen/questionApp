import {combineReducers} from 'redux';
import randomQuestion from './question/redux/questionReducer';
import user from './user/userReducer';

export default combineReducers({
    randomQuestion,
    user
});
