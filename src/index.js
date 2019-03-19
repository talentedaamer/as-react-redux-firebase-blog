import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// setup redux
import { createStore, applyMiddleware, compose } from 'redux';
// root reducer
import rootReducer from './store/reducers/rootReducer';
// provider from react-redux
import { Provider } from 'react-redux';
// thunk middleware
import thunk from 'redux-thunk';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore( rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({
            getFirebase,
            getFirestore
        })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, { attachAuthIsReady: true})
    )
);

store.firebaseAuthIsReady.then( () => {
    ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
});

if ( module.hot ) {
    module.hot.accept();
}
