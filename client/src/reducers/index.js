import { combineReducers }from 'redux';
import authRedurer from './authReducer';

export default combineReducers({
    auth: authRedurer
});