import { combineReducers }from 'redux';
import { reducer as reduxForm} from 'redux-form';
import authRedurer from './authReducer';

export default combineReducers({
    auth: authRedurer,
    form: reduxForm
});