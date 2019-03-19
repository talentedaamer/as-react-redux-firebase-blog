import authReducer from './authReduces';
import blogReducer from './blogReduces';

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

// combine reducer
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;