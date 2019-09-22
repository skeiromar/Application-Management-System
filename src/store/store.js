import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

// we export a function that creates out store with a few things. 
const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        // Here is where we pass logger as well. 
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;