import authReducer from './authReduces';
import blogReducer from './blogReduces';

// combine reducer
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer
});

export default rootReducer;